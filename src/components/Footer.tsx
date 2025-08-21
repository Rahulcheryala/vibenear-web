'use client'

import Image from 'next/image'

export default function Footer() {
  const bannerItems = [
    { text: "VibeNear is built different", icon: "🧩" },
    { text: "VibeNear is built different", icon: "🌍" },
    { text: "VibeNear is built different", icon: "🔥" },
    { text: "VibeNear is built different", icon: "⚡" }
  ]

  return (
    <footer className="relative z-10 overflow-hidden">
      {/* Animated Banner */}
      <div className="h-16 py-4 px-12 flex items-center gap-x-12 overflow-hidden bg-[#102C66]">
        <div className="flex gap-6 max-w-7xl mx-auto">
          <div
            className="flex gap-6"
            style={{
              animation: 'moveLeft 15s linear infinite',
              transform: 'translateX(0)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {bannerItems.map((item, index) => (
              <span
                key={index}
                className="text-white text-2xl font-bold flex items-center gap-6 whitespace-nowrap"
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-base">{item.text}</span>
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {bannerItems.map((item, index) => (
              <span
                key={`duplicate-${index}`}
                className="text-white text-2xl font-bold flex items-center gap-6 whitespace-nowrap"
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-base">{item.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-[60px] pb-9 px-[100px] bg-[#0C214C] flex flex-col gap-y-12">
        <div className="flex flex-wrap justify-between items-start">
          {/* Left Side - Logo and Name */}
          <div className="w-fit">
            <a href="#" className="h-[120px] flex items-center gap-x-8">
              <Image
                src="/images/logo/FooterLogo.svg"
                alt="VibeNear Logo"
                width={24}
                height={24}
                className="w-24 h-24 rounded-full object-cover"
              />
              <span className="text-[56px] font-semibold leading[49px] text-white">VibeNear</span>
            </a>
          </div>

          {/* Right Side - Company and Follow Us */}
          <div className="flex flex-wrap items-start gap-[120px]">
            {/* Company Column */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold leading-7 text-white">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-white font-semibold text-lg leading-5 hover:text-blue-200 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white font-semibold text-lg leading-5 hover:text-blue-200 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold leading-7 text-white">
                Follow Us
              </h4>
              <div className="grid grid-cols-2 gap-6 max-w-[112px] max-h-[112px]">
                <a href="#" className="w-8 h-8 flex items-center justify-center">
                  <Image src="/images/sections/XLogo.svg" alt="X" width={32} height={32} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center">
                  <Image src="/images/sections/LinkedinLogo.svg" alt="in" width={32} height={32} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center">
                  <Image src="/images/sections/FacebookLogo.svg" alt="f" width={32} height={32} />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center">
                  <Image src="/images/sections/InstagramLogo.svg" alt="t" width={32} height={32} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <div className="border-t border-[#D9D9DA]"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-white text-base font-normal leading-5">
              All Rights Reserved
            </div>
            <div className="flex gap-6 items-center">
              <a href="#" className="text-white text-base font-normal leading-5">Terms of Use</a>
              <a href="#" className="text-white text-base font-normal leading-5">Privacy Policy</a>
              <a href="#" className="text-white text-base font-normal leading-5">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Legal Links */}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes moveLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `
      }} />
    </footer>
  )
}
