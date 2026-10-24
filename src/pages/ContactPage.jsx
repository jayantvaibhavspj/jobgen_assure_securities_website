import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Navigation, ArrowRight, Sparkles, CheckCircle2, Building2, Volume2, VolumeX } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function ContactPage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* 1. Editorial Page Header (Split Layout: Left Text, Right Video Card) */}
      <section 
        style={{ 
          padding: 'clamp(3.5rem, 5.5vw, 5rem) 0 clamp(2.5rem, 4vw, 4rem) 0', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
          position: 'relative', 
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at 85% 25%, rgba(6, 182, 212, 0.12) 0%, transparent 55%), radial-gradient(ellipse at 15% 75%, rgba(16, 185, 129, 0.08) 0%, transparent 50%), #060813',
          minHeight: 'auto',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Subtle geometric dot grid background texture */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: 0.45,
            pointerEvents: 'none'
          }}
          aria-hidden="true"
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mf-hero-split-grid">
            
            {/* Left Column: Text & Badges */}
            <div>
              {/* Category Pill */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 16px',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  marginBottom: '1.25rem'
                }}
              >
                <Building2 size={16} color="#10b981" />
                <span style={{ fontSize: '0.86rem', color: '#34d399', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Lucknow Advisory Headquarters • ARN-182137
                </span>
              </div>

              {/* Page Headline - Large, Bold & Prominent */}
              <h1 
                style={{ 
                  fontFamily: "'Plus Jakarta Sans', var(--font-sans), sans-serif",
                  fontSize: 'clamp(2.75rem, 4.8vw, 4.3rem)', 
                  color: '#ffffff', 
                  maxWidth: '750px', 
                  lineHeight: 1.12, 
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  margin: '0 0 1.35rem 0'
                }}
              >
                Contact{' '}
                <span style={{ 
                  background: 'linear-gradient(135deg, #38bdf8 0%, #06b6d4 45%, #fbbf24 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}>
                  Assure Securities
                </span>
              </h1>

              {/* Description - Large, High Contrast & Easy to Read */}
              <p 
                style={{ 
                  fontSize: 'clamp(1.12rem, 1.35vw, 1.28rem)', 
                  color: '#e2e8f0', 
                  maxWidth: '680px', 
                  lineHeight: 1.65, 
                  margin: '0 0 2.25rem 0', 
                  fontWeight: 450,
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
                }}
              >
                Visit our corporate office in Gomtinagar, Lucknow or connect directly with our AMFI-registered advisors for mutual fund distribution, portfolio diagnostic reviews, and personalized wealth consulting.
              </p>

              {/* Trust Badges Grid */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '0.95rem',
                  maxWidth: '620px',
                  marginBottom: '2.5rem'
                }}
              >
                <div className="mf-hero-badge-item" style={{ padding: '0.85rem 1.15rem' }}>
                  <ShieldCheck size={20} color="#10b981" />
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 650 }}>AMFI Reg. ARN-182137</span>
                </div>
                <div className="mf-hero-badge-item" style={{ padding: '0.85rem 1.15rem' }}>
                  <MapPin size={20} color="#38bdf8" />
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 650 }}>Gomti Nagar, Lucknow</span>
                </div>
                <div className="mf-hero-badge-item" style={{ padding: '0.85rem 1.15rem' }}>
                  <Phone size={20} color="#fbbf24" />
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 650 }}>Direct Advisory Desk</span>
                </div>
                <div className="mf-hero-badge-item" style={{ padding: '0.85rem 1.15rem' }}>
                  <Clock size={20} color="#a855f7" />
                  <span style={{ fontSize: '0.92rem', color: '#f8fafc', fontWeight: 650 }}>Mon - Sat: 10AM - 6PM</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '0.95rem 1.85rem',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: '#ffffff',
                    fontWeight: 750,
                    fontSize: '0.98rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(16, 185, 129, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.4)';
                  }}
                >
                  <Mail size={18} />
                  <span>Send Direct Message</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '0.95rem 1.75rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    color: '#f8fafc',
                    fontWeight: 650,
                    fontSize: '0.98rem',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                    e.currentTarget.style.transform = 'none';
                  }}
                >
                  <Phone size={18} color="#34d399" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>

            </div>

            {/* Right Column: High-End Framed Video Card */}
            <div>
              <div className="mf-hero-video-wrapper">
                <div className="mf-hero-video-inner">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    preload="auto"
                    onClick={toggleMute}
                    src="/assets/contact-advisory-office.mp4"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      cursor: 'pointer'
                    }}
                  />

                  {/* Top Right Sound Toggle */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(9, 14, 26, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                      zIndex: 3
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(16, 185, 129, 0.85)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(9, 14, 26, 0.8)'}
                  >
                    {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>
                </div>
              </div>
            </div>

          </div>
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
