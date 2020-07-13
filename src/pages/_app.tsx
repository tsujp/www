import Footer from '@/components/navigation/MainFooter'
import { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import 'normalize.css'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
