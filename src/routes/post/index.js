import {h} from 'preact'
import {Link} from 'preact-router/match'
import ReactMarkdown from 'react-markdown'

import {
  compressToEncodedURIComponent as encode,
  decompressFromEncodedURIComponent as decode
} from 'lz-string'

const noop = _ => null
const ident = _ => _

const previewContorls = content => (
  <header><nav>
    <ul>
      <li><Link href='/huge-link/'>
        Edit
      </Link></li>
      <li><Link href={ `/huge-link/p/${content}` }>
        Publish
      </Link></li>
    </ul>
  </nav></header>)

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

      <Link href='/huge-link/'>
        Edit post
      </Link>
    </section>)
}

export default Post
