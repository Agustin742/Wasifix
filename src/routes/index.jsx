import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes de estructura y protección
/* 
    Dejo el import por si en un fututo le vemos utilidad añadir el Layout 

    import Layout from '../components/layout/Layout';
*/
import ProtectedRoute from './ProtectedRoute';
import ScrollToTop from '../utils/ScrollToTop';

// Importación de las páginas
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RegisterProfessionalPage from '../pages/RegisterProfessionalPage';
import SearchPage from '../pages/SearchPage';
import ProfessionalProfilePage from '../pages/ProfessionalProfilePage';
import HowItWorksPage from '../pages/HowItWorksPage';
import ContactPage from '../pages/ContactPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import DashboardPage from '../pages/DashboardPage';
import UserProfilePage from '../pages/UserProfilePage';
import RequestServicePage from '../pages/RequestServicePage';
import RequestDetailPage from '../pages/RequestDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* --- RUTAS PÚBLICAS --- */}
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="register-professional" element={<RegisterProfessionalPage />} />
          <Route path="profesionales" element={<SearchPage />} />
          <Route path="profesional/:id" element={<ProfessionalProfilePage />} />
          <Route path="como-funciona" element={<HowItWorksPage />} />
          <Route path="contacto" element={<ContactPage />} />
          <Route path="terminos" element={<TermsPage />} />
          <Route path="privacidad" element={<PrivacyPage />} />

          {/* --- RUTAS PRIVADAS --- */}
          <Route 
            path="dashboard" 
            element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} 
          />
          <Route 
            path="mi-perfil" 
            element={<ProtectedRoute><UserProfilePage /></ProtectedRoute>} 
          />
          <Route 
            path="request/:professionalId" 
            element={<ProtectedRoute><RequestServicePage /></ProtectedRoute>} 
          />
          <Route 
            path="mis-solicitudes/:id" 
            element={<ProtectedRoute><RequestDetailPage /></ProtectedRoute>} 
          />

          {/* --- RUTA NOT FOUND --- */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;