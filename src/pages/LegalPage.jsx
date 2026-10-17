import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';
import { LEGAL_DISCLOSURES, COMPANY_INFO } from '../data/websiteData';

export function LegalPage({ type }) {
  const location = useLocation();
  const currentType = type || (location.pathname.includes('privacy') ? 'privacy' : location.pathname.includes('disclaimer') ? 'disclaimer' : location.pathname.includes('disclosure') ? 'disclosure' : location.pathname.includes('code-of-conduct') ? 'code-of-conduct' : 'risk-factors');

  const titles = {
    privacy: "Privacy Policy",
    disclaimer: "Disclaimer & Terms of Use",
    disclosure: "Commission & Regulatory Disclosure",
    'risk-factors': "AMFI Mandatory Risk Factors",
    'code-of-conduct': "AMFI Code of Conduct"
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. Editorial Page Header (DARK) */}
      <section className="section-theme-dark" style={{ padding: 'clamp(5rem, 8vw, 7rem) 0 clamp(2.5rem, 4vw, 3.5rem) 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          
          <div className="eyebrow-label">
            <span>STATUTORY & REGULATORY GOVERNANCE</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.8rem, 5.2vw, 4.4rem)', color: 'var(--color-text)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            {titles[currentType] || 'Statutory Disclosure'}
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: 'var(--color-text-secondary)', maxWidth: '720px', lineHeight: 1.65 }}>
            {COMPANY_INFO.name} • {LEGAL_DISCLOSURES.arnNotice}
          </p>
        </div>
      </section>

      {/* 2. Legal Document Body with Navigation (LIGHT) */}
      <div className="section-theme-light" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ display: 'flex', gap: '1.5rem', overflowX: 'auto', padding: '0.75rem 1rem' }}>
          {[
            { id: 'privacy', label: 'Privacy Policy', path: '/privacy-policy' },
            { id: 'disclaimer', label: 'Disclaimer', path: '/disclaimer' },
            { id: 'disclosure', label: 'Commission Disclosure', path: '/disclosure' },
            { id: 'risk-factors', label: 'Risk Factors', path: '/risk-factors' },
            { id: 'code-of-conduct', label: 'Code of Conduct', path: '/code-of-conduct' }
          ].map((tab) => (
            <Link
              key={tab.id}
              to={tab.path}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: currentType === tab.id ? 'var(--color-gold)' : 'var(--color-text-muted)',
                padding: '0.4rem 0.65rem',
                borderBottom: currentType === tab.id ? '2px solid var(--color-gold)' : '2px solid transparent',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Legal Document Body (LIGHT) */}
      <section className="section-pad section-theme-light" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          
          <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '2px', padding: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.8, fontSize: '0.96rem', color: 'var(--color-text-secondary)' }}>
            
            {currentType === 'privacy' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem' }}>
                  Privacy & Confidentiality Commitment
                </h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  This privacy policy sets out how Assure Securities collects, protects, and handles personal information shared through this portal. Assure Securities is uncompromisingly committed to protecting investor privacy in accordance with SEBI Information Technology standards.
                </p>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginTop: '2rem', marginBottom: '0.5rem' }}>
                  Statutory Data Collection
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  We collect personal details including Full Name, Mobile Number, Email Address, Date of Birth, Permanent Account Number (PAN), Bank Account details, and Aadhaar strictly for the statutory execution of Know-Your-Customer (KYC) compliance and mutual fund transaction processing mandated by SEBI, AMFI, and partner AMCs.
                </p>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginTop: '2rem', marginBottom: '0.5rem' }}>
                  Non-Disclosure Standard
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  {LEGAL_DISCLOSURES.privacySummary}
                </p>
              </div>
            )}

            {currentType === 'disclaimer' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem' }}>
                  Website Disclaimer & Terms of Use
                </h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  {LEGAL_DISCLOSURES.disclaimerText}
                </p>
                <div style={{ padding: '1.25rem', background: 'rgba(255, 255, 255, 0.02)', borderLeft: '2px solid var(--color-gold)', margin: '1.5rem 0' }}>
                  {LEGAL_DISCLOSURES.riskFactor}
                </div>
              </div>
            )}

            {currentType === 'disclosure' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem' }}>
                  Commission & Regular Plan Disclosure
                </h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  {LEGAL_DISCLOSURES.commissionDisclosure}
                </p>
                <div style={{ padding: '1.25rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--color-border)', borderRadius: '2px', fontFamily: 'var(--font-mono)', fontSize: '0.84rem' }}>
                  {LEGAL_DISCLOSURES.arnNotice}
                </div>
              </div>
            )}

            {currentType === 'risk-factors' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem' }}>
                  SEBI Mandatory Risk Factors
                </h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  {LEGAL_DISCLOSURES.riskFactor}
                </p>
              </div>
            )}

            {currentType === 'code-of-conduct' && (
              <div>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem' }}>
                  AMFI Code of Conduct
                </h2>
                <p style={{ marginBottom: '1.5rem' }}>
                  Assure Securities abides stringently by the AMFI Code of Conduct for Mutual Fund Distributors. We conduct our business with integrity, fairness, diligence, and full transparency.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <li>Uphold high standards of integrity and fair dealing.</li>
                  <li>Act with due skill, care, and diligence in all client interactions.</li>
                  <li>Disclose all relevant information, including commissions and potential risk factors.</li>
                  <li>Ensure client confidentiality and data security at all times.</li>
                </ul>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}

export default LegalPage;
