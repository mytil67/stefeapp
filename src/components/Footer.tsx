import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="py-10 text-center text-xs"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Sunset separator */}
      <div className="max-w-xs mx-auto mb-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-sunset-light/50 to-transparent" />

      <div className="flex items-center justify-center gap-1.5 text-stone-400 dark:text-stone-500">
        <span>stefe.app</span>
        <Heart className="w-3 h-3 text-sunset fill-sunset/30" />
      </div>
    </motion.footer>
  )
}
