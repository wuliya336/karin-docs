<template>
  <div class="w-full text-center">
    <!-- 部署徽章 - 放在上方 -->
    <div class="mb-3">
      <SmartDeployBadge />
    </div>

    <!-- 原页脚信息 -->
    <div class="text-sm leading-relaxed">
      <div v-html="footerMessage" class="footer-links"></div>

      <!-- ICP备案信息 - 只在主页显示 -->
      <div v-if="isHomePage" class="mt-2 beian-container">
        <a href="https://beian.miit.gov.cn/" target="_blank" class="beian-link">
          皖ICP备2023011445号
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import SmartDeployBadge from './SmartDeployBadge.vue'

// 获取当前页面路径
const frontmatter = inject('frontmatter', {})
const pagePath = inject('pagePath', '') || '/'

// 判断是否为主页
const isHomePage = computed(() => {
  console.log('pagePath:', pagePath)
  return pagePath === '/' || pagePath === '/index.html' || frontmatter.home === true || frontmatter.pageLayout === 'home'
})

// 从配置中获取页脚信息
const footerMessage = computed(() => {
  const currentYear = new Date().getFullYear()
  return `© 2023-${currentYear} <a target="_blank" href="https://github.com/KarinJS/Karin">Karin</a> Released under the MIT License.`
})
</script>

<style scoped>
.footer-links :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.footer-links :deep(a):hover {
  text-decoration: underline;
  color: var(--vp-c-brand-2);
}

.beian-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.beian-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.9em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.beian-link:hover {
  color: var(--vp-c-text-1);
}
</style>