import React, { useState } from 'react';
import { 
  Calculator, TrendingUp, DollarSign, Calendar, Home, Target, Clock, Scale, ArrowRight, Sparkles, CheckCircle2 
} from 'lucide-react';

const FINANCIAL_TOOLS = [
  {
    id: "sip-calculator",
    title: "SIP Calculator",
    category: "Wealth Creation",
    color: "#16B981", // Emerald accent
    bgLight: "rgba(22, 185, 129, 0.08)",
    description: "Calculate expected future corpus from disciplined monthly mutual fund investments.",
    icon: Calculator,
    targetTab: "sip"
  },
  {
    id: "step-up-sip",
    title: "Step-Up SIP",
    category: "Accelerated Growth",
    color: "#0284c7",
    bgLight: "rgba(2, 132, 199, 0.08)",
    description: "Model the compounding power of increasing your SIP amount annually with salary increments.",
    icon: TrendingUp,
    targetTab: "step-up"
  },
  {
    id: "lumpsum-calculator",
    title: "Lumpsum Calculator",
    category: "One-Time Capital",
    color: "#6366f1",
    bgLight: "rgba(99, 102, 241, 0.08)",
    description: "Determine compound returns on one-time capital deployed across different market timeframes.",
    icon: DollarSign,
    targetTab: "lumpsum"
  },
  {
    id: "retirement-calculator",
    title: "Retirement Calculator",
    category: "Long-Term Freedom",
    color: "#f59e0b",
    bgLight: "rgba(245, 158, 11, 0.08)",
    description: "Estimate your target post-retirement nest egg accounting for future inflation and life expectancy.",
    icon: Calendar,
    targetTab: "retirement"
  },
  {
    id: "emi-calculator",
    title: "EMI Calculator",
    category: "Debt Management",
    color: "#8b5cf6",
    bgLight: "rgba(139, 92, 246, 0.08)",
    description: "Plan home or personal loan repayments with detailed principal vs interest amortization splits.",
    icon: Home,
    targetTab: "emi"
  },
  {
    id: "goal-planner",
    title: "Goal Planner",
    category: "Milestone Planning",
    color: "#ec4899",
    bgLight: "rgba(236, 72, 153, 0.08)",
    description: "Reverse engineer the required monthly SIP needed to fund child education or home down payments.",
    icon: Target,
    targetTab: "education"
  },
  {
    id: "sip-delay",
    title: "SIP Delay Cost",
    category: "Opportunity Cost",
    color: "#ef4444",
    bgLight: "rgba(239, 68, 68, 0.08)",
    description: "Visualize the quantifiable financial cost of delaying your SIP investments by just 1 to 5 years.",
    icon: Clock,
    targetTab: "sip-delay"
  },
  {
    id: "fund-comparison",
    title: "Fund Comparison",
    category: "Scheme Research",
    color: "#14b8a6",
    bgLight: "rgba(20, 184, 166, 0.08)",
    description: "Analyze risk-adjusted alpha, expense ratios, portfolio overlap, and rolling historical metrics.",
    icon: Scale,
    targetTab: "comparison"
  }
];

export function QuickToolsBar({ onOpenModal, onSelectTool }) {
  const [hoveredTool, setHoveredTool] = useState(null);

  const handleToolClick = (tool) => {
    // Smooth scroll down to CalculatorsHub if it's on page, or trigger modal
    const calcSection = document.getElementById('calculators');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (onSelectTool) {
      onSelectTool(tool.targetTab);
    }
  };

  return (
    <section 
      id="tools-section"
      style={{ 
        padding: '6rem 0', 
        background: '#ffffff',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '720px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: 'rgba(22, 185, 129, 0.1)', 
              color: 'var(--color-accent)', 
              padding: '0.4rem 1rem', 
              borderRadius: '100px', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              letterSpacing: '0.06em', 
              textTransform: 'uppercase', 
              marginBottom: '1rem' 
            }}
          >
            <Sparkles size={14} />
            <span>Smart Financial Decision Tools</span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', 
              fontWeight: 800, 
              color: 'var(--color-primary)', 
              letterSpacing: '-0.03em', 
              lineHeight: 1.2, 
              marginBottom: '1rem' 
            }}
          >
            Plan Better With Smart Financial Tools
          </h2>

          <p 
            style={{ 
              fontSize: '1.05rem', 
              color: 'var(--color-text-secondary)', 
              lineHeight: 1.6, 
              margin: 0 
            }}
          >
            Institutional-grade calculators and diagnostics designed to bring clarity, mathematical rigor, and confidence to your financial planning.
          </p>
        </div>

        {/* 8 Financial Tool Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '1.5rem' 
          }}
        >
          {FINANCIAL_TOOLS.map((tool) => {
            const Icon = tool.icon;
            const isHovered = hoveredTool === tool.id;

            return (
              <div
                key={tool.id}
                onClick={() => handleToolClick(tool)}
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
                className="fintech-card"
                style={{
                  padding: '1.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  borderColor: isHovered ? tool.color : 'var(--color-border)',
                  background: isHovered ? '#ffffff' : '#fafbfd',
                  boxShadow: isHovered ? '0 12px 28px -6px rgba(7, 26, 47, 0.1)' : 'var(--shadow-card)',
                  transform: isHovered ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.28s ease'
                }}
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div 
                      style={{ 
                        width: '46px', 
                        height: '46px', 
                        borderRadius: '12px', 
                        background: tool.bgLight, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: tool.color,
                        transition: 'transform 0.25s ease',
                        transform: isHovered ? 'scale(1.08)' : 'none'
                      }}
                    >
                      <Icon size={22} strokeWidth={2.2} />
                    </div>

                    <span 
                      style={{ 
                        fontSize: '0.72rem', 
                        fontWeight: 700, 
                        letterSpacing: '0.04em', 
                        textTransform: 'uppercase',
                        color: tool.color,
                        background: tool.bgLight,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px'
                      }}
                    >
                      {tool.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 700, 
                      color: 'var(--color-primary)', 
                      marginBottom: '0.6rem',
                      letterSpacing: '-0.01em' 
                    }}
                  >
                    {tool.title}
                  </h3>

                  {/* One-line explanation */}
                  <p 
                    style={{ 
                      fontSize: '0.88rem', 
                      color: 'var(--color-text-secondary)', 
                      lineHeight: 1.55, 
                      margin: 0,
                      marginBottom: '1.5rem' 
                    }}
                  >
                    {tool.description}
                  </p>
                </div>

                {/* Arrow & Action */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(229, 234, 240, 0.8)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: isHovered ? tool.color : 'var(--color-primary)',
                    transition: 'color 0.2s ease'
                  }}
                >
                  <span>Launch Calculator</span>
                  <div 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isHovered ? tool.bgLight : 'transparent',
                      transform: isHovered ? 'translateX(4px)' : 'none',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <ArrowRight size={16} strokeWidth={2.4} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div 
          style={{ 
            marginTop: '3.5rem', 
            padding: '1.25rem 1.75rem', 
            borderRadius: '16px', 
            background: 'var(--color-bg)', 
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <CheckCircle2 size={18} color="var(--color-accent)" />
            <span style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: 500 }}>
              Need a personalized plan aligned with your tax bracket and time horizon?
            </span>
          </div>

          <button
            onClick={() => onOpenModal && onOpenModal('consultation')}
            className="btn-outline-navy"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
          >
            Speak with an Advisor →
          </button>
        </div>

      </div>
    </section>
  );
}
