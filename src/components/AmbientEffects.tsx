import { useEffect, useRef } from 'react'

/* ══════════════════════════════════════════════
   BIRDS — Pure CSS, curved flight paths
   ══════════════════════════════════════════════ */

function spawnBirds(container: HTMLDivElement) {
  container.innerHTML = ''
  for (let i = 0; i < 5; i++) {
    const wrapper = document.createElement('div')
    const bird = document.createElement('span')
    bird.className = 'bird-body'

    const duration = 18 + Math.random() * 18
    const delay = Math.random() * 24
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

const Birds = () => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    spawnBirds(ref.current)
  }, [])
  return <div ref={ref} className="birds-layer" aria-hidden="true" />
}

/* ══════════════════════════════════════════════
   WINDOW LIGHTS — positioned on building facades
   Small warm rectangles that scintillate.
   ══════════════════════════════════════════════ */

// Positions in % relative to the hero container.
// Grouped by building cluster visible in the illustration.
const WINDOWS: { x: number; y: number; w: number; h: number }[] = [
  // ── Far-left tall building (3 floors visible) ──
  { x: 4.2, y: 44, w: 0.5, h: 0.9 },
  { x: 5.3, y: 44, w: 0.5, h: 0.9 },
  { x: 4.2, y: 48, w: 0.5, h: 0.9 },
  { x: 5.3, y: 48, w: 0.5, h: 0.9 },
  { x: 4.2, y: 52, w: 0.5, h: 0.9 },
  { x: 5.3, y: 52, w: 0.5, h: 0.9 },

  // ── Second building ──
  { x: 7.5, y: 42, w: 0.55, h: 1 },
  { x: 8.8, y: 42, w: 0.55, h: 1 },
  { x: 7.5, y: 46, w: 0.55, h: 1 },
  { x: 8.8, y: 46, w: 0.55, h: 1 },
  { x: 7.5, y: 50, w: 0.55, h: 1 },
  { x: 8.8, y: 50, w: 0.55, h: 1 },
  { x: 7.5, y: 54, w: 0.55, h: 1 },

  // ── Third building (taller, peaked roof) ──
  { x: 11.2, y: 40, w: 0.5, h: 0.9 },
  { x: 12.4, y: 40, w: 0.5, h: 0.9 },
  { x: 11.2, y: 44, w: 0.5, h: 0.9 },
  { x: 12.4, y: 44, w: 0.5, h: 0.9 },
  { x: 11.2, y: 48, w: 0.5, h: 0.9 },
  { x: 12.4, y: 48, w: 0.5, h: 0.9 },
  { x: 11.2, y: 52, w: 0.5, h: 0.9 },

  // ── Fourth building ──
  { x: 14.5, y: 43, w: 0.5, h: 0.9 },
  { x: 15.6, y: 43, w: 0.5, h: 0.9 },
  { x: 14.5, y: 47, w: 0.5, h: 0.9 },
  { x: 15.6, y: 47, w: 0.5, h: 0.9 },
  { x: 14.5, y: 51, w: 0.5, h: 0.9 },
  { x: 15.6, y: 51, w: 0.5, h: 0.9 },

  // ── Small buildings near bridge ──
  { x: 18, y: 50, w: 0.4, h: 0.7 },
  { x: 19.2, y: 49, w: 0.4, h: 0.7 },
  { x: 20.5, y: 51, w: 0.4, h: 0.7 },
]

const ANIM_VARIANTS = [
  'twinkle-slow',
  'twinkle-fast',
  'twinkle-flicker',
  'twinkle-gentle',
]

export const WindowLights = () => (
  <div className="windows-layer" aria-hidden="true">
    {WINDOWS.map((w, i) => {
      // Keep the pattern stable between renders while retaining an irregular rhythm.
      const stayDark = i % 7 === 3
      if (stayDark) return null
      const variant = ANIM_VARIANTS[i % ANIM_VARIANTS.length]
      const delay = ((i * 1.73) % 8.4).toFixed(1)
      const dur = (5.8 + ((i * 2.17) % 7.1)).toFixed(1)
      return (
        <span
          key={i}
          className={`win-light ${variant}`}
          style={{
            left: `${w.x}%`,
            top: `${w.y + 13}%`,
            width: `${w.w * 0.55}%`,
            height: `${w.h * 0.55}%`,
            animationDelay: `-${delay}s`,
            animationDuration: `${dur}s`,
          }}
        />
      )
    })}
  </div>
)

export const AmbientEffects = () => (
  <>
    <Birds />
    <WindowLights />
  </>
)
