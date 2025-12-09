import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"


const ServicesCarrousel = ({
    items,
    renderItem,
    autoPlay = false,
    interval = 3000,
    slidesPerView = { mobile: 1, tablet: 2, desktop: 3 }
}) => {

    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [isAutoplaying, setIsAutoplaying] = useState(autoPlay)

    const options = { 
        align: 'start',
        loop: false
    }
    
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const scrollPrev = () => {
        if (!emblaApi) return
        setIsAutoplaying(false)
        emblaApi.scrollPrev()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const scrollNext = () => {
        if (!emblaApi) return
        setIsAutoplaying(false)
        emblaApi.scrollNext()
    } 

    const scrollTo = (index) => {
        if (!emblaApi) return
        setIsAutoplaying(false)
        emblaApi.scrollTo(index)
    }


    useEffect(() => {

        if (!emblaApi) return

        const updateScrollButtons = () => {
            setCanScrollNext(emblaApi.canScrollNext())
            setCanScrollPrev(emblaApi.canScrollPrev())
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        updateScrollButtons()

        emblaApi.on('select', updateScrollButtons)

        return () => {
            emblaApi.off('select', updateScrollButtons)
            }
    }, [emblaApi])

    useEffect(() => {
        if (!isAutoplaying) return


        const intervalId = setInterval(() => {
            if (emblaApi && emblaApi.canScrollNext()) {
                scrollNext()
            } else if (emblaApi) {
                emblaApi.scrollTo(0)  // Volver al inicio
            }
        }, interval)


        return () => clearInterval(intervalId)  
    }, [isAutoplaying, interval, emblaApi, scrollNext])
    

    const getSlideWidthClasses = (slidesPerView) => {
        const widthMap = {
            1: 'full',
            2: '1/2', 
            3: '1/3',
            4: '1/4'
        }

        return `w-${widthMap[slidesPerView.mobile]} md:w-${widthMap[slidesPerView.tablet]} lg:w-${widthMap[slidesPerView.desktop]}`
    }

    const slideWidthClasses = getSlideWidthClasses(slidesPerView)
    const scrollSnaps = emblaApi?.scrollSnapList() || []



  return (
    <div className="relative">
        {canScrollPrev && 
        <button onClick={scrollPrev} className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"><FaChevronLeft size={24} /></button>
        }

            <div 
            ref={emblaRef} 
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoplaying(false)}
            onMouseLeave={() => setIsAutoplaying(autoPlay)}
            >
                <div className="flex gap-4">

                    {items.map((item, index) => (
                        <div key={item.id || index} className={`shrink-0 ${slideWidthClasses}`}>
                        {renderItem(item)}
                        </div>
                    ))}
                </div>
            </div>

        {canScrollNext &&
        <button onClick={scrollNext} className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"><FaChevronRight size={24} /></button>
        }

        <div 
        className="flex justify-center gap-2 mt-4">
            {scrollSnaps.map((_, index) => (
                <button key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                    index === selectedIndex 
                        ? 'bg-[#4ADE80] w-8' 
                        : 'bg-gray-300'
                    }`} />
            ))}
        </div>
    </div>
  )
}

export default ServicesCarrousel