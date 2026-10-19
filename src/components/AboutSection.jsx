import React from 'react';
import { 
  ArrowRight, ShieldCheck, TrendingUp, CheckCircle2, 
  Building2, Sparkles, ArrowUpRight 
} from 'lucide-react';

export function AboutSection({ onOpenModal }) {
  return (
    <section 
      id="about" 
      className="about-editorial-section section-theme-light" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        background: '#FAF9F6',
        padding: 'clamp(5rem, 8vw, 7.5rem) 0'
      }}
    >
      {/* Behance-style Floating Ambient Soft Dots / Shapes */}
      <div 
        style={{
          position: 'absolute',
          top: '5%',
          left: '3%',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          background: 'rgba(249, 115, 22, 0.25)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '12%',
          left: '8%',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'rgba(249, 115, 22, 0.18)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '8%',
          right: '5%',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'rgba(16, 185, 129, 0.2)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '8%',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: 'rgba(56, 189, 248, 0.25)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '6%',
          left: '6%',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'rgba(249, 115, 22, 0.2)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* =========================================================================
            Main Split: Narrative & Story (Left) + 3D Financial Character Visual (Right)
            ========================================================================= */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', 
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
            marginBottom: '4.5rem'
          }}
        >
          {/* Left Column: Eyebrow + Bold 2-Tone Headline + Narrative + CTA Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Pill Eyebrow Badge */}
            <div>
              <span 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  color: '#059669',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em'
                }}
              >
                <Sparkles size={14} color="#059669" />
                01 — ABOUT OUR FIRM
              </span>
            </div>

            {/* Bold Behance-Style Two-Tone Headline */}
            <h2 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.15,
                letterSpacing: '-0.03em'
              }}
            >
              Your goals.{' '}
              <span style={{ color: '#059669' }}>Our expertise.</span>
              <br />
              A smarter{' '}
              <span style={{ color: '#ea580c' }}>financial journey.</span>
            </h2>

            {/* AMFI Reg Pill Badge */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.55rem 1.1rem',
                background: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                borderRadius: '9999px',
                boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)',
                width: 'fit-content'
              }}
            >
              <ShieldCheck size={16} color="#059669" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#334155', letterSpacing: '0.04em', fontWeight: 600 }}>
                AMFI REG. ARN-182137 • VALID TILL 19 JULY 2027
              </span>
            </div>

            {/* Narrative Paragraphs */}
            <p 
              style={{
                fontSize: '1.14rem',
                color: '#1e293b',
                lineHeight: 1.7,
                fontWeight: 500
              }}
            >
              Assure Securities is an AMFI-registered Mutual Fund Distributor dedicated to transforming 
              the way discerning individuals, business owners, and families navigate Indian and global capital markets.
            </p>

            <p 
              style={{
                fontSize: '1rem',
                color: '#64748b',
                lineHeight: 1.75
              }}
            >
              Headquartered in Lucknow and servicing clients nationwide, our fiduciary philosophy is rooted 
              in patience, asset-allocation discipline, and personalized strategy. We believe that enduring wealth 
              is never created through speculative trading or market timing—it is forged through structured compounding, 
              tax efficiency, and rigorous risk containment.
            </p>

            {/* Action Buttons: Behance style pill button + ghost outline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', paddingTop: '0.5rem' }}>
              <button 
                onClick={() => onOpenModal ? onOpenModal('contact-consult') : window.location.href = '/about-us'}
                style={{
                  borderRadius: '9999px',
                  padding: '0 2.2rem',
                  height: '48px',
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 10px 22px rgba(5, 150, 105, 0.32)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 14px 28px rgba(5, 150, 105, 0.42)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 22px rgba(5, 150, 105, 0.32)';
                }}
              >
                <span>Discover Our Heritage</span>
                <ArrowRight size={15} />
              </button>

              <a 
                href="/about-us" 
                style={{ 
                  borderRadius: '9999px',
                  padding: '0 1.85rem',
                  height: '48px',
                  background: '#ffffff',
                  color: '#0f172a',
                  border: '1.5px solid rgba(203, 213, 225, 0.8)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#059669';
                  e.currentTarget.style.color = '#059669';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(203, 213, 225, 0.8)';
                  e.currentTarget.style.color = '#0f172a';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Read Full Profile</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Wealth Illustration + Floating Stat Bubbles */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            {/* Main Rounded 3D Image Card */}
            <div 
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '520px',
                borderRadius: '32px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.12), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
                aspectRatio: '1 / 1'
              }}
            >
              <img 
                src="/assets/about-our-firm.png" 
                alt="Assure Securities Wealth Stewardship & Portfolio Analytics" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Floating Behance-Style Pill 1 (Top Left) */}
            <div 
              style={{
                position: 'absolute',
                top: '5%',
                left: '-4%',
                background: '#ffffff',
                padding: '0.75rem 1.15rem',
                borderRadius: '18px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 15px 35px -5px rgba(15, 23, 42, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                zIndex: 3,
                animation: 'floatSlow 4s ease-in-out infinite'
              }}
            >
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 6px 14px rgba(16, 185, 129, 0.35)'
                }}
              >
                <TrendingUp size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                  15+ Years
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>
                  Disciplined Stewardship
                </div>
              </div>
            </div>

            {/* Floating Behance-Style Pill 2 (Bottom Right) */}
            <div 
              style={{
                position: 'absolute',
                bottom: '5%',
                right: '-4%',
                background: '#ffffff',
                padding: '0.75rem 1.15rem',
                borderRadius: '18px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 15px 35px -5px rgba(15, 23, 42, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                zIndex: 3,
                animation: 'floatSlow 4.5s ease-in-out infinite 0.5s'
              }}
            >
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 6px 14px rgba(249, 115, 22, 0.35)'
                }}
              >
                <ShieldCheck size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2 }}>
                  Zero Custody Risk
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>
                  Direct AMC Settlement
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            Section Header & 4 Behance-Style Pillars Cards
            ========================================================================= */}
        <div style={{ marginTop: '2rem' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
            <h3 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem'
              }}
            >
              Built On Four <span style={{ color: '#059669' }}>Fiduciary Pillars</span>
            </h3>
            <p style={{ fontSize: '0.96rem', color: '#64748b', lineHeight: 1.6 }}>
              Institutional grade asset management principles protecting family capital across market cycles.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '1.5rem' 
            }}
          >
            {[
              {
                step: "01",
                icon: ShieldCheck,
                color: "#10b981",
                gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                title: "Direct AMC Routing",
                desc: "Zero custody risk. Your investments settle directly with SEBI-regulated AMCs and sovereign depositories."
              },
              {
                step: "02",
                icon: TrendingUp,
                color: "#38bdf8",
                gradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
                title: "Multi-Asset Architecture",
                desc: "Balanced diversification across Mutual Funds, AAA Corporate FDs, Sovereign Bonds & PMS/AIFs."
              },
              {
                step: "03",
                icon: CheckCircle2,
                color: "#f59e0b",
                gradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                title: "Independent Scrutiny",
                desc: "Rigorous quantitative fund manager track record, alpha consistency & downside capture analysis."
              },
              {
                step: "04",
                icon: Building2,
                color: "#ec4899",
                gradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)",
                title: "Lifelong Partnership",
                desc: "Structured annual reviews, portfolio rebalancing triggers & multi-generational succession guidance."
              }
            ].map((item, idx) => {
              const PillarIcon = item.icon;

              return (
                <div 
                  key={idx}
                  style={{
                    background: '#ffffff',
                    borderRadius: '24px',
                    padding: '2rem 1.6rem',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.05)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(15, 23, 42, 0.12)';
                    e.currentTarget.style.borderColor = item.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(15, 23, 42, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
                  }}
                >
                  <div>
                    {/* Top row: Colorful square icon badge + Step number */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <div 
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '16px',
                          background: item.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          boxShadow: `0 8px 18px ${item.color}45`
                        }}
                      >
                        <PillarIcon size={22} />
                      </div>

                      <span 
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                          fontWeight: 800,
                          color: '#94a3b8'
                        }}
                      >
                        {item.step}
                      </span>
                    </div>

                    <h4 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '0.65rem',
                        lineHeight: 1.3
                      }}
                    >
                      {item.title}
                    </h4>

                    <p 
                      style={{
                        fontSize: '0.88rem',
                        color: '#64748b',
                        lineHeight: 1.6
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div 
                    style={{
                      marginTop: '1.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(241, 245, 249, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: item.color,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span>VERIFIED STANDARD</span>
                    <ArrowRight size={13} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;
