import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  Clock,
  Link2,
  ListChecks,
  MessageSquareText,
  PhoneCall,
  PhoneOff,
  Play,
  Settings2,
  Voicemail,
  Workflow,
  Wrench,
  XCircle,
} from 'lucide-react'
import Header from '../components/Header'
import Section, { SectionHead } from '../components/Section'
import RingPing from '../components/RingPing'
import TicketCard from '../components/TicketCard'
import FAQ from '../components/FAQ'
import StickyCTA from '../components/StickyCTA'
import CalendlyInlineWidget from '../components/CalendlyInlineWidget'
import { LiveAgentCall } from '../components/LiveAgentCall'
import PricingSection from '../components/PricingSection'
import OwlStage from '../components/OwlStage'
import ParticleWave from '../components/ParticleWave'
import CallSimulation from '../components/CallSimulation'

const ease = [0.2, 0.7, 0.2, 1] as const

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const proofs = [
  'Répond selon les règles de ton activité',
  'Minutes et volumes définis selon ton activité',
  'Assistant sans durée minimale',
  'Tarif établi avec toi, sur devis',
]

const problems = [
  {
    icon: <Wrench className="h-6 w-6" />,
    text: 'Le téléphone sonne pendant que tu es en intervention, en rendez-vous ou avec un client',
  },
  {
    icon: <PhoneOff className="h-6 w-6" />,
    text: 'Tu ne peux pas toujours tout interrompre pour répondre',
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
    icon: <PhoneCall className="h-5 w-5" />,
    title: 'Disponibilité',
    description: "L'assistant répond aux appels entrants selon les règles définies pour ton activité.",
  },
  {
    icon: <ListChecks className="h-5 w-5" />,
    title: 'Qualification',
    description: "Il dialogue, comprend la demande, trie l'urgence et collecte les infos utiles.",
  },
  {
    icon: <MessageSquareText className="h-5 w-5" />,
    title: 'Transmission',
    description: "Il t'envoie un SMS récapitulatif après chaque appel et te transfère les urgences.",
  },
  {
    icon: <Settings2 className="h-5 w-5" />,
    title: 'Accompagnement',
    description: 'Le périmètre et le calendrier sont cadrés avec toi avant la mise en service.',
  },
]

