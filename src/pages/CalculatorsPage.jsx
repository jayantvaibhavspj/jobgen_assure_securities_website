import React from 'react';
import { Link } from 'react-router-dom';
import { CalculatorsHub } from '../components/CalculatorsHub';
import { Calculator, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function CalculatorsPage({ onOpenModal }) {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. Editorial Page Header with Video Background */}
      <section 
        style={{ 
          padding: 'clamp(5rem, 8vw, 7rem) 0 clamp(3rem, 5vw, 4.5rem) 0', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
          position: 'relative', 
          overflow: 'hidden',
          background: '#070a12',
          minHeight: '440px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Background Video Layer */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0,
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="/assets/calculators-hero-bg.mp4"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'right 20%'
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className="eyebrow-label" style={{ color: '#10b981', marginBottom: '0.85rem' }}>
            <span style={{ color: '#10b981', fontWeight: 600, letterSpacing: '0.08em', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>WEALTH ENGINES • QUANTITATIVE MODELING</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 4.6vw, 4rem)', color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.15, fontFamily: 'var(--font-serif)', fontWeight: 600, textShadow: '0 2px 12px rgba(0, 0, 0, 0.85), 0 1px 3px rgba(0, 0, 0, 0.95)' }}>
            Financial
            <br />
            <span style={{ color: '#38bdf8' }}>Calculators</span> &amp;
            <br />
            <span style={{ color: '#fbbf24' }}>Goal Architecture</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.18rem)', color: '#ffffff', maxWidth: '580px', lineHeight: 1.65, textShadow: '0 1px 8px rgba(0, 0, 0, 0.9)' }}>
            Model compounding trajectories with inflation adjustments. Plan for your child's higher education, wedding milestones, and retirement independence with mathematical precision.
          </p>
        </div>
      </section>

      {/* 2. Interactive Calculators Hub Component (DARK) */}
      <CalculatorsHub onOpenModal={onOpenModal} theme="dark" />

      {/* 3. Advisory Consultation Strip (LIGHT) */}
      <section className="section-theme-light" style={{ padding: '4.5rem 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div 
            style={{ 
              background: 'var(--color-bg-card)', 
              borderRadius: '24px', 
              padding: 'clamp(2rem, 4vw, 3.5rem)', 
              border: '1px solid var(--color-border)', 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', 
              alignItems: 'center', 
              gap: 'clamp(2rem, 4vw, 3.5rem)' 
            }}
          >
            {/* Left Column: Eyebrow, Heading, Description, Buttons */}
            <div>
              <div className="eyebrow-label">
                <span>BESPOKE WEALTH ARCHITECTURE</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.3rem)', color: 'var(--color-text)', marginBottom: '0.85rem', fontFamily: 'var(--font-serif)', lineHeight: 1.25 }}>
                Need a comprehensive family wealth roadmap?
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.98rem', maxWidth: '580px', lineHeight: 1.65, marginBottom: '2rem' }}>
                Calculators illustrate scenarios, but real life demands customized tax harvesting, liquidity management, and scheme selection. Speak with an AMFI-registered advisor today.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => onOpenModal && onOpenModal('contact-consult')}
                  className="btn-gold"
                  style={{ height: '48px', fontSize: '0.86rem', borderRadius: '9999px', padding: '0 1.8rem' }}
                >
                  <span>Book Advisor Consultation</span>
                  <ArrowRight size={14} />
                </button>

                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="btn-outline"
                  style={{ height: '48px', fontSize: '0.86rem', borderRadius: '9999px', padding: '0 1.6rem' }}
                >
                  <Phone size={13} color="var(--color-gold)" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Character Explaining Finance Video Card */}
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '520px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: '#090a0d',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
                  aspectRatio: '16 / 10'
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  src="/assets/character-explaining-finance.mp4"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CalculatorsPage;
