import React from 'react';
import { ShieldCheck, Target, Eye, Award, CheckCircle, Users, Sparkles, Building2, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function AboutSection({ onOpenModal }) {
  return (
    <section id="about" className="section-wrapper" style={{ background: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-tag">About Assure Securities</div>
          <h2 className="section-heading">
            Dedicated to Serving Your Goals with <span className="gradient-text">Integrity & Excellence</span>
          </h2>
          <p className="section-subheading">
            In an era of constant changing and volatile financial markets, investors need a qualified, trained, and unbiased professional firm to guide them toward achieving their short-term milestones and multi-decade wealth aspirations.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }} className="about-grid">
          
          {/* Left Column: Who We Are & Original Illustration */}
          <div>
            <div style={{ background: '#ffffff', padding: '2.5rem', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-card)' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ background: '#eff6ff', padding: '0.6rem', borderRadius: '12px' }}>
                    <Building2 size={24} color="#2563eb" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 800 }}>Who We Are</h3>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>AMFI Reg. Mutual Fund Distributor (ARN-182137)</span>
                  </div>
                </div>

                <div style={{ background: '#ecfdf5', color: '#059669', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
                  15+ Years Track Record
                </div>
              </div>

              {/* Original Illustration from Assure Site */}
              <div style={{ textAlign: 'center', marginBottom: '1.5rem', background: '#f8fafc', padding: '1rem', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                <img 
                  src="/assets/img_se.png" 
                  alt="Assure Securities Services & Relationship"
                  style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain', margin: '0 auto' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                At <strong>Assure Securities</strong>, our core aim is to serve our clients with sheer dedication and integrity, meet their expectations, and build enduring, life-long relationships. We offer multiple financial distribution services including Mutual Funds, Insurance, Fixed Deposits, Bonds, and PMS/AIF.
              </p>

              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                As an investor, you can either spend endless hours deciphering complex market fluctuations yourself or hire a disciplined, dedicated professional firm with 15+ years of market wisdom. Meeting your life's aspirations is our primary objective.
              </p>

              {/* Core Pillars */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {[
                  { title: "Unbiased Guidance", desc: "No product push; strategies aligned strictly to your risk profile." },
                  { title: "Institutional Analytics", desc: "Proprietary research and fund manager track record scrutiny." },
                  { title: "Zero Paperwork", desc: "Instant digital KYC and mobile portfolio tracking." },
                  { title: "Lifelong Support", desc: "Dedicated relationship managers in Gomtinagar, Lucknow." }
                ].map((pillar, i) => (
                  <div key={i} style={{ background: '#f8fafc', padding: '1rem', borderRadius: '14px', border: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                      <CheckCircle size={15} color="#10b981" />
                      <strong style={{ fontSize: '0.9rem', color: '#1e293b' }}>{pillar.title}</strong>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>{pillar.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Mission & Vision Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Mission Card */}
            <div className="glass-card" style={{ padding: '2rem', background: '#ffffff', borderLeft: '5px solid #2563eb' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{ background: '#eff6ff', padding: '0.65rem', borderRadius: '12px' }}>
                  <Target size={24} color="#2563eb" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase' }}>Our Purpose</span>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a' }}>Our Mission</h3>
                </div>
              </div>
              <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>
                &ldquo;To provide superior quality financial services to our customers with transparent disclosures, state-of-the-art market intelligence, and unconditional client dedication.&rdquo;
              </p>
            </div>

            {/* Vision Card */}
            <div className="glass-card" style={{ padding: '2rem', background: '#ffffff', borderLeft: '5px solid #10b981' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{ background: '#ecfdf5', padding: '0.65rem', borderRadius: '12px' }}>
                  <Eye size={24} color="#10b981" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase' }}>Future Horizon</span>
                  <h3 style={{ fontSize: '1.3rem', color: '#0f172a' }}>Our Vision</h3>
                </div>
              </div>
              <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.6, fontWeight: 500 }}>
                &ldquo;To make every individual and family a successful, confident investor without compromising on Quality, Integrity, and Knowledge.&rdquo;
              </p>
            </div>

            {/* Regulatory Badge Box */}
            <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '20px', padding: '1.5rem', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <ShieldCheck size={26} color="#38bdf8" />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>Official AMFI Credentials</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Association of Mutual Funds in India</div>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '1rem' }}>
                Registration No: <strong>{COMPANY_INFO.arn}</strong> | Initial Registration: {COMPANY_INFO.registrationDate} | Current Validity: {COMPANY_INFO.validity}.
              </p>
              <button 
                onClick={() => onOpenModal('consultation')}
                style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.4)', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600 }}
              >
                Schedule an In-Person Office Meeting &rarr;
              </button>
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
