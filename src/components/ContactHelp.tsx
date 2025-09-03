'use client'

import Image from 'next/image'

export default function ContactHelp() {
  const handleWhatsAppClick = () => {
    const whatsappNumber = '9030656522'

    const message = encodeURIComponent(
      'Hi! I need help with VibeNear support. Could you please assist me?'
    )

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

    try {
      window.open(whatsappUrl, '_blank')

      setTimeout(() => {
        const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`
        window.open(whatsappWebUrl, '_blank')
      }, 1000)
    } catch (error) {
      console.error('Error opening WhatsApp:', error)
      window.open(`https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`, '_blank')
    }
  }

  const handleEmailClick = () => {
    const supportEmail = 'careers@vibenear.com'

    const subject = encodeURIComponent('VibeNear Support Request')
    const body = encodeURIComponent(
      'Hi VibeNear Support Team,\n\nI need assistance with:\n\n[Please describe your issue here]\n\nThank you for your help!\n\nBest regards,'
    )

    const mailtoUrl = `mailto:${supportEmail}?subject=${subject}&body=${body}`

    try {
      window.open(mailtoUrl, '_blank')
    } catch (error) {
      console.error('Error opening email client:', error)
      window.open(`mailto:${supportEmail}`, '_blank')
    }
  }

  return (
    <div className="bg-white flex justify-center items-center tablet:p-[60px] py-9 px-5">
      <div className="tablet:p-9 mobile:p-6 p-0 flex flex-col justify-start items-center tablet:gap-y-12 gap-y-9">
        <div className="tablet:space-y-4 mobile:space-y-2 space-y-0 max-w-[600px] text-center">
          <div className="text-[#0C214C] tablet:text-5xl mobile:text-4xl text-[28px] tablet:leading-[60px] mobile:leading-[48px] leading-9 font-bold">
            Still need help?
          </div>
          <div className="text-[#1B1E25] tablet:text-[28px] mobile:text-2xl text-xl leading-8 font-semibold">
            If you couldn&apos;t find your answer, we&apos;re here for you. Reach out anytime:
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-x-6 gap-y-3">
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="sm:w-[468px] w-full min-w-[353px] sm:h-[104px] h-[76px] sm:px-8 sm:py-7 px-6 py-4 bg-[#EAFBEE] rounded-xl border border-[#21AB46] hover:bg-[#ebfff0] transition-colors duration-200"
          >
            <div className="flex justify-between items-center gap-6">
              <div className="text-[#21AB46] sm:text-2xl text-xl font-semibold leading-[44px] whitespace-nowrap">
                Talk to us on Whatsapp
              </div>
              <div className='sm:w-12 sm:h-12 w-9 h-9 flex-shrink-0 relative'>
                <Image src="/images/icons/WhatsappLogo.svg" alt="Whatsapp" fill className='sm:w-12 sm:h-12 w-9 h-9 flex-shrink-0' />
              </div>
            </div>
          </button>

          {/* Email Button */}
          <button
            onClick={handleEmailClick}
            className="sm:w-[468px] w-full min-w-[353px] sm:h-[104px] h-[76px] sm:px-8 sm:py-7 px-6 py-4 bg-white rounded-xl border border-[#D9D9DA] hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex justify-between items-center gap-6">
              <div className="text-[#4D5055] sm:text-2xl text-xl font-semibold leading-[44px] whitespace-nowrap">
                Send us Mail
              </div>
              <div className='sm:w-12 sm:h-12 w-9 h-9 flex-shrink-0 relative'>
                <Image src="/images/icons/EnvelopeSimple.svg" alt="Email" fill className='sm:w-12 sm:h-12 w-9 h-9 flex-shrink-0' />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
