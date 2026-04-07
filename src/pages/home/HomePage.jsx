import EasySwitchSection from './components/EasySwitchSection.jsx'
import FinalCtaSection from './components/FinalCtaSection.jsx'
import FooterTransitionSection from './components/FooterTransitionSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import WhatYouGetSection from './components/WhatYouGetSection.jsx'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatYouGetSection />
      <EasySwitchSection />
      <TestimonialsSection />
      <FooterTransitionSection />
      <FinalCtaSection />
    </>
  )
}
