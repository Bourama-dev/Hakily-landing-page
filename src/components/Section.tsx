import type { ReactNode } from 'react'
import CornerMarks from './CornerMarks'

interface SectionProps {
  id?: string
  className?: string
  contentClassName?: string
  children: ReactNode
}

function Section({ id, className = '', contentClassName = 'max-w-[720px]', children }: SectionProps) {
  return (
    <section id={id} className={`relative px-6 py-16 md:py-24 ${className}`}>
      <CornerMarks />
      <div className={`relative mx-auto ${contentClassName}`}>{children}</div>
    </section>
  )
}

export default Section
