import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles, Tag, ChevronRight, X } from 'lucide-react';
import { RECENT_INSIGHTS } from '../data/websiteData';

const ARTICLES = [
  {
    id: 1,
    featured: true,
    category: "Asset Allocation",
    title: "How to Architect a Resilient Multi-Asset Portfolio Across Market Volatility",
    excerpt: "Reviewing your asset mix annually ensures that outsized gains from equity rallies are systematically rebalanced into high-safety debt instruments, protecting your family corpus from unexpected drawdowns while compounding securely.",
    author: "Assure Research Desk",
    date: "October 2026",
    readTime: "6 min read",
    content: "Asset allocation is empirically proven to dictate more than 90% of long-term portfolio return variance, far outweighing individual stock or scheme selection. In periods of high market valuations, equities tend to expand as a percentage of overall net worth, inadvertently elevating risk. Disciplined rebalancing restores your target equilibrium between growth assets (Equity Mutual Funds) and stability assets (AAA Corporate FDs, Sovereign Gold Bonds). Regular systematic rebalancing enforces the cardinal rule of wealth creation: buy low and sell high automatically without emotional interference."
  },
  {
    id: 2,
    featured: false,
    category: "Tax Optimization",
    title: "Maximizing Section 80C, 80D & 80CCD Deductions Ahead of Year End",
    excerpt: "Why waiting until March leads to suboptimal investments. Discover how structured ELSS SIPs save taxes without straining your monthly liquidity.",
    author: "Tax Advisory Wing",
    date: "October 2026",
    readTime: "4 min read",
    content: "Last-minute tax planning often forces investors into illiquid products with poor long-term returns. By utilizing ELSS (Equity Linked Savings Schemes) via systematic monthly SIPs, you not only exhaust your ₹1,50,000 Section 80C limit comfortably, but also capitalize on rupee-cost averaging across the entire financial year with the shortest 3-year lock-in period among all 80C options."
  },
  {
    id: 3,
    featured: false,
    category: "Fixed Income",
    title: "Navigating Interest Rate Plateaus: Corporate FDs vs Debt Funds",
    excerpt: "Locking into attractive AAA-rated corporate fixed deposits and target-maturity instruments during peak interest rate plateaus.",
    author: "Fixed Income Desk",
    date: "October 2026",
    readTime: "5 min read",
    content: "When central banks pause rate cycles, corporate fixed deposits from AAA/AA+ rated institutions offer exceptional risk-reward opportunities with yields significantly surpassing traditional bank savings. Pairing these with conservative hybrid or target maturity debt funds builds an unassailable defensive moat for your core capital."
  }
];

