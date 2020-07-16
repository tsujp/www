import { createGlobalStyle } from 'styled-components'
import { ITheme } from '@/styles'

interface IThemeProps {
  theme: ITheme
}

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  html, input {
    font-family: 'TTInterphases-Regular', sans-serif;
    font-weight: 400;
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-size: 1.6rem;
    color: ${(props: IThemeProps) => props.theme.colour.text};
  }

  #root {
    display: flex;
    flex-direction: column;
    background: ${(props: IThemeProps) => props.theme.colour.sitebg};
    min-height: 100vh;
  }

  #mainNav {
    position: relative;
  }

  #contentRender {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    position: relative;
    padding: ${(props: IThemeProps) => `
      ${props.theme.size.padTB}
      ${props.theme.size.padLR}
    `};

    max-width: 1200px;
    width: 100%;
  }

  ul {
    list-style: none;
    padding: 0 0;
  }

  a {
    text-decoration: none;
    outline: none;
    color: ${(props: IThemeProps) => props.theme.colour.text};

    &:visited {
      color: ${(props: IThemeProps) => props.theme.colour.text};
    }
  }
`
