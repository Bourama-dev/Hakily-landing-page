import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Section from '../components/Section'

type CompanyInfoKind = 'mentions' | 'privacy' | 'terms'

const pageContent: Record<CompanyInfoKind, { title: string; intro: string; items: string[] }> = {
  mentions: {
    title: 'Mentions légales',
    intro: 'Cette page doit être complétée avec les informations officielles de l’éditeur avant sa mise en ligne.',
    items: [
      'Raison sociale et forme juridique à renseigner.',
      'Adresse du siège, numéro d’immatriculation et numéro de TVA à renseigner, le cas échéant.',
      'Nom du responsable de publication et coordonnées de contact à renseigner.',
      'Nom et coordonnées de l’hébergeur à confirmer.',
    ],
  },
  privacy: {
    title: 'Confidentialité',
    intro: 'Les informations ci-dessous restent à confirmer avant toute collecte ou utilisation de données via le site.',
    items: [
      'Responsable du traitement et adresse de contact pour les demandes relatives aux données à renseigner.',
      'Données, finalités, bases légales et durées de conservation à documenter.',
      'Outils tiers actuellement intégrés (Calendly, Meta Pixel et démonstration vocale) à décrire avec leurs rôles et réglages réels.',
      'Modalités de gestion des traceurs et demandes d’exercice des droits à préciser.',
    ],
  },
  terms: {
    title: 'Conditions commerciales et contrat',
    intro: 'Le tarif de l’assistant téléphonique est établi avec chaque client au cadrage, selon son activité et ses volumes. Le contrat complet reste à formaliser.',
    items: [
      'Assistant téléphonique IA : mise en service puis abonnement mensuel, avec minutes incluses définies selon le volume d’appels ; facturation à la minute au-delà ; sans durée minimale. Tarif établi avec le client au cadrage.',
      'Automatisations métier et agents IA : modules définis selon les besoins, les outils et le périmètre convenu ; devis établi après étude.',
      'Des frais récurrents complémentaires peuvent s’appliquer si l’hébergement, la supervision ou la maintenance le nécessitent.',
      'Modalités de facturation, mesure des minutes, résiliation et périmètre exact à formaliser dans le devis ou le contrat avant commande.',
    ],
  },
}

interface CompanyInfoProps {
  kind: CompanyInfoKind
}

function CompanyInfo({ kind }: CompanyInfoProps) {
  const page = pageContent[kind]

  return (
    <>
      <Header />
      <Section className="pt-36 md:pt-40" contentClassName="max-w-3xl">
        <span className="kicker"><b>INFORMATIONS</b> DU SITE</span>
        <h1 className="mt-6 text-[clamp(34px,4.6vw,52px)] leading-tight font-bold tracking-[-0.03em]">{page.title}</h1>
        <div className="mt-8 rounded-2xl border border-sky/40 bg-sky/10 p-5 text-[16px] leading-relaxed text-ink/85">
          <strong className="font-semibold text-blue">À finaliser avant publication.</strong> {page.intro}
        </div>
        <ul className="mt-8 flex flex-col gap-4 text-[17px] leading-relaxed text-mist">
          {page.items.map((item) => <li key={item} className="glass p-5">{item}</li>)}
        </ul>
        <Link to="/" className="mt-10 inline-block text-[15px] text-ink/85 underline underline-offset-4 hover:text-blue">
          Retour à l’accueil
        </Link>
      </Section>
    </>
  )
}

export default CompanyInfo
