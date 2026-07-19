import { motion, useReducedMotion } from 'framer-motion'

const CIRCLE_COUNT = 3
const CIRCLE_DELAY = 0.35
const CIRCLE_DURATION = 0.9
const LINE_DELAY = CIRCLE_DELAY * (CIRCLE_COUNT - 1) + CIRCLE_DURATION * 0.55
const LINE_DURATION = 0.6
const LABEL_DELAY = LINE_DELAY + LINE_DURATION

const PING_X = 36
const PING_Y = 70
const LINE_END_X = 280
const LABEL_X = 296

function RingPing() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <svg viewBox="0 0 420 140" className="w-full max-w-md" role="img" aria-label="Décroché. Toujours.">
        <circle cx={PING_X} cy={PING_Y} r={6} className="fill-signal-orange" />
        <line
          x1={PING_X + 24}
          y1={PING_Y}
          x2={LINE_END_X}
          y2={PING_Y}
          className="stroke-blueprint-line"
          strokeWidth={1}
        />
        <text
          x={LABEL_X}
          y={PING_Y + 5}
          className="fill-ticket-paper font-mono text-[13px] uppercase tracking-wide"
        >
          Décroché. Toujours.
        </text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 420 140" className="w-full max-w-md overflow-visible" role="img" aria-label="Décroché. Toujours.">
      <circle cx={PING_X} cy={PING_Y} r={6} className="fill-signal-orange" />

      {Array.from({ length: CIRCLE_COUNT }).map((_, i) => (
        <motion.circle
          key={i}
          cx={PING_X}
          cy={PING_Y}
          className="stroke-signal-orange"
          fill="none"
          strokeWidth={1.5}
          strokeDasharray="3 5"
          initial={{ r: 6, opacity: 0.9 }}
          animate={{ r: 46, opacity: 0 }}
          transition={{ duration: CIRCLE_DURATION, delay: i * CIRCLE_DELAY, ease: 'easeOut' }}
        />
      ))}

      <motion.line
        x1={PING_X + 24}
        y1={PING_Y}
        x2={LINE_END_X}
        y2={PING_Y}
        className="stroke-blueprint-line"
        strokeWidth={1}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: LINE_DURATION, delay: LINE_DELAY, ease: 'easeInOut' }}
      />

      <motion.g
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: LABEL_DELAY }}
        style={{ transformOrigin: `${LABEL_X}px ${PING_Y}px` }}
      >
        <text
          x={LABEL_X}
          y={PING_Y + 5}
          className="fill-ticket-paper font-mono text-[13px] uppercase tracking-wide"
        >
          Décroché. Toujours.
        </text>
      </motion.g>
    </svg>
  )
}

export default RingPing
