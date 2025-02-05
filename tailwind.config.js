import { addDynamicIconSelectors } from '@iconify/tailwind'
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./docs/.vitepress/theme/components/*.{vue,js,ts,jsx,tsx}",
    "./**/*.vue"
  ],
  extend: {
    scale: {
      120: '1.2', // 添加 scale-120
    },
    transitionTimingFunction: {
      'custom-bezier': 'cubic-bezier(0.00,0.00,0.00,1.00)', // 添加自定义贝塞尔曲线
    },
  },
  plugins: [
    addDynamicIconSelectors()
  ],
}