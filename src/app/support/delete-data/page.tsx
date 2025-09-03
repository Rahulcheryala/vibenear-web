'use client'

import FAQ from '@/components/FAQ'
import ContactHelp from '@/components/ContactHelp'
import Link from 'next/link'
import FeatureSuggestion from '@/components/FeatureSuggestion'

export default function DeleteDataPage() {
  const deleteDataFAQData = [
    {
      id: 1,
      question: "How can I permanently delete my account and data?",
      answer: "To permanently delete your VibeNear data, navigate to the 'Delete my Data' section in your settings and click on 'Delete VibeNear Data.' If you have a business or organization page, you can also delete that by selecting 'Delete VibeNear Spaces Data.'"
    },
    {
      id: 2,
      question: "What happens when I delete my data?",
      answer: "When you delete your data, it is permanently removed from our platform, and you will no longer have access to your account. Your personal information, activity, and any content you have created will be erased."
    },
    {
      id: 3,
      question: "Can I recover my account after deletion?",
      answer: "No, once your account and data are permanently deleted, they cannot be recovered. The deletion process is irreversible to ensure your privacy."
    },
    {
      id: 4,
      question: "Does deleting my data also delete my outlet page (VibeNear Spaces)?",
      answer: "Deleting your personal VibeNear account data does not automatically delete your VibeNear Spaces outlet page. These are managed separately to allow businesses and organizations to handle their public presence independently. To delete your outlet page, you must specifically select 'Delete VibeNear Spaces Data.'"
    },
    {
      id: 5,
      question: "How long does it take for my data to be deleted?",
      answer: "Once you initiate the deletion process, your data is queued for permanent removal. The process is typically completed within a few business days. While your data is being removed, your account will be inaccessible."
    }
  ]

  return (
    <div className="flex-1 bg-white tablet:pt-[120px] md:max-tablet:pt-[80px] sm:max-md:pt-[60px] mobile:max-sm:pt-[70px] pt-[80px]">
      <FAQ
        title="Account & Data Deletion Information"
        data={deleteDataFAQData}
        type="section"
      />

      {/* Action Buttons Section */}
      <div className="max-w-4xl mx-auto mobile:mt-6">
        <div className="flex flex-col lg:flex-row gap-x-6 tablet:gap-y-6 gap-y-3 justify-center items-center">
          <Link
            href="/support/delete-data/user-account"
            className="md:min-w-[468px] min-w-[353px] md:px-8 md:py-7 px-6 py-4 bg-white border border-[#2970FF] rounded-xl text-[#2970FF] md:text-2xl text-xl font-semibold leading-[44px] text-center"
          >
            Delete My Account (User App)
          </Link>

          <Link
            href="/support/delete-data/outlet-account"
            className="md:min-w-[468px] min-w-[353px] md:px-8 md:py-7 px-6 py-4 bg-white border border-[#2970FF] rounded-xl text-[#2970FF] md:text-2xl text-xl font-semibold leading-[44px] text-center"
          >
            Delete My Outlet (Spaces App)
          </Link>
        </div>
      </div>

      <ContactHelp />
      <FeatureSuggestion />
    </div>
  )
}
