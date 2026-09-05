import { Link } from 'react-router-dom'

export default function FinalCta() {
  return (
    <section id="contact" className="section cta">
      <div className="cta-panel glass-card">
        <div className="cta-grid-overlay" />
        <div className="cta-halo cta-halo-a" />
        <div className="cta-halo cta-halo-b" />

        <p className="section-eyebrow centered">Get Started</p>
        <h2 className="cta-title">
          Ready to Build Something <span className="gradient-text">Extraordinary?</span>
        </h2>
        <p className="cta-desc">
          Bring your idea to Altraxon Labs — a SaaS product, an AI-powered application,
          a custom platform, or a complete digital transformation. We’ll turn it into
          production-ready software.
        </p>

        <div className="cta-actions">
          <Link to="/contact" className="btn btn-primary">
            Start a Project
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
          <a href="#services" className="btn btn-secondary">
            Explore Our Services
          </a>
        </div>

        <p className="cta-note">Typically responds within 24 hours.</p>
      </div>
    </section>
  )
}