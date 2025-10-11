---
title: 📚 事件基类
createTime: 2025/05/15 00:40:00
---

## 事件基类

所有事件都包含以下字段：

| 属性          | 类型                        | 说明                                     |
| ------------- | --------------------------- | ---------------------------------------- |
| selfId        | string                      | 机器人 ID                                |
| userId        | string                      | 触发事件用户 ID 同 `event.sender.userId` |
| eventId       | string                      | 事件 ID                                  |
| rawEvent      | unknown                     | 原始事件 也就是适配器上报的事件          |
| time          | number                      | 事件触发时间戳                           |
| event         | [Event](#事件类型)          | 事件类型                                 |
| subEvent      | [SubEvent](#事件子类型)     | 事件子类型                               |
| contact       | [Contact](#消息来源)        | 消息来源信息                             |
| sender        | [Sender](#消息触发者)       | 消息触发者信息                           |
| srcReply      | [SrcReply](#快速回复源函数) | 内部函数                                 |
| reply         | [Reply](#快速回复)          | 快速回复                                 |
| hasPermission | [hasPermission](#权限检查)  | 权限检查函数                             |
| bot           | [bot](#适配器实例)          |                                          |
|               |                             |                                          |
| store         | Map                         | 存储器 由开发者自行调用                  |
| logFnc        | string                      | 日志函数字符串                           |
| logText       | string                      | 日志用户字符串                           |
| isMaster      | boolean                     | 是否为机器人主人                         |
| isAdmin       | boolean                     | 是否为机器人管理员                       |
| isPrivate     | boolean                     | 是否为私聊场景                           |
| isFriend      | boolean                     | 是否为好友场景                           |
| isGroup       | boolean                     | 是否为群聊                               |
| isGuild       | boolean                     | 是否为频道                               |
| isStranger    | boolean                     | 是否为群临时会话场景                     |
| isDirect      | boolean                     | 是否为频道私信场景                       |

## 事件类型

::: tip 提示
`message_sent` 目前没有支持，待后续版本更新。
:::

| 事件类型     | 说明            |
| ------------ | --------------- |
| message      | 消息事件        |
| notice       | 通知事件        |
| request      | 请求事件        |
| message_sent | Bot自身发送消息 |

## 事件子类型

- `message` 消息事件子类型：
  - `group`: 群聊
  - `friend`: 好友
  - `guild`: 频道
  - `direct`: 频道私信
  - `groupTemp`: 群临时会话

- `notice` 通知事件子类型：
  - `receiveLike`: 收到点赞
  - `friendPoke`: 好友戳一戳
  - `friendRecall`: 好友消息撤回
  - `privateFileUploaded`: 好友发送文件
  - `friendIncrease`: 好友增加
  - `friendDecrease`: 好友减少
  - `groupPoke`: 群戳一戳
  - `groupCardChanged`: 群名片变动
  - `groupMemberTitleUpdate`: 群成员头衔变动
  - `groupHighlightsChange`: 群精华消息变动
  - `groupRecall`: 群消息撤回
  - `groupMemberAdd`: 群成员增加
  - `groupMemberRemove`: 群成员减少
  - `groupAdminChanged`: 群管理员变动
  - `groupMemberBan`: 群成员禁言
  - `groupSignIn`: 群签到
  - `groupWholeBan`: 群全员禁言
  - `groupFileUploaded`: 群文件上传
  - `groupMessageReaction`: 群聊消息表情动态回应
  - `groupLuckyKing`: 群聊运气王事件
  - `groupHonorChange`: 群聊荣誉变更事件

- `request` 请求事件子类型：
  - `friendApply`: 收到添加Bot为好友请求
  - `groupApply`: 收到用户申请加入群聊请求
  - `groupInvite`: 收到邀请Bot加入群聊请求

## 消息来源

::: tip 提示
在不同的 `event(事件类型)` 下，`contact` 的值都是不同的，请根据实际情况进行使用。
:::

### friend

- `scene`: `friend`
- `peer`: 好友ID
- `name`: 好友昵称

### group

- `scene`: `group`
- `peer`: 群ID
- `name`: 群名

### guild

- `scene`: `guild`
- `peer`: 频道ID
- `name`: 频道名
- `subPeer`: 子频道ID
- `subName`: 子频道名

### direct

- `scene`: `direct`
- `peer`: 频道ID
- `name`: 频道名
- `subPeer`: 子频道ID 虚拟ID
- `subName`: 子频道名

### groupTemp

- `scene`: `groupTemp`
- `peer`: 群ID
- `name`: 群名
- `subPeer`: 发起临时会话用户ID

如果你需要构造一个 `contact` 对象，请参考以下代码

### 快速构造

```js twoslash
import { contact } from 'node-karin'

const friend = contact.friend('friend_id', '好友名称')
const group = contact.group('群ID', '群名称')
const guild = contact.guild('频道ID', '频道名称', '子频道ID', '子频道名称')
const direct = contact.direct('频道ID', '子频道ID', '频道名称', '子频道名称')
const groupTemp = contact.groupTemp('群ID', '发起临时会话用户ID', '群名称')
```

## 消息触发者

::: tip 提示
`sender`在不同的 `event(事件类型)` 下，`sender` 的值都是不同的，请根据实际情况进行使用。
:::

### friend

| 属性   | 类型   | 属性是否100%存在 | 说明       |
| ------ | ------ | ---------------- | ---------- |
| userId | string | ✅                | 用户ID     |
| nick   | string | ✅                | 昵称       |
| name   | string | ✅                | 同 `nick`  |
| sex    | string |                  | 性别       |
| age    | number |                  | 年龄       |
| uid    | string |                  | QQ场景专属 |
| uin    | number |                  | QQ场景专属 |

### group

| 属性   | 类型                                        | 属性是否100%存在 | 说明       |
| ------ | ------------------------------------------- | ---------------- | ---------- |
| userId | string                                      | ✅                | 用户ID     |
| nick   | string                                      | ✅                | 昵称       |
| name   | string                                      | ✅                | 同 `nick`  |
| role   | `owner` \| `admin` \| `member` \| `unknown` | ✅                | 群成员身份 |
| card   | string                                      |                  | 群名片     |
| area   | string                                      |                  | 地区       |
| level  | number                                      |                  | 成员等级   |
| title  | string                                      |                  | 专属头衔   |
| sex    | string                                      |                  | 性别       |
| age    | number                                      |                  | 年龄       |
| uid    | string                                      |                  | QQ场景专属 |
| uin    | number                                      |                  | QQ场景专属 |

### guild

同 `group`

### direct

同 `friend`

### groupTemp

同 `group`

### 快速构造

```js twoslash
import { sender } from 'node-karin'

const age = 18
const uid = '1234567890'
const uin = 1234567890

const friend = sender.friend('用户ID', '用户昵称', '性别', age, uid, uin)

const group = sender.group({
  userId: '用户ID',
  role: '身份',
  name: '名称',
  sex: '性别',
  age,
  card: '群名片',
  area: '地区',
  level: 1,
  title: '专属头衔',
  uid,
  uin,
})

const guild = sender.guild('频道ID', '身份', '昵称', '性别', age)
const direct = sender.direct('用户ID', '昵称', '性别', age, uid, uin)
const groupTemp = sender.groupTemp('用户ID', '昵称', '性别', age, uid, uin)
```

## 快速回复源函数

::: tip 提示
此函数需要非常标准的参数，不建议任何人使用，在未来可能被移除。
:::

```ts twoslash
import { karin, segment } from 'node-karin'

export const demo = karin.command('demo', async (ctx) => {
  // 只接受这种传参
  ctx.srcReply([
    segment.text('你好'),
    segment.image('https://example.com/image.png'),
    segment.video('https://example.com/video.mp4'),    
  ])
})
```

## 快速回复

::: tip 提示
更宽松的快速回复，适用于任何场景
:::

```ts twoslash
import { karin, segment } from 'node-karin'

export const demo = karin.command('demo', async (ctx) => {
  ctx.reply('string') // string
  ctx.reply(segment.text('string')) // 单个消息段
  ctx.reply([ // 多个字符串、消息段混合
    'string',
    segment.text('string'),
    segment.image('string'),
  ])

  // 发送消息选项
  ctx.reply('string', {
    at: true, // 是否@发送者
    reply: true, // 是否引用回复发送者
    recallMsg: 1000, // 消息发送成功后撤回消息时间 默认为0不撤回
    retryCount: 3, // 重试次数 默认为0
  })
})
```

### 快速回复消息选项

| 参数       | 类型    | 说明                                     |
| ---------- | ------- | ---------------------------------------- |
| at         | boolean | 是否@发送者                              |
| reply      | boolean | 是否引用回复发送者                       |
| recallMsg  | number  | 消息发送成功后撤回消息时间 默认为0不撤回 |
| retryCount | number  | 重试次数 默认为0                         |

### 返回结果

```ts
export interface SendMsgResults {
  /** 消息ID */
  messageId: string
  /** 消息发送时间戳 */
  time: number
  /** 原始结果 一般是Object、Array */
  rawData: any
  /** @deprecated 已废弃 请使用 `messageId` */
  message_id: string
  /** @deprecated 已废弃 请使用 `time` */
  messageTime: number
}
```

### types

```ts twoslash
import type { SendMessage } from 'node-karin'

export interface SendMsgResults {
  /** 消息ID */
  messageId: string
  /** 消息发送时间戳 */
  time: number
  /** 原始结果 一般是Object、Array */
  rawData: any
  /** @deprecated 已废弃 请使用 `messageId` */
  message_id: string
  /** @deprecated 已废弃 请使用 `time` */
  messageTime: number
}

/** 快速回复函数 */
export type Reply = (
  /** 发送的消息 */
  elements: SendMessage,
  /** 发送消息选项 */
  options?: {
    /** 是否@发送者 */
    at?: boolean
    /** 是否引用回复发送者 */
    reply?: boolean
    /** 撤回消息时间 默认为0不撤回 */
    recallMsg?: number
    /** 重试次数 默认为0 */
    retryCount?: number
  }
) => Promise<SendMsgResults> | SendMsgResults
```

## 权限检查

::: tip 提示
使用 `hasPermission` 函数，你无需关注事件场景、角色身份即可快速进行权限检查。
:::

```ts twoslash
import { karin } from 'node-karin'

export const demo = karin.command('demo', async (ctx) => {
  // 判断一个用户是否为群管理员
  if (ctx.hasPermission('group.admin', true)) {
    // 在这个例子中，如果这个触发事件的用户是 master、admin、group.admin 其中之一，那么都会返回 true
  }

  // 判断一个用户是否为群管理员
  if (ctx.hasPermission('group.admin', false)) {
    // 在这个例子中，触发事件的用户必须是 group.admin 才能返回 true
  }

  // 在非群聊场景下，判断group.owner
  if (ctx.hasPermission('group.owner', true)) {
    // 在这个例子中，永远都会返回 false，因为非群聊场景下没有群主，对应其他场景也是一样
  }
})
```

| 参数    | 类型          | 说明                                                  |
| ------- | ------------- | ----------------------------------------------------- |
| role    | [Role](#Role) | 权限角色                                              |
| isUpper | boolean       | 是否向上检查 例如`admin`向上检查到`master` 默认`true` |

### Role

- `all`: 所有人
- `master`: 所有者
- `admin`: 管理员
- `group.owner`: 群主
- `group.admin`: 群管理
- `guild.owner`: 频道主
- `guild.admin`: 频道管理

## store

::: tip 提示
`store` 是一个 Map 对象，你可以通过 `ctx.store.get` 和 `ctx.store.set` 来获取和设置值，这对于需要跨插件共享数据非常有用。
:::

```ts twoslash
import { karin } from 'node-karin'

const key = 'mihoyo-uid'

export const demo = karin.command('demo', async (ctx, next) => {
  ctx.store.set(key, '1234567890')
  next()
})

export const demo2 = karin.command('demo', async (ctx) => {
  const value = ctx.store.get(key)
  ctx.reply(value)
})
```

## 适配器实例

::: tip 提示
`ctx.bot` 是适配器实例的引用，用于在当前事件中快速调用适配器实例的方法。
:::

```ts twoslash
import { karin, segment } from 'node-karin'

export const demo = karin.command('demo', async (ctx) => {
  ctx.bot.sendMsg(ctx.contact, [
    segment.text('你好')
  ])
})
```

更多API请参考 [适配器文档](../api/adapter.md)
