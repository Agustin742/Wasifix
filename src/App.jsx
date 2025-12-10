import { BrowserRouter } from "react-router"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import HowItWorksSection from "./pages/home/sections/HowItWorksSection"
import CTASection from "./pages/home/sections/CTASection"
const App = () => {



  return (
    <BrowserRouter>
      <NavBar />

      <div  className="h-1000 bg-[url('/imgs/mockups/manos.jpg')] p-8 space-y-4">
       <div className="h-[150px]"></div> {/* <<---- si no pongo esto rompe todo el navbar xd  */}

        <HowItWorksSection />
      </div>
      <CTASection />
    <Footer />

    </BrowserRouter>
  )
}

export default App