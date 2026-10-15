import React, { useState } from 'react';
import { Briefcase, CheckCircle2, TrendingUp, Users, Shield, ArrowRight, Phone, Mail, Award, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function PartnerSection({ theme = "light" }) {
  const isDark = theme === "dark";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    currentProfession: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.name.trim().length < 2) {
      setError('Please provide your full name.');
      return;
    }
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section 
      id="partner" 
      className={isDark ? "section-dark section-wrapper" : "section-light section-wrapper"}
      style={{ 
        background: isDark ? '#0f172a' : '#f8fafc', 
        color: isDark ? '#ffffff' : '#0f172a' 
      }}
    >
      <div className="container">
        
        {/* Header */}
        <div className="section-title-wrap reveal-on-scroll">
          <div className="badge-tag" style={{ background: isDark ? 'rgba(56, 189, 248, 0.15)' : '#e0f2fe', borderColor: isDark ? 'rgba(56, 189, 248, 0.3)' : '#7dd3fc', color: isDark ? '#38bdf8' : '#0369a1' }}>
            <Award size={13} />
            <span>Sub-Broker & Associate Program</span>
          </div>
          <h2 className="section-heading" style={{ color: isDark ? '#ffffff' : '#0f172a' }}>
            Be Your Own Boss: <span className="gradient-text">Partner with Assure Securities</span>
          </h2>
          <p className="section-subheading" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>
            Opportunity for ambitious sub-brokers, financial advisors, tax consultants, and entrepreneurs. Start your journey to become an authorized Mutual Fund distributor backed by our institutional platform.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="partner-grid">
          
          {/* Left Column: Partnership Perks */}
          <div className="reveal-on-scroll stagger-1">
            <h3 style={{ fontSize: '1.8rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800, marginBottom: '1rem' }}>
              Why Become an Assure Associate?
            </h3>
            <p style={{ color: isDark ? '#cbd5e1' : '#475569', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Building a wealth management practice requires licenses, compliance overhead, and AMC empanelment. When you partner with Assure Securities, you instantly gain access to a ready-made institutional platform, transparent revenue sharing, and back-office support.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                { title: "Attractive Trailing Revenue Sharing", desc: "Earn consistent, lifetime recurring commissions on client investments across 40+ AMCs." },
                { title: "State-of-the-Art Digital Platform", desc: "Offer 100% paperless onboarding and mobile portfolio access to your clients." },
                { title: "Exhaustive Product Spectrum", desc: "Distribute Mutual Funds, Corporate FDs, Sovereign Bonds, Health & Life Insurance, and PMS/AIF under one roof." },
                { title: "Full Back-Office & Research Desk", desc: "No administrative headache. Our dedicated team handles operational queries and portfolio reports." }
              ].map((perk, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div style={{ background: isDark ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5', padding: '0.35rem', borderRadius: '50%', marginTop: '3px' }}>
                    <CheckCircle2 size={18} color="#10b981" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: isDark ? '#ffffff' : '#1e293b', fontWeight: 700, marginBottom: '2px' }}>{perk.title}</h4>
                    <p style={{ fontSize: '0.88rem', color: isDark ? '#94a3b8' : '#64748b', margin: 0 }}>{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Hotline Pill */}
            <div style={{ 
              background: isDark ? 'rgba(255,255,255,0.05)' : '#ffffff', 
              padding: '1.25rem', 
              borderRadius: '16px', 
              border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem', 
              flexWrap: 'wrap' 
            }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: isDark ? '#94a3b8' : '#64748b' }}>Direct Partner Desk:</div>
                <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.1rem' }}>
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div style={{ borderLeft: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', paddingLeft: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', color: isDark ? '#94a3b8' : '#64748b' }}>Email Partnership Query:</div>
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: isDark ? '#ffffff' : '#0f172a', fontWeight: 600, fontSize: '0.95rem' }}>
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Partner Onboarding Form */}
          <div className="reveal-on-scroll stagger-2">
            <div style={{ 
              background: isDark ? '#1e293b' : '#ffffff', 
              borderRadius: '24px', 
              padding: '2.5rem', 
              border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', 
              boxShadow: isDark ? '0 25px 50px -12px rgba(0,0,0,0.5)' : 'var(--shadow-card)' 
            }}>
              
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800, marginBottom: '0.5rem' }}>Application Received!</h3>
                  <p style={{ color: isDark ? '#cbd5e1' : '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.name}</strong>. Our Head of Partner Relations will contact you at <strong>{formData.phone}</strong> within 24 business hours to discuss commission structures and onboarding.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', city: '', currentProfession: '', message: '' }); }}
                    className="btn-secondary"
                    style={{ fontSize: '0.88rem' }}
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Start Your Journey
                    </span>
                    <h3 style={{ fontSize: '1.5rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800, marginTop: '2px' }}>
                      Partner Enrollment Form
                    </h3>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: isDark ? '#cbd5e1' : '#334155', display: 'block', marginBottom: '0.35rem' }}>Your Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ 
                          width: '100%', 
                          padding: '0.75rem', 
                          borderRadius: '10px', 
                          background: isDark ? '#0f172a' : '#ffffff', 
                          border: isDark ? '1px solid #334155' : '1px solid #cbd5e1', 
                          color: isDark ? '#ffffff' : '#0f172a', 
                          outline: 'none' 
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: isDark ? '#cbd5e1' : '#334155', display: 'block', marginBottom: '0.35rem' }}>Mobile Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="10-digit Mobile"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ 
                          width: '100%', 
                          padding: '0.75rem', 
                          borderRadius: '10px', 
                          background: isDark ? '#0f172a' : '#ffffff', 
                          border: isDark ? '1px solid #334155' : '1px solid #cbd5e1', 
                          color: isDark ? '#ffffff' : '#0f172a', 
                          outline: 'none' 
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: isDark ? '#cbd5e1' : '#334155', display: 'block', marginBottom: '0.35rem' }}>Email Address</label>
                      <input 
                        type="email" 
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ 
                          width: '100%', 
                          padding: '0.75rem', 
                          borderRadius: '10px', 
                          background: isDark ? '#0f172a' : '#ffffff', 
                          border: isDark ? '1px solid #334155' : '1px solid #cbd5e1', 
                          color: isDark ? '#ffffff' : '#0f172a', 
                          outline: 'none' 
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: isDark ? '#cbd5e1' : '#334155', display: 'block', marginBottom: '0.35rem' }}>City / Location</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Lucknow, Kanpur"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        style={{ 
                          width: '100%', 
                          padding: '0.75rem', 
                          borderRadius: '10px', 
                          background: isDark ? '#0f172a' : '#ffffff', 
                          border: isDark ? '1px solid #334155' : '1px solid #cbd5e1', 
                          color: isDark ? '#ffffff' : '#0f172a', 
                          outline: 'none' 
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.85rem', color: isDark ? '#cbd5e1' : '#334155', display: 'block', marginBottom: '0.35rem' }}>Current Profession</label>
                    <select
                      value={formData.currentProfession}
                      onChange={(e) => setFormData({ ...formData, currentProfession: e.target.value })}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        borderRadius: '10px', 
                        background: isDark ? '#0f172a' : '#ffffff', 
                        border: isDark ? '1px solid #334155' : '1px solid #cbd5e1', 
                        color: isDark ? '#ffffff' : '#0f172a', 
                        outline: 'none' 
                      }}
                    >
                      <option value="">Select your background</option>
                      <option value="Existing MFD / Sub-broker">Existing MFD / Sub-broker</option>
                      <option value="Insurance Agent">Insurance Agent</option>
                      <option value="Chartered Accountant / Tax Consultant">Chartered Accountant / Tax Consultant</option>
                      <option value="Banker / Financial Professional">Banker / Financial Professional</option>
                      <option value="Individual Entrepreneur">Individual Entrepreneur</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.85rem', color: isDark ? '#cbd5e1' : '#334155', display: 'block', marginBottom: '0.35rem' }}>Brief Note / Query</label>
                    <textarea 
                      rows={3}
                      placeholder="Tell us about your current investor base or aspirations..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ 
                        width: '100%', 
                        padding: '0.75rem', 
                        borderRadius: '10px', 
                        background: isDark ? '#0f172a' : '#ffffff', 
                        border: isDark ? '1px solid #334155' : '1px solid #cbd5e1', 
                        color: isDark ? '#ffffff' : '#0f172a', 
                        outline: 'none', 
                        resize: 'vertical' 
                      }}
                    />
                  </div>

                  {error && (
                    <div style={{ marginBottom: '1.25rem', background: '#fef2f2', border: '1px solid #fee2e2', color: '#dc2626', padding: '0.65rem 0.85rem', borderRadius: '8px', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={15} color="#dc2626" style={{ flexShrink: 0 }} />
                      <span>{error}</span>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', justifyContent: 'center', opacity: isSubmitting ? 0.75 : 1 }}
                  >
                    {isSubmitting ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="pulse-dot-green" /> Processing Application...
                      </span>
                    ) : (
                      <>
                        <span>Submit Partner Application</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .partner-grid { grid-template-columns: 1.15fr 0.85fr !important; }
        }
      `}</style>
    </section>
  );
}
