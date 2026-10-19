import React from 'react';
import { 
  Building2, ShieldCheck, TrendingUp, CheckCircle2, 
  Sparkles, ArrowRight, ArrowUpRight, Phone, Mail, Award, Users, MapPin
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function AboutPage({ onOpenModal }) {
  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        paddingTop: '80px',
        background: '#FAF9F6',
        color: '#0f172a',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Behance-style Floating Ambient Decorative Bubbles */}
      <div 
        style={{
          position: 'absolute',
          top: '3%',
          left: '4%',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'rgba(249, 115, 22, 0.25)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '12%',
          right: '5%',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'rgba(16, 185, 129, 0.2)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '35%',
          left: '2%',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: 'rgba(56, 189, 248, 0.25)',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '3%',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'rgba(236, 72, 153, 0.2)',
          pointerEvents: 'none'
        }}
      />

      {/* =========================================================================
          1. Hero Section: Split Narrative + 3D Wealth Illustration
          ========================================================================= */}
      <section style={{ padding: 'clamp(4rem, 6vw, 6rem) 0 3.5rem 0', position: 'relative', zIndex: 2 }}>
        <div className="container">
          
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', 
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Eyebrow + Two-Tone Headline + AMFI Badge + Narrative */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              
              {/* Pill Eyebrow Badge */}
              <div>
                <span 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.45rem 1rem',
                    borderRadius: '9999px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    color: '#059669',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em'
                  }}
                >
                  <Sparkles size={14} color="#059669" />
                  01 — ABOUT ASSURE SECURITIES
                </span>
              </div>

              {/* Bold Behance-Style Two-Tone Headline */}
              <h1 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(2.6rem, 4.5vw, 4rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  margin: 0
                }}
              >
                Your goals.{' '}
                <span style={{ color: '#059669' }}>Our expertise.</span>
                <br />
                A smarter{' '}
                <span style={{ color: '#ea580c' }}>financial journey.</span>
              </h1>

              {/* AMFI Reg Pill Badge */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.55rem 1.15rem',
                  background: '#ffffff',
                  border: '1px solid rgba(226, 232, 240, 0.95)',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)',
                  width: 'fit-content'
                }}
              >
                <ShieldCheck size={16} color="#059669" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#334155', letterSpacing: '0.04em', fontWeight: 600 }}>
                  AMFI REG. {COMPANY_INFO.arn} • EXP: {COMPANY_INFO.validity.toUpperCase()}
                </span>
              </div>

              {/* Narrative Paragraphs */}
              <p 
                style={{
                  fontSize: '1.14rem',
                  color: '#1e293b',
                  lineHeight: 1.7,
                  fontWeight: 500,
                  margin: 0
                }}
              >
                Assure Securities is an AMFI-registered Mutual Fund Distributor dedicated to transforming 
                the way discerning individuals, business owners, and families navigate Indian and global capital markets.
              </p>

              <p 
                style={{
                  fontSize: '1rem',
                  color: '#64748b',
                  lineHeight: 1.75,
                  margin: 0
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
                  onClick={() => onOpenModal && onOpenModal('contact-consult')}
                  style={{
                    borderRadius: '9999px',
                    padding: '0 2.2rem',
                    height: '48px',
                    background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.9rem',
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
                  <span>Book Free Advisory Call</span>
                  <ArrowRight size={15} />
                </button>

                <a 
                  href="/products/mutual-funds" 
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
                    fontSize: '0.9rem',
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
                  <span>Explore Solutions Suite</span>
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

        </div>
      </section>

      {/* =========================================================================
          2. Metrics Bar (Behance Rounded Pill Cards)
          ========================================================================= */}
      <section style={{ padding: '2rem 0 3.5rem 0', position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '1.25rem' 
            }}
          >
            {[
              { label: "Advisory Heritage", value: "15+", suffix: "Years", color: "#059669", icon: Award },
              { label: "Assets Guided Nationwide", value: "₹250Cr+", suffix: "AUM", color: "#0284c7", icon: TrendingUp },
              { label: "Investor Families", value: "1,500+", suffix: "Families", color: "#ea580c", icon: Users },
              { label: "Empaneled AMCs & Insurers", value: "40+", suffix: "Partners", color: "#db2777", icon: Building2 }
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: '#ffffff',
                    borderRadius: '24px',
                    padding: '1.75rem 1.5rem',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(15, 23, 42, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(15, 23, 42, 0.04)';
                  }}
                >
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: `${stat.color}15`,
                      color: stat.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <StatIcon size={22} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.1 }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600, marginTop: '0.25rem' }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. Built On Four Fiduciary Pillars (4 Behance-Style Cards)
          ========================================================================= */}
      <section style={{ padding: '3.5rem 0', position: 'relative', zIndex: 2 }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem auto' }}>
            <h2 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem'
              }}
            >
              Built On Four <span style={{ color: '#059669' }}>Fiduciary Pillars</span>
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.6 }}>
              Institutional asset management and risk containment principles designed around your family's timeline.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '1.75rem' 
            }}
          >
            {[
              {
                step: "01",
                icon: ShieldCheck,
                color: "#10b981",
                gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                title: "Direct AMC Routing",
                desc: "Zero custody risk. Funds settle directly with SEBI-regulated AMCs and sovereign depositories with complete transparency."
              },
              {
                step: "02",
                icon: TrendingUp,
                color: "#38bdf8",
                gradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
                title: "Multi-Asset Architecture",
                desc: "Balanced diversification across Mutual Funds, AAA Corporate FDs, Sovereign Bonds & PMS/AIFs tailored to your risk tolerance."
              },
              {
                step: "03",
                icon: CheckCircle2,
                color: "#f59e0b",
                gradient: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
                title: "Independent Scrutiny",
                desc: "Quantitative fund manager track record scrutiny, downside capture ratio analysis, and rolling return consistency checks."
              },
              {
                step: "04",
                icon: Building2,
                color: "#ec4899",
                gradient: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)",
                title: "Lifelong Partnership",
                desc: "Structured periodic portfolio reviews, disciplined rebalancing triggers, tax optimization, and family succession guidance."
              }
            ].map((item, idx) => {
              const PillarIcon = item.icon;

              return (
                <div 
                  key={idx}
                  style={{
                    background: '#ffffff',
                    borderRadius: '24px',
                    padding: '2.2rem 1.8rem',
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.6rem' }}>
                      <div 
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '16px',
                          background: item.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          boxShadow: `0 8px 18px ${item.color}45`
                        }}
                      >
                        <PillarIcon size={24} />
                      </div>

                      <span 
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.9rem',
                          fontWeight: 800,
                          color: '#94a3b8'
                        }}
                      >
                        {item.step}
                      </span>
                    </div>

                    <h3 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: '#0f172a',
                        marginBottom: '0.75rem',
                        lineHeight: 1.3
                      }}
                    >
                      {item.title}
                    </h3>

                    <p 
                      style={{
                        fontSize: '0.92rem',
                        color: '#64748b',
                        lineHeight: 1.65,
                        margin: 0
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div 
                    style={{
                      marginTop: '1.75rem',
                      paddingTop: '1.2rem',
                      borderTop: '1px solid rgba(241, 245, 249, 1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: item.color,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span>VERIFIED STANDARD</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. Vision & Regulatory Safeguards (Dual Modern Rounded Cards)
          ========================================================================= */}
      <section style={{ padding: '3.5rem 0', position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', 
              gap: '2rem' 
            }}
          >
            {/* Vision Card */}
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '28px',
                padding: 'clamp(2.2rem, 4vw, 3rem)',
                border: '1px solid rgba(226, 232, 240, 0.95)',
                boxShadow: '0 12px 35px -8px rgba(15, 23, 42, 0.06)'
              }}
            >
              <div 
                style={{
                  display: 'inline-block',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(5, 150, 105, 0.1)',
                  color: '#059669',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem'
                }}
              >
                OUR PURPOSE
              </div>
              <h3 
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  lineHeight: 1.25,
                  marginBottom: '1rem'
                }}
              >
                Transforming Family Aspirations into Enduring Wealth
              </h3>
              <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                Our ambition is to be India's most respected, client-first wealth distributor. 
                We eliminate speculative noise by applying institutional asset-allocation principles, 
                ensuring your family's savings compound steadily across market cycles with absolute peace of mind.
              </p>
            </div>

            {/* Regulatory Safeguards Card */}
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '28px',
                padding: 'clamp(2.2rem, 4vw, 3rem)',
                border: '1px solid rgba(226, 232, 240, 0.95)',
                boxShadow: '0 12px 35px -8px rgba(15, 23, 42, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div 
                  style={{
                    display: 'inline-block',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    background: 'rgba(249, 115, 22, 0.1)',
                    color: '#ea580c',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    marginBottom: '1.25rem'
                  }}
                >
                  STATUTORY GOVERNANCE
                </div>
                <h3 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)',
                    fontWeight: 800,
                    color: '#0f172a',
                    lineHeight: 1.25,
                    marginBottom: '1rem'
                  }}
                >
                  Zero Custody Risk Direct Settlement
                </h3>
                <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                  Assure Securities never handles client cash. All transactions flow directly 
                  from your bank account to SEBI-regulated Mutual Fund houses and sovereign depositories. 
                  You retain complete, verifiable ownership at every single moment.
                </p>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button 
                  onClick={() => onOpenModal && onOpenModal('contact-consult')}
                  style={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '9999px',
                    background: '#0f172a',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 10px 25px rgba(15, 23, 42, 0.2)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#059669';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#0f172a';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Schedule Advisory Consultation</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. Bottom Contact & Office Presence Banner (Behance Style Pill Container)
          ========================================================================= */}
      <section style={{ padding: '3rem 0 6rem 0', position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div 
            style={{
              background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              borderRadius: '32px',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#ffffff',
              boxShadow: '0 20px 45px rgba(5, 150, 105, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '1.75rem'
            }}
          >
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.2)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}
            >
              <MapPin size={14} />
              HEADQUARTERED IN LUCKNOW • SERVICING NATIONWIDE
            </div>

            <h3 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                maxWidth: '720px',
                margin: 0
              }}
            >
              Ready to construct an institutional-grade portfolio for your family?
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', lineHeight: 1.6, margin: 0 }}>
              Connect with our registered wealth stewards for an unbiased diagnostic review of your existing assets.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button 
                onClick={() => onOpenModal && onOpenModal('contact-consult')}
                style={{
                  borderRadius: '9999px',
                  padding: '0 2.2rem',
                  height: '48px',
                  background: '#ffffff',
                  color: '#059669',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Request Callback</span>
                <ArrowRight size={15} />
              </button>

              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                style={{
                  borderRadius: '9999px',
                  padding: '0 1.8rem',
                  height: '48px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <Phone size={15} />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                style={{
                  borderRadius: '9999px',
                  padding: '0 1.8rem',
                  height: '48px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  border: '1.5px solid rgba(255, 255, 255, 0.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <Mail size={15} />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;
