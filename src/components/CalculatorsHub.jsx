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

  // Retirement State
  const [currentAge, setCurrentAge] = useState(32);
  const [retireAge, setRetireAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [retireInflation, setRetireInflation] = useState(6);

  // Wedding State
  const [weddingYears, setWeddingYears] = useState(7);
  const [weddingCurrentCost, setWeddingCurrentCost] = useState(2500000);

  // Formatter
  const formatINR = (val) => {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  };

  const triggerCelebration = () => {
    try {
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
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

  // 4. Retirement
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
    { id: 'retirement', label: 'Retirement Planner', icon: Clock },
    { id: 'child', label: 'Child Education', icon: GraduationCap }
  ];

  return (
    <section 
      id="calculators" 
      style={{ 
        background: '#ffffff', 
        padding: 'var(--section-pad-desktop) 0',
        borderBottom: '1px solid var(--color-border)' 
      }}
      className="section-pad"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-center reveal-on-scroll">
          <div className="eyebrow-pill emerald">
            <Sparkles size={13} />
            <span>Interactive Financial Architecture</span>
          </div>

          <h2>
            Simulate Your <span style={{ color: 'var(--color-accent)' }}>Financial Future</span>
          </h2>

          <p>
            Adjust monthly investment amounts, timeframes, and expected annualized returns to model the compounding trajectory of your private wealth portfolio.
          </p>
        </div>

        {/* Tab Selection (Clean, Calm Pills) */}
        <div 
          className="reveal-on-scroll stagger-1"
          style={{ 
            display: 'flex', 
            gap: '0.65rem', 
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
                  padding: '0.7rem 1.35rem',
                  borderRadius: '11px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                  background: isActive ? 'var(--color-primary)' : '#ffffff',
                  color: isActive ? '#ffffff' : 'var(--color-text)',
                  boxShadow: isActive ? '0 4px 12px rgba(7, 26, 47, 0.15)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={15} color={isActive ? '#16B981' : 'var(--color-text-secondary)'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Calculator Box */}
        <div 
          className="fintech-card"
          style={{ 
            background: 'var(--color-bg)', 
            padding: 'clamp(1.75rem, 4vw, 3rem)',
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
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Disciplined Compounding Engine
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0.25rem 0 0.5rem 0' }}>
                    Systematic Investment Plan (SIP)
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Automated monthly investing with rupee-cost averaging to maximize long-term wealth creation.
                  </p>
                </div>

                {/* Input 1: Monthly Investment */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Monthly Investment
                    </label>
                    <div style={{ display: 'inline-flex', alignItems: 'center', background: '#ffffff', border: '1.5px solid var(--color-border)', borderRadius: '8px', padding: '0.2rem 0.65rem' }}>
                      <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.15rem' }}>{formatINR(sipAmount)}</span>
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="200000" 
                    step="1000" 
                    value={sipAmount} 
                    onChange={(e) => setSipAmount(Number(e.target.value))} 
                    aria-label="Monthly SIP Amount Slider"
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.35rem' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-muted)' }}>Min: ₹1,000</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-muted)' }}>Max: ₹2,00,000</span>
                  </div>
                  {/* Quick Preset Amount Pills */}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.65rem' }}>
                    {[5000, 10000, 25000, 50000, 100000].map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => setSipAmount(amt)}
                        className={`calc-preset-pill ${sipAmount === amt ? 'active' : ''}`}
                      >
                        {formatINR(amt)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input 2: Expected Rate of Return */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Expected Rate of Return (p.a)
                    </label>
                    <div style={{ background: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '0.3rem 0.75rem' }}>
                      <span style={{ fontWeight: 700, color: 'var(--color-accent)', fontSize: '1.15rem' }}>{sipRate}%</span>
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
                  {/* Quick Preset Rate Pills */}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.65rem' }}>
                    {[
                      { r: 8, label: '8% Conservative' },
                      { r: 12, label: '12% Balanced Equity' },
                      { r: 15, label: '15% Growth Equity' }
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.r}
                        onClick={() => setSipRate(item.r)}
                        className={`calc-preset-pill ${sipRate === item.r ? 'active' : ''}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input 3: Investment Period */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Investment Period
                    </label>
                    <div style={{ background: '#ffffff', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '0.3rem 0.75rem' }}>
                      <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.15rem' }}>{sipYears} Years</span>
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
                  {/* Quick Preset Tenure Pills */}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.65rem' }}>
                    {[5, 10, 15, 20, 25].map((yr) => (
                      <button
                        type="button"
                        key={yr}
                        onClick={() => setSipYears(yr)}
                        className={`calc-preset-pill ${sipYears === yr ? 'active' : ''}`}
                      >
                        {yr} Yrs
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result Column (Section 13: Visually Dominant Result Card) */}
              <div 
                className="fintech-card-dark"
                style={{ 
                  padding: '2.5rem', 
                  borderRadius: '20px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                      ESTIMATED VALUE
                    </span>
                    <span style={{ background: 'rgba(22, 185, 129, 0.15)', color: '#16B981', padding: '0.2rem 0.65rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700 }}>
                      {sipMultiplier}x Multiplier
                    </span>
                  </div>

                  <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem', fontVariantNumeric: 'tabular-nums' }}>
                    {formatINR(sipTotalValue)}
                  </div>

                  {/* Clean Proportion Bar */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ height: '7px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', overflow: 'hidden', display: 'flex' }}>
                      <div 
                        style={{ 
                          width: `${Math.min(100, Math.max(8, Math.round((sipInvested / sipTotalValue) * 100)))}%`, 
                          background: '#64748b', 
                          height: '100%',
                          transition: 'width 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                        }} 
                      />
                      <div style={{ flex: 1, background: '#16B981', height: '100%', transition: 'background-color 0.3s ease' }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginTop: '6px' }}>
                      <span style={{ color: '#cbd5e1' }}>● Invested Capital ({Math.round((sipInvested / sipTotalValue) * 100)}%)</span>
                      <span style={{ color: '#16B981' }}>● Estimated Wealth Gain ({100 - Math.round((sipInvested / sipTotalValue) * 100)}%)</span>
                    </div>
                  </div>

                  {/* Breakdown Table */}
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                      <span style={{ color: '#94a3b8' }}>Invested Amount:</span>
                      <strong style={{ color: '#ffffff', fontVariantNumeric: 'tabular-nums' }}>{formatINR(sipInvested)}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                      <span style={{ color: '#94a3b8' }}>Est. Compounding Gain:</span>
                      <strong style={{ color: '#16B981', fontVariantNumeric: 'tabular-nums' }}>+{formatINR(sipGains)}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem' }}>
                  <button 
                    onClick={() => onOpenModal && onOpenModal('consultation')}
                    className="btn-primary-emerald"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Start Investing Online →</span>
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#94a3b8', margin: '0.75rem 0 0 0' }}>
                    Illustrative calculation. Actual returns may vary.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LUMPSUM */}
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
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    One-Time Capital Deployment
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0.25rem 0 0.5rem 0' }}>
                    Lumpsum Compounding
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Deploy surplus capital into structured mutual funds to compound over market cycles.
                  </p>
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Total Investment
                    </label>
                    <div style={{ display: 'inline-flex', alignItems: 'center', background: '#ffffff', border: '1.5px solid var(--color-border)', borderRadius: '8px', padding: '0.2rem 0.65rem' }}>
                      <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.15rem' }}>{formatINR(lumpAmount)}</span>
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="10000" 
                    max="2500000" 
                    step="10000" 
                    value={lumpAmount} 
                    onChange={(e) => setLumpAmount(Number(e.target.value))} 
                    aria-label="Total Lumpsum Investment Slider"
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.35rem' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-muted)' }}>Min: ₹10,000</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--color-muted)' }}>Max: ₹25,00,000</span>
                  </div>
                  {/* Quick Preset Amount Pills */}
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.65rem' }}>
                    {[50000, 100000, 250000, 500000, 1000000].map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => setLumpAmount(amt)}
                        className={`calc-preset-pill ${lumpAmount === amt ? 'active' : ''}`}
                      >
                        {formatINR(amt)}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Expected Return (p.a)</label>
                    <span style={{ fontWeight: 700, color: 'var(--color-accent)', fontSize: '1.15rem' }}>{lumpRate}%</span>
                  </div>
                  <input type="range" min="6" max="20" step="0.5" value={lumpRate} onChange={(e) => setLumpRate(Number(e.target.value))} />
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.65rem' }}>
                    {[
                      { r: 8, label: '8% Fixed Income' },
                      { r: 12, label: '12% Multi-Cap' },
                      { r: 15, label: '15% High Growth' }
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.r}
                        onClick={() => setLumpRate(item.r)}
                        className={`calc-preset-pill ${lumpRate === item.r ? 'active' : ''}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Investment Period</label>
                    <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.15rem' }}>{lumpYears} Years</span>
                  </div>
                  <input type="range" min="1" max="30" step="1" value={lumpYears} onChange={(e) => setLumpYears(Number(e.target.value))} />
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.65rem' }}>
                    {[3, 5, 10, 15, 20].map((yr) => (
                      <button
                        type="button"
                        key={yr}
                        onClick={() => setLumpYears(yr)}
                        className={`calc-preset-pill ${lumpYears === yr ? 'active' : ''}`}
                      >
                        {yr} Yrs
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="fintech-card-dark" style={{ padding: '2.5rem', borderRadius: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                    ESTIMATED MATURITY VALUE
                  </span>
                  <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 700, color: '#ffffff', margin: '0.5rem 0 1.5rem 0' }}>
                    {formatINR(lumpTotalValue)}
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                      <span style={{ color: '#94a3b8' }}>Principal Deposited:</span>
                      <strong style={{ color: '#ffffff' }}>{formatINR(lumpAmount)}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                      <span style={{ color: '#94a3b8' }}>Est. Wealth Accrued:</span>
                      <strong style={{ color: '#16B981' }}>+{formatINR(lumpGains)}</strong>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <button onClick={() => onOpenModal && onOpenModal('consultation')} className="btn-primary-emerald" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Deploy Lumpsum With Advisor →</span>
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#94a3b8', margin: '0.75rem 0 0 0' }}>
                    Illustrative calculation. Actual returns may vary.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RETIREMENT */}
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
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Financial Freedom
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0.25rem 0 0.5rem 0' }}>
                    Retirement Independence Planner
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Calculate the precise inflation-adjusted corpus required to sustain your lifestyle after salary stops.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.35rem' }}>Current Age</label>
                    <input type="number" min="20" max="55" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} className="fintech-input" style={{ height: '44px' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.35rem' }}>Retirement Age</label>
                    <input type="number" min="45" max="70" value={retireAge} onChange={(e) => setRetireAge(Number(e.target.value))} className="fintech-input" style={{ height: '44px' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Monthly Living Expense</label>
                    <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{formatINR(monthlyExpense)}</span>
                  </div>
                  <input type="range" min="25000" max="250000" step="5000" value={monthlyExpense} onChange={(e) => setMonthlyExpense(Number(e.target.value))} />
                </div>
              </div>

              <div className="fintech-card-dark" style={{ padding: '2.5rem', borderRadius: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                    TARGET CORPUS AT AGE {retireAge}
                  </span>
                  <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 700, color: '#ffffff', margin: '0.5rem 0 1.5rem 0' }}>
                    {formatINR(targetRetireCorpus)}
                  </div>
                  <div style={{ background: 'rgba(22, 185, 129, 0.1)', border: '1px solid rgba(22, 185, 129, 0.25)', borderRadius: '12px', padding: '1rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>Required Monthly SIP:</span>
                    <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#16B981' }}>{formatINR(retireRequiredSip)} / mo</span>
                  </div>
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                  <button onClick={() => onOpenModal && onOpenModal('consultation')} className="btn-primary-emerald" style={{ width: '100%', justifyContent: 'center' }}>
                    Build Retirement Strategy →
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#94a3b8', margin: '0.75rem 0 0 0' }}>
                    Illustrative calculation. Actual returns may vary.
                  </p>
                </div>
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
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Next Generation Future
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', margin: '0.25rem 0 0.5rem 0' }}>
                    Child Education Corpus
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Higher education inflation averages 8-10% annually. Plan early to fund prestigious universities debt-free.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.35rem' }}>Child Age Today</label>
                    <input type="number" min="0" max="17" value={childCurrentAge} onChange={(e) => setChildCurrentAge(Number(e.target.value))} className="fintech-input" style={{ height: '44px' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.35rem' }}>College Entry Age</label>
                    <input type="number" min="15" max="25" value={childCollegeAge} onChange={(e) => setChildCollegeAge(Number(e.target.value))} className="fintech-input" style={{ height: '44px' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Today's Degree Cost</label>
                    <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{formatINR(childCurrentCost)}</span>
                  </div>
                  <input type="range" min="500000" max="6000000" step="100000" value={childCurrentCost} onChange={(e) => setChildCurrentCost(Number(e.target.value))} />
                </div>
              </div>

              <div className="fintech-card-dark" style={{ padding: '2.5rem', borderRadius: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                    TARGET DEGREE FUND IN {childYearsLeft} YEARS
                  </span>
                  <div style={{ fontSize: 'clamp(2.4rem, 4vw, 3.2rem)', fontWeight: 700, color: '#ffffff', margin: '0.5rem 0 1.5rem 0' }}>
                    {formatINR(childFutureCost)}
                  </div>
                  <div style={{ background: 'rgba(22, 185, 129, 0.1)', border: '1px solid rgba(22, 185, 129, 0.25)', borderRadius: '12px', padding: '1rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>Required Monthly SIP (@ 12%):</span>
                    <span style={{ fontSize: '1.4rem', fontWeight: 700, color: '#16B981' }}>{formatINR(childRequiredSip)} / mo</span>
                  </div>
                </div>
                <div style={{ marginTop: '1.5rem' }}>
                  <button onClick={() => onOpenModal && onOpenModal('consultation')} className="btn-primary-emerald" style={{ width: '100%', justifyContent: 'center' }}>
                    Plan Child Education Fund →
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#94a3b8', margin: '0.75rem 0 0 0' }}>
                    Illustrative calculation. Actual returns may vary.
                  </p>
                </div>
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
            background: 'var(--color-bg)', 
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem'
          }}
        >
          <Info size={17} color="var(--color-text-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            <strong>Important Regulatory Notice:</strong> Mutual fund investments are subject to market risks, read all scheme related documents carefully. Calculations shown above are illustrative, mathematical simulations and do not constitute guaranteed returns or personalized financial advice.
          </p>
        </div>

      </div>
    </section>
  );
}
