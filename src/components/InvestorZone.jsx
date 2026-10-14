import React from 'react';
import { 
  UserCheck, FileCheck, PhoneCall, Users, UserPlus, ExternalLink, 
  Download, FileText, ShieldAlert, CheckCircle, ArrowRight
} from 'lucide-react';
import { INVESTOR_SERVICES, DOWNLOADABLE_FORMS, COMPANY_INFO } from '../data/websiteData';

export function InvestorZone({ onOpenModal, theme = "dark" }) {
  const isDark = theme === "dark";

  const getServiceIcon = (name) => {
    switch (name) {
      case 'UserCheck': return <UserCheck size={24} color={isDark ? "#38bdf8" : "#2563eb"} />;
      case 'FileCheck': return <FileCheck size={24} color="#10b981" />;
      case 'PhoneCall': return <PhoneCall size={24} color="#f59e0b" />;
      case 'Users': return <Users size={24} color="#a78bfa" />;
      case 'UserPlus': return <UserPlus size={24} color="#38bdf8" />;
      default: return <UserCheck size={24} color={isDark ? "#38bdf8" : "#2563eb"} />;
    }
  };

  const handleDownloadForm = (formName) => {
    alert(`Downloading ${formName}... If you need pre-filled paperwork with ARN-182137, contact Assure Securities at care@assuresecurities.in or +91 9455555742.`);
  };

  return (
    <section 
      id="investor-zone" 
      className={isDark ? "section-dark section-wrapper" : "section-light-white section-wrapper"}
      style={{ 
        background: isDark ? '#0b1120' : '#ffffff',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : 'none',
        padding: '5rem 0'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: isDark ? 'rgba(56, 189, 248, 0.12)' : '#e0f2fe', color: isDark ? '#38bdf8' : '#0369a1', border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #bae6fd', padding: '0.35rem 0.9rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <CheckCircle size={14} color="#10b981" />
            <span>SEBI & AMFI Regulatory Infrastructure • ARN-182137</span>
          </div>
          <h2 className="section-heading" style={{ color: isDark ? '#ffffff' : '#0f172a', fontSize: '2.3rem' }}>
            Official Portals, <span className="gradient-text">e-KYC & Regulatory Compliance Hub</span>
          </h2>
          <p className="section-subheading" style={{ color: isDark ? '#cbd5e1' : '#64748b' }}>
            Direct, uninterrupted access to sovereign KYC registration agencies, SEBI-licensed registrars (CAMS & KFintech), and statutory mutual fund document repositories.
          </p>
        </div>

        {/* 4-Pillar Zero-Custody Security Matrix */}
        <div style={{
          background: isDark ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)' : '#f8fafc',
          border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #e2e8f0',
          borderRadius: '22px',
          padding: '2rem 2.5rem',
          marginBottom: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Zero Custody Risk</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: isDark ? '#ffffff' : '#0f172a', marginTop: '0.25rem' }}>Direct-to-AMC Funds Flow</div>
            <div style={{ fontSize: '0.8rem', color: isDark ? '#94a3b8' : '#64748b', marginTop: '0.25rem', lineHeight: 1.5 }}>
              Your money never touches Assure bank accounts. Payments route directly to respective AMC escrow accounts.
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Statutory Registrars</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: isDark ? '#ffffff' : '#0f172a', marginTop: '0.25rem' }}>CAMS & KFintech Integrated</div>
            <div style={{ fontSize: '0.8rem', color: isDark ? '#94a3b8' : '#64748b', marginTop: '0.25rem', lineHeight: 1.5 }}>
              All folios created under your direct PAN. Access independent Consolidated Account Statements (CAS) anytime.
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Exchange Settlement</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: isDark ? '#ffffff' : '#0f172a', marginTop: '0.25rem' }}>BSE StAR MF Execution</div>
            <div style={{ fontSize: '0.8rem', color: isDark ? '#94a3b8' : '#64748b', marginTop: '0.25rem', lineHeight: 1.5 }}>
              Institutional trade routing with instant automated payment authentication via UPI, Netbanking & OTM.
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Full Confidentiality</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: isDark ? '#ffffff' : '#0f172a', marginTop: '0.25rem' }}>256-Bit Cryptographic Vault</div>
            <div style={{ fontSize: '0.8rem', color: isDark ? '#94a3b8' : '#64748b', marginTop: '0.25rem', lineHeight: 1.5 }}>
              Enterprise data protection. We strictly uphold non-disclosure and confidentiality of all private family assets.
            </div>
          </div>
        </div>

        {/* 5 Official Service Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
          {INVESTOR_SERVICES.map((srv, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{ 
                padding: '1.75rem', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                background: isDark ? '#0f172a' : '#ffffff', 
                border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #e2e8f0',
                borderRadius: '18px',
                color: isDark ? '#ffffff' : '#0f172a',
                boxShadow: isDark ? '0 10px 25px rgba(0,0,0,0.4)' : '0 4px 15px rgba(0,0,0,0.04)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{ background: isDark ? '#1e293b' : '#eff6ff', padding: '0.7rem', borderRadius: '14px', border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #dbeafe' }}>
                    {getServiceIcon(srv.icon)}
                  </div>
                  <span style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: 800, 
                    padding: '0.25rem 0.6rem', 
                    borderRadius: '6px', 
                    background: isDark ? 'rgba(56, 189, 248, 0.15)' : '#e0f2fe', 
                    color: isDark ? '#38bdf8' : '#0284c7',
                    border: isDark ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid #bae6fd',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {srv.portal}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                  {srv.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {srv.desc}
                </p>
              </div>

              <a 
                href={srv.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ 
                  width: '100%', 
                  padding: '0.75rem', 
                  fontSize: '0.85rem', 
                  fontWeight: 700,
                  justifyContent: 'center',
                  background: isDark ? '#1e293b' : '#ffffff',
                  color: isDark ? '#38bdf8 !important' : 'var(--primary-700) !important',
                  borderColor: isDark ? 'rgba(56, 189, 248, 0.3)' : 'var(--primary-200)',
                  borderRadius: '10px'
                }}
              >
                <span>Launch Official Portal</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Form Downloads Center */}
        <div style={{ 
          background: isDark ? 'rgba(30, 41, 59, 0.6)' : '#f8fafc', 
          borderRadius: '24px', 
          padding: '2.5rem', 
          border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
            <div>
              <span className="badge-tag accent-emerald" style={{ margin: 0 }}>Downloads Center</span>
              <h3 style={{ fontSize: '1.5rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800, marginTop: '0.35rem' }}>
                Standard Investor Forms & Mandates
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: isDark ? '#cbd5e1' : '#64748b', maxWidth: '420px', margin: 0 }}>
              Official physical & digital paperwork for initial investment, banking changes, and regulatory declarations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {DOWNLOADABLE_FORMS.map((form, i) => (
              <div 
                key={i}
                style={{ 
                  background: isDark ? '#0f172a' : '#ffffff', 
                  padding: '1.25rem', 
                  borderRadius: '16px', 
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  gap: '1rem' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ background: '#fee2e2', color: '#dc2626', padding: '0.65rem', borderRadius: '10px' }}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.92rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 700, marginBottom: '2px' }}>{form.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: isDark ? '#94a3b8' : '#64748b' }}>{form.category} • {form.size}</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleDownloadForm(form.name)}
                  style={{ 
                    background: isDark ? 'rgba(56,189,248,0.15)' : '#eff6ff', 
                    color: isDark ? '#38bdf8' : '#2563eb', 
                    padding: '0.5rem', 
                    borderRadius: '8px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}
                  title="Download PDF"
                >
                  <Download size={17} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ 
            marginTop: '2rem', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem', 
            background: isDark ? '#0f172a' : '#ffffff', 
            padding: '1.25rem', 
            borderRadius: '14px', 
            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: isDark ? '#cbd5e1' : '#475569', fontSize: '0.88rem' }}>
              <CheckCircle size={16} color="#10b981" />
              <span>All forms are compliant with SEBI & AMFI circulars for ARN-182137.</span>
            </div>
            <button onClick={() => onOpenModal('consultation')} style={{ color: '#38bdf8', fontWeight: 700, fontSize: '0.88rem' }}>
              Need Help With Paperwork? Ask Assure Team &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
