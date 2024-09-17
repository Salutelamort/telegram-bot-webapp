'use client'

import { useRouter, usePathname } from 'next/navigation'
import { createContext, useContext, ReactNode } from 'react'

type NavigationContextType = {
  currentPath: string
  navigate: (path: string) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    throw new Error('useNavigation должен использоваться внутри NavigationProvider')
  }
  return context
}

type NavigationProviderProps = {
  children: ReactNode
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const router = useRouter()
  const pathname = usePathname()

  const navigate = (path: string) => {
    router.push(path)
  }

  const value = {
    currentPath: pathname ?? '/',
    navigate,
  }

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}