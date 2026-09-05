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

function IconCustom() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M14 10 5 20l9 10M26 10l9 10-9 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 18c.8 1.2 1.2 1.6 1.2 2s-.4.8-1.2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function IconAiFirst() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 7c1.2 3.1 2.9 4.8 6 6-3.1 1.2-4.8 2.9-6 6-1.2-3.1-2.9-4.8-6-6 3.1-1.2 4.8-2.9 6-6Z"
        fill="currentColor"
      />
      <path d="M8 30h12.5M26.5 27.5l12-6M26.5 34.5l12-10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
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

function IconCleanUx() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="5" y="7" width="30" height="26" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 14h30" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
      <path d="m13 24 4.5 4.5 9-11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </svg>
  )
}

function IconTransparency() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="26" cy="26" r="7" stroke="currentColor" strokeWidth="1.6" opacity="0.75" />
      <path d="M18.5 18.5a10 10 0 0 1 3-3 10 10 0 0 1-3 3Z" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

function IconPartnership() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="13.5" cy="14" r="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="26.5" cy="14" r="5" stroke="currentColor" strokeWidth="1.6" opacity="0.75" />
      <path d="M6.5 33a7 7 0 0 1 14 0M19.5 33a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20 24 16 17h8l-4-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
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
    icon: IconCustom,
    title: 'Custom Solutions',
    desc: 'Bespoke systems built around how your business actually works — not around a generic template.',
  },
  {
    icon: IconAiFirst,
    title: 'AI-First Thinking',
    desc: 'Intelligence embedded early — where it genuinely saves time, not as an afterthought.',
  },
  {
    icon: IconScalable,
    title: 'Scalable Architecture',
    desc: 'Systems engineered to grow smoothly from launch day to enterprise scale.',
  },
  {
    icon: IconCleanUx,
    title: 'Clean User Experience',
    desc: 'Clear interfaces your customers and teams actually enjoy using every day.',
  },
  {
    icon: IconTransparency,
    title: 'Transparent Development',
    desc: 'Honest timelines, visible progress, and direct communication at every step.',
  },
  {
    icon: IconPartnership,
    title: 'Long-Term Partnership',
    desc: 'We stay after launch — maintaining, monitoring, and evolving your product with you.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="section why">
      <div className="section-head">
        <p className="section-eyebrow">Why Choose Altraxon Labs</p>
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