import React from 'react'
import { motion } from 'framer-motion'
import { NARRATIVE } from '../data/content'

export const Narrative: React.FC = () => {
  return (
    <section id="narrative" className="py-24 px-4 relative">
      {/* Decorative side accent */}
      <div className="absolute left-4 sm:left-8 md:left-1/2 md:-translate-x-[340px] top-24 bottom-24 w-[3px] rounded-full bg-gradient-to-b from-teal-400/0 via-teal-400/40 to-sunset-light/40 dark:via-teal-500/30 dark:to-sunset-light/30 hidden md:block" />

      <div className="max-w-2xl mx-auto space-y-8">
        {NARRATIVE.map((paragraph, i) => (
          <motion.p
            key={i}
            className="text-lg sm:text-xl leading-relaxed text-stone-600 dark:text-stone-300"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {i === 0 && <span className="text-teal-600 dark:text-teal-400 font-semibold">Je construis des outils qui simplifient le quotidien.</span>}
            {i === 0 ? ` ${paragraph.slice(paragraph.indexOf('.') + 2)}` : paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  )
}
