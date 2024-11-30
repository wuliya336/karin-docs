# 示例

> 一个简单的 `demo` 示例，直接代码展示了。

## 准备工作

- 打开 `plugins/karin-plugin-example` 目录，在此新建一个 `index-demo.js` 文件。

## 基本用法介绍

- `karin.command` 的第一种使用方法，直接回复字符串  

```js twoslash
import karin from 'node-karin'
export const test = karin.command('^文本$', '这是一段文本消息')
```

- `karin.command` 的第二种使用方法，传入`segment`元素  

```js twoslash
import { karin, segment } from 'node-karin'
export const text = karin.command(/^#文本测试$/, '这是一个文本')
```

- `karin.command` 的第三种使用方法，回调函数  

```js twoslash
import { karin, segment } from 'node-karin'
// 支持同步和异步函数
export const callback = karin.command(/^#回调测试$/, async (e) => {
  // reply 方法支持多种类型的参数
  await e.reply('这是一个回调测试')
  // 传入`sengment`元素
  await e.reply(segment.text('这是一个回调测试'))
  // 传入数组 支持各种组合的`segment`元素
  await e.reply([
    segment.text('这是一个回调测试'),
    segment.image('https://www.example.com/example.png')
  ])

  // 返回`true`则停止执行后续插件 返回`false`则继续贪婪匹配后续插件
  return true
})
```

- `karin.command` 的第三个参数

> 第三个参数是一个对象，用于设置插件的一些属性  
> 全部参数都是可选的，不填写则使用默认值  
> 强烈建议设置`name`属性，也就是插件的名称，方便后续查找和管理插件  
> 参数的配置项请查看更下方

```js twoslash
export const test = karin.command('^文本$', '这是一段文本消息', {
  event: 'message', // 监听的事件
  name: '文本', // 插件名称
  perm: 'all', // 触发权限
  at: false, // 是否加上at 仅在群聊中有效
  reply: false, // 是否加上引用回复
  recallMsg: 0, // 发送是否撤回消息 单位秒
  log: true, // 是否启用日志
  rank: 10000, // 优先级
  adapter: [], // 生效的适配器
  dsbAdapter: [], // 禁用的适配器
  delay: 0, // 延迟回复 单位毫秒 仅在第二个参数非函数时有效
  stop: false, // 是否停止执行后续插件 仅在第二个参数非函数时有效
})
```

<Badge type="danger" text="待完善..." />

## 类语法糖示例

> 该示例为消息插件示例  
> 将下面的代码复制到 `index-demo.js` 中，保存  
>对机器人发送 `#你好` ，机器人会回复 `你好` 、图片、语音、视频、@某人

```js twoslash
import { Plugin, segment } from 'node-karin'

export class hello extends Plugin {
  constructor () {
    super({
      name: '插件名称',
      dsc: '插件描述',
      rule: [
        {
          /** 命令正则匹配 */
          reg: /^#你好$/,
          /** 正则对应的执行方法 */
          fnc: 'hello'
        }
      ]
    })
  }

  async hello () {
    // 这里在this上会多一个reply方法，和函数插件的e.reply一样
    await this.reply('你好')

    // e在this上也会有
    await this.reply(segment.image('https://www.example.com/example.png'))
    // 其他方法都和函数插件一样
    return true
  }
}

```

## 更复杂的类语法糖示例

```js twoslash
import { Plugin, segment } from 'node-karin'

export class hello extends Plugin {
  constructor () {
    super({
      name: '插件名称',
      dsc: '插件描述',
      /** 监听事件 具体请查看事件分类 */
      event: 'message',
      /** 插件的优先级 必须为数字 数字越小优先级越高 默认5000 */
      priority: 1000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: /^#你好$/,
          /** 正则对应的执行方法 */
          fnc: 'hello',
          /** 是否显示操作日志 默认显示 */
          log: true,
          /** 操作权限 all | admin | master | group.admin | group.owner */
          permission: 'all'
        }
      ]
    })
  }

  async hello () {
    // ...不再赘述
    return true
  }
}

```
