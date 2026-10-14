import React from 'react';
import { 
  Smartphone, Check, ArrowRight, ShieldCheck, TrendingUp, 
  PieChart, Download, Sparkles, Bell 
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
        padding: '7rem 0', 
        background: 'var(--color-primary)', 
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      {/* Subtle background glow */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '-15%', 
          left: '10%', 
          width: '500px', 
          height: '500px', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(22, 185, 129, 0.12) 0%, transparent 70%)', 
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
          
          {/* LEFT: Phone Mockup */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div 
              style={{ 
                width: '320px', 
                height: '620px', 
                background: '#0a0f1d', 
                borderRadius: '44px', 
                border: '9px solid #1e293b', 
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 40px rgba(22, 185, 129, 0.15)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Phone Dynamic Island / Notch */}
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '12px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  width: '96px', 
                  height: '22px', 
                  background: '#1e293b', 
                  borderRadius: '16px',
                  zIndex: 20
                }} 
              />

              {/* Mobile Screen Header */}
              <div style={{ padding: '42px 18px 14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#16B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.75rem', color: '#071A2F' }}>
                      AS
                    </div>
                    <div>
                      <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Portfolio Dashboard</div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff' }}>Assure Client</div>
                    </div>
                  </div>
                  <Bell size={16} color="#94a3b8" />
                </div>
              </div>

              {/* Inside Phone: Live Portfolio Content */}
              <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', overflowY: 'auto' }}>
                
                {/* Net Worth Card */}
                <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '18px', padding: '16px' }}>
                  <span style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Consolidated Net Worth</span>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#ffffff', margin: '4px 0', letterSpacing: '-0.02em' }}>
                    ₹24,80,000
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: '#16B981', fontSize: '0.75rem', fontWeight: 700 }}>+18.6%</span>
                    <span style={{ color: '#64748b', fontSize: '0.68rem' }}>1-Yr Returns (Demo)</span>
                  </div>
                </div>

                {/* Mini SVG Trend Line */}
                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '14px', padding: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginBottom: '8px' }}>
                    <span>Growth Trajectory</span>
                    <span style={{ color: '#16B981' }}>Disciplined SIP</span>
                  </div>
                  <svg width="100%" height="45" viewBox="0 0 240 45" fill="none">
                    <path d="M0 40 Q 60 30, 110 24 T 180 12 T 240 4" stroke="#16B981" strokeWidth="2.5" fill="none" />
                  </svg>
                </div>

                {/* Active SIP Pill */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(22, 185, 129, 0.08)', border: '1px solid rgba(22, 185, 129, 0.25)', borderRadius: '12px', padding: '10px 14px' }}>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#ffffff' }}>Active Monthly SIP</div>
                    <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Next debit: 5th of month</div>
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#16B981' }}>₹25,000</span>
                </div>

                {/* Quick Shortcuts */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <TrendingUp size={16} color="#38bdf8" style={{ margin: '0 auto 4px auto' }} />
                    <span style={{ fontSize: '0.68rem', color: '#cbd5e1', display: 'block' }}>Transact Funds</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <PieChart size={16} color="#16B981" style={{ margin: '0 auto 4px auto' }} />
                    <span style={{ fontSize: '0.68rem', color: '#cbd5e1', display: 'block' }}>Tax Report</span>
                  </div>
                </div>

              </div>

              {/* Bottom Phone Bar */}
              <div style={{ padding: '10px 0 14px 0', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100px', height: '4px', background: 'rgba(255,255,255,0.25)', borderRadius: '4px' }} />
              </div>
            </div>
          </div>

          {/* RIGHT: Content & Features */}
          <div>
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                background: 'rgba(22, 185, 129, 0.12)', 
                color: 'var(--color-accent)', 
                padding: '0.4rem 1rem', 
                borderRadius: '100px', 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                letterSpacing: '0.06em', 
                textTransform: 'uppercase', 
                marginBottom: '1.25rem' 
              }}
            >
              <Smartphone size={14} />
              <span>Mobile Wealth Suite</span>
            </div>

            <h2 
              style={{ 
                fontSize: 'clamp(2.4rem, 4.5vw, 3.5rem)', 
                fontWeight: 800, 
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
                marginBottom: '3rem'
              }}
            >
              {APP_FEATURES.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div 
                    style={{ 
                      width: '22px', 
                      height: '22px', 
                      borderRadius: '50%', 
                      background: 'rgba(22, 185, 129, 0.15)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: 'var(--color-accent)',
                      flexShrink: 0
                    }}
                  >
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: '0.92rem', color: '#e2e8f0', fontWeight: 500 }}>
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
                style={{ fontSize: '1rem', padding: '0.9rem 1.85rem' }}
              >
                <span>Explore the App →</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.85rem' }}>
                <ShieldCheck size={18} color="var(--color-accent)" />
                <span>256-bit Bank Grade Security</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
