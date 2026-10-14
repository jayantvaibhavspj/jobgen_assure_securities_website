import React from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, ShieldCheck, Navigation, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function ContactPage() {
  return (
    <div>
      {/* Page Header Banner (Dark Navy #071A2F) */}
      <section style={{ background: 'var(--color-primary)', color: '#ffffff', padding: '4.5rem 0 3.5rem 0', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Contact Us</span>
          </div>

          <div className="eyebrow-pill emerald">
            <Sparkles size={13} />
            <span>Lucknow Advisory Headquarters</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            Contact <span style={{ color: 'var(--color-accent)' }}>Assure Securities</span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '680px', lineHeight: 1.6, margin: 0 }}>
            Visit our corporate office in Gomtinagar, Lucknow or connect with our certified advisors for mutual fund distribution, portfolio review, and financial goal consulting.
          </p>
        </div>
      </section>

      {/* Main Form & Office Details (Light Gray #F7F9FC) */}
      <ContactSection theme="light" />

      {/* Branch Location & Grievance Protocol (Dark Navy #071A2F) */}
      <section style={{ padding: 'var(--section-pad-desktop) 0', background: 'var(--color-primary)', color: '#ffffff', borderTop: '1px solid rgba(255,255,255,0.08)' }} className="section-pad">
        <div className="container">
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: 'clamp(2.5rem, 5vw, 4rem)', 
              alignItems: 'center' 
            }}
          >
            <div>
              <div className="eyebrow-pill emerald">
                <MapPin size={13} />
                <span>In-Person Consultations</span>
              </div>

              <h2 style={{ color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
                Visit Us in <span style={{ color: 'var(--color-accent)' }}>Gomtinagar, Lucknow</span>
              </h2>

              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Located conveniently in the business heart of Lucknow. Clients are welcome to visit for in-depth portfolio reviews, transmission assistance, and goal planning discussions. Prior appointment is recommended for dedicated senior advisor time.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ background: 'rgba(22, 185, 129, 0.1)', padding: '0.65rem', borderRadius: '12px' }}>
                    <MapPin size={20} color="var(--color-accent)" />
                  </div>
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.92rem' }}>Full Address</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{COMPANY_INFO.address}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ background: 'rgba(22, 185, 129, 0.1)', padding: '0.65rem', borderRadius: '12px' }}>
                    <Clock size={20} color="var(--color-accent)" />
                  </div>
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.92rem' }}>Operating Hours</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Mon – Sat: 9:30 AM – 6:30 PM (Sunday by appointment)</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href={COMPANY_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-white"
                >
                  <Navigation size={15} />
                  <span>Get Driving Directions</span>
                </a>
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Assure%20Securities,%20I%20would%20like%20to%20schedule%20an%20office%20visit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-emerald"
                >
                  <MessageSquare size={15} />
                  <span>Book Appointment Slot</span>
                </a>
              </div>
            </div>

            {/* Quick Escalation & Charter Card */}
            <div>
              <div 
                className="fintech-card-dark"
                style={{ 
                  background: 'var(--color-secondary)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '24px', 
                  padding: '2.5rem' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ background: 'rgba(22, 185, 129, 0.15)', padding: '0.55rem', borderRadius: '10px' }}>
                    <ShieldCheck size={24} color="var(--color-accent)" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700, margin: 0 }}>Grievance & Escalation Desk</h3>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Compliant with SEBI & AMFI Investor Charter</span>
                  </div>
                </div>

                <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  At Assure Securities, client satisfaction is our utmost priority. If your query has not been addressed within 24 business hours, please write directly to our principal compliance officer.
                </p>

                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '14px', padding: '1.15rem', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '0.15rem' }}>Principal Compliance Email</div>
                  <div style={{ fontSize: '1rem', color: 'var(--color-accent)', fontWeight: 700 }}>care@assuresecurities.in</div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.6rem', marginBottom: '0.15rem' }}>Direct Principal Contact</div>
                  <div style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700 }}>+91 9455555742</div>
                </div>

                <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  You may also lodge complaints through SEBI SCORES portal (scores.gov.in) or AMFI grievance resolution cells.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
