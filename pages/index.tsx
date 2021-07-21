import useSWR from 'swr'
import Pill from '../src/moleculas/Pill'
import Hero from '../src/organismos/Hero'
import Navbar from '../src/organismos/Navbar'

export default function Home() {
  const { data, error } = useSWR('/api/categories', { initialData: [] })
  return (
    <>
      <Navbar />
      <Hero />
      {data?.map((category: string) => (
        <Pill id={category.toLowerCase()} key={category} active={false}>
          {category}
        </Pill>
      ))}
    </>
  )
}
