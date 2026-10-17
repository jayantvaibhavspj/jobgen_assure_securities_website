import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, Target, TrendingUp, 
  GraduationCap, Home, Palmtree, Clock, CheckCircle2 
} from 'lucide-react';

const ROADMAP_STEPS = [
  {
    step: "01",
    title: "Understand Your Goals",
    phase: "Discovery & Diagnostics",
    desc: "We begin with a comprehensive audit of your existing holdings, family cash flows, risk tolerance, and key financial milestones."
  },
  {
    step: "02",
    title: "Build Your Strategy",
    phase: "Asset Allocation Model",
    desc: "Architecting a customized multi-asset roadmap balancing high-growth equities with AAA debt and sovereign capital preservation."
  },
  {
    step: "03",
    title: "Choose The Right Investments",
    phase: "Quantitative Selection",
    desc: "Rigorous filtering across 40+ AMCs. We evaluate scheme consistency, rolling alpha, expense ratios, and downside risk metrics."
  },
  {
    step: "04",
    title: "Track & Review",
    phase: "Stewardship & Governance",
    desc: "Unified digital portfolio reporting with automated NAV valuation, capital gains tracking, and systematic semi-annual rebalancing."
  },
  {
    step: "05",
    title: "Grow Over Time",
    phase: "Generational Compounding",
    desc: "Allowing the power of compounding to work undisturbed by speculative market headlines, protecting your legacy for decades."
  }
];

const MILESTONES = [
  {
    id: "retirement",
    title: "Retirement Independence",
    icon: Palmtree,
    image: "/assets/goal-retirement.jpg",
    corpus: "₹2,50,00,000",
    monthly: "₹18,500 / mo",
    horizon: "15 - 20 Years",
    strategy: "Dynamic Asset Allocation (Equity Growth + Target Maturity Debt)"
  },
  {
    id: "child-education",
    title: "Premier Education",
    icon: GraduationCap,
    image: "/assets/goal-child-education.jpg",
    corpus: "₹50,00,000",
    monthly: "₹14,200 / mo",
    horizon: "10 - 14 Years",
    strategy: "Flexi-Cap & Large Cap Equities with Glide Path into Debt"
  },
  {
    id: "dream-home",
    title: "Real Estate Down Payment",
    icon: Home,
    image: "/assets/goal-dream-home.jpg",
    corpus: "₹75,00,000",
    monthly: "₹32,000 / mo",
    horizon: "5 - 7 Years",
    strategy: "Balanced Advantage + AAA Corporate Fixed Deposits"
  },
  {
    id: "wealth-creation",
    title: "Generational Wealth",
    icon: TrendingUp,
    image: "/assets/goal-wealth-creation.jpg",
    corpus: "₹5,00,00,000+",
    monthly: "₹45,000 / mo",
    horizon: "15+ Years",
    strategy: "Multi-Cap, Mid-Cap & Alternative PMS / AIF Opportunities"
  }
];

