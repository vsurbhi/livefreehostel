import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import BackToTop from './components/BackToTop/BackToTop'


export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <BackToTop />
      <WhatsAppButton />
      <Footer />
    </>
  )
}