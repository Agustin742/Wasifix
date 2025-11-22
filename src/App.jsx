import { BrowserRouter } from "react-router"
import NavBar from "./components/layout/NavBar"
import Card from "./components/ui/Card"


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div  className="h-1000 bg-[url('/imgs/mockups/manos.jpg')] p-8 space-y-4">
        <Card>Contenido Basico</Card>
        <Card padding="lg" shadow="lg">Card grande</Card>
        <Card hoverable clickable>Card Intercactiva</Card>
      </div>

    </BrowserRouter>
  )
}

export default App