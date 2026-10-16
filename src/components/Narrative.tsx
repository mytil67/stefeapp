import React from 'react'
import { NARRATIVE } from '../data/content'

export const Narrative: React.FC = () => {
  return (
    <section id="narrative" className="py-24 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {NARRATIVE.map((paragraph, i) => (
          <p
            key={i}
            className="text-lg sm:text-xl leading-relaxed text-stone-600 dark:text-stone-300"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
