import { useCallback, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CookieConsentBanner from '../components/site/CookieConsentBanner.jsx'
import Footer from '../components/site/Footer.jsx'
import Header from '../components/site/Header.jsx'
import ScrollToTopButton from '../components/site/ScrollToTopButton.jsx'

export default function SiteLayout() {
  const location = useLocation()
  const [footerHeight, setFooterHeight] = useState(0)
  const isHomePage = location.pathname === '/'

  const handleFooterHeight = useCallback((height) => {
    setFooterHeight(height)
  }, [])

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-[-120px] h-[420px] w-[420px] rounded-full bg-indigo-300/20 blur-3xl" />
        <div className="absolute -right-24 top-[120px] h-[420px] w-[420px] rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
      </div>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0">
        <Footer reveal onHeightChange={handleFooterHeight} />
      </div>

      <Header />
      <main id="main" className={`flex-1 relative z-10 bg-[#f8fafc]`}>
        <div key={location.pathname} className="motion-safe:animate-[fadeIn_.35s_ease-out]">
          <Outlet />
        </div>
        {isHomePage ? (
          <div
            aria-hidden="true"
            className="relative z-10 -mb-4 h-16 w-full rounded-b-[2rem] border-b border-[#e6e6e6] bg-[#f8fafc] md:h-28 md:rounded-b-[2.25rem]"
          />
        ) : null}
      </main>

      <div aria-hidden="true" style={{ height: footerHeight }} />
      <ScrollToTopButton />
      <CookieConsentBanner />
    </div>
  )
}
