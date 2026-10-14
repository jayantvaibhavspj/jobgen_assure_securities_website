import React from 'react';
import { Link } from 'react-router-dom';
import { CalculatorsHub } from '../components/CalculatorsHub';
import { Calculator, Sparkles, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function CalculatorsPage({ onOpenModal }) {
  return (
    <div>
      
      {/* Section 1: Page Header Banner (Dark) */}
      <section className="section-dark-navy" style={{ padding: '4.5rem 0 3.5rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#38bdf8', fontWeight: 600 }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Investor Zone</span>
            <span>/</span>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>Financial Calculators</span>
          </div>

          <div className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
            Goal Planning Suite • 6 Interactive Engines
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
            Financial <span className="gradient-text">Calculators & Goal Planners</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6 }}>
            Calculate exact future requirements with compounding & inflation adjustments. Plan for your child's higher education, wedding, dream vacation, and a rich retirement with gold in your pocket.
          </p>
        </div>
      </section>

      {/* Section 2: Interactive Calculators Hub (Light) */}
      <div style={{ background: '#f8fafc' }}>
        <CalculatorsHub onOpenModal={onOpenModal} />
      </div>

      {/* Section 3: Advisory Consultation & Goal Strategy Roadmap (Dark) */}
      <section className="section-dark-navy" style={{ padding: '5rem 0', background: '#0b1120', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div style={{ 
            background: 'rgba(30, 41, 59, 0.75)', 
            borderRadius: '28px', 
            padding: '3rem', 
            border: '1px solid rgba(255,255,255,0.1)', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap', 
            gap: '2rem' 
          }}>
            <div>
              <span className="badge-tag accent-emerald">Custom Strategy Blueprint</span>
              <h3 style={{ fontSize: '1.9rem', color: '#ffffff', fontWeight: 800, marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                Want a Comprehensive Goal Roadmap?
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', margin: 0, maxWidth: '600px', lineHeight: 1.6 }}>
                Calculators give mathematical estimates. Our AMFI certified advisors in Gomtinagar, Lucknow review your actual cash flow, tax brackets, and insurance safety net to build your execution plan.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenModal('consultation')}
                className="btn-emerald"
                style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
              >
                <span>Get Free Goal Roadmap</span>
                <ArrowRight size={16} />
              </button>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-secondary"
                style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
              >
                <span>Call Advisor Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
