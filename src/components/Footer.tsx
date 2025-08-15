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
    <footer className="relative z-10 bg-blue-900 overflow-hidden">
      {/* Animated Banner */}
      <div className="py-3 overflow-hidden">
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
                 className="text-white text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap border border-white/30"
               >
                 <span className="text-base">{item.icon}</span>
                 <span className="text-base">{item.text}</span>
               </span>
             ))}
             {/* Duplicate for seamless loop */}
             {bannerItems.map((item, index) => (
               <span
                 key={`duplicate-${index}`}
                 className="text-white text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap border border-white/30"
               >
                 <span className="text-base">{item.icon}</span>
                 <span className="text-base">{item.text}</span>
               </span>
             ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-between items-start">
                     {/* Left Side - Logo and Name */}
           <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
             <div className="flex items-center space-x-4 mb-8">
               <a href="#" className="flex items-center space-x-4">
                 <Image
                   src="/images/logo/vibenear_logo.jpeg"
                   alt="VibeNear Logo"
                   width={64}
                   height={64}
                   className="w-16 h-16 rounded-xl object-cover"
                 />
                 <span className="text-5xl font-bold text-white">VibeNear</span>
               </a>
             </div>
           </div>

                     {/* Right Side - Company and Follow Us */}
           <div className="w-full lg:w-1/2 flex flex-wrap justify-end gap-12">
            {/* Company Column */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <span className="text-white font-bold text-sm">X</span>
                </a>
                <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <span className="text-white font-bold text-sm">in</span>
                </a>
                <a href="#" className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <span className="text-white font-bold text-sm">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Legal Links */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-white text-sm mb-2 sm:mb-0">
              All Rights Reserved
            </div>
            <div className="flex space-x-4 text-white text-sm">
              <a href="#" className="hover:text-blue-200 transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-200 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

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