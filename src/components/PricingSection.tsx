import { Bot, Phone, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section from './Section'

const offers = [
  {
    icon: <Phone className="h-5 w-5" />,
    title: 'Assistant téléphonique IA',
    description: 'L’offre prioritaire pour répondre aux appels entrants pendant tes interventions.',
    featured: true,
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: 'Automatisation métier',
    description: 'Un automatisme conçu selon le processus et les outils à connecter.',
    featured: false,
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: 'Agent IA sur mesure',
    description: 'Un agent adapté à un besoin métier défini ensemble.',
    featured: false,
  },
]

function PricingSection() {
  return (
    <Section id="tarifs" contentClassName="max-w-6xl">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-3 font-mono text-xs tracking-wide text-signal-orange uppercase">Une offre, composée selon tes besoins</p>
        <h2 className="font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          L’assistant téléphonique en priorité
        </h2>
        <p className="mt-4 font-body text-sm leading-relaxed text-ticket-paper/75 md:text-base">
          On part de ton activité et de tes outils. L’assistant téléphonique IA est l’offre prioritaire ; les automatisations
          métier et les agents IA peuvent compléter la solution selon le besoin. Ce sont des modules d’une prestation
          personnalisée, pas trois abonnements prédéfinis.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {offers.map((offer) => (
          <article
            key={offer.title}
            className={`flex flex-col border p-6 ${
              offer.featured
                ? 'border-signal-orange bg-ticket-paper text-ticket-ink shadow-[0_8px_24px_rgba(0,0,0,0.25)]'
                : 'border-blueprint-line/40 bg-blueprint-navy text-ticket-paper'
            }`}
          >
            <div className={`mb-4 flex items-center gap-3 ${offer.featured ? 'text-signal-orange' : 'text-hazard-yellow'}`}>
              {offer.icon}
              <h3 className="font-display text-lg font-bold tracking-wide uppercase">{offer.title}</h3>
            </div>

            {offer.featured ? (
              <>
                <p className="font-mono text-xs uppercase text-ticket-ink/60">Mise en service</p>
                <p className="font-display text-4xl font-black">990 € HT</p>
                <p className="mt-4 font-mono text-xs uppercase text-ticket-ink/60">Puis chaque mois</p>
                <p className="font-display text-3xl font-black">249 € HT / mois</p>
                <ul className="mt-5 flex flex-col gap-2 border-t border-ticket-ink/15 pt-5 font-body text-sm">
                  <li>300 minutes incluses par mois</li>
                  <li>Au-delà : 0,30 € HT par minute</li>
                  <li>Sans durée minimale</li>
                </ul>
                <p className="mt-4 font-body text-xs leading-relaxed text-ticket-ink/65">
                  Tarif de lancement à confirmer après validation des coûts techniques réels.
                </p>
              </>
            ) : (
              <>
                <p className="mt-4 font-body text-sm leading-relaxed text-ticket-paper/75">{offer.description}</p>
                <p className="mt-5 border-t border-blueprint-line/40 pt-5 font-body text-sm text-ticket-paper/80">
                  Périmètre et tarif définis ensemble après étude du besoin. Des frais récurrents peuvent s’appliquer si l’hébergement, la supervision ou la maintenance le nécessitent.
                </p>
              </>
            )}

            {offer.featured && <p className="mt-4 font-body text-sm leading-relaxed">{offer.description}</p>}

            <Link
              to="/#booking"
              className={`mt-auto pt-7 font-mono text-xs tracking-wide underline underline-offset-4 ${
                offer.featured ? 'text-ticket-ink' : 'text-ticket-paper'
              }`}
            >
              Cadrer mon besoin et mon volume →
            </Link>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default PricingSection
