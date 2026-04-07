import Container from '../../components/ui/Container.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

function Section({ title, children }) {
  return (
    <div className="group overflow-hidden rounded-[1.8rem] border border-indigo-400/16 bg-[linear-gradient(160deg,rgba(15,23,42,0.95)_0%,rgba(30,41,59,0.9)_54%,rgba(15,23,42,0.98)_100%)] p-6 shadow-[0_22px_52px_rgba(2,6,23,0.28)] transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-indigo-400/34 hover:px-7 hover:py-7 hover:shadow-[0_30px_68px_rgba(79,70,229,0.22)]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-indigo-300">
          {title}
        </h2>
        <span className="h-px w-10 bg-gradient-to-r from-indigo-400/80 to-transparent transition-all duration-300 group-hover:w-16" />
      </div>
      <div className="mt-4 space-y-2 border-t border-white/8 pt-4 text-sm leading-7 text-slate-300">
        {children}
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
        theme="dark"
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

