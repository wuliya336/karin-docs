const nav = [
  {
    text: '快速开始',
    items: [
      { text: '总目录', link: '/start/index' },
      { text: '快速开始', link: '/start/start' },
      { text: '渲染器', link: '/start/render' },
      { text: '疑难杂症', link: '/start/problems' },
      {
        text: '疑难杂症', items: [{
          text: '常见问题解答', link: '/start/faq'
        }]
      }
    ]
  },
  {
    text: '开发指南',
    items: [
      { text: '简介', link: '/plugins/index' },
      { text: '开发规范', link: '/plugins/standard' },
      { text: 'Api合集', link: '/plugins/api' },
      { text: '插件示例', link: '/plugins/demo' },
      { text: '插件包示例', link: '/plugins/package' },
      { text: '插件列表', link: '/plugins/list' }
    ]
  },
  { text: '插件索引', link: '/plugins/index' },
]

export default nav