import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Img from '../components/Img'
import { posts } from '../blog'
import { formatDate } from '../lib'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  useEffect(() => { document.title = post ? `${post.title} — CloudPixel` : 'Not found — CloudPixel' }, [post])

  if (!post) {
    return (
      <section className="container page narrow">
        <h1>Post not found</h1>
        <p className="lead">There is no post at this address.</p>
        <Link to="/blog" className="btn btn-primary">Back to blog</Link>
      </section>
    )
  }

  return (
    <article className="container page narrow">
      <Link to="/blog" className="text-link back">All posts</Link>
      <div className="detail-tags muted">
        {post.date && <span>{formatDate(post.date)}</span>}
        <span>{post.minutes} min read</span>
      </div>
      <h1>{post.title}</h1>
      {post.description && <p className="lead">{post.description}</p>}
      <Img src={post.cover} alt="" className="hero-image" />
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
