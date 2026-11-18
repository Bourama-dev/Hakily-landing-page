import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id?: string
  className?: string
  contentClassName?: string
  children: ReactNode
}

function Section({ id, className = '', contentClassName = 'max-w-[720px]', children }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-20 px-4 py-20 md:px-8 md:py-28 ${className}`}>
      <div className={`relative mx-auto ${contentClassName}`}>{children}</div>
    </section>
  )
}

interface SectionHeadProps {
  kicker?: ReactNode
  title: ReactNode
  intro?: ReactNode
  className?: string
}

/** En-tête de section centré, qui apparaît en douceur au scroll. */
export function SectionHead({ kicker, title, intro, className = '' }: SectionHeadProps) {
  return (
    <motion.div
      className={`mx-auto mb-14 max-w-3xl text-center ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {kicker && <span className="kicker mb-6">{kicker}</span>}
      <h2 className="font-display text-[clamp(32px,4.6vw,54px)] leading-[1.06] font-bold tracking-[-0.025em]">{title}</h2>
      {intro && <p className="mt-5 text-[clamp(17px,1.8vw,20px)] leading-relaxed text-mist">{intro}</p>}
    </motion.div>
  )
}

export default Section
