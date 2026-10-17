import React from 'react';
import { Link } from 'react-router-dom';
import { PartnerSection } from '../components/PartnerSection';
import { Award, Users, CheckCircle2, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function PartnerPage() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. Editorial Page Header (LIGHT) */}
      <section className="section-theme-light" style={{ padding: 'clamp(5rem, 8vw, 7rem) 0 clamp(2.5rem, 4vw, 3.5rem) 0', borderBottom: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
        {/* Boardroom Partnership Atmosphere */}
        <div 
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '45%',
            backgroundImage: 'url(/assets/boardroom-luxury-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
            maskImage: 'linear-gradient(to right, transparent, black 80%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 80%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className="eyebrow-label">
            <span>ENTREPRENEURSHIP & ASSOCIATE PROGRAM • ARN-182137</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.8rem, 5.2vw, 4.4rem)', color: 'var(--color-text)', marginBottom: '1.25rem', lineHeight: 1.1 }}>
            Partner with <span className="text-blue" style={{ fontStyle: 'italic' }}>Assure</span>{' '}
            <span className="text-red" style={{ fontStyle: 'italic' }}>Securities</span>
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)', color: 'var(--color-text-secondary)', maxWidth: '720px', lineHeight: 1.65 }}>
            Empowering Sub-Brokers, Independent Financial Advisors, Tax Advocates, and Chartered Accountants across India with institutional wealth infrastructure, multi-AMC empanelment, and dedicated back-office technology.
          </p>
        </div>
      </section>

      {/* 2. Main Partner Section Component (DARK) */}
      <PartnerSection theme="dark" />

      {/* 3. Full Operational Support Pillars (LIGHT) */}
      <section className="section-pad section-theme-light" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          
          <div className="section-header-editorial">
            <div className="eyebrow-label">
              <span>FOUNDATIONAL SUPPORT</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3rem)', color: 'var(--color-text)' }}>
              How Assure Securities Empowers Your Practice
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { title: "NISM Series V-A Certification Prep", desc: "Exhaustive syllabus roadmaps, mock tests, and mentor guidance to clear your AMFI licensing exam on the very first attempt." },
              { title: "Consolidated Digital Back-Office", desc: "Track client folios, active SIP mandates, monthly brokerage payouts, and AUM growth in one encrypted cloud environment." },
              { title: "Unbiased Multi-AMC Access", desc: "Offer your clients top-quartile funds across SBI, HDFC, ICICI Pru, Nippon, Kotak, Axis, and 35+ more leading AMCs seamlessly." },
              { title: "HNI Co-Advisory Support", desc: "Our senior Lucknow advisory desk assists with complex ultra-HNI mandates, PMS/AIF structures, and corporate treasury deposits." }
            ].map((p, idx) => (
              <div key={idx} style={{ padding: '2rem', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '2px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '0.65rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

export default PartnerPage;
