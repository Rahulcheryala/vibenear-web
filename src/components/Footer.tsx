import Image from 'next/image'
import Link from 'next/link'
import AnimatedBanner from './AnimatedBanner'

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden">
      {/* Animated Banner */}
      <AnimatedBanner />

      {/* Main Footer Content */}
      <div className="pt-[60px] pb-9 tablet:px-[100px] mobile:max-sm:p-10 sm:p-[60px] px-5 bg-[#0C214C] flex flex-col tablet:gap-y-12 gap-y-9">
        <div className="flex flex-wrap justify-between items-start gap-y-9">
          {/* Left Side - Logo and Name */}
          <div className="w-fit">
            <Link href="#" className="tablet:h-[120px] mobile:h-20 h-[72px] flex-shrink-0 flex items-center gap-x-8">
              <Image
                src="/images/logo/Logo.svg"
                alt="VibeNear Logo"
                width={24}
                height={24}
                className="w-24 h-24 rounded-full object-cover"
              />
              <span className="tablet:text-[56px] mobile:text-[38px] text-[34px] font-semibold leading[49px] text-white">VibeNear</span>
            </Link>
          </div>

          {/* Right Side - Company and Follow Us */}
          <div className="flex mobile:flex-row flex-col items-start gap-x-[120px] gap-y-6">
            {/* Company Column */}
            <div className="mobile:space-y-6 space-y-3">
              <h3 className="tablet:text-2xl mobile:text-xl text-lg leading-7 font-bold text-white">
                Company
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#why-vibe-near" className="text-white tablet:text-lg text-base font-semibold leading-5 hover:text-blue-200 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:careers@vibenear.com"
                    className="text-white tablet:text-lg text-base font-semibold leading-5 hover:text-blue-200 transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div className="mobile:space-y-6 space-y-3">
              <h4 className="tablet:text-2xl mobile:text-xl text-lg leading-7 font-bold text-white">
                Follow Us
              </h4>
              <div className="mobile:grid mobile:grid-cols-2 mobile:gap-6 mobile:max-w-[112px] mobile:max-h-[112px] flex flex-nowrap gap-x-9">
                <Link href="#" className="tablet:w-8 tablet:h-8 mobile:w-[28px] mobile:h-[28px] w-6 h-6 flex items-center justify-center">
                  <Image src="/images/sections/XLogo.svg" alt="X" width={32} height={32} />
                </Link>
                <Link href="#" className="tablet:w-8 tablet:h-8 mobile:w-[28px] mobile:h-[28px] w-6 h-6 flex items-center justify-center">
                  <Image src="/images/sections/LinkedinLogo.svg" alt="in" width={32} height={32} />
                </Link>
                <Link href="#" className="tablet:w-8 tablet:h-8 mobile:w-[28px] mobile:h-[28px] w-6 h-6 flex items-center justify-center">
                  <Image src="/images/sections/FacebookLogo.svg" alt="f" width={32} height={32} />
                </Link>
                <Link href="#" className="tablet:w-8 tablet:h-8 mobile:w-[28px] mobile:h-[28px] w-6 h-6 flex items-center justify-center">
                  <Image src="/images/sections/InstagramLogo.svg" alt="t" width={32} height={32} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <div className="border-t border-[#D9D9DA]"></div>

          <div className="flex flex-col mobile:flex-row justify-between mobile:items-center">
            <div className="text-white mobile:text-base text-sm font-normal leading-5 mobile:m-0 mb-6">
              All Rights Reserved
            </div>
            <div className="flex mobile:flex-row flex-col gap-6 mobile:items-center">
              <Link href="/terms_conditions" className="text-white tablet:text-base text-sm font-normal leading-5">Terms of Use</Link>
              <Link href="/privacy_policy" className="text-white tablet:text-base text-sm font-normal leading-5">Privacy Policy</Link>
              <Link href="#" className="text-white tablet:text-base text-sm font-normal leading-5">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
