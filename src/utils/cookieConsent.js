export const COOKIE_CONSENT_STORAGE_KEY = 'corporatekit-cookie-consent'
export const COOKIE_CONSENT_COOKIE_NAME = 'corporatekit_cookie_consent'

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 180

export const defaultCookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
}

function getCookieValue(name) {
  if (typeof document === 'undefined') return null
  const cookie = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${name}=`))
  return cookie ? decodeURIComponent(cookie.split('=')[1]) : null
}

function setCookie(name, value, maxAge = COOKIE_MAX_AGE_SECONDS) {
  if (typeof document === 'undefined') return
  const secureFlag = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax${secureFlag}`
}

function toStatus(choice) {
  if (choice === 'accepted') return 'accepted'
  if (choice === 'rejected' || choice === 'essential') return 'rejected'
  if (choice === 'custom') return 'custom'
  return null
}

function buildPayload(status, preferences) {
  return {
    status,
    preferences: {
      essential: true,
      analytics: !!preferences.analytics,
      marketing: !!preferences.marketing,
    },
    updatedAt: new Date().toISOString(),
  }
}

export function parseStoredConsent(raw) {
  if (!raw) return null

  try {
    const parsed = JSON.parse(raw)
    if (
      parsed &&
      (parsed.status === 'accepted' || parsed.status === 'rejected' || parsed.status === 'custom') &&
      parsed.preferences
    ) {
      return buildPayload(parsed.status, parsed.preferences)
    }
  } catch {
    const status = toStatus(raw)
    if (status === 'accepted') {
      return buildPayload('accepted', { analytics: true, marketing: true })
    }
    if (status === 'rejected') {
      return buildPayload('rejected', { analytics: false, marketing: false })
    }
  }

  return null
}

export function getStoredConsent() {
  try {
    const local = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY)
    const parsedLocal = parseStoredConsent(local)
    if (parsedLocal) return parsedLocal
  } catch {
    // Ignore and continue to cookie fallback.
  }

  const cookie = getCookieValue(COOKIE_CONSENT_COOKIE_NAME)
  const parsedCookie = parseStoredConsent(cookie)
  return parsedCookie
}

export function persistConsent(consent) {
  const safeConsent = buildPayload(consent.status, consent.preferences)
  const serialized = JSON.stringify(safeConsent)

  setCookie(COOKIE_CONSENT_COOKIE_NAME, serialized)

  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, serialized)
  } catch {
    // Ignore storage errors when fallback storage is unavailable.
  }

  try {
    window.dispatchEvent(new CustomEvent('cookieconsentchange', { detail: { consent: safeConsent } }))
  } catch {
    // Ignore if CustomEvent is unavailable.
  }

  return safeConsent
}

export function acceptAllConsent() {
  return persistConsent(buildPayload('accepted', { analytics: true, marketing: true }))
}

export function rejectAllConsent() {
  return persistConsent(buildPayload('rejected', { analytics: false, marketing: false }))
}

export function saveCustomConsent(preferences) {
  const status = preferences.analytics || preferences.marketing ? 'custom' : 'rejected'
  return persistConsent(buildPayload(status, preferences))
}

export function clearStoredConsent() {
  if (typeof document !== 'undefined') {
    setCookie(COOKIE_CONSENT_COOKIE_NAME, '', 0)
  }

  try {
    window.localStorage.removeItem(COOKIE_CONSENT_STORAGE_KEY)
  } catch {
    // Ignore storage errors when fallback storage is unavailable.
  }
}
