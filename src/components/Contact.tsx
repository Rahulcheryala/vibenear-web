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
    <section className="h-screen bg-white px-[120px] py-[60px] grid place-content-center">
      <div className="flex gap-[160px]">
        {/* First Child - Text Content */}
        <div className="w-[602px] flex flex-col gap-3">
          <h2 className="text-5xl font-bold leading-16 text-[#102C66]">
            Be first on VibeNear
          </h2>
          <p className="text-[28px] font-semibold leading-9 text-[#1B1E25]">
            We'll notify you when VibeNear goes live in your area—with early-bird perks
          </p>
        </div>

        {/* Second Child - Form */}
        <div className="min-w-[600px] flex flex-col gap-12">
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
