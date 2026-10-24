import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MutualFundsSection } from '../components/MutualFundsSection';
import { TrendingUp, ShieldCheck, Phone, ArrowRight, Sparkles, Building2, CheckCircle2, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function MutualFundsPage({ onOpenModal }) {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', background: '#050811' }}>
      
      {/* =========================================================================
          1. Editorial Page Header (Split Layout: Left Text, Right Video Card)
          ========================================================================= */}
      <section 
        style={{ 
          padding: 'clamp(3.5rem, 5.5vw, 5rem) 0 clamp(2.5rem, 4vw, 4rem) 0', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
          position: 'relative', 
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at 85% 25%, rgba(6, 182, 212, 0.12) 0%, transparent 55%), radial-gradient(ellipse at 15% 75%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), #060813',
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
            
            {/* Left Column: Editorial Headline, Meta & Trust Badges */}
            <div>
              {/* Category Pill */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 16px',
                  borderRadius: '9999px',
                  background: 'rgba(6, 182, 212, 0.1)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  marginBottom: '1.25rem'
                }}
              >
                <Sparkles size={16} color="#06b6d4" />
                <span style={{ fontSize: '0.86rem', color: '#38bdf8', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  AMFI Registered Distributor • ARN-182137
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
                Mutual Funds
                <br />
                <span style={{ 
                  background: 'linear-gradient(135deg, #38bdf8 0%, #06b6d4 45%, #10b981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}>
                  Intelligence &amp; Analytics Hub
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
                Direct SEBI-regulated AMC clearing with zero distributor custody risk. 
                Analyze rolling alpha, downside capture, sector allocation, and real-time compounding trajectories across 1,500+ vetted mutual fund schemes.
              </p>

              {/* Institutional Trust Badges Grid */}
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
                  <CheckCircle2 size={20} color="#10b981" />
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 650 }}>40+ AMCs Integrated</span>
                </div>
                <div className="mf-hero-badge-item" style={{ padding: '0.85rem 1.15rem' }}>
                  <CheckCircle2 size={20} color="#06b6d4" />
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 650 }}>1,500+ Schemes Tracked</span>
                </div>
                <div className="mf-hero-badge-item" style={{ padding: '0.85rem 1.15rem' }}>
                  <ShieldCheck size={20} color="#f59e0b" />
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 650 }}>Zero Custody Risk</span>
                </div>
                <div className="mf-hero-badge-item" style={{ padding: '0.85rem 1.15rem' }}>
                  <Sparkles size={20} color="#a855f7" />
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 650 }}>Daily Live AMFI NAV</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                  onClick={() => {
                    const el = document.getElementById('mutual-funds');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
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
                  <span>Explore Fund Cockpit</span>
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
                  <span>Consult Advisor</span>
                </button>
              </div>

            </div>

            {/* Right Column: High-End Framed Video Showcase Card */}
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
                    src="/assets/mf-intelligence-analytics.mp4"
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
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(16, 185, 129, 0.85)'}
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

      {/* =========================================================================
          2. Complete Full Mutual Funds Analytics Dashboard (Pinterest Luxury UI)
          ========================================================================= */}
      <MutualFundsSection 
        variant="full"
        onOpenModal={onOpenModal} 
        onNavigate={(path) => {
          if (path.startsWith('/#')) {
            navigate('/');
            setTimeout(() => {
              const el = document.getElementById(path.replace('/#', ''));
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 150);
          } else {
            navigate(path);
          }
        }}
        embedded={true}
      />

      {/* =========================================================================
          3. Advisory Consultation & AMC Routing Trust Strip
          ========================================================================= */}
      <section 
        style={{ 
          padding: '4rem 0', 
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: '#070B14'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              background: 'rgba(15, 23, 42, 0.8)', 
              borderRadius: '24px', 
              padding: 'clamp(2rem, 4vw, 3.5rem)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '2.5rem',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <span 
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.74rem', 
                  color: '#10b981', 
                  letterSpacing: '0.08em', 
                  fontWeight: 700, 
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem' 
                }}
              >
                <Building2 size={14} color="#10b981" />
                LUCKNOW DESK • NATIONWIDE CLIENT PORTFOLIOS
              </span>
              <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                Ready to architect a high-conviction mutual fund portfolio?
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.98rem', lineHeight: 1.6, margin: 0 }}>
                Speak directly with our AMFI-registered investment team. Get independent scheme analysis, portfolio overlap audits, and goal-mapped SIP recommendations.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%', maxWidth: '380px' }}>
              <button 
                onClick={() => onOpenModal && onOpenModal('consultation')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '1rem 1.75rem',
                  borderRadius: '12px',
                  background: '#10b981',
                  color: '#050811',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(16, 185, 129, 0.35)',
                  transition: 'transform 0.2s'
                }}
              >
                Schedule Free Consultation
                <ArrowRight size={16} />
              </button>

              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px',
                  padding: '1rem 1.75rem',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                <Phone size={15} color="#10b981" />
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default MutualFundsPage;
