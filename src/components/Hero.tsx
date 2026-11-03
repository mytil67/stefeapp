import { ArrowDown, ArrowUpRight, Code2, PenTool, WandSparkles } from 'lucide-react'
import { CityScene } from './CityScene'
import { APPS } from '../data/content'

interface HeroProps { selectedMonth: number; onSelectProject: (id: string) => void; onOpenContact: () => void }

const featuredIds = ['nodrive', 'bauhaus', 'repa']
const disciplines = ['Développement', 'Exploration graphique', 'Outils métier']

export const Hero = ({ selectedMonth, onSelectProject, onOpenContact }: HeroProps) => (
  <section className="portfolio-intro" aria-labelledby="hero-title">
    <div className="portfolio-hero">
      <div className="portfolio-copy">
        <p className="portfolio-eyebrow"><span /> Portfolio personnel · Strasbourg</p>
        <p className="portfolio-hello">Moi, c’est <strong>Stefe.</strong></p>
        <h1 id="hero-title">Du caractère.<br />Du design.<br /><span>Et du code.</span></h1>
        <p className="portfolio-description">Responsable informatique et créative, je conçois des univers graphiques et je développe des outils qui simplifient le quotidien.</p>
        <div className="portfolio-actions">
          <a className="portfolio-primary" href="#realisations">Explorer mes projets <ArrowDown aria-hidden="true" /></a>
          <button className="portfolio-contact" type="button" onClick={onOpenContact}>On en parle ? <ArrowUpRight aria-hidden="true" /></button>
        </div>
        <ul className="portfolio-skills" aria-label="Mes domaines de création">
          <li><PenTool aria-hidden="true" /> Graphisme</li>
          <li><Code2 aria-hidden="true" /> Développement</li>
          <li><WandSparkles aria-hidden="true" /> Expérimentation</li>
        </ul>
      </div>
      <figure className="portfolio-art">
        <div className="portfolio-art__scene"><CityScene selectedMonth={selectedMonth} /></div>
        <figcaption><span>Mon point de départ : Strasbourg.</span><span>Un décor au fil des saisons</span></figcaption>
      </figure>
    </div>
    <div className="portfolio-preview" aria-label="Quelques projets à découvrir">
      <a className="portfolio-preview__label" href="#realisations"><span>La suite, c’est du concret.</span><strong>Mes projets <ArrowDown aria-hidden="true" /></strong></a>
      {featuredIds.map((id, index) => {
        const project = APPS.find((app) => app.id === id)!
        return <button key={id} type="button" className="portfolio-project" onClick={() => onSelectProject(id)} aria-label={`Découvrir ${project.name} : ${project.tagline}`}>
          <span className="portfolio-project__category">0{index + 1} / {disciplines[index]}</span>
          <span className="portfolio-project__name">{project.name}<ArrowUpRight aria-hidden="true" /></span>
          <span className="portfolio-project__description">{project.tagline}</span>
        </button>
      })}
    </div>
  </section>
)
