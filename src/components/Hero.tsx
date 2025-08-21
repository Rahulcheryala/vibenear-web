'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-110px)] bg-[#FEFCFC] p-[60px] pb-0 flex flex-col overflow-hidden">
      {/* Ellipse Background */}
      {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-screen h-[400px] bg-[#FFF8DC] rounded-t-full"></div> */}
      <div className="w-[1724px] aspect-square bg-[#FFF8DC] rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[70%] overflow-hidden"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-[72px] font-bold text-[#102C66] mb-8 leading-tight">
          Live Local Discovery,<br />
          like<span className="font-playfair italic"> never before</span>
        </h1>
      </div>

      {/* Hero Image positioned on ellipse */}
      <div className="flex-1 h-full relative z-10 flex justify-center">
        <Image
          src="/images/sections/Hero.svg"
          alt="Hero Illustration"
          width={454}
          height={454}
          className="w-auto h-auto"
        />
      </div>
    </section>
  )
}
