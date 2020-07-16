import { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import { Theme } from '@/styles/Theme'
import 'normalize.css'
import '@tsujp/www-assets/fonts/fonts.css'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}

export default MyApp
