import React from 'react';
import { 
  UserCheck, FileCheck, PhoneCall, Users, UserPlus, ExternalLink, 
  Download, FileText, ShieldAlert, CheckCircle2, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { INVESTOR_SERVICES, DOWNLOADABLE_FORMS, COMPANY_INFO } from '../data/websiteData';

export function InvestorZone({ onOpenModal, theme = 'dark' }) {
  const themeClass = theme === 'light' ? 'section-theme-light' : 'section-theme-dark';
  const getServiceIcon = (name) => {
    switch (name) {
      case 'UserCheck': return <UserCheck size={20} color="var(--color-gold)" />;
      case 'FileCheck': return <FileCheck size={20} color="#60a5fa" />;
      case 'PhoneCall': return <PhoneCall size={20} color="var(--color-gold)" />;
      case 'Users': return <Users size={20} color="#e2e8f0" />;
      case 'UserPlus': return <UserPlus size={20} color="var(--color-gold)" />;
      default: return <UserCheck size={20} color="var(--color-gold)" />;
    }
  };

  const handleDownloadForm = (formName) => {
    alert(`Downloading ${formName}... For pre-filled paperwork with ARN-182137, contact Assure Securities at care@assuresecurities.in or +91 9455555742.`);
  };

  return (
    <section id="investor-zone" className={`section-pad ${themeClass}`} style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="eyebrow-label">
            <span>REGULATORY PORTALS & SERVICE DESK</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: 'var(--color-text)', maxWidth: '650px', lineHeight: 1.12 }}>
              Official <span className="text-blue">Portals</span> &
              <br />
              <span className="text-red" style={{ fontStyle: 'italic' }}>
                Investor Service Hub.
              </span>
            </h2>

            <p style={{ maxWidth: '440px', fontSize: '0.96rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
              Direct access to official SEBI KRA portals, RTA platforms (CAMS & KFintech), and statutory compliance documents.
            </p>
          </div>
        </div>

        {/* 4-Pillar Custody Strip */}
        <div 
          style={{ 
            background: 'var(--color-bg-card)', 
            border: '1px solid var(--color-border)', 
            borderRadius: '2px', 
            padding: '1.75rem 2rem', 
            marginBottom: '3.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {[
            { label: "AMFI Registration", val: "ARN-182137", sub: "Valid till 19 July 2027" },
            { label: "Direct Settlement", val: "Zero Custody", sub: "Cheques & debits payable to AMC only" },
            { label: "RTA Connectivity", val: "CAMS & KFin", sub: "Official registrar automated sync" },
            { label: "Client Records", val: "256-Bit SSL", sub: "SEBI IT security framework compliant" }
          ].map((item, i) => (
            <div key={i} style={{ borderRight: i < 3 ? '1px solid var(--color-border)' : 'none', paddingRight: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: 'var(--color-gold)', fontWeight: 600 }}>
                {item.val}
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--color-text)', fontWeight: 500, marginTop: '0.2rem' }}>
                {item.label}
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', marginTop: '0.15rem' }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Official Services Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--color-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            SEBI & Registrar Direct Portals
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {INVESTOR_SERVICES.map((srv, idx) => (
              <a
                key={idx}
                href={srv.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '2px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  transition: 'all 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-gold-border)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ padding: '0.5rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '2px', border: '1px solid var(--color-border)' }}>
                      {getServiceIcon(srv.icon)}
                    </div>
                    <span className="metric-pill-dark">
                      {srv.portal}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '0.65rem' }}>
                    {srv.title}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    {srv.desc}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                  <span>Launch Official Portal</span>
                  <ExternalLink size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Standard Downloadable Compliance Forms */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--color-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Standard Regulatory Forms (PDF)
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
              Empaneled with ARN-182137
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {DOWNLOADABLE_FORMS.map((form, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.25rem 1.5rem',
                  background: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '2px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.92rem', color: 'var(--color-text)', fontWeight: 500 }}>
                    {form.name}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                    {form.category} • {form.size} • {form.type}
                  </div>
                </div>

                <button
                  onClick={() => handleDownloadForm(form.name)}
                  style={{
                    padding: '0.5rem 0.85rem',
                    background: 'var(--color-gold-dim)',
                    border: '1px solid var(--color-gold-border)',
                    borderRadius: '2px',
                    color: 'var(--color-gold)',
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-gold)';
                    e.currentTarget.style.color = '#090a0d';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--color-gold-dim)';
                    e.currentTarget.style.color = 'var(--color-gold)';
                  }}
                >
                  <Download size={12} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default InvestorZone;
