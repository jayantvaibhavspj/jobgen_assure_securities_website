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
      {/* Cinematic Skyline Backdrop Image (Visual Storytelling Upgrade) */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: 0,
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      >
        <img 
          src="/assets/hero-city-poster.jpg" 
          alt="" 
          loading="lazy"
          decoding="async"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.22,
            filter: 'brightness(0.7) contrast(1.2)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(7, 26, 47, 0.94) 0%, rgba(7, 26, 47, 0.84) 50%, rgba(7, 26, 47, 0.94) 100%)'
          }} 
        />
      </div>

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

      {/* Ambient Radial Glow (Phase 5 Ambient Motion) */}
      <div 
        className="ambient-glow-drift"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22, 185, 129, 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }}
      />
      <div 
        className="ambient-glow-drift-reverse"
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13, 41, 69, 0.45) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />

      {/* Abstract Financial-Line Artwork (Section 18 & Phase 5 Wave Motion) */}
      <div 
        className="moving-financial-wave"
        style={{ 
          position: 'absolute', 
          bottom: '0', 
          left: '0', 
          right: '0', 
          height: '160px', 
          pointerEvents: 'none',
          opacity: 0.25
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
        <div className="eyebrow-pill emerald reveal-on-scroll stagger-1" style={{ marginBottom: '1.25rem' }}>
          <Sparkles size={13} />
          <span>Your Wealth Architecture Starts Here</span>
        </div>

        {/* Heading (Section 18) */}
        <h2 
          className="reveal-on-scroll stagger-2"
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
          className="reveal-on-scroll stagger-3"
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
          className="reveal-on-scroll stagger-4"
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
          className="glass-surface-dark-subtle"
          style={{ 
            display: 'inline-flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 'clamp(1rem, 3vw, 2.5rem)', 
            flexWrap: 'wrap',
            fontSize: '0.82rem',
            color: '#cbd5e1',
            borderRadius: '100px',
            padding: '0.9rem 2rem',
            marginTop: '0.5rem'
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
