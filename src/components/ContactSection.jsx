import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  MessageSquare, ExternalLink, ShieldCheck 
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
  const [isSent, setIsSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) {
      alert('Please provide your name and phone number.');
      return;
    }
    setIsSent(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '10px',
    border: isDark ? '1px solid #334155' : '1px solid #cbd5e1',
    background: isDark ? '#0f172a' : '#ffffff',
    color: isDark ? '#ffffff' : '#0f172a',
    outline: 'none'
  };

  const labelStyle = {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: isDark ? '#cbd5e1' : '#334155',
    display: 'block',
    marginBottom: '0.35rem'
  };

  return (
    <section 
      id="contact" 
      className={isDark ? "section-dark-navy section-wrapper" : "section-wrapper"} 
      style={{ 
        background: isDark ? '#0b1120' : '#f8fafc',
        borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : 'none'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-tag">Get In Touch</div>
          <h2 className="section-heading" style={{ color: isDark ? '#ffffff' : '#0f172a' }}>
            Visit Our Office or <span className="gradient-text">Schedule a Consultation</span>
          </h2>
          <p className="section-subheading" style={{ color: isDark ? '#cbd5e1' : '#475569' }}>
            Whether you want to start your first ₹1,000 SIP, rebalance an existing portfolio, or explore corporate FDs, our certified advisors are here to help.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="contact-grid">
          
          {/* Left Column: Office & Direct Communication Details */}
          <div>
            <div style={{ 
              background: isDark ? 'rgba(30, 41, 59, 0.75)' : '#ffffff', 
              borderRadius: '24px', 
              padding: '2.5rem', 
              border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', 
              boxShadow: 'var(--shadow-card)', 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between' 
            }}>
              
              <div>
                <h3 style={{ fontSize: '1.6rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800, marginBottom: '1.5rem' }}>
                  Assure Securities Headquarters
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                  {/* Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ background: isDark ? 'rgba(37,99,235,0.2)' : '#eff6ff', padding: '0.75rem', borderRadius: '12px', marginTop: '2px' }}>
                      <MapPin size={22} color={isDark ? "#38bdf8" : "#2563eb"} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 700, marginBottom: '0.2rem' }}>Office Address</h4>
                      <p style={{ fontSize: '0.92rem', color: isDark ? '#94a3b8' : '#475569', lineHeight: 1.5, margin: 0 }}>
                        {COMPANY_INFO.address}
                      </p>
                      <a 
                        href={COMPANY_INFO.googleMapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', fontWeight: 700, color: '#38bdf8', marginTop: '0.4rem' }}
                      >
                        <span>View on Google Maps</span>
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Phone Hotlines */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ background: isDark ? 'rgba(16,185,129,0.2)' : '#ecfdf5', padding: '0.75rem', borderRadius: '12px', marginTop: '2px' }}>
                      <Phone size={22} color="#10b981" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 700, marginBottom: '0.2rem' }}>Phone & Mobile Hotlines</h4>
                      <p style={{ fontSize: '0.92rem', color: isDark ? '#94a3b8' : '#475569', margin: 0 }}>
                        Mobile: <a href={`tel:${COMPANY_INFO.phone}`} style={{ fontWeight: 700, color: isDark ? '#38bdf8' : '#2563eb' }}>{COMPANY_INFO.phone}</a>
                      </p>
                      <p style={{ fontSize: '0.92rem', color: isDark ? '#94a3b8' : '#475569', margin: 0 }}>
                        Office Landline: <a href={`tel:${COMPANY_INFO.officePhone}`} style={{ fontWeight: 600, color: isDark ? '#cbd5e1' : '#334155' }}>{COMPANY_INFO.officePhone}</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ background: isDark ? 'rgba(245,158,11,0.2)' : '#fef3c7', padding: '0.75rem', borderRadius: '12px', marginTop: '2px' }}>
                      <Mail size={22} color="#f59e0b" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 700, marginBottom: '0.2rem' }}>Email Support</h4>
                      <p style={{ fontSize: '0.92rem', color: isDark ? '#94a3b8' : '#475569', margin: 0 }}>
                        <a href={`mailto:${COMPANY_INFO.email}`} style={{ fontWeight: 600, color: isDark ? '#38bdf8' : '#2563eb' }}>{COMPANY_INFO.email}</a>
                      </p>
                      <span style={{ fontSize: '0.78rem', color: isDark ? '#64748b' : '#64748b' }}>Response within 4 business hours</span>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{ background: isDark ? 'rgba(139,92,246,0.2)' : '#f3e8ff', padding: '0.75rem', borderRadius: '12px', marginTop: '2px' }}>
                      <Clock size={22} color="#a78bfa" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 700, marginBottom: '0.2rem' }}>Advisory Desk Hours</h4>
                      <p style={{ fontSize: '0.92rem', color: isDark ? '#94a3b8' : '#475569', margin: 0 }}>
                        Monday – Saturday: 9:30 AM to 6:30 PM (IST)
                      </p>
                      <span style={{ fontSize: '0.78rem', color: isDark ? '#64748b' : '#64748b' }}>Sunday: Prior appointments only</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Instant WhatsApp Support Button */}
              <div style={{ 
                background: isDark ? 'rgba(22, 101, 52, 0.25)' : '#f0fdf4', 
                padding: '1.25rem', 
                borderRadius: '16px', 
                border: isDark ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid #bbf7d0', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                flexWrap: 'wrap', 
                gap: '1rem' 
              }}>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: isDark ? '#4ade80' : '#166534' }}>Chat with us on WhatsApp</div>
                  <div style={{ fontSize: '0.78rem', color: isDark ? '#86efac' : '#15803d' }}>Instant portfolio review & scheme questions</div>
                </div>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Assure%20Securities,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-emerald"
                  style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <MessageSquare size={15} />
                  <span>Open WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Consultation & Query Form */}
          <div>
            <div style={{ 
              background: isDark ? 'rgba(30, 41, 59, 0.75)' : '#ffffff', 
              borderRadius: '24px', 
              padding: '2.5rem', 
              border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', 
              boxShadow: 'var(--shadow-card)' 
            }}>
              
              {isSent ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: isDark ? 'rgba(16,185,129,0.2)' : '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800, marginBottom: '0.5rem' }}>Message Received!</h3>
                  <p style={{ color: isDark ? '#cbd5e1' : '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you, <strong>{contactForm.name}</strong>. An authorized representative of Assure Securities will call you on <strong>{contactForm.phone}</strong> to guide you through your requirements.
                  </p>
                  <button 
                    onClick={() => { setIsSent(false); setContactForm({ name: '', email: '', phone: '', service: 'Mutual Funds', query: '' }); }}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSend}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className="badge-tag" style={{ margin: 0 }}>Free Advisory</span>
                    <h3 style={{ fontSize: '1.6rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800, marginTop: '0.4rem' }}>
                      Send Us Your Query
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: isDark ? '#94a3b8' : '#64748b', marginTop: '0.2rem' }}>
                      Fill out this quick form, and we will get back to you promptly.
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={labelStyle}>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Anand Trivedi"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                      <label style={labelStyle}>Mobile Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="10-digit number"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input 
                        type="email" 
                        placeholder="name@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={labelStyle}>Primary Product of Interest</label>
                    <select 
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="Mutual Funds (SIP / Lumpsum)" style={{ background: isDark ? '#0f172a' : '#fff', color: isDark ? '#fff' : '#000' }}>Mutual Funds (SIP / Lumpsum)</option>
                      <option value="Corporate Fixed Deposits" style={{ background: isDark ? '#0f172a' : '#fff', color: isDark ? '#fff' : '#000' }}>Corporate Fixed Deposits</option>
                      <option value="Bonds & Sovereign Gold" style={{ background: isDark ? '#0f172a' : '#fff', color: isDark ? '#fff' : '#000' }}>Bonds & Sovereign Gold</option>
                      <option value="Life & Term Insurance" style={{ background: isDark ? '#0f172a' : '#fff', color: isDark ? '#fff' : '#000' }}>Life & Term Insurance</option>
                      <option value="General & Health Insurance" style={{ background: isDark ? '#0f172a' : '#fff', color: isDark ? '#fff' : '#000' }}>General & Health Insurance</option>
                      <option value="Tax Saving Solutions (ELSS / 80C)" style={{ background: isDark ? '#0f172a' : '#fff', color: isDark ? '#fff' : '#000' }}>Tax Saving Solutions (ELSS / 80C)</option>
                      <option value="PMS & AIF for HNIs" style={{ background: isDark ? '#0f172a' : '#fff', color: isDark ? '#fff' : '#000' }}>PMS & AIF for HNIs</option>
                      <option value="Sub-Broker / Partnership Opportunity" style={{ background: isDark ? '#0f172a' : '#fff', color: isDark ? '#fff' : '#000' }}>Sub-Broker / Partnership Opportunity</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle}>Your Message / Financial Goal</label>
                    <textarea 
                      rows={3}
                      placeholder="Share details such as target amount, retirement age, or queries..."
                      value={contactForm.query}
                      onChange={(e) => setContactForm({ ...contactForm, query: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', justifyContent: 'center' }}
                  >
                    <span>Submit Query to Assure Team</span>
                    <Send size={16} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center', marginTop: '1rem', fontSize: '0.75rem', color: isDark ? '#94a3b8' : '#64748b' }}>
                    <ShieldCheck size={14} color="#10b981" />
                    <span>Your contact details are 100% confidential. No spam ever.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
