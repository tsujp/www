import Head from 'next/head'
import { DefaultLayout } from '@/components/layout/Default'

export const Layout = ({
  children,
  title = 'Jordan Coppard',
}: {
  children: any
  title?: string
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content="Jordan's personal website, portfolio, about, blog, and knowledge."
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <DefaultLayout>{children}</DefaultLayout>
    </>
  )
}
