import { useEffect, useRef, useState } from 'react'
import { CalendarDays, RotateCcw, Sparkles } from 'lucide-react'
import { AMBIENCES } from '../data/ambiences'

interface AmbiencePickerProps {
  currentMonth: number
  selectedMonth: number
  onSelect: (month: number) => void
}

export const AmbiencePicker = ({ currentMonth, selectedMonth, onSelect }: AmbiencePickerProps) => {
  const [open, setOpen] = useState(false)
  const controlRef = useRef<HTMLDivElement>(null)
  const selected = AMBIENCES[selectedMonth]

  useEffect(() => {
    if (!open) return
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!controlRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  return (
    <div className="ambience-control" ref={controlRef}>
      <button
        type="button"
        className="ambience-toggle"
        aria-expanded={open}
        aria-controls="ambience-archive"
        onClick={() => setOpen((value) => !value)}
      >
        <Sparkles aria-hidden="true" />
        <span>{selected.shortLabel}</span>
      </button>
      {open && (
        <div className="ambience-panel" id="ambience-archive" role="dialog" aria-label="Archives des ambiances saisonnières">
          <div className="ambience-panel__heading">
            <div>
              <span><CalendarDays aria-hidden="true" /> Archives saisonnières</span>
              <strong>{selected.title}</strong>
            </div>
            {selectedMonth !== currentMonth && (
              <button type="button" onClick={() => onSelect(currentMonth)} className="ambience-reset">
                <RotateCcw aria-hidden="true" /> Aujourd’hui
              </button>
            )}
          </div>
          <div className="ambience-grid" role="listbox" aria-label="Choisir un mois">
            {AMBIENCES.map((ambience) => (
              <button
                type="button"
                key={ambience.month}
                role="option"
                aria-selected={selectedMonth === ambience.month}
                className={selectedMonth === ambience.month ? 'is-active' : ''}
                onClick={() => onSelect(ambience.month)}
              >
                <span>{ambience.shortLabel}</span>
                <small>{ambience.label}</small>
                {ambience.month === currentMonth && <i>maintenant</i>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
