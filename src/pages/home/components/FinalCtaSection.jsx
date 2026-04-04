import { Link } from 'react-router-dom'
import Button from '../../../components/ui/Button.jsx'
import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'
import deemarImage from '../../../assets/images/deemar-people-335298_1920.jpg'

export default function FinalCtaSection() {
  return (
    <section>
      <Container className="py-20">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-slate-200 text-white shadow-sm dark:border-slate-800"
            style={{
              backgroundImage: `url(${deemarImage})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.78)_0%,rgba(79,70,229,0.58)_45%,rgba(15,23,42,0.72)_100%)]" />
            <div className="relative grid min-h-[360px] gap-6 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ready to launch your corporate presence?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/85">
                  Tell us what you do and we&apos;ll craft a site that fits your
                  brand, messaging, and target customers.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:self-end">
                <Button
                  as={Link}
                  to="/contact"
                  variant="secondary"
                  className="ring-0"
                >
                  Talk to us
                </Button>
                <Button
                  as={Link}
                  to="/services"
                  className="bg-white !text-black hover:bg-white/90"
                >
                  See pricing
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
