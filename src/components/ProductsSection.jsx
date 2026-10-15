import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Sparkles, ChevronRight, 
  TrendingUp, ShieldCheck, Landmark, HeartPulse, 
  ShieldAlert, Receipt, Briefcase, ArrowUpRight
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/websiteData';

const PRODUCT_ICONS = {
  'mutual-funds': TrendingUp,
  'fixed-deposits': Landmark,
  'bonds': ShieldCheck,
  'life-insurance': HeartPulse,
  'general-insurance': ShieldAlert,
  'tax-saving': Receipt,
  'pms-aif': Briefcase
};

export function ProductsSection({ onOpenModal, onNavigate }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const active = PRODUCTS_DATA.find(p => p.id === selectedProduct);

  return (
    <section 
      id="solutions" 
      style={{ 
        background: 'var(--color-bg)', 
        padding: 'var(--section-pad-desktop) 0',
        borderBottom: '1px solid var(--color-border)'
      }}
      className="section-pad"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center reveal-on-scroll">
          <div className="eyebrow-pill emerald">
            <Sparkles size={13} />
            <span>Comprehensive Wealth Suite</span>
          </div>

          <h2>
            Everything You Need to <span style={{ color: 'var(--color-accent)' }}>Build Your Wealth</span>
          </h2>

          <p>
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
          {PRODUCTS_DATA.map((prod, index) => {
            const isSelected = selectedProduct === prod.id;
            const Icon = PRODUCT_ICONS[prod.id] || TrendingUp;

            return (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(isSelected ? null : prod.id)}
                className={`fintech-card solution-card interactive-glow-card reveal-on-scroll stagger-${(index % 4) + 1}`}
                style={{
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--color-accent)' : 'var(--color-border)',
                  background: '#ffffff',
                  boxShadow: isSelected ? '0 12px 28px rgba(22, 185, 129, 0.12)' : 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '2rem'
                }}
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div 
                      style={{ 
                        width: '46px', 
                        height: '46px', 
                        borderRadius: '12px', 
                        background: 'rgba(7, 26, 47, 0.04)', 
                        border: '1px solid var(--color-border)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'var(--color-primary)'
                      }}
                      className="card-icon-wrap"
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span 
                      style={{ 
                        fontSize: '0.72rem', 
                        fontWeight: 700, 
                        color: 'var(--color-primary)', 
                        background: 'var(--color-bg)', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '6px',
                        border: '1px solid var(--color-border)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {prod.subcategories ? prod.subcategories[0] : 'Wealth Solution'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    style={{ 
                      fontSize: '1.35rem', 
                      fontWeight: 700, 
                      color: 'var(--color-primary)', 
                      letterSpacing: '-0.02em', 
                      marginBottom: '0.65rem' 
                    }}
                  >
                    {prod.title}
                  </h3>

                  {/* Short Description */}
                  <p 
                    style={{ 
                      fontSize: '0.92rem', 
                      color: 'var(--color-text-secondary)', 
                      lineHeight: 1.6, 
                      margin: 0,
                      marginBottom: '1.5rem' 
                    }}
                  >
                    {prod.summary}
                  </p>
                </div>

                {/* Bottom CTA Action (Section 10 & 21) */}
                <div 
                  style={{ 
                    borderTop: '1px solid var(--color-border)', 
                    paddingTop: '1rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: isSelected ? 'var(--color-accent)' : 'var(--color-primary)',
                    transition: 'color 0.2s ease'
                  }}
                  className="card-action-row"
                >
                  <span>{isSelected ? "Close Blueprint" : "Explore Solution"}</span>
                  <div className="arrow-container">
                    <ArrowRight size={16} strokeWidth={2} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Product Blueprint Drawer */}
        {active && (
          <div 
            style={{ 
              background: '#ffffff', 
              borderRadius: '24px', 
              border: '1.5px solid var(--color-accent)', 
              padding: 'clamp(1.75rem, 4vw, 3rem)',
              boxShadow: '0 20px 45px -10px rgba(7, 26, 47, 0.12)',
              marginTop: '2rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Architecture & Allocation Blueprint
                </span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0.25rem 0' }}>
                  {active.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', margin: 0 }}>
                  {active.tagline}
                </p>
              </div>

              <button 
                onClick={() => setSelectedProduct(null)}
                style={{ 
                  background: 'var(--color-bg)', 
                  border: '1px solid var(--color-border)', 
                  padding: '0.4rem 0.9rem', 
                  borderRadius: '8px', 
                  fontSize: '0.82rem', 
                  fontWeight: 600, 
                  cursor: 'pointer',
                  color: 'var(--color-primary)' 
                }}
              >
                Close Blueprint ✕
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              {/* Left Column: Key Features */}
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '1rem' }}>
                  Core Investment Characteristics
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {active.details && active.details.map((detail, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={16} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Highlight & Advisory Notice */}
              <div style={{ background: 'var(--color-bg)', borderRadius: '16px', padding: '1.5rem', border: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase' }}>
                    Strategic Advantage
                  </span>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text)', fontWeight: 600, margin: '0.5rem 0 1rem 0' }}>
                    {active.highlight}
                  </p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Our advisors help evaluate scheme expense ratios, portfolio overlap, and tracking error before onboarding.
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => onOpenModal && onOpenModal('consultation')}
                    className="btn-primary-emerald"
                    style={{ fontSize: '0.9rem', height: '46px', padding: '0 1.25rem' }}
                  >
                    <span>Request Portfolio Advice →</span>
                  </button>

                  <button 
                    onClick={() => onNavigate && onNavigate(`products/${active.id}`)}
                    className="btn-outline-navy"
                    style={{ fontSize: '0.9rem', height: '46px', padding: '0 1.25rem' }}
                  >
                    <span>View All Schemes</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Card Micro-Interaction Styles (Section 10) */}
      <style>{`
        .solution-card {
          transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease;
        }
        .solution-card:hover {
          transform: translateY(-4px);
          border-color: #cbd5e1;
        }
        .solution-card:hover .arrow-container svg {
          transform: translateX(5px);
          color: var(--color-accent);
        }
        .solution-card:hover .card-icon-wrap {
          color: var(--color-accent);
          background-color: rgba(22, 185, 129, 0.08);
          border-color: rgba(22, 185, 129, 0.25);
        }
        .arrow-container svg {
          transition: transform 300ms ease, color 300ms ease;
        }
        .card-icon-wrap {
          transition: background-color 300ms ease, color 300ms ease, border-color 300ms ease;
        }
      `}</style>
    </section>
  );
}
