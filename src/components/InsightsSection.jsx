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
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Asset Allocation', 'Tax Optimization', 'Fixed Income', 'Mutual Funds', 'Retirement'];

  const filteredArticles = activeCategory === 'All' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category === activeCategory);

  const featured = filteredArticles.find(a => a.featured) || filteredArticles[0] || ARTICLES[0];
  const sideArticles = filteredArticles.filter(a => a.id !== featured.id);

  return (
    <section 
      id="insights"
      style={{ 
        padding: '7rem 0', 
        background: '#ffffff',
        borderBottom: '1px solid var(--color-border)' 
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '750px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
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
            <BookOpen size={14} />
            <span>Research & Wealth Intelligence</span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', 
              fontWeight: 800, 
              color: 'var(--color-primary)', 
              letterSpacing: '-0.03em', 
              lineHeight: 1.2, 
              marginBottom: '1rem' 
            }}
          >
            Insights For Smarter Financial Decisions
          </h2>

          <p 
            style={{ 
              fontSize: '1.05rem', 
              color: 'var(--color-text-secondary)', 
              lineHeight: 1.6, 
              margin: 0 
            }}
          >
            Institutional analysis, asset allocation frameworks, and actionable financial planning guides to elevate your investment perspective.
          </p>
        </div>

        {/* Category Pills */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '0.6rem', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            marginBottom: '3rem' 
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '100px',
                fontSize: '0.85rem',
                fontWeight: 600,
                border: activeCategory === cat ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                background: activeCategory === cat ? 'var(--color-primary)' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : 'var(--color-text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modern Editorial Layout: One Large Featured + Two Smaller */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {/* Large Featured Article (takes min 2 columns on wide screens) */}
          <div 
            className="fintech-card"
            style={{ 
              gridColumn: 'span 1', 
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: '#fafbfd',
              border: '1px solid var(--color-border)',
              position: 'relative'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span 
                  style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 800, 
                    color: 'var(--color-accent)', 
                    background: 'rgba(22, 185, 129, 0.1)', 
                    padding: '0.3rem 0.75rem', 
                    borderRadius: '6px', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.04em' 
                  }}
                >
                  Featured • {featured.category}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                  <Clock size={14} />
                  <span>{featured.readTime}</span>
                </div>
              </div>

              <h3 
                style={{ 
                  fontSize: 'clamp(1.5rem, 2.5vw, 1.85rem)', 
                  fontWeight: 800, 
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
                  fontSize: '0.98rem', 
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
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-primary)' }}>{featured.author}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{featured.date}</div>
                </div>

                <button 
                  onClick={() => setSelectedArticle(featured)}
                  className="btn-primary-navy"
                  style={{ fontSize: '0.88rem', padding: '0.6rem 1.25rem' }}
                >
                  <span>Read Article →</span>
                </button>
              </div>
            </div>
          </div>

          {/* Side Column: Two Smaller Articles Stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {sideArticles.map((art) => (
              <div
                key={art.id}
                className="fintech-card"
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
                        fontSize: '0.72rem', 
                        fontWeight: 700, 
                        color: 'var(--color-primary)', 
                        background: 'var(--color-bg)', 
                        padding: '0.25rem 0.6rem', 
                        borderRadius: '6px', 
                        textTransform: 'uppercase' 
                      }}
                    >
                      {art.category}
                    </span>

                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                      {art.readTime}
                    </span>
                  </div>

                  <h4 
                    style={{ 
                      fontSize: '1.2rem', 
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

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '0.85rem' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>{art.author}</span>
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
                    <span>Read Article →</span>
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
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.5rem', lineHeight: 1.25 }}>
                  {selectedArticle.title}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                  Authored by {selectedArticle.author} • Published {selectedArticle.date}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', fontSize: '1rem', color: 'var(--color-text)', lineHeight: 1.75 }}>
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
    </section>
  );
}
