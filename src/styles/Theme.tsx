import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import { LightTheme } from '@/styles/LightTheme'

interface IThemeProps {}

export const Theme: React.FC<IThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
