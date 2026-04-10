import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'
import deemarImage from '../../../assets/Images/deemar-people-335298_1920.jpg'

function OrbitBackdrop() {
  return (
    <svg
      width="903"
      height="895"
      viewBox="0 0 903 895"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="orbitStrokeFade" x1="451.5" y1="0" x2="451.5" y2="895" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5F5F5" stopOpacity="0.08" />
          <stop offset="0.45" stopColor="#F5F5F5" stopOpacity="0.18" />
          <stop offset="1" stopColor="#F5F5F5" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M451.5 71C505.5 126 538.5 195 538.5 272.5C538.5 440 451.5 447.5 451.5 447.5C451.5 447.5 364.5 440 364.5 272.5C364.5 195 397.5 126 451.5 71ZM451.5 151C485.5 194.5 505 247 505 305.5C505 422.5 451.5 447.5 451.5 447.5C451.5 447.5 398 422.5 398 305.5C398 247 417.5 194.5 451.5 151ZM232 205C324.5 223 398.5 286 451.5 447.5C504.5 286 578.5 223 671 205M185 337C295.5 337 386 373 451.5 447.5C517 373 607.5 337 718 337M210 563C314 538.5 393 498.5 451.5 447.5C510 498.5 589 538.5 693 563M282 691.5C359 636 414 563.5 451.5 447.5C489 563.5 544 636 621 691.5"
        stroke="url(#orbitStrokeFade)"
        strokeWidth="1"
      />
    </svg>
  )
}

export default function FinalCtaSection() {
  return (
    <section className="relative z-10">
      <Container className="mb-0 pt-12 md:pt-16">
        <Reveal>
          <div className="overflow-hidden rounded-[32px] md:rounded-[52px]">
            <div
              className="relative flex min-h-[340px] flex-col items-center justify-end overflow-hidden rounded-[32px] md:min-h-[420px] md:rounded-[52px]"
            >
              <img
                src={deemarImage}
                alt="People collaborating"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.48)_0%,rgba(15,23,42,0.18)_45%,rgba(15,23,42,0.38)_100%)]" />
              <div className="absolute left-1/2 top-[50px] z-10 w-10/12 -translate-x-1/2 px-4 text-center font-serif text-2xl leading-normal text-white md:top-16 md:text-[32px]">
                <p className="md:hidden">Build the future of India&apos;s AI with Sarvam.</p>
                <p className="hidden md:block mb-0">Build the future of India&apos;s AI</p>
                <p className="hidden md:block">with Corprate.</p>
              </div>

              <div className="absolute bottom-[34px] left-1/2 z-10 -translate-x-1/2 md:bottom-[40px]">
                <a
                  href="https://dashboard.sarvam.ai/signin"
                  className="relative inline-flex overflow-hidden rounded-full px-5 py-2.5 font-serif text-base font-medium text-sr-indigo-950 transition-transform hover:scale-105 active:scale-95 md:px-6 md:py-3 md:text-lg"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.16) 100%)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  Get started now
                  <span
                    className="pointer-events-none absolute inset-0 rounded-full"
                    style={{ boxShadow: 'inset 0 0 4px 0 rgba(255,255,255,0.6)' }}
                  />
                </a>
              </div>

              <div
                className="pointer-events-none absolute inset-0 rounded-[inherit]"
                style={{ boxShadow: 'inset 0 -24px 54px 0 rgba(213,226,255,0.22)' }}
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
