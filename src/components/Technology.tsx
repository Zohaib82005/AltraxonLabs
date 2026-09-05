function IconFrontend() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="5" y="7" width="30" height="26" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 14h30" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
      <circle cx="20" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
    </svg>
  )
}

function IconBackend() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M13 11 5 20l8 9M27 11l8 9-8 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function IconMobileTech() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="13" y="5" width="14" height="30" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 9h6M16 30.5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function IconDatabase() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <ellipse cx="20" cy="9" rx="12" ry="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 9v11c0 2.5 5.4 4.5 12 4.5S32 22.5 32 20V9M8 20v11c0 2.5 5.4 4.5 12 4.5S32 33.5 32 31V20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 30v2m0-11v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

function IconCloudTech() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M12 28a7 7 0 1 1 .5-14 9 9 0 0 1 17.3 2.6A5.5 5.5 0 0 1 29 28Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 33h14M20 28v-5m0 0-3 3m3-3 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
    </svg>
  )
}

function IconAIFrame() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="2.4" fill="currentColor" />
      <path d="M20 7v6m0 14v6M7 20h6m14 0h6M11 11l4.5 4.5M29 11 24.5 15.5M11 29l4.5-4.5M29 29l-4.5-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

const STACK = [
  {
    icon: IconFrontend,
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: IconBackend,
    title: 'Backend & APIs',
    items: ['Node.js', 'Laravel', 'Python', 'REST & GraphQL', 'Express'],
  },
  {
    icon: IconMobileTech,
    title: 'Mobile',
    items: ['Flutter', 'React Native', 'iOS', 'Android'],
  },
  {
    icon: IconDatabase,
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Prisma'],
  },
  {
    icon: IconCloudTech,
    title: 'Cloud & DevOps',
    items: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'CI/CD'],
  },
  {
    icon: IconAIFrame,
    title: 'AI / ML Frameworks',
    items: ['OpenAI APIs', 'LangChain', 'TensorFlow', 'PyTorch', 'Hugging Face'],
  },
]

export default function Technology() {
  return (
    <section id="tech" className="section tech">
      <div className="section-head">
        <p className="section-eyebrow">Technology We Work With</p>
        <h2 className="section-title">
          A modern, practical <span className="gradient-text">stack</span>
        </h2>
        <p className="section-desc">
          Frameworks, platforms, and cloud tooling we use daily — chosen for reliability,
          speed, and the ability to scale with your business.
        </p>
      </div>

      <div className="stack-grid">
        {STACK.map((g, i) => (
          <article
            className="glass-card stack-card"
            key={g.title}
            style={{ '--d': `${(i % 3) * 80}ms` } as React.CSSProperties}
          >
            <div className="stack-head">
              <div className="stack-icon">{g.icon()}</div>
              <span className="stack-index">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3>{g.title}</h3>
            <div className="stack-chips">
              {g.items.map((it) => (
                <span className="stack-chip" key={it}>
                  {it}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}