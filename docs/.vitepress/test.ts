import { components } from 'node-karin'

// 创建水平分隔线
components.divider.horizontal('divider-key') // orientation 参数默认为 horizontal

// 创建垂直分隔线
components.divider.vertical('divider-key') // orientation 参数默认为 vertical

components.divider.create('divider-key', {
  description: '此处填写分割线的描述', // 描述
  descPosition: 50, // 描述文本位置 0-100的数字
  orientation: 'horizontal', // 方向
  transparent: false // 是否透明
})

components.accordionPro.create('555')
