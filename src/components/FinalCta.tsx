export default function FinalCta() {
  return (
    <section id="contact" className="section cta">
      <div className="cta-panel glass-card">
        <div className="cta-grid-overlay" />
        <div className="cta-halo cta-halo-a" />
        <div className="cta-halo cta-halo-b" />

        <p className="section-eyebrow centered">Get Started</p>
        <h2 className="cta-title">
          Have an Idea? <span className="gradient-text">Let’s Build It.</span>
        </h2>
        <p className="cta-desc">
          Bring your software idea to Altraxon Labs — a web platform, an AI-powered
          product, your first SaaS, or a complete digital overhaul. We’ll turn it into
          production-ready software.
        </p>

        <div className="cta-actions">
          <a href="mailto:solutions@altraxonlabs.ai" className="btn btn-primary">
            Start Your Project
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
          <a href="mailto:solutions@altraxonlabs.ai" className="btn btn-secondary">
            Book a Call
          </a>
        </div>

        <p className="cta-note">Typically responds within 24 hours.</p>
      </div>
    </section>
  )
}