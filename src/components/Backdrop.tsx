import { useEffect, useRef } from 'react'

/**
 * Fond global, charte Hakily : blanc bleuté, halos bleu et cyan, et une fine grille
 * « plan de chantier » qui dérive lentement. Halo qui suit la souris et reflet des cartes .glass.
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
            'radial-gradient(55% 45% at 80% 5%, rgba(51,102,255,.13), transparent 70%),' +
            'radial-gradient(45% 40% at 0% 35%, rgba(20,200,230,.12), transparent 70%),' +
            'radial-gradient(50% 45% at 100% 95%, rgba(21,151,240,.10), transparent 70%),' +
            'linear-gradient(180deg, #f3f7ff 0%, #f6f9ff 50%, #f9fbff 100%)',
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(51,102,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(51,102,255,.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, #000 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, #000 30%, transparent 85%)',
          animation: 'grid-pan 8s linear infinite',
        }}
      />
      <div
        ref={spotRef}
        className="pointer-events-none fixed top-0 left-0 -z-10 -mt-[280px] -ml-[280px] h-[560px] w-[560px] rounded-full"
        style={{
          background: 'radial-gradient(closest-side, rgba(51,102,255,.09), transparent)',
          transform: 'translate3d(-999px,-999px,0)',
        }}
      />
    </div>
  )
}

export default Backdrop
