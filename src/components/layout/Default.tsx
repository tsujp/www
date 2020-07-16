import { MainFooter } from '@/components/navigation/MainFooter'

export const DefaultLayout = ({ children }: { children: any }) => {
  return (
    <>
      <section id='contentRender'>{children}</section>
      <MainFooter />
    </>
  )
}
