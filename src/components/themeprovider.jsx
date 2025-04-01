"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({
  isDarkMode: true,
  toggleDarkMode: () => {},
})

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Apply dark mode class to html element
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

