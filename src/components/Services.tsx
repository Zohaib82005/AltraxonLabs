function IconBusiness() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="5" y="12" width="30" height="22" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 19h30" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
      <path d="M12 12V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 23h8M16 28h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function IconAiApps() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 7c1.2 3.1 2.9 4.8 6 6-3.1 1.2-4.8 2.9-6 6-1.2-3.1-2.9-4.8-6-6 3.1-1.2 4.8-2.9 6-6Z"
        fill="currentColor"
      />
      <rect x="8" y="16" width="24" height="17" rx="3.5" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
      <path d="M12 21h16M12 26h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
    </svg>
  )
}

function IconSaaS() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="m20 6 12 6.5v15L20 34 8 27.5v-15L20 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 12.5 20 19l12-6.5M20 19v15" stroke="currentColor" strokeWidth="1.5" opacity="0.65" />
      <path d="M20 14.5 28 9.5M14 26v5l14-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function IconAutomation() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M6 20h4m0 0 3-5m-3 5 3 5M30 20h4m0 0-3-5m3 5-3 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
      <circle cx="16" cy="20" r="1.2" fill="currentColor" />
      <circle cx="24" cy="20" r="1.2" fill="currentColor" opacity="0.75" />
    </svg>
  )
}

function IconWebPlat() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="5" y="7" width="30" height="26" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 14h30" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
      <circle cx="20" cy="23" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 18a9 9 0 0 0 0 10 9 9 0 0 0 0-10Zm-5 2.5h10M15 25.5h10" stroke="currentColor" strokeWidth="1.2" opacity="0.75" />
    </svg>
  )
}

function IconMobile() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="13" y="5" width="14" height="30" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 9h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      <path d="M16 30.5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      <path d="M20.5 25.4 24 30l4.5-9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
    </svg>
  )
}

function IconData() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M6 33h28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 25v8M17 18v15M24 11v22M31 21v12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M10 25l4-4 4 2 3-6 3 3 4-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
    </svg>
  )
}

function IconIntegrate() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M14 12h.01M26 12h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <rect x="7" y="9" width="26" height="22" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 25l7-6m0 0 3 2 4-5 5 3 7-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
      <circle cx="14" cy="24" r="1.2" fill="currentColor" opacity="0.8" />
      <circle cx="26" cy="9" r="1.2" fill="currentColor" opacity="0.8" />
    </svg>
  )
}

const ACCENTS = ['cyan', 'blue', 'violet']

const VIZ_PATTERNS = [
  [60, 85, 45, 75, 95],
  [80, 55, 90, 60, 70],
  [45, 75, 95, 55, 85],
  [70, 50, 85, 90, 60],
  [55, 90, 60, 80, 45],
  [85, 60, 75, 45, 95],
  [65, 45, 90, 70, 80],
  [50, 80, 65, 95, 55],
]

const SOLUTIONS = [
  {
    icon: IconBusiness,
    title: 'Business Software',
    desc: 'Custom systems that run daily operations — CRM, ERP, inventory, logistics, and back-office tools built around your actual workflows.',
    tags: ['CRM', 'ERP', 'Back Office', 'Logistics'],
  },
  {
    icon: IconAiApps,
    title: 'AI-Powered Applications',
    desc: 'Practical AI woven into real products: smart search, document processing, support assistants, and decision support that saves hours every week.',
    tags: ['LLMs', 'Document AI', 'Smart Search', 'Recommendations'],
  },
  {
    icon: IconSaaS,
    title: 'SaaS Platforms',
    desc: 'Multi-tenant web products with subscriptions, billing, secure accounts, and dashboards — engineered to launch and scale.',
    tags: ['Multi-Tenant', 'Subscriptions', 'Billing', 'API-First'],
  },
  {
    icon: IconAutomation,
    title: 'Workflow Automation',
    desc: 'Repetitive processes run themselves — approvals, notifications, data syncing, and integrations between the tools you already use.',
    tags: ['Approvals', 'Integrations', 'Triggers', 'Notifications'],
  },
  {
    icon: IconWebPlat,
    title: 'Web Platforms',
    desc: 'Marketing sites, corporate portals, e-commerce, and admin dashboards — fast, responsive, and search-engine ready.',
    tags: ['Next.js', 'E-Commerce', 'Portals', 'CMS'],
  },
  {
    icon: IconMobile,
    title: 'Mobile Applications',
    desc: 'iOS and Android apps for your customers and your field teams — built with Flutter for polished, reliable experiences.',
    tags: ['Flutter', 'iOS & Android', 'Field Apps', 'Offline-Ready'],
  },
  {
    icon: IconData,
    title: 'Data-Driven Systems',
    desc: 'Dashboards, analytics, and reporting that turn scattered data into clear decisions — with pipelines built to stay accurate.',
    tags: ['Dashboards', 'Reporting', 'Pipelines', 'Forecasting'],
  },
  {
    icon: IconIntegrate,
    title: 'Custom Integrations',
    desc: 'Connect your systems and third-party APIs — payments, ERP, CRM, messaging, and legacy software — into one coherent stack.',
    tags: ['REST & Webhooks', 'Payments', 'ERP / CRM', 'Legacy'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="section-head">
        <p className="section-eyebrow">What We Do</p>
        <h2 className="section-title">
          From Business Problems to{' '}
          <span className="gradient-text">Digital Solutions</span>
        </h2>
        <p className="section-desc">
          Most businesses don’t need more software — they need software that solves a
          specific problem. We design and build the right technology for each one:
          practical, modern, and built to ship.
        </p>
      </div>

      <div className="svc-grid">
        {SOLUTIONS.map((s, i) => (
          <article
            className={`glass-card svc-card accent-${ACCENTS[i % 3]}`}
            key={s.title}
            style={{ '--d': `${(i % 4) * 80}ms` } as React.CSSProperties}
          >
            <div className="svc-card-top">
              <div className="svc-card-icon">{s.icon()}</div>
              <span className="svc-card-index">{String(i + 1).padStart(2, '0')}</span>
            </div>

            <h3>{s.title}</h3>
            <p className="svc-card-desc">{s.desc}</p>

            <div className="svc-viz" aria-hidden="true">
              {VIZ_PATTERNS[i].map((h, j) => (
                <span key={j} style={{ height: `${h}%` }} />
              ))}
            </div>

            <div className="svc-tags">
              {s.tags.map((t) => (
                <span className="svc-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="svc-card-foot">
              <a href="#contact" className="svc-card-cta">
                Discuss Your Project
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
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}