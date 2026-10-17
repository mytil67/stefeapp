import React from 'react'
import { motion } from 'framer-motion'
import { APPS, AppProject } from '../data/content'

interface AppBarProps {
  selectedId: string | null
  onSelect: (id: string) => void
}

export const AppBar: React.FC<AppBarProps> = ({ selectedId, onSelect }) => {
  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {APPS.map((app: AppProject, i: number) => {
        const isSelected = selectedId === app.id
        return (
          <motion.button
            key={app.id}
            onClick={() => onSelect(app.id)}
            className="group flex flex-col items-center gap-1.5 cursor-pointer outline-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: 1.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* App icon */}
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 ${
                isSelected
                  ? 'shadow-lg ring-2 ring-offset-2 ring-offset-stone-50 dark:ring-offset-stone-900 scale-110'
                  : 'shadow-md group-hover:shadow-lg'
              }`}
              style={{
                backgroundColor: app.color,
                ...(isSelected ? { ringColor: app.color } : {}),
              }}
            >
              {app.name.slice(0, 3)}
            </div>

            {/* App label */}
            <span className={`text-[10px] sm:text-[11px] font-medium transition-colors duration-200 ${
              isSelected
                ? 'text-stone-900 dark:text-stone-50'
                : 'text-stone-400 dark:text-stone-500 group-hover:text-stone-600 dark:group-hover:text-stone-300'
            }`}>
              {app.tagline}
            </span>
          </motion.button>
        )
      })}
    </motion.div>
  )
}
