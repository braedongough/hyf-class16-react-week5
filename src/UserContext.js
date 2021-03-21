import {createContext, useContext, useState, useEffect} from 'react'

import {useDebounce} from './use-debounce'

const BASE_URL = `https://api.github.com/search/users`

const UserContext = createContext()

const UserProvider = ({children}) => {
  const [users, setUsers] = useState(null)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const debouncedQuery = useDebounce(query)

  useEffect(() => {
    if (debouncedQuery) {
      setLoading(true)

      fetch(`${BASE_URL}?q=${debouncedQuery}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            setError(data.message)
          } else {
            setUsers(data.items)
          }
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [debouncedQuery])

  const contextValue = {
    users,
    setQuery,
    loading,
    error,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

export const useQuery = () => {
  const {setQuery} = useContext(UserContext)
  return {setQuery}
}

export const useLoading = () => {
  const {loading} = useContext(UserContext)
  return loading
}

export const useUsers = () => {
  const {users} = useContext(UserContext)
  return users
}

export const useError = () => {
  const {error} = useContext(UserContext)
  return error
}

export default UserProvider
