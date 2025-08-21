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
      <header className="w-full transition-all duration-300">
        <div className="bg-white border-t-2 border-b-2 border-[#E5E7EB]">
          <div className="py-[38px] px-[60px] flex justify-between h-[110px] items-center">
            {/* First Child - VibeNear Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <Image
                  src="/images/logo/HeaderLogo.svg"
                  alt="VibeNear Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-lg object-cover"
                />
              </a>
            </div>

            {/* Second Child - Navigation Links */}
            <nav className="hidden lg:block">
              <ul className="flex gap-9">
                <li>
                  <a
                    href="#"
                    className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors"
                  >
                    Why Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors"
                  >
                    For Businesses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors"
                  >
                    For Students
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors"
                  >
                    Our Apps
                  </a>
                </li>
              </ul>
            </nav>

            {/* Third Child - CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => setIsSignupModalOpen(true)}
                className="h-[48px] px-6 py-3 bg-[#2970FF] text-white font-semibold rounded-lg hover:bg-[#1E5AE8] transition-colors duration-200"
              >
                Join Waitlist
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden relative block rounded-lg px-3 py-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="relative my-[6px] block h-[3px] w-[30px] bg-[#4D5055]"></span>
              <span className="relative my-[6px] block h-[3px] w-[30px] bg-[#4D5055]"></span>
              <span className="relative my-[6px] block h-[3px] w-[30px] bg-[#4D5055]"></span>
            </button>
          </div>

          {/* Mobile Navigation */}
          {navbarOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 px-[60px] py-4">
              <nav>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-[20px] font-semibold leading-6 text-[#4D5055] block py-2">
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[20px] font-semibold leading-6 text-[#4D5055] block py-2">
                      Why Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[20px] font-semibold leading-6 text-[#4D5055] block py-2">
                      For Businesses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[20px] font-semibold leading-6 text-[#4D5055] block py-2">
                      For Students
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[20px] font-semibold leading-6 text-[#4D5055] block py-2">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[20px] font-semibold leading-6 text-[#4D5055] block py-2">
                      Our Apps
                    </a>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setIsSignupModalOpen(true)}
                    className="w-full h-[48px] px-6 py-3 bg-[#2970FF] text-white font-semibold rounded-lg hover:bg-[#1E5AE8] transition-colors duration-200"
                  >
                    Join Waitlist
                  </button>
                </div>
              </nav>
            </div>
          )}
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
