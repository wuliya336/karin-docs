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
                        <span class="file-name">{{ file.filename }}</span>
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
                        <span class="file-name">{{ file.filename }}</span>
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
                        <span class="file-name">{{ file.filename }}</span>
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
    return {
        hash,
        filename,
        name: filename // 保持原始文件名
    }
}

const categorizeFiles = (files) => {
    files.forEach(file => {
        if (file.filename.match(/win.*\.(exe|msi|zip|7z)$/)) {
            windowsFiles.value.push(file)
        } else if (file.filename.match(/linux.*\.tar\.(gz|xz)$/)) {
            linuxFiles.value.push(file)
        } else if (file.filename.match(/^node-v.*\.(tar\.gz|tar\.xz)$/)) {
            // 只包含纯源码包
            if (!file.filename.includes('linux') &&
                !file.filename.includes('win') &&
                !file.filename.includes('darwin')) {
                sourceFiles.value.push(file)
            }
        }
    })
}

onMounted(async () => {
    try {
        const response = await axios.get('https://cdn.npmmirror.com/binaries/node/latest-v22.x/SHASUMS256.txt')
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
/* 样式保持不变 */
</style>