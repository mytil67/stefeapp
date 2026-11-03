import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Screenshot } from '../hooks/useScreenshots'

interface ScreenshotGalleryProps {
  screenshots: Screenshot[]
}

export const ScreenshotGallery = ({ screenshots }: ScreenshotGalleryProps) => {
  const [active, setActive] = useState(0)
  const [fullUrls, setFullUrls] = useState<string[]>([])

  // Create object URLs for full-res display
  useEffect(() => {
    const urls = screenshots.map((s) => URL.createObjectURL(s.blob))
    setFullUrls(urls)
    return () => urls.forEach(URL.revokeObjectURL)
  }, [screenshots])

  const count = screenshots.length
  const safeActive = useMemo(() => Math.min(active, count - 1), [active, count])

  if (count === 0) return null

  return (
    <div className="screenshot-gallery">
      <div className="screenshot-gallery__viewport">
        {fullUrls[safeActive] && (
          <img
            src={fullUrls[safeActive]}
            alt={`Capture ${safeActive + 1} sur ${count}`}
            className="screenshot-gallery__image"
            draggable={false}
          />
        )}
        {count > 1 && (
          <>
            <button
              type="button"
              className="screenshot-nav screenshot-nav--prev"
              onClick={() => setActive((i) => (i - 1 + count) % count)}
              aria-label="Capture précédente"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="screenshot-nav screenshot-nav--next"
              onClick={() => setActive((i) => (i + 1) % count)}
              aria-label="Capture suivante"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>
      {count > 1 && (
        <div className="screenshot-gallery__dots">
          {screenshots.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`screenshot-dot ${i === safeActive ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Capture ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
