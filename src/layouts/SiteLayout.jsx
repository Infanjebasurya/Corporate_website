import { useLocation } from 'react-router-dom'
import Footer from '../components/site/Footer.jsx'
import Header from '../components/site/Header.jsx'
import { Outlet } from 'react-router-dom'

export default function SiteLayout() {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-400/25 blur-3xl dark:bg-indigo-500/15" />
        <div className="absolute -right-24 top-[120px] h-[420px] w-[420px] rounded-full bg-violet-400/25 blur-3xl dark:bg-violet-500/15" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200/70 to-transparent dark:via-slate-800/70" />
      </div>

      <Header />
      <main id="main" className="flex-1">
        <div key={location.pathname} className="motion-safe:animate-[fadeIn_.35s_ease-out]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
