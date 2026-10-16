import { useCallback } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DualIdentity } from './components/DualIdentity'
import { ExpertiseStack } from './components/ExpertiseStack'
import { Projects } from './components/Projects'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  const scrollToContact = useCallback(() => {
    const contactElement = document.getElementById('contact')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/20 selection:text-emerald-300 relative overflow-x-hidden font-sans">
      {/* Ambient background grid and emerald glow */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-20" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-500/5 blur-[160px] pointer-events-none -z-10 rounded-full" />
      
      {/* Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content */}
      <main>
        <Hero onContactClick={scrollToContact} />
        <DualIdentity />
        <ExpertiseStack />
        <Projects />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
