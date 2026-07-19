import type { ReactNode } from 'react'
import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface TicketCardProps {
  ticketNumber: string
  icon?: ReactNode
  index?: number
  className?: string
  children: ReactNode
}

function TicketCard({ ticketNumber, icon, index = 0, className = '', children }: TicketCardProps) {
  const rotation = useMemo(() => Math.random() * 4 - 2, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      whileHover={{ rotate: 0, boxShadow: '0 12px 28px rgba(0,0,0,0.4)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`relative bg-ticket-paper p-6 text-ticket-ink shadow-[0_6px_16px_rgba(0,0,0,0.25)] ${className}`}
    >
      <span className="absolute top-2 right-3 font-mono text-[10px] uppercase tracking-wide text-ticket-ink/50">
        Ticket N°{ticketNumber}
      </span>
      {icon && <div className="mb-3 text-signal-orange">{icon}</div>}
      <div className="font-body text-sm leading-relaxed">{children}</div>
    </motion.div>
  )
}

export default TicketCard
