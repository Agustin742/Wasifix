import { BrowserRouter } from "react-router"
import Footer from "./components/layout/Footer"
import NavBar from "./components/layout/NavBar"
import HomePage from "./pages/home/HomePage"

const App = () => {



  return (
    <BrowserRouter>
    <NavBar />

    <HomePage />

    <Footer />
    </BrowserRouter>

  )
}

export default App