'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import SignupModal from './SignupModal'
import LoginModal from './LoginModal'
import Link from 'next/link'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  // Debug modal states
  useEffect(() => {
    console.log('Modal states:', { isSignupModalOpen, isLoginModalOpen })
  }, [isSignupModalOpen, isLoginModalOpen])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (navbarOpen) {
        setNavbarOpen(false)
      }
    }

    if (navbarOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [navbarOpen])

  return (
    <>
      <header className="w-full transition-all duration-300">
        <div className="bg-[#FAFAFA]">
          <div className="mobile:py-[38px] sm:px-[60px] px-5 py-6 flex justify-between mobile:h-[110px] h-[80px] items-center">
            {/* First Child - VibeNear Logo */}
            <Link href="/" className='flex mobile:gap-x-4 gap-x-2.5 flex-shrink-0 items-center'>
              <div className="tablet:h-[48px] mobile:h-[42px] aspect-square h-9 relative">
                <Image
                  src="/images/logo/Logo.svg"
                  alt="VibeNear Logo"
                  fill
                  className="rounded-lg object-cover aspect-square"
                />
              </div>
              <span className="tablet:text-4xl mobile:text-[28px] text-2xl font-semibold font-reddit text-[#2970FF]">VibeNear</span>
            </Link>

            {/* Second Child - Navigation Links (Desktop) */}
            <nav className="hidden xl:block">
              <ul className="flex gap-9">
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors whitespace-nowrap"
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#why-vibe-near"
                    className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors whitespace-nowrap"
                  >
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#for-businesses"
                    className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors whitespace-nowrap"
                  >
                    For Businesses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#for-students"
                    className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors whitespace-nowrap"
                  >
                    For Students
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faqs"
                    className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors whitespace-nowrap"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#our-apps"
                    className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors whitespace-nowrap"
                  >
                    Our Apps
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Third Child - CTA Button and Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* CTA Button (Desktop) */}
              <div className="hidden sm:block">
                <Link
                  href="#join-waitlist"
                  // onClick={() => setIsSignupModalOpen(true)}
                  className="h-[48px] w-[190px] flex justify-center items-center px-6 py-3 bg-[#2970FF] text-xl leading-6 text-white font-semibold rounded-xl hover:bg-[#1E5AE8] transition-colors duration-200 whitespace-nowrap"
                >
                  Join Waitlist
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="xl:hidden relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setNavbarOpen(!navbarOpen)
                  }}
                  className="relative flex items-center justify-center w-7 h-7 hover:bg-gray-100 transition-colors focus:outline-hidden"
                  aria-label="Toggle navigation menu"
                  aria-expanded={navbarOpen}
                >
                  <Image
                    src="/images/icons/Menu.svg"
                    alt="Menu"
                    fill
                    aria-hidden={navbarOpen}
                    className={`w-full h-full rounded-lg object-cover transition-opacity duration-200 pointer-events-none ${navbarOpen ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <Image
                    src="/images/icons/MenuOpen.svg"
                    alt="Close Menu"
                    fill
                    aria-hidden={!navbarOpen}
                    className={`w-full h-full rounded-lg object-cover transition-opacity duration-200 pointer-events-none ${navbarOpen ? 'opacity-100' : 'opacity-0'}`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute -right-2 top-[calc(100%+10px)] mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-200 ease-out transform origin-top ${navbarOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
                  aria-hidden={!navbarOpen}
                  onClick={(e) => e.stopPropagation()}
                >
                  <nav className="py-2">
                    <ul className="space-y-1 text-center">
                      <li>
                        <Link
                          href="#how-it-works"
                          className="block px-4 py-3 text-[18px] font-semibold text-[#4D5055] hover:text-[#102C66] hover:bg-gray-50 transition-colors"
                          onClick={() => setNavbarOpen(false)}
                        >
                          How it Works
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#why-vibe-near"
                          className="block px-4 py-3 text-[18px] font-semibold text-[#4D5055] hover:text-[#102C66] hover:bg-gray-50 transition-colors"
                          onClick={() => setNavbarOpen(false)}
                        >
                          Why Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#for-businesses"
                          className="block px-4 py-3 text-[18px] font-semibold text-[#4D5055] hover:text-[#102C66] hover:bg-gray-50 transition-colors"
                          onClick={() => setNavbarOpen(false)}
                        >
                          For Businesses
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#for-students"
                          className="block px-4 py-3 text-[18px] font-semibold text-[#4D5055] hover:text-[#102C66] hover:bg-gray-50 transition-colors"
                          onClick={() => setNavbarOpen(false)}
                        >
                          For Students
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#faqs"
                          className="block px-4 py-3 text-[18px] font-semibold text-[#4D5055] hover:text-[#102C66] hover:bg-gray-50 transition-colors"
                          onClick={() => setNavbarOpen(false)}
                        >
                          FAQs
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#our-apps"
                          className="block px-4 py-3 text-[18px] font-semibold text-[#4D5055] hover:text-[#102C66] hover:bg-gray-50 transition-colors"
                          onClick={() => setNavbarOpen(false)}
                        >
                          Our Apps
                        </Link>
                      </li>

                      {/* Mobile CTA in dropdown */}
                      <li className="sm:hidden border-t border-gray-200 mt-2 pt-2 px-6">
                        <button
                          onClick={() => {
                            setNavbarOpen(false)
                            setIsSignupModalOpen(true)
                          }}
                          className="w-full h-[48px] bg-[#2970FF] text-white font-semibold rounded-lg hover:bg-[#1E5AE8] transition-colors duration-200"
                        >
                          Join Waitlist
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
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
