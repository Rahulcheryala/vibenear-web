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
    <section id="why-vibe-near" className="mobile:py-15 py-9 mobile:px-25 px-5 bg-[#FEFCFC] min-h-screen">
      <div className='container tablet:space-y-16 space-y-9 mx-auto'>
        <h2 className="tablet:text-5xl mobile:text-4xl text-[32px] tablet:leading-16 mobile:leading-12 leading 11 font-bold text-center text-[#102C66] font-jakarta">
          <span className="font-playfair font-extrabold italic pr-5">
            Why
          </span>
          VibeNear
        </h2>

        <div className="flex justify-center">
          <div className="flex gap-9 flex-wrap justify-center">
            {/* FOR USERS Frame */}
            <div className='flex flex-col gap-4'>
              <p className="text-[#808286] font-semibold tablet:text-[28px] mobile:text-2xl tablet:leading-9 mobile:leading-[30px] w-full text-center mobile:text-left">FOR USERS</p>
              <div className="mobile:w-[740px] mobile:h-[540px] w-[353px] h-fit bg-[#FF5E5B] mobile:rounded-[36px] rounded-3xl border-r-[5px] border-b-[5px] border-[#4C1C1B] mobile:p-5 p-4 flex mobile:flex-row flex-col mobile:gap-4 gap-3">
                {/* Left Section - Fixed Width */}
                <div className="mobile:w-[286px] mobile:h-full w-full h-fit bg-white rounded-xl p-4 flex flex-col mobile:gap-3 gap-y-2 relative overflow-hidden">
                  <h3 className="tablet:text-[32px] mobile:text-[28px] text-xl font-extrabold text-[#1B1E25] mobile:leading-10 leading-6">Local Picks You&apos;ll Love</h3>
                  <p className="tablet:text-lg mobile:text-base text-sm font-semibold leading-7 text-[#4D5055] max-w-[80%]">85% of users say they found something new within 5 mins</p>

                  <Image src={MagnifyingGlass} alt="MagnifyingGlass" className="mobile:w-[256px] w-[60px] aspect-square absolute mobile:-bottom-4 mobile:right-0 bottom-2.5 right-2.5" />
                </div>

                {/* Right Section - Remaining Width */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex-1 bg-white rounded-xl p-4 relative">
                    <div className='w-[250px] flex flex-col gap-3'>
                      <h3 className="tablet:text-[32px] mobile:text-[28px] text-xl font-extrabold text-[#1B1E25] mobile:leading-10 leading-6">Save & Revisit Easily</h3>
                      <p className="tablet:text-lg mobile:text-base text-sm font-semibold leading-7 text-[#4D5055] max-w-[80%]">10K+ places bookmarked every week</p>

                      <Image src={Tickets} alt="Tickets" className="mobile:w-[175px] w-[60px] aspect-square absolute mobile:bottom-0 mobile:right-0 bottom-2.5 right-2.5" />
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-xl p-4 relative">
                    <div className='w-[250px] flex flex-col gap-3'>
                      <h3 className="tablet:text-[32px] mobile:text-[28px] text-xl font-extrabold text-[#1B1E25] mobile:leading-10 leading-6">Powered by People Like You</h3>
                      <p className="tablet:text-lg mobile:text-base text-sm font-semibold leading-7 text-[#4D5055] max-w-[80%]">4.8★ vibe rating from 15,000+ real experiences</p>

                      <Image src={Smily} alt="Smily" className="mobile:w-[134px] w-[60px] aspect-square absolute mobile:bottom-3 mobile:right-2 bottom-2.5 right-2.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FOR BUSINESSES Frame */}
            <div className='flex flex-col-reverse gap-4'>
              <p className="text-[#808286] font-semibold tablet:text-[28px] mobile:text-2xl text-xl tablet:leading-9 mobile:leading-[30px] w-full text-center mobile:text-left">FOR BUSINESSES</p>
              <div className="mobile:w-[740px] mobile:h-[540px] w-[353px] h-fit bg-[#F4CF65] mobile:rounded-[36px] rounded-3xl border-r-[5px] border-b-[5px] border-[#493E1E] mobile:p-5 p-4 flex mobile:flex-row flex-col mobile:gap-4 gap-3">
                {/* Left Section - Fixed Width */}
                <div className="mobile:w-[286px] mobile:h-full w-full h-fit bg-white rounded-xl p-4 flex flex-col mobile:gap-3 gap-y-2 relative overflow-hidden">
                  <h3 className="tablet:text-[32px] mobile:text-[28px] text-xl font-extrabold text-[#1B1E25] mobile:leading-10 leading-6">Get Seen by Nearby Customers</h3>
                  <p className="tablet:text-lg mobile:text-base text-sm font-semibold leading-7 text-[#4D5055] max-w-[80%]">80% of users explore within 2 km</p>

                  <Image src={Highway} alt="Highway" className="mobile:w-[195px] w-[60px] aspect-square absolute mobile:left-1/2 mobile:bottom-8 bottom-2.5 right-2.5" />
                </div>

                {/* Right Section - Remaining Width */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex-1 bg-white rounded-xl p-4 relative">
                    <div className='w-[296px] flex flex-col gap-3'>
                      <h3 className="tablet:text-[32px] mobile:text-[28px] text-xl font-extrabold text-[#1B1E25] mobile:leading-10 leading-6">Real-Time Insights That Matter</h3>
                      <p className="tablet:text-lg mobile:text-base text-sm font-semibold leading-7 text-[#4D5055] max-w-[80%]">752 followers, 1.2K visits — in just 1 week - can be you</p>

                      <Image src={Eyes} alt="Eyes" className="mobile:w-[135px] w-[60px] aspect-square absolute mobile:bottom-0 mobile:right-0 bottom-2.5 right-2.5" />
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-xl p-4 relative">
                    <div className='w-[296px] flex flex-col gap-3'>
                      <h3 className="tablet:text-[32px] mobile:text-[28px] text-xl font-extrabold text-[#1B1E25] mobile:leading-10 leading-6">Zero Commission, Zero Lock-ins</h3>
                      <p className="max-w-[216px] tablet:text-lg mobile:text-base text-sm font-semibold leading-7 text-[#4D5055]">₹0 for 2 weeks — no hidden fees</p>

                      <Image src={Rocket} alt="Rocket" className="mobile:w-[138px] w-[60px] aspect-square absolute mobile:bottom-2 mobile:right-2 bottom-2.5 right-2.5" />
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
