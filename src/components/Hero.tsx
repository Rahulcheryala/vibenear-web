'use client'

import Lottie from 'lottie-react'
import landingAnimation from '../../public/animations/Landing_page.json'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative mobile:min-h-[calc(100vh-110px)] min-h-[calc(100vh-80px)] flex justify-center pt-[calc((100vh-220px-18px)/2)] bg-[#FAFAFA] overflow-hidden">
      {/* Lottie Animation - Full Page */}
      <div className="absolute inset-0 w-full h-full">
        <Lottie
          animationData={landingAnimation}
          loop={false}
          autoplay={true}
          className='w-full -translate-y-[clamp(80px,14.323vw,275px)]'
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Main Heading */}
        <h1 className="tablet:text-[72px] mobile:text-5xl text-[32px] font-bold text-[#102C66] leading-tight -translate-y-1/2">
          Live Local Discovery,<br />
          like<span className="font-playfair italic font-extrabold"> never before</span>
        </h1>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Exploring
          </button>
          <Link href="#how-it-works" className="border-2 border-black/30 text-black px-8 py-4 rounded-full text-lg font-semibold hover:border-black/50 hover:bg-black/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
