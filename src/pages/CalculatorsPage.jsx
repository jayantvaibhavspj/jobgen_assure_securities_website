import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CalculatorsHub } from '../components/CalculatorsHub';
import { Calculator, ArrowRight, ShieldCheck, Phone, TrendingUp, Sparkles, CheckCircle2, Volume2, VolumeX } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function CalculatorsPage({ onOpenModal }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. Editorial Page Header (Split Layout: Left Text, Right Video Card) */}
      <section 
        style={{ 
          padding: 'clamp(3.5rem, 5.5vw, 5rem) 0 clamp(2.5rem, 4vw, 4rem) 0', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
          position: 'relative', 
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at 85% 25%, rgba(56, 189, 248, 0.12) 0%, transparent 55%), radial-gradient(ellipse at 15% 75%, rgba(251, 191, 36, 0.08) 0%, transparent 50%), #060813',
          minHeight: 'auto',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Subtle geometric dot grid background texture */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.45,
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mf-hero-split-grid">
            
            {/* Left Column: Text & Badges */}
            <div>
              {/* Category Pill */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 16px',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  marginBottom: '1.25rem'
                }}
              >
                <Calculator size={16} color="#10b981" />
                <span style={{ fontSize: '0.86rem', color: '#34d399', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Wealth Engines • Quantitative Modeling
                </span>
              </div>

              {/* Page Headline - Large, Bold & Prominent */}
              <h1 
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', var(--font-sans), sans-serif",
                  fontSize: 'clamp(2.75rem, 4.8vw, 4.3rem)', 
                  color: '#ffffff', 
                  maxWidth: '750px', 
                  lineHeight: 1.12, 
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  margin: '0 0 1.35rem 0'
                }}
              >
                Financial Calculators
                <br />
                <span style={{ 
                  background: 'linear-gradient(135deg, #38bdf8 0%, #06b6d4 45%, #fbbf24 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}>
                  &amp; Goal Architecture
                </span>
              </h1>

              {/* Description - Large, High Contrast & Easy to Read */}
              <p 
                style={{ 
                  fontSize: 'clamp(1.12rem, 1.35vw, 1.28rem)', 
                  color: '#e2e8f0', 
                  maxWidth: '680px', 
                  lineHeight: 1.65, 
                  margin: '0 0 2.25rem 0', 
                  fontWeight: 450,
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
                }}
              >
                Model compounding trajectories with inflation adjustments. Plan for your child's higher education, wedding milestones, and retirement independence with mathematical precision.
              </p>

              {/* Trust Badges Grid */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '0.95rem',
                  maxWidth: '620px',
                  marginBottom: '2.5rem'
                }}
              >
                <div className="mf-hero-badge-item" style={{ padding: '0.85rem 1.15rem' }}>
                  <TrendingUp size={20} color="#10b981" />
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 650 }}>SIP &amp; Lumpsum Math</span>
                </div>
                <div className="mf-hero-badge-item" style={{ padding: '0.85rem 1.15rem' }}>
                  <ShieldCheck size={20} color="#38bdf8" />
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 650 }}>Inflation-Adjusted</span>
                </div>
                <div className="mf-hero-badge-item" style={{ padding: '0.85rem 1.15rem' }}>
                  <Sparkles size={20} color="#fbbf24" />
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 650 }}>Milestone Architecture</span>
                </div>
                <div className="mf-hero-badge-item" style={{ padding: '0.85rem 1.15rem' }}>
                  <CheckCircle2 size={20} color="#a855f7" />
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 650 }}>100% Free &amp; Unbiased</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                  onClick={() => {
                    const el = document.getElementById('calculators');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '0.95rem 1.85rem',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: '#ffffff',
                    fontWeight: 750,
                    fontSize: '0.98rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(16, 185, 129, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.4)';
                  }}
                >
                  <span>Launch Calculators</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={() => onOpenModal && onOpenModal('consultation')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '0.95rem 1.75rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    color: '#f8fafc',
                    fontWeight: 650,
                    fontSize: '0.98rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <Phone size={18} color="#34d399" />
                  <span>Consult Wealth Planner</span>
                </button>
              </div>

            </div>

            {/* Right Column: High-End Framed Video Card */}
            <div>
              <div className="mf-hero-video-wrapper">
                <div className="mf-hero-video-inner">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    preload="auto"
                    onClick={toggleMute}
                    src="/assets/calculators-goals-planning.mp4"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      cursor: 'pointer'
                    }}
                  />

                  {/* Top Right Sound Toggle */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(9, 14, 26, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                      zIndex: 3
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(56, 189, 248, 0.85)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(9, 14, 26, 0.8)'}
                  >
                    {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>
                </div>
              </div>
            </div>

          </div>
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
