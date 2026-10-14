import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { CLIENT_TESTIMONIALS, PARTNER_AMCS } from '../data/websiteData';

export function TestimonialsSection({ theme = "dark" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDark = theme === "dark";

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? CLIENT_TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === CLIENT_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = CLIENT_TESTIMONIALS[currentIndex];

  return (
    <section 
      className={isDark ? "section-dark-navy section-wrapper" : "section-light-white section-wrapper"}
      style={{ 
        background: isDark ? '#090e1a' : '#ffffff', 
        borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #f1f5f9' 
      }}
    >
      <div className="container">
        
        {/* Section Title */}
        <div className="section-title-wrap">
          <div className="badge-tag accent-emerald">
            <CheckCircle2 size={13} />
            <span>Verified Client Endorsements</span>
          </div>
          <h2 className="section-heading" style={{ color: isDark ? '#ffffff' : '#0f172a' }}>
            Trusted by Leaders, Executives & <span className="gradient-text">Families Across India</span>
          </h2>
          <p className="section-subheading" style={{ color: isDark ? '#cbd5e1' : '#64748b' }}>
            Read what our esteemed clients have to say about our professional, friendly approach, sound market guidance, and long-term commitment.
          </p>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div style={{ maxWidth: '920px', margin: '0 auto 4rem auto' }}>
          <div 
            className="glass-card" 
            style={{ 
              padding: '3rem', 
              background: isDark ? 'rgba(30, 41, 59, 0.85)' : '#ffffff', 
              borderRadius: '28px', 
              border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0', 
              boxShadow: isDark ? '0 25px 50px rgba(0,0,0,0.5)' : '0 20px 40px -15px rgba(15,23,42,0.08)', 
              position: 'relative' 
            }}
          >
            
            <Quote 
              size={64} 
              color={isDark ? "#1e3a8a" : "#bfdbfe"} 
              style={{ position: 'absolute', top: '24px', right: '32px', opacity: 0.5 }} 
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '1.5rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} color="#f59e0b" fill="#f59e0b" />
              ))}
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f59e0b', marginLeft: '0.5rem' }}>5.0 Rating</span>
            </div>

            <p style={{ fontSize: '1.25rem', color: isDark ? '#f1f5f9' : '#1e293b', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '2rem' }}>
              &ldquo;{activeReview.content}&rdquo;
            </p>

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: '1rem', 
              borderTop: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #f1f5f9', 
              paddingTop: '1.5rem' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img 
                  src={activeReview.image} 
                  alt={activeReview.name}
                  style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #38bdf8' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/logo.png';
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1.2rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800 }}>{activeReview.name}</h4>
                  <div style={{ fontSize: '0.88rem', color: '#38bdf8', fontWeight: 600 }}>{activeReview.role}</div>
                  <div style={{ fontSize: '0.78rem', color: isDark ? '#94a3b8' : '#64748b' }}>{activeReview.location} • Verified Assure Investor</div>
                </div>
              </div>

              {/* Slider Navigation Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  onClick={prevReview}
                  style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '50%', 
                    background: isDark ? '#1e293b' : '#f1f5f9', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: isDark ? '#cbd5e1' : '#334155', 
                    transition: '0.2s',
                    border: isDark ? '1px solid rgba(255,255,255,0.1)' : 'none'
                  }}
                  title="Previous Review"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextReview}
                  style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '50%', 
                    background: '#2563eb', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: '#ffffff', 
                    transition: '0.2s' 
                  }}
                  title="Next Review"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

          </div>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
            {CLIENT_TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: i === currentIndex ? '28px' : '9px',
                  height: '9px',
                  borderRadius: '5px',
                  background: i === currentIndex ? '#38bdf8' : (isDark ? 'rgba(255,255,255,0.2)' : '#cbd5e1'),
                  transition: 'all 0.25s ease'
                }}
              />
            ))}
          </div>
        </div>

        {/* Our Partners (AMCs) Marquee */}
        <div style={{ 
          marginTop: '5rem', 
          background: isDark ? 'rgba(30, 41, 59, 0.6)' : '#f8fafc', 
          borderRadius: '24px', 
          padding: '2.5rem', 
          border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0' 
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge-tag" style={{ margin: 0 }}>40+ Institutional Partners</span>
            <h3 style={{ fontSize: '1.5rem', color: isDark ? '#ffffff' : '#0f172a', fontWeight: 800, marginTop: '0.5rem' }}>
              Empaneled with India's Foremost Asset Management Companies
            </h3>
            <p style={{ fontSize: '0.88rem', color: isDark ? '#cbd5e1' : '#64748b', marginTop: '0.25rem' }}>
              We distribute schemes managed by SEBI registered mutual funds, insurers, and AAA corporate institutions.
            </p>
          </div>

          {/* Scrolling Marquee */}
          <div className="marquee-container">
            <div className="marquee-track">
              {PARTNER_AMCS.concat(PARTNER_AMCS).map((amc, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: isDark ? '#0f172a' : '#ffffff',
                    padding: '0.85rem 1.75rem',
                    borderRadius: '14px',
                    border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    boxShadow: 'var(--shadow-subtle)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Building size={18} color="#38bdf8" />
                  <span style={{ fontSize: '0.92rem', fontWeight: 700, color: isDark ? '#f8fafc' : '#1e293b' }}>{amc.name}</span>
                  <span style={{ fontSize: '0.7rem', color: '#10b981', background: 'rgba(16,185,129,0.15)', padding: '0.15rem 0.4rem', borderRadius: '4px', fontWeight: 700 }}>
                    {amc.rating}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
