import { useEffect, useRef, useState } from 'react'
import Container from '../../components/ui/Container.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

const AnimatedIcon = ({ isOpen }) => (
  <div className={`relative size-10 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
    <div
      className={`absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 transition-all duration-300 ${isOpen ? 'scale-x-0' : 'scale-x-100'}`}
    />
    <div
      className={`absolute left-1/2 top-1/2 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400 transition-all duration-300 ${isOpen ? 'scale-y-0' : 'scale-y-100'}`}
    />
  </div>
)

function Section({ title, children, category = 'Terms', defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const [supportsHover, setSupportsHover] = useState(false)
  const contentRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setSupportsHover(window.matchMedia?.('(hover: hover) and (pointer: fine)')?.matches ?? false)
  }, [])

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [open, children])

  return (
    <div className="group transform-gpu overflow-hidden rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.96)_100%)] shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-all duration-400 hover:-translate-y-1 hover:scale-[1.01] hover:border-indigo-200 hover:shadow-[0_24px_52px_rgba(99,102,241,0.12)]">
      <div
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-300 hover:bg-slate-50"
        onMouseEnter={supportsHover ? () => setOpen(true) : undefined}
        onMouseLeave={supportsHover ? () => setOpen(false) : undefined}
        onClick={supportsHover ? undefined : () => setOpen((v) => !v)}
        role="button"
        tabIndex={supportsHover ? -1 : 0}
        aria-expanded={open}
      >
        <div className="flex-1">
          <span className="mb-2 inline-block rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-600 transition-all duration-300 group-hover:border-indigo-300 group-hover:bg-indigo-100">
            {category}
          </span>
          <span className="block text-base font-semibold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-indigo-600">
            {title}
          </span>
        </div>
        <AnimatedIcon isOpen={open} />
      </div>

      <div
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-400 ease-out"
      >
        <div ref={contentRef} className="px-6 pb-6">
          <div className="border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms and conditions with the same level of polish as the rest of the site"
        description="Even support and legal pages should feel organized. This template gives those pages a more professional frame while you replace the placeholder content with final terms."
        theme="light"
        stats={[
          { label: 'Type', value: 'Template terms' },
          { label: 'Update', value: 'Replace before launch' },
          { label: 'Scope', value: 'Service projects' },
          { label: 'Advice', value: 'Legal review' },
        ]}
      />

      <section>
        <Container className="pb-16 pt-4 sm:pb-20">
          <div className="grid gap-4">
            <Reveal>
              <Section title="1. Services">
                <p>
                  We provide website design and development services. Deliverables and
                  timelines are defined in the agreed proposal.
                </p>
              </Section>
            </Reveal>
            <Reveal>
              <Section title="2. Payments">
                <p>
                  Payment terms such as advance, milestones, and final payment are
                  specified in the proposal or invoice.
                </p>
              </Section>
            </Reveal>
            <Reveal>
              <Section title="3. Revisions">
                <p>
                  Included revision rounds vary by plan. Additional revisions may be
                  billed separately.
                </p>
              </Section>
            </Reveal>
            <Reveal>
              <Section title="4. Intellectual Property">
                <p>
                  Ownership and licensing terms for code, designs, and assets are agreed
                  per project.
                </p>
              </Section>
            </Reveal>
            <Reveal>
              <Section title="5. Liability">
                <p>
                  We are not liable for indirect damages. Our liability is limited to
                  amounts paid under the applicable agreement.
                </p>
              </Section>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
