import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Shield, ChevronDown, Menu, X, 
  LogIn, UserCheck, ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function Header({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [investorDropdown, setInvestorDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    setProductsDropdown(false);
    setInvestorDropdown(false);
    navigate(path);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
      {/* Top Utility Bar */}
      <div style={{ background: '#0f172a', color: '#cbd5e1', fontSize: '0.82rem', padding: '0.45rem 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          
          {/* Contact Details */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href={`tel:${COMPANY_INFO.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#e2e8f0', textDecoration: 'none' }}>
              <Phone size={13} color="#38bdf8" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span style={{ color: '#475569' }}>|</span>
            <a href={`mailto:${COMPANY_INFO.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#e2e8f0', textDecoration: 'none' }}>
              <Mail size={13} color="#38bdf8" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span style={{ color: '#475569', display: 'none' }} className="d-md-inline">|</span>
            <div style={{ display: 'none', alignItems: 'center', gap: '0.35rem', color: '#94a3b8' }} className="d-md-flex">
              <MapPin size={13} color="#38bdf8" />
              <span>Gomtinagar, Lucknow</span>
            </div>
          </div>

          {/* Regulatory & Portal Login Access */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(37,99,235,0.2)', padding: '0.15rem 0.6rem', borderRadius: '4px', border: '1px solid rgba(37,99,235,0.4)', color: '#60a5fa', fontWeight: 600, fontSize: '0.75rem' }}>
              <Shield size={12} />
              <span>AMFI: {COMPANY_INFO.arn}</span>
            </div>

            <button 
              onClick={() => onOpenModal('client-login')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#ffffff', background: '#2563eb', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, transition: '0.2s' }}
              title="Client Portfolio Login"
            >
              <LogIn size={12} />
              <span>Client Login</span>
            </button>

            <button 
              onClick={() => onOpenModal('partner-login')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#f8fafc', background: '#334155', padding: '0.2rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, transition: '0.2s' }}
              title="Partner / Sub-broker Login"
            >
              <UserCheck size={12} />
              <span>Partner Login</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div style={{ padding: '0.85rem 0', background: '#ffffff' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo & Brand Identity */}
          <Link 
            to="/" 
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
          >
            <img 
              src="/assets/new-logo.jpg" 
              alt="Assure Securities Logo" 
              style={{ height: '48px', objectFit: 'contain', borderRadius: '6px' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/logo.png';
              }}
            />
            <div style={{ borderLeft: '1px solid #e2e8f0', paddingLeft: '0.85rem' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                ASSURE <span style={{ color: '#2563eb' }}>SECURITIES</span>
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '2px' }}>
                AMFI Reg. Mutual Fund Distributor
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }} className="desktop-nav">
            <Link 
              to="/"
              style={{ fontSize: '0.92rem', fontWeight: 600, color: isActive('/') ? '#2563eb' : '#334155' }}
            >
              Home
            </Link>

            <Link 
              to="/about-us"
              style={{ fontSize: '0.92rem', fontWeight: 600, color: isActive('/about-us') ? '#2563eb' : '#334155' }}
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <Link 
                to="/products"
                style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.92rem', fontWeight: 600, color: location.pathname.includes('/products') || location.pathname.includes('/mutual-funds') ? '#2563eb' : '#334155' }}
              >
                <span>Our Products</span>
                <ChevronDown size={14} />
              </Link>

              {productsDropdown && (
                <div style={{
                  position: 'absolute', top: '100%', left: '-20px', width: '270px',
                  background: '#ffffff', borderRadius: '14px', boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                  border: '1px solid #e2e8f0', padding: '0.6rem 0', zIndex: 100,
                  animation: 'scaleUp 0.15s ease'
                }}>
                  {[
                    { label: 'Mutual Funds', path: '/products/mutual-funds', sub: 'Equity, Debt, Hybrid & SIPs' },
                    { label: 'Corporate Fixed Deposits', path: '/products/fixed-deposits', sub: 'AAA Rated NBFCs & Banks' },
                    { label: 'Bonds & Sovereign Gold', path: '/products/bonds', sub: '54EC & RBI Floating Bonds' },
                    { label: 'Life Insurance', path: '/products/life-insurance', sub: 'Pure Term Cover & Protection' },
                    { label: 'General & Health Insurance', path: '/products/general-insurance', sub: 'Family Floater & Top-up' },
                    { label: 'Tax Saving (ELSS)', path: '/products/tax-saving', sub: 'Deductions under 80C & 80D' },
                    { label: 'PMS & AIF for HNIs', path: '/products/pms-aif', sub: 'Bespoke Wealth Management' },
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => handleNavClick(item.path)}
                      style={{ padding: '0.55rem 1.1rem', cursor: 'pointer', transition: '0.15s', borderBottom: idx < 6 ? '1px solid #f8fafc' : 'none' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f1f5f9'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>{item.label}</div>
                      <div style={{ fontSize: '0.74rem', color: '#64748b' }}>{item.sub}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Investor Zone Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setInvestorDropdown(true)}
              onMouseLeave={() => setInvestorDropdown(false)}
            >
              <Link 
                to="/investor-zone"
                style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.92rem', fontWeight: 600, color: isActive('/investor-zone') ? '#2563eb' : '#334155' }}
              >
                <span>Investor Zone</span>
                <ChevronDown size={14} />
              </Link>

              {investorDropdown && (
                <div style={{
                  position: 'absolute', top: '100%', left: '-20px', width: '280px',
                  background: '#ffffff', borderRadius: '14px', boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                  border: '1px solid #e2e8f0', padding: '0.6rem 0', zIndex: 100
                }}>
                  <div 
                    onClick={() => handleNavClick('/calculators')}
                    style={{ padding: '0.55rem 1.1rem', cursor: 'pointer', transition: '0.15s' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f1f5f9'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>Financial Calculators</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b' }}>SIP, Retirement, Child, Wedding & Vacation</div>
                  </div>
                  <div 
                    onClick={() => handleNavClick('/investor-zone')}
                    style={{ padding: '0.55rem 1.1rem', cursor: 'pointer', transition: '0.15s' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f1f5f9'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>KYC & PAN-Aadhaar Portals</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Karvy KRA, Income Tax, CAMS & KFintech</div>
                  </div>
                  <div 
                    onClick={() => handleNavClick('/investor-zone')}
                    style={{ padding: '0.55rem 1.1rem', cursor: 'pointer', transition: '0.15s' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f1f5f9'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>MF Forms & Downloads</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Common Application, SIP NACH, Nominee</div>
                  </div>
                  <div 
                    onClick={() => handleNavClick('/educational-videos')}
                    style={{ padding: '0.55rem 1.1rem', cursor: 'pointer', transition: '0.15s' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f1f5f9'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>Educational Videos</div>
                    <div style={{ fontSize: '0.74rem', color: '#64748b' }}>12 Mutual Fund Masterclasses with Thumbnails</div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/calculators"
              style={{ fontSize: '0.92rem', fontWeight: 600, color: isActive('/calculators') ? '#2563eb' : '#334155' }}
            >
              Calculators
            </Link>

            <Link 
              to="/become-a-partner"
              style={{ fontSize: '0.92rem', fontWeight: 600, color: isActive('/become-a-partner') ? '#2563eb' : '#334155' }}
            >
              Become a Partner
            </Link>

            <Link 
              to="/contact-us"
              style={{ fontSize: '0.92rem', fontWeight: 600, color: isActive('/contact-us') ? '#2563eb' : '#334155' }}
            >
              Contact Us
            </Link>
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button 
              onClick={() => onOpenModal('consultation')}
              className="btn-primary"
              style={{ padding: '0.65rem 1.3rem', fontSize: '0.88rem' }}
            >
              <span>Get Free Advice</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              style={{ display: 'none', padding: '0.5rem', color: '#0f172a' }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', inset: '100px 0 0 0', background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(10px)', zIndex: 999, padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto'
        }}>
          <div style={{ background: '#1e293b', borderRadius: '12px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button onClick={() => handleNavClick('/')} style={{ color: '#ffffff', textAlign: 'left', fontWeight: 600, fontSize: '1.05rem', padding: '0.4rem 0' }}>Home</button>
            <button onClick={() => handleNavClick('/about-us')} style={{ color: '#ffffff', textAlign: 'left', fontWeight: 600, fontSize: '1.05rem', padding: '0.4rem 0' }}>About Us (Who We Are)</button>
            <button onClick={() => handleNavClick('/products')} style={{ color: '#ffffff', textAlign: 'left', fontWeight: 600, fontSize: '1.05rem', padding: '0.4rem 0' }}>Our Products (7 Categories)</button>
            <button onClick={() => handleNavClick('/calculators')} style={{ color: '#ffffff', textAlign: 'left', fontWeight: 600, fontSize: '1.05rem', padding: '0.4rem 0' }}>Financial Calculators (SIP, Goal)</button>
            <button onClick={() => handleNavClick('/investor-zone')} style={{ color: '#ffffff', textAlign: 'left', fontWeight: 600, fontSize: '1.05rem', padding: '0.4rem 0' }}>Investor Zone & Forms</button>
            <button onClick={() => handleNavClick('/educational-videos')} style={{ color: '#ffffff', textAlign: 'left', fontWeight: 600, fontSize: '1.05rem', padding: '0.4rem 0' }}>Educational Videos</button>
            <button onClick={() => handleNavClick('/become-a-partner')} style={{ color: '#ffffff', textAlign: 'left', fontWeight: 600, fontSize: '1.05rem', padding: '0.4rem 0' }}>Become a Partner (Sub-broker)</button>
            <button onClick={() => handleNavClick('/contact-us')} style={{ color: '#ffffff', textAlign: 'left', fontWeight: 600, fontSize: '1.05rem', padding: '0.4rem 0' }}>Contact Us</button>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenModal('client-login'); }}
              style={{ flex: 1, background: '#2563eb', color: '#ffffff', padding: '0.75rem', borderRadius: '8px', fontWeight: 600 }}
            >
              Client Login
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenModal('partner-login'); }}
              style={{ flex: 1, background: '#334155', color: '#ffffff', padding: '0.75rem', borderRadius: '8px', fontWeight: 600 }}
            >
              Partner Login
            </button>
          </div>

          <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.8rem', marginTop: '1rem' }}>
            Call Us: {COMPANY_INFO.phone} | Gomtinagar, Lucknow
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle-btn { display: block !important; }
        }
        @media (min-width: 768px) {
          .d-md-flex { display: flex !important; }
          .d-md-inline { display: inline !important; }
        }
      `}</style>
    </header>
  );
}
