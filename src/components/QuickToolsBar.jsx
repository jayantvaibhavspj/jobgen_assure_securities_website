import React, { useState } from 'react';
import { 
  ArrowUpRight, Download, ExternalLink, Calendar, Search, Sparkles
} from 'lucide-react';
import { SAMPLE_NAV_DATA, COMPANY_INFO } from '../data/websiteData';

const ORIGINAL_TOOLS = [
  { 
    id: "fund-comparison", 
    title: "Fund Comparison", 
    description: "Compare risk, returns, expense ratios & portfolio overlap across schemes", 
    gif: "/assets/data-analysis.gif", 
    badge: "Live Tool" 
  },
  { 
    id: "latest-nav", 
    title: "Latest NAV", 
    description: "Track daily Net Asset Values across Equity, Debt & Hybrid funds", 
    gif: "/assets/analytics.gif", 
    badge: "Daily Update" 
  },
  { 
    id: "sip-performance", 
    title: "SIP Performance", 
    description: "Analyze past rolling SIP returns across market cycles & bull/bear phases", 
    gif: "/assets/report.gif", 
    badge: "Historical" 
  },
  { 
    id: "current-nfo", 
    title: "Current NFOs", 
    description: "Explore ongoing and upcoming New Fund Offers in the market", 
    gif: "/assets/money-bag.gif", 
    badge: "New Offers" 
  },
  { 
    id: "dividend-announced", 
    title: "Dividend Announced", 
    description: "Track latest IDCW dividend payout announcements and record dates", 
    gif: "/assets/receipt.gif", 
    badge: "IDCW Records" 
  },
  { 
    id: "mf-factsheets", 
    title: "MF Factsheets", 
    description: "Download monthly portfolio factsheets from top Asset Management Companies", 
    gif: "/assets/save-money.gif", 
    badge: "AMC PDFs" 
  }
];

