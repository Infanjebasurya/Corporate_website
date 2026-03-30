import { useState } from 'react'
import Container from '../../components/ui/Container.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold">{q}</span>
        <span
          className={`inline-flex size-8 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition dark:bg-slate-800 dark:text-slate-200 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6z"
            />
          </svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden px-5 transition-[grid-template-rows] duration-300 ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 pb-4 text-sm text-slate-600 dark:text-slate-300">
          {a}
        </div>
      </div>
    </div>
  )
}

export default function FaqPage() {
  const items = [
    {
      q: 'Is this a real multi-page site?',
      a: 'Yes - each page is a separate route. We use React Router (hash router) so it works well on static hosting.',
    },
    {
      q: 'Can I deploy it to Netlify/Vercel?',
      a: 'Yes. Run `npm run build` and deploy the `dist/` folder. Hash routes work without server rewrites.',
    },
    {
      q: 'How do I change the branding?',
      a: 'Update the logo in `src/components/site/Logo.jsx` and tweak colors via Tailwind classes (or extend `tailwind.config.js`).',
    },
    {
      q: 'Can you add a backend contact form?',
      a: 'Yes. You can integrate Formspree, Netlify Forms, or your own API endpoint. The current form uses `mailto:` for a zero-backend demo.',
    },
    {
      q: 'Will it be SEO friendly?',
      a: 'For best SEO, SSR/SSG is ideal. This SPA is still clean and semantic, and works well for many corporate sites.',
    },
  ]

  return (
    <section>
      <Container className="py-14 sm:py-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400">
            FAQ
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Common questions
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            Quick answers about setup, editing, and deployment.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3">
          {items.map((it) => (
            <Reveal key={it.q}>
              <Item q={it.q} a={it.a} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

