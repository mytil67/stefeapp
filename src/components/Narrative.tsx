import React from 'react'
import { motion } from 'framer-motion'
import { NARRATIVE } from '../data/content'

export const Narrative: React.FC = () => {
  return (
    <section id="narrative" className="py-24 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {NARRATIVE.map((paragraph, i) => (
          <motion.p
            key={i}
            className="text-lg sm:text-xl leading-relaxed text-stone-600 dark:text-stone-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  )
}
