import { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  // beian: { icp: '备案号', police: '公网安备号' },
  author: { name: 'KarinJS', link: 'https://github.com/KarinJS' },
  group: [
    {
      title: '解决方案',
      icon: 'mingcute:sparkles-3-fill',
      links: [
        { name: '外置渲染器', href: 'https://github.com/KarinJS/karin-puppeteer' },
        { name: 'Karin 渲染器核心', href: 'https://github.com/KarinJS/puppeteer-core' },
      ]
    },
    {
      title: '适配器',
      icon: 'ci:puzzle',
      links: [
        { name: 'ICQQ 适配器', href: 'https://github.com/KarinJS/karin-plugin-adapter-icqq' },
        { name: 'QQBot 适配器', href: 'https://github.com/KarinJS/karin-plugin-adapter-QQBot' },
      ]
    },
    {
      title: '其他',
      icon: 'f7:viewfinder',
      links: [
        { name: 'JavaScript 插件开发模板', href: 'https://github.com/KarinJS/karin-plugin-template' },
        { name: 'TypeScript 插件开发模板', href: 'https://github.com/KarinJS/karin-plugin-template-ts' },
      ]
    }
  ]
}