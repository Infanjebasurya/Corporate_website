import { Link } from 'react-router-dom'
import Button from '../../../components/ui/Button.jsx'
import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'

function InsightCard({ title, description, to }) {
  return (
    <Link
      to={to}
      className="group rounded-[1.75rem] border border-white/65 bg-white/75 p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(15,23,42,0.12)]"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
        Explore
      </div>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-5 text-sm font-semibold text-slate-900 transition group-hover:text-indigo-700">
        Open page {'>'}
      </div>
    </Link>
  )
}

export default function FooterTransitionSection() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_40%),linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(255,255,255,0.08)_24%,rgba(255,255,255,0.22)_100%)]" />
      <Container>
        <Reveal>
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur sm:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Beyond the homepage
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Add depth to the brand with content that feels considered
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-200">
                  Strong service websites do more than introduce the business. They answer
                  questions, share perspective, and give visitors a reason to trust the team
                  behind the work.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button as={Link} to="/blog">
                  Visit the blog
                </Button>
                <Button as={Link} to="/faq" variant="secondary">
                  Browse FAQ
                </Button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <InsightCard
                title="Blog articles"
                description="Thoughtful posts on positioning, premium UX, and maintainable frontend execution."
                to="/blog"
              />
              <InsightCard
                title="Confident answers"
                description="A cleaner FAQ experience that helps visitors resolve common questions before they need to ask."
                to="/faq"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
