import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseOpacity: number
  phase: number
  hue: number
}

interface Pulse {
  a: number
  b: number
  t: number
  speed: number
}

export default function ContactVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let rafId = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const COLORS = [
      [0, 212, 255], // cyan
      [59, 130, 246], // blue
      [139, 92, 246], // violet
    ]

    const makeNode = (): Node => {
      const c = COLORS[Math.floor(Math.random() * COLORS.length)]
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 2.4 + 1.2,
        baseOpacity: Math.random() * 0.5 + 0.35,
        phase: Math.random() * Math.PI * 2,
        hue: c[0] * 65536 + c[1] * 256 + c[2],
      }
    }

    let nodes: Node[] = []
    const pulses: Pulse[] = []
    let lastPulseTime = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const fillNodes = () => {
      const target = Math.round((width * height) / 6800)
      const count = Math.max(40, Math.min(80, target))
      nodes = Array.from({ length: count }, makeNode)
    }

    const pulseColor = (n: Node, m: Node) => {
      const cA = n.hue
      const cB = m.hue
      const rA = (cA >> 16) & 255
      const gA = (cA >> 8) & 255
      const bA = cA & 255
      const rB = (cB >> 16) & 255
      const gB = (cB >> 8) & 255
      const bB = cB & 255
      return [Math.round((rA + rB) / 2), Math.round((gA + gB) / 2), Math.round((bA + bB) / 2)] as const
    }

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        n.phase += 0.014
        if (n.x < -24) n.x = width + 24
        if (n.x > width + 24) n.x = -24
        if (n.y < -24) n.y = height + 24
        if (n.y > height + 24) n.y = -24
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      step()

      const maxDist = Math.min(160, Math.max(100, width / 6))

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = b.x - a.x
          const dy = b.y - a.y
          const d2 = dx * dx + dy * dy
          if (d2 > maxDist * maxDist) continue
          const d = Math.sqrt(d2)
          const fade = 1 - d / maxDist
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(77, 153, 255, ${fade * 0.22})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

      const pulseInterval = Math.max(22, width / 34)
      if (performance.now() - lastPulseTime > pulseInterval) {
        lastPulseTime = performance.now()
        if (nodes.length >= 2) {
          const a = Math.floor(Math.random() * nodes.length)
          let b = Math.floor(Math.random() * nodes.length)
          if (b === a) b = (b + 1) % nodes.length
          pulses.push({ a, b, t: 0, speed: 0.005 + Math.random() * 0.007 })
          if (pulses.length > 14) pulses.shift()
        }
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.t += p.speed
        if (p.t >= 1) {
          pulses.splice(i, 1)
          continue
        }
        const na = nodes[p.a]
        const nb = nodes[p.b]
        if (!na || !nb) {
          pulses.splice(i, 1)
          continue
        }
        const x = na.x + (nb.x - na.x) * p.t
        const y = na.y + (nb.y - na.y) * p.t
        const glow = Math.sin(p.t * Math.PI)
        const [r, g, b] = pulseColor(na, nb)

        ctx.beginPath()
        ctx.arc(x, y, 3.6 * glow + 0.6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.9 * glow})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, 10 * glow, 0, Math.PI * 2)
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 10 * glow)
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.4 * glow})`)
        grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
        ctx.fillStyle = grad
        ctx.fill()
      }

      for (const n of nodes) {
        const pulse = Math.sin(n.phase) * 0.25 + 0.75
        const r = n.radius * pulse
        const cr = (n.hue >> 16) & 255
        const cg = (n.hue >> 8) & 255
        const cb = n.hue & 255

        ctx.beginPath()
        ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2)
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4)
        glow.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${n.baseOpacity * 0.3})`)
        glow.addColorStop(1, `rgba(${cr}, ${cg}, ${cb}, 0)`)
        ctx.fillStyle = glow
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${n.baseOpacity * pulse})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.x, n.y, r * 0.35, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${n.baseOpacity * pulse * 0.75})`
        ctx.fill()
      }

      rafId = requestAnimationFrame(draw)
    }

    resize()
    fillNodes()
    rafId = requestAnimationFrame(draw)

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="contact-visual-canvas" aria-hidden="true" />
}
