'use client'
import Image from 'next/image'
import MagnifyingGlass from '../../public/images/sections/MagnifyingGlass.svg'
import Tickets from '../../public/images/sections/Tickets.svg'
import Smily from '../../public/images/sections/Smily.svg'
import Highway from '../../public/images/sections/Highway.svg'
import Eyes from '../../public/images/sections/Eyes.svg'
import Rocket from '../../public/images/sections/Rocket.svg'

export default function WhyVibeNear() {
  return (
    <section className="py-15 px-25 bg-[#FEFCFC] min-h-screen">
      <div className='container space-y-16 mx-auto'>
        <h2 className="text-5xl font-bold text-center text-[#102C66] font-jakarta">
          <span className="font-playfair italic pr-5">
            Why
          </span>
          VibeNear
        </h2>

        <div className="flex justify-center">
          <div className="flex gap-9">
            {/* FOR USERS Frame */}
            <div className='flex flex-col gap-4'>
              <p className="text-[#808286] font-semibold text-[28px] leading-9 w-full">FOR USERS</p>
              <div className="w-[740px] h-[540px] bg-[#FF5E5B] rounded-[36px] border-r-[5px] border-b-[5px] border-[#4C1C1B] p-5 flex gap-4">
                {/* Left Section - Fixed Width */}
                <div className="w-[286px] h-full bg-white rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden">
                  <h3 className="text-[32px] font-extrabold text-[#1B1E25] leading-10">Local Picks You'll Love</h3>
                  <p className="text-lg font-semibold leading-7 text-[#4D5055]">85% of users say they found something new within 5 mins</p>

                  <Image src={MagnifyingGlass} alt="MagnifyingGlass" className="w-[256px] aspect-square absolute -bottom-4 right-0" />
                </div>

                {/* Right Section - Remaining Width */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex-1 bg-white rounded-xl p-4 relative">
                    <div className='w-[250px] flex flex-col gap-3'>
                      <h3 className="text-[32px] font-extrabold text-[#1B1E25] leading-10">Save & Revisit Easily</h3>
                      <p className="text-lg font-semibold leading-7 text-[#4D5055]">10K+ places bookmarked every week</p>

                      <Image src={Tickets} alt="Tickets" className="w-[175px] aspect-square absolute bottom-0 right-0" />
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-xl p-4 relative">
                    <div className='w-[250px] flex flex-col gap-3'>
                      <h3 className="text-[32px] font-extrabold text-[#1B1E25] leading-10">Powered by People Like You</h3>
                      <p className="text-lg font-semibold leading-7 text-[#4D5055]">4.8★ vibe rating from 15,000+ real experiences</p>

                      <Image src={Smily} alt="Smily" className="w-[134px] aspect-square absolute bottom-3 right-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FOR BUSINESSES Frame */}
            <div className='flex flex-col-reverse gap-4'>
              <p className="text-[#808286] font-semibold text-[28px] leading-9 w-full">FOR BUSINESSES</p>
              <div className="w-[740px] h-[540px] bg-[#F4CF65] rounded-[36px] border-r-[5px] border-b-[5px] border-[#493E1E] p-5 flex gap-4">
                {/* Left Section - Fixed Width */}
                <div className="w-[286px] h-full bg-white rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden">
                  <h3 className="text-[32px] font-extrabold text-[#1B1E25] leading-10">Get Seen by Nearby Customers</h3>
                  <p className="text-lg font-semibold leading-7 text-[#4D5055]">80% of users explore within 2 km</p>

                  <Image src={Highway} alt="Highway" className="w-[195px] aspect-square absolute left-1/2 bottom-8 -translate-x-1/2" />
                </div>

                {/* Right Section - Remaining Width */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex-1 bg-white rounded-xl p-4 relative">
                    <div className='w-[296px] flex flex-col gap-3'>
                      <h3 className="text-[32px] font-extrabold text-[#1B1E25] leading-10">Real-Time Insights That Matter</h3>
                      <p className="text-lg font-semibold leading-7 text-[#4D5055]">752 followers, 1.2K visits — in just 1 week - can be you</p>

                      <Image src={Eyes} alt="Eyes" className="w-[135px] aspect-square absolute bottom-0 right-0" />
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-xl p-4 relative">
                    <div className='w-[296px] flex flex-col gap-3'>
                      <h3 className="text-[32px] font-extrabold text-[#1B1E25] leading-10">Zero Commission, Zero Lock-ins</h3>
                      <p className="max-w-[216px] text-lg font-semibold leading-7 text-[#4D5055]">₹0 for 2 weeks — no hidden fees</p>

                      <Image src={Rocket} alt="Rocket" className="w-[138px] aspect-square absolute bottom-2 right-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
