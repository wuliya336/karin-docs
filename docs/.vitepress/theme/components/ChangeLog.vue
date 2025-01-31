<template>
  <div v-if="loading">
    <div class="inline-flex items-center gap-2">
      <div class="loader"></div>
      <span class="text-3xl">处理中......</span>
    </div>
  </div>
  <div v-else-if="error">获取更新日志失败，错误: {{ error }}</div>
  <div v-else v-html="compiledMarkdown"></div>
</template>

<script>
import axios from 'axios'
import { marked } from 'marked'

export default {
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      markdownContent: '',
      compiledMarkdown: '',
      loading: true,
      error: null
    }
  },
  mounted () {
    this.fetchMarkdown()
  },
  methods: {
    fetchMarkdown () {
      axios.get(this.src, {
        timeout: 10000
      })
        .then(response => {
          this.markdownContent = response.data
          this.compileMarkdown()
        })
        .catch(error => {
          this.error = error
        })
        .finally(() => {
          this.loading = false
        })
    },
    compileMarkdown () {
      this.compiledMarkdown = marked(this.markdownContent)
    }
  }
}
</script>

<style scoped>
/* 加载动画样式 */
.loader {
  width: 32px;
  height: 32px;
  border: 4px solid var(--vp-c-text-1);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin-fce0b109 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>