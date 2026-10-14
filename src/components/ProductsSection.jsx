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

  // Strategic Wealth Class Mapping
  const PRODUCT_TIERS = {
    'mutual-funds': { tier: "Asset Tier I • Core Equity Alpha", risk: "Moderate to High", horizon: "5 to 10+ Years", tax: "LTCG 12.5% | STCG 20%", settlement: "Direct AMC via BSE StAR MF" },
    'fixed-deposits': { tier: "Asset Tier II • Capital Preservation", risk: "Very Low (AAA Rated)", horizon: "12 to 60 Months", tax: "TDS applicable as per slab", settlement: "Direct Corporate Issuer / CRISIL AAA" },
    'bonds': { tier: "Asset Tier II • Sovereign Yield", risk: "Sovereign / Central Govt.", horizon: "5 to 8 Years", tax: "Tax-Free on SGB Maturity", settlement: "RBI E-Kuber / Secondary Exchange" },
    'life-insurance': { tier: "Asset Tier V • Balance Sheet Defense", risk: "Zero Market Risk", horizon: "Till Age 75 / 85", tax: "100% Tax-Free u/s 10(10D)", settlement: "IRDAI Regulated Insurers" },
    'general-insurance': { tier: "Asset Tier V • Catastrophic Health Shield", risk: "Zero Market Risk", horizon: "Annual Renewable", tax: "Deduction u/s 80D up to ₹75k", settlement: "Direct Cashless TPA Network" },
    'tax-saving': { tier: "Asset Tier III • Tax Alpha Engineering", risk: "Equity Moderate-High", horizon: "3-Year Mandatory Lock", tax: "Sec 80C Exemption up to ₹1.5L", settlement: "Direct AMC Folio Settlement" },
    'pms-aif': { tier: "Asset Tier IV • Bespoke Ultra-HNI Alpha", risk: "High Conviction Discretionary", horizon: "3 to 5+ Years", tax: "Pass-through / Fund Level", settlement: "SEBI Registered PMS/AIF Custodian" }
  };

  const meta = PRODUCT_TIERS[current.id] || PRODUCT_TIERS['mutual-funds'];

  return (
    <section 
      id="products" 
      className={isDark ? "section-dark-navy section-wrapper" : "section-light-white section-wrapper"}
      style={{ 
        background: isDark ? '#0b1120' : '#ffffff',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : 'none',
        padding: '5rem 0'
      }}
    >
      <div className="container">
        
        {/* Section Header with What We Do Banner */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center', marginBottom: '3.5rem' }} className="products-intro-grid">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: isDark ? 'rgba(56, 189, 248, 0.12)' : '#e0f2fe', color: isDark ? '#38bdf8' : '#0369a1', border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #bae6fd', padding: '0.35rem 0.9rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              <Sparkles size={13} />
              <span>Institutional Multi-Asset Suite • Zero Custody Risk</span>
            </div>
            <h2 className="section-heading" style={{ marginBottom: '1rem', color: isDark ? '#ffffff' : '#0f172a', fontSize: '2.3rem' }}>
              Strategic Asset Allocation: <span className="gradient-text">Institutional Solutions</span> for Every Horizon
            </h2>
            <p className="section-subheading" style={{ margin: 0, color: isDark ? '#cbd5e1' : '#64748b' }}>
              At Assure Securities, our distribution architecture covers the full spectrum of private wealth needs: from high-alpha equity compounding and corporate AAA fixed income to sovereign debt, tax minimization, and bespoke HNI portfolio mandates.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img 
              src="/assets/3_what_we_do.png" 
              alt="Assure Securities What We Do" 
              style={{ maxHeight: '220px', width: 'auto', objectFit: 'contain', margin: '0 auto', filter: isDark ? 'drop-shadow(0 15px 30px rgba(0,0,0,0.6))' : 'none' }}
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
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  transition: 'all 0.25s ease',
                  background: isActive 
                    ? 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)' 
                    : (isDark ? '#0f172a' : '#f8fafc'),
                  color: isActive ? '#ffffff' : (isDark ? '#cbd5e1' : '#334155'),
                  border: isActive 
                    ? '1px solid #38bdf8' 
                    : (isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0'),
                  boxShadow: isActive ? '0 10px 25px -5px rgba(37,99,235,0.5)' : 'none',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  background: isActive ? '#ffffff' : (isDark ? '#1e293b' : '#eff6ff'),
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
            background: isDark ? '#0f172a' : '#ffffff', 
            borderRadius: '28px', 
            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', 
            boxShadow: isDark ? '0 25px 60px -15px rgba(0,0,0,0.6)' : 'var(--shadow-card)',
            color: isDark ? '#ffffff' : '#0f172a'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.75rem' }} className="product-showcase-grid">
            
            {/* Left Column: Product Information */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                <span style={{ 
                  background: isDark ? 'rgba(56, 189, 248, 0.15)' : '#e0f2fe', 
                  color: isDark ? '#38bdf8' : '#0284c7', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '6px', 
                  fontSize: '0.75rem', 
                  fontWeight: 800, 
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  border: isDark ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid #bae6fd'
                }}>
                  {meta.tier}
                </span>
                <span style={{ fontSize: '0.82rem', color: isDark ? '#94a3b8' : '#64748b' }}>Assure Fiduciary Screened</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <img 
                  src={PRODUCT_ICONS[current.id] || '/assets/mutual.png'} 
                  alt={current.title} 
                  style={{ 
                    width: '52px', 
                    height: '52px', 
                    objectFit: 'contain', 
                    background: isDark ? '#1e293b' : '#f8fafc', 
                    padding: '8px', 
                    borderRadius: '14px', 
                    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' 
                  }}
                />
                <h3 style={{ fontSize: '2.3rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800, letterSpacing: '-0.02em' }}>
                  {current.title}
                </h3>
              </div>
              
              <div style={{ fontSize: '1.15rem', color: isDark ? '#38bdf8' : '#2563eb', fontWeight: 700, marginBottom: '1.25rem' }}>
                {current.tagline}
              </div>

              <p style={{ fontSize: '1.02rem', color: isDark ? '#cbd5e1' : '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {current.summary}
              </p>

              {/* Institutional Asset Profile Matrix Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
                gap: '0.75rem', 
                marginBottom: '1.75rem',
                background: isDark ? '#1e293b' : '#f8fafc',
                padding: '1.25rem',
                borderRadius: '16px',
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0'
              }}>
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: isDark ? '#94a3b8' : '#64748b', fontWeight: 700 }}>Recommended Horizon</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: isDark ? '#ffffff' : '#0f172a', marginTop: '0.2rem' }}>{meta.horizon}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: isDark ? '#94a3b8' : '#64748b', fontWeight: 700 }}>Risk Profile</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#10b981', marginTop: '0.2rem' }}>{meta.risk}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: isDark ? '#94a3b8' : '#64748b', fontWeight: 700 }}>Tax Treatment</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: isDark ? '#38bdf8' : '#2563eb', marginTop: '0.2rem' }}>{meta.tax}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: isDark ? '#94a3b8' : '#64748b', fontWeight: 700 }}>Custody & Settlement</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f59e0b', marginTop: '0.2rem' }}>{meta.settlement}</div>
                </div>
              </div>

              {/* Subcategories Chips */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: isDark ? '#94a3b8' : '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.65rem' }}>
                  Available Specialized Sub-Categories:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {current.subcategories.map((sub, idx) => (
                    <span 
                      key={idx}
                      style={{ 
                        background: isDark ? 'rgba(56, 189, 248, 0.12)' : '#eff6ff', 
                        color: isDark ? '#38bdf8' : '#1e40af', 
                        padding: '0.45rem 0.95rem', 
                        borderRadius: '10px', 
                        fontSize: '0.82rem', 
                        fontWeight: 600, 
                        border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #dbeafe' 
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
                  style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
                >
                  <span>Build Portfolio in {current.title}</span>
                  <ArrowRight size={17} />
                </button>

                <button 
                  onClick={() => onNavigate('calculators')}
                  className="btn-secondary"
                  style={{ 
                    padding: '0.85rem 1.8rem', 
                    fontSize: '0.95rem',
                    background: isDark ? '#1e293b' : '#ffffff', 
                    color: isDark ? '#ffffff' : 'var(--primary-700)', 
                    borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'var(--primary-200)' 
                  }}
                >
                  <span>Simulate Goal Projections</span>
                </button>
              </div>
            </div>

            {/* Right Column: Key Benefits & Highlights Box */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'space-between' }}>
              
              {/* Highlight Callout */}
              <div style={{ 
                background: isDark ? 'rgba(16, 185, 129, 0.12)' : '#f0fdf4', 
                border: isDark ? '1.5px solid rgba(16, 185, 129, 0.35)' : '1.5px solid #86efac', 
                padding: '1.5rem 1.75rem', 
                borderRadius: '20px' 
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: isDark ? '#34d399' : '#15803d', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                  Institutional Competitive Advantage
                </div>
                <div style={{ fontSize: '1.12rem', fontWeight: 800, color: isDark ? '#a7f3d0' : '#166534', lineHeight: 1.5 }}>
                  {current.highlight}
                </div>
              </div>

              {/* Detailed Feature List */}
              <div style={{ 
                background: isDark ? '#1e293b' : '#f8fafc', 
                padding: '2rem', 
                borderRadius: '22px', 
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0' 
              }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: isDark ? '#ffffff' : '#0f172a', marginBottom: '1.25rem' }}>
                  Why Allocate via Assure Securities?
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {current.details.map((detail, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div style={{ background: isDark ? 'rgba(56, 189, 248, 0.2)' : '#eff6ff', padding: '0.25rem', borderRadius: '50%', marginTop: '2px', flexShrink: 0 }}>
                        <CheckCircle2 size={16} color="#38bdf8" />
                      </div>
                      <span style={{ fontSize: '0.92rem', color: isDark ? '#cbd5e1' : '#334155', lineHeight: 1.6 }}>
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
                padding: '1.15rem 1.5rem', 
                background: isDark ? '#141e33' : '#ffffff', 
                borderRadius: '16px', 
                border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #e2e8f0' 
              }}>
                <div style={{ fontSize: '0.88rem', color: isDark ? '#cbd5e1' : '#64748b' }}>
                  Need a bespoke allocation blueprint?
                </div>
                <button 
                  onClick={() => onOpenModal('consultation')}
                  style={{ color: '#38bdf8', fontWeight: 800, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  Speak to Wealth Advisor &rarr;
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
