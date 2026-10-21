import { useState } from 'react'
import { ChartNoAxesCombined, MousePointer2, Sparkles } from 'lucide-react'

const EXAMPLES = [
  {
    id: 'direction',
    label: '01 · Direction',
    title: 'Une ambiance, avant une interface',
    text: 'Partir d’une intention, générer des pistes, puis choisir et affiner ce qui a du sens.',
    icon: Sparkles,
  },
  {
    id: 'interaction',
    label: '02 · Interaction',
    title: 'Le mouvement donne un repère',
    text: 'Une micro-interaction n’est pas un décor : elle explique, confirme et guide sans bruit.',
    icon: MousePointer2,
  },
  {
    id: 'data',
    label: '03 · Données',
    title: 'Rendre l’information lisible',
    text: 'Prototyper une lecture claire de données complexes, pour aider une décision plutôt que l’encombrer.',
    icon: ChartNoAxesCombined,
  },
]

export const Experiments = () => {
  const [activeId, setActiveId] = useState(EXAMPLES[0].id)
  const active = EXAMPLES.find((example) => example.id === activeId) ?? EXAMPLES[0]

  return (
    <section className="experiments" id="experiences" aria-labelledby="experiences-title">
      <div className="experiments-heading">
        <p>IA + INTUITION</p>
        <h2 id="experiences-title">Expériences,<br />pas promesses.</h2>
        <span>Un petit laboratoire pour montrer comment une idée peut devenir une interface vivante.</span>
      </div>
      <div className="experiments-grid">
        <div className="experiment-stage" data-example={active.id} aria-live="polite">
          <div className="stage-glow" />
          <div className="stage-orbits"><i /><i /><i /><b /></div>
          <div className="stage-cursor"><MousePointer2 /><span>cliquer · comprendre</span></div>
          <div className="stage-bars"><i /><i /><i /><i /><i /><i /></div>
          <div className="stage-caption">{active.label}</div>
        </div>
        <div className="experiment-copy">
          <active.icon aria-hidden="true" />
          <p className="experiment-label">{active.label}</p>
          <h3>{active.title}</h3>
          <p>{active.text}</p>
          <div className="experiment-tabs" role="tablist" aria-label="Exemples d’expériences">
            {EXAMPLES.map((example) => (
              <button
                key={example.id}
                type="button"
                role="tab"
                aria-selected={activeId === example.id}
                className={activeId === example.id ? 'is-active' : ''}
                onClick={() => setActiveId(example.id)}
              >
                {example.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
