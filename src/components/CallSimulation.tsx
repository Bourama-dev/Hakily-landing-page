import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { MessageSquareText, PhoneCall } from 'lucide-react'

const lines = [
  { who: 'client', text: 'Bonjour, j’ai une fuite sous l’évier, vous pouvez passer ?' },
  { who: 'hakily', text: 'Bien sûr. L’eau coule-t-elle encore en ce moment ?' },
  { who: 'client', text: 'Un peu, j’ai coupé l’arrivée d’eau.' },
  { who: 'hakily', text: 'Parfait. Je note votre adresse et je transmets tout de suite.' },
] as const

/** Exemple d'appel animé : les messages apparaissent un à un, puis le SMS récapitulatif. */
function CallSimulation() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: '-120px' })
  const reduce = useReducedMotion()
  const total = lines.length + 1
  const [step, setStep] = useState(reduce ? total : 0)

  useEffect(() => {
    if (reduce || !inView) return
    const id = window.setTimeout(() => setStep((s) => (s >= total ? 0 : s + 1)), step >= total ? 4200 : step === 0 ? 500 : 1500)
    return () => window.clearTimeout(id)
  }, [step, inView, reduce, total])

  return (
    <div ref={ref} className="glass flex h-full flex-col p-6 md:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue to-cyan">
            <PhoneCall className="h-5 w-5" />
            <span className="absolute inset-0 rounded-xl border-2 border-cyan" style={{ animation: 'ripple 1.8s ease-out infinite' }} />
          </span>
          <span className="leading-tight">
            <strong className="block text-[16px]">Appel en cours</strong>
            <span className="block text-[13px] text-mist">Assistant Hakily · exemple</span>
          </span>
        </div>
        <span className="flex items-center gap-2 rounded-full bg-cyan/15 px-3 py-1 font-mono text-[11px] tracking-[0.1em] text-cyan uppercase">
          <span className="h-2 w-2 rounded-full bg-cyan" style={{ animation: 'twinkle 1s ease-in-out infinite alternate' }} />
          En direct
        </span>
      </div>

      <div className="mt-6 flex min-h-[300px] flex-1 flex-col gap-3">
        <AnimatePresence initial={false}>
          {lines.slice(0, Math.min(step, lines.length)).map((l, i) => (
            <motion.div
              key={`${i}-${l.who}`}
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-snug ${
                l.who === 'client'
                  ? 'self-start rounded-bl-md bg-white/10 text-[#e6e9ff]'
                  : 'self-end rounded-br-md bg-gradient-to-r from-blue to-[#2f8fe6] text-white'
              }`}
            >
              <span className="mb-0.5 block font-mono text-[10px] tracking-[0.12em] uppercase opacity-70">
                {l.who === 'client' ? 'Client' : 'Hakily'}
              </span>
              {l.text}
            </motion.div>
          ))}
          {step >= total && (
            <motion.div
              key="sms"
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="mt-auto rounded-2xl border border-cyan/40 bg-[rgba(34,217,198,.08)] p-4"
            >
              <span className="flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] text-cyan uppercase">
                <MessageSquareText className="h-4 w-4" /> SMS envoyé au gérant
              </span>
              <p className="mt-2 text-[15px] leading-relaxed text-[#e6e9ff]">
                Nouvelle demande · Fuite sous évier · Arrivée d’eau coupée · Adresse et téléphone notés · À rappeler
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        {step > 0 && step < total && (
          <span className="flex gap-1.5 self-end px-2 py-1" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-mist" style={{ animation: `twinkle .6s ease-in-out ${i * 0.2}s infinite alternate` }} />
            ))}
          </span>
        )}
      </div>
    </div>
  )
}

export default CallSimulation
