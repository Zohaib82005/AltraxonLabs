function IconBrain() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M8 17a5 5 0 0 1 2.5-9.3A6 6 0 0 1 18 7a6.5 6.5 0 0 1 4 0 6 6 0 0 1 7.5 1A5 5 0 0 1 32 17v4a5 5 0 0 1-3 4.6V28a5.5 5.5 0 1 1-11 0v-1a6 6 0 0 1-2.5-5H16a5 5 0 0 1-8-3v-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M20 13v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function IconAutomation() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 5v30M6 12a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm28 10a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 15h9M31 25h-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function IconData() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="10" r="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="30" r="5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 15v10M9 13l7 6m15-6-7 6M12 25l-5 3m21-3 5 3" stroke="currentColor" strokeWidth="1.4" opacity="0.8" />
      <circle cx="7" cy="28" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="33" cy="28" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  )
}

function IconVoice() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="15" y="6" width="10" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 18h3m18 0h3M12 22v2a8 8 0 0 0 16 0v-2M20 32v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const SOLUTIONS = [
  {
    icon: IconBrain,
    accent: 'cyan',
    title: 'Adaptive AI Systems',
    text: 'Custom machine-learning systems that learn continuously from your enterprise data — prediction, optimization, and decision intelligence at scale.',
    link: 'Explore solution',
    href: '#solutions',
  },
  {
    icon: IconAutomation,
    accent: 'blue',
    title: 'Intelligent Automation',
    text: 'End-to-end automation powered by AI — autonomous workflows, intelligent agents, and orchestration that removes friction from core operations.',
    link: 'Explore solution',
    href: '#solutions',
  },
  {
    icon: IconData,
    accent: 'violet',
    title: 'Data Intelligence',
    text: 'Platforms that transform disconnected signals into clarity — advanced analytics, real-time insight, and predictive modeling built for decision-makers.',
    link: 'Explore solution',
    href: '#solutions',
  },
  {
    icon: IconVoice,
    accent: 'blue',
    title: 'Conversational AI',
    text: 'Enterprise-grade language models that understand nuance, guard privacy, and scale across every channel your customers use.',
    link: 'Explore solution',
    href: '#solutions',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="section solutions">
      <div className="section-head">
        <p className="section-eyebrow">What We Build</p>
        <h2 className="section-title">
          Solutions engineered for <span className="gradient-text">real-world impact</span>
        </h2>
        <p className="section-desc">
          A portfolio of intelligent systems — each designed for a specific mission,
          each built on the same research-grade foundation.
        </p>
      </div>

      <div className="solutions-grid">
        {SOLUTIONS.map((s, i) => (
          <article
            className={`glass-card solution-card accent-${s.accent}`}
            key={s.title}
            style={{ '--d': `${(i % 2) * 100}ms` } as React.CSSProperties}
          >
            <div className="solution-card-accent" />
            <div className="solution-card-icon">{s.icon()}</div>
            <h3 className="solution-card-title">{s.title}</h3>
            <p className="solution-card-text">{s.text}</p>
            <a href={s.href} className="solution-card-link">
              {s.link}
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M3.75 10h12.5M11.5 5.25 16.25 10l-4.75 4.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}