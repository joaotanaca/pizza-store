import 'tailwindcss/tailwind.css'
import Global from '../src/styles/global'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { light } from '../src/styles/theme'
import Navbar from '../src/components/organismos/Navbar'
import GlobalContext from '../src/components/organismos/GlobalContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalContext>
        <ThemeProvider theme={light}>
          <Navbar />
          <Global />
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalContext>
    </>
  )
}
export default MyApp
