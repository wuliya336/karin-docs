# 前端配置页面

## 文件

- 文件名称: `web.config.mjs` 注意是`mjs`文件
- 文件位置: 放到插件的根目录下

## 编写示例

- 需要默认导出一个`object`对象
- 对象中需要包含`components`函数 `save`函数
- 后续适配`info`配置

> ⚠️ **重要提示**
> 每个组件的`key`必须全局唯一，包括嵌套组件的key也不能重复
> key重复会导致页面渲染错误，组件状态混乱，请务必确保key的唯一性

## 配置组件

```js
import { components } from 'node-karin'

export default {
  info: {
    // 插件信息配置
  },
  /** 动态渲染的组件 */
  components: () => [
    // 在这里面 添加各种子组件
  ],
  
  /** 前端点击保存之后调用的方法 */
  save: (config) => {
    console.log('保存的配置:', config)
    // 在这里处理保存逻辑
    return {
      success: true,
      message: '保存成功'
    }
  }
}
```

## 生成组件

- 每个组件都提供了丰富的配置选项
- 所有的组件调用方式都是`链式调用`

### 1. 输入框组件 (Input)

::: tip
默认封装了以下这些基础类型  
:::

- `string()`: 字符串输入
- `number()`: 数字输入
- `boolean()`: 布尔值输入
- `date()`: 日期输入
- `time()`: 时间输入
- `datetime()`: 日期时间输入
- `email()`: 邮箱输入
- `url()`: URL输入
- `tel()`: 电话号码输入
- `password()`: 密码输入
- `color()`: 颜色输入
- `json()`: JSON输入

**如果需要创建一个无任何配置的输入框，请使用`components.input.create()`方法**

::: code-group

```js [基础用法]
// 创建全新无任何配置的输入框
components.input.create('input-key')
```

```js [字符串]
// 创建一个字符串输入框
components.input.string('input-key')
```

```js [数字]
// 创建一个数字输入框
components.input.number('input-key')
```

```js [布尔值]
// 创建一个布尔值输入框
components.input.boolean('input-key')
```

```js [日期]
// 创建一个日期输入框
components.input.date('input-key')
```

```js [时间]
// 创建一个时间输入框
components.input.time('input-key')
```

```js [日期时间]
// 创建一个日期时间输入框
components.input.datetime('input-key')
```

```js [邮箱]
// 创建一个邮箱输入框
components.input.email('input-key')
```

```js [URL]
// 创建一个URL输入框
components.input.url('input-key')
```

```js [电话]
// 创建一个电话输入框
components.input.tel('input-key')
```

```js [密码]
// 创建一个密码输入框
components.input.password('input-key')
```

```js [JSON]
// 创建一个JSON输入框
components.input.json('input-key')
```

:::

#### api 参数

在调用以上方法创建后 可以继续调用如下方法

| api           | 参数                                                                        | 描述           |
| ------------- | --------------------------------------------------------------------------- | -------------- |
| `label`       | `string`                                                                    | 设置标签       |
| `placeholder` | `string`                                                                    | 设置占位符文本 |
| `description` | `string`                                                                    | 设置描述文本   |
| `required`    | `boolean`                                                                   | 设置必填       |
| `clearable`   | `boolean`                                                                   | 设置可清除     |
| `size`        | `sm` \| `md` \| `lg`                                                        | 设置大小       |
| `color`       | `default` \| `primary` \| `secondary` \| `success` \| `warning` \| `danger` | 设置颜色       |
| `validate`    | `ValidationRule`                                                            | 设置验证规则   |

```ts
export interface ValidationRule {
  /** 正则表达式 */
  regex?: string | RegExp
  /** 最小长度 */
  minLength?: number
  /** 最大长度 */
  maxLength?: number
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 自定义错误消息 */
  error?: string
}
```

#### 调用示例

```js
// create函数可以随意换成其他 因为有时候我们不需要配置那么多参数
components.input.create('input-key') // 创建一个全新无任何配置的输入框
  .label('这是一个输入框') // 设置标签
  .placeholder('请输入内容') // 设置占位符
  .description('这是一个描述') // 设置描述
  .required(true) // 设置必填
  .clearable(true) // 设置可清除
  .size('sm') // 设置大小
  .color('primary') // 设置颜色
  .validate([
    {
      min: 0,
      max: 100,
      error: '数字应在0-100之间'
    },
    {
      regex: /^\d+$/,
      error: '只能输入数字'
    }
  ])
```

### 2. 分隔线组件 (Divider)

```js
// 基础用法
components.divider

// 透明分隔线
components.divider.transparent(true)

// 垂直分隔线
components.divider.vertical(true)
```

### 3. 开关组件 (Switch)

#### API 参数说明

请先调用`components.switch.create`方法创建组件

| API 方法           | 参数类型                                                                      | 描述                       |
| ------------------ | ----------------------------------------------------------------------------- | -------------------------- |
| `startText`        | `string`                                                                      | 设置开关打开时显示的文本   |
| `endText`          | `string`                                                                      | 设置开关关闭时显示的文本   |
| `size`             | `'sm' \| 'md' \| 'lg'`                                                        | 设置开关组件的大小         |
| `color`            | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | 设置开关的颜色主题         |
| `thumbIcon`        | `string`                                                                      | 设置开关按钮上的图标       |
| `startContent`     | `string`                                                                      | 设置开关打开时的内容图标   |
| `endContent`       | `string`                                                                      | 设置开关关闭时的内容图标   |
| `selected`         | `boolean`                                                                     | 设置开关的选中状态（只读） |
| `defaultSelected`  | `boolean`                                                                     | 设置开关的默认选中状态     |
| `readonly`         | `boolean`                                                                     | 设置开关为只读模式         |
| `disabled`         | `boolean`                                                                     | 设置开关为禁用状态         |
| `disableAnimation` | `boolean`                                                                     | 设置是否禁用开关的动画效果 |
| `options`          | `SwitchProps`                                                                 | 一次性设置多个配置项       |

