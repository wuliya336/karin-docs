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


  <!-- 渲染插件列表 -->
  <div v-else>
    <div v-for="type in ['npm', 'git', 'app']" :key="type">
      <h2 class="text-2xl font-bold my-4">{{ getTypeTitle(type) }}</h2>
      <PluginTable :plugins="filterPlugins(type)" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PluginTable from './PluginTable.vue'

export default {
  components: { PluginTable },
  data () {
    return {
      allPlugins: [],
      loading: true, // 加载状态
      error: null
    }
  },
  async mounted () {
    try {
      const response = await axios.get('https://raw.githubusercontent.com/KarinJS/plugins-list/main/plugins.json')
      const data = response.data
      // const data = await import('../../../../pluginList.json')
      this.allPlugins = data.plugins
    } catch (err) {
      this.error = err.message || '加载失败'
    } finally {
      this.loading = false // 无论成功或失败，加载完成
    }
  },
  methods: {
    filterPlugins (type) {
      return this.allPlugins.filter(p => p.type === type)
    },
    getTypeTitle (type) {
      return {
        npm: '🦄Npm 插件列表',
        git: '🎨Git 插件列表',
        app: '📖App 插件列表'
      }[type]
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