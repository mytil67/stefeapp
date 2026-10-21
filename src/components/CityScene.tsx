import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { type CSSProperties, useEffect, useRef } from 'react'
import cityscape from '../assets/strasbourg-sunset.webp'
import januaryCityscape from '../assets/strasbourg-january.webp'
import februaryCityscape from '../assets/strasbourg-february.webp'
import marchCityscape from '../assets/strasbourg-march.webp'
import aprilCityscape from '../assets/strasbourg-april.webp'
import mayCityscape from '../assets/strasbourg-may.webp'
import juneCityscape from '../assets/strasbourg-june.webp'
import julyCityscape from '../assets/strasbourg-july.webp'
import augustCityscape from '../assets/strasbourg-august.webp'
import septemberCityscape from '../assets/strasbourg-september.webp'
import octoberCityscape from '../assets/strasbourg-october.webp'
import novemberCityscape from '../assets/strasbourg-november.webp'
import decemberCityscape from '../assets/strasbourg-december.webp'

const MONTHLY_CITYSCAPES: Partial<Record<number, string>> = {
  0: januaryCityscape,
  1: februaryCityscape,
  2: marchCityscape,
  3: aprilCityscape,
  4: mayCityscape,
  5: juneCityscape,
  6: julyCityscape,
  7: augustCityscape,
  8: septemberCityscape,
  9: octoberCityscape,
  10: novemberCityscape,
  11: decemberCityscape,
}

const BLOOM_LAYERS = ['a', 'b', 'c'] as const

function spawnBirds(container: HTMLDivElement) {
  container.innerHTML = ''
  for (let i = 0; i < 5; i++) {
    const wrapper = document.createElement('div')
    const bird = document.createElement('span')
    bird.className = 'bird-body'
    const duration = 18 + Math.random() * 18
    const delay = i < 2 ? 0.15 + i * 0.65 : 1.4 + Math.random() * 3.6
    const top = 6 + Math.random() * 22
    const scale = 0.35 + Math.random() * 0.4
    const flapSpeed = 0.28 + Math.random() * 0.2
    const vertDur = 2.5 + Math.random() * 3.5
    const pathIndex = Math.floor(Math.random() * 3) + 1
    const reverse = Math.random() > 0.7
    wrapper.className = `bird-wrap bird-fly bird-path-${pathIndex} ${reverse ? 'bird-reverse' : ''}`
    wrapper.style.cssText = `top:${top}%;--fly-dur:${duration}s;--fly-delay:${delay}s;--scale:${scale};--vert-dur:${vertDur}s;--flap:${flapSpeed}s;`
    wrapper.appendChild(bird)
    container.appendChild(wrapper)
  }
}

const PARTICLES = Array.from({ length: 18 }, (_, index) => ({
  left: (index * 19 + 7) % 97,
  delay: -((index * 1.37) % 8),
  duration: 7 + ((index * 2.1) % 6),
  size: 3 + (index % 4),
  drift: -28 + ((index * 17) % 57),
}))

const GARLAND_LIGHTS = Array.from({ length: 18 }, (_, index) => ({
  left: (index / 17) * 100,
  dip: Math.sin((index / 17) * Math.PI) * 9,
  delay: -((index * 0.43) % 3.4),
}))

interface CitySceneProps { selectedMonth: number }

export const CityScene = ({ selectedMonth }: CitySceneProps) => {
  const { scrollY } = useScroll()
  const cityY = useTransform(scrollY, [0, 900], [0, 90])
  const birdsRef = useRef<HTMLDivElement>(null)
  const activeCityscape = MONTHLY_CITYSCAPES[selectedMonth] ?? cityscape

  useEffect(() => {
    if (!birdsRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    spawnBirds(birdsRef.current)
  }, [])

  return (
    <>
      <svg className="window-filter-defs" aria-hidden="true" focusable="false">
        <defs>
          <filter id="window-bloom-filter" x="-30%" y="-30%" width="160%" height="160%" colorInterpolationFilters="sRGB">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      .7 .8 -.8 0 -.65"
              result="warmPixels"
            />
            <feComponentTransfer in="warmPixels" result="windowPixels">
              <feFuncA type="table" tableValues="0 0 0 .3 .9 1" />
            </feComponentTransfer>
            <feFlood floodColor="#ffd278" floodOpacity="1" result="warmColor" />
            <feComposite in="warmColor" in2="windowPixels" operator="in" result="windowCore" />
            <feGaussianBlur in="windowCore" stdDeviation="2.4" result="windowHalo" />
            <feMerge>
              <feMergeNode in="windowHalo" />
              <feMergeNode in="windowCore" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <AnimatePresence initial={false}>
        <motion.img
          key={activeCityscape}
          className="cityscape-image"
          src={activeCityscape}
          alt=""
          aria-hidden="true"
          style={{ y: cityY, scale: 1.08 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      <div className="cityscape-shade" aria-hidden="true" />
      {BLOOM_LAYERS.map((layer) => (
        <motion.img
          key={layer}
          className={`window-bloom window-bloom--${layer}`}
          src={activeCityscape}
          alt=""
          aria-hidden="true"
          style={{ y: cityY, scale: 1.08 }}
        />
      ))}
      <div className="season-particles" aria-hidden="true">
        {PARTICLES.map((particle, index) => (
          <span
            key={index}
            style={{
              left: `${particle.left}%`,
              '--particle-delay': `${particle.delay}s`,
              '--particle-duration': `${particle.duration}s`,
              '--particle-size': `${particle.size}px`,
              '--particle-drift': `${particle.drift}px`,
            } as CSSProperties}
          />
        ))}
      </div>
      <div className="weather-layer" aria-hidden="true">
        <div className="frost-vignette" />
        <div className="swan-pair"><i /><i /></div>
        <div className="stork-flight"><i /><i /></div>
        <div className="april-drizzle" />
        <div className="may-bee" />
        <div className="river-boat"><i /></div>
        <div className="summer-firework" />
        <div className="august-heat-haze" />
        <div className="river-canoe"><i /></div>
        <div className="migration-flock"><i /><i /><i /><i /><i /></div>
        <div className="october-fog october-fog--one" />
        <div className="october-fog october-fog--two" />
        <div className="october-fog october-fog--three" />
        <div className="witch-flight">
          <i className="witch-hat" />
          <i className="witch-head" />
          <i className="witch-body" />
          <i className="witch-broom" />
        </div>
        <div className="storm-flash" />
        <div className="christmas-market-glow" />
        <div className="christmas-garland christmas-garland--left">
          {GARLAND_LIGHTS.map((light, index) => (
            <i
              key={`left-${index}`}
              style={{
                left: `${light.left}%`,
                '--bulb-dip': `${light.dip}px`,
                '--bulb-delay': `${light.delay}s`,
              } as CSSProperties}
            />
          ))}
        </div>
        <div className="christmas-garland christmas-garland--right">
          {GARLAND_LIGHTS.slice(0, 10).map((light, index) => (
            <i
              key={`right-${index}`}
              style={{
                left: `${(index / 9) * 100}%`,
                '--bulb-dip': `${Math.sin((index / 9) * Math.PI) * 7}px`,
                '--bulb-delay': `${light.delay}s`,
              } as CSSProperties}
            />
          ))}
        </div>
      </div>
      <div ref={birdsRef} className="birds-layer" aria-hidden="true" />
    </>
  )
}
