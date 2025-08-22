'use client'

export default function DiscoverExperiences() {
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
    { text: "Night Life", color: "bg-orange-50 text-orange-800 border border-orange-400", emoji: "🌙" },
    { text: "Dining", color: "bg-orange-50 text-orange-800 border border-orange-400", emoji: "🍴" }
  ]

  return (
    <section className="py-5 mobile:py-9 px-12 bg-[#FDFAEF] overflow-hidden mobile:h-[213px] h-[161px] grid place-content-center">
      <div className="flex flex-col gap-y-6">
        {/* Top Row - Moving Left to Right */}
        <div className="flex max-w-7xl mx-auto h-6">
          <div
            className="flex gap-6"
            style={{
              animation: 'moveLeft 25s linear infinite',
              transform: 'translateX(0)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {topRowCategories.map((category, index) => (
              <span
                key={index}
                className={`${category.color} px-2 py-1 rounded-full flex justify-center items-center gap-1 whitespace-nowrap`}
              >
                <span className="text-base">{category.emoji}</span>
                <span className="text-xs font-medium leading-[22px] text-[#4D5055]">{category.text}</span>
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {topRowCategories.map((category, index) => (
              <span
                key={`duplicate-${index}`}
                className={`${category.color} px-2 py-1 rounded-full flex justify-center items-center gap-1 whitespace-nowrap`}
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
            className="flex gap-6"
            style={{
              animation: 'moveRight 25s linear infinite',
              transform: 'translateX(-50%)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {bottomRowCategories.map((category, index) => (
              <span
                key={index}
                className={`${category.color} px-2 py-1 rounded-full flex justify-center items-center gap-1 whitespace-nowrap`}
              >
                <span className="text-xs font-medium leading-[22px] text-[#4D5055]">{category.text}</span>
                <span className="text-base">{category.emoji}</span>
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {bottomRowCategories.map((category, index) => (
              <span
                key={`duplicate-${index}`}
                className={`${category.color} px-2 py-1 rounded-full flex justify-center items-center gap-1 whitespace-nowrap`}
              >
                <span className="text-xs font-medium leading-[22px] text-[#4D5055]">{category.text}</span>
                <span className="text-base">{category.emoji}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes moveLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @keyframes moveRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `
      }} />
    </section>
  )
}
