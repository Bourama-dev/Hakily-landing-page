import { motion } from 'framer-motion'
import { CheckCircle2, Clock, PhoneOff, Voicemail, Wrench, XCircle } from 'lucide-react'
import Header from '../components/Header'
import Section from '../components/Section'
import DimensionDivider from '../components/DimensionDivider'
import RingPing from '../components/RingPing'
import TicketCard from '../components/TicketCard'
import FAQ from '../components/FAQ'
import StickyCTA from '../components/StickyCTA'
import CalendlyInlineWidget from '../components/CalendlyInlineWidget'
import { LiveAgentCall } from '../components/LiveAgentCall'
import PricingSection from '../components/PricingSection'

function scrollToBooking() {
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
}

const problems = [
  {
    icon: <Wrench className="h-6 w-6" />,
    text: 'Le téléphone sonne pendant que tu es en intervention chez un client',
  },
  {
    icon: <PhoneOff className="h-6 w-6" />,
    text: 'Tu ne peux pas toujours interrompre une intervention pour répondre',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    text: 'Un appel manqué ne précise ni le besoin du client ni son niveau d’urgence',
  },
  {
    icon: <Voicemail className="h-6 w-6" />,
    text: 'Le répondeur ne qualifie pas la demande avant que tu rappelles',
  },
]

const mechanism = [
  {
    title: 'Disponibilité',
    description: "L'assistant répond aux appels entrants selon les règles définies pour ton activité.",
  },
  {
    title: 'Qualification',
    description: "Il dialogue, comprend la demande, trie l'urgence et collecte les infos utiles.",
  },
  {
    title: 'Transmission',
    description: "Il t'envoie un SMS récapitulatif après chaque appel et te transfère les urgences.",
  },
  {
    title: 'Accompagnement',
    description: 'Le périmètre et le calendrier sont cadrés avec toi avant la mise en service.',
  },
]

const doesList = [
  'Répond selon les règles définies pour ton activité',
  "Qualifie l'intervention",
  'Répond aux questions courantes',
  'Envoie un SMS récapitulatif',
  'Transfère les urgences',
]

const doesNotList = [
  'Pas de démarchage sortant',
  'Pas un répondeur passif',
  'Ne chiffre pas de devis à ta place',
  'Pas un CRM complet',
  'Pas de script figé imposé',
]

