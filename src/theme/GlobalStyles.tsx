import { createGlobalStyle } from 'styled-components/macro'

interface IThemeType {
  [key: string]: {
    [key: string]: string
  }
}

interface IThemeProps {
  theme: IThemeType
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
    font-weight: 400;
    font-size: 62.5%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  #root {
    display: flex;
    flex-direction: column;
    background: ${(props: IThemeProps) => props.theme.colours.sitebg};
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
      ${props.theme.dimensions.paddingTopBottom}
      ${props.theme.dimensions.paddingLeftRight}
    `};

    max-width: 1200px;
    width: 100%;
  }

  body {
    font-size: 1.6rem;
    color: ${(props: IThemeProps) => props.theme.colours.text};
  }

  ul {
    list-style: none;
    padding: 0 0;
  }

  a {
    text-decoration: none;
    outline: none;
    color: ${(props: IThemeProps) => props.theme.colours.text};

    &:visited {
      color: ${(props: IThemeProps) => props.theme.colours.text};
    }
  }

  h2 {
    font-size: 2.3rem;
    font-weight: 400;
    margin-bottom: ${(props: IThemeProps) =>
      props.theme.dimensions.h1MarginBottom};

    span {
      color: ${(props: IThemeProps) => props.theme.colours.textLight};
    }
  }
`
