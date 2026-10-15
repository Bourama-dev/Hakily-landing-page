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
    intro: 'Le tarif de lancement de l’assistant téléphonique reste soumis à la validation des coûts techniques réels. Le contrat complet reste à formaliser.',
    items: [
      'Assistant téléphonique IA : tarif de lancement prévu à 990 € HT de mise en service, puis 249 € HT par mois, avec 300 minutes incluses par mois ; 0,30 € HT par minute au-delà ; sans durée minimale.',
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
      <Section contentClassName="max-w-3xl">
        <p className="mb-3 font-mono text-xs tracking-wide text-signal-orange uppercase">Informations du site</p>
        <h1 className="font-display text-4xl font-black text-ticket-paper uppercase">{page.title}</h1>
        <div className="mt-6 border border-hazard-yellow/50 bg-blueprint-navy p-5 font-body text-sm leading-relaxed text-ticket-paper/85">
          <strong className="font-semibold text-hazard-yellow">À finaliser avant publication.</strong> {page.intro}
        </div>
        <ul className="mt-8 flex flex-col gap-4 font-body text-sm leading-relaxed text-ticket-paper/80">
          {page.items.map((item) => <li key={item} className="border-l-2 border-blueprint-line/50 pl-4">{item}</li>)}
        </ul>
        <Link to="/" className="mt-10 inline-block font-mono text-xs tracking-wide text-ticket-paper underline underline-offset-4">
          Retour à l’accueil
        </Link>
      </Section>
    </>
  )
}

export default CompanyInfo
