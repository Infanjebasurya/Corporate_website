import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'

const stats = [
  { label: 'Client retention', value: '92%' },
  { label: 'Avg. inquiry lift', value: '2.4x' },
  { label: 'Time to launch', value: '21 days' },
  { label: 'Referral growth', value: '+38%' },
]

export default function TestimonialsImpactSection() {
  return (
    <section className="bg-[#f5f2ed] pb-20">
      <Container>
        <div className="grid rounded-[2rem] border border-[#e8e0d4] bg-white/80 shadow-[0_18px_46px_rgba(15,23,42,0.08)] lg:grid-cols-[1fr_1fr] overflow-hidden">
          {/* Left side - Image covers full left column */}
          <Reveal>
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          {/* Right side - Content */}
          <Reveal>
            <div className="p-8 space-y-6 h-full flex flex-col justify-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#95b682]">
                  Impact Snapshot
                </div>
                <h2 className="mt-4 text-[38px] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-[46px]">
                  Trusted by teams
                  <br />
                  that value outcomes.
                </h2>
                <p className="mt-5 text-[14px] leading-7 text-[#59534b]">
                  Every testimonial should show more than praise. We focus on measurable confidence: 
                  faster launches, better messaging, and stronger inquiry quality.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid gap-3 sm:grid-cols-2 pt-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#ece5da] bg-[linear-gradient(180deg,#ffffff_0%,#faf7f2_100%)] px-5 py-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7c766e]">
                      {item.label}
                    </div>
                    <div className="mt-2 text-[30px] font-bold tracking-tight text-[#1d1a16]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}