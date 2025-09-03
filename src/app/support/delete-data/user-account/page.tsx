'use client'

import { useState } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { z } from 'zod'

// Phone number validation schema for numeric input
const phoneSchema = z
  .string()
  .trim()
  .min(7, 'Phone number seems too short')
  .max(15, 'Phone number seems too long')
  .regex(/^[\d\s()-+]*$/, 'Only digits, spaces, (), - and + are allowed')

export default function DeleteMyAccountPage() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [selectedReasons, setSelectedReasons] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const reasons = [
    { id: 'bugs', label: 'Faced bugs', icon: '🛠️' },
    { id: 'places', label: "Couldn't find places", icon: '👥' },
    { id: 'useful', label: "Didn't find the app useful", icon: '💰' },
    { id: 'confusing', label: 'App is confusing', icon: '😕' },
    { id: 'other', label: 'Other', icon: '📦' }
  ]

  const handleReasonToggle = (reasonId: string) => {
    setSelectedReasons(prev =>
      prev.includes(reasonId)
        ? prev.filter(id => id !== reasonId)
        : [...prev, reasonId]
    )
  }

  const validatePhone = (value: string) => {
    const result = phoneSchema.safeParse(value)
    if (!result.success) {
      setPhoneError(result.error.issues[0].message)
    } else {
      setPhoneError('')
    }
  }

  const handleDeleteData = async () => {
    // Validate phone number before submission
    const phoneValidation = phoneSchema.safeParse(phoneNumber)
    if (!phoneValidation.success) {
      setPhoneError(phoneValidation.error.issues[0].message)
      toast.error('Please fix the phone number errors')
      return
    }

    // Check if at least one reason is selected
    if (selectedReasons.length === 0) {
      toast.error('Please select at least one reason')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/account_deletion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber,
          reasons: selectedReasons.map(id => reasons.find(r => r.id === id)?.label || id)
        }),
      })

      if (response.ok) {
        toast.success('Your deletion request has been submitted successfully! Our team will process it within 2-3 business days.')
        // Reset form
        setPhoneNumber('')
        setSelectedReasons([])
        setPhoneError('')
        setIsSubmitted(true)
      } else {
        throw new Error('Failed to submit request')
      }
    } catch (error) {
      toast.error('Failed to submit deletion request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleMaybeLater = () => {
    // This will take users back to the mobile app
    // You can implement deep linking or app-specific logic here
    window.close() // Close the web view
    // Alternative: window.location.href = 'vibenear://' or similar deep link
  }

  const inputBase = 'tablet:w-[602px] w-full rounded-lg border p-5 text-base text-gray-900 focus:outline-none transition-colors duration-200 bg-white'

  // Show confirmation screen after successful submission
  if (isSubmitted) {
    return (
      <div className="min-h-[calc(100vh-110px)] bg-white flex flex-col gap-12 items-center justify-center px-4 ">
        <div>
          <div className="w-full flex justify-center">
            <Image
              src="/images/sections/DeleteRequest.svg"
              alt="Request Submitted"
              className="w-[397.5px] h-[459px]"
              width={397.5}
              height={459}
            />
          </div>

          <div className="text-center space-y-3">
            <h3 className="text-[32px] font-bold text-[#808286]">Request submitted</h3>
            <div className="text-[#B3B4B6] text-2xl leading-8 font-semibold max-w-[480px] mx-auto">
              Your data deletion request is in progress. We&apos;ll notify you in the app within 2-3 days once it&apos;s completed
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center">
      <div className="flex-1 min-h-full tablet:pt-10 tablet:px-[60px] py-5 px-4 flex flex-col items-center justify-center">
        <div className="w-fit">
          <div className="tablet:space-y-12 space-y-8">
            <h1 className="tablet:text-[28px] text-2xl leading-8 font-semibold text-[#1B1E25] text-center tracking-normal">
              Delete your Data from VibeNear Spaces
            </h1>

            <div className='tablet:space-y-9 space-y-6'>
              <div className="bg-[#FFEEEE] border border-[#FF8E8C] rounded-2xl p-4">
                <div className='flex items-center tablet:gap-3 gap-2'>
                  <div className='tablet:w-9 aspect-square w-6 relative'>
                    <Image src={'/images/icons/WarningCircle.svg'} alt="Warning Icon" fill />
                  </div>
                  <p className='text-[#662524] font-semibold tablet:text-lg mobile:text-base leading-5'>This action cannot be undone</p>
                </div>
                <p className='text-[#CC4B48] tablet:text-base text-sm leading-6 font-semibold tablet:pl-12 pl-9'>All your data will be permanently removed from our servers</p>
              </div>

              <div className='space-y-6'>
                <div className='relative'>
                  <input
                    id="phone"
                    type="number"
                    inputMode="numeric"
                    name="phone"
                    value={phoneNumber}
                    autoComplete="tel"
                    onChange={(e) => {
                      const value = e.target.value
                      setPhoneNumber(value)
                      validatePhone(value)
                    }}
                    className={`${inputBase} phone-input ${phoneError ? 'border-red-500 focus:border-red-600' : 'border-[#D9D9DA] focus:border-gray-300'}`}
                    aria-invalid={!!phoneError}
                    aria-describedby={phoneError ? 'phone-error' : undefined}
                  />
                  <label htmlFor="phone" className="absolute left-3 top-0 -translate-y-1/2 bg-white px-2 text-base font-semibold text-[#4D5055] leading-[22px] rounded-lg">
                    PHONE NUMBER
                  </label>
                  {phoneError && (
                    <p id="phone-error" className="mt-2 text-sm text-red-600 absolute top-full -translate-y-1/3">
                      {phoneError}
                    </p>
                  )}
                </div>

                <div className="rounded-lg overflow-hidden border border-[#F2F2F2]">
                  <div className='bg-[#F2F2F2] px-5 rounded-t-lg h-14 flex items-center'>
                    <p className="text-[#4D5055] tablet:text-lg mobile:text-base leading-7 font-semibold">
                      I no longer need the app because...
                    </p>
                  </div>
                  <div className="rounded-b-lg">
                    {reasons.map((reason) => (
                      <div key={reason.id} className='tablet:h-14 h-12 border-b border-[#F2F2F2] flex justify-between items-center px-5 py-4'>
                        <div className='text-[#4D5055] tablet:text-base text-sm leading-6 flex items-center gap-2 mobile:gap-1'>
                          <span>{reason.icon}</span>
                          <span>{reason.label}</span>
                        </div>

                        <input
                          type="checkbox"
                          checked={selectedReasons.includes(reason.id)}
                          onChange={() => handleReasonToggle(reason.id)}
                          className="w-4 h-4 text-[#2970FF] border-gray-300 rounded-full outline-none focus:outline-none accent-[#FF5E5B] "
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mobile:w-[353px] pb-10 mobile:mt-8 mt-6 mx-auto">
          <button
            onClick={handleDeleteData}
            disabled={!phoneNumber || isSubmitting || !!phoneError || selectedReasons.length === 0}
            className="h-[52px] w-full rounded-lg py-4  bg-[#FF5E5B] hover:bg-[#FF5E5B]/80 text-white font-semibold text-xl leading-6 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Delete all Data'}
          </button>

          <button
            onClick={handleMaybeLater}
            className="w-full text-center bg-white underline text-[#4D5055] font-semibold text-lg leading-7"
          >
            Maybe Later
          </button>
        </div>
      </div>

    </div>
  )
}
