import { useRef, useState } from 'react'
import { ImagePlus, Lock, LogOut, Trash2, Pencil } from 'lucide-react'
import { APPS } from '../data/content'
import { useScreenshots, type Screenshot } from '../hooks/useScreenshots'
import { useEditMode } from '../hooks/useEditMode'
import { BlurCanvas } from './BlurCanvas'

export const EditPanel = () => {
  const { editMode, login, logout } = useEditMode()
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [selectedProject, setSelectedProject] = useState(APPS[0].id)
  const [editingScreenshot, setEditingScreenshot] = useState<Screenshot | null>(null)
  const { screenshots, add, remove, update } = useScreenshots(selectedProject)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const ok = await login(password)
    if (!ok) { setError(true); setPassword('') }
  }

  const handleUpload = async (files: FileList | null) => {
    if (!files) return
    for (const file of Array.from(files)) {
      if (!file.type.startsWith('image/')) continue
      await add(file)
    }
  }

  if (!editMode) {
    return (
      <div className="edit-gate">
        <form onSubmit={handleLogin} className="edit-gate__form">
          <Lock aria-hidden="true" />
          <p>Mode édition sécurisée</p>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false) }}
            placeholder="Mot de passe"
            autoFocus
          />
          {error && <span className="edit-gate__error">Mot de passe incorrect</span>}
          <button type="submit">Accéder</button>
        </form>
      </div>
    )
  }

  if (editingScreenshot) {
    return (
      <BlurCanvas
        imageBlob={editingScreenshot.blob}
        onSave={async (blurredBlob) => {
          await update(editingScreenshot.id, blurredBlob)
          setEditingScreenshot(null)
        }}
        onCancel={() => setEditingScreenshot(null)}
      />
    )
  }

  return (
    <div className="edit-panel">
      <div className="edit-panel__header">
        <h3>Gestion des captures</h3>
        <button type="button" className="edit-panel__logout" onClick={logout}><LogOut aria-hidden="true" /> Quitter</button>
      </div>

      <div className="edit-panel__projects">
        {APPS.map((app) => (
          <button
            key={app.id}
            type="button"
            className={`edit-project-tab ${selectedProject === app.id ? 'is-active' : ''}`}
            onClick={() => setSelectedProject(app.id)}
          >
            {app.name}
          </button>
        ))}
      </div>

      <div className="edit-panel__upload">
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(e) => handleUpload(e.target.files)}
        />
        <button type="button" className="edit-upload-btn" onClick={() => fileRef.current?.click()}>
          <ImagePlus aria-hidden="true" /> Ajouter des captures
        </button>
        <p className="edit-hint">Glissez ou sélectionnez des images. Utilisez l'outil flou pour masquer les données sensibles.</p>
      </div>

      <div
        className="edit-panel__grid"
        onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('is-dragover') }}
        onDragLeave={(e) => e.currentTarget.classList.remove('is-dragover')}
        onDrop={(e) => {
          e.preventDefault()
          e.currentTarget.classList.remove('is-dragover')
          handleUpload(e.dataTransfer.files)
        }}
      >
        {screenshots.length === 0 && (
          <div className="edit-empty">
            <ImagePlus aria-hidden="true" />
            <p>Aucune capture pour ce projet.<br />Glissez des images ici.</p>
          </div>
        )}
        {screenshots.map((s) => (
          <div key={s.id} className="edit-thumb">
            <img src={s.thumbnail} alt="" />
            <div className="edit-thumb__actions">
              <button type="button" title="Flouter des données" onClick={() => setEditingScreenshot(s)}>
                <Pencil aria-hidden="true" />
              </button>
              <button type="button" title="Supprimer" onClick={() => remove(s.id)}>
                <Trash2 aria-hidden="true" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
