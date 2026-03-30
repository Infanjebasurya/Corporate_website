import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/ui/Container.jsx'
import Reveal from '../../components/ui/Reveal.jsx'

export default function NotFoundPage() {
  return (
    <section>
      <Container className="py-16">
        <Reveal>
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
            <div className="text-xs font-semibold tracking-widest text-slate-500 dark:text-slate-400">
              404
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight">
              Page not found
            </h1>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              The link you opened doesn't exist. Use the navigation to continue.
            </p>
            <div className="mt-7 flex justify-center">
              <Button as={Link} to="/">
                Go to home
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

