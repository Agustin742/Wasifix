

const Card = ( {padding = 'md', shadow = 'md', bordered = false, hoverable = false, clickable = false, variant = 'default', className = '', children, onClick } ) => {
  
    const getPaddingClasses = (padding) => {
    return {
            'none': '',
            'sm': 'p-4',
            'md': 'p-6',
            'lg': 'p-8'
        }[padding] || 'p-6';
    }

    const getShadowClasses = (shadow) => {
    return {
            'none': '',
            'sm': 'shadow-sm shadow-black/40',
            'md': 'shadow-md shadow-black/40',
            'lg': 'shadow-lg shadow-black/50'
        }[shadow] || 'shadow-md shadow-black/40';
    }

    const getVariantClasses = (variant) => {
    return {
            'default': 'bg-white',
            'outlined': 'bg-transparent border-2 border-gray-200',
            'filled': 'bg-gray-50',
        }[variant] || 'bg-white';
    }

    const hoverClasses = hoverable ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''
    const clickableClasses = clickable ? 'cursor-pointer active:scale-95' : ''
    const borderClasses = bordered ? 'border border-gray-200' : ''

    const cardClasses = `rounded-lg ${getPaddingClasses(padding)} ${getShadowClasses(shadow)} ${getVariantClasses(variant)} ${hoverClasses} ${clickableClasses} ${borderClasses} ${className}`
    
    return (
    <div
    className={cardClasses}
    onClick={onClick}
    >{children}</div>
  )
}

export default Card