'use client'

import Lottie from 'lottie-react'
import landingAnimation from '../../public/animations/Landing_page.json'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Lottie Animation - Full Page */}
      <div className="absolute inset-0 w-full h-full">
        <Lottie 
          animationData={landingAnimation}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-5xl lg:text-7xl font-bold text-black mb-8 leading-tight drop-shadow-2xl">
          <span style={{ fontFamily: 'var(--font-plus-jakarta-sans)' }}>Live Local Discovery,</span><br />Like <span style={{ fontFamily: 'var(--font-playfair-display)', fontStyle: 'italic' }}>never before</span>
        </h1>
        
      

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Exploring
          </button>
          <button className="border-2 border-black/30 text-black px-8 py-4 rounded-full text-lg font-semibold hover:border-black/50 hover:bg-black/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
} 