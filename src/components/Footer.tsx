import React from 'react'
import { Heart } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-xs text-stone-400 dark:text-stone-500">
      <div className="flex items-center justify-center gap-1.5">
        <span>stefe.app</span>
        <Heart className="w-3 h-3 text-teal-500 fill-teal-500/20" />
      </div>
    </footer>
  )
}
