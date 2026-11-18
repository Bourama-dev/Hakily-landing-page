import { useEffect, useRef } from 'react'

interface ParticleWaveProps {
  className?: string
}

/** Vague de particules animée (canvas), signature visuelle d'Axya Group. */
function ParticleWave({ className = '' }: ParticleWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0
    let H = 0
    let t = 0
    let raf = 0
    let visible = true

    function size() {
      if (!canvas || !ctx) return
      const r = canvas.getBoundingClientRect()
      W = r.width
      H = r.height
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, W, H)
      ctx.globalCompositeOperation = 'lighter'
      const rows = 28
      const cols = Math.max(70, Math.round(W / 9))
      for (let r = 0; r < rows; r++) {
        const rp = r / (rows - 1)
        for (let c = 0; c <= cols; c++) {
          const xp = c / cols
          const edge = Math.abs(xp - 0.5) * 2
          const y =
            H * (0.34 + rp * 0.78) -
            Math.pow(edge, 2.4) * H * 0.36 -
            Math.sin(xp * 6.2 + t + rp * 1.7) * (10 + rp * 22) -
            Math.cos(xp * 2.6 - t * 0.7 + rp * 0.8) * 14 +
            (1 - edge) * H * 0.08
          if (y > H + 2 || y < -2) continue
          const hue = 185 + xp * 50 + Math.sin(t + rp) * 6
          const a = Math.min((0.28 + rp * 0.72) * (0.55 + edge * 0.7), 0.95)
          ctx.fillStyle = `hsla(${hue.toFixed(0)},95%,${(60 + rp * 8).toFixed(0)}%,${a.toFixed(3)})`
          const s = 1.1 + rp * 1.9
          ctx.fillRect(xp * W, y, s, s)
        }
      }
    }

    function loop() {
      if (visible) {
        t += 0.012
        draw()
      }
      raf = requestAnimationFrame(loop)
    }

    size()
    window.addEventListener('resize', size)
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
    })
    io.observe(canvas)
    if (reduce) draw()
    else raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', size)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none block h-full w-full ${className}`}
      style={{ WebkitMaskImage: 'linear-gradient(#000 70%, transparent)', maskImage: 'linear-gradient(#000 70%, transparent)' }}
    />
  )
}

export default ParticleWave
