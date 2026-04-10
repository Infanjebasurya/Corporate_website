import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'

const testimonials = [
  {
    quote:
      'The new corporate site gave our brand immediate credibility. Clients now understand our positioning faster, and inbound conversations are far more qualified.',
    name: 'Aarav Mehta',
    role: 'Managing Director',
  },
  {
    quote:
      'What impressed us most was the clarity of the presentation. The pages feel premium, structured, and aligned with the level of service we deliver offline.',
    name: 'Riya Kapoor',
    role: 'Brand Lead',
  },
  {
    quote:
      'Our previous website looked dated and generic. This redesign finally reflects us as a serious company, and that has improved trust from day one.',
    name: 'Dev Malhotra',
    role: 'Operations Head',
  },
  {
    quote:
      'We needed something elegant but also practical for regular updates. The result looks polished while still being easy for our internal team to maintain.',
    name: 'Shreya Nair',
    role: 'Marketing Manager',
  },
  {
    quote:
      'The structure, typography, and clean page flow helped simplify our message. Prospective clients now reach out with much stronger intent and context.',
    name: 'Karan Shah',
    role: 'Founder',
  },
  {
    quote:
      'This felt less like a template and more like a tailored company presence. It elevated our image without making the experience heavy or confusing.',
    name: 'Neha Verma',
    role: 'Strategy Consultant',
  },
]

const stats = [
  { value: '4.9/5', label: 'Average Rating' },
  { value: '50K+', label: 'Reviews' },
  { value: '98%', label: 'Satisfaction' },
]

function Avatar() {
  return (
    <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[#f4efe4] ring-1 ring-[#ebe7de]">
      <span className="text-sm font-semibold text-[#2a2a33]">CV</span>
    </div>
  )
}

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-[#f59e0b]">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M10 1.75l2.31 4.68 5.16.75-3.73 3.63.88 5.14L10 13.52l-4.62 2.43.88-5.14-3.73-3.63 5.16-.75L10 1.75Z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ quote, name, role }) {
  return (
    <div className="rounded-[28px] border border-[#e9e9e9] bg-white p-6 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-0.5">
      <StarRow />
      <p className="min-h-[132px] text-[19px] leading-8 text-[#555861]">
        "{quote}"
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Avatar />
        <div>
          <div className="text-sm font-semibold text-[#21242c]">{name}</div>
          <div className="mt-1 text-xs text-[#7c818b]">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#f5f6f7_0%,#f8f9fa_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[#ececec] to-transparent" />

      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-[#20232b] sm:text-5xl">
              Client Testimonials
            </h2>
            <p className="mt-3 text-base text-[#7b8089] sm:text-lg">
              Trusted by modern companies building a stronger digital presence.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={`${testimonial.quote}-${index}`} delay={index * 0.06}>
              <TestimonialCard {...testimonial} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="mx-auto flex w-full max-w-[380px] items-center justify-between gap-4 rounded-[24px] border border-[#ececec] bg-white px-6 py-4 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`flex-1 text-center ${index !== stats.length - 1 ? 'border-r border-[#ededed]' : ''}`}>
                <div className="text-2xl font-semibold tracking-tight text-[#16a34a]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-[#7c818b]">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
