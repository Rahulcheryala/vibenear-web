import Lottie from 'lottie-react'
import campusAnimation from '../../public/animations/campus/For_college.json'

export default function CampusPromo() {
  const features = [
    {
      icon: '🎤',
      description: 'Post events in seconds'
    },
    {
      icon: '🚀',
      description: 'See how your club is growing'
    },
    {
      icon: '🎟️',
      description: 'Campus-only perks you\'ll love'
    }
  ];

  return (
    <section id="for-students" className="bg-[#FEFCFC] min-h-screen xl:max-h-screen flex xl:flex-row flex-col-reverse justify-between gap-x-12 mobile:gap-y-9 gap-y-6 tablet:pr-[100px] mobile:max-sm:p-10 sm:p-[60px] sm:pb-0 py-9 px-5">
      {/* Left Section - Lottie Animation */}
      <div className="flex-1 min-h-full flex items-center justify-center p-0 tablet:max-xl:p-10 tablet:max-xl:pb-0 mobile:max-tablet-xl:p-5 overflow-x-auto overflow-y-hidden scrollbar-hide tablet:overflow-visible">
        <Lottie
          animationData={campusAnimation}
          loop={true}
          autoplay={true}
          className="w-full h-full sm:-translate-y-40 sm:max-tablet:-translate-y-28 -translate-y-10 scale-[3.5] sm:scale-110 tablet:scale-100 origin-center"
        />
      </div>

      {/* Right Section - Text and CTA */}
      <div className="flex justify-between xl:items-center items-start">
        <div className="xl:min-h-[596px] xl:min-w-[546px] h-fit w-fit flex flex-col justify-center tablet:gap-y-12 mobile:gap-y-6 gap-y-5">
          <div className='mobile:space-y-3'>
            <h2 className="tablet:text-5xl text-4xl text-[32px] font-bold text-[#102C66] font-jakarta text-center sm:text-left">
              For campus clubs
              <p className='text-center sm:text-left'>
                & student communities
              </p>
            </h2>
            <p className="mobile:text-2xl text-xl leading-9 font-semibold text-[#1B1E25] font-jakarta text-center sm:text-left">
              Grow your crew. Free. Forever.
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

      {/* CTA Section */}
      {/* <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
            <span className="text-blue-500">🎓</span>
            <span className="text-sm font-medium text-blue-700">Student Exclusive</span>
          </div>
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl text-base transition-all duration-300 transform hover:scale-105">
            Start Your Club Page
          </button>
        </div> */}
      {/* </div> */}
    </section >
  )
}
