<template>
  <div v-if="plugins.length === 0" class="text-left my-10" style="color: var(--vp-c-text-2);">
    暂无相关插件
  </div>
  <table v-else class="w-full table-auto mb-8 rounded-lg border-separate border-spacing-0">
    <thead style="background: var(--vp-c-bg-alt);">
      <tr>
        <th class="px-6 py-3 text-center border rounded-tl-lg">插件名称</th>
        <th class="px-6 py-3 text-center border">作者</th>
        <th class="px-6 py-3 text-center border">许可证</th>
        <th class="px-6 py-3 text-center border">仓库链接</th>
        <th class="px-6 py-3 text-center border rounded-tr-lg">描述</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(plugin, index) in plugins" :key="plugin.name">
        <td class="px-6 py-4 border" :class="{ 'rounded-bl-lg': index === plugins.length - 1 }">{{ plugin.name }}</td>
        <td class="px-6 py-4 border">
          <template v-for="(author, index) in plugin.author" :key="author.name">
            <a :href="author.home" target="_blank" class="text-brand hover:text-brand-hover transition-colors"
              :class="{ 'ml-1': index !== 0 }">
              {{ author.name }}
            </a>
            <span v-if="index !== plugin.author.length - 1">, </span>
          </template>
        </td>
        <td class="px-6 py-4 border">
          <a :href="plugin.license.url" target="_blank" class="text-brand hover:text-brand-hover transition-colors">
            {{ plugin.license.name }}
          </a>
        </td>
        <td class="px-6 py-4 border">
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
        <td class="px-6 py-4 border" :class="{ 'rounded-br-lg': index === plugins.length - 1 }">
          {{ plugin.description }}
        </td>
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

/* 确保圆角和边框同时生效 */
.rounded-tl-lg {
  border-top-left-radius: 0.5rem;
}

.rounded-tr-lg {
  border-top-right-radius: 0.5rem;
}

.rounded-bl-lg {
  border-bottom-left-radius: 0.5rem;
}

.rounded-br-lg {
  border-bottom-right-radius: 0.5rem;
}

/* 确保表格边框和圆角不冲突 */
table {
  border-collapse: separate;
  border-spacing: 0;
}

th {
  text-align: center;
}
</style>