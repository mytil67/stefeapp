import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Eye, FileText, Lock, ShieldCheck, Terminal, Trash2, Upload, UserX } from 'lucide-react'

type StepId = 'send' | 'code' | 'receive'
type ContentMode = 'files' | 'text'

const STEPS: {
  id: StepId
  label: string
  title: string
  text: string
}[] = [
  {
    id: 'send',
    label: '01 · Envoyer (Fichiers ou Texte)',
    title: 'Glissez un fichier ou collez un snippet',
    text: 'Choisissez entre le mode Fichiers (accent bleu, jusqu’à 25 Mo, multi-fichiers) ou le mode Texte façon pastebin chiffré (accent orange). Une passphrase robuste de 24 caractères est générée automatiquement.',
  },
  {
    id: 'code',
    label: '02 · Code court & QR Code',
    title: 'Un code à 6 caractères, rien d’autre',
    text: 'Le chiffrement AES-256-GCM (PBKDF2 · 600 000 itérations SHA-256) s’exécute dans votre navigateur. Vous obtenez un code court (ex. AB3K7P), un QR code à scanner et un jeton de révocation immédiate.',
  },
  {
    id: 'receive',
    label: '03 · Recevoir & CLI',
    title: 'Déchiffré à l’arrivée, supprimé aussitôt',
    text: 'Sur l’autre machine — via nodrive.cc ou en terminal avec npx nodrive-cli — les noms de fichiers restent masqués tant que la preuve de mot de passe (verifier) n’est pas validée. Dès le téléchargement terminé, le blob est détruit.',
  },
]

const PILLARS = [
  {
    icon: Lock,
    label: 'Chiffré AES-256',
    desc: 'Chiffré dans votre navigateur avant envoi',
  },
  {
    icon: FileText,
    label: 'Fichiers & texte',
    desc: 'Plusieurs fichiers, ou un texte façon pastebin',
  },
  {
    icon: Trash2,
    label: 'Usage unique',
    desc: 'Supprimé dès le téléchargement — valide 1 h',
  },
  {
    icon: UserX,
    label: 'Sans compte',
    desc: 'Aucune inscription ni installation requise',
  },
]

