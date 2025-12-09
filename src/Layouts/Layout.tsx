// import Contact from "../components/Contact"
// import Features from "../components/Feature"
// import Footer from "../components/Footer"
// import Info from "../components/Info"
// import Products from "../components/Products"
// import Technology from "../components/Technology"

import AboutUs from "../components/AboutUs"
import Clients from "../components/Clients"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import History from "../components/History"
import Loads from "../components/Loads"
import PLaces from "../components/Places"
import WhatsAppButton from "../components/WhatsAppButton"



function Layout() {

  return (
    <>
    <WhatsAppButton/>
    <Hero/>
    <AboutUs />
    <History/>
    <PLaces/>
     <Loads />
    <Clients/>
    <Contact/>
    <Footer/> 
   {/*  <Features/>
    <Products/>
    <Info/>
   
    */}
    </>
  )
}

export default Layout
