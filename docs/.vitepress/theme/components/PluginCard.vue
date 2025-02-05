<template>
  <div
    class="flex flex-col justify-between h-full bg-white dark:bg-opacity-5 rounded-lg shadow-xl transition-shadow duration-300 px-6 pt-6 pb-4 relative overflow-hidden select-none"
    @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" @mousedown="handleClick" :style="cardStyle">
    <!-- 遮罩层 -->
    <transition name="mask">
      <div v-if="showMask" class="mask" :style="maskStyle"></div>
    </transition>

    <div>
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ plugin.name }}</div>
      </div>
      <div class="text-gray-600 mb-7 mt-4 dark:text-gray-300 line-clamp-2 min-h-[48.1px] select-none">{{
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
        class="border border-solid relative overflow-visible w-16 h-10 bg-green-700/15 text-[#69bb66] hover:bg-yellow-300/20 hover:text-[#e7d84a] hover:scale-125 transform duration-500 ease-[cubic-bezier(0.00,0.00,0.00,1.00)] rounded-xl hover:filter hover:drop-shadow-[0_0_10px_#E2E51C] hover:text-shadow-[0_0_10px_#E2E51C]">
        详情
      </button>
    </div>
  </div>
</template>

<script>
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
      }
    }
  },
  computed: {
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

      // 动画结束后重置遮罩
      setTimeout(() => {
        this.showMask = false
        this.maskStyle.width = '0'
        this.maskStyle.height = '0'
        this.maskStyle.borderRadius = '50%'
      }, 500)
    }
  }
}
</script>

<style scoped>
.mask {
  z-index: 1;
  /* 确保遮罩层在卡片内容之上 */
}

/* 禁止文本选中 */
.select-none {
  user-select: none;
}

.link1:hover {
  border: 1px solid;
}
</style>