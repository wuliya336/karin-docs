const nav = [
  {
    text: '快速开始',
    items: [
      { text: '总目录', link: '/start/index' },
      { text: '快速开始', link: '/start/start' },
      { text: '渲染器', link: '/start/render' },
      { text: '配置文件', link: '/start/file' },
      { text: '疑难杂症', link: '/start/problems' },
      { text: '常见问题', link: '/start/faq' }
    ]
  },
  {
    text: '插件',
    items: [
      { text: '插件开发', items: [
        { text: '开发简介', link: '/plugins/index' },
        { text: '开发规范', link: '/plugins/standard' },
        { text: 'API 合集', link: '/plugins/api' },
        { text: '插件示例', link: '/plugins/demo' },
        { text: '插件包示例', link: '/plugins/package' }
      ]},
      { text: '插件列表', link: '/plugins/list' }
    ]
  },
  {
    text: '开发工具',
    link: '/utils'
  },
  {
    text: '事件',
    link: '/event/index'
  },
  { 
    text: '更新日志', 
    link: '/other/changelog' 
  }
]

export default nav