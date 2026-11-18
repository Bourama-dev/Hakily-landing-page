import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface TicketCardProps {
  ticketNumber: string
  icon?: ReactNode
  index?: number
  className?: string
  children: ReactNode
}

function TicketCard({ ticketNumber, icon, index = 0, className = '', children }: TicketCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
      className={`glass group p-7 ${className}`}
    >
      <span className="absolute top-5 right-6 font-mono text-[11px] tracking-[0.12em] text-soft uppercase">
        Ticket N°{ticketNumber}
      </span>
      {icon && (
        <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue to-cyan text-white shadow-[0_12px_30px_-10px_rgba(53,198,244,.7)] transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-110">
          {icon}
        </div>
      )}
      <div className="relative text-[18px] leading-relaxed text-[#dfe3ff]">{children}</div>
    </motion.div>
  )
}

export default TicketCard
