import React from 'react'
import Document, { Main, NextScript, Head } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }: any) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />),
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render () {
    const { styleTags } = this.props as any

    return (
      <html lang='en'>
        <Head>
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='/static/assets/favicon.ico'
          />
          <meta data-charset='utf-8' key='charset' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <meta name='theme-color' content='#252527' />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
