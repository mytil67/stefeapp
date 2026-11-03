import { useCallback, useEffect, useState } from 'react'

export interface Screenshot {
  id: string
  projectId: string
  blob: Blob
  thumbnail: string // data URL for quick display
  order: number
  createdAt: number
}

const DB_NAME = 'stefe-screenshots'
const STORE_NAME = 'screenshots'
const DB_VERSION = 1

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' })
        store.createIndex('projectId', 'projectId', { unique: false })
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

async function getAllForProject(projectId: string): Promise<Screenshot[]> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly')
    const index = tx.objectStore(STORE_NAME).index('projectId')
    const req = index.getAll(projectId)
    req.onsuccess = () => resolve((req.result as Screenshot[]).sort((a, b) => a.order - b.order))
    req.onerror = () => reject(req.error)
  })
}

async function putScreenshot(screenshot: Screenshot): Promise<void> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    tx.objectStore(STORE_NAME).put(screenshot)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

async function deleteScreenshot(id: string): Promise<void> {
  const db = await openDB()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    tx.objectStore(STORE_NAME).delete(id)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

function generateThumbnail(blob: Blob, maxSize = 400): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image()
    const url = URL.createObjectURL(blob)
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ratio = Math.min(maxSize / img.width, maxSize / img.height, 1)
      canvas.width = img.width * ratio
      canvas.height = img.height * ratio
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      URL.revokeObjectURL(url)
      resolve(canvas.toDataURL('image/webp', 0.7))
    }
    img.src = url
  })
}

export function useScreenshots(projectId: string | null) {
  const [screenshots, setScreenshots] = useState<Screenshot[]>([])
  const [loading, setLoading] = useState(false)

  const refresh = useCallback(async () => {
    if (!projectId) { setScreenshots([]); return }
    setLoading(true)
    const items = await getAllForProject(projectId)
    setScreenshots(items)
    setLoading(false)
  }, [projectId])

  useEffect(() => { refresh() }, [refresh])

  const add = useCallback(async (blob: Blob) => {
    if (!projectId) return
    const thumbnail = await generateThumbnail(blob)
    const screenshot: Screenshot = {
      id: `${projectId}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      projectId,
      blob,
      thumbnail,
      order: screenshots.length,
      createdAt: Date.now(),
    }
    await putScreenshot(screenshot)
    await refresh()
  }, [projectId, screenshots.length, refresh])

  const remove = useCallback(async (id: string) => {
    await deleteScreenshot(id)
    await refresh()
  }, [refresh])

  const update = useCallback(async (id: string, newBlob: Blob) => {
    const existing = screenshots.find((s) => s.id === id)
    if (!existing) return
    const thumbnail = await generateThumbnail(newBlob)
    await putScreenshot({ ...existing, blob: newBlob, thumbnail })
    await refresh()
  }, [screenshots, refresh])

  return { screenshots, loading, add, remove, update, refresh }
}

// Global hook to get all screenshots across projects (for cards)
export function useAllScreenshots() {
  const [map, setMap] = useState<Record<string, Screenshot[]>>({})

  useEffect(() => {
    (async () => {
      const db = await openDB()
      const tx = db.transaction(STORE_NAME, 'readonly')
      const req = tx.objectStore(STORE_NAME).getAll()
      req.onsuccess = () => {
        const all = req.result as Screenshot[]
        const grouped: Record<string, Screenshot[]> = {}
        for (const s of all) {
          if (!grouped[s.projectId]) grouped[s.projectId] = []
          grouped[s.projectId].push(s)
        }
        for (const key of Object.keys(grouped)) {
          grouped[key].sort((a, b) => a.order - b.order)
        }
        setMap(grouped)
      }
    })()
  }, [])

  return map
}
