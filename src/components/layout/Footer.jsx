

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 w-full py-10 px-4 bg-black/75 backdrop-blur-sm text-white">
      <div className="max-w-sm mx-auto md:max-w-4xl">
        <img
          src="/imgs/logos/wasiFixFooter.svg"
          alt="WasiFix"
          className="mx-auto w-40 md:w-52 opacity-90"
        />

        <div className="flex justify-center gap-4 mt-5 mb-8" role="navigation" aria-label="Redes sociales">
          <a href="#" aria-label="LinkedIn" className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
            <img src="/imgs/logos/linkedin.svg" alt="" />
          </a>
          <a href="#" aria-label="Facebook" className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
            <img src="/imgs/logos/facebook.svg" alt=""/>
          </a>
          <a href="#" aria-label="Instagram" className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
            <img src="/imgs/logos/instagram.svg" alt=""/>
          </a>
          <a href="#" aria-label="Twitter" className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg">
            <img src="/imgs/logos/twitter.svg" alt=""/>
          </a>
        </div>

        {/* Grid responsivo: 1 columna en móvil, 3 en desktop */}
        <div className="grid grid-cols-3 gap-8 text-center md:grid-cols-3 md:gap-6 md:text-left">
          <div>
            <h4 className="text-xl font-bold mb-3">Nosotros</h4>
            <ul className="text-gray-400 space-y-2 text-base">
              <li>¿Quiénes somos?</li>
              <li>¿Qué es WasiFix?</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3">Contacto</h4>
            <ul className="text-gray-400 space-y-2 text-base">
              <li>Dirección</li>
              <li>Mail</li>
              <li>WhatsApp</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-3">Legal</h4>
            <ul className="text-gray-400 space-y-2 text-base">
              <li>Términos y Condiciones de Privacidad</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
