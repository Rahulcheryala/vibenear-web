'use client'

import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import DiscoverExperiences from '../components/DiscoverExperiences'
import Footer from '../components/Footer'

// Dynamic imports for below-the-fold components to reduce initial bundle size
const HowItWorks = dynamic(() => import('../components/HowItWorks'), {
  loading: () => <div className="h-screen bg-[#FEFCFC] animate-pulse" />,
  ssr: true
})

const WhyVibeNear = dynamic(() => import('../components/WhyVibeNear'), {
  loading: () => <div className="h-screen bg-[#FEFCFC] animate-pulse" />,
  ssr: true
})

const BusinessPromo = dynamic(() => import('../components/BusinessPromo'), {
  loading: () => <div className="h-screen bg-[#FEFCFC] animate-pulse" />,
  ssr: true
})

const CampusPromo = dynamic(() => import('../components/CampusPromo'), {
  loading: () => <div className="h-screen bg-[#FEFCFC] animate-pulse" />,
  ssr: true
})

const FAQ = dynamic(() => import('../components/FAQ'), {
  loading: () => <div className="h-screen bg-[#FEFCFC] animate-pulse" />,
  ssr: true
})

const AppShowcase = dynamic(() => import('../components/AppShowcase'), {
  loading: () => <div className="h-screen bg-[#FDFAEF] animate-pulse" />,
  ssr: true
})

const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <div className="h-screen bg-white animate-pulse" />,
  ssr: true
})

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="mobile:snap-y mobile:snap-proximity h-dvh overflow-y-auto overflow-x-hidden scroll-smooth">
        <section className="snap-start"><Navbar /></section>
        <Hero />
        <section className="mobile:snap-start"><DiscoverExperiences /></section>
        <section className="mobile:snap-center min-h-fit"><HowItWorks /></section>
        <section className="mobile:snap-start min-h-screen"><WhyVibeNear /></section>
        <section className="mobile:snap-start min-h-screen"><BusinessPromo /></section>
        <section className="mobile:snap-start min-h-screen"><CampusPromo /></section>
        <section className="mobile:snap-start min-h-screen"><FAQ /></section>
        <section className="mobile:snap-start min-h-screen"><AppShowcase /></section>
        <section className="mobile:snap-start min-h-screen"><Contact /></section>
        <section className="mobile:snap-end"><Footer /></section>
      </div>

    </div>
  )
}
