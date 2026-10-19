import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MutualFundsSection } from '../components/MutualFundsSection';
import { TrendingUp, ShieldCheck, Phone, ArrowRight, Sparkles, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function MutualFundsPage({ onOpenModal }) {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', background: '#050811' }}>
      
      {/* =========================================================================
          1. Editorial Page Header with Cinematic Background Video
          ========================================================================= */}
      <section 
        style={{ 
          padding: 'clamp(4.5rem, 6vw, 6rem) 0 clamp(2.5rem, 4vw, 3.5rem) 0', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
          position: 'relative', 
          overflow: 'hidden',
          background: '#050811',
          minHeight: '460px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Cinematic Background Video Layer */}
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
            src="/assets/mutual-funds-hero.mp4"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 25%'
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Breadcrumbs Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem', fontSize: '0.8rem', color: '#94a3b8' }}>
            <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
            <ChevronRight size={13} opacity={0.5} />
            <span style={{ color: '#10b981', fontWeight: 600 }}>Mutual Funds Intelligence Hub</span>
          </div>

          {/* Eyebrow Pill */}
          <div style={{ marginBottom: '1rem' }}>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                color: '#34d399',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}
            >
              <TrendingUp size={13} color="#34d399" />
              AMFI REG. ARN-182137 • SEBI REGULATED MUTUAL FUND DISTRIBUTOR
            </span>
          </div>

          {/* Page Headline */}
          <h1 
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', 
              color: '#ffffff', 
              maxWidth: '850px', 
              lineHeight: 1.15,
              fontWeight: 700,
              margin: '0 0 1.25rem 0',
              WebkitTextStroke: '1.2px #000000',
              paintOrder: 'stroke fill',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.95), 0 0 3px #000000'
            }}
          >
            Mutual Funds <span style={{ color: '#06b6d4', fontStyle: 'italic', fontWeight: 700, WebkitTextStroke: '1.2px #000000' }}>Intelligence</span> &amp; <span style={{ color: '#10b981', fontStyle: 'italic', fontWeight: 700, WebkitTextStroke: '1.2px #000000' }}>Analytics Hub</span>
          </h1>

          <p 
            style={{ 
              fontSize: 'clamp(1rem, 1.3vw, 1.2rem)', 
              color: '#ffffff', 
              maxWidth: '750px', 
              lineHeight: 1.65, 
              margin: '0 0 2rem 0', 
              fontWeight: 500,
              WebkitTextStroke: '0.4px #000000',
              paintOrder: 'stroke fill',
              textShadow: '1px 1px 2px #000000, -1px -1px 2px #000000, 1px -1px 2px #000000, -1px 1px 2px #000000, 0 2px 8px rgba(0, 0, 0, 0.9)'
            }}
          >
            Direct SEBI-regulated AMC clearing with zero distributor custody risk. 
            Analyze rolling alpha, downside capture, sector allocation, and real-time compounding trajectories across 1,500+ vetted mutual fund schemes.
          </p>

          {/* Institutional Trust Badges Ribbon */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.25rem',
              padding: '0.85rem 1.25rem',
              borderRadius: '16px',
              background: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              maxWidth: 'fit-content'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#10b981" />
              <span style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600 }}>40+ AMCs Integrated</span>
            </div>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={16} color="#06b6d4" />
              <span style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600 }}>1,500+ Schemes Tracked</span>
            </div>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="#f59e0b" />
              <span style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600 }}>Zero Distributor Custody Risk</span>
            </div>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="#8b5cf6" />
              <span style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600 }}>Daily Live AMFI NAV</span>
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
