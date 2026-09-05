import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 15, suffix: '+', label: 'Research Papers', sub: 'Published at leading venues' },
  { value: 8, suffix: '', label: 'AI Models', sub: 'In production deployments' },
  { value: 50, suffix: '+', label: 'Enterprise Clients', sub: 'Across 12 industries' },
  { value: 6, suffix: '', label: 'Patents Filed', sub: 'In core deep-tech domains' },
  { value: 35, suffix: '+', label: 'AI Experts', sub: 'Researchers & engineers' },
]

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, duration])

  return value
}

function StatItem({
  value,
  suffix,
  label,
  sub,
  active,
  index,
}: {
  value: number
  suffix: string
  label: string
  sub: string
  active: boolean
  index: number
}) {
  const count = useCountUp(value, active)

  return (
    <div className={`stat-item ${active ? 'active' : ''}`} style={{ '--st': `${index * 70}ms` } as React.CSSProperties}>
      <span className="stat-number">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </span>
      <span className="stat-label">{label}</span>
      <span className="stat-sub">{sub}</span>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true)
          obs.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="section stats" ref={ref}>
      <div className="stats-panel glass-card">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <StatItem key={s.label} {...s} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}