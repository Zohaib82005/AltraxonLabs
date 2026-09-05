function IconMl() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="4" fill="currentColor" />
      <circle cx="8" cy="9" r="3" fill="currentColor" opacity="0.65" />
      <circle cx="32" cy="10" r="3" fill="currentColor" opacity="0.65" />
      <circle cx="8" cy="31" r="3" fill="currentColor" opacity="0.65" />
      <circle cx="32" cy="30" r="3" fill="currentColor" opacity="0.65" />
      <circle cx="12.5" cy="13.5" r="2.2" fill="currentColor" opacity="0.45" />
      <circle cx="27.5" cy="13.5" r="2.2" fill="currentColor" opacity="0.45" />
      <circle cx="12.5" cy="26.5" r="2.2" fill="currentColor" opacity="0.45" />
      <circle cx="27.5" cy="26.5" r="2.2" fill="currentColor" opacity="0.45" />
      <path d="M8 9 12.5 13.5M32 10l-4.5 3.5M8 31l4.5-4.5M32 30l-4.5-4.5M12.5 13.5l4.5 6.5M27.5 13.5l-3.5 6.5M12.5 26.5l4.5-6.5M27.5 26.5l-4-7.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

function IconNlp() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M7 10h26v20H7z" stroke="currentColor" strokeWidth="1.5" rx="4" />
      <path d="M7 17h26" stroke="currentColor" strokeWidth="1.1" opacity="0.55" />
      <path d="M11 24h10m-10 4h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="28" cy="12" r="2" fill="currentColor" />
    </svg>
  )
}

function IconVision() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M4 20s4-8 16-8 16 8 16 8-4 8-16 8S4 20 4 20Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="1.6" fill="currentColor" />
    </svg>
  )
}

function IconEdge() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="4" fill="currentColor" />
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="32" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m10 9 7 8M30 9l-7 8M10 31l7-8M30 31l-7-8" stroke="currentColor" strokeWidth="1.3" opacity="0.8" />
    </svg>
  )
}

function IconQuantum() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <ellipse cx="20" cy="20" rx="17" ry="7.5" stroke="currentColor" strokeWidth="1.3" transform="rotate(20 20 20)" />
      <ellipse cx="20" cy="20" rx="17" ry="7.5" stroke="currentColor" strokeWidth="1.3" transform="rotate(-55 20 20)" opacity="0.65" />
      <path d="M20 3v-2M20 39v-2M3 20H1M39 20h-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function IconGenAi() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 6c1.3 3.4 3.3 5.4 6.7 6.7-3.4 1.3-5.4 3.3-6.7 6.7-1.3-3.4-3.3-5.4-6.7-6.7 3.4-1.3 5.4-3.3 6.7-6.7Z"
        fill="currentColor"
      />
      <path
        d="M30 22c.9 2.3 2.2 3.6 4.5 4.5-2.3.9-3.6 2.2-4.5 4.5-.9-2.3-2.2-3.6-4.5-4.5 2.3-.9 3.6-2.2 4.5-4.5Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M9 21c.8 2 1.9 3.1 3.9 3.9-2 .8-3.1 1.9-3.9 3.9-.8-2-1.9-3.1-3.9-3.9 2-.8 3.1-1.9 3.9-3.9Z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  )
}

const TECH = [
  {
    icon: IconMl,
    title: 'Machine & Deep Learning',
    text: 'From adaptive neural architectures to large-scale distributed training pipelines and inference systems.',
  },
  {
    icon: IconNlp,
    title: 'Natural Language AI',
    text: 'Next-generation language models, reasoning engines, and conversational systems tuned for enterprise.',
  },
  {
    icon: IconVision,
    title: 'Computer Vision',
    text: 'Perception systems for real-time object understanding, medical imaging, and industrial quality control.',
  },
  {
    icon: IconEdge,
    title: 'Edge AI & Embedded Intelligence',
    text: 'Lightweight models that run where data lives — low-latency intelligence on edge and embedded devices.',
  },
  {
    icon: IconQuantum,
    title: 'Quantum & Advanced Computing',
    text: 'Research into quantum-native algorithms and hybrid classical-quantum compute for hard optimization.',
  },
  {
    icon: IconGenAi,
    title: 'Generative AI Platforms',
    text: 'Multimodal generation, synthetic data, and creative engines powering new categories of digital products.',
  },
]

export default function Technology() {
  return (
    <section id="research" className="section tech">
      <div className="section-head">
        <p className="section-eyebrow">Research & Capabilities</p>
        <h2 className="section-title">
          Inside our <span className="gradient-text">technology stack</span>
        </h2>
        <p className="section-desc">
          Six core disciplines, one mission — advancing intelligence beyond the current
          frontier through research, engineering, and relentless iteration.
        </p>
      </div>

      <div className="tech-grid">
        {TECH.map((t, i) => (
          <article
            className="glass-card tech-card"
            key={t.title}
            style={{ '--d': `${(i % 3) * 90}ms` } as React.CSSProperties}
          >
            <div className="tech-card-icon">{t.icon()}</div>
            <h3 className="tech-card-title">{t.title}</h3>
            <p className="tech-card-text">{t.text}</p>
            <span className="tech-card-index">{String(i + 1).padStart(2, '0')}</span>
          </article>
        ))}
      </div>
    </section>
  )
}