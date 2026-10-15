import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Check, Clock } from 'lucide-react'
import Header from '../components/Header'
import Section from '../components/Section'
import DimensionDivider from '../components/DimensionDivider'
import { LiveAgentCall } from '../components/LiveAgentCall'

const preparationSteps = [
  'Retrouve l’invitation et les détails du rendez-vous dans l’e-mail Calendly.',
  'Pense au nombre d’appels que tu reçois et à leur durée habituelle.',
  'Tu peux essayer la démonstration vocale ci-dessous avant notre échange.',
]

function Confirmation() {
  useEffect(() => {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'Schedule')
    }
  }, [])

  return (
    <>
      <Header />

      <Section className="pt-8 pb-10 md:pt-12" contentClassName="max-w-2xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-signal-orange text-ticket-paper">
            <Check className="h-8 w-8" strokeWidth={3} />
          </span>
          <h1 className="font-display text-4xl font-black text-ticket-paper uppercase md:text-5xl">
            Merci pour ta réservation
          </h1>
          <p className="max-w-md font-body text-sm leading-relaxed text-ticket-paper/75 md:text-base">
            Le rendez-vous dure 30 minutes. Vérifie l’e-mail Calendly pour retrouver l’horaire et le lien de réunion.
          </p>
        </div>
      </Section>

      <div className="px-6">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-3 border border-blueprint-line/30 bg-blueprint-navy px-6 py-5 sm:flex-row sm:items-center sm:justify-center">
          <span className="flex items-center justify-center gap-2 font-mono text-xs tracking-wide text-ticket-paper/75 uppercase">
            <Calendar className="h-4 w-4 text-signal-orange" />
            Détails dans l’e-mail Calendly
          </span>
          <span className="flex items-center justify-center gap-2 font-mono text-xs tracking-wide text-ticket-paper/75 uppercase sm:ml-6">
            <Clock className="h-4 w-4 text-signal-orange" />
            30 minutes
          </span>
        </div>
      </div>

      <DimensionDivider variant="minor" />

      <Section contentClassName="max-w-2xl">
        <h2 className="mb-8 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Pour préparer l’échange
        </h2>
        <ol className="flex flex-col gap-4">
          {preparationSteps.map((step, index) => (
            <li key={step} className="flex items-start gap-4 border border-blueprint-line/30 bg-blueprint-navy p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal-orange font-mono text-sm text-ticket-paper">
                {index + 1}
              </span>
              <p className="font-body text-sm leading-relaxed text-ticket-paper/80">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <DimensionDivider />

      <Section contentClassName="max-w-xl">
        <h2 className="mb-3 text-center font-display text-2xl font-black text-ticket-paper uppercase md:text-3xl">
          Essayer la démonstration vocale
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-center font-body text-sm text-ticket-paper/75">
          Simule une demande d’intervention et écoute comment l’assistant recueille les informations.
        </p>
        <div className="relative mx-auto max-w-xl rounded-sm border border-blueprint-line/30 bg-ticket-paper/5 p-4">
          <LiveAgentCall />
        </div>
        <Link to="/offer" className="mt-8 inline-block w-full text-center font-mono text-xs tracking-wide text-ticket-paper underline underline-offset-4">
          Revoir les offres et les tarifs
        </Link>
      </Section>
    </>
  )
}

export default Confirmation
