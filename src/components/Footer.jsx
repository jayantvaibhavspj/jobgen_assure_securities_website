import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Shield, AlertTriangle, ArrowUp, ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO, LEGAL_DISCLOSURES } from '../data/websiteData';

export function Footer({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#090d16', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.08)', position: 'relative' }}>
      
      {/* Upper Footer Links */}
      <div className="container" style={{ padding: '5rem 1.5rem 3rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
          
          {/* Col 1: Brand & Bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img 
                src="/assets/logo.png" 
                alt="Assure Securities Logo" 
                style={{ height: '42px', background: '#ffffff', padding: '4px 8px', borderRadius: '6px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/new-logo.jpg';
                }}
              />
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  ASSURE <span style={{ color: '#38bdf8' }}>SECURITIES</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>AMFI Reg. Distributor</div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              In an era of constantly changing and volatile financial markets, investors need a qualified, trained, and unbiased professional to help them achieve short-term and long-term milestones.
            </p>

            {/* Social Icons with inline SVGs */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href={COMPANY_INFO.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', transition: '0.2s' }}
                title="Facebook"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
              <a 
                href={COMPANY_INFO.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', transition: '0.2s' }}
                title="Twitter / X"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a 
                href={COMPANY_INFO.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', transition: '0.2s' }}
                title="Instagram"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href={COMPANY_INFO.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', transition: '0.2s' }}
                title="LinkedIn"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700, marginBottom: '1.25rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <button onClick={() => onOpenModal('client-login')} style={{ textAlign: 'left', color: '#38bdf8' }}>Client Portfolio Login</button>
              <button onClick={() => onOpenModal('partner-login')} style={{ textAlign: 'left', color: '#cbd5e1' }}>Partner / Sub-broker Login</button>
              <Link to="/calculators" style={{ color: '#cbd5e1' }}>Financial Calculators</Link>
              <Link to="/investor-zone" style={{ color: '#cbd5e1' }}>MF Forms & Downloads</Link>
              <Link to="/educational-videos" style={{ color: '#cbd5e1' }}>Educational Videos</Link>
              <Link to="/become-a-partner" style={{ color: '#cbd5e1' }}>Become a Partner</Link>
              <Link to="/about-us" style={{ color: '#cbd5e1' }}>Who We Are</Link>
            </div>
          </div>

          {/* Col 3: Our Distribution Services */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700, marginBottom: '1.25rem' }}>Our Products</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem' }}>
              <Link to="/products/mutual-funds" style={{ color: '#cbd5e1' }}>Mutual Funds (SIP & Lumpsum)</Link>
              <Link to="/products/fixed-deposits" style={{ color: '#cbd5e1' }}>Corporate Fixed Deposits (AAA)</Link>
              <Link to="/products/bonds" style={{ color: '#cbd5e1' }}>Sovereign Gold Bonds & 54EC</Link>
              <Link to="/products/life-insurance" style={{ color: '#cbd5e1' }}>Life & Term Insurance</Link>
              <Link to="/products/general-insurance" style={{ color: '#cbd5e1' }}>General & Health Insurance</Link>
              <Link to="/products/tax-saving" style={{ color: '#cbd5e1' }}>Tax Saving Solutions (80C / 80D)</Link>
              <Link to="/products/pms-aif" style={{ color: '#cbd5e1' }}>PMS / AIF for HNIs</Link>
            </div>
          </div>

          {/* Col 4: Get In Touch */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700, marginBottom: '1.25rem' }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <MapPin size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>2/163 Vishal Khand, Gomtinagar, Lucknow - 226010, U.P.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Phone size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>Office: {COMPANY_INFO.officePhone}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Phone size={18} color="#10b981" style={{ flexShrink: 0 }} />
                <span>Mobile: {COMPANY_INFO.phone}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <Mail size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Risk Disclaimer Box */}
        <div style={{ marginTop: '3.5rem', padding: '1.75rem', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#f59e0b', fontSize: '0.9rem', fontWeight: 700 }}>
            <AlertTriangle size={17} />
            <span>Statutory Risk Factors & SEBI Regulatory Notice</span>
          </div>

          <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            {LEGAL_DISCLOSURES.riskFactor}
          </p>

          <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
            {LEGAL_DISCLOSURES.commissionDisclosure}
          </p>
        </div>

        {/* Credentials Bar */}
        <div style={{ marginTop: '1.5rem', textAlign: 'center', padding: '0.85rem', background: 'rgba(56, 189, 248, 0.08)', borderRadius: '10px', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#38bdf8', fontSize: '0.82rem', fontWeight: 600 }}>
          {LEGAL_DISCLOSURES.arnNotice}
        </div>

        {/* Bottom Bar: Copyright & Compliance Pages */}
        <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem' }}>
          <div>
            © {new Date().getFullYear()} Assure Securities. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/privacy-policy" style={{ color: '#94a3b8' }}>Privacy Policy</Link>
            <span style={{ color: '#475569' }}>|</span>
            <Link to="/disclaimer" style={{ color: '#94a3b8' }}>Disclaimer</Link>
            <span style={{ color: '#475569' }}>|</span>
            <Link to="/disclosure" style={{ color: '#94a3b8' }}>Disclosure</Link>
            <span style={{ color: '#475569' }}>|</span>
            <Link to="/risk-factors" style={{ color: '#94a3b8' }}>AMFI Risk Factor</Link>
            <span style={{ color: '#475569' }}>|</span>
            <Link to="/code-of-conduct" style={{ color: '#94a3b8' }}>Code of Conduct</Link>
          </div>

          <button 
            onClick={scrollToTop}
            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#38bdf8', fontWeight: 600 }}
            title="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
