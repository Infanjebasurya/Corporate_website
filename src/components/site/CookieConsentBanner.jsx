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
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(choice)}; path=/; max-age=${maxAge}; SameSite=Lax`
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
    persistConsent(normalized)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-[70] px-4 sm:bottom-5 sm:px-6">
      <div className="pointer-events-auto mx-auto max-w-[1240px] rounded-[1.75rem] border border-[#f1f2fb] bg-white px-4 py-3 shadow-[0_12px_28px_rgba(15,23,42,0.06)] motion-safe:animate-[fadeIn_.35s_ease-out] sm:px-5 sm:py-3 lg:px-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#fafbff_0%,#f1f3ff_60%,#ebeeff_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] sm:size-16">
              <svg
                width="30"
                height="30"
                viewBox="0 0 44 44"
                aria-hidden="true"
                className="text-[#8f92ba]"
              >
                <path
                  fill="currentColor"
                  d="M22 8c0 2.72 2.2 4.92 4.92 4.92 1.53 0 2.89-.7 3.8-1.8A14 14 0 1 1 10.2 30.72c1.1-.91 1.8-2.27 1.8-3.8 0-2.72-2.2-4.92-4.92-4.92A14 14 0 0 1 22 8Zm-5.8 11.3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Zm10.1 2.5a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm-4.7 8a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm-7.2-9.2a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"
                />
              </svg>
            </div>

            <p className="max-w-[640px] text-[13px] leading-[1.5] font-medium tracking-[-0.01em] text-[#6e7198] sm:text-[14px] sm:leading-[1.45] lg:text-[15px]">
              We use cookies to improve the site experience. Choose Accept to
              allow cookies, or Reject to allow only essential cookies. See our{' '}
              <Link
                to="/privacy"
                className="font-semibold text-[#666a96] underline decoration-[#d5d7ef] underline-offset-4 transition hover:text-[#4c39f6]"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-[#e6e8fb] bg-[#fbfbff] px-5 text-[13px] font-semibold text-[#2b2f6f] shadow-[0_10px_18px_rgba(15,23,42,0.04)] transition hover:bg-white sm:min-h-11 sm:px-7 sm:text-[13px]"
              onClick={() => handleChoice('rejected')}
            >
              Reject cookies
            </button>
            <button
              type="button"
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[linear-gradient(90deg,#5b39f6_0%,#4236f2_100%)] px-5 text-[13px] font-semibold text-white shadow-[0_14px_28px_rgba(91,57,246,0.18)] transition hover:brightness-105 sm:min-h-11 sm:px-7 sm:text-[13px] lg:min-w-[210px]"
              onClick={() => handleChoice('accepted')}
            >
              Accept cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
