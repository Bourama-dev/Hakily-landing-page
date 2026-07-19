import { motion } from 'framer-motion'
import { Calendar, Check, Clock, Video } from 'lucide-react'
import Header from '../components/Header'
import Section from '../components/Section'
import DimensionDivider from '../components/DimensionDivider'
import TicketCard from '../components/TicketCard'

const steps = [
  { number: 1, label: 'Regarder la vidéo' },
  { number: 2, label: "Accepter l'invitation" },
  { number: 3, label: "Parler à l'assistant" },
]

const commitments = [
  'Disponible 24h/24 et 7j/7',
  'Déployé sous 7 jours',
  'Garantie 15 jours satisfait ou remboursé',
]

function Confirmation() {
  return (
    <>
      <Header />

      {/* CONFIRMATION HEADER */}
      <Section className="pt-4 pb-10 md:pt-8" contentClassName="max-w-2xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blueprint-line/40 bg-blueprint-navy px-4 py-2 font-mono text-[11px] tracking-wide text-ticket-paper/80 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-orange/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-orange" />
            </span>
            Ne ferme pas cette page : c'est important
          </span>

          <div className="relative flex h-20 w-20 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-signal-orange/25 blur-xl" aria-hidden="true" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-signal-orange">
              <Check className="h-8 w-8 text-ticket-paper" strokeWidth={3} />
            </div>
          </div>

          <h1 className="font-display text-4xl font-black text-ticket-paper uppercase md:text-5xl">
            Ton appel est confirmé 🎯
          </h1>

          <p className="max-w-md font-body text-sm text-ticket-paper/75 md:text-base">
            Tu vas recevoir un email de confirmation. En attendant, complète ces 3 étapes pour arriver préparé à
            l'appel.
          </p>

          {/* Progress bar — dimension line that draws itself */}
          <div className="mt-4 w-full max-w-sm">
            <div className="mb-2 flex items-center justify-between font-mono text-[11px] tracking-wide text-ticket-paper/60 uppercase">
              <span>Ta préparation</span>
              <span>96%</span>
            </div>
            <div className="relative h-px w-full bg-blueprint-line/30">
              <span className="absolute top-1/2 left-0 h-2 w-px -translate-y-1/2 bg-blueprint-line/60" />
              <span className="absolute top-1/2 right-0 h-2 w-px -translate-y-1/2 bg-blueprint-line/60" />
              <motion.div
                className="absolute top-1/2 left-0 h-0.5 -translate-y-1/2 bg-signal-orange"
                initial={{ width: 0 }}
                animate={{ width: '96%' }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
              />
            </div>
            <p className="mt-2 font-mono text-[11px] tracking-wide text-ticket-paper/50 uppercase">
              Encore quelques étapes pour être prêt(e)
            </p>
          </div>
        </div>
      </Section>

      {/* BOOKING DETAILS REMINDER */}
      <div className="px-6">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-3 rounded-sm border border-blueprint-line/30 bg-blueprint-navy px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          {/* TODO: injecter les vraies infos du rendez-vous (date, heure, lien visio) depuis Calendly */}
          <span className="flex items-center gap-2 font-mono text-xs tracking-wide text-ticket-paper/70 uppercase">
            <Calendar className="h-4 w-4 text-signal-orange" />
            Date à confirmer par email
          </span>
          <span className="flex items-center gap-2 font-mono text-xs tracking-wide text-ticket-paper/70 uppercase">
            <Clock className="h-4 w-4 text-signal-orange" />
            30 min
          </span>
          <span className="flex items-center gap-2 font-mono text-xs tracking-wide text-ticket-paper/70 uppercase">
            <Video className="h-4 w-4 text-signal-orange" />
            Lien visio dans l'email
          </span>
        </div>
      </div>

      <DimensionDivider />

      {/* PROGRESS STEPS */}
      <div className="px-6 py-10">
        <div className="mx-auto flex w-full max-w-2xl items-center">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-signal-orange font-mono text-sm text-ticket-paper">
                  {step.number}
                </span>
                <span className="max-w-[7rem] text-center font-mono text-[10px] tracking-wide text-ticket-paper/70 uppercase">
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="mx-2 mb-6 h-px flex-1 border-t border-dashed border-blueprint-line/50" />
              )}
            </div>
          ))}
        </div>
      </div>

      <DimensionDivider />

      {/* STEP 1 — VIDEO */}
      <Section contentClassName="max-w-2xl">
        <p className="mb-3 text-center font-mono text-xs tracking-wide text-signal-orange uppercase">
          Étape 1 : obligatoire
        </p>
        <h2 className="mb-3 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Regarde cette vidéo avant ton appel
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-center font-body text-sm text-ticket-paper/75 md:text-base">
          Cette vidéo explique exactement comment fonctionne l'assistant et ce qu'on va cadrer ensemble. Viens à
          l'appel en l'ayant regardée.
        </p>
        <div className="relative mx-auto w-full max-w-2xl">
          <div className="absolute -inset-2 -z-10 rounded-sm bg-signal-orange/20 blur-2xl" aria-hidden="true" />
          <div className="relative border border-ticket-paper/30 bg-ticket-paper/5 p-2">
            <div className="flex aspect-video w-full items-center justify-center border border-blueprint-line/30 bg-blueprint-navy/60">
              {/* TODO: remplacer par l'embed vidéo réel (Wistia/YouTube) */}
              <p className="font-mono text-xs tracking-wide text-ticket-paper/50 uppercase">Vidéo à venir</p>
            </div>
          </div>
        </div>
      </Section>

      <DimensionDivider />

      {/* STEP 2 — ACCEPT CALENDAR INVITE */}
      <Section contentClassName="max-w-2xl">
        <p className="mb-3 text-center font-mono text-xs tracking-wide text-signal-orange uppercase">
          Étape 2 : obligatoire
        </p>
        <h2 className="mb-3 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Accepte l'invitation pour ne pas oublier l'appel
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-center font-body text-sm text-ticket-paper/75 md:text-base">
          Ouvre l'email de confirmation et clique sur "Oui" pour ajouter le rendez-vous à ton calendrier.
        </p>
        <div className="relative mx-auto w-full max-w-xl border border-ticket-paper/30 bg-ticket-paper/5 p-2">
          <div className="flex aspect-[16/10] w-full items-center justify-center border border-blueprint-line/30 bg-blueprint-navy/60">
            {/* TODO: ajouter la vraie capture d'écran (email Google Calendar, boutons Oui / Peut-être / Non) */}
            <p className="font-mono text-xs tracking-wide text-ticket-paper/50 uppercase">Capture à venir</p>
          </div>
        </div>
      </Section>

      <DimensionDivider />

      {/* STEP 3 — LIVE ELEVENLABS PROOF */}
      <Section contentClassName="max-w-2xl">
        <p className="mb-3 text-center font-mono text-xs tracking-wide text-signal-orange uppercase">
          Étape 3 : la meilleure preuve
        </p>
        <h2 className="mb-3 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Teste toi-même l'assistant avant ton appel
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-center font-body text-sm text-ticket-paper/75 md:text-base">
          Avant l'appel, prends 1 minute pour simuler une demande d'intervention et voir comment l'assistant qualifie
          ta demande, en conditions réelles.
        </p>
        <div className="relative mx-auto max-w-xl rounded-sm border border-blueprint-line/30 bg-ticket-paper/5 p-4 shadow-[0_0_40px_rgba(255,90,31,0.15)]">
          <elevenlabs-convai agent-id="agent_1201krzttyqpfettefcemdq2p55d"></elevenlabs-convai>
        </div>
      </Section>

      <DimensionDivider />

      {/* COMMITMENTS */}
      <Section contentClassName="max-w-4xl">
        <h2 className="mb-10 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Ce qu'on engage, noir sur blanc
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {commitments.map((item, i) => (
            <TicketCard key={item} ticketNumber={String(i + 1).padStart(2, '0')} index={i} className="text-center">
              {item}
            </TicketCard>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Confirmation
