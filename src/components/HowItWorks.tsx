'use client'

import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'

interface Animations {
  discoverByVibe: Record<string, unknown>
  bookmarkAndUpvote: Record<string, unknown>
  joinLocalCommunities: Record<string, unknown>
  getRealTimeInsights: Record<string, unknown>
  postWhatsPoppin: Record<string, unknown>
  oneSimpleFee: Record<string, unknown>
}

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('users')
  const [animations, setAnimations] = useState<Animations | null>(null)

  useEffect(() => {
    // Dynamic imports to avoid Turbopack HMR issues
    const loadAnimations = async () => {
      try {
        const [
          discoverByVibe,
          bookmarkAndUpvote,
          joinLocalCommunities,
          getRealTimeInsights,
          postWhatsPoppin,
          oneSimpleFee
        ] = await Promise.all([
          import('../../public/animations/Discover_by_Vibe.json'),
          import('../../public/animations/Bookmark_and_Upvote.json'),
          import('../../public/animations/Join_local_communities.json'),
          import('../../public/animations/Get_Real_Time_Insights.json'),
          import('../../public/animations/Post_whats_poppin.json'),
          import('../../public/animations/One_Simple_Fee.json')
        ])

        setAnimations({
          discoverByVibe: discoverByVibe.default,
          bookmarkAndUpvote: bookmarkAndUpvote.default,
          joinLocalCommunities: joinLocalCommunities.default,
          getRealTimeInsights: getRealTimeInsights.default,
          postWhatsPoppin: postWhatsPoppin.default,
          oneSimpleFee: oneSimpleFee.default
        })
      } catch (error) {
        console.error('Error loading animations:', error)
      }
    }

    loadAnimations()
  }, [])

  const userFeatures = [
    {
      animationKey: 'discoverByVibe' as keyof Animations,
      title: "Discover by Vibe",
      description: "Find cafes, gigs, near you based on your vibe, time & mood"
    },
    {
      animationKey: 'bookmarkAndUpvote' as keyof Animations,
      title: "Bookmark & Upvote",
      description: "Bookmark places you love & upvote hidden gems"
    },
    {
      animationKey: 'joinLocalCommunities' as keyof Animations,
      title: "Join Local Communities",
      description: "Connect with groups near you and never miss what's happening"
    }
  ]

  const businessFeatures = [
    {
      animationKey: 'getRealTimeInsights' as keyof Animations,
      title: "Real-time Insights",
      description: "Get detailed analytics and customer feedback in real-time"
    },
    {
      animationKey: 'postWhatsPoppin' as keyof Animations,
      title: "Post What's Poppin",
      description: "Share your events and promotions with the community"
    },
    {
      animationKey: 'oneSimpleFee' as keyof Animations,
      title: "One Simple Fee",
      description: "Manage your listings, promotions, and customer interactions"
    }
  ]

  // Don't render until animations are loaded
  if (!animations) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-serif">
            How VibeNear Works
          </h2>
          <div className="text-center text-gray-600">Loading animations...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-serif">
          How VibeNear Works
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex shadow-sm">
            <button
              onClick={() => setActiveTab('users')}
              className={`px-8 py-3 rounded-md font-medium text-base transition-all duration-200 min-w-[140px] ${
                activeTab === 'users'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              For Users
            </button>
            <button
              onClick={() => setActiveTab('businesses')}
              className={`px-8 py-3 rounded-md font-medium text-base transition-all duration-200 min-w-[140px] ${
                activeTab === 'businesses'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/60'
              }`}
            >
              For Businesses
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 w-full">
          {(activeTab === 'users' ? userFeatures : businessFeatures).map((feature, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:border-blue-300 min-h-[320px] flex flex-col justify-center"
            >
              <div className="w-64 h-64 mx-auto mb-6">
                <Lottie 
                  animationData={animations[feature.animationKey]}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
