import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Narrative } from './components/Narrative'
import { Showcase } from './components/Showcase'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans">
      <Navbar theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero />
        <Narrative />
        <Showcase />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
