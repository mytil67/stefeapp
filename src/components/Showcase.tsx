import React from 'react'
import { PROJECTS, Project } from '../data/content'
import { ArrowUpRight } from 'lucide-react'

export const Showcase: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-50 text-center mb-12">
          Ce que je construis
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project: Project, idx: number) => {
            const inner = (
              <>
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-50 flex items-center gap-2">
                  {project.name}
                  {project.url && (
                    <ArrowUpRight className="w-3.5 h-3.5 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </h3>
                <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                  {project.tagline}
                </p>
              </>
            )

            if (project.url) {
              return (
                <a
                  key={idx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card card-hover rounded-xl p-5 block"
                >
                  {inner}
                </a>
              )
            }

            return (
              <div key={idx} className="card rounded-xl p-5">
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
