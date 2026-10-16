import { useCallback } from 'react'
import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DualIdentity } from './components/DualIdentity'
import { ExpertiseStack } from './components/ExpertiseStack'
import { Projects } from './components/Projects'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()

  const scrollToContact = useCallback(() => {
    const contactElement = document.getElementById('contact')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans">
      <Navbar onContactClick={scrollToContact} theme={theme} onToggleTheme={toggle} />

      <main>
        <Hero onContactClick={scrollToContact} />
        <DualIdentity />
        <ExpertiseStack />
        <Projects />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
