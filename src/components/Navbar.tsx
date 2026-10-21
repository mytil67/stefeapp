import { useEffect, useState } from 'react'
import { ChevronsUp, Moon, Sun } from 'lucide-react'
import { AmbiencePicker } from './AmbiencePicker'

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  currentMonth: number
  selectedMonth: number
  onSelectMonth: (month: number) => void
}

export const Navbar = ({ theme, onToggleTheme, currentMonth, selectedMonth, onSelectMonth }: NavbarProps) => {
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
    <nav className="topbar-right">
      <a href="#realisations">Projets</a>
      <a href="#experiences">NoDrive</a>
      <a href="#contact">Contact</a>
      <AmbiencePicker currentMonth={currentMonth} selectedMonth={selectedMonth} onSelect={onSelectMonth} />
      <button onClick={onToggleTheme} aria-label="Basculer le thème" className="theme-toggle">
        {theme === 'light' ? <Moon /> : <Sun />}
      </button>
    </nav>
  </header>
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
