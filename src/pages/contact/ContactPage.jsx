import { useMemo, useState } from 'react'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

function Field({ label, value, onChange, type = 'text', placeholder }) {
  return (
    <label className="block">
      <div className="text-sm font-medium">{label}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 dark:border-slate-800 dark:bg-slate-950/40 dark:focus:border-indigo-500/60 dark:focus:ring-indigo-500/15"
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
    <section>
      <Container className="py-14 sm:py-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400">
            CONTACT
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's build something your customers trust.
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Share your requirements and we'll respond with a clear plan,
            timeline, and quote.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <form
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/40"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  value={name}
                  onChange={setName}
                  placeholder="Your full name"
                />
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
                  <div className="text-sm font-medium">Message</div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="What do you need? Pages, style, deadline, reference links..."
                    rows={6}
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-200 dark:border-slate-800 dark:bg-slate-950/40 dark:focus:border-indigo-500/60 dark:focus:ring-indigo-500/15"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  This demo form opens your email client. Replace with your API
                  later.
                </div>
                <Button href={mailto} className="w-fit">
                  Send inquiry
                </Button>
              </div>
            </form>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
              <h2 className="text-lg font-semibold">Contact details</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Update these details with your business information.
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/40">
                  <div className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
                    EMAIL
                  </div>
                  <a
                    className="mt-1 block font-medium text-slate-900 hover:underline dark:text-white"
                    href="mailto:hello@example.com"
                  >
                    hello@example.com
                  </a>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/40">
                  <div className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
                    PHONE
                  </div>
                  <a
                    className="mt-1 block font-medium text-slate-900 hover:underline dark:text-white"
                    href="tel:+910000000000"
                  >
                    +91 00000 00000
                  </a>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/40">
                  <div className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
                    LOCATION
                  </div>
                  <div className="mt-1 font-medium text-slate-900 dark:text-white">
                    India (Remote / On-site)
                  </div>
                  <div className="mt-1 text-slate-600 dark:text-slate-300">
                    Available Mon-Sat, 10:00-19:00 IST
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

