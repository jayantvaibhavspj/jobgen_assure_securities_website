import React from 'react';
import { Link } from 'react-router-dom';
import { InvestorZone } from '../components/InvestorZone';
import { ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function InvestorZonePage({ onOpenModal }) {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. Editorial Page Header (LIGHT) */}
      <section className="section-theme-light" style={{ padding: 'clamp(5rem, 8vw, 7rem) 0 clamp(2.5rem, 4vw, 3.5rem) 0', borderBottom: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Regulatory Architecture Watermark */}
        <div 
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '45%',
            backgroundImage: 'url(/assets/hero-finance-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
            maskImage: 'linear-gradient(to right, transparent, black 80%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 80%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className="eyebrow-label">
            <span>OFFICIAL COMPLIANCE & REGULATORY PORTALS</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.8rem, 5.2vw, 4.4rem)', color: 'var(--color-text)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Investor <span className="text-blue">Zone</span> & <span className="text-red">Service Desk</span>
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', color: 'var(--color-text-secondary)', maxWidth: '720px', lineHeight: 1.65 }}>
            Direct access to official SEBI, KRA, and Registrar portals to verify KYC compliance, validate PAN-Aadhaar links, execute electronic nomination modifications, and download mutual fund application forms.
          </p>
        </div>
      </section>

      {/* 2. Main Investor Zone Component (DARK) */}
      <InvestorZone onOpenModal={onOpenModal} theme="dark" />

      {/* 3. Physical Paperwork Assistance Strip (LIGHT) */}
      <section className="section-pad section-theme-light" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div 
            style={{ 
              background: 'var(--color-bg-card)', 
              borderRadius: '2px', 
              padding: 'clamp(2rem, 4vw, 3.5rem)', 
              border: '1px solid var(--color-border)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '2rem' 
            }}
          >
            <div>
              <div className="eyebrow-label">
                <span>PAPERWORK & PHYSICAL TRANSMISSION</span>
              </div>
              <h3 style={{ fontSize: '1.85rem', color: 'var(--color-text)', marginBottom: '0.65rem', fontFamily: 'var(--font-serif)' }}>
                Need physical nomination or folio transmission assistance?
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.96rem', maxWidth: '580px', lineHeight: 1.6 }}>
                Our Lucknow office provides end-to-end guidance for physical folio retrieval, signature updates, and legal heir wealth succession with CAMS and KFintech.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenModal && onOpenModal('contact-consult')}
                className="btn-gold"
                style={{ height: '48px', fontSize: '0.84rem' }}
              >
                <span>Request Paperwork Help</span>
                <ArrowRight size={14} />
              </button>

              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-outline"
                style={{ height: '48px', fontSize: '0.84rem' }}
              >
                <Phone size={13} color="var(--color-gold)" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default InvestorZonePage;
