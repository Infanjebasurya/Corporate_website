import { useEffect, useState } from 'react'
import { Link, NavLink as RouterNavLink } from 'react-router-dom'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import Logo from './Logo.jsx'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]

function NavItemLink({ label, path, onClick }) {
  return (
    <RouterNavLink
      to={path}
      onClick={onClick}
      className={({ isActive }) =>
        `rounded-lg px-3 py-2 text-sm font-medium transition ${
          isActive
            ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
            : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900/60'
        }`
      }
    >
      {label}
    </RouterNavLink>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/60">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-sm focus:outline-none dark:focus:bg-slate-900"
      >
        Skip to content
      </a>

      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavItemLink
              key={item.path}
              label={item.label}
              path={item.path}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button as={Link} to="/contact" variant="secondary">
            Get a quote
          </Button>
          <Button as={Link} to="/services">
            View pricing
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-200 dark:hover:bg-slate-900/60 dark:focus-visible:ring-offset-slate-950 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d={
                open
                  ? 'M18.3 5.71 12 12l6.3 6.29-1.42 1.42L10.59 13.4 4.29 19.71 2.87 18.29 9.17 12 2.87 5.71 4.29 4.29l6.3 6.3 6.29-6.3z'
                  : 'M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z'
              }
            />
          </svg>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-slate-200/70 bg-white motion-safe:animate-[fadeIn_.25s_ease-out] dark:border-slate-800/70 dark:bg-slate-950 md:hidden">
          <Container className="py-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavItemLink
                  key={item.path}
                  label={item.label}
                  path={item.path}
                  onClick={() => setOpen(false)}
                />
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Button as={Link} to="/contact" variant="secondary">
                  Get a quote
                </Button>
                <Button as={Link} to="/services">
                  Pricing
                </Button>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
