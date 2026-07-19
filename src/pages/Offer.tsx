import {
  BarChart3,
  CalendarSync,
  Check,
  LayoutDashboard,
  ListChecks,
  MessageSquare,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import Header from '../components/Header'
import Section from '../components/Section'
import DimensionDivider from '../components/DimensionDivider'
import HazardBanner from '../components/HazardBanner'
import FAQ, { type FAQItem } from '../components/FAQ'
import StickyCTA from '../components/StickyCTA'

function scrollToBooking() {
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
}

const promise = [
  'Un assistant qui décroche 24h/24, plus aucun appel perdu',
  'Qualification et SMS récapitulatif après chaque appel',
  'Installé et paramétré sur ton métier en 7 jours',
]

const objections: FAQItem[] = [
  {
    question: "Je n'ai pas assez d'appels",
    answer:
      "Quand le volume est faible, chaque appel compte double : un client raté, c'est peut-être le chantier de la semaine.",
  },
  {
    question: "C'est trop cher",
    answer:
      "Combien te coûte un seul chantier perdu faute d'avoir décroché ? Un ou deux appels rattrapés dans le mois remboursent largement le forfait.",
  },
  {
    question: "C'est juste un répondeur, non ?",
    answer:
      "Non. L'assistant dialogue, qualifie l'urgence, collecte les coordonnées et envoie un SMS récapitulatif. Le client se sent pris en charge, pas mis en attente.",
  },
  {
    question: 'Je réponds déjà à mes appels',
    answer:
      "En journée, quand tu le peux. Mais sous un évier, sur un toit, le soir, le week-end ? C'est exactement là que partent les clients.",
  },
  {
    question: "L'IA, je n'y connais rien",
    answer:
      'Le paramétrage est fait avec toi, le déploiement se fait sous 7 jours, et tu pilotes tout depuis un tableau de bord simple.',
  },
]

const included = [
  { icon: <Phone className="h-4 w-4" />, text: 'Assistant vocal IA 24h/24' },
  { icon: <ListChecks className="h-4 w-4" />, text: 'Qualification avancée et priorisation des urgences' },
  { icon: <MessageSquare className="h-4 w-4" />, text: 'SMS récapitulatif après chaque appel' },
  { icon: <BarChart3 className="h-4 w-4" />, text: 'Reporting mensuel' },
  { icon: <CalendarSync className="h-4 w-4" />, text: 'Intégration agenda' },
  { icon: <LayoutDashboard className="h-4 w-4" />, text: 'Tableau de bord' },
]

const shortFaq: FAQItem[] = [
  {
    question: 'Le prix reste-t-il bloqué si je reste client longtemps ?',
    answer: "Oui, 149 €/mois à vie tant que tu restes client, c'est l'avantage du Pack Fondateur.",
  },
  {
    question: 'Que se passe-t-il après le 10e client ?',
    answer: 'Le Pack Fondateur disparaît, seul le catalogue standard (Essentiel / Performance / Croissance) reste actif.',
  },
  {
    question: 'Je veux réfléchir encore ?',
    answer: "C'est légitime. La seule question utile : combien d'appels vas-tu encore manquer pendant que tu réfléchis ?",
  },
]

function Offer() {
  return (
    <>
      <HazardBanner />
      <Header />

      {/* HERO */}
      <Section className="pt-4 pb-10 md:pt-8" contentClassName="max-w-3xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-display text-3xl leading-[1.05] font-black text-ticket-paper uppercase md:text-5xl">
            Tu as vu la vidéo mais tu hésites encore ? Voici pourquoi réserver maintenant
          </h1>
          <p className="max-w-xl font-body text-sm text-ticket-paper/80 md:text-base">
            Le Pack Fondateur (prix bloqué à vie) n'est proposé que jusqu'au 10e client signé. Après, seul le
            catalogue standard reste disponible.
          </p>
          <button
            type="button"
            onClick={scrollToBooking}
            className="bg-blueprint-line px-8 py-4 font-display text-lg tracking-wide text-ticket-paper uppercase shadow-[0_4px_0_rgba(0,0,0,0.35)] transition-transform active:translate-y-1 active:shadow-none"
          >
            Réserver mon appel →
          </button>
        </div>
      </Section>

      {/* PROMISE REMINDER */}
      <div className="px-6 pb-10">
        <ul className="mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-between">
          {promise.map((item) => (
            <li
              key={item}
              className="flex flex-1 items-start gap-2 font-mono text-xs tracking-wide text-ticket-paper/80 uppercase"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal-orange" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <DimensionDivider />

      {/* OBJECTIONS */}
      <Section contentClassName="max-w-2xl">
        <h2 className="mb-10 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Ce qui te bloque (et pourquoi c'est faux)
        </h2>
        <FAQ items={objections} />
      </Section>

      <DimensionDivider />

      {/* PACK FONDATEUR */}
      <Section contentClassName="max-w-3xl">
        <h2 className="mb-10 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Le Pack Fondateur — réservé aux 10 premiers clients
        </h2>
        <div className="relative mx-auto max-w-2xl rotate-[-0.5deg] bg-ticket-paper p-8 text-ticket-ink shadow-[0_10px_28px_rgba(0,0,0,0.35)] sm:p-10">
          <span className="absolute top-3 left-4 font-mono text-[10px] tracking-wide text-ticket-ink/50 uppercase">
            Devis N°01
          </span>

          <div className="absolute -top-5 -right-3 rotate-12 rounded-full border-4 border-double border-signal-orange px-4 py-2 font-mono text-[10px] font-bold tracking-widest text-signal-orange uppercase opacity-90 sm:-top-6 sm:-right-6 sm:px-5 sm:py-3 sm:text-xs">
            Pack Fondateur
          </div>

          <div className="mb-6 flex flex-col items-baseline gap-1 sm:flex-row sm:gap-3">
            <span className="font-display text-5xl font-black uppercase sm:text-6xl">149 €</span>
            <span className="font-mono text-sm tracking-wide uppercase">/mois, prix bloqué à vie</span>
          </div>
          <p className="mb-1 font-body text-sm">
            + 790 € de mise en place <span className="text-ticket-ink/50 line-through">au lieu de 990 €</span>
          </p>
          <p className="mb-6 font-mono text-xs tracking-wide text-ticket-ink/70 uppercase">
            Engagement 3 mois, puis sans engagement
          </p>

          <ul className="grid gap-3 border-t border-ticket-ink/15 pt-6 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item.text} className="flex items-start gap-2 font-body text-sm">
                <span className="mt-0.5 text-signal-orange">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-center font-mono text-xs tracking-wide text-ticket-ink/60 uppercase">
            Offre valable jusqu'au 10e client signé
          </p>
        </div>
      </Section>

      <DimensionDivider />

      {/* LIVE PROOF — ELEVENLABS */}
      <Section contentClassName="max-w-2xl">
        <h3 className="mb-8 text-center font-display text-2xl font-black text-ticket-paper uppercase md:text-3xl">
          Encore des doutes ? Teste l'assistant toi-même, en direct
        </h3>
        <div className="relative mx-auto max-w-xl rounded-sm border border-blueprint-line/30 bg-ticket-paper/5 p-4 shadow-[0_0_40px_rgba(255,90,31,0.15)]">
          <elevenlabs-convai agent-id="agent_1201krzttyqpfettefcemdq2p55d"></elevenlabs-convai>
        </div>
      </Section>

      <DimensionDivider />

      {/* GUARANTEE */}
      <Section contentClassName="max-w-xl">
        <div className="mx-auto rotate-[0.5deg] bg-ticket-paper p-8 text-center text-ticket-ink shadow-[0_10px_28px_rgba(0,0,0,0.35)]">
          <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-signal-orange" strokeWidth={1.75} />
          <h3 className="mb-3 font-display text-2xl font-black uppercase">
            Garantie 15 jours satisfait ou remboursé
          </h3>
          <p className="font-body text-sm leading-relaxed text-ticket-ink/80">
            Si l'assistant ne répond pas au besoin défini au cadrage, on l'ajuste jusqu'à ce qu'il soit pleinement
            opérationnel. Tu juges sur pièce, sans prendre de risque.
          </p>
        </div>
      </Section>

      <DimensionDivider />

      {/* SHORT FAQ */}
      <Section contentClassName="max-w-2xl">
        <h2 className="mb-10 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Dernières questions
        </h2>
        <FAQ items={shortFaq} />
      </Section>

      <DimensionDivider />

      {/* BOOKING */}
      <Section id="booking" contentClassName="max-w-2xl">
        <h2 className="mb-8 text-center font-display text-3xl font-black text-ticket-paper uppercase md:text-4xl">
          Réserve ton appel maintenant
        </h2>
        <div
          className="calendly-inline-widget mx-auto w-full max-w-3xl"
          data-url="https://calendly.com/bourama-axyagroup/30min"
          style={{ minWidth: '320px', height: '700px' }}
        />
        <p className="mt-4 text-center font-mono text-xs tracking-wide text-ticket-paper/60 uppercase">
          Pack Fondateur · 149 €/mois à vie · Garantie 15 jours satisfait ou remboursé
        </p>
      </Section>

      <StickyCTA label="⚡ Réserver mon appel — Pack Fondateur" />
    </>
  )
}

export default Offer
