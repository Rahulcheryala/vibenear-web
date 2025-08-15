'use client'

import Image from 'next/image'

export default function WhyVibeNear() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <h2 className="text-center mb-14 sm:mb-20">
          <span className="font-serif italic text-4xl sm:text-5xl text-[#1b3a76] mr-2">Why</span>
          <span className="font-serif text-4xl sm:text-5xl text-[#0b2545]">VibeNear</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14">
          {/* Users Section - Left on desktop, top on mobile */}
          <div className="order-1 lg:order-1">
            <h3 className="text-center text-sm font-semibold tracking-[0.18em] text-gray-500 mb-6">FOR USERS</h3>
            <div className="relative">
              <Image
                src="/images/f1/users.png"
                alt="VibeNear for Users"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          {/* Business Section - Right on desktop, bottom on mobile */}
          <div className="order-2 lg:order-2">
            <h3 className="text-center text-sm font-semibold tracking-[0.18em] text-gray-500 mb-6">FOR BUSINESSES</h3>
            <div className="relative">
              <Image
                src="/images/f1/business.png"
                alt="VibeNear for Businesses"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
