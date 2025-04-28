// docs/.vitepress/config.ts
import axios from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/axios@1.9.0/node_modules/axios/index.js";
import path from "node:path";
import { defineConfig } from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.4_@types+node@22.15.3_async-validator@4.2.5_axios_uidl4zgr4uhcnqqeomrdwf274y/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/data/nav.ts
var nav = [
  {
    text: "\u5FEB\u901F\u5F00\u59CB",
    items: [
      { text: "\u4ECB\u7ECD", link: "/start/start" },
      { text: "\u73AF\u5883\u5B89\u88C5", link: "/install/environment" },
      { text: "\u6846\u67B6\u5B89\u88C5", link: "/install/framework" },
      { text: "\u63A5\u5165\u5E73\u53F0", link: "/install/platform" },
      { text: "\u6E32\u67D3\u5668", link: "/start/render" },
      { text: "\u914D\u7F6E\u6587\u4EF6", link: "/start/file" },
      { text: "\u7591\u96BE\u6742\u75C7", link: "/start/problems" },
      { text: "\u5E38\u89C1\u95EE\u9898", link: "/start/faq" }
    ]
  },
  {
    text: "\u63D2\u4EF6",
    items: [
      {
        text: "\u63D2\u4EF6\u5F00\u53D1",
        items: [
          { text: "\u5F00\u53D1\u7B80\u4ECB", link: "/plugins/index" },
          { text: "\u524D\u7AEF\u914D\u7F6E", link: "/plugins/component" },
          { text: "\u5F00\u53D1\u89C4\u8303", link: "/plugins/standard" },
          { text: "\u63D2\u4EF6\u793A\u4F8B", link: "/plugins/demo" },
          { text: "\u63D2\u4EF6\u5305\u793A\u4F8B", link: "/plugins/package" }
        ]
      },
      { text: "\u63D2\u4EF6\u5546\u5E97", link: "/plugins/list" }
    ]
  },
  {
    text: "\u5F00\u53D1\u5DE5\u5177",
    items: [
      { text: "\u76EE\u5F55", link: "/utils" },
      { text: "Api\u5408\u96C6", link: "/utils/api" },
      { text: "Karin\u7C7B", link: "/utils/karin" },
      { text: "\u521B\u5EFA\u6D88\u606F\u5143\u7D20", link: "/utils/segment" },
      { text: "\u65E5\u5FD7\u7BA1\u7406", link: "/utils/logger" },
      { text: "\u5E38\u7528\u51FD\u6570\u5408\u96C6", link: "/utils/common" },
      { text: "\u952E\u503C\u5B58\u50A8", link: "/utils/redis" },
      { text: "Yaml\u7F16\u8F91\u5668", link: "/utils/YamlEditor" },
      { text: "\u56FE\u7247\u6E32\u67D3", link: "/utils/Renderer" },
      { text: "\u7AEF\u53E3\u5171\u4EAB", link: "/utils/server" },
      { text: "\u94A9\u5B50\u7CFB\u7EDF", link: "/utils/hooks" },
      { text: "\u7CFB\u7EDF\u5DE5\u5177", link: "/utils/system" }
    ]
  },
  {
    text: "\u4E8B\u4EF6",
    items: [
      { text: "\u76EE\u5F55", link: "/event/index" },
      { text: "\u6D88\u606F\u4E8B\u4EF6", link: "/event/message" },
      { text: "\u901A\u77E5\u4E8B\u4EF6", link: "/event/notice" },
      { text: "\u8BF7\u6C42\u4E8B\u4EF6", link: "/event/request" }
    ]
  },
  {
    text: "\u66F4\u65B0\u65E5\u5FD7",
    link: "/other/changelog"
  }
];
var nav_default = nav;

// docs/.vitepress/data/sidebar.ts
var sidebar = {
  "/": [
    {
      text: "\u5FEB\u901F\u5F00\u59CB",
      items: [
        { text: "\u4ECB\u7ECD", link: "/start/start" },
        { text: "\u73AF\u5883\u5B89\u88C5", link: "/install/environment" },
        { text: "\u6846\u67B6\u5B89\u88C5", link: "/install/framework" },
        { text: "webui", link: "/start/web" },
        { text: "\u63A5\u5165\u5E73\u53F0", link: "/install/platform" }
      ]
    },
    {
      text: '\u8FDB\u9636\u4F7F\u7528 <iconify-icon icon="line-md:chevron-triple-right"></iconify-icon>',
      collapsed: true,
      items: [
        { text: '\u6E32\u67D3\u5668 <iconify-icon icon="material-symbols:screenshot-monitor-outline-rounded" style="color: #3fa4fc"></iconify-icon>', link: "/start/render" },
        { text: '\u914D\u7F6E\u6587\u4EF6 <iconify-icon icon="lets-icons:setting-fill" style="color: #898989"></iconify-icon>', link: "/start/file" },
        {
          text: '\u7591\u96BE\u6742\u75C7 <iconify-icon icon="twemoji:face-with-monocle"></iconify-icon>',
          link: "/start/problems",
          items: [{
            text: '\u5E38\u89C1\u95EE\u9898\u89E3\u7B54 <iconify-icon icon="iconoir:check-square" style="color: #2aff79"></iconify-icon>',
            link: "/start/faq"
          }]
        }
      ]
    },
    {
      text: '\u63D2\u4EF6\u5F00\u53D1 <iconify-icon icon="line-md:chevron-triple-right"></iconify-icon>',
      collapsed: true,
      items: [
        { text: '\u76EE\u5F55 <iconify-icon icon="ri:menu-fold-4-line"></iconify-icon>', link: "/plugins/index" },
        { text: '\u5F00\u53D1\u89C4\u8303 <iconify-icon icon="mingcute:tag-fill" style="color: #ff2a2a"></iconify-icon>', link: "/plugins/standard" },
        { text: '\u63D2\u4EF6\u793A\u4F8B <iconify-icon icon="ix:pen-filled" style="color: #ffce2a"></iconify-icon>', link: "/plugins/demo" },
        { text: '\u63D2\u4EF6\u5305\u793A\u4F8B <iconify-icon icon="fluent-emoji-flat:package"></iconify-icon>', link: "/plugins/package" },
        { text: '\u63D2\u4EF6\u5217\u8868 <iconify-icon icon="fa-solid:list-ul" style="color: #8284ff"></iconify-icon>', link: "/plugins/list" },
        { text: '\u524D\u7AEF\u914D\u7F6E <iconify-icon icon="icon-park-solid:install" style="color: #ffce2a"></iconify-icon>', link: "/plugins/component" }
      ]
    },
    // {
    //   text: '开发工具 <iconify-icon icon="line-md:chevron-triple-right"></iconify-icon>',
    //   collapsed: true,
    //   items: [
    //     { text: '目录 <iconify-icon icon="ri:menu-fold-4-line"></iconify-icon>', link: '/utils' },
    //     { text: 'Api合集', link: '/utils/api' },
    //     { text: 'Karin类', link: '/utils/karin' },
    //     { text: '创建消息元素', link: '/utils/segment' },
    //     { text: '日志管理', link: '/utils/logger' },
    //     { text: '常用函数合集', link: '/utils/common' },
    //     { text: '键值存储', link: '/utils/redis' },
    //     { text: 'Yaml编辑器', link: '/utils/YamlEditor' },
    //     { text: '图片渲染', link: '/utils/Renderer' },
    //     { text: '端口共享', link: '/utils/server' },
    //     { text: '钩子系统', link: '/utils/hooks' },
    //     { text: '系统工具', link: '/utils/system' },
    //   ]
    // },
    {
      text: '\u4E8B\u4EF6 <iconify-icon icon="line-md:chevron-triple-right"></iconify-icon>',
      collapsed: true,
      items: [
        { text: '\u76EE\u5F55 <iconify-icon icon="ri:menu-fold-4-line"></iconify-icon>', link: "/event/index" },
        { text: '\u6D88\u606F\u4E8B\u4EF6 <iconify-icon icon="tabler:message" style="color: #ff632a"></iconify-icon>', link: "/event/message" },
        { text: '\u901A\u77E5\u4E8B\u4EF6 <iconify-icon icon="iconamoon:notification" style="color: #2aff79"></iconify-icon>', link: "/event/notice" },
        { text: '\u8BF7\u6C42\u4E8B\u4EF6 <iconify-icon icon="mingcute:tag-fill" style="color: #742aff"></iconify-icon>', link: "/event/request" }
      ]
    },
    {
      text: "API",
      collapsed: true,
      items: [
        { text: '<iconify-icon icon="carbon:export" style="color: #2a79ff"></iconify-icon> Exports', link: "/api/exports" },
        {
          text: '<iconify-icon icon="icon-park-outline:tool" style="color: #ff9f2a"></iconify-icon> Utils',
          collapsed: true,
          items: [
            { text: "\u76EE\u5F55", link: "/api/utils/index" },
            { text: "logger", link: "/api/utils/logger" },
            { text: "system", link: "/api/utils/system" },
            { text: "config", link: "/api/utils/config" },
            { text: "fs", link: "/api/utils/fs" },
            { text: "message", link: "/api/utils/message" },
            { text: "common", link: "/api/utils/common" },
            { text: "yaml", link: "/api/utils/yaml" },
            { text: "ini", link: "/api/utils/ini" },
            { text: "request", link: "/api/utils/request" },
            { text: "git", link: "/api/utils/git" },
            { text: "button", link: "/api/utils/button" },
            { text: "changelog", link: "/api/utils/changelog" }
          ]
        }
      ]
    },
    { text: '\u66F4\u65B0\u65E5\u5FD7 <iconify-icon icon="ix:log" style="color: #ff70cf"></iconify-icon>', link: "/other/changelog" }
  ]
};

// docs/.vitepress/data/search.ts
var search = {
  provider: "local",
  options: {
    locales: {
      root: {
        translations: {
          button: {
            buttonText: "\u641C\u7D22\u6587\u6863",
            buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
          },
          modal: {
            displayDetails: "\u663E\u793A\u8BE6\u7EC6\u5217\u8868",
            noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
            resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
            backButtonTitle: "\u5173\u95ED\u641C\u7D22",
            footer: {
              selectText: "\u9009\u62E9",
              navigateText: "\u5207\u6362",
              selectKeyAriaLabel: "\u8F93\u5165",
              navigateUpKeyAriaLabel: "\u4E0A\u7BAD\u5934",
              navigateDownKeyAriaLabel: "\u4E0B\u7BAD\u5934",
              closeText: "\u5173\u95ED",
              closeKeyAriaLabel: "esc"
            }
          }
        }
      }
    }
  }
};
var search_default = search;

