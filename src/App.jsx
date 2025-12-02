import { BrowserRouter } from "react-router"
import NavBar from "./components/layout/NavBar"
import Card from "./components/ui/Card"

import Footer from "./components/layout/Footer"
import Badge from "./components/ui/Badge"


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div  className="h-1000 bg-[url('/imgs/mockups/manos.jpg')] p-8 space-y-4">
       
       <div className="h-[150px]"></div> {/* <<---- si no pongo esto rompe todo el navbar xd  */}

        <Card>
          <p>Contenido Basico </p>
        </Card>

        <Card padding="lg" shadow="lg">
          <h2 className="text-xl font-bold mb-2">Card Grande</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, minus..</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro similique, repudiandae nisi incidunt totam nam!</p>
        </Card>

        <Card hoverable clickable>
          <p>Card Interactiva - Pasa el mouse y haz click</p>
        </Card>
      </div>
    <Footer />

    </BrowserRouter>
  )
}

export default App