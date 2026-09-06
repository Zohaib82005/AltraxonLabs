import emailjs from '@emailjs/browser'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ContactVisual from './ContactVisual'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const INBOX_ADDRESS = 'altraxonlabs@gmail.com'

type Errors = {
  [key: string]: string | undefined
}

type SubmitStatus = 'idle' | 'submitting' | 'success'

const SERVICES = [
  'Web Development',
  'Custom Software',
  'AI/ML',
  'AI-Powered SaaS',
  'Automation',
  'Mobile App Development',
  'API/Backend Development',
  'Other',
]

const BUDGETS = [
  'Under $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
  'Not sure yet',
]

const TIMELINES = [
  'ASAP — urgent',
  'Within 1 month',
  '1 – 3 months',
  '3 – 6 months',
  '6+ months',
  'Not sure yet',
]

const STEPS = [
  {
    n: '01',
    title: 'Tell Us About Your Project',
    text: 'Share what you want to build — the goal, the problem, and the outcome you need. Every detail helps us hit the ground running.',
  },
  {
    n: '02',
    title: 'We Review Your Requirements',
    text: 'Our team reviews your brief, checks feasibility, and maps the technology, scope, and approach that fits.',
  },
  {
    n: '03',
    title: 'We Discuss the Solution',
    text: 'We get on a call to talk architecture, timelines, and budget — and answer every question you have.',
  },
  {
    n: '04',
    title: 'We Plan the Project',
    text: 'You get a clear plan: phases, deliverables, milestones, and a fixed roadmap with no surprises.',
  },
  {
    n: '05',
    title: 'We Start Building',
    text: 'Our engineers get to work — shipping in small, reviewable steps with you kept in the loop throughout.',
  },
]

const FAQS = [
  {
    q: 'What types of projects does Altraxon Labs accept?',
    a: 'We take on a wide range of software projects — web platforms, custom business software, AI and ML solutions, AI-powered SaaS products, workflow automation, mobile applications, API and backend development, and custom integrations. If it involves building or evolving software, we can likely help.',
  },
  {
    q: 'Do you work with startups?',
    a: 'Yes — startups are a core part of what we do. We help founders turn ideas into MVPs and scalable foundations, move quickly without breaking, and validate products in real environments. We also work with established businesses and enterprises on larger, long-term engagements.',
  },
  {
    q: 'Can you build a custom SaaS product for me?',
    a: 'Absolutely. Custom SaaS is one of our specialties. We engineer multi-tenant platforms with secure accounts, subscriptions, billing, dashboards, and API-first architectures — designed to launch cleanly and scale as your user base grows.',
  },
  {
    q: 'Do you provide AI integration for existing products?',
    a: 'Yes. We integrate practical AI into products — smart search, document processing, support assistants, recommendations, and decision support. We also build AI/ML capabilities from scratch, ranging from LLM-powered features to custom machine learning pipelines.',
  },
  {
    q: 'How do project discussions work?',
    a: 'Start by filling in the form with the basics about your project. We review your requirements, then schedule a conversation to discuss the solution, architecture, and roadmap. From there you get a clear plan — phases, deliverables, timelines, and budget — before any building begins.',
  },
]

