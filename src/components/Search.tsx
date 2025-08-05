'use client'

import { useState } from 'react'

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <section className="relative bg-white py-16 lg:py-20 dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[570px] text-center lg:mb-16">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Didn&apos;t find component you were looking for?
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Search from 2400+ components
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-2/3 xl:w-1/2">
            <form onSubmit={handleSearch} className="relative z-20">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="keyword"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base text-gray-900 placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-dark-2 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-400"
                />
                <button
                  type="submit"
                  className="ml-4 rounded-lg bg-black px-8 py-4 text-base font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50/50 to-transparent dark:from-blue-900/20"></div>
    </section>
  )
} 