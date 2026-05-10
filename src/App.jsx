import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Cars       from './components/Cars'
import WhyUs      from './components/WhyUs'
import Fleet      from './components/Fleet'
import Gallery    from './components/Gallery'
import About      from './components/About'
import Reviews    from './components/Reviews'
import CTABanner  from './components/CTABanner'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import WAFloat    from './components/WAFloat'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Cars />
        <WhyUs />
        <Fleet />
        <Gallery />
        <About />
        <Reviews />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WAFloat />
    </>
  )
}
