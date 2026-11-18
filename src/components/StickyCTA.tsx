import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            className="fixed inset-x-3 z-50 flex items-center justify-between gap-3 rounded-full bg-white py-2 pr-2 pl-6 text-[15px] font-semibold text-ink shadow-[0_14px_40px_-10px_rgba(53,198,244,.7)]"
            style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
          >
            {label}
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-blue to-cyan text-white">
              <ArrowRight className="h-5 w-5" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default StickyCTA
