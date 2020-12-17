import {h} from 'preact'
import {Link} from 'preact-router/match'

import style from './style.css'

const Editor = ({markdown, setMarkdown}) => (
  <section>
    <textarea
      class={ style.textarea }
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
