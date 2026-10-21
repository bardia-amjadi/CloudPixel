import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Img from '../components/Img'
import { StatusBadge } from '../components/ProductCard'
import { allProducts, formatDate, isExperimental, videoEmbed } from '../lib'

export default function ProductDetail() {
  const { slug } = useParams()
  const p = allProducts.find((x) => x.slug === slug)
  useEffect(() => { document.title = p ? `${p.name} — CloudPixel` : 'Not found — CloudPixel' }, [p])

  if (!p) {
    return (
      <section className="container page narrow">
        <h1>Product not found</h1>
        <p className="lead">There is no product at this address.</p>
        <Link to="/repos" className="btn btn-primary">Browse all products</Link>
      </section>
    )
  }

  const downloads = p.downloads?.filter((d) => d.url?.trim()) ?? []
  const l = p.links ?? {}
  const video = p.video ? videoEmbed(p.video) : null
  const facts: [string, string][] = [
    p.version ? ['Version', p.version] : null,
    p.releaseDate ? ['Released', formatDate(p.releaseDate)] : null,
    p.category ? ['Category', p.category] : null,
    p.platforms?.length ? ['Platforms', p.platforms.join(', ')] : null,
  ].filter(Boolean) as [string, string][]

  return (
    <section className="container page">
      <Link to="/repos" className="text-link back">All products</Link>
      <div className="detail-head">
        <div className="product-logo big">
          <Img src={p.logo} alt={`${p.name} logo`} />
          {!p.logo && <span aria-hidden>{p.name.charAt(0)}</span>}
        </div>
        <div>
          <div className="detail-tags">
            <StatusBadge status={p.status} />
            <span className="muted">{isExperimental(p) ? 'Experimental project' : 'Official product'}</span>
          </div>
          <h1>{p.name}</h1>
          <p className="lead">{p.description}</p>
        </div>
      </div>

      <div className="actions">
        {downloads.map((d, i) => (
          <a key={d.url} className={'btn ' + (i === 0 ? 'btn-primary' : 'btn-secondary')} href={d.url} target="_blank" rel="noopener noreferrer">{d.label}</a>
        ))}
        {l.website && <a className="btn btn-primary" href={l.website} target="_blank" rel="noopener noreferrer">Visit Website</a>}
        {l.releases && <a className="btn btn-secondary" href={l.releases} target="_blank" rel="noopener noreferrer">GitHub Releases</a>}
        {l.github && <a className="btn btn-secondary" href={l.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {l.docs && <a className="btn btn-secondary" href={l.docs} target="_blank" rel="noopener noreferrer">Documentation</a>}
      </div>

      <Img src={p.image} alt={`${p.name} main`} className="hero-image" />

      {facts.length > 0 && (
        <dl className="facts">
          {facts.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
        </dl>
      )}

      {video && (
        <div className="block">
          <h2>Promo video</h2>
          <div className="video">
            {video.kind === 'file'
              ? <video src={video.src} controls preload="metadata" />
              : <iframe src={video.src} title={`${p.name} video`} allowFullScreen loading="lazy" />}
          </div>
        </div>
      )}

      {p.screenshots?.length ? (
        <div className="block">
          <h2>Screenshots</h2>
          <div className="gallery">
            {p.screenshots.map((s) => <Img key={s} src={s} alt={`${p.name} screenshot`} />)}
          </div>
        </div>
      ) : null}

      <div className="two-col">
        {p.features?.length ? (
          <div className="block">
            <h2>Features</h2>
            <ul className="list">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
        ) : null}
        {p.requirements?.length ? (
          <div className="block">
            <h2>System requirements</h2>
            <ul className="list">{p.requirements.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}
