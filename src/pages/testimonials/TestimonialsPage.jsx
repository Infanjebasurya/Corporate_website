import TestimonialsSection from '../home/components/TestimonialsSection.jsx'
import TestimonialsHeroCardsSection from './components/TestimonialsHeroCardsSection.jsx'
import TestimonialsImpactSection from './components/TestimonialsImpactSection.jsx'
import TestimonialsSpotlightSection from './components/TestimonialsSpotlightSection.jsx'

export default function TestimonialsPage() {
  return (
    <div className="bg-[#f5f2ed]">
      <TestimonialsHeroCardsSection />
      <TestimonialsSpotlightSection />
      <TestimonialsImpactSection />
      <div className="border-t border-[#e8dfd3] bg-[#f5f2ed] pt-6">
        <TestimonialsSection />
      </div>
    </div>
  )
}
