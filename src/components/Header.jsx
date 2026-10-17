import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Menu, X, ArrowRight, Lock, ChevronDown, 
  TrendingUp, ShieldCheck, Landmark, HeartPulse, 
  ShieldAlert, Receipt, Award, Sparkles, Calculator 
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/websiteData';

function getProductIcon(id) {
  switch (id) {
    case 'mutual-funds': return TrendingUp;
    case 'fixed-deposits': return ShieldCheck;
    case 'bonds': return Landmark;
    case 'life-insurance': return HeartPulse;
    case 'general-insurance': return ShieldAlert;
    case 'tax-saving': return Receipt;
    case 'pms-aif': return Award;
    default: return Sparkles;
  }
}

export function Header({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
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

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setSolutionsDropdown(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    setSolutionsDropdown(false);
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`site-navbar-header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.07)' : '0 1px 3px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Main Single-Tier Navbar */}
      <div 
        className="container" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: isScrolled ? '76px' : '84px', 
          transition: 'height 0.3s ease' 
        }}
      >
        
        {/* Left: Brand Identity with Official Logo */}
        <Link 
          to="/" 
          style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
          aria-label="Assure Securities Home"
        >
          <div 
            style={{ 
              background: 'transparent',
              padding: '2px 0',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <img 
              src="/assets/assure-official-logo.png" 
              alt="Assure Securities" 
              style={{ 
                height: isScrolled ? '52px' : '62px', 
                width: 'auto', 
                display: 'block',
                objectFit: 'contain',
                transition: 'height 0.3s ease'
              }} 
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links with Dropdown Menu */}
        <nav 
          style={{ display: 'flex', alignItems: 'center', gap: '1.85rem' }}
          className="desktop-nav-menu"
        >
          <button 
            onClick={() => handleNavClick('/')}
            className={`nav-link-item ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </button>

          <button 
            onClick={() => handleNavClick('/about-us')}
            className={`nav-link-item ${isActive('/about-us') ? 'active' : ''}`}
          >
            About
          </button>

          <button 
            onClick={() => handleNavClick('/mutual-funds')}
            className={`nav-link-item ${isActive('/mutual-funds') ? 'active' : ''}`}
          >
            Mutual Funds
          </button>

          {/* Solutions Dropdown Menu (Interactive sub-buttons) */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setSolutionsDropdown(true)}
            onMouseLeave={() => setSolutionsDropdown(false)}
          >
            <button 
              onClick={() => setSolutionsDropdown(!solutionsDropdown)}
              className={`nav-link-item ${location.pathname.startsWith('/products') ? 'active' : ''}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <span>Solutions</span>
              <ChevronDown 
                size={14} 
                style={{ 
                  transform: solutionsDropdown ? 'rotate(180deg)' : 'none', 
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  color: solutionsDropdown || location.pathname.startsWith('/products') ? '#059669' : '#64748b'
                }} 
              />
            </button>

            {solutionsDropdown && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-90px',
                  width: '390px',
                  paddingTop: '0.65rem',
                  zIndex: 1100,
                  animation: 'fadeIn 0.18s ease-out'
                }}
              >
                <div 
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05)',
                    borderRadius: '12px',
                    padding: '0.85rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem'
                  }}
                >
                  <div style={{ 
                    padding: '0.3rem 0.65rem 0.6rem 0.65rem', 
                    borderBottom: '1px solid #f1f5f9',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ 
                      fontSize: '0.74rem', 
                      fontFamily: 'var(--font-mono)', 
                      color: '#059669', 
                      fontWeight: 700,
                      textTransform: 'uppercase', 
                      letterSpacing: '0.08em' 
                    }}>
                      Investment Solutions & Wealth Products
                    </span>
                    <span style={{ 
                      fontSize: '0.7rem', 
                      color: '#64748b', 
                      background: '#f1f5f9', 
                      padding: '2px 8px', 
                      borderRadius: '10px',
                      fontWeight: 500
                    }}>
                      7 Offerings
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '0.35rem' }}>
                    {PRODUCTS_DATA.map((prod) => {
                      const IconComponent = getProductIcon(prod.id);
                      return (
                        <button
                          key={prod.id}
                          onClick={() => handleNavClick(prod.id === 'mutual-funds' ? '/mutual-funds' : `/products/${prod.id}`)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.85rem',
                            width: '100%',
                            padding: '0.55rem 0.75rem',
                            borderRadius: '8px',
                            background: 'transparent',
                            border: 'none',
                            textAlign: 'left',
                            cursor: 'pointer',
                            transition: 'all 0.18s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#f8fafc';
                            e.currentTarget.style.transform = 'translateX(3px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          <div 
                            style={{ 
                              width: '32px', 
                              height: '32px', 
                              borderRadius: '6px', 
                              background: 'rgba(16, 185, 129, 0.08)',
                              border: '1px solid rgba(16, 185, 129, 0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}
                          >
                            <IconComponent size={16} color="#059669" />
                          </div>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ 
                              fontSize: '0.86rem', 
                              fontWeight: 600, 
                              color: '#0f172a',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}>
                              {prod.title}
                            </div>
                            <div style={{ 
                              fontSize: '0.72rem', 
                              color: '#64748b',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}>
                              {prod.tagline}
                            </div>
                          </div>
                          <ArrowRight size={13} color="#94a3b8" />
                        </button>
                      );
                    })}
                  </div>

                  <div style={{ 
                    borderTop: '1px solid #f1f5f9', 
                    marginTop: '0.35rem', 
                    paddingTop: '0.55rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: '0.65rem',
                    paddingRight: '0.65rem'
                  }}>
                    <button
                      onClick={() => handleNavClick('/products')}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#059669',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.2rem 0'
                      }}
                    >
                      <span>View All Solutions</span>
                      <ArrowRight size={13} />
                    </button>

                    <button
                      onClick={() => handleNavClick('/calculators')}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#64748b',
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.2rem 0'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#0f172a'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                    >
                      <Calculator size={12} />
                      <span>Calculators</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNavClick('/calculators')}
            className={`nav-link-item ${isActive('/calculators') ? 'active' : ''}`}
          >
            Calculators
          </button>

          <button 
            onClick={() => handleNavClick('/educational-videos')}
            className={`nav-link-item ${isActive('/educational-videos') ? 'active' : ''}`}
          >
            Insights
          </button>

          <button 
            onClick={() => handleNavClick('/contact-us')}
            className={`nav-link-item ${isActive('/contact-us') ? 'active' : ''}`}
          >
            Contact
          </button>
        </nav>

        {/* Right: Clean, Simplified Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          
          {/* Client Login (Sleek light ghost button) */}
          <button 
            onClick={() => onOpenModal && onOpenModal('client-login')}
            className="desktop-client-btn"
            style={{ 
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              color: '#334155',
              fontSize: '0.84rem',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '0.45rem 0.95rem',
              height: '38px',
              transition: 'all 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              textTransform: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#10b981';
              e.currentTarget.style.color = '#059669';
              e.currentTarget.style.background = 'rgba(16, 185, 129, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#cbd5e1';
              e.currentTarget.style.color = '#334155';
              e.currentTarget.style.background = '#f8fafc';
            }}
          >
            <Lock size={12} color="#059669" />
            <span>Client Login</span>
          </button>

          {/* Primary CTA: Start Investing */}
          <button 
            onClick={() => onOpenModal ? onOpenModal('contact-consult') : navigate('/contact-us')}
            style={{ 
              height: '38px', 
              padding: '0 1.25rem', 
              fontSize: '0.86rem',
              fontWeight: 600,
              borderRadius: '6px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#ffffff',
              border: 'none',
              boxShadow: '0 2px 10px rgba(16, 185, 129, 0.25)',
              transition: 'all 0.2s ease',
              textTransform: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(16, 185, 129, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(16, 185, 129, 0.25)';
            }}
          >
            <span>Start Investing</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="mobile-hamburger-btn"
            style={{ 
              display: 'none', 
              color: '#1e293b', 
              padding: '0.45rem',
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              background: '#f8fafc',
              cursor: 'pointer'
            }}
            aria-label="Open Mobile Menu"
          >
            <Menu size={22} />
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Luxury White Overlay) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div 
              style={{ 
                background: 'transparent',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              <img 
                src="/assets/assure-official-logo.png" 
                alt="Assure Securities" 
                style={{ height: '46px', width: 'auto', display: 'block' }} 
              />
            </div>

            <button 
              onClick={() => setMobileMenuOpen(false)}
              style={{ 
                color: '#1e293b', 
                border: '1px solid #e2e8f0', 
                padding: '0.5rem',
                borderRadius: '6px',
                background: '#f8fafc',
                cursor: 'pointer'
              }}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, overflowY: 'auto' }}>
            <button
              onClick={() => handleNavClick('/')}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: location.pathname === '/' ? '#059669' : '#0f172a',
                textAlign: 'left', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0', background: 'transparent', border: 'none', cursor: 'pointer'
              }}
            >
              <span>Home</span>
              <ArrowRight size={16} opacity={0.5} />
            </button>

            <button
              onClick={() => handleNavClick('/about-us')}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: location.pathname === '/about-us' ? '#059669' : '#0f172a',
                textAlign: 'left', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0', background: 'transparent', border: 'none', cursor: 'pointer'
              }}
            >
              <span>About Us</span>
              <ArrowRight size={16} opacity={0.5} />
            </button>

            <button
              onClick={() => handleNavClick('/mutual-funds')}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: location.pathname === '/mutual-funds' ? '#059669' : '#0f172a',
                textAlign: 'left', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0', background: 'transparent', border: 'none', cursor: 'pointer'
              }}
            >
              <span>Mutual Funds</span>
              <ArrowRight size={16} opacity={0.5} />
            </button>

            {/* Mobile Expandable Solutions with all Sub-Buttons */}
            <div style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                  fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: location.pathname.startsWith('/products') ? '#059669' : '#0f172a',
                  textAlign: 'left', background: 'transparent', border: 'none', cursor: 'pointer'
                }}
              >
                <span>Investment Solutions</span>
                <ChevronDown size={18} style={{ transform: mobileSolutionsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', color: '#64748b' }} />
              </button>

              {mobileSolutionsOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.75rem', paddingLeft: '0.5rem' }}>
                  {PRODUCTS_DATA.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => handleNavClick(prod.id === 'mutual-funds' ? '/mutual-funds' : `/products/${prod.id}`)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '0.55rem 0.75rem', borderRadius: '6px', background: '#f8fafc',
                        border: '1px solid #e2e8f0', color: '#1e293b', fontSize: '0.88rem', fontWeight: 500, textAlign: 'left', cursor: 'pointer'
                      }}
                    >
                      <span>{prod.title}</span>
                      <ArrowRight size={12} opacity={0.6} color="#059669" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('/calculators')}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: location.pathname === '/calculators' ? '#059669' : '#0f172a',
                textAlign: 'left', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0', background: 'transparent', border: 'none', cursor: 'pointer'
              }}
            >
              <span>Financial Calculators</span>
              <ArrowRight size={16} opacity={0.5} />
            </button>

            <button
              onClick={() => handleNavClick('/investor-zone')}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: location.pathname === '/investor-zone' ? '#059669' : '#0f172a',
                textAlign: 'left', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0', background: 'transparent', border: 'none', cursor: 'pointer'
              }}
            >
              <span>Investor Zone & KYC</span>
              <ArrowRight size={16} opacity={0.5} />
            </button>

            <button
              onClick={() => handleNavClick('/educational-videos')}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: location.pathname === '/educational-videos' ? '#059669' : '#0f172a',
                textAlign: 'left', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0', background: 'transparent', border: 'none', cursor: 'pointer'
              }}
            >
              <span>Educational Insights</span>
              <ArrowRight size={16} opacity={0.5} />
            </button>

            <button
              onClick={() => handleNavClick('/contact-us')}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: location.pathname === '/contact-us' ? '#059669' : '#0f172a',
                textAlign: 'left', paddingBottom: '0.5rem', borderBottom: '1px solid #e2e8f0', background: 'transparent', border: 'none', cursor: 'pointer'
              }}
            >
              <span>Contact Advisory Desk</span>
              <ArrowRight size={16} opacity={0.5} />
            </button>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#059669', fontWeight: 600 }}>
                AMFI REG. ARN-182137 • LUCKNOW
              </div>
              <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                {COMPANY_INFO.phone} • {COMPANY_INFO.email}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenModal) onOpenModal('client-login');
                }}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  background: '#f8fafc',
                  color: '#1e293b',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Client Login
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenModal) onOpenModal('contact-consult');
                }}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Start Investing
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for Desktop vs Mobile Toggles */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav-menu,
          .desktop-client-btn {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
