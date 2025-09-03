'use client'

import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'
import FeatureSuggestion from '@/components/FeatureSuggestion'
import ContactHelp from '@/components/ContactHelp'

export default function SupportPage() {

  const supportOptions = [
    {
      id: 'technical-issues',
      title: 'App & Technical Issues',
      description: 'Get help with login, crashes, GPS/location errors, or other technical problems',
      icon: '/images/icons/Wrench.svg',
      href: '/support/technical-issues'
    },
    {
      id: 'safety-reporting',
      title: 'Safety & Reporting',
      description: 'Report misuse, fake outlets, or inappropriate reviews',
      icon: '/images/icons/WarningOctagon.svg',
      href: '/support/safety-reporting'
    },
    {
      id: 'delete-data',
      title: 'Delete my Data',
      description: 'Securely remove all your account information and activity from VibeNear',
      icon: '/images/icons/Trash.svg',
      href: '/support/delete-data'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="bg-[#0c214c] relative z-10 flex flex-col items-center tablet:gap-y-16 gap-y-12 justify-start tablet:p-[100px] tablet:pt-[180px] sm:max-tablet:p-16 sm:max-tablet:pt-[140px] mobile:max-sm:p-9 mobile:max-sm:pt-[120px] px-5 py-9 pt-[120px]">
        {/* Background Pattern */}
        {/* <div className="absolute inset-0 opacity-20">
          <Image
            className="min-w-full absolute max-w-full overflow-hidden max-h-full object-cover opacity-20 m-0 bg-blend-hard-light"
            width={2005}
            height={1337}
            // sizes="100vw"
            alt=""
            src="/images/sections/layer_background.png"
          />
        </div> */}

        <div className="flex flex-col items-center tablet:gap-y-6 mobile:gap-y-3 gap-y-0">
          <h1 className="tablet:text-5xl mobile:text-4xl text-[28px] font-bold text-white tablet:leading-16 mobile:leading-[48px] leading-9">
            How can we <span className="font-playfair font-extrabold">help?</span>
          </h1>
          <p className="tablet:text-[28px] mobile:text-2xl text-xl leading-9 font-semibold text-[#f2f2f2] text-center max-w-[600px]">
            Everything you need to know to get started on VibeNear
          </p>
        </div>

        <div className="flex flex-row gap-6 flex-wrap justify-center">
          {supportOptions.map((option) => (
            <Link
              key={option.id}
              href={option.href}
              className="block bg-white rounded-[18px] p-4 sm:min-w-[400px] min-w-[353px]"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src={option.icon}
                    alt={option.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 flex-shrink-0"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="tablet:text-2xl text-xl font-semibold text-[#0c214c] leading-[38px]">
                    {option.title}
                  </h3>
                  <p className="tablet:text-xl text-base font-[400] text-[#808286] leading-[33px] sm:max-w-[400px] max-w-[353px]">
                    {option.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Feature Suggestion Section */}
      <FeatureSuggestion />

      {/* Contact Help Section */}
      <ContactHelp />
    </div>
  )
}
