import React, { useState } from 'react'
import { Mail, Copy, Check, Send, MessageSquare } from 'lucide-react'

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Échange général / Prise de contact',
    message: '',
  })

  const email = 'contact@stefe.app'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subjectEncoded = encodeURIComponent(`[stefe.app] ${formData.subject} - ${formData.name}`)
    const bodyEncoded = encodeURIComponent(
      `Bonjour Stefe,\n\n${formData.message}\n\nCordialement,\n${formData.name}\nEmail: ${formData.email}`
    )
    window.location.href = `mailto:${email}?subject=${subjectEncoded}&body=${bodyEncoded}`
    setFormSent(true)
    setTimeout(() => setFormSent(false), 5000)
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight">
            Envie d'échanger ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-500 dark:text-stone-400">
            Un projet, une idée, une question — je suis à un message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left info column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Status card */}
            <div className="card rounded-2xl p-6 border-teal-200 dark:border-teal-700">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                <span className="text-xs font-semibold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                  Disponible
                </span>
              </div>
              <p className="text-sm font-semibold text-stone-800 dark:text-stone-100 mb-1">
                Disponible pour de nouvelles aventures
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                Conseil SI, gouvernance, architecture fullstack, transition cloud & accompagnement tech lead.
              </p>
            </div>

            {/* Email card with 1-click copy */}
            <div className="card rounded-2xl p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-stone-400 dark:text-stone-500 block">Email direct</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-semibold text-stone-700 dark:text-stone-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-teal-300 dark:hover:border-teal-600 text-xs font-medium text-stone-600 dark:text-stone-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all cursor-pointer"
                title="Copier l'adresse"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-teal-500" />
                    <span className="text-teal-600 dark:text-teal-400">Copié</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copier</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & networks */}
            <div className="card rounded-2xl p-6 space-y-3">
              <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider block">
                Réseaux & Plateformes
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-teal-300 dark:hover:border-teal-600 text-xs font-medium text-stone-600 dark:text-stone-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all"
                >
                  <svg className="w-4 h-4 text-teal-600 dark:text-teal-400 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-teal-300 dark:hover:border-teal-600 text-xs font-medium text-stone-600 dark:text-stone-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all"
                >
                  <svg className="w-4 h-4 text-teal-600 dark:text-teal-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right form column (7 cols) */}
          <div className="lg:col-span-7 card rounded-2xl p-7 md:p-8">
            <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-1">
              Envoyer un message
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mb-6">
              Dites-moi ce qui vous amène — je reviens vite.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-600 dark:text-stone-300 mb-1.5">
                    Votre nom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ex: Alex Martin"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-200 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-teal-400 dark:focus:border-teal-500 focus:ring-1 focus:ring-teal-400/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 dark:text-stone-300 mb-1.5">
                    Votre adresse email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ex: alex@entreprise.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-200 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-teal-400 dark:focus:border-teal-500 focus:ring-1 focus:ring-teal-400/30 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 dark:text-stone-300 mb-1.5">
                  Objet de l'échange
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-200 focus:outline-none focus:border-teal-400 dark:focus:border-teal-500 focus:ring-1 focus:ring-teal-400/30 transition-all"
                >
                  <option value="Direction Technique & Lead">Direction Technique & Lead Dev</option>
                  <option value="Audit & Conseil SI">Audit & Conseil Système d'Information</option>
                  <option value="Architecture Applicative">Architecture Applicative & Craft</option>
                  <option value="Échange général / Prise de contact">Échange général / Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 dark:text-stone-300 mb-1.5">
                  Votre message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Présentez brièvement vos besoins, votre contexte ou votre projet..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-200 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-teal-400 dark:focus:border-teal-500 focus:ring-1 focus:ring-teal-400/30 transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 dark:text-stone-500">
                  Ouverture dans votre client mail
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 transition-all shadow-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer</span>
                </button>
              </div>

              {formSent && (
                <div className="mt-3 p-3 rounded-xl bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>Votre message est préparé ! Merci pour votre prise de contact.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
