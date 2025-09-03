'use client'

import { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import discoverByVibe from '../../public/animations/Discover_by_Vibe.json'
import bookmarkAndUpvote from '../../public/animations/Bookmark_and_Upvote.json'
import joinLocalCommunities from '../../public/animations/Join_local_communities.json'
import getRealTimeInsights from '../../public/animations/Get_Real_Time_Insights.json'
import postWhatsPoppin from '../../public/animations/Post_whats_poppin.json'
import oneSimpleFee from '../../public/animations/One_Simple_Fee.json'

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('users')
  const scrollRef = useRef<HTMLDivElement>(null)

  // Reset horizontal scroll position when tab changes
  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }, [activeTab])

  const userFeatures = [
    {
      animation: discoverByVibe,
      title: "Discover by Vibe",
      description: "Find cafes, gigs, near you based on your vibe, time & mood",
      sizes: {
        mobile: {
          animationWidth: "162px",
          animationHeight: "175px"
        },
        tablet: {
          animationWidth: "278px",
          animationHeight: "300px"
        }
      }
    },
    {
      animation: bookmarkAndUpvote,
      title: "Bookmark & Upvote",
      description: "Bookmark places you love & upvote hidden gems",
      sizes: {
        mobile: {
          animationWidth: "175px",
          animationHeight: "175px"
        },
        tablet: {
          animationWidth: "300px",
          animationHeight: "300px"
        }
      }
    },
    {
      animation: joinLocalCommunities,
      title: "Join Local Communities",
      description: "Connect with groups near you and never miss what's happening",
      sizes: {
        mobile: {
          animationWidth: "175px",
          animationHeight: "175px"
        },
        tablet: {
          animationWidth: "302px",
          animationHeight: "300px"
        }
      }
    }
  ]

  const businessFeatures = [
    {
      animation: postWhatsPoppin,
      title: "Post What's Poppin",
      description: "Share your events and promotions with the community",
      sizes: {
        mobile: {
          animationWidth: "175px",
          animationHeight: "175px"
        },
        tablet: {
          animationWidth: "300px",
          animationHeight: "300px"
        }
      }
    },
    {
      animation: getRealTimeInsights,
      title: "Real-time Insights",
      description: "Get detailed analytics and customer feedback in real-time",
      sizes: {
        mobile: {
          animationWidth: "175px",
          animationHeight: "175px"
        },
        tablet: {
          animationWidth: "300px",
          animationHeight: "300px"
        }
      }
    },
    {
      animation: oneSimpleFee,
      title: "One Simple Fee",
      description: "Manage your listings, promotions, and customer interactions",
      sizes: {
        mobile: {
          animationWidth: "175px",
          animationHeight: "175px"
        },
        tablet: {
          animationWidth: "300px",
          animationHeight: "300px"
        }
      }
    }
  ]

  return (
    <section id="how-it-works" className="mobile:py-15 mobile:px-25 mobile:max-sm:px-7 mobile:max-sm:py-10 px-5 py-9 bg-[#FEFCFC] sm:min-h-screen h-fit flex items-end">
      <div className="container sm:space-y-12 mobile:space-y-8 space-y-5 mx-auto">
        <h2 className="tablet:text-5xl mobile:text-4xl text-[32px] tablet:leading-16 mobile:leading-12 leading-11 tablet:font-bold font-semibold text-center text-[#102C66] font-jakarta">
          How VibeNear
          <span className="font-playfair pl-1">
            Works
          </span>
        </h2>

        <div className='flex flex-col items-center gap-y-9'>
          {/* Tabs */}
          <div className="flex justify-center">
            <div className="relative tablet:w-lg tablet:h-16 sm:w-[452px] sm:h-14 w-[353px] h-[50px] bg-[#F5F5F5] rounded-[20px] p-1 flex items-center justify-center gap-x-1">
              {/* Sliding background indicator */}
              <div
                className={`absolute w-[calc(50%-4px)] top-1 bottom-1 left-1 bg-[#102C66] rounded-2xl transition-transform duration-500 cursor-pointer ${activeTab === 'users' ? 'translate-x-0' : 'translate-x-full'}`}
              />

              <button
                onClick={() => setActiveTab('users')}
                className={`relative cursor-pointer flex-1 px-4 py-3 rounded-2xl font-semibold tablet:text-xl mobile:text-lg text-base mobile:leading-6 leading-5 transition-all duration-300 min-w-[140px] ${activeTab === 'users' ? 'text-white' : 'text-[#4D5055]'}`}
              >
                For Users
              </button>
              <button
                onClick={() => setActiveTab('businesses')}
                className={`relative cursor-pointer flex-1 px-4 py-3 rounded-2xl font-semibold tablet:text-xl mobile:text-lg text-base mobile:leading-6 leading-5 transition-all duration-300 min-w-[140px] ${activeTab === 'businesses' ? 'text-white' : 'text-[#4D5055]'}`}
              >
                For Businesses
              </button>
            </div>
          </div>

          {/* Feature Cards Container */}
          <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide snap-x sm:snap-proximity snap-mandatory scroll-smooth mobile:max-sm:px-14 px-8 sm:px-0">
            <div className="mx-auto flex justify-start items-center tablet:gap-12 mobile:gap-7 gap-5 w-max">
              {(activeTab === 'users' ? userFeatures : businessFeatures).map((feature, index) => {
                return (
                  <div
                    key={index}
                    className={`bg-white tablet:w-[410px] tablet:h-[490px] w-[240px] h-[305px] tablet:rounded-[44px] rounded-[26px] border-[#1B1E25] border-l-[1px] border-t-[1px] tablet:border-r-[5px] tablet:border-b-[5px] border-r-[3px] border-b-[3px] tablet:p-6 tablet:pb-9 p-[14px] pb-[21px] transition-all duration-300 min-h-[320px] flex flex-col justify-center tablet:gap-y-4 gap-y-[9px] flex-shrink-0 snap-center`}
                  >
                    <div
                      style={{
                        '--mobile-width': feature.sizes.mobile.animationWidth,
                        '--mobile-height': feature.sizes.mobile.animationHeight,
                        '--tablet-width': feature.sizes.tablet.animationWidth,
                        '--tablet-height': feature.sizes.tablet.animationHeight,
                        maxWidth: 'var(--mobile-width)',
                        maxHeight: 'var(--mobile-height)'
                      } as React.CSSProperties & { [key: string]: string }}
                    >
                      <Lottie
                        animationData={feature.animation}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <div className='flex flex-col tablet:gap-2 gap-1'>
                      <h3 className="text-[#0C214C] tablet:text-3xl mobile:text-lg tablet:leading-10 mobile:leading-[22px] font-semibold ">{feature.title}</h3>
                      <p className="text-[#4D5055] tablet:text-lg mobile:text-sm tablet:leading-8 mobile:leading-[20px] font-normal">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
