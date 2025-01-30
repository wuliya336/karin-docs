<template>
  <div v-if="plugins.length === 0" class="text-center my-4" style="color: var(--vp-c-text-2);">
    暂无相关插件
  </div>
  <table v-else class="w-full table-auto mb-8">
    <thead style="background: var(--vp-c-bg-alt);">
      <tr>
        <th class="px-4 py-2 text-left">插件名称</th>
        <th class="px-4 py-2 text-left">描述</th>
        <th class="px-4 py-2 text-left">作者</th>
        <th class="px-4 py-2 text-left">许可证</th>
        <th class="px-4 py-2 text-left">仓库链接</th>
        <th class="px-4 py-2 text-left">更新时间</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="plugin in plugins" :key="plugin.name" class="hover:bg-gray-100 dark:hover:bg-gray-800">
        <td class="px-4 py-2">{{ plugin.name }}</td>
        <td class="px-4 py-2">{{ plugin.description }}</td>
        <td class="px-4 py-2">
          <template v-for="(author, index) in plugin.author" :key="author.name">
            <a :href="author.home" target="_blank" class="text-brand hover:text-brand-hover transition-colors"
              :class="{ 'ml-1': index !== 0 }">
              {{ author.name }}
            </a>
            <span v-if="index !== plugin.author.length - 1">, </span>
          </template>
        </td>
        <td class="px-4 py-2">
          <a :href="plugin.license.url" target="_blank" class="text-brand hover:text-brand-hover transition-colors">
            {{ plugin.license.name }}
          </a>
        </td>
        <td class="px-4 py-2">
          <template v-if="plugin.repo.length > 0">
            <template v-for="(repo, index) in plugin.repo" :key="repo.url">
              <a :href="repo.url" target="_blank" class="text-brand hover:text-brand-hover transition-colors"
                :class="{ 'ml-1': index !== 0 }">
                {{ repo.type }}
              </a>
              <span v-if="index !== plugin.repo.length - 1">, </span>
            </template>
          </template>
          <span v-else>暂无</span>
        </td>
        <td class="px-4 py-2">{{ plugin.time }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    plugins: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.text-brand {
  color: var(--vp-c-brand-1);
}

.hover\:text-brand-hover:hover {
  color: var(--vp-c-brand-2);
}
</style>