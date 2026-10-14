import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Sparkles, ChevronRight, 
  TrendingUp, ShieldCheck, Landmark, HeartPulse, 
  ShieldAlert, Receipt, Briefcase, ArrowUpRight
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

export function ProductsSection({ onOpenModal, onNavigate }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const active = PRODUCTS_DATA.find(p => p.id === selectedProduct);

  return (
    <section 
      id="solutions" 
      style={{ 
        background: 'var(--color-bg)', 
        padding: '6.5rem 0',
        borderBottom: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.75rem auto' }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: 'rgba(22, 185, 129, 0.1)', 
              color: 'var(--color-accent)', 
              border: '1px solid rgba(22, 185, 129, 0.25)', 
              padding: '0.35rem 0.95rem', 
              borderRadius: '100px', 
              fontSize: '0.78rem', 
              fontWeight: 800, 
              letterSpacing: '0.04em', 
              textTransform: 'uppercase', 
              marginBottom: '1rem' 
            }}
          >
            <Sparkles size={13} color="var(--color-accent)" />
            <span>Comprehensive Product Suite</span>
          </div>

          <h2 
            style={{ 
              fontSize: '2.6rem', 
              fontWeight: 800, 
              color: 'var(--color-primary)', 
              letterSpacing: '-0.02em', 
              marginBottom: '1rem',
              lineHeight: 1.2
            }}
          >
            Everything You Need to <span style={{ color: 'var(--color-accent)' }}>Build Your Wealth</span>
          </h2>

          <p style={{ fontSize: '1.08rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Explore investment and financial solutions designed around your goals.
          </p>
        </div>

        {/* 2 to 4 Column Responsive Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '1.5rem',
            marginBottom: selectedProduct ? '2.5rem' : '0'
          }}
        >
          {PRODUCTS_DATA.map((prod) => {
            const isSelected = selectedProduct === prod.id;
            const iconImg = PRODUCT_ICONS[prod.id] || '/assets/mutual.png';

            return (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(isSelected ? null : prod.id)}
                className="fintech-card"
                style={{
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--color-accent)' : 'var(--color-border)',
                  background: isSelected ? '#ffffff' : '#ffffff',
                  boxShadow: isSelected ? '0 12px 32px rgba(22, 185, 129, 0.15)' : 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2.25rem'
                }}
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div 
                      style={{ 
                        width: '52px', 
                        height: '52px', 
                        borderRadius: '14px', 
                        background: 'var(--color-bg)', 
                        border: '1px solid var(--color-border)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        padding: '10px'
                      }}
                    >
                      <img 
                        src={iconImg} 
                        alt={prod.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>

                    <span 
                      style={{ 
                        fontSize: '0.72rem', 
                        fontWeight: 800, 
                        color: 'var(--color-primary)', 
                        background: 'var(--color-bg)', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '6px',
                        border: '1px solid var(--color-border)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {prod.id.replace('-', ' ')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.65rem', letterSpacing: '-0.01em' }}>
                    {prod.title}
                  </h3>

                  {/* Short Description */}
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {prod.summary.slice(0, 125)}...
                  </p>
                </div>

                {/* Bottom Action: Arrow interaction */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--color-border)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: isSelected ? 'var(--color-accent)' : 'var(--color-primary)'
                  }}
                >
                  <span>{isSelected ? "Hide Details" : "Explore Solution"}</span>
                  <ArrowRight size={17} style={{ transform: isSelected ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>

              </div>
            );
          })}
        </div>

        {/* Selected Product Interactive Overview Drawer */}
        {active && (
          <div 
            style={{ 
              background: '#ffffff', 
              borderRadius: '24px', 
              border: '1.5px solid var(--color-accent)', 
              boxShadow: '0 20px 50px rgba(7, 26, 47, 0.08)',
              padding: '3rem',
              animation: 'fadeIn 0.25s ease'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Solution Blueprint
                </span>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-primary)', marginTop: '0.2rem' }}>
                  {active.title}
                </h3>
                <div style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', fontWeight: 600, marginTop: '0.25rem' }}>
                  {active.tagline}
                </div>
              </div>

              <button 
                onClick={() => setSelectedProduct(null)}
                style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-secondary)', padding: '0.4rem 0.85rem', borderRadius: '8px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', cursor: 'pointer' }}
              >
                ✕ Close Preview
              </button>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: '840px', marginBottom: '2rem' }}>
              {active.summary}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ background: 'var(--color-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                  Key Advantages & Coverage
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {active.details.map((detail, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 size={16} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text)', lineHeight: 1.5 }}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'var(--color-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                    Available Sub-Categories
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                    {active.subcategories.map((sub, idx) => (
                      <span key={idx} style={{ background: '#ffffff', border: '1px solid var(--color-border)', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                        {sub}
                      </span>
                    ))}
                  </div>

                  <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '0.85rem 1rem', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#047857', textTransform: 'uppercase' }}>Fiduciary Highlight</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#065f46', marginTop: '2px' }}>{active.highlight}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => onOpenModal('consultation')}
                    className="btn-primary-emerald"
                    style={{ minHeight: '46px', padding: '0 1.5rem', fontSize: '0.9rem' }}
                  >
                    <span>Invest in {active.title}</span>
                    <ArrowRight size={15} />
                  </button>
                  <button 
                    onClick={() => onNavigate(`products/${active.id}`)}
                    className="btn-outline-navy"
                    style={{ minHeight: '46px', padding: '0 1.5rem', fontSize: '0.9rem' }}
                  >
                    <span>Full Product Guide</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
