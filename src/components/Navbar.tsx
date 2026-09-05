import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function LogoMark() {
  return (
    <svg width="34" height="32" viewBox="0 0 48 46" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="alx-logo-g" x1="4" y1="46" x2="44" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00d4ff" />
          <stop offset="0.55" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path
        d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
        fill="url(#alx-logo-g)"
      />
      <path
        d="M21.5 43.4V32.6a3 3 0 0 0-3-3H9.4c-1.2 0-1.9-1.4-1.2-2.4l7.6-10.7c1.1-1.5 0-3.6-1.8-3.6H1.5"
        stroke="rgba(238, 241, 255, 0.55)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo" aria-label="Altraxon Labs — Home">
          <LogoMark />
          <span className="nav-logo-text">
            <span className="nav-logo-name">ALTRAXON</span>
            <span className="nav-logo-sub">LABS</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#solutions" className="nav-cta">
          <span>Explore Our Technology</span>
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M3.75 10h12.5M11.5 5.25 16.25 10l-4.75 4.75"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

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
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              style={{ transitionDelay: `${80 + i * 40}ms` }}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-index">{String(i + 1).padStart(2, '0')}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#solutions" className="mobile-cta" onClick={() => setOpen(false)}>
          Explore Our Technology
        </a>
      </div>
    </header>
  )
}