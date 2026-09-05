import { useEffect, useState } from 'react'
import NeuralNetwork from './NeuralNetwork'

function useLiveMetrics() {
  const [m, setM] = useState({ flights: 12, services: 8, streams: 51, load: 68 })

  useEffect(() => {
    const id = window.setInterval(() => {
      setM({
        flights: 9 + Math.floor(Math.random() * 6),
        services: 7 + Math.floor(Math.random() * 4),
        streams: 43 + Math.floor(Math.random() * 15),
        load: 62 + Math.floor(Math.random() * 28),
      })
    }, 2200)
    return () => window.clearInterval(id)
  }, [])

  return m
}

const MILESTONES = [
  {
    year: '2026',
    tag: 'Launched',
    state: 'present',
    title: 'Altraxon Labs Founded',
    text: 'Altraxon Labs is founded as a modern software house and technology solutions company — built to help startups, businesses, and organizations design, build, and ship production-ready digital products.',
  },
  {
    year: '2027',
    tag: 'In Progress',
    state: 'future',
    title: 'First Major Product Launch',
    text: 'Flagship products move from build to launch with early customers — validated in real environments, tested thoroughly, and deliberately scoped.',
  },
  {
    year: '2028',
    tag: 'Upcoming',
    state: 'future',
    title: 'Scaling to New Markets',
    text: 'Expanding delivery across more industries and larger enterprise engagements — safely, reliably, and at scale.',
  },
]

export default function InnovationLab() {
  const m = useLiveMetrics()

  return (
    <section id="innovation" className="section lab">
      <div className="section-head">
        <p className="section-eyebrow">Innovation Lab</p>
        <h2 className="section-title">
          Technology, <span className="gradient-text">in action</span>
        </h2>
        <p className="section-desc">
          A simulated view of our delivery environment — how we design, build, monitor,
          and continuously improve the products our clients run on.
        </p>
      </div>

      <div className="lab-grid">
        <div className="glass-card lab-console">
          <div className="lab-console-bar">
            <span className="lab-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="lab-console-title">ALX CONSOLE // PRODUCT MONITOR</span>
            <span className="lab-status">
              <i aria-hidden="true" />
              LIVE
            </span>
          </div>

          <div className="lab-console-canvas">
            <NeuralNetwork />
            <span className="lab-console-scan" aria-hidden="true" />
          </div>

          <div className="lab-hud">
            <div className="lab-hud-cell">
              <span className="lab-hud-label">Projects in Flight</span>
              <span className="lab-hud-value">{m.flights}</span>
            </div>
            <div className="lab-hud-cell">
              <span className="lab-hud-label">Active Services</span>
              <span className="lab-hud-value">{m.services}</span>
            </div>
            <div className="lab-hud-cell">
              <span className="lab-hud-label">Data Streams</span>
              <span className="lab-hud-value">{m.streams}</span>
            </div>
            <div className="lab-hud-cell">
              <span className="lab-hud-label">Build Load</span>
              <span className="lab-hud-value">{m.load}%</span>
            </div>
          </div>
        </div>

        <div className="lab-side">
          <div className="glass-card lab-telemetry">
            <h3 className="lab-telemetry-title">Delivery Telemetry</h3>
            <div className="lab-tele-item">
              <div className="lab-tele-row">
                <span className="lab-tele-label">Staging Deploys</span>
                <span className="lab-tele-value">{m.flights} today</span>
              </div>
            </div>
            <div className="lab-tele-item">
              <div className="lab-tele-row">
                <span className="lab-tele-label">CI Pipeline</span>
                <span className="lab-tele-value">{m.services * 11} runs/wk</span>
              </div>
            </div>
            <div className="lab-tele-item">
              <div className="lab-tele-row">
                <span className="lab-tele-label">Cluster Load</span>
                <span className="lab-tele-value">{m.load}%</span>
              </div>
              <div className="lab-tele-bar">
                <span style={{ width: `${m.load}%` }} />
              </div>
            </div>
            <div className="lab-tele-item">
              <div className="lab-tele-row">
                <span className="lab-tele-label">Monitor Health</span>
                <span className="lab-tele-value">Nominal</span>
              </div>
            </div>
          </div>

          <div className="glass-card lab-note">
            <p>
              <strong>Note:</strong> simulated product-monitor view. Figures illustrate
              Altraxon delivery-activity concepts — not a live production system.
            </p>
          </div>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-head">
          <p className="section-eyebrow">Milestones</p>
          <h3>
            A timeline with <span className="gradient-text">room to grow</span>
          </h3>
          <p>
            From our founding in 2026, every milestone ahead will be earned the same way
            the first one was: disciplined delivery, honest engineering, and long-term
            thinking.
          </p>
        </div>

        <div className="timeline-track">
          {MILESTONES.map((item) => (
            <div className={`timeline-item ${item.state}`} key={`${item.year}-${item.title}`}>
              <span className="timeline-dot" aria-hidden="true" />
              <article className="glass-card timeline-card">
                <span className="timeline-tag">{item.tag}</span>
                <span className="timeline-year">{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}