import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'
import Button from '../../../components/ui/Button.jsx'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    company: 'SPRINTO',
    companyIcon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#3B5BDB" />
        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="sans-serif">S</text>
      </svg>
    ),
    quote: (
      <>
        "An ATS by a recruiter for the recruiters:{' '}
        <strong>
          The platform is highly intuitive, allowing recruiters to get started with very little
          training. Navigation is smooth and feels much more seamless than what I've experienced
          with traditional ATS tools.
        </strong>
        "
      </>
    ),
    name: 'Krishnendu S.,',
    role: 'Lead, Talent Acquisition',
    avatar: 'KS',
    avatarBg: '#c8d8f0',
  },
  {
    company: 'Syelo',
    companyIcon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#f0f0f0" />
        <path d="M16 6l4 4-4 4-4-4 4-4zm0 8l4 4-4 4-4-4 4-4z" fill="#3B5BDB" opacity="0.8"/>
      </svg>
    ),
    quote: (
      <>
        "Every recruiter should do a demo with Kula.{' '}
        <strong className="text-[#e05c2a]">Best overall recruiting product</strong>{' '}
        I have seen in 18 months of running Syelo Tank."
      </>
    ),
    name: 'Amir Savar,',
    role: 'Managing Partner',
    avatar: 'AS',
    avatarBg: '#d4e8d4',
  },
  {
    company: 'SOCHA CAPITAL',
    companyIcon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="#f5f5f0" />
        <path d="M16 5l2.5 5 5.5.8-4 3.9.95 5.5L16 18l-4.95 2.2.95-5.5-4-3.9 5.5-.8L16 5z" fill="#5a5a4a" />
      </svg>
    ),
    quote: (
      <>
        "What pushed Kula across the finish line was that{' '}
        <strong>everything is native</strong> to the platform — notes, scheduling, sourcing — plus
        the cost was right. I also love that it's an AI-based platform{' '}
        <strong>built by recruiters.</strong>"
      </>
    ),
    name: 'Laura Morris,',
    role: 'Founding Recruiter',
    avatar: 'LM',
    avatarBg: '#e8d4d4',
  },
]

function CompanyLogo({ icon, name }) {
  return (
    <div className="flex items-center gap-2.5">
      {icon}
      <span className="text-[13px] font-semibold tracking-widest text-[#444] uppercase">{name}</span>
    </div>
  )
}

function AvatarCircle({ initials, bg }) {
  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-[#2a2a33]"
      style={{ backgroundColor: bg }}
    >
      {initials}
    </div>
  )
}

function TestimonialCard({ company, companyIcon, quote, name, role, avatar, avatarBg }) {
  return (
    <div className="group flex flex-col h-full rounded-2xl border border-[#e6e3dc] bg-white p-7 shadow-[0_2px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] transition-shadow duration-300">

      {/* Top: company logo */}
      <CompanyLogo icon={companyIcon} name={company} />

      {/* Divider */}
      <div className="my-5 h-px w-full bg-[#eeebe4]" />

      {/* Quote — flex-1 pushes avatar all the way to bottom */}
      <p className="flex-1 text-[16px] leading-[1.75] text-[#3a3a3a]">{quote}</p>

      {/* Avatar — pinned to bottom with top border */}
      <div className="mt-8 flex items-center gap-3 pt-5 border-t border-[#f0ede6]">
        <AvatarCircle initials={avatar} bg={avatarBg} />
        <div>
          <div className="text-sm font-semibold text-[#1a1a1a]">{name}</div>
          <div className="mt-0.5 text-xs text-[#888]">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 -mt-16">
      {/* Warm cream background */}
      <div className="absolute inset-0 -z-10 bg-[#f7f4ee]" />

      {/* Subtle radial glow center */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[600px] w-[900px] rounded-full bg-[radial-gradient(ellipse,rgba(224,92,42,0.07)_0%,transparent_70%)]" />
      </div>

      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center mb-16">
            {/* Pill badge */}
            <div className="inline-flex items-center rounded-full border border-[#d6d0c4] bg-white px-5 py-1.5 text-sm text-[#444] mb-8 shadow-sm">
              Customer &amp; Industry Love
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold tracking-tight text-[#111] sm:text-6xl leading-[1.1]">
              What people say about{' '}
              <span className="text-[#e05c2a]">CorporateKit</span>
            </h2>
          </div>
        </Reveal>

        {/* grid with items-stretch so all 3 columns are equal height */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
          {testimonials.map((testimonial, index) => (
            // Reveal wrapper must also be flex so h-full on card works
            <Reveal key={`${testimonial.company}-${index}`} delay={index * 0.08} className="flex">
              <TestimonialCard {...testimonial} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button as={Link} to="/testimonials" variant="secondary" className="rounded-full px-7 py-3">
            See more testimonials
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
