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

export default App
