function IconModern() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="9" y="9" width="22" height="22" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 9v22M9 20h22" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <circle cx="20" cy="20" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" />
    </svg>
  )
}

function IconScalable() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="m20 5 13 7.5L20 20 7 12.5 20 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 20l13 7.5L33 20M7 27.5 20 35l13-7.5" stroke="currentColor" strokeWidth="1.5" opacity="0.65" />
    </svg>
  )
}

function IconUserFocus() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.4" opacity="0.6" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
      <path d="M20 7v3m0 23v-3M7 20h3m23 0h-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function IconReliable() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 5 32 10v11c0 8-5 13-12 15-7-2-12-7-12-15V10L20 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m14.5 20 4 4 7-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconAiIntegration() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="9" y="13" width="22" height="15" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 7v6M14 19h.01M26 19h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.8" />
      <circle cx="15" cy="22" r="1.8" fill="currentColor" />
      <circle cx="25" cy="22" r="1.8" fill="currentColor" />
      <path d="M13 28v3h14v-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function IconAutomation() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 12v-6m0 28v-6M12 20H6m28 0h-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <path d="m14.5 14.5-3.5-3.5m18 0-3.5 3.5m3.5 18-3.5-3.5m-14.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      <circle cx="20" cy="20" r="2.6" fill="currentColor" />
    </svg>
  )
}

function IconSupport() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
      <path d="m10 10 6 6m8 8 6 6M30 10l-6 6m-8 8-6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

const REASONS = [
  {
    icon: IconModern,
    title: 'Modern Technology',
    desc: 'We build with today’s best tools and frameworks, so you are not locked into yesterday’s stack.',
  },
  {
    icon: IconScalable,
    title: 'Scalable Architecture',
    desc: 'Systems engineered to grow smoothly from launch day to enterprise scale.',
  },
  {
    icon: IconUserFocus,
    title: 'User-Focused Design',
    desc: 'Clear interfaces your customers and teams actually enjoy using.',
  },
  {
    icon: IconReliable,
    title: 'Reliable Development',
    desc: 'Clear timelines, tested code, honest communication, and dependable delivery.',
  },
  {
    icon: IconAiIntegration,
    title: 'AI Integration',
    desc: 'Intelligence embedded where it genuinely adds value — not for show.',
  },
  {
    icon: IconAutomation,
    title: 'Automation',
    desc: 'Repetitive processes streamlined and automated across your operations.',
  },
  {
    icon: IconSupport,
    title: 'Long-Term Support',
    desc: 'We stay after launch — maintaining, monitoring, and evolving your product.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="section why">
      <div className="section-head">
        <p className="section-eyebrow">Why Altraxon Labs</p>
        <h2 className="section-title">
          The partner you want{' '}
          <span className="gradient-text">building your product</span>
        </h2>
        <p className="section-desc">
          Technology alone doesn’t ship software — discipline, care, and partnership
          do. Here’s what we bring to every engagement.
        </p>
      </div>

      <div className="why-grid">
        {REASONS.map((r, i) => (
          <article
            className="glass-card why-item"
            key={r.title}
            style={{ '--d': `${i * 70}ms` } as React.CSSProperties}
          >
            <div className="why-item-icon">{r.icon()}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </article>
        ))}

        <a href="#contact" className="glass-card why-cta-card" style={{ '--d': '500ms' } as React.CSSProperties}>
          <span className="why-cta-label">Your project here</span>
          <strong>Have an idea? Let’s build it.</strong>
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M3.75 10h12.5M11.5 5.25 16.25 10l-4.75 4.75"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}