'use client'

import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export default function BusinessPromo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<ReturnType<typeof lottie.loadAnimation> | null>(null)

  useEffect(() => {
    let cleanup = () => { }
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

  const features = [
    {
      icon: '📈',
      description: 'Access to insights & performance'
    },
    {
      icon: '👀',
      description: 'Better visibility for your outlet'
    },
    {
      icon: '📌',
      description: 'Exclusive early member perks'
    },
    {
      icon: '👩‍💻',
      description: 'Get priority help when needed'
    }
  ]

  return (
    <section className="pl-[120px] bg-[#FEFCFC] min-h-screen flex flex-wrap justify-between gap-12">
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="min-h-[596px] min-w-[546px] flex flex-col gap-12">
          <div className='space-y-3'>
            <h2 className="text-5xl font-bold text-[#102C66] font-jakarta">
              Running a local business?
              <p>
                Get listed for
                <span className="italic font-playfair pl-2">free</span>
              </p>
            </h2>
            <p className="text-2xl leading-9 font-semibold text-[#1B1E25] font-jakarta">
              No commission. No catch.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div className="flex items-center gap-3" key={index}>
                <div className="text-4xl">{feature.icon}</div>
                <span className="text-[#4D5055] font-medium text-2xl leading-7">{feature.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      {/* <div className="space-y-2 lg:space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            <span className="text-red-500">🚩</span>
            <span className="text-sm font-medium text-red-700">Early Bird Offer</span>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl text-base transition-all duration-300 transform hover:scale-105">
            List My Outlet for Free
          </button>
        </div> */}

      {/* Right Section - Animation */}
      <div className="flex-1 min-h-full flex items-center justify-center">
        <div
          ref={containerRef}
          aria-hidden
          className="w-full h-full pointer-events-none"
        />
      </div>
    </section>
  )
}
