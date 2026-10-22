import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Repos from './pages/Repos'
import ProductDetail from './pages/ProductDetail'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <section className="container page narrow">
      <h1>Page not found</h1>
      <p className="lead">That address doesn’t exist on this site.</p>
      <Link className="btn btn-primary" to="/">Back to home</Link>
    </section>
  )
}

export default function App() {
  const { pathname } = useLocation()
  return (
    <Layout>
      <ScrollToTop />
      <ErrorBoundary resetKey={pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/repos/:slug" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </ErrorBoundary>
    </Layout>
  )
}
