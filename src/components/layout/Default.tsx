import { MainNavigation } from '@/components/navigation/MainNavigation'
import { MainFooter } from '@/components/navigation/MainFooter'

export const DefaultLayout = ({ children }: { children: any }) => {
  return (
    <>
      <MainNavigation />
      <section id='contentRender'>{children}</section>
      <MainFooter />
    </>
  )
}
