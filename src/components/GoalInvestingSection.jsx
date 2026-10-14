import React, { useState } from 'react';
import { 
  Palmtree, GraduationCap, Home, TrendingUp, ShieldAlert, 
  Plane, ArrowRight, CheckCircle2, Calculator, Sparkles 
} from 'lucide-react';

const GOALS = [
  {
    id: "retirement",
    title: "Retirement",
    subtitle: "Build a future you can look forward to.",
    icon: Palmtree,
    color: "#16B981",
    bgColor: "rgba(22, 185, 129, 0.08)",
    target: "₹1,00,00,000",
    time: "20 Years",
    monthly: "₹10,100 / mo",
    rate: "12% Assumed CAGR",
    description: "Build an inflation-hedged corpus so your lifestyle continues uninterrupted with dignity and complete independence."
  },
  {
    id: "child-education",
    title: "Child's Education",
    subtitle: "Plan today for tomorrow's opportunities.",
    icon: GraduationCap,
    color: "#0284c7",
    bgColor: "rgba(2, 132, 199, 0.08)",
    target: "₹35,00,000",
    time: "14 Years",
    monthly: "₹9,200 / mo",
    rate: "12% Assumed CAGR",
    description: "Guard against education inflation and fund premier global university degrees without taking high-interest student loans."
  },
  {
    id: "dream-home",
    title: "Dream Home",
    subtitle: "Turn your financial goal into a plan.",
    icon: Home,
    color: "#d97706",
    bgColor: "rgba(217, 119, 6, 0.08)",
    target: "₹50,00,000",
    time: "7 Years",
    monthly: "₹38,000 / mo",
    rate: "12% Assumed CAGR",
    description: "Accumulate a substantial down payment to reduce home loan interest payouts and EMIs over decades."
  },
  {
    id: "wealth-creation",
    title: "Wealth Creation",
    subtitle: "Build long-term financial strength.",
    icon: TrendingUp,
    color: "#7c3aed",
    bgColor: "rgba(124, 58, 237, 0.08)",
    target: "₹2,50,00,000",
    time: "15 Years",
    monthly: "₹50,000 / mo",
    rate: "13% Assumed CAGR",
    description: "Harness the power of Indian economic expansion through high-quality diversified equity funds."
  },
  {
    id: "travel",
    title: "Travel & Leisure",
    subtitle: "Explore the world with financial freedom.",
    icon: Plane,
    color: "#059669",
    bgColor: "rgba(5, 150, 105, 0.08)",
    target: "₹5,00,00,0",
    time: "2 Years",
    monthly: "₹19,000 / mo",
    rate: "8% Yield",
    description: "Explore dream destinations comfortably without touching core investments or accumulating debt."
  },
  {
    id: "emergency-fund",
    title: "Emergency Fund",
    subtitle: "Protect your family with liquid resilience.",
    icon: ShieldAlert,
    color: "#dc2626",
    bgColor: "rgba(220, 38, 38, 0.08)",
    target: "₹6,00,000",
    time: "1 Year",
    monthly: "₹48,000 / mo",
    rate: "7% Liquid Yield",
    description: "Maintain an instant liquidity safety net parked in safe overnight and liquid mutual funds."
  }
];

export function GoalInvestingSection({ onOpenModal }) {
  const [selectedGoal, setSelectedGoal] = useState(GOALS[0]);

  const handleCalculateGoal = () => {
    const calcSection = document.getElementById('calculators');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="goals" 
      style={{ 
        background: '#ffffff', 
        padding: 'var(--section-pad-desktop) 0',
        borderBottom: '1px solid var(--color-border)'
      }}
      className="section-pad"
    >
      <div className="container">
        
        {/* Section Header (Section 12: "Invest For What Matters Most.") */}
        <div className="section-header-center">
          <div className="eyebrow-pill emerald">
            <Sparkles size={13} />
            <span>Milestone Architecture</span>
          </div>

          <h2>
            Invest For What <span style={{ color: 'var(--color-accent)' }}>Matters Most.</span>
          </h2>

          <p>
            Every rupee you invest should serve a concrete life purpose. We map your portfolio directly to the milestones that shape your family's future.
          </p>
        </div>

        {/* 6 Emotional Milestone Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {GOALS.map((goal) => {
            const Icon = goal.icon;
            const isSelected = selectedGoal.id === goal.id;

            return (
              <div
                key={goal.id}
                onClick={() => setSelectedGoal(goal)}
                className="fintech-card goal-card"
                style={{
                  padding: '2rem',
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                  background: isSelected ? '#fafbfd' : '#ffffff',
                  boxShadow: isSelected ? '0 12px 28px -4px rgba(7, 26, 47, 0.1)' : 'var(--shadow-card)',
                  transform: isSelected ? 'translateY(-2px)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 280ms ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div 
                      style={{ 
                        width: '46px', 
                        height: '46px', 
                        borderRadius: '12px', 
                        background: goal.bgColor, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: goal.color 
                      }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span 
                      style={{ 
                        fontSize: '0.72rem', 
                        fontWeight: 700, 
                        color: 'var(--color-primary)', 
                        background: 'var(--color-bg)', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '6px',
                        border: '1px solid var(--color-border)' 
                      }}
                    >
                      Target: {goal.time}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.4rem' }}>
                    {goal.title}
                  </h3>

                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-accent)', marginBottom: '0.85rem' }}>
                    "{goal.subtitle}"
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0, marginBottom: '1.25rem' }}>
                    {goal.description}
                  </p>
                </div>

                <div 
                  style={{ 
                    borderTop: '1px solid var(--color-border)', 
                    paddingTop: '0.85rem', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: isSelected ? 'var(--color-accent)' : 'var(--color-text-secondary)'
                  }}
                >
                  <span>Approx. {goal.monthly}</span>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Select Plan →</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Goal Planning Panel (Section 10 & 12) */}
        <div 
          className="fintech-card"
          style={{ 
            background: 'var(--color-bg)', 
            borderRadius: '24px', 
            border: '1px solid var(--color-border)', 
            padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
              <Calculator size={14} />
              <span>Goal Blueprint • {selectedGoal.title}</span>
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              "{selectedGoal.subtitle}"
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.6 }}>
              {selectedGoal.description}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', background: '#ffffff', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Target</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '2px' }}>{selectedGoal.target}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Time</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '2px' }}>{selectedGoal.time}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Monthly SIP</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-accent)', marginTop: '2px' }}>{selectedGoal.monthly.split(' ')[0]}</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
            <button 
              onClick={handleCalculateGoal}
              className="btn-primary-emerald"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Calculate My Goal →</span>
            </button>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-muted)', textAlign: 'center', width: '100%' }}>
              *Illustrative calculation based on {selectedGoal.rate}. Not personalized financial advice.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
