import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function usePixelPageView() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'PageView')
    }
  }, [location])
}

export default usePixelPageView
