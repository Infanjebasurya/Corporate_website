import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'
import Logo from './Logo.jsx'

const footerGroups = [
  {
    title: 'Products',
    links: [
      { label: 'Corporate websites', path: '/' },
      { label: 'Service pages', path: '/services' },
      { label: 'Brand insights', path: '/blog' },
    ],
  },
  {
    title: 'API',
    links: [
      { label: 'Frontend architecture', path: '/about' },
      { label: 'Performance notes', path: '/faq' },
      { label: 'Pricing overview', path: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', path: '/about' },
      { label: 'Blogs', path: '/blog' },
      { label: 'Terms of service', path: '/terms' },
      { label: 'Privacy policy', path: '/privacy' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { label: 'LinkedIn', path: '/contact' },
      { label: 'X', path: '/contact' },
      { label: 'YouTube', path: '/contact' },
    ],
  },
]

function FooterLink({ label, path }) {
  return (
    <Link
      to={path}
      className="block w-fit max-w-full text-base leading-normal text-[#666] transition-colors hover:text-indigo-800"
    >
      <span className="break-words">{label}</span>
    </Link>
  )
}

function FooterGlow({ intensity }) {
  const clamped = Math.max(0, Math.min(1, intensity))

  // Small to big: starts at 0 (invisible), grows to full size as you scroll down
  const scale = clamped
  // Opacity also fades in for a more dramatic bloom effect
  const opacity = clamped

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex h-full w-full flex-col items-center justify-end"
    >
      <div
        className="relative mx-auto -mb-20 w-full max-w-[1200px] scale-x-[200%] scale-y-[300%] md:scale-x-[100%] md:scale-y-[90%]"
        style={{
          transformOrigin: 'center bottom',
        }}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            opacity: opacity,
            transformOrigin: 'center bottom',
            transition: 'transform 140ms ease, opacity 140ms ease',
          }}
        >
          <svg
            width="2292"
            height="833"
            viewBox="0 0 2292 833"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <g clipPath="url(#clip0_footer)">
              <g filter="url(#filter0_footer)">
                <path
                  d="M1113.5 40C502.673 39.9999 40 793 40 793H2252C2252 793 1724.33 40 1113.5 40Z"
                  fill="url(#paint0_footer)"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_footer"
                x="-10"
                y="-10"
                width="2312"
                height="853"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur" />
              </filter>
              <radialGradient
                id="paint0_footer"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(0 -1256.51 2148.88 -11.8434 1146 1272)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.327754" stopColor="#F9730C" />
                <stop offset="0.423421" stopColor="#FFA336" />
                <stop offset="0.536751" stopColor="#F0D5BA" />
                <stop offset="0.635122" stopColor="#CBDBFF" />
                <stop offset="1" stopColor="#FAFAFA" stopOpacity="0" />
              </radialGradient>
              <clipPath id="clip0_footer">
                <rect width="2292" height="833" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}




function FooterBottom({ children, className = '', reveal }) {
  if (reveal) {
    return <Reveal className={className}>{children}</Reveal>
  }

  return <div className={className}>{children}</div>
}

export default function Footer({ onHeightChange, reveal = false, className = '' }) {
  const year = new Date().getFullYear()
  const footerRef = useRef(null)

  const prefersReducedMotion = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false,
    [],
  )

  const [glowIntensity, setGlowIntensity] = useState(0)

  useEffect(() => {
    if (!onHeightChange) return

    const element = footerRef.current
    if (!element) return

    const notify = () => onHeightChange(element.getBoundingClientRect().height)
    notify()

    const observer = new ResizeObserver(() => notify())
    observer.observe(element)
    return () => observer.disconnect()
  }, [onHeightChange])

  useEffect(() => {
    const targetRef = { current: 0 }
    const currentRef = { current: 0 }
    let rafId = 0

    function computeTarget() {
      const doc = document.documentElement
      const scrollTop = window.scrollY ?? doc.scrollTop ?? document.body.scrollTop ?? 0
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0

      // Small to big: scroll down → intensity increases → glow grows
      targetRef.current = Math.max(0, Math.min(1, progress))
    }

    function tick() {
      rafId = 0
      const target = targetRef.current
      const current = currentRef.current
      const next = prefersReducedMotion ? target : current + (target - current) * 0.18

      currentRef.current = next
      setGlowIntensity(next)

      if (!prefersReducedMotion && Math.abs(target - next) > 0.002) {
        rafId = window.requestAnimationFrame(tick)
      }
    }

    function handleScrollOrResize() {
      computeTarget()

      if (prefersReducedMotion) {
        currentRef.current = targetRef.current
        setGlowIntensity(targetRef.current)
        return
      }

      if (!rafId) rafId = window.requestAnimationFrame(tick)
    }

    handleScrollOrResize()
    window.addEventListener('scroll', handleScrollOrResize, { passive: true })
    window.addEventListener('resize', handleScrollOrResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize)
      window.removeEventListener('resize', handleScrollOrResize)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [prefersReducedMotion])

  return (
    <footer
      ref={footerRef}
      className={`bottom-0 z-10 relative md:sticky bg-[linear-gradient(180deg,#ffffff_0%,#fbfbfd_45%,#ffffff_100%)] mx-auto p-10 md:px-16 pt-24 md:pt-24 border-[#e6e6e6] border-t w-screen h-full md:h-fit overflow-hidden pointer-events-auto ${className}`}
    >
      <FooterGlow intensity={glowIntensity} />

      <div className="relative z-10">
        <Container className="mx-auto pb-40 max-w-7xl">
          <Reveal>
            <div className="flex lg:flex-row flex-col justify-start md:justify-between items-start gap-16 md:gap-24 lg:gap-[200px] w-full">
              <div className="flex flex-col gap-6 md:gap-6">
                <div className="flex flex-col gap-[12px]">
                  <Logo className="text-[2rem] [&_span:last-child]:text-slate-900 [&_span:last-child_span]:text-indigo-700" />
                  <p className="font-medium text-[#666] text-[14px] leading-[12px]">
                    Premium digital presence starts here
                  </p>
                </div>
              </div>

              <div className="justify-center gap-12 md:gap-8 lg:gap-16 grid grid-cols-2 md:grid-cols-4 w-full">
                {footerGroups.map((group) => (
                  <div key={group.title} className="flex flex-col gap-[24px] w-fit">
                    <h3 className="w-fit font-semibold text-[#3d3d3d] text-[12px] uppercase leading-normal">
                      {group.title}
                    </h3>
                    <ul className="flex flex-col gap-3 w-fit">
                      {group.links.map((link) => (
                        <li key={`${group.title}-${link.label}`} className="w-fit">
                          <FooterLink {...link} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>

        <FooterBottom
          reveal={reveal}
          className="bottom-0 left-1/2 z-10 md:absolute relative flex md:flex-row flex-col justify-between items-center gap-3 mx-auto md:p-16 2xl:px-0 py-4 w-full max-w-7xl text-[#666] text-[12px] text-center leading-[1.5] -translate-x-1/2"
        >
          <span>Copyright CorporateKit {year}</span>
          <span>All rights reserved. Bengaluru - 560001</span>
        </FooterBottom>
      </div>
    </footer>
  )
}