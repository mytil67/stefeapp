import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { APPS } from '../data/content'
import { ArrowUpRight, X } from 'lucide-react'

interface AppDetailProps {
  selectedId: string | null
  onClose: () => void
}

export const AppDetail: React.FC<AppDetailProps> = ({ selectedId, onClose }) => {
  const app = APPS.find((a) => a.id === selectedId)

  return (
    <div className="flex items-center justify-center px-4 min-h-[180px]">
      <AnimatePresence mode="wait">
        {app ? (
          <motion.div
            key={app.id}
            className="w-full max-w-lg rounded-2xl p-6 sm:p-8 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${app.color}08, ${app.color}15)`,
              border: `1px solid ${app.color}30`,
            }}
            initial={{ opacity: 0, y: 15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-700/50 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Color dot + name */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: app.color }}
              />
              <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">
                {app.name}
              </h3>
              <span className="text-xs font-medium text-stone-400 dark:text-stone-500">
                {app.tagline}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300 mb-4">
              {app.description}
            </p>

            {/* Link if available */}
            {app.url && (
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                style={{ color: app.color }}
              >
                <span>Voir le projet</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </motion.div>
        ) : (
          <motion.p
            key="placeholder"
            className="text-sm text-stone-300 dark:text-stone-600 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Cliquez sur une app pour en savoir plus
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
