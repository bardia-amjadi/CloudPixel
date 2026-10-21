import { useEffect } from 'react'
import { socialLinks } from '../components/Layout'

export default function Contact() {
  useEffect(() => { document.title = 'Contact — CloudPixel' }, [])
  const links = socialLinks()
  return (
    <section className="container page narrow">
      <h1>Contact</h1>
      <p className="lead">Reach CloudPixel through any of these channels.</p>
      {links.length ? (
        <div className="contact-list">
          {links.map((l) => (
            <a key={l.key} className="card contact" href={l.href} target={l.key === 'email' ? undefined : '_blank'} rel="noopener noreferrer">
              <strong>{l.label}</strong>
              <span className="muted">{l.href.replace(/^mailto:|^https?:\/\//, '')}</span>
            </a>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>Contact links aren’t set up yet</h3>
          <p className="muted">Add your GitHub, email, and social URLs in <code>src/data/site-config.json</code> and they will appear here.</p>
        </div>
      )}
    </section>
  )
}
