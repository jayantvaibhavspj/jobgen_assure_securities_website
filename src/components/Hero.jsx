import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, TrendingUp, ArrowRight, Sparkles, CheckCircle2, 
  Smartphone, Award, Coins, ChevronRight, ChevronLeft, Lock, 
  Layers, PieChart, Activity, ExternalLink, Calendar, PhoneCall,
  BarChart3, Zap, Shield, HelpCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

const BANNER_SLIDES = [
  {
    image: '/assets/b1-2.jpg',
    badge: 'Wealth Creation',
    title: 'Bespoke Mutual Fund Architecture',
    subtitle: 'Whether you want to build multi-generational family wealth or retire early, meeting your aspirations with mathematical discipline is our aim.'
  },
  {
    image: '/assets/b2-1.jpg',
    badge: 'Retirement Planning',
    title: 'Retire in Sovereign Comfort',
    subtitle: 'When you got silver in your hair, you must have gold in your pocket. High-cash-flow SWP and sovereign preservation strategies.'
  },
  {
    image: '/assets/child.jpg',
    badge: 'Children Education',
    title: 'Ivy-League & Global Higher Education',
    subtitle: 'Give wings to their global aspirations with inflation-hedged equity and foreign mutual fund allocations.'
  },
  {
    image: '/assets/b4-2.jpg',
    badge: '100% Digital',
    title: 'Paperless Institutional Execution',
    subtitle: 'Direct-to-AMC mutual fund distribution with instant biometric KYC, automated mandates, and real-time portfolio telemetry.'
  }
];

