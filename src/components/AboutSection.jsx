import React from 'react';
import { ShieldCheck, Target, Eye, Award, CheckCircle, Users, Sparkles, Building2, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function AboutSection({ onOpenModal }) {
  return (
    <section id="about" className="section-wrapper" style={{ background: '#f8fafc', padding: '5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap reveal-on-scroll" style={{ marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', padding: '0.35rem 0.95rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <ShieldCheck size={14} color="#059669" />
            <span>Fiduciary Standards • AMFI ARN-182137</span>
          </div>
          <h2 className="section-heading" style={{ fontSize: '2.4rem', color: '#0f172a' }}>
            Private Wealth Architecture with <span className="gradient-text">Absolute Fiduciary Integrity</span>
          </h2>
          <p className="section-subheading" style={{ maxWidth: '780px', color: '#475569' }}>
            In volatile, complex capital markets, discerning investors require disciplined stewardship, deep quantitative scrutiny, and institutional governance. We manage your family's multi-generational wealth trajectory with zero compromise.
          </p>
        </div>

        {/* 4-Stat High-Status Private Wealth Bar */}
        <div 
          className="reveal-on-scroll"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
            background: '#ffffff',
            padding: '1.75rem',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 10px 30px -10px rgba(15,23,42,0.06)'
          }}
        >
          {[
            { metric: COMPANY_INFO.arn, label: "AMFI Registered", sub: "ARN-182137 • Valid till July 2027" },
            { metric: "15+ Years", target: "15", suffix: "+ Years", label: "Industry Experience", sub: "Navigated bull & bear cycles" },
            { metric: "40+ AMCs", target: "40", suffix: "+ AMCs", label: "Direct Empanelment", sub: "Direct routing via CAMS & KFintech" },
            { metric: "Zero Custody", label: "Direct AMC Settlement", sub: "Investor funds never transit distributor accounts" }
          ].map((stat, i) => (
            <div key={i} style={{ borderRight: i < 3 ? '1px solid #f1f5f9' : 'none', padding: '0.5rem 1rem' }} className={`stagger-${i + 1}`}>
              <div 
                style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}
                data-counter-target={stat.target || ''}
                data-counter-prefix={stat.prefix || ''}
                data-counter-suffix={stat.suffix || ''}
              >
                {stat.metric}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#2563eb', marginTop: '0.15rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.2rem' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'stretch' }} className="about-grid">
          
          {/* Left Column: Who We Are & Original Illustration */}
          <div>
            <div style={{ 
              background: '#ffffff', 
              padding: '2.75rem', 
              borderRadius: '24px', 
              border: '1px solid #e2e8f0', 
              boxShadow: 'var(--shadow-card)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ background: '#eff6ff', padding: '0.75rem', borderRadius: '14px', border: '1px solid #dbeafe' }}>
                      <Building2 size={26} color="#1d4ed8" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.45rem', color: '#0f172a', fontWeight: 800, letterSpacing: '-0.01em' }}>Institutional Wealth Stewardship</h3>
                      <span style={{ fontSize: '0.82rem', color: '#0284c7', fontWeight: 700 }}>AMFI Reg. Mutual Fund Distributor (ARN-182137)</span>
                    </div>
                  </div>

                  <div style={{ background: '#ecfdf5', color: '#047857', padding: '0.4rem 0.85rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 700, border: '1px solid #a7f3d0' }}>
                    15+ Years Track Record
                  </div>
                </div>

                {/* Original Illustration from Assure Site (Cinematic Image Reveal - Requirement 3) */}
                <div className="cinematic-image-wrap" style={{ textAlign: 'center', marginBottom: '1.75rem', background: '#f8fafc', padding: '1.25rem', borderRadius: '18px', border: '1px solid #e2e8f0' }}>
                  <img 
                    src="/assets/img_se.png" 
                    alt="Assure Securities Services & Relationship"
                    loading="lazy"
                    decoding="async"
                    className="cinematic-reveal"
                    style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain', margin: '0 auto', display: 'block' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                <p style={{ color: '#334155', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  At <strong>Assure Securities</strong>, our fiduciary mandate is clear: protect, compound, and transition family wealth across generational horizons. We operate on principles of radical transparency, institutional-grade portfolio diagnostics, and bespoke client attention.
                </p>

                <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Rather than reacting impulsively to volatile news headlines, our clients benefit from a systematic multi-asset framework—allocating across Mutual Funds, Fixed Income, Sovereign Bonds, and Ultra-HNI PMS/AIF vehicles with rigorous downside protection.
                </p>
              </div>

              {/* 4 Core Institutional Pillars */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem' }}>
                {[
                  { title: "Zero Custody Risk", desc: "100% direct settlement to AMCs via BSE StAR MF. Investor funds never transit distributor bank accounts." },
                  { title: "Quantitative Screening", desc: "Proprietary Sharpe, Sortino, rolling Alpha & fund manager tenure verification." },
                  { title: "Digital Wealth Desk", desc: "Instant paperless e-KYC, automated SIP step-ups, and 24/7 mobile portfolio valuations." },
                  { title: "Private Advisory Desk", desc: "Dedicated wealth officers headquartered at Vishal Khand, Gomtinagar, Lucknow." }
                ].map((pillar, i) => (
                  <div key={i} style={{ background: '#f8fafc', padding: '1.1rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <CheckCircle size={16} color="#059669" />
                      <strong style={{ fontSize: '0.9rem', color: '#0f172a' }}>{pillar.title}</strong>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>{pillar.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Mission, Vision & Compliance Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'space-between' }}>
            
            {/* Mission Card */}
            <div className="glass-card" style={{ padding: '2.25rem', background: '#ffffff', borderRadius: '22px', borderLeft: '6px solid #2563eb', borderTop: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{ background: '#eff6ff', padding: '0.7rem', borderRadius: '12px' }}>
                  <Target size={24} color="#2563eb" />
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Our Institutional Mandate</span>
                  <h3 style={{ fontSize: '1.35rem', color: '#0f172a', fontWeight: 800 }}>Our Mission</h3>
                </div>
              </div>
              <p style={{ fontSize: '1.02rem', color: '#334155', lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
                &ldquo;To provide superior quality financial services to our customers with transparent disclosures, state-of-the-art market intelligence, and unconditional client dedication.&rdquo;
              </p>
            </div>

            {/* Vision Card */}
            <div className="glass-card" style={{ padding: '2.25rem', background: '#ffffff', borderRadius: '22px', borderLeft: '6px solid #10b981', borderTop: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{ background: '#ecfdf5', padding: '0.7rem', borderRadius: '12px' }}>
                  <Eye size={24} color="#059669" />
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Generational Horizon</span>
                  <h3 style={{ fontSize: '1.35rem', color: '#0f172a', fontWeight: 800 }}>Our Vision</h3>
                </div>
              </div>
              <p style={{ fontSize: '1.02rem', color: '#334155', lineHeight: 1.7, fontWeight: 500, margin: 0 }}>
                &ldquo;To make every individual and family a successful, confident investor without compromising on Quality, Integrity, and Knowledge.&rdquo;
              </p>
            </div>

            {/* Regulatory Badge Box */}
            <div style={{ 
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
              borderRadius: '22px', 
              padding: '2rem', 
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 40px -10px rgba(15,23,42,0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(56, 189, 248, 0.15)', padding: '0.6rem', borderRadius: '12px' }}>
                  <ShieldCheck size={26} color="#38bdf8" />
                </div>
                <div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff' }}>Official AMFI Regulatory Credentials</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Association of Mutual Funds in India (AMFI)</div>
                </div>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                ARN Registration No: <strong style={{ color: '#38bdf8' }}>{COMPANY_INFO.arn}</strong><br />
                Initial Registration: <strong>{COMPANY_INFO.registrationDate}</strong> | Valid Till: <strong>{COMPANY_INFO.validity}</strong>
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => onOpenModal('consultation')}
                  className="btn-primary"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
                >
                  Schedule Private Consultation
                </button>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`} 
                  className="btn-secondary"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
                >
                  Direct Desk: {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid { grid-template-columns: 1.15fr 0.85fr !important; }
        }
      `}</style>
    </section>
  );
}
