import Lottie from 'lottie-react'
import outletAnimation from '../../public/animations/outlet/For_Outlet.json'

export default function BusinessPromo() {
  const features = [
    {
      icon: '📈',
      description: 'Access to insights & performance'
    },
    {
      icon: '👀',
      description: 'Better visibility for your outlet'
    },
    {
      icon: '📌',
      description: 'Exclusive early member perks'
    },
    {
      icon: '👩‍💻',
      description: 'Get priority help when needed'
    }
  ]

  return (
    <section id="for-businesses" className="bg-[#FEFCFC] min-h-screen xl:max-h-screen flex xl:flex-row flex-col justify-between gap-x-12 mobile:gap-y-9 gap-y-6 tablet:pl-[120px] mobile:max-sm:p-10 sm:p-[60px] py-9 px-5">
      <div className="flex justify-between xl:items-center items-start">
        {/* Left Section */}
        <div className="xl:min-h-[596px] xl:min-w-[546px] h-fit w-fit flex flex-col tablet:gap-y-12 mobile:gap-y-6 gap-y-5">
          <div className='mobile:space-y-3 sm:m-0 mx-auto'>
            <h2 className="tablet:text-5xl text-4xl text-[32px] font-bold text-[#102C66] font-jakarta text-center sm:text-left">
              Running a local business?
              <p className='text-center sm:text-left'>
                Get listed for
                <span className="font-playfair pl-2">free</span>
              </p>
            </h2>
            <p className="mobile:text-2xl text-xl leading-9 font-semibold text-[#1B1E25] font-jakarta text-center sm:text-left">
              No commission. No catch.
            </p>
          </div>

          {/* Features */}
          <div className="mobile:space-y-6 space-y-3 mobile:p-0 p-4">
            {features.map((feature, index) => (
              <div className="flex items-center gap-3" key={index}>
                <div className="tablet:text-4xl mobile:text-[28px] text-2xl">{feature.icon}</div>
                <span className="text-[#4D5055] font-medium tablet:text-2xl mobile:text-xl leading-7">{feature.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      {/* <div className="space-y-2 lg:space-y-3">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            <span className="text-red-500">🚩</span>
            <span className="text-sm font-medium text-red-700">Early Bird Offer</span>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl text-base transition-all duration-300 transform hover:scale-105">
            List My Outlet for Free
          </button>
        </div> */}

      {/* Right Section - Animation */}
      <div className="flex-1 flex min-h-full items-center justify-center p-0 tablet:max-xl:p-10 mobile:max-tablet-xl:p-5 overflow-x-auto overflow-y-hidden scrollbar-hide tablet:overflow-visible">
        <Lottie
          animationData={outletAnimation}
          loop={true}
          autoplay={true}
          className="w-full h-full scale-110 tablet:scale-100 origin-center"
        />
      </div>
    </section>
  )
}
