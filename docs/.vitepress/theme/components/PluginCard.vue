<template>
  <div
    class="flex flex-col justify-between h-full bg-white dark:bg-opacity-5 rounded-lg shadow-xl transition-shadow duration-300 px-6 pt-6 pb-4"
    @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" :style="cardStyle">
    <div>
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-900 dark:text-white">{{ plugin.name }}</div>
        <button @click="$emit('show-details', plugin)"
          class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <div class="relative overflow-visible">
            <span
              class="relative icon-[icon-park-twotone--info] w-6 h-6 bg-[#9bd298] hover:bg-yellow-200 hover:scale-150 transform duration-500 ease-[cubic-bezier(0.00,0.00,0.00,1.00)]"></span>
          </div>
        </button>
      </div>
      <div class=" text-gray-600 mb-7 mt-4 dark:text-gray-300 line-clamp-2 min-h-[48.1px]">{{ plugin.description }}
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex space-x-2">
        <template v-for="(repo) in plugin.repo" :key="repo.url">
          <a :href="repo.url" target="_blank">
            <span :class="getIconClass(repo.type)" class="w-6 h-6"></span>
          </a>
        </template>
      </div>
      <div class="flex space-x-2">
        <template v-for="(author, index) in plugin.author" :key="author.name">
          <a :href="author.home" target="_blank" class="text-[var(--vp-c-brand-1)] hover:text-[var(--vp-c-brand-2)]">
            {{ author.name }}
          </a>
          <span v-if="index !== plugin.author.length - 1" class="text-gray-600 dark:text-gray-300">, </span>
        </template>
      </div>
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
      base64Image: ''
    }
  },
  computed: {
    cardStyle () {
      return {
        transform: `perspective(1000px) rotateX(${this.tiltY}deg) rotateY(${this.tiltX}deg)`,
        transition: 'transform 0.05s ease',
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
    },
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
  },
}
</script>

<style>
.bg-custom {
  --svg: url('data:image/png;base64,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');
}
</style>