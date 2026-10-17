import React from 'react'
import { motion } from 'framer-motion'

export const Hero: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <motion.h1
        className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter"
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 dark:from-teal-300 dark:via-teal-400 dark:to-teal-500 bg-clip-text text-transparent">
          Stefe
        </span>
      </motion.h1>

      {/* Sunset line */}
      <motion.div
        className="mx-auto mt-3 h-1 rounded-full"
        style={{ background: 'linear-gradient(90deg, #F4A261, #E76F51, #F4A261)' }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 64, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.p
        className="mt-4 text-sm sm:text-base font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <span className="text-stone-400 dark:text-stone-500">Responsable informatique</span>
        <span className="text-teal-500 dark:text-teal-400 mx-2">&</span>
        <span className="text-stone-400 dark:text-stone-500">développeuse</span>
      </motion.p>
    </div>
  )
}