export function Hero({ onOpenModal, onNavigate }) {
  const [activeTab, setActiveTab] = useState('terminal'); // 'terminal' | 'campaigns'
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Interactive Wealth Simulation State
  const [monthlySip, setMonthlySip] = useState(25000);
  const [tenureYears, setTenureYears] = useState(15);
  const [expectedCagr, setExpectedCagr] = useState(13.5);

  // Auto-advance campaign slides
  useEffect(() => {
    if (activeTab === 'campaigns') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [activeTab]);

  // Compounding Math
  const totalMonths = tenureYears * 12;
  const monthlyRate = (expectedCagr / 100) / 12;
  const futureValue = Math.round(
    monthlySip * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate)
  );
  const totalInvested = monthlySip * totalMonths;
  const wealthGain = futureValue - totalInvested;

  const formatINR = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return '₹' + Math.round(val).toLocaleString('en-IN');
  };

  const slide = BANNER_SLIDES[currentSlide];

  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: '#050914', color: '#ffffff' }}>
      
      {/* Subtle Mesh Ambient Glows */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '20%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(37,99,235,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        position: 'absolute',
        top: '25%',
        right: '-100px',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0) 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Main Grand Hero Container */}
      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '3.5rem', paddingBottom: '4.5rem' }}>
        
        {/* Top Regulatory Credential Pill */}
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(30, 41, 59, 0.85)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            borderRadius: '9999px',
            padding: '0.35rem 1rem',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#38bdf8'
          }}>
            <span className="pulse-dot-green" />
            <span>AMFI REGISTERED MUTUAL FUND DISTRIBUTOR • ARN-182137</span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '9999px',
            padding: '0.35rem 0.9rem',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: '#34d399'
          }}>
            <ShieldCheck size={14} />
            <span>DIRECT AMC EXECUTION • ZERO CUSTODY RISK</span>
          </div>

          <div style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '9999px',
            padding: '0.35rem 0.9rem',
            fontSize: '0.78rem',
            color: '#cbd5e1'
          }} className="d-md-flex">
            <Lock size={12} color="#38bdf8" />
            <span>256-Bit Bank Grade SSL</span>
          </div>
        </div>

        {/* 2-Column Institutional Command Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-wealth-grid">
          
          {/* Left Column: Authoritative Value Proposition & Firm Standing */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#facc15', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
              <Award size={16} />
              <span>15+ Years of Proven Market Wisdom</span>
            </div>

            <h1 style={{
              fontSize: '3.4rem',
              lineHeight: 1.12,
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '1.5rem',
              fontFamily: 'var(--font-heading)'
            }}>
              Private Wealth Architecture. <br />
              <span className="gold-gradient-text">Disciplined Capital Compounding.</span>
            </h1>

            <p style={{
              fontSize: '1.18rem',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '620px',
              fontWeight: 400
            }}>
              Guiding <strong>₹250+ Crores</strong> in capital across <strong>1,500+ discerning families</strong>, medical professionals, and business owners. We integrate institutional quantitative fund screening with fiduciary dedication to protect and compound multi-generational wealth.
            </p>

            {/* 4 Trust Highlights Checkmarks */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                { title: "Direct AMC Settlement", desc: "100% of capital transfers directly to SEBI custodians (Zero intermediary holding risk)." },
                { title: "Institutional Scheme Vetting", desc: "Sharpe, Sortino, rolling return alpha & downside capture ratio analysis." },
                { title: "Comprehensive Asset Suite", desc: "Equities, AAA Corporate FDs, Sovereign Gold, PMS & AIF under one roof." },
                { title: "Fiduciary Lucknow Desk", desc: "Personal in-person meetings at Gomtinagar with licensed wealth specialists." }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '0.3rem', borderRadius: '8px', marginTop: '2px' }}>
                    <CheckCircle2 size={16} color="#10b981" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>{item.title}</div>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.4 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dual Elite Action Buttons */}
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                onClick={() => onOpenModal('consultation')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  padding: '1rem 2.2rem',
                  borderRadius: '9999px',
                  boxShadow: '0 10px 25px -5px rgba(16,185,129,0.5)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <span>Schedule Private Portfolio Review</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => onNavigate('calculators')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  background: 'rgba(30, 41, 59, 0.7)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.15)'; e.currentTarget.style.borderColor = '#38bdf8'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(30, 41, 59, 0.7)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; }}
              >
                <Activity size={18} color="#38bdf8" />
                <span>Simulate 30-Yr Wealth Trajectory</span>
              </button>
            </div>

            {/* Direct WhatsApp Callout */}
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#94a3b8' }}>
              <span style={{ color: '#64748b' }}>Direct Line:</span>
              <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#38bdf8', fontWeight: 700 }}>{COMPANY_INFO.phone}</a>
              <span style={{ color: '#475569' }}>•</span>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Assure%20Securities,%20I%20would%20like%20to%20schedule%20a%20private%20portfolio%20consultation.`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#4ade80', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <span>Instant WhatsApp Advisory</span>
                <ExternalLink size={12} />
              </a>
            </div>

          </div>

          {/* Right Column: Private Wealth Command Terminal Window */}
          <div>
            <div className="terminal-window">
              
              {/* Terminal Title Bar with OS Tabs */}
              <div style={{
                background: 'rgba(6, 10, 20, 0.95)',
                padding: '0.85rem 1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.04em', marginLeft: '0.5rem' }}>
                    ASSURE WEALTH OS • v4.2 PRO
                  </span>
                </div>

                {/* View Switcher */}
                <div style={{ display: 'flex', background: 'rgba(255,255,255,0.06)', padding: '2px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    style={{
                      background: activeTab === 'terminal' ? '#2563eb' : 'transparent',
                      color: activeTab === 'terminal' ? '#ffffff' : '#94a3b8',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.35rem 0.85rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <BarChart3 size={13} />
                    <span>Wealth Simulator</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('campaigns')}
                    style={{
                      background: activeTab === 'campaigns' ? '#2563eb' : 'transparent',
                      color: activeTab === 'campaigns' ? '#ffffff' : '#94a3b8',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.35rem 0.85rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <Layers size={13} />
                    <span>Campaign Briefings ({BANNER_SLIDES.length})</span>
                  </button>
                </div>
              </div>

              {/* TAB 1: Wealth Simulator Terminal */}
              {activeTab === 'terminal' ? (
                <div style={{ padding: '2rem' }}>
                  
                  {/* Simulated Private Client Portfolio Telemetry */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '18px',
                    padding: '1.25rem 1.5rem',
                    marginBottom: '1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Simulated Wealth Trajectory</span>
                        <span style={{ background: 'rgba(16,185,129,0.2)', color: '#4ade80', fontSize: '0.7rem', fontWeight: 800, padding: '0.1rem 0.45rem', borderRadius: '4px' }}>
                          +{expectedCagr}% CAGR
                        </span>
                      </div>
                      <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                        {formatINR(futureValue)}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Invested Principal</div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e2e8f0' }}>{formatINR(totalInvested)}</div>
                      <div style={{ fontSize: '0.8rem', color: '#4ade80', fontWeight: 700, marginTop: '2px' }}>
                        +{formatINR(wealthGain)} Gain
                      </div>
                    </div>
                  </div>

                  {/* Institutional Asset Allocation Strip */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', fontSize: '0.82rem' }}>
                      <span style={{ color: '#cbd5e1', fontWeight: 600 }}>Curated Multi-Asset Diversification</span>
                      <span style={{ color: '#38bdf8', fontWeight: 700 }}>Optimal Sharpe Ratio: 1.48</span>
                    </div>

                    {/* Progress Allocation Bar */}
                    <div style={{ height: '10px', borderRadius: '5px', overflow: 'hidden', display: 'flex', width: '100%', marginBottom: '0.65rem' }}>
                      <div style={{ width: '45%', background: '#2563eb' }} title="Large & Flexi-Cap Equity (45%)" />
                      <div style={{ width: '25%', background: '#38bdf8' }} title="Mid & Small-Cap Alpha (25%)" />
                      <div style={{ width: '15%', background: '#10b981' }} title="Sovereign Debt & Corporate FDs (15%)" />
                      <div style={{ width: '10%', background: '#f59e0b' }} title="Sovereign Gold & Commodities (10%)" />
                      <div style={{ width: '5%', background: '#a855f7' }} title="Liquid Emergency Reserves (5%)" />
                    </div>

                    {/* Asset Legend */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', fontSize: '0.75rem', color: '#94a3b8' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }} />
                        <span>Core Equity (45%)</span>
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }} />
                        <span>Mid/Small Alpha (25%)</span>
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                        <span>Fixed Income (15%)</span>
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
                        <span>Gold/Hedging (10%)</span>
                      </span>
                    </div>
                  </div>

                  {/* Interactive Slider 1: Monthly Allocation */}
                  <div style={{ marginBottom: '1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                      <label style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>Monthly Capital Deployment (SIP)</label>
                      <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38bdf8' }}>₹{monthlySip.toLocaleString('en-IN')}/mo</span>
                    </div>
                    <input 
                      type="range"
                      min="2500"
                      max="200000"
                      step="2500"
                      value={monthlySip}
                      onChange={(e) => setMonthlySip(Number(e.target.value))}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginTop: '3px' }}>
                      <span>₹2,500</span>
                      <span>₹50,000</span>
                      <span>₹1,00,000</span>
                      <span>₹2,00,000</span>
                    </div>
                  </div>

                  {/* Interactive Slider 2: Investment Horizon */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
                      <label style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>Compounding Duration</label>
                      <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38bdf8' }}>{tenureYears} Years</span>
                    </div>
                    <input 
                      type="range"
                      min="3"
                      max="30"
                      step="1"
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginTop: '3px' }}>
                      <span>3 Years</span>
                      <span>10 Years</span>
                      <span>20 Years</span>
                      <span>30 Years</span>
                    </div>
                  </div>

                  {/* Wealth Milestone Callout */}
                  <div style={{
                    background: 'rgba(56, 189, 248, 0.08)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    borderRadius: '14px',
                    padding: '0.9rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <Zap size={18} color="#facc15" />
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff' }}>Wealth Freedom Milestone</div>
                        <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
                          At this pace, your portfolio compounds by <strong>+{formatINR(Math.round(futureValue * 0.135))} every year</strong> in pure passive gains.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Instant CTA inside Terminal */}
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button 
                      onClick={() => onOpenModal('consultation')}
                      style={{
                        flex: 1,
                        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                        color: '#ffffff',
                        border: '1px solid rgba(56, 189, 248, 0.4)',
                        padding: '0.85rem',
                        borderRadius: '12px',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <span>Get Customized Portfolio Blueprint</span>
                      <ArrowRight size={15} />
                    </button>

                    <button 
                      onClick={() => onNavigate('calculators')}
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        color: '#ffffff',
                        border: '1px solid rgba(255,255,255,0.12)',
                        padding: '0.85rem 1.2rem',
                        borderRadius: '12px',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      <span>All 6 Tools</span>
                    </button>
                  </div>

                </div>
              ) : (
                /* TAB 2: Authentic Campaign Slides Viewer */
                <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(6,10,20,0.98) 0%, rgba(6,10,20,0.5) 60%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '2.5rem'
                  }}>
                    <div className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.4)', width: 'fit-content', marginBottom: '0.6rem' }}>
                      {slide.badge}
                    </div>
                    <h3 style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 800, marginBottom: '0.5rem' }}>
                      {slide.title}
                    </h3>
                    <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                      {slide.subtitle}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button 
                        onClick={() => onOpenModal('consultation')}
                        className="btn-emerald"
                        style={{ padding: '0.7rem 1.4rem', fontSize: '0.88rem' }}
                      >
                        <span>Consult Advisor on This Strategy</span>
                      </button>

                      {/* Navigation Dots */}
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        {BANNER_SLIDES.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            style={{
                              width: i === currentSlide ? '22px' : '8px',
                              height: '8px',
                              borderRadius: '4px',
                              background: i === currentSlide ? '#38bdf8' : 'rgba(255,255,255,0.3)',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Institutional Security & Trust Matrix Banner (Direct AMC Settlement & Zero Custody) */}
      <div style={{
        background: 'rgba(6, 10, 20, 0.98)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '2rem 0'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: 'rgba(16,185,129,0.15)', padding: '0.65rem', borderRadius: '12px' }}>
                <ShieldCheck size={24} color="#10b981" />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>Direct-to-AMC Settlement</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
                  Zero custody risk. 100% of investments flow directly from your bank to SEBI-regulated fund custodians.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: 'rgba(56,189,248,0.15)', padding: '0.65rem', borderRadius: '12px' }}>
                <Award size={24} color="#38bdf8" />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>AMFI Verified ARN-182137</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
                  Officially registered distributor valid up to July 2027. Full AMFI Code of Conduct compliance.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: 'rgba(234,179,8,0.15)', padding: '0.65rem', borderRadius: '12px' }}>
                <TrendingUp size={24} color="#facc15" />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>₹250+ Cr Assets Guided</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
                  Over 15+ years of market wisdom navigating bull runs, recessions, and global macro market cycles.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: 'rgba(168,85,247,0.15)', padding: '0.65rem', borderRadius: '12px' }}>
                <Lock size={24} color="#a855f7" />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.2rem' }}>256-Bit Bank Encryption</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
                  Your personal portfolio, PAN and KYC information are strictly confidential and never commercialized.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-wealth-grid { grid-template-columns: 1.12fr 0.88fr !important; }
        }
      `}</style>
    </div>
  );
}
