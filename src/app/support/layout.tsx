import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {children}
      <Footer animateBanner={false} />
    </div>
  )
}