function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="hero-grid-overlay" />
      <div className="hero-glow hero-glow-a" />
      <div className="hero-glow hero-glow-b" />

      <div className="contact-hero-inner">
        <div className="contact-hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Contact Altraxon Labs
          </div>

          <h1 className="contact-hero-title">
            Let’s Build Something{' '}
            <span className="gradient-text">Extraordinary</span>
          </h1>

          <p className="contact-hero-sub">
            Talk to us about a software product, SaaS idea, AI solution, automation
            requirement, website, mobile application, or custom technology project.
            Tell us where you want to go — we’ll figure out how to get there.
          </p>

          <div className="contact-hero-quick">
            <div className="contact-hero-quick-item">
              <span className="contact-hero-quick-value">4h</span>
              <span className="contact-hero-quick-label">Avg. first response</span>
            </div>
            <div className="hero-metric-sep" />
            <div className="contact-hero-quick-item">
              <span className="contact-hero-quick-value">100%</span>
              <span className="contact-hero-quick-label">NDA-friendly</span>
            </div>
            <div className="hero-metric-sep" />
            <div className="contact-hero-quick-item">
              <span className="contact-hero-quick-value">01</span>
              <span className="contact-hero-quick-label">Free consultation</span>
            </div>
          </div>
        </div>

        <div className="contact-hero-visual">
          <div className="contact-visual-frame">
            <ContactVisual />
            <span className="contact-visual-scan" aria-hidden="true" />
          </div>
          <div className="contact-visual-ring" aria-hidden="true" />
          <div className="contact-visual-core" aria-hidden="true">
            <span className="hero-visual-core-dot" />
          </div>
          <div className="contact-visual-label">
            <span className="hero-visual-pulse" />
            ALX · Idea Network
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({
  id,
  label,
  type = 'text',
  required = false,
  placeholder,
  error,
  autoComplete,
  inputMode,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  placeholder?: string
  error?: string
  autoComplete?: string
  inputMode?: 'email' | 'tel' | 'numeric' | 'text'
}) {
  return (
    <div className={`form-field${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="form-req" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span className="form-error" id={`${id}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

function SelectField({
  id,
  label,
  options,
  placeholder,
  required = false,
  error,
}: {
  id: string
  label: string
  options: string[]
  placeholder: string
  required?: boolean
  error?: string
}) {
  return (
    <div className={`form-field${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="form-req" aria-hidden="true">*</span>}
      </label>
      <div className="form-select">
        <select id={id} name={id} required={required} defaultValue="" aria-invalid={error ? true : undefined} aria-describedby={error ? `${id}-error` : undefined}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {error && (
        <span className="form-error" id={`${id}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const submittingRef = useRef(false)
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [summary, setSummary] = useState<string>('')
  const [formError, setFormError] = useState<string>('')

  const validate = useCallback((form: HTMLFormElement) => {
    const data = new FormData(form)
    const next: Errors = {}

    const required = ['fullName', 'email', 'service', 'details']
    for (const key of required) {
      const value = String(data.get(key) || '').trim()
      if (!value) {
        const labels: Record<string, string> = {
          fullName: 'Full Name',
          email: 'Email Address',
          service: 'Service Required',
          details: 'Project Details',
        }
        next[key] = `${labels[key]} is required.`
      }
    }

    const email = String(data.get('email') || '').trim()
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      next.email = 'Please enter a valid email address.'
    }

    const phone = String(data.get('phone') || '').trim()
    if (phone && !/^[+\d][\d\s().-]{6,}$/.test(phone)) {
      next.phone = 'Please enter a valid phone number.'
    }

    const details = String(data.get('details') || '').trim()
    if (details && details.length < 20) {
      next.details = 'Please provide at least 20 characters so we can understand your project.'
    }

    return next
  }, [])

  const focusFirstError = (errs: Errors) => {
    const firstKey = Object.keys(errs)[0]
    if (!firstKey) return
    const el = formRef.current?.querySelector<HTMLElement>(`[name="${firstKey}"]`)
    el?.focus()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current || submittingRef.current) return

    const next = validate(formRef.current)
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setSummary('Please fix the highlighted fields and try again.')
      setFormError('')
      focusFirstError(next)
      return
    }

    const data = new FormData(formRef.current)
    const payload = {
      fullName: String(data.get('fullName') || '').trim(),
      email: String(data.get('email') || '').trim(),
      company: String(data.get('company') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      service: String(data.get('service') || '').trim(),
      budget: String(data.get('budget') || '').trim(),
      timeline: String(data.get('timeline') || '').trim(),
      details: String(data.get('details') || '').trim(),
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn(
        '[contact] EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY.',
      )
      setFormError('The contact form is not configured yet. Please try again later, or email us directly at altraxonlabs@gmail.com.')
      return
    }

    setSummary('')
    setFormError('')
    setStatus('submitting')
    submittingRef.current = true

    try {
      const templateParams = {
        to_email: INBOX_ADDRESS,
        from_name: payload.fullName,
        from_email: payload.email,
        reply_to: payload.email,
        subject: `New Project Inquiry — ${payload.fullName}`,
        service: payload.service,
        company: payload.company || '—',
        phone: payload.phone || '—',
        budget: payload.budget || '—',
        timeline: payload.timeline || '—',
        message: payload.details,
      }

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })

      setStatus('success')
    } catch (err) {
      console.error('[contact] EmailJS send failed:', err)
      setFormError(
        'We couldn’t send your message right now. Please try again in a moment, or email us directly at altraxonlabs@gmail.com.',
      )
      setStatus('idle')
    } finally {
      submittingRef.current = false
    }
  }

  const handleChange = () => {
    if (status === 'submitting') return
    if (Object.keys(errors).length > 0) {
      setErrors({})
      setSummary('')
    }
    if (formError) setFormError('')
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <div className="form-success-icon" aria-hidden="true">
          <svg viewBox="0 0 40 40" fill="none">
            <path d="m9 21 7.5 7.5L31 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Thank you! Your message has been sent successfully.</h3>
        <p>
          We’ll review your requirements and get back to you soon — typically within
          one business day. If it’s urgent, feel free to reach out through the contact
          details below.
        </p>
        <button type="button" className="btn btn-secondary" onClick={() => {
          setStatus('idle')
          formRef.current?.reset()
        }}>
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} onChange={handleChange} noValidate>
      <div className="contact-form-grid">
        <FormField
          id="fullName"
          label="Full Name"
          required
          placeholder="Jane Doe"
          autoComplete="name"
          error={errors.fullName}
        />
        <FormField
          id="email"
          label="Email Address"
          type="email"
          required
          placeholder="jane@company.com"
          autoComplete="email"
          inputMode="email"
          error={errors.email}
        />
        <FormField
          id="company"
          label="Company / Organization"
          placeholder="Acme Inc. (optional)"
          autoComplete="organization"
          error={errors.company}
        />
        <FormField
          id="phone"
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 000-0000 (optional)"
          autoComplete="tel"
          inputMode="tel"
          error={errors.phone}
        />
        <SelectField
          id="service"
          label="Service Required"
          options={SERVICES}
          placeholder="Select a service…"
          required
          error={errors.service}
        />
        <SelectField
          id="budget"
          label="Estimated Budget"
          options={BUDGETS}
          placeholder="Select a range (optional)"
          error={errors.budget}
        />
        <SelectField
          id="timeline"
          label="Project Timeline"
          options={TIMELINES}
          placeholder="Select a timeframe (optional)"
          error={errors.timeline}
        />
      </div>

      <div className="form-field form-field-full">
        <label htmlFor="details">
          Project Details
          <span className="form-req" aria-hidden="true">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={6}
          required
          placeholder="Tell us about your project, goals, current situation, and what success looks like. The more detail, the better."
          aria-invalid={errors.details ? true : undefined}
          aria-describedby={errors.details ? 'details-error' : undefined}
        />
        {errors.details && (
          <span className="form-error" id="details-error" role="alert">
            {errors.details}
          </span>
        )}
      </div>

      {formError && (
        <p className="form-error-banner" role="alert">
          {formError}
        </p>
      )}

      {summary && (
        <p className="form-summary" role="alert">
          {summary}
        </p>
      )}

      <div className="contact-form-foot">
        <button
          type="submit"
          className="btn btn-primary contact-submit"
          disabled={status === 'submitting'}
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <span className="spinner" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send Project Brief
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3.75 10h12.5M11.5 5.25 16.25 10l-4.75 4.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
        <p className="contact-form-note">
          We respond to every inquiry — typically within one business day. Your details stay confidential.
        </p>
      </div>
    </form>
  )
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info-item">
        <div className="contact-info-icon">
          <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <rect x="6" y="6" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="1.6" />
            <path d="M6 12h28M11 9h.01M15 9h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <path d="m9 22 8-5 4 2 7-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
          </svg>
        </div>
        <div>
          <h4>Email</h4>
          <p>Ready to talk projects</p>
          <a href="mailto:altraxonlabs@gmail.com">altraxonlabs@gmail.com</a>
        </div>
      </div>

      <div className="contact-info-item">
        <div className="contact-info-icon">
          <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.6" />
            <path d="M20 7v13l8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          </svg>
        </div>
        <div>
          <h4>Response Time</h4>
          <p>Typically within one business day</p>
        </div>
      </div>

      <div className="contact-info-item">
        <div className="contact-info-icon">
          <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path d="M20 4c6 0 11 5 11 11 0 8-11 19-11 19S9 23 9 15c0-6 5-11 11-11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
            <circle cx="20" cy="15" r="4" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </div>
        <div>
          <h4>Office</h4>
          <p>Remote</p>
        </div>
      </div>

      <div className="contact-info-socials">
        <span className="contact-info-socials-label">Find us online</span>
<div className="contact-info-socials-row">
          <a href="#contact" className="contact-social-btn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.6c0-2.05-.04-4.7-2.87-4.7-2.87 0-3.3 2.23-3.3 4.54V24H8V8Z" />
            </svg>
          </a>
          <a href="https://www.altraxonlabs.vercel.app" target='_blank' className="contact-social-btn" aria-label="Website">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
          <a href="https://www.instagram.com/altraxonlabs/" target='_blank' className="contact-social-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61593774101249" target='_blank' className="contact-social-btn" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.6c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.5H7.4V14h2.7v8h3.4Z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@AltraxonLab" target='_blank' className="contact-social-btn" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27.2 27.2 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8ZM10 15.2V8.8l5.5 3.2L10 15.2Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <section id="contact-form" className="section contact-main">
      <div className="section-head">
        <p className="section-eyebrow">Start the Conversation</p>
        <h2 className="section-title">
          Tell Us About <span className="gradient-text">Your Project</span>
        </h2>
        <p className="section-desc">
          Fill in the details below and our team will review your requirements and
          come back to you with next steps. No pressure, no obligation — just a
          straight conversation about what you want to build.
        </p>
      </div>

      <div className="contact-layout">
        <div className="glass-card contact-form-card">
          <ContactForm />
        </div>
        <aside className="contact-side">
          <div className="glass-card contact-visual-card">
            <div className="contact-visual-card-head">
              <span className="lab-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="contact-visual-card-title">TELL US ABOUT YOUR IDEA</span>
              <span className="lab-status">
                <i aria-hidden="true" />
                READY
              </span>
            </div>
            <div className="contact-visual-card-canvas">
              <ContactVisual />
              <span className="contact-visual-card-scan" aria-hidden="true" />
            </div>
            <p className="contact-visual-card-caption">
              Every idea enters the network here — it becomes a node, connects to the
              right team, and starts moving toward something real.
            </p>
          </div>

          <ContactInfo />

          <div className="glass-card contact-note">
            <p>
              <strong>Prefer email?</strong> Write to us directly and we’ll respond as
              soon as we can. A well-described project gets the fastest, most useful reply.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="section contact-process">
      <div className="section-head">
        <p className="section-eyebrow">What Happens Next?</p>
        <h2 className="section-title">
          From first message to <span className="gradient-text">first build</span>
        </h2>
        <p className="section-desc">
          A clear, simple path from your first inquiry to a running product — you
          always know what’s happening and what comes next.
        </p>
      </div>

      <div className="contact-process-track">
        {STEPS.map((s, i) => (
          <div className="contact-process-step" key={s.n}>
            <div className="contact-process-node">
              <span className="contact-process-num">{s.n}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            {i < STEPS.length - 1 && (
              <span className="contact-process-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section contact-faq">
      <div className="contact-faq-grid">
        <div className="contact-faq-head">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title">
            Questions, <span className="gradient-text">answered</span>
          </h2>
          <p className="section-desc">
            The things most people ask us before starting a project. If yours isn’t
            here, just ask — we’re happy to help.
          </p>
        </div>

        <div className="contact-faq-list">
          {FAQS.map((f, i) => {
            const open = openIndex === i
            return (
              <div className={`faq-item${open ? ' open' : ''}`} key={f.q}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span>{f.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M10 4v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div className="faq-answer" id={`faq-panel-${i}`} hidden={!open}>
                  <p>{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ContactCta() {
  return (
    <section className="section contact-final">
      <div className="glass-card contact-final-panel">
        <div className="cta-grid-overlay" />
        <p className="section-eyebrow centered">Don’t wait</p>
        <h2 className="contact-final-title">
          Your Idea Could Be the <span className="gradient-text">Next Thing We Build</span>
        </h2>
        <p className="contact-final-desc">
          Every product on this site started as a conversation. Bring us yours and
          we’ll take it from idea to shipped software — together.
        </p>
        <div className="cta-actions">
          <a href="#contact-form" className="btn btn-primary">
            Start Your Project
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3.75 10h12.5M11.5 5.25 16.25 10l-4.75 4.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <Link to="/" className="btn btn-secondary">
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Contacts() {
  useEffect(() => {
    document.title = 'Contact Altraxon Labs | Start Your Project'
    return () => {
      document.title = 'Altraxon Labs | Modern Software House & Technology Solutions'
    }
  }, [])

  return (
    <div className="contacts">
      <ContactHero />
      <ContactSection />
      <ProcessSection />
      <FaqSection />
      <ContactCta />
    </div>
  )
}