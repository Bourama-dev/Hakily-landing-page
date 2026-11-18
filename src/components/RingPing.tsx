import { motion, useReducedMotion } from 'framer-motion'

/** Badge animé « Décroché. Toujours. » : un point qui sonne puis une ligne qui se trace. */
function RingPing() {
  const reduce = useReducedMotion()

  return (
    <div className="inline-flex items-center gap-4" role="img" aria-label="Décroché. Toujours.">
      <span className="relative grid h-4 w-4 place-items-center" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_#22d9c6]" />
        {!reduce &&
          [0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute inset-[-6px] rounded-full border border-dashed border-cyan"
              style={{ animation: `ripple 1.8s ease-out ${i * 0.5}s infinite` }}
            />
          ))}
      </span>
      <motion.span
        aria-hidden="true"
        className="block h-px w-14 origin-left bg-gradient-to-r from-cyan to-blue-2"
        initial={reduce ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut' }}
      />
      <motion.span
        className="font-mono text-[13px] font-semibold tracking-[0.14em] text-[#dfe4ff] uppercase"
        initial={reduce ? false : { opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Décroché. <span className="text-cyan">Toujours.</span>
      </motion.span>
    </div>
  )
}

export default RingPing
