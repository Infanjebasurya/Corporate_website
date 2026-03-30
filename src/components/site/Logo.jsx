import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`}
      aria-label="Go to home"
    >
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-sm">
        <span className="text-sm font-bold">C</span>
      </span>
      <span className="text-slate-900 dark:text-white">
        Corporate<span className="text-indigo-600 dark:text-indigo-400">Kit</span>
      </span>
    </Link>
  )
}
