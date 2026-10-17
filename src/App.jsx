import React, { useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollStorytelling } from './components/ScrollStorytelling';

import { HomePage } from './pages/HomePage';
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const CalculatorsPage = React.lazy(() => import('./pages/CalculatorsPage').then(m => ({ default: m.CalculatorsPage })));
const InvestorZonePage = React.lazy(() => import('./pages/InvestorZonePage').then(m => ({ default: m.InvestorZonePage })));
const VideosPage = React.lazy(() => import('./pages/VideosPage').then(m => ({ default: m.VideosPage })));
const PartnerPage = React.lazy(() => import('./pages/PartnerPage').then(m => ({ default: m.PartnerPage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const LegalPage = React.lazy(() => import('./pages/LegalPage').then(m => ({ default: m.LegalPage })));
const MutualFundsPage = React.lazy(() => import('./pages/MutualFundsPage').then(m => ({ default: m.MutualFundsPage })));

import Chatbot from './components/Chatbot';
import { COMPANY_INFO } from './data/websiteData';

function PageLoadingFallback() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg)' }}>
      <div style={{ textAlign: 'center' }}>
        <div className="pulse-dot-green" style={{ width: '14px', height: '14px', margin: '0 auto 1rem auto' }} />
        <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary)' }}>Loading Assure Platform...</div>
      </div>
    </div>
  );
}

function AppContent() {
  const [activeModal, setActiveModal] = useState(null);
  const location = useLocation();

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Scroll to Top and Scroll Storytelling Engine */}
      <ScrollToTop />
      <ScrollStorytelling />

      {/* Global Navigation Header */}
      <Header onOpenModal={setActiveModal} />

      {/* Page by Page Routing with Smooth Page Transition (Requirement 25) */}
      <main style={{ flex: 1 }} key={location.pathname} className="page-fade-enter">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              {/* 1. Home Page */}
              <Route path="/" element={<HomePage onOpenModal={setActiveModal} />} />

              {/* 2. About Us */}
              <Route path="/about-us" element={<AboutPage onOpenModal={setActiveModal} />} />

              {/* 3. Products Main & Sub-pages */}
              <Route path="/products" element={<ProductsPage onOpenModal={setActiveModal} />} />
              <Route path="/products/:productId" element={<ProductsPage onOpenModal={setActiveModal} />} />
              <Route path="/mutual-funds" element={<MutualFundsPage onOpenModal={setActiveModal} />} />
              <Route path="/fixed-deposits" element={<ProductsPage onOpenModal={setActiveModal} defaultProduct="fixed-deposits" />} />
              <Route path="/bonds" element={<ProductsPage onOpenModal={setActiveModal} defaultProduct="bonds" />} />
              <Route path="/life-insurance" element={<ProductsPage onOpenModal={setActiveModal} defaultProduct="life-insurance" />} />
              <Route path="/general-insurance" element={<ProductsPage onOpenModal={setActiveModal} defaultProduct="general-insurance" />} />
              <Route path="/tax-saving" element={<ProductsPage onOpenModal={setActiveModal} defaultProduct="tax-saving" />} />
              <Route path="/pms-aif" element={<ProductsPage onOpenModal={setActiveModal} defaultProduct="pms-aif" />} />

              {/* 4. Financial Calculators */}
              <Route path="/calculators" element={<CalculatorsPage onOpenModal={setActiveModal} />} />
              <Route path="/sip-calculator" element={<CalculatorsPage onOpenModal={setActiveModal} />} />
              <Route path="/retirement-calculator" element={<CalculatorsPage onOpenModal={setActiveModal} />} />
              <Route path="/education-calculator" element={<CalculatorsPage onOpenModal={setActiveModal} />} />
              <Route path="/marriage-calculator" element={<CalculatorsPage onOpenModal={setActiveModal} />} />
              <Route path="/vacation-calculator" element={<CalculatorsPage onOpenModal={setActiveModal} />} />

              {/* 5. Investor Zone & Downloads */}
              <Route path="/investor-zone" element={<InvestorZonePage onOpenModal={setActiveModal} />} />
              <Route path="/mf-forms" element={<InvestorZonePage onOpenModal={setActiveModal} />} />

              {/* 6. Educational Videos */}
              <Route path="/educational-videos" element={<VideosPage onOpenModal={setActiveModal} />} />

              {/* 7. Become a Partner */}
              <Route path="/become-a-partner" element={<PartnerPage />} />
              <Route path="/partner" element={<PartnerPage />} />

              {/* 8. Contact Us */}
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* 9. Legal & Compliance Pages */}
              <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
              <Route path="/disclaimer" element={<LegalPage type="disclaimer" />} />
              <Route path="/disclosure" element={<LegalPage type="disclosure" />} />
              <Route path="/risk-factors" element={<LegalPage type="risk-factors" />} />
              <Route path="/code-of-conduct" element={<LegalPage type="code-of-conduct" />} />

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer onOpenModal={setActiveModal} />

        {/* Global 24/7 AI Financial Assistant Chatbot & Quick Actions */}
        <Chatbot onOpenModal={setActiveModal} />

        {/* Global Interactive Modals */}
        <Modals 
          modalType={activeModal} 
          onClose={() => setActiveModal(null)} 
        />

      </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
