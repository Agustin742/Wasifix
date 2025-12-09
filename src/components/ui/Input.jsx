import { forwardRef, useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"

const Input = forwardRef(({
    type = 'text',
    label,
    error = null,
    helperText = '',
    icon = null,
    required  = false,
    disabled = false,
    maxLength,
    showCharCount = false,
    className = '',
    ...rest
    }, ref) => {

    const [showPassword, setShowPassword] = useState(false)

    const getInputClasses = () => {
        let classes = 'w-full px-4 py-2 border rounded-lg transition-colors duration-200 focus:outline-none '

        if (icon) classes += 'pl-10 ';

        if (type === 'password') classes += 'pr-10 '

        if (disabled) {
            classes += 'bg-gray-100 text-gray-500 cursor-not-allowed '
        }
        else if (error) {
            classes += 'border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-200 '
        }
        else {
            classes += 'border-gray-300 focus:border-[#4ADE80] focus:ring-2 focus:ring-green-200 '
        }
        
        return classes
    }

  return (
    <div className={ className }>
        <label className="block text-sm font-medium text-gray-700 mb-2">
            { label }
            { required && <span className="text-red-500 ml-1">*</span> }
        </label>
        <div className="relative">
            { icon && (
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {icon}
                </span>
            )} 

            <input 
            ref={ref} 
            type={ type === 'password' && showPassword ? 'text' : type }
            disabled={disabled}
            maxLength={maxLength}
            className={getInputClasses()}
            {...rest}
            />
            
            { type === 'password' && (
                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
            )}
        </div>

        { showCharCount && maxLength && (
            <div className="text-right text-xs text-gray-500 mt-1">
                { rest.value?.length || 0 } / {maxLength}
            </div>
        )}

        { error && (
            <p className="text-red-500 text-sm mt-1">
                {error}
            </p>
        )}

        { helperText && !error && (
            <p className="text-gray-500 text-sm mt-1">
                {helperText}
            </p>
        )}
    </div>
  )
})

Input.displayName = 'Input';

export default Input