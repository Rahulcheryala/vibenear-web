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

  const features = [
    {
      icon: '🎤',
      description: 'Post events in seconds'
    },
    {
      icon: '🚀',
      description: 'See how your club is growing'
    },
    {
      icon: '🎟️',
      description: 'Campus-only perks you\'ll love'
    }
  ];

  return (
    <section className="pr-[120px] bg-[#FEFCFC] h-[680px] max-h-screen flex flex-wrap">
      {/* Left Section - Lottie Animation */}
      <div className="flex-1 min-h-full flex items-center justify-center">
        <div
          ref={containerRef}
          aria-hidden
          className="w-full h-full pointer-events-none -translate-y-40"
        />
      </div>

      {/* Right Section - Text and CTA */}
      <div className="min-h-[596px] min-w-[546px] place-self-center flex flex-col gap-12">
        <div className='space-y-3'>
          <h2 className="text-5xl font-bold text-[#102C66] font-jakarta">
            For campus clubs
            <p>
              & student communities
            </p>
          </h2>
          <p className="text-2xl leading-9 font-semibold text-[#1B1E25] font-jakarta">
            Grow your crew. Free. Forever.
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

      {/* CTA Section */}
      {/* <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
            <span className="text-blue-500">🎓</span>
            <span className="text-sm font-medium text-blue-700">Student Exclusive</span>
          </div>
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl text-base transition-all duration-300 transform hover:scale-105">
            Start Your Club Page
          </button>
        </div> */}
      {/* </div> */}
    </section >
  )
}
