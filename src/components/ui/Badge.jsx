
const Badge = ({
    variant = 'default',
    size = 'md',
    icon = null,
    block = false,
    pulse = false,
    className,
    children
}) => {

    const getVariantClasses = (variant) => {
        return {
            'success': 'bg-green-100 text-green-800',
            'warning': 'bg-yellow-100 text-yellow-800',
            'error': 'bg-red-100 text-red-800',
            'info': 'bg-blue-100 text-blue-800',
            'default': 'bg-gray-100 text-gray-800',
        }[variant] || 'bg-gray-100 text-gray-800'
    }

    const getSizeClasses = (size) => {
        return {
            'xs': 'text-xs px-2 py-0.5',
            'sm': 'text-sm px-2.5 py-1',
            'md': 'text-base px-3 py-1.5',
            'lg': 'text-lg px-4 py-2',
        }[size] || 'text-base px-3 py-1.5'
    }

    const getDisplayClasses = (block) => block ? 'flex' : 'inline-flex'

    const pulseClasses = pulse ? 'animate-pulse' : ''

    const baseClasses = 'rounded-full items-center justify-center gap-1.5 font-medium transition-all duration-200'

    const badgeClasses = `
    ${baseClasses} 
    ${getVariantClasses(variant)} 
    ${getSizeClasses(size)} 
    ${getDisplayClasses(block)} 
    ${pulseClasses}
    ${className}
    `.trim()

    const getIconSize = (size) => {
        return {
        'xs': 'w-3 h-3',
        'sm': 'w-3.5 h-3.5,',
        'md': 'w-4 h-4,',
        'lg': 'w-5 h-5,'
        }[size] || 'w-4 h-4'
    }

  return (
    <span className={badgeClasses}>
        {icon && <span className={getIconSize(size)}>{icon}</span>}
        {children}
    </span>
  )
}

export default Badge