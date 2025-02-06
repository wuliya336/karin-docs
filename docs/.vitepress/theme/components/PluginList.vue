<template>
  <div v-if="loading" class="text-center" style="color: var(--vp-c-text-1);">
    <div class="inline-flex items-center gap-2">
      <div
        class="w-8 h-8 border-4 border-solid border-[var(--vp-c-text-1)] border-t-transparent rounded-full animate-spin">
      </div>
      <span class="text-2xl">插件列表加载中，请稍等......</span>
    </div>
  </div>

  <div v-else-if="error" class="text-center font-bold text-2xl" style="color: var(--vp-badge-danger-text);">
    加载插件列表失败，错误: <br>{{ error }}
  </div>

  <!-- 渲染插件卡片 -->
  <div v-else class="space-y-8 p-6">
    <!-- 每种插件类型 -->
    <div v-for="type in ['npm', 'git', 'app']" :key="type">
      <h2 class="text-2xl font-bold mb-4">{{ getTypeTitle(type) }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 分页显示插件 -->
        <template v-for="(plugin) in getPaginatedPlugins(type)" :key="plugin.name">
          <PluginCard :plugin="plugin" @show-details="showPluginDetails" />
        </template>
      </div>

      <!-- 分页控件 -->
      <div class="flex justify-center mt-6">
        <!-- 上一页按钮 -->
        <button @click="setCurrentPage(type, currentPages[type] - 1)" :class="{
          'mx-1 px-4 py-2 rounded-lg w-8 h-8': true,
          'bg-gray-200 dark:bg-opacity-5': true,
          'disabled cursor-not-allowed': currentPages[type] === 1 // 如果当前页是第一页，则禁用“上一页”按钮
        }" :disabled="currentPages[type] === 1">
          <span class="icon-[tabler--chevron-left]" style="width: 22px; height: 22px; margin: -3px 0 0 -12px;"></span>
        </button>
        <!-- 正常页码按钮 -->
        <template v-for="item in getVisiblePages(type)" :key="item">
          <button v-if="item !== '...'" @click="setCurrentPage(type, item)" :class="{
            'mx-1 px-4 py-2 rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0 select-none': true,
            'bg-[var(--vp-c-brand-1)] text-white ': currentPages[type] === item,
            'bg-gray-200 dark:bg-opacity-5 hover:text-[var(--vp-c-brand-1)]': currentPages[type] !== item
          }">
            {{ item }}
          </button>
          <!-- 省略样式占位符 -->
          <span v-else
            class="mx-1 px-4 py-2 rounded-lg bg-gray-200 dark:bg-opacity-5 w-8 h-8 flex items-center justify-center flex-shrink-0 select-none">
            &hellip;
          </span>
        </template>
        <!-- 下一页按钮 -->
        <button @click="setCurrentPage(type, currentPages[type] + 1)" :class="{
          'mx-1 px-4 py-2 rounded-lg w-8 h-8': true,
          'bg-gray-200 dark:bg-opacity-5': true,
          'disabled cursor-not-allowed': currentPages[type] === getPageCount(type) // 如果当前页是最后一页，则禁用“下一页”按钮
        }" :disabled="currentPages[type] === getPageCount(type)">
          <span class="icon-[tabler--chevron-right]" style="width: 22px; height: 22px; margin: -3px 0 0 -10px;;"></span>
        </button>
      </div>

    </div>
  </div>

  <!-- 弹窗背景和内容 -->
  <transition enter-active-class="transition-all duration-500 custom-bezier"
    leave-active-class="transition-all duration-500 custom-bezier" enter-from-class="scale-125 opacity-0 custom-bezier"
    enter-to-class="scale-100 opacity-100 custom-bezier" leave-from-class="scale-100 opacity-100 custom-bezier"
    leave-to-class="scale-125 opacity-0 custom-bezier">
    <div v-if="selectedPlugin" class="fixed inset-0 flex items-center justify-center z-50"
      @click="closePluginIfOutside($event)">
      <!-- 背景模糊层（带动画） -->
      <div class="fixed inset-0 backdrop-filter transform duration-500 ease-in-out"
        :class="{ 'backdrop-blur-lg': isBlurred }"></div>

      <!-- 弹窗内容（透明模糊背景） -->
      <div
        class="rounded-lg p-6 lg:p-10 w-11/12 h-4/5 lg:w-7/12 max-w-screen-2xl backdrop-blur-lg shadow-2xl overflow-auto transform relative"
        @click.stop>
        <div class="absolute inset-0 -z-10" aria-hidden="true"></div>
        <!-- 弹窗头部 -->
        <div
          class="flex justify-between items-center lg:py-6 lg:px-10 sm:py-3 sm:px-5 sticky top-0 z-50 backdrop-blur-lg rounded-lg">
          <div class="text-3xl font-bold">{{ selectedPlugin.name }}</div>
          <button @click="selectedPlugin = null">
            <span
              class="icon-[icon-park-solid--error] mt-4 h-6 w-6 lg:h-8 lg:w-8 bg-[#ff5e5e] transform duration-500 hover:rotate-180 hover:scale-150 custom-bezier"></span>
          </button>
        </div>

        <!-- 弹窗内容区域 -->
        <div class="h-8"></div>
        <div class="space-y-4 pt-8">
          <p><strong>描述:&nbsp;&nbsp;</strong>{{ selectedPlugin.description }}</p>
          <p><strong>版本:&nbsp;&nbsp;</strong>{{ selectedPlugin.version }}</p>
          <p>
            <strong>开发:&nbsp;</strong>
            <template v-for="(author, index) in selectedPlugin.author" :key="author.name">
              <Pill :name=author.name :link=author.home />
              <span v-if="index !== selectedPlugin.author.length - 1" class="text-gray-600 dark:text-gray-300">, </span>
            </template>
          </p>
          <p>
            <strong>开源协议:&nbsp;&nbsp;</strong>
            <Pill :name=selectedPlugin.license.name :link=selectedPlugin.license.url />
          </p>
          <div v-if="selectedPlugin.type === 'npm'">
            <strong>安装命令:&nbsp;&nbsp;</strong>
            <code>pnpm add {{ selectedPlugin.name }} -w</code>&nbsp;
            <button @click="copyInstallCommand(selectedPlugin.name)" class="focus:outline-none">
              <div class="relative overflow-visible">
                <span
                  class="mb-[-8px] relative icon-[iconamoon--copy-duotone] w-6 h-6 bg-[#9bd298] hover:bg-yellow-200 hover:scale-150 transform duration-500 custom-bezier"></span>
              </div>
            </button>
          </div>
          <p>
            <strong>仓库地址: </strong>
            <template v-for="(repo) in selectedPlugin.repo" :key="repo.url">
              &nbsp;
              <a :href="repo.url" target="_blank">
                <span :class="getIconClass(repo.type)"
                  class="w-6 h-6 mb-[-6px] transform duration-500 hover:scale-150 custom-bezier"></span>
              </a>
            </template>
          </p>
          <div v-if="readmeContent" class="mt-4" v-html="readmeContent"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import { marked } from 'marked'
