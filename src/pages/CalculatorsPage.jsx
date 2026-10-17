import React from 'react';
import { Link } from 'react-router-dom';
import { CalculatorsHub } from '../components/CalculatorsHub';
import { Calculator, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function CalculatorsPage({ onOpenModal }) {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. Editorial Page Header (LIGHT) */}
      <section className="section-theme-light" style={{ padding: 'clamp(5rem, 8vw, 7rem) 0 clamp(2.5rem, 4vw, 3.5rem) 0', borderBottom: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Quantitative Modeling Architecture Watermark */}
        <div 
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '45%',
            backgroundImage: 'url(/assets/hero-finance-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
            maskImage: 'linear-gradient(to right, transparent, black 80%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 80%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className="eyebrow-label">
            <span>WEALTH ENGINES • QUANTITATIVE MODELING</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.8rem, 5.2vw, 4.4rem)', color: 'var(--color-text)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Financial <span className="text-blue">Calculators</span> & <span className="text-red">Goal Architecture</span>
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', color: 'var(--color-text-secondary)', maxWidth: '720px', lineHeight: 1.65 }}>
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
              borderRadius: '2px', 
              padding: 'clamp(2rem, 4vw, 3.5rem)', 
              border: '1px solid var(--color-border)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '2rem' 
            }}
          >
            <div>
              <div className="eyebrow-label">
                <span>BESPOKE WEALTH ARCHITECTURE</span>
              </div>
              <h3 style={{ fontSize: '1.9rem', color: 'var(--color-text)', marginBottom: '0.65rem', fontFamily: 'var(--font-serif)' }}>
                Need a comprehensive family wealth roadmap?
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.96rem', maxWidth: '580px', lineHeight: 1.6 }}>
                Calculators illustrate scenarios, but real life demands customized tax harvesting, liquidity management, and scheme selection. Speak with an AMFI-registered advisor today.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenModal && onOpenModal('contact-consult')}
                className="btn-gold"
                style={{ height: '48px', fontSize: '0.84rem' }}
              >
                <span>Book Advisor Consultation</span>
                <ArrowRight size={14} />
              </button>

              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-outline"
                style={{ height: '48px', fontSize: '0.84rem' }}
              >
                <Phone size={13} color="var(--color-gold)" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CalculatorsPage;
