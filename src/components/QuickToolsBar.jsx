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
        padding: '4rem 0 3.5rem 0', 
        borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #f1f5f9',
        background: isDark ? '#0f172a' : '#ffffff' 
      }}
    >
      <div className="container">
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <div className="badge-tag">Essential Investor Tools</div>
            <h2 className="section-heading" style={{ fontSize: '2rem', marginBottom: '0.5rem', color: isDark ? '#ffffff' : '#0f172a' }}>
              Quick Market & Mutual Fund Intelligence
            </h2>
          </div>
          <p style={{ color: isDark ? '#94a3b8' : '#64748b', fontSize: '0.95rem', maxWidth: '460px' }}>
            Instant access to official AMFI NAVs, scheme comparisons, factsheets, dividend records, and rolling performance.
          </p>
        </div>

        {/* 6 Quick Action Grid Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))', gap: '1.25rem' }}>
          {ORIGINAL_TOOLS.map((tool) => (
            <div
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className="glass-card"
              style={{
                padding: '1.4rem',
                cursor: 'pointer',
                background: isDark 
                  ? (activeTool === tool.id ? 'rgba(37,99,235,0.25)' : 'rgba(30, 41, 59, 0.75)') 
                  : (activeTool === tool.id ? '#eff6ff' : '#ffffff'),
                borderColor: isDark 
                  ? (activeTool === tool.id ? '#38bdf8' : 'rgba(255,255,255,0.1)') 
                  : (activeTool === tool.id ? '#3b82f6' : '#e2e8f0'),
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ 
                    background: isDark ? '#1e293b' : '#f8fafc', 
                    padding: '0.5rem', 
                    borderRadius: '14px', 
                    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    <img 
                      src={tool.gif} 
                      alt={tool.title} 
                      style={{ width: '38px', height: '38px', objectFit: 'contain' }}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: 700, 
                    padding: '0.2rem 0.5rem', 
                    borderRadius: '4px', 
                    background: isDark ? 'rgba(56, 189, 248, 0.15)' : '#e0f2fe', 
                    color: isDark ? '#38bdf8' : '#0284c7' 
                  }}>
                    {tool.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: isDark ? '#ffffff' : '#0f172a', marginBottom: '0.4rem' }}>
                  {tool.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: isDark ? '#cbd5e1' : '#64748b', lineHeight: 1.4 }}>
                  {tool.description}
                </p>
              </div>

              <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', fontWeight: 600, color: '#38bdf8' }}>
                <span>Launch Tool</span>
                <ArrowUpRight size={15} />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Tool Drawer / Live Preview Area if clicked */}
        {activeTool && (
          <div style={{ 
            marginTop: '2.5rem', 
            padding: '2rem', 
            background: isDark ? '#1e293b' : '#f8fafc', 
            borderRadius: '20px', 
            border: isDark ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid #bfdbfe', 
            color: isDark ? '#ffffff' : '#0f172a',
            animation: 'scaleUp 0.2s ease' 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: isDark ? '#ffffff' : '#0f172a' }}>
                  {ORIGINAL_TOOLS.find(t => t.id === activeTool)?.title}
                </span>
                <span className="badge-tag" style={{ margin: 0 }}>Interactive Preview</span>
              </div>
              <button 
                onClick={() => setActiveTool(null)}
                style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b', fontWeight: 600, textDecoration: 'underline' }}
              >
                Close Preview
              </button>
            </div>

            {/* Content for Latest NAV */}
            {activeTool === 'latest-nav' && (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: isDark ? '#0f172a' : '#e2e8f0', color: isDark ? '#cbd5e1' : '#334155', fontWeight: 700 }}>
                      <th style={{ padding: '0.75rem 1rem', borderRadius: '8px 0 0 8px' }}>Scheme Name</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Category</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Latest NAV (₹)</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Daily Change</th>
                      <th style={{ padding: '0.75rem 1rem', borderRadius: '0 8px 8px 0' }}>1-Yr Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAMPLE_NAV_DATA.map((row, i) => (
                      <tr key={i} style={{ borderBottom: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #e2e8f0', background: isDark ? (i % 2 === 0 ? '#1e293b' : 'rgba(15,23,42,0.6)') : (i % 2 === 0 ? '#ffffff' : '#f8fafc') }}>
                        <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: isDark ? '#f8fafc' : '#1e293b' }}>{row.scheme}</td>
                        <td style={{ padding: '0.75rem 1rem', color: isDark ? '#94a3b8' : '#64748b' }}>{row.category}</td>
                        <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: isDark ? '#38bdf8' : '#0f172a' }}>₹{row.nav}</td>
                        <td style={{ padding: '0.75rem 1rem', color: '#10b981', fontWeight: 600 }}>{row.change}</td>
                        <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: isDark ? '#60a5fa' : '#2563eb' }}>{row.ytd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', fontSize: '0.8rem', color: isDark ? '#94a3b8' : '#64748b' }}>
                  <span>*NAV values updated end-of-day as reported by AMFI. Source: Official Mutual Fund NAV Feed.</span>
                  <button onClick={() => onOpenModal('consultation')} style={{ color: '#38bdf8', fontWeight: 600 }}>Request Full Portfolio Valuation &rarr;</button>
                </div>
              </div>
            )}

            {/* Content for Fund Comparison */}
            {activeTool === 'fund-comparison' && (
              <div>
                <p style={{ color: isDark ? '#cbd5e1' : '#475569', fontSize: '0.92rem', marginBottom: '1rem' }}>
                  Comparing parameters across top categories: Large Cap vs Mid Cap vs Balanced Advantage.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                  <div style={{ background: isDark ? '#0f172a' : '#ffffff', padding: '1.25rem', borderRadius: '12px', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' }}>
                    <h4 style={{ color: isDark ? '#60a5fa' : '#1e3a8a', marginBottom: '0.5rem' }}>Large Cap Equity Funds</h4>
                    <p style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b', marginBottom: '0.5rem' }}>Top 100 bluechip companies. Ideal for conservative equity investors with 5+ year horizon.</p>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10b981' }}>Avg 5Y CAGR: 14% - 16% | Risk: Moderate</div>
                  </div>
                  <div style={{ background: isDark ? '#0f172a' : '#ffffff', padding: '1.25rem', borderRadius: '12px', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' }}>
                    <h4 style={{ color: isDark ? '#60a5fa' : '#1e3a8a', marginBottom: '0.5rem' }}>Balanced Advantage Funds</h4>
                    <p style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b', marginBottom: '0.5rem' }}>Dynamically allocates between Equity & Debt based on market valuation metrics.</p>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10b981' }}>Avg 5Y CAGR: 11% - 13% | Risk: Low-to-Moderate</div>
                  </div>
                  <div style={{ background: isDark ? '#0f172a' : '#ffffff', padding: '1.25rem', borderRadius: '12px', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' }}>
                    <h4 style={{ color: isDark ? '#60a5fa' : '#1e3a8a', marginBottom: '0.5rem' }}>Mid & Small Cap Growth</h4>
                    <p style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b', marginBottom: '0.5rem' }}>High alpha potential companies with substantial runway for business expansion.</p>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10b981' }}>Avg 5Y CAGR: 18% - 22% | Risk: High</div>
                  </div>
                </div>
              </div>
            )}

            {/* Content for Current NFO */}
            {activeTool === 'current-nfo' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {[
                  { name: "SBI Innovative Opportunities Fund", type: "Equity: Thematic", date: "Open Now", min: "₹5,000" },
                  { name: "HDFC Manufacturing & Defense Fund", type: "Equity: Sectoral", date: "Open Now", min: "₹1,000" },
                  { name: "ICICI Prudential Target Maturity 2033 Index", type: "Debt: Passive Target", date: "Closes Soon", min: "₹1,000" }
                ].map((nfo, i) => (
                  <div key={i} style={{ background: isDark ? '#0f172a' : '#ffffff', padding: '1.2rem', borderRadius: '12px', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', background: 'rgba(56,189,248,0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{nfo.type}</span>
                      <span style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 600 }}>{nfo.date}</span>
                    </div>
                    <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.5rem' }}>{nfo.name}</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', fontSize: '0.85rem' }}>
                      <span style={{ color: '#94a3b8' }}>Min: <strong style={{ color: '#ffffff' }}>{nfo.min}</strong></span>
                      <button onClick={() => onOpenModal('consultation')} style={{ color: '#38bdf8', fontWeight: 600 }}>Apply via Assure &rarr;</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Content for SIP Performance, Factsheets, Dividend */}
            {['sip-performance', 'mf-factsheets', 'dividend-announced'].includes(activeTool) && (
              <div style={{ background: isDark ? '#0f172a' : '#ffffff', padding: '1.5rem', borderRadius: '12px', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', textAlign: 'center' }}>
                <p style={{ fontSize: '0.95rem', color: isDark ? '#cbd5e1' : '#475569', marginBottom: '1rem' }}>
                  Live data sync active. As an AMFI Registered Distributor, Assure Securities provides tailored historical SIP backtesting and official AMC monthly factsheet documents directly to our clients.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  <button onClick={() => onOpenModal('consultation')} className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
                    Request Detailed Report
                  </button>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="btn-secondary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
                    Speak to Advisor: {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
