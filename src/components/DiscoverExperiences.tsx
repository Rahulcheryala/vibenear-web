'use client'

export default function DiscoverExperiences() {
  const topRowCategories = [
    { text: "Laugh Out Loud", color: "bg-blue-100 text-blue-800", emoji: "😄" },
    { text: "Exhibitions and Magic", color: "bg-yellow-100 text-yellow-800", emoji: "🎩" },
    { text: "Theatrical Plays & Dramas", color: "bg-blue-100 text-blue-800", emoji: "🎭" },
    { text: "Screening & Streaming", color: "bg-indigo-100 text-indigo-800", emoji: "🎬" },
    { text: "Explore Culture", color: "bg-green-100 text-green-800", emoji: "🏛️" },
    { text: "Food Festivals & Carnivals", color: "bg-red-100 text-red-800", emoji: "❄️" },
    { text: "Art Exhibitions & Galleries", color: "bg-teal-100 text-teal-800", emoji: "🎨" },
    { text: "Themed Parties", color: "bg-gray-100 text-gray-800", emoji: "🎉" },
    { text: "Family Fun Time", color: "bg-blue-100 text-blue-800", emoji: "👨‍👩‍👧‍👦" },
    { text: "Early Bird & VIP Tickets", color: "bg-purple-100 text-purple-800", emoji: "🎫" }
  ]

  const bottomRowCategories = [
    { text: "Happy Hours", color: "bg-green-100 text-green-800", emoji: "🍸" },
    { text: "Today's Specials", color: "bg-orange-100 text-orange-800", emoji: "🏷️" },
    { text: "Live Screening", color: "bg-purple-100 text-purple-800", emoji: "📺" },
    { text: "Live Events", color: "bg-blue-100 text-blue-800", emoji: "🎤" },
    { text: "Eat In Deals", color: "bg-pink-100 text-pink-800", emoji: "🍽️" },
    { text: "Takeaway Deals", color: "bg-blue-100 text-blue-800", emoji: "🥡" },
    { text: "Catering Packages", color: "bg-yellow-100 text-yellow-800", emoji: "🍳" },
    { text: "Brunch Fun", color: "bg-teal-100 text-teal-800", emoji: "🥐" },
    { text: "Events & Workshops", color: "bg-purple-100 text-purple-800", emoji: "📋" },
    { text: "Night Life", color: "bg-orange-100 text-orange-800", emoji: "🌙" },
    { text: "Dining", color: "bg-orange-100 text-orange-800", emoji: "🍴" }
  ]

  return (
    <section className="py-12 lg:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Row - Moving Left to Right */}
        <div className="flex gap-3 max-w-7xl mx-auto mb-8">
          <div 
            className="flex gap-3"
            style={{
              animation: 'moveLeft 20s linear infinite',
              transform: 'translateX(0)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {topRowCategories.map((category, index) => (
              <span
                key={index}
                className={`${category.color} text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap`}
              >
                <span className="text-base">{category.text}</span>
                <span className="text-base">{category.emoji}</span>
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {topRowCategories.map((category, index) => (
              <span
                key={`duplicate-${index}`}
                className={`${category.color} text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap`}
              >
                <span className="text-base">{category.text}</span>
                <span className="text-base">{category.emoji}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Title Between Rows */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2 className="text-5xl font-bold text-center text-amber-900 mx-8 font-sans tracking-wide">
            DISCOVER EXPERIENCES
          </h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Bottom Row - Moving Right to Left */}
        <div className="flex gap-3 max-w-7xl mx-auto">
          <div 
            className="flex gap-3"
            style={{
              animation: 'moveRight 20s linear infinite',
              transform: 'translateX(-50%)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {bottomRowCategories.map((category, index) => (
              <span
                key={index}
                className={`${category.color} text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap`}
              >
                <span className="text-base">{category.text}</span>
                <span className="text-base">{category.emoji}</span>
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {bottomRowCategories.map((category, index) => (
              <span
                key={`duplicate-${index}`}
                className={`${category.color} text-sm font-medium px-3 py-1.5 rounded-full flex items-center gap-2 whitespace-nowrap`}
              >
                <span className="text-base">{category.text}</span>
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
