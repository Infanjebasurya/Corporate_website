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

export default function PrivacyPage() {
  return (
    <section>
      <Container className="py-14 sm:py-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-indigo-600 dark:text-indigo-400">
            PRIVACY
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
            This is placeholder text for a demo corporate website. Replace with
            your real privacy policy and consult a professional.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4">
          <Reveal>
            <Section title="1. Information we collect">
              <p>
                We may collect information you submit through forms, such as
                your name, email, and message content.
              </p>
            </Section>
          </Reveal>
          <Reveal>
            <Section title="2. How we use information">
              <p>
                We use this information to respond to inquiries, provide
                services, and improve our website experience.
              </p>
            </Section>
          </Reveal>
          <Reveal>
            <Section title="3. Cookies">
              <p>
                If you add analytics or marketing tools, you may use cookies.
                Update this section accordingly.
              </p>
            </Section>
          </Reveal>
          <Reveal>
            <Section title="4. Data retention">
              <p>
                We retain data only as long as necessary for business and legal
                purposes.
              </p>
            </Section>
          </Reveal>
          <Reveal>
            <Section title="5. Contact">
              <p>
                For privacy questions, contact us at{' '}
                <a
                  className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                  href="mailto:hello@example.com"
                >
                  hello@example.com
                </a>
                .
              </p>
            </Section>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

