import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import Logo from './Logo.jsx'

const footerLinks = [
  { label: 'Terms', path: '/terms' },
  { label: 'Privacy', path: '/privacy' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <Container className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo className="text-lg" />
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              A clean, modern corporate starter built with React + Tailwind.
              Swap content, colors, and pages to match your brand.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-1">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} CorporateKit. All rights reserved.</p>
          <p>
            Built for fast iteration: `npm run dev`, edit pages in `src/pages/`.
          </p>
        </div>
      </Container>
    </footer>
  )
}
