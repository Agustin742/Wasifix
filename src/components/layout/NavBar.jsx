import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router";


const NavBar = () => {
    const [open, setOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navItems = [
        {
            id: 1,
            name: "Inicio",
            path: "/"
        },
        {
            id: 2,
            name: "Profesionales",
            path:"/profesionales"
        },
        {
            id: 3,
            name: "Contacto",
            path:"/contacto"
        },
        {
            id: 4,
            name: "Sobre Nosotros",
            path:"/sobrenostros"
        },
    ];

    const toggleNavBar = () => {
        setOpen(!open)
    };

    const closeNavbar = () => {
        setOpen(false)
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true)
        }
        else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    },[])
    

  return (
    <div 
    id="navbar"
    className={`w-full min-h-[150px] backdrop-blur-sm flex items-center justify-between md:px-16 sm:px-10 px-4 fixed top-0 tracking-all ease-in-out duration-300 z-50 border-b border-neutral-600 ${isScrolled ? 'bg-black/70 backdrop-blur-lg' : 'bg-black/80 backdrop-blur-sm'}`}
    >
        
        {/* Logo */}
        <div className="flex items-center gap-2 md:pr-16 pr-0 py-0">
            <Link to="/"
            className="items-center"
            >
                <img src="/imgs/logos/logoNavBar.png" alt="Logo" className="min-w-[216px] w-[216px] h-auto pt-0" />
            </Link>
        </div>

        {/* Hamburger/toggle*/}
        <div className="md:hidden">
            <button 
            onClick={toggleNavBar}
            className="text-emerald-500 focus:outline-none"
            >
                <FaBars size={60} />
            </button>
        </div>

        {/* items/buttons */}
        <div className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full md:w-auto bg-emerald-50 border-l md:border-none border-emerald-300 md:bg-transparent shadow-lg md:shadow-none transition-all ease-in-out duration-300 flex-1 ${open ? "translate-x-0" : "translate-x-full"} md:translate-x-0 z-60`} >

            {/* logo/close icon/menucard */}
            <div className="w-full md:hidden flex items-center justify-between px-4">

                {/* logo */}
                <Link to="/"
                className="items-center"
                >
                    <img src="/imgs/logos/logoNavBar.png" alt="Logo" className="min-w-[216px] w-[216px] h-auto py-5" />
                </Link>

                {/* close */}
                <div className="md:hidden flex justify-end py-6">

                    <button 
                    onClick={closeNavbar}
                    className="text-orange-600 focus:outline-none"
                    >
                        <IoMdClose size={40} />
                    </button>

                </div>

            </div>

            {/* Divider */}
            <div className="border-b border-emerald-300 md:hidden"></div>

            {/* items/buttons */}
            <div className="flex-1 flex-col flex md:flex-row items-center justify-between gap-6 p-6 md:p-0">

                {/* items */}
                <ul className="flex flex-col md:flex-row items-center md:gap-7 gap-4 md:text-xl text-2xl text-emerald-500 md:font-normal font-medium">

                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={closeNavbar}
                            className={`hover:text-emerald-700 ease-in-out duration-300 ${location.pathname === item.path ? 'text-emerald-600' :  'md:text-emerald-100 text-emerald-500'} cursor-pointer`}
                        >
                            {item.name}
                        </li>
                    ))}

                </ul>

                {/* buttons */}

                <div className="flex flex-col md:flex-row items-center gap-4">

                    <button 
                    className="w-fit px-6 py-2 md:text-xl text-2xl md:text-emerald-100 text-emerald-700 hover:text-emerald-400 ease-in-out duration-300 cursor-pointer"
                    >
                        Registrarse
                    </button>

                    <button 
                    className="w-fit px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 md:text-xl text-2xl text-neutral-50 ease-in-out duration-300 cursor-pointer"
                    >
                        Iniciar Sesión
                    </button>

                </div>

            </div>

        </div>
    </div>
  )
}

export default NavBar