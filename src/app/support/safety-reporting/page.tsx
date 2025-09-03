'use client'

import FAQ from '@/components/FAQ'
import ContactHelp from '@/components/ContactHelp'
import FeatureSuggestion from '@/components/FeatureSuggestion'

export default function SafetyReportingPage() {
  const safetyFAQData = [
    {
      id: 1,
      question: "What if an outlet is posting misleading content?",
      answer: "If you encounter an outlet posting misleading or inappropriate content, you can report it directly from the post or profile page. Our team will review the content against our guidelines and take appropriate action, which may include removing the content or suspending the account."
    },
    {
      id: 2,
      question: "What are VibeNear's content guidelines?",
      answer: "Our content guidelines are designed to ensure VibeNear remains a safe and trusted space for all users. We prohibit content that is: Inaccurate or intentionally misleading. Hateful, discriminatory, or promotes violence. Harassing or abusive to other users. Spam or commercial content not relevant to the local community. Sexually explicit."
    },
    {
      id: 3,
      question: "How do I check the status of my report?",
      answer: "After you submit a report, you will receive an email confirmation. We will notify you of the outcome via email once our team has reviewed and taken action on the reported content. We do not provide real-time updates on report status to protect the privacy of the parties involved."
    }
  ]

  return (
    <div className="flex-1 bg-white tablet:pt-[120px] md:max-tablet:pt-[80px] sm:max-md:pt-[60px] mobile:max-sm:pt-[70px] pt-[80px]">
      <FAQ
        title="Safety Guidelines & Reporting Process"
        data={safetyFAQData}
        type="section"
      />

      <ContactHelp />
      <FeatureSuggestion />
    </div>
  )
}
