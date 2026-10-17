import React, { useState } from 'react';
import { 
  TrendingUp, ShieldCheck, Award, 
  Sparkles, Coins, Building2, 
  Info, ArrowRight, Activity 
} from 'lucide-react';

export function PortfolioVisualization({ onOpenModal, embedded = false }) {
  const [activeHorizon, setActiveHorizon] = useState('5Y');
  const [activeSegment, setActiveSegment] = useState(null);

  // Illustrative portfolio growth trajectories (Clearly labeled illustrative simulation)
  const trajectoryData = {
    '1Y': {
      pointsAssure: "0,150 100,140 200,128 300,118 400,98 500,82 600,68",
      pointsBench: "0,150 100,146 200,142 300,138 400,134 500,130 600,126",
      invested: "₹6,00,000",
      projected: "₹6,74,000",
      projectedCompact: "₹6.74L",
      benchProjected: "₹6,39,000",
      cagr: "12.3%",
      growthVsBench: "+35K vs Bank FD"
    },
    '3Y': {
      pointsAssure: "0,150 100,132 200,114 300,95 400,74 500,52 600,34",
      pointsBench: "0,150 100,144 200,136 300,128 400,120 500,112 600,104",
      invested: "₹18,00,000",
      projected: "₹23,45,000",
      projectedCompact: "₹23.45L",
      benchProjected: "₹20,38,000",
      cagr: "14.1%",
      growthVsBench: "+3.07L vs Bank FD"
    },
    '5Y': {
      pointsAssure: "0,150 100,126 200,102 300,76 400,50 500,30 600,14",
      pointsBench: "0,150 100,142 200,132 300,122 400,112 500,100 600,88",
      invested: "₹30,00,000",
      projected: "₹46,80,000",
      projectedCompact: "₹46.80L",
      benchProjected: "₹38,20,000",
      cagr: "15.6%",
      growthVsBench: "+8.60L vs Bank FD"
    },
    '10Y': {
      pointsAssure: "0,150 100,115 200,82 300,52 400,30 500,15 600,4",
      pointsBench: "0,150 100,138 200,124 300,110 400,94 500,78 600,62",
      invested: "₹60,00,000",
      projected: "₹1,38,50,000",
      projectedCompact: "₹1.38 Cr",
      benchProjected: "₹98,40,000",
      cagr: "16.2%",
      growthVsBench: "+40.1L vs Bank FD"
    }
  };

  const current = trajectoryData[activeHorizon];

  const assetAllocation = [
    { 
      id: "equities",
      label: "Equities (Large & Flexi-Cap)", 
      pct: 60, 
      color: "#059669", 
      bgTint: "rgba(5, 150, 105, 0.08)",
      note: "Core wealth compounding engine",
      subtext: "SEBI-regulated diversified equity funds with downside capture filters"
    },
    { 
      id: "fixed-income",
      label: "Fixed Income & AAA FDs", 
      pct: 25, 
      color: "#3b82f6", 
      bgTint: "rgba(59, 130, 246, 0.08)",
      note: "Stability & predictable liquidity buffer",
      subtext: "Corporate Fixed Deposits rated CRISIL/ICRA AAA & High-quality Debt"
    },
    { 
      id: "sovereign",
      label: "Sovereign Gold / G-Secs", 
      pct: 10, 
      color: "#cbd5e1", 
      bgTint: "rgba(203, 213, 225, 0.25)",
      note: "Inflation hedge & sovereign security",
      subtext: "Reserve Bank of India bonds & Sovereign Gold Bonds (SGBs)"
    },
    { 
      id: "liquid",
      label: "Liquid Reserves", 
      pct: 5, 
      color: "#334155", 
      bgTint: "rgba(51, 65, 85, 0.1)",
      note: "Emergency cash & tactical STP deployment",
      subtext: "Instant-redemption overnight and liquid mutual fund schemes"
    }
  ];

  // 6 KPI Metric Cards inspired by the Pinterest Dashboard Design
  const kpiCards = [
    {
      title: "Compounding CAGR",
      value: current.cagr,
      change: "+3.4% ↑ vs Nifty 50",
      icon: TrendingUp,
      accentColor: "#059669",
      bgLight: "rgba(5, 150, 105, 0.06)",
      borderColor: "rgba(5, 150, 105, 0.25)"
    },
    {
      title: "Projected Value",
      value: current.projectedCompact,
      change: current.growthVsBench,
      icon: Coins,
      accentColor: "#0284c7",
      bgLight: "rgba(2, 132, 199, 0.06)",
      borderColor: "rgba(2, 132, 199, 0.25)"
    },
    {
      title: "Downside Capture",
      value: "< 78%",
      change: "-22% Drawdown Buffer",
      icon: ShieldCheck,
      accentColor: "#d97706",
      bgLight: "rgba(217, 119, 6, 0.06)",
      borderColor: "rgba(217, 119, 6, 0.25)"
    },
    {
      title: "Alpha Persistence",
      value: "Top 15%",
      change: "Outperformance Consistency",
      icon: Award,
      accentColor: "#7c3aed",
      bgLight: "rgba(124, 58, 237, 0.06)",
      borderColor: "rgba(124, 58, 237, 0.25)"
    },
    {
      title: "Settlement Custody",
      value: "Direct AMC",
      change: "100% Custody Safety",
      icon: Building2,
      accentColor: "#059669",
      bgLight: "rgba(5, 150, 105, 0.06)",
      borderColor: "rgba(5, 150, 105, 0.25)"
    },
    {
      title: "Tax Optimization",
      value: "94.2%",
      change: "Harvested LTCG Efficiency",
      icon: Sparkles,
      accentColor: "#e11d48",
      bgLight: "rgba(225, 29, 72, 0.06)",
      borderColor: "rgba(225, 29, 72, 0.25)"
    }
  ];

  return (
    <section 
      id="analytics" 
      className="portfolio-visualization-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: "url('/assets/section5-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: embedded ? 'clamp(3.5rem, 6vw, 5.5rem) 0' : 'clamp(4.5rem, 7vw, 6.5rem) 0'
      }}
    >

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* =========================================================================
            1. Section Header: Encased in a Clean Luxury Frosted Bento Card
            ========================================================================= */}
        <div 
          style={{ 
            marginBottom: '2.5rem',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 1)',
            boxShadow: '0 15px 40px -10px rgba(15, 23, 42, 0.08)',
            padding: 'clamp(1.75rem, 3.5vw, 2.5rem) clamp(1.5rem, 4vw, 3rem)'
          }}
        >
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.25rem' }}>
            
            {/* Left: Eyebrow + Bold Editorial Serif Heading */}
            <div>
              <div style={{ marginBottom: '0.65rem' }}>
                <span 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    background: 'rgba(5, 150, 105, 0.08)',
                    border: '1px solid rgba(5, 150, 105, 0.25)',
                    color: '#059669',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em'
                  }}
                >
                  <Activity size={13} color="#059669" />
                  05 — WEALTH INTELLIGENCE & ANALYTICS
                </span>
              </div>

              <h2 
                style={{ 
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)', 
                  color: '#0f172a', 
                  lineHeight: 1.15,
                  fontWeight: 600,
                  margin: 0
                }}
              >
                Decisions backed by{' '}
                <span style={{ color: '#2563eb', fontStyle: 'italic', fontWeight: 700 }}>
                  insight
                </span>
                <br />
                <span style={{ color: '#dc2626', fontStyle: 'italic', fontWeight: 700 }}>
                  & intelligence.
                </span>
              </h2>
            </div>

            {/* Right: Illustrative Wealth Architecture Tag */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.55rem', 
                padding: '0.55rem 1.1rem', 
                background: '#f8fafc', 
                border: '1px solid #e2e8f0', 
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
                marginTop: '0.25rem'
              }}
            >
              <Info size={15} color="#059669" />
              <span 
                style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.74rem', 
                  color: '#334155',
                  fontWeight: 600,
                  letterSpacing: '0.04em'
                }}
              >
                ILLUSTRATIVE WEALTH ARCHITECTURE MODEL
              </span>
            </div>

          </div>

          <p 
            style={{ 
              fontSize: '1.08rem', 
              color: '#334155', 
              maxWidth: '820px', 
              lineHeight: 1.65, 
              margin: 0,
              fontWeight: 500
            }}
          >
            Institutional asset allocation modeling, downside capture containment, and 
            tax-harvested compounding principles engineered to shield and expand family wealth across economic cycles.
          </p>

        </div>

        {/* =========================================================================
            2. Pinterest-Inspired 6 KPI Dashboard Cards (Light Mode)
            ========================================================================= */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '1rem',
            marginBottom: '2.5rem'
          }}
        >
          {kpiCards.map((kpi, idx) => {
            const KpiIcon = kpi.icon;
            return (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '1.25rem 1.15rem',
                  border: `1px solid ${kpi.borderColor}`,
                  boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 10px 24px -4px ${kpi.accentColor}25`;
                  e.currentTarget.style.borderColor = kpi.accentColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px -2px rgba(15, 23, 42, 0.04)';
                  e.currentTarget.style.borderColor = kpi.borderColor;
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.72rem', 
                        color: '#64748b', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.04em',
                        fontWeight: 600
                      }}
                    >
                      {kpi.title}
                    </span>
                    <div 
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '10px',
                        background: kpi.bgLight,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: kpi.accentColor
                      }}
                    >
                      <KpiIcon size={16} />
                    </div>
                  </div>

                  <div 
                    style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '1.65rem', 
                      fontWeight: 800, 
                      color: kpi.accentColor, 
                      lineHeight: 1.15
                    }}
                  >
                    {kpi.value}
                  </div>
                </div>

                <div 
                  style={{ 
                    fontSize: '0.74rem', 
                    color: '#475569', 
                    fontWeight: 600, 
                    marginTop: '0.65rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <span>{kpi.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            3. Two Main Analytical Panels (Asset Diversification + Compounding Curve)
            ========================================================================= */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', 
            gap: '2rem', 
            alignItems: 'stretch' 
          }}
        >
          
          {/* =======================================================================
              Panel 1: Asset Class Diversification (Left Card)
              ======================================================================= */}
          <div 
            style={{ 
              background: '#ffffff',
              borderRadius: '24px',
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              border: '1px solid rgba(226, 232, 240, 0.95)',
              boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.05)',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              {/* Card Top Row: Green Eyebrow + Target Equilibrium Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.8rem', 
                    color: '#059669', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.08em',
                    fontWeight: 700
                  }}
                >
                  ASSET CLASS DIVERSIFICATION
                </span>

                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: '#334155',
                    background: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    fontWeight: 600,
                    letterSpacing: '0.02em'
                  }}
                >
                  Target Equilibrium
                </span>
              </div>

              {/* Subheading: Serif Typography */}
              <h3 
                style={{ 
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.35rem, 2.2vw, 1.7rem)', 
                  color: '#0f172a', 
                  marginBottom: '1.5rem', 
                  fontWeight: 500,
                  lineHeight: 1.25
                }}
              >
                Balanced Capital Preservation & Growth
              </h3>

              {/* Segmented Allocation Bar */}
              <div 
                style={{ 
                  width: '100%', 
                  height: '11px', 
                  background: '#f1f5f9', 
                  borderRadius: '4px', 
                  display: 'flex', 
                  overflow: 'hidden', 
                  marginBottom: '1.75rem',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.06)'
                }}
              >
                <div 
                  style={{ width: '60%', background: '#059669', transition: 'width 0.4s ease' }} 
                  title="Equities (Large & Flexi-Cap) 60%" 
                />
                <div 
                  style={{ width: '25%', background: '#3b82f6', transition: 'width 0.4s ease' }} 
                  title="Fixed Income & AAA FDs 25%" 
                />
                <div 
                  style={{ width: '10%', background: '#cbd5e1', transition: 'width 0.4s ease' }} 
                  title="Sovereign Gold / G-Secs 10%" 
                />
                <div 
                  style={{ width: '5%', background: '#334155', transition: 'width 0.4s ease' }} 
                  title="Liquid Reserves 5%" 
                />
              </div>

              {/* Allocation Legend Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {assetAllocation.map((item) => (
                  <div 
                    key={item.id}
                    onMouseEnter={() => setActiveSegment(item.id)}
                    onMouseLeave={() => setActiveSegment(null)}
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      padding: '0.65rem 0.75rem',
                      borderRadius: '8px',
                      background: activeSegment === item.id ? item.bgLight : 'transparent',
                      borderBottom: '1px solid #f1f5f9',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      <div 
                        style={{ 
                          width: '12px', 
                          height: '12px', 
                          background: item.color, 
                          borderRadius: '2px',
                          boxShadow: `0 2px 6px ${item.color}40`
                        }} 
                      />
                      <div>
                        <div style={{ fontSize: '0.94rem', color: '#0f172a', fontWeight: 600 }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.15rem' }}>
                          {item.note}
                        </div>
                      </div>
                    </div>

                    <div 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '1.15rem', 
                        color: '#0f172a', 
                        fontWeight: 700 
                      }}
                    >
                      {item.pct}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Footnote Line */}
            <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9' }}>
              <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                Asset allocation is statistically demonstrated to determine over 90% of long-term investment performance. 
                Portfolios are periodically rebalanced to preserve target risk equilibrium.
              </p>
            </div>
          </div>

          {/* =======================================================================
              Panel 2: Illustrative Compounding Curve (Right Card)
              ======================================================================= */}
          <div 
            style={{ 
              background: '#ffffff',
              borderRadius: '24px',
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              border: '1px solid rgba(226, 232, 240, 0.95)',
              boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.05)',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              {/* Card Top Row: Green Eyebrow + Horizon Toggles */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <span 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.8rem', 
                    color: '#059669', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.08em',
                    fontWeight: 700
                  }}
                >
                  ILLUSTRATIVE COMPOUNDING CURVE
                </span>

                {/* Horizon Toggles 1Y, 3Y, 5Y, 10Y */}
                <div style={{ display: 'flex', gap: '0.35rem', background: '#f8fafc', padding: '3px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  {['1Y', '3Y', '5Y', '10Y'].map((h) => (
                    <button
                      key={h}
                      onClick={() => setActiveHorizon(h)}
                      style={{
                        padding: '0.3rem 0.75rem',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        background: activeHorizon === h ? '#059669' : 'transparent',
                        color: activeHorizon === h ? '#ffffff' : '#64748b',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: activeHorizon === h ? '0 2px 8px rgba(5, 150, 105, 0.35)' : 'none'
                      }}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trajectory Highlights (Value + Principal) */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.4rem' }}>
                <div>
                  <div 
                    style={{ 
                      fontSize: '0.72rem', 
                      color: '#64748b', 
                      textTransform: 'uppercase', 
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.06em',
                      fontWeight: 600,
                      marginBottom: '0.2rem'
                    }}
                  >
                    PROJECTED PORTFOLIO VALUE
                  </div>
                  <div 
                    style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: 'clamp(2rem, 3.2vw, 2.5rem)', 
                      color: '#059669', 
                      fontWeight: 800,
                      lineHeight: 1
                    }}
                  >
                    {current.projected}
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div 
                    style={{ 
                      fontSize: '0.72rem', 
                      color: '#64748b', 
                      textTransform: 'uppercase', 
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.06em',
                      fontWeight: 600,
                      marginBottom: '0.2rem'
                    }}
                  >
                    PRINCIPAL OUTLAY
                  </div>
                  <div 
                    style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)', 
                      color: '#0f172a',
                      fontWeight: 700
                    }}
                  >
                    {current.invested}
                  </div>
                </div>
              </div>

              {/* High-Contrast Interactive SVG Curve Chart (Inspired by Bloomberg/Pinterest terminals) */}
              <div 
                style={{ 
                  width: '100%', 
                  height: '185px', 
                  background: '#0a0d14', 
                  borderRadius: '14px',
                  border: '1px solid rgba(15, 23, 42, 0.2)', 
                  padding: '1.1rem', 
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.4)'
                }}
              >
                <svg viewBox="0 0 600 170" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                  {/* Subtle Grid Lines */}
                  <line x1="0" y1="35" x2="600" y2="35" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="0" y1="80" x2="600" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                  <line x1="0" y1="125" x2="600" y2="125" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                  {/* Gradient Area under Assure curve */}
                  <defs>
                    <linearGradient id="assureCurveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Area */}
                  <polygon 
                    points={`0,160 ${current.pointsAssure} 600,160`} 
                    fill="url(#assureCurveGradient)" 
                  />

                  {/* Conventional Benchmark Line (Subtle Cyan Dashed) */}
                  <polyline
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.75"
                    strokeDasharray="4 4"
                    opacity="0.65"
                    points={current.pointsBench}
                    style={{ transition: 'all 0.5s ease' }}
                  />

                  {/* Glowing Emerald Main Trajectory Line */}
                  <polyline
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    points={current.pointsAssure}
                    style={{ 
                      transition: 'all 0.5s ease',
                      filter: 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.6))'
                    }}
                  />

                  {/* Base Line */}
                  <line x1="0" y1="150" x2="600" y2="150" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                </svg>

                {/* Floating Chart Badges & Model Note */}
                <div style={{ position: 'absolute', top: '10px', left: '14px', display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.68rem', color: '#10b981', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                    <span>Assure Multi-Asset ({current.cagr})</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.68rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', opacity: 0.8 }}>
                    <span style={{ width: '8px', height: '2px', background: '#38bdf8' }} />
                    <span>Bank FD (6.5%)</span>
                  </div>
                </div>

                <div 
                  style={{ 
                    position: 'absolute', 
                    bottom: '8px', 
                    right: '12px', 
                    fontSize: '0.68rem', 
                    color: '#94a3b8', 
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.03em'
                  }}
                >
                  Indicative 12-15% CAGR Model
                </div>
              </div>

              {/* 3 Risk & Execution Metrics Boxes (Exact Pinterest 3-col layout) */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(3, 1fr)', 
                  gap: '0.85rem', 
                  marginTop: '1.4rem' 
                }}
              >
                <div 
                  style={{ 
                    padding: '0.85rem 0.75rem', 
                    background: '#f8fafc', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '10px' 
                  }}
                >
                  <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    Alpha Persistence
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: '#0f172a', marginTop: '0.3rem', fontWeight: 700 }}>
                    Top Quartile
                  </div>
                </div>

                <div 
                  style={{ 
                    padding: '0.85rem 0.75rem', 
                    background: '#f8fafc', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '10px' 
                  }}
                >
                  <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    Downside Capture
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: '#2563eb', marginTop: '0.3rem', fontWeight: 700 }}>
                    &lt; 78%
                  </div>
                </div>

                <div 
                  style={{ 
                    padding: '0.85rem 0.75rem', 
                    background: '#f8fafc', 
                    border: '1px solid #e2e8f0', 
                    borderRadius: '10px' 
                  }}
                >
                  <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    Settlement Custody
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: '#059669', marginTop: '0.3rem', fontWeight: 700 }}>
                    Direct AMC
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Full-Width CTA Button */}
            <div style={{ marginTop: '1.75rem' }}>
              <button 
                onClick={() => onOpenModal && onOpenModal('contact-consult')}
                style={{ 
                  width: '100%', 
                  height: '48px', 
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                  color: '#ffffff',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 20px rgba(5, 150, 105, 0.28)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 26px rgba(5, 150, 105, 0.38)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(5, 150, 105, 0.28)';
                }}
              >
                <span>REQUEST CUSTOM PORTFOLIO DIAGNOSTIC</span>
                <ArrowRight size={15} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PortfolioVisualization;
