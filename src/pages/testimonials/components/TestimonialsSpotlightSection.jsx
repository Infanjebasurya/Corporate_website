import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'

const spotlightItems = [
  {
    quote:
      'The new narrative made our homepage feel instantly more premium. We started getting better-fit leads within the first month.',
    name: 'Nivedita Sharma',
    role: 'Founder, Elevate Partners',
    metric: 'Lead quality +41%',
  },
  {
    quote:
      'Our old site looked fragmented. This structure gave us consistency across pages and helped sales conversations move faster.',
    name: 'Ravi Menon',
    role: 'Head of Growth, Northline Systems',
    metric: 'Sales cycle -19%',
  },
  {
    quote:
      'Clear sections, better proof, and stronger CTAs. The website finally reflects the quality of our services.',
    name: 'Ananya Dutta',
    role: 'Director, Studio Arc',
    metric: 'Inquiries 2.1x',
  },
]

export default function TestimonialsSpotlightSection() {
  return (
    <section className="bg-[#f5f2ed] pb-20 sm:pb-24">
      <Container>
        <Reveal>
          <div className="mb-10 text-center">
            <div className="inline-flex items-center rounded-full border border-[#e5ddcf] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6a635a]">
              Spotlight Stories
            </div>
            <h2 className="mt-5 text-[36px] font-semibold tracking-tight text-[#1b1916] sm:text-[44px]">
              More outcomes from real clients
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {spotlightItems.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.07}>
              <article className="h-full rounded-[1.6rem] border border-[#e8dfd3] bg-[linear-gradient(180deg,#ffffff_0%,#fbf8f3_100%)] p-6 shadow-[0_14px_32px_rgba(15,23,42,0.07)]">
                <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                  {item.metric}
                </div>
                <p className="mt-4 text-[15px] leading-7 text-[#3f3932]">
                  "{item.quote}"
                </p>
                <div className="mt-6 border-t border-[#eee6db] pt-4">
                  <div className="text-sm font-semibold text-[#221f1a]">{item.name}</div>
                  <div className="mt-1 text-xs text-[#736c63]">{item.role}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
