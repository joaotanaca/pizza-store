import 'tailwindcss/tailwind.css'
import Global from '../src/styles/global'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light } from '../src/styles/theme'
import Navbar from '../src/components/organismos/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={light}>
        <Navbar />
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
