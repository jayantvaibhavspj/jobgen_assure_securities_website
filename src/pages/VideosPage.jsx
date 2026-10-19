import React from 'react';
import { Link } from 'react-router-dom';
import { EducationalVideos } from '../components/EducationalVideos';
import { Video, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function VideosPage({ onOpenModal }) {
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
            src="/assets/educational-videos-hero-bg.mp4"
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
            <span style={{ color: '#10b981', fontWeight: 700, letterSpacing: '0.08em', textShadow: '0 1px 3px #000000, 0 0 2px #000000' }}>KNOWLEDGE ARCHIVE • 12 VIDEO MASTERCLASSES</span>
          </div>

          <h1 
            style={{ 
              fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', 
              color: '#ffffff', 
              marginBottom: '1.25rem', 
              lineHeight: 1.15, 
              fontFamily: 'var(--font-serif)', 
              fontWeight: 700, 
              maxWidth: '640px',
              WebkitTextStroke: '1.2px #000000',
              paintOrder: 'stroke fill',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.95), 0 0 3px #000000'
            }}
          >
            Educational
            <br />
            <span style={{ color: '#38bdf8', WebkitTextStroke: '1.2px #000000' }}>Masterclasses</span>
            <br />
            &amp; <span style={{ color: '#fbbf24', WebkitTextStroke: '1.2px #000000' }}>Market Insights</span>
          </h1>

          <p 
            style={{ 
              fontSize: 'clamp(1rem, 1.3vw, 1.18rem)', 
              color: '#ffffff', 
              maxWidth: '580px', 
              lineHeight: 1.65, 
              fontWeight: 500,
              WebkitTextStroke: '0.4px #000000',
              paintOrder: 'stroke fill',
              textShadow: '1px 1px 2px #000000, -1px -1px 2px #000000, 1px -1px 2px #000000, -1px 1px 2px #000000, 0 2px 8px rgba(0, 0, 0, 0.9)'
            }}
          >
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
