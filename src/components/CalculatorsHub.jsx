import React, { useState } from 'react';
import { 
  Calculator, Sparkles, TrendingUp, GraduationCap, Heart, 
  Clock, PiggyBank, ArrowRight, ShieldCheck, Info, CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function CalculatorsHub({ onOpenModal, initialTab = 'sip' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  // SIP Calculator State
  const [sipAmount, setSipAmount] = useState(10000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(15);

  // Lumpsum State
  const [lumpAmount, setLumpAmount] = useState(200000);
  const [lumpRate, setLumpRate] = useState(12);
  const [lumpYears, setLumpYears] = useState(10);

  // Child Education State
  const [childCurrentAge, setChildCurrentAge] = useState(4);
  const [childCollegeAge, setChildCollegeAge] = useState(18);
  const [childCurrentCost, setChildCurrentCost] = useState(1500000);
  const [childInflation, setChildInflation] = useState(8);

  // Wedding State
  const [weddingYears, setWeddingYears] = useState(7);
  const [weddingCurrentCost, setWeddingCurrentCost] = useState(2500000);
  const [weddingInflation, setWeddingInflation] = useState(7);

  // Retirement State
  const [currentAge, setCurrentAge] = useState(32);
  const [retireAge, setRetireAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [retireInflation, setRetireInflation] = useState(6);

  // Formatter
  const formatINR = (val) => {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  };

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.8 }
      });
    } catch (e) {
      // safe fallback
    }
  };

  // --- Calculations ---

  // 1. SIP Calc
  const sipMonths = sipYears * 12;
  const sipMonthlyRate = (sipRate / 100) / 12;
  const sipTotalValue = Math.round(
    sipAmount * ((Math.pow(1 + sipMonthlyRate, sipMonths) - 1) / sipMonthlyRate) * (1 + sipMonthlyRate)
  );
  const sipInvested = sipAmount * sipMonths;
  const sipGains = Math.max(0, sipTotalValue - sipInvested);
  const sipMultiplier = (sipTotalValue / (sipInvested || 1)).toFixed(2);

  // 2. Lumpsum Calc
  const lumpTotalValue = Math.round(lumpAmount * Math.pow(1 + (lumpRate / 100), lumpYears));
  const lumpGains = Math.max(0, lumpTotalValue - lumpAmount);

  // 3. Child Education
  const childYearsLeft = Math.max(1, childCollegeAge - childCurrentAge);
  const childFutureCost = Math.round(childCurrentCost * Math.pow(1 + (childInflation / 100), childYearsLeft));
  const childReturnMonthly = (0.12) / 12;
  const childTotalMonths = childYearsLeft * 12;
  const childRequiredSip = Math.round(
    childFutureCost / (((Math.pow(1 + childReturnMonthly, childTotalMonths) - 1) / childReturnMonthly) * (1 + childReturnMonthly))
  );

  // 4. Wedding
  const weddingFutureCost = Math.round(weddingCurrentCost * Math.pow(1 + (weddingInflation / 100), weddingYears));
  const weddingTotalMonths = weddingYears * 12;
  const weddingRequiredSip = Math.round(
    weddingFutureCost / (((Math.pow(1 + childReturnMonthly, weddingTotalMonths) - 1) / childReturnMonthly) * (1 + childReturnMonthly))
  );

  // 5. Retirement
  const yearsToRetire = Math.max(1, retireAge - currentAge);
  const futureMonthlyExpense = monthlyExpense * Math.pow(1 + (retireInflation / 100), yearsToRetire);
  const targetRetireCorpus = Math.round(futureMonthlyExpense * 12 * 22);
  const retireTotalMonths = yearsToRetire * 12;
  const retireRequiredSip = Math.round(
    targetRetireCorpus / (((Math.pow(1 + childReturnMonthly, retireTotalMonths) - 1) / childReturnMonthly) * (1 + childReturnMonthly))
  );

  const TABS = [
    { id: 'sip', label: 'SIP Calculator', icon: TrendingUp },
    { id: 'lumpsum', label: 'Lumpsum Calculator', icon: PiggyBank },
    { id: 'retirement', label: 'Retirement Independence', icon: Clock },
    { id: 'child', label: 'Child Education', icon: GraduationCap },
    { id: 'wedding', label: 'Wedding Milestone', icon: Heart }
  ];

  return (
    <section 
      id="calculators" 
      style={{ 
        background: 'var(--color-bg)', 
        padding: '6rem 0',
        borderBottom: '1px solid var(--color-border)' 
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '760px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              background: 'rgba(22, 185, 129, 0.1)', 
              color: 'var(--color-accent)', 
              padding: '0.4rem 1rem', 
              borderRadius: '100px', 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              letterSpacing: '0.06em', 
              textTransform: 'uppercase', 
              marginBottom: '1rem' 
            }}
          >
            <Sparkles size={14} />
            <span>Interactive Financial Planning Architecture</span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', 
              fontWeight: 800, 
              color: 'var(--color-primary)', 
              letterSpacing: '-0.03em', 
              lineHeight: 1.2, 
              marginBottom: '1rem' 
            }}
          >
            Simulate Your Financial Future
          </h2>

          <p 
            style={{ 
              fontSize: '1.05rem', 
              color: 'var(--color-text-secondary)', 
              lineHeight: 1.6, 
              margin: 0 
            }}
          >
            Adjust monthly investment amounts, timeframes, and expected annualized rates to model the compounding trajectory of your private wealth portfolio.
          </p>
        </div>

        {/* Tab Pills */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '0.75rem', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            marginBottom: '3rem' 
          }}
        >
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); triggerCelebration(); }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                  background: isActive ? 'var(--color-primary)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--color-text)',
                  boxShadow: isActive ? '0 8px 20px -4px rgba(7, 26, 47, 0.2)' : '0 1px 3px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} color={isActive ? '#16B981' : 'var(--color-text-secondary)'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Calculator Main Box */}
        <div 
          className="fintech-card"
          style={{ 
            background: '#ffffff', 
            padding: 'clamp(1.75rem, 4vw, 3.25rem)',
            borderRadius: '24px',
            border: '1px solid var(--color-border)'
          }}
        >
          {/* TAB 1: SIP CALCULATOR */}
          {activeTab === 'sip' && (
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: 'clamp(2rem, 4vw, 3.5rem)',
                alignItems: 'center'
              }}
            >
              {/* Inputs Column */}
              <div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Systematic Investment Plan
                  </span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', margin: '0.25rem 0 0.5rem 0' }}>
                    SIP Compounding Engine
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Automated monthly investing with rupee-cost averaging to maximize long-term wealth creation.
                  </p>
                </div>

                {/* Control 1: Monthly Investment */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <label style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-text)' }}>Monthly Investment</label>
                    <div style={{ display: 'flex', alignItems: 'center', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '0.35rem 0.75rem' }}>
                      <span style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '1.1rem' }}>{formatINR(sipAmount)}</span>
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="200000" 
                    step="1000" 
                    value={sipAmount} 
                    onChange={(e) => setSipAmount(Number(e.target.value))} 
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                    <span>₹1,000</span>
                    <span>₹50,000</span>
                    <span>₹2,00,000 / mo</span>
                  </div>
                </div>

                {/* Control 2: Expected Rate of Return */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <label style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-text)' }}>Expected Rate of Return (p.a)</label>
                    <div style={{ display: 'flex', alignItems: 'center', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '0.35rem 0.75rem' }}>
                      <span style={{ fontWeight: 800, color: 'var(--color-accent)', fontSize: '1.1rem' }}>{sipRate}%</span>
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="6" 
                    max="22" 
                    step="0.5" 
                    value={sipRate} 
                    onChange={(e) => setSipRate(Number(e.target.value))} 
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                    <span>6% (Conservative)</span>
                    <span>12% (Balanced Equity)</span>
                    <span>22% (High-Growth)</span>
                  </div>
                </div>

                {/* Control 3: Investment Period */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <label style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-text)' }}>Investment Period</label>
                    <div style={{ display: 'flex', alignItems: 'center', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '0.35rem 0.75rem' }}>
                      <span style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '1.1rem' }}>{sipYears} Years</span>
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="35" 
                    step="1" 
                    value={sipYears} 
                    onChange={(e) => setSipYears(Number(e.target.value))} 
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: 'var(--color-text-secondary)', marginTop: '6px' }}>
                    <span>1 Year</span>
                    <span>15 Years</span>
                    <span>35 Years</span>
                  </div>
                </div>
              </div>

              {/* Modern Result Card */}
              <div 
                className="fintech-card-dark"
                style={{ 
                  padding: '2.5rem', 
                  borderRadius: '20px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  boxShadow: '0 20px 40px -10px rgba(7, 26, 47, 0.4)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                      Estimated Value
                    </span>
                    <span style={{ background: 'rgba(22, 185, 129, 0.15)', color: '#16B981', padding: '0.2rem 0.65rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>
                      {sipMultiplier}x Multiplier
                    </span>
                  </div>

                  <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem', fontVariantNumeric: 'tabular-nums' }}>
                    {formatINR(sipTotalValue)}
                  </div>

                  {/* Dual-color Breakdown Progress Bar */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', overflow: 'hidden', display: 'flex' }}>
                      <div 
                        style={{ 
                          width: `${Math.min(100, Math.max(8, Math.round((sipInvested / sipTotalValue) * 100)))}%`, 
                          background: '#64748b', 
                          height: '100%' 
                        }} 
                      />
                      <div style={{ flex: 1, background: '#16B981', height: '100%' }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', marginTop: '6px' }}>
                      <span style={{ color: '#cbd5e1' }}>● Invested Capital ({Math.round((sipInvested / sipTotalValue) * 100)}%)</span>
                      <span style={{ color: '#16B981' }}>● Estimated Wealth Gain ({100 - Math.round((sipInvested / sipTotalValue) * 100)}%)</span>
                    </div>
                  </div>

                  {/* Breakdown Table */}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                      <span style={{ color: '#94a3b8' }}>Invested Amount</span>
                      <strong style={{ color: '#ffffff', fontVariantNumeric: 'tabular-nums' }}>{formatINR(sipInvested)}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                      <span style={{ color: '#94a3b8' }}>Est. Compounding Gain</span>
                      <strong style={{ color: '#16B981', fontVariantNumeric: 'tabular-nums' }}>+{formatINR(sipGains)}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2.5rem' }}>
                  <button 
                    onClick={() => onOpenModal && onOpenModal('consultation')}
                    className="btn-primary-emerald"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Start Investing Online →</span>
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#94a3b8', margin: '0.75rem 0 0 0' }}>
                    AMFI Registered ARN-182137 • Direct AMC Folio Registration
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LUMPSUM CALCULATOR */}
          {activeTab === 'lumpsum' && (
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: 'clamp(2rem, 4vw, 3.5rem)',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    One-Time Capital Deployment
                  </span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', margin: '0.25rem 0 0.5rem 0' }}>
                    Lumpsum Compounding
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Deploy surplus capital from bonuses, property sales, or maturing deposits into structured portfolios.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <label style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-text)' }}>Total Investment</label>
                    <span style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '1.1rem' }}>{formatINR(lumpAmount)}</span>
                  </div>
                  <input type="range" min="10000" max="2500000" step="10000" value={lumpAmount} onChange={(e) => setLumpAmount(Number(e.target.value))} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <label style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-text)' }}>Expected Return (p.a)</label>
                    <span style={{ fontWeight: 800, color: 'var(--color-accent)', fontSize: '1.1rem' }}>{lumpRate}%</span>
                  </div>
                  <input type="range" min="6" max="20" step="0.5" value={lumpRate} onChange={(e) => setLumpRate(Number(e.target.value))} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <label style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--color-text)' }}>Investment Period</label>
                    <span style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '1.1rem' }}>{lumpYears} Years</span>
                  </div>
                  <input type="range" min="1" max="30" step="1" value={lumpYears} onChange={(e) => setLumpYears(Number(e.target.value))} />
                </div>
              </div>

              <div className="fintech-card-dark" style={{ padding: '2.5rem', borderRadius: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                    Estimated Maturity Value
                  </span>
                  <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: '#ffffff', margin: '0.5rem 0 1.5rem 0' }}>
                    {formatINR(lumpTotalValue)}
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#94a3b8' }}>Principal Deposited</span>
                      <strong style={{ color: '#ffffff' }}>{formatINR(lumpAmount)}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#94a3b8' }}>Est. Wealth Accrued</span>
                      <strong style={{ color: '#16B981' }}>+{formatINR(lumpGains)}</strong>
                    </div>
                  </div>
                </div>
                <button onClick={() => onOpenModal && onOpenModal('consultation')} className="btn-primary-emerald" style={{ width: '100%', marginTop: '2.5rem', justifyContent: 'center' }}>
                  Deploy Lumpsum With Advisor →
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: RETIREMENT CALCULATOR */}
          {activeTab === 'retirement' && (
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: 'clamp(2rem, 4vw, 3.5rem)',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Financial Freedom
                  </span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', margin: '0.25rem 0 0.5rem 0' }}>
                    Retirement Independence Planner
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Calculate the precise inflation-adjusted corpus required to sustain your lifestyle after salary stops.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', display: 'block', marginBottom: '0.35rem' }}>Current Age</label>
                    <input type="number" min="20" max="55" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontWeight: 700 }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', display: 'block', marginBottom: '0.35rem' }}>Retirement Age</label>
                    <input type="number" min="45" max="70" value={retireAge} onChange={(e) => setRetireAge(Number(e.target.value))} style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontWeight: 700 }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text)' }}>Current Monthly Living Expense</label>
                    <span style={{ fontWeight: 800, color: 'var(--color-primary)' }}>{formatINR(monthlyExpense)}</span>
                  </div>
                  <input type="range" min="25000" max="250000" step="5000" value={monthlyExpense} onChange={(e) => setMonthlyExpense(Number(e.target.value))} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text)' }}>Expected Inflation</label>
                    <span style={{ fontWeight: 800, color: 'var(--color-accent)' }}>{retireInflation}%</span>
                  </div>
                  <input type="range" min="4" max="9" step="0.5" value={retireInflation} onChange={(e) => setRetireInflation(Number(e.target.value))} />
                </div>
              </div>

              <div className="fintech-card-dark" style={{ padding: '2.5rem', borderRadius: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                    Target Corpus at Age {retireAge}
                  </span>
                  <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: '#ffffff', margin: '0.5rem 0 1.5rem 0' }}>
                    {formatINR(targetRetireCorpus)}
                  </div>
                  <div style={{ background: 'rgba(22, 185, 129, 0.1)', border: '1px solid rgba(22, 185, 129, 0.25)', borderRadius: '12px', padding: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'block' }}>Required Monthly SIP:</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#16B981' }}>{formatINR(retireRequiredSip)} / mo</span>
                  </div>
                </div>
                <button onClick={() => onOpenModal && onOpenModal('consultation')} className="btn-primary-emerald" style={{ width: '100%', justifyContent: 'center' }}>
                  Build Retirement Strategy →
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: CHILD EDUCATION */}
          {activeTab === 'child' && (
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: 'clamp(2rem, 4vw, 3.5rem)',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Next Generation Future
                  </span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', margin: '0.25rem 0 0.5rem 0' }}>
                    Child Education Corpus
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Higher education inflation averages 8-10% annually. Plan early to fund prestigious universities debt-free.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', display: 'block', marginBottom: '0.35rem' }}>Child Age Today</label>
                    <input type="number" min="0" max="17" value={childCurrentAge} onChange={(e) => setChildCurrentAge(Number(e.target.value))} style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontWeight: 700 }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', display: 'block', marginBottom: '0.35rem' }}>College Entry Age</label>
                    <input type="number" min="15" max="25" value={childCollegeAge} onChange={(e) => setChildCollegeAge(Number(e.target.value))} style={{ width: '100%', padding: '0.65rem', borderRadius: '8px', border: '1px solid var(--color-border)', fontWeight: 700 }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text)' }}>Today's Degree Cost</label>
                    <span style={{ fontWeight: 800, color: 'var(--color-primary)' }}>{formatINR(childCurrentCost)}</span>
                  </div>
                  <input type="range" min="500000" max="6000000" step="100000" value={childCurrentCost} onChange={(e) => setChildCurrentCost(Number(e.target.value))} />
                </div>
              </div>

              <div className="fintech-card-dark" style={{ padding: '2.5rem', borderRadius: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                    Target Degree Fund in {childYearsLeft} Years
                  </span>
                  <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: '#ffffff', margin: '0.5rem 0 1.5rem 0' }}>
                    {formatINR(childFutureCost)}
                  </div>
                  <div style={{ background: 'rgba(22, 185, 129, 0.1)', border: '1px solid rgba(22, 185, 129, 0.25)', borderRadius: '12px', padding: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'block' }}>Required Monthly SIP (@ 12%):</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#16B981' }}>{formatINR(childRequiredSip)} / mo</span>
                  </div>
                </div>
                <button onClick={() => onOpenModal && onOpenModal('consultation')} className="btn-primary-emerald" style={{ width: '100%', justifyContent: 'center' }}>
                  Plan Child Education Fund →
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: WEDDING */}
          {activeTab === 'wedding' && (
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: 'clamp(2rem, 4vw, 3.5rem)',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Milestone Planning
                  </span>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)', margin: '0.25rem 0 0.5rem 0' }}>
                    Marriage & Wedding Fund
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Celebrate major family milestones joyfully without liquidating critical emergency reserves or taking high-cost loans.
                  </p>
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text)' }}>Years to Wedding</label>
                    <span style={{ fontWeight: 800, color: 'var(--color-primary)' }}>{weddingYears} Years</span>
                  </div>
                  <input type="range" min="1" max="15" step="1" value={weddingYears} onChange={(e) => setWeddingYears(Number(e.target.value))} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text)' }}>Estimated Current Budget</label>
                    <span style={{ fontWeight: 800, color: 'var(--color-primary)' }}>{formatINR(weddingCurrentCost)}</span>
                  </div>
                  <input type="range" min="500000" max="8000000" step="200000" value={weddingCurrentCost} onChange={(e) => setWeddingCurrentCost(Number(e.target.value))} />
                </div>
              </div>

              <div className="fintech-card-dark" style={{ padding: '2.5rem', borderRadius: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                    Future Wedding Cost ({weddingYears} Yrs)
                  </span>
                  <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 800, color: '#ffffff', margin: '0.5rem 0 1.5rem 0' }}>
                    {formatINR(weddingFutureCost)}
                  </div>
                  <div style={{ background: 'rgba(22, 185, 129, 0.1)', border: '1px solid rgba(22, 185, 129, 0.25)', borderRadius: '12px', padding: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', display: 'block' }}>Required Monthly SIP:</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#16B981' }}>{formatINR(weddingRequiredSip)} / mo</span>
                  </div>
                </div>
                <button onClick={() => onOpenModal && onOpenModal('consultation')} className="btn-primary-emerald" style={{ width: '100%', justifyContent: 'center' }}>
                  Start Milestone SIP →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Regulatory & Advisory Disclaimer Notice */}
        <div 
          style={{ 
            marginTop: '2rem', 
            padding: '1.25rem 1.5rem', 
            borderRadius: '12px', 
            background: '#ffffff', 
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem'
          }}
        >
          <Info size={18} color="var(--color-text-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            <strong>Important Regulatory Notice:</strong> Mutual fund investments are subject to market risks, read all scheme related documents carefully. Calculations shown above are illustrative, mathematical simulations based on user assumptions and do not constitute guaranteed returns or personalized financial advice.
          </p>
        </div>

      </div>
    </section>
  );
}
