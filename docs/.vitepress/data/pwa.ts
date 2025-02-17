import type { VitePWAOptions } from 'vite-plugin-pwa'
import fg from 'fast-glob'
import { resolve } from 'path'

const pwa: Partial<VitePWAOptions> = {
  outDir: '../dist',
  registerType: 'autoUpdate',
  includeManifestIcons: false,
  includeAssets: fg.sync('**/*.{png,svg,gif,ico,txt}', {
    cwd: resolve(__dirname, '../../public')
  }),
  manifest: {
    id: '/',
    name: 'Karin',
    short_name: 'Karin',
    description:
      'An open source high-performance bot framework built with TypeScript. Supports functions such as multi-adapter, multi-platform access and custom renderer.',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/public/logo.png',
        sizes: '120x120',
        type: 'image/png'
      },
      {
        src: '/public/logo.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/public/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ]
  },
  workbox: {
    navigateFallbackDenylist: [/^\/new$/],
    runtimeCaching: [
      {
        urlPattern: new RegExp('^https://fonts.googleapis.com/.*', 'i'),
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: new RegExp('^https://fonts.gstatic.com/.*', 'i'),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'gstatic-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: new RegExp('^https://cdn.jsdelivr.net/.*', 'i'),
        handler: 'CacheFirst',
        options: {
          cacheName: 'jsdelivr-cdn-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: new RegExp(
          '^https://(raw|user-images|camo).githubusercontent.com/.*',
          'i'
        ),
        handler: 'CacheFirst',
        options: {
          cacheName: 'githubusercontent-images-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
}

export default pwa
