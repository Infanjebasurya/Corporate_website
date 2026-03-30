import Container from '../../components/ui/Container.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

function Value({ title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <section>
      <Container className="py-14 sm:py-16">
        <Reveal>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400">
              ABOUT US
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              We build corporate websites that feel premium and perform.
            </h1>
            <p className="max-w-3xl text-sm text-slate-600 dark:text-slate-300">
              This project is a polished starter: simple architecture, clear
              pages, and reusable UI patterns. Replace the copy with your real
              story and you're ready to launch.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: 'Clarity',
              description:
                'Your visitors should understand what you do in 5 seconds.',
            },
            {
              title: 'Credibility',
              description:
                'Consistent layout, strong typography, and real proof points.',
            },
            {
              title: 'Conversion',
              description:
                'A focused path from value proposition -> pricing -> contact.',
            },
          ].map((v) => (
            <Reveal key={v.title}>
              <Value title={v.title} description={v.description} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 sm:p-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                A simple, maintainable architecture
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Pages live in `src/pages/`, shared UI lives in
                `src/components/ui/`, and site chrome lives in
                `src/components/site/`.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {[
                  'Reusable layout with sticky header + footer',
                  'Consistent sections (hero, features, pricing, CTA)',
                  'Subtle animations with IntersectionObserver reveals',
                  'Tailwind-first styling with minimal custom CSS',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 size-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl bg-slate-50 p-6 dark:bg-slate-950/40">
              <div className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
                TEAM PRINCIPLES
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  { k: 'Design', v: 'Less noise, more signal.' },
                  { k: 'Engineering', v: 'Small components, clear flow.' },
                  { k: 'Delivery', v: 'Fast iterations and clean handoff.' },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm dark:bg-slate-900/60"
                  >
                    <span className="text-sm font-medium">{row.k}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

