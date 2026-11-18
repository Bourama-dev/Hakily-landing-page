import { useState } from 'react'
import { motion } from 'framer-motion'

export interface FAQItem {
  question: string
  answer: string
}

const defaultItems: FAQItem[] = [
  {
    question: "C'est juste un répondeur amélioré ?",
    answer:
      "Non. Un répondeur enregistre un message que tu rappelles trop tard. L'assistant dialogue en direct, qualifie l'urgence et t'envoie un SMS récapitulatif.",
  },
  {
    question: "Mes clients vont raccrocher s'ils tombent sur un robot ?",
    answer:
      "C'est l'inverse de raccrocher dans le vide. La meilleure preuve, c'est de tester l'assistant toi-même juste au-dessus.",
  },
  {
    question: "L'IA ne comprend pas les spécificités de mon métier ?",
    answer:
      "La trame est paramétrée avec toi au déploiement : vocabulaire, questions à poser, cas fréquents, zone et horaires d'intervention.",
  },
  {
    question: "Et si l'assistant se trompe sur une urgence ?",
    answer: 'Il collecte et transmet, il ne décide pas à ta place. Les urgences te sont transférées selon tes règles.',
  },
  {
    question: "Je n'ai pas assez d'appels pour ça ?",
    answer: 'Les minutes incluses sont définies selon ton volume d’appels observé, pas imposées par un forfait standard.',
  },
  {
    question: 'Comment je sais que ça vaut le prix ?',
    answer: 'Le tarif est établi avec toi au cadrage, selon ton activité et tes volumes, sans durée minimale d’engagement.',
  },
]

interface FAQProps {
  items?: FAQItem[]
}

function FAQ({ items = defaultItems }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const panelId = `faq-panel-${i}`

        return (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`rounded-[20px] border transition-colors duration-300 ${
              isOpen ? 'border-stroke-2 bg-[rgba(30,38,110,.5)]' : 'border-stroke bg-[rgba(24,30,92,.35)]'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
            >
              <span className="flex items-baseline gap-4">
                <span className="hidden font-mono text-[11px] tracking-[0.12em] text-sky uppercase sm:inline">
                  N°{String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[clamp(17px,1.8vw,20px)] font-semibold">{item.question}</span>
              </span>
              <span
                aria-hidden="true"
                className={`relative h-9 w-9 shrink-0 rounded-full transition-all duration-500 ${
                  isOpen ? 'rotate-180 bg-gradient-to-br from-blue to-cyan' : 'bg-white/10'
                }`}
              >
                <span className="absolute top-1/2 left-1/2 h-0.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded bg-white" />
                <span
                  className={`absolute top-1/2 left-1/2 h-0.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded bg-white transition-transform duration-500 ${
                    isOpen ? '' : 'rotate-90'
                  }`}
                />
              </span>
            </button>
            <div
              id={panelId}
              className="grid transition-[grid-template-rows] duration-500 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[17px] leading-relaxed text-mist sm:pl-[88px]">{item.answer}</p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default FAQ
