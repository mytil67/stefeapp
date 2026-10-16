import React from 'react'
import { Terminal, Shield, Layers, Users, Zap, Compass } from 'lucide-react'

export const DualIdentity: React.FC = () => {
  return (
    <section id="dualite" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Deux casquettes, une vision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight">
            Je code. Je pilote. Je fais{' '}
            <span className="teal-gradient-text">le lien</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-500 dark:text-stone-400 leading-relaxed">
            Comprendre le terrain technique quand on prend des décisions stratégiques — c'est ce qui change tout.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: La Codeuse / Tech Lead (Col 7) */}
          <div className="md:col-span-7 card card-hover rounded-2xl p-7 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-400 font-medium">
                  Craft & Code
                </span>
              </div>

              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-2">
                Codeuse & Architecte
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                Le code, pour moi, c'est un matériau de construction. Je l'écris propre, typé, testable — parce qu'un système qui dure, ça commence par des fondations solides.
              </p>

              <div className="space-y-3">
                {[
                  { title: 'Architecture claire & modulaire', desc: 'Découpler la logique métier pour que les évolutions ne cassent rien.' },
                  { title: 'TypeScript de bout en bout', desc: 'Du front au back, un typage rigoureux qui attrape les bugs avant la prod.' },
                  { title: 'Tests & refactoring continu', desc: 'La stabilité en production, sans freiner le rythme d\'innovation.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-2" />
                    <div>
                      <h4 className="text-xs font-semibold text-stone-700 dark:text-stone-200">{item.title}</h4>
                      <p className="text-[12px] text-stone-500 dark:text-stone-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-200 dark:border-stone-700 flex items-center justify-between text-xs text-stone-400 dark:text-stone-500">
              <span className="text-teal-600 dark:text-teal-400 font-medium">TypeScript · React · Node · SQL</span>
              <span>Exigence & Pragmatisme</span>
            </div>
          </div>

          {/* Card 2: La Responsable Informatique (Col 5) */}
          <div className="md:col-span-5 card card-hover rounded-2xl p-7 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-400 font-medium">
                  Gouvernance SI
                </span>
              </div>

              <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-50 mb-2">
                Pilote du Système d'Information
              </h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed mb-6">
                Vision à 360° : sécurité, continuité, budget et alignement stratégique. Je traduis les enjeux business en décisions techniques concrètes.
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                  <span className="text-xs font-semibold text-teal-700 dark:text-teal-300 block mb-1">Cybersécurité & Résilience</span>
                  <p className="text-[12px] text-stone-500 dark:text-stone-400">Défense en profondeur, plans de reprise viables et accès durcis.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                  <span className="text-xs font-semibold text-teal-700 dark:text-teal-300 block mb-1">Stratégie & Budget</span>
                  <p className="text-[12px] text-stone-500 dark:text-stone-400">Rationalisation des contrats, choix FinOps et arbitrage des investissements.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                  <span className="text-xs font-semibold text-teal-700 dark:text-teal-300 block mb-1">Gouvernance & Conformité</span>
                  <p className="text-[12px] text-stone-500 dark:text-stone-400">RGPD, cartographie des risques et protection des données sensibles.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-200 dark:border-stone-700 flex items-center justify-between text-xs text-stone-400 dark:text-stone-500">
              <span className="text-teal-600 dark:text-teal-400 font-medium">Sécurité · Stratégie · Résilience</span>
              <span>Vision 360°</span>
            </div>
          </div>

          {/* Card 3: Cloud, Infra & DevOps (Col 4) */}
          <div className="md:col-span-4 card card-hover rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-stone-900 dark:text-stone-50 mb-2">Cloud & Automatisation</h4>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              Environnements standardisés, conteneurs Docker, pipelines CI/CD — et beaucoup moins de tâches manuelles.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {['AWS / Azure', 'Docker', 'CI/CD'].map((tag) => (
                <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Leadership & Équipe (Col 4) */}
          <div className="md:col-span-4 card card-hover rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-stone-900 dark:text-stone-50 mb-2">Leadership & Accompagnement</h4>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              Rapprocher les devs et les métiers, instaurer la confiance, faire grandir les équipes. Le management, c'est aussi du craft.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {['Agile / Scrum', 'Mentoring', 'Pédagogie'].map((tag) => (
                <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 5: Pragmatisme (Col 4) */}
          <div className="md:col-span-4 card card-hover rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-stone-900 dark:text-stone-50 mb-2">Pragmatisme & Valeur</h4>
            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
              Pas de sur-ingénierie. Les bonnes technos au bon moment, pour livrer vite et bien — et que ça tienne dans le temps.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {['ROI technique', 'Simplicité', 'Efficience'].map((tag) => (
                <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
