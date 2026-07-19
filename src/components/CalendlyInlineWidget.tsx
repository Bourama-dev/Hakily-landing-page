import { useEffect, useRef } from 'react'

interface CalendlyInlineWidgetProps {
  url: string
  className?: string
}

const CALENDLY_SCRIPT_SELECTOR = 'script[src*="assets.calendly.com/assets/external/widget.js"]'

function CalendlyInlineWidget({ url, className = '' }: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let cancelled = false

    function init() {
      if (cancelled || !container || !window.Calendly) return
      container.innerHTML = ''
      window.Calendly.initInlineWidget({ url, parentElement: container })
    }

    if (window.Calendly) {
      init()
      return
    }

    const script = document.querySelector<HTMLScriptElement>(CALENDLY_SCRIPT_SELECTOR)
    script?.addEventListener('load', init)

    return () => {
      cancelled = true
      script?.removeEventListener('load', init)
    }
  }, [url])

  return <div ref={containerRef} className={className} style={{ minWidth: '320px', height: '700px' }} />
}

export default CalendlyInlineWidget
