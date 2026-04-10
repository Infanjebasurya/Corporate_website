import { useEffect, useRef, useState } from 'react'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'
import PageHero from '../../components/ui/PageHero.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

const STORAGE_KEY = 'corporatekit-cookie-consent'
const COOKIE_NAME = 'corporatekit_cookie_consent'

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

function Section({ title, children, category = 'Privacy', defaultOpen = false }) {
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
        theme="light"
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
                <div className="mt-3 rounded-2xl border border-indigo-100 bg-indigo-50/70 px-4 py-4 text-sm text-slate-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
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
                  <a className="font-medium text-indigo-600 transition hover:text-indigo-700 hover:underline" href="mailto:hello@example.com">
                    hello@example.com
                  </a>
                  .
                </p>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Testing Tools
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Need to test the cookie banner again? Reset the stored preference
                    and the site will ask for consent on the next load.
                  </p>
                  <div className="mt-4 flex flex-col items-start gap-3">
                    <Button
                      type="button"
                      variant="secondary"
                      className="border border-slate-200 bg-white text-slate-900 ring-0 hover:bg-slate-50"
                      onClick={handleResetCookiePreferences}
                    >
                      Reset cookie preferences
                    </Button>
                    {resetMessage ? (
                      <p className="text-sm text-indigo-600">{resetMessage}</p>
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