export function QuickToolsBar({ onOpenModal, theme = "dark" }) {
  const [activeTool, setActiveTool] = useState(null);
  const isDark = theme === "dark";

  return (
    <section 
      className={isDark ? "section-dark" : "section-light-white"}
      style={{ 
        padding: '4.5rem 0 4rem 0', 
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #f1f5f9',
        background: isDark ? '#0b1120' : '#ffffff' 
      }}
    >
      <div className="container">
        
        {/* Terminal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.75rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: isDark ? 'rgba(56, 189, 248, 0.12)' : '#e0f2fe', color: isDark ? '#38bdf8' : '#0369a1', border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #bae6fd', padding: '0.3rem 0.85rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              <span className="pulse-dot-green"></span>
              <span>AMFI Real-Time Feed Active • ARN-182137</span>
            </div>
            <h2 className="section-heading" style={{ fontSize: '2.2rem', marginBottom: '0.5rem', color: isDark ? '#ffffff' : '#0f172a' }}>
              Institutional Market & Portfolio Intelligence Suite
            </h2>
          </div>
          <div style={{ maxWidth: '480px' }}>
            <p style={{ color: isDark ? '#94a3b8' : '#64748b', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
              Direct access to verified AMFI mutual fund Net Asset Values, multi-factor scheme comparisons, rolling return diagnostics, and audited factsheets.
            </p>
          </div>
        </div>

        {/* 6 Quick Intelligence Terminal Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1.25rem' }}>
          {ORIGINAL_TOOLS.map((tool) => {
            const isSelected = activeTool === tool.id;
            return (
              <div
                key={tool.id}
                onClick={() => setActiveTool(isSelected ? null : tool.id)}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  cursor: 'pointer',
                  background: isDark 
                    ? (isSelected ? 'rgba(14, 165, 233, 0.18)' : '#0f172a') 
                    : (isSelected ? '#eff6ff' : '#ffffff'),
                  borderColor: isDark 
                    ? (isSelected ? '#38bdf8' : 'rgba(255,255,255,0.08)') 
                    : (isSelected ? '#2563eb' : '#e2e8f0'),
                  boxShadow: isSelected 
                    ? '0 12px 28px -5px rgba(56, 189, 248, 0.3)' 
                    : (isDark ? '0 10px 25px rgba(0,0,0,0.4)' : '0 4px 15px rgba(0,0,0,0.04)'),
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '18px',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top subtle highlight bar if active */}
                {isSelected && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #38bdf8, #10b981)' }} />
                )}

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.1rem' }}>
                    <div style={{ 
                      background: isDark ? '#1e293b' : '#f8fafc', 
                      padding: '0.6rem', 
                      borderRadius: '14px', 
                      border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)'
                    }}>
                      <img 
                        src={tool.gif} 
                        alt={tool.title} 
                        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <span style={{ 
                      fontSize: '0.68rem', 
                      fontWeight: 800, 
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.55rem', 
                      borderRadius: '6px', 
                      background: isDark ? 'rgba(56, 189, 248, 0.15)' : '#e0f2fe', 
                      color: isDark ? '#38bdf8' : '#0284c7',
                      border: isDark ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid #bae6fd'
                    }}>
                      {tool.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.12rem', fontWeight: 700, color: isDark ? '#ffffff' : '#0f172a', marginBottom: '0.45rem', letterSpacing: '-0.01em' }}>
                    {tool.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: isDark ? '#94a3b8' : '#64748b', lineHeight: 1.5 }}>
                    {tool.description}
                  </p>
                </div>

                <div style={{ 
                  marginTop: '1.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #f1f5f9',
                  fontSize: '0.82rem', 
                  fontWeight: 700, 
                  color: isSelected ? '#38bdf8' : (isDark ? '#cbd5e1' : '#2563eb')
                }}>
                  <span>{isSelected ? "Active View" : "Launch Terminal"}</span>
                  <ArrowUpRight size={15} style={{ transform: isSelected ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Tool Drawer / Live Preview Area */}
        {activeTool && (
          <div style={{ 
            marginTop: '2.5rem', 
            padding: '2.5rem', 
            background: isDark ? '#0f172a' : '#f8fafc', 
            borderRadius: '24px', 
            border: isDark ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid #bfdbfe', 
            boxShadow: isDark ? '0 25px 60px -15px rgba(0,0,0,0.6)' : '0 20px 40px rgba(0,0,0,0.06)',
            color: isDark ? '#ffffff' : '#0f172a',
            animation: 'scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1)' 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span style={{ fontSize: '1.45rem', fontWeight: 800, color: isDark ? '#ffffff' : '#0f172a', letterSpacing: '-0.02em' }}>
                  {ORIGINAL_TOOLS.find(t => t.id === activeTool)?.title}
                </span>
                <span style={{ 
                  background: isDark ? 'rgba(16, 185, 129, 0.15)' : '#ecfdf5', 
                  color: isDark ? '#34d399' : '#059669', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '100px', 
                  fontSize: '0.75rem', 
                  fontWeight: 700,
                  border: isDark ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid #a7f3d0'
                }}>
                  Direct AMFI Certified
                </span>
              </div>
              <button 
                onClick={() => setActiveTool(null)}
                style={{ 
                  fontSize: '0.85rem', 
                  color: isDark ? '#94a3b8' : '#64748b', 
                  fontWeight: 700, 
                  background: isDark ? '#1e293b' : '#e2e8f0', 
                  padding: '0.45rem 1rem', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'background 0.2s'
                }}
              >
                ✕ Close Terminal
              </button>
            </div>

            {/* Content for Latest NAV */}
            {activeTool === 'latest-nav' && (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: isDark ? '#1e293b' : '#e2e8f0', color: isDark ? '#e2e8f0' : '#1e293b', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      <th style={{ padding: '0.85rem 1.25rem', borderRadius: '10px 0 0 10px' }}>Scheme Name & Folio Class</th>
                      <th style={{ padding: '0.85rem 1.25rem' }}>Asset Category</th>
                      <th style={{ padding: '0.85rem 1.25rem' }}>Latest NAV</th>
                      <th style={{ padding: '0.85rem 1.25rem' }}>1-Day Shift</th>
                      <th style={{ padding: '0.85rem 1.25rem', borderRadius: '0 10px 10px 0' }}>1-Yr Trailing Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAMPLE_NAV_DATA.map((row, i) => (
                      <tr key={i} style={{ borderBottom: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #e2e8f0', background: isDark ? (i % 2 === 0 ? '#0f172a' : '#141e33') : (i % 2 === 0 ? '#ffffff' : '#f8fafc') }}>
                        <td style={{ padding: '0.9rem 1.25rem', fontWeight: 600, color: isDark ? '#f8fafc' : '#1e293b' }}>
                          <div>{row.scheme}</div>
                          <span style={{ fontSize: '0.72rem', color: isDark ? '#64748b' : '#94a3b8' }}>ISIN Verified • Direct-Growth / Regular Class</span>
                        </td>
                        <td style={{ padding: '0.9rem 1.25rem', color: isDark ? '#94a3b8' : '#64748b' }}>{row.category}</td>
                        <td style={{ padding: '0.9rem 1.25rem', fontWeight: 700, color: isDark ? '#38bdf8' : '#0f172a', fontVariantNumeric: 'tabular-nums' }}>₹{row.nav}</td>
                        <td style={{ padding: '0.9rem 1.25rem', color: '#10b981', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{row.change}</td>
                        <td style={{ padding: '0.9rem 1.25rem', fontWeight: 800, color: isDark ? '#60a5fa' : '#2563eb', fontVariantNumeric: 'tabular-nums' }}>{row.ytd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1.25rem', fontSize: '0.8rem', color: isDark ? '#94a3b8' : '#64748b' }}>
                  <span>*Data synchronized directly via AMFI official daily NAV bulletin. Updated at 9:00 PM IST every trading day.</span>
                  <button onClick={() => onOpenModal('consultation')} style={{ color: '#38bdf8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    Request Complete 40+ AMC Portfolio Valuation &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* Content for Fund Comparison */}
            {activeTool === 'fund-comparison' && (
              <div>
                <p style={{ color: isDark ? '#cbd5e1' : '#475569', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Multi-factor risk and Sharpe ratio comparison across core asset allocation buckets for private clients:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                  <div style={{ background: isDark ? '#1e293b' : '#ffffff', padding: '1.5rem', borderRadius: '16px', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8', background: 'rgba(56,189,248,0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>BLUECHIP CORE</span>
                      <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>Sharpe: 1.15</span>
                    </div>
                    <h4 style={{ color: isDark ? '#ffffff' : '#0f172a', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Large Cap Equity Schemes</h4>
                    <p style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b', marginBottom: '1rem', lineHeight: 1.5 }}>
                      Invests in India's top 100 conglomerates. High institutional governance, resilient balance sheets, and minimal drawdown risk.
                    </p>
                    <div style={{ padding: '0.75rem', background: isDark ? '#0f172a' : '#f8fafc', borderRadius: '8px', fontSize: '0.82rem', color: '#10b981', fontWeight: 700 }}>
                      Avg 5Y CAGR: 14.5% - 16.8% | Horizon: 5+ Yrs
                    </div>
                  </div>

                  <div style={{ background: isDark ? '#1e293b' : '#ffffff', padding: '1.5rem', borderRadius: '16px', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10b981', background: 'rgba(16,185,129,0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>DYNAMIC ALPHA</span>
                      <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>Sharpe: 1.35</span>
                    </div>
                    <h4 style={{ color: isDark ? '#ffffff' : '#0f172a', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Balanced Advantage Funds (BAF)</h4>
                    <p style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b', marginBottom: '1rem', lineHeight: 1.5 }}>
                      Algorithmic equity-debt rebalancing based on P/E & P/B market valuations. Shields downside during sharp market corrections.
                    </p>
                    <div style={{ padding: '0.75rem', background: isDark ? '#0f172a' : '#f8fafc', borderRadius: '8px', fontSize: '0.82rem', color: '#10b981', fontWeight: 700 }}>
                      Avg 5Y CAGR: 11.8% - 13.9% | Horizon: 3+ Yrs
                    </div>
                  </div>

                  <div style={{ background: isDark ? '#1e293b' : '#ffffff', padding: '1.5rem', borderRadius: '16px', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f59e0b', background: 'rgba(245,158,11,0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>HIGH CONVICTION</span>
                      <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>Sharpe: 1.48</span>
                    </div>
                    <h4 style={{ color: isDark ? '#ffffff' : '#0f172a', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Mid & Small Cap Growth</h4>
                    <p style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b', marginBottom: '1rem', lineHeight: 1.5 }}>
                      Emerging industry champions and niche market disruptors. Targeted for clients seeking substantial long-term multi-bagger alpha.
                    </p>
                    <div style={{ padding: '0.75rem', background: isDark ? '#0f172a' : '#f8fafc', borderRadius: '8px', fontSize: '0.82rem', color: '#10b981', fontWeight: 700 }}>
                      Avg 5Y CAGR: 19.2% - 24.5% | Horizon: 7+ Yrs
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content for Current NFO */}
            {activeTool === 'current-nfo' && (
              <div>
                <p style={{ color: isDark ? '#cbd5e1' : '#475569', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Institutional pipeline of current & upcoming New Fund Offers (NFOs) available for subscription through Assure Securities:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem' }}>
                  {[
                    { name: "SBI Innovative Opportunities Fund", type: "Equity: Thematic Disruption", date: "Open for Subscription", min: "₹5,000", risk: "Very High" },
                    { name: "HDFC Manufacturing & Defense Strategy", type: "Equity: Strategic Sectoral", date: "Open for Subscription", min: "₹1,000", risk: "Very High" },
                    { name: "ICICI Prudential Target Maturity 2033 Index", type: "Debt: Passive Target Maturity", date: "Closing in 48 Hours", min: "₹1,000", risk: "Moderate" }
                  ].map((nfo, i) => (
                    <div key={i} style={{ background: isDark ? '#1e293b' : '#ffffff', padding: '1.5rem', borderRadius: '16px', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38bdf8', background: 'rgba(56,189,248,0.15)', padding: '0.2rem 0.55rem', borderRadius: '4px' }}>{nfo.type}</span>
                        <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>{nfo.date}</span>
                      </div>
                      <h4 style={{ fontSize: '1.1rem', color: isDark ? '#ffffff' : '#0f172a', marginBottom: '0.75rem', fontWeight: 700 }}>{nfo.name}</h4>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', paddingTop: '0.75rem', borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #f1f5f9', fontSize: '0.85rem' }}>
                        <span style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Min Ticket: <strong style={{ color: isDark ? '#ffffff' : '#0f172a' }}>{nfo.min}</strong></span>
                        <button onClick={() => onOpenModal('consultation')} style={{ color: '#38bdf8', fontWeight: 700 }}>Apply via ARN-182137 &rarr;</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content for SIP Performance, Factsheets, Dividend */}
            {['sip-performance', 'mf-factsheets', 'dividend-announced'].includes(activeTool) && (
              <div style={{ background: isDark ? '#1e293b' : '#ffffff', padding: '2rem', borderRadius: '18px', border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0', textAlign: 'center' }}>
                <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                  <div style={{ display: 'inline-flex', padding: '0.75rem', background: isDark ? '#0f172a' : '#eff6ff', borderRadius: '50%', marginBottom: '1rem', color: '#38bdf8' }}>
                    <Sparkles size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.3rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800, marginBottom: '0.75rem' }}>
                    Automated Portfolio Audit & Document Delivery
                  </h4>
                  <p style={{ fontSize: '0.95rem', color: isDark ? '#cbd5e1' : '#475569', marginBottom: '1.75rem', lineHeight: 1.6 }}>
                    Assure Securities maintains institutional integrations with CAMS, KFintech, and all major Indian AMCs. We deliver historical SIP cycle backtests, rolling Sharpe metrics, and official monthly factsheets directly to your private client dashboard.
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <button onClick={() => onOpenModal('consultation')} className="btn-primary" style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}>
                      Request Custom Institutional Report
                    </button>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="btn-secondary" style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}>
                      Direct Desk: {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
