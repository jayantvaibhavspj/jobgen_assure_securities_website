import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, AlertTriangle } from 'lucide-react';
import { COMPANY_INFO, LEGAL_DISCLOSURES } from '../data/websiteData';

// Authentic Colorful Social Media Channels
const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/AssureSecurities",
    bg: "#1877F2",
    shadow: "rgba(24, 119, 242, 0.4)",
    hoverShadow: "0 6px 18px rgba(24, 119, 242, 0.65)",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Assure2010",
    bg: "#1DA1F2",
    shadow: "rgba(29, 161, 242, 0.4)",
    hoverShadow: "0 6px 18px rgba(29, 161, 242, 0.65)",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#ffffff">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/assuresecurities/",
    bg: "linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCAF45 100%)",
    shadow: "rgba(225, 48, 108, 0.4)",
    hoverShadow: "0 6px 18px rgba(225, 48, 108, 0.7)",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/assure-securitieslko/",
    bg: "#0A66C2",
    shadow: "rgba(10, 102, 194, 0.4)",
    hoverShadow: "0 6px 18px rgba(10, 102, 194, 0.65)",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="#ffffff">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@AssureSecurities",
    bg: "#FF0000",
    shadow: "rgba(255, 0, 0, 0.45)",
    hoverShadow: "0 6px 18px rgba(255, 0, 0, 0.7)",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  }
];

export function Footer({ onOpenModal }) {
  return (
    <footer className="footer-luxury">
      <div className="container">
        
        {/* Main 5-Column Institutional Footer Grid */}
        <div className="footer-grid">
          
          {/* Col 1: Brand & Standing */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <div style={{ marginBottom: '1.25rem' }}>
                <div 
                  style={{ 
                    background: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: '6px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
                    marginBottom: '0.75rem'
                  }}
                >
                  <img 
                    src="/assets/assure-official-logo.png" 
                    alt="Assure Securities" 
                    style={{ height: '38px', width: 'auto', display: 'block' }} 
                  />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                  AMFI Registered ARN-182137 • Wealth Management
                </div>
              </div>

              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: '340px' }}>
                Institutional wealth management and mutual fund distribution. Dedicated to safeguarding and compounding family wealth with fiduciary discipline across market cycles.
              </p>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.5rem' }}>
                <div>Registration: <strong style={{ color: 'var(--color-gold)' }}>ARN-182137</strong></div>
                <div>Validity: <strong>20 July 2021 – 19 July 2027</strong></div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: 600 }}>
                Official Channels
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {SOCIAL_LINKS.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Assure Securities on ${s.name}`}
                    aria-label={`Assure Securities on ${s.name}`}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '9px',
                      background: s.bg,
                      boxShadow: `0 3px 10px ${s.shadow}`,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
                      e.currentTarget.style.boxShadow = s.hoverShadow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = `0 3px 10px ${s.shadow}`;
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-link-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Assure</Link></li>
              <li><Link to="/mutual-funds">Mutual Funds</Link></li>
              <li><Link to="/products">Investment Solutions</Link></li>
              <li><Link to="/educational-videos">Perspectives & Insights</Link></li>
              <li><Link to="/contact-us">Contact Advisory Desk</Link></li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <div className="footer-col-title">Solutions</div>
            <ul className="footer-link-list">
              <li><Link to="/products/mutual-funds">Equity & Debt Funds</Link></li>
              <li><Link to="/products/fixed-deposits">Corporate Fixed Deposits</Link></li>
              <li><Link to="/products/bonds">Bonds & Sovereign G-Secs</Link></li>
              <li><Link to="/products/life-insurance">Term & Life Insurance</Link></li>
              <li><Link to="/products/general-insurance">Health & General Insurance</Link></li>
              <li><Link to="/products/tax-saving">Tax Saving (ELSS & NPS)</Link></li>
              <li><Link to="/products/pms-aif">PMS & AIF for HNIs</Link></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <div className="footer-col-title">Resources</div>
            <ul className="footer-link-list">
              <li><Link to="/calculators">SIP Calculator</Link></li>
              <li><Link to="/calculators">Lumpsum Calculator</Link></li>
              <li><Link to="/calculators">Retirement Planner</Link></li>
              <li><Link to="/investor-zone">Check KYC Status</Link></li>
              <li><Link to="/investor-zone">PAN-Aadhaar Link</Link></li>
              <li><Link to="/educational-videos">Video Masterclasses</Link></li>
              <li><Link to="/become-a-partner">Partner Network</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact Coordinates */}
          <div>
            <div className="footer-col-title">Advisory Office</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={16} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={15} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={15} color="var(--color-gold)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div style={{ marginTop: '0.75rem' }}>
                <button
                  onClick={() => onOpenModal && onOpenModal('contact-consult')}
                  className="btn-gold"
                  style={{ 
                    height: '38px', 
                    fontSize: '0.78rem', 
                    fontWeight: 600,
                    padding: '0 1.15rem',
                    borderRadius: '6px',
                    textTransform: 'none',
                    width: '100%',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  Book Private Meeting
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Regulatory Disclosures */}
        <div className="regulatory-disclosure-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--color-gold)' }}>
            <AlertTriangle size={15} />
            <span style={{ fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontSize: '0.76rem' }}>
              Mandatory Statutory & Commission Disclosures
            </span>
          </div>

          <p style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            <strong style={{ color: 'var(--color-text-secondary)' }}>Risk Factors: </strong> 
            {LEGAL_DISCLOSURES.riskFactor}
          </p>

          <p style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--color-text-secondary)' }}>Commission Disclosure: </strong> 
            {LEGAL_DISCLOSURES.commissionDisclosure}
          </p>
        </div>

        {/* Legal Policy Links Bar */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem 1.75rem',
            paddingTop: '1.5rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '0.76rem',
            letterSpacing: '0.01em'
          }}
        >
          <Link to="/privacy-policy" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Privacy Policy</Link>
          <span style={{ opacity: 0.25, color: '#94a3b8' }}>•</span>
          <Link to="/disclaimer" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Disclaimer</Link>
          <span style={{ opacity: 0.25, color: '#94a3b8' }}>•</span>
          <Link to="/disclosure" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Commission Disclosure</Link>
          <span style={{ opacity: 0.25, color: '#94a3b8' }}>•</span>
          <Link to="/risk-factors" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Risk Factors</Link>
          <span style={{ opacity: 0.25, color: '#94a3b8' }}>•</span>
          <Link to="/code-of-conduct" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Code of Conduct</Link>
        </div>

        {/* Bottom Bar: Clean & Minimal Presentation */}
        <div 
          className="footer-bottom-bar"
          style={{ 
            fontSize: '0.78rem',
            color: '#94a3b8',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            paddingBottom: '0.5rem',
            lineHeight: 1.6
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.4rem' }}>
            <span>&copy; {new Date().getFullYear()} Assure Securities. All Rights Reserved.</span>
            <span style={{ opacity: 0.3 }}>•</span>
            <span style={{ color: '#cbd5e1' }}>AMFI Registered ARN-182137</span>
          </div>

          {/* Simple and Clean Powered by jobgen.ai */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem' }}>
            <span style={{ color: '#64748b' }}>Powered by</span>
            <a 
              href="https://jobgen.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#38bdf8',
                textDecoration: 'none',
                fontWeight: 500,
                letterSpacing: '0.02em',
                transition: 'all 0.2s ease',
                opacity: 0.9
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#7dd3fc';
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#38bdf8';
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.textDecoration = 'none';
              }}
            >
              jobgen.ai
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
