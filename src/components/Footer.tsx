const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Research', href: '#research' },
      { label: 'Projects', href: '#projects' },
      { label: 'Careers', href: '#contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Adaptive AI Systems', href: '#solutions' },
      { label: 'Intelligent Automation', href: '#solutions' },
      { label: 'Data Intelligence', href: '#solutions' },
      { label: 'Conversational AI', href: '#solutions' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'solutions@altraxonlabs.ai', href: 'mailto:solutions@altraxonlabs.ai' },
      { label: 'San Francisco, CA', href: '#contact' },
      { label: 'LinkedIn', href: '#contact' },
      { label: 'GitHub', href: '#contact' },
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
    <footer id="contact" className="footer">
      <div className="footer-glow" />
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <FooterLogo />
              <span>
                <strong>ALTRAXON</strong>
                <span className="footer-logo-sub">LABS</span>
              </span>
            </a>
            <p className="footer-tagline">
              Engineering intelligence for the next era. An AI and deep-technology
              research laboratory building the systems that will power tomorrow.
            </p>
          </div>

          <div className="footer-cols">
            {COLUMNS.map((col) => (
              <div className="footer-col" key={col.title}>
                <h4 className="footer-col-title">{col.title}</h4>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary footer-cta">
            Start a Conversation
          </a>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Altraxon Labs. All rights reserved.</p>
          <div className="footer-meta">
            <a href="#home">Privacy</a>
            <a href="#home">Terms</a>
            <a href="#home">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}