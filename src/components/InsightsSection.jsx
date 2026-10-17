import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, ArrowUpRight, X, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { RECENT_INSIGHTS } from '../data/websiteData';

const ARTICLES = [
  {
    id: 1,
    category: "Asset Allocation",
    categoryColor: "#10B981",
    date: "OCTOBER 2026",
    readTime: "6 MIN READ",
    author: "Assure Research Desk",
    image: "/assets/principle-compounding.jpg",
    headline: "How to Architect a Resilient Multi-Asset Portfolio Across Market Cycles",
    description: "Asset allocation is empirically proven to dictate over 90% of long-term return variance. In elevated equity markets, systematic rebalancing into high-grade debt and sovereign gold shields gains from drawdowns while allowing compounding to compound securely.",
    fullContent: `Asset allocation is empirically proven to dictate more than 90% of long-term portfolio return variance, far outweighing individual stock or scheme selection. In periods of high market valuations, equities tend to expand as a percentage of overall net worth, inadvertently elevating risk. 

Disciplined rebalancing restores your target equilibrium between growth assets (Equity Mutual Funds) and stability assets (AAA Corporate FDs, Sovereign Gold Bonds). Regular systematic rebalancing enforces the cardinal rule of wealth creation: buy low and sell high automatically without emotional interference.

Key Fiduciary Takeaways:
1. Rebalance annually or when equity deviation exceeds 5% of target allocation.
2. Pair market-cap diversified equity funds with target-maturity sovereign debt.
3. Keep 6 to 12 months of family cash flows in ultra-liquid overnight funds.`
  },
  {
    id: 2,
    category: "Tax Optimization",
    categoryColor: "#38BDF8",
    date: "OCTOBER 2026",
    readTime: "4 MIN READ",
    author: "Tax Advisory Wing",
    image: "/assets/principle-transparency.jpg",
    headline: "Maximizing Section 80C, 80D & 80CCD Deductions Ahead of Year End",
    description: "Why waiting until March leads to suboptimal investments. Discover how structured ELSS SIPs save taxes without straining your monthly liquidity, paired with the shortest 3-year lock-in across Indian tax instruments.",
    fullContent: `Last-minute tax planning often forces investors into illiquid products with poor long-term returns. By utilizing ELSS (Equity Linked Savings Schemes) via systematic monthly SIPs, you not only exhaust your ₹1,50,000 Section 80C limit comfortably, but also capitalize on rupee-cost averaging across the entire financial year with the shortest 3-year lock-in period among all 80C options.

Pairing this with Section 80D health insurance tax savings and the exclusive ₹50,000 deduction under Section 80CCD(1B) provides unmatched tax efficiency.`
  },
  {
    id: 3,
    category: "Fixed Income",
    categoryColor: "#F59E0B",
    date: "SEPTEMBER 2026",
    readTime: "5 MIN READ",
    author: "Fixed Income Desk",
    image: "/assets/principle-trust.jpg",
    headline: "Navigating Interest Rate Plateaus: Corporate FDs vs Debt Funds",
    description: "Locking into attractive AAA-rated corporate fixed deposits and target-maturity instruments during peak interest rate plateaus to secure predictable sovereign & corporate yields for years ahead.",
    fullContent: `When central banks pause rate cycles, corporate fixed deposits from AAA/AA+ rated institutions offer exceptional risk-reward opportunities with yields significantly surpassing traditional bank savings. Pairing these with conservative hybrid or target maturity debt funds builds an unassailable defensive moat for your core capital.

Assure Securities conducts rigorous credit evaluations before empaneling any corporate FD issuer to ensure prompt coupon payouts and zero default risk.`
  },
  {
    id: 4,
    category: "Behavioral Finance",
    categoryColor: "#818CF8",
    date: "SEPTEMBER 2026",
    readTime: "5 MIN READ",
    author: "Wealth Strategy Wing",
    image: "/assets/goal-retirement.jpg",
    headline: "The Cost of Timing the Market: Why Patience Outperforms Volatility",
    description: "Examining 20 years of Indian market history: missing just the 10 best trading days reduces portfolio returns by more than half. Staying systematically invested through automated SIPs remains the ultimate compounding strategy.",
    fullContent: `Historical quantitative market data consistently reveals that attempting to time market peaks and troughs is the fastest destroyer of retail capital. Nearly 70% of market gains occur in rapid, unpredictable bursts during high-anxiety bear market recoveries. 

Investors who remain committed to disciplined SIPs benefit from rupee-cost averaging, acquiring more units at distressed valuations and generating outsized terminal wealth.`
  }
];

