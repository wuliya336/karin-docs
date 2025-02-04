import { addDynamicIconSelectors } from '@iconify/tailwind'
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./docs/.vitepress/theme/components/*.{vue,js,ts,jsx,tsx}",
    "./**/*.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors()
  ],
}