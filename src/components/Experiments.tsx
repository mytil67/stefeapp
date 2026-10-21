import { useState } from 'react'
import { ArrowUpRight, KeyRound, ShieldCheck, Terminal } from 'lucide-react'

const FEATURES = [
  {
    id: 'direction',
    label: '01 · Principe',
    stageCaption: '01 · CODE COURT · AB3K7P',
    stageBadge: 'AB3K7P · déchiffrer',
    title: 'Un code à 6 caractères, zéro compte',
    text: 'Déposez un fichier, choisissez un mot de passe et obtenez un code court à transmettre oralement ou par message. Le destinataire saisit le code et le mot de passe sur nodrive.cc pour récupérer son fichier.',
    icon: KeyRound,
  },
  {
    id: 'interaction',
    label: '02 · Sécurité',
    stageCaption: '02 · AES-256-GCM · PBKDF2 600K',
    stageBadge: 'chiffré côté client',
    title: 'Chiffré dans le navigateur, détruit après lecture',
    text: 'Chiffrement AES-256-GCM via Web Crypto API et dérivation PBKDF2 (600 000 itérations SHA-256). Le serveur ne voit jamais le mot de passe ni la clé, et le fichier est supprimé dès le premier téléchargement.',
    icon: ShieldCheck,
  },
  {
    id: 'data',
    label: '03 · Web & CLI',
    stageCaption: '03 · NPX NODRIVE-CLI SEND',
    stageBadge: 'npx nodrive-cli',
    title: 'Depuis le navigateur ou le terminal',
    text: 'Utilisable sur nodrive.cc ou en ligne de commande via npx nodrive-cli send fichier.pdf (Node.js ≥ 18, zéro dépendance), avec jeton de révocation 128 bits pour annuler un transfert à tout moment.',
    icon: Terminal,
  },
]

export const Experiments = () => {
  const [activeId, setActiveId] = useState(FEATURES[0].id)
  const active = FEATURES.find((feature) => feature.id === activeId) ?? FEATURES[0]

  return (
    <section className="experiments" id="experiences" aria-labelledby="experiences-title">
      <div className="experiments-heading">
        <p>FOCUS OUTIL · OPEN SOURCE</p>
        <h2 id="experiences-title">NoDrive,<br />zéro trace.</h2>
        <span>Transfert de fichiers temporaire et chiffré de bout en bout entre deux machines — sans compte, sans installation, depuis le navigateur ou le terminal.</span>
      </div>
      <div
        className="experiments-grid"
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
      >
        <div className="experiment-stage" data-example={active.id} aria-live="polite">
          <div className="stage-glow" />
          <div className="stage-orbits"><i /><i /><i /><b /></div>
          <div className="stage-cursor"><active.icon /><span>{active.stageBadge}</span></div>
          <div className="stage-bars"><i /><i /><i /><i /><i /><i /></div>
          <div className="stage-caption">{active.stageCaption}</div>
        </div>
        <div className="experiment-copy">
          <active.icon aria-hidden="true" />
          <p className="experiment-label">{active.label}</p>
          <h3>{active.title}</h3>
          <p>{active.text}</p>
          <div className="experiment-tabs" role="tablist" aria-label="Fonctionnalités de NoDrive">
            {FEATURES.map((feature) => (
              <button
                key={feature.id}
                id={`tab-${feature.id}`}
                type="button"
                role="tab"
                aria-selected={activeId === feature.id}
                aria-controls={`panel-${feature.id}`}
                className={activeId === feature.id ? 'is-active' : ''}
                onClick={() => setActiveId(feature.id)}
              >
                {feature.label}
              </button>
            ))}
          </div>
          <div className="experiment-links">
            <a href="https://nodrive.cc" target="_blank" rel="noreferrer" className="experiment-cta">
              Ouvrir nodrive.cc <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="https://github.com/mytil67/nodrive" target="_blank" rel="noreferrer" className="experiment-cta experiment-cta--ghost">
              Code source GitHub <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
