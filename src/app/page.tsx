import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import DiscoverExperiences from '../components/DiscoverExperiences'
import HowItWorks from '../components/HowItWorks'
import WhyVibeNear from '../components/WhyVibeNear'
import BusinessPromo from '../components/BusinessPromo'
import CampusPromo from '../components/CampusPromo'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <DiscoverExperiences />
        {/* <Search /> */}
        {/* <Blog /> */}
        <HowItWorks />
        <WhyVibeNear />
        <BusinessPromo />
        <CampusPromo />
        <Contact />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}
