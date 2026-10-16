import React from 'react'
import { ArrowUp, Heart } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 text-stone-500 dark:text-stone-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xs font-bold">
            S.
          </div>
          <div>
            <span className="text-stone-700 dark:text-stone-200 font-bold tracking-tight">
              stefe<span className="text-teal-600 dark:text-teal-400">.app</span>
            </span>
            <span className="text-stone-400 dark:text-stone-500 ml-2">
              — Responsable SI & Dev
            </span>
          </div>
        </div>

        {/* Center message */}
        <div className="flex items-center gap-1.5 text-stone-400 dark:text-stone-500">
          <span>Conçu avec rigueur &</span>
          <Heart className="w-3.5 h-3.5 text-teal-500 fill-teal-500/20" />
          <span>pour un web moderne & durable</span>
        </div>

        {/* Right back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-300 dark:hover:border-teal-600 transition-all cursor-pointer"
        >
          <span>Haut de page</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  )
}
