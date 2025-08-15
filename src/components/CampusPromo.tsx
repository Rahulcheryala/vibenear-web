'use client'

import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export default function CampusPromo() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const workingAnimation = await import('../../public/animations/campus/For college.json')
        const animationData = workingAnimation.default
        
        if (containerRef.current) {
          const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
          })
          
          return () => {
            anim.destroy()
          }
        }
      } catch (err) {
        console.error('Error loading campus animation:', err)
      }
    }

    loadAnimation()
  }, [])

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Section - Lottie Animation */}
          <div className="lg:col-span-3 flex items-start pt-8">
            <div ref={containerRef} className="w-full h-auto"></div>
          </div>

          {/* Right Section - Text and CTA */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-3">
                For campus clubs & <span className="italic font-serif">student communities.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Grow your crew. Free. Forever.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-xl text-purple-600">🎤</div>
                <span className="text-gray-700 text-sm">Post events in seconds</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl text-red-500">🚀</div>
                <span className="text-gray-700 text-sm">See how your club is growing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-xl text-pink-500">🎫</div>
                <span className="text-gray-700 text-sm">Campus-only perks you&apos;ll love</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                <span className="text-blue-500">🎓</span>
                <span className="text-sm font-medium text-blue-700">Student Exclusive</span>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl text-base transition-all duration-300 transform hover:scale-105">
                Start Your Club Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
