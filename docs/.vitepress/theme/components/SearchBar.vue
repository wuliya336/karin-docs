<template>
  <div class="backdrop-blur-sm p-4 bg-white dark:bg-opacity-5 rounded-lg shadow-sm mb-6">
    <div class="flex flex-wrap gap-4 items-end">
      <!-- 关键词搜索 -->
      <div class="flex-1 min-w-[200px]">
        <label class="block text-sm font-medium mb-1">关键词搜索</label>
        <el-input v-model="searchKeyword" placeholder="名称/描述/作者" clearable />

      </div>

      <!-- 作者筛选 -->
      <div class="w-48">
        <label class="block text-sm font-medium mb-1">筛选作者</label>
        <el-select v-model="selectedAuthor" filterable clearable placeholder="全部">
          <el-option v-for="item in uniqueAuthors" :key="item" :label="item" :value="item" />
        </el-select>
      </div>

      <!-- 插件类型筛选 -->
      <div class="w-48">
        <label class="block text-sm font-medium mb-1">插件类型</label>
        <el-select v-model="selectedPluginType" clearable placeholder="全部">
          <el-option v-for="item in pluginTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>

      <!-- 仓库类型筛选 -->
      <div class="w-48">
        <label class="block text-sm font-medium mb-1">仓库类型</label>

        <el-select v-model="selectedRepoType" clearable placeholder="全部">
          <el-option v-for="item in repoTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>

      <button @click="handleSearch"
        class="h-8 px-4 bg-[var(--vp-c-brand-1)] text-white rounded-lg hover:opacity-90 transition-opacity">
        搜索
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plugins: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  emits: ['search'],
  data () {
    return {
      searchKeyword: '',
      selectedAuthor: '',
      selectedPluginType: '',
      selectedRepoType: '',
      pluginTypeOptions: [
        { value: '', label: '全部' },
        { value: 'npm', label: 'NPM 插件' },
        { value: 'git', label: 'Git 插件' },
        { value: 'app', label: 'App 插件' }
      ],
      repoTypeOptions: [
        { value: '', label: '全部' },
        { value: 'npm', label: 'NPM' },
        { value: 'github', label: 'GitHub' },
        { value: 'gitee', label: 'Gitee' }
      ]
    }
  },
  computed: {
    uniqueAuthors () {
      try {
        const authors = new Set()
        // 添加安全校验
        if (!Array.isArray(this.plugins)) {
          console.log(this.plugins)
          return ['全部']
        }

        this.plugins.forEach(plugin => {
          // 校验author数据结构
          if (plugin?.author && Array.isArray(plugin.author)) {
            plugin.author.forEach(author => {
              if (author?.name) authors.add(author.name.trim())
            })
          }
        })
        return ['全部', ...Array.from(authors)].filter(a => a !== '')
      } catch (e) {
        console.error('作者列表生成失败:', e)
        return ['全部']
      }
    }
  },
  methods: {
    // addMemory (val) {
    //   TinyModal.message({ message: val, status: 'success' })
    //   textMemoryRef.value.addMemory(val)
    // },
    handleSearch () {
      this.$emit('search', {
        keyword: this.searchKeyword.toLowerCase(),
        author: this.selectedAuthor === '全部作者' ? '' : this.selectedAuthor,
        pluginType: this.selectedPluginType,
        repoType: this.selectedRepoType
      })
    }
  }
}
</script>