import React from 'react'
import { ArrowRight, ShieldCheck, Cpu, Code2, Server, CheckCircle2, ChevronRight } from 'lucide-react'
import { METRICS } from '../data/content'

interface HeroProps {
  onContactClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="vision" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top announcement pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-300 text-xs font-medium tracking-wide shadow-emerald-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-300">Responsable Informatique & Tech Lead</span>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-zinc-100">
            L'art du <span className="emerald-gradient-text">code</span>.<br />
            La maîtrise du <span className="text-zinc-100">Système d'Information</span>.
          </h1>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl mx-auto">
            J’allie la passion du développement web moderne et la rigueur stratégique d’une direction informatique : architectures résilientes, gouvernance sécurisée, automatisation continue et leadership humain.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#realisations"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 shadow-emerald-glow hover:scale-[1.02]"
            >
              <span>Explorer mes réalisations</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-700/60 hover:border-emerald-500/40 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Échanger ensemble</span>
            </button>
          </div>
        </div>

        {/* Hero Interactive Showcase Card (Modern Architecture Dashboard Preview) */}
        <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
          <div className="relative rounded-2xl glass-card p-6 md:p-8 shadow-2xl border border-emerald-500/20">
            {/* Header of the card */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                <div className="w-3 h-3 rounded-full bg-zinc-600" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="ml-2 font-mono text-xs text-zinc-400">stefe.app // core-overview</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  SI Opérationnel (99.98%)
                </span>
                <span className="hidden sm:inline-block text-zinc-500">|</span>
                <span className="hidden sm:inline-block text-zinc-400">Cluster Cloud: Sécurisé</span>
              </div>
            </div>

            {/* Content of the card: Two balanced columns (Dev Craft & IT Management) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Dev Side */}
              <div className="p-5 rounded-xl bg-zinc-950/60 border border-emerald-500/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <span>Côté Craft & Codeuse</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">Modern Stack</span>
                </div>
                <div className="font-mono text-xs text-zinc-300 leading-relaxed bg-zinc-900/80 p-3 rounded-lg border border-zinc-800/80">
                  <span className="text-emerald-400 font-semibold">type</span> <span className="text-zinc-100">EngineeringStandards</span> = &#123;<br />
                  &nbsp;&nbsp;architecture: <span className="text-emerald-300">'Clean & Decoupled'</span>,<br />
                  &nbsp;&nbsp;typeSafety: <span className="text-emerald-300">'Strict TypeScript'</span>,<br />
                  &nbsp;&nbsp;performanceBudget: <span className="text-emerald-300">'&lt; 500ms TTFB'</span>,<br />
                  &nbsp;&nbsp;testingCoverage: <span className="text-emerald-400">&gt; 85%</span><br />
                  &#125;
                </div>
                <p className="mt-3 text-xs text-zinc-400 leading-normal">
                  Écriture de code propre, lisible et testé, pensé pour évoluer sans friction et soutenir la croissance des usages.
                </p>
              </div>

              {/* IT Management Side */}
              <div className="p-5 rounded-xl bg-zinc-950/60 border border-emerald-500/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                    <Server className="w-4 h-4 text-emerald-400" />
                    <span>Côté Direction SI</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500">Gouvernance 360°</span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs p-2 rounded bg-zinc-900/60 border border-zinc-800">
                    <span className="flex items-center gap-2 text-zinc-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Politique Zero-Trust & IAM
                    </span>
                    <span className="font-mono text-[11px] text-emerald-400 font-medium">Actif (100% MFA)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 rounded bg-zinc-900/60 border border-zinc-800">
                    <span className="flex items-center gap-2 text-zinc-300">
                      <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                      Plan Reprise d'Activité (PRA)
                    </span>
                    <span className="font-mono text-[11px] text-emerald-400 font-medium">Testé & Conforme</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2 rounded bg-zinc-900/60 border border-zinc-800">
                    <span className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Synergie Métier & Équipes
                    </span>
                    <span className="font-mono text-[11px] text-emerald-400 font-medium">Alignement continu</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-zinc-400 leading-normal">
                  Supervision d'infrastructures résilientes, sécurité proactive et dialogue fluide entre comités de direction et équipes techniques.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Banner */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl glass-card glass-card-hover border border-emerald-500/10 text-center flex flex-col justify-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tracking-tight">
                {metric.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-zinc-200">
                {metric.label}
              </div>
              <div className="mt-1 text-[11px] text-zinc-400">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
