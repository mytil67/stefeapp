import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Loader2, Mail, Send, X } from 'lucide-react'

interface ContactFormProps {
  open: boolean
  onClose: () => void
}

const REASONS = [
  { value: '', label: 'Pourquoi me contacter ?' },
  { value: 'projet', label: 'J\'ai un projet à te proposer' },
  { value: 'collab', label: 'Envie de collaborer ensemble' },
  { value: 'question', label: 'Une question sur un de tes projets' },
  { value: 'freelance', label: 'Mission freelance / prestation' },
  { value: 'feedback', label: 'Un retour ou un compliment' },
  { value: 'autre', label: 'Autre chose' },
] as const

// ── Interactive captcha: pick the right icon among decoys ──
const CAPTCHA_ICONS = ['◆', '●', '▲', '■', '★', '⬟'] as const
function generateChallenge() {
  const targetIndex = Math.floor(Math.random() * CAPTCHA_ICONS.length)
  const target = CAPTCHA_ICONS[targetIndex]
  // Shuffle icons
  const shuffled = [...CAPTCHA_ICONS].sort(() => Math.random() - 0.5)
  return { target, icons: shuffled }
}

const LABELS: Record<string, string> = {
  '◆': 'le losange',
  '●': 'le cercle',
  '▲': 'le triangle',
  '■': 'le carré',
  '★': 'l\'étoile',
  '⬟': 'l\'hexagone',
}

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export const ContactForm = ({ open, onClose }: ContactFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [captchaPassed, setCaptchaPassed] = useState(false)
  const [captchaError, setCaptchaError] = useState(false)
  const [formState, setFormState] = useState<FormState>('idle')
  const openedAt = useRef(0)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const challenge = useMemo(() => generateChallenge(), [open])

  useEffect(() => {
    if (open) {
      openedAt.current = Date.now()
      setCaptchaPassed(false)
      setCaptchaError(false)
      setFormState('idle')
      document.body.classList.add('dialog-open')
      closeRef.current?.focus()
    }
    return () => { document.body.classList.remove('dialog-open') }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const handleCaptchaClick = useCallback((icon: string) => {
    if (icon === challenge.target) {
      setCaptchaPassed(true)
      setCaptchaError(false)
    } else {
      setCaptchaError(true)
      setTimeout(() => setCaptchaError(false), 1200)
    }
  }, [challenge.target])

  const canSubmit = name.trim() && email.trim() && reason && message.trim() && captchaPassed && !honeypot

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return

    // Anti-bot: form must be open > 3s
    if (Date.now() - openedAt.current < 3000) return

    setFormState('sending')

    // Send via mailto as fallback (works without backend)
    const subject = encodeURIComponent(`[stefe.app] ${REASONS.find((r) => r.value === reason)?.label ?? reason}`)
    const body = encodeURIComponent(`Nom : ${name}\nEmail : ${email}\nRaison : ${REASONS.find((r) => r.value === reason)?.label}\n\n${message}`)
    window.location.href = `mailto:stefe@stefe.app?subject=${subject}&body=${body}`

    setFormState('sent')
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setReason('')
    setMessage('')
    setFormState('idle')
    setCaptchaPassed(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="contact-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            ref={panelRef}
            className="contact-form-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-form-title"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button ref={closeRef} className="contact-form__close" onClick={onClose} aria-label="Fermer">
              <X />
            </button>

            <div className="contact-form__header">
              <Mail aria-hidden="true" />
              <h3 id="contact-form-title">On en parle ?</h3>
              <p>Dis-moi ce qui t'amène — je réponds vite, promis.</p>
            </div>

            {formState === 'sent' ? (
              <div className="contact-form__success">
                <div className="contact-form__success-icon"><Check /></div>
                <strong>C'est parti !</strong>
                <p>Ton client mail s'est ouvert avec le message pré-rempli. Envoie-le et je te réponds rapidement.</p>
                <div className="contact-form__success-actions">
                  <button type="button" onClick={() => { resetForm(); onClose() }}>Fermer</button>
                  <button type="button" onClick={resetForm}>Nouveau message</button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form__body" noValidate>
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="contact-form__hp"
                />

                <div className="contact-form__row">
                  <label className="contact-form__field">
                    <span>Ton nom</span>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Marie Dupont" required />
                  </label>
                  <label className="contact-form__field">
                    <span>Ton email</span>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="marie@exemple.fr" required />
                  </label>
                </div>

                <label className="contact-form__field">
                  <span>Pourquoi tu me contactes ?</span>
                  <select value={reason} onChange={(e) => setReason(e.target.value)} required>
                    {REASONS.map((r) => (
                      <option key={r.value} value={r.value} disabled={!r.value}>{r.label}</option>
                    ))}
                  </select>
                </label>

                <label className="contact-form__field">
                  <span>Ton message</span>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Raconte-moi ton projet, ta question, ton idée..." rows={5} required />
                </label>

                {/* Interactive captcha */}
                <div className="contact-captcha" role="group" aria-label="Vérification anti-robot">
                  {captchaPassed ? (
                    <div className="contact-captcha__done">
                      <Check aria-hidden="true" /> Vérifié — tu n'es pas un robot
                    </div>
                  ) : (
                    <>
                      <p className="contact-captcha__prompt">
                        Clique sur <strong>{LABELS[challenge.target]}</strong> pour prouver que tu es humain·e
                      </p>
                      <div className="contact-captcha__grid">
                        {challenge.icons.map((icon) => (
                          <button
                            key={icon}
                            type="button"
                            className={`contact-captcha__btn ${captchaError ? 'is-shake' : ''}`}
                            onClick={() => handleCaptchaClick(icon)}
                            aria-label={LABELS[icon]}
                          >
                            {icon}
                          </button>
                        ))}
                      </div>
                      {captchaError && <p className="contact-captcha__error">Pas celui-là — réessaie !</p>}
                    </>
                  )}
                </div>

                <button
                  type="submit"
                  className="contact-form__submit"
                  disabled={!canSubmit || formState === 'sending'}
                >
                  {formState === 'sending' ? (
                    <><Loader2 className="contact-spin" aria-hidden="true" /> Envoi en cours...</>
                  ) : (
                    <><Send aria-hidden="true" /> Envoyer le message</>
                  )}
                </button>

                <p className="contact-form__footer">
                  <a href="mailto:stefe@stefe.app">stefe@stefe.app</a> · Je réponds sous 48h en général <ArrowUpRight aria-hidden="true" />
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
