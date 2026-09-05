function IconDiscover() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.7" />
      <path d="M24 24 34 34" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.4" opacity="0.65" />
      <path d="M10 16h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function IconPlan() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="7" y="5" width="26" height="30" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 12h26" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
      <path d="m13 22 3 3 6-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <path d="M13 30h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

function IconDesign() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M5 29 24 10l7 7L12 36l-7 1 0-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 13l7 7" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
      <path d="M5 33h12M31 5v6m0-6 2 2m0 2-2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function IconDevelop() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M14 10 5 20l9 10M26 10l9 10-9 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="1.5" fill="currentColor" />
    </svg>
  )
}

function IconTest() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 6l11 4v9c0 7-4.6 12.6-11 15C13.6 31.6 9 26 9 19v-9l11-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m14 20 4.5 4.5L27 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    </svg>
  )
}

function IconDeploy() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 6c4.5 3.2 6.8 8.2 6.8 13.4l-2.6 8.6h-8.4L13.2 19.4C13.2 14.2 15.5 9.2 20 6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M20 16v8M17 21l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <path d="M20 28v6M15.5 34h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function IconScale() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M6 33h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 5v28M19 11v22M12 18v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 5l4 4m-4-4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  )
}

const STAGES = [
  {
    n: '01',
    icon: IconDiscover,
    title: 'Discover',
    text: 'We dig into your business, your goals, and your constraints — then define exactly what the solution must do.',
  },
  {
    n: '02',
    icon: IconPlan,
    title: 'Plan',
    text: 'Scope, architecture, timelines, and priorities locked in — so everyone knows what gets built and when.',
  },
  {
    n: '03',
    icon: IconDesign,
    title: 'Design',
    text: 'Clean interfaces and solid data models designed together — working the way your team actually works.',
  },
  {
    n: '04',
    icon: IconDevelop,
    title: 'Develop',
    text: 'Agile sprints with continuous integration — code built in small, reviewable, working steps.',
  },
  {
    n: '05',
    icon: IconTest,
    title: 'Test',
    text: 'Automated and manual testing before anything ships — quality, edge cases, and security checked.',
  },
  {
    n: '06',
    icon: IconDeploy,
    title: 'Deploy',
    text: 'Smooth rollouts with zero-downtime releases — and your team trained and ready on day one.',
  },
  {
    n: '07',
    icon: IconScale,
    title: 'Scale',
    text: 'We stay close after launch — monitoring, iterating, and supporting as your product grows.',
  },
]

export default function Approach() {
  return (
    <section id="process" className="section approach">
      <div className="section-head">
        <p className="section-eyebrow">Our Development Process</p>
        <h2 className="section-title">
          From idea to live, <span className="gradient-text">stage by stage</span>
        </h2>
        <p className="section-desc">
          Seven clearly defined stages take your project from first conversation to shipped,
          supported software — with no surprises along the way.
        </p>
      </div>

      <div className="approach-track">
        {STAGES.map((s, i) => (
          <div className="approach-fragment" key={s.n}>
            <article
              className="glass-card approach-step"
              style={{ '--d': `${i * 80}ms` } as React.CSSProperties}
            >
              <span className="approach-node" />
              <span className="approach-num">{s.n}</span>
              <div className="approach-icon">{s.icon()}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
            {i < STAGES.length - 1 && (
              <span className="approach-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}