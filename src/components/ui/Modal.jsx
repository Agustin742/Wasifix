import { useEffect } from "react"
import { createPortal } from "react-dom"

const Modal = ({
    isOpen = false,
    onClose,
    title,
    children,
    size
}) => {

  useEffect(() => {
      if (!isOpen) return
    
      const handleEscape = (e) => {
        if (e.key === 'Escape')
          onClose()
      }
      document.addEventListener('keydown', handleEscape);

      return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose])
    
  useEffect(() => {

    if (!isOpen) return;

    document.body.classList.add('overflow-hidden');
    
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen])
  
  if (!isOpen) return null


  const nodoDOM = document.getElementById('modal-root')

  const getSizeClasses = (size) => {
    return {
        'sm': 'max-w-sm',
        'md': 'max-w-md',
        'lg': 'max-w-lg',
        'xl': 'max-w-xl',
        'full': 'max-w-full'
    }[size] || 'max-w-md'
  }

  const getPaddingClasses = (size) => {
    return {
        'sm': 'p-4',
        'md': 'p-6',
        'lg': 'p-8',
        'xl': 'p-8',
        'full': 'p-8'
    }[size] || 'p-8'
  }

  const getTitleClasses = (size) => {
    return {
        'sm': 'text-xl',
        'md': 'text-2xl',
        'lg': 'text-3xl',
        'xl': 'text-3xl',
        'full': 'text-3xl',
    }[size] || 'text-2xl'
  }

  const getContentClasses = (size) => {
    return {
        'sm': 'overflow-y-auto max-h-[60vh]',
        'md': 'overflow-y-auto max-h-[70vh]',
        'lg': 'overflow-y-auto max-h-[80vh]',
        'xl': 'overflow-y-auto max-h-[80vh]',
        'full': 'overflow-y-auto max-h-[80vh]',
    }[size] || 'overflow-y-auto max-h-[70vh]'
  }
  

  return createPortal(
    
    <div 
    onClick={onClose}
    className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity duration-300"
    >

        <div 
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-lg w-full relative ${getPaddingClasses(size)} ${getSizeClasses(size)} transition-all duration-300 ease-in-out transform`}
        >

            <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors cursor-pointer "
            >
                X
            </button>

            {title && 
            <h2 className={`${getTitleClasses(size)} font-bold mb-4 text-gray-800`}>{title}</h2>}

            <div className={getContentClasses(size)} >
                {children}
            </div>
        </div>

    </div>

  , nodoDOM)

}

export default Modal