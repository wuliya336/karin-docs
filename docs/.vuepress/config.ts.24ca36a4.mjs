// docs/.vuepress/config.ts
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { plumeTheme } from "vuepress-theme-plume";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { pwaPopupPlugin } from "@vuepress/plugin-pwa-popup";
import vueDevTools from "vite-plugin-vue-devtools";
import { ModuleKind, ModuleResolutionKind, ScriptTarget } from "typescript";
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Karin",
  description: "\u8BA9\u63D2\u4EF6\u5F00\u53D1\u53D8\u5F97\u7B80\u5355\u6709\u8DA3",
  /* 本地化配置 */
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Karin",
      description: "\u8BA9\u63D2\u4EF6\u5F00\u53D1\u53D8\u5F97\u7B80\u5355\u6709\u8DA3"
    },
    "/en/": {
      lang: "en-US",
      title: "Karin",
      description: "Make plugin development simple and fun"
    }
  },
  head: [
    // pwa
    ["link", { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" }],
    ["link", { rel: "shortcut icon", href: "/favicon/favicon.ico" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Karin" }],
    ["link", { rel: "manifest", href: "/favicon/site.webmanifest" }],
    // 1
    ["meta", { name: "msvalidate.01", content: "8D5DDEA97F72740B73499AA520B67A1A" }],
    ["meta", { name: "google-site-verification", content: "--V9ZVVBfakHdqwR54bgY6jnFPXz8XFBWhwsPEiBb5Q" }],
    ["meta", { property: "og:title", content: "Karin" }],
    ["meta", { property: "og:description", content: "An open source high-performance bot framework built with TypeScript. Supports functions such as multi-adapter, multi-platform access and custom renderer." }],
    ["meta", { property: "og:image", content: "https://karin.fun/logo.png" }],
    ["meta", { property: "og:image:width", content: "582" }],
    ["meta", { property: "og:image:height", content: "648" }],
    ["meta", { property: "og:url", content: "https://karin.fun/" }],
    ["meta", { property: "og:license", content: "https://karin.fun/docs/license" }],
    ["meta", { name: "author", content: "KarinJS Team" }],
    ["meta", { name: "description", content: "An open source high-performance bot framework built with TypeScript. Supports functions such as multi-adapter, multi-platform access and custom renderer." }],
    ["meta", { name: "keywords", content: "Bot frame, Robot frame, TypeScript" }],
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }]
  ],
  plugins: [
    pwaPlugin({ update: "hint" }),
    pwaPopupPlugin({
      locales: {
        "/": {
          message: "New content is available.",
          buttonText: "Refresh"
        },
        "/zh/": {
          message: "\u53D1\u73B0\u65B0\u5185\u5BB9\u53EF\u7528",
          buttonText: "\u5237\u65B0"
        }
      }
    })
  ],
  bundler: viteBundler({
    viteOptions: {
      plugins: [
        vueDevTools(),
        tailwindcss(),
        AutoImport({
          resolvers: [ElementPlusResolver()]
        }),
        Components({
          resolvers: [ElementPlusResolver({
            importStyle: "sass"
          })]
        })
      ],
      ssr: {
        noExternal: [
          "element-plus",
          /element-plus/,
          "lenis",
          "@element-plus/icons-vue"
        ]
      },
      optimizeDeps: {
        include: ["element-plus/es", "element-plus/es/components/*/style/css"]
      },
      build: {
        rollupOptions: {
          external: (id) => {
            if (id.includes(".css") && process.env.NODE_ENV === "production") {
              return false;
            }
            return false;
          }
        }
      }
    }
  }),
  shouldPrefetch: false,
  // 站点较大，页面数量较多时，不建议启用
  theme: plumeTheme({
    copyCode: {
      showInMobile: true,
      inline: true
    },
    plugins: {
      // 如果您在此处直接声明为 true，则表示开发环境和生产环境都启用该功能
      git: true,
      markdownPower: {
        imageSize: "all"
        // 'local' | 'all'
      }
    },
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
    hostname: "https://karin.fun",
    /* 文档仓库配置，用于 editLink */
    docsRepo: "KarinJS/Karin-docs",
    docsDir: "docs",
    docsBranch: "docs",
    /* 页内信息 */
    editLink: true,
    // lastUpdated: true,
    contributors: {
      mode: "block",
      avatar: true,
      avatarPattern: "https://github.com/:username.png",
      info: [
        {
          username: "ikenxuan",
          // github username
          alias: ["\u70AB\u70AB"]
          // 别名，本地 git 配置中的用户名
        },
        {
          username: "sj817",
          alias: ["CakmLexi", "\u65F6\u747E", "shijinn520", "Lain.", "Lain"]
        },
        {
          username: "yusheng929",
          alias: ["\u745C\u7B19"]
        },
        {
          username: "shiwuliya",
          alias: ["wuliya"]
        }
      ]
    },
    changelog: true,
    /* 博客文章页面链接前缀 */
    // article: '/article/',
    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: "filesystem",
    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: {
      permalink: false,
      // 是否生成永久链接
      createTime: true,
      // 是否生成创建时间
      title: true
      // 是否生成标题
    },
    // 完全禁用所有自动生成
    // autoFrontmatter: false,
    /* 本地搜索, 默认启用 */
    search: { provider: "local" },
    /**
     * Algolia DocSearch
     * 启用此搜索需要将 本地搜索 search 设置为 false
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },
    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
    codeHighlighter: {
      twoslash: {
        twoslashOptions: {
          compilerOptions: {
            moduleResolution: ModuleResolutionKind.NodeNext,
            target: ScriptTarget.ESNext,
            module: ModuleKind.NodeNext
          }
        }
      },
      themes: {
        light: "github-light-default",
        dark: "github-dark-default"
      },
      notationDiff: true,
      // 启用 diff 标记语法支持
      notationErrorLevel: true,
      // 启用错误级别标记语法支持
      notationFocus: true,
      // 启用焦点标记语法支持
      notationHighlight: true,
      // 启用高亮标记语法支持
      notationWordHighlight: true,
      // 启用单词高亮标记语法支持
      highlightLines: true,
      // 启用行高亮功能
      collapsedLines: false,
      // 禁用默认折叠代码块功能
      lineNumbers: true
      // 启用行号显示
    },
    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
    readingTime: {
      wordPerMinute: 300
      // 每分钟阅读字数
    },
    /**
      * markdown
      * @see https://theme-plume.vuejs.press/config/markdown/
      */
    markdown: {
      //   abbr: true,         // 启用 abbr 语法  *[label]: content
      //   annotation: true,   // 启用 annotation 语法  [+label]: content
      //   pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
      //   caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
      //   plot: true,         // 启用隐秘文本语法 !!xxxx!!
      //   bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
      //   youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
      //   artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
      //   audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
      //   icons: true,        // 启用内置图标语法  ::icon-name::
      //   codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
      //   replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
      //   codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
      //   jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
      npmTo: {
        tabs: ["pnpm", "npm", "yarn"]
        // 代码块组默认显示顺序
      },
      // 启用 npm-to 容器  ::: npm-to
      //   demo: true,         // 启用 demo 容器  ::: demo
      //   repl: {             // 启用 代码演示容器
      //     go: true,         // ::: go-repl
      //     rust: true,       // ::: rust-repl
      //     kotlin: true,     // ::: kotlin-repl
      //   },
      //   math: {             // 启用数学公式
      //     type: 'katex',
      //   },
      //   chartjs: true,      // 启用 chart.js
      //   echarts: true,      // 启用 ECharts
      //   mermaid: true,      // 启用 mermaid
      //   flowchart: true,    // 启用 flowchart
      image: {
        figure: true,
        // 启用 figure
        lazyload: true,
        // 启用图片懒加载
        mark: true,
        // 启用图片标记
        size: true
        // 启用图片大小
      },
      //   include: true,      // 在 Markdown 文件中导入其他 markdown 文件内容
      imageSize: "local",
      // 启用 自动填充 图片宽高属性，避免页面抖动
      codeTree: true
      // 启用 代码树
    },
    /**
     * 水印
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    // watermark: true,
    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
    comment: {
      provider: "Giscus",
      // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      comment: true,
      repo: "KarinJS/Karin",
      repoId: "R_kgDOLcebnw",
      category: "Announcements",
      categoryId: "DIC_kwDOLcebn84CeJZH",
      mapping: "pathname",
      reactionsEnabled: true,
      inputPosition: "bottom"
    }
    /**
     * 资源链接替换
     * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
     */
    // replaceAssets: 'https://cdn.example.com',
    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},
  })
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovR2l0SHViL0thcmluLWRvY3MvZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEdpdEh1YlxcXFxLYXJpbi1kb2NzXFxcXGRvY3NcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR2l0SHViL0thcmluLWRvY3MvZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci12aXRlJ1xyXG5pbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSAndnVlcHJlc3MnXHJcbmltcG9ydCB7IHBsdW1lVGhlbWUgfSBmcm9tICd2dWVwcmVzcy10aGVtZS1wbHVtZSdcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xyXG5pbXBvcnQgeyBwd2FQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLXB3YSdcclxuaW1wb3J0IHsgcHdhUG9wdXBQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLXB3YS1wb3B1cCdcclxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuaW1wb3J0IHsgTW9kdWxlS2luZCwgTW9kdWxlUmVzb2x1dGlvbktpbmQsIFNjcmlwdFRhcmdldCB9IGZyb20gJ3R5cGVzY3JpcHQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICBiYXNlOiAnLycsXHJcbiAgbGFuZzogJ3poLUNOJyxcclxuICB0aXRsZTogJ0thcmluJyxcclxuICBkZXNjcmlwdGlvbjogJ1x1OEJBOVx1NjNEMlx1NEVGNlx1NUYwMFx1NTNEMVx1NTNEOFx1NUY5N1x1N0I4MFx1NTM1NVx1NjcwOVx1OERBMycsXHJcblxyXG4gIC8qIFx1NjcyQ1x1NTczMFx1NTMxNlx1OTE0RFx1N0Y2RSAqL1xyXG4gIGxvY2FsZXM6IHtcclxuICAgICcvJzoge1xyXG4gICAgICBsYW5nOiAnemgtQ04nLFxyXG4gICAgICB0aXRsZTogJ0thcmluJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdcdThCQTlcdTYzRDJcdTRFRjZcdTVGMDBcdTUzRDFcdTUzRDhcdTVGOTdcdTdCODBcdTUzNTVcdTY3MDlcdThEQTMnXHJcbiAgICB9LFxyXG4gICAgJy9lbi8nOiB7XHJcbiAgICAgIGxhbmc6ICdlbi1VUycsXHJcbiAgICAgIHRpdGxlOiAnS2FyaW4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ01ha2UgcGx1Z2luIGRldmVsb3BtZW50IHNpbXBsZSBhbmQgZnVuJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGhlYWQ6IFtcclxuICAgIC8vIHB3YVxyXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgdHlwZTogJ2ltYWdlL3BuZycsIGhyZWY6ICcvZmF2aWNvbi9mYXZpY29uLTk2eDk2LnBuZycsIHNpemVzOiAnOTZ4OTYnIH1dLFxyXG4gICAgWydsaW5rJywgeyByZWw6ICdpY29uJywgdHlwZTogJ2ltYWdlL3N2Zyt4bWwnLCBocmVmOiAnL2Zhdmljb24vZmF2aWNvbi5zdmcnIH1dLFxyXG4gICAgWydsaW5rJywgeyByZWw6ICdzaG9ydGN1dCBpY29uJywgaHJlZjogJy9mYXZpY29uL2Zhdmljb24uaWNvJyB9XSxcclxuICAgIFsnbGluaycsIHsgcmVsOiAnYXBwbGUtdG91Y2gtaWNvbicsIHNpemVzOiAnMTgweDE4MCcsIGhyZWY6ICcvZmF2aWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZycgfV0sXHJcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZScsIGNvbnRlbnQ6ICdLYXJpbicgfV0sXHJcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ21hbmlmZXN0JywgaHJlZjogJy9mYXZpY29uL3NpdGUud2VibWFuaWZlc3QnIH1dLFxyXG4gICAgLy8gMVxyXG4gICAgWydtZXRhJywgeyBuYW1lOiAnbXN2YWxpZGF0ZS4wMScsIGNvbnRlbnQ6ICc4RDVEREVBOTdGNzI3NDBCNzM0OTlBQTUyMEI2N0ExQScgfV0sXHJcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdnb29nbGUtc2l0ZS12ZXJpZmljYXRpb24nLCBjb250ZW50OiAnLS1WOVpWVkJmYWtIZHF3UjU0YmdZNmpuRlBYejhYRkJXaHdzUEVpQmI1UScgfV0sXHJcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiAnS2FyaW4nIH1dLFxyXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogJ0FuIG9wZW4gc291cmNlIGhpZ2gtcGVyZm9ybWFuY2UgYm90IGZyYW1ld29yayBidWlsdCB3aXRoIFR5cGVTY3JpcHQuIFN1cHBvcnRzIGZ1bmN0aW9ucyBzdWNoIGFzIG11bHRpLWFkYXB0ZXIsIG11bHRpLXBsYXRmb3JtIGFjY2VzcyBhbmQgY3VzdG9tIHJlbmRlcmVyLicgfV0sXHJcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6aW1hZ2UnLCBjb250ZW50OiAnaHR0cHM6Ly9rYXJpbi5mdW4vbG9nby5wbmcnIH1dLFxyXG4gICAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOmltYWdlOndpZHRoJywgY29udGVudDogJzU4MicgfV0sXHJcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6aW1hZ2U6aGVpZ2h0JywgY29udGVudDogJzY0OCcgfV0sXHJcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6dXJsJywgY29udGVudDogJ2h0dHBzOi8va2FyaW4uZnVuLycgfV0sXHJcbiAgICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6bGljZW5zZScsIGNvbnRlbnQ6ICdodHRwczovL2thcmluLmZ1bi9kb2NzL2xpY2Vuc2UnIH1dLFxyXG4gICAgWydtZXRhJywgeyBuYW1lOiAnYXV0aG9yJywgY29udGVudDogJ0thcmluSlMgVGVhbScgfV0sXHJcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGNvbnRlbnQ6ICdBbiBvcGVuIHNvdXJjZSBoaWdoLXBlcmZvcm1hbmNlIGJvdCBmcmFtZXdvcmsgYnVpbHQgd2l0aCBUeXBlU2NyaXB0LiBTdXBwb3J0cyBmdW5jdGlvbnMgc3VjaCBhcyBtdWx0aS1hZGFwdGVyLCBtdWx0aS1wbGF0Zm9ybSBhY2Nlc3MgYW5kIGN1c3RvbSByZW5kZXJlci4nIH1dLFxyXG4gICAgWydtZXRhJywgeyBuYW1lOiAna2V5d29yZHMnLCBjb250ZW50OiAnQm90IGZyYW1lLCBSb2JvdCBmcmFtZSwgVHlwZVNjcmlwdCcgfV0sXHJcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCB0eXBlOiAnaW1hZ2UvcG5nJywgaHJlZjogJy9sb2dvLnBuZycgfV0sXHJcbiAgXSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBwd2FQbHVnaW4oeyB1cGRhdGU6ICdoaW50JyB9KSxcclxuICAgIHB3YVBvcHVwUGx1Z2luKHtcclxuICAgICAgbG9jYWxlczoge1xyXG4gICAgICAgICcvJzoge1xyXG4gICAgICAgICAgbWVzc2FnZTogJ05ldyBjb250ZW50IGlzIGF2YWlsYWJsZS4nLFxyXG4gICAgICAgICAgYnV0dG9uVGV4dDogJ1JlZnJlc2gnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJy96aC8nOiB7XHJcbiAgICAgICAgICBtZXNzYWdlOiAnXHU1M0QxXHU3M0IwXHU2NUIwXHU1MTg1XHU1QkI5XHU1M0VGXHU3NTI4JyxcclxuICAgICAgICAgIGJ1dHRvblRleHQ6ICdcdTUyMzdcdTY1QjAnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKHtcclxuICAgIHZpdGVPcHRpb25zOiB7XHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICB2dWVEZXZUb29scygpLFxyXG4gICAgICAgIHRhaWx3aW5kY3NzKCksXHJcbiAgICAgICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcih7XHJcbiAgICAgICAgICAgIGltcG9ydFN0eWxlOiAnc2FzcydcclxuICAgICAgICAgIH0pXSxcclxuICAgICAgICB9KSxcclxuICAgICAgXSxcclxuICAgICAgc3NyOiB7XHJcbiAgICAgICAgbm9FeHRlcm5hbDogW1xyXG4gICAgICAgICAgJ2VsZW1lbnQtcGx1cycsXHJcbiAgICAgICAgICAvZWxlbWVudC1wbHVzLyxcclxuICAgICAgICAgICdsZW5pcycsXHJcbiAgICAgICAgICAnQGVsZW1lbnQtcGx1cy9pY29ucy12dWUnXHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgICBpbmNsdWRlOiBbJ2VsZW1lbnQtcGx1cy9lcycsICdlbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy8qL3N0eWxlL2NzcyddXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgICAgZXh0ZXJuYWw6IChpZCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBcdTU3MjggU1NSIFx1Njc4NFx1NUVGQVx1NjVGNlx1NjM5Mlx1OTY2NCBDU1MgXHU2NTg3XHU0RUY2XHJcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnLmNzcycpICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KSxcclxuICBzaG91bGRQcmVmZXRjaDogZmFsc2UsIC8vIFx1N0FEOVx1NzBCOVx1OEY4M1x1NTkyN1x1RkYwQ1x1OTg3NVx1OTc2Mlx1NjU3MFx1OTFDRlx1OEY4M1x1NTkxQVx1NjVGNlx1RkYwQ1x1NEUwRFx1NUVGQVx1OEJBRVx1NTQyRlx1NzUyOFxyXG5cclxuICB0aGVtZTogcGx1bWVUaGVtZSh7XHJcbiAgICBjb3B5Q29kZToge1xyXG4gICAgICBzaG93SW5Nb2JpbGU6IHRydWUsXHJcbiAgICAgIGlubGluZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBsdWdpbnM6IHtcclxuICAgICAgLy8gXHU1OTgyXHU2NzlDXHU2MEE4XHU1NzI4XHU2QjY0XHU1OTA0XHU3NkY0XHU2M0E1XHU1OEYwXHU2NjBFXHU0RTNBIHRydWVcdUZGMENcdTUyMTlcdTg4NjhcdTc5M0FcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTU0OENcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTkwRkRcdTU0MkZcdTc1MjhcdThCRTVcdTUyOUZcdTgwRkRcclxuICAgICAgZ2l0OiB0cnVlLFxyXG4gICAgICBtYXJrZG93blBvd2VyOiB7XHJcbiAgICAgICAgaW1hZ2VTaXplOiAnYWxsJywgLy8gJ2xvY2FsJyB8ICdhbGwnXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLyogXHU2REZCXHU1MkEwXHU2MEE4XHU3Njg0XHU5MEU4XHU3RjcyXHU1N0RGXHU1NDBELCBcdTY3MDlcdTUyQTlcdTRFOEUgU0VPLCBcdTc1MUZcdTYyMTAgc2l0ZW1hcCAqL1xyXG4gICAgaG9zdG5hbWU6ICdodHRwczovL2thcmluLmZ1bicsXHJcblxyXG4gICAgLyogXHU2NTg3XHU2ODYzXHU0RUQzXHU1RTkzXHU5MTREXHU3RjZFXHVGRjBDXHU3NTI4XHU0RThFIGVkaXRMaW5rICovXHJcbiAgICBkb2NzUmVwbzogJ0thcmluSlMvS2FyaW4tZG9jcycsXHJcbiAgICBkb2NzRGlyOiAnZG9jcycsXHJcbiAgICBkb2NzQnJhbmNoOiAnZG9jcycsXHJcblxyXG4gICAgLyogXHU5ODc1XHU1MTg1XHU0RkUxXHU2MDZGICovXHJcbiAgICBlZGl0TGluazogdHJ1ZSxcclxuICAgIC8vIGxhc3RVcGRhdGVkOiB0cnVlLFxyXG4gICAgY29udHJpYnV0b3JzOiB7XHJcbiAgICAgIG1vZGU6ICdibG9jaycsXHJcbiAgICAgIGF2YXRhcjogdHJ1ZSxcclxuICAgICAgYXZhdGFyUGF0dGVybjogJ2h0dHBzOi8vZ2l0aHViLmNvbS86dXNlcm5hbWUucG5nJyxcclxuICAgICAgaW5mbzogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVzZXJuYW1lOiAnaWtlbnh1YW4nLCAvLyBnaXRodWIgdXNlcm5hbWVcclxuICAgICAgICAgIGFsaWFzOiBbJ1x1NzBBQlx1NzBBQiddLCAvLyBcdTUyMkJcdTU0MERcdUZGMENcdTY3MkNcdTU3MzAgZ2l0IFx1OTE0RFx1N0Y2RVx1NEUyRFx1NzY4NFx1NzUyOFx1NjIzN1x1NTQwRFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXNlcm5hbWU6ICdzajgxNycsXHJcbiAgICAgICAgICBhbGlhczogWydDYWttTGV4aScsICdcdTY1RjZcdTc0N0UnLCAnc2hpamlubjUyMCcsICdMYWluLicsICdMYWluJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1c2VybmFtZTogJ3l1c2hlbmc5MjknLFxyXG4gICAgICAgICAgYWxpYXM6IFsnXHU3NDVDXHU3QjE5J10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1c2VybmFtZTogJ3NoaXd1bGl5YScsXHJcbiAgICAgICAgICBhbGlhczogWyd3dWxpeWEnXSxcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICBjaGFuZ2Vsb2c6IHRydWUsXHJcblxyXG4gICAgLyogXHU1MzVBXHU1QkEyXHU2NTg3XHU3QUUwXHU5ODc1XHU5NzYyXHU5NEZFXHU2M0E1XHU1MjREXHU3RjAwICovXHJcbiAgICAvLyBhcnRpY2xlOiAnL2FydGljbGUvJyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1N0YxNlx1OEJEMVx1N0YxM1x1NUI1OFx1RkYwQ1x1NTJBMFx1NUZFQlx1N0YxNlx1OEJEMVx1OTAxRlx1NUVBNlxyXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9iYXNpYy8jY2FjaGVcclxuICAgICAqL1xyXG4gICAgY2FjaGU6ICdmaWxlc3lzdGVtJyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NEUzQSBtYXJrZG93biBcdTY1ODdcdTRFRjZcdTgxRUFcdTUyQThcdTZERkJcdTUyQTAgZnJvbnRtYXR0ZXIgXHU5MTREXHU3RjZFXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL2Jhc2ljLyNhdXRvZnJvbnRtYXR0ZXJcclxuICAgICAqL1xyXG4gICAgYXV0b0Zyb250bWF0dGVyOiB7XHJcbiAgICAgIHBlcm1hbGluazogZmFsc2UsICAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTZDMzhcdTRFNDVcdTk0RkVcdTYzQTVcclxuICAgICAgY3JlYXRlVGltZTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU3NTFGXHU2MjEwXHU1MjFCXHU1RUZBXHU2NUY2XHU5NUY0XHJcbiAgICAgIHRpdGxlOiB0cnVlLCAgICAgIC8vIFx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NjgwN1x1OTg5OFxyXG4gICAgfSxcclxuICAgIC8vIFx1NUI4Q1x1NTE2OFx1Nzk4MVx1NzUyOFx1NjI0MFx1NjcwOVx1ODFFQVx1NTJBOFx1NzUxRlx1NjIxMFxyXG4gICAgLy8gYXV0b0Zyb250bWF0dGVyOiBmYWxzZSxcclxuXHJcbiAgICAvKiBcdTY3MkNcdTU3MzBcdTY0MUNcdTdEMjIsIFx1OUVEOFx1OEJBNFx1NTQyRlx1NzUyOCAqL1xyXG4gICAgc2VhcmNoOiB7IHByb3ZpZGVyOiAnbG9jYWwnIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGdvbGlhIERvY1NlYXJjaFxyXG4gICAgICogXHU1NDJGXHU3NTI4XHU2QjY0XHU2NDFDXHU3RDIyXHU5NzAwXHU4OTgxXHU1QzA2IFx1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMiBzZWFyY2ggXHU4QkJFXHU3RjZFXHU0RTNBIGZhbHNlXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvY29uZmlnL3BsdWdpbnMvc2VhcmNoLyNhbGdvbGlhLWRvY3NlYXJjaFxyXG4gICAgICovXHJcbiAgICAvLyBzZWFyY2g6IHtcclxuICAgIC8vICAgcHJvdmlkZXI6ICdhbGdvbGlhJyxcclxuICAgIC8vICAgYXBwSWQ6ICcnLFxyXG4gICAgLy8gICBhcGlLZXk6ICcnLFxyXG4gICAgLy8gICBpbmRleE5hbWU6ICcnLFxyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNoaWtpIFx1NEVFM1x1NzgwMVx1OUFEOFx1NEVBRVxyXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9wbHVnaW5zL2NvZGUtaGlnaGxpZ2h0L1xyXG4gICAgICovXHJcbiAgICBjb2RlSGlnaGxpZ2h0ZXI6IHtcclxuICAgICAgdHdvc2xhc2g6IHtcclxuICAgICAgICB0d29zbGFzaE9wdGlvbnM6IHtcclxuICAgICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xyXG4gICAgICAgICAgICBtb2R1bGVSZXNvbHV0aW9uOiBNb2R1bGVSZXNvbHV0aW9uS2luZC5Ob2RlTmV4dCxcclxuICAgICAgICAgICAgdGFyZ2V0OiBTY3JpcHRUYXJnZXQuRVNOZXh0LFxyXG4gICAgICAgICAgICBtb2R1bGU6IE1vZHVsZUtpbmQuTm9kZU5leHQsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aGVtZXM6IHtcclxuICAgICAgICBsaWdodDogJ2dpdGh1Yi1saWdodC1kZWZhdWx0JyxcclxuICAgICAgICBkYXJrOiAnZ2l0aHViLWRhcmstZGVmYXVsdCdcclxuICAgICAgfSxcclxuICAgICAgbm90YXRpb25EaWZmOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjggZGlmZiBcdTY4MDdcdThCQjBcdThCRURcdTZDRDVcdTY1MkZcdTYzMDFcclxuICAgICAgbm90YXRpb25FcnJvckxldmVsOiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTk1MTlcdThCRUZcdTdFQTdcdTUyMkJcdTY4MDdcdThCQjBcdThCRURcdTZDRDVcdTY1MkZcdTYzMDFcclxuICAgICAgbm90YXRpb25Gb2N1czogdHJ1ZSwgLy8gXHU1NDJGXHU3NTI4XHU3MTI2XHU3MEI5XHU2ODA3XHU4QkIwXHU4QkVEXHU2Q0Q1XHU2NTJGXHU2MzAxXHJcbiAgICAgIG5vdGF0aW9uSGlnaGxpZ2h0OiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTlBRDhcdTRFQUVcdTY4MDdcdThCQjBcdThCRURcdTZDRDVcdTY1MkZcdTYzMDFcclxuICAgICAgbm90YXRpb25Xb3JkSGlnaGxpZ2h0OiB0cnVlLCAvLyBcdTU0MkZcdTc1MjhcdTUzNTVcdThCQ0RcdTlBRDhcdTRFQUVcdTY4MDdcdThCQjBcdThCRURcdTZDRDVcdTY1MkZcdTYzMDFcclxuICAgICAgaGlnaGxpZ2h0TGluZXM6IHRydWUsIC8vIFx1NTQyRlx1NzUyOFx1ODg0Q1x1OUFEOFx1NEVBRVx1NTI5Rlx1ODBGRFxyXG4gICAgICBjb2xsYXBzZWRMaW5lczogZmFsc2UsIC8vIFx1Nzk4MVx1NzUyOFx1OUVEOFx1OEJBNFx1NjI5OFx1NTNFMFx1NEVFM1x1NzgwMVx1NTc1N1x1NTI5Rlx1ODBGRFxyXG4gICAgICBsaW5lTnVtYmVyczogdHJ1ZSwgLy8gXHU1NDJGXHU3NTI4XHU4ODRDXHU1M0Y3XHU2NjNFXHU3OTNBXHJcbiAgICB9LFxyXG5cclxuICAgIC8qIFx1NjU4N1x1N0FFMFx1NUI1N1x1NjU3MFx1N0VERlx1OEJBMVx1MzAwMVx1OTYwNVx1OEJGQlx1NjVGNlx1OTVGNFx1RkYwQ1x1OEJCRVx1N0Y2RVx1NEUzQSBmYWxzZSBcdTUyMTlcdTc5ODFcdTc1MjggKi9cclxuICAgIHJlYWRpbmdUaW1lOiB7XHJcbiAgICAgIHdvcmRQZXJNaW51dGU6IDMwMCwgLy8gXHU2QkNGXHU1MjA2XHU5NDlGXHU5NjA1XHU4QkZCXHU1QjU3XHU2NTcwXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICAqIG1hcmtkb3duXHJcbiAgICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2NvbmZpZy9tYXJrZG93bi9cclxuICAgICAgKi9cclxuICAgIG1hcmtkb3duOiB7XHJcbiAgICAgIC8vICAgYWJicjogdHJ1ZSwgICAgICAgICAvLyBcdTU0MkZcdTc1MjggYWJiciBcdThCRURcdTZDRDUgICpbbGFiZWxdOiBjb250ZW50XHJcbiAgICAgIC8vICAgYW5ub3RhdGlvbjogdHJ1ZSwgICAvLyBcdTU0MkZcdTc1MjggYW5ub3RhdGlvbiBcdThCRURcdTZDRDUgIFsrbGFiZWxdOiBjb250ZW50XHJcbiAgICAgIC8vICAgcGRmOiB0cnVlLCAgICAgICAgICAvLyBcdTU0MkZcdTc1MjggUERGIFx1NUQ0Q1x1NTE2NSBAW3BkZl0oL3h4eC5wZGYpXHJcbiAgICAgIC8vICAgY2FuaXVzZTogdHJ1ZSwgICAgICAvLyBcdTU0MkZcdTc1MjggY2FuaXVzZSBcdThCRURcdTZDRDUgIEBbY2FuaXVzZV0oZmVhdHVyZV9uYW1lKVxyXG4gICAgICAvLyAgIHBsb3Q6IHRydWUsICAgICAgICAgLy8gXHU1NDJGXHU3NTI4XHU5NjkwXHU3OUQ4XHU2NTg3XHU2NzJDXHU4QkVEXHU2Q0Q1ICEheHh4eCEhXHJcbiAgICAgIC8vICAgYmlsaWJpbGk6IHRydWUsICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUgYmlsaWJpbGlcdTg5QzZcdTk4OTEgXHU4QkVEXHU2Q0Q1IEBbYmlsaWJpbGldKGJpZClcclxuICAgICAgLy8gICB5b3V0dWJlOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSB5b3V0dWJlXHU4OUM2XHU5ODkxIFx1OEJFRFx1NkNENSBAW3lvdXR1YmVdKHZpZGVvX2lkKVxyXG4gICAgICAvLyAgIGFydFBsYXllcjogdHJ1ZSwgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGFydFBsYXllciBcdTY3MkNcdTU3MzBcdTg5QzZcdTk4OTEgXHU4QkVEXHU2Q0Q1IEBbYXJ0UGxheWVyXSh1cmwpXHJcbiAgICAgIC8vICAgYXVkaW9SZWFkZXI6IHRydWUsICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjVcdTk3RjNcdTk4OTFcdTY3MTdcdThCRkJcdTUyOUZcdTgwRkQgXHU4QkVEXHU2Q0Q1IEBbYXVkaW9SZWFkZXJdKHVybClcclxuICAgICAgLy8gICBpY29uczogdHJ1ZSwgICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTE4NVx1N0Y2RVx1NTZGRVx1NjgwN1x1OEJFRFx1NkNENSAgOjppY29uLW5hbWU6OlxyXG4gICAgICAvLyAgIGNvZGVwZW46IHRydWUsICAgICAgLy8gXHU1NDJGXHU3NTI4XHU1RDRDXHU1MTY1IGNvZGVwZW4gXHU4QkVEXHU2Q0Q1IEBbY29kZXBlbl0odXNlci9zbGFzaClcclxuICAgICAgLy8gICByZXBsaXQ6IHRydWUsICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSByZXBsaXQgXHU4QkVEXHU2Q0Q1IEBbcmVwbGl0XSh1c2VyL3JlcGwtbmFtZSlcclxuICAgICAgLy8gICBjb2RlU2FuZGJveDogdHJ1ZSwgIC8vIFx1NTQyRlx1NzUyOFx1NUQ0Q1x1NTE2NSBjb2RlU2FuZGJveCBcdThCRURcdTZDRDUgQFtjb2RlU2FuZGJveF0oaWQpXHJcbiAgICAgIC8vICAganNmaWRkbGU6IHRydWUsICAgICAvLyBcdTU0MkZcdTc1MjhcdTVENENcdTUxNjUganNmaWRkbGUgXHU4QkVEXHU2Q0Q1IEBbanNmaWRkbGVdKHVzZXIvaWQpXHJcbiAgICAgIG5wbVRvOiB7XHJcbiAgICAgICAgdGFiczogWydwbnBtJywgJ25wbScsICd5YXJuJ10sIC8vIFx1NEVFM1x1NzgwMVx1NTc1N1x1N0VDNFx1OUVEOFx1OEJBNFx1NjYzRVx1NzkzQVx1OTg3QVx1NUU4RlxyXG4gICAgICB9LFxyXG4gICAgICAvLyBcdTU0MkZcdTc1MjggbnBtLXRvIFx1NUJCOVx1NTY2OCAgOjo6IG5wbS10b1xyXG4gICAgICAvLyAgIGRlbW86IHRydWUsICAgICAgICAgLy8gXHU1NDJGXHU3NTI4IGRlbW8gXHU1QkI5XHU1NjY4ICA6OjogZGVtb1xyXG4gICAgICAvLyAgIHJlcGw6IHsgICAgICAgICAgICAgLy8gXHU1NDJGXHU3NTI4IFx1NEVFM1x1NzgwMVx1NkYxNFx1NzkzQVx1NUJCOVx1NTY2OFxyXG4gICAgICAvLyAgICAgZ286IHRydWUsICAgICAgICAgLy8gOjo6IGdvLXJlcGxcclxuICAgICAgLy8gICAgIHJ1c3Q6IHRydWUsICAgICAgIC8vIDo6OiBydXN0LXJlcGxcclxuICAgICAgLy8gICAgIGtvdGxpbjogdHJ1ZSwgICAgIC8vIDo6OiBrb3RsaW4tcmVwbFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgbWF0aDogeyAgICAgICAgICAgICAvLyBcdTU0MkZcdTc1MjhcdTY1NzBcdTVCNjZcdTUxNkNcdTVGMEZcclxuICAgICAgLy8gICAgIHR5cGU6ICdrYXRleCcsXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICBjaGFydGpzOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOCBjaGFydC5qc1xyXG4gICAgICAvLyAgIGVjaGFydHM6IHRydWUsICAgICAgLy8gXHU1NDJGXHU3NTI4IEVDaGFydHNcclxuICAgICAgLy8gICBtZXJtYWlkOiB0cnVlLCAgICAgIC8vIFx1NTQyRlx1NzUyOCBtZXJtYWlkXHJcbiAgICAgIC8vICAgZmxvd2NoYXJ0OiB0cnVlLCAgICAvLyBcdTU0MkZcdTc1MjggZmxvd2NoYXJ0XHJcbiAgICAgIGltYWdlOiB7XHJcbiAgICAgICAgZmlndXJlOiB0cnVlLCAgICAgLy8gXHU1NDJGXHU3NTI4IGZpZ3VyZVxyXG4gICAgICAgIGxhenlsb2FkOiB0cnVlLCAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjFEMlx1NTJBMFx1OEY3RFxyXG4gICAgICAgIG1hcms6IHRydWUsICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NjgwN1x1OEJCMFxyXG4gICAgICAgIHNpemU6IHRydWUsICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NTZGRVx1NzI0N1x1NTkyN1x1NUMwRlxyXG4gICAgICB9LFxyXG4gICAgICAvLyAgIGluY2x1ZGU6IHRydWUsICAgICAgLy8gXHU1NzI4IE1hcmtkb3duIFx1NjU4N1x1NEVGNlx1NEUyRFx1NUJGQ1x1NTE2NVx1NTE3Nlx1NEVENiBtYXJrZG93biBcdTY1ODdcdTRFRjZcdTUxODVcdTVCQjlcclxuICAgICAgaW1hZ2VTaXplOiAnbG9jYWwnLCAvLyBcdTU0MkZcdTc1MjggXHU4MUVBXHU1MkE4XHU1ODZCXHU1MTQ1IFx1NTZGRVx1NzI0N1x1NUJCRFx1OUFEOFx1NUM1RVx1NjAyN1x1RkYwQ1x1OTA3Rlx1NTE0RFx1OTg3NVx1OTc2Mlx1NjI5Nlx1NTJBOFxyXG4gICAgICBjb2RlVHJlZTogdHJ1ZSwgICAgICAvLyBcdTU0MkZcdTc1MjggXHU0RUUzXHU3ODAxXHU2ODExXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHU2QzM0XHU1MzcwXHJcbiAgICAgKiBAc2VlIGh0dHBzOi8vdGhlbWUtcGx1bWUudnVlanMucHJlc3MvZ3VpZGUvZmVhdHVyZXMvd2F0ZXJtYXJrL1xyXG4gICAgICovXHJcbiAgICAvLyB3YXRlcm1hcms6IHRydWUsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThCQzRcdThCQkEgY29tbWVudHNcclxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9mZWF0dXJlcy9jb21tZW50cy9cclxuICAgICAqL1xyXG4gICAgY29tbWVudDoge1xyXG4gICAgICBwcm92aWRlcjogJ0dpc2N1cycsIC8vIFwiQXJ0YWxrXCIgfCBcIkdpc2N1c1wiIHwgXCJUd2lrb29cIiB8IFwiV2FsaW5lXCJcclxuICAgICAgY29tbWVudDogdHJ1ZSxcclxuICAgICAgcmVwbzogJ0thcmluSlMvS2FyaW4nLFxyXG4gICAgICByZXBvSWQ6ICdSX2tnRE9MY2VibncnLFxyXG4gICAgICBjYXRlZ29yeTogJ0Fubm91bmNlbWVudHMnLFxyXG4gICAgICBjYXRlZ29yeUlkOiAnRElDX2t3RE9MY2Vibjg0Q2VKWkgnLFxyXG4gICAgICBtYXBwaW5nOiAncGF0aG5hbWUnLFxyXG4gICAgICByZWFjdGlvbnNFbmFibGVkOiB0cnVlLFxyXG4gICAgICBpbnB1dFBvc2l0aW9uOiAnYm90dG9tJyxcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdThENDRcdTZFOTBcdTk0RkVcdTYzQTVcdTY2RkZcdTYzNjJcclxuICAgICAqIEBzZWUgaHR0cHM6Ly90aGVtZS1wbHVtZS52dWVqcy5wcmVzcy9ndWlkZS9mZWF0dXJlcy9yZXBsYWNlLWFzc2V0cy9cclxuICAgICAqL1xyXG4gICAgLy8gcmVwbGFjZUFzc2V0czogJ2h0dHBzOi8vY2RuLmV4YW1wbGUuY29tJyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFx1NTJBMFx1NUJDNlx1NTI5Rlx1ODBGRFxyXG4gICAgICogQHNlZSBodHRwczovL3RoZW1lLXBsdW1lLnZ1ZWpzLnByZXNzL2d1aWRlL2ZlYXR1cmVzL2VuY3J5cHRpb24vXHJcbiAgICAgKi9cclxuICAgIC8vIGVuY3J5cHQ6IHt9LFxyXG4gIH0pLFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVSLFNBQVMsbUJBQW1CO0FBQ25ULFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBQ3BDLFNBQVMsaUJBQWlCO0FBQzFCLFNBQVMsc0JBQXNCO0FBQy9CLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsWUFBWSxzQkFBc0Isb0JBQW9CO0FBRS9ELElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBO0FBQUEsRUFHYixTQUFTO0FBQUEsSUFDUCxLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNO0FBQUE7QUFBQSxJQUVKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLGFBQWEsTUFBTSw4QkFBOEIsT0FBTyxRQUFRLENBQUM7QUFBQSxJQUMvRixDQUFDLFFBQVEsRUFBRSxLQUFLLFFBQVEsTUFBTSxpQkFBaUIsTUFBTSx1QkFBdUIsQ0FBQztBQUFBLElBQzdFLENBQUMsUUFBUSxFQUFFLEtBQUssaUJBQWlCLE1BQU0sdUJBQXVCLENBQUM7QUFBQSxJQUMvRCxDQUFDLFFBQVEsRUFBRSxLQUFLLG9CQUFvQixPQUFP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Q3ZDLFFBQVEsYUFBYTtBQUFBLFlBQ3JCLFFBQVEsV0FBVztBQUFBLFVBQ3JCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQSxjQUFjO0FBQUE7QUFBQSxNQUNkLG9CQUFvQjtBQUFBO0FBQUEsTUFDcEIsZUFBZTtBQUFBO0FBQUEsTUFDZixtQkFBbUI7QUFBQTtBQUFBLE1BQ25CLHVCQUF1QjtBQUFBO0FBQUEsTUFDdkIsZ0JBQWdCO0FBQUE7QUFBQSxNQUNoQixnQkFBZ0I7QUFBQTtBQUFBLE1BQ2hCLGFBQWE7QUFBQTtBQUFBLElBQ2Y7QUFBQTtBQUFBLElBR0EsYUFBYTtBQUFBLE1BQ1gsZUFBZTtBQUFBO0FBQUEsSUFDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTUEsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWVSLE9BQU87QUFBQSxRQUNMLE1BQU0sQ0FBQyxRQUFRLE9BQU8sTUFBTTtBQUFBO0FBQUEsTUFDOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFlQSxPQUFPO0FBQUEsUUFDTCxRQUFRO0FBQUE7QUFBQSxRQUNSLFVBQVU7QUFBQTtBQUFBLFFBQ1YsTUFBTTtBQUFBO0FBQUEsUUFDTixNQUFNO0FBQUE7QUFBQSxNQUNSO0FBQUE7QUFBQSxNQUVBLFdBQVc7QUFBQTtBQUFBLE1BQ1gsVUFBVTtBQUFBO0FBQUEsSUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWUEsU0FBUztBQUFBLE1BQ1AsVUFBVTtBQUFBO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsTUFDVCxrQkFBa0I7QUFBQSxNQUNsQixlQUFlO0FBQUEsSUFDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBYUYsQ0FBQztBQUNILENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
