'use client'

import { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How does VibeNear connect businesses and students?",
    answer: "VibeNear uses advanced matching algorithms to connect businesses with qualified students based on skills, availability, and project requirements. Our platform facilitates seamless communication and project management between both parties."
  },
  {
    id: 2,
    question: "What types of projects can students work on?",
    answer: "Students can work on various projects including web development, mobile apps, data analysis, content creation, marketing campaigns, and more. We offer opportunities across different industries and skill levels."
  },
  {
    id: 3,
    question: "How do businesses benefit from using VibeNear?",
    answer: "Businesses get access to talented students at competitive rates, flexible staffing solutions, fresh perspectives, and the ability to scale their workforce based on project needs. Our platform handles all the administrative work."
  },
  {
    id: 4,
    question: "Is there a verification process for students?",
    answer: "Yes, all students go through a comprehensive verification process including skill assessments, portfolio reviews, and background checks to ensure quality and reliability for our business partners."
  },
  {
    id: 5,
    question: "What payment and security measures are in place?",
    answer: "We use secure payment processing with escrow services, milestone-based payments, and comprehensive dispute resolution. All transactions are protected and monitored for your safety."
  },
  {
    id: 6,
    question: "Can international students and businesses use VibeNear?",
    answer: "Yes, VibeNear is available globally. We support multiple currencies, time zones, and have built-in translation features to facilitate international collaborations."
  }
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-16 lg:pb-16 lg:pt-20 dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[520px] text-center lg:mb-16">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-[40px]/[48px] dark:text-white">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Find answers to the most commonly asked questions about VibeNear and how we connect businesses with talented students.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            {faqData.slice(0, 3).map((faq) => (
              <div
                key={faq.id}
                className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8 dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)]"
              >
                <button
                  className="faq-btn flex w-full text-left"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
                    <svg
                      className={`transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
                      {faq.question}
                    </h4>
                  </div>
                </button>
                {openFaq === faq.id && (
                  <div className="faq-content pl-[62px]">
                    <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full px-4 lg:w-1/2">
            {faqData.slice(3, 6).map((faq) => (
              <div
                key={faq.id}
                className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8 dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)]"
              >
                <button
                  className="faq-btn flex w-full text-left"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
                    <svg
                      className={`transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''}`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
                      {faq.question}
                    </h4>
                  </div>
                </button>
                {openFaq === faq.id && (
                  <div className="faq-content pl-[62px]">
                    <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
} 