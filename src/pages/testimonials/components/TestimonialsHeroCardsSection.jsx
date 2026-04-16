import { useState } from 'react'
import Container from '../../../components/ui/Container.jsx'
import Reveal from '../../../components/ui/Reveal.jsx'

const heroCards = [
  {
    category: 'Growth Story',
    bgImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=1200&fit=crop',
  },
  {
    category: 'Business Impact',
    bgImage:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&h=1200&fit=crop',
  },
  {
    category: 'Brand Story',
    bgImage:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&h=1200&fit=crop',
  },
]

function ExpandCard({ item, isExpanded, onMouseEnter, onMouseLeave }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="group relative h-[470px] cursor-pointer overflow-hidden rounded-[30px] shadow-[0_20px_50px_rgba(15,23,42,0.15)]"
      style={{
        backgroundImage: `url(${item.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        flex: isExpanded ? '3.6' : '0.75',
        transition: 'flex 1s cubic-bezier(0.4,0,0.2,1)',
      }}
      aria-label={item.label}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition group-hover:from-black/70" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/75">
          {item.category}
        </div>
        <div
          className={`mt-2 font-semibold leading-tight transition-all duration-300 ${
            isExpanded ? 'text-[27px]' : 'text-[17px]'
          }`}
        >
          {item.label}
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsHeroCardsSection() {
  const [expandedIndex, setExpandedIndex] = useState(2) // Changed from 0 to 2 to open third card by default

  return (
    <section className="relative overflow-hidden bg-[#f5f2ed] pb-20 pt-24 sm:pb-28 sm:pt-28">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#5e5a54]">
                Testimonials
              </div>
              <h1 className="mt-4 text-[56px] font-black leading-[1.02] tracking-tight text-[#1a1a1a] sm:text-[68px]">
                Watch.
                <br />
                Learn.
                <br />
                Grow.
              </h1>
              <p className="mt-6 max-w-[28ch] text-[15px] leading-7 text-[#4d4a45]">
                Real voices from teams that improved clarity, trust, and conversions with a stronger site experience.
              </p>
            </div>

            <div className="flex h-[470px] items-stretch gap-4">
              {heroCards.map((item, idx) => (
                <ExpandCard
                  key={item.label}
                  item={item}
                  isExpanded={expandedIndex === idx}
                  onMouseEnter={() => setExpandedIndex(idx)}
                  onMouseLeave={() => setExpandedIndex(2)} // Changed from 0 to 2 to keep third card expanded on mouse leave
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
