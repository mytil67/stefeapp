import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Background gradient orbs — vivid */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-teal-400/20 dark:bg-teal-500/15 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-sunset-light/20 dark:bg-sunset-light/10 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Name — big, bold, teal gradient */}
      <motion.h1
        className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter relative"
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 dark:from-teal-300 dark:via-teal-400 dark:to-teal-500 bg-clip-text text-transparent">
          Stefe
        </span>
      </motion.h1>

      {/* Sunset accent — wider, bolder */}
      <motion.div
        className="mt-5 h-1 rounded-full"
        style={{ background: 'linear-gradient(90deg, #F4A261, #E76F51, #F4A261)' }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 80, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Subtitle — with teal accent */}
      <motion.p
        className="mt-7 text-base sm:text-lg font-medium tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <span className="text-stone-500 dark:text-stone-400">Responsable informatique</span>
        <span className="text-teal-500 dark:text-teal-400 mx-2">&</span>
        <span className="text-stone-500 dark:text-stone-400">développeuse</span>
      </motion.p>

      {/* Scroll indicator — visible, colorful */}
      <motion.a
        href="#narrative"
        className="absolute bottom-12 flex flex-col items-center gap-2"
        aria-label="Défiler"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="text-xs font-medium text-teal-500 dark:text-teal-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-8 h-8 rounded-full border-2 border-teal-400 dark:border-teal-500 flex items-center justify-center text-teal-500 dark:text-teal-400"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  )
}
