import { useEffect, useState } from 'react'
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import Logo from './Logo.jsx'

const navItems = [
  {
    key: 'home',
    label: 'Home',
    path: '/',
    sections: [
      {
        title: 'Overview',
        links: [
          {
            label: 'Hero section',
            description: 'Main headline, positioning, and the first premium impression.',
            path: '/',
            accent: 'indigo',
            icon: <path fill="currentColor" d="M12 3 4 8v11h5v-6h6v6h5V8l-8-5Z" />,
          },
          {
            label: 'Feature highlights',
            description: 'Core value blocks, fast-scan benefits, and conversion copy.',
            path: '/',
            accent: 'violet',
            icon: <path fill="currentColor" d="M5 7h14v2H5V7Zm0 4h14v2H5v-2Zm0 4h9v2H5v-2Z" />,
          },
        ],
      },
      {
        title: 'Action',
        links: [
          {
            label: 'Launch CTA',
            description: 'The homepage call to action that guides visitors into inquiry.',
            path: '/contact',
            accent: 'blue',
            icon: <path fill="currentColor" d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />,
          },
        ],
      },
    ],
    feature: {
      eyebrow: 'Home',
      title: 'Modern Presence',
      subtitle: 'Your current homepage content, presented inside a richer navigation experience.',
      path: '/',
    },
  },
  {
    key: 'about',
    label: 'About',
    path: '/about',
    sections: [
      {
        title: 'Story',
        links: [
          {
            label: 'Company values',
            description: 'Clarity, credibility, and conversion wrapped in a premium narrative.',
            path: '/about',
            accent: 'indigo',
            icon: <path fill="currentColor" d="M12 2 5 5v6c0 5 3 9.74 7 11 4-1.26 7-6 7-11V5l-7-3Z" />,
          },
          {
            label: 'Architecture',
            description: 'The maintainable structure and the reusable UI approach.',
            path: '/about',
            accent: 'emerald',
            icon: <path fill="currentColor" d="M4 5h16v14H4V5Zm2 2v2h12V7H6Zm0 4v6h5v-6H6Zm7 0h5v2h-5v-2Zm0 4h5v2h-5v-2Z" />,
          },
        ],
      },
    ],
    feature: {
      eyebrow: 'About',
      title: 'Your Story',
      subtitle: 'The same about content and theme, now framed with a cleaner showcase layout.',
      path: '/about',
    },
  },
  {
    key: 'services',
    label: 'Services',
    path: '/services',
    sections: [
      {
        title: 'Packages',
        links: [
          {
            label: 'Starter',
            description: 'Fast launch package with a polished entry point.',
            path: '/services',
            accent: 'amber',
            icon: <path fill="currentColor" d="M12 2 3 6v6c0 5 3.84 9.74 9 10 5.16-.26 9-5 9-10V6l-9-4Z" />,
          },
          {
            label: 'Professional',
            description: 'Balanced pricing and stronger storytelling for business growth.',
            path: '/services',
            accent: 'violet',
            icon: <path fill="currentColor" d="M4 6h16v4H4V6Zm2 6h12v6H6v-6Zm2 2v2h4v-2H8Z" />,
          },
          {
            label: 'Premium',
            description: 'Custom sections, polished visuals, and elevated delivery.',
            path: '/services',
            accent: 'indigo',
            icon: <path fill="currentColor" d="M12 2 9.8 8.8 3 9.2l5.2 4.2-1.8 6.6L12 16.3 17.6 20l-1.8-6.6L21 9.2l-6.8-.4L12 2Z" />,
          },
        ],
      },
      {
        title: 'Next Step',
        links: [
          {
            label: 'Get a quote',
            description: 'Move directly from package review into the contact flow.',
            path: '/contact',
            accent: 'blue',
            icon: <path fill="currentColor" d="M4 6h16v12H4V6Zm8 5L5.5 7.5v9h13v-9L12 11Z" />,
          },
        ],
      },
    ],
    feature: {
      eyebrow: 'Services',
      title: 'Premium Plans',
      subtitle: 'Use your current packages and copy, but present them inside a more beautiful nav UI.',
      path: '/services',
    },
  },
  {
    key: 'faq',
    label: 'FAQ',
    path: '/faq',
    sections: [
      {
        title: 'Answers',
        links: [
          {
            label: 'Deployment help',
            description: 'Guide visitors through hosting, build, and launch details.',
            path: '/faq',
            accent: 'indigo',
            icon: <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15h-2v-2h2v2Zm2.07-7.75-.9.92A3.43 3.43 0 0 0 13 13h-2v-.5a4.5 4.5 0 0 1 1.32-3.18l1.24-1.26A1.5 1.5 0 1 0 11 7H9a3.5 3.5 0 1 1 6.07 2.25Z" />,
          },
          {
            label: 'Brand updates',
            description: 'Guidance around customization and content editing.',
            path: '/faq',
            accent: 'violet',
            icon: <path fill="currentColor" d="M4 5h16v10H7l-3 3V5Zm4 3h8v2H8V8Zm0 4h5v2H8v-2Z" />,
          },
        ],
      },
    ],
    feature: {
      eyebrow: 'FAQ',
      title: 'Clear Answers',
      subtitle: 'Keep the existing support content, but surface it through a refined dropdown panel.',
      path: '/faq',
    },
  },
  {
    key: 'contact',
    label: 'Contact',
    path: '/contact',
    sections: [
      {
        title: 'Connect',
        links: [
          {
            label: 'Inquiry form',
            description: 'Collect project requirements with your current contact page flow.',
            path: '/contact',
            accent: 'emerald',
            icon: <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4Z" />,
          },
          {
            label: 'Business details',
            description: 'Email, phone, and timing information remain easy to reach.',
            path: '/contact',
            accent: 'amber',
            icon: <path fill="currentColor" d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1l-2.21 2.22Z" />,
          },
        ],
      },
    ],
    feature: {
      eyebrow: 'Contact',
      title: 'Talk To Us',
      subtitle: 'The current contact experience stays the same, with a stronger visual entry point.',
      path: '/contact',
    },
  },
]

