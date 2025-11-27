import Card from "../ui/Card"


const ServiceCard = ( {image, title, description, onClick, link} ) => {

    const handleButtonClick = (e) => {
        e.stopPropagation()
        if ( link ) {
            window.location.href = link
        }
    }

  return (
    <Card 
        hoverable={true} 
        clickable={true} 
        onClick={onClick} 
        padding="none" 
        className="relative overflow-hidden aspect-6/5" > 
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover z-0"/>
            <div className="absolute inset-0 bg-linear-to-t from-emerald-500/95 from-60% via-emerald-500/40 via-70% to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
                <h3 className="text-3xl font-bold mb-2">
                    {title}
                </h3>
                <p className="text-base text-gray-200 mb-4 line-clamp-2">
                    {description}
                </p>
                <div className="flex justify-end">
                    <button onClick={handleButtonClick} className=" bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">Mas Informacion</button>
                </div>
            </div>
        </Card>
  )
}

export default ServiceCard