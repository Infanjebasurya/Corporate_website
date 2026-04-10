// components/ClientLogos/ClientLogos.jsx
import React from 'react'

import Apex from '../../../assets/Images/client-logos/apex.svg'
import Northwind from '../../../assets/Images/client-logos/northwind.svg'
import Vantage from '../../../assets/Images/client-logos/vantage.svg'
import Helio from '../../../assets/Images/client-logos/helio.svg'
import Atlas from '../../../assets/Images/client-logos/atlas.svg'
import BluePeak from '../../../assets/Images/client-logos/bluepeak.svg'
import Harbor from '../../../assets/Images/client-logos/harbor.svg'

const ClientLogos = () => {
  const clientLogos = [
    { src: Apex, alt: 'Apex' },
    { src: Northwind, alt: 'Northwind' },
    { src: Vantage, alt: 'Vantage' },
    { src: Helio, alt: 'Helio' },
    { src: Atlas, alt: 'Atlas' },
    { src: BluePeak, alt: 'BluePeak' },
    { src: Harbor, alt: 'Harbor' },
  ]

  // Duplicate the logos for seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos]

  return (
    <div className="relative -mt-1 w-full overflow-hidden bg-white py-16">
      {/* Section Header */}
      <div className="relative z-10 mb-16 text-center">
        <h2 className="mb-6 text-5xl font-bold text-gray-900">
          Trusted by{' '}
          <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            modern teams
          </span>
        </h2>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
          Brands who care about clarity, credibility, and a calmer conversion path.
        </p>
      </div>

      {/* Main Logos Container */}
      <div className="relative z-10">
        {/* First Slider - Premium Tier */}
        <div className="animate-slide-premium mb-12 flex motion-reduce:animate-none">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`premium-${index}`}
              className="group flex flex-shrink-0 items-center justify-center px-8"
            >
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-700 group-hover:-translate-y-3 group-hover:scale-110 hover:border-gray-300 hover:shadow-2xl">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-24 w-auto max-w-[220px] object-contain opacity-90 transition-all duration-500 filter group-hover:brightness-110 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Second Slider - Standard Tier */}
        <div className="animate-slide-standard flex motion-reduce:animate-none">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`standard-${index}`}
              className="group flex flex-shrink-0 items-center justify-center px-6"
            >
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-105 hover:border-gray-200 hover:shadow-lg">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20 w-auto max-w-[180px] object-contain opacity-80 transition-opacity duration-300 filter group-hover:brightness-105 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes slide-premium {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide-standard {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-slide-premium {
          animation: slide-premium 60s linear infinite;
        }

        .animate-slide-standard {
          animation: slide-standard 60s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default ClientLogos
