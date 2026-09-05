function IconStrategy() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.4" opacity="0.65" />
      <path d="M20 20l7-7M20 14v4h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    </svg>
  )
}

function IconUx() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="28" height="22" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 13h28M10 10h.01M14 10h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
      <path d="m13 29 3-3h8l3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <path d="M15 16v9l3.5-4M25 22v-5M28 19v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function IconDev() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M14 10 5 20l9 10M26 10l9 10-9 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    </svg>
  )
}

function IconAI() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 7c1.2 3.1 2.9 4.8 6 6-3.1 1.2-4.8 2.9-6 6-1.2-3.1-2.9-4.8-6-6 3.1-1.2 4.8-2.9 6-6Z"
        fill="currentColor"
      />
      <circle cx="20" cy="23" r="5" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
      <path d="M20 18a9 9 0 0 0 0 10 9 9 0 0 0 0-10Z" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
    </svg>
  )
}

function IconTesting() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 6l11 4v9c0 7-4.6 12.6-11 15C13.6 31.6 9 26 9 19v-9l11-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m14 20 4.5 4.5L27 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </svg>
  )
}

function IconLaunch() {
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

function IconImprove() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 7v5m0-5 2.8 2.8M20 7l-2.8 2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <path d="M33 20h-6.5m0 0 3-3m-3 3 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    </svg>
  )
}

const FLOW = [
  { icon: IconStrategy, label: 'Strategy' },
  { icon: IconUx, label: 'UI / UX' },
  { icon: IconDev, label: 'Development' },
  { icon: IconAI, label: 'AI Integration' },
  { icon: IconTesting, label: 'Testing' },
  { icon: IconLaunch, label: 'Deployment' },
  { icon: IconImprove, label: 'Continuous Improvement' },
]

export default function IdeaProduct() {
  return (
    <section id="how-it-works" className="section pipeline">
      <div className="section-head">
        <p className="section-eyebrow">Idea → Product</p>
        <h2 className="section-title">
          From concept to <span className="gradient-text">finished product</span>
        </h2>
        <p className="section-desc">
          One continuous flow turns an idea into a working digital product — passing
          through strategy, design, development, AI integration, testing, deployment,
          and continuous improvement.
        </p>
      </div>

      <div className="pipeline-track">
        {FLOW.map((f, i) => (
          <div className="pipeline-step" key={f.label}>
            <div className="pipeline-node">
              {f.icon()}
              <span className="pipeline-num">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <span className="pipeline-label">{f.label}</span>
            {i < FLOW.length - 1 && (
              <span className="pipeline-link" aria-hidden="true">
                <svg viewBox="0 0 32 8" fill="none">
                  <path
                    d="M0 4h26M22 1l4 3-4 3"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="pipeline-note">
        <span className="pipeline-note-mark" /> Every project passes through the full
        flow end to end — nothing is skipped, nothing is rushed.
      </div>
    </section>
  )
}