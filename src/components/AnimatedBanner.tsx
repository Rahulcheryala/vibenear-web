'use client'

export default function AnimatedBanner() {
  const bannerItems = [
    { text: "VibeNear is built", icon: "🧩" },
    { text: "VibeNear is built", icon: "🌍" },
    { text: "VibeNear is built", icon: "🔥" },
    { text: "VibeNear is built", icon: "⚡" }
  ]

  return (
    <div className="h-16 py-4 px-12 flex items-center gap-x-12 overflow-hidden bg-[#102C66]">
      <div className="flex gap-6 max-w-7xl mx-auto">
        <div
          className="flex gap-6"
          style={{
            animation: 'moveLeft 15s linear infinite',
            transform: 'translateX(0)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          {bannerItems.map((item, index) => (
            <span
              key={index}
              className="text-white text-2xl font-bold flex items-center gap-6 whitespace-nowrap"
            >
              <span className="mobile:text-[32px] text-2xl">{item.icon}</span>
              <p className="tablet:text-2xl mobile:text-xl text-base">{item.text} <span className='font-playfair'>different</span></p>
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {bannerItems.map((item, index) => (
            <span
              key={`duplicate-${index}`}
              className="text-white text-2xl font-bold flex items-center gap-6 whitespace-nowrap"
            >
              <span className="mobile:text-[32px] text-2xl">{item.icon}</span>
              <p className="tablet:text-2xl mobile:text-xl text-base">{item.text} <span className='font-playfair'>different</span></p>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
