import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function FinalCtaSection({ onOpenModal, onNavigate }) {
  return (
    <section 
      id="final-cta"
      style={{ 
        padding: 'var(--section-pad-desktop) 0', 
        background: 'var(--color-primary)', 
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}
      className="section-pad"
    >
      {/* Subtle Background Radial & Financial Grid */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', 
          backgroundSize: '32px 32px',
          opacity: 0.45,
          pointerEvents: 'none'
        }} 
      />

      {/* Abstract Financial-Line Artwork (Section 18) */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          right: '0', 
          height: '160px', 
          pointerEvents: 'none',
          opacity: 0.2
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1200 160" preserveAspectRatio="none">
          <path 
            d="M 0 140 Q 300 70 600 100 T 1200 30 L 1200 160 L 0 160 Z" 
            fill="url(#ctaLineGradientFinal)" 
          />
          <path 
            d="M 0 140 Q 300 70 600 100 T 1200 30" 
            stroke="#16B981" 
            strokeWidth="2" 
            fill="none" 
          />
          <defs>
            <linearGradient id="ctaLineGradientFinal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#16B981" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '780px' }}>
        
        {/* Eyebrow */}
        <div className="eyebrow-pill emerald" style={{ marginBottom: '1.25rem' }}>
          <Sparkles size={13} />
          <span>Your Wealth Architecture Starts Here</span>
        </div>

        {/* Heading (Section 18) */}
        <h2 
          style={{ 
            fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', 
            fontWeight: 700, 
            color: '#ffffff', 
            letterSpacing: '-0.03em', 
            lineHeight: 1.15, 
            marginBottom: '1.25rem' 
          }}
        >
          Your Financial Goals<br />
          <span style={{ color: 'var(--color-accent)' }}>Deserve a Strategy.</span>
        </h2>

        {/* Supporting Copy */}
        <p 
          style={{ 
            fontSize: '1.12rem', 
            color: '#94a3b8', 
            lineHeight: 1.65, 
            maxWidth: '580px', 
            margin: '0 auto 2.5rem auto' 
          }}
        >
          Take the next step toward a more structured financial future with seasoned, research-driven advisory from Assure Securities.
        </p>

        {/* Action Buttons (Section 18 & 22) */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '1rem', 
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          <button 
            onClick={() => onOpenModal && onOpenModal('consultation')}
            className="btn-primary-emerald"
          >
            <span>Book a Consultation →</span>
          </button>

          <button 
            onClick={() => {
              if (onNavigate) onNavigate('contact');
              else if (onOpenModal) onOpenModal('consultation');
            }}
            className="btn-outline-white"
          >
            <span>Contact Us</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 'clamp(1rem, 3vw, 2.5rem)', 
            flexWrap: 'wrap',
            fontSize: '0.82rem',
            color: '#94a3b8',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '1.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <ShieldCheck size={15} color="var(--color-accent)" />
            <span>AMFI Reg: <strong>ARN-182137</strong></span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Sparkles size={15} color="var(--color-accent)" />
            <span>Zero Custody Direct Settlement</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <MapPin size={15} color="var(--color-accent)" />
            <span>Gomtinagar, Lucknow Headquarters</span>
          </div>
        </div>

      </div>
    </section>
  );
}
