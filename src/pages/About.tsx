import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  useEffect(() => { document.title = 'About — CloudPixel' }, [])
  return (
    <section className="container page narrow">
      <h1>About CloudPixel</h1>
      <p className="lead">CloudPixel is a software development team and product brand.</p>
      <p>We build applications, developer tools, and web products, and we publish them officially under the CloudPixel name. Everything in our catalog is made by us, with its own page, current version, and download or website link.</p>
      <p>Products that are still early are labeled Beta, Alpha, or Experimental, so you always know what to expect before you install or try something.</p>
      <div className="actions">
        <Link to="/repos" className="btn btn-primary">Explore Products</Link>
        <Link to="/contact" className="btn btn-secondary">Contact</Link>
      </div>
    </section>
  )
}
