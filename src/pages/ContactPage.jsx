import React from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. Editorial Page Header with Video Background */}
      <section 
        style={{ 
          padding: 'clamp(5rem, 8vw, 7rem) 0 clamp(3rem, 5vw, 4.5rem) 0', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
          position: 'relative', 
          overflow: 'hidden',
          background: '#070a12',
          minHeight: '440px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Background Video Layer */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: 0,
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="/assets/contact-hero-bg.mp4"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'right 20%'
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div className="eyebrow-label" style={{ color: '#10b981', marginBottom: '0.85rem' }}>
            <span style={{ color: '#10b981', fontWeight: 600, letterSpacing: '0.08em', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>LUCKNOW ADVISORY HEADQUARTERS • ARN-182137</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 4.6vw, 4rem)', color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.15, fontFamily: 'var(--font-serif)', fontWeight: 600, maxWidth: '640px', textShadow: '0 2px 12px rgba(0, 0, 0, 0.85), 0 1px 3px rgba(0, 0, 0, 0.95)' }}>
            Contact
            <br />
            <span style={{ color: '#38bdf8', fontStyle: 'italic' }}>Assure</span>{' '}
            <span style={{ color: '#fbbf24', fontStyle: 'italic' }}>Securities</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.18rem)', color: '#ffffff', maxWidth: '580px', lineHeight: 1.65, textShadow: '0 1px 8px rgba(0, 0, 0, 0.9)' }}>
            Visit our corporate office in Gomtinagar, Lucknow or connect directly with our AMFI-registered advisors for mutual fund distribution, portfolio diagnostic reviews, and personalized wealth consulting.
          </p>
        </div>
      </section>

      {/* 2. Main Interactive Form & Direct Coordinates (DARK) */}
      <ContactSection theme="dark" />

      {/* 3. Branch & In-Person Consultation Details (LIGHT) */}
      <section className="section-pad section-theme-light" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            <div>
              <div className="eyebrow-label">
                <span>IN-PERSON MEETINGS</span>
              </div>

              <h2 style={{ fontSize: 'clamp(2.2rem, 3.6vw, 2.8rem)', color: 'var(--color-text)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
                Visit Us in Gomtinagar, Lucknow
              </h2>

              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Conveniently situated in the business and administrative heart of Lucknow. Discerning investors are welcome to visit for comprehensive portfolio restructuring, transmission and nomination assistance, and goal planning dialogues. Prior appointment is recommended for dedicated senior advisor time.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ padding: '1.25rem', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '2px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Desk Hours
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: 500 }}>
                    Mon – Sat: 9:30 AM – 6:30 PM
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                    Sunday: By Prior Appointment
                  </div>
                </div>

                <div style={{ padding: '1.25rem', background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '2px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Advisory Helpline
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: 500 }}>
                    {COMPANY_INFO.phone}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                    Instant WhatsApp Support
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Location Preview Frame */}
            <div style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border)', borderRadius: '2px', padding: '1.5rem', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                  Lucknow Office Location
                </span>
                <span className="metric-pill-dark">PIN: 226010</span>
              </div>

              <iframe 
                title="Assure Securities Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7348937000185!2d80.9904975!3d26.8483861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be305d76208bb%3A0xe577884bbbb55fa8!2s2%2F163%2C%20Vishal%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
                width="100%" 
                height="320" 
                style={{ border: '1px solid var(--color-border)', borderRadius: '2px', filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactPage;
