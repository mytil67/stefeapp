import React from 'react'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  onContactClick: () => void
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="vision" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top announcement pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 text-xs font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span>Responsable Informatique & Dev passionnée</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-stone-900 dark:text-stone-50">
            Je construis des systèmes qui{' '}
            <span className="teal-gradient-text">tiennent la route</span>
            <br />
            <span className="text-stone-500 dark:text-stone-400 text-3xl sm:text-5xl md:text-5xl font-bold">
              — et les équipes qui les font tourner.
            </span>
          </h1>

          {/* Sunset accent — the subtle 80s nod */}
          <div className="flex justify-center mt-6">
            <span className="sunset-accent" />
          </div>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-stone-500 dark:text-stone-400 font-normal leading-relaxed max-w-3xl mx-auto">
            Développeuse et responsable SI, je fais le pont entre le code et la stratégie.
            Mon truc : des architectures solides, des équipes autonomes et des solutions qui durent.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#realisations"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02]"
            >
              <span>Voir mes réalisations</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-stone-700 dark:text-stone-200 bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-600 hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-200 hover:scale-[1.02] cursor-pointer shadow-sm"
            >
              <span>Échanger ensemble</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
