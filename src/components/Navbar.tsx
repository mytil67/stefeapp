import { useEffect, useState } from 'react'
import { ChevronsUp, Compass, Mail, Moon, Pencil, ShieldCheck, Sun } from 'lucide-react'
import { AmbiencePicker } from './AmbiencePicker'

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  currentMonth: number
  selectedMonth: number
  onSelectMonth: (month: number) => void
  onToggleEdit: () => void
  editMode: boolean
  onOpenContact: () => void
}

export const Navbar = ({ theme, onToggleTheme, currentMonth, selectedMonth, onSelectMonth, onToggleEdit, editMode, onOpenContact }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <>
      <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="topbar-brand" aria-label="Stefe — Accueil">
          stefe<span className="topbar-brand__dot">.</span>
        </a>
        <nav className="topbar-right" aria-label="Navigation principale">
          <a href="#realisations" className="topbar-link">Mes projets</a>
          <a href="#experiences" className="topbar-link">NoDrive</a>
          <button type="button" className="topbar-link" onClick={onOpenContact}>Contact</button>
          <AmbiencePicker currentMonth={currentMonth} selectedMonth={selectedMonth} onSelect={onSelectMonth} />
          <button onClick={onToggleTheme} aria-label="Basculer le thème" className="theme-toggle">
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
          <button onClick={onToggleEdit} aria-label="Mode édition" className={`theme-toggle ${editMode ? 'is-edit-active' : ''}`} title="Gérer les captures">
            <Pencil />
          </button>
        </nav>
      </header>

      {/* 2026 Mobile Bottom Thumb-Zone Dock */}
      <nav className="mobile-dock" aria-label="Navigation mobile rapide">
        <a href="#realisations" className="mobile-dock__item">
          <Compass aria-hidden="true" />
          <span>Projets</span>
        </a>
        <a href="#experiences" className="mobile-dock__item">
          <ShieldCheck aria-hidden="true" />
          <span>NoDrive</span>
        </a>
        <button type="button" className="mobile-dock__item" onClick={onOpenContact}>
          <Mail aria-hidden="true" />
          <span>Contact</span>
        </button>
        {scrolled && (
          <button
            type="button"
            className="mobile-dock__item mobile-dock__item--top"
            aria-label="Remonter en haut de la page"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ChevronsUp aria-hidden="true" />
            <span>Haut</span>
          </button>
        )}
      </nav>

      <button
        type="button"
        className={`back-to-top ${scrolled ? 'is-visible' : ''}`}
        aria-label="Remonter en haut de la page"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronsUp aria-hidden="true" />
        <span>Haut</span>
      </button>
    </>
  )
}
