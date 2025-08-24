import Lottie from 'lottie-react'
import heroLeft from '../../public/animations/hero/Landing_page_left_2.json'
import heroMiddle from '../../public/animations/hero/Landing_page_middle.json'
import heroRight from '../../public/animations/hero/Landing_page_right_2.json'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative mobile:min-h-[calc(100dvh-110px)] min-h-[calc(100dvh-80px)] flex justify-center pt-[calc((100dvh-220px-18px)/2)] transition-all duration-300 ease-in-out bg-[#FAFAFA] overflow-hidden">
      {/* Lottie Animation - Layered */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Middle - responsive width, bottom-centered, preserve aspect */}
        <div
          className="absolute z-10"
          style={{
            left: '50%',
            bottom: 0,
            width: 'clamp(320px, 100vw, 1600px)',
            aspectRatio: '16 / 9',
            transform: 'translateX(-50%)'
          }}
        >
          <Lottie
            animationData={heroMiddle}
            loop={false}
            autoplay={true}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Left overlay - anchored to bottom-left, responsive base width + scale */}
        <div
          className="absolute left-0 bottom-0 z-20 hero-side hero-left"
          style={{ width: 'clamp(360px, 80vw, 1260px)', aspectRatio: '16 / 9' }}
        >
          <Lottie
            animationData={heroLeft}
            loop={false}
            autoplay={true}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Right overlay - anchored to bottom-right, responsive base width + scale */}
        <div
          className="absolute right-0 bottom-0 z-20 hero-side hero-right"
          style={{ width: 'clamp(360px, 80vw, 1260px)', aspectRatio: '16 / 9' }}
        >
          <Lottie
            animationData={heroRight}
            loop={false}
            autoplay={true}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-30 text-center max-w-4xl">
        {/* Main Heading */}
        <h1 className="tablet:text-7xl mobile:text-5xl text-[32px] font-bold text-[#102C66] leading-tight -translate-y-1/2">
          Live Local Discovery,<br />
          like<span className="font-playfair italic font-extrabold"> never before</span>
        </h1>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#how-it-works" className="h-[48px] px-6 py-3 bg-[#2970FF] mobile:text-xl text-base leading-6 text-white font-semibold rounded-xl hover:bg-[#1E5AE8] transition-colors duration-200 whitespace-nowrap">
            Start Exploring
          </Link>
        </div>
      </div>
    </section>
  )
}
