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
  const [bookingVisible, setBookingVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const booking = document.getElementById('booking')
    const observer = booking
      ? new IntersectionObserver(([entry]) => setBookingVisible(entry.isIntersecting), { threshold: 0.05 })
      : null
    if (booking && observer) observer.observe(booking)

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer?.disconnect()
    }
  }, [])

  return (
    <div className="md:hidden">
      <AnimatePresence>
        {visible && !bookingVisible && (
          <motion.button
            type="button"
            onClick={scrollToBooking}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
            className="fixed inset-x-3 z-50 w-[calc(100%-1.5rem)] bg-signal-orange px-4 py-3 font-mono text-xs uppercase tracking-wide text-ticket-paper shadow-[0_6px_16px_rgba(0,0,0,0.4)] active:translate-y-0.5 sm:inset-x-auto sm:right-4 sm:w-auto"
            style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
          >
            {label}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default StickyCTA
