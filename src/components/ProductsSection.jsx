import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, 
  TrendingUp, ShieldCheck, Landmark, HeartPulse, 
  ShieldAlert, Receipt, Briefcase, CheckCircle2 
} from 'lucide-react';

const SOLUTIONS_DATA = [
  {
    id: "mutual-funds",
    num: "01",
    title: "Mutual Funds",
    category: "CAPITAL GROWTH",
    tagline: "Professionally managed wealth creation for every goal",
    summary: "Diversified portfolio of equities, debt, and liquid instruments managed by SEBI-regulated fund managers with systematic rupee-cost averaging and long-term compounding.",
    image: "/assets/goal-wealth-creation.jpg",
    icon: TrendingUp,
    accentColor: "#10b981",
    tags: ["SIP from ₹500", "Equity & Debt", "SEBI Regulated", "High Liquidity"],
    highlight: "Disciplined compounding across multi-cap equity & dynamic debt"
  },
  {
    id: "fixed-deposits",
    num: "02",
    title: "Corporate Fixed Deposits",
    category: "GUARANTEED YIELDS",
    tagline: "Assured safety with higher returns than conventional bank FDs",
    summary: "Pre-determined fixed returns in CRISIL/ICRA AAA & AA+ rated corporate issuers with regular monthly, quarterly or cumulative payout options for predictable cash flow.",
    image: "/assets/principle-trust.jpg",
    icon: ShieldCheck,
    accentColor: "#38bdf8",
    tags: ["Up to 1.5-2.5% Higher", "CRISIL/ICRA AAA", "Senior Citizen +0.5%", "Zero Volatility"],
    highlight: "Zero market volatility with guaranteed periodic interest credits"
  },
  {
    id: "bonds",
    num: "03",
    title: "Bonds & Government Securities",
    category: "SOVEREIGN SAFETY",
    tagline: "Capital preservation with predictable sovereign & corporate yields",
    summary: "Sovereign Gold Bonds (SGB), 54EC Capital Gain Tax exemption bonds, and RBI floating rate savings bonds for institutional-grade capital safety and predictable yields.",
    image: "/assets/bonds_advisory_broll.jpg",
    icon: Landmark,
    accentColor: "#f59e0b",
    tags: ["Sovereign Gold Bonds", "54EC Tax Exemption", "RBI Floating Rate", "Predictable Yields"],
    highlight: "100% sovereign security & long-term capital gains tax exemptions"
  },
  {
    id: "life-insurance",
    num: "04",
    title: "Life Insurance",
    category: "FAMILY SHIELD",
    tagline: "Comprehensive protection for your family's financial dignity",
    summary: "High-cover pure term plans and guaranteed wealth accumulation structures to insulate your family and dependents against unexpected life adversities.",
    image: "/assets/goal-child-education.jpg",
    icon: HeartPulse,
    accentColor: "#ec4899",
    tags: ["Pure Term ₹1Cr-₹5Cr", "Cover to Age 85", "Section 80C & 10(10D)", "Critical Illness Riders"],
    highlight: "Generational financial insulation with dedicated claims advocacy"
  },
  {
    id: "general-insurance",
    num: "05",
    title: "General & Health Insurance",
    category: "HEALTH PROTECTION",
    tagline: "Shield your savings from rising healthcare costs and unforeseen damages",
    summary: "Family floater and super top-up medical covers across 10,000+ cashless hospitals nationwide to safeguard your accumulated wealth from spiraling medical inflation.",
    image: "/assets/principle-transparency.jpg",
    icon: ShieldAlert,
    accentColor: "#6366f1",
    tags: ["10,000+ Cashless Network", "Family Floater", "Super Top-up to ₹1Cr", "Section 80D Deductions"],
    highlight: "Comprehensive cashless coverage protecting your core savings"
  },
  {
    id: "tax-saving",
    num: "06",
    title: "Tax Saving Solutions",
    category: "WEALTH OPTIMIZATION",
    tagline: "Optimize deductions legally and maximize your take-home income",
    summary: "Strategic tax planning across ELSS mutual funds (shortest 3-year lock-in), National Pension System (NPS), and capital gains tax optimization frameworks.",
    image: "/assets/principle-expertise.jpg",
    icon: Receipt,
    accentColor: "#14b8a6",
    tags: ["ELSS 3-Yr Lock-in", "NPS ₹50,000 Extra 80CCD", "Section 80C & 80D", "Max Take-Home Pay"],
    highlight: "Dual advantage of equity growth potential and maximum tax relief"
  },
  {
    id: "pms-aif",
    num: "07",
    title: "PMS & AIF for HNIs",
    category: "PRIVATE WEALTH",
    tagline: "Bespoke wealth management and sophisticated alternative strategies",
    summary: "Concentrated high-conviction equity portfolios and alternative investment funds (AIF) for High Net-Worth Individuals seeking differentiated strategies and alpha.",
    image: "/assets/boardroom-luxury-bg.jpg",
    icon: Briefcase,
    accentColor: "#eab308",
    tags: ["Direct Demat Ownership", "Top Tier Fund Managers", "Private Equity & Debt", "Dedicated Advisory Desk"],
    highlight: "Institutional alpha generation & bespoke family office governance"
  }
];

