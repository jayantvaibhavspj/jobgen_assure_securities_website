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
        background: '#ffffff',
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
          <div style={{ position: 'sticky', top: '100px' }}>
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
                marginBottom: '2.5rem' 
              }}
            >
              Unlike automated robo-advisors or aggressive trading brokers, Assure Securities acts as your dedicated wealth custodian and financial sounding board—bringing fifteen years of institutional discipline to private families.
            </p>

            <button 
              onClick={() => onOpenModal && onOpenModal('consultation')}
              className="btn-primary-navy"
            >
              <span>Start Your Journey With Assure →</span>
            </button>
          </div>

          {/* RIGHT: Editorial Stack (01, 02, 03, 04 with Thin Separators) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {ADVANTAGES.map((adv, idx) => {
              const Icon = adv.icon;

              return (
                <div 
                  key={adv.num}
                  style={{ 
                    paddingTop: idx === 0 ? '0' : '2.5rem',
                    paddingBottom: '2.5rem',
                    borderBottom: idx === ADVANTAGES.length - 1 ? 'none' : '1px solid var(--color-border)',
                    display: 'flex',
                    gap: '1.75rem',
                    alignItems: 'flex-start'
                  }}
                  className="advantage-row"
                >
                  {/* Large Number */}
                  <div 
                    style={{ 
                      fontSize: 'clamp(2.2rem, 3.5vw, 2.75rem)', 
                      fontWeight: 700, 
                      color: 'var(--color-primary)', 
                      lineHeight: 1, 
                      opacity: 0.85,
                      fontFamily: 'var(--font-family)',
                      minWidth: '55px'
                    }}
                  >
                    {adv.num}
                  </div>

                  {/* Advantage Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                      <Icon size={16} color="var(--color-accent)" />
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>
                        {adv.title}
                      </h3>
                    </div>

                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-accent)', marginBottom: '0.65rem' }}>
                      {adv.subtitle}
                    </div>

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
