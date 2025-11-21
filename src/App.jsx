import { BrowserRouter } from "react-router"
import NavBar from "./components/layout/navbar/NavBar"


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div  className="h-1000 bg-[url('/imgs/mockups/manos.jpg')]"></div>


    </BrowserRouter>
  )
}

export default App