export function GoalInvestingSection({ onOpenModal, theme = 'dark' }) {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const themeClass = theme === 'light' ? 'section-theme-light' : 'section-theme-dark';

  return (
    <section id="journey" className={`roadmap-section ${themeClass}`} style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle Financial City Skyline Watermark */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/hero-city-poster.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
          opacity: 0.12,
          filter: 'grayscale(20%)',
          maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 80%, transparent)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="eyebrow-label">
            <span>04 — INVESTMENT ROADMAP</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: 'var(--color-text)', maxWidth: '650px', lineHeight: 1.12 }}>
              From <span className="text-blue">ambition</span>
              <br />
              to <span className="text-red" style={{ fontStyle: 'italic' }}>achievement.</span>
            </h2>

            <p style={{ maxWidth: '440px', fontSize: '0.96rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
              A disciplined, consulting-grade process designed to translate abstract financial goals into an institutional, actionable wealth trajectory.
            </p>
          </div>
        </div>

        {/* 5-Step Connected Roadmap Timeline */}
        <div className="roadmap-timeline">
          {ROADMAP_STEPS.map((step, idx) => (
            <div key={idx} className="roadmap-step-card">
              <div className="roadmap-dot">
                {step.step}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-gold)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                {step.phase}
              </div>
              <h3 className="roadmap-step-title">{step.title}</h3>
              <p className="roadmap-step-desc">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Milestone Goal Architecture Sandbox */}
        <div 
          style={{ 
            marginTop: '4.5rem', 
            background: 'var(--color-bg-card)', 
            border: '1px solid var(--color-border)', 
            borderRadius: '2px',
            padding: 'clamp(1.75rem, 3.5vw, 3rem)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1.25rem' }}>
            <div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--color-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Representative Goal Blueprints
              </span>
              <h4 style={{ fontSize: '1.4rem', color: 'var(--color-text)', marginTop: '0.25rem' }}>
                Systematic Milestone Modeling
              </h4>
            </div>

            {/* Goal Switchers */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {MILESTONES.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMilestone(idx)}
                  style={{
                    padding: '0.5rem 1rem',
                    background: activeMilestone === idx ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.03)',
                    color: activeMilestone === idx ? '#090a0d' : 'var(--color-text-secondary)',
                    border: '1px solid',
                    borderColor: activeMilestone === idx ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: activeMilestone === idx ? '0 2px 10px rgba(16, 185, 129, 0.3)' : 'none'
                  }}
                >
                  {m.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Blueprint Display */}
          {(() => {
            const current = MILESTONES[activeMilestone];
            return (
              <>
                <div className="milestone-blueprint-grid">
                  
                  {/* 1. Milestone Photographic Visual Preview */}
                  <div 
                    style={{ 
                      position: 'relative', 
                      minHeight: '140px', 
                      borderRadius: '8px', 
                      overflow: 'hidden', 
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    <img 
                      src={current.image} 
                      alt={current.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9, 10, 13, 0.92) 0%, rgba(9, 10, 13, 0.35) 60%, transparent 100%)' }} />
                    <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px' }}>
                      <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                        Milestone Vision
                      </div>
                      <div style={{ fontSize: '0.92rem', fontFamily: 'var(--font-serif)', color: '#ffffff', fontWeight: 600, marginTop: '2px' }}>
                        {current.title}
                      </div>
                    </div>
                  </div>

                  {/* 2. Target Corpus Goal Metric Card */}
                  <div 
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      borderRadius: '8px',
                      padding: '1.25rem 1.35rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                        Target Corpus Goal
                      </div>
                      <div 
                        style={{ 
                          fontSize: 'clamp(1.5rem, 1.8vw, 1.95rem)', 
                          fontWeight: 700, 
                          color: 'var(--color-gold)', 
                          fontVariantNumeric: 'tabular-nums',
                          margin: '0.35rem 0',
                          whiteSpace: 'nowrap',
                          letterSpacing: '-0.02em',
                          fontFamily: 'var(--font-sans)'
                        }}
                      >
                        {current.corpus}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.5rem' }}>
                      <span>Horizon:</span>
                      <strong style={{ color: '#ffffff', fontWeight: 600 }}>{current.horizon}</strong>
                    </div>
                  </div>

                  {/* 3. Indicative Monthly SIP Metric Card */}
                  <div 
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      borderRadius: '8px',
                      padding: '1.25rem 1.35rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                        Indicative Monthly SIP
                      </div>
                      <div 
                        style={{ 
                          fontSize: 'clamp(1.5rem, 1.8vw, 1.95rem)', 
                          fontWeight: 700, 
                          color: '#ffffff', 
                          fontVariantNumeric: 'tabular-nums',
                          margin: '0.35rem 0',
                          whiteSpace: 'nowrap',
                          letterSpacing: '-0.02em',
                          fontFamily: 'var(--font-sans)'
                        }}
                      >
                        {current.monthly}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)', lineHeight: 1.4, marginTop: '0.5rem' }}>
                      Assumed 12% CAGR across equity asset allocation
                    </div>
                  </div>

                  {/* 4. Recommended Asset Mix & Action Card */}
                  <div 
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      borderRadius: '8px',
                      padding: '1.25rem 1.35rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                        Recommended Asset Mix
                      </div>
                      <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', marginTop: '0.35rem', lineHeight: 1.5, marginBottom: '0.85rem' }}>
                        {current.strategy}
                      </p>
                    </div>
                    <button 
                      onClick={() => onOpenModal && onOpenModal('contact-consult')}
                      className="btn-gold"
                      style={{ 
                        height: '38px', 
                        fontSize: '0.82rem', 
                        fontWeight: 600,
                        width: '100%', 
                        justifyContent: 'center',
                        borderRadius: '6px',
                        textTransform: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <span>Model Your Plan</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>

                </div>

                <style>{`
                  .milestone-blueprint-grid {
                    display: grid;
                    grid-template-columns: 240px minmax(210px, 1fr) minmax(210px, 1fr) minmax(240px, 1.15fr);
                    gap: 1.5rem;
                    align-items: stretch;
                  }
                  @media (max-width: 1200px) {
                    .milestone-blueprint-grid {
                      grid-template-columns: 1fr 1fr;
                      gap: 1.25rem;
                    }
                  }
                  @media (max-width: 640px) {
                    .milestone-blueprint-grid {
                      grid-template-columns: 1fr;
                      gap: 1rem;
                    }
                  }
                `}</style>
              </>
            );
          })()}

        </div>

      </div>
    </section>
  );
}

export default GoalInvestingSection;
