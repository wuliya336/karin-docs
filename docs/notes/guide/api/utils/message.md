---
title: 💬 message 模块
createTime: 2025/05/15 00:12:24
---
> [!note]
> 本文由 AI 辅助生成，可能存在不准确性。

message 模块提供了消息处理的工具函数，用于创建和处理各种消息元素。

## 消息处理函数

### createRawMessage

将消息元素数组转换为原始字符串和纯文本。

```ts twoslash
// @noErrorValidation
import { createRawMessage } from 'node-karin'

/**
 * 将消息元素转换为字符串
 * @param data 消息元素数组
 * @returns 包含原始字符串和纯文本的对象
 */
const { raw, msg } = createRawMessage([
  { type: 'at', targetId: '123456' },
  { type: 'text', text: '你好' },
])

// raw: "[at:123456]你好"
// msg: "你好"
```

### makeMessage

消息元素归一化，主要处理字符串文本。

```ts twoslash
// @noErrorValidation
import { makeMessage } from 'node-karin'

/**
 * 消息元素归一化
 * @param elements 消息，可以是字符串、单个元素或元素数组
 * @returns 标准化后的消息元素数组
 */
// 将字符串转换为文本元素
const elements1 = makeMessage('你好')
// 将混合内容规范化
const elements2 = makeMessage(['你好', { type: 'at', targetId: '123456' }])
```

### makeForward

制作简单转发消息。

```ts twoslash
import { segment } from 'node-karin'
import { makeForward } from 'node-karin'

/**
 * 制作简单转发消息
 * @param elements 消息内容数组
 * @param fakeId 转发用户的ID
 * @param fakeName 转发用户显示的昵称
 * @returns 转发节点元素数组
 */
const forwardMsg = makeForward(
  [[segment.text('第一条消息')], [{ type: 'text', text: '第二条消息' }]],
  '123456',
  '用户昵称'
)
```

## 消息段构造函数

message 模块通过`segment`子模块提供了丰富的消息段构造器：
你需要先导入`segment`子模块才能使用这些构造器。

```ts twoslash
// @noErrorValidation
import { segment } from 'node-karin'
```

### 基础消息段

```ts twoslash
// @noErrorValidation
import { segment } from 'node-karin'
// ---cut---
// 文本消息
const textMsg = segment.text('这是一段文本')

// At消息
const atMsg = segment.at('123456', '用户昵称')
const atAll = segment.at('all') // @全体成员

// 表情
const faceMsg = segment.face(123)

// 回复
const replyMsg = segment.reply('message-id-123')
```

### 媒体消息段

```ts twoslash
// @noErrorValidation
import { segment } from 'node-karin'
// ---cut---
// 图片消息
const imgMsg = segment.image('https://example.com/image.jpg')
const imgMsg2 = segment.image('/path/to/image.jpg', {
  width: 100,
  height: 100,
  name: '图片名称',
})

// 视频消息
const videoMsg = segment.video('https://example.com/video.mp4')

// 语音消息
const recordMsg = segment.record('https://example.com/audio.mp3')
const magicRecordMsg = segment.record('https://example.com/audio.mp3', true) // 魔法语音
```

### 结构化消息段

```ts twoslash
// @noErrorValidation
import { segment } from 'node-karin'
// ---cut---
// JSON消息
const jsonMsg = segment.json('{"type":"LightApp","data":{}}')

// XML消息
const xmlMsg = segment.xml('<xml></xml>')

// Markdown消息
const mdMsg = segment.markdown('# 标题\n内容')

// Markdown模板
const mdTplMsg = segment.markdownTpl('template-id', [{ key: 'value', values: ['value0', 'value1'] }])

```

### 交互消息段

```ts twoslash
// @noErrorValidation
import { segment } from 'node-karin'
// ---cut---
// 按钮
const btnMsg = segment.button({ text: '点击按钮', data: 'button-data' })

// 多行按钮
const keyboardMsg = segment.keyboard([
  [
    { text: '按钮1', data: 'data1' },
    { text: '按钮2', data: 'data2' },
  ],
  [{ text: '按钮3', data: 'data3' }],
])

// 地理位置
const locationMsg = segment.location(39.908823, 116.39747, '天安门', '北京市东城区天安门')

// 分享
const shareMsg = segment.share('https://example.com', '标题', '内容描述', 'https://example.com/image.jpg')

// 音乐分享
const musicMsg = segment.music('qq', '123456')
const customMusicMsg = segment.customMusic(
  'https://example.com', // 跳转链接
  'https://example.com/1.mp3', // 音频链接
  '音乐标题',
  '作者',
  'https://example.com/cover.jpg' // 封面图片
)
```

