'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const [htmlContent, setHtmlContent] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadHtmlContent = async () => {
      try {
        const response = await fetch('/files/vibenearterms-conditions.html')
        const html = await response.text()
        setHtmlContent(html)
      } catch (error) {
        console.error('Error loading HTML content:', error)
        setHtmlContent('<p>Error loading content. Please try again later.</p>')
      } finally {
        setLoading(false)
      }
    }

    loadHtmlContent()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#FAFAFA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="text-2xl font-bold text-[#2970FF]">
              VibeNear
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Document Header */}
            <div className="bg-[#102C66] text-white px-8 py-6">
              <h1 className="text-3xl text-white font-bold">VibeNear - Terms and Conditions</h1>
            </div>

            {/* HTML Content */}
            <div className="p-8">
              <div
                className="privacy-policy-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
