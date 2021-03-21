import {useEffect, useState} from 'react'
import {Switch, Route, Link, useParams} from 'react-router-dom'

import './App.css'

const API =
  'https://gist.githubusercontent.com/braedongough/63d00d3035cbabc468e07c5df713d57a/raw/21e0699bd9f48895d90783b22dc1321c47ef34a6/blob-posts.json'

function Post({posts}) {
  const params = useParams()
  const post = posts.find((post) => post.id === Number(params.id))

  return (
    <div>
      {!post ? (
        <div>Not Found</div>
      ) : (
        <div>
          <div>{post.title}</div>
          <p>{post.content}</p>
        </div>
      )}

      <Link to='/'>Go home</Link>
    </div>
  )
}

function Home({posts}) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
          <div>
            Published by 🤖 {post.author} on {post.createdAt}
          </div>
        </li>
      ))}
    </ul>
  )
}

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
      })
  }, [])

  return (
    <div className='app'>
      <h1>HYF MOST Awesome Blog</h1>
      <hr />
      <Switch>
        <Route exact path='/'>
          <Home posts={posts} />
        </Route>

        <Route path='/post/:id' component={<Post posts={posts} />} />
        <Route path='*'>
          <div>404 not found</div>
        </Route>
      </Switch>
    </div>
  )
}

export default App