export function InsightsSection({ onOpenModal, theme = 'light' }) {
  const [activeArticle, setActiveArticle] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const themeClass = theme === 'dark' ? 'section-theme-dark' : 'section-theme-light';

  const filterOptions = ["All", "Asset Allocation", "Tax Optimization", "Fixed Income", "Behavioral Finance"];

  const filteredArticles = selectedFilter === "All" 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <section id="insights" className={`insights-section ${themeClass}`} style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decorative Ambient Radial Glow */}
      <div 
        style={{
          position: 'absolute',
          left: '-10%',
          top: '20%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(16, 185, 129, 0.04) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="eyebrow-label">
            <span>08 — PERSPECTIVES</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: 'var(--color-text)', maxWidth: '650px', lineHeight: 1.12 }}>
              Perspectives for <span className="text-blue">better decisions</span>
              <br />
              <span className="text-red" style={{ fontStyle: 'italic' }}>
                & long-term growth.
              </span>
            </h2>

            <p style={{ maxWidth: '440px', fontSize: '0.96rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
              Institutional financial research, market valuation frameworks, and behavioral insights curated by the Assure Advisory Desk.
            </p>
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '2.5rem', marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  border: '1px solid',
                  borderColor: selectedFilter === filter ? '#0284C7' : 'var(--color-border)',
                  background: selectedFilter === filter ? 'rgba(2, 132, 199, 0.12)' : 'var(--color-bg-card)',
                  color: selectedFilter === filter ? '#0284C7' : 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: selectedFilter === filter ? '0 2px 8px rgba(2, 132, 199, 0.25)' : 'none'
                }}
              >
                {filter === "All" ? "All Perspectives (4)" : filter}
              </button>
            ))}
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--color-gold)', fontFamily: 'var(--font-mono)' }}>
            <Sparkles size={13} />
            <span>Curated by Chartered Wealth Advisors</span>
          </div>
        </div>

        {/* Luxury Editorial Cards Grid */}
        <div className="insights-editorial-grid">
          {filteredArticles.map((article) => (
            <div 
              key={article.id} 
              className="insight-editorial-card"
              onClick={() => setActiveArticle(article)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setActiveArticle(article); }}
            >
              {/* Shimmer light bar on hover */}
              <div className="insight-card-shimmer" />

              {/* Card Media Container */}
              <div className="insight-image-wrap">
                <img 
                  src={article.image} 
                  alt={article.headline} 
                  className="insight-card-img"
                  loading="lazy"
                />
                <div className="insight-image-scrim" />

                {/* Overlaid Top Header Pills */}
                <div className="insight-image-topbar">
                  <span 
                    className="insight-category-pill"
                    style={{ background: article.categoryColor }}
                  >
                    {article.category}
                  </span>

                  <span className="insight-readtime-pill">
                    <Clock size={11} />
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="insight-content-body">
                <div className="insight-date-meta">
                  {article.date} • {article.author}
                </div>

                <h3 className="insight-headline">
                  {article.headline}
                </h3>

                <p className="insight-excerpt">
                  {article.description}
                </p>

                <div className="insight-card-footer">
                  <span style={{ fontWeight: 600 }}>Read Full Perspective</span>
                  <div className="insight-arrow-btn">
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Research Article Reader Modal */}
        {activeArticle && (
          <div className="modal-overlay" onClick={() => setActiveArticle(null)}>
            <div 
              className="modal-content" 
              style={{ maxWidth: '820px', padding: 0, overflow: 'hidden', borderRadius: '16px' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Hero Banner */}
              <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={activeArticle.image} 
                  alt={activeArticle.headline}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0B0F17 0%, rgba(11, 15, 23, 0.4) 60%, rgba(11, 15, 23, 0.8) 100%)' }} />

                <div style={{ position: 'absolute', top: 16, right: 16, zIndex: 10 }}>
                  <button 
                    onClick={() => setActiveArticle(null)}
                    style={{ background: 'rgba(0, 0, 0, 0.6)', border: '1px solid rgba(255, 255, 255, 0.2)', color: '#ffffff', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                    aria-label="Close article"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div style={{ position: 'absolute', bottom: 16, left: 24, right: 24 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ background: activeArticle.categoryColor, color: '#ffffff', padding: '3px 10px', borderRadius: '12px', fontSize: '0.72rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      {activeArticle.category}
                    </span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.74rem', fontFamily: 'var(--font-mono)' }}>
                      {activeArticle.date} • {activeArticle.readTime}
                    </span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#ffffff', fontFamily: 'var(--font-serif)', lineHeight: 1.25, fontWeight: 700 }}>
                    {activeArticle.headline}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', maxHeight: '60vh', overflowY: 'auto' }}>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.98rem', lineHeight: 1.85, whiteSpace: 'pre-line', marginBottom: '2rem' }}>
                  {activeArticle.fullContent}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--color-gold)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      AUTHORED BY {activeArticle.author.toUpperCase()}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)' }}>
                      Assure Securities • AMFI Registered Mutual Fund Distributor ARN-182137
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button 
                      onClick={() => {
                        setActiveArticle(null);
                        if (onOpenModal) onOpenModal('consultation');
                      }}
                      className="btn-gold"
                      style={{ height: '42px', fontSize: '0.8rem', padding: '0 1.25rem', borderRadius: '8px' }}
                    >
                      <span>Discuss with an Advisor</span>
                      <ArrowRight size={13} />
                    </button>

                    <button 
                      onClick={() => setActiveArticle(null)}
                      className="btn-outline"
                      style={{ height: '42px', fontSize: '0.8rem', padding: '0 1.25rem', borderRadius: '8px' }}
                    >
                      <span>Close</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default InsightsSection;
