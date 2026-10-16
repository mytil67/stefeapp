import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-stone-900/85 backdrop-blur-md border-b border-stone-200 dark:border-stone-700 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="font-bold text-stone-900 dark:text-stone-50 tracking-tight text-lg hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
          Stefe<span className="text-teal-600 dark:text-teal-400">.</span>
        </a>

        <button
          onClick={onToggleTheme}
          className="p-2 rounded-lg text-stone-400 dark:text-stone-500 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all cursor-pointer"
          aria-label="Basculer le thème"
        >
          {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
      </div>
    </header>
  )
}
