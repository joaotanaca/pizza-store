import Hero from '../src/components/organismos/Hero'
import SaleContent from '../src/components/organismos/SaleContent'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <SaleContent />
    </>
  )
}
