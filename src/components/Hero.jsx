import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, TrendingUp, Sparkles, CheckCircle2, 
  Lock, PieChart, ArrowUpRight, BarChart3, Layers
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function Hero({ onOpenModal, onNavigate }) {
  const [selectedRange, setSelectedRange] = useState('3Y');

  // Illustrative portfolio chart coordinates
  const chartPoints = [
    { label: "Y1", value: 1200000, x: 20, y: 150 },
    { label: "Y2", value: 1540000, x: 100, y: 130 },
    { label: "Y3", value: 1820000, x: 180, y: 105 },
    { label: "Y4", value: 2180000, x: 260, y: 70 },
    { label: "Y5", value: 2480000, x: 340, y: 35 }
  ];

  return (
    <div>
      {/* SECTION 6 & 7: HERO COMPOSITION (Deep Navy #071A2F) */}
      <section 
        style={{ 
          background: 'var(--color-primary)', 
          color: '#ffffff', 
          position: 'relative', 
          overflow: 'hidden',
          padding: 'clamp(4.5rem, 7vw, 6.5rem) 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
        className="hero-section"
      >
        {/* Cinematic Financial Skyline Background Video (Visual Storytelling Upgrade) */}
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
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/hero-city-poster.jpg"
            className="hero-bg-video parallax-subtle"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
              opacity: 0.26,
              filter: 'brightness(0.8) contrast(1.2)'
            }}
          >
            <source src="/assets/hero-city-skyline.webm" type="video/webm" />
          </video>
          {/* Multi-layered dark navy & radial vignette overlay for pristine text readability */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(7, 26, 47, 0.94) 0%, rgba(7, 26, 47, 0.82) 50%, rgba(7, 26, 47, 0.92) 100%)'
            }} 
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at 75% 25%, rgba(22, 185, 129, 0.1) 0%, transparent 65%)'
            }} 
          />
        </div>

        {/* Aurora Mesh Gradient (Requirement 8) */}
        <div className="aurora-mesh-bg" aria-hidden="true" style={{ opacity: 0.85 }} />

        {/* Subtle Radial Glow & Background Grid Texture (Phase 5 Ambient Motion) */}
        <div 
          className="ambient-glow-drift"
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(22, 185, 129, 0.12) 0%, rgba(7, 26, 47, 0) 70%)',
            filter: 'blur(70px)',
            pointerEvents: 'none'
          }} 
        />
        <div 
          className="ambient-glow-drift-reverse"
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(13, 41, 69, 0.45) 0%, rgba(7, 26, 47, 0) 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none'
          }} 
        />

        {/* Delicate background grid pattern */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            pointerEvents: 'none'
          }} 
        />

        {/* Subtle Moving Financial Curve (Phase 5 Cinematic Storytelling) */}
        <div 
          className="moving-financial-wave"
          style={{
            position: 'absolute',
            bottom: 0,
            left: '-10%',
            width: '120%',
            height: '180px',
            pointerEvents: 'none',
            opacity: 0.14
          }}
        >
          <svg viewBox="0 0 1200 180" width="100%" height="100%" preserveAspectRatio="none">
            <path
              d="M 0 160 Q 300 40 600 120 T 1200 30"
              fill="none"
              stroke="#16B981"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          </svg>
        </div>

        {/* Subtle Floating Data Particles (Phase 5 Requirement 1) */}
        <div className="hero-particles-container">
          <div className="hero-particle hero-particle-1" />
          <div className="hero-particle hero-particle-2" />
          <div className="hero-particle hero-particle-3" />
          <div className="hero-particle hero-particle-4" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr', 
              gap: 'clamp(2.5rem, 5vw, 4rem)', 
              alignItems: 'center' 
            }}
            className="hero-grid"
          >
            
            {/* LEFT COLUMN: 55% High-Conviction Typography & CTAs */}
            <div className="hero-left-content">
              {/* Step 2: Small Eyebrow (150ms) */}
              <div 
                className="hero-eyebrow"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  background: 'rgba(22, 185, 129, 0.12)', 
                  color: 'var(--color-accent)', 
                  border: '1px solid rgba(22, 185, 129, 0.25)', 
                  padding: '0.35rem 0.95rem', 
                  borderRadius: '100px', 
                  fontSize: '0.78rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.06em', 
                  textTransform: 'uppercase', 
                  marginBottom: '1.25rem' 
                }}
              >
                <Sparkles size={13} color="var(--color-accent)" />
                <span>SMARTER WEALTH. BETTER FUTURE.</span>
              </div>

              {/* Step 3: Large Headline (300ms line reveal) */}
              <h1 
                style={{ 
                  fontSize: 'clamp(2.5rem, 4.8vw, 3.8rem)', 
                  fontWeight: 700, 
                  lineHeight: 1.15, 
                  color: '#ffffff', 
                  letterSpacing: '-0.03em', 
                  marginBottom: '1.25rem' 
                }}
                className="hero-headline"
              >
                Build Wealth.<br />
                <span style={{ color: 'var(--color-accent)' }}>Invest With Confidence.</span>
              </h1>

              {/* Step 4: Supporting Copy (450ms) */}
              <p 
                className="hero-desc"
                style={{ 
                  fontSize: '1.12rem', 
                  color: '#94a3b8', 
                  lineHeight: 1.65, 
                  maxWidth: '560px', 
                  marginBottom: '2rem' 
                }}
              >
                Smart investment solutions, expert guidance and digital tools designed around your financial goals.
              </p>

              {/* Step 5: Primary & Secondary Action Buttons (600ms) */}
              <div className="hero-cta-group" style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1rem' }}>
                  <button 
                    onClick={() => onOpenModal && onOpenModal('consultation')}
                    className="btn-primary-emerald"
                  >
                    <span>Start Investing →</span>
                  </button>

                  <button 
                    onClick={() => onNavigate && onNavigate('products')}
                    className="btn-outline-white"
                  >
                    <span>Explore Solutions</span>
                  </button>
                </div>

                {/* Subtle Trust Statement Below Buttons */}
                <div style={{ fontSize: '0.88rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={15} color="var(--color-accent)" />
                  <span>Investment solutions designed around your goals.</span>
                </div>
              </div>

              {/* Step 7: Regulatory Assurance Strip (900ms) */}
              <div className="hero-trust-strip" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
                  <ShieldCheck size={15} color="var(--color-accent)" />
                  <span>AMFI Reg. ARN-182137</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={15} color="var(--color-accent)" />
                  <span>Zero Custody Risk</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
                  <Lock size={15} color="var(--color-accent)" />
                  <span>Direct AMC Settlement</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: 45% Premium Financial Visualization */}
            <div style={{ position: 'relative' }} className="hero-right-visual">
              
              {/* Main Financial Dashboard Card (Requirement 3: Floating Glass Dashboard) */}
              <div 
                className="glass-surface-dark"
                style={{ 
                  borderRadius: '24px', 
                  padding: 'clamp(1.75rem, 3.5vw, 2.25rem)', 
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {/* Header with Demo Label */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Wealth Management Dashboard
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>
                      Assure Private Client Portfolio
                    </div>
                  </div>

                  <span 
                    className="glass-badge-dark"
                    style={{ 
                      fontSize: '0.68rem', 
                      padding: '0.2rem 0.55rem', 
                      borderRadius: '6px'
                    }}
                  >
                    Illustrative Demo
                  </span>
                </div>

                {/* Portfolio Value & Growth Rate (Requirement 3: ₹12,48,520 & +12.84%) */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Portfolio Value</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
                    <div style={{ fontSize: 'clamp(2.2rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>
                      ₹12,48,520
                    </div>
                    <div style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.3rem', 
                      background: 'rgba(22, 185, 129, 0.16)', 
                      color: 'var(--color-accent)', 
                      padding: '0.25rem 0.6rem', 
                      borderRadius: '6px', 
                      fontSize: '0.82rem', 
                      fontWeight: 700,
                      border: '1px solid rgba(22, 185, 129, 0.35)',
                      boxShadow: '0 0 12px rgba(22, 185, 129, 0.2)'
                    }}>
                      <TrendingUp size={13} />
                      <span>+12.84%</span>
                    </div>
                  </div>
                </div>

                {/* Smooth Portfolio Growth Line Chart (SVG with Glow) */}
                <div style={{ marginBottom: '1.5rem', background: 'rgba(7, 26, 47, 0.55)', padding: '1rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <span style={{ fontSize: '0.73rem', color: '#94a3b8', fontWeight: 600 }}>Portfolio Growth</span>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      {['1Y', '3Y', '5Y', 'ALL'].map((r) => (
                        <button
                          key={r}
                          onClick={() => setSelectedRange(r)}
                          style={{
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            padding: '0.15rem 0.45rem',
                            borderRadius: '4px',
                            background: selectedRange === r ? 'var(--color-accent)' : 'transparent',
                            color: selectedRange === r ? '#071A2F' : '#94a3b8',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <svg viewBox="0 0 360 140" style={{ width: '100%', height: '95px', overflow: 'visible' }}>
                    <defs>
                      <linearGradient id="chartGradientHero" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#16B981" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#16B981" stopOpacity="0.0" />
                      </linearGradient>
                      <filter id="glowChartLine" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#16B981" floodOpacity="0.5" />
                      </filter>
                    </defs>

                    {/* Subtle grid lines */}
                    <line x1="0" y1="35" x2="360" y2="35" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="80" x2="360" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="125" x2="360" y2="125" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                    {/* Gradient Area Fill */}
                    <path
                      d="M 20 130 Q 100 115 180 90 T 260 60 T 340 25 L 340 140 L 20 140 Z"
                      fill="url(#chartGradientHero)"
                    />

                    {/* Smooth Line Path (Phase 5 Progressive Draw + Glow) */}
                    <path
                      d="M 20 130 Q 100 115 180 90 T 260 60 T 340 25"
                      fill="none"
                      stroke="#16B981"
                      strokeWidth="3"
                      strokeLinecap="round"
                      filter="url(#glowChartLine)"
                      className="svg-chart-path"
                    />

                    {/* Data Points & Pulsing Terminal Node */}
                    {chartPoints.map((pt, i) => {
                      const isLast = i === chartPoints.length - 1;
                      return (
                        <g key={i}>
                          {isLast && (
                            <circle
                              cx={pt.x}
                              cy={pt.y - 10}
                              r="8"
                              fill="none"
                              stroke="rgba(22, 185, 129, 0.55)"
                              strokeWidth="1.5"
                              className="chart-terminal-dot"
                            />
                          )}
                          <circle cx={pt.x} cy={pt.y - 10} r="3.5" fill="#071A2F" stroke="#16B981" strokeWidth="2" />
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Asset Allocation Breakdown (Requirement 3: Equity / Debt / Hybrid) */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Asset Allocation
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-accent)', fontWeight: 600 }}>Optimized Wealth Ratio</span>
                  </div>

                  {/* Multi-segmented Allocation Bar */}
                  <div style={{ height: '7px', width: '100%', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '100px', display: 'flex', overflow: 'hidden', marginBottom: '0.65rem' }}>
                    <div style={{ width: '62%', background: '#16B981', transition: 'width 1s ease' }} title="Equity 62%" />
                    <div style={{ width: '28%', background: '#38BDF8', transition: 'width 1s ease' }} title="Debt 28%" />
                    <div style={{ width: '10%', background: '#F59E0B', transition: 'width 1s ease' }} title="Hybrid 10%" />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.65rem', fontSize: '0.74rem' }}>
                    <span style={{ color: '#cbd5e1' }}><strong style={{ color: '#16B981' }}>●</strong> Equity (62%)</span>
                    <span style={{ color: '#cbd5e1' }}><strong style={{ color: '#38BDF8' }}>●</strong> Debt (28%)</span>
                    <span style={{ color: '#cbd5e1' }}><strong style={{ color: '#F59E0B' }}>●</strong> Hybrid (10%)</span>
                  </div>
                </div>

              </div>

              {/* Floating Glass Card 1: Top Right (Requirement 3: "SIP Active") */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-18px',
                  background: 'rgba(7, 26, 47, 0.82)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: '#ffffff',
                  borderRadius: '16px',
                  padding: '0.75rem 1.1rem',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.45), 0 0 16px rgba(22, 185, 129, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  zIndex: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
                className="d-none-mobile float-card-1"
              >
                <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(22, 185, 129, 0.15)', border: '1px solid rgba(22, 185, 129, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingUp size={16} color="#16B981" />
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>SIP Active</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>₹15,000 / month</div>
                </div>
              </div>

              {/* Floating Glass Card 2: Bottom Left (Requirement 3: "Portfolio Growth") */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-18px',
                  left: '-18px',
                  background: 'rgba(7, 26, 47, 0.82)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: '#ffffff',
                  borderRadius: '16px',
                  padding: '0.75rem 1.1rem',
                  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.45), 0 0 16px rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  zIndex: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
                className="d-none-mobile float-card-2"
              >
                <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={16} color="#38bdf8" />
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Portfolio Growth</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>+₹3,84,500 Gain</div>
                </div>
              </div>

              {/* Floating Glass Card 3: Mid Right (Requirement 3: "Goal Progress") */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '85px',
                  right: '-28px',
                  background: 'rgba(7, 26, 47, 0.82)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: '#ffffff',
                  borderRadius: '16px',
                  padding: '0.7rem 1rem',
                  boxShadow: '0 14px 32px rgba(0, 0, 0, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  zIndex: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem'
                }}
                className="d-none-mobile float-card-3"
              >
                <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'rgba(22, 185, 129, 0.15)', border: '1px solid rgba(22, 185, 129, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PieChart size={15} color="#16B981" />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Goal Progress</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>Retirement: 74%</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8 & 9: CLEAN TRUST STRIP (White #FFFFFF Background, Section Transitions Rhythm) */}
      <section 
        id="trust-strip"
        style={{ 
          background: 'var(--color-white)', 
          borderBottom: '1px solid var(--color-border)',
          padding: '2.5rem 0' 
        }}
      >
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', 
              gap: '1.5rem',
              alignItems: 'center'
            }}
          >
            {[
              { 
                metric: COMPANY_INFO.arn, 
                label: "AMFI Registered", 
                sub: "ARN-182137 • Valid till 2027" 
              },
              { 
                metric: "15+ Years", 
                target: "15",
                suffix: "+ Years",
                label: "Industry Experience", 
                sub: "Disciplined market stewardship" 
              },
              { 
                metric: "40+ AMCs", 
                target: "40",
                suffix: "+ AMCs",
                label: "Direct Empanelment", 
                sub: "All major fund houses accessible" 
              },
              { 
                metric: "BSE StAR MF", 
                label: "Exchange Execution", 
                sub: "Direct institutional trade routing" 
              },
              { 
                metric: "Zero Custody", 
                label: "100% Investor Safety", 
                sub: "Direct-to-AMC bank settlement" 
              }
            ].map((stat, i) => (
              <div 
                key={i} 
                style={{ 
                  textAlign: 'left',
                  padding: '0.75rem 1rem',
                  borderLeft: i > 0 ? '1px solid var(--color-border)' : 'none'
                }}
                className={`reveal-on-scroll stagger-${i + 1} ${i > 0 ? "border-left-responsive" : ""}`}
              >
                <div 
                  style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '-0.02em', lineHeight: 1.2 }}
                  data-counter-target={stat.target || ''}
                  data-counter-prefix={stat.prefix || ''}
                  data-counter-suffix={stat.suffix || ''}
                >
                  {stat.metric}
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-accent)', marginTop: '0.15rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive & Animation Styles (Requirement 2 & 9) */}
      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
        @media (max-width: 767px) {
          .d-none-mobile { display: none !important; }
          .border-left-responsive {
            border-left: none !important;
            border-top: 1px solid var(--color-border) !important;
            padding-top: 1rem !important;
          }
        }

        /* 6-Step Hero Staggered Entrance (Within ~1 second) */
        .hero-bg-video {
          animation: heroBgVideoDrift 28s ease-in-out infinite alternate;
          will-change: transform;
        }

        .hero-eyebrow {
          animation: heroFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }

        .hero-headline {
          animation: heroLineReveal 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.30s both;
        }

        .hero-desc {
          animation: heroFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
        }

        .hero-cta-group {
          animation: heroFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.60s both;
        }

        .hero-right-visual {
          animation: heroVisualEntrance 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.75s both;
        }

        .hero-trust-strip {
          animation: heroFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.90s both;
        }

        @keyframes heroFade {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroLineReveal {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroVisualEntrance {
          from { opacity: 0; transform: scale(0.96) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes heroBgVideoDrift {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.025); }
        }
      `}</style>
    </div>
  );
}
