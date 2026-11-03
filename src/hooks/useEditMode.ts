import { useCallback, useState } from 'react'

const EDIT_KEY = 'stefe-edit-mode'
// SHA-256 of the password — change this hash to set your own password
// Default password: "stefe2026" → hash below
const PASSWORD_HASH = '226ad886c0dfaed44d2ff4e19a6c6f27174547b80b2c059caa4bdf98639e4e41'

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('')
}

export function useEditMode() {
  const [active, setActive] = useState(() => sessionStorage.getItem(EDIT_KEY) === 'true')

  const login = useCallback(async (password: string): Promise<boolean> => {
    const hash = await sha256(password)
    if (hash === PASSWORD_HASH) {
      sessionStorage.setItem(EDIT_KEY, 'true')
      setActive(true)
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem(EDIT_KEY)
    setActive(false)
  }, [])

  return { editMode: active, login, logout }
}