const doesList = [
  'Répond selon les règles définies pour ton activité',
  'Qualifie la demande du client',
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

const sectors = ['Artisans', 'BTP', 'Dépannage', 'Services à domicile', 'Cabinets', 'Agences', 'Commerces', 'Indépendants']

function Mechanism() {
  const listRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 0.75', 'end 0.55'] })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <Section id="fonctionnement" contentClassName="max-w-6xl">
      <SectionHead
        kicker={
          <>
            <b>COMMENT</b> ÇA MARCHE
          </>
        }
        title={
          <>
            Voici comment <span className="grad-text">Hakily règle ça</span>
          </>
        }
      />
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <ol ref={listRef} className="relative flex flex-col gap-12 pl-16">
          <span className="absolute top-2 bottom-2 left-[22px] w-[3px] rounded-full bg-white/10" aria-hidden="true">
            <motion.span
              className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-cyan via-blue to-purple shadow-[0_0_14px_#3b5bfd]"
              style={{ scaleY: progress }}
            />
          </span>
          {mechanism.map((step, i) => (
            <motion.li
              key={step.title}
              className="relative"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <span className="absolute top-0 -left-16 grid h-12 w-12 place-items-center rounded-2xl border border-stroke-2 bg-night-2 text-cyan shadow-[0_0_24px_-6px_rgba(53,198,244,.6)]">
                {step.icon}
              </span>
              <span className="font-mono text-[12px] tracking-[0.14em] text-sky uppercase">Étape {String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-1 text-[clamp(24px,2.6vw,32px)] font-bold tracking-tight">{step.title}</h3>
              <p className="mt-2 max-w-md text-[18px] leading-relaxed text-mist">{step.description}</p>
            </motion.li>
          ))}
        </ol>
        <motion.div
          className="lg:sticky lg:top-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <CallSimulation />
        </motion.div>
      </div>
    </Section>
  )
}

function VSL() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden pt-[110px] md:pt-[120px]">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 md:px-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="text-center lg:text-left">
            <RingPing />
            <motion.p
              className="mt-7 font-mono text-[13px] font-semibold tracking-[0.12em] text-sky uppercase"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              Pour les TPE &amp; PME · artisans, BTP, services
            </motion.p>
            <h1 className="mt-5 text-[clamp(38px,4.6vw,62px)] leading-[1.04] font-bold tracking-[-0.03em]">
              {['Ne manque plus', 'aucun appel client,'].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.15 + i * 0.12, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span className="grad-text inline-block" initial={{ y: '105%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.39, ease }}>
                  même quand tu ne peux pas décrocher.
                </motion.span>
              </span>
            </h1>
            <motion.p
              className="mx-auto mt-6 max-w-xl text-[clamp(17px,1.6vw,20px)] leading-relaxed text-[#cfd4f5] lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
            >
              Hakily aide les TPE &amp; PME à mieux gérer leurs demandes clients. L’assistant téléphonique IA, notre offre
              prioritaire, répond et qualifie les appels selon les règles de ton activité.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.62, ease }}
            >
              <button type="button" onClick={() => scrollToId('booking')} className="btn-primary w-full sm:w-auto">
                Réserver mon appel découverte
                <span className="arr">
                  <ArrowRight className="h-[18px] w-[18px]" />
                </span>
              </button>
              <button type="button" onClick={() => scrollToId('demo')} className="btn-ghost w-full sm:w-auto">
                <span className="relative grid h-7 w-7 place-items-center rounded-full border-[1.5px] border-current">
                  <Play className="ml-0.5 h-3 w-3 fill-current" />
                  <span className="absolute -inset-1.5 rounded-full border border-white/40" style={{ animation: 'ripple 2.2s ease-out infinite' }} />
                </span>
                Tester l’assistant
              </button>
            </motion.div>
            <motion.p
              className="mt-4 font-mono text-[12px] tracking-[0.12em] text-soft uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Gratuit · Sans engagement · 30 min
            </motion.p>
          </div>

          <div className="pt-6 lg:pt-0">
            <OwlStage />
          </div>
        </div>

        {/* Garanties + vague de particules */}
        <div className="relative mt-4 h-[260px] md:h-[240px]">
          <div className="absolute inset-0">
            <ParticleWave />
          </div>
          <motion.ul
            className="relative z-10 mx-auto flex max-w-6xl flex-wrap justify-center gap-3 px-4 pt-8"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 1 } } }}
          >
            {proofs.map((p) => (
              <motion.li
                key={p}
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                className="flex items-center gap-2 rounded-full border border-stroke-2 bg-[rgba(16,22,78,.6)] px-4 py-2.5 text-[15px] backdrop-blur-md"
              >
                <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-cyan" />
                {p}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* APPROCHE */}
      <Section contentClassName="max-w-5xl" className="!pt-10">
        <motion.div
          className="glass grid gap-8 p-8 md:grid-cols-[1.4fr_1fr] md:items-center md:p-12"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="relative">
            <span className="kicker">
              <b>UNE APPROCHE</b> PRAGMATIQUE
            </span>
            <h2 className="mt-6 text-[clamp(28px,3.4vw,40px)] leading-tight font-bold tracking-tight">
              Des outils utiles, <span className="grad-text">conçus autour de ton activité</span>
            </h2>
            <p className="mt-5 text-[18px] leading-relaxed text-mist">
              Hakily automatise les tâches répétitives, relie les outils déjà utilisés et améliore le suivi des demandes.
              L’intelligence artificielle intervient quand elle répond à un besoin concret, avec un périmètre défini ensemble.
            </p>
          </div>
          <ul className="relative flex flex-col gap-3">
            {[
              { icon: <Workflow className="h-5 w-5" />, label: 'Automatise les tâches répétitives' },
              { icon: <Link2 className="h-5 w-5" />, label: 'Relie les outils déjà utilisés' },
              { icon: <BellRing className="h-5 w-5" />, label: 'Améliore le suivi des demandes' },
            ].map((it, i) => (
              <motion.li
                key={it.label}
                className="flex items-center gap-4 rounded-2xl border border-stroke bg-night/50 px-4 py-4 text-[16px] font-medium"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease }}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue to-cyan">{it.icon}</span>
                {it.label}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Section>

      {/* PROBLÈME */}
      <Section id="probleme" contentClassName="max-w-5xl">
        <SectionHead
          kicker={
            <>
              <b>LE</b> PROBLÈME
            </>
          }
          title={
            <>
              Tu reconnais <span className="grad-text">ces galères ?</span>
            </>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {problems.map((problem, i) => (
            <TicketCard key={problem.text} ticketNumber={String(i + 1).padStart(2, '0')} icon={problem.icon} index={i}>
              {problem.text}
            </TicketCard>
          ))}
        </div>
      </Section>

      {/* FONCTIONNEMENT */}
      <Mechanism />

      {/* OFFRES */}
      <PricingSection />

      {/* DÉMO VOCALE */}
      <Section id="demo" contentClassName="max-w-5xl">
        <motion.div
          className="relative overflow-hidden rounded-[32px] border border-stroke-2 p-8 md:p-12"
          style={{ background: 'radial-gradient(80% 90% at 50% 110%, rgba(53,198,244,.35), transparent 60%), radial-gradient(70% 80% at 30% 0%, #2a35a5 0%, #121a6a 50%, #0a0f45 100%)' }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative mx-auto w-full max-w-[300px]">
              <span className="absolute inset-[10%] rounded-full bg-sky/30 blur-3xl" aria-hidden="true" />
              <img
                src="/hakily-owl.webp"
                width={1000}
                height={915}
                alt=""
                loading="lazy"
                className="relative w-full drop-shadow-[0_30px_40px_rgba(0,0,0,.45)]"
                style={{ animation: 'bob 6s ease-in-out infinite' }}
              />
            </div>
            <div>
              <span className="kicker">
                <b>DÉMO</b> EN DIRECT
              </span>
              <h2 className="mt-6 text-[clamp(28px,3.6vw,44px)] leading-tight font-bold tracking-tight">
                La meilleure preuve, <span className="grad-text">c'est de lui parler toi-même</span>
              </h2>
              <p className="mt-4 text-[18px] leading-relaxed text-[#cfd4f5]">
                Aucune étude de cas ne vaut un appel en direct. Joue le rôle d’un client et vois comment l'assistant qualifie ta
                demande, en conditions réelles.
              </p>
              <div className="mt-7">
                <LiveAgentCall />
              </div>
              <p className="mt-3 font-mono text-[12px] tracking-[0.1em] text-mist uppercase">
                Conversation vocale en direct avec l'assistant Hakily · Prend 1 minute
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* FAIT / NE FAIT PAS */}
      <Section contentClassName="max-w-5xl">
        <SectionHead
          title={
            <>
              Ce que Hakily fait. <span className="grad-text">Et ce qu'il n'est pas.</span>
            </>
          }
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { title: 'Ce que Hakily fait', items: doesList, good: true },
            { title: 'Ce que Hakily ne fait pas', items: doesNotList, good: false },
          ].map((col, c) => (
            <motion.div
              key={col.title}
              className={`p-8 ${col.good ? 'grad-border rounded-[24px]' : 'glass'}`}
              style={col.good ? { ['--gb-bg' as string]: '#0f1566' } : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: c * 0.12, ease }}
            >
              <h3 className="mb-6 text-[22px] font-bold">{col.title}</h3>
              <ul className="flex flex-col gap-4">
                {col.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-3 text-[17px]"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  >
                    {col.good ? (
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                    ) : (
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-soft" />
                    )}
                    <span className={col.good ? '' : 'text-mist'}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* BANDEAU DÉFILANT */}
      <section aria-label="Pour qui" className="overflow-hidden py-10">
        <p className="mb-8 px-4 text-center font-mono text-[13px] tracking-[0.14em] text-mist uppercase">
          Pour toutes les entreprises qui ne peuvent pas toujours décrocher
        </p>
        <div
          className="flex -rotate-2 overflow-hidden py-2"
          style={{ maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)' }}
          aria-hidden="true"
        >
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 gap-3.5 pr-3.5" style={{ animation: 'marquee 36s linear infinite' }}>
              {sectors.map((s, i) => (
                <span
                  key={s}
                  className="flex items-center gap-3 rounded-[20px] border border-stroke bg-[rgba(30,38,110,.5)] px-6 py-4 text-[clamp(18px,2vw,24px)] font-semibold whitespace-nowrap"
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: ['#22d9c6', '#35c6f4', '#5b7bff', '#a45bff'][i % 4], boxShadow: '0 0 12px currentColor' }} />
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="sr-only">Hakily s’adresse aux TPE et PME : artisans, BTP, dépannage, services à domicile, cabinets, agences, commerces et indépendants.</p>
      </section>

      {/* FAQ */}
      <Section id="faq" contentClassName="max-w-3xl">
        <SectionHead
          kicker={
            <>
              <b>FAQ</b>
            </>
          }
          title="Questions fréquentes"
        />
        <FAQ />
      </Section>

      {/* RÉSERVATION */}
      <Section id="booking" contentClassName="max-w-4xl">
        <SectionHead
          kicker={
            <>
              <b>APPEL</b> DÉCOUVERTE
            </>
          }
          title={
            <>
              Réserve ton <span className="grad-text">appel découverte</span>
            </>
          }
          intro="30 minutes pour voir si Hakily correspond à ton activité, sans engagement."
        />
        <motion.div
          className="glass p-3 md:p-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
        >
          <CalendlyInlineWidget url="https://calendly.com/bourama-axyagroup/30min" className="mx-auto w-full overflow-hidden rounded-2xl" />
        </motion.div>
        <p className="mt-5 text-center font-mono text-[12px] tracking-[0.12em] text-mist uppercase">30 min · Gratuit · Sans engagement</p>
      </Section>

      <StickyCTA />
    </>
  )
}

export default VSL
