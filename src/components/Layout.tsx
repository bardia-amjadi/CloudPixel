import { useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import config from '../data/site-config.json'

const nav = [
  { to: '/', label: 'Home', end: true },
  { to: '/repos', label: 'Repos' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export const socialLinks = () => {
  const l = config.links as Record<string, string>
  const labels: Record<string, string> = {
    github: 'GitHub', email: 'Email', x: 'X', linkedin: 'LinkedIn',
    telegram: 'Telegram', instagram: 'Instagram', youtube: 'YouTube',
  }
  return Object.entries(labels)
    .filter(([k]) => l[k]?.trim())
    .map(([k, label]) => ({
      key: k,
      label,
      href: k === 'email' && !l[k].startsWith('mailto:') ? `mailto:${l[k]}` : l[k],
    }))
}

export default function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const links = socialLinks()
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="CloudPixel home">
            <img src="/assets/logo.png" alt="" width={36} height={36} />
            <span>Cloud<b>Pixel</b></span>
          </Link>
          <button className="menu-btn" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
          <nav className={'nav' + (open ? ' open' : '')}>
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end} onClick={() => setOpen(false)}>{n.label}</NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="brand small">
              <img src="/assets/logo.png" alt="" width={28} height={28} />
              <span>Cloud<b>Pixel</b></span>
            </div>
            <p className="muted">{config.tagline}</p>
          </div>
          <div className="footer-links">
            {links.map((l) => (
              <a key={l.key} href={l.href} target={l.key === 'email' ? undefined : '_blank'} rel="noopener noreferrer">{l.label}</a>
            ))}
            <Link to="/repos">Repos</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="container footer-bottom muted">© {new Date().getFullYear()} CloudPixel</div>
      </footer>
    </>
  )
}