export function ProductsSection({ onOpenModal, onNavigate, theme = 'dark' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSolution = SOLUTIONS_DATA[activeIndex];

  // Guaranteed continuous auto-play: advances every 4.5 seconds automatically ("khud pe khud chalega")
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SOLUTIONS_DATA.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [activeIndex]);

  // 3 upcoming cards: active card is excluded!
  // Leftmost card (offset 1) is the immediate next preview card
  const upcomingCards = [1, 2, 3].map((offset) => {
    const origIdx = (activeIndex + offset) % SOLUTIONS_DATA.length;
    return {
      ...SOLUTIONS_DATA[origIdx],
      originalIndex: origIdx,
      isNextPreview: offset === 1
    };
  });

  const handleSelectCard = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SOLUTIONS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SOLUTIONS_DATA.length);
  };

  return (
    <section 
      id="solutions" 
      className="solutions-section section-theme-dark" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        background: '#05070c',
        padding: 'clamp(5rem, 8vw, 7.5rem) 0'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Editorial Header */}
        <div style={{ marginBottom: '3.25rem' }}>
          <div 
            className="eyebrow-label"
            style={{ 
              marginBottom: '1.25rem',
              color: '#10b981',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              letterSpacing: '0.12em',
              fontWeight: 600,
              fontSize: '0.82rem'
            }}
          >
            <span>02 — SOLUTIONS SUITE</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', 
                lineHeight: 1.12, 
                color: '#ffffff',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                maxWidth: '680px'
              }}
            >
              <span style={{ color: '#60a5fa' }}>Investment solutions</span>,
              <br />
              <span style={{ color: '#f87171', fontStyle: 'italic' }}>
                designed around you.
              </span>
            </h2>

            <p style={{ maxWidth: '440px', fontSize: '0.98rem', color: '#94a3b8', lineHeight: 1.7 }}>
              Institutional asset management and financial planning tailored to your family's distinct timeline, liquidity requirements, and wealth preservation goals.
            </p>
          </div>
        </div>

        {/* ==========================================================================
            Timed Cards Opening Showcase Stage (Inspired by Giulio Cuscito)
            ========================================================================== */}
        <div className="timed-cards-stage">
          {/* Dynamic Crossfading Background Image of Active Solution - Rich & Clearly Visible */}
          {SOLUTIONS_DATA.map((sol, idx) => (
            <div 
              key={sol.id}
              className="timed-cards-bg"
              style={{
                backgroundImage: `url(${sol.image})`,
                opacity: idx === activeIndex ? 0.85 : 0,
                filter: 'contrast(1.12) saturate(1.12)'
              }}
            />
          ))}

          {/* Luxury Gradient Scrim: Readable Text on Left, Vibrant Photo on Right */}
          <div className="timed-cards-gradient" />

          {/* Subtle Ambient Radial Highlight */}
          <div 
            style={{
              position: 'absolute',
              top: '-10%',
              right: '25%',
              width: '500px',
              height: '500px',
              background: `radial-gradient(circle, ${activeSolution.accentColor}18 0%, transparent 70%)`,
              pointerEvents: 'none',
              filter: 'blur(50px)',
              transition: 'background 0.5s ease'
            }}
          />

          {/* Main Two-Column Stage Grid */}
          <div className="timed-cards-grid">
            
            {/* Left Column: Active Solution In-Depth Showcase */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', zIndex: 3 }}>
              
              {/* Category & Step Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: activeSolution.accentColor,
                    textTransform: 'uppercase',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem'
                  }}
                >
                  <span style={{ width: '18px', height: '2px', background: activeSolution.accentColor }} />
                  {activeSolution.num} / 07 • {activeSolution.category}
                </span>

                <div 
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    fontSize: '0.72rem',
                    color: '#e2e8f0',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  ACTIVE SOLUTION
                </div>
              </div>

              {/* Title */}
              <h3 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 3.4vw, 3rem)',
                  fontWeight: 400,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 14px rgba(0, 0, 0, 0.9)'
                }}
              >
                {activeSolution.title}
              </h3>

              {/* Tagline */}
              <div 
                style={{
                  fontSize: '1.08rem',
                  fontWeight: 500,
                  color: '#38bdf8',
                  lineHeight: 1.5,
                  textShadow: '0 1px 8px rgba(0, 0, 0, 0.8)'
                }}
              >
                {activeSolution.tagline}
              </div>

              {/* Summary */}
              <p 
                style={{
                  fontSize: '0.96rem',
                  color: '#cbd5e1',
                  lineHeight: 1.7,
                  maxWidth: '540px',
                  textShadow: '0 1px 6px rgba(0, 0, 0, 0.9)'
                }}
              >
                {activeSolution.summary}
              </p>

              {/* Feature Tags Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.25rem' }}>
                {activeSolution.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    style={{
                      padding: '0.35rem 0.85rem',
                      background: 'rgba(15, 23, 42, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '9999px',
                      fontSize: '0.76rem',
                      color: '#f1f5f9',
                      fontFamily: 'var(--font-mono)',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlight Banner */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(16, 185, 129, 0.08)',
                  borderLeft: `3px solid ${activeSolution.accentColor}`,
                  borderTop: '1px solid rgba(16, 185, 129, 0.18)',
                  borderRight: '1px solid rgba(16, 185, 129, 0.18)',
                  borderBottom: '1px solid rgba(16, 185, 129, 0.18)',
                  borderRadius: '6px',
                  maxWidth: '540px',
                  marginTop: '0.25rem'
                }}
              >
                <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.84rem', color: '#e2e8f0', fontWeight: 500 }}>
                  {activeSolution.highlight}
                </span>
              </div>

              {/* Action Buttons with Rounded Pill Corners */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                <button 
                  onClick={() => onOpenModal ? onOpenModal('contact-consult') : onNavigate(`products/${activeSolution.id}`)}
                  className="btn-gold"
                  style={{
                    borderRadius: '9999px',
                    padding: '0 1.85rem',
                    height: '46px',
                    fontSize: '0.84rem'
                  }}
                >
                  <span>Consult Advisory Desk</span>
                  <ArrowRight size={14} />
                </button>

                <button 
                  onClick={() => onNavigate ? onNavigate(`products/${activeSolution.id}`) : (window.location.href = `/products/${activeSolution.id}`)}
                  className="btn-outline"
                  style={{
                    borderRadius: '9999px',
                    padding: '0 1.65rem',
                    height: '46px',
                    fontSize: '0.84rem',
                    background: 'rgba(15, 23, 42, 0.65)',
                    backdropFilter: 'blur(10px)',
                    borderColor: 'rgba(255, 255, 255, 0.22)',
                    color: '#ffffff'
                  }}
                >
                  <span>Full Details</span>
                  <ArrowUpRight size={14} opacity={0.8} />
                </button>
              </div>

            </div>

            {/* Right Column: Cards Deck anchored to bottom corner with Prev & Next buttons on Left & Right */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.65rem', 
                width: '100%', 
                alignSelf: 'flex-end',
                position: 'relative',
                zIndex: 4,
                padding: '0.5rem 0'
              }}
            >
              {/* Previous Button - on Left of Cards */}
              <button 
                onClick={handlePrev}
                className="timed-nav-btn"
                title="Previous Solution"
                aria-label="Previous Solution"
                style={{ flexShrink: 0, zIndex: 10 }}
              >
                <ChevronLeft size={22} />
              </button>

              {/* Cards Deck in the Center: Exactly 3 full cards */}
              <div 
                className="timed-cards-deck"
                style={{ flex: 1, minWidth: 0 }}
              >
                {upcomingCards.map((sol) => {
                  const CardIcon = sol.icon;
                  const isPreview = sol.isNextPreview;

                  return (
                    <div 
                      key={sol.id}
                      onClick={() => handleSelectCard(sol.originalIndex)}
                      className={`timed-card-item ${isPreview ? 'preview-glow' : ''}`}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${sol.title}`}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelectCard(sol.originalIndex); }}
                    >
                      {/* Card Background Image */}
                      <img 
                        src={sol.image} 
                        alt={sol.title} 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease'
                        }}
                      />

                      {/* Card Scrim Overlay - Crisp Image Visibility */}
                      <div 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: isPreview 
                            ? 'linear-gradient(to top, rgba(7, 10, 16, 0.94) 0%, rgba(7, 10, 16, 0.20) 45%, rgba(7, 10, 16, 0.50) 100%)'
                            : 'linear-gradient(to top, rgba(7, 10, 16, 0.90) 0%, rgba(7, 10, 16, 0.28) 45%, rgba(7, 10, 16, 0.58) 100%)',
                          transition: 'background 0.3s ease'
                        }}
                      />

                      {/* Top Bar on Card: Number + Preview Badge or Icon */}
                      <div 
                        style={{
                          position: 'absolute',
                          top: '0.55rem',
                          left: '0.65rem',
                          right: '0.65rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          zIndex: 2
                        }}
                      >
                        <span 
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: isPreview ? '#10b981' : 'rgba(255, 255, 255, 0.75)',
                            background: 'rgba(9, 14, 22, 0.75)',
                            padding: '0.12rem 0.38rem',
                            borderRadius: '4px',
                            backdropFilter: 'blur(6px)',
                            border: isPreview ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {sol.num}
                        </span>

                        {isPreview ? (
                          <div 
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.25rem',
                              padding: '0.15rem 0.45rem',
                              borderRadius: '9999px',
                              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                              color: '#ffffff',
                              fontSize: '0.58rem',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 700,
                              letterSpacing: '0.06em',
                              boxShadow: '0 0 12px rgba(16, 185, 129, 0.75)'
                            }}
                          >
                            <span 
                              style={{ 
                                width: '4px', 
                                height: '4px', 
                                borderRadius: '50%', 
                                background: '#ffffff',
                                display: 'inline-block' 
                              }} 
                            />
                            NEXT
                          </div>
                        ) : (
                          <div 
                            style={{
                              width: '22px',
                              height: '22px',
                              borderRadius: '50%',
                              background: 'rgba(255, 255, 255, 0.12)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#ffffff'
                            }}
                          >
                            <CardIcon size={11} />
                          </div>
                        )}
                      </div>

                      {/* Bottom Content on Card: Category + Title */}
                      <div 
                        style={{
                          position: 'absolute',
                          bottom: '0.55rem',
                          left: '0.65rem',
                          right: '0.65rem',
                          zIndex: 2
                        }}
                      >
                        <div 
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.58rem',
                            letterSpacing: '0.06em',
                            color: isPreview ? '#34d399' : 'rgba(255, 255, 255, 0.65)',
                            textTransform: 'uppercase',
                            marginBottom: '0.15rem',
                            fontWeight: 600
                          }}
                        >
                          {sol.category}
                        </div>

                        <div 
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.86rem',
                            fontWeight: 600,
                            color: '#ffffff',
                            lineHeight: 1.2,
                            textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {sol.title}
                        </div>
                      </div>

                      {/* Glowing Top Accent Bar on Next Preview Card */}
                      {isPreview && (
                        <div 
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '3px',
                            background: 'linear-gradient(90deg, #10b981 0%, #34d399 50%, #10b981 100%)',
                            boxShadow: '0 0 12px #10b981',
                            zIndex: 3
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Next Button - on Right of Cards */}
              <button 
                onClick={handleNext}
                className="timed-nav-btn"
                title="Next Solution"
                aria-label="Next Solution"
                style={{ flexShrink: 0, zIndex: 10 }}
              >
                <ChevronRight size={22} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductsSection;
