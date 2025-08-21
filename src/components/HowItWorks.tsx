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
      animationKey: 'postWhatsPoppin' as keyof Animations,
      title: "Post What's Poppin",
      description: "Share your events and promotions with the community"
    },
    {
      animationKey: 'getRealTimeInsights' as keyof Animations,
      title: "Real-time Insights",
      description: "Get detailed analytics and customer feedback in real-time"
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
          <h2 className="text-5xl font-bold text-center text-[#102C66] font-jakarta">
            How VibeNear
            <span className="font-playfair italic pl-1">
              Works
            </span>
          </h2>
          <div className="text-center text-gray-600">Loading animations...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-15 px-25 bg-[#FEFCFC] min-h-screen">
      <div className="container space-y-12 mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#102C66] font-jakarta">
          How VibeNear
          <span className="font-playfair italic pl-1">
            Works
          </span>
        </h2>

        <div className='flex flex-col items-center gap-y-9'>
          {/* Tabs */}
          <div className="flex justify-center">
            <div className="relative w-lg h-16 bg-[#F5F5F5] rounded-[20px] p-1 flex items-center justify-center gap-x-1">
              {/* Sliding background indicator */}
              <div
                className="absolute top-1 bottom-1 bg-[#102C66] rounded-2xl transition-transform duration-500 cursor-pointer"
                style={{
                  width: '250px',
                  left: '4px',
                  transform: activeTab === 'users' ? 'translateX(0%)' : 'translateX(100%)'
                }}
              />

              <button
                onClick={() => setActiveTab('users')}
                className={`relative cursor-pointer flex-1 px-4 py-3 rounded-2xl font-semibold leading-6 transition-all duration-300 min-w-[140px] ${activeTab === 'users' ? 'text-white' : 'text-[#808286]'}`}
              >
                For Users
              </button>
              <button
                onClick={() => setActiveTab('businesses')}
                className={`relative cursor-pointer flex-1 px-4 py-3 rounded-2xl font-semibold leading-6 transition-all duration-300 min-w-[140px] ${activeTab === 'businesses' ? 'text-white' : 'text-[#808286]'}`}
              >
                For Businesses
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="flex justify-center items-center flex-wrap gap-12 w-fit">
            {(activeTab === 'users' ? userFeatures : businessFeatures).map((feature, index) => (
              <div
                key={index}
                className="bg-white w-[410px] h-[490px] rounded-[44px] border-l-[1px] border-r-[5px] border-b-[5px] border-t-[1px] border-[#0C214C] p-6 pb-9 transition-all duration-300 min-h-[320px] flex flex-col justify-center gap-y-4"
              >
                <div className="w-[300px] h-[300px]">
                  <Lottie
                    animationData={animations[feature.animationKey]}
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className="text-[#0C214C] text-3xl leading-10 font-semibold ">{feature.title}</h3>
                  <p className="text-[#808286] text-lg leading-8">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
