import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'What We Build', href: '#work' },
      { label: 'Why Altraxon', href: '#why-us' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '#services' },
      { label: 'Custom Software', href: '#services' },
      { label: 'AI/ML Solutions', href: '#services' },
      { label: 'Business Automation', href: '#services' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Start a Project', href: '/contact' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

function FooterLogo() {
  return (
    <svg width="30" height="29" viewBox="0 0 48 46" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="alx-logo-f" x1="4" y1="46" x2="44" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00d4ff" />
          <stop offset="0.55" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path
        d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
        fill="url(#alx-logo-f)"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <FooterLogo />
              <span>
                <strong>ALTRAXON</strong>
                <span className="footer-logo-sub">LABS</span>
              </span>
            </Link>
            <p className="footer-tagline">
              A modern software house and technology solutions company — helping startups,
              businesses, and organizations design, build, and ship production-ready
              digital products.
            </p>
          </div>

          <div className="footer-cols">
            {COLUMNS.map((col) => (
              <div className="footer-col" key={col.title}>
                <h4 className="footer-col-title">{col.title}</h4>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith('/') ? (
                        <Link to={l.href}>{l.label}</Link>
                      ) : (
                        <Link to={`/#${l.href.slice(1)}`}>{l.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link to="/contact" className="btn btn-primary footer-cta">
            Start a Conversation
          </Link>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Altraxon Labs. All rights reserved.</p>
          <div className="footer-meta">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}