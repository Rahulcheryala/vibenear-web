'use client'

import { useState } from 'react'
import { z } from 'zod'
import toast from 'react-hot-toast'

const waitlistSchema = z.object({
  name: z.string().trim().min(2, 'Please enter at least 2 characters'),
  phone: z
    .string()
    .trim()
    .min(7, 'Phone number seems too short')
    .max(20, 'Phone number seems too long')
    .regex(/^[+\d\s()-]*$/, 'Only digits, spaces, (), - and + are allowed'),
  email: z
    .string()
    .trim()
    .email('Enter a valid email')
    .or(z.literal('').transform(() => '')),
  message: z.string().trim().min(1, 'Please add a short message')
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

type WaitlistFormErrors = Partial<Record<keyof WaitlistFormData, string>>

export default function JoinWaitlist() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<WaitlistFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateField = (name: keyof WaitlistFormData, value: string) => {
    const partial: WaitlistFormData = { ...formData, [name]: value }
    const result = waitlistSchema.safeParse(partial)
    if (!result.success) {
      const issue = result.error.issues.find(i => i.path[0] === name)
      setErrors(prev => ({ ...prev, [name]: issue?.message }))
    } else {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const parsed = waitlistSchema.safeParse(formData)
    if (!parsed.success) {
      const fieldErrors: WaitlistFormErrors = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof WaitlistFormData
        fieldErrors[key] = issue.message
      }
      setErrors(fieldErrors)
      return
    }

    setIsSubmitting(true)

    try {
      // API call to Next.js API route
      const response = await fetch('/api/join-waitlist/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsed.data),
      })

      if (response.ok) {
        toast.success('Successfully joined the waitlist! \n We\'ll notify you when VibeNear goes live.')

        // Clear form on success
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        })
        setErrors({})
      } else {
        const errorData = await response.json().catch(() => ({}))
        console.log("Error data:", errorData);

        // Handle Django validation errors (field-specific errors)
        if (errorData.phone || errorData.name || errorData.email || errorData.message) {
          // Set field-specific errors
          const fieldErrors: WaitlistFormErrors = {}
          if (errorData.phone) fieldErrors.phone = errorData.phone[0] || 'Invalid phone number'
          if (errorData.name) fieldErrors.name = errorData.name[0] || 'Invalid name'
          if (errorData.email) fieldErrors.email = errorData.email[0] || 'Invalid email'
          if (errorData.message) fieldErrors.message = errorData.message[0] || 'Invalid message'

          setErrors(fieldErrors)

          // Show appropriate message based on error type
          if (errorData.phone && errorData.phone[0]?.includes('already exists')) {
            toast.error('We understand your excitement! 🎉 You have already joined the waitlist. We\'ll notify you as soon as VibeNear goes live in your area!')
          } else {
            toast.error('Please fix the errors in the form')
          }
        } else {
          // Handle general error message
          const errorMessage = errorData.message || 'Failed to join waitlist. Please try again.'
          toast.error(errorMessage)
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    validateField(name as keyof WaitlistFormData, value)
  }

  const inputBase =
    'w-full rounded-lg border p-5 text-base text-gray-900 focus:outline-none transition-colors duration-200 bg-white'

  const borderFor = (key: keyof WaitlistFormData) =>
    errors[key] ? 'border-red-500 focus:border-red-600' : 'border-[#D9D9DA] focus:border-gray-300'

  return (
    <section id="join-waitlist" className="min-h-screen bg-white tablet:px-[120px] mobile:max-sm:px-[30px] sm:px-[60px] px-5 py-[60px] grid place-content-center">
      <div className="flex lg:flex-row flex-col gap-x-[160px] mobile:gap-y-[60px] gap-y-12">
        {/* First Child - Text Content */}
        <div className="max-w-[602px] flex flex-col gap-3">
          <h2 className="tablet:text-5xl mobile:text-4xl text-[32px] tablet:leading-16 leading-12 font-bold text-[#102C66] whitespace-nowrap">
            Be <span className='font-playfair'>first</span> on VibeNear
          </h2>
          <p className="tablet:text-[28px] mobile:text-2xl text-xl tablet:leading-8 font-semibold text-[#1B1E25]">
            We&apos;ll notify you when VibeNear goes live in your area—with early-bird perks
          </p>
        </div>

        {/* Second Child - Form */}
        <div className="w-full tablet:max-w-[600px] flex flex-col gap-12">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-12">
            {/* First part - Input fields */}
            <div className="space-y-9">
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`${inputBase} ${borderFor('name')}`}
                />
                <label htmlFor="name" className="absolute left-3 top-0 -translate-y-1/2 bg-white px-2 text-base font-semibold text-[#4D5055] leading-[22px]">
                  NAME
                </label>
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className='relative'>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  autoComplete="tel"
                  onChange={handleChange}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  className={`${inputBase} ${borderFor('phone')}`}
                />
                <label htmlFor="phone" className="absolute left-3 top-0 -translate-y-1/2 bg-white px-2 text-base font-semibold text-[#4D5055] leading-[22px]">
                  PHONE NUMBER
                </label>
                {errors.phone && (
                  <p id="phone-error" className="mt-2 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className='relative'>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  autoComplete="email"
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`${inputBase} ${borderFor('email')}`}
                />
                <label htmlFor="email" className="absolute left-3 top-0 -translate-y-1/2 bg-white px-2 text-base font-semibold text-[#4D5055] leading-[22px]">
                  EMAIL (OPTIONAL)
                </label>
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className='relative'>
                <textarea
                  id="message"
                  rows={4}
                  name="message"
                  value={formData.message}
                  autoComplete="off"
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${inputBase} ${borderFor('message')} resize-none`}
                ></textarea>
                <label htmlFor="message" className="absolute left-3 top-0 -translate-y-1/2 bg-white px-2 text-base font-semibold text-[#4D5055] leading-[22px]">
                  MESSAGE
                </label>
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {/* Second part - Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[320px] h-[60px] px-9 py-[18px] bg-[#1E5AE8] text-[20px] leading-6 text-white font-semibold rounded-xl hover:bg-[#1A4FD1] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
