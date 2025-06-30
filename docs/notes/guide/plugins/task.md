---
title: 定时任务插件
createTime: 2025/06/30 21:28:37
permalink: /guide/task/
---

## 基本用法

创建定时任务插件需要使用 `karin.task` 函数，该函数接收任务名称、cron 表达式、执行函数和选项参数：

```ts twoslash
import { karin } from 'node-karin'

// 每天早上 8 点执行
export const task = karin.task(
  '每日提醒',
  '0 8 * * *',
  async () => {
    // 执行的任务逻辑
    console.log('早上好，新的一天开始了！')
  }
)

// 每 30 分钟执行一次
export const task2 = karin.task(
  '定期检查',
  '*/30 * * * *',
  async () => {
    // 定期执行的任务
    console.log('正在进行定期检查...')
  }
)
```

## 参数说明

`karin.task` 函数接受以下参数：

| 参数名    | 类型          | 必填 | 描述                                |
| --------- | ------------- | ---- | ----------------------------------- |
| `name`    | `string`      | 是   | 任务的名称，用于标识和日志记录      |
| `cron`    | `string`      | 是   | cron 表达式，定义任务的执行时间规则 |
| `fnc`     | `Function`    | 是   | 任务执行的函数，可以是异步函数      |
| `options` | `TaskOptions` | 否   | 任务的附加选项                      |

### TaskOptions 选项

| 选项名 | 类型      | 默认值      | 描述                         |
| ------ | --------- | ----------- | ---------------------------- |
| `name` | `string`  | `undefined` | 可选的插件名称，用于文件标识 |
| `log`  | `boolean` | `false`     | 是否开启执行日志记录         |

## Cron 表达式说明

cron 表达式由 5 个字段组成，从左到右分别表示：

```
* * * * *
│ │ │ │ │
│ │ │ │ └─── 星期几 (0 - 7) (0 或 7 是周日)
│ │ │ └───── 月份 (1 - 12)
│ │ └─────── 日期 (1 - 31)
│ └───────── 小时 (0 - 23)
└─────────── 分钟 (0 - 59)
```

### 常用 cron 表达式示例

- `* * * * *` - 每分钟执行
- `0 * * * *` - 每小时整点执行
- `0 0 * * *` - 每天午夜 00:00 执行
- `0 8 * * *` - 每天早上 8:00 执行
- `0 8 * * 1-5` - 每个工作日（周一至周五）早上 8:00 执行
- `0 0 * * 0` - 每周日午夜执行
- `0 0 1 * *` - 每月 1 号午夜执行
- `*/5 * * * *` - 每 5 分钟执行一次
- `0 9-18 * * *` - 每天上午 9 点至下午 6 点的整点执行

## 高级用法

### 在执行函数中访问日志工具

```ts twoslash
import { karin } from 'node-karin'

export const task3 = karin.task(
  '带日志的任务',
  '0 12 * * *',
  async (task) => {
    // 使用任务内置的日志工具
    task.log('开始执行任务')
    
    // 执行任务逻辑
    
    task.log('任务执行完成')
  },
  { log: true } // 开启执行日志 默认开启
)
```

### 动态创建任务

您可以根据配置或其他条件动态创建任务：

```js twoslash
import { karin } from 'node-karin'

const createDailyTask = (hour, minute, message) => {
  return karin.task(
    `每日提醒-${hour}:${minute}`,
    `${minute} ${hour} * * *`,
    async () => {
      console.log(message)
    }
  )
}

// 创建多个定时提醒
export const task4 = createDailyTask(9, 0, '早上好，开始工作吧！')
export const task5 = createDailyTask(12, 0, '午饭时间到了！')
export const task6 = createDailyTask(18, 0, '该下班了！')
```

## 注意事项

1. cron 表达式基于服务器的本地时间
2. 定时任务会在 Karin 启动时自动注册并开始计时
3. 如果任务执行时间过长，可能会影响下一次执行
4. 建议将复杂或资源密集型的任务逻辑封装成异步函数
