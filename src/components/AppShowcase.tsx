'use client'

import Image from 'next/image'

export default function AppShowcase() {
  return (
    <section className="h-screen bg-[#FDFAEF] px-[204px] py-[60px] grid place-content-center">
      <div className="flex w-full gap-[200px]">
        {/* First Child - User App */}
        <div className="w-1/2 max-w-[560px] pb-[60px] space-y-6 items-center">
          <Image
            src="/images/sections/UserApp.svg"
            alt="User App Interface"
            width={300}
            height={600}
            className="w-auto h-auto mx-auto"
          />
          <div className="space-y-9 text-center">
            <h3 className="text-[32px] font-bold leading-10 text-[#0C214C]">
              User App
            </h3>
            <p className="text-[24px] font-semibold leading-7 text-[#4D5055]">
              Find hidden gems, local deals, and events around you. No noise, just what's nearby and vibing now.
            </p>
          </div>
        </div>

        {/* Second Child - Space App */}
        <div className="w-1/2 max-w-[560px] pt-[60px] space-y-6 items-center">
          <Image
            src="/images/sections/SpaceApp.svg"
            alt="Space App Interface"
            width={300}
            height={600}
            className="w-auto h-auto mx-auto"
          />
          <div className="space-y-9 text-center">
            <h3 className="text-[32px] font-bold leading-10 text-[#0C214C]">
              Space App
            </h3>
            <p className="text-[24px] font-semibold leading-7 text-[#4D5055]">
              Create posts, track visits & reach nearby customers in minutes. List your outlet free — no commission, no hassle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
