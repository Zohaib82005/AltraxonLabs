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

export default function NeuralNetwork() {
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

    const mouse = { x: -9999, y: -9999 }

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
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 2.2 + 1.1,
        baseOpacity: Math.random() * 0.45 + 0.3,
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
      const target = Math.round((width * height) / 7200)
      const count = Math.max(32, Math.min(70, target))
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
        n.phase += 0.016

        if (n.x < -20) n.x = width + 20
        if (n.x > width + 20) n.x = -20
        if (n.y < -20) n.y = height + 20
        if (n.y > height + 20) n.y = -20

        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const d2 = dx * dx + dy * dy
        if (d2 < 14400 && d2 > 0.01) {
          const d = Math.sqrt(d2)
          const f = (1 - d / 120) * 0.012
          n.vx += (dx / d) * f
          n.vy += (dy / d) * f
        }

        n.vx *= 0.985
        n.vy *= 0.985

        const maxV = 0.42
        const vLen = Math.sqrt(n.vx * n.vx + n.vy * n.vy)
        if (vLen > maxV) {
          n.vx = (n.vx / vLen) * maxV
          n.vy = (n.vy / vLen) * maxV
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      step()

      const maxDist = Math.min(150, Math.max(95, width / 7))

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
          ctx.strokeStyle = `rgba(77, 153, 255, ${fade * 0.18})`
          ctx.lineWidth = 0.7
          ctx.stroke()
        }
      }

      const pulseInterval = Math.max(26, width / 30)
      if (performance.now() - lastPulseTime > pulseInterval) {
        lastPulseTime = performance.now()
        if (nodes.length >= 2) {
          const a = Math.floor(Math.random() * nodes.length)
          let b = Math.floor(Math.random() * nodes.length)
          if (b === a) b = (b + 1) % nodes.length
          pulses.push({ a, b, t: 0, speed: 0.006 + Math.random() * 0.008 })
          if (pulses.length > 12) pulses.shift()
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
        ctx.arc(x, y, 3.2 * glow + 0.6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.85 * glow})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, 9 * glow, 0, Math.PI * 2)
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 9 * glow)
        grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.35 * glow})`)
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
        glow.addColorStop(0, `rgba(${cr}, ${cg}, ${cb}, ${n.baseOpacity * 0.28})`)
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

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    fillNodes()
    rafId = requestAnimationFrame(draw)

    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="neural-canvas" aria-hidden="true" />
}