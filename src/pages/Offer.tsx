import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Section from '../components/Section'
import DimensionDivider from '../components/DimensionDivider'
import PricingSection from '../components/PricingSection'
import FAQ, { type FAQItem } from '../components/FAQ'
import StickyCTA from '../components/StickyCTA'
import CalendlyInlineWidget from '../components/CalendlyInlineWidget'
import { LiveAgentCall } from '../components/LiveAgentCall'

const offerFaq: FAQItem[] = [
  {
    question: 'Combien de minutes sont incluses dans l’offre téléphonique ?',
    answer: 'Le tarif de lancement prévoit 300 minutes par mois incluses. Au-delà, chaque minute supplémentaire est à 0,30 € HT. Ces tarifs restent soumis à la validation des coûts techniques réels.',
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

function Offer() {
  return (
    <>
      <Header />

      <Section className="pt-8 pb-10 md:pt-12" contentClassName="max-w-3xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-mono text-xs tracking-wide text-signal-orange uppercase">TPE et PME · priorité aux artisans du BTP</p>
          <h1 className="font-display text-4xl leading-[0.98] font-black text-ticket-paper uppercase md:text-5xl">
            Une solution adaptée à ton activité
          </h1>
          <p className="max-w-2xl font-body text-sm leading-relaxed text-ticket-paper/80 md:text-base">
            L’assistant téléphonique IA est notre offre prioritaire pour les plombiers, chauffagistes et autres artisans
            du BTP. Des automatisations et agents IA peuvent s’y ajouter selon les besoins : la prestation est composée
            avec toi, pas vendue en abonnements prédéfinis.
          </p>
          <Link
            to="/#booking"
            className="bg-signal-orange px-8 py-4 font-display text-lg tracking-wide text-ticket-paper uppercase shadow-[0_4px_0_rgba(0,0,0,0.35)]"
          >
            Parler de mon besoin →
          </Link>
        </div>
      </Section>

      <DimensionDivider />
      <PricingSection />
      <DimensionDivider />

      <Section contentClassName="max-w-2xl">
        <h2 className="mb-10 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Questions sur les tarifs
        </h2>
        <FAQ items={offerFaq} />
      </Section>

      <DimensionDivider variant="minor" />

      <Section contentClassName="max-w-xl">
        <h2 className="mb-3 text-center font-display text-2xl font-black text-ticket-paper uppercase md:text-3xl">
          Écoute une démonstration de l’assistant
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-center font-body text-sm text-ticket-paper/75">
          Simule une demande d’intervention pour voir comment l’assistant répond et recueille les informations.
        </p>
        <div className="relative mx-auto max-w-xl rounded-sm border border-blueprint-line/30 bg-ticket-paper/5 p-4 shadow-[0_0_40px_rgba(255,90,31,0.15)]">
          <LiveAgentCall />
        </div>
      </Section>

      <DimensionDivider />

      <Section id="booking" contentClassName="max-w-2xl">
        <h2 className="mb-3 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Cadrons ton besoin et ton volume
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-center font-body text-sm text-ticket-paper/75 md:text-base">
          Un échange de 30 minutes pour examiner ton activité et l’offre adaptée, sans durée minimale pour l’assistant téléphonique.
        </p>
        <CalendlyInlineWidget url="https://calendly.com/bourama-axyagroup/30min" className="mx-auto w-full max-w-3xl" />
      </Section>

      <StickyCTA label="Voir les tarifs et réserver" />
    </>
  )
}

export default Offer
