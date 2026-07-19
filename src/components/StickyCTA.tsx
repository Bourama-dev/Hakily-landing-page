import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function scrollToBooking() {
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
}

interface StickyCTAProps {
  label?: string
}

function StickyCTA({ label = 'Réserver mon appel découverte' }: StickyCTAProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="md:hidden">
      <AnimatePresence>
        {visible && (
          <motion.button
            type="button"
            onClick={scrollToBooking}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            className="fixed right-4 bottom-4 z-50 bg-signal-orange px-5 py-3 font-mono text-xs uppercase tracking-wide text-ticket-paper shadow-[0_6px_16px_rgba(0,0,0,0.4)] active:translate-y-0.5"
          >
            {label}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default StickyCTA
