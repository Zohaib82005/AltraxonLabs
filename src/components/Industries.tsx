function IconStartups() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="m20 5 11 6v6l-11 6-11-6v-6l11-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 17v6l11 6 11-6v-6" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M16 27.5V20l4-2.5L24 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  )
}

function IconEcommerce() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 12h3l2.5 14h14L31 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="33" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="28" cy="33" r="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 20h17M28 20l1-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function IconEducation() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="m20 6 16 8-16 8-16-8 16-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10 19v8c0 1.7 4.5 3.5 10 3.5s10-1.8 10-3.5v-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M33 12v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
    </svg>
  )
}

function IconHealthcare() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 5c5 4.8 11 9.6 11 16a11 11 0 0 1-22 0c0-6.4 6-11.2 11-16Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M20 17v9M15.5 21.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
    </svg>
  )
}

function IconFinance() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M6 33h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 24h6l-4-4 4-4 7 8 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
      <path d="M8 12v17M32 12v17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
    </svg>
  )
}

function IconRealEstate() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M6 18 20 6l14 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 16v16m20-16v16M14 32h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M17 32v-8h6v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  )
}

function IconLogistics() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 19h13v9H5v-4a5 5 0 0 1 3-4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M21 22h6l5 3v3h-11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" opacity="0.8" />
      <circle cx="13" cy="31" r="2.8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="29" cy="31" r="2.8" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
      <path d="M14 28h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function IconProfServices() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 34a12 12 0 0 1 24 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 7l4-1v6l-4 1V7Zm10 0 4-1v6l-4 1V7Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  )
}

// Editable — swap descriptions as the portfolio grows.
const INDUSTRIES = [
  {
    icon: IconStartups,
    title: 'Startups',
    desc: 'MVPs, product launches, and scalable foundations that move fast without breaking.',
  },
  {
    icon: IconEcommerce,
    title: 'E-Commerce',
    desc: 'Storefronts, catalogs, payments, and back-office tools that drive online selling.',
  },
  {
    icon: IconEducation,
    title: 'Education',
    desc: 'Learning platforms, student portals, and admin systems for modern education.',
  },
  {
    icon: IconHealthcare,
    title: 'Healthcare',
    desc: 'Patient-facing apps, scheduling, and secure data handling for health teams.',
  },
  {
    icon: IconFinance,
    title: 'Finance',
    desc: 'Dashboards, reporting, and workflow tools for financial operations.',
  },
  {
    icon: IconRealEstate,
    title: 'Real Estate',
    desc: 'Listing platforms, property portals, and lead management for real estate.',
  },
  {
    icon: IconLogistics,
    title: 'Logistics',
    desc: 'Tracking, dispatching, and operations software for supply chains in motion.',
  },
  {
    icon: IconProfServices,
    title: 'Professional Services',
    desc: 'Client portals, knowledge tools, and internal systems for service firms.',
  },
]

export default function Industries() {
  return (
    <section id="industries" className="section industries">
      <div className="section-head">
        <p className="section-eyebrow">Industries We Serve</p>
        <h2 className="section-title">
          Software built for <span className="gradient-text">real industries</span>
        </h2>
        <p className="section-desc">
          Every industry runs on different rules, data, and workflows. We build the
          systems that fit each one — with the same engineering standard throughout.
        </p>
      </div>

      <div className="ind-grid">
        {INDUSTRIES.map((ind, i) => (
          <article
            className="glass-card ind-card"
            key={ind.title}
            style={{ '--d': `${(i % 4) * 80}ms` } as React.CSSProperties}
          >
            <span className="ind-accent" />
            <div className="ind-icon">{ind.icon()}</div>
            <h3>{ind.title}</h3>
            <p>{ind.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}