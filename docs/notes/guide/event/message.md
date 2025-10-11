---
title: 💫 消息事件
createTime: 2025/05/15 00:40:00
---

消息事件在 [事件基类](./base.md) 中进行拓展，基本属性不再过多赘述。

## 消息事件基本属性

> 以下是消息事件的基本属性，所有消息事件都会包含这些属性。

| 属性         | 类型                 | 说明                                                                                         |
| ------------ | -------------------- | -------------------------------------------------------------------------------------------- |
| `event`      | `message`            | 在消息事件中，`event` 永远都是 `message`                                                     |
| `msg`        | `string`             | 经过格式化后的消息文本，用于触发插件正则                                                     |
| `alias`      | `string`             | Bot别名                                                                                      |
| `rawMessage` | `string`             | 经过格式化后的原始消息文本 通常用于日志打印、AI调用                                          |
| `messageId`  | `string`             | 消息ID                                                                                       |
| `messageSeq` | `number`             | 消息序号，慎用此字段                                                                         |
| `elements`   | `Array<SendElement>` | 消息段                                                                                       |
| `at`         | `Array<string>`      | 消息段中的 `@用户的ID列表` `(不会包含Bot自身)`                                               |
| `atBot`      | `boolean`            | 当前消息事件中是否包含 `@Bot` 消息段                                                         |
| `atAll`      | `boolean`            | 当前消息事件是否包含 `@all` 消息段                                                           |
| `image`      | `string[]`           | 消息段中的 `图片file` 数组                                                                   |
| `record`     | `string`             | 消息段中的 `语音file` 不存在语音消息段时为空字符串                                           |
| `replyId`    | `string`             | 当前事件中是否包含了 `reply` 消息段 存在时为 `reply` 消息段的 `messageId` 不存在时为空字符串 |

## 好友消息事件

| 属性        | 类型               | 事件特有字段 | 说明                                                        |
| ----------- | ------------------ | ------------ | ----------------------------------------------------------- |
| `subEvent`  | `friend`           |              | 在好友消息事件中，`subEvent` 永远都是 `friend`              |
| `contact`   | `FriendContact`    |              | 在好友消息事件中，`contact` 永远都是 `FriendContact` 类型   |
| `sender`    | `Sender<'friend'>` |              | 在好友消息事件中，`sender` 永远都是 `Sender<'friend'>` 类型 |
| `isPrivate` | `true`             |              | 在好友消息事件中，`isPrivate` 永远都是 `true`               |
| `isFriend`  | `true`             |              | 在好友消息事件中，`isFriend` 永远都是 `true`                |

## 群消息事件

| 属性       | 类型              | 事件特有字段 | 说明                                                     |
| ---------- | ----------------- | ------------ | -------------------------------------------------------- |
| `subEvent` | `group`           |              | 在群消息事件中，`subEvent` 永远都是 `group`              |
| `contact`  | `GroupContact`    |              | 在群消息事件中，`contact` 永远都是 `GroupContact` 类型   |
| `sender`   | `Sender<'group'>` |              | 在群消息事件中，`sender` 永远都是 `Sender<'group'>` 类型 |
| `isGroup`  | `true`            |              | 在群消息事件中，`isGroup` 永远都是 `true`                |
| `groupId`  | `string`          | ✅            | 当前群聊ID 同 `contact.peer`                             |

## 频道消息事件

| 属性        | 类型              | 事件特有字段 | 说明                                                     |
| ----------- | ----------------- | ------------ | -------------------------------------------------------- |
| `subEvent`  | `guild`           |              | 在群消息事件中，`subEvent` 永远都是 `guild`              |
| `contact`   | `GuildContact`    |              | 在群消息事件中，`contact` 永远都是 `GuildContact` 类型   |
| `sender`    | `Sender<'guild'>` |              | 在群消息事件中，`sender` 永远都是 `Sender<'guild'>` 类型 |
| `isGuild`   | `true`            |              | 在群消息事件中，`isGuild` 永远都是 `true`                |
| `guildId`   | `string`          | ✅            | 当前频道ID 同 `contact.peer`                             |
| `channelId` | `string`          | ✅            | 当前子频道ID 同 `contact.subPeer`                        |

## 频道私信消息事件

| 属性         | 类型               | 事件特有字段 | 说明                                                            |
| ------------ | ------------------ | ------------ | --------------------------------------------------------------- |
| `subEvent`   | `direct`           |              | 在频道私信消息事件中，`subEvent` 永远都是 `direct`              |
| `contact`    | `DirectContact`    |              | 在频道私信消息事件中，`contact` 永远都是 `DirectContact` 类型   |
| `sender`     | `Sender<'direct'>` |              | 在频道私信消息事件中，`sender` 永远都是 `Sender<'direct'>` 类型 |
| `isDirect`   | `true`             |              | 在频道私信消息事件中，`isDirect` 永远都是 `true`                |
| `guildId`    | `string`           | ✅            | 当前频道ID 同 `contact.peer`                                    |
| `channelId`  | `string`           | ✅            | 当前子频道ID 同 `contact.subPeer`                               |
| `srcGuildId` | `string`           | ✅            | 来源频道ID                                                      |

## 群临时会话消息事件

| 属性          | 类型                  | 事件特有字段 | 说明                                                                 |
| ------------- | --------------------- | ------------ | -------------------------------------------------------------------- |
| `subEvent`    | `groupTemp`           |              | 在群临时会话消息事件中，`subEvent` 永远都是 `groupTemp`              |
| `contact`     | `GroupTempContact`    |              | 在群临时会话消息事件中，`contact` 永远都是 `GroupTempContact` 类型   |
| `sender`      | `Sender<'groupTemp'>` |              | 在群临时会话消息事件中，`sender` 永远都是 `Sender<'groupTemp'>` 类型 |
| `isGroupTemp` | `true`                |              | 在群临时会话消息事件中，`isGroupTemp` 永远都是 `true`                |
| `groupId`     | `string`              | ✅            | 来源群ID 同 `contact.peer`                                           |
