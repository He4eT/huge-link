import {h} from 'preact'
import {Link} from 'preact-router/match'

import style from './style.css'

const Editor = ({markdown, setMarkdown}) => (
  <section>
    <h1>Huge link</h1>
    <p>
      A&nbsp;minimalist serverless publishing tool
      that allows you to&nbsp;create markdown posts and
      push them to&nbsp;the Web by&nbsp;sharing the link.
    </p>
    <textarea
      class={ style.textarea }
      placeholder="Write a post using markdown and click Preview"
      onInput={ ({target}) => setMarkdown(target.value) }>
        { markdown }
    </textarea>

    <nav>
      <Link href='/preview'>
        Preview
      </Link>
    </nav>
  </section>)

export default Editor
