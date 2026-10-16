import React from 'react'
import { Terminal, Shield, Layers, Users, Zap, Compass, CheckCircle } from 'lucide-react'

export const DualIdentity: React.FC = () => {
  return (
    <section id="dualite" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Double perspective</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            L'alliance rare entre le <span className="text-emerald-400">craft technique</span> et la <span className="text-zinc-300">stratégie SI</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Être responsable informatique tout en codant au quotidien permet de comprendre intimement les réalités techniques des équipes, d'anticiper les pièges d'architecture et de dialoguer d'égal à égal avec tous les acteurs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: La Codeuse / Tech Lead (Col 7) */}
          <div className="md:col-span-7 glass-card rounded-2xl p-7 md:p-8 relative overflow-hidden border border-emerald-500/20 glass-card-hover flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400">
                  01 // Craft & Code
                </span>
              </div>

              <h3 className="text-2xl font-bold text-zinc-100 mb-2">
                La Codeuse & Architecte Applicative
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Le code n'est pas un simple outil d'exécution, c'est une discipline d'ingénierie durable. Je privilégie la clarté, le typage strict, la modularité et l'expérience utilisateur.
              </p>

              <div className="space-y-3">
                {[
                  { title: 'Clean Architecture & Modularité', desc: 'Découplage strict de la logique métier pour faciliter la maintenance et les évolutions futures.' },
                  { title: 'Écosystème TypeScript & Web Moderne', desc: 'Typage rigoureux de bout en bout, de l’interface aux contrats d’API.' },
                  { title: 'Culture du Test & Refactoring continu', desc: 'Garantir la stabilité en production sans freiner le rythme d’innovation.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-950/40 border border-zinc-800/60">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-200">{item.title}</h4>
                      <p className="text-[12px] text-zinc-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span className="font-mono text-emerald-400">Stack: TypeScript • React • Node • SQL</span>
              <span className="text-zinc-500">Exigence & Pragmatisme</span>
            </div>
          </div>

          {/* Card 2: La Responsable Informatique (Col 5) */}
          <div className="md:col-span-5 glass-card rounded-2xl p-7 md:p-8 relative overflow-hidden border border-emerald-500/20 glass-card-hover flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400">
                  02 // Gouvernance SI
                </span>
              </div>

              <h3 className="text-2xl font-bold text-zinc-100 mb-2">
                La Responsable Informatique
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Piloter le Système d'Information avec une vision holistique : sécurité des données, continuité opérationnelle, budget et alignement avec la stratégie d'entreprise.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/60">
                  <span className="text-xs font-semibold text-emerald-300 block mb-1">Cybersécurité & Résilience</span>
                  <p className="text-[12px] text-zinc-400">Défense en profondeur, plans de reprise d’activité (PRA) viables et durcissement des accès.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/60">
                  <span className="text-xs font-semibold text-emerald-300 block mb-1">Stratégie & Optimisation Budgétaire</span>
                  <p className="text-[12px] text-zinc-400">Rationalisation des contrats logiciels, choix FinOps et arbitrage des priorités d'investissement.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-950/40 border border-zinc-800/60">
                  <span className="text-xs font-semibold text-emerald-300 block mb-1">Gouvernance & Conformité</span>
                  <p className="text-[12px] text-zinc-400">Respect des normes, protection des données sensibles (RGPD) et cartographie des risques.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span className="font-mono text-emerald-400">Disponibilité: 99.98%</span>
              <span className="text-zinc-500">Vision 360°</span>
            </div>
          </div>

          {/* Card 3: Cloud, Infra & DevOps (Col 4) */}
          <div className="md:col-span-4 glass-card rounded-2xl p-6 relative overflow-hidden border border-emerald-500/10 glass-card-hover">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-zinc-100 mb-2">Cloud, Infra & Automatisation</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Standardisation des environnements, conteneurisation Docker, pipelines CI/CD fluides et réduction drastique des tâches manuelles répétitives.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">AWS / Azure</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Docker</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">CI/CD</span>
            </div>
          </div>

          {/* Card 4: Leadership & Équipe (Col 4) */}
          <div className="md:col-span-4 glass-card rounded-2xl p-6 relative overflow-hidden border border-emerald-500/10 glass-card-hover">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-zinc-100 mb-2">Leadership & Accompagnement</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Management bienveillant et fédérateur. Rapprocher les développeurs et les directions métiers pour créer une culture de la confiance et du résultat.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Agile / Scrum</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Mentoring</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Pédagogie</span>
            </div>
          </div>

          {/* Card 5: Philosophie & Pragmatisme (Col 4) */}
          <div className="md:col-span-4 glass-card rounded-2xl p-6 relative overflow-hidden border border-emerald-500/10 glass-card-hover">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-zinc-100 mb-2">Pragmatisme & Valeur Métier</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Pas de sur-ingénierie inutile : choisir les technologies les plus adaptées pour délivrer vite, bien et garantir la pérennité sur le long terme.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">ROI technique</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Simplicité</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Efficience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
