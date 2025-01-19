# 概述

通过使用别名，开发者可以更简洁地引入所需的模块，无需指定完整的路径。

```js twoslash
// 不建议这么做！
import segment from 'node_modules/node-karin/lib/bot/segment.js'
import plugin from 'node_modules/node-karin/lib/plugins/plugin.js'

// 以上的导入麻烦且冗长，在使用别名后可以简化为
import { segment, Plugin } from 'node-karin'
```

## 使用

::: tip
文档可能会更新不及时，有一定阅读能力的可以查看 <Pill name="src/index.ts" link="https://github.com/KarinJS/Karin/blob/dev/src/index.ts" />
:::

## <mark>karin</mark>

### `command`

详见 [命令正则处理](../plugins/demo.md#_1-命令正则处理)

### `accept`

详见 [监听事件](../plugins/demo.md#_2-监听事件处理)

### `use`

详见 [中间件](../plugins/demo.md#_3-中间件)

### `ctx`

详见 [上下文处理](../plugins/demo.md#_4-上下文处理)

### `handle`

详见 [事件处理器](../plugins/demo.md#_5-事件处理器)

### `contactFriend`

> 构建好友 contact

|  参数  |   类型   |  描述   |    备注    |
| :----: | :------: | :-----: | :--------: |
| `peer` | `string` | 用户 id | 好友 QQ 号 |

::: code-group

```ts twoslash [调用示例]
import karin, { Message, segment } from 'node-karin'
// ---cut-before---
const peer = '123456'
const result = karin.contactFriend(peer)
```

```ts [返回值]
/** 不具有 sub_peer 的事件联系人信息 */
export interface ContactWithoutSubPeer<T extends 'friend' | 'group' = 'friend' | 'group'> {
  /** 事件来源场景 */
  scene: `${T}`
  /** 事件来源id 群号或者用户id */
  peer: string
  /** 事件来源子id 不存在 */
  subPeer?: undefined | null
  /** @deprecated 即将废弃 请使用 `subPeer` */
  sub_peer?: undefined | null
}
```

:::

### `contactGroup`

> 构建群 contact

|  参数  |   类型   | 描述 | 备注 |
| :----: | :------: | :--: | :--: |
| `peer` | `string` | 群号 |      |

::: code-group

```ts twoslash [调用示例]
import karin, { Message, segment } from 'node-karin'
// ---cut-before---
const peer = '123456789'
const result = karin.contactFriend(peer)
```

```ts [返回值]
/** 不具有 sub_peer 的事件联系人信息 */
export interface ContactWithoutSubPeer<T extends 'friend' | 'group' = 'friend' | 'group'> {
  /** 事件来源场景 */
  scene: `${T}`
  /** 事件来源id 群号或者用户id */
  peer: string
  /** 事件来源子id 不存在 */
  subPeer?: undefined | null
  /** @deprecated 即将废弃 请使用 `subPeer` */
  sub_peer?: undefined | null
}
```

:::

### `contactGroup`

> 构建频道 contact

|   参数    |   类型   | 描述 | 备注 |
| :-------: | :------: | :--: | :--: |
|  `peer`   | `string` |      |      |
| `subPeer` | `string` |      |      |

<Badge type="danger" text="待完善..." />

### `contactGroupTemp`

> 构建临时聊天 contact

|   参数    |   类型   | 描述 | 备注 |
| :-------: | :------: | :--: | :--: |
|  `peer`   | `string` |      |      |
| `subPeer` | `string` |      |      |

<Badge type="danger" text="待完善..." />

- ## `Cfg`

- ## 更多内容正在编写中 。。。。。。
