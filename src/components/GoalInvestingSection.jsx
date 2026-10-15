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
    image: "/assets/goal-retirement.jpg",
    icon: Palmtree,
    color: "#16B981",
    bgColor: "rgba(22, 185, 129, 0.12)",
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
    image: "/assets/goal-child-education.jpg",
    icon: GraduationCap,
    color: "#0284c7",
    bgColor: "rgba(2, 132, 199, 0.12)",
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
    image: "/assets/goal-dream-home.jpg",
    icon: Home,
    color: "#d97706",
    bgColor: "rgba(217, 119, 6, 0.12)",
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
    image: "/assets/goal-wealth-creation.jpg",
    icon: TrendingUp,
    color: "#7c3aed",
    bgColor: "rgba(124, 58, 237, 0.12)",
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
    image: "/assets/b4-2.jpg",
    icon: Plane,
    color: "#059669",
    bgColor: "rgba(5, 150, 105, 0.12)",
    target: "₹5,00,000",
    time: "2 Years",
    monthly: "₹19,000 / mo",
    rate: "8% Yield",
    description: "Explore dream destinations comfortably without touching core investments or accumulating debt."
  },
  {
    id: "emergency-fund",
    title: "Emergency Fund",
    subtitle: "Protect your family with liquid resilience.",
    image: "/assets/b2-1.jpg",
    icon: ShieldAlert,
    color: "#dc2626",
    bgColor: "rgba(220, 38, 38, 0.12)",
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
        <div className="section-header-center reveal-on-scroll">
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

        {/* Modern Bento Story Layout (Requirement 10: Asymmetric Bento Composition) */}
        <div 
          className="goal-bento-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(12, 1fr)', 
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {GOALS.map((goal, index) => {
            const Icon = goal.icon;
            const isSelected = selectedGoal.id === goal.id;

            // Compute bento grid span per requirement
            let colSpan = 'span 6';
            let tileClass = 'goal-tile-compact';
            let imgHeight = '185px';

            if (goal.id === 'retirement') {
              colSpan = 'span 7';
              tileClass = 'goal-tile-retirement';
              imgHeight = '230px';
            } else if (goal.id === 'child-education') {
              colSpan = 'span 5';
              tileClass = 'goal-tile-child';
              imgHeight = '185px';
            } else if (goal.id === 'dream-home') {
              colSpan = 'span 5';
              tileClass = 'goal-tile-home';
              imgHeight = '185px';
            } else if (goal.id === 'wealth-creation') {
              colSpan = 'span 7';
              tileClass = 'goal-tile-wealth';
              imgHeight = '195px';
            } else if (goal.id === 'emergency-fund' || goal.id === 'vacation') {
              colSpan = 'span 6';
              tileClass = 'goal-tile-compact';
              imgHeight = '160px';
            }

            return (
              <div
                key={goal.id}
                onClick={() => setSelectedGoal(goal)}
                className={`bento-card-light goal-card interactive-glow-card reveal-on-scroll stagger-${(index % 4) + 1} ${tileClass}`}
                style={{
                  gridColumn: colSpan,
                  padding: 0,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--color-accent)' : 'var(--color-border)',
                  background: isSelected ? '#fafbfd' : '#ffffff',
                  boxShadow: isSelected ? '0 20px 40px -6px rgba(22, 185, 129, 0.22)' : '0 4px 20px -2px rgba(7, 26, 47, 0.05)',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Visual Photography Header with Micro-Interaction */}
                <div 
                  style={{ 
                    position: 'relative', 
                    height: imgHeight, 
                    overflow: 'hidden', 
                    background: '#071A2F' 
                  }}
                >
                  <img 
                    src={goal.image} 
                    alt={goal.title} 
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      transform: isSelected ? 'scale(1.06)' : 'scale(1.0)'
                    }}
                    className="goal-card-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Subtle Cinematic Vignette Overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(7, 26, 47, 0.94) 0%, rgba(7, 26, 47, 0.35) 55%, rgba(7, 26, 47, 0.4) 100%)'
                    }} 
                  />

                  {/* Top Glass Badges */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '14px',
                      right: '14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      zIndex: 2
                    }}
                  >
                    <span 
                      className="glass-badge-dark"
                    >
                      Target: {goal.time}
                    </span>
                    <span 
                      style={{
                        background: isSelected ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.92)',
                        color: isSelected ? '#071A2F' : 'var(--color-primary)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                      }}
                    >
                      {goal.rate.split(' ')[0]} CAGR
                    </span>
                  </div>

                  {/* Overlapping Badge + Goal Title at Bottom of Image */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '16px',
                      right: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      zIndex: 2
                    }}
                  >
                    <div 
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: '#ffffff',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: goal.color,
                        flexShrink: 0
                      }}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: goal.id === 'retirement' ? '1.45rem' : '1.25rem', fontWeight: 700, color: '#ffffff', margin: 0, textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
                        {goal.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div style={{ padding: '1.35rem 1.6rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-accent)', marginBottom: '0.65rem' }}>
                      "{goal.subtitle}"
                    </div>

                    <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0, marginBottom: '1.25rem' }}>
                      {goal.description}
                    </p>
                  </div>

                  <div>
                    {/* Soft 3D Metrics Row */}
                    <div 
                      className="soft-3d-surface"
                      style={{
                        padding: '0.75rem 1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.95rem'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Target Corpus</div>
                        <div style={{ fontSize: '1.12rem', fontWeight: 700, color: 'var(--color-primary)' }}>{goal.target}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600 }}>Approx. SIP</div>
                        <div style={{ fontSize: '1.12rem', fontWeight: 700, color: 'var(--color-accent)' }}>{goal.monthly.split(' ')[0]}/mo</div>
                      </div>
                    </div>

                    {/* Bottom Action Indicator */}
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
                      <span>{isSelected ? "● Active Blueprint" : "Click to Explore"}</span>
                      <span style={{ color: 'var(--color-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Select Plan <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 991px) {
            .goal-bento-grid {
              grid-template-columns: 1fr 1fr !important;
            }
            .goal-bento-grid > div {
              grid-column: span 1 !important;
            }
            .goal-bento-grid > .goal-tile-wealth {
              grid-column: span 2 !important;
            }
          }
          @media (max-width: 680px) {
            .goal-bento-grid {
              grid-template-columns: 1fr !important;
            }
            .goal-bento-grid > div {
              grid-column: span 1 !important;
            }
          }
        `}</style>

        {/* Selected Goal Planning Panel (Section 10 & 12) with Preview Thumbnail */}
        <div 
          className="fintech-card"
          style={{ 
            background: 'var(--color-bg)', 
            borderRadius: '24px', 
            border: '1.5px solid var(--color-border)', 
            padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          {/* Left: Summary with Selected Thumbnail */}
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div 
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '16px',
                overflow: 'hidden',
                flexShrink: 0,
                border: '2px solid #ffffff',
                boxShadow: '0 8px 18px rgba(0,0,0,0.1)'
              }}
            >
              <img 
                src={selectedGoal.image} 
                alt={selectedGoal.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                <Calculator size={13} />
                <span>Goal Blueprint • {selectedGoal.title}</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0, marginBottom: '0.35rem' }}>
                "{selectedGoal.subtitle}"
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                {selectedGoal.description}
              </p>
            </div>
          </div>

          {/* Middle: 3 Structured Parameters */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', background: '#ffffff', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
            <div>
              <div style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Target</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '2px' }}>{selectedGoal.target}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Time</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '2px' }}>{selectedGoal.time}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Monthly SIP</div>
              <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-accent)', marginTop: '2px' }}>{selectedGoal.monthly.split(' ')[0]}</div>
            </div>
          </div>

          {/* Right: CTA Button */}
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

