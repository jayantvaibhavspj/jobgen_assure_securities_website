import React from 'react';
import { Link } from 'react-router-dom';
import { EducationalVideos } from '../components/EducationalVideos';
import { Video, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function VideosPage({ onOpenModal }) {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. Editorial Page Header (LIGHT) */}
      <section className="section-theme-light" style={{ padding: 'clamp(5rem, 8vw, 7rem) 0 clamp(2.5rem, 4vw, 3.5rem) 0', borderBottom: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Knowledge Archive Skyline Watermark */}
        <div 
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '45%',
            backgroundImage: 'url(/assets/hero-city-poster.jpg)',
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
            <span>KNOWLEDGE ARCHIVE • 12 VIDEO MASTERCLASSES</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.8rem, 5.2vw, 4.4rem)', color: 'var(--color-text)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Educational <span className="text-blue">Masterclasses</span> & <span className="text-red">Market Insights</span>
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', color: 'var(--color-text-secondary)', maxWidth: '720px', lineHeight: 1.65 }}>
            Watch our official video series on mutual fund fundamentals, rupee-cost averaging via SIPs, Section 80C tax planning, and multi-cycle asset allocation.
          </p>
        </div>
      </section>

      {/* 2. Main Educational Videos Component (DARK) */}
      <EducationalVideos onOpenModal={onOpenModal} theme="dark" />

      {/* 3. Advisory Consultation Strip (LIGHT) */}
      <section className="section-pad section-theme-light" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
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
                <span>PERSONALIZED ADVISORY SESSION</span>
              </div>
              <h3 style={{ fontSize: '1.85rem', color: 'var(--color-text)', marginBottom: '0.65rem', fontFamily: 'var(--font-serif)' }}>
                Have questions regarding your personal portfolio?
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.96rem', maxWidth: '580px', lineHeight: 1.6 }}>
                Videos illustrate concepts, but your family's financial roadmap requires custom risk profiling and allocation. Schedule a session with an AMFI-registered advisor.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenModal && onOpenModal('contact-consult')}
                className="btn-gold"
                style={{ height: '48px', fontSize: '0.84rem' }}
              >
                <span>Book 1-on-1 Consultation</span>
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

export default VideosPage;
