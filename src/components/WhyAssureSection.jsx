import React from 'react';
import { ShieldCheck, Compass, Eye, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

const PRINCIPLES = [
  {
    num: "01",
    title: "Expertise",
    subtitle: "15+ Years Multi-Cycle Discipline",
    tag: "QUANTITATIVE RIGOR",
    image: "/assets/principle-expertise.jpg",
    icon: Award,
    accentColor: "#10B981",
    desc: "Capital markets fluctuate unpredictably, but rigorous analytical discipline endures. Our AMFI-registered advisors apply deep quantitative scrutiny to scheme selection and risk management rather than chasing speculative fads."
  },
  {
    num: "02",
    title: "Transparency",
    subtitle: "Uncompromising Fiduciary Honesty",
    tag: "ZERO CONFLICT",
    image: "/assets/principle-transparency.jpg",
    icon: Eye,
    accentColor: "#38BDF8",
    desc: "We deal exclusively in regular mutual fund plans with full disclosure of trailing commission structures. No hidden charges, no proprietary product quotas, and zero conflict of interest."
  },
  {
    num: "03",
    title: "Personalised Guidance",
    subtitle: "Architected Around Your Milestones",
    tag: "FAMILY ROADMAP",
    image: "/assets/principle-guidance.jpg",
    icon: Compass,
    accentColor: "#F59E0B",
    desc: "Every rupee in your portfolio is assigned a clear objective—whether funding premier university degrees, acquiring generational assets, or securing a tranquil, inflation-hedged retirement."
  },
  {
    num: "04",
    title: "Long-Term Thinking",
    subtitle: "The Compounding Advantage",
    tag: "COMPOUNDING HORIZON",
    image: "/assets/principle-compounding.jpg",
    icon: TrendingUp,
    accentColor: "#10B981",
    desc: "True wealth creation requires patience and asset-allocation rebalancing across cycles. We insulate your family corpus from emotional market overreactions through disciplined rule-based execution."
  },
  {
    num: "05",
    title: "Institutional Trust",
    subtitle: "Zero Custody & Direct Settlement",
    tag: "SEBI CUSTODIAN",
    image: "/assets/principle-trust.jpg",
    icon: ShieldCheck,
    accentColor: "#6366F1",
    desc: "Empaneled with 40+ leading AMCs with direct routing via CAMS & KFintech. Investor funds settle directly with SEBI-regulated custodians—your capital never touches our distributor accounts."
  }
];

export function WhyAssureSection({ onOpenModal, theme = 'light' }) {
  const themeClass = theme === 'dark' ? 'section-theme-dark' : 'section-theme-light';
  return (
    <section id="why-assure" className={`principles-section ${themeClass}`} style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Advisory Dialogue Atmosphere Photo */}
      <div 
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '52%',
          backgroundImage: 'url(/assets/why-assure-advisory.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.42,
          maskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
          pointerEvents: 'none',
          filter: 'contrast(1.08) saturate(1.1)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="eyebrow-label">
            <span>03 — FIDUCIARY PRINCIPLES</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: 'var(--color-text)', maxWidth: '650px', lineHeight: 1.12 }}>
              Why <span className="text-blue">investors</span>
              <br />
              choose <span className="text-red" style={{ fontStyle: 'italic' }}>Assure Securities.</span>
            </h2>

            <p style={{ maxWidth: '440px', fontSize: '0.96rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
              In an era of automated robo-apps and speculative noise, we deliver seasoned, research-driven private wealth stewardship built on lasting relationships.
            </p>
          </div>
        </div>

        {/* 5 Principles with High-End Visual Cards & Interactive Animations */}
        <div className="principles-grid">
          {PRINCIPLES.map((principle) => {
            const IconComponent = principle.icon;
            return (
              <div 
                key={principle.num} 
                className="principle-card-luxury"
                onClick={() => onOpenModal && onOpenModal('consultation')}
                role="button"
                tabIndex={0}
                style={{
                  '--card-accent': principle.accentColor
                }}
              >
                {/* Glowing Top Shimmer Bar */}
                <div className="principle-card-shimmer" />

                {/* Card Media Container */}
                <div className="principle-image-wrap">
                  <img 
                    src={principle.image} 
                    alt={principle.title} 
                    className="principle-card-img"
                    loading="lazy"
                  />
                  {/* Scrim Gradient Overlay */}
                  <div className="principle-image-scrim" />

                  {/* Overlaid Top Header Pills */}
                  <div className="principle-image-topbar">
                    <span className="principle-num-badge">
                      <span className="num-dot" />
                      {principle.num}
                    </span>
                    <div className="principle-icon-badge" title={principle.title}>
                      <IconComponent size={15} />
                    </div>
                  </div>

                  {/* Overlaid Bottom Tag */}
                  <div className="principle-image-bottom-tag">
                    <span>{principle.tag}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="principle-content-body">
                  <div className="principle-subtitle-pill">
                    {principle.subtitle}
                  </div>
                  
                  <h3 className="principle-heading">
                    {principle.title}
                  </h3>

                  <p className="principle-description">
                    {principle.desc}
                  </p>

                  <div className="principle-card-footer">
                    <span className="principle-action-label">Consult on this principle</span>
                    <div className="principle-action-arrow">
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Regulatory Standing Footer Strip */}
        <div 
          style={{ 
            marginTop: '3.5rem', 
            padding: '1.5rem 2rem', 
            background: 'var(--color-bg-card)', 
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.04)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
              AMFI REGISTERED MUTUAL FUND DISTRIBUTOR • ARN-182137 • VALIDITY: 19 JULY 2027
            </span>
          </div>

          <button 
            onClick={() => onOpenModal && onOpenModal('contact-consult')}
            className="btn-ghost-luxury"
            style={{ fontSize: '0.84rem' }}
          >
            <span>Speak With An Advisor</span>
            <ArrowRight size={13} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default WhyAssureSection;
