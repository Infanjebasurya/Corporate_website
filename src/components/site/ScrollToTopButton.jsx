import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 700)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function scrollToTop() {
    const prefersReducedMotion =
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <button
      type="button"
      aria-label="Move to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-4 z-[65] inline-flex size-12 items-center justify-center rounded-full border border-white/15 bg-[linear-gradient(180deg,#312e81_0%,#4338ca_100%)] text-white shadow-[0_18px_36px_rgba(49,46,129,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:right-6 sm:size-13 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 5.5 5.5 12l1.41 1.41L11 9.33V20h2V9.33l4.09 4.08L18.5 12 12 5.5Z"
        />
      </svg>
    </button>
  )
}
