import {useState, useEffect} from 'react'

export const useDebounce = (query) => {
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    if (query) {
      const timeout = setTimeout(() => {
        setDebouncedQuery(query)
      }, 500)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [query])

  return debouncedQuery
}
