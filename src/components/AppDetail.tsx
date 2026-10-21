import { KeyboardEvent as ReactKeyboardEvent, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { APPS } from '../data/content'

interface AppDetailProps { selectedId: string | null; onClose: () => void }

export const AppDetail = ({ selectedId, onClose }: AppDetailProps) => {
  const app = APPS.find((item) => item.id === selectedId)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)
  const projectIndex = app ? APPS.indexOf(app) + 1 : 0

  useEffect(() => {
    if (!app) return
    const previousFocus = document.activeElement as HTMLElement | null
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.body.classList.add('dialog-open')
    window.addEventListener('keydown', closeOnEscape)
    closeRef.current?.focus()
    return () => {
      document.body.classList.remove('dialog-open')
      window.removeEventListener('keydown', closeOnEscape)
      previousFocus?.focus()
    }
  }, [app, onClose])

  const trapFocus = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Tab' || !panelRef.current) return
    const focusable = [...panelRef.current.querySelectorAll<HTMLElement>('button, a[href]')]
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
  }

  return <AnimatePresence>{app && (
    <motion.div className="detail-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <motion.article ref={panelRef} onKeyDown={trapFocus} className={`detail-panel detail-panel--${app.tone}`} role="dialog" aria-modal="true" aria-labelledby="detail-title" initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', stiffness: 260, damping: 28 }}>
        <button ref={closeRef} className="detail-close" onClick={onClose} aria-label="Fermer"><X /></button>
        <div className="detail-titlebar"><span>Carte d’embarquement numérique</span><span>STRASBOURG · VOIE {String(projectIndex).padStart(2, '0')}</span></div>
        <div className="detail-code">DESTINATION · {app.id.toUpperCase()}</div>
        <div className="detail-layout"><div><span className="detail-category">{app.tagline}</span><h3 id="detail-title">{app.name}</h3></div><div className="detail-copy"><span className="detail-ready">Le projet</span><p>{app.description}</p>{app.url && <a href={app.url} target="_blank" rel="noreferrer">Découvrir le projet <ArrowUpRight /></a>}</div></div>
      </motion.article>
    </motion.div>
  )}</AnimatePresence>
}
