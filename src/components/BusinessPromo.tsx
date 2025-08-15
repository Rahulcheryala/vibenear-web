'use client'

export default function BusinessPromo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Section - Text and CTA */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Running a local business? <span className="italic font-serif">Start free.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get discovered by nearby users. No commission. No catch.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="text-2xl">🎈</div>
                <span className="text-gray-700">Post across multiple locations</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl">📊</div>
                <span className="text-gray-700">Track insights and performance</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl">👁️</div>
                <span className="text-gray-700">Stay visible on nearby user feeds</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl">📅</div>
                <span className="text-gray-700">Schedule content with ease</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl">💼</div>
                <span className="text-gray-700">Get priority help when needed</span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                <span className="text-red-500">🚩</span>
                <span className="text-sm font-medium text-red-700">Early Bird Offer</span>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors duration-200">
                List My Outlet for Free
              </button>
            </div>
          </div>

          {/* Right Section - Mobile Phone Mockups */}
          <div className="relative flex justify-end">
            {/* Left Phone - Onboarding */}
            <div className="absolute -left-4 -top-8 w-64 h-96 bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-lg transform rotate-12">
              <div className="text-center space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">VibeNear</h3>
                <div className="text-4xl mb-2">📢</div>
                <h4 className="font-bold text-gray-900">Showcase Your Outlet</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Add events, offers, & photos to help people discover you faster
                </p>
                <div className="space-y-2 mt-4">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium">Sign Up</button>
                  <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium">Login</button>
                </div>
              </div>
            </div>

            {/* Right Phone - Insights */}
            <div className="relative w-64 h-96 bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-lg">
              <div className="space-y-6">
                {/* Status Bar */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600 font-medium">Online</span>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button className="flex-1 py-2 px-3 text-xs text-gray-600 rounded-md">Today</button>
                  <button className="flex-1 py-2 px-3 text-xs bg-blue-600 text-white rounded-md">Weekly</button>
                  <button className="flex-1 py-2 px-3 text-xs text-gray-600 rounded-md">Monthly</button>
                </div>

                {/* Followers Section */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">👥</span>
                    <h4 className="font-bold text-gray-900 text-sm">Followers</h4>
                  </div>
                  <p className="text-xs text-gray-600">People who followed your outlet to see updates and posts</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">752</span>
                    <span className="text-xs text-green-600">+8%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-yellow-600">
                    <span>⭐</span>
                    <span>That&apos;s your fastest growth in the last 4 weeks!</span>
                  </div>
                </div>

                {/* Page Visits Section */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">👁️</span>
                    <h4 className="font-bold text-gray-900 text-sm">Page Visits</h4>
                  </div>
                  <p className="text-xs text-gray-600">People who viewed your outlet page</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">1,218</span>
                    <span className="text-xs text-green-600">+12%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-yellow-600">
                    <span>🌻</span>
                    <span>Highest since April - story posts are working!</span>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex justify-around pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-gray-400 text-lg">🏠</div>
                    <span className="text-xs text-gray-400">Home</span>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-600 text-lg">📊</div>
                    <span className="text-xs text-blue-600 font-medium">Insights</span>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-lg">➕</div>
                    <span className="text-xs text-gray-400">Create</span>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-lg">👤</div>
                    <span className="text-xs text-gray-400">Profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
