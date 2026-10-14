import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, Target, Eye, CheckCircle2, Award, 
  Users, HeartHandshake, ArrowRight, Phone, Mail, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO, CLIENT_TESTIMONIALS } from '../data/websiteData';

export function AboutPage({ onOpenModal }) {
  return (
    <div>
      
      {/* Page Header Banner (Dark Navy #071A2F) */}
      <section style={{ background: 'var(--color-primary)', color: '#ffffff', padding: '4.5rem 0 3.5rem 0', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>About Us</span>
          </div>

          <div className="eyebrow-pill emerald">
            <Sparkles size={13} />
            <span>AMFI Registered Distributor • ARN-182137</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            About <span style={{ color: 'var(--color-accent)' }}>Assure Securities</span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '680px', lineHeight: 1.6, margin: 0 }}>
            In an era of constantly changing and volatile financial markets, investors need a qualified, trained, and unbiased professional firm to help them in achieving their short-term and long-term financial wishes.
          </p>
        </div>
      </section>

      {/* Core Story & Fiduciary Foundation (White #FFFFFF) */}
      <section style={{ background: '#ffffff', padding: 'var(--section-pad-desktop) 0', borderBottom: '1px solid var(--color-border)' }} className="section-pad">
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: 'clamp(2.5rem, 5vw, 4rem)', 
              alignItems: 'center' 
            }}
          >
            <div>
              <div className="eyebrow-pill emerald">
                <ShieldCheck size={13} />
                <span>Established Trust & Integrity</span>
              </div>

              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>
                Your Trusted Wealth Companion in Lucknow & Across India
              </h2>

              <p style={{ fontSize: '1.02rem', color: 'var(--color-text)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                At <strong>Assure Securities</strong>, our core aim is to serve our clients with sheer dedication and integrity, meet their expectations, and build enduring, lifelong relationships. We offer multiple financial distribution services including Mutual Funds, Insurance, Fixed Deposits, Bonds, and PMS/AIF.
              </p>

              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                As an investor, you can either spend endless hours deciphering complex market fluctuations yourself or hire a disciplined, dedicated professional firm with 15+ years of market wisdom. Meeting your life's aspirations is our primary objective.
              </p>

              {/* Quick Stat Highlights */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
                <div style={{ background: 'var(--color-bg)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-primary)' }}>15+</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Years of Trust</div>
                </div>
                <div style={{ background: 'var(--color-bg)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-accent)' }}>1,500+</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Happy Families</div>
                </div>
                <div style={{ background: 'var(--color-bg)', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-primary)' }}>₹250+ Cr</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>Assets Guided</div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ background: 'var(--color-bg)', padding: '2rem', borderRadius: '24px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-card)' }}>
                <img 
                  src="/assets/img_se.png" 
                  alt="Assure Securities Services Illustration"
                  style={{ width: '100%', maxHeight: '320px', objectFit: 'contain' }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                  AMFI Registered Mutual Fund Distributor • ARN-182137
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision (Light Gray #F7F9FC) */}
      <section style={{ padding: 'var(--section-pad-desktop) 0', background: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }} className="section-pad">
        <div className="container">
          <div className="section-header-center">
            <div className="eyebrow-pill emerald">
              <Sparkles size={13} />
              <span>Core Philosophy & Ambition</span>
            </div>

            <h2>
              Our Guiding <span style={{ color: 'var(--color-accent)' }}>Mission & Vision</span>
            </h2>

            <p>
              Built upon 3 non-negotiable principles: Uncompromising Integrity, Quantitative Knowledge, and Unbiased Client Service.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            
            {/* Mission Card */}
            <div 
              className="fintech-card" 
              style={{ 
                padding: '2.5rem', 
                background: '#ffffff', 
                border: '1px solid var(--color-border)', 
                borderTop: '4px solid var(--color-primary)',
                borderRadius: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ background: 'rgba(7, 26, 47, 0.05)', padding: '0.65rem', borderRadius: '12px' }}>
                  <Target size={24} color="var(--color-primary)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Core Purpose</span>
                  <h3 style={{ fontSize: '1.45rem', color: 'var(--color-primary)', margin: 0 }}>Our Mission</h3>
                </div>
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text)', lineHeight: 1.7, margin: 0 }}>
                &ldquo;To provide superior quality financial services to our customers with transparent disclosures, state-of-the-art market intelligence, and unconditional client dedication.&rdquo;
              </p>
            </div>

            {/* Vision Card */}
            <div 
              className="fintech-card" 
              style={{ 
                padding: '2.5rem', 
                background: '#ffffff', 
                border: '1px solid var(--color-border)', 
                borderTop: '4px solid var(--color-accent)',
                borderRadius: '20px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ background: 'rgba(22, 185, 129, 0.1)', padding: '0.65rem', borderRadius: '12px' }}>
                  <Eye size={24} color="var(--color-accent)" />
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Future Horizon</span>
                  <h3 style={{ fontSize: '1.45rem', color: 'var(--color-primary)', margin: 0 }}>Our Vision</h3>
                </div>
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text)', lineHeight: 1.7, margin: 0 }}>
                &ldquo;To make every individual and family a successful, confident investor without compromising on Quality, Integrity, and Knowledge.&rdquo;
              </p>
            </div>

          </div>

          {/* AMFI Official Compliance Banner */}
          <div 
            style={{ 
              background: '#ffffff', 
              border: '1px solid var(--color-border)', 
              borderRadius: '16px', 
              padding: '1.5rem 2rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '1.5rem' 
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ background: 'rgba(22, 185, 129, 0.1)', padding: '0.55rem', borderRadius: '10px' }}>
                <ShieldCheck size={22} color="var(--color-accent)" />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-primary)' }}>Official AMFI Credentials</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>ARN: <strong>182137</strong> | Valid Until: <strong>July 2027</strong> | Lucknow Registered</div>
              </div>
            </div>

            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', maxWidth: '440px', lineHeight: 1.5 }}>
              Assure Securities strictly abides by the Code of Conduct prescribed by the Association of Mutual Funds in India (AMFI).
            </div>
          </div>

        </div>
      </section>

      {/* Advisory Callout Strip */}
      <section style={{ padding: '4.5rem 0', background: 'var(--color-primary)', color: '#ffffff' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', color: '#ffffff', fontWeight: 700, marginBottom: '1rem' }}>
            Ready to Build Your Structured Wealth Plan?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#94a3b8', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
            Connect with our certified mutual fund advisors at our Gomtinagar, Lucknow headquarters or book a virtual consultation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onOpenModal && onOpenModal('consultation')}
              className="btn-primary-emerald"
            >
              <span>Schedule a Meeting →</span>
            </button>
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="btn-outline-white"
            >
              <Phone size={15} />
              <span>Call Direct Desk</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
