<template>
  <div v-if="loading" class="text-center" style="color: var(--vp-c-text-1);">
    <div class="inline-flex items-center gap-2">
      <div class="loader"></div>
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
            'mx-1 px-4 py-2 rounded-lg page-button': true,
            'bg-[var(--vp-c-brand-1)] text-white ': currentPages[type] === item,
            'bg-gray-200 dark:bg-opacity-5 hover:text-[var(--vp-c-brand-1)]': currentPages[type] !== item
          }">
            {{ item }}
          </button>
          <!-- 省略样式占位符 -->
          <span v-else class="mx-1 px-4 py-2 rounded-lg bg-gray-200 dark:bg-opacity-5 page-button">
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
  <transition enter-active-class="transition-all duration-500 ease-[cubic-bezier(1.00,0.00,1.00,1.00)]"
    leave-active-class="transition-all duration-500 ease-[cubic-bezier(0.00,0.00,0.00,1.00)]"
    enter-from-class="scale-125 opacity-0" enter-to-class="scale-100 opacity-100"
    leave-from-class="scale-100 opacity-100" leave-to-class="scale-125 opacity-0">
    <div v-if="selectedPlugin" class="fixed inset-0 flex items-center justify-center z-50"
      @click="closePluginIfOutside($event)">
      <!-- 背景模糊层（带动画） -->
      <div class="fixed inset-0 backdrop-filter transform duration-500 ease-in-out"
        :class="{ 'backdrop-blur-lg': isBlurred }"></div>

      <!-- 弹窗内容（透明模糊背景） -->
      <div
        class="rounded-lg p-6 lg:p-10 w-11/12 h-4/5 lg:w-5/12 max-w-screen-2xl backdrop-blur-lg shadow-2xl overflow-auto transform bg-white/10 dark:bg-gray-800/10"
        @click.stop>
        <!-- 弹窗头部 -->
        <div class="flex justify-between items-center mb-4">
          <div class="text-3xl font-bold">{{ selectedPlugin.name }}</div>
          <button @click="selectedPlugin = null">
            <span
              class="icon-[icon-park-solid--error] mt-4 h-6 w-6 lg:h-8 lg:w-8 bg-[#ff5e5e] transform duration-500 hover:rotate-180 hover:scale-150 ease-[cubic-bezier(0.00,0.00,0.00,1.00)]"></span>
          </button>
        </div>

        <!-- 弹窗内容区域 -->
        <div class="h-8"></div>
        <div class="space-y-4">
          <p><strong>描述:</strong> {{ selectedPlugin.description }}</p>
          <p><strong>版本:</strong> {{ selectedPlugin.version }}</p>
          <p>
            <strong>开发:&nbsp;</strong>
            <template v-for="(author, index) in selectedPlugin.author" :key="author.name">
              <Pill :name=author.name :link=author.home />
              <span v-if="index !== selectedPlugin.author.length - 1" class="text-gray-600 dark:text-gray-300">, </span>
            </template>
          </p>
          <p>
            <strong>开源协议:&nbsp;</strong>
            <Pill :name=selectedPlugin.license.name :link=selectedPlugin.license.url />
          </p>
          <p>
            <strong>仓库地址: </strong>
            <template v-for="(repo) in selectedPlugin.repo" :key="repo.url">
              &nbsp;
              <a :href="repo.url" target="_blank">
                <span :class="getIconClass(repo.type)"
                  class="w-6 h-6 mb-[-6px] transform duration-500 hover:scale-150 ease-[cubic-bezier(0.00,0.00,0.00,1.00)]"></span>
              </a>
            </template>
          </p>
          <div class="warning custom-block">
            <p class="custom-block-title">注意</p>
            <p>当前页面正在施工中 🚧</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import PluginCard from './PluginCard.vue'
import Pill from './DocPill.vue'

export default {
  components: { PluginCard },
  data () {
    return {
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
      itemsPerPage: 6 // 每页显示的插件数量
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
      const response = await axios.get('https://raw.githubusercontent.com/KarinJS/plugins-list/main/plugins.json')
      const data = response.data
      // const data = await import('./plugin.json')
      this.allPlugins = data.plugins.map(plugin => ({
        ...plugin,
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
    filterPlugins (type) {
      return this.allPlugins.filter(p => p.type === type)
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
        const response = await axios.get(`https://raw.githubusercontent.com/${plugin.repo[0].url.split('/').slice(3, 5).join('/')}/main/package.json`)
        plugin.version = response.data.version
      } catch (err) {
        plugin.version = '未知'
      }
    },
    showPluginDetails (plugin) {
      this.selectedPlugin = plugin
      this.isBlurred = true // 显示弹窗时启用背景模糊
      // 点击详情时加载版本信息
      if (this.selectedPlugin.version === '加载中...') {
        this.loadPluginVersion(plugin)
      }
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
      if (page >= 1 && page <= this.getPageCount(type)) {
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

<style scoped>
.loader {
  width: 32px;
  height: 32px;
  border: 4px solid var(--vp-c-text-1);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* 确保页码按钮宽度一致 */
.page-button {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 防止按钮收缩 */
  flex-shrink: 0;
  /** 禁止选中文本 */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .page-button {
    width: 32px;
    height: 32px;
  }
}
</style>

<style>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
