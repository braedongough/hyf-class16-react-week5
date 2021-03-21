import {useQuery, useLoading, useUsers, useError} from './UserContext'
import './App.css'

function UserSearch() {
  const {setQuery} = useQuery()
  const loading = useLoading()
  const users = useUsers()
  const error = useError()

  const onChange = (event) => {
    const value = event.target.value
    setQuery(value)
  }
  return (
    <div className='App'>
      <h1>Github User Search</h1>
      <input type='text' placeholder='User search' onChange={onChange} />
      {loading && <div>Loading...</div>}
      {users && users.length === 0 && <div>No Results</div>}
      {error && <div>{`ERROR: ${error}`}</div>}
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar_url} alt='avatar' width='30px' />
              <span>{user.login}</span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default UserSearch
