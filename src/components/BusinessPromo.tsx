'use client'

import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export default function BusinessPromo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<ReturnType<typeof lottie.loadAnimation> | null>(null)

  useEffect(() => {
    let cleanup = () => {}
    const loadAnimation = async () => {
      try {
        const outletAnimation = await import('../../public/animations/outlet/For Outlet.json')
        const animationData = outletAnimation.default
        if (containerRef.current) {
          animRef.current = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: { preserveAspectRatio: 'xMidYMid meet' }
          })
          cleanup = () => {
            animRef.current?.destroy()
            animRef.current = null
          }
        }
      } catch (err) {
        console.error('Error loading outlet animation:', err)
      }
    }
    loadAnimation()
    return () => cleanup()
  }, [])

  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="container mx-auto px-3 lg:px-6">
        <div className="grid lg:grid-cols-6 gap-4 lg:gap-10 items-center max-w-7xl mx-auto">
          
          {/* Left Section */}
          <div className="lg:col-span-2 z-10 space-y-3 lg:space-y-4 flex flex-col justify-start">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-2 lg:mb-3">
                Running a local business? <span className="italic font-serif">Start free.</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 lg:mb-6">
                Get discovered by nearby users. No commission. No catch.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2.5 lg:space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="text-xl text-purple-600">🎈</div>
                <span className="text-gray-700 text-sm sm:text-base">Post across multiple locations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl text-red-500">📊</div>
                <span className="text-gray-700 text-sm sm:text-base">Track insights and performance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl text-pink-500">👁️</div>
                <span className="text-gray-700 text-sm sm:text-base">Stay visible on nearby user feeds</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl text-green-500">📅</div>
                <span className="text-gray-700 text-sm sm:text-base">Schedule content with ease</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl text-blue-500">💼</div>
                <span className="text-gray-700 text-sm sm:text-base">Get priority help when needed</span>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-2 lg:space-y-3">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                <span className="text-red-500">🚩</span>
                <span className="text-sm font-medium text-red-700">Early Bird Offer</span>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl text-base transition-all duration-300 transform hover:scale-105">
                List My Outlet for Free
              </button>
            </div>
          </div>

          {/* Right Section - Animation */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div
              ref={containerRef}
              aria-hidden
              className="w-full h-56 sm:h-64 md:h-80 lg:h-[420px] xl:h-[500px] pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
