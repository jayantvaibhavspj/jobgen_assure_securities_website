import React from 'react';
import { TrendingUp, TrendingDown, Clock, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';

const MARKET_INDICES = [
  {
    name: "NIFTY 50",
    exchange: "NSE Benchmark",
    value: "24,850.30",
    change: "+128.40",
    percent: "+0.52%",
    isPositive: true,
    description: "50 diversified Indian mega-cap companies representing core economic output.",
    highLow: "52W High: 26,277 • Low: 18,837"
  },
  {
    name: "SENSEX",
    exchange: "BSE 30",
    value: "81,720.15",
    change: "+380.20",
    percent: "+0.47%",
    isPositive: true,
    description: "Oldest Indian bellwether index tracking 30 financially sound blue-chip firms.",
    highLow: "52W High: 85,978 • Low: 63,583"
  },
  {
    name: "GOLD (MCX)",
    exchange: "Precious Metals",
    value: "₹76,450",
    change: "+320.00",
    percent: "+0.42%",
    isPositive: true,
    description: "Essential inflation hedge and safe-haven asset for diversified wealth portfolios.",
    highLow: "52W High: ₹78,900 • Low: ₹59,800"
  },
  {
    name: "USD / INR",
    exchange: "Forex Benchmark",
    value: "₹83.95",
    change: "-0.04",
    percent: "-0.05%",
    isPositive: false,
    description: "Indian Rupee valuation against the US Dollar reflecting macro trade dynamics.",
    highLow: "52W Range: 82.80 - 84.15"
  }
];

export function MarketSection() {
  return (
    <section 
      id="market-overview"
      style={{ 
        padding: 'var(--section-pad-desktop) 0', 
        background: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)' 
      }}
      className="section-pad"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center">
          <div className="eyebrow-pill navy">
            <Clock size={13} color="var(--color-accent)" />
            <span>Indicative Snapshot • Educational Overview</span>
          </div>

          <h2>
            Markets At A <span style={{ color: 'var(--color-accent)' }}>Glance</span>
          </h2>

          <p>
            Monitor key domestic indices and asset classes to maintain an informed perspective on broad Indian capital market developments.
          </p>
        </div>

        {/* 4 Index Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '1.5rem' 
          }}
        >
          {MARKET_INDICES.map((item, idx) => (
            <div
              key={idx}
              className="fintech-card"
              style={{
                padding: '1.75rem',
                background: '#ffffff',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Header: Name & Exchange */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', margin: 0 }}>
                      {item.name}
                    </h3>
                    <span style={{ fontSize: '0.73rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                      {item.exchange}
                    </span>
                  </div>

                  <div 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '0.25rem',
                      padding: '0.2rem 0.5rem', 
                      borderRadius: '6px', 
                      fontSize: '0.74rem', 
                      fontWeight: 700,
                      background: item.isPositive ? 'rgba(22, 185, 129, 0.1)' : 'rgba(220, 38, 38, 0.1)',
                      color: item.isPositive ? '#16B981' : '#dc2626'
                    }}
                  >
                    {item.isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    <span>{item.percent}</span>
                  </div>
                </div>

                {/* Primary Metric */}
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                  {item.value}
                </div>

                <div style={{ fontSize: '0.8rem', color: item.isPositive ? '#16B981' : '#dc2626', fontWeight: 600, marginBottom: '1rem' }}>
                  {item.change} ({item.percent}) Today
                </div>

                {/* Mini SVG Trend Line (Thin, Calm) */}
                <div style={{ height: '32px', width: '100%', marginBottom: '1rem' }}>
                  <svg width="100%" height="100%" viewBox="0 0 200 32" fill="none">
                    <path 
                      d={item.isPositive ? "M0 26 Q 50 20, 100 15 T 160 10 T 200 4" : "M0 6 Q 50 12, 100 18 T 160 22 T 200 28"} 
                      stroke={item.isPositive ? "#16B981" : "#dc2626"} 
                      strokeWidth="1.75" 
                      fill="none" 
                    />
                  </svg>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0, marginBottom: '0.85rem' }}>
                  {item.description}
                </p>
              </div>

              {/* Range Context Footer */}
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.65rem', fontSize: '0.72rem', color: 'var(--color-muted)' }}>
                {item.highLow}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Footer */}
        <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-muted)' }}>
          *Note: Market levels displayed above represent indicative reference snapshots for investor education. We advocate systematic goal-based mutual fund investing rather than short-term market timing.
        </div>

      </div>
    </section>
  );
}
