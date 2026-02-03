import { useState } from 'react'

export function useSidebar() {
  const [open, setOpen] = useState(false)
  return { open, setOpen }
}
