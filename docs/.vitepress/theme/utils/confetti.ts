let confettiPromise: Promise<any> | null = null

export const useConfetti = () => {
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