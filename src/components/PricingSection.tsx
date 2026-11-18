import { Bot, Check, Phone, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section, { SectionHead } from './Section'

const offers = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: 'Assistant téléphonique IA',
    description: 'L’offre prioritaire pour répondre aux appels entrants quand tu ne peux pas décrocher.',
    featured: true,
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: 'Automatisation métier',
    description: 'Un automatisme conçu selon le processus et les outils à connecter.',
    featured: false,
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'Agent IA sur mesure',
    description: 'Un agent adapté à un besoin métier défini ensemble.',
    featured: false,
  },
]

function PricingSection() {
  return (
    <Section id="tarifs" contentClassName="max-w-6xl">
      <SectionHead
        kicker={
          <>
            <b>OFFRES</b> SUR MESURE
          </>
        }
        title={
          <>
            L’assistant téléphonique <span className="grad-text">en priorité</span>
          </>
        }
        intro="On part de ton activité et de tes outils. L’assistant téléphonique IA est l’offre prioritaire ; les automatisations métier et les agents IA peuvent compléter la solution selon le besoin. Ce sont des modules d’une prestation personnalisée, pas trois abonnements prédéfinis."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {offers.map((offer, i) => (
          <motion.article
            key={offer.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
            className={`group relative flex flex-col overflow-hidden rounded-[26px] p-8 ${
              offer.featured ? 'grad-border shadow-[0_40px_80px_-40px_rgba(53,198,244,.6)]' : 'glass'
            }`}
            style={offer.featured ? { ['--gb-bg' as string]: '#ffffff' } : undefined}
          >
            {offer.featured && (
              <>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky/30 blur-3xl"
                />
                <span className="absolute top-6 right-6 rounded-full bg-gradient-to-r from-cyan to-blue px-3 py-1 font-mono text-[11px] font-semibold tracking-[0.1em] uppercase">
                  Prioritaire
                </span>
              </>
            )}
            <div className="relative mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue to-cyan text-white shadow-[0_12px_30px_-10px_rgba(53,198,244,.7)] transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-110">
              {offer.icon}
            </div>
            <h3 className="relative text-[24px] leading-tight font-bold">{offer.title}</h3>

            {offer.featured ? (
              <>
                <p className="relative mt-5 font-mono text-[12px] tracking-[0.08em] text-mist uppercase">
                  Mise en service + abonnement mensuel
                </p>
                <p className="relative mt-1 text-[34px] font-bold tracking-tight">Sur devis</p>
                <ul className="relative mt-6 flex flex-col gap-3 border-t border-stroke pt-6 text-[16px]">
                  {['Minutes incluses définies selon ton volume d’appels', 'Au-delà : facturation à la minute', 'Sans durée minimale'].map((li) => (
                    <li key={li} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                      {li}
                    </li>
                  ))}
                </ul>
                <p className="relative mt-5 text-[14px] leading-relaxed text-mist">
                  Tarif établi avec toi au cadrage, selon ton activité et tes volumes.
                </p>
                <p className="relative mt-4 text-[16px] leading-relaxed text-ink/85">{offer.description}</p>
              </>
            ) : (
              <>
                <p className="relative mt-4 text-[16px] leading-relaxed text-ink/85">{offer.description}</p>
                <p className="relative mt-6 border-t border-stroke pt-6 text-[15px] leading-relaxed text-mist">
                  Périmètre et tarif définis ensemble après étude du besoin. Des frais récurrents peuvent s’appliquer si
                  l’hébergement, la supervision ou la maintenance le nécessitent.
                </p>
              </>
            )}

            <Link
              to="/#booking"
              className={`relative mt-auto inline-flex items-center justify-center gap-2 rounded-full pt-0 text-[15px] font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${
                offer.featured ? 'mt-8 h-12 bg-gradient-to-r from-blue via-blue-2 to-cyan text-white shadow-[0_12px_30px_-14px_rgba(51,102,255,.8)]' : 'mt-8 h-12 border border-stroke-2 hover:border-blue/40'
              }`}
            >
              Cadrer mon besoin et mon volume →
            </Link>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

export default PricingSection
