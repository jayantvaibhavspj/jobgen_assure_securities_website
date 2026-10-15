import React, { useState } from 'react';
import { 
  TrendingUp, PieChart, ArrowUpRight, Activity, Calendar, 
  CheckCircle2, Clock, ShieldCheck, Sparkles, Filter 
} from 'lucide-react';

const RECENT_TRANSACTIONS = [
  { id: 1, title: "SIP Auto-Debit Executed", fund: "HDFC Top 100 Fund (G)", date: "05 Oct 2026", amount: "₹10,000", status: "Success", type: "SIP" },
  { id: 2, title: "Quarterly IDCW Reinvested", fund: "ICICI Pru Balanced Advantage", date: "28 Sep 2026", amount: "₹4,280", status: "Reinvested", type: "IDCW" },
  { id: 3, title: "Systematic Transfer Plan (STP)", fund: "Liquid Fund → Flexi Cap", date: "20 Sep 2026", amount: "₹15,000", status: "Completed", type: "STP" }
];

export function PortfolioVisualization({ onOpenModal }) {
  const [activeTimeframe, setActiveTimeframe] = useState('3Y');

  return (
    <section 
      id="portfolio-dashboard"
      style={{ 
        padding: 'var(--section-pad-desktop) 0', 
        background: '#ffffff',
        borderBottom: '1px solid var(--color-border)' 
      }}
      className="section-pad"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center reveal-on-scroll">
          <div className="eyebrow-pill emerald">
            <Sparkles size={13} />
            <span>Consolidated Net Worth Intelligence</span>
          </div>

          <h2>
            One Clear View Of Your <span style={{ color: 'var(--color-accent)' }}>Financial Journey</span>
          </h2>

          <p>
            Track multi-scheme mutual funds, fixed income deposits, and family portfolios in one intuitive dashboard with automated valuation updates and capital gains diagnostics.
          </p>
        </div>

        {/* Dashboard Frame (Section 14 & 15: Clean, Elegant, Soft Grid) */}
        <div 
          className="fintech-card reveal-on-scroll"
          style={{ 
            background: '#ffffff', 
            borderRadius: '24px', 
            border: '1px solid var(--color-border)', 
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          {/* Top Stat Bar */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: '1.5rem',
              paddingBottom: '1.75rem',
              borderBottom: '1px solid var(--color-border)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.04em' }}>
                  Total Portfolio Valuation
                </span>
                <span style={{ background: 'rgba(22, 185, 129, 0.1)', color: 'var(--color-accent)', padding: '0.15rem 0.55rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>
                  DEMO PREVIEW
                </span>
              </div>
              <div 
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '-0.02em', margin: '0.2rem 0' }}
                data-counter-target="28,45,000"
                data-counter-prefix="₹"
              >
                ₹28,45,000
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>+18.4% CAGR</span>
                <span style={{ color: 'var(--color-text-secondary)' }}>• Total Wealth Gain: +₹6,85,000</span>
              </div>
            </div>

            {/* Quick Metrics Badges */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <div style={{ background: 'var(--color-bg)', padding: '0.75rem 1.15rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Active SIPs</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)' }}>6 Schemes</div>
              </div>
              <div style={{ background: 'var(--color-bg)', padding: '0.75rem 1.15rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Monthly Deployment</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-accent)' }}>₹35,000 / mo</div>
              </div>
              <div style={{ background: 'var(--color-bg)', padding: '0.75rem 1.15rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Direct AMCs</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)' }}>5 Fund Houses</div>
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '2.5rem',
              paddingTop: '1.75rem'
            }}
          >
            {/* Left 60%: Elegant Financial Growth Chart (Section 14) */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>
                      Investment Growth Trajectory
                    </h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>
                      Principal Invested vs Realized Portfolio Value
                    </span>
                  </div>

                  {/* Timeframe Selector */}
                  <div style={{ display: 'flex', gap: '0.25rem', background: 'var(--color-bg)', padding: '3px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                    {['1Y', '3Y', '5Y', 'All'].map((tf) => (
                      <button
                        key={tf}
                        onClick={() => setActiveTimeframe(tf)}
                        style={{
                          border: 'none',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          background: activeTimeframe === tf ? 'var(--color-primary)' : 'transparent',
                          color: activeTimeframe === tf ? '#ffffff' : 'var(--color-text-secondary)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SVG Area Chart with Soft Grid & Thin Line */}
                <div style={{ position: 'relative', width: '100%', height: '210px', background: '#fafbfc', borderRadius: '16px', padding: '14px', border: '1px solid var(--color-border)', overflow: 'hidden' }}>
                  <svg width="100%" height="100%" viewBox="0 0 500 170" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradientPort" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#16B981" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#16B981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Soft grid lines */}
                    <line x1="0" y1="40" x2="500" y2="40" stroke="#E5EAF0" strokeDasharray="3 3" />
                    <line x1="0" y1="85" x2="500" y2="85" stroke="#E5EAF0" strokeDasharray="3 3" />
                    <line x1="0" y1="130" x2="500" y2="130" stroke="#E5EAF0" strokeDasharray="3 3" />

                    {/* Invested Capital Line */}
                    <path 
                      d="M 0 150 L 100 135 L 200 120 L 300 105 L 400 90 L 500 78" 
                      fill="none" 
                      stroke="#94a3b8" 
                      strokeWidth="1.5" 
                      strokeDasharray="4 4" 
                    />

                    {/* Portfolio Growth Area Fill */}
                    <path 
                      d="M 0 150 Q 120 140 200 100 T 360 48 T 500 18 L 500 170 L 0 170 Z" 
                      fill="url(#chartGradientPort)" 
                    />

                    {/* Portfolio Growth Curve (Thin, Elegant Line - Phase 5 Progressive Draw) */}
                    <path 
                      d="M 0 150 Q 120 140 200 100 T 360 48 T 500 18" 
                      fill="none" 
                      stroke="#16B981" 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                      className="svg-chart-path-portfolio"
                    />

                    {/* Data Point Dots & Pulsing Terminal Node */}
                    <circle cx="200" cy="100" r="4" fill="#16B981" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="360" cy="48" r="4" fill="#16B981" stroke="#ffffff" strokeWidth="2" />
                    
                    {/* Animated Pulsing Halo on Current Net Worth Node */}
                    <circle 
                      cx="500" 
                      cy="18" 
                      r="9" 
                      fill="none" 
                      stroke="rgba(22, 185, 129, 0.4)" 
                      strokeWidth="2" 
                      className="chart-terminal-dot" 
                    />
                    <circle cx="500" cy="18" r="5" fill="#16B981" stroke="#ffffff" strokeWidth="2" />
                  </svg>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '8px' }}>
                  <span>Oct 2023 (SIP Start)</span>
                  <span>Oct 2024</span>
                  <span>Oct 2025</span>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>Present (₹28.45 L)</span>
                </div>
              </div>

              {/* Recent Activity Mini Ledger */}
              <div style={{ marginTop: '1.75rem' }}>
                <h5 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.65rem' }}>
                  Recent Portfolio Activity
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {RECENT_TRANSACTIONS.map((tx) => (
                    <div 
                      key={tx.id}
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        padding: '0.65rem 0.85rem', 
                        borderRadius: '8px', 
                        background: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        fontSize: '0.82rem'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{tx.title}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>{tx.fund} • {tx.date}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: 700, color: 'var(--color-accent)' }}>{tx.amount}</div>
                        <span style={{ fontSize: '0.68rem', color: '#16B981', fontWeight: 600 }}>{tx.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 40%: Asset Allocation & Action Card */}
            <div>
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0 0 0.35rem 0' }}>
                  Asset Allocation Blueprint
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', margin: '0 0 1.25rem 0' }}>
                  Diversified across equity market capitalizations and debt instruments to limit drawdowns.
                </p>

                {/* Allocation breakdown bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {[
                    { label: "Equity Mutual Funds", pct: 55, amount: "₹15,64,750", color: "#16B981" },
                    { label: "Corporate FDs & Debt", pct: 25, amount: "₹7,11,250", color: "#0D2945" },
                    { label: "Sovereign Gold Bonds", pct: 15, amount: "₹4,26,750", color: "#d97706" },
                    { label: "Liquid Buffer", pct: 5, amount: "₹1,42,250", color: "#64748b" }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '3px' }}>
                        <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>{item.label}</span>
                        <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{item.pct}% ({item.amount})</span>
                      </div>
                      <div style={{ height: '6px', width: '100%', background: 'var(--color-border)', borderRadius: '100px', overflow: 'hidden' }}>
                        <div style={{ width: `${item.pct}%`, background: item.color, height: '100%', borderRadius: '100px' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advisory Audit Callout Card */}
              <div 
                style={{ 
                  background: 'var(--color-primary)', 
                  color: '#ffffff', 
                  borderRadius: '18px', 
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Dedicated Advisory
                  </span>
                  <h5 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', margin: '0.25rem 0 0.4rem 0' }}>
                    Want Your Portfolio Audited?
                  </h5>
                  <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                    Our AMFI registered professionals conduct a comprehensive health-check of your existing mutual fund folios.
                  </p>
                </div>

                <button 
                  onClick={() => onOpenModal && onOpenModal('consultation')}
                  className="btn-primary-emerald"
                  style={{ width: '100%', marginTop: '1.25rem', justifyContent: 'center', height: '46px', fontSize: '0.88rem' }}
                >
                  Request Portfolio Review →
                </button>
              </div>

            </div>

          </div>

          {/* Bottom Demo Disclaimer Note */}
          <div style={{ marginTop: '1.75rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', fontSize: '0.74rem', color: 'var(--color-text-secondary)', textAlign: 'center' }}>
            *Disclaimer: The metrics, holdings and transactions illustrated above reflect sample demonstration data for console preview only. Actual portfolio returns will fluctuate based on prevailing market conditions and specific scheme performance.
          </div>
        </div>

      </div>
    </section>
  );
}
