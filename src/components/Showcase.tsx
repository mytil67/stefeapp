import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS, Project } from '../data/content'
import { ArrowUpRight } from 'lucide-react'

// Assign a color accent to each project for variety
const accents = [
  'from-teal-400 to-teal-600',
  'from-sunset-light to-[#E76F51]',
  'from-teal-500 to-teal-300',
  'from-[#E76F51] to-sunset-light',
  'from-teal-300 to-teal-500',
  'from-sunset-light to-teal-400',
  'from-teal-600 to-teal-400',
  'from-[#E76F51] to-sunset-light',
  'from-teal-400 to-sunset-light',
]

export const Showcase: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-stone-900 dark:text-stone-50">Ce que je </span>
          <span className="bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent">construis</span>
        </motion.h2>

        <motion.p
          className="text-center text-stone-400 dark:text-stone-500 mb-14 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Applications métier, plateformes web & expérimentations créatives
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project: Project, idx: number) => {
            const accent = accents[idx % accents.length]

            const inner = (
              <>
                {/* Top color bar */}
                <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${accent} mb-4 group-hover:w-16 transition-all duration-500`} />

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50">
                    {project.name}
                  </h3>
                  {project.url && (
                    <ArrowUpRight className="w-4 h-4 text-teal-500 opacity-0 group-hover:opacity-100 -translate-y-0.5 translate-x-0.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  )}
                </div>
                <p className="mt-2 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                  {project.tagline}
                </p>
              </>
            )

            const cardClasses = "group card rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-teal-300 dark:hover:border-teal-600"

            const motionProps = {
              initial: { opacity: 0, y: 25 } as const,
              whileInView: { opacity: 1, y: 0 } as const,
              viewport: { once: true, margin: '-30px' } as const,
              transition: { duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
            }

            if (project.url) {
              return (
                <motion.a
                  key={idx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClasses} block`}
                  {...motionProps}
                >
                  {inner}
                </motion.a>
              )
            }

            return (
              <motion.div key={idx} className={cardClasses} {...motionProps}>
                {inner}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
