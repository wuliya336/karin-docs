import { HeadConfig } from 'vitepress'

// prettier-ignore
const head: HeadConfig[] = [
  // SEO
  ['meta', { name: 'msvalidate.01', content: '8D5DDEA97F72740B73499AA520B67A1A' }],
  ['meta', { name: 'google-site-verification', content: '--V9ZVVBfakHdqwR54bgY6jnFPXz8XFBWhwsPEiBb5Q' }],
  ['meta', { name: 'baidu-site-verificatio', content: 'codeva-1epCQIAqT0' }],
  ['meta', { property: 'og:title', content: 'Karin' }],
  ['meta', { property: 'og:description', content: 'An open source high-performance bot framework built with TypeScript. Supports functions such as multi-adapter, multi-platform access and custom renderer.' }],
  ['meta', { property: 'og:image', content: 'https://karin.fun/logo-2.png' }],
  ['meta', { property: 'og:image:width', content: '582' }],
  ['meta', { property: 'og:image:height', content: '648' }],
  ['meta', { property: 'og:url', content: 'https://karin.fun/' }],
  ['meta', { property: 'og:license', content: 'https://karin.fun/docs/license' }],
  ['meta', { name: 'author', content: 'KarinJS Team' }],
  ['meta', { name: 'description', content: 'An open source high-performance bot framework built with TypeScript. Supports functions such as multi-adapter, multi-platform access and custom renderer.' }],
  ['meta', { name: 'keywords', content: 'Bot frame, Robot frame, TypeScript' }],
  ['link',{ rel: 'icon', href: '/images/logo.png'}],
]

export default head
