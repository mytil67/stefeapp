import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AppBar } from './components/AppBar'
import { AppDetail } from './components/AppDetail'
import { Contact } from './components/Contact'
import { Experiments } from './components/Experiments'
import { AMBIENCES } from './data/ambiences'

export default function App() {
  const { theme, toggle } = useTheme()
  const [selectedApp, setSelectedApp] = useState<string | null>(null)
  const currentMonth = new Date().getMonth()
  const [selectedMonth, setSelectedMonth] = useState(currentMonth)
  const ambience = AMBIENCES[selectedMonth]

  return (
    <div className="site-shell" data-month={selectedMonth} data-season={ambience.season}>
      <Navbar
        theme={theme}
        onToggleTheme={toggle}
        currentMonth={currentMonth}
        selectedMonth={selectedMonth}
        onSelectMonth={setSelectedMonth}
      />
      <main>
        <Hero selectedMonth={selectedMonth} />
        <section className="departures-section" id="realisations" aria-labelledby="work-title">
          <div className="departures-heading">
            <p className="departures-kicker">STRASBOURG · QUAI NUMÉRIQUE</p>
            <h2 id="work-title">Destinations numériques</h2>
          </div>
          <AppBar selectedId={selectedApp} onSelect={setSelectedApp} />
        </section>
        <Experiments />
        <Contact />
      </main>
      <AppDetail selectedId={selectedApp} onClose={() => setSelectedApp(null)} />
    </div>
  )
}
