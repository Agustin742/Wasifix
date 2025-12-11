import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// --- Componentes Reutilizables ---

/**
 * Componente genérico de campo de entrada
 * @param {object} props - Propiedades del componente
 * @param {string} props.label - Etiqueta del campo
 * @param {string} props.name - Nombre del campo para React Hook Form
 * @param {string} props.type - Tipo de input (text, email, tel)
 * @param {string} props.placeholder - Texto de marcador de posición
 * @param {object} props.register - Función register de React Hook Form
 * @param {object} props.error - Objeto de error para este campo
 * @param {boolean} props.isMultiline - Si es un textarea
 */
const InputField = ({ label, name, type = 'text', placeholder, register, error, isMultiline = false }) => {
    const baseClasses = "w-full p-3 border rounded-lg focus:outline-none transition-all duration-200 bg-white text-gray-800 placeholder-gray-500";
    const errorClasses = error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "focus:ring-green-500 focus:border-green-500";
    const finalClasses = `${baseClasses} ${errorClasses}`;

  return (
        <div className="mb-6">
        <label htmlFor={name} className="block text-white text-lg mb-2">
            {label}
        </label>
        {isMultiline ? (
            <textarea
            id={name}
            {...register(name)}
            rows="4"
            placeholder={placeholder}
            className={finalClasses}
            style={{ resize: 'none' }} // Para mantener la consistencia visual y no permitir que se estire
            />
      ) : (
        <input
          id={name}
          type={type}
          {...register(name)}
          placeholder={placeholder}
          className={finalClasses}
        />
      )}
      {error && (
        <p className="mt-1 text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
};

// --- Componente Principal de la Sección ---

const ContactSection = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' | null

  // Configuración de React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        reset
    } = useForm({
        mode: 'onBlur', // Validar al salir del campo
        defaultValues: {
        nombre: 'Juan Perez',
        email: 'juanperez@gmail.com',
        telefono: '123456789',
        mensaje: 'Dejanos tu mensaje aqui',
        }
    });

// ContactSection.jsx

const onSubmit = (data) => {
    console.log("Datos del Formulario:", data);

    // 1. Establecer inmediatamente el estado de éxito al simular el envío
    // Esto hará que el mensaje de éxito aparezca.
    setSubmissionStatus('success');
    
    // 2. Limpiar el formulario inmediatamente
    reset();

    // El Promise y setTimeout aquí solo simulan una espera del servidor
    // En una implementación real, esto lo manejaría tu llamada API.
    return new Promise((resolve) => {
        // Nota: El tiempo aquí no es el que dura el mensaje de éxito en pantalla,
        // sino el tiempo de "espera" de la simulación de envío. Lo dejé en 500ms.
        setTimeout(() => {
        resolve();
        }, 500); 
    });
};
    
    // Expresión regular simple para validación de email
    const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // Expresión regular simple para formato de teléfono argentino (ej. 11-xxxx-xxxx o 261-xxx-xxxx o números fijos/celulares comunes)
    const TELEFONO_REGEX = /^\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{4}$/;


    return (
        <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-white mb-2">
                Contáctanos
            </h2>
            <p className="text-xl text-gray-300">
                ¿Tienes preguntas? Estamos aquí para ayudarte
            </p>
            </div>

            {/* Contenedor del Formulario (con max-width) */}
            <div className="flex justify-center">
            <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-lg">
                
                {submissionStatus === 'success' ? (
                // Mensaje de éxito
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg relative mb-6" role="alert">
                    <strong className="font-bold">¡Mensaje enviado correctamente!</strong>
                    <span className="block sm:inline"> Te responderemos pronto.</span>
                </div>
                ) : (
                // Formulario
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    
                    {/* Nombre */}
                    <InputField
                    label="Nombre"
                    name="nombre"
                    placeholder="Juan Perez"
                    register={register}
                    error={errors.nombre}
                    // Reglas de validación
                    rules={{ 
                        required: "El nombre es obligatorio",
                        minLength: {
                        value: 2,
                        message: "Mínimo 2 caracteres"
                        }
                    }}
                    />

                    {/* Email */}
                    <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="juanperez@gmail.com"
                    register={register}
                    error={errors.email}
                    // Reglas de validación
                    rules={{
                        required: "El email es obligatorio",
                        pattern: {
                        value: EMAIL_REGEX,
                        message: "Formato de email inválido"
                        }
                    }}
                    />

                    {/* Teléfono */}
                    <InputField
                    label="Teléfono"
                    name="telefono"
                    type="tel"
                    placeholder="123456789"
                    register={register}
                    error={errors.telefono}
                    // Reglas de validación
                    rules={{
                        required: "El teléfono es obligatorio",
                        pattern: {
                        value: TELEFONO_REGEX,
                        message: "Formato de teléfono inválido (ej. 11-xxxx-xxxx)"
                        }
                    }}
                    />

                    {/* Mensaje (Textarea) */}
                    <InputField
                    label="Mensaje"
                    name="mensaje"
                    placeholder="Dejanos tu mensaje aqui"
                    isMultiline
                    register={register}
                    error={errors.mensaje}
                    // Reglas de validación
                    rules={{
                        required: "El mensaje es obligatorio",
                        minLength: {
                        value: 10,
                        message: "Mínimo 10 caracteres"
                        }
                    }}
                    />

                    {/* Botón de Enviar */}
                    <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className={`
                        w-full py-3 px-4 text-white text-xl font-bold rounded-lg transition-colors duration-500
                        ${isValid && !isSubmitting
                        ? 'bg-green-600 hover:bg-green-700 cursor-pointer'
                        : 'bg-green-300 cursor-not-allowed'
                        }
                    `}
                    >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
                )}
            </div>
            </div>
        </div>
        </section>
    );
};

export default ContactSection;