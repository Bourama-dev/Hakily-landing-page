import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import Section, { SectionHead } from '../components/Section'
import DimensionDivider from '../components/DimensionDivider'
import PricingSection from '../components/PricingSection'
import FAQ, { type FAQItem } from '../components/FAQ'
import StickyCTA from '../components/StickyCTA'
import CalendlyInlineWidget from '../components/CalendlyInlineWidget'
import { LiveAgentCall } from '../components/LiveAgentCall'

const offerFaq: FAQItem[] = [
  {
    question: 'Combien de minutes sont incluses dans l’offre téléphonique ?',
    answer: 'Les minutes incluses sont définies avec toi au cadrage, selon ton volume d’appels. Au-delà, chaque minute supplémentaire est facturée séparément.',
  },
  {
    question: 'Y a-t-il une durée minimale ?',
    answer: 'Non. L’offre de l’assistant téléphonique IA ne prévoit pas de durée minimale.',
  },
  {
    question: 'Les autres prestations ont-elles un prix fixe ?',
    answer: 'Non. Les automatisations métier et agents IA complètent la solution selon ton besoin. Le périmètre et le tarif sont définis ensemble après étude de tes processus et outils.',
  },
]

const ease = [0.2, 0.7, 0.2, 1] as const

function Offer() {
  return (
    <>
      <Header />

      <Section className="pt-36 md:pt-40" contentClassName="max-w-3xl">
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="kicker">
            <b>TPE &amp; PME</b> · ARTISANS, BTP, SERVICES
          </span>
          <h1 className="text-[clamp(38px,5vw,62px)] leading-[1.04] font-bold tracking-[-0.03em]">
            Une solution <span className="grad-text">adaptée à ton activité</span>
          </h1>
          <p className="max-w-2xl text-[clamp(17px,1.6vw,20px)] leading-relaxed text-mist">
            L’assistant téléphonique IA est notre offre prioritaire pour les TPE &amp; PME qui ne peuvent pas toujours
            décrocher. Des automatisations et agents IA peuvent s’y ajouter selon les besoins : la prestation est composée
            avec toi, pas vendue en abonnements prédéfinis.
          </p>
          <Link to="/#booking" className="btn-primary">
            Parler de mon besoin
            <span className="arr">
              <ArrowRight className="h-[18px] w-[18px]" />
            </span>
          </Link>
        </motion.div>
      </Section>

      <DimensionDivider />
      <PricingSection />
      <DimensionDivider />

      <Section contentClassName="max-w-3xl">
        <SectionHead title="Questions sur les tarifs" />
        <FAQ items={offerFaq} />
      </Section>

      <DimensionDivider variant="minor" />

      <Section contentClassName="max-w-2xl">
        <SectionHead
          title={
            <>
              Écoute une <span className="grad-text">démonstration</span> de l’assistant
            </>
          }
          intro="Joue le rôle d’un client pour voir comment l’assistant répond et recueille les informations."
        />
        <div className="glass p-5">
          <LiveAgentCall />
        </div>
      </Section>

      <DimensionDivider />

      <Section id="booking" contentClassName="max-w-4xl">
        <SectionHead
          title={
            <>
              Cadrons ton besoin <span className="grad-text">et ton volume</span>
            </>
          }
          intro="Un échange de 30 minutes pour examiner ton activité et l’offre adaptée, sans durée minimale pour l’assistant téléphonique."
        />
        <div className="glass p-3 md:p-5">
          <CalendlyInlineWidget url="https://calendly.com/bourama-axyagroup/30min" className="mx-auto w-full overflow-hidden rounded-2xl" />
        </div>
      </Section>

      <StickyCTA label="Voir les tarifs et réserver" />
    </>
  )
}

export default Offer
