import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Star, MapPin, CheckCircle, Award } from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '../data/websiteData';

// Authentic Vector Brand Logos for Leading AMCs
const AMC_LOGOS = [
  {
    name: "SBI Mutual Fund",
    category: "India's Largest AMC",
    rating: "AAA Rated",
    color: "#22488a",
    icon: (
      <svg viewBox="0 0 36 36" width="30" height="30" style={{ flexShrink: 0 }}>
        <circle cx="18" cy="18" r="18" fill="#22488a" />
        <circle cx="18" cy="18" r="7" fill="#ffffff" />
        <rect x="16" y="18" width="4" height="11" fill="#22488a" />
      </svg>
    )
  },
  {
    name: "HDFC Mutual Fund",
    category: "Premier Equity AMC",
    rating: "AAA Rated",
    color: "#ed1c24",
    icon: (
      <svg viewBox="0 0 36 36" width="30" height="30" style={{ flexShrink: 0 }}>
        <rect width="36" height="36" rx="6" fill="#004c8f" />
        <rect x="18" y="0" width="18" height="18" rx="2" fill="#ed1c24" />
        <rect x="0" y="18" width="18" height="18" rx="2" fill="#ed1c24" />
        <text x="18" y="24" fill="#ffffff" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">H</text>
      </svg>
    )
  },
  {
    name: "ICICI Prudential AMC",
    category: "Top Wealth AMC",
    rating: "AAA Rated",
    color: "#9c1c24",
    icon: (
      <svg viewBox="0 0 36 36" width="30" height="30" style={{ flexShrink: 0 }}>
        <rect width="36" height="36" rx="6" fill="#9c1c24" />
        <path d="M7 10 L18 5 L29 10 L29 20 C29 26 18 31 18 31 C18 31 7 26 7 20 Z" fill="#f37021" />
        <text x="18" y="21" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="serif">i</text>
      </svg>
    )
  },
  {
    name: "Nippon India Mutual Fund",
    category: "Pioneer Asset Manager",
    rating: "AAA Rated",
    color: "#df192a",
    icon: (
      <svg viewBox="0 0 36 36" width="30" height="30" style={{ flexShrink: 0 }}>
        <rect width="36" height="36" rx="6" fill="#ffffff" />
        <circle cx="18" cy="18" r="11" fill="#df192a" />
        <text x="18" y="22" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">N</text>
      </svg>
    )
  },
  {
    name: "Axis Mutual Fund",
    category: "Growth & Alpha Focused",
    rating: "AAA Rated",
    color: "#861f41",
    icon: (
      <svg viewBox="0 0 36 36" width="30" height="30" style={{ flexShrink: 0 }}>
        <rect width="36" height="36" rx="6" fill="#861f41" />
        <path d="M18 6 L29 28 L22 28 L18 19 L14 28 L7 28 Z" fill="#ffffff" />
      </svg>
    )
  },
  {
    name: "Kotak Mahindra AMC",
    category: "Institutional Discipline",
    rating: "AAA Rated",
    color: "#ed1c24",
    icon: (
      <svg viewBox="0 0 36 36" width="30" height="30" style={{ flexShrink: 0 }}>
        <rect width="36" height="36" rx="6" fill="#ed1c24" />
        <path d="M12 18 C12 14 15 14 18 18 C21 22 24 22 24 18 C24 14 21 14 18 18 C15 22 12 22 12 18 Z" stroke="#ffffff" strokeWidth="3" fill="none" />
      </svg>
    )
  },
  {
    name: "Mirae Asset Mutual Fund",
    category: "Global & Domestic Alpha",
    rating: "AAA Rated",
    color: "#003262",
    icon: (
      <svg viewBox="0 0 36 36" width="30" height="30" style={{ flexShrink: 0 }}>
        <rect width="36" height="36" rx="6" fill="#003262" />
        <path d="M9 27 L18 11 L27 27 L22 27 L18 20 L14 27 Z" fill="#f37021" />
      </svg>
    )
  },
  {
    name: "Tata Mutual Fund",
    category: "Trust & Legacy Driven",
    rating: "AAA Rated",
    color: "#005088",
    icon: (
      <svg viewBox="0 0 36 36" width="30" height="30" style={{ flexShrink: 0 }}>
        <rect width="36" height="36" rx="6" fill="#005088" />
        <path d="M8 12 H28 V16 H20 V27 H16 V16 H8 Z" fill="#ffffff" />
      </svg>
    )
  },
  {
    name: "UTI Mutual Fund",
    category: "Since 1964 Pioneer",
    rating: "AAA Rated",
    color: "#ea5a0b",
    icon: (
      <svg viewBox="0 0 36 36" width="30" height="30" style={{ flexShrink: 0 }}>
        <rect width="36" height="36" rx="6" fill="#ea5a0b" />
        <circle cx="18" cy="18" r="11" stroke="#ffffff" strokeWidth="2.5" fill="none" />
        <path d="M13 14 V19 C13 22 15 23 18 23 C21 23 23 22 23 19 V14" stroke="#ffffff" strokeWidth="2.5" fill="none" />
      </svg>
    )
  },
  {
    name: "DSP Mutual Fund",
    category: "150+ Years Global Heritage",
    rating: "AAA Rated",
    color: "#003366",
    icon: (
      <svg viewBox="0 0 36 36" width="30" height="30" style={{ flexShrink: 0 }}>
        <rect width="36" height="36" rx="6" fill="#003366" />
        <polygon points="18,7 29,18 18,29 7,18" fill="#ffffff" />
        <polygon points="18,12 24,18 18,24 12,18" fill="#003366" />
      </svg>
    )
  },
  {
    name: "Aditya Birla Sun Life AMC",
    category: "Comprehensive Wealth",
    rating: "AAA Rated",
    color: "#bf282d",
    icon: (
      <svg viewBox="0 0 36 36" width="30" height="30" style={{ flexShrink: 0 }}>
        <rect width="36" height="36" rx="6" fill="#bf282d" />
        <circle cx="18" cy="18" r="8" fill="#fdb813" />
        <path d="M18 3 V7 M18 29 V33 M3 18 H7 M29 18 H33" stroke="#fdb813" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Bandhan Mutual Fund",
    category: "Prudent Asset Stewardship",
    rating: "AAA Rated",
    color: "#ee3124",
    icon: (
      <svg viewBox="0 0 36 36" width="30" height="30" style={{ flexShrink: 0 }}>
        <rect width="36" height="36" rx="6" fill="#ee3124" />
        <path d="M18 7 C18 7 25 14 25 21 C25 25 22 29 18 29 C14 29 11 25 11 21 C11 14 18 7 18 7 Z" fill="#fdb813" />
      </svg>
    )
  }
];

export function TestimonialsSection({ theme = 'dark' }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const themeClass = theme === 'light' ? 'section-theme-light' : 'section-theme-dark';

  const prevReview = () => {
    setActiveIdx((prev) => (prev === 0 ? CLIENT_TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveIdx((prev) => (prev === CLIENT_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = CLIENT_TESTIMONIALS[activeIdx];

  return (
    <section id="testimonials" className={`testimonials-section ${themeClass}`} style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decorative Ambient Gradient */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-header-editorial center" style={{ marginBottom: '3.5rem' }}>
          <div className="eyebrow-label">
            <span>09 — CLIENT ENDORSEMENTS & FIDUCIARY STEWARDSHIP</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: 'var(--color-text)', lineHeight: 1.15 }}>
            Relationships built <span className="text-blue">on trust</span>
            <br />
            <span className="text-red" style={{ fontStyle: 'italic' }}>
              & integrity.
            </span>
          </h2>

          <p style={{ maxWidth: '680px', margin: '1rem auto 0 auto', color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
            Over 15+ years of managing private family wealth, safeguarding retirement corpuses, and navigating market cycles with fiduciary discipline.
          </p>

          {/* Social Proof Trust Badges */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem', padding: '0.6rem 1.4rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#10b981', fontSize: '0.86rem', fontWeight: 600 }}>
              <div style={{ display: 'flex', color: '#f59e0b' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span style={{ color: 'var(--color-text)' }}>5.0 Rating</span>
            </div>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)' }}>
              <strong style={{ color: 'var(--color-gold)' }}>1,500+</strong> Families Guided
            </span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)' }}>
              <strong style={{ color: 'var(--color-text)' }}>15+</strong> Years Proven Track Record
            </span>
          </div>
        </div>

        {/* Featured Luxury Testimonial Showcase Card */}
        <div 
          className="testimonial-showcase-box"
          style={{
            background: 'linear-gradient(135deg, rgba(14, 18, 26, 0.88) 0%, rgba(9, 11, 16, 0.94) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(16, 185, 129, 0.15)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            padding: 'clamp(1.75rem, 4vw, 3.5rem)',
            position: 'relative'
          }}
        >
          <div className="testimonial-grid-inner">
            
            {/* Left: Client Portrait & Official Verification */}
            <div className="testimonial-client-card">
              <div className="testimonial-photo-frame">
                <img 
                  src={active.image} 
                  alt={active.name} 
                  className="testimonial-photo-img"
                />
                <div className="testimonial-photo-gradient" />
                
                {/* Verified Client Badge Overlay */}
                <div className="testimonial-verified-badge">
                  <ShieldCheck size={13} color="#10b981" />
                  <span>VERIFIED INVESTOR</span>
                </div>
              </div>

              {/* Client Credentials */}
              <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.25rem', color: '#ffffff', fontFamily: 'var(--font-serif)', fontWeight: 600, letterSpacing: '0.02em', marginBottom: '0.25rem' }}>
                  {active.name}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-gold)', fontWeight: 500 }}>
                  {active.role}
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '0.4rem' }}>
                  <MapPin size={12} color="var(--color-gold)" />
                  <span>{active.location}</span>
                </div>
              </div>

              {/* 5 Star Rating */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginTop: '0.75rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
            </div>

            {/* Right: The Full Endorsement Quote & Controls */}
            <div className="testimonial-content-col">
              
              {/* Quote Mark Icon */}
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '4.5rem', color: 'var(--color-gold)', lineHeight: 0.6, opacity: 0.5, marginBottom: '1.25rem' }}>
                &ldquo;
              </div>

              {/* The Actual Review Text */}
              <blockquote 
                style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: 'clamp(1.15rem, 1.9vw, 1.55rem)', 
                  fontWeight: 300, 
                  lineHeight: 1.65, 
                  color: 'var(--color-text)', 
                  letterSpacing: '0.01em',
                  marginBottom: '2rem'
                }}
              >
                {active.content}
              </blockquote>

              {/* Key Trust Highlights */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <span className="endorsement-tag">
                  <CheckCircle size={13} color="#10b981" />
                  <span>Fiduciary Stewardship</span>
                </span>
                <span className="endorsement-tag">
                  <CheckCircle size={13} color="#10b981" />
                  <span>Zero Commission Bias</span>
                </span>
                <span className="endorsement-tag">
                  <CheckCircle size={13} color="#10b981" />
                  <span>Consistent Compounding</span>
                </span>
              </div>

              {/* Footer Row: Avatar Switchers & Arrow Controls */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
                
                {/* Client Avatar Thumbnail Bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '0.5rem' }}>
                    Clients:
                  </span>
                  {CLIENT_TESTIMONIALS.map((t, idx) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveIdx(idx)}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        padding: 0,
                        border: activeIdx === idx ? '2px solid var(--color-gold)' : '2px solid transparent',
                        boxShadow: activeIdx === idx ? '0 0 14px rgba(16, 185, 129, 0.6)' : 'none',
                        transform: activeIdx === idx ? 'scale(1.1)' : 'scale(1)',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        background: '#000',
                        outline: 'none'
                      }}
                      title={`${t.name} (${t.role})`}
                    >
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </button>
                  ))}
                </div>

                {/* Arrow Navigation Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--color-text-muted)', letterSpacing: '0.08em' }}>
                    <strong style={{ color: 'var(--color-gold)' }}>0{activeIdx + 1}</strong> / 0{CLIENT_TESTIMONIALS.length}
                  </span>

                  <button 
                    onClick={prevReview}
                    className="review-arrow-btn"
                    aria-label="Previous client testimonial"
                  >
                    <ArrowLeft size={16} />
                  </button>

                  <button 
                    onClick={nextReview}
                    className="review-arrow-btn"
                    aria-label="Next client testimonial"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ==========================================================================
            40+ AMC Partners Continuous Animated Marquee Ticker
            ("company ke naam ke jagah logo aae wo animation me chalte rahe")
            ========================================================================== */}
        <div style={{ marginTop: '5.5rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '0.4rem 1rem', borderRadius: '30px', marginBottom: '0.75rem' }}>
              <Award size={14} color="var(--color-gold)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-gold)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                Direct AMC Empanelment
              </span>
            </div>
            <h4 style={{ fontSize: '1.35rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
              Partnered with 40+ SEBI-Regulated Mutual Fund Asset Managers
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
              Direct institutional routing, instant SIP registrations, and zero custodial risk.
            </p>
          </div>

          {/* Continuous Infinite Animated Marquee Track */}
          <div className="amc-marquee-container">
            <div className="amc-marquee-track">
              {/* Dual Array for seamless infinite loop */}
              {[...AMC_LOGOS, ...AMC_LOGOS].map((amc, idx) => (
                <div key={idx} className="amc-logo-card">
                  <div className="amc-logo-icon-wrap">
                    {amc.icon}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className="amc-card-name">
                      {amc.name}
                    </span>
                    <span className="amc-card-category">
                      {amc.category} • {amc.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Embedded Responsive Styles for Testimonials & Marquee */}
      <style>{`
        .testimonial-grid-inner {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: center;
        }

        .testimonial-photo-frame {
          position: relative;
          width: 100%;
          height: 290px;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid rgba(16, 185, 129, 0.35);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
          background: #0d1117;
        }

        .testimonial-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.4s ease;
        }

        .testimonial-photo-frame:hover .testimonial-photo-img {
          transform: scale(1.04);
        }

        .testimonial-photo-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(9, 11, 16, 0.9) 0%, rgba(9, 11, 16, 0.15) 50%, transparent 100%);
        }

        .testimonial-verified-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: rgba(8, 10, 14, 0.88);
          border: 1px solid rgba(16, 185, 129, 0.5);
          backdrop-filter: blur(8px);
          padding: 0.35rem 0.65rem;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: #10b981;
          font-weight: 600;
          letter-spacing: 0.06em;
        }

        .endorsement-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          font-size: 0.78rem;
          color: var(--color-text-secondary);
        }

        .review-arrow-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .review-arrow-btn:hover {
          border-color: var(--color-gold);
          color: var(--color-gold);
          background: rgba(16, 185, 129, 0.12);
          transform: translateY(-1px);
        }

        /* Continuous Infinite Animated Marquee */
        @keyframes amcScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .amc-marquee-container {
          overflow: hidden;
          position: relative;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          padding: 1rem 0;
        }

        .amc-marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: amcScroll 28s linear infinite;
        }

        .amc-marquee-track:hover {
          animation-play-state: paused;
        }

        .amc-logo-card {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 10px;
          padding: 0.8rem 1.4rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
          flex-shrink: 0;
          cursor: default;
        }

        .amc-logo-card:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(16, 185, 129, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        }

        .amc-logo-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          flex-shrink: 0;
        }

        .amc-card-name {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          font-weight: 600;
          color: #ffffff;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }

        .amc-card-category {
          font-size: 0.7rem;
          color: var(--color-text-muted);
          font-family: var(--font-mono);
          white-space: nowrap;
          margin-top: 1px;
        }

        @media (max-width: 900px) {
          .testimonial-grid-inner {
            grid-template-columns: 1fr;
          }
          .testimonial-client-card {
            max-width: 320px;
            margin: 0 auto 1.5rem auto;
          }
        }
      `}</style>
    </section>
  );
}

export default TestimonialsSection;
