import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/ui/Button.jsx'
import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'
import heroBgVideo from '../../../assets/video/Hero-Bg.mp4'

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        {label}
      </div>
    </div>
  )
}

export default function HeroSection() {
  const [parallaxY, setParallaxY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setParallaxY(window.scrollY * 0.18)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative -mt-28 overflow-hidden pt-28 sm:-mt-32 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ transform: `translateY(${parallaxY}px) scale(1.08)` }}
      >
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.1)_35%,rgba(255,255,255,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.18),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.08),transparent_28%)]" />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
         
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A modern corporate website that looks premium, loads fast, and
              converts.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Clean pages, strong typography, responsive navigation, pricing,
              and motion that feels professional without unnecessary noise.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button
                as={Link}
                to="/services"
                className="border-0 bg-[linear-gradient(180deg,#ff8c64_0%,#ff5b33_100%)] px-6 py-3 text-base text-white shadow-[0_14px_28px_rgba(255,91,51,0.22)] hover:brightness-105"
              >
                Explore services
              </Button>
              <Button
                as={Link}
                to="/contact"
                variant="secondary"
                className="border border-white/20 bg-white/10 px-6 py-3 text-base text-white ring-0 hover:bg-white/16 dark:bg-white/10 dark:text-white dark:ring-white/10 dark:hover:bg-white/16"
              >
                Contact sales
              </Button>
            </div>
            <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              <Stat value="1-3 days" label="Typical launch time" />
              <Stat value="Mobile-first" label="Responsive by design" />
              <Stat value="SEO-ready" label="Clean semantic structure" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
