import React from 'react';

/**
 * Componente de botón reutilizable con múltiples variantes y estados.
 * 
 * @param {object} props - Propiedades del componente.
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} [props.variant='primary'] - Estilo del botón.
 *   - `primary`: Fondo verde sólido, texto blanco. Ideal para acciones principales.
 *   - `secondary`: Fondo naranja sólido, texto blanco. Para acciones secundarias importantes.
 *   - `outline`: Borde y texto verde, fondo transparente. Para acciones de menor prioridad.
 *   - `ghost`: Solo texto, sin bordes ni fondo. Para acciones discretas.
 *   - Ejemplo: `<Button variant="secondary">Acción</Button>`
 * 
 * @param {'sm' | 'md' | 'lg' | 'xl'} [props.size='md'] - Tamaño del botón.
 *   - `sm`: Pequeño.
 *   - `md`: Mediano (por defecto).
 *   - `lg`: Grande.
 *   - `xl`: Extra grande.
 *   - Ejemplo: `<Button size="lg">Comprar Ahora</Button>`
 * 
 * @param {boolean} [props.disabled=false] - Si es `true`, el botón se deshabilita y cambia su opacidad.
 *   - Ejemplo: `<Button disabled>No disponible</Button>`
 * 
 * @param {boolean} [props.isLoading=false] - Si es `true`, muestra un spinner y deshabilita el botón.
 *   - Ejemplo: `<Button isLoading>Cargando...</Button>`
 * 
 * @param {React.ReactNode} [props.icon] - Ícono para mostrar junto al texto.
 *   - Ejemplo: `<Button icon={<MiIcono />}>Con Ícono</Button>`
 * 
 * @param {boolean} [props.fullWidth=false] - Si es `true`, el botón ocupa todo el ancho disponible.
 *   - Ejemplo: `<Button fullWidth>Acceder</Button>`
 * 
 * @param {React.ReactNode} props.children - El contenido del botón (texto, etc.).
 * 
 * @param {() => void} [props.onClick] - Función a ejecutar al hacer clic.
 * 
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - El tipo de botón HTML.
 * 
 * @returns {React.ReactElement} El componente de botón.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  isLoading = false,
  icon,
  fullWidth = false,
  onClick,
  type = 'button',
  ...rest
}) => {
  // Estilos base del botón
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ease-in-out';

  // Estilos por variante (variant)
  const variantStyles = {
    primary: 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg focus:ring-green-500',
    secondary: 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg focus:ring-orange-500',
    outline: 'border-2 border-green-600 text-green-600 bg-transparent hover:bg-green-50 focus:ring-green-500',
    ghost: 'text-green-600  bg-gray-100/80 hover:bg-green-50 focus:ring-green-500 shadow-none rounded-xl',
  };

  // Estilos por tamaño (size)
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'w-full py-1 text-xl',
  };

  // Estilos para estados (disabled, isLoading)
  const stateStyles = (disabled || isLoading) ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105';

  // Estilo de ancho completo
  const widthStyle = fullWidth ? 'w-full' : '';

  const finalClassNames = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    stateStyles,
    widthStyle,
  ].join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={finalClassNames}
      {...rest}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;