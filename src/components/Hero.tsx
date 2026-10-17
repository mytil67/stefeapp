import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      {/* Background subtle gradient orb */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal-400/5 dark:bg-teal-400/10 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Name */}
      <motion.h1
        className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-stone-900 dark:text-stone-50 relative"
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        Stefe
      </motion.h1>

      {/* Sunset accent — draws in */}
      <motion.div
        className="mt-4 h-[3px] rounded-full"
        style={{ background: 'linear-gradient(135deg, #F4A261, #E76F51)' }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 48, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-base sm:text-lg text-stone-400 dark:text-stone-500 font-medium tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        Responsable informatique & développeuse
      </motion.p>

      {/* Scroll indicator */}
      <motion.a
        href="#narrative"
        className="absolute bottom-10 text-stone-300 dark:text-stone-600 hover:text-teal-500 transition-colors"
        aria-label="Défiler"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  )
}
