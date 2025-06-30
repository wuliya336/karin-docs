---
title: 快速入门指南
createTime: 2025/06/30 21:15:29
permalink: /guide/start/
---

# 插件开发快速入门

本文提供了插件开发的快速入门指南，帮助你迅速上手 Karin 插件开发。如果你想直接开始编码而不深入了解所有概念，这篇指南正适合你。

## 创建你的第一个插件

在 `plugins/karin-plugin-example` 文件夹下创建一个 `index.js` 文件，然后按照以下示例开始编写你的插件。

## 函数式插件开发

函数式插件是最简单、最直观的插件开发方式，适合大多数场景。

```js
import { karin, segment } from 'node-karin'

karin.command('^文本$', async (ctx, next) => {
  // 文本回复
  await ctx.reply('这是一段文本消息')
  
  // 单个消息段回复
  await ctx.reply(segment.image('https://img.yzcdn.cn/vant/ipad.png'))
  
  // 多个消息段组合
  await ctx.reply([
    segment.text('这是一段文本消息'),
    segment.image('https://img.yzcdn.cn/vant/ipad.png'),
  ])
  
  // 文本与消息段混合
  await ctx.reply([
    '这是一段文本消息',
    segment.image('https://img.yzcdn.cn/vant/ipad.png'),
  ])

  // reply 方法的高级选项（均为可选）
  await ctx.reply('这是一段文本消息', {
    at: false,       // 是否在回复中添加@用户
    reply: false,    // 是否添加引用回复
    recallMsg: 0,    // 消息发送后自动撤回的时间（秒），0表示不撤回
    retryCount: 10,  // 发送失败时的重试次数
  })

  // 允许当前事件继续匹配下一个插件
  next()
}, {
    // 插件配置（全部为可选，但推荐至少配置 name）
    event: 'message',  // 监听的事件类型
    name: '示例插件',   // 插件名称（便于管理和调试）
    perm: 'all',      // 触发权限设置
    at: false,        // 是否需要@机器人触发（仅群聊有效）
    reply: false,     // 是否以引用形式回复
    recallMsg: 0,     // 消息自动撤回时间（秒）
    log: true,        // 是否记录插件运行日志
    rank: 10000,      // 插件执行优先级
    adapter: [],      // 生效的适配器列表
    dsbAdapter: [],   // 禁用的适配器列表
    delay: 0,         // 延迟回复时间（毫秒）
    stop: false,      // 是否阻止后续插件执行
    authFailMsg: '抱歉，您没有权限使用此功能 (๑•́ㅿ•̀๑)՞',
})
```

## 类式插件开发

对于需要更好组织结构、状态管理或复杂功能的插件，可以使用类式开发方式。

```ts
import { Plugin, segment } from 'node-karin'

export class HelloPlugin extends Plugin {
  constructor() {
    super({
      name: '问候插件',
      desc: '回复友好的问候',
      rule: [
        {
          // 命令正则匹配
          reg: /^#你好$/,
          // 对应的处理方法名
          fnc: 'hello'
        }
      ]
    })
  }

  // 处理方法
  async hello() {
    // this.reply 与函数插件中的 ctx.reply 功能相同
    await this.reply('你好！今天天气真不错呢 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧')

    // 发送图片
    await this.reply(segment.image('https://example.com/hello.png'))
    
    // 如需访问上下文对象，可使用 this.e
    await this.e.reply('你好啊，' + this.e.sender.nickname)
    
    // 允许继续执行下一个匹配的插件
    this.next()
  }
}
```

## 定时任务

Karin 支持创建定时执行的任务，适用于定期推送、数据更新等场景。

```ts
import { karin, logger } from 'node-karin'

// 注册定时任务
const task = karin.task('每日问候', '0 8 * * *', async () => {
  // 每天早上8点执行
  logger.mark('早上好！新的一天开始了！')
}, { 
  log: true,     // 启用日志记录
  name: '晨间问候' // 任务名称
})
```

> 定时表达式使用标准 cron 格式：`* * * * *` 分别对应 分钟 小时 日 月 星期

## 事件监听

除了消息命令外，Karin 还支持监听各种系统事件，如群成员变动、好友申请等。

```ts
import { karin } from 'node-karin'

// 监听群成员加入事件
export const welcome = karin.accept('notice.groupMemberAdd', async (e) => {
  // 发送欢迎消息
  await e.reply('\n欢迎新朋友加入我们！Ciallo～(∠・ω< )⌒☆', { at: true })
}, { 
  name: '新成员欢迎' // 事件处理器名称
})
```

> 更多事件类型和高级功能正在不断完善中...
