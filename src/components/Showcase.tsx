import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS, Project } from '../data/content'
import { ArrowUpRight } from 'lucide-react'

export const Showcase: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50 text-center mb-14"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ce que je construis
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project: Project, idx: number) => {
            const inner = (
              <>
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
                {/* Sunset line on hover — hidden by default */}
                <div className="mt-4 h-[2px] w-0 group-hover:w-12 rounded-full transition-all duration-500 ease-out" style={{ background: 'linear-gradient(135deg, #F4A261, #E76F51)' }} />
              </>
            )

            const cardClasses = "group card rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-teal-200 dark:hover:border-teal-700"

            const motionProps = {
              initial: { opacity: 0, y: 20 } as const,
              whileInView: { opacity: 1, y: 0 } as const,
              viewport: { once: true, margin: '-30px' } as const,
              transition: { duration: 0.4, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] as const },
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
