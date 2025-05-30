<template>
  <div v-if="detectedPlatform" class="flex justify-center items-center w-full">
    <a :href="detectedPlatform.url" target="_blank" rel="noopener"
      class="inline-block transition-opacity duration-200 hover:opacity-80">
      <!-- 如果是 Deno Deploy，使用本地 SVG -->
      <div v-if="detectedPlatform.type === 'deno-deploy'" class="h-8 flex items-center">
        <img :src="denoSvgPath" alt="Deno Deploy Logo" class="h-30 w-30" />
        <span class="ml-2 text-sm font-medium text-default">Built witch Deno</span>
      </div>
      <!-- GitHub Pages 使用本地 SVG -->
      <div v-else-if="detectedPlatform.type === 'github-pages'" class="h-8 flex items-center">
        <img :src="githubPagesSvgPath" alt="GitHub Pages Logo" class="h-40 w-40" />
        <span class="ml-2 text-sm font-medium text-default">Built witch GitHub Pages</span>
      </div>
      <!-- Cloudflare Pages 使用本地 SVG -->
      <div v-else-if="detectedPlatform.type === 'cloudflare'" class="h-8 flex items-center">
        <img :src="cloudflarePagesSvgPath" alt="Cloudflare Pages Logo" class="h-8 w-8" />
        <span class="ml-2 text-sm font-medium text-default">Built witch Cloudflare Pages</span>
      </div>
      <!-- Vercel 使用本地 SVG -->
      <div v-else-if="detectedPlatform.type === 'vercel'" class="h-8 flex items-center">
        <img :src="vercelSvgPath" alt="Vercel Logo" class="h-30 w-30" />
        <span class="ml-2 text-sm font-medium text-default">Built witch Vercel</span>
      </div>
      <!-- 其他平台使用图片徽章 -->
      <img v-else :src="detectedPlatform.badge" :alt="detectedPlatform.alt" class="h-5 block" />
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { withBase } from 'vuepress/client'

const detectedPlatform = ref(null)

// 计算本地 SVG 路径
const denoSvgPath = computed(() => withBase('/svg/Deno-Deploy.svg'))
const githubPagesSvgPath = computed(() => withBase('/svg/Github-Pages.svg'))
const cloudflarePagesSvgPath = computed(() => withBase('/svg/Cloudflare-Pages.svg'))
const vercelSvgPath = computed(() => withBase('/svg/vercel-svgrepo-com.svg'))

// 部署平台配置
const platforms = {
  vercel: {
    type: 'vercel',
    url: 'https://vercel.com',
    badge: 'https://img.shields.io/badge/Powered%20by-Vercel-000000?style=flat&logo=vercel&logoColor=white',
    alt: 'Powered by Vercel'
  },
  netlify: {
    type: 'netlify',
    url: 'https://netlify.com',
    badge: 'https://www.netlify.com/v3/img/components/netlify-color-bg.svg',
    alt: 'Powered by Netlify'
  },
  'github-pages': {
    type: 'github-pages',
    url: 'https://pages.github.com',
    badge: 'https://img.shields.io/badge/Powered%20by-GitHub%20Pages-181717?style=flat&logo=github&logoColor=white',
    alt: 'Powered by GitHub Pages'
  },
  'deno-deploy': {
    type: 'deno-deploy',
    url: 'https://deno.com/deploy',
    badge: 'https://img.shields.io/badge/Powered%20by-Deno%20Deploy-000000?style=flat&logo=deno&logoColor=white',
    alt: 'Powered by Deno Deploy'
  },
  cloudflare: {
    type: 'cloudflare',
    url: 'https://pages.cloudflare.com',
    badge: 'https://img.shields.io/badge/Powered%20by-Cloudflare%20Pages-F38020?style=flat&logo=cloudflare&logoColor=white',
    alt: 'Powered by Cloudflare Pages'
  }
}

// 检测部署平台
function detectDeploymentPlatform () {
  if (typeof window === 'undefined') return 'github-pages'

  const hostname = window.location.hostname
  const headers = document.querySelector('meta[name="generator"]')?.content || ''

  // 1. 基于域名检测
  if (hostname.includes('vercel.app') || hostname.includes('vercel.com')) {
    return 'vercel'
  }

  if (hostname.includes('netlify.app') || hostname.includes('netlify.com')) {
    return 'netlify'
  }

  if (hostname.includes('github.io')) {
    return 'github-pages'
  }

  if (hostname.includes('deno.dev')) {
    return 'deno-deploy'
  }

  if (hostname.includes('pages.dev')) {
    return 'github-pages'
  }

  // 2. 基于HTTP响应头检测（需要在客户端运行时检测）
  try {
    // 检测Vercel特征
    if (document.querySelector('script[src*="vercel"]') ||
      document.querySelector('link[href*="vercel"]')) {
      return 'vercel'
    }

    // 检测Netlify特征
    if (document.querySelector('script[src*="netlify"]') ||
      document.querySelector('link[href*="netlify"]') ||
      headers.toLowerCase().includes('netlify')) {
      return 'netlify'
    }

    // 检测GitHub Pages特征
    if (document.querySelector('meta[name="github-pages-site-verification"]') ||
      headers.toLowerCase().includes('github pages')) {
      return 'github-pages'
    }

    // 检测Deno Deploy特征
    if (headers.toLowerCase().includes('deno')) {
      return 'deno-deploy'
    }

    // 检测Cloudflare特征
    if (document.querySelector('script[src*="cloudflare"]') ||
      headers.toLowerCase().includes('cloudflare')) {
      return 'cloudflare'
    }
  } catch (error) {
    console.log('检测部署平台时出错:', error)
  }

  // 3. 默认返回GitHub Pages
  return 'cloudflare'
}

// 异步检测网络特征
async function detectNetworkFeatures () {
  try {
    // 检测Vercel特有的响应头
    const response = await fetch(window.location.href, { method: 'HEAD' })
    const server = response.headers.get('server') || ''
    const xVercelId = response.headers.get('x-vercel-id')
    const xVercelCache = response.headers.get('x-vercel-cache')

    if (xVercelId || xVercelCache || server.toLowerCase().includes('vercel')) {
      return 'vercel'
    }

    // 检测Netlify特有的响应头
    const xNfRequestId = response.headers.get('x-nf-request-id')
    const server_netlify = server.toLowerCase().includes('netlify')

    if (xNfRequestId || server_netlify) {
      return 'netlify'
    }

    // 检测Cloudflare特征
    const cfRay = response.headers.get('cf-ray')
    const server_cloudflare = server.toLowerCase().includes('cloudflare')

    if (cfRay || server_cloudflare) {
      return 'cloudflare'
    }

  } catch (error) {
    // 如果网络检测失败，不影响基本检测
    console.log('网络特征检测失败:', error)
  }

  return null
}

onMounted(async () => {
  // 首先进行基本检测
  let platform = detectDeploymentPlatform()

  // 如果基本检测结果是GitHub Pages，尝试网络检测
  if (platform === 'github-pages') {
    const networkDetected = await detectNetworkFeatures()
    if (networkDetected) {
      platform = networkDetected
    }
  }

  detectedPlatform.value = platforms[platform]
})
</script>