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
        background: isDark ? '#0f172a' : '#ffffff',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : 'none'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-tag">Investor Self-Service & Compliance</div>
          <h2 className="section-heading" style={{ color: isDark ? '#ffffff' : '#0f172a' }}>
            Official Portals, <span className="gradient-text">KYC & Document Center</span>
          </h2>
          <p className="section-subheading" style={{ color: isDark ? '#cbd5e1' : '#64748b' }}>
            Convenient, direct access to official SEBI, KRA, and Registrar service portals to keep your mutual fund folios 100% compliant and up-to-date.
          </p>
        </div>

        {/* 5 Official Service Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
          {INVESTOR_SERVICES.map((srv, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{ 
                padding: '1.6rem', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                background: isDark ? 'rgba(30, 41, 59, 0.75)' : '#ffffff', 
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0',
                color: isDark ? '#ffffff' : '#0f172a'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ background: isDark ? '#1e293b' : '#eff6ff', padding: '0.65rem', borderRadius: '12px' }}>
                    {getServiceIcon(srv.icon)}
                  </div>
                  <span style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: 700, 
                    padding: '0.2rem 0.5rem', 
                    borderRadius: '4px', 
                    background: isDark ? 'rgba(255,255,255,0.1)' : '#f1f5f9', 
                    color: isDark ? '#cbd5e1' : '#475569' 
                  }}>
                    {srv.portal}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {srv.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: isDark ? '#cbd5e1' : '#64748b', lineHeight: 1.5, marginBottom: '1rem' }}>
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
                  padding: '0.65rem', 
                  fontSize: '0.85rem', 
                  justifyContent: 'center',
                  background: isDark ? '#1e293b' : '#ffffff',
                  color: isDark ? '#38bdf8 !important' : 'var(--primary-700) !important',
                  borderColor: isDark ? 'rgba(56, 189, 248, 0.3)' : 'var(--primary-200)'
                }}
              >
                <span>Open Official Portal</span>
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
