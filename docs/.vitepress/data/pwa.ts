import type { PwaOptions } from '@vite-pwa/vitepress'
import fg from 'fast-glob'
import { resolve } from 'path'

const pwa: Partial<PwaOptions> = {
  outDir: '../docs/.vitepress/dist', // 这里是以 .vitepress 为根目录的相对路径
  registerType: 'autoUpdate',
  includeAssets: fg.sync('**/*.{png,svg,gif,ico,txt}', {
    cwd: resolve(__dirname, '../../public')
  }),
  devOptions: {
    enabled: true // 开发模式下也启用 pwa
  },
  manifest: {
    id: '/',
    name: 'Karin',
    short_name: 'Karin',
    description:
      'An open source high-performance bot framework built with TypeScript. Supports functions such as multi-adapter, multi-platform access and custom renderer.',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/images/logo-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/images/logo-512-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    screenshots: [
      {
        src: '/images/screenshot-wide.png',
        sizes: '3092x2178',
        type: 'image/png',
        form_factor: 'wide'
      },
      {
        src: '/images/screenshot-narrow.png',
        sizes: '1290x4995',
        type: 'image/png',
        form_factor: 'narrow'
      }
    ]
  },
  workbox: {
    globDirectory: '../dist',
    globPatterns: ['**/*.{js,css,html,png,svg,ico,txt}']
  }
}

export default pwa
