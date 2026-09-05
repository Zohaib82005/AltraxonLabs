function IconChip() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="7" y="7" width="26" height="26" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="13" width="14" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 4v5M20 31v5M4 20h5M31 20h5M8 9l3.5 3.5M32 9l-3.5 3.5M8 31l3.5-3.5M32 31l-3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

function IconResearch() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M12 5v30M26 5v30M12 10h14M12 19h14M12 28h14M9 5h30M9 35h30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 4 32 9v11c0 8-5 13.5-12 16-7-2.5-12-8-12-16V9L20 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m14.5 20 4 4 7-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const VALUES = [
  {
    icon: IconChip,
    title: 'Research-Driven',
    text: 'Every product we ship is forged in the laboratory — grounded in peer-reviewed research and validated through rigorous experimentation.',
  },
  {
    icon: IconResearch,
    title: 'Built to Scale',
    text: 'Our architectures are production-grade from day one: distributed, observable, and engineered to perform under real-world enterprise load.',
  },
  {
    icon: IconShield,
    title: 'Ethical by Design',
    text: 'Safety, transparency, and responsible AI are not add-ons. They are the foundation of every system we design and deploy.',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <p className="section-eyebrow">Who We Are</p>
        <h2 className="section-title">
          A deep-technology company shaping{' '}
          <span className="gradient-text">the future of intelligence</span>
        </h2>
        <p className="section-desc">
          Founded in 2026, Altraxon Labs is an AI and deep-technology startup building the
          intelligent systems that will define the next decade — from adaptive neural
          architectures to next-generation digital infrastructure.
        </p>
      </div>

      <div className="about-grid">
        {VALUES.map((v, i) => (
          <article className="glass-card about-card" key={v.title} style={{ '--d': `${i * 90}ms` } as React.CSSProperties}>
            <div className="about-card-icon">{v.icon()}</div>
            <h3 className="about-card-title">{v.title}</h3>
            <p className="about-card-text">{v.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}