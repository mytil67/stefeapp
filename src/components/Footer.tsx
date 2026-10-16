import React from 'react'
import { ArrowUp, Heart } from 'lucide-react'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950 text-zinc-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">
            S_
          </div>
          <div>
            <span className="text-zinc-200 font-bold tracking-tight">
              stefe<span className="text-emerald-400">.app</span>
            </span>
            <span className="text-zinc-500 ml-2">
              — Responsable Informatique & Tech Lead
            </span>
          </div>
        </div>

        {/* Center message */}
        <div className="flex items-center gap-1.5 text-zinc-500">
          <span>Conçu avec rigueur &</span>
          <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/20" />
          <span>pour un web moderne & durable</span>
        </div>

        {/* Right back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-pointer"
        >
          <span>Haut de page</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  )
}
