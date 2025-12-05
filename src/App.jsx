import { BrowserRouter } from "react-router"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"

import HeroSection from "./pages/sections/HeroSection"

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
       
        <div  className="h-1000   bg-[url('/imgs/mockups/manos.jpg')]  bg-black/50 p-8 space-y-4">
         
          <HeroSection />
          
          
        </div>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App