import type { EnhanceAppContext, Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { type Plugin, onMounted, watch, nextTick, h } from 'vue'
import { inBrowser, useData, useRoute } from 'vitepress'
import 'vitepress-markdown-timeline/dist/theme/index.css'
import './style/index.css'
// 代码块添加折叠
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'
import 'vitepress-plugin-codeblocks-fold/style/index.css'
// 基于git的页面历史
import {
  NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'
import { InjectionKey } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
// 行内链接预览
import {
  NolebaseInlineLinkPreviewPlugin,
} from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'

import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

// 组件
import Ncard from './components/Ncard.vue'
import HomeUnderline from './components/HomeUnderline.vue'
import Confetti from './components/Confetti.vue'
import ChangeLogs from './components/ChangeLog.vue'
// 页面属性
import {
  NolebasePagePropertiesPlugin,
} from '@nolebase/vitepress-plugin-page-properties'
import '@nolebase/vitepress-plugin-page-properties/client/style.css'
// <mark> 元素增强
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'
// 页面底部评论
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
// 代码块内的代码类型提示
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'
// 图标库
import '@theojs/lumen/icon'
// 页脚
import { HomeFooter } from '@theojs/lumen'
// 代码组图标样式
import 'virtual:group-icons.css'

// 切换路由页面顶部显示进度条
import { NProgress } from 'nprogress-v2/dist/index.js'

import DocPill from './components/DocPill.vue'
import Layout from './components/Layout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp ({ app, router }: EnhanceAppContext) {
    app.use(NolebaseEnhancedReadabilitiesPlugin, {
      spotlight: {
        disableHelp: true,
        defaultToggle: true,
      }
    } as Options)
    app.component('Pill', DocPill)
    app.component('HomeUnderline', HomeUnderline)
    app.component('NCard', Ncard)
    app.component('HomeFooter', HomeFooter)
    app.component('Confetti', Confetti)
    app.component('ChangeLogs', ChangeLogs)
    app.use(TwoslashFloatingVue as unknown as Plugin)
    app.use(NolebaseGitChangelogPlugin as Plugin)
    app.provide(InjectionKey, {
      hideChangelogNoChangesText: true,
      commitsRelativeTime: true,
      displayAuthorsInsideCommitLine: true,
      hideContributorsHeader: true,
      hideChangelogHeader: true
    })
    app.use(NolebaseInlineLinkPreviewPlugin as Plugin)
    app.use(NolebasePagePropertiesPlugin<{ progress: number }>() as Plugin, {
      properties,
    })

    if (inBrowser) {
      // 切换路由页面顶部显示进度条
      NProgress.configure({ showSpinner: false, speed: 100, trickleSpeed: 5 })
      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
      }
      router.onAfterRouteChanged = () => {
        NProgress.done() // 停止进度条
      }
    }
  },
  Layout: Layout,

  /** 响应式图片缩放 */
  setup () {
    // 获取前言和路由
    const route = useRoute()
    const { frontmatter } = useData()
    // giscus配置
    giscusTalk({
      repo: 'KarinJS/Karin', //仓库
      repoId: 'R_kgDOLcebnw', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOLcebn84CeJZH', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
    },
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    )
    // 代码块添加折叠
    codeblocksFold({ route, frontmatter }, false)

    const initZoom = () => {
      // 响应式的图片放大缩小
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }) // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
} satisfies Theme

const properties = {
  'zh-CN': [
    {
      key: 'tags',
      type: 'tags',
      title: '标签',
    },
    {
      key: 'progress',
      type: 'progress',
      title: '进度',
    },
    {
      key: 'createdAt',
      type: 'datetime',
      title: '创建时间',
      formatAsFrom: true,
      dateFnsLocaleName: 'zhCN',
    },
    {
      key: 'updatedAt',
      type: 'datetime',
      title: '更新时间',
      formatAsFrom: true,
      dateFnsLocaleName: 'zhCN',
    },
    {
      key: 'wordsCount',
      type: 'dynamic',
      title: '字数',
      options: {
        type: 'wordsCount',
      },
    },
    {
      key: 'readingTime',
      type: 'dynamic',
      title: '阅读时间',
      options: {
        type: 'readingTime',
        dateFnsLocaleName: 'zhCN',
      },
    },
  ],
}