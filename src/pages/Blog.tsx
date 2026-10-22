import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Img from '../components/Img'
import { posts } from '../blog'
import { formatDate } from '../lib'

export default function Blog() {
  useEffect(() => { document.title = 'Blog — CloudPixel' }, [])
  return (
    <section className="container page">
      <h1>Blog</h1>
      <p className="lead">News, releases, and notes from the CloudPixel team.</p>
      {posts.length === 0 ? (
        <div className="empty"><h3>No posts yet</h3><p className="muted">New posts will appear here.</p></div>
      ) : (
        <div className="grid posts">
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="card product post-card">
              <Img src={p.cover} alt="" className="post-cover" />
              <div className="product-meta no-border">
                {p.date && <span>{formatDate(p.date)}</span>}
                <span>{p.minutes} min read</span>
              </div>
              <h3>{p.title}</h3>
              {p.description && <p className="muted">{p.description}</p>}
              {p.tags.length > 0 && <div className="tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>}
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
