import ContactSection from "./sections/ContactSection"
import SearchSection from "./sections/SearchSection"


const HomePage = () => {
  return (
    <div div className="bg-[url('../../public/imgs/mockups/manos.jpg')] bg-fixed bg-cover bg-center bg-no-repeat bg-black/70 bg-blend-overlay p-8 space-y-4">
    <SearchSection />

    <ContactSection/> 

    </div>

  )
}

export default HomePage


