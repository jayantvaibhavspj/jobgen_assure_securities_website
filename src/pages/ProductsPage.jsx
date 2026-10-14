import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Sparkles, ChevronRight, ShieldCheck, 
  HelpCircle, Phone, ArrowUpRight 
} from 'lucide-react';
import { PRODUCTS_DATA, COMPANY_INFO } from '../data/websiteData';

const PRODUCT_ICONS = {
  'mutual-funds': '/assets/mutual.png',
  'fixed-deposits': '/assets/vault.png',
  'bonds': '/assets/bank.png',
  'life-insurance': '/assets/insuranse.png',
  'general-insurance': '/assets/insuranse.png',
  'tax-saving': '/assets/tax-calculate.png',
  'pms-aif': '/assets/data-analytics.png'
};

export function ProductsPage({ onOpenModal, defaultProduct }) {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(defaultProduct || productId || PRODUCTS_DATA[0].id);

  useEffect(() => {
    if (productId) {
      setSelectedProduct(productId);
    } else if (defaultProduct) {
      setSelectedProduct(defaultProduct);
    }
  }, [productId, defaultProduct]);

  const current = PRODUCTS_DATA.find(p => p.id === selectedProduct) || PRODUCTS_DATA[0];

  return (
    <div>
      
      {/* Section 1: Page Header Banner (Dark) */}
      <section className="section-dark-navy" style={{ padding: '4.5rem 0 3.5rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#38bdf8', fontWeight: 600 }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Our Products</span>
            <span>/</span>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>{current.title}</span>
          </div>

          <div className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
            What We Do • Financial Solutions
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
            Our Products: <span className="gradient-text">{current.title}</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6 }}>
            At Assure Securities, our core aim is to serve our clients with dedication and integrity, meet their expectations, and build enduring relationships across our 7 wealth distribution suites.
          </p>
        </div>
      </section>

      {/* Section 2: Active Product Detailed Showcase (Light) */}
      <section className="section-wrapper" style={{ background: '#ffffff', padding: '4.5rem 0' }}>
        <div className="container">
          
          {/* Top Product Tabs with Authentic Icons */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            overflowX: 'auto',
            paddingBottom: '0.85rem',
            marginBottom: '3rem',
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
                    padding: '0.8rem 1.4rem',
                    borderRadius: '16px',
                    whiteSpace: 'nowrap',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    transition: 'all 0.25s ease',
                    background: isActive ? 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)' : '#f8fafc',
                    color: isActive ? '#ffffff' : '#334155',
                    border: isActive ? '1px solid #1d4ed8' : '1px solid #e2e8f0',
                    boxShadow: isActive ? '0 10px 20px -5px rgba(37,99,235,0.35)' : 'none',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    background: isActive ? '#ffffff' : '#ffffff',
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
          <div className="glass-card" style={{ padding: '3rem', background: '#f8fafc', borderRadius: '28px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="product-showcase-grid">
              
              {/* Left Column: Product Information */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span className="badge-tag accent-emerald" style={{ margin: 0 }}>
                    <Sparkles size={13} />
                    <span>Institutional Asset Class</span>
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#64748b' }}>Assure Curated</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <img 
                    src={PRODUCT_ICONS[current.id] || '/assets/mutual.png'} 
                    alt={current.title} 
                    style={{ width: '56px', height: '56px', objectFit: 'contain', background: '#ffffff', padding: '8px', borderRadius: '14px', border: '1px solid #e2e8f0' }}
                  />
                  <div>
                    <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: 800, margin: 0 }}>
                      {current.title}
                    </h2>
                  </div>
                </div>
                
                <div style={{ fontSize: '1.2rem', color: '#2563eb', fontWeight: 600, margin: '0.75rem 0 1.25rem 0' }}>
                  {current.tagline}
                </div>

                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                  {current.summary}
                </p>

                {/* Subcategories Chips */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>
                    Available Schemes & Variations:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {current.subcategories.map((sub, idx) => (
                      <span 
                        key={idx}
                        style={{ background: '#ffffff', color: '#1e40af', padding: '0.45rem 0.95rem', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid #dbeafe' }}
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
                    style={{ padding: '0.85rem 1.8rem' }}
                  >
                    <span>Invest in {current.title}</span>
                    <ArrowRight size={16} />
                  </button>

                  <Link 
                    to="/calculators"
                    className="btn-secondary"
                    style={{ padding: '0.85rem 1.8rem' }}
                  >
                    <span>Open Goal Calculators</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Benefits & What We Do Illustration */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Highlight Callout */}
                <div style={{ background: '#f0fdf4', border: '1.5px solid #86efac', padding: '1.25rem 1.5rem', borderRadius: '18px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#15803d', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.3rem' }}>
                    Key Value Advantage
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#166534' }}>
                    {current.highlight}
                  </div>
                </div>

                {/* Detailed Feature List */}
                <div style={{ background: '#ffffff', padding: '1.75rem', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e293b', marginBottom: '1rem' }}>
                    Why Choose via Assure Securities?
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {current.details.map((detail, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <div style={{ background: '#eff6ff', padding: '0.2rem', borderRadius: '50%', marginTop: '2px' }}>
                          <CheckCircle2 size={16} color="#2563eb" />
                        </div>
                        <span style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.5 }}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Original Illustration Card */}
                <div style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img 
                    src="/assets/3_what_we_do.png" 
                    alt="What We Do Illustration" 
                    style={{ width: '80px', height: '80px', objectFit: 'contain' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>Need Guidance on {current.title}?</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.35rem' }}>Speak directly with our Lucknow advisory desk.</div>
                    <button onClick={() => onOpenModal('consultation')} style={{ color: '#2563eb', fontWeight: 700, fontSize: '0.85rem', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                      Request Callback &rarr;
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Section 3: All 7 Wealth Solutions Interactive Grid (Dark) */}
      <section className="section-dark-navy" style={{ padding: '5rem 0', background: '#0b1120', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
              Full Investment Portfolio
            </span>
            <h2 className="section-heading" style={{ color: '#ffffff' }}>
              Explore All 7 <span className="gradient-text">Wealth Solutions</span>
            </h2>
            <p className="section-subheading" style={{ color: '#cbd5e1' }}>
              Select any solution below to inspect full product parameters, tax treatments, and eligibility.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {PRODUCTS_DATA.map((p) => {
              const isSelected = p.id === selectedProduct;
              return (
                <div 
                  key={p.id}
                  onClick={() => setSelectedProduct(p.id)}
                  className="glass-card"
                  style={{
                    background: isSelected ? 'rgba(37,99,235,0.25)' : 'rgba(30, 41, 59, 0.75)',
                    border: isSelected ? '1.5px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    padding: '1.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ background: isSelected ? '#ffffff' : 'rgba(255,255,255,0.08)', padding: '0.6rem', borderRadius: '12px' }}>
                      <img 
                        src={PRODUCT_ICONS[p.id] || '/assets/mutual.png'} 
                        alt={p.title} 
                        style={{ width: '36px', height: '36px', objectFit: 'contain' }}
                      />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.15rem', color: '#ffffff', fontWeight: 700, margin: 0 }}>{p.title}</h4>
                      <span style={{ fontSize: '0.78rem', color: isSelected ? '#38bdf8' : '#94a3b8' }}>
                        {isSelected ? 'Currently Viewing' : 'Click to View'}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#cbd5e1', margin: 0, lineHeight: 1.5 }}>
                    {p.tagline}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Advisory Support & Direct Consultation (Light) */}
      <section className="section-wrapper" style={{ background: '#f8fafc', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ 
            background: '#ffffff', 
            borderRadius: '24px', 
            padding: '3rem', 
            border: '1px solid #e2e8f0', 
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div>
              <span className="badge-tag accent-emerald">Certified AMFI Advisory Desk</span>
              <h3 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: 800, marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                Need Assistance Selecting the Right Fund?
              </h3>
              <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '600px', margin: 0, lineHeight: 1.6 }}>
                Our Lucknow certified advisors evaluate your financial milestones, tax liabilities, and risk tolerance to build a custom-crafted portfolio.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenModal('consultation')}
                className="btn-primary"
                style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
              >
                <span>Request Portfolio Callback</span>
                <ArrowRight size={16} />
              </button>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Assure%20Securities,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(current.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald"
                style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .product-showcase-grid { grid-template-columns: 1.15fr 0.85fr !important; }
        }
      `}</style>
    </div>
  );
}
