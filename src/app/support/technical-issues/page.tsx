'use client'

import FAQ from '@/components/FAQ'
import ContactHelp from '@/components/ContactHelp'
import FeatureSuggestion from '@/components/FeatureSuggestion'

export default function TechnicalIssuesPage() {
  const technicalFAQData = [
    {
      id: 1,
      question: "Why am I not receiving the OTP while logging in?",
      answer: "First, please ensure that you have a stable internet connection or cellular signal. Check that you have entered the correct phone number. Make sure that your device's storage and message inbox are not full. If the issue persists, try restarting your device, clearing the app's cache, or checking your device's settings to ensure that messages from unknown numbers are not being blocked."
    },
    {
      id: 2,
      question: "The app keeps crashing / won't open. What should I do?",
      answer: "Try force-stopping and reopening the app. Restart your device to clear temporary glitches. Ensure that you have the latest version of the app installed from your app store. Clear the app's cache and data from your device's settings. If the problem continues, uninstall and reinstall the app."
    },
    {
      id: 3,
      question: "Why is my location not showing correctly?",
      answer: "Ensure that location services are enabled for the VibeNear app in your device's settings. Check your internet connection, as a weak signal can cause location inaccuracies. Try restarting the app or your device to refresh your location. If you are in an area with poor GPS signal (e.g., indoors or in a dense urban area), your location might be less accurate."
    },
    {
      id: 4,
      question: "Why can't I upload photos or files?",
      answer: "First, confirm that VibeNear has permission to access your device's photos and media in your phone's settings. Check your internet connection. A slow or unstable connection can cause upload failures. Ensure that the file size is within the app's limits. If the app is crashing during the upload, try clearing its cache or restarting your device."
    },
  ]

  return (
    <div className="flex-1 bg-white tablet:pt-[120px] md:max-tablet:pt-[80px] sm:max-md:pt-[60px] mobile:max-sm:pt-[70px] pt-[80px]">
      <FAQ
        title="Common Technical Issues & Solutions"
        data={technicalFAQData}
        type="section"
      />

      <ContactHelp />
      <FeatureSuggestion />
    </div>
  )
}
