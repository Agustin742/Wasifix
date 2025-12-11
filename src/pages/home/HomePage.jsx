import Footer from "../../components/layout/Footer"
import NavBar from "../../components/layout/NavBar"
import CTASection from "./sections/CTASection"
import HeroSection from "./sections/HeroSection"
import HowItWorksSection from "./sections/HowItWorksSection"
import ContactSection from "./sections/ContactSection"
import SearchSection from "./sections/SearchSection"
import ServicesSection from "./sections/ServicesSection"


const HomePage = () => {
  return (
    <div div className="bg-[url('../../public/imgs/mockups/manos.jpg')] bg-fixed bg-cover bg-center bg-no-repeat bg-black/70 bg-blend-overlay pb-4">
      <NavBar />

      <HeroSection />
      <SearchSection />
      <ServicesSection />
      <CTASection />
      <HowItWorksSection />
      <ContactSection />

      <Footer />

    </div>

  )
}

export default HomePage