const mobileLinks = navItems.map(({ label, path }) => ({ label, path }))

const accentClasses = {
  amber: 'border-amber-100 bg-amber-50 text-amber-700',
  blue: 'border-blue-100 bg-blue-50 text-blue-700',
  emerald: 'border-emerald-100 bg-emerald-50 text-emerald-700',
  indigo: 'border-indigo-100 bg-indigo-50 text-indigo-700',
  violet: 'border-violet-100 bg-violet-50 text-violet-700',
}

function DesktopNavLink({ label, isActive, onEnter }) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      className={`rounded-2xl px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] transition ${
        isActive
          ? 'bg-slate-100 text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]'
          : 'text-slate-900 hover:bg-slate-50'
      }`}
      aria-expanded={isActive}
    >
      {label}
    </button>
  )
}

function MobileNavLink({ label, path, onClick }) {
  return (
    <RouterNavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `rounded-2xl px-4 py-3 text-sm font-medium transition ${
          isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'
        }`
      }
    >
      {label}
    </RouterNavLink>
  )
}

function HeaderAction({ to, dark = false, children }) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-base font-medium transition ${
        dark
          ? 'bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_rgba(255,255,255,0.03)_34%),linear-gradient(180deg,#1e293b_0%,#0f172a_100%)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_12px_24px_rgba(15,23,42,0.12)] hover:brightness-105'
          : 'border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.98),0_8px_18px_rgba(15,23,42,0.05)] hover:bg-white'
      }`}
    >
      {children}
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [activeKey, setActiveKey] = useState('')

  useEffect(() => {
    setActiveKey('')
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const activeNav = navItems.find((item) => item.key === activeKey) ?? null

  return (
    <header className="sticky top-0 z-50 pt-4 sm:pt-5">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-sm focus:outline-none"
      >
        Skip to content
      </a>

      <Container className="relative max-w-7xl">
        <div className="hidden md:block" onMouseLeave={() => setActiveKey('')}>
          <div className="overflow-hidden rounded-[2.15rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(248,250,252,0.96)_0%,rgba(241,245,249,0.9)_100%)] shadow-[0_18px_52px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl">
            <div className="flex items-center justify-between gap-6 px-6 py-2.5 lg:px-10 lg:py-3">
              <Logo />

              <nav className="flex items-center gap-2" aria-label="Primary">
                {navItems.map((item) => (
                  <DesktopNavLink
                    key={item.key}
                    label={item.label}
                    isActive={activeKey === item.key}
                    onEnter={() => setActiveKey(item.key)}
                  />
                ))}
              </nav>

              <div className="flex items-center gap-2.5">
                <HeaderAction to="/contact" dark>
                  Get a quote
                </HeaderAction>
                <HeaderAction to="/services">View pricing</HeaderAction>
              </div>
            </div>

            {activeNav ? (
              <div className="border-t border-slate-200/80 bg-slate-50/80 px-8 py-10 lg:px-12 lg:py-12">
                <div className="grid gap-10 xl:grid-cols-[1.5fr_0.88fr]">
                  <div className="grid gap-10 md:grid-cols-2">
                    {activeNav.sections.map((section) => (
                      <div key={section.title}>
                        <div className="mb-8 text-sm font-semibold uppercase tracking-[0.08em] text-slate-600">
                          {section.title}
                        </div>
                        <div className="space-y-5">
                          {section.links.map((link) => (
                          <Link
                            key={link.label}
                            to={link.path}
                            onClick={() => setActiveKey('')}
                            className="group flex items-start gap-4 rounded-2xl px-1 py-1 pr-4 transition hover:bg-slate-50/90"
                          >
                              <span
                                className={`mt-0.5 inline-flex size-14 shrink-0 items-center justify-center rounded-2xl border ${
                                  accentClasses[link.accent] ?? accentClasses.indigo
                                } shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]`}
                              >
                                <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                                  {link.icon}
                                </svg>
                              </span>
                              <span className="min-w-0">
                                <span className="block text-[1.15rem] font-semibold text-slate-800 transition group-hover:text-slate-950">
                                  {link.label}
                                </span>
                                <span className="mt-1 block text-base text-slate-500">
                                  {link.description}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                <Link
                  to={activeNav.feature.path}
                  onClick={() => setActiveKey('')}
                  className="group self-start rounded-[1.7rem] border border-slate-200/90 bg-white/90 p-3 shadow-[0_18px_44px_rgba(15,23,42,0.06)]"
                >
                    <div className="relative flex min-h-[258px] items-center justify-center overflow-hidden rounded-[1.2rem] bg-[linear-gradient(135deg,#312e81_0%,#4f46e5_34%,#7c3aed_68%,#6366f1_100%)] px-8 py-10 text-center">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.18),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.22),transparent_32%)]" />
                      <div className="relative">
                        <div className="text-sm font-medium uppercase tracking-[0.12em] text-white/75">
                          {activeNav.feature.eyebrow}
                        </div>
                        <div className="mt-3 max-w-[10ch] text-5xl font-semibold tracking-tight text-white">
                          {activeNav.feature.title}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 px-3 pb-1 pt-4">
                      <span className="text-[1.05rem] text-slate-700">
                        {activeNav.feature.subtitle}
                      </span>
                      <span className="text-2xl text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        {'>'}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(248,250,252,0.96)_0%,rgba(241,245,249,0.9)_100%)] p-4 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
          <div className="flex items-center justify-between gap-4">
            <Logo />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d={
                    open
                      ? 'M18.3 5.71 12 12l6.3 6.29-1.42 1.42L10.59 13.4 4.29 19.71 2.87 18.29 9.17 12 2.87 5.71 4.29 4.29l6.3 6.3 6.29-6.3z'
                      : 'M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2z'
                  }
                />
              </svg>
            </button>
          </div>

          {open ? (
            <div className="mt-4 border-t border-slate-200 pt-4 motion-safe:animate-[fadeIn_.25s_ease-out]">
              <div className="flex flex-col gap-2">
                {mobileLinks.map((item) => (
                  <MobileNavLink
                    key={item.path}
                    label={item.label}
                    path={item.path}
                    onClick={() => setOpen(false)}
                  />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <HeaderAction to="/contact" dark>
                  Get a quote
                </HeaderAction>
                <HeaderAction to="/services">View pricing</HeaderAction>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </header>
  )
}
