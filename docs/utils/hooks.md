---
nolebase:
  gitChangelog: false
  pageProperties: false
---

# Hook 钩子系统

> Hook 钩子系统允许开发者在特定操作执行前后插入自定义逻辑，实现功能扩展和行为修改。

::: danger 注意

### 当前页文档正在编写中，可能存在误导性，请谨慎参考！

> 钩子系统的使用需要谨慎，确保理解其工作原理和影响。<br />
> 错误的使用可能导致严重的问题，如消息丢失或插件冲突。<br />
> 请谨慎使用钩子系统，仅在必要时使用。

:::

## 概述

Karin 框架提供了强大的钩子系统，允许插件开发者在关键流程中注入自定义逻辑。钩子系统基于优先级排序和链式调用，确保多个钩子能够有序协作。

## 使用方式

在 Karin 中，所有钩子操作都需要通过导入 `hooks` 变量来进行：

```js twoslash
import { hooks } from 'node-karin'
```

## 钩子类型

Karin 框架提供了多种类型的钩子：

- message : [消息处理钩子](#消息处理钩子)
- sendMsg : [消息发送钩子](#消息发送钩子)
- empty : [未找到匹配插件钩子](#未找到匹配插件钩子)
- eventCall : [事件调用插件钩子](#事件调用插件钩子)

## 消息发送钩子

### 钩子类型

消息发送钩子支持两种类型：

- 普通消息钩子 ：拦截和处理普通消息的发送
- 转发消息钩子 ：拦截和处理转发消息的发送

### 添加钩子 添加普通消息钩子

```js twoslash
import { hooks } from 'node-karin'

// 添加普通消息钩子
const hookId = hooks.sendMsg.message(
  (contact, elements, retryCount, next) => {
    // 在这里处理消息
    console.log('消息即将发送:', elements)

    // 调用 next() 允许消息继续发送
    // 不调用 next() 则会阻止消息发送
    next()
  },
  {
    priority: 100 // 可选，设置优先级，数值越小优先级越高，默认为 10000
  }
)
```

### 添加转发消息钩子

```js twoslash
import { hooks } from 'node-karin'

// 添加转发消息钩子
const hookId = hooks.sendMsg.forward(
  (contact, elements, options, next) => {
    // 在这里处理转发消息
    console.log('转发消息即将发送:', elements)

    // 调用 next() 允许消息继续发送
    // 不调用 next() 则会阻止消息发送
    next()
  },
  {
    priority: 200 // 可选，设置优先级
  }
)
```

### 移除钩子

当不再需要某个钩子时，可以通过其 ID 移除：

```js twoslash
import { hooks } from 'node-karin'

// 移除之前添加的钩子
hooks.sendMsg.remove(hookId)
```

## 消息处理钩子

消息处理钩子允许你在消息处理流程中插入自定义逻辑：

```js twoslash
import { hooks } from 'node-karin'

// 添加消息处理钩子
const hookId = hooks.message.on(
  (e, next) => {
    // 在这里处理接收到的消息
    console.log('收到消息:', e.raw_message)

    // 调用 next() 允许消息继续处理
    next()
  },
  {
    priority: 100 // 可选，设置优先级
  }
)

// 移除消息处理钩子
hooks.message.off(hookId)
```

## 未找到匹配插件钩子

当没有插件处理某个命令时，可以通过此钩子进行处理：

```js twoslash
import { hooks } from 'node-karin'

// 添加未找到匹配插件钩子
const hookId = hooks.empty.on(
  (e, command, next) => {
    // 处理未匹配的命令
    console.log(`未找到处理 "${command}" 的插件`)

    // 可以在这里提供默认回复
    e.reply(`抱歉，我不知道如何处理 "${command}" 命令`)

    // 调用 next() 允许继续处理
    next()
  },
  {
    priority: 100 // 可选，设置优先级
  }
)

// 移除钩子
hooks.empty.off(hookId)
```

## 事件调用插件钩子

事件调用插件钩子允许你在事件触发插件处理前后插入逻辑：

```js twoslash
import { hooks } from 'node-karin'

// 添加事件调用插件钩子
const hookId = hooks.eventCall.on(
  (e, plugin, next) => {
    // 在插件处理事件前执行
    console.log(`插件 ${plugin.name} 即将处理事件`)

    // 调用 next() 允许插件继续处理
    next()

    // 在插件处理事件后执行
    console.log(`插件 ${plugin.name} 已处理事件`)
  },
  {
    priority: 100 // 可选，设置优先级
  }
)

// 移除钩子
hooks.eventCall.off(hookId)
```

## 钩子执行流程

1. 钩子按照优先级排序（数值越小优先级越高）
2. 按顺序执行每个钩子的回调函数
3. 每个钩子可以通过调用 next() 函数决定是否继续执行后续钩子和原始操作
4. 如果某个钩子没有调用 next() ，则后续钩子和原始操作不会执行

## 实用场景

### 消息过滤

通过消息处理钩子，你可以拦截和过滤特定的消息：

```js twoslash
import { hooks } from 'node-karin'

hooks.sendMsg.message((contact, elements, retryCount, next) => {
  // 检查消息内容是否包含敏感词
  const messageText = elements
    .filter((e) => e.type === 'text')
    .map((e) => e.text)
    .join('')

  if (containsSensitiveWords(messageText)) {
    console.log('消息包含敏感词，已阻止发送')
    // 不调用 next()，阻止消息发送
    return
  }

  // 允许消息继续发送
  next()
})
```

### 消息修改

```js twoslash
import { hooks } from 'node-karin'

hooks.sendMsg.message((contact, elements, retryCount, next) => {
  // 修改消息内容
  for (const element of elements) {
    if (element.type === 'text') {
      element.text = `[Modified] ${element.text}`
    }
  }

  // 允许修改后的消息继续发送
  next()
})
```

### 消息日志记录

```js twoslash
import { hooks } from 'node-karin'

hooks.sendMsg.message(
  (contact, elements, retryCount, next) => {
    // 记录所有发送的消息
    const messageText = elements
      .filter((e) => e.type === 'text')
      .map((e) => e.text)
      .join('')

    logger.info(`发送消息到 ${contact.name}: ${messageText}`)

    // 允许消息继续发送
    next()
  },
  { priority: 1 }
) // 设置高优先级，确保最先执行
```

## 注意事项

1. 优先级设置 ：合理设置钩子优先级，确保钩子按照预期顺序执行
2. 异步处理 ：钩子回调可以是异步函数，框架会等待异步操作完成
3. 性能考虑 ：钩子会影响消息处理性能，请避免在钩子中执行耗时操作
4. 钩子清理 ：插件卸载时记得移除添加的钩子，避免内存泄漏
5. 调用 next() ：除非有意阻止后续处理，否则务必调用 next() 函数

## 高级用法

### 条件性钩子

```js twoslash
import { hooks } from 'node-karin'

// 只在特定条件下激活的钩子
hooks.sendMsg.message((contact, elements, retryCount, next) => {
  // 检查是否满足条件
  if (!shouldInterceptMessage()) {
    // 不满足条件，直接放行
    return next()
  }

  // 满足条件，执行特定逻辑
  // ...处理逻辑...

  // 决定是否继续
  if (shouldContinue) {
    next()
  }
})
```

### 钩子链组合

通过设置不同优先级的多个钩子，可以实现复杂的处理流程：

```js twoslash
import { hooks } from 'node-karin'

// 第一个钩子：日志记录（最高优先级）
hooks.sendMsg.message(
  (contact, elements, retryCount, next) => {
    logger.info('准备发送消息')
    next()
  },
  { priority: 100 }
)

// 第二个钩子：内容过滤
hooks.sendMsg.message(
  (contact, elements, retryCount, next) => {
    // 内容过滤逻辑
    if (isValidContent(elements)) {
      next()
    }
  },
  { priority: 200 }
)

// 第三个钩子：内容转换
hooks.sendMsg.message(
  (contact, elements, retryCount, next) => {
    // 内容转换逻辑
    transformContent(elements)
    next()
  },
  { priority: 300 }
)
```
