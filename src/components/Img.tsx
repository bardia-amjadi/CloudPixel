import { useState } from 'react'
import { asset } from '../lib'

/** Renders nothing if the image is missing or fails to load. */
export default function Img({ src, alt, className }: { src?: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return null
  return <img className={className} src={asset(src)} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}