export function InsightsSection({ onOpenModal }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const featured = ARTICLES[0];
  const secondaryArticles = ARTICLES.slice(1);

  return (
    <section 
      id="insights"
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
            <BookOpen size={13} />
            <span>Research & Wealth Intelligence</span>
          </div>

          <h2>
            Insights For Smarter <span style={{ color: 'var(--color-accent)' }}>Financial Decisions</span>
          </h2>

          <p>
            Institutional analysis, asset allocation frameworks, and actionable financial planning guides to elevate your investment perspective.
          </p>
        </div>

        {/* Editorial Layout: ONE large featured article (approx 50%), TWO smaller articles (Section 17) */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem',
            alignItems: 'stretch'
          }}
          className="insights-editorial-grid"
        >
          {/* Large Featured Article (approx 50% width on desktop) */}
          <div 
            className="fintech-card interactive-glow-card reveal-on-scroll stagger-1"
            style={{ 
              padding: 0,
              overflow: 'hidden',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#fafbfd',
              border: '1px solid var(--color-border)',
              position: 'relative'
            }}
          >
            {/* Featured Article Image Banner (Requirement 21) */}
            <div style={{ position: 'relative', height: '175px', overflow: 'hidden', background: '#071A2F' }}>
              <img 
                src="/assets/b1-2.jpg" 
                alt={featured.title} 
                className="cinematic-reveal"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7, 26, 47, 0.85) 0%, transparent 60%)' }} />
              <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span 
                  style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: 700, 
                    color: 'var(--color-accent)', 
                    background: 'rgba(7, 26, 47, 0.75)', 
                    padding: '0.22rem 0.65rem', 
                    borderRadius: '6px', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.04em' 
                  }}
                >
                  Featured • {featured.category}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#cbd5e1' }}>
                  <Clock size={13} />
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>

            <div style={{ padding: 'clamp(1.5rem, 2.8vw, 2.25rem)' }}>

              <h3 
                style={{ 
                  fontSize: 'clamp(1.5rem, 2.4vw, 1.85rem)', 
                  fontWeight: 700, 
                  color: 'var(--color-primary)', 
                  letterSpacing: '-0.02em', 
                  lineHeight: 1.3, 
                  marginBottom: '1rem' 
                }}
              >
                {featured.title}
              </h3>

              <p 
                style={{ 
                  fontSize: '0.95rem', 
                  color: 'var(--color-text-secondary)', 
                  lineHeight: 1.65, 
                  marginBottom: '1.75rem' 
                }}
              >
                {featured.excerpt}
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>{featured.author}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>{featured.date}</div>
                </div>

                <button 
                  onClick={() => setSelectedArticle(featured)}
                  className="btn-primary-navy"
                  style={{ height: '44px', fontSize: '0.85rem', padding: '0 1.25rem' }}
                >
                  <span>Read Article →</span>
                </button>
              </div>
            </div>
          </div>

          {/* Two Smaller Articles Stacked Vertically */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {secondaryArticles.map((art, aIdx) => (
              <div
                key={art.id}
                className={`fintech-card interactive-glow-card reveal-on-scroll stagger-${aIdx + 2}`}
                style={{
                  padding: '1.75rem',
                  background: '#ffffff',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flex: 1
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span 
                      style={{ 
                        fontSize: '0.7rem', 
                        fontWeight: 700, 
                        color: 'var(--color-primary)', 
                        background: 'var(--color-bg)', 
                        padding: '0.2rem 0.55rem', 
                        borderRadius: '6px', 
                        textTransform: 'uppercase' 
                      }}
                    >
                      {art.category}
                    </span>

                    <span style={{ fontSize: '0.73rem', color: 'var(--color-muted)' }}>
                      {art.readTime}
                    </span>
                  </div>

                  <h4 
                    style={{ 
                      fontSize: '1.18rem', 
                      fontWeight: 700, 
                      color: 'var(--color-primary)', 
                      letterSpacing: '-0.01em', 
                      lineHeight: 1.35, 
                      marginBottom: '0.65rem' 
                    }}
                  >
                    {art.title}
                  </h4>

                  <p 
                    style={{ 
                      fontSize: '0.88rem', 
                      color: 'var(--color-text-secondary)', 
                      lineHeight: 1.55, 
                      margin: 0,
                      marginBottom: '1rem' 
                    }}
                  >
                    {art.excerpt}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>{art.author}</span>
                  <button 
                    onClick={() => setSelectedArticle(art)}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: 'var(--color-accent)', 
                      fontWeight: 700, 
                      fontSize: '0.85rem', 
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}
                  >
                    <span>Read →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Article Reading */}
        {selectedArticle && (
          <div 
            style={{ 
              position: 'fixed', 
              inset: 0, 
              background: 'rgba(7, 26, 47, 0.75)', 
              backdropFilter: 'blur(8px)', 
              zIndex: 9999, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              padding: '1.5rem' 
            }}
          >
            <div 
              style={{ 
                background: '#ffffff', 
                borderRadius: '24px', 
                maxWidth: '680px', 
                width: '100%', 
                maxHeight: '90vh', 
                overflowY: 'auto', 
                padding: 'clamp(1.5rem, 4vw, 2.75rem)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
                position: 'relative'
              }}
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                style={{ 
                  position: 'absolute', 
                  top: '1.25rem', 
                  right: '1.25rem', 
                  background: 'var(--color-bg)', 
                  border: '1px solid var(--color-border)', 
                  borderRadius: '50%', 
                  width: '36px', 
                  height: '36px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  cursor: 'pointer',
                  color: 'var(--color-primary)'
                }}
              >
                <X size={18} />
              </button>

              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase' }}>
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '0.5rem', lineHeight: 1.25 }}>
                  {selectedArticle.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-muted)', marginTop: '0.4rem' }}>
                  Authored by {selectedArticle.author} • Published {selectedArticle.date}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', fontSize: '0.98rem', color: 'var(--color-text)', lineHeight: 1.75 }}>
                <p style={{ fontWeight: 600, color: 'var(--color-primary)', marginBottom: '1.25rem' }}>
                  {selectedArticle.excerpt}
                </p>
                <p>
                  {selectedArticle.content}
                </p>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                <button 
                  onClick={() => { setSelectedArticle(null); onOpenModal && onOpenModal('consultation'); }}
                  className="btn-primary-emerald"
                >
                  Consult an Advisor on This Topic →
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      <style>{`
        @media (min-width: 992px) {
          .insights-editorial-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
