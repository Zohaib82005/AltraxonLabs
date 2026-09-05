import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Industries', href: '#industries' },
]

function useOnHome() {
  const location = useLocation()
  return location.pathname === '/'
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onHome = useOnHome()
  const prevPath = useRef(location.pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const pathChanged = prevPath.current !== location.pathname
    prevPath.current = location.pathname

    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''))
      if (el) {
        el.scrollIntoView()
        return
      }
    }

    if (pathChanged) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  const hrefFor = (href: string) => (onHome ? href : `/#${href.slice(1)}`)

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" aria-label="Altraxon Labs — Home" onClick={() => setOpen(false)}>
          <img src="/logo.png" width={40} alt="" />
          <span className="nav-logo-text">
            <span className="nav-logo-name">ALTRAXON</span>
            <span className="nav-logo-sub">LABS</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} to={hrefFor(link.href)} onClick={() => setOpen(false)} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        <Link to={onHome ? '#contact' : '/contact#contact-form'} className="nav-cta">
          <span>Start Your Project</span>
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M3.75 10h12.5M11.5 5.25 16.25 10l-4.75 4.75"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <button
          type="button"
          className={`mobile-toggle ${open ? 'active' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              to={hrefFor(link.href)}
              className="mobile-link"
              style={{ transitionDelay: `${80 + i * 40}ms` }}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-index">{String(i + 1).padStart(2, '0')}</span>
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mobile-link"
            style={{ transitionDelay: `${80 + NAV_LINKS.length * 40}ms` }}
            onClick={() => setOpen(false)}
          >
            <span className="mobile-index">{String(NAV_LINKS.length + 1).padStart(2, '0')}</span>
            Contact
          </Link>
        </nav>
        <Link to="/contact" className="mobile-cta" onClick={() => setOpen(false)}>
          Start Your Project
        </Link>
      </div>
    </header>
  )
}