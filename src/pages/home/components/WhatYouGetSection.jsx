import { Link } from 'react-router-dom'
import Button from '../../../components/ui/Button.jsx'
import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'

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

const features = [
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
]

export default function WhatYouGetSection() {
  return (
    <section className="border-t border-slate-200 bg-white/60 dark:border-slate-800 dark:bg-slate-950/30">
      <Container className="py-14">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                What you get
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                A corporate site structure that&apos;s easy to edit and looks
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
          {features.map((feature) => (
            <Reveal key={feature.title}>
              <Feature {...feature} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