function VSL() {
  return (
    <>
      <Header />

      {/* HERO */}
      <Section className="pt-8 pb-12 md:pt-12" contentClassName="max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <RingPing />

          <p className="font-mono text-xs tracking-wide text-signal-orange uppercase">
            Pour les plombiers, chauffagistes et artisans du BTP
          </p>

          <h1 className="font-display text-4xl leading-[0.95] font-black text-ticket-paper uppercase md:text-5xl">
            Ne manque plus les appels de tes clients pendant tes interventions,
            <br />
            même quand tu ne peux pas décrocher
          </h1>

          <p className="max-w-xl font-body text-base text-ticket-paper/80 md:text-lg">
            Hakily aide les petites entreprises du BTP à mieux gérer leurs demandes clients. L’assistant téléphonique IA,
            notre offre prioritaire, répond et qualifie les appels selon les règles de ton activité.
          </p>

          <div className="mt-2 flex w-full flex-col items-center">
            <button
              type="button"
              onClick={scrollToBooking}
              className="bg-signal-orange px-8 py-4 font-display text-lg tracking-wide text-ticket-paper uppercase shadow-[0_4px_0_rgba(0,0,0,0.35)] transition-transform active:translate-y-1 active:shadow-none"
            >
              Réserver mon appel découverte →
            </button>
            <p className="mt-3 font-mono text-xs tracking-wide text-ticket-paper/60 uppercase">
              Gratuit · Sans engagement · 30 min
            </p>
          </div>
        </div>
      </Section>

      <DimensionDivider variant="minor" />

      {/* PROOF BAR */}
      <div className="relative border-y border-blueprint-line/20 py-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-6 font-mono text-xs tracking-wide text-ticket-paper/70 uppercase sm:flex-row sm:justify-between">
          <span>✓ Répond selon les règles de ton activité</span>
          <span>✓ Assistant : 300 minutes incluses / mois</span>
          <span>✓ Assistant sans durée minimale</span>
          <span>✓ 0,30 € HT / min au-delà</span>
        </div>
      </div>

      <DimensionDivider />

      <Section contentClassName="max-w-3xl">
        <div className="border-l-4 border-signal-orange bg-blueprint-navy p-6 md:p-8">
          <p className="mb-3 font-mono text-xs tracking-wide text-signal-orange uppercase">Une approche pragmatique</p>
          <h2 className="font-display text-2xl font-black text-ticket-paper uppercase md:text-3xl">
            Des outils utiles, conçus autour de ton activité
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-ticket-paper/75 md:text-base">
            Hakily automatise les tâches répétitives, relie les outils déjà utilisés et améliore le suivi des demandes.
            L’intelligence artificielle intervient quand elle répond à un besoin concret, avec un périmètre défini ensemble.
          </p>
        </div>
      </Section>

      <DimensionDivider variant="minor" />

      {/* PROBLEM */}
      <Section contentClassName="max-w-4xl">
        <h2 className="mb-10 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Tu reconnais ces galères ?
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {problems.map((problem, i) => (
            <TicketCard key={problem.text} ticketNumber={String(i + 1).padStart(2, '0')} icon={problem.icon} index={i}>
              {problem.text}
            </TicketCard>
          ))}
        </div>
      </Section>

      <DimensionDivider variant="minor" />

      {/* MECHANISM */}
      <Section>
        <h2 className="mb-12 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Voici comment Hakily règle ça
        </h2>
        <div className="relative pl-10">
          <svg className="absolute top-0 left-4 h-full w-px overflow-visible" preserveAspectRatio="none" aria-hidden="true">
            <motion.line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              className="stroke-blueprint-line"
              strokeWidth={1}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </svg>
          <ol className="flex flex-col gap-10">
            {mechanism.map((step, i) => (
              <motion.li
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="absolute -left-10 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-hazard-yellow font-mono text-xs text-ticket-ink">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl tracking-wide text-ticket-paper uppercase">{step.title}</h3>
                <p className="mt-1 font-body text-sm text-ticket-paper/75">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Section>

      <DimensionDivider />

      <PricingSection />

      <DimensionDivider />

      {/* LIVE PROOF — ELEVENLABS */}
      <Section>
        <h2 className="mb-3 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          La meilleure preuve, c'est de lui parler toi-même
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center font-body text-sm text-ticket-paper/75 md:text-base">
          Aucune étude de cas ne vaut un appel en direct. Simule une demande d'intervention et vois comment l'assistant
          qualifie ta demande, en conditions réelles.
        </p>
        <div className="relative mx-auto max-w-xl rounded-sm border border-blueprint-line/30 bg-ticket-paper/5 p-4 shadow-[0_0_40px_rgba(255,90,31,0.15)]">
          <LiveAgentCall />
        </div>
        <p className="mt-3 text-center font-mono text-xs tracking-wide text-ticket-paper/60 uppercase">
          Conversation vocale en direct avec l'assistant Hakily · Prend 1 minute
        </p>
      </Section>

      <DimensionDivider variant="minor" />

      {/* WHAT HAKILY DOES / DOES NOT */}
      <Section contentClassName="max-w-4xl">
        <h2 className="mb-10 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Ce que Hakily fait. Et ce qu'il n'est pas.
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-ticket-paper p-6 text-ticket-ink shadow-[0_6px_16px_rgba(0,0,0,0.25)]">
            <h3 className="mb-4 font-display text-lg tracking-wide uppercase">Ce que Hakily fait</h3>
            <ul className="flex flex-col gap-3">
              {doesList.map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-signal-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ticket-paper p-6 text-ticket-ink shadow-[0_6px_16px_rgba(0,0,0,0.25)]">
            <h3 className="mb-4 font-display text-lg tracking-wide uppercase">Ce que Hakily ne fait pas</h3>
            <ul className="flex flex-col gap-3">
              {doesNotList.map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-ticket-ink/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <DimensionDivider variant="minor" />

      {/* FAQ */}
      <Section>
        <h2 className="mb-10 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Questions fréquentes
        </h2>
        <FAQ />
      </Section>

      <DimensionDivider />

      {/* BOOKING */}
      <Section id="booking">
        <h2 className="mb-3 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Réserve ton appel découverte
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center font-body text-sm text-ticket-paper/75 md:text-base">
          30 minutes pour voir si Hakily correspond à ton activité, sans engagement.
        </p>
        <CalendlyInlineWidget url="https://calendly.com/bourama-axyagroup/30min" className="mx-auto w-full max-w-3xl" />
        <p className="mt-4 text-center font-mono text-xs tracking-wide text-ticket-paper/60 uppercase">
          30 min · Gratuit · Sans engagement
        </p>
      </Section>

      <StickyCTA />
    </>
  )
}

export default VSL
