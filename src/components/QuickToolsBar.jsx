import React, { useState } from 'react';
import { 
  Calculator, TrendingUp, DollarSign, Calendar, Home, Target, Clock, Scale, ArrowRight, Sparkles, CheckCircle2 
} from 'lucide-react';

const FINANCIAL_TOOLS = [
  {
    id: "sip-calculator",
    title: "SIP Calculator",
    category: "Wealth Creation",
    color: "#16B981",
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
    targetTab: "sip"
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
    color: "#d97706",
    bgLight: "rgba(217, 119, 6, 0.08)",
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
    targetTab: "retirement"
  },
  {
    id: "goal-planner",
    title: "Goal Planner",
    category: "Milestone Planning",
    color: "#059669",
    bgLight: "rgba(5, 150, 105, 0.08)",
    description: "Reverse engineer the required monthly SIP needed to fund child education or home down payments.",
    icon: Target,
    targetTab: "child"
  },
  {
    id: "sip-delay",
    title: "SIP Delay Cost",
    category: "Opportunity Cost",
    color: "#dc2626",
    bgLight: "rgba(220, 38, 38, 0.08)",
    description: "Visualize the quantifiable financial cost of delaying your SIP investments by just 1 to 5 years.",
    icon: Clock,
    targetTab: "sip"
  },
  {
    id: "fund-comparison",
    title: "Fund Comparison",
    category: "Scheme Research",
    color: "#0D2945",
    bgLight: "rgba(13, 41, 69, 0.08)",
    description: "Analyze risk-adjusted alpha, expense ratios, portfolio overlap, and rolling historical metrics.",
    icon: Scale,
    targetTab: "sip"
  }
];

export function QuickToolsBar({ onOpenModal, onSelectTool }) {
  const [hoveredTool, setHoveredTool] = useState(null);

  const handleToolClick = (tool) => {
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
        padding: 'var(--section-pad-desktop) 0', 
        background: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)'
      }}
      className="section-pad"
    >
      <div className="container">
        
        {/* Section Header (Section 11) */}
        <div className="section-header-center">
          <div className="eyebrow-pill emerald">
            <Sparkles size={13} />
            <span>Smart Financial Decision Tools</span>
          </div>

          <h2>
            Plan Better With <span style={{ color: 'var(--color-accent)' }}>Smart Financial Tools</span>
          </h2>

          <p>
            Institutional-grade calculators and diagnostics designed to bring mathematical rigor, clarity, and confidence to your financial planning.
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
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  borderColor: isHovered ? tool.color : 'var(--color-border)',
                  background: '#ffffff',
                  boxShadow: isHovered ? '0 12px 28px -6px rgba(7, 26, 47, 0.08)' : 'var(--shadow-card)',
                  transform: isHovered ? 'translateY(-4px)' : 'none',
                  transition: 'all 280ms ease'
                }}
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div 
                      style={{ 
                        width: '44px', 
                        height: '44px', 
                        borderRadius: '12px', 
                        background: tool.bgLight, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: tool.color,
                        transition: 'transform 0.25s ease',
                        transform: isHovered ? 'scale(1.06)' : 'none'
                      }}
                    >
                      <Icon size={20} strokeWidth={1.8} />
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
                      marginBottom: '0.5rem',
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

                {/* Arrow & Action (Section 11) */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid var(--color-border)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: isHovered ? tool.color : 'var(--color-primary)',
                    transition: 'color 0.2s ease'
                  }}
                >
                  <span>Launch Calculator</span>
                  <div 
                    style={{ 
                      transform: isHovered ? 'translateX(5px)' : 'none',
                      transition: 'transform 250ms ease'
                    }}
                  >
                    <ArrowRight size={15} strokeWidth={2} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
