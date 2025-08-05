'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background color shading - exact match to image */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/60 via-white to-emerald-50/60"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-50/40 via-transparent to-sky-50/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-emerald-50/30 via-transparent to-rose-50/30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-sky-50/20 via-emerald-50/20 to-rose-50/20"></div>
      
      {/* Soft ethereal glow effects - matching image shading */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-sky-100/30 via-sky-50/20 to-transparent"></div>
      <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-b from-emerald-50/20 via-transparent to-rose-50/20"></div>
      <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-rose-100/30 via-rose-50/20 to-transparent"></div>
      
      {/* Central soft glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-sky-50/15 via-emerald-50/15 to-rose-50/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-50/10 via-rose-50/10 to-sky-50/10 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Floating portrait cards - using team images */}
      <div className="absolute top-35 left-0 w-48 h-48 bg-white rounded-2xl transform rotate-355 hover:rotate-0 transition-transform duration-300 shadow-sm overflow-hidden">
        <Image
          src="/images/team/team-01/image-01.jpg"
          alt="Team member"
          width={192}
          height={192}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      
      {/* <div className="absolute top-4 left-80 w-52 h-40 bg-white rounded-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 shadow-sm overflow-hidden">
        <Image
          src="/images/team/team-01/image-02.jpg"
          alt="Team member"
          width={208}
          height={160}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div> */}
       <div className="absolute bottom-40 -left-14 w-85 h-48 bg-white rounded-2xl transform rotate-340 hover:rotate-0 transition-transform duration-300 shadow-sm overflow-hidden">
        <Image
          src="/images/team/team-01/image-02.jpg"
          alt="Team member"
          width={340}
          height={192}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      
      
      <div className="absolute -bottom-15 -left-4 w-45 h-60 bg-white rounded-2xl transform rotate-10 hover:rotate-0 transition-transform duration-300 shadow-sm overflow-hidden">
        <Image
          src="/images/team/team-01/image-03.jpg"
          alt="Team member"
          width={180}
          height={144}
          className="w-full h-36 object-cover rounded-t-2xl"
        />
        <div className="p-3">
          <p className="text-xs text-gray-600">VibeNear Team &apos;25</p>
          <p className="text-xs text-gray-500">vibenear.com</p>
        </div>
      </div>
      
      <div className="absolute top-60 -right-5 w-45 h-85 bg-white rounded-2xl transform -rotate-345 hover:rotate-0 transition-transform duration-300 shadow-sm overflow-hidden">
        <Image
          src="/images/team/team-01/image-04.jpg"
          alt="Team member"
          width={180}
          height={340}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                              Your <span className="bg-gradient-to-r from-blue-500 via-magenta-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent font-serif italic" style={{ fontFamily: 'var(--font-dancing-script)' }}>forever</span> space for everything you are.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              More than a link—a decentralized canvas to share your story, your work, and your life—in minutes.
            </p>
          </div>

          {/* Search Input */}
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <div className="flex items-center bg-white/80 backdrop-blur-xl rounded-2xl p-3 shadow-lg border border-red-300 relative overflow-hidden">
              {/* Glassmorphism input background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/20 to-white/40 rounded-2xl backdrop-blur-sm"></div>
                              <input
                  type="text"
                  placeholder="portrait.so/mehmet"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none text-lg text-gray-900 placeholder-gray-500 px-4 py-3 focus:outline-none relative z-10"
                />
              <button 
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium relative z-10"
              >
                Sign up
              </button>
            </div>
            
            <div className="text-center mt-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Already have a Portrait? Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 