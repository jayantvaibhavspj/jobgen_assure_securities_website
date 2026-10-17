import React from 'react';
import { ArrowRight, ArrowUpRight, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function FinalCtaSection({ onOpenModal, onNavigate, theme = 'light' }) {
  const themeClass = theme === 'dark' ? 'section-theme-dark' : 'section-theme-light';
  return (
    <section 
      id="final-cta" 
      className={`final-cta-luxury ${themeClass}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: "url('/assets/section10-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: 'clamp(5.5rem, 9vw, 8rem) 0'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div 
          style={{ 
            maxWidth: '880px', 
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 1)',
            boxShadow: '0 20px 60px -10px rgba(15, 23, 42, 0.16)',
            padding: 'clamp(2.5rem, 5vw, 3.8rem) clamp(1.5rem, 4vw, 3.5rem)',
            textAlign: 'center'
          }}
        >
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(5, 150, 105, 0.08)',
                border: '1px solid rgba(5, 150, 105, 0.25)',
                color: '#059669',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}
            >
              10 — BEGIN YOUR ADVISORY ENGAGEMENT
            </span>
          </div>

          <h2 
            style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)', 
              color: '#0f172a', 
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem' 
            }}
          >
            Your <span style={{ color: '#2563eb', fontStyle: 'italic', fontWeight: 700 }}>financial journey</span>
            <br />
            <span style={{ color: '#dc2626', fontStyle: 'italic', fontWeight: 700 }}>
              starts with one conversation.
            </span>
          </h2>

          <p 
            style={{ 
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', 
              color: '#334155', 
              fontWeight: 500,
              lineHeight: 1.65,
              maxWidth: '640px',
              margin: '0 auto 2.25rem auto'
            }}
          >
            Let's understand your goals and explore the right investment approach for you. 
            Schedule a private consultation at our Lucknow office or via video conference.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2.5rem' }}>
            <button 
              onClick={() => onOpenModal ? onOpenModal('contact-consult') : (window.location.href = '/contact-us')}
              style={{ 
                height: '52px', 
                padding: '0 2.25rem', 
                fontSize: '0.92rem',
                fontWeight: 600,
                background: '#059669',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                boxShadow: '0 4px 16px rgba(5, 150, 105, 0.35)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Start a Conversation</span>
              <ArrowRight size={15} />
            </button>

            <button 
              onClick={() => onNavigate ? onNavigate('products') : (window.location.href = '/products')}
              style={{ 
                height: '52px', 
                padding: '0 2rem', 
                fontSize: '0.92rem',
                fontWeight: 600,
                background: '#ffffff', 
                color: '#0f172a',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Explore Investments</span>
              <ArrowUpRight size={14} color="#059669" />
            </button>
          </div>

          {/* Direct Private Contact Touchpoints */}
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: '2.25rem',
              padding: '0.85rem 1.85rem',
              borderRadius: '9999px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              color: '#334155',
              fontSize: '0.86rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={14} color="#059669" />
              <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#0f172a', fontWeight: 600, textDecoration: 'none' }}>
                {COMPANY_INFO.phone}
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={14} color="#059669" />
              <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#0f172a', fontWeight: 600, textDecoration: 'none' }}>
                {COMPANY_INFO.email}
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={14} color="#059669" />
              <span style={{ color: '#0f172a', fontWeight: 600 }}>Gomtinagar, Lucknow - 226010</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FinalCtaSection;