#### 调用示例

```js
components.switch
  .create('switch-key')
  .startText('开启文本')          // 设置开启文本
  .endText('关闭文本')           // 设置关闭文本
  .size('sm' | 'md' | 'lg')     // 设置大小
  .color('primary' | 'secondary' | 'success' | 'warning' | 'danger') // 设置颜色
  .thumbIcon('图标名称')         // 设置开关图标
  .startContent('开始图标')      // 设置开始内容图标
  .endContent('结束图标')        // 设置结束内容图标
  .selected(true)               // 设置选中状态
  .defaultSelected(true)        // 设置默认选中
  .readonly()                   // 设置只读
  .disabled()                   // 设置禁用
  .disableAnimation()           // 禁用动画
```

### 4. 手风琴组件 (Accordion)

#### API 参数说明

请先调用`components.accordion.create`方法创建组件

| API 方法            | 参数类型                               | 描述         |
| ------------------- | -------------------------------------- | ------------ |
| `title`             | `string`                               | 设置标题     |
| `variant`           | `'bordered' \| 'shadow' \| 'splitted'` | 设置样式变体 |
| `selectionMode`     | `'single' \| 'multiple'`               | 设置选择模式 |
| `selectionBehavior` | `'toggle' \| 'replace'`                | 设置选择行为 |
| `compact`           | `boolean`                              | 设置紧凑模式 |
| `disabled`          | `boolean`                              | 设置禁用     |
| `showDivider`       | `boolean`                              | 显示分隔线   |
| `hideIndicator`     | `boolean`                              | 隐藏指示器   |
| `disableAnimation`  | `boolean`                              | 禁用动画     |
| `fullWidth`         | `boolean`                              | 设置全宽     |
| `children`          | `AccordionItem[]`                      | 设置子项     |

子项Api:

请先调用`components.accordion.createItem`方法创建子项

| API 方法                    | 参数类型          | 描述           |
| --------------------------- | ----------------- | -------------- |
| `title`                     | `string`          | 设置标题       |
| `subtitle`                  | `string`          | 设置副标题     |
| `hideIndicator`             | `boolean`         | 隐藏指示器     |
| `compact`                   | `boolean`         | 设置紧凑模式   |
| `disabled`                  | `boolean`         | 设置禁用       |
| `keepContentMounted`        | `boolean`         | 保持内容挂载   |
| `disableAnimation`          | `boolean`         | 禁用动画       |
| `disableIndicatorAnimation` | `boolean`         | 禁用指示器动画 |
| `children`                  | `ComponentsClass` | 设置子项内容   |

#### 调用示例

::: warning
手风琴的调用比较复杂 请仔细阅读此部分
:::

```js
// 基本调用方法
components.accordion.create('accordion-key')
 .children([ // accordion的children数组里面需要全部都是accordionItem
  components.accordion.createItem('item-key')
    .title('子项标题')
    .subtitle('子项副标题')
    .children([ // accordionItem的children数组里面可以添加除accordion、accordionItem以外的任意组件
      // 这里可以添加输入框、开关等组件
      components.input.string('input-key-1')
      components.switch.create('switch-key-1')
    ])
 ])
 
```

::: tip
完整调用示例
:::

```js
components.accordion.create('accordion-key')
  .title('标题')                // 设置标题
  .variant('bordered' | 'shadow' | 'splitted') // 设置样式变体
  .selectionMode('single' | 'multiple') // 设置选择模式
  .selectionBehavior('toggle' | 'replace') // 设置选择行为
  .compact()                    // 设置紧凑模式
  .disabled()                   // 设置禁用
  .showDivider()               // 显示分隔线
  .hideIndicator()             // 隐藏指示器
  .disableAnimation()          // 禁用动画
  .fullWidth()                 // 设置全宽
  .children([                  // 设置子项
    components.accordion.createItem('item-key')
      .title('子项标题')
      .subtitle('子项副标题')
      .children([              // 子项内容
        components.input.string('input-key-2')
      ]),
    components.accordion.createItem('item-key-2')
      .title('子项标题2')
      .subtitle('子项副标题2')
      .children([              // 子项内容
        components.input.number('input-key-3')
      ])
  ])
```

#### 5. 手风琴Pro组件 (AccordionPro)

::: tip
pro版本其实就是给一个数据源进行动态渲染  
可以删除、新增
:::

pro版本的调用方法与基础版本类似 但是需要传入一个数据源 数据源的格式如下:

```js
// data的构成就是accordion的children数组里面需要全部都是accordionItem的key
const data = [
  {
    title: '数据项1', // 我们需要给每一个accordionItem设置一个title
    'input': '数据项1',
    'switch': true
  },
  {
    'input': '数据项2',
    'switch': false
  }
]

components.accordionPro.create('accordion-pro-key', data)
 .children([
  components.accordion.createItem('item-key')
    .title('子项标题')
    .subtitle('子项副标题')
    .children([
      components.input.string('input'), // 这里需要与data的key一致
      components.switch.create('switch') // 这里需要与data的key一致
    ])
 ])
```

## 保存

需要注意 返回的值中，就算你是`number`类型 返回的也是`string`类型

```json
{
  "accordion-pro-key": [
    {
      "input": "数据项1",
      "switch": true
    },
    {
      "input": "数据项2",
      "switch": true
    }
  ]
}
```
