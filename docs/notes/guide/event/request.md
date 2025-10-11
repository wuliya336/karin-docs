---
title: 📨 请求事件
createTime: 2025/05/15 00:40:00
---

请求事件在 [事件基类](./base.md) 中进行拓展，基本属性不再过多赘述。

## 请求事件基本属性

> 以下是请求事件的基本属性，所有请求事件都会包含这些属性。

| 属性      | 类型      | 说明                                     |
| --------- | --------- | ---------------------------------------- |
| `event`   | `request` | 在请求事件中，`event` 永远都是 `request` |
| `tips`    | `string`  | 通知内容文本                             |
| `content` | `unknown` | 事件内容，根据不同的请求类型有不同的结构 |

## 好友申请请求事件

| 属性        | 类型                                  | 说明                                                   |
| ----------- | ------------------------------------- | ------------------------------------------------------ |
| `subEvent`  | `friendApply`                         | 在好友申请事件中，`subEvent` 永远都是 `friendApply`    |
| `contact`   | `FriendContact`                       | 在好友申请事件中，`contact` 永远都是 `FriendContact`   |
| `sender`    | `Sender<'friend'>`                    | 在好友申请事件中，`sender` 永远都是 `Sender<'friend'>` |
| `isPrivate` | `true`                                | 在好友申请事件中，`isPrivate` 永远都是 `true`          |
| `isFriend`  | `true`                                | 在好友申请事件中，`isFriend` 永远都是 `true`           |
| `content`   | [PrivateApplyType](#privateapplytype) |                                                        |

### PrivateApplyType

```ts
/** 请求事件: 好友申请 */
export interface PrivateApplyType {
  /** 申请者id */
  applierId: string
  /** 验证信息 */
  message: string
  /** 请求 flag，在调用处理请求的 API 时需要传入 */
  flag: string
}
```

## 群成员申请入群事件

| 属性       | 类型                      | 说明                                                |
| ---------- | ------------------------- | --------------------------------------------------- |
| `subEvent` | `groupApply`              | 在群申请事件中，`subEvent` 永远都是 `groupApply`    |
| `contact`  | `GroupContact`            | 在群申请事件中，`contact` 永远都是 `GroupContact`   |
| `sender`   | `Sender<'group'>`         | 在群申请事件中，`sender` 永远都是 `Sender<'group'>` |
| `isGroup`  | `true`                    | 在群申请事件中，`isGroup` 永远都是 `true`           |
| `groupId`  | `string`                  | 当前群聊ID，同 `contact.peer`                       |
| `content`  | [GroupApply](#groupapply) |                                                     |

### GroupApply

```ts
/** 请求事件: 新成员申请加入群聊申请 */
export interface GroupApply {
  /** 申请者id */
  applierId: string
  /** 邀请者id */
  inviterId: string
  /** 申请理由 */
  reason: string
  /** 请求 flag，在调用处理请求的 API 时需要传入 */
  flag: string
  /** 群id */
  groupId: string
}
```

## 邀请Bot加入群聊事件

| 属性       | 类型                        | 说明                                                |
| ---------- | --------------------------- | --------------------------------------------------- |
| `subEvent` | `groupInvite`               | 在群邀请事件中，`subEvent` 永远都是 `groupInvite`   |
| `contact`  | `GroupContact`              | 在群邀请事件中，`contact` 永远都是 `GroupContact`   |
| `sender`   | `Sender<'group'>`           | 在群邀请事件中，`sender` 永远都是 `Sender<'group'>` |
| `isGroup`  | `true`                      | 在群邀请事件中，`isGroup` 永远都是 `true`           |
| `groupId`  | `string`                    | 当前群聊ID，同 `contact.peer`                       |
| `content`  | [GroupInvite](#groupinvite) |                                                     |

### GroupInvite

```ts
/** 请求事件: 邀请Bot加入群聊 */
export interface GroupInvite {
  /** 邀请者id */
  inviterId: string
  /** 请求 flag，在调用处理请求的 API 时需要传入 */
  flag: string
}
```
