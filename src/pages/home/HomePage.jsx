import Footer from "../../components/layout/Footer"
import NavBar from "../../components/layout/NavBar"
import CTASection from "./sections/CTASection"
import HeroSection from "./sections/HeroSection"
import HowItWorksSection from "./sections/HowItWorksSection"
import SearchSection from "./sections/SearchSection"


const HomePage = () => {
  return (
    <div div className="bg-[url('../../public/imgs/mockups/manos.jpg')] bg-fixed bg-cover bg-center bg-no-repeat bg-black/70 bg-blend-overlay p-4">
      <NavBar />

      <HeroSection />
      <SearchSection />
      <CTASection />
      <HowItWorksSection />

      <Footer />

    </div>
  )
}

export default HomePage