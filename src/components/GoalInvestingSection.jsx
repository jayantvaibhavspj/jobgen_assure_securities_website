import React, { useState } from 'react';
import { 
  Palmtree, GraduationCap, Home, TrendingUp, ShieldAlert, 
  Plane, ArrowRight, CheckCircle2, Calculator, Sparkles
} from 'lucide-react';

const GOALS = [
  {
    id: "retirement",
    title: "Retirement",
    subtitle: "Golden Years Financial Independence",
    icon: Palmtree,
    color: "#059669",
    bgColor: "#ecfdf5",
    target: "₹1,00,00,000",
    time: "20 Years",
    monthly: "₹10,100 / mo",
    rate: "12% Assumed CAGR",
    description: "Build an inflation-hedged corpus so your lifestyle continues uninterrupted when monthly salary ceases."
  },
  {
    id: "child-education",
    title: "Child's Education",
    subtitle: "Higher Studies & Global University",
    icon: GraduationCap,
    color: "#2563eb",
    bgColor: "#eff6ff",
    target: "₹35,00,000",
    time: "14 Years",
    monthly: "₹9,200 / mo",
    rate: "12% Assumed CAGR",
    description: "Guard against 10%+ education inflation and fund premier college degrees without crippling student loans."
  },
  {
    id: "dream-home",
    title: "Dream Home",
    subtitle: "Property Downpayment & Registry",
    icon: Home,
    color: "#d97706",
    bgColor: "#fef3c7",
    target: "₹50,00,000",
    time: "7 Years",
    monthly: "₹38,000 / mo",
    rate: "12% Assumed CAGR",
    description: "Accumulate a substantial down payment to reduce home loan EMIs and interest payouts over decades."
  },
  {
    id: "wealth-creation",
    title: "Wealth Creation",
    subtitle: "Multi-Crore Compounding Alpha",
    icon: TrendingUp,
    color: "#7c3aed",
    bgColor: "#f5f3ff",
    target: "₹2,50,00,000",
    time: "25 Years",
    monthly: "₹13,500 / mo",
    rate: "13% Assumed CAGR",
    description: "Unleash multi-decade compounding across diversified equity portfolios to build generational family legacy."
  },
  {
    id: "travel",
    title: "Travel & Leisure",
    subtitle: "World Exploration Guilt-Free",
    icon: Plane,
    color: "#0284c7",
    bgColor: "#e0f2fe",
    target: "₹5,00,000",
    time: "2 Years",
    monthly: "₹19,000 / mo",
    rate: "8% Liquid / Debt Yield",
    description: "Travel the world comfortably without touching emergency reserves or accumulating high-interest credit card debt."
  },
  {
    id: "emergency-fund",
    title: "Emergency Fund",
    subtitle: "6-12 Months Family Safety Buffer",
    icon: ShieldAlert,
    color: "#dc2626",
    bgColor: "#fee2e2",
    target: "₹6,00,000",
    time: "1 Year",
    monthly: "₹48,000 / mo",
    rate: "7% Liquid Fund Yield",
    description: "Instant liquidity buffer parked in safe overnight and liquid funds for medical emergencies or career transitions."
  }
];

