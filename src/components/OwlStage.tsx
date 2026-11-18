import { useEffect, type ReactNode } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from 'framer-motion'
import { BellRing, MessageSquareText, PhoneIncoming } from 'lucide-react'

/** Couche qui se déplace avec la souris (effet de profondeur). */
function Layer({ x, y, depth, className = '', style, children }: {
  x: MotionValue<number>
  y: MotionValue<number>
  depth: number
  className?: string
  style?: React.CSSProperties
  children: ReactNode
}) {
  const tx = useTransform(x, (v) => -v * depth)
  const ty = useTransform(y, (v) => -v * depth * 0.6)
  return (
    <motion.div className={className} style={{ ...style, x: tx, y: ty }}>
      {children}
    </motion.div>
  )
}

function FloatCard({ icon, title, sub, tone, delay }: { icon: ReactNode; title: string; sub: string; tone: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className="flex items-center gap-3 rounded-[18px] border border-stroke-2 bg-white/90 py-3 pr-5 pl-3 shadow-[0_18px_40px_-18px_rgba(10,20,48,.35)] backdrop-blur-xl"
      style={{ animation: `bob 7s ease-in-out ${-delay * 3}s infinite` }}
    >
      <span className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white ${tone}`}>{icon}</span>
      <span className="leading-tight">
        <strong className="block text-[15px] font-semibold">{title}</strong>
        <span className="block text-[13px] text-mist">{sub}</span>
      </span>
    </motion.div>
  )
}

function OwlStage() {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 60, damping: 18 })
  const y = useSpring(my, { stiffness: 60, damping: 18 })

  useEffect(() => {
    if (reduce || !window.matchMedia('(pointer: fine)').matches) return
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 2)
      my.set((e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my, reduce])

  return (
    <div className="relative mx-auto aspect-[1/1.02] w-full max-w-[600px]">
      {/* Halo + anneau rotatif */}
      <Layer x={x} y={y} depth={8} className="absolute inset-[6%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative h-full w-full rounded-full"
        >
          <div
            className="absolute inset-0 rounded-full border-[1.5px] border-[rgba(120,150,255,.42)]"
            style={{
              background: 'radial-gradient(closest-side, rgba(53,198,244,.25), rgba(59,91,253,.14) 60%, transparent)',
              boxShadow: '0 0 60px rgba(91,123,255,.3), inset 0 0 60px rgba(53,198,244,.18)',
            }}
          />
          <div
            className="absolute -inset-[2px] rounded-full p-[2px]"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0 15%, #35c6f4 30%, #5b7bff 45%, transparent 60% 100%)',
              WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              animation: 'spin 9s linear infinite',
              filter: 'drop-shadow(0 0 10px rgba(110,180,255,.8))',
            }}
          />
          {/* Ondes d'appel */}
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute inset-[18%] rounded-full border border-cyan/50"
              style={{ animation: `ripple 3.6s ease-out ${i * 1.2}s infinite` }}
            />
          ))}
        </motion.div>
      </Layer>

      {/* Sol lumineux */}
      <div className="absolute bottom-[4%] left-1/2 h-[13%] w-[78%] -translate-x-1/2 rounded-full" style={{ background: 'radial-gradient(closest-side, rgba(91,123,255,.5), rgba(53,198,244,.15) 60%, transparent)' }}>
        <span
          className="absolute inset-x-[6%] inset-y-[20%] rounded-full border-2 border-[rgba(160,210,255,.85)]"
          style={{ boxShadow: '0 0 24px 2px rgba(91,123,255,.9), inset 0 0 24px rgba(53,198,244,.6)', animation: 'pulse-glow 3.5s ease-in-out infinite' }}
        />
      </div>

      {/* La chouette Hakily */}
      <Layer x={x} y={y} depth={14} className="absolute inset-x-[8%] bottom-[9%]">
        <motion.img
          src="/hakily-owl.webp"
          width={1000}
          height={915}
          alt="La mascotte Hakily, une chouette souriante avec des lunettes d'aviateur et une tablette"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="w-full drop-shadow-[0_28px_30px_rgba(10,20,48,.22)]"
          style={{ animation: 'bob 6s ease-in-out infinite' }}
        />
      </Layer>

      {/* Cartes flottantes */}
      <Layer x={x} y={y} depth={30} className="absolute top-[4%] -left-[4%] z-10 sm:left-[-8%]">
        <FloatCard
          icon={
            <>
              <PhoneIncoming className="h-5 w-5" />
              <span className="absolute inset-0 rounded-xl border-2 border-cyan" style={{ animation: 'ripple 1.6s ease-out infinite' }} />
            </>
          }
          title="Appel entrant"
          sub="Hakily décroche pour toi"
          tone="bg-gradient-to-br from-blue to-cyan"
          delay={0.8}
        />
      </Layer>
      <Layer x={x} y={y} depth={36} className="absolute top-[38%] -right-[2%] z-10 sm:right-[-10%]">
        <FloatCard
          icon={<MessageSquareText className="h-5 w-5" />}
          title="SMS récapitulatif"
          sub="Besoin, urgence, coordonnées"
          tone="bg-gradient-to-br from-blue-2 to-cyan"
          delay={1}
        />
      </Layer>
      <Layer x={x} y={y} depth={26} className="absolute bottom-[14%] -left-[2%] z-10 sm:left-[-6%]">
        <FloatCard
          icon={<BellRing className="h-5 w-5" />}
          title="Urgence transférée"
          sub="Selon tes règles"
          tone="bg-gradient-to-br from-navy to-blue"
          delay={1.2}
        />
      </Layer>
    </div>
  )
}

export default OwlStage
