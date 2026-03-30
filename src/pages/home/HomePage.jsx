import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        {label}
      </div>
    </div>
  )
}

function Feature({ title, description }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300">
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 14.5-4-4 1.41-1.41L11 13.67l5.59-5.59L18 9.5Z"
          />
        </svg>
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>
      <div className="mt-4 h-px w-12 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-60 transition group-hover:w-20" />
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <section className="relative">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-200">
                <span className="size-2 rounded-full bg-emerald-500" />
                Trusted by teams that ship fast
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                A modern corporate website that looks premium, loads fast, and
                converts.
              </h1>
              <p className="mt-4 max-w-xl text-base text-slate-600 dark:text-slate-300">
                Clean pages, strong typography, responsive navigation, pricing,
                and motion that feels professional - not noisy.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button as={Link} to="/services">
                  Explore services
                </Button>
                <Button as={Link} to="/contact" variant="secondary">
                  Contact sales
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Stat value="1-3 days" label="Typical launch time" />
                <Stat value="Mobile-first" label="Responsive by design" />
                <Stat value="SEO-ready" label="Clean semantic structure" />
              </div>
            </Reveal>

            <Reveal className="lg:justify-self-end">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
                <div className="absolute -right-28 -top-28 size-72 rounded-full bg-gradient-to-br from-indigo-500/25 to-violet-500/25 blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      Executive overview
                    </div>
                    <div className="rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      Live
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4">
                    {[
                      { k: 'Pipeline', v: 'INR 18.6L' },
                      { k: 'New leads', v: '124' },
                      { k: 'Conversion', v: '3.2%' },
                    ].map((item) => (
                      <div
                        key={item.k}
                        className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-950/40"
                      >
                        <div className="text-xs text-slate-600 dark:text-slate-300">
                          {item.k}
                        </div>
                        <div className="mt-1 text-lg font-semibold">
                          {item.v}
                        </div>
                        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 bg-[length:200%_100%] motion-safe:animate-[shimmer_2.2s_linear_infinite]" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-xs text-slate-500 dark:text-slate-400">
                    Replace these demo cards with your KPIs, testimonials, or
                    product screenshots.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white/60 dark:border-slate-800 dark:bg-slate-950/30">
        <Container className="py-14">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  What you get
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                  A corporate site structure that's easy to edit and looks
                  credible for agencies, startups, consultants, and local
                  businesses.
                </p>
              </div>
              <Button
                as={Link}
                to="/about"
                variant="ghost"
                className="w-fit"
              >
                Learn more {'>'}
              </Button>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Professional layout',
                description:
                  'Sticky header, clear hierarchy, strong spacing, and a consistent grid.',
              },
              {
                title: 'Fast performance',
                description:
                  'Vite build, minimal JS overhead, and modern CSS for smooth UI.',
              },
              {
                title: 'Conversion-focused',
                description:
                  'Bold CTAs, pricing tiers, and a simple contact funnel.',
              },
              {
                title: 'Responsive navigation',
                description:
                  'Mobile menu with keyboard-friendly behavior and clear active state.',
              },
              {
                title: 'Reusable components',
                description:
                  'Container, Button, Reveal, and consistent section patterns.',
              },
              {
                title: 'Beautiful motion',
                description:
                  'Subtle reveal animations, hover lift, and gentle shimmer accents.',
              },
            ].map((f) => (
              <Reveal key={f.title}>
                <Feature title={f.title} description={f.description} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <Reveal>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-600 to-violet-600 p-8 text-white shadow-sm dark:border-slate-800 sm:p-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Ready to launch your corporate presence?
                  </h2>
                  <p className="mt-2 text-sm text-white/85">
                    Tell us what you do and we'll craft a site that fits your
                    brand, messaging, and target customers.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    as={Link}
                    to="/contact"
                    variant="secondary"
                    className="ring-0"
                  >
                    Talk to us
                  </Button>
                  <Button
                    as={Link}
                    to="/services"
                    className="bg-white text-slate-900 hover:bg-white/90"
                  >
                    See pricing
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
