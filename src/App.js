// import {useQuery, useLoading, useUsers, useError} from './UserContext'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom'

function Post() {
  const params = useParams()
  return <div>WE ARE on post {params.blogId}</div>
}

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>ROUTING</h1>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/about'>ABOUT</Link>
          </li>
          <li>
            <Link to='/hidden'>HIDDEN</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/about'>
            <div>now we are on the about page</div>
          </Route>
          <Route path='/about/fun'>
            <div>now we are on the about page</div>
          </Route>
          <Route exact path='/post/:blogId'>
            <Post />
          </Route>
          <Route path='/hidden'>THIS IS MY HIDDEN ROUTE</Route>
        </Switch>
      </div>
    </Router>
  )
}

// function App() {
//   const {setQuery} = useQuery()
//   const loading = useLoading()
//   const users = useUsers()
//   const error = useError()

//   const onChange = (event) => {
//     const value = event.target.value
//     setQuery(value)
//   }
//   return (
//     <div className='App'>
//       <h1>Github User Search</h1>
//       <input type='text' placeholder='User search' onChange={onChange} />
//       {loading && <div>Loading...</div>}
//       {users && users.length === 0 && <div>No Results</div>}
//       {error && <div>{`ERROR: ${error}`}</div>}
//       <ul>
//         {users &&
//           users.map((user) => (
//             <li key={user.id}>
//               <img src={user.avatar_url} alt='avatar' width='30px' />
//               <span>{user.login}</span>
//             </li>
//           ))}
//       </ul>
//     </div>
//   )
// }

export default App
