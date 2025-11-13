import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { collections } from './collections/guide'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'logo.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/KarinJS/Karin' },
  ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  prevPage: true,   // 是否启用上一页链接
  nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: '',
    copyright: '',
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: 'Karin',
    description: '让插件开发变得简单有趣',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  collections,

  /**
   * 404 页面
   */
  notFound: {
    code: '404',
    title: '哎呀，页面走丢了',
    quote: '迷路了吗？别担心，即使方向不对，只要坚持寻找，终会找到属于你的那条路。',
    linkLabel: '返回导航',
    linkText: '带我回家',
  },

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true,        // 启用 页面间跳转过渡动画
    postList: true,    // 启用 博客文章列表过渡动画
    appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },

})
