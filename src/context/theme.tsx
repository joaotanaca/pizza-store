/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '../styles/theme'

interface TTheme {
  toggleTheme(): void
  theme: Theme
}

interface Theme {
  name: string
  text: string
  background: string
  backgroundSales: string
  primary: string
  secondary: string
}

const ThemeContext = createContext<TTheme>({} as TTheme)

export const useCustomTheme = () => useContext(ThemeContext)

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(light)

  const toggleTheme = useCallback(() => {
    if (theme.name === 'light') {
      setTheme(dark)
    } else if (theme.name === 'dark') {
      setTheme(light)
    }
  }, [theme])

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
