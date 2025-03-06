<template>
  <div class="node-downloads">
    <div v-if="loading" class="loading">
      <div class="loading-spinner"></div>
      正在获取最新版本信息...
    </div>

    <div v-else class="download-sections">
      <!-- Windows 下载 -->
      <div class="download-section">
        <h4 @click="toggleSection('windows')" class="section-title">
          <span class="icon">
            <iconify-icon icon="logos:microsoft-windows" width="20" />
          </span>
          Windows
          <span class="toggle-icon">{{ sections.windows ? '▼' : '▶' }}</span>
        </h4>
        <div v-show="sections.windows" class="section-content">
          <div v-for="file in windowsFiles" :key="file.name" class="file-item">
            <span class="file-name">{{ file.name }}</span>
            <div class="file-links">
              <a :href="getDownloadUrl(file.filename)" target="_blank" class="download-link">
                下载
                <iconify-icon icon="material-symbols:download" />
              </a>
              <span class="file-hash" @click="copyHash(file.hash)">
                SHA256: {{ file.hash.slice(0, 8) }}...
                <iconify-icon icon="material-symbols:content-copy-outline" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Linux 下载 -->
      <div class="download-section">
        <h4 @click="toggleSection('linux')" class="section-title">
          <span class="icon">
            <iconify-icon icon="logos:linux-tux" width="20" />
          </span>
          Linux
          <span class="toggle-icon">{{ sections.linux ? '▼' : '▶' }}</span>
        </h4>
        <div v-show="sections.linux" class="section-content">
          <div v-for="file in linuxFiles" :key="file.name" class="file-item">
            <span class="file-name">{{ file.name }}</span>
            <div class="file-links">
              <a :href="getDownloadUrl(file.filename)" target="_blank" class="download-link">
                下载
                <iconify-icon icon="material-symbols:download" />
              </a>
              <span class="file-hash" @click="copyHash(file.hash)">
                SHA256: {{ file.hash.slice(0, 8) }}...
                <iconify-icon icon="material-symbols:content-copy-outline" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 源码下载 -->
      <div class="download-section">
        <h4 @click="toggleSection('source')" class="section-title">
          <span class="icon">
            <iconify-icon icon="material-symbols:code" width="20" />
          </span>
          Source Code
          <span class="toggle-icon">{{ sections.source ? '▼' : '▶' }}</span>
        </h4>
        <div v-show="sections.source" class="section-content">
          <div v-for="file in sourceFiles" :key="file.name" class="file-item">
            <span class="file-name">{{ file.name }}</span>
            <div class="file-links">
              <a :href="getDownloadUrl(file.filename)" target="_blank" class="download-link">
                下载
                <iconify-icon icon="material-symbols:download" />
              </a>
              <span class="file-hash" @click="copyHash(file.hash)">
                SHA256: {{ file.hash.slice(0, 8) }}...
                <iconify-icon icon="material-symbols:content-copy-outline" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const loading = ref(true)
const sections = ref({
  windows: false,
  linux: false,
  source: false
})

const windowsFiles = ref([])
const linuxFiles = ref([])
const sourceFiles = ref([])

const toggleSection = (section) => {
  sections.value[section] = !sections.value[section]
}

const getDownloadUrl = (filename) => {
  return `https://cdn.npmmirror.com/binaries/node/latest-v22.x/${filename}`
}

const copyHash = async (hash) => {
  try {
    await navigator.clipboard.writeText(hash)
    // 可以添加一个复制成功的提示
  } catch (err) {
    console.error('复制失败:', err)
  }
}

const parseFileInfo = (line) => {
  const [hash, filename] = line.split('  ')
  let name = filename.replace('node-v', '')

  return {
    hash,
    filename,
    name
  }
}

const categorizeFiles = (files) => {
  files.forEach(file => {
    if (file.filename.includes('win')) {
      windowsFiles.value.push(file)
    } else if (file.filename.includes('linux')) {
      linuxFiles.value.push(file)
    } else if (file.filename.includes('.tar')) {
      sourceFiles.value.push(file)
    }
  })
}

onMounted(async () => {
  try {
    const url = getDownloadUrl('SHASUMS256.txt')
    const response = await axios.get(url)
    const files = response.data
      .split('\n')
      .filter(line => line.trim())
      .map(parseFileInfo)

    categorizeFiles(files)
    loading.value = false
  } catch (error) {
    console.error('获取文件列表失败:', error)
    loading.value = false
  }
})
</script>

<style scoped>
.node-downloads {
  margin: 20px 0;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: var(--vp-c-text-2);
}

.loading-spinner {
  border: 2px solid var(--vp-c-divider);
  border-top: 2px solid var(--vp-c-brand);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.download-section {
  margin-bottom: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.section-title {
  margin: 0;
  padding: 12px 16px;
  background-color: var(--vp-c-bg-soft);
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
}

.icon {
  margin-right: 8px;
  display: flex;
  align-items: center;
}

.toggle-icon {
  margin-left: auto;
  font-size: 12px;
}

.section-content {
  padding: 16px;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.file-item:last-child {
  border-bottom: none;
}

.file-name {
  font-family: var(--vp-font-family-mono);
  font-size: 0.9em;
}

.file-links {
  display: flex;
  gap: 16px;
  align-items: center;
}

.download-link {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.file-hash {
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--vp-font-family-mono);
  font-size: 0.8em;
  color: var(--vp-c-text-2);
  cursor: pointer;
}

.file-hash:hover {
  color: var(--vp-c-brand);
}
</style>