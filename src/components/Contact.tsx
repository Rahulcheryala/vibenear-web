'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="join-waitlist" className="min-h-screen bg-white tablet:px-[120px] mobile:px-[60px] px-5 py-[60px] grid place-content-center">
      <div className="flex lg:flex-row flex-col gap-x-[160px] mobile:gap-y-[60px] gap-y-12">
        {/* First Child - Text Content */}
        <div className="max-w-[602px] flex flex-col gap-3">
          <h2 className="tablet:text-5xl mobile:text-4xl text-[32px] tablet:leading-16 leading-12 font-bold text-[#102C66]">
            Be <span className='font-playfair font-extrabold italic pl-0.5'>first</span> on VibeNear
          </h2>
          <p className="tablet:text-[28px] mobile:text-2xl text-xl tablet:leading-8 font-semibold text-[#1B1E25]">
            We&apos;ll notify you when VibeNear goes live in your area—with early-bird perks
          </p>
        </div>

        {/* Second Child - Form */}
        <div className="w-full tablet:max-w-[600px] flex flex-col gap-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-12">
            {/* First part - Input fields */}
            <div className="space-y-9">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#D9D9DA] p-5 text-base text-gray-900 focus:border-gray-300 focus:outline-none transition-colors duration-200 bg-white"
                />
                <label className="absolute left-3 top-0 -translate-y-1/2 bg-white px-2 text-base font-semibold text-[#808286] leading-[22px]">
                  NAME
                </label>
              </div>

              <div className='relative'>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#D9D9DA] p-5 text-base text-gray-900 focus:border-gray-300 focus:outline-none transition-colors duration-200 bg-white"
                />
                <label className="absolute left-3 top-0 -translate-y-1/2 bg-white px-2 text-base font-semibold text-[#808286] leading-[22px]">
                  PHONE NUMBER
                </label>
              </div>

              <div className='relative'>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#D9D9DA] p-5 text-base text-gray-900 focus:border-gray-300 focus:outline-none transition-colors duration-200 bg-white"
                />
                <label className="absolute left-3 top-0 -translate-y-1/2 bg-white px-2 text-base font-semibold text-[#808286] leading-[22px]">
                  EMAIL (OPTIONAL)
                </label>
              </div>

              <div className='relative'>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#D9D9DA] p-5 text-base text-gray-900 focus:border-gray-300 focus:outline-none transition-colors duration-200 bg-white resize-none"
                ></textarea>
                <label className="absolute left-3 top-0 -translate-y-1/2 bg-white px-2 text-base font-semibold text-[#808286] leading-[22px]">
                  MESSAGE
                </label>
              </div>
            </div>

            {/* Second part - Button */}
            <div>
              <button
                type="submit"
                className="w-[320px] h-[60px] px-9 py-[18px] bg-[#2970FF] text-[20px] leading-6 text-white font-semibold rounded-xl hover:bg-[#1E5AE8] transition-colors duration-200"
              >
                Join Waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
