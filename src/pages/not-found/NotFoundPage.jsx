import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

export default function NotFoundPage() {
  return (
    <section>
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-10 text-center shadow-[0_22px_52px_rgba(15,23,42,0.08)]">
            <div className="text-xs font-semibold tracking-widest text-slate-500">404</div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
              Page not found
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              The link you opened doesn&apos;t exist. Use the navigation to continue.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Button as={Link} to="/">
                Go to home
              </Button>
              <Button as={Link} to="/blog" variant="secondary">
                Visit the blog
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

