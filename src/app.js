import {h} from 'preact'
import {useState} from 'preact/hooks'
import {Router} from 'preact-router'

import Editor from './routes/editor'
import Post from './routes/post'

const App = () => {
  const [markdown, setMarkdown] = useState('')

  return (<main>
    <Router>
      <Editor
        path='/'
        markdown={ markdown }
        { ...{setMarkdown} } />
      <Post
        path='/preview/'
        mode='preview'
        payload={ markdown }
        { ...{setMarkdown} } />
      <Post
        path='/p/:payload'
        mode='post'
        { ...{setMarkdown} } />
    </Router>
  </main>)
}

export default App
