import { Link } from 'react-router-dom'

export default function Logo({ className = '', tone = 'dark' }) {
  const isLight = tone === 'light'
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`}
      aria-label="Go to home"
    >
      <span className={`grid size-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white ${isLight ? '' : 'shadow-sm'}`}>
        <span className="text-sm font-bold">C</span>
      </span>
      <span className={isLight ? 'text-white' : 'text-slate-900'}>
        Corporate<span className={isLight ? 'text-white/80' : 'text-indigo-600'}>Kit</span>
      </span>
    </Link>
  )
}
