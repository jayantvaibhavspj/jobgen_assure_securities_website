import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, Target, Eye, CheckCircle2, Award, 
  Users, HeartHandshake, ArrowRight, Phone, Mail 
} from 'lucide-react';
import { COMPANY_INFO, CLIENT_TESTIMONIALS } from '../data/websiteData';

export function AboutPage({ onOpenModal }) {
  return (
    <div>
      
      {/* Section 1: Page Header Banner (Dark) */}
      <section className="section-dark-navy" style={{ padding: '4.5rem 0 3.5rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#38bdf8', fontWeight: 600 }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>About Us</span>
          </div>
          <div className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
            AMFI Registered Distributor (ARN-182137)
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
            About <span className="gradient-text">Assure Securities</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6 }}>
            In an era of constantly changing and volatile financial markets, investors need a qualified, trained, and unbiased professional firm to help them in achieving their short-term and long-term financial wishes.
          </p>
        </div>
      </section>

      {/* Section 2: Core Story & Who We Are (Light) */}
      <section className="section-wrapper" style={{ background: '#ffffff', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', alignItems: 'center' }} className="about-page-grid">
            
            <div>
              <span className="badge-tag accent-emerald">Established Trust & Integrity</span>
              <h2 style={{ fontSize: '2.2rem', color: '#0f172a', fontWeight: 800, marginBottom: '1.25rem' }}>
                Your Trusted Wealth Companion in Lucknow & Across India
              </h2>

              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                At <strong>Assure Securities</strong>, our core aim is to serve our clients with sheer dedication and integrity, meet their expectations, and build enduring, lifelong relationships. We offer multiple financial distribution services including Mutual Funds, Insurance, Fixed Deposits, Bonds, and PMS/AIF.
              </p>

              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                As an investor, you can either spend endless hours deciphering complex market fluctuations yourself or hire a disciplined, dedicated professional firm with 15+ years of market wisdom. Meeting your life's aspirations is our primary objective.
              </p>

              {/* Quick Stat Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#2563eb' }}>15+</div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>Years of Trust</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981' }}>1,500+</div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>Happy Families</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#8b5cf6' }}>₹250+ Cr</div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>Assets Guided</div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-card)' }}>
                <img 
                  src="/assets/img_se.png" 
                  alt="Assure Securities Services Illustration"
                  style={{ width: '100%', maxHeight: '340px', objectFit: 'contain' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div style={{ marginTop: '1.25rem', fontSize: '0.9rem', color: '#475569', fontWeight: 600 }}>
                  AMFI Registered Mutual Fund Distributor | ARN-182137
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Mission, Vision & AMFI Compliance (Dark) */}
      <section className="section-dark" style={{ padding: '5rem 0', background: '#0b1120', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
              Core Philosophy & Ambition
            </div>
            <h2 className="section-heading" style={{ color: '#ffffff' }}>
              Our Guiding <span className="gradient-text">Mission & Vision</span>
            </h2>
            <p className="section-subheading" style={{ color: '#94a3b8' }}>
              Built upon 3 non-negotiable principles: Uncompromising Integrity, Quantitative Knowledge, and Unbiased Client Service.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            
            {/* Mission Card */}
            <div 
              className="glass-card" 
              style={{ 
                padding: '2.5rem', 
                background: 'rgba(30, 41, 59, 0.75)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderTop: '5px solid #3b82f6',
                borderRadius: '24px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(37,99,235,0.2)', padding: '0.75rem', borderRadius: '14px' }}>
                  <Target size={28} color="#38bdf8" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Core Purpose</span>
                  <h3 style={{ fontSize: '1.6rem', color: '#ffffff', margin: 0 }}>Our Mission</h3>
                </div>
              </div>
              <p style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: 1.7, fontWeight: 400 }}>
                &ldquo;To provide superior quality financial services to our customers with transparent disclosures, state-of-the-art market intelligence, and unconditional client dedication.&rdquo;
              </p>
            </div>

            {/* Vision Card */}
            <div 
              className="glass-card" 
              style={{ 
                padding: '2.5rem', 
                background: 'rgba(30, 41, 59, 0.75)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderTop: '5px solid #10b981',
                borderRadius: '24px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(16,185,129,0.2)', padding: '0.75rem', borderRadius: '14px' }}>
                  <Eye size={28} color="#10b981" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Future Horizon</span>
                  <h3 style={{ fontSize: '1.6rem', color: '#ffffff', margin: 0 }}>Our Vision</h3>
                </div>
              </div>
              <p style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: 1.7, fontWeight: 400 }}>
                &ldquo;To make every individual and family a successful, confident investor without compromising on Quality, Integrity, and Knowledge.&rdquo;
              </p>
            </div>

          </div>

          {/* AMFI Official Compliance Banner */}
          <div style={{ 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid rgba(255,255,255,0.08)', 
            borderRadius: '20px', 
            padding: '1.75rem 2rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap', 
            gap: '1.5rem' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: 'rgba(16,185,129,0.15)', padding: '0.6rem', borderRadius: '12px' }}>
                <ShieldCheck size={26} color="#10b981" />
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>Official AMFI Credentials</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>ARN: <strong>182137</strong> | Valid Until: <strong>July 2027</strong> | Lucknow Registered</div>
              </div>
            </div>
            <div style={{ fontSize: '0.82rem', color: '#cbd5e1', maxWidth: '440px', lineHeight: 1.5 }}>
              Assure Securities strictly abides by the Code of Conduct prescribed by the Association of Mutual Funds in India (AMFI).
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The 4 Pillars of Assure Securities (Light) */}
      <section className="section-wrapper" style={{ background: '#f8fafc', padding: '5rem 0' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag">Client First Philosophy</span>
            <h2 className="section-heading">
              The 4 Pillars of <span className="gradient-text">Assure Securities</span>
            </h2>
            <p className="section-subheading">
              Built to protect and compound your wealth across market ups and downs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {[
              { title: "Unbiased Guidance", desc: "We align recommendations strictly to your financial goals, cash flow, and risk tolerance with zero aggressive product push." },
              { title: "Institutional Analytics", desc: "Rigorous quantitative vetting of fund performance, Sharpe ratios, portfolio overlap, and AMC management stability." },
              { title: "100% Digital Convenience", desc: "Paperless onboarding, automated monthly SIP mandates (NACH / e-Mandate), and 24/7 mobile portfolio monitoring." },
              { title: "Dedicated Relationship Desk", desc: "Accessible in-person advisory support at our Lucknow office and prompt assistance for redemptions, switches, and tax statements." }
            ].map((pillar, i) => (
              <div key={i} style={{ background: '#ffffff', padding: '2rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-subtle)' }}>
                <div style={{ background: '#eff6ff', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <CheckCircle2 size={24} color="#2563eb" />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: 700, marginBottom: '0.6rem' }}>{pillar.title}</h4>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Consultation Call to Action (Dark) */}
      <section className="section-dark-navy" style={{ padding: '4.5rem 0', background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
                Free Portfolio Review
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                Ready to Plan Your Financial Future?
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', maxWidth: '580px', margin: 0, lineHeight: 1.6 }}>
                Speak directly with an AMFI registered wealth distributor. Schedule a free portfolio checkup or visit our Gomtinagar, Lucknow headquarters.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => onOpenModal('consultation')} className="btn-emerald" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
                <span>Book Free Consultation</span>
                <ArrowRight size={16} />
              </button>
              <a href={`tel:${COMPANY_INFO.phone}`} className="btn-secondary" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
                <Phone size={16} />
                <span>Call: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .about-page-grid { grid-template-columns: 1.15fr 0.85fr !important; }
        }
      `}</style>
    </div>
  );
}
