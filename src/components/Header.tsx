import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const links = [
  { to: '/#probleme', label: 'Le problème' },
  { to: '/#fonctionnement', label: 'Fonctionnement' },
  { to: '/#tarifs', label: 'Offres' },
  { to: '/#demo', label: 'Démo' },
  { to: '/#faq', label: 'FAQ' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open ? 'bg-white/80 shadow-[0_1px_0_var(--color-stroke)] backdrop-blur-xl' : ''
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 transition-[height] duration-500 md:px-8 ${
          scrolled ? 'h-[72px]' : 'h-[88px]'
        }`}
      >
        <Link to="/" aria-label="Hakily, accueil" className="shrink-0">
          <img src="/logo-hakily-light.png" alt="Hakily" width={1172} height={325} className="h-10 w-auto md:h-12" />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="rounded-full px-4 py-2.5 text-[16px] font-medium text-ink/85 transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to="/#booking"
          className="grad-border group hidden h-[52px] items-center gap-3 rounded-full px-6 text-[16px] font-semibold transition-shadow hover:shadow-[0_0_0_4px_rgba(34,217,198,.12),0_10px_30px_-10px_rgba(34,217,198,.6)] sm:inline-flex"
          style={{ ['--gb-bg' as string]: '#ffffff' }}
        >
          Appel découverte
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <button
          type="button"
          className="relative h-12 w-12 rounded-2xl border border-stroke-2 lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`absolute left-3.5 right-3.5 top-[17px] h-0.5 rounded bg-ink transition-transform duration-300 ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`absolute left-3.5 right-3.5 top-[23px] h-0.5 rounded bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`absolute left-3.5 right-3.5 top-[29px] h-0.5 rounded bg-ink transition-transform duration-300 ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mx-4 mb-4 overflow-hidden rounded-3xl border border-stroke-2 bg-white/95 p-3 transition-all duration-300 lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible absolute inset-x-0 -translate-y-2 opacity-0'
        }`}
      >
        <ul className="flex flex-col">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3.5 text-lg font-medium hover:bg-ink/5">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Link
              to="/#booking"
              onClick={() => setOpen(false)}
              className="block rounded-2xl bg-gradient-to-r from-blue via-blue-2 to-cyan px-4 py-3.5 text-center text-lg font-semibold text-white"
            >
              Réserver mon appel découverte
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
