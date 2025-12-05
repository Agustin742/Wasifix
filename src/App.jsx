import { BrowserRouter } from "react-router"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
const App = () => {

import HeroSection from "./pages/sections/HeroSection"

  return (
    <BrowserRouter>
      <NavBar />

      <div  className="h-1000 bg-[url('/imgs/mockups/manos.jpg')] p-8 space-y-4">
       <div className="h-[150px]"></div> {/* <<---- si no pongo esto rompe todo el navbar xd  */}


      </div>
    <Footer />

    </BrowserRouter>
  )
}

export default App