import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, TrendingUp, 
  ArrowUpRight,
  Award, Users, Building2
} from 'lucide-react';
import { HeroVideoBackground, HERO_VIDEOS } from './HeroVideoBackground';

export function Hero({ onOpenModal, onNavigate }) {
  const [sceneInfo, setSceneInfo] = useState({ currentIndex: 0, transitionToVideo: null });

  // Animated Stat Numbers: Counts from 0 to high every 3 seconds
  const [counts, setCounts] = useState({
    years: 15,
    aum: 250,
    families: 1500,
    amcs: 40
  });

  useEffect(() => {
    const targets = { years: 15, aum: 250, families: 1500, amcs: 40 };
    const animDuration = 1200; // 1.2s to count up from 0 to max
    const intervalDuration = 3000; // Loops every 3 seconds

    let frameId;
    let intervalId;

    const runCountUp = () => {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(1, elapsed / animDuration);
        const ease = 1 - Math.pow(1 - progress, 4);

        setCounts({
          years: Math.round(targets.years * ease),
          aum: Math.round(targets.aum * ease),
          families: Math.round(targets.families * ease),
          amcs: Math.round(targets.amcs * ease)
        });

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        }
      };

      frameId = requestAnimationFrame(animate);
    };

    runCountUp();
    intervalId = setInterval(runCountUp, intervalDuration);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const stats = [
    { 
      id: "years",
      label: "Years of Stewardship", 
      display: `${counts.years}+`, 
      sub: "Multi-Cycle Proven",
      icon: Award,
      accent: "#10b981",
      gradient: "linear-gradient(135deg, #a7f3d0 0%, #34d399 50%, #10b981 100%)",
      bgTint: "rgba(16, 185, 129, 0.12)",
      borderColor: "rgba(16, 185, 129, 0.3)"
    },
    { 
      id: "aum",
      label: "Assets Under Guidance", 
      display: `₹${counts.aum}+`, 
      suffix: "Cr+", 
      sub: "Disciplined Allocation",
      icon: TrendingUp,
      accent: "#38bdf8",
      gradient: "linear-gradient(135deg, #bae6fd 0%, #38bdf8 50%, #0284c7 100%)",
      bgTint: "rgba(2, 132, 199, 0.12)",
      borderColor: "rgba(2, 132, 199, 0.3)"
    },
    { 
      id: "families",
      label: "Investor Families", 
      display: `${counts.families.toLocaleString('en-IN')}+`, 
      sub: "Private Advisory",
      icon: Users,
      accent: "#fbbf24",
      gradient: "linear-gradient(135deg, #fef3c7 0%, #fbbf24 50%, #d97706 100%)",
      bgTint: "rgba(217, 119, 6, 0.12)",
      borderColor: "rgba(217, 119, 6, 0.3)"
    },
    { 
      id: "amcs",
      label: "Empaneled AMCs", 
      display: `${counts.amcs}+`, 
      sub: "Direct Routing",
      icon: Building2,
      accent: "#a5b4fc",
      gradient: "linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 50%, #6366f1 100%)",
      bgTint: "rgba(99, 102, 241, 0.12)",
      borderColor: "rgba(99, 102, 241, 0.3)"
    }
  ];

  const marketTickers = [
    { label: "NIFTY 50", val: "24,850.30", change: "+0.42%", positive: true },
    { label: "S&P BSE SENSEX", val: "81,380.15", change: "+0.38%", positive: true },
    { label: "10Y G-SEC YIELD", val: "6.78%", change: "Sovereign Benchmark", positive: false },
    { label: "HDFC TOP 100", val: "₹1,048.25", change: "+0.84%", positive: true },
    { label: "ICICI PRU BAL. ADVANTAGE", val: "₹74.82", change: "+0.35%", positive: true },
    { label: "NIPPON SMALL CAP", val: "₹168.10", change: "+1.42%", positive: true },
    { label: "AAA CORPORATE FD", val: "Up to 8.40%", change: "Crisil AAA Rated", positive: false },
    { label: "AMFI REGISTRATION", val: "ARN-182137", change: "Valid Till 2027", positive: false }
  ];

  return (
    <>
      <section className="hero-luxury" id="home">
      
      {/* Seamless Dual-Slot Ping-Pong Hero Background Video (All videos from assets) */}
      <HeroVideoBackground onSceneChange={setSceneInfo} />

      {/* Background Architectural Atmosphere & Green Ambient Glow */}
      <div className="hero-ambient-curves" aria-hidden="true">


        {/* Subtle grid */}
        <div className="hero-subtle-grid" />

        {/* Ambient Warm Green Orb */}
        <div className="hero-ambient-glow" />

        {/* Abstract Elegant Financial Vector Curves (Quiet, Institutional) */}
        <svg 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            opacity: 0.18,
            pointerEvents: 'none'
          }}
          viewBox="0 0 1440 900" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M-100 650 C 300 600, 500 450, 850 480 C 1200 510, 1350 280, 1600 240" 
            stroke="url(#goldGradient1)" 
            strokeWidth="1.5" 
            strokeDasharray="4 6"
          />
          <path 
            d="M-50 780 C 350 700, 650 560, 950 520 C 1250 480, 1400 320, 1550 290" 
            stroke="url(#goldGradient2)" 
            strokeWidth="2"
          />
          <path 
            d="M100 850 C 450 780, 800 680, 1100 590 C 1350 510, 1480 400, 1600 380" 
            stroke="#ffffff" 
            strokeWidth="0.75" 
            strokeOpacity="0.2"
          />
          <defs>
            <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9aa1ad" stopOpacity="0.05" />
              <stop offset="45%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container hero-content-wrap">
        

        {/* Visual Hierarchy: Huge Editorial Headline with Red & Blue Text */}
        <div style={{ maxWidth: '1020px', marginBottom: '1.15rem' }}>
          <h1 style={{ letterSpacing: '-0.02em', color: '#ffffff', textShadow: '0 3px 20px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)', fontSize: 'clamp(2.1rem, 3.8vw, 3.4rem)', lineHeight: 1.15 }}>
            Invest With <span className="text-blue">Confidence</span>.
            <br />
            Build For <span className="text-red" style={{ fontStyle: 'italic' }}>Tomorrow</span>.
          </h1>
        </div>

        {/* Video Scene Indicator Pill (Moved from bottom-right to directly above 2-line text) */}
        <div style={{ marginBottom: '0.85rem' }}>
          <div className="hero-video-scene-pill">
            <span className="hero-video-scene-title">
              {HERO_VIDEOS[sceneInfo.currentIndex]?.title}
            </span>
            <div className="hero-video-dots">
              {HERO_VIDEOS.map((v, i) => (
                <button
                  key={v.id}
                  type="button"
                  className={`hero-video-dot ${i === sceneInfo.currentIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (sceneInfo.transitionToVideo) {
                      sceneInfo.transitionToVideo(i);
                    }
                  }}
                  title={`Scene ${i + 1}: ${v.title}`}
                  aria-label={`Switch to video ${i + 1}: ${v.title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Visual Hierarchy: Short Supporting Paragraph */}
        <div style={{ maxWidth: '640px', marginBottom: '1.35rem' }}>
          <p style={{ fontSize: 'clamp(0.98rem, 1.25vw, 1.12rem)', color: '#f3f4f6', textShadow: '0 2px 12px rgba(0,0,0,0.9)', lineHeight: 1.55 }}>
            Smart investment solutions designed around your financial goals.
            <br />
            Backed by 15+ years of disciplined fiduciary stewardship & research.
          </p>
        </div>

        {/* Visual Hierarchy: Minimal CTAs */}
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}>
          <button 
            onClick={() => onOpenModal ? onOpenModal('contact-consult') : onNavigate('contact')}
            className="btn-gold"
            style={{
              borderRadius: '9999px',
              padding: '0 2rem'
            }}
          >
            <span>Start Investing</span>
            <ArrowRight size={15} />
          </button>

          <button 
            onClick={() => {
              const el = document.getElementById('solutions');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onNavigate('products');
            }}
            className="btn-outline"
            style={{
              borderRadius: '9999px',
              padding: '0 2rem',
              background: 'rgba(14, 16, 21, 0.75)',
              backdropFilter: 'blur(10px)',
              borderColor: 'rgba(255, 255, 255, 0.25)',
              color: '#ffffff'
            }}
          >
            <span>Explore Solutions</span>
            <ArrowUpRight size={14} opacity={0.8} />
          </button>

        </div>
      </div>

      {/* 1. Transparent Number Strip Overlaid Directly on Top of Live Background Video */}
      <div className="hero-stats-white-strip">
        <div className="container">
          <div className="hero-stats-white-grid">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="hero-stat-white-col">
                  <div className="hero-stat-card">
                    <div 
                      className="hero-stat-icon-wrap"
                      style={{ 
                        backgroundColor: stat.bgTint, 
                        borderColor: stat.borderColor, 
                        color: stat.accent 
                      }}
                    >
                      <Icon size={20} strokeWidth={2.2} />
                    </div>
                    <div className="hero-stat-info">
                      <div className="hero-stat-num-row">
                        <span 
                          className="hero-stat-num-val"
                          style={{
                            backgroundImage: stat.gradient,
                            WebkitBackgroundImage: stat.gradient
                          }}
                        >
                          {stat.display}
                        </span>
                        {stat.suffix && (
                          <span 
                            className="hero-stat-num-suffix"
                            style={{ color: stat.accent }}
                          >
                            {stat.suffix}
                          </span>
                        )}
                      </div>
                      <div className="hero-stat-label-text">
                        {stat.label}
                      </div>
                      <div className="hero-stat-sub-row">
                        <span 
                          className="hero-stat-sub-dot" 
                          style={{ backgroundColor: stat.accent }} 
                        />
                        <span className="hero-stat-sub-text">
                          {stat.sub}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>

    {/* 2. Running Financial Market Ticker Strip (Directly Below Video Section) */}
    <div className="market-ticker-strip">
      <div className="ticker-track">
        {/* Double the list to loop seamlessly */}
        {[...marketTickers, ...marketTickers].map((t, idx) => (
          <div key={idx} className="ticker-item">
            <span style={{ color: '#ffffff', fontWeight: 500 }}>{t.label}</span>
            <span style={{ color: 'var(--color-gold)', marginLeft: '0.2rem' }}>{t.val}</span>
            <span className={t.positive ? 'ticker-positive' : 'ticker-neutral'} style={{ fontSize: '0.7rem' }}>
              {t.change}
            </span>
            <span style={{ opacity: 0.25, margin: '0 0.75rem' }}>•</span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Hero;
