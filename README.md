# 🏠 WasiFix

> Plataforma web para conectar clientes con profesionales del hogar (electricistas, plomeros, pintores, gasistas, carpinteros, albañiles, etc.)

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=flat&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?style=flat&logo=javascript)

---

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Flujo de Trabajo con Git](#-flujo-de-trabajo-con-git)
- [Convenciones de Código](#-convenciones-de-código)
- [Paleta de Colores](#-paleta-de-colores)
- [Equipo](#-equipo)
- [Enlaces Importantes](#-enlaces-importantes)

---

## 📖 Descripción del Proyecto

WasiFix es una aplicación web tipo **marketplace** (similar a Rappi/PedidosYa) enfocada en servicios del hogar. Conecta a clientes que necesitan arreglos en sus hogares con profesionales verificados y calificados.

### Tipos de Usuarios

- **Clientes**: Buscan y solicitan servicios para el hogar
- **Profesionales**: Ofrecen sus servicios especializados

### Estado Actual
🚧 **Fase de Desarrollo - Solo Frontend** 🚧

Actualmente el proyecto está en fase de desarrollo frontend. Todos los datos son mockeados y no hay integración con backend.

---

## ✨ Características

### Para Clientes
- 🔍 Búsqueda de profesionales por servicio y ubicación
- 📍 Geolocalización automática
- ⭐ Sistema de calificaciones y reviews
- 📅 Solicitud de servicios con agenda
- 📊 Dashboard de solicitudes (historial y estado)
- 👤 Gestión de perfil personal

### Para Profesionales (Futuro)
- 📥 Dashboard de solicitudes recibidas
- 💼 Gestión de servicios ofrecidos
- 💰 Configuración de precios
- 📅 Administración de disponibilidad

---

## 🛠️ Stack Tecnológico

### Core
- **React 19.2.0** - Biblioteca de UI
- **JavaScript** (ES2020+) - Lenguaje de programación
- **Vite 7.2.4** - Build tool y dev server

### Estilos
- **Tailwind CSS 4.1.17** - Framework de CSS utility-first
- **@tailwindcss/vite** - Plugin de Tailwind para Vite

### Herramientas de Desarrollo
- **ESLint 9.39.1** - Linter de JavaScript
- **eslint-plugin-react-hooks** - Reglas de linting para React Hooks
- **eslint-plugin-react-refresh** - Reglas para Fast Refresh

### Dependencias Planeadas
```json
{
  "react-router-dom": "^6.x.x",
  "react-hook-form": "^7.x.x",
  "yup": "^1.x.x",
  "@hookform/resolvers": "^3.x.x",
  "lucide-react": "^0.x.x"
}
```

---

## 📁 Estructura del Proyecto

```
wasifix-frontend/
├── public/                      # Archivos públicos estáticos
├── src/
│   ├── assets/                  # Imágenes, iconos, fuentes
│   ├── components/              # Componentes reutilizables
│   │   ├── ui/                  # Componentes UI base
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Checkbox.jsx
│   │   ├── layout/              # Componentes de layout
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── services/            # Componentes de servicios
│   │   │   ├── ServiceCard.jsx
│   │   │   └── ServicesCarousel.jsx
│   │   └── search/              # Componentes de búsqueda
│   │       └── SearchBar.jsx
│   ├── pages/                   # Páginas de la aplicación
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── sections/
│   │   │       ├── HeroSection.jsx
│   │   │       ├── SearchSection.jsx
│   │   │       ├── StatsSection.jsx
│   │   │       ├── ServicesSection.jsx
│   │   │       ├── CTASection.jsx
│   │   │       ├── HowItWorksSection.jsx
│   │   │       └── ContactSection.jsx
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── RegisterProfessional.jsx
│   │   ├── Search/
│   │   │   └── SearchResults.jsx
│   │   ├── Professional/
│   │   │   └── ProfessionalProfile.jsx
│   │   ├── Service/
│   │   │   └── RequestService.jsx
│   │   ├── Dashboard/
│   │   │   └── ClientDashboard.jsx
│   │   └── Profile/
│   │       └── UserProfile.jsx
│   ├── context/                 # Context API
│   │   └── AuthContext.jsx
│   ├── hooks/                   # Custom Hooks
│   │   ├── useAuth.js
│   │   ├── useSearch.js
│   │   ├── useGeolocation.js
│   │   ├── useRequests.js
│   │   └── useFormValidation.js
│   ├── utils/                   # Utilidades
│   │   ├── validationSchemas.js
│   │   ├── errorMessages.js
│   │   └── geocoding.js
│   ├── data/                    # Datos mock
│   │   ├── mockProfessionals.js
│   │   ├── mockRequests.js
│   │   └── mockUsers.js
│   ├── routes/                  # Configuración de rutas
│   │   └── index.jsx
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Entry point
│   └── index.css                # Estilos globales
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Instalación

### Requisitos Previos
- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 o **yarn** >= 1.22.0

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/wasifix-frontend.git
cd wasifix-frontend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

---

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run lint` | Ejecuta el linter en todos los archivos |
| `npm run preview` | Previsualiza el build de producción |

---

## 🌿 Flujo de Trabajo con Git

### Estructura de Ramas

```
main (producción - protegida)
  └── develop (integración - protegida)
        ├── feature/agustin-nombre-componente
        ├── feature/alejo-nombre-componente
        ├── feature/abri-nombre-componente
        ├── feature/alejandra-nombre-componente
        └── feature/ariana-nombre-componente
```

### Ramas Principales

#### 🔒 `main`
- **Propósito**: Código en producción estable
- **Protegida**: Solo Agustín puede hacer merge
- **Regla**: Solo recibe merges desde `develop`

#### 🔄 `develop`
- **Propósito**: Rama de integración
- **Protegida**: Requiere Pull Request y code review de Agustín
- **Regla**: Recibe merges de las ramas `feature/*`

### Ramas de Desarrollo Individual

#### Nomenclatura
```
feature/<nombre>-<descripcion-componente>
```

**Ejemplos:**
- `feature/agustin-button-component`
- `feature/alejo-navbar-component`
- `feature/abri-hero-section`
- `feature/alejandra-search-bar`
- `feature/ariana-footer-component`

### Workflow Completo

#### 1️⃣ Crear tu Rama de Feature
```bash
# Asegúrate de estar actualizado con develop
git checkout develop
git pull origin develop

# Crea tu rama
git checkout -b feature/tunombre-nombre-componente
```

#### 2️⃣ Desarrollar el Componente
```bash
# Trabaja en tu componente
# Haz commits frecuentes

git add .
git commit -m "feat: agregar estructura base de Button component"
```

#### 3️⃣ Mantener tu Rama Actualizada
```bash
# Sincroniza con develop regularmente
git checkout develop
git pull origin develop
git checkout feature/tunombre-nombre-componente
git merge develop

# Resuelve conflictos si existen
```

#### 4️⃣ Push a tu Rama
```bash
git push origin feature/tunombre-nombre-componente
```

#### 5️⃣ Crear Pull Request
1. Ve a GitHub
2. Crea un Pull Request desde `feature/tunombre-nombre-componente` hacia `develop`
3. Asigna a **Agustín** como reviewer
4. Agrega descripción detallada de los cambios
5. Espera el code review

#### 6️⃣ Code Review
- Agustín revisará el código
- Puede pedir cambios o aprobar
- Una vez aprobado, Agustín hará el merge a `develop`

#### 7️⃣ Limpiar Rama Local
```bash
# Después del merge, actualiza y limpia
git checkout develop
git pull origin develop
git branch -d feature/tunombre-nombre-componente
```

### ⚠️ Reglas Importantes

1. **NUNCA hacer push directo a `main` o `develop`**
2. **Siempre trabajar en ramas `feature/*`**
3. **Un componente = una rama**
4. **Sincronizar con `develop` antes de hacer PR**
5. **Esperar code review antes del merge**
6. **Commits pequeños y frecuentes**
7. **Mensajes de commit descriptivos**

### Ejemplo de Flujo Completo
```bash
# Día 1: Empezar nueva tarea
git checkout develop
git pull origin develop
git checkout -b feature/juan-login-form

# Desarrollo...
git add src/pages/Auth/Login.jsx
git commit -m "feat: agregar formulario de login"

git add src/pages/Auth/Login.jsx
git commit -m "style: aplicar estilos responsive al login"

# Push al final del día
git push origin feature/juan-login-form

# Día 2: Continuar
git checkout feature/juan-login-form
git pull origin feature/juan-login-form

# Sincronizar con develop
git checkout develop
git pull origin develop
git checkout feature/juan-login-form
git merge develop

# Terminar componente
git add .
git commit -m "feat: agregar validaciones al login form"
git push origin feature/juan-login-form

# Crear Pull Request en GitHub
# Esperar code review de Agustín
# Después del merge, limpiar
git checkout develop
git pull origin develop
git branch -d feature/juan-login-form
```

---

## 📝 Convenciones de Código

### Nombres de Archivos

| Tipo | Convención | Ejemplo |
|------|-----------|---------|
| Componentes | PascalCase.jsx | `Button.jsx`, `Navbar.jsx` |
| Hooks | camelCase.js con `use` | `useAuth.js`, `useSearch.js` |
| Utils | camelCase.js | `validationSchemas.js` |
| Carpetas | camelCase o lowercase | `components/`, `auth/` |

### Estructura de Componentes
```jsx
// Imports
import React from 'react';
import PropTypes from 'prop-types';

// Component
const ComponentName = ({ prop1, prop2 }) => {
  // Hooks
  const [state, setState] = useState(null);
  
  // Functions
  const handleClick = () => {
    // logic
  };
  
  // JSX
  return (
    <div className="container">
      {/* Content */}
    </div>
  );
};

// PropTypes (opcional pero recomendado)
ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

export default ComponentName;
```

### Commits

Seguir **Conventional Commits**:

```
tipo: descripción breve
```

**Tipos:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `style`: Cambios de formato (no afectan la lógica)
- `refactor`: Refactorización de código
- `docs`: Cambios en documentación
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

**Ejemplos:**
```bash
git commit -m "feat: agregar Button component con variantes"
git commit -m "fix: corregir validación en login form"
git commit -m "style: ajustar spacing en Navbar mobile"
git commit -m "refactor: simplificar lógica de SearchBar"
git commit -m "docs: actualizar README con instrucciones de instalación"
```

### Estilos con Tailwind

```jsx
// ✅ Correcto
<button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-500">
  Click me
</button>

// ❌ Incorrecto - no usar clases personalizadas sin compilador
<button className="btn-custom">
  Click me
</button>
```

### Variables y Constantes

```javascript
// camelCase para variables y funciones
const userName = "Juan";
const handleSubmit = () => {};

// PascalCase para componentes
const UserProfile = () => {};

// UPPER_SNAKE_CASE para constantes
const API_BASE_URL = "https://api.wasifix.com";
const MAX_FILE_SIZE = 5000000;
```

---

## 🎨 Paleta de Colores

```css
/* Colores Principales */
--primary-green: #4ADE80;      /* Verde principal - Botones primary */
--secondary-orange: #FF6B35;    /* Naranja - Botones secondary, CTAs */

/* Fondos */
--bg-dark: #1F2937;             /* Negro/gris oscuro - Footer, secciones oscuras */
--bg-light: #FFFFFF;            /* Blanco - Contenido principal */
--bg-gray-light: #F9FAFB;       /* Gris claro - Backgrounds alternos */
--bg-green-light: #ECFDF5;      /* Verde claro - Search Section */

/* Textos */
--text-dark: #111827;           /* Texto principal */
--text-gray: #6B7280;           /* Texto secundario */
--text-white: #FFFFFF;          /* Texto sobre fondos oscuros */

/* Estados */
--success: #10B981;             /* Confirmaciones */
--error: #EF4444;               /* Errores */
--warning: #F59E0B;             /* Advertencias */
--info: #3B82F6;                /* Información */
```

### Uso en Tailwind
```jsx
<button className="bg-[#4ADE80] hover:bg-[#22C55E] text-white">
  Solicitar Servicio
</button>

<div className="bg-[#FF6B35] text-white">
  ¡Oferta Especial!
</div>
```

---

## 👥 Equipo

| Nombre | Rol | GitHub |
|--------|-----|--------|
| **Agustín** | Líder Técnico, Setup, Code Review | [@agustin](https://github.com/agustin) |
| **Alejo** | Desarrollador Frontend | [@alejo](https://github.com/alejo) |
| **Abri** | Desarrollador Frontend | [@abri](https://github.com/abri) |
| **Alejandra** | Desarrollador Frontend | [@alejandra](https://github.com/alejandra) |
| **Ariana** | Desarrollador Frontend | [@ariana](https://github.com/ariana) |

---

## 🔗 Enlaces Importantes

- 🎨 **Diseño en Figma**: [Ver Diseño](https://www.figma.com/design/yLpwpyNaln8VWUm3drU2yk/Wasifix?node-id=0-1&t=iH8CleUzuKxZiYc8-1)
- 📋 **Gestión en Trello**: [Tablero del Proyecto](#)
- 📚 **Documentación React**: [react.dev](https://react.dev)
- 🎨 **Documentación Tailwind**: [tailwindcss.com](https://tailwindcss.com/docs)
- ⚡ **Documentación Vite**: [vitejs.dev](https://vitejs.dev)

---

## 📊 Progreso del Proyecto

### Sprint Actual
🚧 **Sprint 1**: Setup Inicial y Componentes Base

### Tasks Completadas
- [x] Setup inicial del proyecto con Vite
- [x] Configuración de Tailwind CSS
- [x] Configuración de ESLint
- [x] Estructura de carpetas
- [ ] Componentes UI base (Button, Card, Input, Badge)
- [ ] Layout components (Navbar, Footer)
- [ ] Landing Page - Secciones

### Próximos Sprints
- **Sprint 2**: Landing Page completa
- **Sprint 3**: Autenticación y Routing
- **Sprint 4**: Búsqueda y Perfiles
- **Sprint 5**: Dashboard y Solicitudes

---

## 🤝 Contribuir

### Para contribuir al proyecto:

1. **Toma una tarea del Trello**
2. **Crea tu rama feature** siguiendo la nomenclatura
3. **Desarrolla tu componente** siguiendo las convenciones
4. **Haz commits frecuentes** con mensajes descriptivos
5. **Sincroniza con develop** regularmente
6. **Crea un Pull Request** cuando termines
7. **Espera el code review** de Agustín

### Code Review Checklist
- [ ] El código sigue las convenciones del proyecto
- [ ] Los componentes son reutilizables y modulares
- [ ] Se usa Tailwind correctamente (clases core)
- [ ] No hay errores de ESLint
- [ ] El componente es responsive
- [ ] Los commits tienen mensajes descriptivos
- [ ] La rama está actualizada con develop

---

## ❓ FAQ

### ¿Puedo crear mis propias clases de Tailwind?
❌ No, solo usar las clases core de Tailwind porque no tenemos compilador custom.

### ¿Debo hacer tests?
No es obligatorio por ahora, pero si quieres hacerlos son bienvenidos.

### ¿Qué hago si tengo conflictos en el merge?
1. Comunícate con Agustín
2. Resuelve los conflictos localmente
3. Prueba que todo funcione
4. Haz commit de la resolución
5. Push nuevamente

### ¿Puedo trabajar en múltiples componentes a la vez?
Es mejor enfocarse en uno a la vez para facilitar el code review y evitar conflictos.

### ¿Cómo sé qué tarea tomar?
Revisa el Trello, toma las tareas marcadas como disponibles que se ajusten a tu nivel y coordina con el equipo.

---

## 📄 Licencia

Este proyecto es privado y está bajo desarrollo para fines educativos.

---

## 🙏 Agradecimientos

Gracias a todo el equipo por su dedicación y esfuerzo en este proyecto.

---

**¡Happy Coding!** 🚀

Si tienes dudas, consulta con Agustín o revisa la documentación oficial de las tecnologías que estamos usando.

# Componentes Usos

## Input

```js
import Input from "./components/ui/Input"
import { FiMail, FiUser } from "react-icons/fi"

      <div className="space-y-6 max-w-md">
        <h2 className="text-2xl font-bold text-white">Pruebas de Input</h2>

        {/* Input básico */}
        <Input 
          label="Nombre"
          placeholder="Ingresa tu nombre"
        />

        {/* Input con ícono */}
        <Input 
          label="Email"
          type="email"
          placeholder="ejemplo@correo.com"
          icon={<FiMail />}
        />

        {/* Input password */}
        <Input 
          label="Contraseña"
          type="password"
          placeholder="********"
        />

        {/* Input con error */}
        <Input 
          label="Usuario"
          placeholder="usuario123"
          error="Este usuario ya existe"
        />

        {/* Input requerido con helperText */}
        <Input 
          label="Teléfono"
          type="tel"
          placeholder="+54 11 1234-5678"
          required
          helperText="Formato: +54 11 1234-5678"
        />

        {/* Input disabled */}
        <Input 
          label="Email confirmado"
          value="usuario@ejemplo.com"
          disabled
        />

        {/* Input con contador de caracteres */}
        <Input 
          label="Biografía"
          placeholder="Cuéntanos sobre ti"
          maxLength={100}
          showCharCount
        />

        {/* Input número con ícono */}
        <Input 
          label="Edad"
          type="number"
          placeholder="18"
          icon={<FiUser />}
        />
      </div>

```

## Badge

```js
<div className="space-y-8 p-8">
        <h2 className="text-3xl font-bold text-white mb-6">Ejemplos de Badges</h2>
        
        {/* Variantes básicas */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Variantes</h3>
          <div className="flex flex-wrap gap-3">
            <Badge variant="success">Verificado</Badge>
            <Badge variant="warning">Pendiente</Badge>
            <Badge variant="error">Cancelado</Badge>
            <Badge variant="info">Nueva Solicitud</Badge>
            <Badge variant="default">Inactivo</Badge>
          </div>
        </div>

        {/* Diferentes tamaños */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Tamaños</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="success" size="xs">Extra Small</Badge>
            <Badge variant="success" size="sm">Small</Badge>
            <Badge variant="success" size="md">Medium</Badge>
            <Badge variant="success" size="lg">Large</Badge>
          </div>
        </div>

        {/* Con animación pulse */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Con Animación Pulse</h3>
          <div className="flex flex-wrap gap-3">
            <Badge variant="error" pulse>¡Urgente!</Badge>
            <Badge variant="warning" pulse>Atención</Badge>
          </div>
        </div>

        {/* Block vs Inline */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Block vs Inline</h3>
          <Badge variant="info" block>Badge en modo Block (ocupa todo el ancho)</Badge>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="success">Badge 1</Badge>
            <Badge variant="warning">Badge 2</Badge>
            <Badge variant="error">Badge 3</Badge>
          </div>
        </div>

        {/* Casos de uso reales */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">Casos de Uso Reales</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="success" size="sm">5K+ Profesionales</Badge>
            <Badge variant="info" size="sm">Top Rated</Badge>
            <Badge variant="warning" size="sm">En Progreso</Badge>
            <Badge variant="error" size="sm">Cancelada</Badge>
            <Badge variant="success" size="xs">✓ Verificado</Badge>
          </div>
        </div>
      </div>
```

## Modal

```js
import { useState } from "react"

const [isModalOpen, setIsModalOpen] = useState(false)

<div>
  <button onClick={() => setIsModalOpen(true)}>
    Abrir Modal
  </button>

  <Modal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    title="Mi Primer Modal"
    size="md"
  >
    <p>Contenido del modal aquí...</p>
  </Modal>
</div>
```