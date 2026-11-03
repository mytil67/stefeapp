import { useCallback, useEffect, useRef, useState } from 'react'
import { Check, Eraser, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react'

interface BlurCanvasProps {
  imageBlob: Blob
  onSave: (blurredBlob: Blob) => void
  onCancel: () => void
}

export const BlurCanvas = ({ imageBlob, onSave, onCancel }: BlurCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const maskRef = useRef<HTMLCanvasElement>(null)
  const [brushSize, setBrushSize] = useState(30)
  const [isErasing, setIsErasing] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [painting, setPainting] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const blurredRef = useRef<HTMLCanvasElement | null>(null)

  // Load image and set up canvases
  useEffect(() => {
    const img = new Image()
    const url = URL.createObjectURL(imageBlob)
    img.onload = () => {
      imgRef.current = img
      const canvas = canvasRef.current!
      const mask = maskRef.current!
      canvas.width = img.width
      canvas.height = img.height
      mask.width = img.width
      mask.height = img.height

      // Pre-render blurred version
      const blurCanvas = document.createElement('canvas')
      blurCanvas.width = img.width
      blurCanvas.height = img.height
      const blurCtx = blurCanvas.getContext('2d')!
      blurCtx.filter = 'blur(16px)'
      blurCtx.drawImage(img, 0, 0)
      blurredRef.current = blurCanvas

      render()
      URL.revokeObjectURL(url)
    }
    img.src = url
  }, [imageBlob])

  const render = useCallback(() => {
    const canvas = canvasRef.current
    const mask = maskRef.current
    const img = imgRef.current
    const blurred = blurredRef.current
    if (!canvas || !mask || !img || !blurred) return

    const ctx = canvas.getContext('2d')!
    // Draw original
    ctx.drawImage(img, 0, 0)
    // Draw blurred regions using mask as alpha
    ctx.save()
    ctx.globalCompositeOperation = 'source-over'
    // Create a temp canvas combining blur + mask
    const temp = document.createElement('canvas')
    temp.width = canvas.width
    temp.height = canvas.height
    const tempCtx = temp.getContext('2d')!
    tempCtx.drawImage(blurred, 0, 0)
    tempCtx.globalCompositeOperation = 'destination-in'
    tempCtx.drawImage(mask, 0, 0)
    ctx.drawImage(temp, 0, 0)
    ctx.restore()
  }, [])

  const getCanvasCoords = (e: React.MouseEvent) => {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    }
  }

  const paint = (e: React.MouseEvent) => {
    const mask = maskRef.current
    if (!mask) return
    const ctx = mask.getContext('2d')!
    const { x, y } = getCanvasCoords(e)
    ctx.globalCompositeOperation = isErasing ? 'destination-out' : 'source-over'
    ctx.beginPath()
    ctx.arc(x, y, brushSize, 0, Math.PI * 2)
    ctx.fillStyle = 'white'
    ctx.fill()
    render()
  }

  const onPointerDown = (e: React.MouseEvent) => {
    setPainting(true)
    paint(e)
  }
  const onPointerMove = (e: React.MouseEvent) => {
    if (!painting) return
    paint(e)
  }
  const onPointerUp = () => setPainting(false)

  const resetMask = () => {
    const mask = maskRef.current
    if (!mask) return
    const ctx = mask.getContext('2d')!
    ctx.clearRect(0, 0, mask.width, mask.height)
    render()
  }

  const handleSave = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.toBlob((blob) => {
      if (blob) onSave(blob)
    }, 'image/webp', 0.9)
  }

  return (
    <div className="blur-editor">
      <div className="blur-toolbar">
        <div className="blur-toolbar__group">
          <button type="button" className={`blur-tool ${!isErasing ? 'is-active' : ''}`} onClick={() => setIsErasing(false)} title="Flouter">
            <span className="blur-tool__icon">●</span> Flouter
          </button>
          <button type="button" className={`blur-tool ${isErasing ? 'is-active' : ''}`} onClick={() => setIsErasing(true)} title="Gomme">
            <Eraser aria-hidden="true" /> Gomme
          </button>
          <button type="button" className="blur-tool" onClick={resetMask} title="Réinitialiser">
            <RotateCcw aria-hidden="true" />
          </button>
        </div>
        <div className="blur-toolbar__group">
          <label className="blur-brush-size">
            <span>Taille</span>
            <input type="range" min={8} max={80} value={brushSize} onChange={(e) => setBrushSize(Number(e.target.value))} />
            <span>{brushSize}px</span>
          </label>
        </div>
        <div className="blur-toolbar__group">
          <button type="button" className="blur-tool" onClick={() => setZoom((z) => Math.max(0.25, z - 0.25))} title="Dézoomer">
            <ZoomOut aria-hidden="true" />
          </button>
          <span className="blur-zoom-label">{Math.round(zoom * 100)}%</span>
          <button type="button" className="blur-tool" onClick={() => setZoom((z) => Math.min(3, z + 0.25))} title="Zoomer">
            <ZoomIn aria-hidden="true" />
          </button>
        </div>
        <div className="blur-toolbar__actions">
          <button type="button" className="blur-btn blur-btn--cancel" onClick={onCancel}>Annuler</button>
          <button type="button" className="blur-btn blur-btn--save" onClick={handleSave}><Check aria-hidden="true" /> Enregistrer</button>
        </div>
      </div>
      <div className="blur-canvas-wrap" style={{ overflow: 'auto' }}>
        <canvas
          ref={canvasRef}
          className="blur-canvas"
          style={{ transform: `scale(${zoom})`, transformOrigin: '0 0', cursor: isErasing ? 'crosshair' : `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='${brushSize * 2}' height='${brushSize * 2}'><circle cx='${brushSize}' cy='${brushSize}' r='${brushSize - 1}' fill='none' stroke='%230d7377' stroke-width='2'/></svg>") ${brushSize} ${brushSize}, crosshair` }}
          onMouseDown={onPointerDown}
          onMouseMove={onPointerMove}
          onMouseUp={onPointerUp}
          onMouseLeave={onPointerUp}
        />
        <canvas ref={maskRef} style={{ display: 'none' }} />
      </div>
    </div>
  )
}
