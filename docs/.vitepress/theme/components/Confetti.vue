<script setup lang="ts">
import { onMounted } from 'vue'
import { useConfetti } from '../utils/confetti'

const { fire } = useConfetti()

/* 纸屑 */
onMounted(() => {
  fire({
    particleCount: 100,
    spread: 170,
    origin: { y: 0.6 },
  })
})
</script>