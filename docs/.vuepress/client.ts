import { h } from 'vue'
import { defineClientConfig } from 'vuepress/client'
import { Layout } from 'vuepress-theme-plume/client'
import './theme/styles/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
/** Repo 卡片 */
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
/** node下载地址 */
import NodeDownloads from './theme/components/NodeDownloads.vue'
/** 插件列表 */
import PluginList from './theme/components/PluginList.vue'
/** 侧边栏引导 */
import AsideNav from './theme/components/AsideNav.vue'
/** 检测web服务商 */
import SmartDeployBadge from './components/SmartDeployBadge.vue'
/** 页脚和徽章组合组件 */
import FooterWithBadge from './components/FooterWithBadge.vue'

export default defineClientConfig({
  enhance ({ app }) {
    // built-in components
    app.component('RepoCard', RepoCard)
    app.component('NodeDownloads', NodeDownloads)
    app.component('PluginList', PluginList)
    app.component('SmartDeployBadge', SmartDeployBadge)
    app.component('FooterWithBadge', FooterWithBadge)
  },
  layouts: {
    Layout: h(Layout, null, {
      'aside-outline-after': () => h(AsideNav),
      'footer-content': () => h(FooterWithBadge),
    }),
  },
})
