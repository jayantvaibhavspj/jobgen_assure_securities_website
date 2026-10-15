import React from 'react';
import { 
  Smartphone, Check, ArrowRight, ShieldCheck, TrendingUp, 
  PieChart, Download, Sparkles, Bell, FileText, CheckCircle2 
} from 'lucide-react';

const APP_FEATURES = [
  "Portfolio tracking",
  "Investment monitoring",
  "SIP management",
  "Reports & tax summaries",
  "Capital gains statements",
  "Insurance tracking",
  "Financial tools & calculators"
];

export function AppSection({ onOpenModal }) {
  return (
    <section 
      id="mobile-app"
      style={{ 
        padding: 'var(--section-pad-desktop) 0', 
        background: 'var(--color-primary)', 
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}
      className="section-pad"
    >
      {/* Subtle Ambient Radial Lighting (Phase 5 Ambient Motion) */}
      <div 
        className="ambient-glow-drift"
        style={{ 
          position: 'absolute', 
          top: '-15%', 
          left: '10%', 
          width: '500px', 
          height: '500px', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(22, 185, 129, 0.1) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'center'
          }}
        >
          
          {/* LEFT: Phone Mockup with Floating Cards (Section 15) */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            
            {/* Main Phone Frame */}
            <div 
              style={{ 
                width: '310px', 
                height: '610px', 
                background: '#090f1d', 
                borderRadius: '40px', 
                border: '8px solid #1a2536', 
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.65), 0 0 35px rgba(22, 185, 129, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="phone-mockup-frame reveal-on-scroll parallax-subtle"
            >
              {/* Phone Dynamic Island */}
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '12px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  width: '90px', 
                  height: '20px', 
                  background: '#1a2536', 
                  borderRadius: '14px',
                  zIndex: 20
                }} 
              />

              {/* Mobile Screen Header */}
              <div style={{ padding: '40px 18px 12px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#16B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.72rem', color: '#071A2F' }}>
                      AS
                    </div>
                    <div>
                      <div style={{ fontSize: '0.62rem', color: '#94a3b8' }}>Portfolio Console</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>Assure Client</div>
                    </div>
                  </div>
                  <Bell size={15} color="#94a3b8" />
                </div>
              </div>

              {/* Inside Phone: Live Portfolio Content */}
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
                
                {/* Net Worth Card */}
                <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '14px' }}>
                  <span style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Consolidated Net Worth</span>
                  <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff', margin: '3px 0', letterSpacing: '-0.02em' }}>
                    ₹24,80,000
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#16B981', fontSize: '0.75rem', fontWeight: 700 }}>+18.6%</span>
                    <span style={{ color: '#64748b', fontSize: '0.65rem' }}>1-Yr CAGR (Demo)</span>
                  </div>
                </div>

                {/* Growth SVG Trend */}
                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '14px', padding: '10px 14px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#94a3b8', marginBottom: '6px' }}>
                    <span>Growth Trajectory</span>
                    <span style={{ color: '#16B981' }}>Disciplined SIP</span>
                  </div>
                  <svg width="100%" height="40" viewBox="0 0 240 40" fill="none">
                    <path 
                      d="M0 35 Q 60 28, 110 20 T 180 12 T 240 4" 
                      stroke="#16B981" 
                      strokeWidth="2.2" 
                      fill="none" 
                      className="svg-phone-trend"
                    />
                  </svg>
                </div>

                {/* Active SIP Pill */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(22, 185, 129, 0.08)', border: '1px solid rgba(22, 185, 129, 0.25)', borderRadius: '12px', padding: '10px 12px' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#ffffff' }}>Active SIP Mandate</div>
                    <div style={{ fontSize: '0.62rem', color: '#94a3b8' }}>Next debit: 5th of month</div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#16B981' }}>₹25,000</span>
                </div>

                {/* Quick Shortcuts */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <TrendingUp size={15} color="#38bdf8" style={{ margin: '0 auto 4px auto' }} />
                    <span style={{ fontSize: '0.68rem', color: '#cbd5e1', display: 'block' }}>Transact Funds</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <PieChart size={15} color="#16B981" style={{ margin: '0 auto 4px auto' }} />
                    <span style={{ fontSize: '0.68rem', color: '#cbd5e1', display: 'block' }}>Tax Summary</span>
                  </div>
                </div>

              </div>

              {/* Bottom Phone Bar */}
              <div style={{ padding: '8px 0 12px 0', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '90px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }} />
              </div>
            </div>

            {/* Small Floating Card 1: Top Right (Portfolio - Phase 5 float-card-1) */}
            <div 
              style={{
                position: 'absolute',
                top: '40px',
                right: '-25px',
                background: 'rgba(13, 41, 69, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '14px',
                padding: '0.75rem 1rem',
                boxShadow: '0 12px 28px rgba(0,0,0,0.4)',
                zIndex: 10
              }}
              className="d-none-mobile float-card-1 reveal-on-scroll stagger-1"
            >
              <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase' }}>Consolidated Folios</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff' }}>All AMCs Integrated</div>
            </div>

            {/* Small Floating Card 2: Bottom Left (Reports - Phase 5 float-card-2) */}
            <div 
              style={{
                position: 'absolute',
                bottom: '50px',
                left: '-25px',
                background: 'rgba(13, 41, 69, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '14px',
                padding: '0.75rem 1rem',
                boxShadow: '0 12px 28px rgba(0,0,0,0.4)',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              className="d-none-mobile float-card-2 reveal-on-scroll stagger-2"
            >
              <FileText size={16} color="var(--color-accent)" />
              <div>
                <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Tax Reports</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>Capital Gains Ready</div>
              </div>
            </div>

            {/* Small Floating Card 3: Mid Left (SIP - Phase 5 float-card-4) */}
            <div 
              style={{
                position: 'absolute',
                top: '220px',
                left: '-32px',
                background: 'rgba(13, 41, 69, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '14px',
                padding: '0.65rem 0.95rem',
                boxShadow: '0 12px 28px rgba(0,0,0,0.4)',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              className="d-none-mobile float-card-4 reveal-on-scroll stagger-3"
            >
              <TrendingUp size={16} color="var(--color-accent)" />
              <div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Automated SIP</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>₹25,000 / mo Active</div>
              </div>
            </div>

            {/* Small Floating Card 4: Mid Right (Goal - Phase 5 float-card-5) */}
            <div 
              style={{
                position: 'absolute',
                bottom: '180px',
                right: '-32px',
                background: 'rgba(13, 41, 69, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '14px',
                padding: '0.65rem 0.95rem',
                boxShadow: '0 12px 28px rgba(0,0,0,0.4)',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              className="d-none-mobile float-card-5 reveal-on-scroll stagger-4"
            >
              <CheckCircle2 size={16} color="#38bdf8" />
              <div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Goal Tracking</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>Retirement On-Track</div>
              </div>
            </div>

          </div>

          {/* RIGHT: Content & Features */}
          <div>
            <div className="eyebrow-pill emerald">
              <Smartphone size={13} />
              <span>Mobile Wealth Suite</span>
            </div>

            <h2 
              style={{ 
                fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', 
                fontWeight: 700, 
                color: '#ffffff', 
                letterSpacing: '-0.03em', 
                lineHeight: 1.15, 
                marginBottom: '1.25rem' 
              }}
            >
              Your Wealth.<br />
              <span style={{ color: 'var(--color-accent)' }}>Always Within Reach.</span>
            </h2>

            <p 
              style={{ 
                fontSize: '1.05rem', 
                color: '#94a3b8', 
                lineHeight: 1.6, 
                marginBottom: '2.5rem' 
              }}
            >
              Manage your mutual fund investments, monitor SIPs, evaluate capital gains, and access dedicated relationship support directly from your pocket.
            </p>

            {/* Verified Feature Checklist */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                gap: '1rem',
                marginBottom: '2.5rem'
              }}
            >
              {APP_FEATURES.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div 
                    style={{ 
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '50%', 
                      background: 'rgba(22, 185, 129, 0.15)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: 'var(--color-accent)',
                      flexShrink: 0
                    }}
                  >
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenModal && onOpenModal('client-login')}
                className="btn-primary-emerald"
              >
                <span>Explore the App →</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                <ShieldCheck size={16} color="var(--color-accent)" />
                <span>256-bit Bank Grade Security</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
