import React from 'react'
import { ChevronDown } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-stone-900 dark:text-stone-50">
        Stefe
      </h1>

      {/* Sunset accent — le clin d'œil eighties */}
      <div className="mt-4">
        <span className="sunset-accent" />
      </div>

      <p className="mt-6 text-base sm:text-lg text-stone-400 dark:text-stone-500 font-medium tracking-wide">
        Responsable informatique & développeuse
      </p>

      {/* Scroll indicator */}
      <a
        href="#narrative"
        className="absolute bottom-10 text-stone-300 dark:text-stone-600 hover:text-teal-500 transition-colors"
        aria-label="Défiler"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  )
}
