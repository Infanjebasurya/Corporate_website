import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'corporatekit-cookie-consent'
const COOKIE_NAME = 'corporatekit_cookie_consent'

function getCookieValue(name) {
  if (typeof document === 'undefined') return null

  const cookie = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${name}=`))

  return cookie ? decodeURIComponent(cookie.split('=')[1]) : null
}

function persistConsent(choice) {
  const maxAge = 60 * 60 * 24 * 180

  if (typeof document !== 'undefined') {
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(choice)}; path=/; max-age=${maxAge}; SameSite=Lax; Secure`
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, choice)
  } catch {
    // Ignore storage errors when fallback storage is unavailable.
  }

  try {
    window.dispatchEvent(new CustomEvent('cookieconsentchange', { detail: { choice } }))
  } catch {
    // Ignore if CustomEvent is unavailable.
  }
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  useEffect(() => {
    const cookieConsent = getCookieValue(COOKIE_NAME)

    if (cookieConsent) {
      setVisible(false)
      return
    }

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) {
        persistConsent(stored)
        setVisible(false)
        return
      }

      setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  function handleChoice(choice) {
    const normalized = choice === 'essential' ? 'rejected' : choice
    setIsAnimatingOut(true)
    
    setTimeout(() => {
      persistConsent(normalized)
      setVisible(false)
      setIsAnimatingOut(false)
    }, 300)
  }

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:bottom-3 sm:px-6">
      <div 
        className={`pointer-events-auto mx-auto max-w-[1240px] transform-gpu transition-all duration-500 ease-out ${
          isAnimatingOut 
            ? 'translate-y-8 opacity-0 scale-95' 
            : 'translate-y-0 opacity-100 scale-100'
        }`}
      >
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:shadow-indigo-500/10 hover:border-indigo-200/50 sm:rounded-2xl">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 transition-all duration-700 group-hover:from-indigo-500/5 group-hover:via-indigo-500/5 group-hover:to-indigo-500/10" />
          
          {/* Decorative elements */}
          <div className="absolute -right-8 -top-8 size-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-2xl transition-all duration-700 group-hover:scale-150" />
          <div className="absolute -bottom-8 -left-8 size-32 rounded-full bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 blur-2xl transition-all duration-700 group-hover:scale-150" />
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
            boxShadow: '0 0 0 2px rgba(99, 102, 241, 0.1), 0 0 0 4px rgba(99, 102, 241, 0.05)'
          }} />

          <div className="relative px-5 py-4 sm:px-6 sm:py-5 lg:px-7 lg:py-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Animated cookie icon */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl transition-all duration-500 group-hover:blur-2xl" />
                  <div className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-indigo-500/25 sm:size-16">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 44 44"
                      aria-hidden="true"
                      className="text-indigo-500 transition-all duration-500 group-hover:scale-110 group-hover:text-indigo-600"
                    >
                      <path
                        fill="currentColor"
                        d="M22 8c0 2.72 2.2 4.92 4.92 4.92 1.53 0 2.89-.7 3.8-1.8A14 14 0 1 1 10.2 30.72c1.1-.91 1.8-2.27 1.8-3.8 0-2.72-2.2-4.92-4.92-4.92A14 14 0 0 1 22 8Zm-5.8 11.3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Zm10.1 2.5a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm-4.7 8a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm-7.2-9.2a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-semibold text-slate-800 sm:text-lg">
                    🍪 Cookie preferences
                  </h3>
                  <p className="mt-1 max-w-[600px] text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.{' '}
                    <Link
                      to="/privacy"
                      className="inline-flex items-center gap-1 font-medium text-indigo-600 underline decoration-indigo-200 underline-offset-4 transition-all hover:text-indigo-700 hover:decoration-indigo-400"
                    >
                      Learn more
                      <svg className="size-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  className="group/btn relative overflow-hidden rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md active:scale-95 sm:px-6 sm:py-3"
                  onClick={() => handleChoice('rejected')}
                >
                  <span className="relative flex items-center gap-2">
                    <svg className="size-4 transition-transform duration-300 group-hover/btn:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Reject
                  </span>
                </button>
                
                <button
                  type="button"
                  className="group/btn relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:from-indigo-500 hover:to-indigo-600 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-95 sm:px-6 sm:py-3"
                  onClick={() => handleChoice('accepted')}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 group-hover/btn:translate-x-full" />
                  
                  <span className="relative flex items-center gap-2">
                    <svg className="size-4 transition-transform duration-300 group-hover/btn:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Accept all
                  </span>
                </button>
              </div>
            </div>

            {/* Optional: Cookie settings link */}
            <div className="mt-3 flex items-center justify-end border-t border-slate-100 pt-3">
              <button
                type="button"
                className="text-xs text-slate-500 transition-colors hover:text-indigo-600"
                onClick={() => {
                  // You can expand this to show detailed cookie settings
                  console.log('Open cookie settings')
                }}
              >
                Customize settings →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeOut {
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      `}</style>
    </div>
  )
}