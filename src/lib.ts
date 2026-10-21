import products from './data/products.json'
import type { Product } from './types'

export const allProducts = products as Product[]

export const statusLabel: Record<Product['status'], string> = {
  stable: 'Stable',
  beta: 'Beta',
  alpha: 'Alpha',
  experimental: 'Experimental',
}

/** Local paths resolve from /public; full URLs are used as-is. */
export const asset = (p: string) => (/^(https?:)?\/\//.test(p) ? p : '/' + p.replace(/^\/+/, ''))

export const isExperimental = (p: Product) => p.status === 'experimental'

export function videoEmbed(url: string): { kind: 'file' | 'iframe'; src: string } {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{6,})/)
  if (yt) return { kind: 'iframe', src: `https://www.youtube-nocookie.com/embed/${yt[1]}` }
  return /\.(mp4|webm|ogg)(\?|$)/i.test(url) ? { kind: 'file', src: asset(url) } : { kind: 'iframe', src: url }
}

export const formatDate = (d: string) => {
  const date = new Date(d)
  return isNaN(date.getTime()) ? d : date.toLocaleDateString('en', { year: 'numeric', month: 'long', day: 'numeric' })
}
