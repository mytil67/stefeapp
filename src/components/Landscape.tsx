import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const Landscape = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -15])
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const sunScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <div ref={ref} className="landscape" aria-hidden="true">
      {/* Sky gradient is CSS background */}

      {/* Sun glow */}
      <motion.div className="landscape-sun" style={{ y: sunY, scale: sunScale }} />

      {/* Stars / digital dots */}
      <svg className="landscape-dots" viewBox="0 0 1440 400" preserveAspectRatio="none">
        {[120,280,410,560,720,890,1020,1180,1320].map((x,i) => (
          <circle key={i} cx={x} cy={60 + (i % 3) * 80} r={i % 2 === 0 ? 1.5 : 1} fill="rgba(255,255,255,0.35)" />
        ))}
        {/* Circuit traces */}
        <line x1="200" y1="120" x2="350" y2="120" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="350" y1="120" x2="350" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <line x1="900" y1="90" x2="1100" y2="90" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <line x1="1100" y1="90" x2="1100" y2="150" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <circle cx="350" cy="120" r="3" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <circle cx="1100" cy="90" r="3" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </svg>

      {/* Mountain layer 1 — back (lightest) */}
      <motion.svg className="landscape-layer landscape-layer--1" style={{ y: y1 }} viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0 220 C120 140 240 180 360 150 S600 100 720 160 S960 80 1080 130 S1320 170 1440 120 L1440 320 L0 320Z" />
        {/* Digital grid dots on ridgeline */}
        {[180,360,540,720,900,1080,1260].map((x,i) => (
          <circle key={i} cx={x} cy={160 + Math.sin(i) * 30} r="2" fill="rgba(255,255,255,0.15)" />
        ))}
      </motion.svg>

      {/* Mountain layer 2 — mid */}
      <motion.svg className="landscape-layer landscape-layer--2" style={{ y: y2 }} viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0 240 C180 180 300 220 480 190 S720 150 840 200 S1080 160 1200 180 S1380 210 1440 190 L1440 320 L0 320Z" />
        {/* Horizontal circuit trace */}
        <line x1="300" y1="210" x2="500" y2="210" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" strokeDasharray="8 6" />
        <line x1="800" y1="185" x2="1050" y2="185" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" strokeDasharray="8 6" />
      </motion.svg>

      {/* Mountain layer 3 — front (darkest) */}
      <motion.svg className="landscape-layer landscape-layer--3" style={{ y: y3 }} viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0 270 C160 230 320 260 480 240 S720 210 900 250 S1120 220 1260 240 S1400 260 1440 250 L1440 320 L0 320Z" />
      </motion.svg>

      {/* Foreground silhouette */}
      <svg className="landscape-layer landscape-layer--fg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path d="M0 295 C200 280 400 290 600 285 S900 275 1100 288 S1300 290 1440 282 L1440 320 L0 320Z" />
      </svg>
    </div>
  )
}
