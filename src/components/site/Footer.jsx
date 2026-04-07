import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'
import Logo from './Logo.jsx'

const footerGroups = [
  {
    title: 'Products',
    links: [
      { label: 'Corporate websites', path: '/' },
      { label: 'Service pages', path: '/services' },
      { label: 'Brand insights', path: '/blog' },
    ],
  },
  {
    title: 'API',
    links: [
      { label: 'Frontend architecture', path: '/about' },
      { label: 'Performance notes', path: '/faq' },
      { label: 'Pricing overview', path: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', path: '/about' },
      { label: 'Blogs', path: '/blog' },
      { label: 'Terms of service', path: '/terms' },
      { label: 'Privacy policy', path: '/privacy' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { label: 'LinkedIn', path: '/contact' },
      { label: 'X', path: '/contact' },
      { label: 'YouTube', path: '/contact' },
    ],
  },
]

function FooterLink({ label, path }) {
  return (
    <Link
      to={path}
      className="group inline-flex w-fit max-w-full items-start gap-2 text-base leading-8 text-slate-300 transition duration-300 hover:text-white"
    >
      <span className="break-words">{label}</span>
      <span className="pt-1 text-indigo-400/0 transition duration-300 group-hover:text-indigo-400">
        {'>'}
      </span>
    </Link>
  )
}

function TrustBadge({ title, subtitle }) {
  return (
    <div className="rounded-[1.4rem] border border-white/8 bg-white/5 px-4 py-4 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-indigo-400/20 hover:bg-white/8">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {title}
      </div>
      <div className="mt-1 text-sm font-medium text-slate-200">
        {subtitle}
      </div>
    </div>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-8 overflow-hidden border-t border-white/8 bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(96,165,250,0.12),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(251,191,36,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18)_0%,rgba(5,8,22,0.96)_40%,rgba(5,8,22,1)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />

      <Container className="relative max-w-7xl py-14 sm:py-16 lg:py-20">
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-[minmax(280px,1.05fr)_minmax(0,2fr)] lg:items-start">
            <div className="max-w-sm">
              <Logo className="text-[2rem] [&_span:last-child]:text-white [&_span:last-child_span]:text-indigo-300" />
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Premium digital presence starts here.
              </p>

              {/* <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-[18rem]">
                <TrustBadge title="Delivery" subtitle="Fast turnaround" />
                <TrustBadge title="Quality" subtitle="Polished UI system" />
              </div> */}
            </div>

            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-14">
              {footerGroups.map((group, index) => (
                <div
                  key={group.title}
                  className="min-w-0 opacity-100 motion-safe:animate-[fadeIn_.55s_ease-out]"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {group.title}
                  </div>
                  <div className="mt-6 flex min-w-0 flex-col items-start gap-1">
                    {group.links.map((link) => (
                      <FooterLink key={`${group.title}-${link.label}`} {...link} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <div className="flex flex-col gap-4 border-t border-white/8 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>Copyright CorporateKit {year}</p>
            <p className="max-w-md text-left md:text-right">
              All rights reserved. Bengaluru - 560001
            </p>
          </div>
        </Reveal>
      </Container>
    </footer>
  )
}
