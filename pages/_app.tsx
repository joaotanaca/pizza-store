import 'tailwindcss/tailwind.css'
import Global from '../src/styles/global'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Navbar from '../src/components/organismos/Navbar'
import GlobalContext from '../src/components/organismos/GlobalContext'
import FloatCart from '../src/components/organismos/FloatCart'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalContext>
        <Navbar />
        <FloatCart />
        <Global />
        <Component {...pageProps} />
      </GlobalContext>
    </>
  )
}
export default MyApp
