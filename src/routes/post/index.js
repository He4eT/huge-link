import {h} from 'preact'
import {Link} from 'preact-router/match'
import ReactMarkdown from 'react-markdown'

const previewContorls = content => (
  <header><nav>
    <ul>
      <li><Link href='/'>
        Edit
      </Link></li>
      <li><Link href={ `/p/${content}` }>
        Publish
      </Link></li>
    </ul>
  </nav></header>)

const noop = _ => null
const ident = _ => _

const decode = x => decodeURIComponent(atob(x))
const encode = x => btoa(encodeURIComponent(x))

const Post = ({mode, payload, setMarkdown}) => {
  const [controls, decodeFn, encodeFn] = {
    preview: [previewContorls, ident, encode],
    post: [noop, decode, ident]
  }[mode]

  const markdown = decodeFn(payload)
  const encoded = encodeFn(payload)

  setMarkdown(markdown)

  return (<section>
      { controls(encoded) }

      <article>
        <ReactMarkdown>
          { markdown }
        </ReactMarkdown>
      </article>

      <Link href='/'>
        Edit post
      </Link>
    </section>)
}

export default Post
