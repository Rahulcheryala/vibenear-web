'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import SignupModal from './SignupModal'
import LoginModal from './LoginModal'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  // Debug modal states
  useEffect(() => {
    console.log('Modal states:', { isSignupModalOpen, isLoginModalOpen })
  }, [isSignupModalOpen, isLoginModalOpen])

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full transition-all duration-300 p-4">
        <div className="container mx-auto">
          <div className="relative flex items-center justify-between bg-gray-100/40 backdrop-blur-xl rounded-2xl shadow-lg border border-black/10 px-6 py-1">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                {/* VibeNear logo */}
                <Image
                  src="/images/logo/vibenear_logo.jpeg"
                  alt="VibeNear Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <span className="text-2xl font-bold text-gray-900">VibeNear</span>
              </a>
            </div>
            <div className="flex items-center justify-between">
              <div className="relative">
                <button
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className={`relative block rounded-lg px-3 py-2 lg:hidden focus:outline-none ${
                    navbarOpen ? 'navbarTogglerActive' : ''
                  }`}
                  aria-label="Toggle navigation menu"
                >
                  <span className="relative my-[6px] block h-[3px] w-[30px] bg-black"></span>
                  <span className="relative my-[6px] block h-[3px] w-[30px] bg-black"></span>
                  <span className="relative my-[6px] block h-[3px] w-[30px] bg-black"></span>
                </button>
                <nav
                  className={`absolute right-0 top-full mt-2 w-64 rounded-xl bg-white px-6 py-3 shadow-lg transition-all lg:static lg:block lg:w-auto lg:bg-transparent lg:shadow-none lg:mt-0 xl:ml-11 ${
                    !navbarOpen ? 'hidden' : ''
                  }`}
                >
                  <ul className="block lg:flex">
                    <li>
                      <a
                        href="#"
                        className="flex py-2 text-base font-medium text-gray-700 hover:text-gray-900 lg:ml-8 lg:inline-flex focus:outline-none"
                      >
                        Points
                      </a>
                    </li>
                    <li className="relative">
                      <a
                        href="#"
                        className="flex py-2 text-base font-medium text-gray-700 hover:text-gray-900 lg:ml-8 lg:inline-flex focus:outline-none"
                      >
                        About
                        <span className="ml-1 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">NEW!</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex py-2 text-base font-medium text-gray-700 hover:text-gray-900 lg:ml-8 lg:inline-flex focus:outline-none"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                  
                  {/* Mobile-only signup and login */}
                  <div className="lg:hidden border-t border-gray-200 mt-2 pt-2">
                    <button
                      onClick={() => setIsLoginModalOpen(true)}
                      className="flex py-2 text-base font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => setIsSignupModalOpen(true)}
                      className="inline-flex py-2 px-3 text-base font-medium text-gray-900 hover:text-gray-700 border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 bg-clip-border hover:from-pink-600 hover:via-purple-600 hover:to-green-600 transition-all duration-300 focus:outline-none rounded-lg"
                      style={{
                        background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #ec4899, #a855f7, #22c55e) border-box'
                      }}
                    >
                      Sign up
                    </button>
                  </div>
                </nav>
              </div>
              <div className="hidden justify-end sm:flex">
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="px-3 py-1 text-base font-medium text-gray-700 hover:text-gray-900 transition-colors focus:outline-none"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsSignupModalOpen(true)}
                  className="ml-3 rounded-xl px-3 py-1 text-base font-medium text-gray-900 hover:text-gray-700 border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-green-500 bg-clip-border hover:from-pink-600 hover:via-purple-600 hover:to-green-600 transition-all duration-300 focus:outline-none"
                  style={{
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #ec4899, #a855f7, #22c55e) border-box'
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modals */}
      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)}
        onSwitchToLogin={() => {
          console.log('Switching from signup to login modal')
          setIsSignupModalOpen(false)
          setIsLoginModalOpen(true)
        }}
      />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignup={() => {
          console.log('Switching from login to signup modal')
          setIsLoginModalOpen(false)
          setIsSignupModalOpen(true)
        }}
      />
    </>
  )
} 