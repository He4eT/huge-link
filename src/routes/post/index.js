import {h} from 'preact'
import {Link} from 'preact-router/match'

const emptyControls = null
const previewContorls = 'controls placeholder'

const noop = _ => _
const decode = noop

const Post = ({mode, payload, setMarkdown}) => {
  const [controls, decodeFn] = {
    preview: [previewContorls, noop],
    post: [emptyControls, decode]
  }[mode]

  const markdown = decodeFn(payload)

  setMarkdown(markdown)

  return (<section>
      { controls }

      <article>
        { markdown }
      </article>

      <Link href='/'>
        Edit post
      </Link>
    </section>)
}

export default Post
