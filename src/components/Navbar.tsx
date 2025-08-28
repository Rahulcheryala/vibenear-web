'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Shared navigation items configuration
const navigationItems = [
  { href: '#how-it-works', label: 'How it Works' },
  { href: '#why-vibe-near', label: 'Why Us' },
  { href: '#for-businesses', label: 'For Businesses' },
  { href: '#for-students', label: 'For Students' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#our-apps', label: 'Our Apps' }
]

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const dropdownTabIndex = navbarOpen ? 0 : -1

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
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[20px] font-semibold leading-6 text-[#4D5055] hover:text-[#102C66] transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Third Child - CTA Button and Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* CTA Button (Desktop) */}
              <div className="hidden sm:block">
                <Link
                  href="#join-waitlist"
                  className="h-[48px] w-[190px] flex justify-center items-center px-6 py-3 bg-[#1E5AE8] text-xl leading-6 text-white font-semibold rounded-xl hover:bg-[#1A4FD1] transition-colors duration-200 whitespace-nowrap"
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
                  <nav className="py-2" role="menu" aria-label="Mobile navigation">
                    <ul className="space-y-1 text-center">
                      {navigationItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-[18px] font-semibold text-[#4D5055] hover:text-[#102C66] hover:bg-gray-50 transition-colors"
                            tabIndex={dropdownTabIndex}
                            onClick={() => setNavbarOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}

                      {/* Mobile CTA in dropdown */}
                      <li className="sm:hidden border-t border-gray-200 mt-2 pt-2 px-6">
                        <button
                          onClick={() => {
                            setNavbarOpen(false)
                            // Scroll to join-waitlist section and update URL
                            const element = document.getElementById('join-waitlist')
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' })
                              // Update URL without page reload
                              window.history.pushState({}, '', '#join-waitlist')
                            }
                          }}
                          className="w-full h-[48px] bg-[#1E5AE8] text-white font-semibold rounded-lg hover:bg-[#1A4FD1] transition-colors duration-200"
                          tabIndex={dropdownTabIndex}
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
    </>
  )
}
