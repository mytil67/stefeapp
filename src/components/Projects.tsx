import React from 'react'
import { PROJECTS, Project } from '../data/content'
import { FolderGit2, TrendingUp, Sparkles } from 'lucide-react'

export const Projects: React.FC = () => {
  return (
    <section id="realisations" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Réalisations & Chantiers Clés</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Des résultats mesurables, du code à l'infrastructure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Quelques exemples concrets de projets menés de bout en bout, combinant expertise de développement et pilotage de Système d'Information.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project: Project, idx: number) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 md:p-8 border border-emerald-500/15 glass-card-hover flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    Rôle : <span className="text-zinc-200">{project.role}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-2">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 mb-4">
                  <TrendingUp className="w-4 h-4 shrink-0" />
                  <span>{project.impact}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 mb-6">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-base sm:text-lg font-mono font-bold text-emerald-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-zinc-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-card border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-zinc-100">Prête pour relever de nouveaux défis</h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Audit de SI, refonte d'architecture logicielle, pilotage de transition cloud ou accompagnement d'équipe technique.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-emerald-sm"
          >
            Discuter de votre projet
          </a>
        </div>
      </div>
    </section>
  )
}
