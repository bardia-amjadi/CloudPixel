import { useEffect, useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { allProducts } from '../lib'

export default function Repos() {
  useEffect(() => { document.title = 'Repos — CloudPixel' }, [])
  const [q, setQ] = useState('')
  const matches = useMemo(() => {
    const s = q.trim().toLowerCase()
    return s ? allProducts.filter((p) => `${p.name} ${p.description}`.toLowerCase().includes(s)) : allProducts
  }, [q])
  const official = matches.filter((p) => p.status !== 'experimental')
  const experimental = matches.filter((p) => p.status === 'experimental')

  return (
    <section className="container page">
      <h1>Repos</h1>
      <p className="lead">The official CloudPixel product catalog. Experimental projects are listed separately.</p>
      <div className="search">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products…"
          aria-label="Search products by name or description"
        />
      </div>

      {allProducts.length === 0 && (
        <div className="empty"><h3>No products published yet</h3><p className="muted">Check back soon.</p></div>
      )}
      {allProducts.length > 0 && matches.length === 0 && (
        <div className="empty"><h3>No matches</h3><p className="muted">Nothing matches “{q}”. Try a different name or keyword.</p></div>
      )}

      {official.length > 0 && (
        <>
          <h2 className="group-title">Official products</h2>
          <div className="grid">{official.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
        </>
      )}
      {experimental.length > 0 && (
        <>
          <h2 className="group-title">Experimental projects</h2>
          <p className="muted group-note">Early work that may change or be discontinued. Not official releases.</p>
          <div className="grid">{experimental.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
        </>
      )}
    </section>
  )
}
