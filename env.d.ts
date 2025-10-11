/// <reference types="vue/dist/vue.d.ts" />
/// <reference types="vite/client" />

declare module '@tailwindcss/vite' {
  import type { Plugin } from 'vite'
  const tailwindcss: () => Plugin
  export default tailwindcss
}

// 为.vue文件添加类型声明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
