import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function FinalCtaSection({ onOpenModal, onNavigate }) {
  return (
    <section 
      id="final-cta"
      style={{ 
        padding: '7rem 0', 
        background: 'var(--color-primary)', 
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      {/* Subtle Background Financial Grid & Line Glow */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', 
          backgroundSize: '32px 32px',
          opacity: 0.5,
          pointerEvents: 'none'
        }} 
      />

      <div 
        style={{ 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          right: '0', 
          height: '180px', 
          pointerEvents: 'none',
          opacity: 0.25
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1200 180" preserveAspectRatio="none">
          <path 
            d="M 0 160 Q 300 80 600 120 T 1200 40 L 1200 180 L 0 180 Z" 
            fill="url(#ctaLineGradient)" 
          />
          <path 
            d="M 0 160 Q 300 80 600 120 T 1200 40" 
            stroke="#16B981" 
            strokeWidth="2" 
            fill="none" 
          />
          <defs>
            <linearGradient id="ctaLineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#16B981" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '820px' }}>
        
        {/* Eyebrow */}
        <div 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            background: 'rgba(22, 185, 129, 0.12)', 
            color: 'var(--color-accent)', 
            padding: '0.4rem 1.1rem', 
            borderRadius: '100px', 
            fontSize: '0.82rem', 
            fontWeight: 700, 
            letterSpacing: '0.06em', 
            textTransform: 'uppercase', 
            marginBottom: '1.5rem' 
          }}
        >
          <Sparkles size={14} />
          <span>Your Wealth Architecture Starts Here</span>
        </div>

        {/* Heading */}
        <h2 
          style={{ 
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', 
            fontWeight: 800, 
            color: '#ffffff', 
            letterSpacing: '-0.03em', 
            lineHeight: 1.15, 
            marginBottom: '1.25rem' 
          }}
        >
          Your Financial Goals Deserve a Strategy.
        </h2>

        {/* Supporting Copy */}
        <p 
          style={{ 
            fontSize: '1.15rem', 
            color: '#94a3b8', 
            lineHeight: 1.65, 
            maxWidth: '620px', 
            margin: '0 auto 2.75rem auto' 
          }}
        >
          Take the next step toward a more structured financial future with seasoned, research-driven advisory from Assure Securities.
        </p>

        {/* Buttons */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: '1.25rem', 
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          <button 
            onClick={() => onOpenModal && onOpenModal('consultation')}
            className="btn-primary-emerald"
            style={{ fontSize: '1.05rem', padding: '0.95rem 2rem' }}
          >
            <span>Book a Consultation →</span>
          </button>

          <button 
            onClick={() => {
              if (onNavigate) onNavigate('contact');
              else if (onOpenModal) onOpenModal('consultation');
            }}
            className="btn-outline-white"
            style={{ fontSize: '1.05rem', padding: '0.95rem 2rem' }}
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
            fontSize: '0.85rem',
            color: '#94a3b8',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '2rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={16} color="var(--color-accent)" />
            <span>AMFI Registered: <strong>ARN-182137</strong></span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={16} color="var(--color-accent)" />
            <span>Zero Custody Direct AMC Settlement</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={16} color="var(--color-accent)" />
            <span>Gomtinagar, Lucknow Headquarters</span>
          </div>
        </div>

      </div>
    </section>
  );
}
