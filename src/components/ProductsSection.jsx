import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Sparkles, ChevronRight
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/websiteData';

const PRODUCT_ICONS = {
  'mutual-funds': '/assets/mutual.png',
  'fixed-deposits': '/assets/vault.png',
  'bonds': '/assets/bank.png',
  'life-insurance': '/assets/insuranse.png',
  'general-insurance': '/assets/insuranse.png',
  'tax-saving': '/assets/tax-calculate.png',
  'pms-aif': '/assets/data-analytics.png'
};

export function ProductsSection({ onOpenModal, onNavigate, theme = "dark" }) {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS_DATA[0].id);
  const isDark = theme === "dark";

  const current = PRODUCTS_DATA.find(p => p.id === selectedProduct) || PRODUCTS_DATA[0];

  return (
    <section 
      id="products" 
      className={isDark ? "section-dark-navy section-wrapper" : "section-light-white section-wrapper"}
      style={{ 
        background: isDark ? '#0b1120' : '#ffffff',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : 'none'
      }}
    >
      <div className="container">
        
        {/* Section Header with What We Do Banner */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'center', marginBottom: '3.5rem' }} className="products-intro-grid">
          <div>
            <div className="badge-tag">Comprehensive Product Suite</div>
            <h2 className="section-heading" style={{ marginBottom: '1rem', color: isDark ? '#ffffff' : '#0f172a' }}>
              What We Do: Financial Solutions for <span className="gradient-text">Every Life Goal</span>
            </h2>
            <p className="section-subheading" style={{ margin: 0, color: isDark ? '#cbd5e1' : '#64748b' }}>
              At Assure Securities, our core aim is to serve our clients with dedication and integrity, meet their expectations, and build enduring relationships. We offer multiple distribution services like Mutual Funds, Fixed Deposits, Bonds, Insurance, and PMS/AIF.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img 
              src="/assets/3_what_we_do.png" 
              alt="Assure Securities What We Do" 
              style={{ maxHeight: '220px', width: 'auto', objectFit: 'contain', margin: '0 auto', filter: isDark ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' : 'none' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* Product Selection Tabs with Authentic Original Icons */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          overflowX: 'auto',
          paddingBottom: '0.85rem',
          marginBottom: '2.5rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          {PRODUCTS_DATA.map((prod) => {
            const isActive = prod.id === selectedProduct;
            const iconImg = PRODUCT_ICONS[prod.id] || '/assets/mutual.png';
            return (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '16px',
                  whiteSpace: 'nowrap',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  transition: 'all 0.25s ease',
                  background: isActive 
                    ? 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)' 
                    : (isDark ? '#1e293b' : '#f8fafc'),
                  color: isActive ? '#ffffff' : (isDark ? '#cbd5e1' : '#334155'),
                  border: isActive 
                    ? '1px solid #38bdf8' 
                    : (isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0'),
                  boxShadow: isActive ? '0 10px 20px -5px rgba(37,99,235,0.45)' : 'none',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  background: isActive ? '#ffffff' : (isDark ? '#0f172a' : '#eff6ff'),
                  padding: '0.3rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px'
                }}>
                  <img 
                    src={iconImg} 
                    alt={prod.title} 
                    style={{ width: '22px', height: '22px', objectFit: 'contain' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <span>{prod.title}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Product Showcase Card */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '3rem', 
            background: isDark ? 'rgba(30, 41, 59, 0.85)' : '#ffffff', 
            borderRadius: '28px', 
            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', 
            boxShadow: isDark ? '0 20px 40px rgba(0,0,0,0.5)' : 'var(--shadow-card)',
            color: isDark ? '#ffffff' : '#0f172a'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="product-showcase-grid">
            
            {/* Left Column: Product Information */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="badge-tag accent-emerald" style={{ margin: 0 }}>
                  <Sparkles size={13} />
                  <span>Verified Financial Vehicle</span>
                </span>
                <span style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b' }}>Assure Curated</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <img 
                  src={PRODUCT_ICONS[current.id] || '/assets/mutual.png'} 
                  alt={current.title} 
                  style={{ 
                    width: '48px', 
                    height: '48px', 
                    objectFit: 'contain', 
                    background: isDark ? '#0f172a' : '#f8fafc', 
                    padding: '6px', 
                    borderRadius: '12px', 
                    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' 
                  }}
                />
                <h3 style={{ fontSize: '2.2rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800 }}>
                  {current.title}
                </h3>
              </div>
              
              <div style={{ fontSize: '1.15rem', color: isDark ? '#38bdf8' : '#2563eb', fontWeight: 600, marginBottom: '1.25rem' }}>
                {current.tagline}
              </div>

              <p style={{ fontSize: '1.05rem', color: isDark ? '#cbd5e1' : '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {current.summary}
              </p>

              {/* Subcategories Chips */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: isDark ? '#94a3b8' : '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>
                  Available Options & Sub-Categories:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {current.subcategories.map((sub, idx) => (
                    <span 
                      key={idx}
                      style={{ 
                        background: isDark ? 'rgba(56, 189, 248, 0.15)' : '#eff6ff', 
                        color: isDark ? '#38bdf8' : '#1e40af', 
                        padding: '0.4rem 0.85rem', 
                        borderRadius: '8px', 
                        fontSize: '0.82rem', 
                        fontWeight: 600, 
                        border: isDark ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid #dbeafe' 
                      }}
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => onOpenModal('consultation')}
                  className="btn-primary"
                >
                  <span>Invest in {current.title}</span>
                  <ArrowRight size={16} />
                </button>

                <button 
                  onClick={() => onNavigate('calculators')}
                  className={isDark ? "btn-secondary" : "btn-secondary"}
                  style={{ background: isDark ? '#1e293b' : '#ffffff', color: isDark ? '#ffffff !important' : 'var(--primary-700) !important', borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'var(--primary-200)' }}
                >
                  <span>Check Goal Projections</span>
                </button>
              </div>
            </div>

            {/* Right Column: Key Benefits & Highlights Box */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Highlight Callout */}
              <div style={{ 
                background: isDark ? 'rgba(16, 185, 129, 0.15)' : '#f0fdf4', 
                border: isDark ? '1.5px solid rgba(16, 185, 129, 0.35)' : '1.5px solid #86efac', 
                padding: '1.25rem 1.5rem', 
                borderRadius: '18px' 
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: isDark ? '#34d399' : '#15803d', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.3rem' }}>
                  Key Value Advantage
                </div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: isDark ? '#a7f3d0' : '#166534' }}>
                  {current.highlight}
                </div>
              </div>

              {/* Detailed Feature List */}
              <div style={{ 
                background: isDark ? '#0f172a' : '#f8fafc', 
                padding: '1.75rem', 
                borderRadius: '20px', 
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' 
              }}>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: isDark ? '#ffffff' : '#1e293b', marginBottom: '1rem' }}>
                  Why Choose via Assure Securities?
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {current.details.map((detail, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <div style={{ background: isDark ? 'rgba(56, 189, 248, 0.2)' : '#eff6ff', padding: '0.2rem', borderRadius: '50%', marginTop: '2px' }}>
                        <CheckCircle2 size={16} color="#38bdf8" />
                      </div>
                      <span style={{ fontSize: '0.92rem', color: isDark ? '#cbd5e1' : '#334155', lineHeight: 1.5 }}>
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Notice */}
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '1rem 1.25rem', 
                background: isDark ? '#0f172a' : '#ffffff', 
                borderRadius: '14px', 
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' 
              }}>
                <div style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b' }}>
                  Need personalized advice on this product?
                </div>
                <button 
                  onClick={() => onOpenModal('consultation')}
                  style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.88rem' }}
                >
                  Speak to Advisor &rarr;
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .products-intro-grid { grid-template-columns: 1.2fr 0.8fr !important; }
          .product-showcase-grid { grid-template-columns: 1.15fr 0.85fr !important; }
        }
      `}</style>
    </section>
  );
}
