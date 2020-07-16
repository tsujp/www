import 'styled-components'
import { ITheme } from '@/styles'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
