import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Check, Clock } from 'lucide-react'
import Header from '../components/Header'
import Section, { SectionHead } from '../components/Section'
import DimensionDivider from '../components/DimensionDivider'
import { LiveAgentCall } from '../components/LiveAgentCall'

const preparationSteps = [
  'Retrouve l’invitation et les détails du rendez-vous dans l’e-mail Calendly.',
  'Pense au nombre d’appels que tu reçois et à leur durée habituelle.',
  'Tu peux essayer la démonstration vocale ci-dessous avant notre échange.',
]

const ease = [0.2, 0.7, 0.2, 1] as const

function Confirmation() {
  useEffect(() => {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'Schedule')
    }
  }, [])

  return (
    <>
      <Header />

      <Section className="pt-36 pb-10 md:pt-40" contentClassName="max-w-2xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.div
            className="relative w-44"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <span className="absolute inset-[12%] rounded-full bg-sky/30 blur-2xl" aria-hidden="true" />
            <img src="/hakily-owl.webp" width={1000} height={915} alt="" className="relative w-full" style={{ animation: 'bob 6s ease-in-out infinite' }} />
            <span className="absolute -right-1 bottom-2 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-blue to-cyan shadow-[0_0_24px_rgba(53,198,244,.7)]">
              <Check className="h-6 w-6" strokeWidth={3} />
            </span>
          </motion.div>
          <motion.h1
            className="text-[clamp(36px,5vw,56px)] leading-tight font-bold tracking-[-0.03em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            Merci pour <span className="grad-text">ta réservation</span>
          </motion.h1>
          <motion.p
            className="max-w-md text-[18px] leading-relaxed text-mist"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            Le rendez-vous dure 30 minutes. Vérifie l’e-mail Calendly pour retrouver l’horaire et le lien de réunion.
          </motion.p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <span className="flex items-center justify-center gap-2 rounded-full border border-stroke-2 px-4 py-2 font-mono text-[12px] tracking-[0.1em] text-ink/85 uppercase">
              <Calendar className="h-4 w-4 text-blue" />
              Détails dans l’e-mail Calendly
            </span>
            <span className="flex items-center justify-center gap-2 rounded-full border border-stroke-2 px-4 py-2 font-mono text-[12px] tracking-[0.1em] text-ink/85 uppercase">
              <Clock className="h-4 w-4 text-blue" />
              30 minutes
            </span>
          </div>
        </div>
      </Section>

      <DimensionDivider variant="minor" />

      <Section contentClassName="max-w-2xl">
        <SectionHead title="Pour préparer l’échange" />
        <ol className="flex flex-col gap-4">
          {preparationSteps.map((step, index) => (
            <motion.li
              key={step}
              className="glass flex items-start gap-4 p-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue to-cyan font-mono text-sm font-semibold">
                {index + 1}
              </span>
              <p className="relative pt-1 text-[17px] leading-relaxed text-ink/85">{step}</p>
            </motion.li>
          ))}
        </ol>
      </Section>

      <DimensionDivider />

      <Section contentClassName="max-w-xl">
        <SectionHead
          title={
            <>
              Essayer la <span className="grad-text">démonstration vocale</span>
            </>
          }
          intro="Joue le rôle d’un client et écoute comment l’assistant recueille les informations."
        />
        <div className="glass p-5">
          <LiveAgentCall />
        </div>
        <Link to="/offer" className="mt-8 block text-center text-[15px] text-ink/85 underline underline-offset-4 hover:text-blue">
          Revoir les offres et les tarifs
        </Link>
      </Section>
    </>
  )
}

export default Confirmation
