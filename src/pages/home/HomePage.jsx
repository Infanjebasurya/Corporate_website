import EasySwitchSection from './components/EasySwitchSection.jsx'
import ClientLogosSection from './components/ClientLogosSection.jsx'
import CorporateIntroSection from './components/CorporateIntroSection.jsx'
import FinalCtaSection from './components/FinalCtaSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import WhatYouGetSection from './components/WhatYouGetSection.jsx'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogosSection />
      <EasySwitchSection />
      <CorporateIntroSection />
      <WhatYouGetSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </>
  )
}
