import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="border-t border-blueprint-line/30 px-6 py-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="font-mono text-[11px] tracking-wide text-ticket-paper/55">
          Hakily · Informations à compléter avant publication
        </p>
        <nav aria-label="Informations du site" className="flex flex-wrap justify-center gap-x-5 gap-y-3 font-mono text-[11px] text-ticket-paper/75 sm:justify-end">
          <Link className="underline underline-offset-4" to="/#booking">Contact / rendez-vous</Link>
          <Link className="underline underline-offset-4" to="/mentions-legales">Mentions légales</Link>
          <Link className="underline underline-offset-4" to="/confidentialite">Confidentialité</Link>
          <Link className="underline underline-offset-4" to="/conditions">Conditions et contrat</Link>
        </nav>
      </div>
    </footer>
  )
}

export default SiteFooter
