---
title: 📢 通知事件
createTime: 2025/05/15 00:40:00
permalink: /guide/49w0mt5c/
---

通知事件在 [事件基类](./base.md) 中进行拓展，基本属性不再过多赘述。

## 通知事件基本属性

> 以下是通知事件的基本属性，所有通知事件都会包含这些属性。

| 属性      | 类型      | 说明                                     |
| --------- | --------- | ---------------------------------------- |
| `event`   | `notice`  | 在通知事件中，`event` 永远都是 `notice`  |
| `tips`    | `string`  | 通知内容文本                             |
| `content` | `unknown` | 事件内容，根据不同的通知类型有不同的结构 |

## 收到点赞事件

| 属性        | 类型                                | 说明                                                   |
| ----------- | ----------------------------------- | ------------------------------------------------------ |
| `subEvent`  | `receiveLike`                       | 在收到点赞事件中，`subEvent` 永远都是 `receiveLike`    |
| `contact`   | `FriendContact`                     | 在收到点赞事件中，`contact` 永远都是 `FriendContact`   |
| `sender`    | `Sender<'friend'>`                  | 在收到点赞事件中，`sender` 永远都是 `Sender<'friend'>` |
| `isPrivate` | `true`                              | 在收到点赞事件中，`isPrivate` 永远都是 `true`          |
| `isFriend`  | `true`                              | 在收到点赞事件中，`isFriend` 永远都是 `true`           |
| `content`   | [ReceiveLikeType](#receiveliketype) |                                                        |

### ReceiveLikeType

```ts
/** 通知事件: 收到点赞 */
export interface ReceiveLikeType {
  /** 点赞者id */
  operatorId: string
  /** 点赞者数量 */
  count: number
}
```

## 好友增加事件

| 属性        | 类型                                      | 说明                                                   |
| ----------- | ----------------------------------------- | ------------------------------------------------------ |
| `subEvent`  | `friendIncrease`                          | 在好友增加事件中，`subEvent` 永远都是 `friendIncrease` |
| `contact`   | `FriendContact`                           | 在好友增加事件中，`contact` 永远都是 `FriendContact`   |
| `sender`    | `Sender<'friend'>`                        | 在好友增加事件中，`sender` 永远都是 `Sender<'friend'>` |
| `isPrivate` | `true`                                    | 在好友增加事件中，`isPrivate` 永远都是 `true`          |
| `isFriend`  | `true`                                    | 在好友增加事件中，`isFriend` 永远都是 `true`           |
| `content`   | [FriendIncreaseType](#friendincreasetype) |                                                        |

### FriendIncreaseType

```ts
/** 通知事件: 新增好友 */
export interface FriendIncreaseType {
  /** 新好友id */
  targetId: string
}
```

## 好友减少事件

| 属性        | 类型                                      | 说明                                                   |
| ----------- | ----------------------------------------- | ------------------------------------------------------ |
| `subEvent`  | `friendDecrease`                          | 在好友减少事件中，`subEvent` 永远都是 `friendDecrease` |
| `contact`   | `FriendContact`                           | 在好友减少事件中，`contact` 永远都是 `FriendContact`   |
| `sender`    | `Sender<'friend'>`                        | 在好友减少事件中，`sender` 永远都是 `Sender<'friend'>` |
| `isPrivate` | `true`                                    | 在好友减少事件中，`isPrivate` 永远都是 `true`          |
| `isFriend`  | `true`                                    | 在好友减少事件中，`isFriend` 永远都是 `true`           |
| `content`   | [FriendDecreaseType](#frienddecreasetype) |                                                        |

### FriendDecreaseType

```ts
/** 通知事件: 好友减少 */
export interface FriendDecreaseType {
  /** 减少的好友id */
  targetId: string
}
```

## 收到私聊戳一戳事件

| 属性        | 类型                                | 说明                                                     |
| ----------- | ----------------------------------- | -------------------------------------------------------- |
| `subEvent`  | `friendPoke`                        | 在私聊戳一戳事件中，`subEvent` 永远都是 `friendPoke`     |
| `contact`   | `FriendContact`                     | 在私聊戳一戳事件中，`contact` 永远都是 `FriendContact`   |
| `sender`    | `Sender<'friend'>`                  | 在私聊戳一戳事件中，`sender` 永远都是 `Sender<'friend'>` |
| `isPrivate` | `true`                              | 在私聊戳一戳事件中，`isPrivate` 永远都是 `true`          |
| `isFriend`  | `true`                              | 在私聊戳一戳事件中，`isFriend` 永远都是 `true`           |
| `content`   | [PrivatePokeType](#privatepoketype) |                                                          |

### PrivatePokeType

```ts
/** 通知事件: 私聊戳一戳 */
export interface PrivatePokeType {
  /** 操作者id */
  operatorId: string
  /** 被戳者id */
  targetId: string
  /** 操作名称，如"戳了戳" */
  action: string
  /** 后缀，未设置则未空字符串 */
  suffix: string
  /** 操作图标url */
  actionImage: string
}
```

## 收到私聊撤回事件

| 属性        | 类型                                    | 说明                                                   |
| ----------- | --------------------------------------- | ------------------------------------------------------ |
| `subEvent`  | `friendRecall`                          | 在私聊撤回事件中，`subEvent` 永远都是 `friendRecall`   |
| `contact`   | `FriendContact`                         | 在私聊撤回事件中，`contact` 永远都是 `FriendContact`   |
| `sender`    | `Sender<'friend'>`                      | 在私聊撤回事件中，`sender` 永远都是 `Sender<'friend'>` |
| `isPrivate` | `true`                                  | 在私聊撤回事件中，`isPrivate` 永远都是 `true`          |
| `isFriend`  | `true`                                  | 在私聊撤回事件中，`isFriend` 永远都是 `true`           |
| `content`   | [PrivateRecallType](#privaterecalltype) |                                                        |

### PrivateRecallType

```ts
/** 通知事件: 私聊撤回消息 */
export interface PrivateRecallType {
  /** 操作者id */
  operatorId: string
  /** 撤回的消息id */
  messageId: string
  /** 操作提示，如"撤回了一条消息"  一般此项为空字符串 */
  tips: string
}
```

## 收到私聊文件上传事件

| 属性        | 类型                                                | 说明                                                            |
| ----------- | --------------------------------------------------- | --------------------------------------------------------------- |
| `subEvent`  | `privateFileUploaded`                               | 在私聊文件上传事件中，`subEvent` 永远都是 `privateFileUploaded` |
| `contact`   | `FriendContact`                                     | 在私聊文件上传事件中，`contact` 永远都是 `FriendContact`        |
| `sender`    | `Sender<'friend'>`                                  | 在私聊文件上传事件中，`sender` 永远都是 `Sender<'friend'>`      |
| `isPrivate` | `true`                                              | 在私聊文件上传事件中，`isPrivate` 永远都是 `true`               |
| `isFriend`  | `true`                                              | 在私聊文件上传事件中，`isFriend` 永远都是 `true`                |
| `content`   | [PrivateFileUploadedType](#privatefileuploadedtype) |                                                                 |

### PrivateFileUploadedType

```ts
/**
 * 通知事件: 私聊文件上传
 * 文件信息最少需要提供一个url
 */
export interface PrivateFileUploadedType {
  /** 操作者id */
  operatorId: string
  /** 文件ID 此项没有则为空字符串 */
  fid: string
  /** 文件子ID 此项没有则为0 */
  subId: number
  /** 文件名 此项没有则为空字符串 */
  name: string
  /** 文件大小 此项没有则为0 */
  size: number
  /** 过期时间 此项没有则为0 */
  expireTime: number
  /** 文件URL */
  url: () => Promise<string>
}
```

## 群聊类通知事件

> 所有群聊类通知事件都继承自 `GroupNotice` 类，包含以下通用属性

| 属性      | 类型     | 事件特有字段 | 说明                          |
| --------- | -------- | ------------ | ----------------------------- |
| `groupId` | `string` |              | 当前群聊ID，同 `contact.peer` |

## 收到群聊戳一戳事件

| 属性       | 类型                            | 说明                                                    |
| ---------- | ------------------------------- | ------------------------------------------------------- |
| `subEvent` | `groupPoke`                     | 在群聊戳一戳事件中，`subEvent` 永远都是 `groupPoke`     |
| `contact`  | `GroupContact`                  | 在群聊戳一戳事件中，`contact` 永远都是 `GroupContact`   |
| `sender`   | `Sender<'group'>`               | 在群聊戳一戳事件中，`sender` 永远都是 `Sender<'group'>` |
| `isGroup`  | `true`                          | 在群聊戳一戳事件中，`isGroup` 永远都是 `true`           |
| `groupId`  | `string`                        | 当前群聊ID，同 `contact.peer`                           |
| `content`  | [GroupPokeType](#grouppoketype) |                                                         |

### GroupPokeType

```ts
/** 通知事件: 群聊戳一戳 */
export interface GroupPokeType {
  /** 操作者id */
  operatorId: string
  /** 操作名称，如"戳了戳" */
  action: string
  /** 后缀，未设置则未空字符串 */
  suffix: string
  /** 操作图标url */
  actionImage: string
  /** 被戳目标id */
  targetId: string
}
```

## 收到群聊撤回事件

| 属性       | 类型                                | 说明                                                  |
| ---------- | ----------------------------------- | ----------------------------------------------------- |
| `subEvent` | `groupRecall`                       | 在群聊撤回事件中，`subEvent` 永远都是 `groupRecall`   |
| `contact`  | `GroupContact`                      | 在群聊撤回事件中，`contact` 永远都是 `GroupContact`   |
| `sender`   | `Sender<'group'>`                   | 在群聊撤回事件中，`sender` 永远都是 `Sender<'group'>` |
| `isGroup`  | `true`                              | 在群聊撤回事件中，`isGroup` 永远都是 `true`           |
| `groupId`  | `string`                            | 当前群聊ID，同 `contact.peer`                         |
| `content`  | [GroupRecallType](#grouprecalltype) |                                                       |

### GroupRecallType

```ts
/**
 * 通知事件: 群聊撤回
 * 撤回自己消息时，operator和target为自己
 * 撤回别人消息时，operator为操作者，target为被撤回者
 */
export interface GroupRecallType {
  /** 操作者id */
  operatorId: string
  /** 目标id 撤回自己消息为自己 否则是被撤回者 */
  targetId: string
  /** 撤回的消息id */
  messageId: string
  /** 操作提示，如"撤回了一条消息"  一般此项为空字符串 */
  tip: string
}
```

## 收到群聊文件上传事件

| 属性       | 类型                                            | 说明                                                          |
| ---------- | ----------------------------------------------- | ------------------------------------------------------------- |
| `subEvent` | `groupFileUploaded`                             | 在群聊文件上传事件中，`subEvent` 永远都是 `groupFileUploaded` |
| `contact`  | `GroupContact`                                  | 在群聊文件上传事件中，`contact` 永远都是 `GroupContact`       |
| `sender`   | `Sender<'group'>`                               | 在群聊文件上传事件中，`sender` 永远都是 `Sender<'group'>`     |
| `isGroup`  | `true`                                          | 在群聊文件上传事件中，`isGroup` 永远都是 `true`               |
| `groupId`  | `string`                                        | 当前群聊ID，同 `contact.peer`                                 |
| `content`  | [GroupFileUploadedType](#groupfileuploadedtype) |                                                               |

### GroupFileUploadedType

```ts
/**
 * 通知事件: 群文件上传
 * 文件信息最少需要提供一个url
 */
export interface GroupFileUploadedType {
  /** 文件ID */
  fid: string
  /** 文件子ID */
  subId: number
  /** 文件名 */
  name: string
  /** 文件大小 */
  size: number
  /** 过期时间 */
  expireTime?: number
  /** 文件URL */
  url: () => Promise<string>
}
```

## 群名片变动事件

| 属性       | 类型                                          | 说明                                                       |
| ---------- | --------------------------------------------- | ---------------------------------------------------------- |
| `subEvent` | `groupCardChanged`                            | 在群名片变动事件中，`subEvent` 永远都是 `groupCardChanged` |
| `contact`  | `GroupContact`                                | 在群名片变动事件中，`contact` 永远都是 `GroupContact`      |
| `sender`   | `Sender<'group'>`                             | 在群名片变动事件中，`sender` 永远都是 `Sender<'group'>`    |
| `isGroup`  | `true`                                        | 在群名片变动事件中，`isGroup` 永远都是 `true`              |
| `groupId`  | `string`                                      | 当前群聊ID，同 `contact.peer`                              |
| `content`  | [GroupCardChangedType](#groupcardchangedtype) |                                                            |

### GroupCardChangedType

```ts
/** 通知事件: 群名片变动 */
export interface GroupCardChangedType {
  /** 操作者id */
  operatorId: string
  /** 目标id */
  targetId: string
  /** 新名片 */
  newCard: string
}
```

## 群成员头衔变动事件

| 属性       | 类型                                                                    | 说明                                                                 |
| ---------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `subEvent` | `groupMemberTitleUpdate`                                                | 在群成员头衔变动事件中，`subEvent` 永远都是 `groupMemberTitleUpdate` |
| `contact`  | `GroupContact`                                                          | 在群成员头衔变动事件中，`contact` 永远都是 `GroupContact`            |
| `sender`   | `Sender<'group'>`                                                       | 在群成员头衔变动事件中，`sender` 永远都是 `Sender<'group'>`          |
| `isGroup`  | `true`                                                                  | 在群成员头衔变动事件中，`isGroup` 永远都是 `true`                    |
| `groupId`  | `string`                                                                | 当前群聊ID，同 `contact.peer`                                        |
| `content`  | [GroupMemberUniqueTitleChangedType](#groupmemberuniquetitlechangedtype) |                                                                      |

### GroupMemberUniqueTitleChangedType

```ts
/** 通知事件: 群成员头衔变动 */
export interface GroupMemberUniqueTitleChangedType {
  /** 目标id */
  targetId: string
  /** 新头衔 */
  title: string
}
```

## 群精华消息变动事件

| 属性       | 类型                                                | 说明                                                                |
| ---------- | --------------------------------------------------- | ------------------------------------------------------------------- |
| `subEvent` | `groupHighlightsChange`                             | 在群精华消息变动事件中，`subEvent` 永远都是 `groupHighlightsChange` |
| `contact`  | `GroupContact`                                      | 在群精华消息变动事件中，`contact` 永远都是 `GroupContact`           |
| `sender`   | `Sender<'group'>`                                   | 在群精华消息变动事件中，`sender` 永远都是 `Sender<'group'>`         |
| `isGroup`  | `true`                                              | 在群精华消息变动事件中，`isGroup` 永远都是 `true`                   |
| `groupId`  | `string`                                            | 当前群聊ID，同 `contact.peer`                                       |
| `content`  | [GroupHlightsChangedType](#grouphlightschangedtype) |                                                                     |

### GroupHlightsChangedType

```ts
/** 通知事件: 群精华消息变动 */
export interface GroupHlightsChangedType {
  /** 操作者id */
  operatorId: string
  /** 发送者id */
  senderId: string
  /** 被操作的消息id */
  messageId: string
  /** 设置、取消精华 */
  isSet: boolean
}
```

## 群成员增加事件

| 属性       | 类型                                                | 说明                                                     |
| ---------- | --------------------------------------------------- | -------------------------------------------------------- |
| `subEvent` | `groupMemberAdd`                                    | 在群成员增加事件中，`subEvent` 永远都是 `groupMemberAdd` |
| `contact`  | `GroupContact`                                      | 在群成员增加事件中，`contact` 永远都是 `GroupContact`    |
| `sender`   | `Sender<'group'>`                                   | 在群成员增加事件中，`sender` 永远都是 `Sender<'group'>`  |
| `isGroup`  | `true`                                              | 在群成员增加事件中，`isGroup` 永远都是 `true`            |
| `groupId`  | `string`                                            | 当前群聊ID，同 `contact.peer`                            |
| `content`  | [GroupMemberIncreaseType](#groupmemberincreasetype) |                                                          |

### GroupMemberIncreaseType

```ts
/** 通知事件: 群成员增加 */
export interface GroupMemberIncreaseType {
  /** 操作者id */
  operatorId: string
  /** 加入者id */
  targetId: string
  /** 加入方式 APPROVE:管理员批准 INVITE:管理员邀请 */
  type: 'invite' | 'approve'
}
```

## 群成员减少事件

| 属性       | 类型                                                | 说明                                                        |
| ---------- | --------------------------------------------------- | ----------------------------------------------------------- |
| `subEvent` | `groupMemberRemove`                                 | 在群成员减少事件中，`subEvent` 永远都是 `groupMemberRemove` |
| `contact`  | `GroupContact`                                      | 在群成员减少事件中，`contact` 永远都是 `GroupContact`       |
| `sender`   | `Sender<'group'>`                                   | 在群成员减少事件中，`sender` 永远都是 `Sender<'group'>`     |
| `isGroup`  | `true`                                              | 在群成员减少事件中，`isGroup` 永远都是 `true`               |
| `groupId`  | `string`                                            | 当前群聊ID，同 `contact.peer`                               |
| `content`  | [GroupMemberDecreaseType](#groupmemberdecreasetype) |                                                             |

### GroupMemberDecreaseType

```ts
/** 通知事件: 群成员减少 */
export interface GroupMemberDecreaseType {
  /** 操作者id */
  operatorId: string
  /** 目标id */
  targetId: string
  /** 减少方式 leave:主动退群 kick:成员被踢 kickBot:机器人自身被踢 */
  type: 'leave' | 'kick' | 'kickBot'
}
```

## 群管理员变动事件

| 属性       | 类型                                            | 说明                                                          |
| ---------- | ----------------------------------------------- | ------------------------------------------------------------- |
| `subEvent` | `groupAdminChanged`                             | 在群管理员变动事件中，`subEvent` 永远都是 `groupAdminChanged` |
| `contact`  | `GroupContact`                                  | 在群管理员变动事件中，`contact` 永远都是 `GroupContact`       |
| `sender`   | `Sender<'group'>`                               | 在群管理员变动事件中，`sender` 永远都是 `Sender<'group'>`     |
| `isGroup`  | `true`                                          | 在群管理员变动事件中，`isGroup` 永远都是 `true`               |
| `groupId`  | `string`                                        | 当前群聊ID，同 `contact.peer`                                 |
| `content`  | [GroupAdminChangedType](#groupadminchangedtype) |                                                               |

### GroupAdminChangedType

```ts
/** 通知事件: 群管理员变动 */
export interface GroupAdminChangedType {
  /** 目标id */
  targetId: string
  /** 设置、取消管理员 */
  isAdmin: boolean
}
```

## 群打卡事件

| 属性       | 类型                                | 说明                                                |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `subEvent` | `groupSignIn`                       | 在群打卡事件中，`subEvent` 永远都是 `groupSignIn`   |
| `contact`  | `GroupContact`                      | 在群打卡事件中，`contact` 永远都是 `GroupContact`   |
| `sender`   | `Sender<'group'>`                   | 在群打卡事件中，`sender` 永远都是 `Sender<'group'>` |
| `isGroup`  | `true`                              | 在群打卡事件中，`isGroup` 永远都是 `true`           |
| `groupId`  | `string`                            | 当前群聊ID，同 `contact.peer`                       |
| `content`  | [GroupSignInType](#groupsignintype) |                                                     |

### GroupSignInType

```ts
/** 通知事件: 群打卡 */
export interface GroupSignInType {
  /** 目标id */
  targetId: string
  /** 操作名称，如"打卡了" */
  action: string
  /** 打卡图标url */
  rankImage: string
}
```

## 群成员被禁言事件

| 属性       | 类型                                      | 说明                                                     |
| ---------- | ----------------------------------------- | -------------------------------------------------------- |
| `subEvent` | `groupMemberBan`                          | 在群成员禁言事件中，`subEvent` 永远都是 `groupMemberBan` |
| `contact`  | `GroupContact`                            | 在群成员禁言事件中，`contact` 永远都是 `GroupContact`    |
| `sender`   | `Sender<'group'>`                         | 在群成员禁言事件中，`sender` 永远都是 `Sender<'group'>`  |
| `isGroup`  | `true`                                    | 在群成员禁言事件中，`isGroup` 永远都是 `true`            |
| `groupId`  | `string`                                  | 当前群聊ID，同 `contact.peer`                            |
| `content`  | [GroupMemberBanType](#groupmemberbantype) |                                                          |

### GroupMemberBanType

```ts
/** 通知事件: 群成员被禁言 */
export interface GroupMemberBanType {
  /** 操作者id */
  operatorId: string
  /** 目标id */
  targetId: string
  /** 禁言时长，单位秒 */
  duration: number
  /** 是否为禁言 */
  isBan: boolean
}
```

## 群全员禁言事件

| 属性       | 类型                                    | 说明                                                    |
| ---------- | --------------------------------------- | ------------------------------------------------------- |
| `subEvent` | `groupWholeBan`                         | 在群全员禁言事件中，`subEvent` 永远都是 `groupWholeBan` |
| `contact`  | `GroupContact`                          | 在群全员禁言事件中，`contact` 永远都是 `GroupContact`   |
| `sender`   | `Sender<'group'>`                       | 在群全员禁言事件中，`sender` 永远都是 `Sender<'group'>` |
| `isGroup`  | `true`                                  | 在群全员禁言事件中，`isGroup` 永远都是 `true`           |
| `groupId`  | `string`                                | 当前群聊ID，同 `contact.peer`                           |
| `content`  | [GroupWholeBanType](#groupwholebantype) |                                                         |

### GroupWholeBanType

```ts
/** 通知事件: 群全员禁言 */
export interface GroupWholeBanType {
  /** 操作者id */
  operatorId: string
  /** 是否开启全体禁言 */
  isBan: boolean
}
```

## 群表情动态事件

| 属性       | 类型                                                  | 说明                                                           |
| ---------- | ----------------------------------------------------- | -------------------------------------------------------------- |
| `subEvent` | `groupMessageReaction`                                | 在群表情动态事件中，`subEvent` 永远都是 `groupMessageReaction` |
| `contact`  | `GroupContact`                                        | 在群表情动态事件中，`contact` 永远都是 `GroupContact`          |
| `sender`   | `Sender<'group'>`                                     | 在群表情动态事件中，`sender` 永远都是 `Sender<'group'>`        |
| `isGroup`  | `true`                                                | 在群表情动态事件中，`isGroup` 永远都是 `true`                  |
| `groupId`  | `string`                                              | 当前群聊ID，同 `contact.peer`                                  |
| `content`  | [GroupMessageReactionType](#groupmessagereactiontype) |                                                                |

### GroupMessageReactionType

```ts
/** 通知事件: 群表情动态 */
export interface GroupMessageReactionType {
  /** 消息ID */
  messageId: string
  /** 表情ID 参考: https://bot.q.qq.com/wiki/develop/api-v2/openapi/emoji/model.html#EmojiType */
  faceId: number
  /** 数量 */
  count: number
  /** 添加、取消回应 */
  isSet: boolean
}
```

## 群聊运气王事件

| 属性       | 类型                                    | 说明                                                   |
| ---------- | --------------------------------------- | ------------------------------------------------------ |
| `subEvent` | `groupLuckyKing`                        | 在群运气王事件中，`subEvent` 永远都是 `groupLuckyKing` |
| `contact`  | `GroupContact`                          | 在群运气王事件中，`contact` 永远都是 `GroupContact`    |
| `sender`   | `Sender<'group'>`                       | 在群运气王事件中，`sender` 永远都是 `Sender<'group'>`  |
| `isGroup`  | `true`                                  | 在群运气王事件中，`isGroup` 永远都是 `true`            |
| `groupId`  | `string`                                | 当前群聊ID，同 `contact.peer`                          |
| `content`  | [GroupLuckKingType](#groupluckkingtype) |                                                        |

### GroupLuckKingType

```ts
/** 通知事件: 群聊运气王 */
export interface GroupLuckKingType {
  /** 红包发送者id */
  userId: string
  /** 运气王id */
  targetId: string
}
```

## 群聊荣誉变更事件

| 属性       | 类型                                            | 说明                                                       |
| ---------- | ----------------------------------------------- | ---------------------------------------------------------- |
| `subEvent` | `groupHonorChange`                              | 在群荣誉变更事件中，`subEvent` 永远都是 `groupHonorChange` |
| `contact`  | `GroupContact`                                  | 在群荣誉变更事件中，`contact` 永远都是 `GroupContact`      |
| `sender`   | `Sender<'group'>`                               | 在群荣誉变更事件中，`sender` 永远都是 `Sender<'group'>`    |
| `isGroup`  | `true`                                          | 在群荣誉变更事件中，`isGroup` 永远都是 `true`              |
| `groupId`  | `string`                                        | 当前群聊ID，同 `contact.peer`                              |
| `content`  | [GroupHonorChangedType](#grouphonorchangedtype) |                                                            |

### GroupHonorChangedType

```ts
/** 通知事件: 群聊荣誉变更事件 */
export interface GroupHonorChangedType {
  /** 荣誉类型，分别表示龙王、群聊之火、快乐源泉 */
  honorType: 'talkative' | 'performer' | 'emotion'
}
```
