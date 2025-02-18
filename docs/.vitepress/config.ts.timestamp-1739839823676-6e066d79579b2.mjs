// docs/.vitepress/config.ts
import axios from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/axios@1.7.9_debug@4.4.0/node_modules/axios/index.js";
import path from "node:path";
import { defineConfig } from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.20.0_@types+node@22.12.0_async-validator@4.2.5_axios_kr4okqpxqpmovojs4nolrv4axa/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/data/nav.ts
var nav = [
  {
    text: "\u5FEB\u901F\u5F00\u59CB",
    items: [
      { text: "\u603B\u76EE\u5F55", link: "/start/index" },
      { text: "\u5FEB\u901F\u5F00\u59CB", link: "/start/start" },
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
      { text: "\u66F4\u65B0", link: "/utils/update" }
    ]
  },
  {
    text: "\u4E8B\u4EF6",
    items: [
      { text: "\u76EE\u5F55", link: "/event/index" },
      { text: "\u6240\u6709\u4E8B\u4EF6", link: "/event/general-data" },
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
var sidebar = [
  {
    text: '\u5FEB\u901F\u5F00\u59CB <iconify-icon icon="line-md:chevron-triple-right"></iconify-icon>',
    collapsed: true,
    items: [
      { text: '\u76EE\u5F55 <iconify-icon icon="ri:menu-fold-4-line"></iconify-icon>', link: "/start/index" },
      { text: '\u5B89\u88C5 <iconify-icon icon="icon-park-solid:install" style="color: #ffce2a"></iconify-icon>', link: "/start/start" },
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
  {
    text: '\u5F00\u53D1\u5DE5\u5177 <iconify-icon icon="line-md:chevron-triple-right"></iconify-icon>',
    collapsed: true,
    items: [
      { text: '\u76EE\u5F55 <iconify-icon icon="ri:menu-fold-4-line"></iconify-icon>', link: "/utils" },
      { text: "Api\u5408\u96C6", link: "/utils/api" },
      { text: "Karin\u7C7B", link: "/utils/karin" },
      { text: "\u521B\u5EFA\u6D88\u606F\u5143\u7D20", link: "/utils/segment" },
      { text: "\u65E5\u5FD7\u7BA1\u7406", link: "/utils/logger" },
      { text: "\u5E38\u7528\u51FD\u6570\u5408\u96C6", link: "/utils/common" },
      { text: "\u952E\u503C\u5B58\u50A8", link: "/utils/redis" },
      { text: "Yaml\u7F16\u8F91\u5668", link: "/utils/YamlEditor" },
      { text: "\u56FE\u7247\u6E32\u67D3", link: "/utils/Renderer" },
      { text: "\u7AEF\u53E3\u5171\u4EAB", link: "/utils/server" },
      { text: "\u66F4\u65B0", link: "/utils/update" }
    ]
  },
  {
    text: '\u4E8B\u4EF6 <iconify-icon icon="line-md:chevron-triple-right"></iconify-icon>',
    collapsed: true,
    items: [
      { text: '\u76EE\u5F55 <iconify-icon icon="ri:menu-fold-4-line"></iconify-icon>', link: "/event/index" },
      { text: '\u6240\u6709\u4E8B\u4EF6 <iconify-icon icon="qlementine-icons:view-page-all-16" style="color: #2afff8"></iconify-icon>', link: "/event/general-data" },
      { text: '\u6D88\u606F\u4E8B\u4EF6 <iconify-icon icon="tabler:message" style="color: #ff632a"></iconify-icon>', link: "/event/message" },
      { text: '\u901A\u77E5\u4E8B\u4EF6 <iconify-icon icon="iconamoon:notification" style="color: #2aff79"></iconify-icon>', link: "/event/notice" },
      { text: '\u8BF7\u6C42\u4E8B\u4EF6 <iconify-icon icon="mingcute:tag-fill" style="color: #742aff"></iconify-icon>', link: "/event/request" }
    ]
  },
  { text: '\u66F4\u65B0\u65E5\u5FD7 <iconify-icon icon="ix:log" style="color: #ff70cf"></iconify-icon>', link: "/other/changelog" }
];
var sidebar_default = sidebar;

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
import fg from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/index.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "D:\\GitHub\\Karin-docs\\docs\\.vitepress\\data";
var pwa = {
  outDir: "../dist",
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
    globDirectory: "../dist",
    globPatterns: ["**/*.{js,css,html,png,svg,ico,txt}"]
    // globOptions: {
    //   ignore: ['**/node_modules/**/*', 'sw.js', 'workbox-*.js']
    // }
  }
};
var pwa_default = pwa;

// docs/.vitepress/config.ts
import timeline from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/vitepress-markdown-timeline@1.2.2/node_modules/vitepress-markdown-timeline/dist/cjs/index.cjs.js";
import taskLists from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/markdown-it-task-lists@2.1.1/node_modules/markdown-it-task-lists/index.js";
import mathjax3 from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/markdown-it-mathjax3@4.3.2_encoding@0.1.13/node_modules/markdown-it-mathjax3/index.js";
import footnote_plugin from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/markdown-it-footnote@4.0.0/node_modules/markdown-it-footnote/index.mjs";
import { BiDirectionalLinks } from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/@nolebase+markdown-it-bi-directional-links@2.13.0_markdown-it@14.1.0/node_modules/@nolebase/markdown-it-bi-directional-links/dist/index.mjs";
import { InlineLinkPreviewElementTransform } from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/@nolebase+vitepress-plugin-inline-link-preview@2.13.0_typescript@5.7.3_vitepress@1.6.3_@algol_iss3f4rccfnwc465cuwc2d66ae/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/markdown-it/index.mjs";
import {
  GitChangelog,
  GitChangelogMarkdownSection
} from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/@nolebase+vitepress-plugin-git-changelog@2.13.0_typescript@5.7.3_vitepress@1.6.3_@algolia+cli_wdggm7mjohsjjn7hy3h5rsyhxi/node_modules/@nolebase/vitepress-plugin-git-changelog/dist/vite/index.mjs";
import {
  PageProperties,
  PagePropertiesMarkdownSection
} from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/@nolebase+vitepress-plugin-page-properties@2.13.0_typescript@5.7.3_vitepress@1.6.3_@algolia+c_rdv6t6hyma62hhrkw6nhjr25ky/node_modules/@nolebase/vitepress-plugin-page-properties/dist/vite/index.mjs";
import { ThumbnailHashImages } from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/@nolebase+vitepress-plugin-thumbnail-hash@2.13.0_vitepress@1.6.3_@algolia+client-search@5.20._fkujnarpyfrkniyb2c4p37jluu/node_modules/@nolebase/vitepress-plugin-thumbnail-hash/dist/vite/index.mjs";
import { transformerTwoslash } from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/@shikijs+vitepress-twoslash@2.2.0_typescript@5.7.3/node_modules/@shikijs/vitepress-twoslash/dist/index.mjs";
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/vitepress-plugin-group-icons@1.3.5/node_modules/vitepress-plugin-group-icons/dist/index.mjs";
import { UnlazyImages } from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/@nolebase+markdown-it-unlazy-img@2.13.0_@types+node@22.12.0_jiti@2.4.2_less@4.2.2_markdown-it_qniqudgyg47cdygd6ncgkmsg7a/node_modules/@nolebase/markdown-it-unlazy-img/dist/index.mjs";
import tailwindcss from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/tailwindcss@3.4.17/node_modules/tailwindcss/lib/index.js";
import vueDevTools from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/vite-plugin-vue-devtools@7.7.1_rollup@2.79.2_vite@5.4.14_@types+node@22.12.0_less@4.2.2_sass-_a5i3heyx2ofbmbrpwb4b3usnsq/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import AutoImport from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/unplugin-auto-import@19.0.0_@vueuse+core@12.5.0_typescript@5.7.3__rollup@2.79.2/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/unplugin-vue-components@28.0.0_@babel+parser@7.26.9_rollup@2.79.2_vue@3.5.13_typescript@5.7.3_/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/unplugin-vue-components@28.0.0_@babel+parser@7.26.9_rollup@2.79.2_vue@3.5.13_typescript@5.7.3_/node_modules/unplugin-vue-components/dist/resolvers.js";
import { visualizer } from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/rollup-plugin-visualizer@5.14.0_rollup@2.79.2/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import httpsLocalhost from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/https-localhost@4.7.1/node_modules/https-localhost/index.js";
import { withPwa } from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/@vite-pwa+vitepress@0.5.3_vite-plugin-pwa@0.21.1_vite@5.4.14_@types+node@22.12.0_less@4.2.2_s_aywqelefeioqiushek7onp5cbm/node_modules/@vite-pwa/vitepress/dist/index.mjs";
import mkcert from "file:///D:/GitHub/Karin-docs/node_modules/.pnpm/vite-plugin-mkcert@1.17.6_vite@5.4.14_@types+node@22.12.0_less@4.2.2_sass-embedded@1.83.4_sass@1.81.0_terser@5.38.1_/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
var __vite_injected_original_dirname2 = "D:\\GitHub\\Karin-docs\\docs\\.vitepress";
var karin = await axios.get("https://registry.npmjs.org/node-karin/latest");
var config_default = withPwa(
  defineConfig({
    pwa: pwa_default,
    lang: "zh-CN",
    base: "/",
    title: "karin",
    description: "\u8BA9\u673A\u5668\u4EBA\u5F00\u53D1\u53D8\u5F97\u7B80\u5355\u6709\u8DA3",
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
        md.use(UnlazyImages(), {
          imgElementTag: "NolebaseUnlazyImg"
        });
      },
      // 代码块内的代码类型提示，与代码块行号渲染冲突
      codeTransformers: [
        // @ts-ignore
        transformerTwoslash()
      ]
    },
    vite: {
      server: {
        https: httpsLocalhost()
      },
      build: {
        // 压缩代码
        minify: false,
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        }
      },
      optimizeDeps: {
        exclude: ["@nolebase/vitepress-plugin-breadcrumbs/client"]
      },
      plugins: [
        mkcert(),
        AutoImport({
          resolvers: [ElementPlusResolver()]
        }),
        Components({
          resolvers: [ElementPlusResolver()]
        }),
        vueDevTools(),
        tailwindcss(),
        ThumbnailHashImages(),
        GitChangelog({
          maxGitLogCount: 500,
          repoURL: () => "https://github.com/KarinJS/Karin"
        }),
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
      }
    },
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag)
        },
        transformAssetUrls: {
          NolebaseUnlazyImg: ["src"]
        }
      }
    },
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
      sidebar: sidebar_default,
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvZGF0YS9uYXYudHMiLCAiZG9jcy8udml0ZXByZXNzL2RhdGEvc2lkZWJhci50cyIsICJkb2NzLy52aXRlcHJlc3MvZGF0YS9zZWFyY2gudHMiLCAiZG9jcy8udml0ZXByZXNzL2RhdGEvaGVhZC50cyIsICJkb2NzLy52aXRlcHJlc3MvZGF0YS9wd2EudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRIdWJcXFxcS2FyaW4tZG9jc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEdpdEh1YlxcXFxLYXJpbi1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0dpdEh1Yi9LYXJpbi1kb2NzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5pbXBvcnQgbmF2IGZyb20gJy4vZGF0YS9uYXYnXHJcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vZGF0YS9zaWRlYmFyJ1xyXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vZGF0YS9zZWFyY2gnXHJcbmltcG9ydCBoZWFkIGZyb20gJy4vZGF0YS9oZWFkJ1xyXG5pbXBvcnQgcHdhIGZyb20gJy4vZGF0YS9wd2EnXHJcbi8vIFx1NjVGNlx1OTVGNFx1N0VCRlxyXG5pbXBvcnQgdGltZWxpbmUgZnJvbSAndml0ZXByZXNzLW1hcmtkb3duLXRpbWVsaW5lJ1xyXG4vLyBAdHMtaWdub3JlIFx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFxyXG5pbXBvcnQgdGFza0xpc3RzIGZyb20gJ21hcmtkb3duLWl0LXRhc2stbGlzdHMnXHJcbi8vIG1hdGhqYXgzXHU1MTZDXHU1RjBGXHU2NTJGXHU2MzAxXHJcbmltcG9ydCBtYXRoamF4MyBmcm9tICdtYXJrZG93bi1pdC1tYXRoamF4MydcclxuLy8gXHU5ODc1XHU4MTFBXHJcbmltcG9ydCBmb290bm90ZV9wbHVnaW4gZnJvbSAnbWFya2Rvd24taXQtZm9vdG5vdGUnXHJcbi8vIFx1NTNDQ1x1NTQxMVx1OTRGRVx1NjNBNVxyXG5pbXBvcnQgeyBCaURpcmVjdGlvbmFsTGlua3MgfSBmcm9tICdAbm9sZWJhc2UvbWFya2Rvd24taXQtYmktZGlyZWN0aW9uYWwtbGlua3MnXHJcbi8vIFx1ODg0Q1x1NTE4NVx1OTRGRVx1NjNBNVx1OTg4NFx1ODlDOFxyXG5pbXBvcnQgeyBJbmxpbmVMaW5rUHJldmlld0VsZW1lbnRUcmFuc2Zvcm0gfSBmcm9tICdAbm9sZWJhc2Uvdml0ZXByZXNzLXBsdWdpbi1pbmxpbmUtbGluay1wcmV2aWV3L21hcmtkb3duLWl0J1xyXG4vLyBcdTU3RkFcdTRFOEVnaXRcdTc2ODRcdTk4NzVcdTk3NjJcdTUzODZcdTUzRjJcclxuaW1wb3J0IHtcclxuICBHaXRDaGFuZ2Vsb2csXHJcbiAgR2l0Q2hhbmdlbG9nTWFya2Rvd25TZWN0aW9uXHJcbn0gZnJvbSAnQG5vbGViYXNlL3ZpdGVwcmVzcy1wbHVnaW4tZ2l0LWNoYW5nZWxvZy92aXRlJ1xyXG4vLyBcdTk4NzVcdTk3NjJcdTVDNUVcdTYwMjdcclxuaW1wb3J0IHtcclxuICBQYWdlUHJvcGVydGllcyxcclxuICBQYWdlUHJvcGVydGllc01hcmtkb3duU2VjdGlvblxyXG59IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLXBhZ2UtcHJvcGVydGllcy92aXRlJ1xyXG4vLyBcdTdGMjlcdTc1NjVcdTU2RkVcdTZBMjFcdTdDQ0FcdTU0QzhcdTVFMENcdTc1MUZcdTYyMTBcclxuaW1wb3J0IHsgVGh1bWJuYWlsSGFzaEltYWdlcyB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLXRodW1ibmFpbC1oYXNoL3ZpdGUnXHJcbi8vIFx1NEVFM1x1NzgwMVx1NTc1N1x1NTE4NVx1NzY4NFx1NEVFM1x1NzgwMVx1N0M3Qlx1NTc4Qlx1NjNEMFx1NzkzQVxyXG5pbXBvcnQgeyB0cmFuc2Zvcm1lclR3b3NsYXNoIH0gZnJvbSAnQHNoaWtpanMvdml0ZXByZXNzLXR3b3NsYXNoJ1xyXG4vLyBcdTRFRTNcdTc4MDFcdTdFQzRcdTU2RkVcdTY4MDdcclxuaW1wb3J0IHtcclxuICBncm91cEljb25NZFBsdWdpbixcclxuICBncm91cEljb25WaXRlUGx1Z2luLFxyXG4gIGxvY2FsSWNvbkxvYWRlclxyXG59IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tZ3JvdXAtaWNvbnMnXHJcbi8vIFx1OTc2Mlx1NTMwNVx1NUM1MVx1NUJGQ1x1ODIyQVxyXG4vLyBpbXBvcnQgeyBnZW5lcmF0ZUJyZWFkY3J1bWJzRGF0YSB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWJyZWFkY3J1bWJzL3ZpdGVwcmVzcydcclxuLy8gXHU2MUQyXHU1MkEwXHU4RjdEXHU2QTIxXHU3Q0NBXHU5ODg0XHU4OUM4XHU1NkZFXHJcbmltcG9ydCB7IFVubGF6eUltYWdlcyB9IGZyb20gJ0Bub2xlYmFzZS9tYXJrZG93bi1pdC11bmxhenktaW1nJ1xyXG5cclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ3RhaWx3aW5kY3NzJ1xyXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xyXG5cclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1IEVsZW1lbnRQbHVzIFx1N0VDNFx1NEVGNlxyXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xyXG5cclxuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcidcclxuLy8gXHU1NDJGXHU3NTI4XHU2NzJDXHU1NzMwIGh0dHBzXHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IGh0dHBzTG9jYWxob3N0IGZyb20gJ2h0dHBzLWxvY2FsaG9zdCdcclxuLy8gcHdhIFx1NjUyRlx1NjMwMVxyXG5pbXBvcnQgeyB3aXRoUHdhIH0gZnJvbSAnQHZpdGUtcHdhL3ZpdGVwcmVzcydcclxuLy8gXHU2NzJDXHU1NzMwXHU4MUVBXHU3QjdFXHU4QkMxXHU0RTY2XHJcbmltcG9ydCBta2NlcnQgZnJvbSAndml0ZS1wbHVnaW4tbWtjZXJ0J1xyXG5cclxuLyoqIGthcmluIHBrZyAqL1xyXG5jb25zdCBrYXJpbiA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvbm9kZS1rYXJpbi9sYXRlc3QnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFB3YShcclxuICBkZWZpbmVDb25maWcoe1xyXG4gICAgcHdhOiBwd2EsXHJcbiAgICBsYW5nOiAnemgtQ04nLFxyXG4gICAgYmFzZTogJy8nLFxyXG4gICAgdGl0bGU6ICdrYXJpbicsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1x1OEJBOVx1NjczQVx1NTY2OFx1NEVCQVx1NUYwMFx1NTNEMVx1NTNEOFx1NUY5N1x1N0I4MFx1NTM1NVx1NjcwOVx1OERBMycsXHJcbiAgICBtYXJrZG93bjoge1xyXG4gICAgICBtYXRoOiB0cnVlLFxyXG4gICAgICAvLyBcdTUxNjhcdTVDNDBcdTRFRTNcdTc4MDFcdTU3NTdcdTg4NENcdTUzRjdcdTY2M0VcdTc5M0FcclxuICAgICAgbGluZU51bWJlcnM6IGZhbHNlLFxyXG4gICAgICBpbWFnZToge1xyXG4gICAgICAgIC8vIFx1NUYwMFx1NTQyRlx1NTZGRVx1NzI0N1x1NjFEMlx1NTJBMFx1OEY3RFxyXG4gICAgICAgIGxhenlMb2FkaW5nOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZzogYXN5bmMgKG1kKSA9PiB7XHJcbiAgICAgICAgLy8gXHU2NUY2XHU5NUY0XHU3RUJGXHJcbiAgICAgICAgbWQudXNlKHRpbWVsaW5lKVxyXG4gICAgICAgIC8vIFx1NEVGQlx1NTJBMVx1NTIxN1x1ODg2OFxyXG4gICAgICAgIG1kLnVzZSh0YXNrTGlzdHMpXHJcbiAgICAgICAgLy8gXHU1MTZDXHU1RjBGXHJcbiAgICAgICAgbWQudXNlKG1hdGhqYXgzKVxyXG4gICAgICAgIC8vIFx1ODExQVx1NkNFOFxyXG4gICAgICAgIG1kLnVzZShmb290bm90ZV9wbHVnaW4pXHJcbiAgICAgICAgLy8gXHU1M0NDXHU1NDExXHU5NEZFXHU2M0E1XHJcbiAgICAgICAgbWQudXNlKEJpRGlyZWN0aW9uYWxMaW5rcygpKVxyXG4gICAgICAgIC8vIFx1ODg0Q1x1NTE4NVx1OTRGRVx1NjNBNVx1OTg4NFx1ODlDOFxyXG4gICAgICAgIG1kLnVzZShJbmxpbmVMaW5rUHJldmlld0VsZW1lbnRUcmFuc2Zvcm0pXHJcbiAgICAgICAgLy8gXHU0RUUzXHU3ODAxXHU3RUM0XHU1NkZFXHU2ODA3XHJcbiAgICAgICAgbWQudXNlKGdyb3VwSWNvbk1kUGx1Z2luKVxyXG4gICAgICAgIC8vIFx1NjFEMlx1NTJBMFx1OEY3RFx1NkEyMVx1N0NDQVx1OTg4NFx1ODlDOFx1NTZGRVxyXG4gICAgICAgIG1kLnVzZShVbmxhenlJbWFnZXMoKSwge1xyXG4gICAgICAgICAgaW1nRWxlbWVudFRhZzogJ05vbGViYXNlVW5sYXp5SW1nJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIFx1NEVFM1x1NzgwMVx1NTc1N1x1NTE4NVx1NzY4NFx1NEVFM1x1NzgwMVx1N0M3Qlx1NTc4Qlx1NjNEMFx1NzkzQVx1RkYwQ1x1NEUwRVx1NEVFM1x1NzgwMVx1NTc1N1x1ODg0Q1x1NTNGN1x1NkUzMlx1NjdEM1x1NTFCMlx1N0E4MVxyXG4gICAgICBjb2RlVHJhbnNmb3JtZXJzOiBbXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRyYW5zZm9ybWVyVHdvc2xhc2goKVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gICAgdml0ZToge1xyXG4gICAgICBzZXJ2ZXI6IHtcclxuICAgICAgICBodHRwczogaHR0cHNMb2NhbGhvc3QoKVxyXG4gICAgICB9LFxyXG4gICAgICBidWlsZDoge1xyXG4gICAgICAgIC8vIFx1NTM4Qlx1N0YyOVx1NEVFM1x1NzgwMVxyXG4gICAgICAgIG1pbmlmeTogZmFsc2UsXHJcbiAgICAgICAgdGVyc2VyT3B0aW9uczoge1xyXG4gICAgICAgICAgY29tcHJlc3M6IHtcclxuICAgICAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxyXG4gICAgICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgICBleGNsdWRlOiBbJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWJyZWFkY3J1bWJzL2NsaWVudCddXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBta2NlcnQoKSxcclxuICAgICAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgICAgICB9KSxcclxuICAgICAgICBDb21wb25lbnRzKHtcclxuICAgICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV1cclxuICAgICAgICB9KSxcclxuICAgICAgICB2dWVEZXZUb29scygpLFxyXG4gICAgICAgIHRhaWx3aW5kY3NzKCksXHJcbiAgICAgICAgVGh1bWJuYWlsSGFzaEltYWdlcygpLFxyXG4gICAgICAgIEdpdENoYW5nZWxvZyh7XHJcbiAgICAgICAgICBtYXhHaXRMb2dDb3VudDogNTAwLFxyXG4gICAgICAgICAgcmVwb1VSTDogKCkgPT4gJ2h0dHBzOi8vZ2l0aHViLmNvbS9LYXJpbkpTL0thcmluJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIEdpdENoYW5nZWxvZ01hcmtkb3duU2VjdGlvbih7XHJcbiAgICAgICAgICBleGNsdWRlOiAoaWQpID0+IGlkLmVuZHNXaXRoKCdpbmRleC5tZCcpLFxyXG4gICAgICAgICAgc2VjdGlvbnM6IHtcclxuICAgICAgICAgICAgLy8gXHU3OTgxXHU3NTI4XHU5ODc1XHU5NzYyXHU1Mzg2XHU1M0YyXHJcbiAgICAgICAgICAgIGRpc2FibGVDaGFuZ2Vsb2c6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyBcdTc5ODFcdTc1MjhcdThEMjFcdTczMkVcdTgwMDVcclxuICAgICAgICAgICAgZGlzYWJsZUNvbnRyaWJ1dG9yczogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pIGFzIGFueSxcclxuICAgICAgICAvLyBcdTk4NzVcdTk3NjJcdTVDNUVcdTYwMjdcclxuICAgICAgICBQYWdlUHJvcGVydGllcygpLFxyXG4gICAgICAgIFBhZ2VQcm9wZXJ0aWVzTWFya2Rvd25TZWN0aW9uKHtcclxuICAgICAgICAgIGV4Y2x1ZGVzOiBbJ2luZGV4Lm1kJ11cclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBcdTRFRTNcdTc4MDFcdTdFQzRcdTU2RkVcdTY4MDdcclxuICAgICAgICBncm91cEljb25WaXRlUGx1Z2luKHtcclxuICAgICAgICAgIGN1c3RvbUljb246IHtcclxuICAgICAgICAgICAgdHM6ICdsb2dvczp0eXBlc2NyaXB0LWljb24nLFxyXG4gICAgICAgICAgICBqczogJ2xvZ29zOmphdmFzY3JpcHQnLCAvL2pzXHU1NkZFXHU2ODA3XHJcbiAgICAgICAgICAgIG1kOiAnbG9nb3M6bWFya2Rvd24nLCAvL21hcmtkb3duXHU1NkZFXHU2ODA3XHJcbiAgICAgICAgICAgIGNzczogJ2xvZ29zOmNzcy0zJywgLy9jc3NcdTU2RkVcdTY4MDdcclxuICAgICAgICAgICAgY25wbTogJ2h0dHBzOi8vbnBtbWlycm9yLmNvbS9jbnBtLnBuZycsXHJcbiAgICAgICAgICAgIFx1ODhBQlx1NTJBOFx1NEU4Qlx1NEVGNlx1OEMwM1x1NzUyODogJ2xvZ29zOmphdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICBcdTRFM0JcdTUyQThcdTRFOEJcdTRFRjZcdThDMDNcdTc1Mjg6ICdsb2dvczpqYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgXHU4QkY3XHU2QzQyXHU3OTNBXHU0RjhCOiAnbG9nb3M6amF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgIFx1OEJGN1x1NkM0Mlx1NzkzQVx1NEY4QjE6ICdsb2dvczpqYXZhc2NyaXB0JyxcclxuICAgICAgICAgICAgXHU4QkY3XHU2QzQyXHU3OTNBXHU0RjhCMjogJ2xvZ29zOmphdmFzY3JpcHQnLFxyXG4gICAgICAgICAgICBcdThCRjdcdTZDNDJcdTc5M0FcdTRGOEIzOiAnbG9nb3M6amF2YXNjcmlwdCcsXHJcbiAgICAgICAgICAgIFx1OEMwM1x1NzUyOFx1NzkzQVx1NEY4QjogJ2xvZ29zOnR5cGVzY3JpcHQtaWNvbicsXHJcbiAgICAgICAgICAgIFx1OEZENFx1NTZERVx1NTAzQzogJ3ZzY29kZS1pY29uczpmaWxlLXR5cGUtbGlnaHQtanNvbidcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICB2aXN1YWxpemVyKClcclxuICAgICAgXSxcclxuICAgICAgc3NyOiB7XHJcbiAgICAgICAgbm9FeHRlcm5hbDogWydAbm9sZWJhc2UvKicsIC9lbGVtZW50LXBsdXMvXVxyXG4gICAgICB9LFxyXG4gICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgICd+Lyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdkb2NzJyl9L2BcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNzczoge1xyXG4gICAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICAgIHNjc3M6IHtcclxuICAgICAgICAgICAgYXBpOiAnbW9kZXJuJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHZ1ZToge1xyXG4gICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xyXG4gICAgICAgICAgaXNDdXN0b21FbGVtZW50OiAodGFnKSA9PiBjdXN0b21FbGVtZW50cy5pbmNsdWRlcyh0YWcpXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0cmFuc2Zvcm1Bc3NldFVybHM6IHtcclxuICAgICAgICAgIE5vbGViYXNlVW5sYXp5SW1nOiBbJ3NyYyddXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gdHJhbnNmb3JtUGFnZURhdGEgKHBhZ2VEYXRhLCBjb250ZXh0KSB7XHJcbiAgICAvLyAgIC8vIFx1OTc2Mlx1NTMwNVx1NUM1MVx1NUJGQ1x1ODIyQVxyXG4gICAgLy8gICBnZW5lcmF0ZUJyZWFkY3J1bWJzRGF0YShwYWdlRGF0YSwgY29udGV4dClcclxuICAgIC8vIH0sXHJcbiAgICAvLyBcdTc5RkJcdTk2NjRcdTU3MzBcdTU3NDBcdTc2ODQuaHRtbFxyXG4gICAgY2xlYW5VcmxzOiB0cnVlLFxyXG4gICAgLy8gXHU2NjNFXHU3OTNBXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XHJcbiAgICBsYXN0VXBkYXRlZDogdHJ1ZSxcclxuICAgIGhlYWQ6IGhlYWQsXHJcbiAgICB0aGVtZUNvbmZpZzoge1xyXG4gICAgICBzaXRlVGl0bGU6IGBLYXJpbiA8Y29kZSBjbGFzcz1cIlZQQmFkZ2UgdGlwXCI+diR7a2FyaW4uZGF0YS52ZXJzaW9ufTwvY29kZT5gLFxyXG4gICAgICBsb2dvOiB7XHJcbiAgICAgICAgc3JjOiAnL2xvZ28ucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICBlZGl0TGluazoge1xyXG4gICAgICAgIHBhdHRlcm46ICdodHRwczovL2dpdGh1Yi5jb20vS2FyaW5KUy9LYXJpbi1kb2NzL2VkaXQvZG9jcy9kb2NzLzpwYXRoJyxcclxuICAgICAgICB0ZXh0OiAnXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcdTk3NjInXHJcbiAgICAgIH0sXHJcbiAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICBsZXZlbDogWzIsIDRdLFxyXG4gICAgICAgIGxhYmVsOiAnXHU5ODc1XHU5NzYyXHU1QkZDXHU4MjJBJ1xyXG4gICAgICB9LFxyXG4gICAgICBuYXY6IG5hdiBhcyBbXSxcclxuICAgICAgc2lkZWJhcjogc2lkZWJhcixcclxuICAgICAgc2VhcmNoOiBzZWFyY2ggYXMgYW55LFxyXG4gICAgICBsaWdodE1vZGVTd2l0Y2hUaXRsZTogJ1x1NTIwN1x1NjM2Mlx1NTIzMFx1NkQ0NVx1ODI3Mlx1NkEyMVx1NUYwRicsXHJcbiAgICAgIGRhcmtNb2RlU3dpdGNoVGl0bGU6ICdcdTUyMDdcdTYzNjJcdTUyMzBcdTZERjFcdTgyNzJcdTZBMjFcdTVGMEYnLFxyXG4gICAgICBkYXJrTW9kZVN3aXRjaExhYmVsOiAnXHU0RTNCXHU5ODk4XHU2QTIxXHU1RjBGJyxcclxuICAgICAgc29jaWFsTGlua3M6IFtcclxuICAgICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0thcmluSlMvS2FyaW4nIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICBzdmc6ICc8c3ZnIHQ9XCIxNzE4MzM1ODc4ODY1XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIxNzI5XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIj48cGF0aCBkPVwiTTUxMiAxMDI0QzIyOS4yNDggMTAyNCAwIDc5NC43NTIgMCA1MTJTMjI5LjI0OCAwIDUxMiAwczUxMiAyMjkuMjQ4IDUxMiA1MTItMjI5LjI0OCA1MTItNTEyIDUxMnogbTI1OS4xNjgtNTY4Ljg5NmgtMjkwLjc1MmEyNS4yOCAyNS4yOCAwIDAgMC0yNS4yOCAyNS4yOGwtMC4wMzIgNjMuMjMyYzAgMTMuOTUyIDExLjI5NiAyNS4yOCAyNS4yOCAyNS4yOGgxNzcuMDI0YTI1LjI4IDI1LjI4IDAgMCAxIDI1LjI4IDI1LjI4djEyLjY0YTc1Ljg0IDc1Ljg0IDAgMCAxLTc1Ljg0IDc1Ljg0aC0yNDAuMjI0YTI1LjI4IDI1LjI4IDAgMCAxLTI1LjI4LTI1LjI4di0yNDAuMTkyYTc1Ljg0IDc1Ljg0IDAgMCAxIDc1Ljg0LTc1Ljg0aDM1My45MmEyNS4yOCAyNS4yOCAwIDAgMCAyNS4yOC0yNS4yOGwwLjA2NC02My4yYTI1LjMxMiAyNS4zMTIgMCAwIDAtMjUuMjgtMjUuMzEySDQxNy4xODRhMTg5LjYzMiAxODkuNjMyIDAgMCAwLTE4OS42MzIgMTg5LjZ2MzUzLjk1MmMwIDEzLjk1MiAxMS4zMjggMjUuMjggMjUuMjggMjUuMjhoMzcyLjkyOGExNzAuNjU2IDE3MC42NTYgMCAwIDAgMTcwLjY1Ni0xNzAuNjU2di0xNDUuMzc2YTI1LjI4IDI1LjI4IDAgMCAwLTI1LjI4LTI1LjI4elwiIHAtaWQ9XCIxNzMwXCI+PC9wYXRoPjwvc3ZnPidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsaW5rOiAnaHR0cHM6Ly9naXRlZS5jb20vS2FyaW5KUy9LYXJpbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgaWNvbjogJ25wbScsIGxpbms6ICdodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9ub2RlLWthcmluJyB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGRvY0Zvb3Rlcjoge1xyXG4gICAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLFxyXG4gICAgICAgIG5leHQ6ICdcdTRFMEJcdTRFMDBcdTk4NzUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGxhc3RVcGRhdGVkOiB7XHJcbiAgICAgICAgdGV4dDogJ1x1NjcwMFx1NTQwRVx1N0YxNlx1OEY5MVx1NEU4RScsXHJcbiAgICAgICAgZm9ybWF0T3B0aW9uczoge1xyXG4gICAgICAgICAgZGF0ZVN0eWxlOiAnbG9uZycsXHJcbiAgICAgICAgICB0aW1lU3R5bGU6ICdsb25nJyxcclxuICAgICAgICAgIGhvdXJDeWNsZTogJ2gxMidcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG91dGxpbmVUaXRsZTogJ1x1NjcyQ1x1OTg3NVx1NTkyN1x1N0VCMicsXHJcbiAgICAgIC8vIFx1NEZBN1x1OEZCOVx1NjgwRlx1NjU4N1x1NUI1N1x1NjZGNFx1NjUzOVxyXG4gICAgICBzaWRlYmFyTWVudUxhYmVsOiAnXHU3NkVFXHU1RjU1JyxcclxuICAgICAgLy8gXHU4RkQ0XHU1NkRFXHU5ODc2XHU5MEU4XHU2NTg3XHU1QjU3XHU0RkVFXHU2NTM5XHJcbiAgICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdThGRDRcdTU2REVcdTk4NzZcdTkwRTgnXHJcbiAgICB9LFxyXG4gICAgc2l0ZW1hcDoge1xyXG4gICAgICBob3N0bmFtZTogJ2h0dHBzOi8va2FyaW4uZnVuJ1xyXG4gICAgfVxyXG4gIH0pXHJcbilcclxuXHJcbmNvbnN0IGN1c3RvbUVsZW1lbnRzID0gW1xyXG4gICdtangtY29udGFpbmVyJyxcclxuICAnbWp4LWFzc2lzdGl2ZS1tbWwnLFxyXG4gICdtYXRoJyxcclxuICAnbWFjdGlvbicsXHJcbiAgJ21hbGlnbmdyb3VwJyxcclxuICAnbWFsaWdubWFyaycsXHJcbiAgJ21lbmNsb3NlJyxcclxuICAnbWVycm9yJyxcclxuICAnbWZlbmNlZCcsXHJcbiAgJ21mcmFjJyxcclxuICAnbWknLFxyXG4gICdtbG9uZ2RpdicsXHJcbiAgJ21tdWx0aXNjcmlwdHMnLFxyXG4gICdtbicsXHJcbiAgJ21vJyxcclxuICAnbW92ZXInLFxyXG4gICdtcGFkZGVkJyxcclxuICAnbXBoYW50b20nLFxyXG4gICdtcm9vdCcsXHJcbiAgJ21yb3cnLFxyXG4gICdtcycsXHJcbiAgJ21zY2FycmllcycsXHJcbiAgJ21zY2FycnknLFxyXG4gICdtc2NhcnJpZXMnLFxyXG4gICdtc2dyb3VwJyxcclxuICAnbXN0YWNrJyxcclxuICAnbWxvbmdkaXYnLFxyXG4gICdtc2xpbmUnLFxyXG4gICdtc3RhY2snLFxyXG4gICdtc3BhY2UnLFxyXG4gICdtc3FydCcsXHJcbiAgJ21zcm93JyxcclxuICAnbXN0YWNrJyxcclxuICAnbXN0YWNrJyxcclxuICAnbXN0eWxlJyxcclxuICAnbXN1YicsXHJcbiAgJ21zdXAnLFxyXG4gICdtc3Vic3VwJyxcclxuICAnbXRhYmxlJyxcclxuICAnbXRkJyxcclxuICAnbXRleHQnLFxyXG4gICdtdHInLFxyXG4gICdtdW5kZXInLFxyXG4gICdtdW5kZXJvdmVyJyxcclxuICAnc2VtYW50aWNzJyxcclxuICAnbWF0aCcsXHJcbiAgJ21pJyxcclxuICAnbW4nLFxyXG4gICdtbycsXHJcbiAgJ21zJyxcclxuICAnbXNwYWNlJyxcclxuICAnbXRleHQnLFxyXG4gICdtZW5jbG9zZScsXHJcbiAgJ21lcnJvcicsXHJcbiAgJ21mZW5jZWQnLFxyXG4gICdtZnJhYycsXHJcbiAgJ21wYWRkZWQnLFxyXG4gICdtcGhhbnRvbScsXHJcbiAgJ21yb290JyxcclxuICAnbXJvdycsXHJcbiAgJ21zcXJ0JyxcclxuICAnbXN0eWxlJyxcclxuICAnbW11bHRpc2NyaXB0cycsXHJcbiAgJ21vdmVyJyxcclxuICAnbXByZXNjcmlwdHMnLFxyXG4gICdtc3ViJyxcclxuICAnbXN1YnN1cCcsXHJcbiAgJ21zdXAnLFxyXG4gICdtdW5kZXInLFxyXG4gICdtdW5kZXJvdmVyJyxcclxuICAnbm9uZScsXHJcbiAgJ21hbGlnbmdyb3VwJyxcclxuICAnbWFsaWdubWFyaycsXHJcbiAgJ210YWJsZScsXHJcbiAgJ210ZCcsXHJcbiAgJ210cicsXHJcbiAgJ21sb25nZGl2JyxcclxuICAnbXNjYXJyaWVzJyxcclxuICAnbXNjYXJyeScsXHJcbiAgJ21zZ3JvdXAnLFxyXG4gICdtc2xpbmUnLFxyXG4gICdtc3JvdycsXHJcbiAgJ21zdGFjaycsXHJcbiAgJ21hY3Rpb24nLFxyXG4gICdzZW1hbnRpY3MnLFxyXG4gICdhbm5vdGF0aW9uJyxcclxuICAnYW5ub3RhdGlvbi14bWwnXHJcbl1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRIdWJcXFxcS2FyaW4tZG9jc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0SHViXFxcXEthcmluLWRvY3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGRhdGFcXFxcbmF2LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9HaXRIdWIvS2FyaW4tZG9jcy9kb2NzLy52aXRlcHJlc3MvZGF0YS9uYXYudHNcIjtpbXBvcnQgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnXHJcbmNvbnN0IG5hdjogRGVmYXVsdFRoZW1lLk5hdkl0ZW1bXSA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiAnXHU1RkVCXHU5MDFGXHU1RjAwXHU1OUNCJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgdGV4dDogJ1x1NjAzQlx1NzZFRVx1NUY1NScsIGxpbms6ICcvc3RhcnQvaW5kZXgnIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NUZFQlx1OTAxRlx1NUYwMFx1NTlDQicsIGxpbms6ICcvc3RhcnQvc3RhcnQnIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NkUzMlx1NjdEM1x1NTY2OCcsIGxpbms6ICcvc3RhcnQvcmVuZGVyJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTkxNERcdTdGNkVcdTY1ODdcdTRFRjYnLCBsaW5rOiAnL3N0YXJ0L2ZpbGUnIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NzU5MVx1OTZCRVx1Njc0Mlx1NzVDNycsIGxpbms6ICcvc3RhcnQvcHJvYmxlbXMnIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NUUzOFx1ODlDMVx1OTVFRVx1OTg5OCcsIGxpbms6ICcvc3RhcnQvZmFxJyB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnXHU2M0QyXHU0RUY2JyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU2M0QyXHU0RUY2XHU1RjAwXHU1M0QxJywgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NUYwMFx1NTNEMVx1N0I4MFx1NEVDQicsIGxpbms6ICcvcGx1Z2lucy9pbmRleCcgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NTI0RFx1N0FFRlx1OTE0RFx1N0Y2RScsIGxpbms6ICcvcGx1Z2lucy9jb21wb25lbnQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTVGMDBcdTUzRDFcdTg5QzRcdTgzMDMnLCBsaW5rOiAnL3BsdWdpbnMvc3RhbmRhcmQnIH0sXHJcbiAgICAgICAgICB7IHRleHQ6ICdcdTYzRDJcdTRFRjZcdTc5M0FcdTRGOEInLCBsaW5rOiAnL3BsdWdpbnMvZGVtbycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NjNEMlx1NEVGNlx1NTMwNVx1NzkzQVx1NEY4QicsIGxpbms6ICcvcGx1Z2lucy9wYWNrYWdlJyB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTYzRDJcdTRFRjZcdTU1NDZcdTVFOTcnLCBsaW5rOiAnL3BsdWdpbnMvbGlzdCcgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ1x1NUYwMFx1NTNEMVx1NURFNVx1NTE3NycsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IHRleHQ6ICdcdTc2RUVcdTVGNTUnLCBsaW5rOiAnL3V0aWxzJyB9LFxyXG4gICAgICB7IHRleHQ6ICdBcGlcdTU0MDhcdTk2QzYnLCBsaW5rOiAnL3V0aWxzL2FwaScgfSxcclxuICAgICAgeyB0ZXh0OiAnS2FyaW5cdTdDN0InLCBsaW5rOiAnL3V0aWxzL2thcmluJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTUyMUJcdTVFRkFcdTZEODhcdTYwNkZcdTUxNDNcdTdEMjAnLCBsaW5rOiAnL3V0aWxzL3NlZ21lbnQnIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NjVFNVx1NUZEN1x1N0JBMVx1NzQwNicsIGxpbms6ICcvdXRpbHMvbG9nZ2VyJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTVFMzhcdTc1MjhcdTUxRkRcdTY1NzBcdTU0MDhcdTk2QzYnLCBsaW5rOiAnL3V0aWxzL2NvbW1vbicgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU5NTJFXHU1MDNDXHU1QjU4XHU1MEE4JywgbGluazogJy91dGlscy9yZWRpcycgfSxcclxuICAgICAgeyB0ZXh0OiAnWWFtbFx1N0YxNlx1OEY5MVx1NTY2OCcsIGxpbms6ICcvdXRpbHMvWWFtbEVkaXRvcicgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1NkZFXHU3MjQ3XHU2RTMyXHU2N0QzJywgbGluazogJy91dGlscy9SZW5kZXJlcicgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU3QUVGXHU1M0UzXHU1MTcxXHU0RUFCJywgbGluazogJy91dGlscy9zZXJ2ZXInIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NjZGNFx1NjVCMCcsIGxpbms6ICcvdXRpbHMvdXBkYXRlJyB9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ1x1NEU4Qlx1NEVGNicsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IHRleHQ6ICdcdTc2RUVcdTVGNTUnLCBsaW5rOiAnL2V2ZW50L2luZGV4JyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTYyNDBcdTY3MDlcdTRFOEJcdTRFRjYnLCBsaW5rOiAnL2V2ZW50L2dlbmVyYWwtZGF0YScgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU2RDg4XHU2MDZGXHU0RThCXHU0RUY2JywgbGluazogJy9ldmVudC9tZXNzYWdlJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTkwMUFcdTc3RTVcdTRFOEJcdTRFRjYnLCBsaW5rOiAnL2V2ZW50L25vdGljZScgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU4QkY3XHU2QzQyXHU0RThCXHU0RUY2JywgbGluazogJy9ldmVudC9yZXF1ZXN0JyB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnXHU2NkY0XHU2NUIwXHU2NUU1XHU1RkQ3JyxcclxuICAgIGxpbms6ICcvb3RoZXIvY2hhbmdlbG9nJ1xyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmF2IiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRIdWJcXFxcS2FyaW4tZG9jc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0SHViXFxcXEthcmluLWRvY3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGRhdGFcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR2l0SHViL0thcmluLWRvY3MvZG9jcy8udml0ZXByZXNzL2RhdGEvc2lkZWJhci50c1wiO2NvbnN0IHNpZGViYXIgPSBbXHJcbiAge1xyXG4gICAgdGV4dDogJ1x1NUZFQlx1OTAxRlx1NUYwMFx1NTlDQiA8aWNvbmlmeS1pY29uIGljb249XCJsaW5lLW1kOmNoZXZyb24tdHJpcGxlLXJpZ2h0XCI+PC9pY29uaWZ5LWljb24+JyxcclxuICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgdGV4dDogJ1x1NzZFRVx1NUY1NSA8aWNvbmlmeS1pY29uIGljb249XCJyaTptZW51LWZvbGQtNC1saW5lXCI+PC9pY29uaWZ5LWljb24+JywgbGluazogJy9zdGFydC9pbmRleCcgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1Qjg5XHU4OEM1IDxpY29uaWZ5LWljb24gaWNvbj1cImljb24tcGFyay1zb2xpZDppbnN0YWxsXCIgc3R5bGU9XCJjb2xvcjogI2ZmY2UyYVwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvc3RhcnQvc3RhcnQnIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NkUzMlx1NjdEM1x1NTY2OCA8aWNvbmlmeS1pY29uIGljb249XCJtYXRlcmlhbC1zeW1ib2xzOnNjcmVlbnNob3QtbW9uaXRvci1vdXRsaW5lLXJvdW5kZWRcIiBzdHlsZT1cImNvbG9yOiAjM2ZhNGZjXCI+PC9pY29uaWZ5LWljb24+JywgbGluazogJy9zdGFydC9yZW5kZXInIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1OTE0RFx1N0Y2RVx1NjU4N1x1NEVGNiA8aWNvbmlmeS1pY29uIGljb249XCJsZXRzLWljb25zOnNldHRpbmctZmlsbFwiIHN0eWxlPVwiY29sb3I6ICM4OTg5ODlcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL3N0YXJ0L2ZpbGUnIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAnXHU3NTkxXHU5NkJFXHU2NzQyXHU3NUM3IDxpY29uaWZ5LWljb24gaWNvbj1cInR3ZW1vamk6ZmFjZS13aXRoLW1vbm9jbGVcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL3N0YXJ0L3Byb2JsZW1zJywgaXRlbXM6IFt7XHJcbiAgICAgICAgICB0ZXh0OiAnXHU1RTM4XHU4OUMxXHU5NUVFXHU5ODk4XHU4OUUzXHU3QjU0IDxpY29uaWZ5LWljb24gaWNvbj1cImljb25vaXI6Y2hlY2stc3F1YXJlXCIgc3R5bGU9XCJjb2xvcjogIzJhZmY3OVwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvc3RhcnQvZmFxJ1xyXG4gICAgICAgIH1dXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnXHU2M0QyXHU0RUY2XHU1RjAwXHU1M0QxIDxpY29uaWZ5LWljb24gaWNvbj1cImxpbmUtbWQ6Y2hldnJvbi10cmlwbGUtcmlnaHRcIj48L2ljb25pZnktaWNvbj4nLFxyXG4gICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU3NkVFXHU1RjU1IDxpY29uaWZ5LWljb24gaWNvbj1cInJpOm1lbnUtZm9sZC00LWxpbmVcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL3BsdWdpbnMvaW5kZXgnIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NUYwMFx1NTNEMVx1ODlDNFx1ODMwMyA8aWNvbmlmeS1pY29uIGljb249XCJtaW5nY3V0ZTp0YWctZmlsbFwiIHN0eWxlPVwiY29sb3I6ICNmZjJhMmFcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL3BsdWdpbnMvc3RhbmRhcmQnIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NjNEMlx1NEVGNlx1NzkzQVx1NEY4QiA8aWNvbmlmeS1pY29uIGljb249XCJpeDpwZW4tZmlsbGVkXCIgc3R5bGU9XCJjb2xvcjogI2ZmY2UyYVwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvcGx1Z2lucy9kZW1vJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTYzRDJcdTRFRjZcdTUzMDVcdTc5M0FcdTRGOEIgPGljb25pZnktaWNvbiBpY29uPVwiZmx1ZW50LWVtb2ppLWZsYXQ6cGFja2FnZVwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvcGx1Z2lucy9wYWNrYWdlJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTYzRDJcdTRFRjZcdTUyMTdcdTg4NjggPGljb25pZnktaWNvbiBpY29uPVwiZmEtc29saWQ6bGlzdC11bFwiIHN0eWxlPVwiY29sb3I6ICM4Mjg0ZmZcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL3BsdWdpbnMvbGlzdCcgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1MjREXHU3QUVGXHU5MTREXHU3RjZFIDxpY29uaWZ5LWljb24gaWNvbj1cImljb24tcGFyay1zb2xpZDppbnN0YWxsXCIgc3R5bGU9XCJjb2xvcjogI2ZmY2UyYVwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvcGx1Z2lucy9jb21wb25lbnQnIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTVGMDBcdTUzRDFcdTVERTVcdTUxNzcgPGljb25pZnktaWNvbiBpY29uPVwibGluZS1tZDpjaGV2cm9uLXRyaXBsZS1yaWdodFwiPjwvaWNvbmlmeS1pY29uPicsXHJcbiAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7IHRleHQ6ICdcdTc2RUVcdTVGNTUgPGljb25pZnktaWNvbiBpY29uPVwicmk6bWVudS1mb2xkLTQtbGluZVwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvdXRpbHMnIH0sXHJcbiAgICAgIHsgdGV4dDogJ0FwaVx1NTQwOFx1OTZDNicsIGxpbms6ICcvdXRpbHMvYXBpJyB9LFxyXG4gICAgICB7IHRleHQ6ICdLYXJpblx1N0M3QicsIGxpbms6ICcvdXRpbHMva2FyaW4nIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NTIxQlx1NUVGQVx1NkQ4OFx1NjA2Rlx1NTE0M1x1N0QyMCcsIGxpbms6ICcvdXRpbHMvc2VnbWVudCcgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU2NUU1XHU1RkQ3XHU3QkExXHU3NDA2JywgbGluazogJy91dGlscy9sb2dnZXInIH0sXHJcbiAgICAgIHsgdGV4dDogJ1x1NUUzOFx1NzUyOFx1NTFGRFx1NjU3MFx1NTQwOFx1OTZDNicsIGxpbms6ICcvdXRpbHMvY29tbW9uJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTk1MkVcdTUwM0NcdTVCNThcdTUwQTgnLCBsaW5rOiAnL3V0aWxzL3JlZGlzJyB9LFxyXG4gICAgICB7IHRleHQ6ICdZYW1sXHU3RjE2XHU4RjkxXHU1NjY4JywgbGluazogJy91dGlscy9ZYW1sRWRpdG9yJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTU2RkVcdTcyNDdcdTZFMzJcdTY3RDMnLCBsaW5rOiAnL3V0aWxzL1JlbmRlcmVyJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTdBRUZcdTUzRTNcdTUxNzFcdTRFQUInLCBsaW5rOiAnL3V0aWxzL3NlcnZlcicgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU2NkY0XHU2NUIwJywgbGluazogJy91dGlscy91cGRhdGUnIH0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnXHU0RThCXHU0RUY2IDxpY29uaWZ5LWljb24gaWNvbj1cImxpbmUtbWQ6Y2hldnJvbi10cmlwbGUtcmlnaHRcIj48L2ljb25pZnktaWNvbj4nLFxyXG4gICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0ZXh0OiAnXHU3NkVFXHU1RjU1IDxpY29uaWZ5LWljb24gaWNvbj1cInJpOm1lbnUtZm9sZC00LWxpbmVcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL2V2ZW50L2luZGV4JyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTYyNDBcdTY3MDlcdTRFOEJcdTRFRjYgPGljb25pZnktaWNvbiBpY29uPVwicWxlbWVudGluZS1pY29uczp2aWV3LXBhZ2UtYWxsLTE2XCIgc3R5bGU9XCJjb2xvcjogIzJhZmZmOFwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvZXZlbnQvZ2VuZXJhbC1kYXRhJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTZEODhcdTYwNkZcdTRFOEJcdTRFRjYgPGljb25pZnktaWNvbiBpY29uPVwidGFibGVyOm1lc3NhZ2VcIiBzdHlsZT1cImNvbG9yOiAjZmY2MzJhXCI+PC9pY29uaWZ5LWljb24+JywgbGluazogJy9ldmVudC9tZXNzYWdlJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTkwMUFcdTc3RTVcdTRFOEJcdTRFRjYgPGljb25pZnktaWNvbiBpY29uPVwiaWNvbmFtb29uOm5vdGlmaWNhdGlvblwiIHN0eWxlPVwiY29sb3I6ICMyYWZmNzlcIj48L2ljb25pZnktaWNvbj4nLCBsaW5rOiAnL2V2ZW50L25vdGljZScgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU4QkY3XHU2QzQyXHU0RThCXHU0RUY2IDxpY29uaWZ5LWljb24gaWNvbj1cIm1pbmdjdXRlOnRhZy1maWxsXCIgc3R5bGU9XCJjb2xvcjogIzc0MmFmZlwiPjwvaWNvbmlmeS1pY29uPicsIGxpbms6ICcvZXZlbnQvcmVxdWVzdCcgfVxyXG4gICAgXSxcclxuICB9LFxyXG4gIHsgdGV4dDogJ1x1NjZGNFx1NjVCMFx1NjVFNVx1NUZENyA8aWNvbmlmeS1pY29uIGljb249XCJpeDpsb2dcIiBzdHlsZT1cImNvbG9yOiAjZmY3MGNmXCI+PC9pY29uaWZ5LWljb24+JywgbGluazogJy9vdGhlci9jaGFuZ2Vsb2cnIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZGViYXIiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXEdpdEh1YlxcXFxLYXJpbi1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxkYXRhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxHaXRIdWJcXFxcS2FyaW4tZG9jc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcZGF0YVxcXFxzZWFyY2gudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0dpdEh1Yi9LYXJpbi1kb2NzL2RvY3MvLnZpdGVwcmVzcy9kYXRhL3NlYXJjaC50c1wiO2NvbnN0IHNlYXJjaCA9IHtcclxuICBwcm92aWRlcjogJ2xvY2FsJyxcclxuICBvcHRpb25zOiB7XHJcbiAgICBsb2NhbGVzOiB7XHJcbiAgICAgIHJvb3Q6IHtcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICBidXR0b25UZXh0OiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcclxuICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxzOiAnXHU2NjNFXHU3OTNBXHU4QkU2XHU3RUM2XHU1MjE3XHU4ODY4JyxcclxuICAgICAgICAgICAgbm9SZXN1bHRzVGV4dDogJ1x1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5QycsXHJcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uVGl0bGU6ICdcdTZFMDVcdTk2NjRcdTY3RTVcdThCRTJcdTY3NjFcdTRFRjYnLFxyXG4gICAgICAgICAgICBiYWNrQnV0dG9uVGl0bGU6ICdcdTUxNzNcdTk1RURcdTY0MUNcdTdEMjInLFxyXG4gICAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgICBzZWxlY3RUZXh0OiAnXHU5MDA5XHU2MkU5JyxcclxuICAgICAgICAgICAgICBuYXZpZ2F0ZVRleHQ6ICdcdTUyMDdcdTYzNjInLFxyXG4gICAgICAgICAgICAgIHNlbGVjdEtleUFyaWFMYWJlbDogJ1x1OEY5M1x1NTE2NScsXHJcbiAgICAgICAgICAgICAgbmF2aWdhdGVVcEtleUFyaWFMYWJlbDogJ1x1NEUwQVx1N0JBRFx1NTkzNCcsXHJcbiAgICAgICAgICAgICAgbmF2aWdhdGVEb3duS2V5QXJpYUxhYmVsOiAnXHU0RTBCXHU3QkFEXHU1OTM0JyxcclxuICAgICAgICAgICAgICBjbG9zZVRleHQ6ICdcdTUxNzNcdTk1RUQnLFxyXG4gICAgICAgICAgICAgIGNsb3NlS2V5QXJpYUxhYmVsOiAnZXNjJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHaXRIdWJcXFxcS2FyaW4tZG9jc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcR2l0SHViXFxcXEthcmluLWRvY3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGRhdGFcXFxcaGVhZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR2l0SHViL0thcmluLWRvY3MvZG9jcy8udml0ZXByZXNzL2RhdGEvaGVhZC50c1wiO2ltcG9ydCB7IEhlYWRDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXHJcblxyXG4vLyBwcmV0dGllci1pZ25vcmVcclxuY29uc3QgaGVhZDogSGVhZENvbmZpZ1tdID0gW1xyXG4gIC8vIFNFT1xyXG4gIFsnbWV0YScsIHsgbmFtZTogJ21zdmFsaWRhdGUuMDEnLCBjb250ZW50OiAnOEQ1RERFQTk3RjcyNzQwQjczNDk5QUE1MjBCNjdBMUEnIH1dLFxyXG4gIFsnbWV0YScsIHsgbmFtZTogJ2dvb2dsZS1zaXRlLXZlcmlmaWNhdGlvbicsIGNvbnRlbnQ6ICctLVY5WlZWQmZha0hkcXdSNTRiZ1k2am5GUFh6OFhGQldod3NQRWlCYjVRJyB9XSxcclxuICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6dGl0bGUnLCBjb250ZW50OiAnS2FyaW4nIH1dLFxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzpkZXNjcmlwdGlvbicsIGNvbnRlbnQ6ICdBbiBvcGVuIHNvdXJjZSBoaWdoLXBlcmZvcm1hbmNlIGJvdCBmcmFtZXdvcmsgYnVpbHQgd2l0aCBUeXBlU2NyaXB0LiBTdXBwb3J0cyBmdW5jdGlvbnMgc3VjaCBhcyBtdWx0aS1hZGFwdGVyLCBtdWx0aS1wbGF0Zm9ybSBhY2Nlc3MgYW5kIGN1c3RvbSByZW5kZXJlci4nIH1dLFxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzppbWFnZScsIGNvbnRlbnQ6ICdodHRwczovL2thcmluLmZ1bi9sb2dvLTIucG5nJyB9XSxcclxuICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6aW1hZ2U6d2lkdGgnLCBjb250ZW50OiAnNTgyJyB9XSxcclxuICBbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6aW1hZ2U6aGVpZ2h0JywgY29udGVudDogJzY0OCcgfV0sXHJcbiAgWydtZXRhJywgeyBwcm9wZXJ0eTogJ29nOnVybCcsIGNvbnRlbnQ6ICdodHRwczovL2thcmluLmZ1bi8nIH1dLFxyXG4gIFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzpsaWNlbnNlJywgY29udGVudDogJ2h0dHBzOi8va2FyaW4uZnVuL2RvY3MvbGljZW5zZScgfV0sXHJcbiAgWydtZXRhJywgeyBuYW1lOiAnYXV0aG9yJywgY29udGVudDogJ0thcmluSlMgVGVhbScgfV0sXHJcbiAgWydtZXRhJywgeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiAnQW4gb3BlbiBzb3VyY2UgaGlnaC1wZXJmb3JtYW5jZSBib3QgZnJhbWV3b3JrIGJ1aWx0IHdpdGggVHlwZVNjcmlwdC4gU3VwcG9ydHMgZnVuY3Rpb25zIHN1Y2ggYXMgbXVsdGktYWRhcHRlciwgbXVsdGktcGxhdGZvcm0gYWNjZXNzIGFuZCBjdXN0b20gcmVuZGVyZXIuJyB9XSxcclxuICBbJ21ldGEnLCB7IG5hbWU6ICdrZXl3b3JkcycsIGNvbnRlbnQ6ICdCb3QgZnJhbWUsIFJvYm90IGZyYW1lLCBUeXBlU2NyaXB0JyB9XSxcclxuICBbJ2xpbmsnLHsgcmVsOiAnaWNvbicsIGhyZWY6ICcvaW1hZ2VzL2xvZ28ucG5nJ31dLFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcR2l0SHViXFxcXEthcmluLWRvY3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGRhdGFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEdpdEh1YlxcXFxLYXJpbi1kb2NzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxkYXRhXFxcXHB3YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovR2l0SHViL0thcmluLWRvY3MvZG9jcy8udml0ZXByZXNzL2RhdGEvcHdhLnRzXCI7aW1wb3J0IHR5cGUgeyBQd2FPcHRpb25zIH0gZnJvbSAnQHZpdGUtcHdhL3ZpdGVwcmVzcydcclxuaW1wb3J0IGZnIGZyb20gJ2Zhc3QtZ2xvYidcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcblxyXG5jb25zdCBwd2E6IFBhcnRpYWw8UHdhT3B0aW9ucz4gPSB7XHJcbiAgb3V0RGlyOiAnLi4vZGlzdCcsXHJcbiAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgaW5jbHVkZUFzc2V0czogZmcuc3luYygnKiovKi57cG5nLHN2ZyxnaWYsaWNvLHR4dH0nLCB7XHJcbiAgICBjd2Q6IHJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vcHVibGljJylcclxuICB9KSxcclxuICBkZXZPcHRpb25zOiB7XHJcbiAgICBlbmFibGVkOiB0cnVlIC8vIFx1NUYwMFx1NTNEMVx1NkEyMVx1NUYwRlx1NEUwQlx1NEU1Rlx1NTQyRlx1NzUyOCBwd2FcclxuICB9LFxyXG4gIG1hbmlmZXN0OiB7XHJcbiAgICBpZDogJy8nLFxyXG4gICAgbmFtZTogJ0thcmluJyxcclxuICAgIHNob3J0X25hbWU6ICdLYXJpbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ0FuIG9wZW4gc291cmNlIGhpZ2gtcGVyZm9ybWFuY2UgYm90IGZyYW1ld29yayBidWlsdCB3aXRoIFR5cGVTY3JpcHQuIFN1cHBvcnRzIGZ1bmN0aW9ucyBzdWNoIGFzIG11bHRpLWFkYXB0ZXIsIG11bHRpLXBsYXRmb3JtIGFjY2VzcyBhbmQgY3VzdG9tIHJlbmRlcmVyLicsXHJcbiAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgaWNvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHNyYzogJy9pbWFnZXMvbG9nby0xOTJ4MTkyLnBuZycsXHJcbiAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9sb2dvLTUxMi01MTIucG5nJyxcclxuICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBzY3JlZW5zaG90czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9zY3JlZW5zaG90LXdpZGUucG5nJyxcclxuICAgICAgICBzaXplczogJzMwOTJ4MjE3OCcsXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAgICAgZm9ybV9mYWN0b3I6ICd3aWRlJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9zY3JlZW5zaG90LW5hcnJvdy5wbmcnLFxyXG4gICAgICAgIHNpemVzOiAnMTI5MHg0OTk1JyxcclxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICBmb3JtX2ZhY3RvcjogJ25hcnJvdydcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgd29ya2JveDoge1xyXG4gICAgZ2xvYkRpcmVjdG9yeTogJy4uL2Rpc3QnLFxyXG4gICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGNzcyxodG1sLHBuZyxzdmcsaWNvLHR4dH0nXVxyXG4gICAgLy8gZ2xvYk9wdGlvbnM6IHtcclxuICAgIC8vICAgaWdub3JlOiBbJyoqL25vZGVfbW9kdWxlcy8qKi8qJywgJ3N3LmpzJywgJ3dvcmtib3gtKi5qcyddXHJcbiAgICAvLyB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwd2FcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UixPQUFPLFdBQVc7QUFDaFQsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9COzs7QUNEN0IsSUFBTSxNQUE4QjtBQUFBLEVBQ2xDO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sc0JBQU8sTUFBTSxlQUFlO0FBQUEsTUFDcEMsRUFBRSxNQUFNLDRCQUFRLE1BQU0sZUFBZTtBQUFBLE1BQ3JDLEVBQUUsTUFBTSxzQkFBTyxNQUFNLGdCQUFnQjtBQUFBLE1BQ3JDLEVBQUUsTUFBTSw0QkFBUSxNQUFNLGNBQWM7QUFBQSxNQUNwQyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxrQkFBa0I7QUFBQSxNQUN4QyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxhQUFhO0FBQUEsSUFDckM7QUFBQSxFQUNGO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUFRLE9BQU87QUFBQSxVQUNuQixFQUFFLE1BQU0sNEJBQVEsTUFBTSxpQkFBaUI7QUFBQSxVQUN2QyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxxQkFBcUI7QUFBQSxVQUMzQyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxvQkFBb0I7QUFBQSxVQUMxQyxFQUFFLE1BQU0sNEJBQVEsTUFBTSxnQkFBZ0I7QUFBQSxVQUN0QyxFQUFFLE1BQU0sa0NBQVMsTUFBTSxtQkFBbUI7QUFBQSxRQUM1QztBQUFBLE1BQ0Y7QUFBQSxNQUNBLEVBQUUsTUFBTSw0QkFBUSxNQUFNLGdCQUFnQjtBQUFBLElBQ3hDO0FBQUEsRUFD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QSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQ0Y7IiwKICAibmFtZXMiOiBbIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIiwgIl9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lIl0KfQo=