export function GoalInvestingSection({ onOpenModal, onNavigate }) {
  const [selectedGoal, setSelectedGoal] = useState(GOALS[0]);

  return (
    <section 
      id="goals" 
      style={{ 
        background: '#ffffff', 
        padding: '6.5rem 0',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.75rem auto' }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: 'rgba(22, 185, 129, 0.1)', 
              color: 'var(--color-accent)', 
              border: '1px solid rgba(22, 185, 129, 0.25)', 
              padding: '0.35rem 0.95rem', 
              borderRadius: '100px', 
              fontSize: '0.78rem', 
              fontWeight: 800, 
              letterSpacing: '0.04em', 
              textTransform: 'uppercase', 
              marginBottom: '1rem' 
            }}
          >
            <Sparkles size={13} color="var(--color-accent)" />
            <span>Goal-Based Wealth Planning</span>
          </div>

          <h2 
            style={{ 
              fontSize: '2.6rem', 
              fontWeight: 800, 
              color: 'var(--color-primary)', 
              letterSpacing: '-0.02em', 
              marginBottom: '1rem',
              lineHeight: 1.2
            }}
          >
            Invest For <span style={{ color: 'var(--color-accent)' }}>What Matters Most</span>
          </h2>

          <p style={{ fontSize: '1.08rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Every rupee you invest should have a clear purpose. Explore goal-based investment roadmaps tailored to your timeline.
          </p>
        </div>

        {/* 6 Large Goal Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.25rem',
            marginBottom: '3rem'
          }}
        >
          {GOALS.map((goal) => {
            const Icon = goal.icon;
            const isSelected = selectedGoal?.id === goal.id;

            return (
              <div
                key={goal.id}
                onClick={() => setSelectedGoal(goal)}
                className="fintech-card"
                style={{
                  cursor: 'pointer',
                  padding: '1.75rem',
                  borderColor: isSelected ? 'var(--color-accent)' : 'var(--color-border)',
                  background: isSelected ? '#ffffff' : '#ffffff',
                  boxShadow: isSelected ? '0 12px 30px rgba(22, 185, 129, 0.15)' : 'var(--shadow-subtle)',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div 
                    style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '14px', 
                      background: goal.bgColor, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}
                  >
                    <Icon size={24} color={goal.color} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '2px' }}>
                      {goal.title}
                    </h3>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>
                      {goal.subtitle}
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {goal.description}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--color-border)', fontSize: '0.82rem' }}>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Target Corpus:</span>
                  <strong style={{ color: 'var(--color-primary)', fontVariantNumeric: 'tabular-nums' }}>{goal.target}</strong>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Goal Planning Panel */}
        {selectedGoal && (
          <div 
            style={{ 
              background: 'var(--color-primary)', 
              color: '#ffffff',
              borderRadius: '24px', 
              padding: '2.5rem 3rem',
              boxShadow: '0 25px 60px -15px rgba(7, 26, 47, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr', 
                gap: '2.5rem', 
                alignItems: 'center' 
              }}
              className="goal-panel-grid"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Simulated Roadmap
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>• Illustrative Example Plan</span>
                </div>

                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                  {selectedGoal.title} Milestone Blueprint
                </h3>

                <p style={{ fontSize: '0.98rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '520px', margin: 0 }}>
                  {selectedGoal.description} Calculated based on disciplined monthly SIP compounding.
                </p>
              </div>

              {/* Stat Boxes & CTA */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }} className="goal-panel-stats">
                <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '1.25rem 1.5rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Target Corpus</div>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>{selectedGoal.target}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-accent)', marginTop: '0.2rem' }}>Horizon: {selectedGoal.time}</div>
                </div>

                <div style={{ background: 'rgba(22, 185, 129, 0.15)', padding: '1.25rem 1.5rem', borderRadius: '16px', border: '1px solid rgba(22, 185, 129, 0.3)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#a7f3d0', textTransform: 'uppercase' }}>Monthly SIP Needed</div>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--color-accent)', marginTop: '0.2rem' }}>{selectedGoal.monthly}</div>
                  <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '0.2rem' }}>Assumed: {selectedGoal.rate}</div>
                </div>

                <button 
                  onClick={() => onNavigate('calculators')}
                  className="btn-primary-emerald"
                  style={{ minHeight: '52px', padding: '0 1.8rem', fontSize: '0.95rem' }}
                >
                  <span>Calculate My Goal</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>

            <div style={{ fontSize: '0.73rem', color: '#64748b', marginTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem' }}>
              *Illustrative calculation for educational planning. Does not constitute guaranteed financial returns. Mutual fund investments are subject to market risks.
            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (min-width: 992px) {
          .goal-panel-grid {
            grid-template-columns: 1fr 1.35fr !important;
          }
        }
      `}</style>
    </section>
  );
}
