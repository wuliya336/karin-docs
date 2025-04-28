export const sidebar = {
  '/': [
    {
      text: '快速开始',
      items: [
        { text: '介绍', link: '/start/start' },
        { text: '环境安装', link: '/install/environment' },
        { text: '框架安装', link: '/install/framework' },
        { text: 'webui', link: '/start/web' },
        { text: '接入平台', link: '/install/platform' }
      ]
    },
    {
      text: '进阶使用 <iconify-icon icon="line-md:chevron-triple-right"></iconify-icon>',
      collapsed: true,
      items: [
        { text: '渲染器 <iconify-icon icon="material-symbols:screenshot-monitor-outline-rounded" style="color: #3fa4fc"></iconify-icon>', link: '/start/render' },
        { text: '配置文件 <iconify-icon icon="lets-icons:setting-fill" style="color: #898989"></iconify-icon>', link: '/start/file' },
        {
          text: '疑难杂症 <iconify-icon icon="twemoji:face-with-monocle"></iconify-icon>', link: '/start/problems', items: [{
            text: '常见问题解答 <iconify-icon icon="iconoir:check-square" style="color: #2aff79"></iconify-icon>', link: '/start/faq'
          }]
        }
      ],
    },
    {
      text: '插件开发 <iconify-icon icon="line-md:chevron-triple-right"></iconify-icon>',
      collapsed: true,
      items: [
        { text: '目录 <iconify-icon icon="ri:menu-fold-4-line"></iconify-icon>', link: '/plugins/index' },
        { text: '开发规范 <iconify-icon icon="mingcute:tag-fill" style="color: #ff2a2a"></iconify-icon>', link: '/plugins/standard' },
        { text: '插件示例 <iconify-icon icon="ix:pen-filled" style="color: #ffce2a"></iconify-icon>', link: '/plugins/demo' },
        { text: '插件包示例 <iconify-icon icon="fluent-emoji-flat:package"></iconify-icon>', link: '/plugins/package' },
        { text: '插件列表 <iconify-icon icon="fa-solid:list-ul" style="color: #8284ff"></iconify-icon>', link: '/plugins/list' },
        { text: '前端配置 <iconify-icon icon="icon-park-solid:install" style="color: #ffce2a"></iconify-icon>', link: '/plugins/component' }
      ]
    },
    // {
    //   text: '开发工具 <iconify-icon icon="line-md:chevron-triple-right"></iconify-icon>',
    //   collapsed: true,
    //   items: [
    //     { text: '目录 <iconify-icon icon="ri:menu-fold-4-line"></iconify-icon>', link: '/utils' },
    //     { text: 'Api合集', link: '/utils/api' },
    //     { text: 'Karin类', link: '/utils/karin' },
    //     { text: '创建消息元素', link: '/utils/segment' },
    //     { text: '日志管理', link: '/utils/logger' },
    //     { text: '常用函数合集', link: '/utils/common' },
    //     { text: '键值存储', link: '/utils/redis' },
    //     { text: 'Yaml编辑器', link: '/utils/YamlEditor' },
    //     { text: '图片渲染', link: '/utils/Renderer' },
    //     { text: '端口共享', link: '/utils/server' },
    //     { text: '钩子系统', link: '/utils/hooks' },
    //     { text: '系统工具', link: '/utils/system' },
    //   ]
    // },
    {
      text: '事件 <iconify-icon icon="line-md:chevron-triple-right"></iconify-icon>',
      collapsed: true,
      items: [
        { text: '目录 <iconify-icon icon="ri:menu-fold-4-line"></iconify-icon>', link: '/event/index' },
        { text: '消息事件 <iconify-icon icon="tabler:message" style="color: #ff632a"></iconify-icon>', link: '/event/message' },
        { text: '通知事件 <iconify-icon icon="iconamoon:notification" style="color: #2aff79"></iconify-icon>', link: '/event/notice' },
        { text: '请求事件 <iconify-icon icon="mingcute:tag-fill" style="color: #742aff"></iconify-icon>', link: '/event/request' }
      ],
    },
    {
      text: 'API',
      collapsed: true,
      items: [
        { text: '<iconify-icon icon="carbon:export" style="color: #2a79ff"></iconify-icon> Exports', link: '/api/exports' },
        { text: '<iconify-icon icon="mdi:server" style="color: #ff6b2a"></iconify-icon> Server', link: '/api/server' },
        { text: '<iconify-icon icon="material-symbols:router" style="color: #2aff79"></iconify-icon> Handler', link: '/api/handler' },
        { text: '<iconify-icon icon="ri:robot-fill" style="color: #2a79ff"></iconify-icon> Bot', link: '/api/bot' },
        {
          text: '<iconify-icon icon="icon-park-outline:tool" style="color: #ff9f2a"></iconify-icon> Utils',
          collapsed: true,
          items: [
            { text: '目录', link: '/api/utils/index' },
            { text: 'logger', link: '/api/utils/logger' },
            { text: 'system', link: '/api/utils/system' },
            { text: 'config', link: '/api/utils/config' },
            { text: 'fs', link: '/api/utils/fs' },
            { text: 'message', link: '/api/utils/message' },
            { text: 'common', link: '/api/utils/common' },
            { text: 'yaml', link: '/api/utils/yaml' },
            { text: 'ini', link: '/api/utils/ini' },
            { text: 'request', link: '/api/utils/request' },
            { text: 'git', link: '/api/utils/git' },
            { text: 'button', link: '/api/utils/button' },
            { text: 'changelog', link: '/api/utils/changelog' }
          ]
        }
      ]
    },
    { text: '更新日志 <iconify-icon icon="ix:log" style="color: #ff70cf"></iconify-icon>', link: '/other/changelog' },
  ]
}