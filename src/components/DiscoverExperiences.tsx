'use client'

import { useRef } from 'react'

export default function DiscoverExperiences() {
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  const NORMAL_DURATION_S = 30
  const SPEED_NORMAL = 1
  const SPEED_SLOW = 0.4

  const getProgress = (el: HTMLElement, durationSec: number): number => {
    const anim = el.getAnimations?.()[0]
    if (anim && typeof anim.currentTime === 'number') {
      const currentMs = anim.currentTime as number
      const durationMs = durationSec * 1000
      return ((currentMs % durationMs) / durationMs) || 0
    }
    return 0
  }

  const setSpeedWithFallback = (el: HTMLElement, speedFactor: number) => {
    const anim = el.getAnimations?.()[0]
    if (anim && 'playbackRate' in anim) {
      // Preferred: change playbackRate to avoid restarts or jumps
      anim.playbackRate = speedFactor
      return
    }
    // Fallback: change duration but preserve phase using negative delay
    const currentProgress = getProgress(el, NORMAL_DURATION_S)
    const newDurationSec = NORMAL_DURATION_S / speedFactor
    el.style.animationDuration = `${newDurationSec}s`
    el.style.animationDelay = `${-currentProgress * newDurationSec}s`
  }

  const handleEnterTop = () => {
    if (topRowRef.current) setSpeedWithFallback(topRowRef.current, SPEED_SLOW)
  }
  const handleLeaveTop = () => {
    if (topRowRef.current) setSpeedWithFallback(topRowRef.current, SPEED_NORMAL)
  }
  const handleEnterBottom = () => {
    if (bottomRowRef.current) setSpeedWithFallback(bottomRowRef.current, SPEED_SLOW)
  }
  const handleLeaveBottom = () => {
    if (bottomRowRef.current) setSpeedWithFallback(bottomRowRef.current, SPEED_NORMAL)
  }

  const topRowCategories = [
    { text: "Laugh Out Loud", color: "bg-blue-50 text-blue-800 border border-blue-400", emoji: "😄" },
    { text: "Exhibitions and Magic", color: "bg-yellow-50 text-yellow-800 border border-yellow-400", emoji: "🎩" },
    { text: "Theatrical Plays & Dramas", color: "bg-blue-50 text-blue-800 border border-blue-400", emoji: "🎭" },
    { text: "Screening & Streaming", color: "bg-indigo-50 text-indigo-800 border border-indigo-400", emoji: "🎬" },
    { text: "Explore Culture", color: "bg-green-50 text-green-800 border border-green-400", emoji: "🏛️" },
    { text: "Food Festivals & Carnivals", color: "bg-red-50 text-red-800 border border-red-400", emoji: "❄️" },
    { text: "Art Exhibitions & Galleries", color: "bg-teal-50 text-teal-800 border border-teal-400", emoji: "🎨" },
    { text: "Themed Parties", color: "bg-gray-50 text-gray-800 border border-gray-400", emoji: "🎉" },
    { text: "Family Fun Time", color: "bg-blue-50 text-blue-800 border border-blue-400", emoji: "👨‍👩‍👧‍👦" },
    { text: "Early Bird & VIP Tickets", color: "bg-purple-50 text-purple-800 border border-purple-400", emoji: "🎫" }
  ]

  const bottomRowCategories = [
    { text: "Happy Hours", color: "bg-green-50 text-green-800 border border-green-400", emoji: "🍸" },
    { text: "Today's Specials", color: "bg-orange-50 text-orange-800 border border-orange-400", emoji: "🏷️" },
    { text: "Live Screening", color: "bg-purple-50 text-purple-800 border border-purple-400", emoji: "📺" },
    { text: "Live Events", color: "bg-blue-50 text-blue-800 border border-blue-400", emoji: "🎤" },
    { text: "Eat In Deals", color: "bg-pink-50 text-pink-800 border border-pink-400", emoji: "🍽️" },
    { text: "Takeaway Deals", color: "bg-blue-50 text-blue-800 border border-blue-400", emoji: "🥡" },
    { text: "Catering Packages", color: "bg-yellow-50 text-yellow-800 border border-yellow-400", emoji: "🍳" },
    { text: "Brunch Fun", color: "bg-teal-50 text-teal-800 border border-teal-400", emoji: "🥐" },
    { text: "Events & Workshops", color: "bg-purple-50 text-purple-800 border border-purple-400", emoji: "📋" },
    { text: "Night Life", color: "bg-orange-50 text-orange-800 border border-orange-400", emoji: "🍹" },
    { text: "Dining", color: "bg-orange-50 text-orange-800 border border-orange-400", emoji: "🍴" }
  ]

  return (
    <section className="py-5 mobile:py-9 px-12 bg-[#FDFAEF] overflow-hidden mobile:h-[213px] h-[161px] grid place-content-center">
      <div className="flex flex-col gap-y-6">
        {/* Top Row - Moving Left to Right */}
        <div className="flex max-w-7xl mx-auto h-6">
          <div
            ref={topRowRef}
            className="flex gap-6"
            style={{
              animation: `moveLeft ${NORMAL_DURATION_S}s linear infinite`,
              transform: 'translateX(0)'
            }}
            onMouseEnter={handleEnterTop}
            onMouseLeave={handleLeaveTop}
          >
            {topRowCategories.map((category, index) => (
              <span
                key={index}
                className={`${category.color} px-2 py-1 rounded-full flex justify-center items-center gap-1 whitespace-nowrap select-none`}
              >
                <span className="text-base">{category.emoji}</span>
                <span className="text-xs font-medium leading-[22px] text-[#4D5055]">{category.text}</span>
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {topRowCategories.map((category, index) => (
              <span
                key={`duplicate-${index}`}
                className={`${category.color} px-2 py-1 rounded-full flex justify-center items-center gap-1 whitespace-nowrap select-none`}
              >
                <span className="text-base">{category.emoji}</span>
                <span className="text-xs font-medium leading-[22px] text-[#4D5055]">{category.text}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Title Between Rows */}
        <div className="flex items-center justify-center">
          <h2 className="tablet:text-4xl mobile:text-2xl text-[20px] font-extrabold text-[#493E1E] leading-[45px]">
            DISCOVER EXPERIENCES
          </h2>
        </div>

        {/* Bottom Row - Moving Right to Left */}
        <div className="flex gap-3 max-w-7xl mx-auto h-6">
          <div
            ref={bottomRowRef}
            className="flex gap-6"
            style={{
              animation: `moveRight ${NORMAL_DURATION_S}s linear infinite`,
              transform: 'translateX(-50%)'
            }}
            onMouseEnter={handleEnterBottom}
            onMouseLeave={handleLeaveBottom}
          >
            {bottomRowCategories.map((category, index) => (
              <span
                key={index}
                className={`${category.color} px-2 py-1 rounded-full flex justify-center items-center gap-1 whitespace-nowrap select-none`}
              >
                <span className="text-base">{category.emoji}</span>
                <span className="text-xs font-medium leading-[22px] text-[#4D5055]">{category.text}</span>
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {bottomRowCategories.map((category, index) => (
              <span
                key={`duplicate-${index}`}
                className={`${category.color} px-2 py-1 rounded-full flex justify-center items-center gap-1 whitespace-nowrap select-none`}
              >
                <span className="text-base">{category.emoji}</span>
                <span className="text-xs font-medium leading-[22px] text-[#4D5055]">{category.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
