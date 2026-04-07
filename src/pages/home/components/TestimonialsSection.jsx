import { Link } from 'react-router-dom'
import Button from '../../../components/ui/Button.jsx'
import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'

const testimonials = [
  {
    quote:
      'The new site immediately made our company feel more established. Clients now understand what we offer within seconds, and inquiries are noticeably more qualified.',
    name: 'Aarav Shah',
    role: 'Founder, Northline Advisory',
    metric: '+38%',
    metricLabel: 'better lead quality',
  },
  {
    quote:
      'We needed something premium but still practical to maintain. This structure gave us both: a polished presentation and a codebase our team can actually keep updating.',
    name: 'Riya Menon',
    role: 'Operations Lead, Atelier Studio',
    metric: '3x',
    metricLabel: 'faster content updates',
  },
  {
    quote:
      'What stood out most was the clarity. The layout, motion, and messaging all feel intentional, and the site now reflects the level of service we deliver offline.',
    name: 'Dev Kapoor',
    role: 'Director, CrestPoint Legal',
    metric: '91+',
    metricLabel: 'typical Lighthouse score',
  },
]

function TestimonialCard({ quote, name, role, metric, metricLabel }) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-slate-700/30 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95 p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-indigo-500/10">
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-600/5 via-transparent to-amber-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 blur-xl" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/30 bg-indigo-500/10 text-indigo-300 shadow-lg backdrop-blur-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M7.17 6A4.17 4.17 0 0 0 3 10.17V18h7.83v-7.83H6.3A2.3 2.3 0 0 1 8.58 8h1.25V6H7.17Zm9 0A4.17 4.17 0 0 0 12 10.17V18h7.83v-7.83H15.3A2.3 2.3 0 0 1 17.58 8h1.25V6h-2.66Z"
              />
            </svg>
          </div>
        </div>
        
        <div className="relative rounded-2xl border border-slate-700/50 bg-slate-800/30 px-5 py-3 text-right backdrop-blur-sm">
          <div className="text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r from-indigo-300 to-white bg-clip-text">
            {metric}
          </div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
            {metricLabel}
          </div>
        </div>
      </div>

      <p className="relative mt-6 text-[1.05rem] leading-relaxed text-slate-200">
        "{quote}"
      </p>

      <div className="relative mt-8 border-t border-slate-700/50 pt-6">
        <div className="text-lg font-semibold text-white">{name}</div>
        <div className="mt-1.5 text-sm text-indigo-300">{role}</div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Dark gradient backgrounds */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_rgba(99,102,241,0.15),_transparent_50%),_radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.08),_transparent_50%)]" />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-amber-500/5 blur-3xl" />
      </div>

      <Container>
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                </span>
                Trusted Testimonials
              </div>
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                What Our{' '}
                <span className="bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Real results from real partnerships. See how we've helped leading brands 
                transform their digital presence and achieve measurable growth.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 shadow-xl backdrop-blur-sm sm:min-w-[340px]">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Industry Recognition
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/30 px-3 py-4 text-center transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-800/50">
                  <div className="text-2xl font-bold text-white">B2B</div>
                  <div className="mt-1 text-xs text-slate-400">Enterprise</div>
                </div>
                <div className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/30 px-3 py-4 text-center transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-800/50">
                  <div className="text-2xl font-bold text-white">SMB</div>
                  <div className="mt-1 text-xs text-slate-400">Growth</div>
                </div>
                <div className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/30 px-3 py-4 text-center transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-800/50">
                  <div className="text-2xl font-bold text-white">SEO</div>
                  <div className="mt-1 text-xs text-slate-400">Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <TestimonialCard {...testimonial} />
            </Reveal>
          ))}
        </div>

        {/* Additional stats row */}
        <Reveal className="mt-16">
          <div className="grid gap-6 rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 backdrop-blur-sm md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-300 to-white bg-clip-text">500+</div>
              <div className="mt-2 text-sm text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-300 to-white bg-clip-text">98%</div>
              <div className="mt-2 text-sm text-slate-400">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-300 to-white bg-clip-text">24/7</div>
              <div className="mt-2 text-sm text-slate-400">Premium Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-300 to-white bg-clip-text">50+</div>
              <div className="mt-2 text-sm text-slate-400">Enterprise Clients</div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <div className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/90 via-slate-900/95 to-slate-950/95 p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-indigo-500/40 hover:shadow-indigo-500/10 lg:p-10">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-transparent to-amber-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-400">
                  Ready to Transform Your Brand?
                </div>
                <h3 className="mt-3 text-2xl font-bold text-white lg:text-3xl">
                  Let's Create Something Extraordinary Together
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">
                  Join hundreds of satisfied clients who've elevated their digital presence 
                  and achieved remarkable results with our expertise.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button 
                  as={Link} 
                  to="/contact"
                  className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-500 px-8 py-3 text-white transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
                <Button 
                  as={Link} 
                  to="/services" 
                  variant="secondary"
                  className="border border-slate-700 bg-slate-800/50 px-8 py-3 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-800"
                >
                  View Packages
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Trusted by section */}
        <Reveal className="mt-16">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Trusted by Industry Leaders Worldwide
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
              <div className="text-xl font-bold text-slate-400">NORTHLINE</div>
              <div className="text-xl font-bold text-slate-400">ATELIER</div>
              <div className="text-xl font-bold text-slate-400">CRESTPOINT</div>
              <div className="text-xl font-bold text-slate-400">TECHNOVA</div>
              <div className="text-xl font-bold text-slate-400">ELARA</div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}