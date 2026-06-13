import AboutUs from "../components/AboutUs"
import Clients from "../components/Clients"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import History from "../components/History"
import Loads from "../components/Loads"
import BitrenShowcase from "../components/BitrenShowcase"
import PLaces from "../components/Places"
import WhatsAppButton from "../components/WhatsAppButton"

function Layout() {
  return (
    <>
      <WhatsAppButton />
      <Hero />
      <AboutUs />
      <History />
      <PLaces />
      <Loads />
      <BitrenShowcase />
      <Clients />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout
