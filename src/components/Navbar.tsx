import React, { useState, useEffect } from 'react'
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react'

interface NavbarProps {
  onContactClick: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Vision & Profil', href: '#vision' },
    { label: 'La Double Casquette', href: '#dualite' },
    { label: 'Expertises', href: '#expertises' },
    { label: 'Réalisations', href: '#realisations' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/85 backdrop-blur-md border-b border-emerald-500/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-400 transition-all duration-300 shadow-emerald-sm">
            <span className="font-mono font-bold text-sm tracking-tighter">S_</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-zinc-100 tracking-tight text-base group-hover:text-emerald-300 transition-colors">
              stefe<span className="text-emerald-400">.app</span>
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Responsable SI & Codeuse</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-300 transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onContactClick}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 hover:border-emerald-400 hover:text-emerald-200 transition-all duration-300 shadow-emerald-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
            <span>Prendre contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-emerald-400 transition-colors"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-emerald-500/20 px-6 py-5 backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-emerald-300 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onContactClick()
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-emerald-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Prendre contact</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
