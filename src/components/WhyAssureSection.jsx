import React from 'react';
import { ShieldCheck, Cpu, Target, Layers, ArrowRight } from 'lucide-react';

const ADVANTAGES = [
  {
    num: "01",
    title: "Expert Guidance",
    subtitle: "15+ Years of Multi-Cycle Market Wisdom",
    description: "Financial markets are volatile, but discipline endures. Our AMFI-registered professionals (ARN-182137) provide seasoned, research-driven advisory tailored to your unique risk profile—never chasing speculative fads.",
    icon: ShieldCheck
  },
  {
    num: "02",
    title: "Technology Driven",
    subtitle: "Real-Time Tracking & Paperless Execution",
    description: "Track your family's consolidated net worth in one unified dashboard. From instant digital KYC to automated SIP mandates and capital gains reporting, technology empowers every single interaction.",
    icon: Cpu
  },
  {
    num: "03",
    title: "Goal-Based Investing",
    subtitle: "Milestone-Driven Asset Allocation",
    description: "Every rupee you invest should have a dedicated mission. We systematically map your assets to life milestones—early retirement, children's global education, dream home, and generational wealth preservation.",
    icon: Target
  },
  {
    num: "04",
    title: "Complete Wealth Solutions",
    subtitle: "Direct AMC Settlement & Zero Custody Risk",
    description: "Access top-quartile Mutual Funds, AAA-rated Corporate Fixed Deposits, Sovereign Gold Bonds, and PMS/AIF. Your capital flows directly to regulated AMCs with complete transparency.",
    icon: Layers
  }
];

export function WhyAssureSection({ onOpenModal }) {
  return (
    <section 
      id="why-assure"
      style={{ 
        padding: 'var(--section-pad-desktop) 0', 
        background: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)' 
      }}
      className="section-pad"
    >
      <div className="container">
        
        {/* Editorial Two-Column Layout (Section 16) */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'flex-start'
          }}
          className="why-assure-grid"
        >
          
          {/* LEFT: Large Statement & Fiduciary Manifesto */}
          <div style={{ position: 'sticky', top: '100px' }} className="reveal-on-scroll">
            <div className="eyebrow-pill emerald">
              <ShieldCheck size={13} />
              <span>The Assure Advantage</span>
            </div>

            <h2 
              style={{ 
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', 
                fontWeight: 700, 
                color: 'var(--color-primary)', 
                letterSpacing: '-0.03em', 
                lineHeight: 1.2,
                marginBottom: '1.5rem' 
              }}
            >
              Why Investors Choose Assure
            </h2>

            <p 
              style={{ 
                fontSize: '1.18rem', 
                color: 'var(--color-text)', 
                fontWeight: 500, 
                lineHeight: 1.6, 
                marginBottom: '1.5rem' 
              }}
            >
              "We believe wealth is built with patience, precision, and an unwavering commitment to your family's future."
            </p>

            <p 
              style={{ 
                fontSize: '0.95rem', 
                color: 'var(--color-text-secondary)', 
                lineHeight: 1.65, 
                marginBottom: '1.75rem' 
              }}
            >
              Unlike automated robo-advisors or aggressive trading brokers, Assure Securities acts as your dedicated wealth custodian and financial sounding board—bringing fifteen years of institutional discipline to private families.
            </p>

            {/* Authentic Photographic Advisory Anchor (Visual Storytelling Upgrade) */}
            <div 
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--color-border)',
                boxShadow: '0 16px 36px -10px rgba(7, 26, 47, 0.15)',
                marginBottom: '2rem'
              }}
            >
              <img 
                src="/assets/why-assure-advisory.jpg" 
                alt="Assure Securities Dedicated Advisory Session" 
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              {/* Subtle Gradient Vignette */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(7, 26, 47, 0.88) 0%, rgba(7, 26, 47, 0.1) 60%)'
                }} 
              />
              
              {/* Floating Credential Pill on Image */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '14px',
                  left: '16px',
                  right: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16B981' }} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff' }}>Dedicated Wealth Relationship Desk</span>
                </div>
                <span 
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    background: 'rgba(255, 255, 255, 0.18)',
                    backdropFilter: 'blur(6px)',
                    color: '#ffffff',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(255, 255, 255, 0.25)'
                  }}
                >
                  AMFI ARN-182137
                </span>
              </div>
            </div>

            <button 
              onClick={() => onOpenModal && onOpenModal('consultation')}
              className="btn-primary-navy"
            >
              <span>Start Your Journey With Assure →</span>
            </button>
          </div>

          {/* RIGHT: Editorial Stack with Glass Numerical Indicators (Requirement 13) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {ADVANTAGES.map((adv, idx) => {
              const Icon = adv.icon;
              const isLast = idx === ADVANTAGES.length - 1;

              return (
                <div 
                  key={adv.num}
                  style={{ 
                    paddingTop: idx === 0 ? '0' : '2.25rem',
                    paddingBottom: isLast ? '0' : '2.25rem',
                    display: 'flex',
                    gap: '1.75rem',
                    alignItems: 'flex-start',
                    position: 'relative'
                  }}
                  className={`advantage-row reveal-on-scroll stagger-${idx + 1}`}
                >
                  {/* Glass Numerical Indicator Column with Connective Line (Requirement 13) */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div 
                      className="glass-surface-light"
                      style={{ 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '18px',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontSize: '1.35rem', 
                        fontWeight: 800, 
                        color: 'var(--color-primary)', 
                        lineHeight: 1, 
                        boxShadow: '0 8px 24px -4px rgba(7, 26, 47, 0.08), 0 0 16px rgba(22, 185, 129, 0.12)',
                        border: '1.5px solid rgba(22, 185, 129, 0.25)',
                        position: 'relative',
                        zIndex: 2
                      }}
                    >
                      {adv.num}
                    </div>

                    {/* Thin Connective Emerald Line Between Numbers */}
                    {!isLast && (
                      <div 
                        style={{ 
                          width: '2px', 
                          minHeight: '75px', 
                          background: 'linear-gradient(to bottom, #16B981 0%, rgba(22, 185, 129, 0.25) 100%)',
                          margin: '6px 0',
                          borderRadius: '2px'
                        }} 
                      />
                    )}
                  </div>

                  {/* Advantage Content */}
                  <div style={{ flex: 1, paddingTop: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <Icon size={16} color="var(--color-accent)" />
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>
                        {adv.title}
                      </h3>
                    </div>

                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-accent)', marginBottom: '0.45rem' }}>
                      {adv.subtitle}
                    </div>

                    {/* Expanding Accent Line */}
                    <div className="advantage-accent-line" style={{ marginBottom: '0.75rem' }} />

                    <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                      {adv.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .why-assure-grid {
            grid-template-columns: 0.95fr 1.05fr !important;
          }
        }
      `}</style>
    </section>
  );
}
