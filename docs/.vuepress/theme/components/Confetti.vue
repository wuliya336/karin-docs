<script setup lang="ts">
import { onMounted } from 'vue'

let confettiPromise: Promise<any> | null = null

const useConfetti = () => {
  const fire = async (...args: any[]) => {
    if (typeof window === 'undefined') return

    if (!confettiPromise) {
      confettiPromise = import('canvas-confetti')
    }

    const confetti = await confettiPromise
    return confetti.default(...args)
  }

  return {
    fire
  }
}

const { fire } = useConfetti()

/* 纸屑 */
onMounted(() => {
  setInterval
})


const duration = 5 * 1000
const animationEnd = Date.now() + duration
const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

function randomInRange (min: number, max: number) {
  return Math.random() * (max - min) + min
}

const interval: ReturnType<typeof setInterval> = setInterval(function () {
  const timeLeft = animationEnd - Date.now()

  if (timeLeft <= 0) {
    return clearInterval(interval)
  }

  const particleCount = 50 * (timeLeft / duration)
  // since particles fall down, start a bit higher than random
  fire({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
  fire({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
}, 250);

</script>