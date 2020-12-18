import {h} from 'preact'
import {useState} from 'preact/hooks'
import {Router} from 'preact-router'

import Editor from './routes/editor'
import Post from './routes/post'

import './style/typography.css'
import './style'

const App = () => {
  const [markdown, setMarkdown] = useState('')

  return (<main>
    <Router>
      <Editor
        path='/huge-link/'
        markdown={ markdown }
        { ...{setMarkdown} } />
      <Post
        path='/huge-link/preview/'
        mode='preview'
        payload={ markdown }
        { ...{setMarkdown} } />
      <Post
        path='/huge-link/p/:payload'
        mode='post'
        { ...{setMarkdown} } />
    </Router>
  </main>)
}

export default App
