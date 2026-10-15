import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  MessageSquare, ExternalLink, ShieldCheck, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function ContactSection({ theme = "light" }) {
  const isDark = theme === "dark";
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Mutual Funds',
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
    <section 
      id="contact" 
      style={{ 
        background: isDark ? 'var(--color-primary)' : 'var(--color-bg)',
        padding: 'var(--section-pad-desktop) 0',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : 'none',
        color: isDark ? '#ffffff' : 'var(--color-text)'
      }}
      className="section-pad"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center reveal-on-scroll">
          <div className="eyebrow-pill emerald">
            <Sparkles size={13} />
            <span>Lucknow Advisory Headquarters</span>
          </div>

          <h2 style={{ color: isDark ? '#ffffff' : 'var(--color-primary)' }}>
            Visit Our Office or <span style={{ color: 'var(--color-accent)' }}>Schedule a Consultation</span>
          </h2>

          <p style={{ color: isDark ? '#94a3b8' : 'var(--color-text-secondary)' }}>
            Whether you want to start a disciplined SIP, rebalance an existing portfolio, or explore corporate FDs, our certified advisors are here to help.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* Left Column: Direct Credentials & Location */}
          <div 
            className={`${isDark ? "fintech-card-dark" : "fintech-card"} reveal-on-scroll stagger-1`}
            style={{ 
              padding: 'clamp(2rem, 3.5vw, 2.75rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                <ShieldCheck size={16} />
                <span>AMFI Registered ARN-182137</span>
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: isDark ? '#ffffff' : 'var(--color-primary)', marginBottom: '0.75rem' }}>
                Assure Securities Corporate Desk
              </h3>

              <p style={{ fontSize: '0.95rem', color: isDark ? '#94a3b8' : 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                We maintain direct empanelment across 40+ leading AMCs with paperless KYC and automated mandate generation for families across India.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <MapPin size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: isDark ? '#ffffff' : 'var(--color-primary)' }}>Registered Office</div>
                    <div style={{ fontSize: '0.88rem', color: isDark ? '#cbd5e1' : 'var(--color-text-secondary)', lineHeight: 1.5 }}>{COMPANY_INFO.address}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Phone size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: isDark ? '#ffffff' : 'var(--color-primary)' }}>Phone Assistance</div>
                    <div style={{ fontSize: '0.88rem', color: isDark ? '#cbd5e1' : 'var(--color-text-secondary)' }}>{COMPANY_INFO.phone} • {COMPANY_INFO.officePhone}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Mail size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: isDark ? '#ffffff' : 'var(--color-primary)' }}>Official Support Email</div>
                    <div style={{ fontSize: '0.88rem', color: isDark ? '#cbd5e1' : 'var(--color-text-secondary)' }}>{COMPANY_INFO.email}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Support */}
            <div 
              style={{ 
                background: isDark ? 'rgba(22, 185, 129, 0.1)' : '#f0fdf4', 
                border: '1px solid rgba(22, 185, 129, 0.25)', 
                borderRadius: '16px', 
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: isDark ? '#ffffff' : '#065f46' }}>Quick WhatsApp Support</div>
                <div style={{ fontSize: '0.78rem', color: isDark ? '#94a3b8' : '#047857' }}>Instant scheme questions & appointment booking</div>
              </div>

              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Assure%20Securities,%20I%20would%20like%20to%20consult%20an%20advisor.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-emerald"
                style={{ height: '42px', padding: '0 1.15rem', fontSize: '0.85rem' }}
              >
                <MessageSquare size={14} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Section 23 Form UI */}
          <div 
            className="fintech-card reveal-on-scroll stagger-2"
            style={{ 
              background: '#ffffff',
              padding: 'clamp(2rem, 3.5vw, 2.75rem)'
            }}
          >
            {isSent ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(22, 185, 129, 0.15)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>Callback Request Received</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Thank you, <strong>{contactForm.name}</strong>. An authorized representative of Assure Securities will call you on <strong>{contactForm.phone}</strong> to guide you through your requirements.
                </p>
                <button 
                  onClick={() => { setIsSent(false); setContactForm({ name: '', email: '', phone: '', service: 'Mutual Funds', query: '' }); }}
                  className="btn-outline-navy"
                  style={{ height: '44px', fontSize: '0.88rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Unbiased Client Guidance
                  </span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', fontWeight: 700, marginTop: '0.25rem' }}>
                    Request Advisory Call
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
                    Fill out this form, and our Lucknow investment desk will connect with you promptly.
                  </p>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label className="fintech-label">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Anand Trivedi"
                    value={contactForm.name}
                    onChange={(e) => { setContactForm({ ...contactForm, name: e.target.value }); setError(''); }}
                    className={`fintech-input ${error && contactForm.name.trim().length < 2 ? 'input-error' : ''}`}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label className="fintech-label">Mobile Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="10-digit number"
                      value={contactForm.phone}
                      onChange={(e) => { setContactForm({ ...contactForm, phone: e.target.value }); setError(''); }}
                      className={`fintech-input ${error && !/^[6-9]\d{9}$/.test(contactForm.phone.replace(/[\s-]/g, '')) ? 'input-error' : ''}`}
                    />
                  </div>

                  <div>
                    <label className="fintech-label">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="fintech-input"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label className="fintech-label">Area of Interest</label>
                  <select 
                    value={contactForm.service}
                    onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    className="fintech-input"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="Mutual Funds">Mutual Funds (SIP & Lumpsum)</option>
                    <option value="Fixed Deposits">Corporate Fixed Deposits (AAA)</option>
                    <option value="Bonds">Sovereign Gold Bonds & 54EC</option>
                    <option value="Portfolio Review">Comprehensive Portfolio Health-Check</option>
                    <option value="Insurance">Life & Health Insurance</option>
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="fintech-label">Message / Goal Summary</label>
                  <textarea 
                    rows="3"
                    placeholder="Share any specific milestones or questions..."
                    value={contactForm.query}
                    onChange={(e) => setContactForm({ ...contactForm, query: e.target.value })}
                    className="fintech-input"
                    style={{ height: 'auto', padding: '0.85rem 1.1rem', resize: 'vertical' }}
                  />
                </div>

                {error && (
                  <div className="form-error-msg" style={{ marginBottom: '1.25rem', background: '#fef2f2', padding: '0.65rem 0.85rem', borderRadius: '8px' }}>
                    <ShieldCheck size={15} color="#dc2626" style={{ flexShrink: 0 }} />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit CTA */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary-emerald"
                  style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.75 : 1 }}
                >
                  {isSubmitting ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className="pulse-dot-green" /> Sending Request...
                    </span>
                  ) : (
                    <span>Request a Callback →</span>
                  )}
                </button>

                <p style={{ textAlign: 'center', fontSize: '0.74rem', color: 'var(--color-muted)', marginTop: '0.85rem' }}>
                  Zero spam guaranteed. Your data is strictly protected under AMFI statutory compliance.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
