import { useEffect, useRef } from 'react'

/**
 * Fond global aux couleurs d'Axya : dégradé bleu nuit, étoiles qui scintillent
 * et halo lumineux qui suit la souris. Gère aussi le reflet des cartes .glass.
 */
function Backdrop() {
  const spotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    let x = -999
    let y = -999
    let raf = 0

    function onMove(e: MouseEvent) {
      x = e.clientX
      y = e.clientY
      const card = (e.target as HTMLElement | null)?.closest<HTMLElement>('.glass')
      if (card) {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${((x - r.left) / r.width) * 100}%`)
        card.style.setProperty('--my', `${((y - r.top) / r.height) * 100}%`)
      }
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0
          if (spotRef.current) spotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
        })
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div aria-hidden="true">
      <div
        className="pointer-events-none fixed inset-0 -z-20"
        style={{
          background:
            'radial-gradient(60% 50% at 70% 10%, rgba(59,91,253,.22), transparent 70%),' +
            'radial-gradient(50% 40% at 0% 40%, rgba(53,198,244,.12), transparent 70%),' +
            'radial-gradient(60% 50% at 100% 90%, rgba(123,63,242,.12), transparent 70%),' +
            'linear-gradient(180deg, #070b30 0%, #060a2a 60%, #050824 100%)',
        }}
      />
      <div className="stars" />
      <div
        ref={spotRef}
        className="pointer-events-none fixed top-0 left-0 -z-10 -mt-[280px] -ml-[280px] h-[560px] w-[560px] rounded-full"
        style={{
          background: 'radial-gradient(closest-side, rgba(91,123,255,.16), transparent)',
          transform: 'translate3d(-999px,-999px,0)',
        }}
      />
    </div>
  )
}

export default Backdrop
