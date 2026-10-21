import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import config from '../data/site-config.json'
import { allProducts } from '../lib'

export default function Home() {
  useEffect(() => { document.title = 'CloudPixel — Software, products, development' }, [])
  const official = allProducts.filter((p) => p.status !== 'experimental')
  const featured = (official.some((p) => p.featured) ? official.filter((p) => p.featured) : official).slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Software built and published by CloudPixel.</h1>
            <p className="lead">{config.description}</p>
            <div className="actions">
              <Link to="/repos" className="btn btn-primary">Explore Products</Link>
              <Link to="/about" className="btn btn-secondary">About CloudPixel</Link>
            </div>
          </div>
          <div className="hero-mark" aria-hidden>
            <div className="glow" />
            <img src="/assets/logo.png" alt="" width={360} height={360} />
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Featured products</h2>
          <Link to="/repos" className="text-link">View all products</Link>
        </div>
        {featured.length ? (
          <div className="grid">{featured.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
        ) : (
          <div className="empty">
            <h3>No products published yet</h3>
            <p className="muted">Official CloudPixel products will appear here as soon as they are added to the catalog.</p>
          </div>
        )}
      </section>
    </>
  )
}
