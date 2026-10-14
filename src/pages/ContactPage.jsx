import React from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, ShieldCheck, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function ContactPage() {
  return (
    <div>
      
      {/* Section 1: Page Header Banner (Dark) */}
      <section className="section-dark-navy" style={{ padding: '4.5rem 0 3.5rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#38bdf8', fontWeight: 600 }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Contact Us</span>
          </div>

          <div className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
            Get in Touch • Lucknow Advisory Desk
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
            Contact <span className="gradient-text">Assure Securities</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6 }}>
            Visit our corporate office in Gomtinagar, Lucknow or reach out to our certified advisors for mutual fund distribution, portfolio review, and financial goal consulting.
          </p>
        </div>
      </section>

      {/* Section 2: Contact Form & Main Headquarter Details (Light) */}
      <div style={{ background: '#f8fafc' }}>
        <ContactSection theme="light" />
      </div>

      {/* Section 3: Branch Location Map Directions & Priority Escalation (Dark) */}
      <section className="section-dark-navy" style={{ padding: '5rem 0', background: '#0b1120', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="contact-loc-grid">
            
            <div>
              <span className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
                In-Person Consultations
              </span>
              <h2 className="section-heading" style={{ color: '#ffffff', marginBottom: '1rem' }}>
                Visit Us in <span className="gradient-text">Gomtinagar, Lucknow</span>
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Located conveniently in the business heart of Lucknow. Clients are welcome to visit for in-depth portfolio reviews, transmission assistance, and estate planning discussions. Prior appointment is recommended for dedicated senior advisor time.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: 'rgba(37,99,235,0.2)', padding: '0.6rem', borderRadius: '12px' }}>
                    <MapPin size={22} color="#38bdf8" />
                  </div>
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>Full Address</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.88rem' }}>{COMPANY_INFO.address}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: 'rgba(16,185,129,0.2)', padding: '0.6rem', borderRadius: '12px' }}>
                    <Clock size={22} color="#10b981" />
                  </div>
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>Operating Hours</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.88rem' }}>Mon – Sat: 9:30 AM – 6:30 PM (Sunday by appointment)</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href={COMPANY_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
                >
                  <Navigation size={16} />
                  <span>Get Driving Directions</span>
                </a>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Assure%20Securities,%20I%20would%20like%20to%20schedule%20an%20office%20visit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-emerald"
                  style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
                >
                  <MessageSquare size={16} />
                  <span>Book Appointment Slot</span>
                </a>
              </div>
            </div>

            {/* Quick Escalation Card */}
            <div>
              <div 
                className="glass-card" 
                style={{ 
                  background: 'rgba(30, 41, 59, 0.75)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '24px', 
                  padding: '2.5rem',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(16,185,129,0.15)', padding: '0.6rem', borderRadius: '12px' }}>
                    <ShieldCheck size={26} color="#10b981" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: '#ffffff', fontWeight: 700, margin: 0 }}>Grievance & Escalation Desk</h3>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Compliant with SEBI & AMFI Investor Charter</span>
                  </div>
                </div>

                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  At Assure Securities, client satisfaction is our utmost priority. If your query has not been addressed within 24 business hours, please write directly to our principal compliance officer.
                </p>

                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '16px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.2rem' }}>Principal Compliance Email</div>
                  <div style={{ fontSize: '1.05rem', color: '#38bdf8', fontWeight: 700 }}>care@assuresecurities.in</div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.6rem', marginBottom: '0.2rem' }}>Direct Principal Contact</div>
                  <div style={{ fontSize: '1.05rem', color: '#10b981', fontWeight: 700 }}>+91 9455555742</div>
                </div>

                <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  You may also lodge complaints through SEBI SCORES portal (scores.gov.in) or AMFI grievance resolution cells.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .contact-loc-grid { grid-template-columns: 1.15fr 0.85fr !important; }
        }
      `}</style>
    </div>
  );
}
