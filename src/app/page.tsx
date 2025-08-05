import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import Search from '../components/Search'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <Blog />
      <Contact />
      <FAQ />
      <Footer />
      
    </>
  )
}
