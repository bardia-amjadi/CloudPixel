import { Link } from 'react-router-dom'
import type { Product } from '../types'
import { isExperimental, statusLabel } from '../lib'
import Img from './Img'

export function StatusBadge({ status }: { status: Product['status'] }) {
  return <span className={`badge badge-${status}`}>{statusLabel[status]}</span>
}

export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <Link to={`/repos/${p.slug}`} className={'card product' + (isExperimental(p) ? ' is-experimental' : '')}>
      <div className="product-top">
        <div className="product-logo">
          <Img src={p.logo} alt={`${p.name} logo`} />
          {!p.logo && <span aria-hidden>{p.name.charAt(0)}</span>}
        </div>
        <StatusBadge status={p.status} />
      </div>
      <h3>{p.name}</h3>
      <p className="muted">{p.description}</p>
      <div className="product-meta">
        {p.category && <span>{p.category}</span>}
        <span>{isExperimental(p) ? 'Experimental project' : 'Official product'}</span>
      </div>
    </Link>
  )
}
