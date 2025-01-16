import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  // beian: { icp: '备案号', police: '公网安备号' },
  author: { name: 'KarinJS', link: 'https://github.com/KarinJS' },
  group: [
    {
      title: '解决方案',
      icon: 'fluent-emoji-flat:glowing-star',
      links: [
        { name: '外置渲染器', link: 'https://github.com/KarinJS/karin-puppeteer' },
        { name: 'Karin 渲染器核心', link: 'https://github.com/KarinJS/puppeteer-core' },
      ]
    },
    {
      title: '适配器',
      icon: 'vscode-icons:file-type-wxt',
      links: [
        { name: 'ICQQ 适配器', link: 'https://github.com/KarinJS/karin-plugin-adapter-icqq' },
        { name: 'QQBot 适配器', link: 'https://github.com/KarinJS/karin-plugin-adapter-QQBot' },
      ]
    },
    {
      title: '其他',
      icon: 'fluent-color:apps-32',
      links: [
        { name: 'JavaScript 插件开发模板', link: 'https://github.com/KarinJS/karin-plugin-template' },
        { name: 'TypeScript 插件开发模板', link: 'https://github.com/KarinJS/karin-plugin-template-ts' },
      ]
    }
  ]
}