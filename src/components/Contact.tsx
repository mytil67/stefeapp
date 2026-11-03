import { ArrowUpRight, Mail } from 'lucide-react'

interface ContactProps { onOpenContact: () => void }

export const Contact = ({ onOpenContact }: ContactProps) => (
  <footer className="contact" id="contact">
    <div className="contact-copy"><span className="contact-kicker">TERMINUS — CONTACT</span><h2>Un projet<br /><span>à imaginer&nbsp;?</span></h2><button type="button" className="contact-cta" onClick={onOpenContact}><Mail /> Me contacter <ArrowUpRight /></button></div>
    <div className="contact-meta"><span>© {new Date().getFullYear()} STEFE</span><nav aria-label="Réseaux sociaux"><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/mytil67" target="_blank" rel="noreferrer">GitHub</a></nav></div>
  </footer>
)
