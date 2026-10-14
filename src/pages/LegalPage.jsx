import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';
import { LEGAL_DISCLOSURES, COMPANY_INFO } from '../data/websiteData';

export function LegalPage({ type }) {
  const location = useLocation();
  const currentType = type || (location.pathname.includes('privacy') ? 'privacy' : location.pathname.includes('disclaimer') ? 'disclaimer' : location.pathname.includes('disclosure') ? 'disclosure' : 'risk-factors');

  const titles = {
    privacy: "Privacy Policy",
    disclaimer: "Disclaimer & Terms of Use",
    disclosure: "Commission & Regulatory Disclosure",
    'risk-factors': "AMFI Risk Factor Notice",
    'code-of-conduct': "AMFI Code of Conduct"
  };

  return (
    <div>
      
      {/* Section 1: Page Header Banner (Dark) */}
      <section className="section-dark-navy" style={{ padding: '4.5rem 0 3.5rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#38bdf8', fontWeight: 600 }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Legal & Compliance</span>
            <span>/</span>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>{titles[currentType] || 'Compliance'}</span>
          </div>

          <div className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
            SEBI & AMFI Compliance (ARN-182137)
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            {titles[currentType] || 'Statutory Disclosure'}
          </h1>
          <p style={{ fontSize: '1rem', color: '#cbd5e1' }}>
            {COMPANY_INFO.name} • {LEGAL_DISCLOSURES.arnNotice}
          </p>
        </div>
      </section>

      {/* Section 2: Legal Content Document (Light) */}
      <section className="section-wrapper" style={{ background: '#f8fafc', padding: '4.5rem 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ background: '#ffffff', padding: '3rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-card)', fontSize: '0.95rem', color: '#334155', lineHeight: 1.8 }}>
            
            {currentType === 'privacy' && (
              <div>
                <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '1rem' }}>Privacy Commitment</h2>
                <p style={{ marginBottom: '1.25rem' }}>
                  This privacy policy sets out how Assure Securities uses and protects any information that you share when you use this website. Assure Securities is committed to ensuring that your privacy is protected at all times.
                </p>
                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.5rem' }}>What We Collect</h3>
                <p style={{ marginBottom: '1.25rem' }}>
                  We collect personal information including Name, Mobile Number, Email, Date of Birth, Permanent Account Number (PAN), and Aadhaar details solely for the purpose of completing mandatory Know-Your-Customer (KYC) verification and executing investment transactions as regulated by SEBI and AMFI.
                </p>
                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Confidentiality Guarantee</h3>
                <p style={{ marginBottom: '1.25rem' }}>
                  We do not sell, distribute, or lease your personal information to third parties. We use industry-standard electronic, managerial, and physical protocols to prevent unauthorized access.
                </p>
              </div>
            )}

            {currentType === 'disclaimer' && (
              <div>
                <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '1rem' }}>Website Disclaimer</h2>
                <p style={{ marginBottom: '1.25rem' }}>
                  {LEGAL_DISCLOSURES.disclaimerText}
                </p>
                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Investment Responsibility</h3>
                <p style={{ marginBottom: '1.25rem' }}>
                  The investments and strategies discussed on this website may not be suitable for all investors. Investors are advised to evaluate their personal risk profile and read all scheme related documents before investing.
                </p>
              </div>
            )}

            {currentType === 'disclosure' && (
              <div>
                <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '1rem' }}>Commission & Regular Plan Disclosure</h2>
                <p style={{ marginBottom: '1.25rem' }}>
                  {LEGAL_DISCLOSURES.commissionDisclosure}
                </p>
                <p style={{ marginBottom: '1.25rem' }}>
                  In accordance with SEBI circular SEBI/IMD/CIR No.4/168230/09, Assure Securities discloses trailing commission rates received from various Asset Management Companies to clients at the time of investment.
                </p>
              </div>
            )}

            {currentType === 'risk-factors' && (
              <div>
                <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', padding: '1.25rem', borderRadius: '14px', marginBottom: '1.5rem', color: '#92400e', fontWeight: 600 }}>
                  Mutual Fund investments are subject to market risks. Read all scheme related documents carefully.
                </div>
                <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '1rem' }}>AMFI Statutory Risk Factors</h2>
                <p style={{ marginBottom: '1.25rem' }}>
                  {LEGAL_DISCLOSURES.riskFactor}
                </p>
              </div>
            )}

            {currentType === 'code-of-conduct' && (
              <div>
                <h2 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '1rem' }}>AMFI Code of Conduct</h2>
                <p style={{ marginBottom: '1.25rem' }}>
                  Assure Securities strictly adheres to the Code of Conduct prescribed by the Association of Mutual Funds in India (AMFI) for registered distributors (ARN-182137):
                </p>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li>Maintain highest standards of integrity, transparency, and fairness in all client dealings.</li>
                  <li>Make full disclosure of material risk factors, expense ratios, and lock-in terms.</li>
                  <li>Never induce investors through rebates, gifts, or unauthorized kickbacks.</li>
                  <li>Safeguard confidentiality of client folios, valuations, and personal data.</li>
                  <li>Provide prompt back-office support for nomination, bank mandate updates, and redemptions.</li>
                </ul>
              </div>
            )}

            <div style={{ marginTop: '2.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to="/" style={{ color: '#2563eb', fontWeight: 700 }}>&larr; Back to Home</Link>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Assure Securities • Lucknow</span>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Statutory Redressal & Grievance Mechanism (Dark) */}
      <section className="section-dark-navy" style={{ padding: '4.5rem 0', background: '#0b1120', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ 
            background: 'rgba(30, 41, 59, 0.75)', 
            borderRadius: '24px', 
            padding: '2.5rem', 
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                <ShieldCheck size={16} />
                <span>Investor Grievance Redressal</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
                SEBI SCORES & SMART ODR Portals
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: 0, maxWidth: '520px', lineHeight: 1.5 }}>
                Investors may register grievances on SEBI SCORES portal at scores.gov.in or the Online Dispute Resolution (ODR) portal smartodr.in if satisfaction is not achieved through distributor redressal.
              </p>
            </div>

            <a 
              href="https://scores.gov.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-emerald"
              style={{ padding: '0.75rem 1.4rem', fontSize: '0.9rem' }}
            >
              <span>Visit SEBI SCORES</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
