import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AppBar } from './components/AppBar'
import { AppDetail } from './components/AppDetail'
import { Contact } from './components/Contact'

export default function App() {
  const { theme, toggle } = useTheme()
  const [selectedApp, setSelectedApp] = useState<string | null>(null)

  const handleSelect = (id: string) => {
    setSelectedApp((prev) => (prev === id ? null : id))
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans flex flex-col">
      <Navbar theme={theme} onToggleTheme={toggle} />

      <main className="flex-1 flex flex-col items-center justify-center py-20 sm:py-24 gap-8 sm:gap-10">
        <Hero />
        <AppBar selectedId={selectedApp} onSelect={handleSelect} />
        <AppDetail selectedId={selectedApp} onClose={() => setSelectedApp(null)} />
        <Contact />
      </main>
    </div>
  )
}
