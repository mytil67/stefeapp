import { useCallback, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { useEditMode } from './hooks/useEditMode'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AppBar } from './components/AppBar'
import { AppDetail } from './components/AppDetail'
import { Contact } from './components/Contact'
import { Experiments } from './components/Experiments'
import { EditPanel } from './components/EditPanel'
import { ContactForm } from './components/ContactForm'
import { AMBIENCES } from './data/ambiences'

export default function App() {
  const { theme, toggle } = useTheme()
  const { editMode } = useEditMode()
  const [selectedApp, setSelectedApp] = useState<string | null>(null)
  const [showEditPanel, setShowEditPanel] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const currentMonth = new Date().getMonth()
  const [selectedMonth, setSelectedMonth] = useState(currentMonth)
  const ambience = AMBIENCES[selectedMonth]
  const openContact = useCallback(() => setShowContact(true), [])

  return (
    <div className="site-shell" data-month={selectedMonth} data-season={ambience.season}>
      <Navbar
        theme={theme}
        onToggleTheme={toggle}
        currentMonth={currentMonth}
        selectedMonth={selectedMonth}
        onSelectMonth={setSelectedMonth}
        onToggleEdit={() => setShowEditPanel((v) => !v)}
        editMode={editMode}
        onOpenContact={openContact}
      />
      <main>
        <Hero selectedMonth={selectedMonth} onSelectProject={setSelectedApp} onOpenContact={openContact} />
        <section className="departures-section" id="realisations" aria-labelledby="work-title">
          <div className="departures-heading">
            <p className="departures-kicker">DESIGN, DÉVELOPPEMENT & EXPÉRIMENTATIONS</p>
            <h2 id="work-title">Mes réalisations<span>Des idées qui prennent vie.</span></h2>
            <p className="projects-intro">Applications utiles, outils métier et explorations graphiques : découvrez ce que je conçois et développe.</p>
          </div>
          <AppBar selectedId={selectedApp} onSelect={setSelectedApp} />
        </section>
        <Experiments />
        <Contact onOpenContact={openContact} />
      </main>
      <AppDetail selectedId={selectedApp} onClose={() => setSelectedApp(null)} />
      {showEditPanel && <EditPanel />}
      <ContactForm open={showContact} onClose={() => setShowContact(false)} />
    </div>
  )
}
