'use client'

import Image from 'next/image'

export default function AppShowcase() {
  return (
    <section id="our-apps" className="min-h-screen bg-[#FDFAEF] tablet:px-[204px] tablet:py-[60px] mobile:p-[60px] py-[60px] px-5 grid place-content-center">
      <div className="flex flex-wrap w-full gap-x-[200px] mobile:gap-y-12 gap-y-9">
        {/* First Child - User App */}
        <div className="tablet:w-1/2 max-w-[560px] tablet:pb-[60px] pb-0 space-y-6 items-center">
          <div className="app-shot mx-auto">
            <Image
              src="/images/sections/UserApp.svg"
              alt="User App Interface"
              fill
              sizes="(min-width:1280px) 360px, (min-width:834px) 300px, 245px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <div className="space-y-3 text-center">
            <h3 className="tablet:text-[32px] mobile:text-[28px] text-2xl font-bold leading-10 text-[#0C214C]">
              User App
            </h3>
            <p className="tablet:text-xl mobile:text-xl text-lg tablet:leading-7 leading-6 font-semibold text-[#4D5055]">
              Find hidden gems, local deals, and events around you. No noise, just what's nearby and vibing now.
            </p>
          </div>
        </div>

        {/* Second Child - Space App */}
        <div className="tablet:w-1/2 max-w-[560px] tablet:pt-[60px] pt-0 space-y-6 items-center">
          <div className="app-shot mx-auto">
            <Image
              src="/images/sections/SpaceApp.svg"
              alt="Space App Interface"
              fill
              sizes="(min-width:1280px) 360px, (min-width:834px) 300px, 245px"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="space-y-3 text-center">
            <h3 className="tablet:text-[32px] mobile:text-[28px] text-2xl font-bold leading-10 text-[#0C214C]">
              Space App
            </h3>
            <p className="tablet:text-xl mobile:text-xl text-lg tablet:leading-7 leading-6 font-semibold text-[#4D5055]">
              Create posts, track visits & reach nearby customers in minutes. List your outlet free — no commission, no hassle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
