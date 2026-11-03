import { useState } from 'react'
import { ArrowUpRight, Layers } from 'lucide-react'
import { APPS } from '../data/content'
import { useAllScreenshots } from '../hooks/useScreenshots'

interface AppBarProps { selectedId: string | null; onSelect: (id: string) => void }

const filters = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'apps', label: 'Applications' },
  { id: 'tools', label: 'Outils métier' },
  { id: 'creative', label: 'Création' },
] as const

type Filter = typeof filters[number]['id']
const groupOf = (id: string): Filter => {
  if (['bauhaus', 'studio'].includes(id)) return 'creative'
  if (['nodrive', 'voxcloud'].includes(id)) return 'apps'
  return 'tools'
}
const orderedProjects = [...APPS].sort((a, b) => {
  const rank = (id: string) => id === 'nodrive' ? 0 : id === 'bauhaus' ? 1 : 2
  return rank(a.id) - rank(b.id)
})

export const AppBar = ({ selectedId, onSelect }: AppBarProps) => {
  const [filter, setFilter] = useState<Filter>('all')
  const visibleProjects = orderedProjects.filter((app) => filter === 'all' || groupOf(app.id) === filter)
  const screenshotMap = useAllScreenshots()

  return <div className="project-gallery">
    <div className="project-toolbar">
      <div className="project-filters" role="group" aria-label="Filtrer les réalisations">
        {filters.map((item) => <button key={item.id} type="button" aria-pressed={filter === item.id} aria-controls="project-grid" onClick={() => setFilter(item.id)}>
          {item.label}<span>{APPS.filter((app) => item.id === 'all' || groupOf(app.id) === item.id).length}</span>
        </button>)}
      </div>
      <p className="project-count" role="status" aria-live="polite">{visibleProjects.length} projets à explorer</p>
    </div>
    <div className="project-grid" id="project-grid">
      {visibleProjects.map((app) => {
        const featured = app.id === 'nodrive' || app.id === 'bauhaus'
        const thumb = screenshotMap[app.id]?.[0]?.thumbnail
        return <button
          key={app.id}
          type="button"
          className={`project-card${featured ? ' project-card--featured' : ''}${selectedId === app.id ? ' is-selected' : ''}${thumb ? ' has-screenshot' : ''}`}
          data-project={app.id}
          onClick={() => onSelect(app.id)}
          aria-label={`Découvrir ${app.name} : ${app.tagline}`}
        >
          {thumb && <span className="project-card__thumb"><img src={thumb} alt="" aria-hidden="true" /></span>}
          <span className="project-card__top"><span>{app.category}</span><ArrowUpRight aria-hidden="true" /></span>
          <span className="project-card__name">{app.name}<span aria-hidden="true">.</span></span>
          <span className="project-card__tagline">{app.tagline}</span>
          <span className="project-card__description">{app.description}</span>
          <span className="project-card__footer"><span>{featured ? 'À la une' : filters.find((item) => item.id === groupOf(app.id))?.label}</span><span>Voir le projet <ArrowUpRight aria-hidden="true" /></span></span>
        </button>
      })}
    </div>
    <p className="project-gallery__note"><Layers aria-hidden="true" /> Du premier croquis à l’outil qui tourne : chaque projet explore une facette de mon travail.</p>
  </div>
}
