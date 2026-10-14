import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, TrendingUp, ArrowRight, Sparkles, CheckCircle2, 
  Smartphone, Award, Coins, ChevronRight, ChevronLeft
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

const BANNER_SLIDES = [
  {
    image: '/assets/b1-2.jpg',
    badge: 'Wealth Creation',
    title: 'Invest in Mutual Funds easily!',
    subtitle: 'Either you want to build long-term wealth or retire early. Meeting your aspirations is our aim.'
  },
  {
    image: '/assets/b2-1.jpg',
    badge: 'Retirement Planning',
    title: 'Retire Rich',
    subtitle: 'When you got SILVER in your hair, you must have Gold in your pocket.'
  },
  {
    image: '/assets/child.jpg',
    badge: 'Children Education',
    title: 'Children Future Planning',
    subtitle: "Let's create a Plan to give wings to their dreams. Have you started saving for it?"
  },
  {
    image: '/assets/b4-2.jpg',
    badge: '100% Digital',
    title: 'Paperless Online Platform',
    subtitle: 'Use our reliable and easy-to-use investing platform with zero paperwork and instant KYC.'
  }
];

export function Hero({ onOpenModal, onNavigate }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quickSip, setQuickSip] = useState(10000);
  const [quickYears, setQuickYears] = useState(10);
  const returnRate = 0.12;

  // Auto-advance banner slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const months = quickYears * 12;
  const monthlyRate = returnRate / 12;
  const futureValue = Math.round(
    quickSip * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
  );
  const investedAmount = quickSip * months;
  const estWealthGained = futureValue - investedAmount;

  const formatINR = (val) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  const slide = BANNER_SLIDES[currentSlide];

  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden', background: '#f8fafc' }}>
      
      {/* Decorative Glow Blobs */}
      <div className="hero-glow-blob-1" />
      <div className="hero-glow-blob-2" />

      {/* Hero Banner Carousel Display */}
      <div style={{ position: 'relative', height: '360px', overflow: 'hidden', background: '#0f172a' }} className="hero-banner-carousel">
        <img 
          src={slide.image} 
          alt={slide.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45, transition: 'opacity 0.6s ease' }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
          }}
        />

        {/* Banner Overlay Content */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.65) 60%, rgba(15,23,42,0.3) 100%)', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ maxWidth: '680px' }}>
              <span style={{ display: 'inline-block', background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem', border: '1px solid rgba(56, 189, 248, 0.4)' }}>
                {slide.badge}
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '0.75rem' }}>
                {slide.title}
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                {slide.subtitle}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={() => onOpenModal('consultation')} className="btn-emerald" style={{ padding: '0.75rem 1.6rem', fontSize: '0.95rem' }}>
                  <span>Get Started With Assure</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => onNavigate('products')} className="btn-secondary" style={{ padding: '0.75rem 1.6rem', fontSize: '0.95rem' }}>
                  <span>Explore All Products</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators & Nav */}
        <div style={{ position: 'absolute', bottom: '16px', right: '24px', zIndex: 10, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {BANNER_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              style={{
                width: i === currentSlide ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === currentSlide ? '#38bdf8' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.25s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Interactive Hero Container */}
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '3.5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column: Value Proposition & Original Illustration */}
          <div>
            <div className="badge-tag" style={{ background: '#e0f2fe', borderColor: '#7dd3fc', color: '#0369a1' }}>
              <ShieldCheck size={14} />
              <span>AMFI Registered Distributor • ARN-182137</span>
            </div>

            <h1 style={{ fontSize: '2.8rem', lineHeight: 1.15, fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
              Your Wealth, Your Future, <br />
              <span className="gradient-text">Our Unwavering Commitment.</span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.5rem', maxWidth: '580px' }}>
              Making your investment grow is not easy, but having timely access to accurate market intelligence, a properly positioned and competent help can make a huge difference. Get the app & invest hassle free.
            </p>

            {/* Original Illustration Card */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', background: '#ffffff', padding: '1rem 1.25rem', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '1.75rem', boxShadow: 'var(--shadow-subtle)' }}>
              <img 
                src="/assets/1_789.png" 
                alt="Assure Securities Wealth Planning"
                style={{ width: '80px', height: '80px', objectFit: 'contain', flexShrink: 0 }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <h4 style={{ fontSize: '0.98rem', color: '#0f172a', fontWeight: 700, marginBottom: '2px' }}>
                  Meeting Your Aspirations is Our Aim
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                  Dedicated wealth advisory desk in Gomtinagar, Lucknow providing institutional research and regular portfolio rebalancing.
                </p>
              </div>
            </div>

            {/* Value bullets */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
              {[
                "100% Paperless Account Opening",
                "Personalized Financial Goal Planning",
                "Empaneled with 40+ Top Mutual Fund AMCs",
                "Zero Pushy Selling, 100% Client-Centric"
              ].map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#334155', fontSize: '0.9rem', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                onClick={() => onOpenModal('consultation')}
                className="btn-primary"
                style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
              >
                <span>Start Investing Hassle-Free</span>
                <ArrowRight size={17} />
              </button>

              <button 
                onClick={() => onNavigate('calculators')}
                className="btn-secondary"
                style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}
              >
                <span>Explore 6 Calculators</span>
                <Coins size={17} />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Quick SIP Teaser Card */}
          <div>
            <div className="glass-card" style={{ padding: '2rem', background: '#ffffff', borderRadius: '24px', boxShadow: '0 20px 40px -15px rgba(37,99,235,0.18)', border: '1px solid rgba(219,234,254,0.8)' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Instant Wealth Preview
                  </span>
                  <h3 style={{ fontSize: '1.35rem', color: '#0f172a', fontWeight: 800 }}>Power of Compounding</h3>
                </div>
                <div style={{ background: '#eff6ff', padding: '0.5rem', borderRadius: '12px' }}>
                  <TrendingUp size={24} color="#2563eb" />
                </div>
              </div>

              {/* Slider 1: Monthly Investment */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600, color: '#475569' }}>Monthly SIP Amount</label>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#2563eb' }}>{formatINR(quickSip)}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="100000" 
                  step="1000"
                  value={quickSip}
                  onChange={(e) => setQuickSip(Number(e.target.value))}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>
                  <span>₹1,000/mo</span>
                  <span>₹50,000/mo</span>
                  <span>₹1,00,000/mo</span>
                </div>
              </div>

              {/* Slider 2: Tenure */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: 600, color: '#475569' }}>Investment Duration</label>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#2563eb' }}>{quickYears} Years</span>
                </div>
                <input 
                  type="range" 
                  min="3" 
                  max="30" 
                  step="1"
                  value={quickYears}
                  onChange={(e) => setQuickYears(Number(e.target.value))}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginTop: '4px' }}>
                  <span>3 Years</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* Projected Corpus Highlight Box */}
              <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '16px', padding: '1.25rem', color: '#ffffff', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Estimated Corpus @ 12% p.a.
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#38bdf8', margin: '0.25rem 0 0.85rem 0' }}>
                  {formatINR(futureValue)}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.85rem' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Invested Amount</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>{formatINR(investedAmount)}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Est. Wealth Gained</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#4ade80' }}>+{formatINR(estWealthGained)}</div>
                  </div>
                </div>
              </div>

              {/* Action Button inside card */}
              <button 
                onClick={() => onNavigate('calculators')}
                className="btn-emerald"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
              >
                <span>Customize in Goal Planner</span>
                <ChevronRight size={16} />
              </button>

            </div>
          </div>

        </div>

        {/* Live Stats Counters Bar */}
        <div style={{ marginTop: '3.5rem' }}>
          <div className="glass-card" style={{ padding: '2rem', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
              {COMPANY_INFO.stats.map((stat, idx) => (
                <div key={idx} style={{ borderRight: idx < COMPANY_INFO.stats.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1e3a8a', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginTop: '0.35rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1.15fr 0.85fr !important; }
        }
      `}</style>
    </section>
  );
}
