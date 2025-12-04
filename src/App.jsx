import { BrowserRouter } from "react-router"
import NavBar from "./components/layout/NavBar"
import Card from "./components/ui/Card"
import Footer from "./components/layout/Footer"
import SearchBar from "./components/search/SearchBar"
import { mockServices } from "./data/mockServices.js"
import ServicesCarrousel from "./components/services/ServicesCarousel.jsx"
import ServiceCard from "./components/services/ServiceCard.jsx"

const App = () => {


  return (
    <BrowserRouter>
      <NavBar />

      <div  className="h-1000 bg-[url('/imgs/mockups/manos.jpg')] p-8 space-y-4">
       <div className="h-[150px]"></div> {/* <<---- si no pongo esto rompe todo el navbar xd  */}

        <div className="w-1/3 m-auto">
          {/* // Sin auto-play */}
          <ServicesCarrousel 
            items={mockServices}
            renderItem={(item) => <ServiceCard {...item} />}
          />
          
          {/* // Con auto-play */}
          <ServicesCarrousel
            items={mockServices}
            renderItem={(item) => <ServiceCard {...item} />}
            autoPlay={true}
            interval={5000}
          />
          
          {/* // Difer slides per view */}
          <ServicesCarrousel 
            items={mockServices}
            renderItem={(item) => <ServiceCard {...item} />}
            slidesPerView={{ mobile: 1, tablet: 3, desktop: 4 }}
          />
           {/* // Sin auto-play */}
          <ServicesCarrousel 
            items={mockServices}
            renderItem={(item) => <ServiceCard {...item} />}
          />
          
          {/* // Con auto-play */}
          <ServicesCarrousel 
            items={mockServices}
            renderItem={(item) => <ServiceCard {...item} />}
            autoPlay={true}
            interval={5000}
          />
          
          {/* // Diferentes slides per view */}
          <ServicesCarrousel 
            items={mockServices}
            renderItem={(item) => <ServiceCard {...item} />}
            slidesPerView={{ mobile: 1, tablet: 3, desktop: 4 }}
          />
        </div>

      </div>

    

    <Footer />

    </BrowserRouter>
  )
}

export default App