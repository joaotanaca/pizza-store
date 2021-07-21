import 'tailwindcss/tailwind.css'
import Global from '../src/styles/global'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import { light } from '../src/styles/theme'

const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (err) {
    throw err.response.data
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider theme={light}>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  )
}
export default MyApp
