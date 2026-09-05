import NeuralNetwork from './NeuralNetwork'

const PARTICLES = Array.from({ length: 38 }, (_, i) => {
  const colors = ['#00d4ff', '#3b82f6', '#8b5cf6', '#a855f7', '#60a5fa']
  const size = Math.random() * 2.4 + 1
  const duration = 16 + Math.random() * 22
  const delay = Math.random() * 18
  const left = Math.random() * 100
  const opacity = Math.random() * 0.4 + 0.15
  return {
    id: i,
    color: colors[i % colors.length],
    size,
    duration,
    delay,
    left,
    opacity,
    style: {
      '--particle-size': `${size}px`,
      '--particle-duration': `${duration}s`,
      '--particle-delay': `${delay}s`,
      '--particle-left': `${left}%`,
      '--particle-opacity': opacity,
    } as React.CSSProperties,
  }
})

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid-overlay" />
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />
      <div className="hero-glow hero-glow-c" />

      <div className="particles">
        {PARTICLES.map((p) => (
          <span key={p.id} className="particle" style={p.style} />
        ))}
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Altraxon Labs — Est. 2026
          </div>

          <h1 className="hero-title">
            Engineering
            <span className="gradient-text"> Intelligence </span>
            for the Next Era
          </h1>

          <p className="hero-subtitle">
            Altraxon Labs builds intelligent technologies, adaptive AI systems, and
            next-generation digital solutions — engineered at the frontier of deep
            technology to power what comes next.
          </p>

          <div className="hero-actions">
            <a href="#solutions" className="btn btn-primary">
              Explore Solutions
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
            <a href="#contact" className="btn btn-secondary">
              Start a Conversation
            </a>
          </div>

          <div className="hero-metrics">
            <div className="hero-metric">
              <span className="hero-metric-value">15+</span>
              <span className="hero-metric-label">Research Papers</span>
            </div>
            <div className="hero-metric-sep" />
            <div className="hero-metric">
              <span className="hero-metric-value">8</span>
              <span className="hero-metric-label">AI Models</span>
            </div>
            <div className="hero-metric-sep" />
            <div className="hero-metric">
              <span className="hero-metric-value">50+</span>
              <span className="hero-metric-label">Enterprise Clients</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-frame">
            <NeuralNetwork />
          </div>

          <div className="hero-visual-ring" />
          <div className="hero-visual-core">
            <span className="hero-visual-core-dot" />
          </div>
          <div className="hero-visual-label">
            <span className="hero-visual-pulse" />
            AlettaOS · Neural Core
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 5v14m0 0 6-6m-6 6-6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}