import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone, Mail, Shield, ChevronDown, Menu, X, 
  LogIn, UserCheck, ArrowRight, TrendingUp, Sparkles, 
  Calculator, BookOpen, Building2, ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/websiteData';

export function Header({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [investDropdown, setInvestDropdown] = useState(false);
  const [wealthDropdown, setWealthDropdown] = useState(false);
  const [toolsDropdown, setToolsDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open (Requirement 2)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Accessibility: Close drawer and dropdowns on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        setInvestDropdown(false);
        setWealthDropdown(false);
        setToolsDropdown(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    setInvestDropdown(false);
    setWealthDropdown(false);
    setToolsDropdown(false);
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className="site-navbar-header"
      style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 1000, 
        background: isScrolled ? 'rgba(255, 255, 255, 0.94)' : '#ffffff', 
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(7, 26, 47, 0.08)' : '1px solid var(--color-border)',
        boxShadow: isScrolled ? '0 10px 30px rgba(7, 26, 47, 0.06)' : 'none',
        transition: 'background 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Top Utility Strip (Sleek Market Status & Compliance) */}
      <div 
        style={{ 
          background: 'var(--color-primary)', 
          color: '#94a3b8', 
          fontSize: '0.78rem', 
          padding: isScrolled ? '0.25rem 0' : '0.4rem 0', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
          
          {/* Live Market Heartbeat & Regulatory Standing */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e2e8f0', fontWeight: 600 }}>
              <span className="pulse-dot-green" />
              <span style={{ letterSpacing: '0.04em' }}>AMFI REGISTERED DISTRIBUTOR • ARN-182137</span>
            </div>

            <span style={{ color: '#334155', display: 'none' }} className="d-md-inline">|</span>

            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              style={{ display: 'none', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1', textDecoration: 'none' }}
              className="d-md-flex"
            >
              <Phone size={11} color="var(--color-accent)" />
              <span>Direct Desk: {COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Partner & Portal Credentials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span style={{ fontSize: '0.73rem', color: '#94a3b8' }}>
              Zero Custody Risk • Direct AMC Settlement
            </span>
            <button 
              onClick={() => onOpenModal('partner-login')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#cbd5e1', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', padding: '0.18rem 0.65rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer', transition: '0.2s' }}
              title="Partner / Sub-broker Login"
            >
              <UserCheck size={11} />
              <span>Partner Login</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        style={{ 
          padding: isScrolled ? '0.65rem 0' : '0.95rem 0', 
          transition: 'padding 0.3s cubic-bezier(0.16, 1, 0.3, 1)' 
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* LEFT: Logo & Brand Identity */}
          <Link 
            to="/" 
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
          >
            <img 
              src="/assets/assure-logo.png" 
              alt="Assure Securities - Digital Wealth Management" 
              style={{ 
                height: isScrolled ? '46px' : '54px', 
                maxWidth: '220px',
                objectFit: 'contain', 
                transition: 'height 0.3s ease' 
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/logo.png';
              }}
            />
            <div className="brand-text-desktop" style={{ borderLeft: '1.5px solid var(--color-border)', paddingLeft: '0.85rem' }}>
              <div style={{ fontSize: '1.22rem', fontWeight: 800, color: 'var(--color-primary)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                ASSURE <span style={{ color: 'var(--color-accent)' }}>SECURITIES</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '2px' }}>
                Digital Wealth Management
              </div>
            </div>
          </Link>

          {/* CENTER: 5 Structured Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }} className="desktop-nav">
            
            {/* 1. Invest Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setInvestDropdown(true)}
              onMouseLeave={() => setInvestDropdown(false)}
            >
              <button 
                onClick={() => setInvestDropdown(!investDropdown)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.3rem', 
                  fontSize: '0.93rem', 
                  fontWeight: 600, 
                  color: location.pathname.includes('/products/mutual-funds') ? 'var(--color-accent)' : 'var(--color-text)',
                  padding: '0.4rem 0',
                  cursor: 'pointer'
                }}
              >
                <span>Invest</span>
                <ChevronDown size={14} style={{ transform: investDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {investDropdown && (
                <div style={{
                  position: 'absolute', top: '100%', left: '-15px', width: '280px',
                  background: '#ffffff', borderRadius: '16px', boxShadow: '0 20px 40px -10px rgba(7, 26, 47, 0.15)',
                  border: '1px solid var(--color-border)', padding: '0.75rem', zIndex: 100,
                  animation: 'fadeIn 0.2s ease-out'
                }}>
                  {[
                    { label: "Mutual Funds (SIP & Lumpsum)", desc: "Professionally managed portfolios", path: "/products/mutual-funds", icon: TrendingUp },
                    { label: "SIP Compounding Engine", desc: "Disciplined wealth accumulation", path: "/calculators", icon: Calculator },
                    { label: "Current NFO Opportunities", desc: "New fund offers from top AMCs", path: "/products/mutual-funds", icon: Sparkles }
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleNavClick(item.path)}
                        style={{ padding: '0.65rem 0.75rem', borderRadius: '10px', cursor: 'pointer', transition: 'background 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-bg)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <Icon size={16} color="var(--color-accent)" />
                          <strong style={{ fontSize: '0.88rem', color: 'var(--color-primary)' }}>{item.label}</strong>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginLeft: '1.6rem', marginTop: '2px' }}>{item.desc}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 2. Solutions Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setWealthDropdown(true)}
              onMouseLeave={() => setWealthDropdown(false)}
            >
              <Link 
                to="/products"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.3rem', 
                  fontSize: '0.93rem', 
                  fontWeight: 600, 
                  color: location.pathname.startsWith('/products') ? 'var(--color-accent)' : 'var(--color-text)',
                  padding: '0.4rem 0'
                }}
              >
                <span>Solutions</span>
                <ChevronDown size={14} style={{ transform: wealthDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </Link>

              {wealthDropdown && (
                <div style={{
                  position: 'absolute', top: '100%', left: '-80px', width: '320px',
                  background: '#ffffff', borderRadius: '16px', boxShadow: '0 20px 40px -10px rgba(7, 26, 47, 0.15)',
                  border: '1px solid var(--color-border)', padding: '0.75rem', zIndex: 100,
                  animation: 'fadeIn 0.2s ease-out'
                }}>
                  {PRODUCTS_DATA.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleNavClick(`/products/${p.id}`)}
                      style={{ padding: '0.6rem 0.75rem', borderRadius: '10px', cursor: 'pointer', transition: 'background 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-bg)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <strong style={{ fontSize: '0.88rem', color: 'var(--color-primary)', display: 'block' }}>{p.title}</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{p.tagline}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Tools Link / Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setToolsDropdown(true)}
              onMouseLeave={() => setToolsDropdown(false)}
            >
              <Link 
                to="/calculators"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.3rem', 
                  fontSize: '0.93rem', 
                  fontWeight: 600, 
                  color: isActive('/calculators') ? 'var(--color-accent)' : 'var(--color-text)',
                  padding: '0.4rem 0'
                }}
              >
                <span>Tools</span>
                <ChevronDown size={14} style={{ transform: toolsDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </Link>

              {toolsDropdown && (
                <div style={{
                  position: 'absolute', top: '100%', left: '-50px', width: '270px',
                  background: '#ffffff', borderRadius: '16px', boxShadow: '0 20px 40px -10px rgba(7, 26, 47, 0.15)',
                  border: '1px solid var(--color-border)', padding: '0.75rem', zIndex: 100,
                  animation: 'fadeIn 0.2s ease-out'
                }}>
                  {[
                    { label: "Financial Goal Calculators", desc: "SIP, Lumpsum, Retirement, Education", path: "/calculators" },
                    { label: "KYC & Compliance Portals", desc: "Check Karvy KRA & ITD PAN status", path: "/investor-zone" }
                  ].map((tool, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleNavClick(tool.path)}
                      style={{ padding: '0.65rem 0.75rem', borderRadius: '10px', cursor: 'pointer', transition: 'background 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-bg)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <strong style={{ fontSize: '0.88rem', color: 'var(--color-primary)' }}>{tool.label}</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>{tool.desc}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Insights Link */}
            <Link 
              to="/educational-videos"
              style={{ 
                fontSize: '0.93rem', 
                fontWeight: 600, 
                color: isActive('/educational-videos') ? 'var(--color-accent)' : 'var(--color-text)' 
              }}
            >
              Insights
            </Link>

            {/* 5. About Link */}
            <Link 
              to="/about-us"
              style={{ 
                fontSize: '0.93rem', 
                fontWeight: 600, 
                color: isActive('/about-us') ? 'var(--color-accent)' : 'var(--color-text)' 
              }}
            >
              About
            </Link>

          </nav>

          {/* RIGHT: Client Login + Get Started CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }} className="desktop-actions">
            <button 
              onClick={() => onOpenModal('client-login')}
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--color-primary)',
                background: 'transparent',
                padding: '0.55rem 1rem',
                borderRadius: '10px',
                border: '1.5px solid var(--color-border)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-border)'}
            >
              Client Login
            </button>

            <button 
              onClick={() => onOpenModal('consultation')}
              className="btn-primary-emerald"
              style={{ minHeight: '44px', padding: '0 1.35rem', fontSize: '0.9rem' }}
            >
              <span>Book a Consultation</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ 
              display: 'none', 
              minWidth: '48px', 
              minHeight: '48px', 
              padding: '0.6rem', 
              color: 'var(--color-primary)', 
              borderRadius: '10px', 
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              background: mobileMenuOpen ? 'rgba(7, 26, 47, 0.06)' : 'transparent',
              border: '1px solid var(--color-border)',
              touchAction: 'manipulation'
            }}
            className="mobile-menu-btn"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Navigation (Phase 7 Premium Mobile UX) */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          style={{
            position: 'fixed', 
            inset: 0, 
            top: 0, 
            background: 'rgba(7, 26, 47, 0.98)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            color: '#ffffff', 
            padding: '1.5rem', 
            zIndex: 2000, 
            overflowY: 'auto',
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            animation: 'drawerSlideIn 0.28s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div>
            {/* Mobile Drawer Brand Header & Close Button */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img 
                  src="/assets/assure-logo.png" 
                  alt="Assure Securities Logo" 
                  style={{ height: '42px', background: '#ffffff', padding: '4px 8px', borderRadius: '8px', objectFit: 'contain' }}
                />
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                    ASSURE <span style={{ color: 'var(--color-accent)' }}>SECURITIES</span>
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 600 }}>ARN-182137 • AMFI Registered</div>
                </div>
              </div>

              <button 
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '50%', 
                  background: 'rgba(255,255,255,0.08)', 
                  border: '1px solid rgba(255,255,255,0.15)', 
                  color: '#ffffff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  cursor: 'pointer' 
                }}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links with Large Touch Targets (Min 48px) & Icons */}
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { path: '/', label: 'Home', desc: 'Overview & Highlights' },
                { path: '/products/mutual-funds', label: 'Invest in Mutual Funds', desc: 'Equity, Debt, Hybrid & ELSS' },
                { path: '/products', label: 'All Investment Solutions', desc: 'FDs, Bonds, Insurance & PMS' },
                { path: '/calculators', label: 'Financial Tools & Calculators', desc: 'SIP, Lumpsum, Retirement & Child' },
                { path: '/educational-videos', label: 'Insights & Masterclasses', desc: 'Educational Video Library' },
                { path: '/about-us', label: 'About Assure Securities', desc: '15+ Years Trust & Credentials' },
                { path: '/become-a-partner', label: 'Partner Program', desc: 'Sub-broker & Associate Network' },
                { path: '/contact-us', label: 'Contact & Advisory Desk', desc: 'Direct Relationship Manager' }
              ].map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    minHeight: '48px',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '10px',
                    background: location.pathname === item.path ? 'rgba(22, 185, 129, 0.12)' : 'transparent',
                    borderLeft: location.pathname === item.path ? '3px solid var(--color-accent)' : '3px solid transparent',
                    color: '#ffffff',
                    textAlign: 'left',
                    width: '100%',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease',
                    touchAction: 'manipulation'
                  }}
                >
                  <span style={{ fontSize: '1.02rem', fontWeight: 700, color: location.pathname === item.path ? 'var(--color-accent)' : '#ffffff' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '2px' }}>
                    {item.desc}
                  </span>
                </button>
              ))}
            </nav>

            {/* Visible CTAs */}
            <div style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenModal('consultation'); }}
                className="btn-primary-emerald"
                style={{ width: '100%', justifyContent: 'center', height: '50px', fontSize: '0.95rem' }}
              >
                <span>Book a Consultation</span>
                <ArrowRight size={16} />
              </button>

              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenModal('client-login'); }}
                className="btn-outline-white"
                style={{ width: '100%', justifyContent: 'center', height: '50px', fontSize: '0.95rem' }}
              >
                <LogIn size={16} />
                <span>Client Portfolio Login</span>
              </button>
            </div>
          </div>

          {/* Regulatory Strip inside Drawer */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem', marginTop: '1.5rem', fontSize: '0.78rem', color: '#94a3b8' }}>
            <div style={{ fontWeight: 600, color: '#e2e8f0' }}>AMFI Registered Mutual Fund Distributor • ARN-182137</div>
            <div style={{ marginTop: '3px' }}>Helpline: {COMPANY_INFO.phone} • {COMPANY_INFO.email}</div>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 991px) {
          .desktop-nav { display: none !important; }
          .desktop-actions { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (max-width: 576px) {
          .brand-text-desktop { display: none !important; }
        }
        @media (min-width: 768px) {
          .d-md-inline { display: inline !important; }
          .d-md-flex { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
