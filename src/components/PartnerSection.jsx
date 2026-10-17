import React, { useState } from 'react';
import { Briefcase, CheckCircle2, TrendingUp, Users, Shield, ArrowRight, Phone, Mail, Award, AlertTriangle } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function PartnerSection({ theme = 'dark' }) {
  const themeClass = theme === 'light' ? 'section-theme-light' : 'section-theme-dark';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    currentProfession: 'Financial Advisor',
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
    <section id="partner" className={`section-pad ${themeClass}`} style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="eyebrow-label">
            <span>INSTITUTIONAL PARTNERSHIP NETWORK</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: 'var(--color-text)', maxWidth: '650px', lineHeight: 1.12 }}>
              Partner with
              <br />
              <span className="text-blue" style={{ fontStyle: 'italic' }}>Assure</span>{' '}
              <span className="text-red" style={{ fontStyle: 'italic' }}>Securities.</span>
            </h2>

            <p style={{ maxWidth: '440px', fontSize: '0.96rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
              Institutional infrastructure for Independent Financial Advisors, Chartered Accountants, Tax Professionals, and wealth practitioners across India.
            </p>
          </div>
        </div>

        {/* 2-Column Partner Proposition & Onboarding Application */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'flex-start' }}>
          
          {/* Left: Value Proposition */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '2px', padding: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--color-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Associate Infrastructure
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '1.25rem' }}>
                Scale Your Practice to Institutional Dimensions
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: "Direct Empanelment with 40+ AMCs", desc: "Access India's top asset managers without negotiating individual institutional distribution agreements." },
                  { title: "NISM Series V-A Certification Mentorship", desc: "Exhaustive exam preparation materials, question bank reviews, and mock drills." },
                  { title: "Consolidated Digital Back-Office", desc: "Automated brokerage reconciliation, client folio tracking, and white-labeled investor portal capabilities." },
                  { title: "Dedicated Lucknow Advisory Desk", desc: "Direct relationship manager support for complex HNI proposals, corporate debt allocations, and family transmissions." }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={16} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <div style={{ fontSize: '0.92rem', color: 'var(--color-text)', fontWeight: 600 }}>{item.title}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: '0.2rem', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.015)', border: '1px solid var(--color-border)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Partner Desk Contact
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                Direct Partner Desk: <strong style={{ color: 'var(--color-text)' }}>{COMPANY_INFO.phone}</strong> • {COMPANY_INFO.email}
              </p>
            </div>

          </div>

          {/* Right: Partner Application Form */}
          <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '2px', padding: 'clamp(2rem, 3.5vw, 3rem)' }}>
            
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                Partner Empanelment Request
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Begin your accreditation process with Assure Securities (AMFI ARN-182137).
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle2 size={44} color="var(--color-gold)" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.4rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                  Application Received
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                  Thank you, <strong style={{ color: 'var(--color-text)' }}>{formData.name}</strong>. Our partner onboarding director will connect with you at <strong style={{ color: 'var(--color-gold)' }}>{formData.phone}</strong>.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', city: '', currentProfession: 'Financial Advisor', message: '' }); }}
                  className="btn-outline"
                  style={{ height: '42px', fontSize: '0.82rem' }}
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Vikramaditya Singh"
                    value={formData.name}
                    onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setError(''); }}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">Mobile Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setError(''); }}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="e.g. vikram@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">City / Operating Location</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Lucknow, Kanpur, Varanasi"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Current Profession</label>
                    <select 
                      value={formData.currentProfession}
                      onChange={(e) => setFormData({ ...formData, currentProfession: e.target.value })}
                      className="form-select"
                    >
                      <option value="Financial Advisor">Independent Financial Advisor</option>
                      <option value="Chartered Accountant">Chartered Accountant (CA)</option>
                      <option value="Tax Practitioner">Tax Practitioner / Advocate</option>
                      <option value="Insurance Agent">Insurance Advisor / Agent</option>
                      <option value="Career Transition">Career Transition into Wealth</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Brief Professional Background</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us about your client base, current AUM, or goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                {error && (
                  <div style={{ marginBottom: '1.25rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', padding: '0.65rem 0.9rem', borderRadius: '2px', color: '#fca5a5', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertTriangle size={15} color="#ef4444" style={{ flexShrink: 0 }} />
                    <span>{error}</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-gold"
                  style={{ width: '100%', height: '48px', fontSize: '0.84rem', justifyContent: 'center' }}
                >
                  {isSubmitting ? 'Transmitting Profile...' : 'Submit Partner Application →'}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default PartnerSection;
