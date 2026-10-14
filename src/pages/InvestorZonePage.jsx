import React from 'react';
import { Link } from 'react-router-dom';
import { InvestorZone } from '../components/InvestorZone';
import { QuickToolsBar } from '../components/QuickToolsBar';
import { Shield, ExternalLink, ArrowRight, FileCheck, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function InvestorZonePage({ onOpenModal }) {
  return (
    <div>
      
      {/* Section 1: Page Header Banner (Dark) */}
      <section className="section-dark-navy" style={{ padding: '4.5rem 0 3.5rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#38bdf8', fontWeight: 600 }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Investor Zone</span>
            <span>/</span>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>Self-Service & Downloads</span>
          </div>

          <div className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
            Official Compliance & Portals
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
            Investor Zone: <span className="gradient-text">KYC, Forms & Tools</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6 }}>
            Direct access to official SEBI, KRA, and Registrar service portals to check KYC, verify PAN-Aadhaar links, update contact details, opt-in for nomination, and download standard mutual fund forms.
          </p>
        </div>
      </section>

      {/* Section 2: Quick Market Tools (Light) */}
      <QuickToolsBar onOpenModal={onOpenModal} theme="light" />

      {/* Section 3: Official Portals & Forms Download (Dark) */}
      <InvestorZone onOpenModal={onOpenModal} theme="dark" />

      {/* Section 4: Physical Paperwork Drop-off & Registrar Courier Assistance (Light) */}
      <section className="section-wrapper" style={{ background: '#f8fafc', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ 
            background: '#ffffff', 
            borderRadius: '24px', 
            padding: '3rem', 
            border: '1px solid #e2e8f0', 
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div>
              <span className="badge-tag accent-emerald">Physical Paperwork Support</span>
              <h3 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: 800, marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                Need Help with Physical Nomination or Transmission Forms?
              </h3>
              <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '620px', margin: 0, lineHeight: 1.6 }}>
                Physical forms requiring signature verification or gazetted notarization can be submitted directly at our Gomtinagar, Lucknow branch office. Our operations team handles AMC submission and acknowledgment receipts.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenModal('consultation')}
                className="btn-primary"
                style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
              >
                <span>Request Form Pre-Fill Assistance</span>
                <ArrowRight size={16} />
              </button>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-secondary"
                style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
              >
                <span>Helpline: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
