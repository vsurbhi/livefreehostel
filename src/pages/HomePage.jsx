import SEO from '../components/Seo/Seo'
import Hero from '../components/Hero/Hero'
import WhyLiveSection from '../components/WhyLiveSection/WhyLiveSection'
import Stats from '../components/Stats/Stats'
import Destinations from '../components/Destinations/Destinations'
import Testimonials from '../components/Testimonials/Testimonials'
import Workation from '../components/Workation/Workation'
import Social from '../components/Social/Social'
import Awards from '../components/Awards/Awards'
import CTABanner from '../components/CTABanner/CTABanner'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'



export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      if (el) {
        // small delay lets the page finish rendering/painting first
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
      }
      // clear the state so refreshing or revisiting '/' doesn't re-trigger the scroll
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  const title = 'LiveFree Hostels | Backpacker Hostels in Rishikesh, Varanasi & Dehradun'
  const description = 'Budget hostels for backpackers in Rishikesh, Varanasi & Dehradun — dorms, private rooms, rooftop cafes, and a built-in adventure community.'

  return (
    <>
      <SEO 
      title={title}
      description={description}
      path='/' 
       />

      <Hero />
      <WhyLiveSection />
      <Stats />
      <Destinations />
      <Workation />
      <Testimonials />
      <Social />
      <Awards />
      <CTABanner />
    </>
  )
}
