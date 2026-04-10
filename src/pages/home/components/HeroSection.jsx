import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/ui/Button.jsx'
import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'
import heroBgVideo from '../../../assets/video/Hero-Bg.mp4'

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-black/10 p-5 backdrop-blur-sm">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-sm text-slate-600">
        {label}
      </div>
    </div>
  )
}

export default function HeroSection() {
  const videoLayerRef = useRef(null)

  useEffect(() => {
    let frameId = 0

    const handleScroll = () => {
      if (frameId) return

      frameId = window.requestAnimationFrame(() => {
        frameId = 0
        if (!videoLayerRef.current) return
        const offset = window.scrollY * 0.18
        videoLayerRef.current.style.transform = `translateY(${offset}px) scale(1.08)`
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <section className="relative -mt-28 overflow-hidden pt-28 sm:-mt-32 sm:pt-32">
      <div
        ref={videoLayerRef}
        className="pointer-events-none absolute inset-0"
        style={{ transform: 'translateY(0px) scale(1.08)' }}
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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18)_0%,rgba(15,23,42,0.24)_42%,rgba(15,23,42,0.36)_100%)]" />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
         
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A modern corporate website that looks premium, loads fast, and
              converts.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
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
                className="border border-white/28 bg-black/12 px-6 py-3 text-base text-black ring-0 hover:bg-black/18"
              >
                Contact sales
              </Button>
            </div>
            <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 text-base text-white sm:grid-cols-3">
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
