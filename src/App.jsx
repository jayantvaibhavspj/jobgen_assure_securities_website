import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { CalculatorsPage } from './pages/CalculatorsPage';
import { InvestorZonePage } from './pages/InvestorZonePage';
import { VideosPage } from './pages/VideosPage';
import { PartnerPage } from './pages/PartnerPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

import Chatbot from './components/Chatbot';
import { COMPANY_INFO } from './data/websiteData';

export function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <BrowserRouter>
      <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Scroll to Top on every route change */}
        <ScrollToTop />

        {/* Global Navigation Header */}
        <Header onOpenModal={setActiveModal} />

        {/* Page by Page Routing */}
        <main style={{ flex: 1 }}>
          <Routes>
            {/* 1. Home Page */}
            <Route path="/" element={<HomePage onOpenModal={setActiveModal} />} />

            {/* 2. About Us */}
            <Route path="/about-us" element={<AboutPage onOpenModal={setActiveModal} />} />

            {/* 3. Products Main & Sub-pages */}
            <Route path="/products" element={<ProductsPage onOpenModal={setActiveModal} />} />
            <Route path="/products/:productId" element={<ProductsPage onOpenModal={setActiveModal} />} />
            <Route path="/mutual-funds" element={<ProductsPage onOpenModal={setActiveModal} defaultProduct="mutual-funds" />} />
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
    </BrowserRouter>
  );
}

export default App;
