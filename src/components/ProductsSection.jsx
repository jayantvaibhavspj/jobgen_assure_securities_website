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

const PRODUCT_IMAGES = {
  'mutual-funds': '/assets/child.jpg',
  'fixed-deposits': '/assets/b1-2.jpg',
  'bonds': '/assets/hero-city-poster.jpg',
  'life-insurance': '/assets/b2-1.jpg',
  'general-insurance': '/assets/img_se.png',
  'tax-saving': '/assets/b4-2.jpg',
  'pms-aif': '/assets/why-assure-advisory.jpg'
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
            gap: '1.75rem',
            marginBottom: selectedProduct ? '2.5rem' : '0'
          }}
        >
          {PRODUCTS_DATA.map((prod, index) => {
            const isSelected = selectedProduct === prod.id;
            const Icon = PRODUCT_ICONS[prod.id] || TrendingUp;
            const cardImg = PRODUCT_IMAGES[prod.id] || '/assets/b1-2.jpg';

            return (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(isSelected ? null : prod.id)}
                className={`fintech-card solution-card interactive-glow-card reveal-on-scroll stagger-${(index % 4) + 1}`}
                style={{
                  cursor: 'pointer',
                  borderColor: isSelected ? 'var(--color-accent)' : 'var(--color-border)',
                  background: '#ffffff',
                  boxShadow: isSelected ? '0 16px 36px rgba(22, 185, 129, 0.16)' : 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 0,
                  overflow: 'hidden',
                  borderRadius: '20px',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  transition: 'all 300ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Visual Header Image Banner */}
                <div 
                  style={{
                    position: 'relative',
                    height: '140px',
                    overflow: 'hidden',
                    background: '#071A2F'
                  }}
                >
                  <img 
                    src={cardImg} 
                    alt={prod.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.85,
                      transition: 'transform 0.5s ease',
                      transform: isSelected ? 'scale(1.08)' : 'scale(1.0)'
                    }}
                    className="solution-card-img"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  {/* Subtle Gradient Scrim */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(7, 26, 47, 0.9) 0%, rgba(7, 26, 47, 0.3) 60%, rgba(7, 26, 47, 0.5) 100%)'
                    }} 
                  />

                  {/* Category Pill on top right */}
                  <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 2 }}>
                    <span 
                      style={{ 
                        fontSize: '0.68rem', 
                        fontWeight: 700, 
                        color: '#ffffff', 
                        background: 'rgba(7, 26, 47, 0.75)', 
                        backdropFilter: 'blur(8px)',
                        padding: '0.22rem 0.6rem', 
                        borderRadius: '6px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {prod.subcategories ? prod.subcategories[0] : 'Wealth Solution'}
                    </span>
                  </div>

                  {/* Overlapping Icon at bottom left */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '16px',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.65rem'
                    }}
                  >
                    <div 
                      style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '10px', 
                        background: '#ffffff', 
                        boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        color: 'var(--color-primary)'
                      }}
                      className="card-icon-wrap"
                    >
                      <Icon size={20} strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Card Text & Information */}
                <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    {/* Title */}
                    <h3 
                      style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: 700, 
                        color: 'var(--color-primary)', 
                        letterSpacing: '-0.02em', 
                        marginBottom: '0.5rem' 
                      }}
                    >
                      {prod.title}
                    </h3>

                    {/* Short Description */}
                    <p 
                      style={{ 
                        fontSize: '0.88rem', 
                        color: 'var(--color-text-secondary)', 
                        lineHeight: 1.55, 
                        margin: 0,
                        marginBottom: '1.25rem' 
                      }}
                    >
                      {prod.summary}
                    </p>
                  </div>

                  {/* Bottom CTA Action (Section 10 & 21) */}
                  <div 
                    style={{ 
                      borderTop: '1px solid var(--color-border)', 
                      paddingTop: '0.85rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: isSelected ? 'var(--color-accent)' : 'var(--color-primary)',
                      transition: 'color 0.2s ease'
                    }}
                    className="card-action-row"
                  >
                    <span>{isSelected ? "Close Blueprint ✕" : "Explore Solution"}</span>
                    <div className="arrow-container">
                      <ArrowRight size={16} strokeWidth={2} />
                    </div>
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
