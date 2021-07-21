import 'tailwindcss/tailwind.css'
import Global from '../src/styles/global'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light } from '../src/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={light}>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
