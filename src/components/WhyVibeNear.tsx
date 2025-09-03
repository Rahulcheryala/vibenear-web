import Image from 'next/image'
import MagnifyingGlass from '../../public/images/sections/MagnifyingGlass.svg'
import Tickets from '../../public/images/sections/Tickets.svg'
import Smily from '../../public/images/sections/Smily.svg'
import Highway from '../../public/images/sections/Highway.svg'
import Eyes from '../../public/images/sections/Eyes.svg'
import Rocket from '../../public/images/sections/Rocket.svg'

export default function WhyVibeNear() {
  return (
    <section id="why-vibe-near" className="sm:py-15 py-9 sm:px-25 px-5 bg-[#FEFCFC] min-h-screen flex items-end">
      <div className='container tablet:space-y-16 space-y-9 mx-auto'>
        <h2 className="tablet:text-5xl sm:max-tablet:text-4xl text-[32px] tablet:leading-16 mobile:leading-12 leading 11 font-bold text-center text-[#102C66] font-jakarta">
          <span className="font-playfair pr-3">
            Why
          </span>
          VibeNear
        </h2>

        <div className="flex justify-center">
          <div className="flex gap-9 flex-wrap justify-center">
            {/* FOR USERS Frame */}
            <div className='flex flex-col gap-4'>
              <p className="text-[#4D5055] font-semibold tablet:text-[28px] sm:text-2xl tablet:leading-9 sm:leading-[30px] w-full text-center sm:text-left">FOR USERS</p>
              <div className="sm:w-[740px] sm:h-[540px] w-[353px] h-fit bg-[#FF5E5B] sm:rounded-[36px] rounded-3xl border-r-[5px] border-b-[5px] border-[#4C1C1B] sm:p-5 p-4 flex sm:flex-row flex-col sm:gap-4 gap-3">
                {/* Left Section - Fixed Width */}
                <div className="sm:w-[286px] sm:h-full w-full h-fit bg-white rounded-xl p-4 flex flex-col sm:gap-3 gap-y-2 relative overflow-hidden">
                  <h3 className="tablet:text-[32px] sm:text-[28px] text-xl font-extrabold text-[#1B1E25] sm:leading-10 leading-6">Local Picks You&apos;ll Love</h3>
                  <p className="tablet:text-lg sm:text-base text-sm font-semibold leading-7 text-[#4D5055] max-w-[80%]">85% of users say they found something new within 5 mins</p>

                  <Image src={MagnifyingGlass} alt="MagnifyingGlass" className="sm:w-[256px] w-[60px] aspect-square absolute sm:-bottom-4 sm:right-0 bottom-2.5 right-2.5" />
                </div>

                {/* Right Section - Remaining Width */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex-1 bg-white rounded-xl p-4 relative">
                    <div className='w-[250px] flex flex-col gap-3'>
                      <h3 className="tablet:text-[32px] sm:text-[28px] text-xl font-extrabold text-[#1B1E25] sm:leading-10 leading-6">Save & Revisit Easily</h3>
                      <p className="tablet:text-lg sm:text-base text-sm font-semibold leading-7 text-[#4D5055] max-w-[80%]">10K+ places bookmarked every week</p>

                      <Image src={Tickets} alt="Tickets" className="sm:w-[175px] w-[60px] aspect-square absolute sm:bottom-0 sm:right-0 bottom-2.5 right-2.5" />
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-xl p-4 relative">
                    <div className='w-[250px] flex flex-col gap-3'>
                      <h3 className="tablet:text-[32px] sm:text-[28px] text-xl font-extrabold text-[#1B1E25] sm:leading-10 leading-6">Powered by People Like You</h3>
                      <p className="tablet:text-lg sm:text-base text-sm font-semibold leading-7 text-[#4D5055] max-w-[80%]">4.8★ vibe rating from 15,000+ real experiences</p>

                      <Image src={Smily} alt="Smily" className="sm:w-[134px] w-[60px] aspect-square absolute sm:bottom-3 sm:right-2 bottom-2.5 right-2.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FOR BUSINESSES Frame */}
            <div className='flex flex-col-reverse gap-4'>
              <p className="text-[#4D5055] font-semibold tablet:text-[28px] sm:text-2xl text-xl tablet:leading-9 sm:leading-[30px] w-full text-center sm:text-left">FOR BUSINESSES</p>
              <div className="sm:w-[740px] sm:h-[540px] w-[353px] h-fit bg-[#F4CF65] sm:rounded-[36px] rounded-3xl border-r-[5px] border-b-[5px] border-[#493E1E] sm:p-5 p-4 flex sm:flex-row flex-col sm:gap-4 gap-3">
                {/* Left Section - Fixed Width */}
                <div className="sm:w-[286px] sm:h-full w-full h-fit bg-white rounded-xl p-4 flex flex-col sm:gap-3 gap-y-2 relative overflow-hidden">
                  <h3 className="tablet:text-[32px] sm:text-[28px] text-xl font-extrabold text-[#1B1E25] sm:leading-10 leading-6">Get Seen by Nearby Customers</h3>
                  <p className="tablet:text-lg sm:text-base text-sm font-semibold leading-7 text-[#4D5055] max-w-[80%]">80% of users explore within 2 km</p>

                  <Image src={Highway} alt="Highway" className="sm:w-[195px] w-[60px] aspect-square absolute sm:left-1/2 sm:bottom-8 sm:-translate-x-1/2 bottom-2.5 right-2.5" />
                </div>

                {/* Right Section - Remaining Width */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex-1 bg-white rounded-xl p-4 relative">
                    <div className='w-[296px] flex flex-col gap-3'>
                      <h3 className="tablet:text-[32px] sm:text-[28px] text-xl font-extrabold text-[#1B1E25] sm:leading-10 leading-6">Real-Time Insights That Matter</h3>
                      <p className="tablet:text-lg sm:text-base text-sm font-semibold leading-7 text-[#4D5055] max-w-[80%]">752 followers, 1.2K visits — in just 1 week - can be you</p>

                      <Image src={Eyes} alt="Eyes" className="sm:w-[135px] w-[60px] aspect-square absolute sm:bottom-0 sm:right-0 bottom-2.5 right-2.5" />
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-xl p-4 relative">
                    <div className='w-[296px] flex flex-col gap-3'>
                      <h3 className="tablet:text-[32px] sm:text-[28px] text-xl font-extrabold text-[#1B1E25] sm:leading-10 leading-6">Zero Commission, Zero Lock-ins</h3>
                      <p className="max-w-[216px] tablet:text-lg sm:text-base text-sm font-semibold leading-7 text-[#4D5055]">₹0 for 2 weeks — no hidden fees</p>

                      <Image src={Rocket} alt="Rocket" className="sm:w-[138px] w-[60px] aspect-square absolute sm:bottom-2 sm:right-2 bottom-2.5 right-2.5" />
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
