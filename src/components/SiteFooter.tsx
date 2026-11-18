import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="border-t border-stroke px-4 pt-14 pb-[max(2.5rem,env(safe-area-inset-bottom))] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <img src="/logo-hakily.png" alt="Hakily" width={1172} height={360} className="h-11 w-auto" loading="lazy" />
          <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-mist">
            Assistant téléphonique IA, automatisations et agents IA pour les TPE &amp; PME.
          </p>
          <a
            href="https://axyagroup.fr"
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-stroke-2 px-4 py-2 text-[14px] text-[#dfe3ff] transition-colors hover:border-white/50"
          >
            Une marque <strong className="font-semibold">Axya Group</strong>
          </a>
        </div>
        <div>
          <h2 className="mb-4 font-mono text-[12px] font-semibold tracking-[0.14em] text-soft uppercase">Hakily</h2>
          <ul className="flex flex-col gap-2.5 text-[16px]">
            <li><Link className="hover:text-cyan" to="/#fonctionnement">Fonctionnement</Link></li>
            <li><Link className="hover:text-cyan" to="/offer">Offres et tarifs</Link></li>
            <li><Link className="hover:text-cyan" to="/#demo">Démo vocale</Link></li>
            <li><Link className="hover:text-cyan" to="/#booking">Contact / rendez-vous</Link></li>
          </ul>
        </div>
        <nav aria-label="Informations du site">
          <h2 className="mb-4 font-mono text-[12px] font-semibold tracking-[0.14em] text-soft uppercase">Informations</h2>
          <ul className="flex flex-col gap-2.5 text-[16px]">
            <li><Link className="hover:text-cyan" to="/mentions-legales">Mentions légales</Link></li>
            <li><Link className="hover:text-cyan" to="/confidentialite">Confidentialité</Link></li>
            <li><Link className="hover:text-cyan" to="/conditions">Conditions et contrat</Link></li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-4 border-t border-stroke pt-6 text-[14px] text-soft">
        <span>© {new Date().getFullYear()} Hakily · Axya Group</span>
        <span>Informations légales à compléter avant publication</span>
      </div>
    </footer>
  )
}

export default SiteFooter
