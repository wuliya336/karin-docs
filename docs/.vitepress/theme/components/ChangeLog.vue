<template>
  <div v-if="loading">
    <div class="loader-container">
      <div class="loader"></div>
      <span>处理中......</span>
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
.loader-container {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

/* 加载动画样式 */
.loader {
  width: 20px;
  height: 20px;
  border: 3.5px solid var(--vp-c-text-1);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
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