export const Experiments = () => {
  const [activeStep, setActiveStep] = useState<StepId>('send')
  const [mode, setMode] = useState<ContentMode>('files')
  const [copied, setCopied] = useState<string | null>(null)
  const active = STEPS.find((step) => step.id === activeStep) ?? STEPS[0]

  const copyDemo = (value: string, key: string) => {
    navigator.clipboard?.writeText(value).catch(() => {})
    setCopied(key)
    window.setTimeout(() => setCopied(null), 1800)
  }

  return (
    <section
      className="nodrive-showcase"
      id="experiences"
      data-nd-mode={mode}
      aria-labelledby="experiences-title"
    >
      <div className="nodrive-glow" aria-hidden="true" />
      <div className="nodrive-container">
        <div className="nodrive-header">
          <span className="nodrive-eyebrow">TRANSFERT DE FICHIERS · OPEN SOURCE</span>
          <h2 id="experiences-title" className="nodrive-title">NoDrive</h2>
          <p className="nodrive-subtitle">
            Envoyez fichiers, commandes ou bouts de code d’une machine à une autre.<br />
            <strong>Un code. Un mot de passe. C’est tout.</strong>
          </p>
        </div>

        <div
          className="nodrive-grid"
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
        >
          {/* Authentic NoDrive UI Window */}
          <div className="nd-window" aria-live="polite">
            <div className="nd-window__bar">
              <div className="nd-window__dots" aria-hidden="true">
                <span /><span /><span />
              </div>
              <a href="https://nodrive.cc" target="_blank" rel="noreferrer" className="nd-window__url">
                <Lock aria-hidden="true" /> nodrive.cc/{activeStep === 'receive' ? 'receive/AB3K7P' : 'send'}
              </a>
              <div className="nd-mode-Switch" role="group" aria-label="Mode de démonstration">
                <button
                  type="button"
                  className={mode === 'files' ? 'is-active' : ''}
                  onClick={() => setMode('files')}
                >
                  Fichiers
                </button>
                <button
                  type="button"
                  className={mode === 'text' ? 'is-active' : ''}
                  onClick={() => setMode('text')}
                >
                  Texte
                </button>
              </div>
            </div>

            <div className="nd-window__body">
              {activeStep === 'send' && (
                <div className="nd-card">
                  <div className="nd-mode-toggle">
                    <button
                      type="button"
                      className={mode === 'files' ? 'is-active' : ''}
                      onClick={() => setMode('files')}
                    >
                      <FileText aria-hidden="true" /> Fichiers
                    </button>
                    <button
                      type="button"
                      className={mode === 'text' ? 'is-active' : ''}
                      onClick={() => setMode('text')}
                    >
                      <Terminal aria-hidden="true" /> Texte
                    </button>
                  </div>

                  <div className="nd-step">
                    <div className="nd-step__label">
                      <span className="nd-step__num">1</span>
                      <span>{mode === 'text' ? 'COLLER VOTRE TEXTE' : 'SÉLECTIONNER DES FICHIERS'}</span>
                    </div>
                    {mode === 'files' ? (
                      <div className="nd-dropzone">
                        <Upload className="nd-dropzone__icon" aria-hidden="true" />
                        <p className="nd-dropzone__file">architecture-strasbourg.pdf · 4,2 Mo</p>
                        <span className="nd-dropzone__sub">2 fichiers sélectionnés · Cliquez pour en ajouter</span>
                      </div>
                    ) : (
                      <pre className="nd-textarea">
                        <code>{`export NODRIVE_URL=https://nodrive.cc\nnpx nodrive-cli send rapport.pdf`}</code>
                      </pre>
                    )}
                  </div>

                  <div className="nd-divider" />

                  <div className="nd-step">
                    <div className="nd-step__label">
                      <span className="nd-step__num">2</span>
                      <span>CHOISIR UN MOT DE PASSE</span>
                    </div>
                    <div className="nd-input-row">
                      <code>H7QK-N3VA-9ZDR-2MGP-WT8B</code>
                      <Eye aria-hidden="true" />
                    </div>
                    <p className="nd-hint">
                      <span className="nd-hint__ok">✓</span> 12 caractères minimum. Passphrase générée localement.
                    </p>
                  </div>

                  <div className="nd-cta-bar">
                    <Upload aria-hidden="true" /> Chiffrer et envoyer
                  </div>
                </div>
              )}

              {activeStep === 'code' && (
                <div className="nd-card nd-card--center">
                  <div className="nd-badge-ok" aria-hidden="true">✓</div>
                  <p className="nd-card__kicker">
                    {mode === 'text' ? 'TEXTE CHIFFRÉ ET ENVOYÉ' : 'FICHIERS CHIFFRÉS ET ENVOYÉS'}
                  </p>

                  <div className="nd-code-box">
                    <span className="nd-code-box__label">CODE DE TRANSFERT</span>
                    <div className="nd-code-box__value">AB3K7P</div>
                    <div className="nd-code-box__actions">
                      <button type="button" onClick={() => copyDemo('AB3K7P', 'code')}>
                        {copied === 'code' ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                        {copied === 'code' ? 'Copié' : 'Copier le code'}
                      </button>
                      <button type="button" onClick={() => copyDemo('https://nodrive.cc/receive/AB3K7P', 'link')}>
                        {copied === 'link' ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
                        {copied === 'link' ? 'Copié' : 'Copier le lien'}
                      </button>
                    </div>
                  </div>

                  <div className="nd-pass-box">
                    <span className="nd-code-box__label">MOT DE PASSE</span>
                    <code>H7QK-N3VA-9ZDR-2MGP-WT8B</code>
                  </div>

                  <div className="nd-meta-row">
                    <span><ShieldCheck aria-hidden="true" /> AES-256-GCM · PBKDF2 600K</span>
                    <span className="nd-cancel-pill">Annuler ce transfert</span>
                  </div>
                </div>
              )}

              {activeStep === 'receive' && (
                <div className="nd-card">
                  <div className="nd-receive-preview">
                    <div>
                      <p className="nd-receive-preview__title">
                        {mode === 'text' ? 'Texte chiffré' : '2 fichiers · 4,2 Mo'}
                      </p>
                      <p className="nd-receive-preview__hidden">
                        Noms affichés après vérification du mot de passe
                      </p>
                    </div>
                    <span className="nd-expiry-badge">Usage unique · 59 min</span>
                  </div>

                  <div className="nd-terminal">
                    <div className="nd-terminal__head">
                      <Terminal aria-hidden="true" />
                      <span>CLI · Node.js ≥ 18 · zéro dépendance</span>
                    </div>
                    <pre>
                      <code>
{`$ npx nodrive-cli receive AB3K7P -p "H7QK-N3VA-9ZDR-2MGP-WT8B"
✔ Vérification PBKDF2 (600 000 itérations)... OK
✔ Déchiffrement AES-256-GCM en mémoire... OK
✔ Enregistré : ./architecture-strasbourg.pdf (supprimé du serveur)`}
                      </code>
                    </pre>
                  </div>

                  <div className="nd-cta-bar">
                    {mode === 'text' ? 'Déchiffrer et afficher' : 'Télécharger et déchiffrer'}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right column: interactive steps + links */}
          <div className="nodrive-copy">
            <div className="nodrive-steps" role="tablist" aria-label="Étapes de fonctionnement de NoDrive">
              {STEPS.map((step) => (
                <button
                  key={step.id}
                  id={`tab-${step.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeStep === step.id}
                  aria-controls={`panel-${step.id}`}
                  className={`nodrive-step-tab ${activeStep === step.id ? 'is-active' : ''}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <span className="nodrive-step-tab__label">{step.label}</span>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </button>
              ))}
            </div>

            <div className="nodrive-actions">
              <a href="https://nodrive.cc" target="_blank" rel="noreferrer" className="nd-action-card nd-action-card--primary">
                <span className="nd-action-card__icon" aria-hidden="true">
                  <Upload />
                </span>
                <span className="nd-action-card__body">
                  <strong>Ouvrir nodrive.cc</strong>
                  <small>Fichiers ou texte — chiffrés et partagés en quelques secondes</small>
                </span>
                <ArrowUpRight className="nd-action-card__arrow" aria-hidden="true" />
              </a>

              <a href="https://github.com/mytil67/nodrive" target="_blank" rel="noreferrer" className="nd-action-card nd-action-card--secondary">
                <span className="nd-action-card__icon" aria-hidden="true">
                  <Terminal />
                </span>
                <span className="nd-action-card__body">
                  <strong>github.com/mytil67/nodrive</strong>
                  <small>Code source, documentation architecture & package nodrive-cli</small>
                </span>
                <ArrowUpRight className="nd-action-card__arrow" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Authentic NoDrive 4-feature strip */}
        <ul className="nd-features" aria-label="Caractéristiques de NoDrive">
          {PILLARS.map(({ icon: Icon, label, desc }) => (
            <li key={label} className="nd-feature">
              <span className="nd-feature__icon" aria-hidden="true"><Icon /></span>
              <span className="nd-feature__label">{label}</span>
              <span className="nd-feature__desc">{desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
