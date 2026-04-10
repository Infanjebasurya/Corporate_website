import Reveal from '../../../components/ui/Reveal.jsx'

export default function TrustedBySection() {
  return (
    <Reveal>
      <div className="mx-auto max-w-4xl px-4 pb-10 text-center sm:pb-12">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Trusted by{' '}
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            modern teams
          </span>
        </h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
          Brands who care about clarity, credibility, and a calmer conversion path.
        </p>
      </div>
    </Reveal>
  )
}

