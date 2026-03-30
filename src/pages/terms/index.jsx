import Container from '../../components/ui/Container.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

function Section({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <h2 className="text-base font-semibold">{title}</h2>
      <div className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {children}
      </div>
    </div>
  )
}

export default function TermsPage() {
  return (
    <section>
      <Container className="py-14 sm:py-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400">
            TERMS
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            This is placeholder legal text for a demo corporate website. Replace
            with your actual terms and consult a legal professional.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4">
          <Reveal>
            <Section title="1. Services">
              <p>
                We provide website design and development services. Deliverables
                and timelines are defined in the agreed proposal.
              </p>
            </Section>
          </Reveal>
          <Reveal>
            <Section title="2. Payments">
              <p>
                Payment terms (advance, milestones, final payment) are specified
                in the proposal or invoice.
              </p>
            </Section>
          </Reveal>
          <Reveal>
            <Section title="3. Revisions">
              <p>
                Included revision rounds vary by plan. Additional revisions may
                be billed separately.
              </p>
            </Section>
          </Reveal>
          <Reveal>
            <Section title="4. Intellectual Property">
              <p>
                Ownership and licensing terms for code, designs, and assets are
                agreed per project.
              </p>
            </Section>
          </Reveal>
          <Reveal>
            <Section title="5. Liability">
              <p>
                We are not liable for indirect damages. Our liability is limited
                to amounts paid under the applicable agreement.
              </p>
            </Section>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

