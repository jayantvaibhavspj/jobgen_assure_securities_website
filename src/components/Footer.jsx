import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Shield, AlertTriangle, ArrowUp, ExternalLink, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO, LEGAL_DISCLOSURES } from '../data/websiteData';

export function Footer({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{ 
        background: 'var(--color-primary)', 
        color: '#94a3b8', 
        borderTop: '1px solid rgba(255,255,255,0.08)', 
        position: 'relative' 
      }}
    >
      {/* Upper Footer Links */}
      <div className="container" style={{ padding: '5.5rem 1.5rem 3.5rem 1.5rem' }}>
        
        {/* Brand & Contact Strip */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            marginBottom: '3.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img 
              src="/assets/new-logo.jpg" 
              alt="Assure Securities Logo" 
              style={{ height: '46px', background: '#ffffff', padding: '4px 8px', borderRadius: '8px' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/logo.png';
              }}
            />
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                ASSURE <span style={{ color: 'var(--color-accent)' }}>SECURITIES</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
                AMFI Registered Mutual Fund Distributor • ARN-182137
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
              <Phone size={16} color="var(--color-accent)" />
              <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: 'inherit' }}>{COMPANY_INFO.phone}</a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
              <Mail size={16} color="var(--color-accent)" />
              <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'inherit' }}>{COMPANY_INFO.email}</a>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <a 
                href={COMPANY_INFO.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', transition: '0.2s' }}
                title="Facebook"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
              <a 
                href={COMPANY_INFO.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', transition: '0.2s' }}
                title="Twitter / X"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a 
                href={COMPANY_INFO.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', transition: '0.2s' }}
                title="Instagram"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href={COMPANY_INFO.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', transition: '0.2s' }}
                title="LinkedIn"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* 5 Distinct Columns Specified by User */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '2.5rem',
            marginBottom: '4rem'
          }}
        >
          {/* Col 1: COMPANY */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Company
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <Link to="/about-us" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>About Assure</Link>
              <Link to="/contact-us" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>Contact Office</Link>
              <Link to="/become-a-partner" style={{ color: '#cbd5e1', transition: 'color 0.2s' }}>Careers & Partnerships</Link>
              <button onClick={() => onOpenModal && onOpenModal('client-login')} style={{ textAlign: 'left', background: 'none', border: 'none', padding: 0, color: 'var(--color-accent)', cursor: 'pointer', fontSize: '0.88rem' }}>
                Client Portal Login
              </button>
            </div>
          </div>

          {/* Col 2: INVESTMENTS */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Investments
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <Link to="/products/mutual-funds" style={{ color: '#cbd5e1' }}>Mutual Funds (SIP & Lumpsum)</Link>
              <Link to="/products/fixed-deposits" style={{ color: '#cbd5e1' }}>Corporate Fixed Deposits (AAA)</Link>
              <Link to="/products/bonds" style={{ color: '#cbd5e1' }}>Sovereign Gold Bonds</Link>
              <Link to="/products/pms-aif" style={{ color: '#cbd5e1' }}>PMS / AIF Solutions</Link>
              <Link to="/products/life-insurance" style={{ color: '#cbd5e1' }}>Term & Health Insurance</Link>
            </div>
          </div>

          {/* Col 3: TOOLS */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Tools
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <Link to="/calculators" style={{ color: '#cbd5e1' }}>SIP Calculator</Link>
              <Link to="/calculators" style={{ color: '#cbd5e1' }}>Step-Up SIP Modeler</Link>
              <Link to="/calculators" style={{ color: '#cbd5e1' }}>Retirement Calculator</Link>
              <Link to="/investor-zone" style={{ color: '#cbd5e1' }}>Fund Comparison Tool</Link>
              <Link to="/investor-zone" style={{ color: '#cbd5e1' }}>Daily NAV Tracker</Link>
            </div>
          </div>

          {/* Col 4: RESOURCES */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Resources
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <a href="#insights" style={{ color: '#cbd5e1' }}>Insights & Research</a>
              <Link to="/educational-videos" style={{ color: '#cbd5e1' }}>Video Masterclasses</Link>
              <Link to="/investor-zone" style={{ color: '#cbd5e1' }}>AMC Download Center</Link>
              <a href="#faq-section" style={{ color: '#cbd5e1' }}>Investor FAQs</a>
              <Link to="/investor-zone" style={{ color: '#cbd5e1' }}>KYC Onboarding Guides</Link>
            </div>
          </div>

          {/* Col 5: LEGAL & OFFICE */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              Legal & Address
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.84rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <MapPin size={16} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>2/163 Vishal Khand, Gomtinagar, Lucknow - 226010, U.P.</span>
              </div>
              <a href="#legal-terms" style={{ color: '#94a3b8' }}>Privacy Policy</a>
              <a href="#legal-terms" style={{ color: '#94a3b8' }}>Terms of Service</a>
              <a href="#legal-terms" style={{ color: '#94a3b8' }}>SEBI Commission Disclosures</a>
              <a href="#legal-terms" style={{ color: '#94a3b8' }}>Statutory Risk Factors</a>
            </div>
          </div>

        </div>

        {/* Regulatory Disclosures Box - PRESERVED COMPLETELY */}
        <div 
          id="legal-terms"
          style={{ 
            background: 'rgba(255, 255, 255, 0.03)', 
            border: '1px solid rgba(255, 255, 255, 0.07)', 
            borderRadius: '16px', 
            padding: '1.75rem', 
            marginBottom: '2.5rem' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#f59e0b', fontSize: '0.85rem', fontWeight: 700 }}>
            <AlertTriangle size={16} />
            <span>Statutory Risk Disclosure & Regulatory Transparency</span>
          </div>

          <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 0.85rem 0' }}>
            {LEGAL_DISCLOSURES.riskFactor}
          </p>

          <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 0.85rem 0' }}>
            {LEGAL_DISCLOSURES.commissionDisclosure}
          </p>

          <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
            <strong>Disclaimer:</strong> {LEGAL_DISCLOSURES.disclaimerText}
          </p>
        </div>

        {/* Copyright & AMFI Strip */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            fontSize: '0.82rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} Assure Securities. All Rights Reserved. • ARN-182137 (AMFI Reg. 20-Jul-2021 to 19-Jul-2027)
          </div>

          <button 
            onClick={scrollToTop}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem', 
              background: 'rgba(255,255,255,0.06)', 
              color: '#cbd5e1', 
              border: 'none', 
              padding: '0.4rem 0.85rem', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: 600,
              transition: 'background 0.2s'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
