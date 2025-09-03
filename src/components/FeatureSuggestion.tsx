'use client'

import { useState } from 'react'

export default function FeatureSuggestion() {
  const [suggestion, setSuggestion] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Feature suggestion:', suggestion)
    // You can add API call or other logic here
    setSuggestion('')
  }

  return (
    <div className="w-full relative bg-[#e9f0ff] flex tablet:flex-row flex-col items-stretch justify-center px-[20px] py-9 tablet:p-[60px_100px] box-border xl:gap-x-32 lg:gap-x-28 tablet:gap-x-24 md:gap-y-16 sm:gap-y-12 mobile:gap-y-9 gap-y-9">
      {/* Left Section - Text Content */}
      <div className="flex tablet:justify-end justify-start">
        <div className="max-w-[600px] flex flex-col items-start justify-start gap-3">
          <p className="w-full tablet:text-5xl mobile:text-4xl text-[28px] tablet:leading-[60px] mobile:leading-[48px] leading-9 font-bold text-[#02060D] sm:text-left text-center">Suggest a New Feature</p>
          <div className="tablet:text-[28px] mobile:text-2xl text-xl leading-9 font-semibold text-[#1B1E25] sm:text-left text-center">
            We're always building VibeNear with you. Share your ideas, and help us improve!
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <form onSubmit={handleSubmit} className="flex-1 max-w-[602px] flex flex-col pt-4 gap-6">
        <div className="w-full">
          <div className="w-full rounded-lg border border-[#699aff] box-border h-40 flex flex-row items-start justify-start p-5 relative">
            <textarea
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="w-full h-full bg-transparent border-none outline-none resize-none text-[#1b1e25] text-base leading-6"
            />
            <div className="absolute top-[-11px] left-3 bg-[#e9f0ff] flex flex-row items-center justify-center px-2 z-0">
              <div className="relative leading-[22px] uppercase font-semibold text-[#2970FF]">
                Suggestion
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="sm:w-80 w-full rounded-xl bg-[#2970FF] sm:py-[18px] py-6 sm:px-9 px-6 box-border text-xl text-white font-semibold leading-6 hover:bg-[#1e5ae6] transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
