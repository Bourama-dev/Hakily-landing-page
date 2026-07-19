import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const items: FAQItem[] = [
  {
    question: "C'est juste un répondeur amélioré ?",
    answer:
      "Non. Un répondeur enregistre un message que tu rappelles trop tard. L'assistant dialogue en direct, qualifie l'urgence et t'envoie un SMS récapitulatif.",
  },
  {
    question: 'Mes clients vont raccrocher s\'ils tombent sur un robot ?',
    answer:
      "C'est l'inverse de raccrocher dans le vide. La meilleure preuve, c'est de tester l'assistant toi-même juste au-dessus.",
  },
  {
    question: "L'IA ne comprend pas les spécificités de mon métier ?",
    answer:
      'La trame est paramétrée avec toi au déploiement : vocabulaire, questions à poser, cas fréquents, zone d\'intervention.',
  },
  {
    question: "Et si l'assistant se trompe sur une urgence ?",
    answer: 'Il collecte et transmet, il ne décide pas à ta place. Les urgences te sont transférées selon tes règles.',
  },
  {
    question: "Je n'ai pas assez d'appels pour ça ?",
    answer: "Quand le volume est faible, chaque appel compte double. Un chantier raté, c'est peut-être celui de la semaine.",
  },
  {
    question: 'Comment je sais que ça vaut le prix ?',
    answer: 'Un ou deux appels rattrapés dans le mois couvrent largement le forfait mensuel.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        const rotation = i % 2 === 0 ? -0.6 : 0.6

        return (
          <div
            key={item.question}
            style={{ rotate: `${rotation}deg` }}
            className="relative bg-ticket-paper text-ticket-ink shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
          >
            <span className="absolute top-2 right-3 font-mono text-[10px] uppercase tracking-wide text-ticket-ink/50">
              Ticket N°{String(i + 1).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base uppercase tracking-wide md:text-lg"
            >
              <span>{item.question}</span>
              <span aria-hidden="true" className="shrink-0 font-mono text-signal-orange">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div
                  className="px-6 pb-6 font-body text-sm leading-relaxed transition-[clip-path] duration-500 ease-in-out"
                  style={{ clipPath: isOpen ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)' }}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FAQ
