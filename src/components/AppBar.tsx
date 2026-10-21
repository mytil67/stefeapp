import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { APPS } from '../data/content'

interface AppBarProps { selectedId: string | null; onSelect: (id: string) => void }

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const SplitFlapText = ({ value, delay = 0 }: { value: string; delay?: number }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    if (!isInView || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let tick = 0
    let timer: number | undefined
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        tick += 1
        const revealed = Math.floor(tick / 2)
        setDisplay(value.split('').map((character, index) => {
          if (character === ' ' || index < revealed) return character
          return GLYPHS[(tick + index * 7) % GLYPHS.length]
        }).join(''))
        if (revealed >= value.length) {
          setDisplay(value)
          window.clearInterval(timer)
        }
      }, 48)
    }, delay)
    return () => {
      window.clearTimeout(start)
      if (timer !== undefined) window.clearInterval(timer)
    }
  }, [delay, isInView, value])

  return (
    <span ref={ref} className="split-flap" aria-label={value}>
      <span aria-hidden="true">
        {display.split('').map((character, index) => (
          <span className="flap-character" key={index}>{character === ' ' ? '\u00a0' : character}</span>
        ))}
      </span>
    </span>
  )
}

const statuses = ['À L’HEURE', 'EN SERVICE', 'EMBARQUEMENT', 'EN APPROCHE']

export const AppBar = ({ selectedId, onSelect }: AppBarProps) => (
  <div className="departure-board">
    <div className="board-columns" aria-hidden="true">
      <span>Voie</span><span>Projet</span><span>Service</span><span>Départ</span><span />
    </div>
    <div className="board-rows">
      {APPS.map((app, index) => (
        <motion.button
          key={app.id}
          className={`departure-row ${selectedId === app.id ? 'is-selected' : ''}`}
          onClick={() => onSelect(app.id)}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.045 }}
          aria-label={`Voie ${index + 1}. Découvrir ${app.name}, ${app.tagline}. ${statuses[index % statuses.length]}.`}
        >
          <span className="board-track">{String(index + 1).padStart(2, '0')}</span>
          <span className="board-project"><SplitFlapText value={app.name} delay={index * 85} /></span>
          <span className="board-service"><strong>{app.tagline}</strong><small>{app.category}</small></span>
          <span className="board-status">{statuses[index % statuses.length]}</span>
          <span className="board-arrow" aria-hidden="true"><ArrowRight /></span>
        </motion.button>
      ))}
    </div>
  </div>
)
