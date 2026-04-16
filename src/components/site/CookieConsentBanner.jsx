import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  acceptAllConsent,
  defaultCookiePreferences,
  getStoredConsent,
  rejectAllConsent,
  saveCustomConsent,
} from '../../utils/cookieConsent.js'

function Toggle({ checked, onChange, disabled = false }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
        checked ? 'bg-indigo-600' : 'bg-slate-300'
      } ${disabled ? 'cursor-not-allowed opacity-70' : ''}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${
          checked ? 'translate-x-5' : 'translate-x-1'
        }`}
      />
    </button>
  )
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)
  const [animatingOut, setAnimatingOut] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [preferences, setPreferences] = useState(defaultCookiePreferences)

  useEffect(() => {
    const existing = getStoredConsent()
    if (!existing) {
      setVisible(true)
      return
    }

    setPreferences({
      essential: true,
      analytics: !!existing.preferences?.analytics,
      marketing: !!existing.preferences?.marketing,
    })
    setVisible(false)
  }, [])

  function closeWithAnimation(action) {
    setAnimatingOut(true)
    setTimeout(() => {
      action()
      setVisible(false)
      setAnimatingOut(false)
    }, 260)
  }

  function onAcceptAll() {
    closeWithAnimation(() => {
      acceptAllConsent()
    })
  }

  function onRejectAll() {
    closeWithAnimation(() => {
      rejectAllConsent()
    })
  }

  function onSaveCustom() {
    closeWithAnimation(() => {
      saveCustomConsent(preferences)
    })
  }

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 sm:bottom-3 sm:px-6">
      <div
        className={`pointer-events-auto mx-auto max-w-[1240px] transform-gpu transition-all duration-500 ease-out ${
          animatingOut ? 'translate-y-8 scale-95 opacity-0' : 'translate-y-0 scale-100 opacity-100'
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-2xl backdrop-blur-xl">
          <div className="relative px-5 py-4 sm:px-6 sm:py-5 lg:px-7 lg:py-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="relative flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-sky-50 shadow-lg sm:size-16">
                  <svg width="30" height="30" viewBox="0 0 44 44" aria-hidden="true" className="text-indigo-500">
                    <path
                      fill="currentColor"
                      d="M22 8c0 2.72 2.2 4.92 4.92 4.92 1.53 0 2.89-.7 3.8-1.8A14 14 0 1 1 10.2 30.72c1.1-.91 1.8-2.27 1.8-3.8 0-2.72-2.2-4.92-4.92-4.92A14 14 0 0 1 22 8Zm-5.8 11.3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Zm10.1 2.5a1.85 1.85 0 1 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm-4.7 8a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm-7.2-9.2a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Z"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-semibold text-slate-800 sm:text-lg">Cookie preferences</h3>
                  <p className="mt-1 max-w-[700px] text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                    We use essential cookies to keep the site working. Optional analytics and marketing cookies help us improve performance and communication.{' '}
                    <Link
                      to="/privacy"
                      className="inline-flex items-center gap-1 font-medium text-indigo-600 underline decoration-indigo-200 underline-offset-4 transition-all hover:text-indigo-700 hover:decoration-indigo-400"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
                  onClick={onRejectAll}
                >
                  Reject all
                </button>

                <button
                  type="button"
                  className="rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:from-indigo-500 hover:to-indigo-600"
                  onClick={onAcceptAll}
                >
                  Accept all
                </button>
              </div>
            </div>

            <div className="mt-4 border-t border-slate-100 pt-4">
              <button
                type="button"
                className="text-xs font-medium text-slate-600 transition-colors hover:text-indigo-600"
                onClick={() => setShowCustomize((prev) => !prev)}
              >
                {showCustomize ? 'Hide settings' : 'Customize settings'}
              </button>

              {showCustomize ? (
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                  <div className="grid gap-3">
                    <div className="flex items-start justify-between gap-4 rounded-lg bg-white p-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Essential cookies</div>
                        <div className="mt-1 text-xs text-slate-600">Required for basic site functionality.</div>
                      </div>
                      <Toggle checked disabled />
                    </div>

                    <div className="flex items-start justify-between gap-4 rounded-lg bg-white p-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Analytics cookies</div>
                        <div className="mt-1 text-xs text-slate-600">Help us measure usage and improve the experience.</div>
                      </div>
                      <Toggle
                        checked={preferences.analytics}
                        onChange={() =>
                          setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))
                        }
                      />
                    </div>

                    <div className="flex items-start justify-between gap-4 rounded-lg bg-white p-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Marketing cookies</div>
                        <div className="mt-1 text-xs text-slate-600">Used to personalize campaigns and promotions.</div>
                      </div>
                      <Toggle
                        checked={preferences.marketing}
                        onChange={() =>
                          setPreferences((prev) => ({ ...prev, marketing: !prev.marketing }))
                        }
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                      onClick={onSaveCustom}
                    >
                      Save preferences
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}