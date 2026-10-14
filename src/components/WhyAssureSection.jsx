import React from 'react';
import { ShieldCheck, Cpu, Target, Layers, ArrowUpRight } from 'lucide-react';

const REASONS = [
  {
    num: "01",
    title: "Expert Guidance",
    subtitle: "15+ Years of Multi-Cycle Market Wisdom",
    description: "Financial markets are volatile, but discipline endures. Our AMFI-registered professionals (ARN-182137) provide seasoned, research-driven advisory tailored to your unique risk profile—never chasing speculative fads.",
    icon: ShieldCheck,
    tag: "AMFI Registered"
  },
  {
    num: "02",
    title: "Technology Driven",
    subtitle: "Real-Time Tracking & Paperless Execution",
    description: "Track your family's consolidated net worth in one unified dashboard. From instant digital KYC to automated SIP mandates and capital gains reporting, technology empowers every single interaction.",
    icon: Cpu,
    tag: "Digital Ecosystem"
  },
  {
    num: "03",
    title: "Goal-Based Investing",
    subtitle: "Milestone-Driven Asset Allocation",
    description: "Every rupee you invest should have a dedicated mission. We systematically map your assets to life milestones—early retirement, child's ivy-league education, dream home, and generational wealth preservation.",
    icon: Target,
    tag: "Milestone Architecture"
  },
  {
    num: "04",
    title: "Complete Wealth Ecosystem",
    subtitle: "Direct AMC Settlement & Zero Custody Risk",
    description: "Access top-quartile Mutual Funds, AAA-rated Corporate Fixed Deposits, Sovereign Gold Bonds, PMS/AIF, and Life Insurance. Your capital flows directly to regulated AMCs with complete transparency.",
    icon: Layers,
    tag: "Direct Settlement"
  }
];

export function WhyAssureSection({ onOpenModal }) {
  return (
    <section 
      id="why-assure"
      style={{ 
        padding: '7rem 0', 
        background: '#ffffff',
        borderBottom: '1px solid var(--color-border)' 
      }}
    >
      <div className="container">
        
        {/* Editorial Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '4.5rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <span 
              style={{ 
                fontSize: '0.8rem', 
                fontWeight: 800, 
                color: 'var(--color-accent)', 
                textTransform: 'uppercase', 
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: '0.75rem' 
              }}
            >
              The Assure Advantage
            </span>
            <h2 
              style={{ 
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
                fontWeight: 800, 
                color: 'var(--color-primary)', 
                letterSpacing: '-0.03em', 
                lineHeight: 1.15,
                margin: 0
              }}
            >
              Why Investors Choose Assure
            </h2>
          </div>

          <div style={{ maxWidth: '440px' }}>
            <p 
              style={{ 
                fontSize: '1.05rem', 
                color: 'var(--color-text-secondary)', 
                lineHeight: 1.6, 
                margin: 0 
              }}
            >
              We combine institutional research with personal dedication to guide Indian families toward enduring financial freedom.
            </p>
          </div>
        </div>

        {/* 4 Large Editorial Blocks */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2.5rem',
            position: 'relative'
          }}
        >
          {REASONS.map((reason, idx) => {
            const Icon = reason.icon;

            return (
              <div 
                key={reason.num}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--color-border)',
                  position: 'relative',
                  transition: 'transform 0.25s ease'
                }}
              >
                <div>
                  {/* Top Bar: Number & Tag */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
                    <span 
                      style={{ 
                        fontSize: 'clamp(2.8rem, 4.5vw, 3.8rem)', 
                        fontWeight: 800, 
                        color: 'var(--color-primary)', 
                        letterSpacing: '-0.04em',
                        lineHeight: 1,
                        opacity: 0.85
                      }}
                    >
                      {reason.num}
                    </span>

                    <span 
                      style={{ 
                        fontSize: '0.72rem', 
                        fontWeight: 700, 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.04em',
                        color: 'var(--color-accent)',
                        background: 'rgba(22, 185, 129, 0.08)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px'
                      }}
                    >
                      {reason.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 
                    style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: 800, 
                      color: 'var(--color-primary)', 
                      letterSpacing: '-0.02em', 
                      marginBottom: '0.5rem' 
                    }}
                  >
                    {reason.title}
                  </h3>

                  <div 
                    style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: 600, 
                      color: 'var(--color-accent)', 
                      marginBottom: '1rem' 
                    }}
                  >
                    {reason.subtitle}
                  </div>

                  {/* Body description */}
                  <p 
                    style={{ 
                      fontSize: '0.92rem', 
                      color: 'var(--color-text-secondary)', 
                      lineHeight: 1.65, 
                      margin: 0,
                      marginBottom: '1.75rem' 
                    }}
                  >
                    {reason.description}
                  </p>
                </div>

                {/* Minimal Icon Footer Indicator */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    color: 'var(--color-primary)',
                    fontSize: '0.85rem',
                    fontWeight: 700
                  }}
                >
                  <Icon size={16} color="var(--color-accent)" />
                  <span>Institutional Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Editorial Callout Strip */}
        <div 
          style={{ 
            marginTop: '4.5rem', 
            padding: '2rem 2.5rem', 
            borderRadius: '20px', 
            background: 'var(--color-bg)', 
            border: '1px solid var(--color-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-primary)', margin: '0 0 0.35rem 0' }}>
              Direct Custody Peace of Mind
            </h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              Assure Securities never holds client funds. All investments settle directly with SEBI-regulated Asset Management Companies.
            </p>
          </div>

          <button 
            onClick={() => onOpenModal && onOpenModal('consultation')}
            className="btn-primary-navy"
            style={{ fontSize: '0.9rem', padding: '0.75rem 1.6rem' }}
          >
            Start Your Journey With Assure →
          </button>
        </div>

      </div>
    </section>
  );
}
