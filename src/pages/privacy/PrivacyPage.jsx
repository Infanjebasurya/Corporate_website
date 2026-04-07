import { useState } from 'react'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

const STORAGE_KEY = 'corporatekit-cookie-consent'
const COOKIE_NAME = 'corporatekit_cookie_consent'

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

export default function PrivacyPage() {
  const [resetMessage, setResetMessage] = useState('')

  function handleResetCookiePreferences() {
    if (typeof document !== 'undefined') {
      document.cookie = `${COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`
    }

    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Ignore storage errors and still surface a success message.
    }

    setResetMessage(
      'Cookie preferences were reset. Refresh or reopen the page to see the consent banner again.',
    )
  }

  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="A clean privacy page that feels considered, not forgotten"
        description="This is still placeholder policy content, but the page presentation now matches the rest of the site so even legal pages feel intentional."
        theme="dark"
        stats={[
          { label: 'Status', value: 'Template copy' },
          { label: 'Use', value: 'Replace before launch' },
          { label: 'Audience', value: 'Visitors + clients' },
          { label: 'Review', value: 'Legal recommended' },
        ]}
      />

      <section>
        <Container className="pb-16 pt-4 sm:pb-20">
          <div className="grid gap-4">
            <Reveal>
              <Section title="1. Information we collect">
                <p>
                  We may collect information you submit through forms, such as your
                  name, email, and message content.
                </p>
              </Section>
            </Reveal>
            <Reveal>
              <Section title="2. How we use information">
                <p>
                  We use this information to respond to inquiries, provide services,
                  and improve our website experience.
                </p>
              </Section>
            </Reveal>
            <Reveal>
              <Section title="3. Cookies">
                <p>
                  We use essential cookies to support core site behavior, such as
                  remembering cookie preferences and maintaining a stable browsing
                  experience.
                </p>
                <p>
                  If analytics or marketing tools are enabled later, optional cookies
                  may be used to understand usage patterns and improve the experience.
                  Those categories should be reviewed and updated before launch.
                </p>
                <div className="mt-3 rounded-2xl border border-indigo-400/14 bg-white/5 px-4 py-4 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  Cookie consent is surfaced through the site-wide banner so visitors
                  can choose between essential-only cookies or accepting the full set.
                </div>
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
                  <a className="font-medium text-indigo-300 transition hover:text-indigo-200 hover:underline" href="mailto:hello@example.com">
                    hello@example.com
                  </a>
                  .
                </p>
                <div className="mt-4 rounded-2xl border border-white/8 bg-white/5 px-4 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Testing Tools
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Need to test the cookie banner again? Reset the stored preference
                    and the site will ask for consent on the next load.
                  </p>
                  <div className="mt-4 flex flex-col items-start gap-3">
                    <Button
                      type="button"
                      variant="secondary"
                      className="border border-white/10 bg-white/8 text-white ring-0 hover:bg-white/14 dark:bg-white/8 dark:text-white dark:ring-0 dark:hover:bg-white/14"
                      onClick={handleResetCookiePreferences}
                    >
                      Reset cookie preferences
                    </Button>
                    {resetMessage ? (
                      <p className="text-sm text-indigo-200">{resetMessage}</p>
                    ) : null}
                  </div>
                </div>
              </Section>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
