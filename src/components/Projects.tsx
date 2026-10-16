import React from 'react'
import { PROJECTS, Project } from '../data/content'
import { FolderGit2, Sparkles } from 'lucide-react'

export const Projects: React.FC = () => {
  return (
    <section id="realisations" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Réalisations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight">
            Des projets concrets, du code à la stratégie
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-500 dark:text-stone-400">
            Quelques missions qui illustrent ma double casquette — chaque fois, du concret et de l'impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project: Project, idx: number) => (
            <div
              key={idx}
              className="card card-hover rounded-2xl p-7 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300">
                    {project.badge}
                  </span>
                  <span className="text-xs text-stone-400 dark:text-stone-500">
                    Rôle : <span className="text-stone-600 dark:text-stone-300 font-medium">{project.role}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-50 mb-3">
                  {project.title}
                </h3>

                <p className="text-sm italic text-teal-700 dark:text-teal-400 mb-4 leading-relaxed">
                  "{project.highlight}"
                </p>

                <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-700 flex flex-wrap items-center gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl card border border-teal-200 dark:border-teal-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-900 dark:text-stone-50">Prête pour de nouvelles aventures</h4>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                Audit SI, refonte d'architecture, transition cloud ou accompagnement d'équipe — parlons-en.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-colors shadow-sm"
          >
            Discuter de votre projet
          </a>
        </div>
      </div>
    </section>
  )
}
