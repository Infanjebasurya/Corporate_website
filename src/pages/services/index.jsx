import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'
import Reveal from '../../components/ui/Reveal.jsx'
import { href } from '../../router/useHashRoute.js'

function Tier({ name, price, tagline, features, highlight }) {
  return (
    <div
      className={`relative rounded-3xl border bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        highlight
          ? 'border-indigo-300 ring-1 ring-indigo-200'
          : 'border-slate-200'
      }`}
    >
      {highlight ? (
        <div className="absolute -top-3 left-7 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
          Most popular
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">{name}</h3>
          <p className="mt-1 text-sm text-slate-600">
            {tagline}
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-semibold tracking-tight">{price}</div>
          <div className="text-xs text-slate-500">
            per project
          </div>
        </div>
      </div>

      <div className="mt-6 h-px w-full bg-slate-200" />

      <ul className="mt-6 space-y-2 text-sm text-slate-700">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 inline-flex size-4 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                />
              </svg>
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Button
          href={href('/contact')}
          className={
            highlight
              ? ''
              : 'bg-slate-950 hover:bg-slate-800'
          }
        >
          Get started
        </Button>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const tiers = [
    {
      name: 'Starter',
      price: '₹ 9,999',
      tagline: 'For a clean, credible presence.',
      features: [
        'Single-page or 3-page layout',
        'Responsive header + footer',
        'Tailwind styling + basic motion',
        'Contact form (static)',
        'Delivery in 48–72 hours',
      ],
    },
    {
      name: 'Professional',
      price: '₹ 24,999',
      tagline: 'For stronger storytelling and conversions.',
      highlight: true,
      features: [
        'All standard pages (About, Services, FAQ, Contact)',
        'Pricing section with tiers',
        'On-scroll reveal animations',
        'SEO-friendly structure and copy pass',
        'One revision round',
      ],
    },
    {
      name: 'Premium',
      price: '₹ 49,999',
      tagline: 'For premium polish and brand depth.',
      features: [
        'Custom sections + advanced animations',
        'More pages (case studies/blog) if needed',
        'Design system pass (colors/typography)',
        'Performance + accessibility review',
        'Two revision rounds',
      ],
    },
  ]

  return (
    <section>
      <Container className="py-14 sm:py-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-indigo-600">
            SERVICES & PRICING
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Clear packages. Premium output.
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600">
            Choose a plan that fits your timeline and scope. We can also tailor
            a custom package—just contact us.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Reveal key={tier.name}>
              <Tier {...tier} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <Reveal>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Need a custom quote?
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Tell us your industry, your target customers, and the pages you
                need. We’ll recommend the fastest path to a premium site.
              </p>
            </div>
          </Reveal>
          <Reveal className="justify-self-start lg:justify-self-end">
            <Button href={href('/contact')}>Request a quote</Button>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

