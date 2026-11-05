import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ServicesPage from './pages/Services/ServicesPage';
import ContactPage from './pages/Contact/ContactPage';
import LegalPage from './pages/Legal/LegalPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import useAnalyticsTracker from './utils/useAnalyticsTracker';
import { PRIVACY, TERMS } from './data/legalData';

const AdminPage = lazy(() => import('./pages/Admin/AdminPage'));

export function App() {
  useAnalyticsTracker();

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/privacy" element={<LegalPage doc={PRIVACY} />} />
            <Route path="/terms" element={<LegalPage doc={TERMS} />} />
            {/* Old URLs from earlier versions of the site */}
            <Route path="/solutions" element={<Navigate to="/services" replace />} />
            <Route path="/products" element={<Navigate to="/services" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
