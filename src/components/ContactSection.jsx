import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  MessageSquare, ExternalLink, ShieldCheck, ArrowRight, AlertTriangle 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function ContactSection({ theme = 'dark' }) {
  const themeClass = theme === 'light' ? 'section-theme-light' : 'section-theme-dark';
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Mutual Funds & Wealth Strategy',
    query: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setError('');

    if (contactForm.name.trim().length < 2) {
      setError('Please provide your full name.');
      return;
    }
    const cleanPhone = contactForm.phone.replace(/[\s-]/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 600);
  };

  return (
    <section id="contact" className={`section-pad ${themeClass}`} style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="eyebrow-label">
            <span>DIRECT ADVISORY DESK</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: 'var(--color-text)', maxWidth: '650px', lineHeight: 1.12 }}>
              Connect with our <span className="text-blue">advisory desk</span>
              <br />
              <span className="text-red" style={{ fontStyle: 'italic' }}>
                & wealth stewards.
              </span>
            </h2>

            <p style={{ maxWidth: '440px', fontSize: '0.96rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
              Whether you are planning a new portfolio allocation or seeking a second opinion on existing holdings, our certified advisors are ready to assist.
            </p>
          </div>
        </div>

        {/* 2-Column Institutional Form & Coordinates Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'flex-start' }}>
          
          {/* Left Column: Direct Coordinates */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '2px', padding: '2rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--color-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Corporate Headquarters
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-text)', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)' }}>
                Lucknow Advisory Office
              </h3>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '1rem', color: 'var(--color-text-secondary)', fontSize: '0.92rem' }}>
                <MapPin size={18} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem', color: 'var(--color-text-secondary)', fontSize: '0.92rem' }}>
                <Phone size={16} color="var(--color-gold)" />
                <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: 'inherit' }}>{COMPANY_INFO.phone}</a>
                <span style={{ opacity: 0.3 }}>|</span>
                <a href={`tel:${COMPANY_INFO.officePhone}`} style={{ color: 'inherit' }}>{COMPANY_INFO.officePhone}</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem', color: 'var(--color-text-secondary)', fontSize: '0.92rem' }}>
                <Mail size={16} color="var(--color-gold)" />
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: 'inherit' }}>{COMPANY_INFO.email}</a>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--color-border)' }}>
                <a 
                  href={COMPANY_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-ghost-luxury"
                  style={{ fontSize: '0.84rem' }}
                >
                  <span>Open Directions on Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.015)', border: '1px solid var(--color-border)', borderRadius: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>
                <ShieldCheck size={16} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Statutory Registration
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                AMFI Registered Mutual Fund Distributor • ARN-182137. Registration valid from 20 July 2021 to 19 July 2027. Settle all investment proceeds directly with regulated AMCs.
              </p>
            </div>

          </div>

          {/* Right Column: Confidential Inquiries Form */}
          <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '2px', padding: 'clamp(2rem, 3.5vw, 3rem)' }}>
            
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                Request Consultation
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                Please provide your details for a confidential discussion with our senior advisory desk.
              </p>
            </div>

            {isSent ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle2 size={44} color="var(--color-gold)" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ color: 'var(--color-text)', fontSize: '1.4rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                  Inquiry Dispatched Successfully
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                  Thank you, <strong style={{ color: 'var(--color-text)' }}>{contactForm.name}</strong>. An Assure advisor will review your request and get in touch within 24 hours.
                </p>
                <button 
                  onClick={() => { setIsSent(false); setContactForm({ name: '', email: '', phone: '', service: 'Mutual Funds', query: '' }); }}
                  className="btn-outline"
                  style={{ height: '42px', fontSize: '0.82rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend} noValidate>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Alok Chandra Srivastava"
                    value={contactForm.name}
                    onChange={(e) => { setContactForm({ ...contactForm, name: e.target.value }); setError(''); }}
                    className="form-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">Mobile Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="e.g. 9455555742"
                      value={contactForm.phone}
                      onChange={(e) => { setContactForm({ ...contactForm, phone: e.target.value }); setError(''); }}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="e.g. alok@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Primary Wealth Solution</label>
                  <select 
                    value={contactForm.service}
                    onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    className="form-select"
                  >
                    <option value="Mutual Funds & Wealth Strategy">Mutual Funds & Wealth Strategy</option>
                    <option value="Corporate Fixed Deposits (AAA Rated)">Corporate Fixed Deposits (AAA Rated)</option>
                    <option value="Sovereign Gold Bonds & G-Secs">Sovereign Gold Bonds & G-Secs</option>
                    <option value="Life & Term Insurance Advisory">Life & Term Insurance Advisory</option>
                    <option value="Health & General Insurance">Health & General Insurance</option>
                    <option value="Tax Saving Strategies (ELSS / 80C)">Tax Saving Strategies (ELSS / 80C)</option>
                    <option value="PMS & AIF for HNIs (₹50L+)">PMS & AIF for HNIs (₹50L+)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Your Inquiry / Investment Objective</label>
                  <textarea 
                    rows={4}
                    placeholder="Briefly describe your investment horizon, milestones, or questions..."
                    value={contactForm.query}
                    onChange={(e) => setContactForm({ ...contactForm, query: e.target.value })}
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
                  {isSubmitting ? 'Submitting Inquiry...' : 'Submit Confidential Inquiry →'}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;
