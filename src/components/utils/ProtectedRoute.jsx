import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, redirectPath } = useContext(AuthContext);

    // Si el usuario no está autenticado, redirige a la página de login
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: redirectPath }} />;
    }

    // Si está autenticado, renderiza el componente hijo
    return children;
};

export default ProtectedRoute;