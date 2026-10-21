import { ArrowUpRight, Mail } from 'lucide-react'

export const Contact = () => (
  <footer className="contact" id="contact">
    <div className="contact-copy"><span className="contact-kicker">TERMINUS — CONTACT</span><h2>Un projet<br /><span>à imaginer&nbsp;?</span></h2><a href="mailto:stefe@stefe.app" className="contact-cta"><Mail /> Écrire à stefe@stefe.app <ArrowUpRight /></a></div>
    <div className="contact-meta"><span>© {new Date().getFullYear()} STEFE</span><nav aria-label="Réseaux sociaux"><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/mytil67" target="_blank" rel="noreferrer">GitHub</a></nav></div>
  </footer>
)
