import React from 'react';
import { Link } from 'react-router-dom';
import { CalculatorsHub } from '../components/CalculatorsHub';
import { Calculator, Sparkles, TrendingUp, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function CalculatorsPage({ onOpenModal }) {
  return (
    <div>
      {/* Page Header Banner */}
      <section style={{ background: 'var(--color-primary)', color: '#ffffff', padding: '4.5rem 0 3.5rem 0', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#cbd5e1' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#94a3b8' }}>Investor Zone</span>
            <span>/</span>
            <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Calculators</span>
          </div>

          <div className="eyebrow-pill emerald">
            <Sparkles size={13} />
            <span>Interactive Goal Engines</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)', fontWeight: 700, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            Financial Calculators & <span style={{ color: 'var(--color-accent)' }}>Goal Architecture</span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '680px', lineHeight: 1.6, margin: 0 }}>
            Model compounding trajectories with inflation adjustments. Plan for your child's higher education, wedding milestones, and retirement independence.
          </p>
        </div>
      </section>

      {/* Interactive Calculators Hub */}
      <div style={{ background: '#ffffff' }}>
        <CalculatorsHub onOpenModal={onOpenModal} />
      </div>

      {/* Advisory Consultation Strip */}
      <section style={{ padding: '4.5rem 0', background: 'var(--color-primary)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div 
            style={{ 
              background: 'var(--color-secondary)', 
              borderRadius: '24px', 
              padding: 'clamp(2rem, 4vw, 3rem)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '2rem' 
            }}
          >
            <div>
              <div className="eyebrow-pill emerald">
                <ShieldCheck size={13} />
                <span>Custom Strategy Blueprint</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#ffffff', fontWeight: 700, margin: '0.35rem 0 0.5rem 0' }}>
                Want a Comprehensive Wealth Roadmap?
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1rem', margin: 0, maxWidth: '580px', lineHeight: 1.6 }}>
                Calculators provide mathematical simulations. Our AMFI registered advisors in Gomtinagar, Lucknow review your actual cash flows, tax brackets, and time horizon to design an actionable plan.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenModal && onOpenModal('consultation')}
                className="btn-primary-emerald"
              >
                <span>Request Goal Roadmap →</span>
              </button>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-outline-white"
              >
                <Phone size={15} />
                <span>Call Advisor Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