// docs/.vitepress/data/head.ts
var head = [
  // SEO
  ["meta", { name: "msvalidate.01", content: "8D5DDEA97F72740B73499AA520B67A1A" }],
  ["meta", { name: "google-site-verification", content: "--V9ZVVBfakHdqwR54bgY6jnFPXz8XFBWhwsPEiBb5Q" }],
  ["meta", { property: "og:title", content: "Karin" }],
  ["meta", { property: "og:description", content: "An open source high-performance bot framework built with TypeScript. Supports functions such as multi-adapter, multi-platform access and custom renderer." }],
  ["meta", { property: "og:image", content: "https://karin.fun/logo-2.png" }],
  ["meta", { property: "og:image:width", content: "582" }],
  ["meta", { property: "og:image:height", content: "648" }],
  ["meta", { property: "og:url", content: "https://karin.fun/" }],
  ["meta", { property: "og:license", content: "https://karin.fun/docs/license" }],
  ["meta", { name: "author", content: "KarinJS Team" }],
  ["meta", { name: "description", content: "An open source high-performance bot framework built with TypeScript. Supports functions such as multi-adapter, multi-platform access and custom renderer." }],
  ["meta", { name: "keywords", content: "Bot frame, Robot frame, TypeScript" }],
  ["link", { rel: "icon", href: "/images/logo.png" }]
];
var head_default = head;

// docs/.vitepress/data/pwa.ts
import fg from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/index.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\QQBot\\karin-docs\\docs\\.vitepress\\data";
var pwa = {
  outDir: "../docs/.vitepress/dist",
  // 这里是以 .vitepress 为根目录的相对路径
  registerType: "autoUpdate",
  includeAssets: fg.sync("**/*.{png,svg,gif,ico,txt}", {
    cwd: resolve(__vite_injected_original_dirname, "../../public")
  }),
  devOptions: {
    enabled: true
    // 开发模式下也启用 pwa
  },
  manifest: {
    id: "/",
    name: "Karin",
    short_name: "Karin",
    description: "An open source high-performance bot framework built with TypeScript. Supports functions such as multi-adapter, multi-platform access and custom renderer.",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/images/logo-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/images/logo-512-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    screenshots: [
      {
        src: "/images/screenshot-wide.png",
        sizes: "3092x2178",
        type: "image/png",
        form_factor: "wide"
      },
      {
        src: "/images/screenshot-narrow.png",
        sizes: "1290x4995",
        type: "image/png",
        form_factor: "narrow"
      }
    ]
  },
  workbox: {
    globDirectory: "./",
    globPatterns: ["**/*.{js,css,html,png,svg,ico,txt}"]
  }
};
var pwa_default = pwa;

