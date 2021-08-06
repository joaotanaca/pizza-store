import 'styled-components'

declare module '*.webp'
declare module '*.svg'
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    text: string
    background: string
    backgroundSales: string
    primary: string
    secondary: string
  }
}
