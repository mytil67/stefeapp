import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDownRight, Mail } from 'lucide-react'
import { CityScene } from './CityScene'

interface HeroProps { selectedMonth: number }

export const Hero = ({ selectedMonth }: HeroProps) => {
  const { scrollY } = useScroll()
  const copyY = useTransform(scrollY, [0, 700], [0, -35])

  return (
  <section className="hero-wrap" aria-labelledby="hero-title">
    <div className="hero">
      <CityScene selectedMonth={selectedMonth} />
      <div className="hero-content">
      <motion.div
        className="hero-text"
        style={{ y: copyY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        <h1 id="hero-title">Stefe</h1>
        <p className="hero-vibe">Responsable informatique · Vibe codeuse</p>
      </motion.div>
      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="hero-meta hero-meta--tagline">
          <span>STRASBOURG · FR</span>
          <p className="hero-tagline">Le numérique, simplement utile.</p>
        </div>
        <div className="hero-center-actions">
          <a href="#realisations" className="hero-scroll" aria-label="Découvrir les réalisations">
            <ArrowDownRight aria-hidden="true" />
          </a>
          <a href="mailto:stefe@stefe.app" className="hero-contact-cta">
            <Mail aria-hidden="true" /> Me contacter
          </a>
        </div>
        <div className="hero-meta hero-meta--intro">
          <span>CE QUE JE FAIS</span>
          <p className="hero-intro">
            Je transforme les besoins du terrain en produits numériques clairs,
            fiables et agréables à utiliser.
          </p>
        </div>
      </motion.div>
      </div>
    </div>
  </section>
  )
}
