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
    answer: "No, you can browse and explore VibeNear without creating an account. However, creating an account gives you access to additional features like saving favorites, posting content, and connecting with others in your community."
  },
  {
    id: 2,
    question: "How do I know what's trending nearby?",
    answer: "VibeNear uses real-time data and community engagement to show you what's trending in your area. Our algorithm considers factors like post popularity, local interest, and recent activity to surface the most relevant trending content near you."
  },
  {
    id: 3,
    question: "Is VibeNear free to use?",
    answer: "Yes, VibeNear is completely free for users to explore, post content, and connect with their local community. We believe in making local discovery accessible to everyone."
  },
  {
    id: 4,
    question: "Do I need a shop to post?",
    answer: "No, you don't need a physical shop to post on VibeNear. Whether you're a business owner, event organizer, or just someone sharing local insights, you can post about anything happening in your area."
  },
  {
    id: 5,
    question: "How much does it cost to list my outlet?",
    answer: "Listing your outlet on VibeNear is free! We offer a simple, transparent pricing model with no hidden fees. You only pay when you want to promote your content or access premium business features."
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
    <section className="bg-white p-[100px] grid place-content-center gap-y-12">
      {/* Main heading */}
      <div className="text-center">
        <h2 className="text-5xl font-bold leading-tight text-[#0C214C]">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordion container */}
      <div className="w-[1000px] bg-white px-6 py-12">
        <div className="flex flex-col gap-6">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden transition-all duration-300 ease-in-out"
            >
              {/* Header button */}
              <button
                className="flex w-full items-center justify-between text-left p-6"
                onClick={() => toggleFaq(faq.id)}
              >
                <h4 className="text-lg font-semibold text-[#0C214C] pr-4">
                  {faq.question}
                </h4>
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
                  className="px-6 pb-6"
                >
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-base leading-relaxed text-gray-700">
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
