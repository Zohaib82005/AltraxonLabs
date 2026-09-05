import { useState } from 'react'

const FILTERS = ['All', 'Web', 'SaaS', 'AI', 'Automation', 'Mobile', 'Custom Software']

/*
 * Add real engagements here. Keep the same shape:
 * category — one of the FILTERS above (Excluding "All")
 * title / sector — short description; add the client name when confirmed
 * challenge / solution / outcome — qualitative copy, no invented numbers
 */
const PROJECTS = [
  {
    id: 'logistics-web',
    category: 'Web',
    color: 'cyan',
    sector: 'Logistics',
    title: 'Order-Management Web Platform',
    challenge:
      'Orders lived in spreadsheets and email. The operations team needed one reliable place to track, pick, and dispatch work without duplicating data.',
    solution:
      'A fast web platform with a clear order pipeline, role-based access for office and field staff, and a customer-facing order status page.',
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    features: ['Live order pipeline', 'Role-based access', 'Customer status portal', 'Export & reporting'],
    outcome:
      'Replaced manual spreadsheet tracking with a single source of truth — staff save time every week and clients always see current status.',
  },
  {
    id: 'saas-field-ops',
    category: 'SaaS',
    color: 'blue',
    sector: 'Field Services',
    title: 'Field-Service Operations SaaS',
    challenge:
      'A growing services business needed multi-tenant software to run jobs, scheduling, and billing for several branches out of one system.',
    solution:
      'A subscription SaaS platform with secure per-company workspaces, a planning calendar, invoicing, and an analytics dashboard.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'AWS'],
    features: ['Multi-tenant workspaces', 'Planning & dispatch calendar', 'Invoicing & payments', 'Usage analytics'],
    outcome:
      'One system runs the whole operation — onboarding a new branch no longer means duplicating tools or re-training staff.',
  },
  {
    id: 'ai-doc-search',
    category: 'AI',
    color: 'violet',
    sector: 'Professional Services',
    title: 'AI-Assisted Document Search',
    challenge:
      'A professional services team kept thousands of documents in unstructured formats, making it slow and inconsistent to retrieve policy and case details.',
    solution:
      'An AI-powered search application that indexes documents, answers questions in natural language, and links every answer back to its source.',
    tech: ['OpenAI APIs', 'LangChain', 'Python', 'Vector Database', 'React'],
    features: ['Natural-language answers', 'Source-cited responses', 'Document indexing', 'Admin controls'],
    outcome:
      'The team finds the right document in moments instead of searching manually — with confidence, because every answer is citable.',
  },
  {
    id: 'approval-automation',
    category: 'Automation',
    color: 'cyan',
    sector: 'Operations',
    title: 'Approval & Notification Automation',
    challenge:
      'Approval workflows relied on email chains and manual reminders — requests sat idle and nobody could see where things stood.',
    solution:
      'An automated workflow layer that routes requests, escalates overdue items, sends status notifications, and logs every action.',
    tech: ['Node.js', 'PostgreSQL', 'Slack & Email APIs', 'Webhooks'],
    features: ['Guided approval routes', 'Auto-escalation', 'Slack & email notifications', 'Full audit log'],
    outcome:
      'Requests flow end-to-end without chasing — teams see live status and nothing falls through the gaps.',
  },
  {
    id: 'mobile-inspection',
    category: 'Mobile',
    color: 'blue',
    sector: 'Field Inspections',
    title: 'Field Inspection Mobile App',
    challenge:
      'Inspection teams worked offline in the field, filling paper forms that were re-entered in the office — slow and error-prone.',
    solution:
      'A cross-platform mobile app for inspections with offline forms, photo capture, GPS tagging, and automatic sync to the back office.',
    tech: ['Flutter', 'Offline-First Storage', 'REST API', 'Map Integration'],
    features: ['Offline-capable forms', 'Photo & GPS capture', 'Automatic sync', 'Digital signatures'],
    outcome:
      'Inspections are captured digitally on the spot and synced automatically — eliminating duplicate data entry and paperwork.',
  },
  {
    id: 'integration-layer',
    category: 'Custom Software',
    color: 'violet',
    sector: 'Retail Group',
    title: 'Custom Data-Integration Layer',
    challenge:
      'Disconnected systems meant data had to be moved between tools by hand — slow, error-prone, and out of date by the time anyone saw it.',
    solution:
      'A central integration layer that connects core systems, synchronizes records, and exposes one consistent API for the whole stack.',
    tech: ['Node.js', 'Event-Driven Architecture', 'Message Queue', 'PostgreSQL', 'Observability'],
    features: ['System connectors', 'Event-driven sync', 'Unified API', 'Alerting & monitoring'],
    outcome:
      'Business data stays consistent across tools in near-real time — no more manual exports, imports, or reconciliation.',
  },
]

export default function WhatWeBuild() {
  const [active, setActive] = useState('All')
  const filtered =
    active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="work" className="section work">
      <div className="section-head">
        <p className="section-eyebrow">Featured Work</p>
        <h2 className="section-title">
          Case studies: real problems, <span className="gradient-text">real builds</span>
        </h2>
        <p className="section-desc">
          A sample of the kind of projects we deliver. Each engagement is written up as a
          case study — challenge, build, and outcome — and updated as work is shipped.
        </p>
      </div>

      <div className="work-filter" role="group" aria-label="Filter projects by category">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={`work-filter-btn${active === f ? ' active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="work-grid">
        {filtered.map((p, i) => (
          <article
            className="glass-card work-card"
            key={`${p.id}-${active}`}
            style={{ '--d': `${(i % 2) * 90}ms` } as React.CSSProperties}
          >
            <span className={`work-accent color-${p.color}`} />
            <div className="work-card-head">
              <span className={`work-badge color-${p.color}`}>{p.category}</span>
              <span className="work-index">{String(i + 1).padStart(2, '0')}</span>
            </div>

            <h3>{p.title}</h3>
            <p className="work-sector">{p.sector}</p>

            <div className="work-row">
              <p className="work-label">The challenge</p>
              <p className="work-text">{p.challenge}</p>
            </div>

            <div className="work-row">
              <p className="work-label">What we built</p>
              <p className="work-text">{p.solution}</p>
            </div>

            <div className="work-features">
              <p className="work-label">Key features</p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="work-tech">
              {p.tech.map((t) => (
                <span className="work-chip" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="work-outcome">
              <p className="work-label">Outcome</p>
              <p>{p.outcome}</p>
            </div>
          </article>
        ))}
      </div>

      <a href="#contact" className="btn btn-primary work-more">
        Tell Us About Your Project
      </a>
    </section>
  )
}