// docs/.vitepress/config.ts
import timeline from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/vitepress-markdown-timeline@1.2.2/node_modules/vitepress-markdown-timeline/dist/cjs/index.cjs.js";
import taskLists from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/markdown-it-task-lists@2.1.1/node_modules/markdown-it-task-lists/index.js";
import mathjax3 from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/markdown-it-mathjax3@4.3.2_encoding@0.1.13/node_modules/markdown-it-mathjax3/index.js";
import footnote_plugin from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/markdown-it-footnote@4.0.0/node_modules/markdown-it-footnote/index.mjs";
import { BiDirectionalLinks } from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/@nolebase+markdown-it-bi-directional-links@2.17.0_markdown-it@14.1.0/node_modules/@nolebase/markdown-it-bi-directional-links/dist/index.mjs";
import { InlineLinkPreviewElementTransform } from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/@nolebase+vitepress-plugin-inline-link-preview@2.17.0_typescript@5.8.3_vitepress@1.6.3_@algol_okwa2gmxqgtvtgspujqst5ncca/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/markdown-it/index.mjs";
import {
  GitChangelog,
  GitChangelogMarkdownSection
} from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/@nolebase+vitepress-plugin-git-changelog@2.17.0_typescript@5.8.3_vitepress@1.6.3_@algolia+cli_cqzo2erxazek4thtvbfutcikjq/node_modules/@nolebase/vitepress-plugin-git-changelog/dist/vite/index.mjs";
import {
  PageProperties,
  PagePropertiesMarkdownSection
} from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/@nolebase+vitepress-plugin-page-properties@2.17.0_typescript@5.8.3_vitepress@1.6.3_@algolia+c_fqcpg3afywdetea4e3yiu5w7pm/node_modules/@nolebase/vitepress-plugin-page-properties/dist/vite/index.mjs";
import { ThumbnailHashImages } from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/@nolebase+vitepress-plugin-thumbnail-hash@2.17.0_vitepress@1.6.3_@algolia+client-search@5.23._refa6besaha4b2leyalinrusyi/node_modules/@nolebase/vitepress-plugin-thumbnail-hash/dist/vite/index.mjs";
import { transformerTwoslash } from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/@shikijs+vitepress-twoslash@2.5.0_typescript@5.8.3/node_modules/@shikijs/vitepress-twoslash/dist/index.mjs";
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/vitepress-plugin-group-icons@1.5.2/node_modules/vitepress-plugin-group-icons/dist/index.mjs";
import tailwindcss from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/tailwindcss@3.4.17/node_modules/tailwindcss/lib/index.js";
import vueDevTools from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/vite-plugin-vue-devtools@7.7.5_rollup@2.79.2_vite@5.4.18_@types+node@22.15.3_less@4.3.0_terse_nledrnipmwspenctwbxrox3b6a/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import AutoImport from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/unplugin-auto-import@19.1.2_@vueuse+core@12.8.2_typescript@5.8.3_/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/unplugin-vue-components@28.5.0_@babel+parser@7.27.0_vue@3.5.13_typescript@5.8.3_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/unplugin-vue-components@28.5.0_@babel+parser@7.27.0_vue@3.5.13_typescript@5.8.3_/node_modules/unplugin-vue-components/dist/resolvers.js";
import { visualizer } from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/rollup-plugin-visualizer@5.14.0_rollup@2.79.2/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { withPwa } from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/@vite-pwa+vitepress@0.5.4_vite-plugin-pwa@0.21.1_vite@5.4.18_@types+node@22.15.3_less@4.3.0_t_35fatezmzbilwakm2pig57rg3u/node_modules/@vite-pwa/vitepress/dist/index.mjs";
import viteImagemin from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/vite-plugin-imagemin@0.6.1_vite@5.4.18_@types+node@22.15.3_less@4.3.0_terser@5.39.0_/node_modules/vite-plugin-imagemin/dist/index.mjs";
import compression from "file:///D:/QQBot/karin-docs/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.4.18_@types+node@22.15.3_less@4.3.0_terser@5.39.0_/node_modules/vite-plugin-compression/dist/index.mjs";
var __vite_injected_original_dirname2 = "D:\\QQBot\\karin-docs\\docs\\.vitepress";
var karin = await axios.get("https://registry.npmjs.org/node-karin/latest");
var config_default = withPwa(
  defineConfig({
    pwa: pwa_default,
    lang: "zh-CN",
    base: "/",
    title: "karin",
    description: "\u8BA9\u673A\u5668\u4EBA\u5F00\u53D1\u53D8\u5F97\u7B80\u5355\u6709\u8DA3",
    vite: {
      optimizeDeps: {
        exclude: ["@nolebase/vitepress-plugin-breadcrumbs/client"]
      },
      plugins: [
        compression({
          algorithm: "gzip"
          // 或 'brotliCompress'
        }),
        // 图片压缩
        viteImagemin({
          mozjpeg: { quality: 75 },
          optipng: { optimizationLevel: 5 },
          webp: { quality: 75 }
        }),
        // 自动导入
        AutoImport({
          resolvers: [ElementPlusResolver()]
        }),
        // 自动导入 ElementPlus 组件
        Components({
          resolvers: [ElementPlusResolver()]
        }),
        vueDevTools(),
        tailwindcss(),
        // 缩略图模糊哈希生成
        ThumbnailHashImages(),
        // 基于git的页面历史 - 优化git日志收集
        GitChangelog({
          maxGitLogCount: 100,
          // 减少git日志收集数量，降低耗时
          repoURL: () => "https://github.com/KarinJS/Karin"
        }),
        // 基于git的页面历史
        GitChangelogMarkdownSection({
          exclude: (id) => id.endsWith("index.md"),
          sections: {
            // 禁用页面历史
            disableChangelog: false,
            // 禁用贡献者
            disableContributors: true
          }
        }),
        // 页面属性
        PageProperties(),
        PagePropertiesMarkdownSection({
          excludes: ["index.md"]
        }),
        // 代码组图标
        groupIconVitePlugin({
          customIcon: {
            ts: "logos:typescript-icon",
            js: "logos:javascript",
            //js图标
            md: "logos:markdown",
            //markdown图标
            css: "logos:css-3",
            //css图标
            cnpm: "https://npmmirror.com/cnpm.png",
            \u88AB\u52A8\u4E8B\u4EF6\u8C03\u7528: "logos:javascript",
            \u4E3B\u52A8\u4E8B\u4EF6\u8C03\u7528: "logos:javascript",
            \u8BF7\u6C42\u793A\u4F8B: "logos:javascript",
            \u8BF7\u6C42\u793A\u4F8B1: "logos:javascript",
            \u8BF7\u6C42\u793A\u4F8B2: "logos:javascript",
            \u8BF7\u6C42\u793A\u4F8B3: "logos:javascript",
            \u8C03\u7528\u793A\u4F8B: "logos:typescript-icon",
            \u8FD4\u56DE\u503C: "vscode-icons:file-type-light-json"
          }
        }),
        visualizer()
      ],
      ssr: {
        noExternal: ["@nolebase/*", /element-plus/]
      },
      resolve: {
        alias: {
          "~/": `${path.resolve(__vite_injected_original_dirname2, "docs")}/`
        }
      },
      css: {
        preprocessorOptions: {
          scss: {
            api: "modern"
          }
        }
      },
      build: {
        minify: "esbuild",
        chunkSizeWarningLimit: 1e3,
        // 添加 rollupOptions 用于优化分块
        rollupOptions: {
          output: {
            // 控制块的大小，解决大块警告
            manualChunks: {
              "vue-vendor": ["vue", "vue-router"],
              "element-plus": ["element-plus"],
              "markdown-it": [/markdown-it/],
              "vueuse": ["@vueuse/core"],
              "shiki": [/@shikijs/],
              "plugins": ["@nolebase/vitepress-plugin-git-changelog"]
            },
            // 减少入口块大小
            entryFileNames: "assets/[name].[hash].js",
            chunkFileNames: "assets/[name].[hash].js",
            assetFileNames: "assets/[name].[hash].[ext]"
          },
          // 优化编译性能
          treeshake: {
            preset: "smallest"
          }
        },
        // 修改CSS提取方式
        cssCodeSplit: true,
        // 启用持久化缓存
        modulePreload: {
          polyfill: false
        },
        // 并行构建以提高速度
        reportCompressedSize: false,
        // 禁用源映射加快构建
        sourcemap: false,
        // 精简日志输出
        assetsInlineLimit: 4096,
        // 减少写入磁盘操作
        emptyOutDir: true,
        // 减少哈希计算
        write: true
      },
      worker: {
        format: "es"
      },
      server: {
        fs: {
          // 允许超出根目录范围
          strict: false
        }
      }
    },
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag)
        }
      }
    },
    markdown: {
      math: true,
      // 全局代码块行号显示
      lineNumbers: false,
      image: {
        // 开启图片懒加载
        lazyLoading: true
      },
      config: async (md) => {
        md.use(timeline);
        md.use(taskLists);
        md.use(mathjax3);
        md.use(footnote_plugin);
        md.use(BiDirectionalLinks());
        md.use(InlineLinkPreviewElementTransform);
        md.use(groupIconMdPlugin);
      },
      // 代码块内的代码类型提示，与代码块行号渲染冲突
      codeTransformers: [
        // @ts-ignore
        transformerTwoslash()
      ]
    },
    // 所有的页面都应该被预加载
    shouldPreload: () => true,
    // 将元数据提取到单独的块中。
    metaChunk: true,
    // transformPageData (pageData, context) {
    //   // 面包屑导航
    //   generateBreadcrumbsData(pageData, context)
    // },
    // 移除地址的.html
    cleanUrls: true,
    // 显示最后更新时间
    lastUpdated: true,
    head: head_default,
    themeConfig: {
      siteTitle: `Karin <code class="VPBadge tip">v${karin.data.version}</code>`,
      logo: {
        src: "/logo.png"
      },
      editLink: {
        pattern: "https://github.com/KarinJS/Karin-docs/edit/docs/docs/:path",
        text: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875\u9762"
      },
      outline: {
        level: [2, 4],
        label: "\u9875\u9762\u5BFC\u822A"
      },
      nav: nav_default,
      sidebar,
      search: search_default,
      lightModeSwitchTitle: "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F",
      darkModeSwitchTitle: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F",
      darkModeSwitchLabel: "\u4E3B\u9898\u6A21\u5F0F",
      socialLinks: [
        { icon: "github", link: "https://github.com/KarinJS/Karin" },
        {
          icon: {
            svg: '<svg t="1718335878865" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1729" width="200" height="200"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m259.168-568.896h-290.752a25.28 25.28 0 0 0-25.28 25.28l-0.032 63.232c0 13.952 11.296 25.28 25.28 25.28h177.024a25.28 25.28 0 0 1 25.28 25.28v12.64a75.84 75.84 0 0 1-75.84 75.84h-240.224a25.28 25.28 0 0 1-25.28-25.28v-240.192a75.84 75.84 0 0 1 75.84-75.84h353.92a25.28 25.28 0 0 0 25.28-25.28l0.064-63.2a25.312 25.312 0 0 0-25.28-25.312H417.184a189.632 189.632 0 0 0-189.632 189.6v353.952c0 13.952 11.328 25.28 25.28 25.28h372.928a170.656 170.656 0 0 0 170.656-170.656v-145.376a25.28 25.28 0 0 0-25.28-25.28z" p-id="1730"></path></svg>'
          },
          link: "https://gitee.com/KarinJS/Karin"
        },
        { icon: "npm", link: "https://www.npmjs.com/package/node-karin" }
      ],
      docFooter: {
        prev: "\u4E0A\u4E00\u9875",
        next: "\u4E0B\u4E00\u9875"
      },
      lastUpdated: {
        text: "\u6700\u540E\u7F16\u8F91\u4E8E",
        formatOptions: {
          dateStyle: "long",
          timeStyle: "long",
          hourCycle: "h12"
        }
      },
      outlineTitle: "\u672C\u9875\u5927\u7EB2",
      // 侧边栏文字更改
      sidebarMenuLabel: "\u76EE\u5F55",
      // 返回顶部文字修改
      returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8"
    },
    sitemap: {
      hostname: "https://karin.fun"
    }
  })
);
var customElements = [
  "mjx-container",
  "mjx-assistive-mml",
  "math",
  "maction",
  "maligngroup",
  "malignmark",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mi",
  "mlongdiv",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mscarries",
  "mscarry",
  "mscarries",
  "msgroup",
  "mstack",
  "mlongdiv",
  "msline",
  "mstack",
  "mspace",
  "msqrt",
  "msrow",
  "mstack",
  "mstack",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "semantics",
  "math",
  "mi",
  "mn",
  "mo",
  "ms",
  "mspace",
  "mtext",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "msqrt",
  "mstyle",
  "mmultiscripts",
  "mover",
  "mprescripts",
  "msub",
  "msubsup",
  "msup",
  "munder",
  "munderover",
  "none",
  "maligngroup",
  "malignmark",
  "mtable",
  "mtd",
  "mtr",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "msline",
  "msrow",
  "mstack",
  "maction",
  "semantics",
  "annotation",
  "annotation-xml"
];
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvZGF0YS9uYXYudHMiLCAiZG9jcy8udml0ZXByZXNzL2RhdGEvc2lkZWJhci50cyIsICJkb2NzLy52aXRlcHJlc3MvZGF0YS9zZWFyY2gudHMiLCAiZG9jcy8udml0ZXByZXNzL2RhdGEvaGVhZC50cyIsICJkb2NzLy52aXRlcHJlc3MvZGF0YS9wd2EudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxRUUJvdFxcXFxrYXJpbi1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUVFCb3RcXFxca2FyaW4tZG9jc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9RUUJvdC9rYXJpbi1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5pbXBvcnQgbmF2IGZyb20gJy4vZGF0YS9uYXYnXHJcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tICcuL2RhdGEvc2lkZWJhcidcclxuaW1wb3J0IHNlYXJjaCBmcm9tICcuL2RhdGEvc2VhcmNoJ1xyXG5pbXBvcnQgaGVhZCBmcm9tICcuL2RhdGEvaGVhZCdcclxuaW1wb3J0IHB3YSBmcm9tICcuL2RhdGEvcHdhJ1xyXG4vLyBcdTY1RjZcdTk1RjRcdTdFQkZcclxuaW1wb3J0IHRpbWVsaW5lIGZyb20gJ3ZpdGVwcmVzcy1tYXJrZG93bi10aW1lbGluZSdcclxuLy8gQHRzLWlnbm9yZSBcdTRFRkJcdTUyQTFcdTUyMTdcdTg4NjhcclxuaW1wb3J0IHRhc2tMaXN0cyBmcm9tICdtYXJrZG93bi1pdC10YXNrLWxpc3RzJ1xyXG4vLyBtYXRoamF4M1x1NTE2Q1x1NUYwRlx1NjUyRlx1NjMwMVxyXG5pbXBvcnQgbWF0aGpheDMgZnJvbSAnbWFya2Rvd24taXQtbWF0aGpheDMnXHJcbi8vIFx1OTg3NVx1ODExQVxyXG5pbXBvcnQgZm9vdG5vdGVfcGx1Z2luIGZyb20gJ21hcmtkb3duLWl0LWZvb3Rub3RlJ1xyXG4vLyBcdTUzQ0NcdTU0MTFcdTk0RkVcdTYzQTVcclxuaW1wb3J0IHsgQmlEaXJlY3Rpb25hbExpbmtzIH0gZnJvbSAnQG5vbGViYXNlL21hcmtkb3duLWl0LWJpLWRpcmVjdGlvbmFsLWxpbmtzJ1xyXG4vLyBcdTg4NENcdTUxODVcdTk0RkVcdTYzQTVcdTk4ODRcdTg5QzhcclxuaW1wb3J0IHsgSW5saW5lTGlua1ByZXZpZXdFbGVtZW50VHJhbnNmb3JtIH0gZnJvbSAnQG5vbGViYXNlL3ZpdGVwcmVzcy1wbHVnaW4taW5saW5lLWxpbmstcHJldmlldy9tYXJrZG93bi1pdCdcclxuLy8gXHU1N0ZBXHU0RThFZ2l0XHU3Njg0XHU5ODc1XHU5NzYyXHU1Mzg2XHU1M0YyXHJcbmltcG9ydCB7XHJcbiAgR2l0Q2hhbmdlbG9nLFxyXG4gIEdpdENoYW5nZWxvZ01hcmtkb3duU2VjdGlvblxyXG59IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWdpdC1jaGFuZ2Vsb2cvdml0ZSdcclxuLy8gXHU5ODc1XHU5NzYyXHU1QzVFXHU2MDI3XHJcbmltcG9ydCB7XHJcbiAgUGFnZVByb3BlcnRpZXMsXHJcbiAgUGFnZVByb3BlcnRpZXNNYXJrZG93blNlY3Rpb25cclxufSBmcm9tICdAbm9sZWJhc2Uvdml0ZXByZXNzLXBsdWdpbi1wYWdlLXByb3BlcnRpZXMvdml0ZSdcclxuLy8gXHU3RjI5XHU3NTY1XHU1NkZFXHU2QTIxXHU3Q0NBXHU1NEM4XHU1RTBDXHU3NTFGXHU2MjEwXHJcbmltcG9ydCB7IFRodW1ibmFpbEhhc2hJbWFnZXMgfSBmcm9tICdAbm9sZWJhc2Uvdml0ZXByZXNzLXBsdWdpbi10aHVtYm5haWwtaGFzaC92aXRlJ1xyXG4vLyBcdTRFRTNcdTc4MDFcdTU3NTdcdTUxODVcdTc2ODRcdTRFRTNcdTc4MDFcdTdDN0JcdTU3OEJcdTYzRDBcdTc5M0FcclxuaW1wb3J0IHsgdHJhbnNmb3JtZXJUd29zbGFzaCB9IGZyb20gJ0BzaGlraWpzL3ZpdGVwcmVzcy10d29zbGFzaCdcclxuLy8gXHU0RUUzXHU3ODAxXHU3RUM0XHU1NkZFXHU2ODA3XHJcbmltcG9ydCB7XHJcbiAgZ3JvdXBJY29uTWRQbHVnaW4sXHJcbiAgZ3JvdXBJY29uVml0ZVBsdWdpbixcclxuICBsb2NhbEljb25Mb2FkZXJcclxufSBmcm9tICd2aXRlcHJlc3MtcGx1Z2luLWdyb3VwLWljb25zJ1xyXG4vLyBcdTk3NjJcdTUzMDVcdTVDNTFcdTVCRkNcdTgyMkFcclxuLy8gaW1wb3J0IHsgZ2VuZXJhdGVCcmVhZGNydW1ic0RhdGEgfSBmcm9tICdAbm9sZWJhc2Uvdml0ZXByZXNzLXBsdWdpbi1icmVhZGNydW1icy92aXRlcHJlc3MnXHJcblxyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAndGFpbHdpbmRjc3MnXHJcbmltcG9ydCB2dWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXHJcblxyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG4vLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgRWxlbWVudFBsdXMgXHU3RUM0XHU0RUY2XHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXHJcblxyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJ1xyXG4vLyBwd2EgXHU2NTJGXHU2MzAxXHJcbmltcG9ydCB7IHdpdGhQd2EgfSBmcm9tICdAdml0ZS1wd2Evdml0ZXByZXNzJ1xyXG5pbXBvcnQgdml0ZUltYWdlbWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJ1xyXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nXHJcblxyXG5cclxuLyoqIGthcmluIHBrZyAqL1xyXG5jb25zdCBrYXJpbiA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvbm9kZS1rYXJpbi9sYXRlc3QnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFB3YShcclxuICBkZWZpbmVDb25maWcoe1xyXG4gICAgcHdhOiBwd2EsXHJcbiAgICBsYW5nOiAnemgtQ04nLFxyXG4gICAgYmFzZTogJy8nLFxyXG4gICAgdGl0bGU6ICdrYXJpbicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1x1OEJBOVx1NjczQVx1NTY2OFx1NEVCQVx1NUYwMFx1NTNEMVx1NTNEOFx1NUY5N1x1N0I4MFx1NTM1NVx1NjcwOVx1OERBMycsXHJcbiAgICB2aXRlOiB7XHJcbiAgICAgIG9wdGltaXplRGVwczoge1xyXG4gICAgICAgIGV4Y2x1ZGU6IFsnQG5vbGViYXNlL3ZpdGVwcmVzcy1wbHVnaW4tYnJlYWRjcnVtYnMvY2xpZW50J11cclxuICAgICAgfSxcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIGNvbXByZXNzaW9uKHtcclxuICAgICAgICAgIGFsZ29yaXRobTogJ2d6aXAnLCAvLyBcdTYyMTYgJ2Jyb3RsaUNvbXByZXNzJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIFx1NTZGRVx1NzI0N1x1NTM4Qlx1N0YyOVxyXG4gICAgICAgIHZpdGVJbWFnZW1pbih7XHJcbiAgICAgICAgICBtb3pqcGVnOiB7IHF1YWxpdHk6IDc1IH0sXHJcbiAgICAgICAgICBvcHRpcG5nOiB7IG9wdGltaXphdGlvbkxldmVsOiA1IH0sXHJcbiAgICAgICAgICB3ZWJwOiB7IHF1YWxpdHk6IDc1IH1cclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcclxuICAgICAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjUgRWxlbWVudFBsdXMgXHU3RUM0XHU0RUY2XHJcbiAgICAgICAgQ29tcG9uZW50cyh7XHJcbiAgICAgICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdnVlRGV2VG9vbHMoKSxcclxuICAgICAgICB0YWlsd2luZGNzcygpLFxyXG4gICAgICAgIC8vIFx1N0YyOVx1NzU2NVx1NTZGRVx1NkEyMVx1N0NDQVx1NTRDOFx1NUUwQ1x1NzUxRlx1NjIxMFxyXG4gICAgICAgIFRodW1ibmFpbEhhc2hJbWFnZXMoKSxcclxuICAgICAgICAvLyBcdTU3RkFcdTRFOEVnaXRcdTc2ODRcdTk4NzVcdTk3NjJcdTUzODZcdTUzRjIgLSBcdTRGMThcdTUzMTZnaXRcdTY1RTVcdTVGRDdcdTY1MzZcdTk2QzZcclxuICAgICAgICBHaXRDaGFuZ2Vsb2coe1xyXG4gICAgICAgICAgbWF4R2l0TG9nQ291bnQ6IDEwMCwgLy8gXHU1MUNGXHU1QzExZ2l0XHU2NUU1XHU1RkQ3XHU2NTM2XHU5NkM2XHU2NTcwXHU5MUNGXHVGRjBDXHU5NjREXHU0RjRFXHU4MDE3XHU2NUY2XHJcbiAgICAgICAgICByZXBvVVJMOiAoKSA9PiAnaHR0cHM6Ly9naXRodWIuY29tL0thcmluSlMvS2FyaW4nXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gXHU1N0ZBXHU0RThFZ2l0XHU3Njg0XHU5ODc1XHU5NzYyXHU1Mzg2XHU1M0YyXHJcbiAgICAgICAgR2l0Q2hhbmdlbG9nTWFya2Rvd25TZWN0aW9uKHtcclxuICAgICAgICAgIGV4Y2x1ZGU6IChpZCkgPT4gaWQuZW5kc1dpdGgoJ2luZGV4Lm1kJyksXHJcbiAgICAgICAgICBzZWN0aW9uczoge1xyXG4gICAgICAgICAgICAvLyBcdTc5ODFcdTc1MjhcdTk4NzVcdTk3NjJcdTUzODZcdTUzRjJcclxuICAgICAgICAgICAgZGlzYWJsZUNoYW5nZWxvZzogZmFsc2UsXHJcbiAgICAgICAgICAgIC8vIFx1Nzk4MVx1NzUyOFx1OEQyMVx1NzMyRVx1ODAwNVxyXG4gICAgICAgICAgICBkaXNhYmxlQ29udHJpYnV0b3JzOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkgYXMgYW55LFxyXG4gICAgICAgIC8vIFx1OTg3NVx1OTc2Mlx1NUM1RVx1NjAyN1xyXG4gICAgICAgIFBhZ2VQcm9wZXJ0aWVzKCksXHJcbiAgICAgICAgUGFnZVByb3BlcnRpZXNNYXJrZG93blNlY3Rpb24oe1xyXG4gICAgICAgICAgZXhjbHVkZXM6IFsnaW5kZXgubWQnXVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIFx1NEVFM1x1NzgwMVx1N0VDNFx1NTZGRVx1NjgwN1xyXG4gICAgICAgIGdyb3VwSWNvblZpdGVQbHVnaW4oe1xyXG4gICAgICAgICAgY3VzdG9tSWNvbjoge1xyXG4gICAgICAgICAgICB0czogJ2xvZ29zOnR5cGVzY3JpcHQtaWNvbicsXHJcbiAgICAgICAgICAgIGpzOiAnbG9nb3M6amF2YXNjcmlwdCcsIC8vanNcdTU2RkVcdTY4MDdcclxuICAgICAgICAgICAgbWQ6ICdsb2dvczptYXJrZG93bicsIC8vbWFya2Rvd25cdTU2RkVcdTY4MDdcclxuICAgICAgICAgICAgY3NzOiAnbG9nb3M6Y3NzLTMnLCAvL2Nzc1x1NTZGRVx1NjgwN1xyXG4gICAgICAgICAgICBjbnBtOiAnaHR0cHM6Ly9ucG1taXJyb3IuY29tL2NucG0ucG5nJyxcclxuICAgICAgICAgICAgXHU4OEFCXHU1MkE4XHU0RThCXHU0RUY2XHU4QzAzXHU3NTI4OiAnbG9nb3M6amF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgIFx1NEUzQlx1NTJBOFx1NEU4Qlx1NEVGNlx1OEMwM1x1NzUyODogJ2xvZ29zOmphdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICBcdThCRjdcdTZDNDJcdTc5M0FcdTRGOEI6ICdsb2dvczpqYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgXHU4QkY3XHU2QzQyXHU3OTNBXHU0RjhCMTogJ2xvZ29zOmphdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICBcdThCRjdcdTZDNDJcdTc5M0FcdTRGOEIyOiAnbG9nb3M6amF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgIFx1OEJGN1x1NkM0Mlx1NzkzQVx1NEY4QjM6ICdsb2dvczpqYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgXHU4QzAzXHU3NTI4XHU3OTNBXHU0RjhCOiAnbG9nb3M6dHlwZXNjcmlwdC1pY29uJyxcclxuICAgICAgICAgICAgXHU4RkQ0XHU1NkRFXHU1MDNDOiAndnNjb2RlLWljb25zOmZpbGUtdHlwZS1saWdodC1qc29uJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHZpc3VhbGl6ZXIoKVxyXG4gICAgICBdLFxyXG4gICAgICBzc3I6IHtcclxuICAgICAgICBub0V4dGVybmFsOiBbJ0Bub2xlYmFzZS8qJywgL2VsZW1lbnQtcGx1cy9dXHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgJ34vJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2RvY3MnKX0vYFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY3NzOiB7XHJcbiAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICAgICAgc2Nzczoge1xyXG4gICAgICAgICAgICBhcGk6ICdtb2Rlcm4nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBidWlsZDoge1xyXG4gICAgICAgIG1pbmlmeTogJ2VzYnVpbGQnLFxyXG4gICAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCxcclxuICAgICAgICAvLyBcdTZERkJcdTUyQTAgcm9sbHVwT3B0aW9ucyBcdTc1MjhcdTRFOEVcdTRGMThcdTUzMTZcdTUyMDZcdTU3NTdcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgLy8gXHU2M0E3XHU1MjM2XHU1NzU3XHU3Njg0XHU1OTI3XHU1QzBGXHVGRjBDXHU4OUUzXHU1MUIzXHU1OTI3XHU1NzU3XHU4QjY2XHU1NDRBXHJcbiAgICAgICAgICAgIG1hbnVhbENodW5rczoge1xyXG4gICAgICAgICAgICAgICd2dWUtdmVuZG9yJzogWyd2dWUnLCAndnVlLXJvdXRlciddLFxyXG4gICAgICAgICAgICAgICdlbGVtZW50LXBsdXMnOiBbJ2VsZW1lbnQtcGx1cyddLFxyXG4gICAgICAgICAgICAgICdtYXJrZG93bi1pdCc6IFsvbWFya2Rvd24taXQvXSxcclxuICAgICAgICAgICAgICAndnVldXNlJzogWydAdnVldXNlL2NvcmUnXSxcclxuICAgICAgICAgICAgICAnc2hpa2knOiBbL0BzaGlraWpzL10sXHJcbiAgICAgICAgICAgICAgJ3BsdWdpbnMnOiBbJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWdpdC1jaGFuZ2Vsb2cnXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBcdTUxQ0ZcdTVDMTFcdTUxNjVcdTUzRTNcdTU3NTdcdTU5MjdcdTVDMEZcclxuICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLltoYXNoXS5qcycsXHJcbiAgICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS5baGFzaF0uanMnLFxyXG4gICAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0uW2hhc2hdLltleHRdJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIFx1NEYxOFx1NTMxNlx1N0YxNlx1OEJEMVx1NjAyN1x1ODBGRFxyXG4gICAgICAgICAgdHJlZXNoYWtlOiB7XHJcbiAgICAgICAgICAgIHByZXNldDogJ3NtYWxsZXN0J1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gXHU0RkVFXHU2NTM5Q1NTXHU2M0QwXHU1M0Q2XHU2NUI5XHU1RjBGXHJcbiAgICAgICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxyXG4gICAgICAgIC8vIFx1NTQyRlx1NzUyOFx1NjMwMVx1NEU0NVx1NTMxNlx1N0YxM1x1NUI1OFxyXG4gICAgICAgIG1vZHVsZVByZWxvYWQ6IHtcclxuICAgICAgICAgIHBvbHlmaWxsOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gXHU1RTc2XHU4ODRDXHU2Nzg0XHU1RUZBXHU0RUU1XHU2M0QwXHU5QUQ4XHU5MDFGXHU1RUE2XHJcbiAgICAgICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLFxyXG4gICAgICAgIC8vIFx1Nzk4MVx1NzUyOFx1NkU5MFx1NjYyMFx1NUMwNFx1NTJBMFx1NUZFQlx1Njc4NFx1NUVGQVxyXG4gICAgICAgIHNvdXJjZW1hcDogZmFsc2UsXHJcbiAgICAgICAgLy8gXHU3Q0JFXHU3QjgwXHU2NUU1XHU1RkQ3XHU4RjkzXHU1MUZBXHJcbiAgICAgICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYsXHJcbiAgICAgICAgLy8gXHU1MUNGXHU1QzExXHU1MTk5XHU1MTY1XHU3OEMxXHU3NkQ4XHU2NENEXHU0RjVDXHJcbiAgICAgICAgZW1wdHlPdXREaXI6IHRydWUsXHJcbiAgICAgICAgLy8gXHU1MUNGXHU1QzExXHU1NEM4XHU1RTBDXHU4QkExXHU3Qjk3XHJcbiAgICAgICAgd3JpdGU6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgd29ya2VyOiB7XHJcbiAgICAgICAgZm9ybWF0OiAnZXMnXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlcnZlcjoge1xyXG4gICAgICAgIGZzOiB7XHJcbiAgICAgICAgICAvLyBcdTUxNDFcdThCQjhcdThEODVcdTUxRkFcdTY4MzlcdTc2RUVcdTVGNTVcdTgzMDNcdTU2RjRcclxuICAgICAgICAgIHN0cmljdDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB2dWU6IHtcclxuICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICBjb21waWxlck9wdGlvbnM6IHtcclxuICAgICAgICAgIGlzQ3VzdG9tRWxlbWVudDogKHRhZykgPT4gY3VzdG9tRWxlbWVudHMuaW5jbHVkZXModGFnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtYXJrZG93bjoge1xyXG4gICAgICBtYXRoOiB0cnVlLFxyXG4gICAgICAvLyBcdTUxNjhcdTVDNDBcdTRFRTNcdTc4MDFcdTU3NTdcdTg4NENcdTUzRjdcdTY2M0VcdTc5M0FcclxuICAgICAgbGluZU51bWJlcnM6IGZhbHNlLFxyXG4gICAgICBpbWFnZToge1xyXG4gICAgICAgIC8vIFx1NUYwMFx1NTQyRlx1NTZGRVx1NzI0N1x1NjFEMlx1NTJBMFx1OEY3RFxyXG4gICAgICAgIGxhenlMb2FkaW5nOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZzogYXN5bmMgKG1kKSA9PiB7XHJcbiAgICAgICAgLy8gXHU2NUY2XHU5NUY0XHU3RUJGXHJcbiAgICAgICAgbWQudXNlKHRpbWVsaW5lKVxyXG4gICAgICAgIC8vIFx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFxyXG4gICAgICAgIG1kLnVzZSh0YXNrTGlzdHMpXHJcbiAgICAgICAgLy8gXHU1MTZDXHU1RjBGXHJcbiAgICAgICAgbWQudXNlKG1hdGhqYXgzKVxyXG4gICAgICAgIC8vIFx1ODExQVx1NkNFOFxyXG4gICAgICAgIG1kLnVzZShmb290bm90ZV9wbHVnaW4pXHJcbiAgICAgICAgLy8gXHU1M0NDXHU1NDExXHU5NEZFXHU2M0E1XHJcbiAgICAgICAgbWQudXNlKEJpRGlyZWN0aW9uYWxMaW5rcygpKVxyXG4gICAgICAgIC8vIFx1ODg0Q1x1NTE4NVx1OTRGRVx1NjNBNVx1OTg4NFx1ODlDOFxyXG4gICAgICAgIG1kLnVzZShJbmxpbmVMaW5rUHJldmlld0VsZW1lbnRUcmFuc2Zvcm0pXHJcbiAgICAgICAgLy8gXHU0RUUzXHU3ODAxXHU3RUM0XHU1NkZFXHU2ODA3XHJcbiAgICAgICAgbWQudXNlKGdyb3VwSWNvbk1kUGx1Z2luKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyBcdTRFRTNcdTc4MDFcdTU3NTdcdTUxODVcdTc2ODRcdTRFRTNcdTc4MDFcdTdDN0JcdTU3OEJcdTYzRDBcdTc5M0FcdUZGMENcdTRFMEVcdTRFRTNcdTc4MDFcdTU3NTdcdTg4NENcdTUzRjdcdTZFMzJcdTY3RDNcdTUxQjJcdTdBODFcclxuICAgICAgY29kZVRyYW5zZm9ybWVyczogW1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICB0cmFuc2Zvcm1lclR3b3NsYXNoKClcclxuICAgICAgXVxyXG4gICAgfSxcclxuICAgIC8vIFx1NjI0MFx1NjcwOVx1NzY4NFx1OTg3NVx1OTc2Mlx1OTBGRFx1NUU5NFx1OEJFNVx1ODhBQlx1OTg4NFx1NTJBMFx1OEY3RFxyXG4gICAgc2hvdWxkUHJlbG9hZDogKCkgPT4gdHJ1ZSxcclxuICAgIC8vIFx1NUMwNlx1NTE0M1x1NjU3MFx1NjM2RVx1NjNEMFx1NTNENlx1NTIzMFx1NTM1NVx1NzJFQ1x1NzY4NFx1NTc1N1x1NEUyRFx1MzAwMlxyXG4gICAgbWV0YUNodW5rOiB0cnVlLFxyXG4gICAgLy8gdHJhbnNmb3JtUGFnZURhdGEgKHBhZ2VEYXRhLCBjb250ZXh0KSB7XHJcbiAgICAvLyAgIC8vIFx1OTc2Mlx1NTMwNVx1NUM1MVx1NUJGQ1x1ODIyQVxyXG4gICAgLy8gICBnZW5lcmF0ZUJyZWFkY3J1bWJzRGF0YShwYWdlRGF0YSwgY29udGV4dClcclxuICAgIC8vIH0sXHJcbiAgICAvLyBcdTc5RkJcdTk2NjRcdTU3MzBcdTU3NDBcdTc2ODQuaHRtbFxyXG4gICAgY2xlYW5VcmxzOiB0cnVlLFxyXG4gICAgLy8gXHU2NjNFXHU3OTNBXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XHJcbiAgICBsYXN0VXBkYXRlZDogdHJ1ZSxcclxuICAgIGhlYWQ6IGhlYWQsXHJcbiAgICB0aGVtZUNvbmZpZzoge1xyXG4gICAgICBzaXRlVGl0bGU6IGBLYXJpbiA8Y29kZSBjbGFzcz1cIlZQQmFkZ2UgdGlwXCI+diR7a2FyaW4uZGF0YS52ZXJzaW9ufTwvY29kZT5gLFxyXG4gICAgICBsb2dvOiB7XHJcbiAgICAgICAgc3JjOiAnL2xvZ28ucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICBlZGl0TGluazoge1xyXG4gICAgICAgIHBhdHRlcm46ICdodHRwczovL2dpdGh1Yi5jb20vS2FyaW5KUy9LYXJpbi1kb2NzL2VkaXQvZG9jcy9kb2NzLzpwYXRoJyxcclxuICAgICAgICB0ZXh0OiAnXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcdTk3NjInXHJcbiAgICAgIH0sXHJcbiAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICBsZXZlbDogWzIsIDRdLFxyXG4gICAgICAgIGxhYmVsOiAnXHU5ODc1XHU5NzYyXHU1QkZDXHU4MjJBJ1xyXG4gICAgICB9LFxyXG4gICAgICBuYXY6IG5hdiBhcyBbXSxcclxuICAgICAgc2lkZWJhcjogc2lkZWJhcixcclxuICAgICAgc2VhcmNoOiBzZWFyY2ggYXMgYW55LFxyXG4gICAgICBsaWdodE1vZGVTd2l0Y2hUaXRsZTogJ1x1NTIwN1x1NjM2Mlx1NTIzMFx1NkQ0NVx1ODI3Mlx1NkEyMVx1NUYwRicsXHJcbiAgICAgIGRhcmtNb2RlU3dpdGNoVGl0bGU6ICdcdTUyMDdcdTYzNjJcdTUyMzBcdTZERjFcdTgyNzJcdTZBMjFcdTVGMEYnLFxyXG4gICAgICBkYXJrTW9kZVN3aXRjaExhYmVsOiAnXHU0RTNCXHU5ODk4XHU2QTIxXHU1RjBGJyxcclxuICAgICAgc29jaWFsTGlua3M6IFtcclxuICAgICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0thcmluSlMvS2FyaW4nIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBzdmc6ICc8c3ZnIHQ9XCIxNzE4MzM1ODc4ODY1XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIxNzI5XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIj48cGF0aCBkPVwiTTUxMiAxMDI0QzIyOS4yNDggMTAyNCAwIDc5NC43NTIgMCA1MTJTMjI5LjI0OCAwIDUxMiAwczUxMiAyMjkuMjQ4IDUxMiA1MTItMjI5LjI0OCA1MTItNTEyIDUxMnogbTI1OS4xNjgtNTY4Ljg5NmgtMjkwLjc1MmEyNS4yOCAyNS4yOCAwIDAgMC0yNS4yOCAyNS4yOGwtMC4wMzIgNjMuMjMyYzAgMTMuOTUyIDExLjI5NiAyNS4yOCAyNS4yOCAyNS4yOGgxNzcuMDI0YTI1LjI4IDI1LjI4IDAgMCAxIDI1LjI4IDI1LjI4djEyLjY0YTc1Ljg0IDc1Ljg0IDAgMCAxLTc1Ljg0IDc1Ljg0aC0yNDAuMjI0YTI1LjI4IDI1LjI4IDAgMCAxLTI1LjI4LTI1LjI4di0yNDAuMTkyYTc1Ljg0IDc1Ljg0IDAgMCAxIDc1Ljg0LTc1Ljg0aDM1My45MmEyNS4yOCAyNS4yOCAwIDAgMCAyNS4yOC0yNS4yOGwwLjA2NC02My4yYTI1LjMxMiAyNS4zMTIgMCAwIDAtMjUuMjgtMjUuMzEySDQxNy4xODRhMTg5LjYzMiAxODkuNjMyIDAgMCAwLTE4OS42MzIgMTg5LjZ2MzUzLjk1MmMwIDEzLjk1MiAxMS4zMjggMjUuMjggMjUuMjggMjUuMjhoMzcyLjkyOGExNzAuNjU2IDE3MC42NTYgMCAwIDAgMTcwLjY1Ni0xNzAuNjU2di0xNDUuMzc2YTI1LjI4IDI1LjI4IDAgMCAwLTI1LjI4LTI1LjI4elwiIHAtaWQ9XCIxNzMwXCI+PC9wYXRoPjwvc3ZnPidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRlZS5jb20vS2FyaW5KUy9LYXJpbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgaWNvbjogJ25wbScsIGxpbms6ICdodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9ub2RlLWthcmluJyB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGRvY0Zvb3Rlcjoge1xyXG4gICAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLFxyXG4gICAgICAgIG5leHQ6ICdcdTRFMEJcdTRFMDBcdTk4NzUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGxhc3RVcGRhdGVkOiB7XHJcbiAgICAgICAgdGV4dDogJ1x1NjcwMFx1NTQwRVx1N0YxNlx1OEY5MVx1NEU4RScsXHJcbiAgICAgICAgZm9ybWF0T3B0aW9uczoge1xyXG4gICAgICAgICAgZGF0ZVN0eWxlOiAnbG9uZycsXHJcbiAgICAgICAgICB0aW1lU3R5bGU6ICdsb25nJyxcclxuICAgICAgICAgIGhvdXJDeWNsZTogJ2gxMidcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG91dGxpbmVUaXRsZTogJ1x1NjcyQ1x1OTg3NVx1NTkyN1x1N0VCMicsXHJcbiAgICAgIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlx1NjU4N1x1NUI1N1x1NjZGNFx1NjUzOVxyXG4gICAgICBzaWRlYmFyTWVudUxhYmVsOiAnXHU3NkVFXHU1RjU1JyxcclxuICAgICAgLy8gXHU4RkQ0XHU1NkRFXHU5ODc2XHU5MEU4XHU2NTg3XHU1QjU3XHU0RkVFXHU2NTM5XHJcbiAgICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdThGRDRcdTU2REVcdTk4NzZcdTkwRTgnXHJcbiAgICB9LFxyXG4gICAgc2l0ZW1hcDoge1xyXG4gICAgICBob3N0bmFtZTogJ2h0dHBzOi8va2FyaW4uZnVuJ1xyXG4gICAgfVxyXG4gIH0pXHJcbilcclxuXHJcbmNvbnN0IGN1c3RvbUVsZW1lbnRzID0gW1xyXG4gICdtangtY29udGFpbmVyJyxcclxuICAnbWp4LWFzc2lzdGl2ZS1tbWwnLFxyXG4gICdtYXRoJyxcclxuICAnbWFjdGlvbicsXHJcbiAgJ21hbGlnbmdyb3VwJyxcclxuICAnbWFsaWdubWFyaycsXHJcbiAgJ21lbmNsb3NlJyxcclxuICAnbWVycm9yJyxcclxuICAnbWZlbmNlZCcsXHJcbiAgJ21mcmFjJyxcclxuICAnbWknLFxyXG4gICdtbG9uZ2RpdicsXHJcbiAgJ21tdWx0aXNjcmlwdHMnLFxyXG4gICdtbicsXHJcbiAgJ21vJyxcclxuICAnbW92ZXInLFxyXG4gICdtcGFkZGVkJyxcclxuICAnbXBoYW50b20nLFxyXG4gICdtcm9vdCcsXHJcbiAgJ21yb3cnLFxyXG4gICdtcycsXHJcbiAgJ21zY2FycmllcycsXHJcbiAgJ21zY2FycnknLFxyXG4gICdtc2NhcnJpZXMnLFxyXG4gICdtc2dyb3VwJyxcclxuICAnbXN0YWNrJyxcclxuICAnbWxvbmdkaXYnLFxyXG4gICdtc2xpbmUnLFxyXG4gICdtc3RhY2snLFxyXG4gICdtc3BhY2UnLFxyXG4gICdtc3FydCcsXHJcbiAgJ21zcm93JyxcclxuICAnbXN0YWNrJyxcclxuICAnbXN0YWNrJyxcclxuICAnbXN0eWxlJyxcclxuICAnbXN1YicsXHJcbiAgJ21zdXAnLFxyXG4gICdtc3Vic3VwJyxcclxuICAnbXRhYmxlJyxcclxuICAnbXRkJyxcclxuICAnbXRleHQnLFxyXG4gICdtdHInLFxyXG4gICdtdW5kZXInLFxyXG4gICdtdW5kZXJvdmVyJyxcclxuICAnc2VtYW50aWNzJyxcclxuICAnbWF0aCcsXHJcbiAgJ21pJyxcclxuICAnbW4nLFxyXG4gICdtbycsXHJcbiAgJ21zJyxcclxuICAnbXNwYWNlJyxcclxuICAnbXRleHQnLFxyXG4gICdtZW5jbG9zZScsXHJcbiAgJ21lcnJvcicsXHJcbiAgJ21mZW5jZWQnLFxyXG4gICdtZnJhYycsXHJcbiAgJ21wYWRkZWQnLFxyXG4gICdtcGhhbnRvbScsXHJcbiAgJ21yb290JyxcclxuICAnbXJvdycsXHJcbiAgJ21zcXJ0JyxcclxuICAnbXN0eWxlJyxcclxuICAnbW11bHRpc2NyaXB0cycsXHJcbiAgJ21vdmVyJyxcclxuICAnbXByZXNjcmlwdHMnLFxyXG4gICdtc3ViJyxcclxuICAnbXN1YnN1cCcsXHJcbiAgJ21zdXAnLFxyXG4gICdtdW5kZXInLFxyXG4gICdtdW5kZXJvdmVyJyxcclxuICAnbm9uZScsXHJcbiAgJ21hbGlnbmdyb3VwJyxcclxuICAnbWFsaWdubWFyaycsXHJcbiAgJ210YWJsZScsXHJcbiAgJ210ZCcsXHJcbiAgJ210cicsXHJcbiAgJ21sb25nZGl2JyxcclxuICAnbXNjYXJyaWVzJyxcclxuICAnbXNjYXJyeScsXHJcbiAgJ21zZ3JvdXAnLFxyXG4gICdtc2xpbmUnLFxyXG4gICdtc3JvdycsXHJcbiAgJ21zdGFjaycsXHJcbiAgJ21hY3Rpb24nLFxyXG4gICdzZW1hbnRpY3MnLFxyXG4gICdhbm5vdGF0aW9uJyxcclxuICAnYW5ub3RhdGlvbi14bWwnXHJcbl1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxRUUJvdFxcXFxrYXJpbi1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxkYXRhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxRUUJvdFxcXFxrYXJpbi1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxkYXRhXFxcXG5hdi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUVFCb3Qva2FyaW4tZG9jcy9kb2NzLy52aXRlcHJlc3MvZGF0YS9uYXYudHNcIjtpbXBvcnQgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnXHJcbmNvbnN0IG5hdjogRGVmYXVsdFRoZW1lLk5hdkl0ZW1bXSA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiAnXHU1RkVCXHU5MDFGXHU1RjAwXHU1OUNCJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgdGV4dDogJ1x1NEVDQlx1N0VDRCcsIGxpbms6ICcvc3RhcnQvc3RhcnQnIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NzNBRlx1NTg4M1x1NUI4OVx1ODhDNScsIGxpbms6ICcvaW5zdGFsbC9lbnZpcm9ubWVudCcgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU2ODQ2XHU2N0I2XHU1Qjg5XHU4OEM1JywgbGluazogJy9pbnN0YWxsL2ZyYW1ld29yaycgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU2M0E1XHU1MTY1XHU1RTczXHU1M0YwJywgbGluazogJy9pbnN0YWxsL3BsYXRmb3JtJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTZFMzJcdTY3RDNcdTU2NjgnLCBsaW5rOiAnL3N0YXJ0L3JlbmRlcicgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU5MTREXHU3RjZFXHU2NTg3XHU0RUY2JywgbGluazogJy9zdGFydC9maWxlJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTc1OTFcdTk2QkVcdTY3NDJcdTc1QzcnLCBsaW5rOiAnL3N0YXJ0L3Byb2JsZW1zJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTVFMzhcdTg5QzFcdTk1RUVcdTk4OTgnLCBsaW5rOiAnL3N0YXJ0L2ZhcScgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ1x1NjNEMlx1NEVGNicsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1NjNEMlx1NEVGNlx1NUYwMFx1NTNEMScsIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTVGMDBcdTUzRDFcdTdCODBcdTRFQ0InLCBsaW5rOiAnL3BsdWdpbnMvaW5kZXgnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTUyNERcdTdBRUZcdTkxNERcdTdGNkUnLCBsaW5rOiAnL3BsdWdpbnMvY29tcG9uZW50JyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU1RjAwXHU1M0QxXHU4OUM0XHU4MzAzJywgbGluazogJy9wbHVnaW5zL3N0YW5kYXJkJyB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiAnXHU2M0QyXHU0RUY2XHU3OTNBXHU0RjhCJywgbGluazogJy9wbHVnaW5zL2RlbW8nIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTYzRDJcdTRFRjZcdTUzMDVcdTc5M0FcdTRGOEInLCBsaW5rOiAnL3BsdWdpbnMvcGFja2FnZScgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU2M0QyXHU0RUY2XHU1NTQ2XHU1RTk3JywgbGluazogJy9wbHVnaW5zL2xpc3QnIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTVGMDBcdTUzRDFcdTVERTVcdTUxNzcnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU3NkVFXHU1RjU1JywgbGluazogJy91dGlscycgfSxcclxuICAgICAgeyB0ZXh0OiAnQXBpXHU1NDA4XHU5NkM2JywgbGluazogJy91dGlscy9hcGknIH0sXHJcbiAgICAgIHsgdGV4dDogJ0thcmluXHU3QzdCJywgbGluazogJy91dGlscy9rYXJpbicgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1MjFCXHU1RUZBXHU2RDg4XHU2MDZGXHU1MTQzXHU3RDIwJywgbGluazogJy91dGlscy9zZWdtZW50JyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTY1RTVcdTVGRDdcdTdCQTFcdTc0MDYnLCBsaW5rOiAnL3V0aWxzL2xvZ2dlcicgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1RTM4XHU3NTI4XHU1MUZEXHU2NTcwXHU1NDA4XHU5NkM2JywgbGluazogJy91dGlscy9jb21tb24nIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1OTUyRVx1NTAzQ1x1NUI1OFx1NTBBOCcsIGxpbms6ICcvdXRpbHMvcmVkaXMnIH0sXHJcbiAgICAgIHsgdGV4dDogJ1lhbWxcdTdGMTZcdThGOTFcdTU2NjgnLCBsaW5rOiAnL3V0aWxzL1lhbWxFZGl0b3InIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NTZGRVx1NzI0N1x1NkUzMlx1NjdEMycsIGxpbms6ICcvdXRpbHMvUmVuZGVyZXInIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1N0FFRlx1NTNFM1x1NTE3MVx1NEVBQicsIGxpbms6ICcvdXRpbHMvc2VydmVyJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTk0QTlcdTVCNTBcdTdDRkJcdTdFREYnLCBsaW5rOiAnL3V0aWxzL2hvb2tzJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTdDRkJcdTdFREZcdTVERTVcdTUxNzcnLCBsaW5rOiAnL3V0aWxzL3N5c3RlbScgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTRFOEJcdTRFRjYnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU3NkVFXHU1RjU1JywgbGluazogJy9ldmVudC9pbmRleCcgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU2RDg4XHU2MDZGXHU0RThCXHU0RUY2JywgbGluazogJy9ldmVudC9tZXNzYWdlJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTkwMUFcdTc3RTVcdTRFOEJcdTRFRjYnLCBsaW5rOiAnL2V2ZW50L25vdGljZScgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU4QkY3XHU2QzQyXHU0RThCXHU0RUY2JywgbGluazogJy9ldmVudC9yZXF1ZXN0JyB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnXHU2NkY0XHU2NUIwXHU2NUU1XHU1RkQ3JyxcclxuICAgIGxpbms6ICcvb3RoZXIvY2hhbmdlbG9nJ1xyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxRUUJvdFxcXFxrYXJpbi1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxkYXRhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxRUUJvdFxcXFxrYXJpbi1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxkYXRhXFxcXHNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1FRQm90L2thcmluLWRvY3MvZG9jcy8udml0ZXByZXNzL2RhdGEvc2lkZWJhci50c1wiO2V4cG9ydCBjb25zdCBzaWRlYmFyID0ge1xyXG4gICcvJzogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHU1RkVCXHU5MDFGXHU1RjAwXHU1OUNCJyxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7IHRleHQ6ICdcdTRFQ0JcdTdFQ0QnLCBsaW5rOiAnL3N0YXJ0L3N0YXJ0JyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1x1NzNBRlx1NTg4M1x1NUI4OVx1ODhDNScsIGxpbms6ICcvaW5zdGFsbC9lbnZpcm9ubWVudCcgfSxcclxuICAgICAgICB7IHRleHQ6ICdcdTY4NDZcdTY3QjZcdTVCODlcdTg4QzUnLCBsaW5rOiAnL2luc3RhbGwvZnJhbWV3b3JrJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ3dlYnVpJywgbGluazogJy9zdGFydC93ZWInIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnXHU2M0E1XHU1MTY1XHU1RTczXHU1M0YwJywgbGluazogJy9pbnN0YWxsL3BsYXRmb3JtJyB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdThGREJcdTk2MzZcdTRGN0ZcdTc1MjggPGljb25pZnktaWNvbiBpY29uPVwibGluZS1tZDpjaGV2cm9uLXRyaXBsZS1yaWdodFwiPjwvaWNvbmlmeS1pY29uPicsXHJcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7IHRleHQ6ICdcdTZFMzJcdTY3RDNcdTU2NjggPGljb25pZnktaWNvbiBpY29uPVwibWF0ZXJpYWwtc3ltYm9sczpzY3JlZW5zaG90LW1vbml0b3Itb3V0bGluZS1yb3VuZGVkXCIgc3R5bGU9XCJjb2xvcjogIzNmYTRmY1wiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvc3RhcnQvcmVuZGVyJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1x1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNiA8aWNvbmlmeS1pY29uIGljb249XCJsZXRzLWljb25zOnNldHRpbmctZmlsbFwiIHN0eWxlPVwiY29sb3I6ICM4OTg5ODlcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL3N0YXJ0L2ZpbGUnIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1NzU5MVx1OTZCRVx1Njc0Mlx1NzVDNyA8aWNvbmlmeS1pY29uIGljb249XCJ0d2Vtb2ppOmZhY2Utd2l0aC1tb25vY2xlXCI+PC9pY29uaWZ5LWljb24+JywgbGluazogJy9zdGFydC9wcm9ibGVtcycsIGl0ZW1zOiBbe1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU1RTM4XHU4OUMxXHU5NUVFXHU5ODk4XHU4OUUzXHU3QjU0IDxpY29uaWZ5LWljb24gaWNvbj1cImljb25vaXI6Y2hlY2stc3F1YXJlXCIgc3R5bGU9XCJjb2xvcjogIzJhZmY3OVwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvc3RhcnQvZmFxJ1xyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHU2M0QyXHU0RUY2XHU1RjAwXHU1M0QxIDxpY29uaWZ5LWljb24gaWNvbj1cImxpbmUtbWQ6Y2hldnJvbi10cmlwbGUtcmlnaHRcIj48L2ljb25pZnktaWNvbj4nLFxyXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnXHU3NkVFXHU1RjU1IDxpY29uaWZ5LWljb24gaWNvbj1cInJpOm1lbnUtZm9sZC00LWxpbmVcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL3BsdWdpbnMvaW5kZXgnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnXHU1RjAwXHU1M0QxXHU4OUM0XHU4MzAzIDxpY29uaWZ5LWljb24gaWNvbj1cIm1pbmdjdXRlOnRhZy1maWxsXCIgc3R5bGU9XCJjb2xvcjogI2ZmMmEyYVwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvcGx1Z2lucy9zdGFuZGFyZCcgfSxcclxuICAgICAgICB7IHRleHQ6ICdcdTYzRDJcdTRFRjZcdTc5M0FcdTRGOEIgPGljb25pZnktaWNvbiBpY29uPVwiaXg6cGVuLWZpbGxlZFwiIHN0eWxlPVwiY29sb3I6ICNmZmNlMmFcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL3BsdWdpbnMvZGVtbycgfSxcclxuICAgICAgICB7IHRleHQ6ICdcdTYzRDJcdTRFRjZcdTUzMDVcdTc5M0FcdTRGOEIgPGljb25pZnktaWNvbiBpY29uPVwiZmx1ZW50LWVtb2ppLWZsYXQ6cGFja2FnZVwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvcGx1Z2lucy9wYWNrYWdlJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1x1NjNEMlx1NEVGNlx1NTIxN1x1ODg2OCA8aWNvbmlmeS1pY29uIGljb249XCJmYS1zb2xpZDpsaXN0LXVsXCIgc3R5bGU9XCJjb2xvcjogIzgyODRmZlwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvcGx1Z2lucy9saXN0JyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1x1NTI0RFx1N0FFRlx1OTE0RFx1N0Y2RSA8aWNvbmlmeS1pY29uIGljb249XCJpY29uLXBhcmstc29saWQ6aW5zdGFsbFwiIHN0eWxlPVwiY29sb3I6ICNmZmNlMmFcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL3BsdWdpbnMvY29tcG9uZW50JyB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIHRleHQ6ICdcdTVGMDBcdTUzRDFcdTVERTVcdTUxNzcgPGljb25pZnktaWNvbiBpY29uPVwibGluZS1tZDpjaGV2cm9uLXRyaXBsZS1yaWdodFwiPjwvaWNvbmlmeS1pY29uPicsXHJcbiAgICAvLyAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgIC8vICAgaXRlbXM6IFtcclxuICAgIC8vICAgICB7IHRleHQ6ICdcdTc2RUVcdTVGNTUgPGljb25pZnktaWNvbiBpY29uPVwicmk6bWVudS1mb2xkLTQtbGluZVwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvdXRpbHMnIH0sXHJcbiAgICAvLyAgICAgeyB0ZXh0OiAnQXBpXHU1NDA4XHU5NkM2JywgbGluazogJy91dGlscy9hcGknIH0sXHJcbiAgICAvLyAgICAgeyB0ZXh0OiAnS2FyaW5cdTdDN0InLCBsaW5rOiAnL3V0aWxzL2thcmluJyB9LFxyXG4gICAgLy8gICAgIHsgdGV4dDogJ1x1NTIxQlx1NUVGQVx1NkQ4OFx1NjA2Rlx1NTE0M1x1N0QyMCcsIGxpbms6ICcvdXRpbHMvc2VnbWVudCcgfSxcclxuICAgIC8vICAgICB7IHRleHQ6ICdcdTY1RTVcdTVGRDdcdTdCQTFcdTc0MDYnLCBsaW5rOiAnL3V0aWxzL2xvZ2dlcicgfSxcclxuICAgIC8vICAgICB7IHRleHQ6ICdcdTVFMzhcdTc1MjhcdTUxRkRcdTY1NzBcdTU0MDhcdTk2QzYnLCBsaW5rOiAnL3V0aWxzL2NvbW1vbicgfSxcclxuICAgIC8vICAgICB7IHRleHQ6ICdcdTk1MkVcdTUwM0NcdTVCNThcdTUwQTgnLCBsaW5rOiAnL3V0aWxzL3JlZGlzJyB9LFxyXG4gICAgLy8gICAgIHsgdGV4dDogJ1lhbWxcdTdGMTZcdThGOTFcdTU2NjgnLCBsaW5rOiAnL3V0aWxzL1lhbWxFZGl0b3InIH0sXHJcbiAgICAvLyAgICAgeyB0ZXh0OiAnXHU1NkZFXHU3MjQ3XHU2RTMyXHU2N0QzJywgbGluazogJy91dGlscy9SZW5kZXJlcicgfSxcclxuICAgIC8vICAgICB7IHRleHQ6ICdcdTdBRUZcdTUzRTNcdTUxNzFcdTRFQUInLCBsaW5rOiAnL3V0aWxzL3NlcnZlcicgfSxcclxuICAgIC8vICAgICB7IHRleHQ6ICdcdTk0QTlcdTVCNTBcdTdDRkJcdTdFREYnLCBsaW5rOiAnL3V0aWxzL2hvb2tzJyB9LFxyXG4gICAgLy8gICAgIHsgdGV4dDogJ1x1N0NGQlx1N0VERlx1NURFNVx1NTE3NycsIGxpbms6ICcvdXRpbHMvc3lzdGVtJyB9LFxyXG4gICAgLy8gICBdXHJcbiAgICAvLyB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHU0RThCXHU0RUY2IDxpY29uaWZ5LWljb24gaWNvbj1cImxpbmUtbWQ6Y2hldnJvbi10cmlwbGUtcmlnaHRcIj48L2ljb25pZnktaWNvbj4nLFxyXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnXHU3NkVFXHU1RjU1IDxpY29uaWZ5LWljb24gaWNvbj1cInJpOm1lbnUtZm9sZC00LWxpbmVcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL2V2ZW50L2luZGV4JyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1x1NkQ4OFx1NjA2Rlx1NEU4Qlx1NEVGNiA8aWNvbmlmeS1pY29uIGljb249XCJ0YWJsZXI6bWVzc2FnZVwiIHN0eWxlPVwiY29sb3I6ICNmZjYzMmFcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL2V2ZW50L21lc3NhZ2UnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnXHU5MDFBXHU3N0U1XHU0RThCXHU0RUY2IDxpY29uaWZ5LWljb24gaWNvbj1cImljb25hbW9vbjpub3RpZmljYXRpb25cIiBzdHlsZT1cImNvbG9yOiAjMmFmZjc5XCI+PC9pY29uaWZ5LWljb24+JywgbGluazogJy9ldmVudC9ub3RpY2UnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnXHU4QkY3XHU2QzQyXHU0RThCXHU0RUY2IDxpY29uaWZ5LWljb24gaWNvbj1cIm1pbmdjdXRlOnRhZy1maWxsXCIgc3R5bGU9XCJjb2xvcjogIzc0MmFmZlwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvZXZlbnQvcmVxdWVzdCcgfVxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0FQSScsXHJcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7IHRleHQ6ICc8aWNvbmlmeS1pY29uIGljb249XCJjYXJib246ZXhwb3J0XCIgc3R5bGU9XCJjb2xvcjogIzJhNzlmZlwiPjwvaWNvbmlmeS1pY29uPiBFeHBvcnRzJywgbGluazogJy9hcGkvZXhwb3J0cycgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnPGljb25pZnktaWNvbiBpY29uPVwiaWNvbi1wYXJrLW91dGxpbmU6dG9vbFwiIHN0eWxlPVwiY29sb3I6ICNmZjlmMmFcIj48L2ljb25pZnktaWNvbj4gVXRpbHMnLFxyXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU3NkVFXHU1RjU1JywgbGluazogJy9hcGkvdXRpbHMvaW5kZXgnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ2xvZ2dlcicsIGxpbms6ICcvYXBpL3V0aWxzL2xvZ2dlcicgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnc3lzdGVtJywgbGluazogJy9hcGkvdXRpbHMvc3lzdGVtJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdjb25maWcnLCBsaW5rOiAnL2FwaS91dGlscy9jb25maWcnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ2ZzJywgbGluazogJy9hcGkvdXRpbHMvZnMnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ21lc3NhZ2UnLCBsaW5rOiAnL2FwaS91dGlscy9tZXNzYWdlJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdjb21tb24nLCBsaW5rOiAnL2FwaS91dGlscy9jb21tb24nIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ3lhbWwnLCBsaW5rOiAnL2FwaS91dGlscy95YW1sJyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdpbmknLCBsaW5rOiAnL2FwaS91dGlscy9pbmknIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ3JlcXVlc3QnLCBsaW5rOiAnL2FwaS91dGlscy9yZXF1ZXN0JyB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdnaXQnLCBsaW5rOiAnL2FwaS91dGlscy9naXQnIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ2J1dHRvbicsIGxpbms6ICcvYXBpL3V0aWxzL2J1dHRvbicgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnY2hhbmdlbG9nJywgbGluazogJy9hcGkvdXRpbHMvY2hhbmdlbG9nJyB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgeyB0ZXh0OiAnXHU2NkY0XHU2NUIwXHU2NUU1XHU1RkQ3IDxpY29uaWZ5LWljb24gaWNvbj1cIml4OmxvZ1wiIHN0eWxlPVwiY29sb3I6ICNmZjcwY2ZcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL290aGVyL2NoYW5nZWxvZycgfSxcclxuICBdXHJcbn0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFFRQm90XFxcXGthcmluLWRvY3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGRhdGFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFFRQm90XFxcXGthcmluLWRvY3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGRhdGFcXFxcc2VhcmNoLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9RUUJvdC9rYXJpbi1kb2NzL2RvY3MvLnZpdGVwcmVzcy9kYXRhL3NlYXJjaC50c1wiO2NvbnN0IHNlYXJjaCA9IHtcclxuICBwcm92aWRlcjogJ2xvY2FsJyxcclxuICBvcHRpb25zOiB7XHJcbiAgICBsb2NhbGVzOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICBidXR0b25UZXh0OiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcclxuICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxzOiAnXHU2NjNFXHU3OTNBXHU4QkU2XHU3RUM2XHU1MjE3XHU4ODY4JyxcclxuICAgICAgICAgICAgbm9SZXN1bHRzVGV4dDogJ1x1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5QycsXHJcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uVGl0bGU6ICdcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjYnLFxyXG4gICAgICAgICAgICBiYWNrQnV0dG9uVGl0bGU6ICdcdTUxNzNcdTk1RURcdTY0MUNcdTdEMjInLFxyXG4gICAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgICBzZWxlY3RUZXh0OiAnXHU5MDA5XHU2MkU5JyxcclxuICAgICAgICAgICAgICBuYXZpZ2F0ZVRleHQ6ICdcdTUyMDdcdTYzNjInLFxyXG4gICAgICAgICAgICAgIHNlbGVjdEtleUFyaWFMYWJlbDogJ1x1OEY5M1x1NTE2NScsXHJcbiAgICAgICAgICAgICAgbmF2aWdhdGVVcEtleUFyaWFMYWJlbDogJ1x1NEUwQVx1N0JBRFx1NTkzNCcsXHJcbiAgICAgICAgICAgICAgbmF2aWdhdGVEb3duS2V5QXJpYUxhYmVsOiAnXHU0RTBCXHU3QkFEXHU1OTM0JyxcclxuICAgICAgICAgICAgICBjbG9zZVRleHQ6ICdcdTUxNzNcdTk1RUQnLFxyXG4gICAgICAgICAgICAgIGNsb3NlS2V5QXJpYUxhYmVsOiAnZXNjJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxRUUJvdFxcXFxrYXJpbi1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxkYXRhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxRUUJvdFxcXFxrYXJpbi1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxkYXRhXFxcXGhlYWQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1FRQm90L2thcmluLWRvY3MvZG9jcy8udml0ZXByZXNzL2RhdGEvaGVhZC50c1wiO2ltcG9ydCB7IEhlYWRDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXHJcblxyXG4vLyBwcmV0dGllci1pZ25vcmVcclxuY29uc3QgaGVhZDogSGVhZENvbmZpZ1tdID0gW1xyXG4gIC8vIFNFT1xyXG4gIFsnbWV0YScsIHsgbmFtZTogJ21zdmFsaWRhdGUuMDEnLCBjb250ZW50OiAnOEQ1RERFQTk3RjcyNzQwQjczNDk5QUE1MjBCNjdBMUEnIH1dLFxyXG4gIFsnbWV0YScsIHsgbmFtZTogJ2dvb2dsZS1zaXRlLXZlcmlmaWNhdGlvbicsIGNvbnRlbnQ6ICctLVY5WlZWQmZha0hkcXdSNTRiZ1k2am5GUFh6OFhGQldod3NQRWlCYjVRJyB9XSxcclxuICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiAnS2FyaW4nIH1dLFxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsIGNvbnRlbnQ6ICdBbiBvcGVuIHNvdXJjZSBoaWdoLXBlcmZvcm1hbmNlIGJvdCBmcmFtZXdvcmsgYnVpbHQgd2l0aCBUeXBlU2NyaXB0LiBTdXBwb3J0cyBmdW5jdGlvbnMgc3VjaCBhcyBtdWx0aS1hZGFwdGVyLCBtdWx0aS1wbGF0Zm9ybSBhY2Nlc3MgYW5kIGN1c3RvbSByZW5kZXJlci4nIH1dLFxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6ICdodHRwczovL2thcmluLmZ1bi9sb2dvLTIucG5nJyB9XSxcclxuICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6aW1hZ2U6d2lkdGgnLCBjb250ZW50OiAnNTgyJyB9XSxcclxuICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6aW1hZ2U6aGVpZ2h0JywgY29udGVudDogJzY0OCcgfV0sXHJcbiAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6ICdodHRwczovL2thcmluLmZ1bi8nIH1dLFxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzpsaWNlbnNlJywgY29udGVudDogJ2h0dHBzOi8va2FyaW4uZnVuL2RvY3MvbGljZW5zZScgfV0sXHJcbiAgWydtZXRhJywgeyBuYW1lOiAnYXV0aG9yJywgY29udGVudDogJ0thcmluSlMgVGVhbScgfV0sXHJcbiAgWydtZXRhJywgeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiAnQW4gb3BlbiBzb3VyY2UgaGlnaC1wZXJmb3JtYW5jZSBib3QgZnJhbWV3b3JrIGJ1aWx0IHdpdGggVHlwZVNjcmlwdC4gU3VwcG9ydHMgZnVuY3Rpb25zIHN1Y2ggYXMgbXVsdGktYWRhcHRlciwgbXVsdGktcGxhdGZvcm0gYWNjZXNzIGFuZCBjdXN0b20gcmVuZGVyZXIuJyB9XSxcclxuICBbJ21ldGEnLCB7IG5hbWU6ICdrZXl3b3JkcycsIGNvbnRlbnQ6ICdCb3QgZnJhbWUsIFJvYm90IGZyYW1lLCBUeXBlU2NyaXB0JyB9XSxcclxuICBbJ2xpbmsnLHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvaW1hZ2VzL2xvZ28ucG5nJ31dLFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcUVFCb3RcXFxca2FyaW4tZG9jc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUVFCb3RcXFxca2FyaW4tZG9jc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcZGF0YVxcXFxwd2EudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1FRQm90L2thcmluLWRvY3MvZG9jcy8udml0ZXByZXNzL2RhdGEvcHdhLnRzXCI7aW1wb3J0IHR5cGUgeyBQd2FPcHRpb25zIH0gZnJvbSAnQHZpdGUtcHdhL3ZpdGVwcmVzcydcclxuaW1wb3J0IGZnIGZyb20gJ2Zhc3QtZ2xvYidcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcblxyXG5jb25zdCBwd2E6IFBhcnRpYWw8UHdhT3B0aW9ucz4gPSB7XHJcbiAgb3V0RGlyOiAnLi4vZG9jcy8udml0ZXByZXNzL2Rpc3QnLCAvLyBcdThGRDlcdTkxQ0NcdTY2MkZcdTRFRTUgLnZpdGVwcmVzcyBcdTRFM0FcdTY4MzlcdTc2RUVcdTVGNTVcdTc2ODRcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcclxuICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcclxuICBpbmNsdWRlQXNzZXRzOiBmZy5zeW5jKCcqKi8qLntwbmcsc3ZnLGdpZixpY28sdHh0fScsIHtcclxuICAgIGN3ZDogcmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9wdWJsaWMnKVxyXG4gIH0pLFxyXG4gIGRldk9wdGlvbnM6IHtcclxuICAgIGVuYWJsZWQ6IHRydWUgLy8gXHU1RjAwXHU1M0QxXHU2QTIxXHU1RjBGXHU0RTBCXHU0RTVGXHU1NDJGXHU3NTI4IHB3YVxyXG4gIH0sXHJcbiAgbWFuaWZlc3Q6IHtcclxuICAgIGlkOiAnLycsXHJcbiAgICBuYW1lOiAnS2FyaW4nLFxyXG4gICAgc2hvcnRfbmFtZTogJ0thcmluJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnQW4gb3BlbiBzb3VyY2UgaGlnaC1wZXJmb3JtYW5jZSBib3QgZnJhbWV3b3JrIGJ1aWx0IHdpdGggVHlwZVNjcmlwdC4gU3VwcG9ydHMgZnVuY3Rpb25zIHN1Y2ggYXMgbXVsdGktYWRhcHRlciwgbXVsdGktcGxhdGZvcm0gYWNjZXNzIGFuZCBjdXN0b20gcmVuZGVyZXIuJyxcclxuICAgIHRoZW1lX2NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBpY29uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9sb2dvLTE5MngxOTIucG5nJyxcclxuICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6ICcvaW1hZ2VzL2xvZ28tNTEyLTUxMi5wbmcnLFxyXG4gICAgICAgIHNpemVzOiAnNTEyeDUxMicsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIHNjcmVlbnNob3RzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6ICcvaW1hZ2VzL3NjcmVlbnNob3Qtd2lkZS5wbmcnLFxyXG4gICAgICAgIHNpemVzOiAnMzA5MngyMTc4JyxcclxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICBmb3JtX2ZhY3RvcjogJ3dpZGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzcmM6ICcvaW1hZ2VzL3NjcmVlbnNob3QtbmFycm93LnBuZycsXHJcbiAgICAgICAgc2l6ZXM6ICcxMjkweDQ5OTUnLFxyXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgIGZvcm1fZmFjdG9yOiAnbmFycm93J1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB3b3JrYm94OiB7XHJcbiAgICBnbG9iRGlyZWN0b3J5OiAnLi8nLFxyXG4gICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGNzcyxodG1sLHBuZyxzdmcsaWNvLHR4dH0nXVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHdhXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlIsT0FBTyxXQUFXO0FBQzdTLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjs7O0FDRDdCLElBQU0sTUFBOEI7QUFBQSxFQUNsQztBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsRUFBRSxNQUFNLGdCQUFNLE1BQU0sZUFBZTtBQUFBLE1BQ25DLEVBQUUsTUFBTSw0QkFBUSxNQUFNLHVCQUF1QjtBQUFBLE1BQzdDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLHFCQUFxQjtBQUFBLE1BQzNDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLG9CQUFvQjtBQUFBLE1BQzFDLEVBQUUsTUFBTSxzQkFBTyxNQUFNLGdCQUFnQjtBQUFBLE1BQ3JDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLGNBQWM7QUFBQSxNQUNwQyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxrQkFBa0I7QUFBQSxNQUN4QyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxhQUFhO0FBQUEsSUFDckM7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUFRLE9BQU87QUFBQSxVQUNuQixFQUFFLE1BQU0sNEJBQVEsTUFBTSxpQkFBaUI7QUFBQSxVQUN2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QUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjsiLAogICJuYW1lcyI6IFsiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiXQp9Cg==
