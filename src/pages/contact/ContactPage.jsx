import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

function Field({ label, value, onChange, type = 'text', placeholder }) {
  return (
    <label className="block">
      <div className="text-sm font-medium text-slate-900">{label}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200"
      />
    </label>
  )
}

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  const mailto = useMemo(() => {
    const subject = encodeURIComponent('Website inquiry')
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`,
    )
    return `mailto:hello@example.com?subject=${subject}&body=${body}`
  }, [name, email, company, message])

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s shape a website that feels more credible the moment it opens"
        description="Share your goals, the pages you need, and any visual references. We&apos;ll reply with a practical plan, timeline, and recommendation."
        stats={[
          { label: 'Response', value: 'Clear next steps' },
          { label: 'Format', value: 'Project-based' },
          { label: 'Scope', value: 'Starter to custom' },
          { label: 'Timezone', value: 'IST-friendly' },
        ]}
        actions={
          <>
            <Button href={mailto}>Email directly</Button>
            <Button as={Link} to="/services" variant="secondary">
              Review packages
            </Button>
          </>
        }
      />

      <section>
        <Container className="pb-16 pt-4 sm:pb-20">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <Reveal>
              <form
                className="rounded-[2rem] border border-white/70 bg-white/82 p-7 shadow-[0_22px_52px_rgba(15,23,42,0.08)]"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" value={name} onChange={setName} placeholder="Your full name" />
                  <Field
                    label="Email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="you@company.com"
                  />
                  <div className="sm:col-span-2">
                    <Field
                      label="Company"
                      value={company}
                      onChange={setCompany}
                      placeholder="Company / brand"
                    />
                  </div>
                  <label className="block sm:col-span-2">
                    <div className="text-sm font-medium text-slate-900">Message</div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What do you need? Pages, style, deadline, reference links..."
                      rows={6}
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200"
                    />
                  </label>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-slate-500">
                    This demo form opens your email client. Replace with your API later.
                  </div>
                  <Button href={mailto} className="w-fit">
                    Send inquiry
                  </Button>
                </div>
              </form>
            </Reveal>

            <Reveal>
              <div className="rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-7 shadow-[0_22px_52px_rgba(15,23,42,0.08)]">
                <h2 className="text-lg font-semibold text-slate-950">Contact details</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Update these details with your business information.
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-xs font-semibold tracking-widest text-slate-500">EMAIL</div>
                    <a className="mt-1 block font-medium text-slate-900 hover:underline" href="mailto:hello@example.com">
                      hello@example.com
                    </a>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-xs font-semibold tracking-widest text-slate-500">PHONE</div>
                    <a className="mt-1 block font-medium text-slate-900 hover:underline" href="tel:+910000000000">
                      +91 00000 00000
                    </a>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-xs font-semibold tracking-widest text-slate-500">LOCATION</div>
                    <div className="mt-1 font-medium text-slate-900">India (Remote / On-site)</div>
                    <div className="mt-1 text-slate-600">Available Mon-Sat, 10:00-19:00 IST</div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Typical inquiry flow
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-white/78">
                    <p>1. Share the scope and timeline</p>
                    <p>2. Receive a focused recommendation</p>
                    <p>3. Start with a clear delivery plan</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}