### 游戏消息段

```ts twoslash
// @noErrorValidation
import { segment } from 'node-karin'
// ---cut---
// 骰子
const diceMsg = segment.dice(3) // 点数为3的骰子

// 石头剪刀布
const rpsMsg = segment.rps(2) // 0-石头 1-剪刀 2-布

// 篮球
const basketballMsg = segment.basketball(1) // 0-未知 1-进了 2-没进
```

### 转发消息

```ts twoslash
// @noErrorValidation
import { segment } from 'node-karin'
// ---cut---
// 自定义转发节点（基础用法）
const nodeMsg = segment.node(
  '123456', // 用户ID
  '用户昵称', // 用户昵称
  [
    // 消息内容
    segment.text('这是转发的消息内容'),
  ]
)

// 已有转发消息节点
const directNodeMsg = segment.nodeDirect('forward-id-123')
```

#### 重要提示

::: warning **协议兼容性警告**
第四个参数 `options`（外显配置）目前 **仅在 [NapCat](https://napcat.napneko.icu/) 和 [Lagrange](https://lagrangedev.github.io/Lagrange.Doc/v1/) 的 `QQNT` 协议实现中有效**。  
在其他协议实现中，此参数将被忽略。  
**正常使用时不需要填写第四个参数**，使用前三个参数即可。
:::


#### 个性化转发外显配置 (options)

**目前仅适用于 [NapCat](https://napcat.napneko.icu/) 和 [Lagrange](https://lagrangedev.github.io/Lagrange.Doc/v1/)协议**

第四个参数 `options` 用于自定义转发消息的外观显示，让转发消息更加个性化和直观。

**配置属性详解：**

- **`news`** - 小卡片中间的内容预览
  - 类型：`Array<{text: string}>`
  - 作用：显示转发消息的内容摘要
  - 示例：`[{text: '[图片]'}, {text: '今天天气不错'}]`

- **`prompt`** - 消息列表的标题描述
  - 类型：`string`
  - 作用：描述这组转发消息的来源或性质
  - 示例：`'群聊的聊天记录'`、`'与张三的私聊'`

- **`summary`** - 底部统计信息
  - 类型：`string`
  - 作用：显示转发消息的数量统计
  - 示例：`'查看5条转发消息'`

- **`source`** - 小卡片顶部标题
  - 类型：`string`
  - 作用：标识转发消息的来源或类别
  - 示例：`'聊天记录'`、`'群消息'`

#### 高级示例（仅 NapCat/Lagrange协议）

```ts twoslash
// @noErrorValidation
import { segment } from 'node-karin'
// ---cut---
// ⚠️ 注意：以下示例目前仅在 NapCat 和 Lagrange 协议中有效

// 示例1
const workDiscussion = segment.node(
  'manager001',
  '项目经理',
  [
    segment.text('明天的会议改到下午3点'),
    segment.file('/path/to/meeting-agenda.pdf'),
    segment.text('请大家提前准备')
  ],
  {
    news: [
      { text: '明天的会议改到下午3点' },
      { text: '[文件] meeting-agenda.pdf' }
    ],
    prompt: '工作群的重要通知',
    summary: '查看3条转发消息',
    source: '工作通知'
  }
)

// 示例2
const lifeSharing = segment.node(
  'friend123',
  '小明',
  [
    segment.image('/path/to/food.jpg'),
    segment.text('今天做的菜，味道不错！')
  ],
  {
    news: [
      { text: '[图片]' },
      { text: '今天做的菜，味道不错！' }
    ],
    prompt: '朋友圈动态分享',
    summary: '查看2条转发消息',
    source: '生活分享'
  }
)
```

可以通过以上构造函数灵活组合各种复杂消息。
