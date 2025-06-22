<template>
  <div class="w-full text-center">
    <!-- 部署徽章 - 放在上方 -->
    <div class="mb-3">
      <SmartDeployBadge />
    </div>

    <!-- 原页脚信息 -->
    <div class="text-sm leading-relaxed">
      <div v-html="footerMessage" class="footer-links"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import SmartDeployBadge from './SmartDeployBadge.vue'

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
</style>