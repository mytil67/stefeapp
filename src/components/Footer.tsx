import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="py-10 text-center text-xs text-stone-400 dark:text-stone-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-1.5">
        <span>stefe.app</span>
        <Heart className="w-3 h-3 text-teal-500 fill-teal-500/30" />
      </div>
    </motion.footer>
  )
}
