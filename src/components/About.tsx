function IconVision() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M4 20s4-8 16-8 16 8 16 8-4 8-16 8S4 20 4 20Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 8.5v4m0 15v4M8.5 20h4m15 0h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" />
    </svg>
  )
}

function IconMission() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="5.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 20l11-11M20 20l-7 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 3.5V7m0 26v3.5M36.5 20H33M7 20H3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function IconPhilosophy() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="m20 3 15 9v16l-15 9-15-9V12l15-9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m20 12 9 5.5v9L20 32l-9-5.5v-9L20 12Z" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <circle cx="20" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="20" r="1.4" fill="currentColor" />
    </svg>
  )
}

const PILLARS = [
  {
    icon: IconVision,
    title: 'Vision',
    text: 'To be the technology partner businesses trust with their most important ideas — and to help them ship software that is not just functional, but genuinely useful, reliable, and built to last for years.',
  },
  {
    icon: IconMission,
    title: 'Mission',
    text: 'Turn business ideas into production-ready digital products. We design pragmatically, engineer rigorously, and support every system long after launch so it keeps compounding value.',
  },
  {
    icon: IconPhilosophy,
    title: 'Core Philosophy',
    text: 'Clarity over complexity, results over style. We choose the right tool for the job, keep our process transparent, and measure success by the outcomes our clients achieve.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <p className="section-eyebrow">About Altraxon Labs</p>
        <span className="about-founded">Founded 2026</span>
        <h2 className="section-title">
          We Turn Ideas Into{' '}
          <span className="gradient-text">Digital Products</span>
        </h2>
        <p className="section-desc">
          Altraxon Labs works with startups, entrepreneurs, and businesses to transform
          ideas, operational challenges, and business requirements into modern software
          solutions — web platforms, SaaS products, AI-powered tools, and automation
          systems built to ship and scale.
        </p>
      </div>

      <div className="about-story">
        <div className="about-story-copy">
          <div className="about-block">
            <h3>The problem we set out to solve</h3>
            <p>
              Great ideas rarely fail for lack of ambition — they fail when they can’t
              find the engineering needed to ship. Many businesses are held back by
              off-the-shelf tools that don’t fit their reality, outsourced code that can’t
              scale, and timelines that slip for months. The result is a persistent gap
              between what businesses can imagine and what they can actually deploy.
            </p>
          </div>
          <div className="about-block">
            <h3>Why Altraxon exists</h3>
            <p>
              We exist to close that gap. Altraxon was founded in 2026 on a simple
              conviction: reliable, well-engineered software is one of the fastest ways
              to move a business forward. We combine modern software engineering with
              AI and automation to build products that are practical, scalable, and
              genuinely worth using.
            </p>
          </div>
        </div>

        <div className="about-core" aria-hidden="true">
          <span className="about-core-ring r1">
            <i className="about-core-sat" />
          </span>
          <span className="about-core-ring r2">
            <i className="about-core-sat" />
          </span>
          <span className="about-core-ring r3" />
          <span className="about-core-dot" />
        </div>
      </div>

      <div className="about-pillars">
        {PILLARS.map((p, i) => (
          <article
            className="glass-card pillar-card"
            key={p.title}
            style={{ '--d': `${i * 90}ms` } as React.CSSProperties}
          >
            <span className="pillar-halo" />
            <div className="pillar-icon">{p.icon()}</div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}