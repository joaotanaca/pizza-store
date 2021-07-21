import useSWR from 'swr'

export function useFetch<Data = unknown>(url: string) {
  const { data, error } = useSWR<Data>(url, async (url) => {
    const response = await fetch(url)
    const data = response.json()
    return data
  })
  return { data, error, isLoading: !data && !error }
}
