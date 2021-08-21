import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <AppContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </AppContext.Provider>
  )
}

//hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}
