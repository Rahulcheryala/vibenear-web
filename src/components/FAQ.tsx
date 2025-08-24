'use client'

import { useState, useRef, useEffect } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Do I need to create an account to explore?",
    answer: "You can sign up with your phone number to start exploring VibeNear."
  },
  {
    id: 2,
    question: "How do I know what's trending nearby?",
    answer: "VibeNear's unique upvoting system allows users to collectively highlight popular posts. When a post receives enough upvotes from people around you, it becomes a \"trending\" post."
  },
  {
    id: 3,
    question: "Is VibeNear free to use?",
    answer: "Yes, VibeNear is completely free for users to explore and engage with content."
  },
  {
    id: 4,
    question: "Do I need a shop to post?",
    answer: "No, you don't need to be a traditional shop owner. The platform is also for community owners like college clubs, local artisans, and other community groups who want to post and connect with their audience."
  },
  {
    id: 5,
    question: "How much does it cost to list my outlet?",
    answer: "There is a one-time listing fee for outlets. However, for a limited time, we are offering an early-bird special for new listings."
  }
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [heights, setHeights] = useState<{ [key: number]: number }>({})
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  // Calculate and store heights for smooth animation
  useEffect(() => {
    const newHeights: { [key: number]: number } = {}
    faqData.forEach((faq) => {
      if (contentRefs.current[faq.id]) {
        newHeights[faq.id] = contentRefs.current[faq.id]?.scrollHeight || 0
      }
    })
    setHeights(newHeights)
  }, [])

  return (
    <section id="faqs" className="bg-white min-h-screen tablet:p-[100px] sm:p-[60px] px-5 py-9 grid place-content-center mobile:gap-y-12 gap-y-9">
      {/* Main heading */}
      <div className="text-center">
        <h2 className="tablet:text-5xl text-4xl text-[32px] font-bold leading-tight text-[#0C214C]">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion container */}
      <div className="tablet:w-full tablet:max-w-[1000px] mobile:w-full bg-white pb-12 mobile:px-6 mobile:py-0 tablet:py-12">
        <div className="flex flex-col gap-y-3 mobile:gap-y-6">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300 ease-in-out"
            >
              {/* Header button */}
              <button
                className="flex w-full items-center justify-between text-left tablet:p-6 p-4"
                onClick={() => toggleFaq(faq.id)}
              >
                <h3 className="tablet:text-lg text-base mobile:leading-7 leading-[22px]  font-semibold text-[#0C214C] pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`h-6 w-6 text-[#0C214C] transition-transform duration-300 ease-in-out flex-shrink-0 ${openFaq === faq.id ? 'rotate-180' : 'rotate-0'
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Animated content */}
              <div
                className="transition-all duration-300 ease-in-out overflow-hidden"
                style={{
                  maxHeight: openFaq === faq.id ? `${heights[faq.id] || 0}px` : '0px',
                }}
              >
                <div
                  ref={(el) => {
                    contentRefs.current[faq.id] = el
                  }}
                  className="tablet:px-6 px-4 tablet:pb-6 pb-4"
                >
                  <div className="tablet:pt-4 pt-3 border-t border-gray-100">
                    <p className="tablet:text-base text-sm leading-relaxed text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
