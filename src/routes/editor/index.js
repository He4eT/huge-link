import {h} from 'preact'
import {Link} from 'preact-router/match'

const Editor = ({markdown, setMarkdown}) => (
  <section>
    <textarea
      onInput={ ({target}) => setMarkdown(target.value) }>
        { markdown }
    </textarea>

    <Link href='/preview'>
      Preview
    </Link>
	</section>)

export default Editor
