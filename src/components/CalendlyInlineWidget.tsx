import { useEffect, useRef, useState } from 'react'

interface CalendlyInlineWidgetProps {
  url: string
  className?: string
}

const CALENDLY_SCRIPT_SELECTOR = 'script[src*="assets.calendly.com/assets/external/widget.js"]'
const CALENDLY_SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js'

function CalendlyInlineWidget({ url, className = '' }: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'unavailable'>('loading')

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let cancelled = false
    let timeoutId = 0
    let observer: MutationObserver | undefined

    function init() {
      if (cancelled || !container || !window.Calendly) return
      container.innerHTML = ''
      setStatus('loading')
      observer = new MutationObserver(() => {
        if (container.querySelector('iframe')) {
          setStatus('ready')
          observer?.disconnect()
        }
      })
      observer.observe(container, { childList: true, subtree: true })
      try {
        window.Calendly.initInlineWidget({ url, parentElement: container })
      } catch {
        observer.disconnect()
        setStatus('unavailable')
      }
    }

    function onScriptError() {
      if (!cancelled) setStatus('unavailable')
    }

    if (window.Calendly) {
      init()
    } else {
      let script = document.querySelector<HTMLScriptElement>(CALENDLY_SCRIPT_SELECTOR)
      let shouldAppend = false
      if (!script) {
        script = document.createElement('script')
        script.src = CALENDLY_SCRIPT_URL
        script.async = true
        shouldAppend = true
      }
      script.addEventListener('load', init)
      script.addEventListener('error', onScriptError)
      if (shouldAppend) document.body.appendChild(script)
    }

    timeoutId = window.setTimeout(() => {
      if (!cancelled && !container.querySelector('iframe')) setStatus('unavailable')
    }, 12000)

    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
      observer?.disconnect()
      const script = document.querySelector<HTMLScriptElement>(CALENDLY_SCRIPT_SELECTOR)
      script?.removeEventListener('load', init)
      script?.removeEventListener('error', onScriptError)
    }
  }, [url])

  return (
    <div>
      <div
        ref={containerRef}
        className={className}
        style={{ width: '100%', minWidth: 0, minHeight: status === 'unavailable' ? 0 : '320px', height: status === 'unavailable' ? 0 : '700px' }}
        aria-busy={status === 'loading'}
      />
      {status === 'loading' && (
        <p role="status" className="mt-3 text-center font-mono text-xs text-ticket-paper/60">
          Chargement du calendrier…
        </p>
      )}
      {status === 'unavailable' && (
        <div role="status" className="mt-4 border border-blueprint-line/40 bg-blueprint-navy p-4 text-center">
          <p className="font-body text-sm text-ticket-paper/80">Le calendrier ne s’affiche pas pour le moment.</p>
          <a
            className="mt-3 inline-block font-mono text-xs tracking-wide text-ticket-paper underline underline-offset-4"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            Ouvrir Calendly dans un nouvel onglet →
          </a>
        </div>
      )}
    </div>
  )
}

export default CalendlyInlineWidget
