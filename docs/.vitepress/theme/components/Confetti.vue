<script setup lang="ts">
import { onMounted } from 'vue'
import { useConfetti } from '../utils/confetti'

const { fire } = useConfetti()

/* 纸屑 */
onMounted(() => {
  setInterval
})


var duration = 5 * 1000
var animationEnd = Date.now() + duration
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

function randomInRange (min: number, max: number) {
  return Math.random() * (max - min) + min
}

var interval = setInterval(function () {
  var timeLeft = animationEnd - Date.now()

  if (timeLeft <= 0) {
    return clearInterval(interval)
  }

  var particleCount = 50 * (timeLeft / duration)
  // since particles fall down, start a bit higher than random
  fire({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
  fire({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
}, 250);

</script>