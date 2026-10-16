import React, { useState } from 'react'
import { SKILLS, Skill } from '../data/content'
import { Sparkles, Code, Server, ShieldCheck, Users2, Search } from 'lucide-react'

export const ExpertiseStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'dev' | 'infra' | 'governance' | 'management'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: 'Toutes', icon: Sparkles },
    { id: 'dev', label: 'Développement & Craft', icon: Code },
    { id: 'infra', label: 'Cloud & Infrastructure', icon: Server },
    { id: 'governance', label: 'Sécurité & Gouvernance SI', icon: ShieldCheck },
    { id: 'management', label: 'Management & Méthodes', icon: Users2 },
  ] as const

  const filteredSkills = SKILLS.filter((skill: Skill) => {
    const matchesTab = activeTab === 'all' || skill.category === activeTab
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <section id="expertises" className="py-24 relative bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Arsenal Technique</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Des fondations solides, de l'interface au Système d'Information
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Une boîte à outils forgée par la pratique quotidienne du développement et la responsabilité de systèmes d'information d'entreprise.
          </p>
        </div>

        {/* Filters & Search bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800/80 overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = activeTab === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-emerald-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-zinc-500'}`} />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Filtrer une compétence..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-900/90 border border-zinc-800/80 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl glass-card glass-card-hover border transition-all relative ${
                skill.highlight ? 'border-emerald-500/30 bg-emerald-950/10' : 'border-zinc-800/80'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                  {skill.name}
                  {skill.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  )}
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-emerald-400 font-medium shrink-0">
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-sm text-zinc-500">
            Aucune compétence ne correspond à votre recherche.
          </div>
        )}
      </div>
    </section>
  )
}
