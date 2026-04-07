import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

function Value({ title, description }) {
  return (
    <div className="rounded-[1.7rem] border border-white/70 bg-white/82 p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(15,23,42,0.12)]">
      <h3 className="text-base font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A stronger digital presence starts with a calmer, clearer system"
        description="This project is designed as a premium starter for service businesses that need credibility, consistency, and an easy way to keep evolving the site over time."
        stats={[
          { label: 'Principle', value: 'Clarity first' },
          { label: 'Approach', value: 'Reusable patterns' },
          { label: 'Outcome', value: 'Trust + conversion' },
          { label: 'Delivery', value: 'Fast to adapt' },
        ]}
        actions={
          <>
            <Button as={Link} to="/services">
              See services
            </Button>
            <Button as={Link} to="/blog" variant="secondary">
              Read insights
            </Button>
          </>
        }
      />

      <section>
        <Container className="pb-16 pt-4 sm:pb-20">
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                title: 'Clarity',
                description:
                  'Your visitors should understand what you do in seconds, with a message that feels focused instead of over-explained.',
              },
              {
                title: 'Credibility',
                description:
                  'The layout, spacing, and visual rhythm are designed to make the brand feel trustworthy and established.',
              },
              {
                title: 'Conversion',
                description:
                  'Each page guides visitors from understanding the offer to exploring services and finally getting in touch.',
              },
            ].map((v) => (
              <Reveal key={v.title}>
                <Value title={v.title} description={v.description} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 rounded-[2rem] border border-white/70 bg-white/82 p-8 shadow-[0_22px_52px_rgba(15,23,42,0.08)] sm:p-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  A simple, maintainable architecture
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Pages live in `src/pages/`, shared UI lives in `src/components/ui/`,
                  and site chrome lives in `src/components/site/`. The result is a
                  structure that is easy to understand, extend, and restyle.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {[
                    'Reusable layout with sticky header and a consistent footer',
                    'Section-based page composition that is easier to redesign',
                    'Subtle motion via reusable reveal behavior',
                    'Tailwind-first styling with minimal custom CSS overhead',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 size-2 rounded-full bg-indigo-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] p-6">
                <div className="text-xs font-semibold tracking-widest text-slate-500">
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
                      className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="text-sm font-medium text-slate-950">{row.k}</span>
                      <span className="text-sm text-slate-600">{row.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}

