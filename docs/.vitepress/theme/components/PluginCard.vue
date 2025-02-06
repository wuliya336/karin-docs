<template>
  <div
    class="relative flex flex-col justify-between h-full bg-white dark:bg-opacity-5 rounded-lg shadow-xl transition-shadow duration-300 px-6 pt-6 pb-4 overflow-hidden select-none"
    @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" @mousedown="handleClick" @mouseup="handleMouseUp"
    :style="cardStyle">
    <!-- 遮罩层 -->
    <transition name="mask">
      <div v-if="showMask"
        class="absolute z-10 transition-opacity duration-100 ease-[cubic-bezier(0.00,0.00,0.00,1.00)] opacity-0 overflow-hidden"
        :style="maskStyle"></div>
    </transition>

    <div>
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-900 dark:text-white">
          {{ plugin.name }}
        </div>
        <div v-if="plugin.type === 'npm'">
          <!-- <el-popover placement="top-start" title="点击复制安装命令" :width="200" trigger="hover" :content=installCommand>
            <template #reference>
              <button @click="copyInstallCommand"
                class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none">
                <div class="relative overflow-visible">
                  <span
                    class="relative icon-[iconamoon--copy-duotone] w-6 h-6 bg-[#9bd298] hover:bg-yellow-200 hover:scale-150 transform duration-500 ease-[cubic-bezier(0.00,0.00,0.00,1.00)]"></span>
                </div>
              </button>
            </template>
</el-popover> -->
        </div>
      </div>
      <div class="text-gray-600 lg:mb-7 mb-4 md:mb-6 mt-4 dark:text-gray-300 line-clamp-2 min-h-[48.1px] select-none">{{
        plugin.description }}</div>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex space-x-2">
        <template v-for="(repo) in plugin.repo" :key="repo.url">
          &nbsp;
          <a :href="repo.url" target="_blank" class="select-none">
            <span :class="getIconClass(repo.type)"
              class="w-6 h-6 transform duration-500 hover:scale-150 ease-[cubic-bezier(0.00,0.00,0.00,1.00)]"></span>
          </a>
          &nbsp;
        </template>
      </div>
      <button @click="$emit('show-details', plugin)"
        class="focus:outline-none border border-solid relative overflow-visible w-16 h-10 bg-green-700/15 text-[#69bb66] hover:bg-yellow-300/20 hover:text-[#e7d84a] hover:scale-125 transform duration-500 ease-[cubic-bezier(0.00,0.00,0.00,1.00)] rounded-xl hover:filter hover:drop-shadow-[0_0_10px_#E2E51C] hover:text-shadow-[0_0_10px_#E2E51C]">
        详情
      </button>
    </div>
  </div>
</template>

<script>
// import { ElMessage } from 'element-plus'

export default {
  props: {
    plugin: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      tiltX: 0,
      tiltY: 0,
      showMask: false,
      maskStyle: {
        top: '0',
        left: '0',
        width: '0',
        height: '0',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.5s ease',
        pointerEvents: 'none' // 防止遮罩层干扰点击事件
      },
      intervalId: null, // 用于存储定时器的 ID
    }
  },
  computed: {
    installCommand () {
      return `pnpm add ${this.plugin.name} -w`
    },
    cardStyle () {
      return {
        transform: `perspective(1000px) rotateX(${this.tiltY}deg) rotateY(${this.tiltX}deg)`,
        transition: 'transform 0.05s ease'
      }
    },
    getIconClass () {
      return (type) => {
        switch (type) {
          case 'github':
            return 'icon-[octicon--mark-github-16] bg-black dark:bg-white'
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
  methods: {
    async copyInstallCommand () {
      try {
        await navigator.clipboard.writeText(`pnpm add ${this.plugin.name} -w`)
        // ElMessage({ message: '安装命令已复制到剪贴板！', type: 'success', showClose: true, duration: 4000 })

        console.log('安装命令已复制到剪贴板！')
      } catch (err) {
        console.error('无法复制安装命令: ', err)
        // ElMessage({ message: '安装命令已复制到剪贴板！', type: 'error', showClose: true, duration: 4000 })
      }
    },
    handleMouseMove (event) {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const centerX = rect.width / 4
      const centerY = rect.height / 4
      const tiltX = (centerX - x) / 20
      const tiltY = (centerY - y) / 20
      this.tiltX = tiltX
      this.tiltY = tiltY
    },
    handleMouseLeave () {
      this.tiltX = 0
      this.tiltY = 0
    },
    handleClick (event) {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      // 设置遮罩的初始位置为鼠标点击位置
      this.maskStyle.top = `${y}px`
      this.maskStyle.left = `${x}px`
      this.showMask = true

      // 延迟设置遮罩的扩散效果
      setTimeout(() => {
        this.maskStyle.width = '200%'
        this.maskStyle.height = '200%'
        this.maskStyle.borderRadius = '0'
      }, 10)
    },
    handleMouseUp () {
      // 鼠标松开时，慢慢淡出遮罩
      setTimeout(() => {
        this.maskStyle.opacity = '0'
        // 动画结束后重置遮罩
        setTimeout(() => {
          this.showMask = false
          this.maskStyle.width = '0'
          this.maskStyle.height = '0'
          this.maskStyle.borderRadius = '50%'
          this.maskStyle.opacity = '1'
        }, 1)
      }, 1)
    },
  },
  mounted () {
    // 在组件挂载后启动定时器，每 0.5 秒调用一次 checkTextOverflow 方法
    this.intervalId = setInterval(this.checkTextOverflow, 10)
  },
  beforeDestroy () {
    // 在组件销毁前清除定时器
    clearInterval(this.intervalId)
  },
}
</script>