import hljs from 'highlight.js'
import PluginCard from './PluginCard.vue'
import { testGithub } from '../script/test-url'

export default {
  components: { PluginCard },
  data () {
    return {
      searchParams: {
        keyword: '',
        pluginType: '',
        repoType: ''
      },
      allPlugins: [],
      loading: true,
      error: null,
      selectedPlugin: null,
      isBlurred: false, // 控制背景模糊的状态
      currentPages: {
        npm: 1,
        git: 1,
        app: 1
      },
      itemsPerPage: 9,// 每页显示的插件数量
      readmeContent: '',
      githubProxy: null
    }
  },
  computed: {
    getIconClass () {
      return (type) => {
        switch (type) {
          case 'github':
            return 'icon-[octicon--mark-github-16] bg-black dark:bg-white '
          case 'gitee':
            return 'icon-[simple-icons--gitee] bg-red-500'
          case 'gitcode':
            return 'bg-custom w-full h-64 bg-center bg-no-repeat bg-contain'
          case 'gitlab':
            return 'icon-[devicon--gitlab]'
          case 'npm':
            return 'icon-[devicon--npm] bg-[#cb3837]'
        }
      }
    }
  },
  watch: {
    // 监听 selectedPlugin 的变化
    selectedPlugin (newVal) {
      this.$nextTick(() => {
        if (newVal) {
          // 锁定滚动
          document.body.style.overflow = 'hidden'
          // 补偿滚动条宽度（防止页面跳动）
          document.body.style.paddingRight =
            window.innerWidth - document.documentElement.clientWidth + 'px'
        } else {
          // 恢复滚动
          document.body.style.overflow = ''
          document.body.style.paddingRight = ''
        }
      })
      if (newVal) {
        // 弹窗显示时，添加键盘事件监听
        window.addEventListener('keydown', this.handleKeyDown)
      } else {
        // 弹窗隐藏时，移除键盘事件监听
        window.removeEventListener('keydown', this.handleKeyDown)
      }
    }
  },
  async mounted () {
    try {
      this.githubProxy = await testGithub()
      const afterUrl = this.githubProxy(`https://raw.githubusercontent.com/KarinJS/plugins-list/main/plugins.json`)
      const response = await axios.get(afterUrl)
      const data = response.data
      // const data = await import('./plugin.json')
      this.allPlugins = data.plugins.map(plugin => ({
        ...plugin,
        author: Array.isArray(plugin.author) ? plugin.author : [],
        version: '加载中...' // 初始版本设置为加载中
      }))
    } catch (err) {
      this.error = err.message || '加载失败'
    } finally {
      this.loading = false
    }
  },
  beforeUnmount () {
    // 组件销毁时，移除键盘事件监听
    window.removeEventListener('keydown', this.handleKeyDown)
  },
  methods: {
    /** 搜索处理 */
    handleSearch (params) {
      this.searchParams = params
      // 重置所有分页到第一页
      this.currentPages = { npm: 1, git: 1, app: 1 }
    },
    async copyInstallCommand (name) {
      try {
        await navigator.clipboard.writeText(`pnpm add ${name} -w`)
        ElMessage({ message: '安装命令已复制到剪贴板！', type: 'success', showClose: true, duration: 4000 })

        console.log('安装命令已复制到剪贴板！')
      } catch (err) {
        console.error('无法复制安装命令: ', err)
        ElMessage({ message: '安装命令已复制到剪贴板！', type: 'error', showClose: true, duration: 4000 })
      }
    },
    closePluginIfOutside (event) {
      // 检查点击的目标是否是弹窗容器
      if (!event.target.closest('.rounded-lg')) {
        this.selectedPlugin = null // 关闭弹窗
        this.isBlurred = false // 关闭弹窗时取消背景模糊
      }
    },
    handleKeyDown (event) {
      // 如果按下的是 ESC 键（keyCode 为 27）
      if (event.keyCode === 27) {
        this.selectedPlugin = null // 关闭弹窗
        this.isBlurred = false // 关闭弹窗时取消背景模糊
      }
    },
    /** 过滤 */
    filterPlugins (type) {
      return this.allPlugins.filter(plugin => {
        // 基础类型匹配
        const typeMatch = plugin.type === type

        // 关键词匹配（名称、描述、作者）
        const keywordMatch =
          plugin.name.toLowerCase().includes(this.searchParams.keyword) ||
          plugin.description.toLowerCase().includes(this.searchParams.keyword) ||
          this.checkAuthorsMatch(plugin.author, this.searchParams.keyword)

        // 作者筛选
        const authorMatch =
          !this.searchParams.author ||
          this.checkAuthorsMatch(plugin.author, this.searchParams.author)

        // 插件类型筛选
        const pluginTypeMatch =
          !this.searchParams.pluginType ||
          plugin.type === this.searchParams.pluginType

        // 仓库类型筛选
        const repoTypeMatch =
          !this.searchParams.repoType ||
          plugin.repo.some(r => r.type === this.searchParams.repoType)

        return typeMatch && keywordMatch && authorMatch && pluginTypeMatch && repoTypeMatch
      })
    },
    /** 匹配作者 */
    checkAuthorsMatch (authors, searchTerm) {
      if (!searchTerm) return true
      return authors.some(author =>
        author.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    },
    getTypeTitle (type) {
      return {
        npm: '🦄Npm 插件列表',
        git: '🎨Git 插件列表',
        app: '📖App 插件列表'
      }[type]
    },
    async loadPluginVersion (plugin) {
      try {
        for (const repo of plugin.repo) {
          const repoPath = repo.url.split('/').slice(3, 5).join('/')
          switch (repo.type) {
            case 'github': {
              const afterUrl = this.githubProxy(`https://raw.githubusercontent.com/${repoPath}/${repo.branch}/package.json`)
              // const response = await axios.get(`https://api.github.com/repos/${repoPath}`)
              const pkg = await axios.get(afterUrl)
              plugin.version = pkg.data.version
              break
            }
            case 'gitee': {
              // const giteeResponse = await axios.get(`https://gitee.com/api/v5/repos/${giteeRepo}`)
              const pkg = await axios.get(`https://gitee.com/${repoPath}/raw/${repo.branch}/package.json`)
              plugin.version = pkg.data.version
              break
            }
            default: {
              // TODO: 其他仓库类型
              plugin.version = '暂时只能获取到 Github 和 Gitee 仓库的版本信息'
              break
            }
          }
          break
          // https://gitee.com/ikenxuan/kkkkkk-10086/raw/master/README.md
        }
      } catch (err) {
        plugin.version = err
      }
    },
    async showPluginDetails (plugin) {
      this.selectedPlugin = plugin
      this.isBlurred = true // 显示弹窗时启用背景模糊
      // 点击详情时加载版本信息
      if (this.selectedPlugin.version === '加载中...') {
        this.loadPluginVersion(plugin)
      }
      // 检查是否有 github 类型的仓库对象
      const Repo = plugin.repo.find(repo => repo.type === 'github' || repo.type === 'gitee')
      let htmlData = ''
      const repoPath = Repo.url.split('/').slice(3, 5).join('/')
      switch (Repo.type) {
        case 'github': {
          const proxyUrl = this.githubProxy(`https://raw.githubusercontent.com/${repoPath}/${Repo.branch}/README.md`)
          const readmeResponse = await axios.get(proxyUrl)
          htmlData = readmeResponse.data
          break
        }
        case 'gitee': {
          const response = await axios.get(`https://gitee.com/${repoPath}/raw/${Repo.branch}/README.md`)
          htmlData = response.data
          break
        }
        default: {
          htmlData = '<div class="danger custom-block github-alert"><p class="custom-block-title">错误 Error !</p><p>暂时只能获取到 Github 和 Gitee 仓库的 <code>README.md</code> 文件。</p></div>'
        }
      }
      const renderer = new marked.Renderer()
      marked.setOptions({
        renderer: renderer,
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        highlight: function (code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext'
          return hljs.highlight(code, { language }).value
        }
      })
      this.readmeContent = marked(htmlData)
    },
    getPaginatedPlugins (type) {
      const plugins = this.filterPlugins(type)
      const startIndex = (this.currentPages[type] - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return plugins.slice(startIndex, endIndex)
    },
    getPageCount (type) {
      const plugins = this.filterPlugins(type)
      return Math.ceil(plugins.length / this.itemsPerPage)
    },
    setCurrentPage (type, page) {
      const pageCount = this.getPageCount(type)
      if (page >= 1 && page <= pageCount) {
        this.currentPages[type] = page
      }
    },
    getVisiblePages (type) {
      const pageCount = this.getPageCount(type)
      const currentPage = this.currentPages[type]
      const items = []

      if (pageCount <= 7) {
        // 如果总页数小于等于7，直接显示所有页码
        for (let i = 1; i <= pageCount; i++) {
          items.push(i)
        }
      } else {
        // 总页数大于7，需要分段显示
        if (currentPage <= 4) {
          // 当前页在前4页内，显示前5页和省略号
          for (let i = 1; i <= 5; i++) {
            items.push(i)
          }
          items.push('...')
          items.push(pageCount)
        } else if (currentPage >= pageCount - 3) {
          // 当前页在最后4页内，显示省略号和最后5页
          items.push(1)
          items.push('...')
          for (let i = pageCount - 4; i <= pageCount; i++) {
            items.push(i)
          }
        } else {
          // 当前页在中间，显示省略号、当前页及其前后两页、省略号和最后一页
          items.push(1)
          items.push('...')
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            items.push(i)
          }
          items.push('...')
          items.push(pageCount)
        }
      }

      return items
    }
  }
}
</script>