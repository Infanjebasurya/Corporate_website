import { createElement } from 'react'

export default function Button({
  as: As = 'a',
  href,
  to,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50'

  const variants = {
    primary:
      'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 active:translate-y-px',
    secondary:
      'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 active:translate-y-px',
    ghost:
      'text-slate-700 hover:bg-slate-100 active:translate-y-px',
  }

  const linkProps = to != null ? { to } : href != null ? { href } : {}

  return createElement(
    As,
    {
      ...linkProps,
      className: `${base} ${variants[variant] ?? variants.primary} ${className}`,
      ...props,
    },
    children,
  )
}
