import React, { useState } from 'react';
import { 
  Calculator, TrendingUp, PiggyBank, Clock, 
  GraduationCap, ArrowRight, ShieldCheck, Info 
} from 'lucide-react';

export function CalculatorsHub({ onOpenModal, initialTab = 'sip', theme = 'dark' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const themeClass = theme === 'light' ? 'section-theme-light' : 'section-theme-dark';

  // SIP Calculator State
  const [sipAmount, setSipAmount] = useState(15000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(15);

  // Lumpsum State
  const [lumpAmount, setLumpAmount] = useState(500000);
  const [lumpRate, setLumpRate] = useState(12);
  const [lumpYears, setLumpYears] = useState(10);

  // Child Education State
  const [childCurrentAge, setChildCurrentAge] = useState(4);
  const [childCollegeAge, setChildCollegeAge] = useState(18);
  const [childCurrentCost, setChildCurrentCost] = useState(2500000);
  const [childInflation, setChildInflation] = useState(8);

  // Retirement State
  const [currentAge, setCurrentAge] = useState(32);
  const [retireAge, setRetireAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(60000);
  const [retireInflation, setRetireInflation] = useState(6);

  // Formatter
  const formatINR = (val) => {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  };

  // Calculations
  // 1. SIP
  const sipMonths = sipYears * 12;
  const sipMonthlyRate = (sipRate / 100) / 12;
  const sipTotalValue = Math.round(
    sipAmount * ((Math.pow(1 + sipMonthlyRate, sipMonths) - 1) / sipMonthlyRate) * (1 + sipMonthlyRate)
  );
  const sipInvested = sipAmount * sipMonths;
  const sipGains = Math.max(0, sipTotalValue - sipInvested);
  const sipGainPct = sipTotalValue > 0 ? ((sipGains / sipInvested) * 100).toFixed(0) : 0;

  // 2. Lumpsum
  const lumpTotalValue = Math.round(lumpAmount * Math.pow(1 + (lumpRate / 100), lumpYears));
  const lumpGains = Math.max(0, lumpTotalValue - lumpAmount);
  const lumpGainPct = lumpAmount > 0 ? ((lumpGains / lumpAmount) * 100).toFixed(0) : 0;

  // 3. Child Education
  const childYearsLeft = Math.max(1, childCollegeAge - childCurrentAge);
  const childFutureCost = Math.round(childCurrentCost * Math.pow(1 + (childInflation / 100), childYearsLeft));
  const childReturnMonthly = 0.12 / 12;
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
    <section id="calculators" className={`calculators-section ${themeClass}`} style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Financial Architecture Skyscraper Background Image */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/assets/section7-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.45,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="eyebrow-label">
            <span>07 — WEALTH TOOLS</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: 'var(--color-text)', maxWidth: '650px', lineHeight: 1.12 }}>
              Calculated <span className="text-blue">clarity</span>,
              <br />
              <span className="text-red" style={{ fontStyle: 'italic' }}>
                for your future wealth.
              </span>
            </h2>

            <p style={{ maxWidth: '440px', fontSize: '0.96rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
              Model multi-year compounding scenarios, evaluate inflation impacts, and establish the exact monthly discipline needed for your milestones.
            </p>
          </div>
        </div>

        {/* Modern 2026 Fintech Bento Card */}
        <div 
          style={{
            background: 'rgba(15, 23, 42, 0.90)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '24px',
            boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            overflow: 'hidden'
          }}
        >
          
          {/* Modern Floating Segmented Tabs */}
          <div 
            style={{ 
              display: 'flex', 
              gap: '0.4rem', 
              padding: '0.45rem', 
              margin: '1.25rem 1.5rem 0 1.5rem',
              background: 'rgba(2, 6, 23, 0.65)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              overflowX: 'auto',
              scrollbarWidth: 'none'
            }}
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.85rem 1.4rem',
                    borderRadius: '12px',
                    fontSize: '0.86rem',
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: '0.02em',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isActive ? '1px solid rgba(16, 185, 129, 0.45)' : '1px solid transparent',
                    background: isActive ? 'linear-gradient(135deg, rgba(5, 150, 105, 0.3) 0%, rgba(16, 185, 129, 0.18) 100%)' : 'transparent',
                    color: isActive ? '#34d399' : '#94a3b8',
                    boxShadow: isActive ? '0 4px 14px rgba(16, 185, 129, 0.15)' : 'none',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Icon size={16} color={isActive ? '#34d399' : '#64748b'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Calculator Body */}
          <div style={{ padding: 'clamp(1.75rem, 3.5vw, 3rem)' }}>
            
            {/* 1. SIP CALCULATOR */}
            {activeTab === 'sip' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
                
                {/* Inputs Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Monthly Investment Tile */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <label style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>Monthly Investment</label>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#34d399', fontWeight: 700, background: 'rgba(16, 185, 129, 0.12)', padding: '0.2rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                        {formatINR(sipAmount)}
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="1000" 
                      max="200000" 
                      step="1000" 
                      value={sipAmount} 
                      onChange={(e) => setSipAmount(Number(e.target.value))} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
                      <span>Min: ₹1,000</span>
                      <span>Max: ₹2,00,000</span>
                    </div>
                    {/* Quick Preset Chips */}
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {[5000, 10000, 25000, 50000, 100000].map((val) => (
                        <span 
                          key={val} 
                          onClick={() => setSipAmount(val)} 
                          className={`calc-preset-chip ${sipAmount === val ? 'active' : ''}`}
                        >
                          {val >= 100000 ? `₹${val/100000}L` : `₹${val/1000}K`}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expected Return Tile */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <label style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>Expected Annual Return</label>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#38bdf8', fontWeight: 700, background: 'rgba(56, 189, 248, 0.12)', padding: '0.2rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                        {sipRate}% p.a.
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="6" 
                      max="20" 
                      step="0.5" 
                      value={sipRate} 
                      onChange={(e) => setSipRate(Number(e.target.value))} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
                      <span>6% (Debt)</span>
                      <span>12% (Balanced)</span>
                      <span>20% (Aggressive)</span>
                    </div>
                    {/* Return Rate Presets */}
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {[
                        { label: '10% Conservative', val: 10 },
                        { label: '12% Balanced', val: 12 },
                        { label: '15% Equity', val: 15 },
                        { label: '18% High Growth', val: 18 }
                      ].map((item) => (
                        <span 
                          key={item.val} 
                          onClick={() => setSipRate(item.val)} 
                          className={`calc-preset-chip ${sipRate === item.val ? 'active' : ''}`}
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Duration Tile */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <label style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>Investment Horizon</label>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#fbbf24', fontWeight: 700, background: 'rgba(251, 191, 36, 0.12)', padding: '0.2rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.3)' }}>
                        {sipYears} Years
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="35" 
                      step="1" 
                      value={sipYears} 
                      onChange={(e) => setSipYears(Number(e.target.value))} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
                      <span>1 Year</span>
                      <span>15 Years</span>
                      <span>35 Years</span>
                    </div>
                    {/* Horizon Presets */}
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {[5, 10, 15, 20, 25, 30].map((yr) => (
                        <span 
                          key={yr} 
                          onClick={() => setSipYears(yr)} 
                          className={`calc-preset-chip ${sipYears === yr ? 'active' : ''}`}
                        >
                          {yr} Years
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Outputs & Spotlight Dashboard Column */}
                <div 
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(16, 185, 129, 0.08) 0%, rgba(15, 23, 42, 0.95) 100%)', 
                    border: '1px solid rgba(16, 185, 129, 0.3)', 
                    borderRadius: '20px', 
                    padding: '2rem 1.85rem',
                    boxShadow: '0 15px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                  }}
                >
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                        Projected Portfolio Maturity
                      </span>
                    </div>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.74rem', 
                        fontWeight: 700, 
                        color: '#34d399', 
                        background: 'rgba(16, 185, 129, 0.15)', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '9999px',
                        border: '1px solid rgba(16, 185, 129, 0.35)' 
                      }}
                    >
                      +{sipGainPct}% Wealth Multiple
                    </span>
                  </div>

                  {/* Total Corpus */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                      Total Future Maturity Value
                    </div>
                    <div 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)', 
                        color: '#10b981', 
                        fontWeight: 700, 
                        letterSpacing: '-0.02em',
                        textShadow: '0 0 25px rgba(16, 185, 129, 0.25)',
                        margin: '0.35rem 0'
                      }}
                    >
                      {formatINR(sipTotalValue)}
                    </div>
                  </div>

                  {/* Two Output Breakdown Bento Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '1rem' }}>
                      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                        Invested Capital
                      </div>
                      <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#f1f5f9' }}>
                        {formatINR(sipInvested)}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                        {Math.round((sipInvested / sipTotalValue) * 100)}% of total
                      </div>
                    </div>

                    <div style={{ background: 'rgba(56, 189, 248, 0.06)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '14px', padding: '1rem' }}>
                      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#38bdf8', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                        Estimated Gains
                      </div>
                      <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#38bdf8' }}>
                        {formatINR(sipGains)}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                        {Math.round((sipGains / sipTotalValue) * 100)}% compounding
                      </div>
                    </div>
                  </div>

                  {/* Modern Dual Proportion Bar */}
                  <div style={{ width: '100%', height: '8px', background: '#1e293b', borderRadius: '9999px', display: 'flex', overflow: 'hidden', marginBottom: '1.75rem' }}>
                    <div style={{ width: `${Math.round((sipInvested / sipTotalValue) * 100)}%`, background: '#64748b' }} title="Principal" />
                    <div style={{ width: `${Math.round((sipGains / sipTotalValue) * 100)}%`, background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)' }} title="Gains" />
                  </div>

                  <button 
                    onClick={() => onOpenModal && onOpenModal('contact-consult')}
                    style={{ 
                      width: '100%', 
                      height: '48px', 
                      fontSize: '0.88rem', 
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.65rem',
                      boxShadow: '0 8px 25px -4px rgba(16, 185, 129, 0.45)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Execute This SIP Strategy</span>
                    <ArrowRight size={14} />
                  </button>

                </div>

              </div>
            )}

            {/* 2. LUMPSUM CALCULATOR */}
            {activeTab === 'lumpsum' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
                
                {/* Inputs Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Lumpsum Capital Tile */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <label style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>Total Lumpsum Capital</label>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#34d399', fontWeight: 700, background: 'rgba(16, 185, 129, 0.12)', padding: '0.2rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                        {formatINR(lumpAmount)}
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="25000" 
                      max="10000000" 
                      step="25000" 
                      value={lumpAmount} 
                      onChange={(e) => setLumpAmount(Number(e.target.value))} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
                      <span>Min: ₹25,000</span>
                      <span>Max: ₹1 Crore</span>
                    </div>
                    {/* Quick Preset Chips */}
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {[100000, 250000, 500000, 1000000, 2500000, 5000000].map((val) => (
                        <span 
                          key={val} 
                          onClick={() => setLumpAmount(val)} 
                          className={`calc-preset-chip ${lumpAmount === val ? 'active' : ''}`}
                        >
                          {val >= 100000 ? `₹${val/100000}L` : `₹${val/1000}K`}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Return Rate Tile */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <label style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>Expected Annual Return</label>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#38bdf8', fontWeight: 700, background: 'rgba(56, 189, 248, 0.12)', padding: '0.2rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                        {lumpRate}% p.a.
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="6" 
                      max="20" 
                      step="0.5" 
                      value={lumpRate} 
                      onChange={(e) => setLumpRate(Number(e.target.value))} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
                      <span>6% (Conservative)</span>
                      <span>12% (Balanced)</span>
                      <span>20% (Aggressive)</span>
                    </div>
                    {/* Rate Preset Chips */}
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {[
                        { label: '10% Conservative', val: 10 },
                        { label: '12% Balanced', val: 12 },
                        { label: '15% Equity', val: 15 },
                        { label: '18% High Growth', val: 18 }
                      ].map((item) => (
                        <span 
                          key={item.val} 
                          onClick={() => setLumpRate(item.val)} 
                          className={`calc-preset-chip ${lumpRate === item.val ? 'active' : ''}`}
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tenure Tile */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <label style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>Investment Horizon</label>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#fbbf24', fontWeight: 700, background: 'rgba(251, 191, 36, 0.12)', padding: '0.2rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.3)' }}>
                        {lumpYears} Years
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="30" 
                      step="1" 
                      value={lumpYears} 
                      onChange={(e) => setLumpYears(Number(e.target.value))} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
                      <span>1 Year</span>
                      <span>10 Years</span>
                      <span>30 Years</span>
                    </div>
                    {/* Horizon Preset Chips */}
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {[3, 5, 7, 10, 15, 20].map((yr) => (
                        <span 
                          key={yr} 
                          onClick={() => setLumpYears(yr)} 
                          className={`calc-preset-chip ${lumpYears === yr ? 'active' : ''}`}
                        >
                          {yr} Years
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Outputs & Spotlight Dashboard Column */}
                <div 
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(16, 185, 129, 0.08) 0%, rgba(15, 23, 42, 0.95) 100%)', 
                    border: '1px solid rgba(16, 185, 129, 0.3)', 
                    borderRadius: '20px', 
                    padding: '2rem 1.85rem',
                    boxShadow: '0 15px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                        Projected Lumpsum Maturity
                      </span>
                    </div>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.74rem', 
                        fontWeight: 700, 
                        color: '#34d399', 
                        background: 'rgba(16, 185, 129, 0.15)', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '9999px',
                        border: '1px solid rgba(16, 185, 129, 0.35)' 
                      }}
                    >
                      +{lumpGainPct}% Wealth Multiple
                    </span>
                  </div>

                  {/* Total Corpus */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                      Total Future Maturity Value
                    </div>
                    <div 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)', 
                        color: '#10b981', 
                        fontWeight: 700, 
                        letterSpacing: '-0.02em',
                        textShadow: '0 0 25px rgba(16, 185, 129, 0.25)',
                        margin: '0.35rem 0'
                      }}
                    >
                      {formatINR(lumpTotalValue)}
                    </div>
                  </div>

                  {/* Two Output Breakdown Bento Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '1rem' }}>
                      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                        Initial Capital
                      </div>
                      <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#f1f5f9' }}>
                        {formatINR(lumpAmount)}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                        {Math.round((lumpAmount / lumpTotalValue) * 100)}% of total
                      </div>
                    </div>

                    <div style={{ background: 'rgba(56, 189, 248, 0.06)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '14px', padding: '1rem' }}>
                      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#38bdf8', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                        Compounded Gains
                      </div>
                      <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#38bdf8' }}>
                        {formatINR(lumpGains)}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                        {Math.round((lumpGains / lumpTotalValue) * 100)}% compounding
                      </div>
                    </div>
                  </div>

                  {/* Modern Dual Proportion Bar */}
                  <div style={{ width: '100%', height: '8px', background: '#1e293b', borderRadius: '9999px', display: 'flex', overflow: 'hidden', marginBottom: '1.75rem' }}>
                    <div style={{ width: `${Math.round((lumpAmount / lumpTotalValue) * 100)}%`, background: '#64748b' }} title="Principal" />
                    <div style={{ width: `${Math.round((lumpGains / lumpTotalValue) * 100)}%`, background: 'linear-gradient(90deg, #10b981 0%, #34d399 100%)' }} title="Gains" />
                  </div>

                  <button 
                    onClick={() => onOpenModal && onOpenModal('contact-consult')}
                    style={{ 
                      width: '100%', 
                      height: '48px', 
                      fontSize: '0.88rem', 
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.65rem',
                      boxShadow: '0 8px 25px -4px rgba(16, 185, 129, 0.45)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Deploy Lumpsum Safely (STP Mode)</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            )}

            {/* 3. RETIREMENT PLANNER */}
            {activeTab === 'retirement' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
                
                {/* Inputs Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Current Age Tile */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <label style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>Current Age</label>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#38bdf8', fontWeight: 700, background: 'rgba(56, 189, 248, 0.12)', padding: '0.2rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                        {currentAge} Years
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="55" 
                      value={currentAge} 
                      onChange={(e) => setCurrentAge(Number(e.target.value))} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
                      <span>Min: 20 Yrs</span>
                      <span>Max: 55 Yrs</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {[25, 28, 32, 35, 40, 45].map((age) => (
                        <span 
                          key={age} 
                          onClick={() => setCurrentAge(age)} 
                          className={`calc-preset-chip ${currentAge === age ? 'active' : ''}`}
                        >
                          {age}Y
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Retirement Age Tile */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <label style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>Target Retirement Age</label>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#fbbf24', fontWeight: 700, background: 'rgba(251, 191, 36, 0.12)', padding: '0.2rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.3)' }}>
                        {retireAge} Years
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="70" 
                      value={retireAge} 
                      onChange={(e) => setRetireAge(Number(e.target.value))} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
                      <span>50 Yrs (Early FIRE)</span>
                      <span>60 Yrs (Standard)</span>
                      <span>70 Yrs</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {[
                        { label: '50Y Early FIRE', val: 50 },
                        { label: '55Y Semi-Retire', val: 55 },
                        { label: '58Y Corporate', val: 58 },
                        { label: '60Y Standard', val: 60 },
                        { label: '65Y Extended', val: 65 }
                      ].map((item) => (
                        <span 
                          key={item.val} 
                          onClick={() => setRetireAge(item.val)} 
                          className={`calc-preset-chip ${retireAge === item.val ? 'active' : ''}`}
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Monthly Expenses Tile */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <label style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>Current Monthly Living Expense</label>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#34d399', fontWeight: 700, background: 'rgba(16, 185, 129, 0.12)', padding: '0.2rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                        {formatINR(monthlyExpense)}
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="20000" 
                      max="300000" 
                      step="5000" 
                      value={monthlyExpense} 
                      onChange={(e) => setMonthlyExpense(Number(e.target.value))} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
                      <span>Min: ₹20,000</span>
                      <span>Mid: ₹1,50,000</span>
                      <span>Max: ₹3,00,000</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {[30000, 50000, 75000, 100000, 150000, 200000].map((exp) => (
                        <span 
                          key={exp} 
                          onClick={() => setMonthlyExpense(exp)} 
                          className={`calc-preset-chip ${monthlyExpense === exp ? 'active' : ''}`}
                        >
                          {exp >= 100000 ? `₹${exp/100000}L` : `₹${exp/1000}K`}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Outputs & Spotlight Dashboard Column */}
                <div 
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(16, 185, 129, 0.08) 0%, rgba(15, 23, 42, 0.95) 100%)', 
                    border: '1px solid rgba(16, 185, 129, 0.3)', 
                    borderRadius: '20px', 
                    padding: '2rem 1.85rem',
                    boxShadow: '0 15px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                        Retirement Freedom Roadmap
                      </span>
                    </div>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.74rem', 
                        fontWeight: 700, 
                        color: '#fbbf24', 
                        background: 'rgba(251, 191, 36, 0.15)', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '9999px',
                        border: '1px solid rgba(251, 191, 36, 0.35)' 
                      }}
                    >
                      {yearsToRetire} Years to Freedom
                    </span>
                  </div>

                  {/* Target Nest Egg Corpus */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                      Target Inflation-Adjusted Corpus
                    </div>
                    <div 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)', 
                        color: '#10b981', 
                        fontWeight: 700, 
                        letterSpacing: '-0.02em',
                        textShadow: '0 0 25px rgba(16, 185, 129, 0.25)',
                        margin: '0.35rem 0'
                      }}
                    >
                      {formatINR(targetRetireCorpus)}
                    </div>
                    <div style={{ fontSize: '0.73rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      Funds 22+ years of independent living with 6% annual inflation buffer
                    </div>
                  </div>

                  {/* Two Output Breakdown Bento Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '1rem' }}>
                      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                        Future Monthly Need
                      </div>
                      <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#f1f5f9' }}>
                        {formatINR(futureMonthlyExpense)}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                        at age {retireAge} (6% inflation)
                      </div>
                    </div>

                    <div style={{ background: 'rgba(56, 189, 248, 0.06)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '14px', padding: '1rem' }}>
                      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#38bdf8', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                        Required Monthly SIP
                      </div>
                      <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#38bdf8' }}>
                        {formatINR(retireRequiredSip)}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                        at 12% equity CAGR
                      </div>
                    </div>
                  </div>

                  {/* Modern Dual Proportion Timeline Bar */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.45rem' }}>
                      <span>Current: {currentAge}Y</span>
                      <span>Accumulation: {yearsToRetire} Yrs ({retireTotalMonths} SIPs)</span>
                      <span>Retirement: {retireAge}Y</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: '#1e293b', borderRadius: '9999px', display: 'flex', overflow: 'hidden' }}>
                      <div style={{ width: `${Math.min(100, Math.max(10, Math.round((currentAge / retireAge) * 100)))}%`, background: '#64748b' }} title="Age Elapsed" />
                      <div style={{ width: `${100 - Math.min(100, Math.max(10, Math.round((currentAge / retireAge) * 100)))}%`, background: 'linear-gradient(90deg, #10b981 0%, #38bdf8 100%)' }} title="Accumulation Window" />
                    </div>
                  </div>

                  <button 
                    onClick={() => onOpenModal && onOpenModal('contact-consult')}
                    style={{ 
                      width: '100%', 
                      height: '48px', 
                      fontSize: '0.88rem', 
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.65rem',
                      boxShadow: '0 8px 25px -4px rgba(16, 185, 129, 0.45)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Build Your Retirement Blueprint</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* 4. CHILD EDUCATION PLANNER */}
            {activeTab === 'child' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
                
                {/* Inputs Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Child Current Age Tile */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <label style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>Child's Current Age</label>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#38bdf8', fontWeight: 700, background: 'rgba(56, 189, 248, 0.12)', padding: '0.2rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                        {childCurrentAge} Years
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="15" 
                      value={childCurrentAge} 
                      onChange={(e) => setChildCurrentAge(Number(e.target.value))} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
                      <span>0 Yrs (Newborn)</span>
                      <span>7 Yrs (Primary)</span>
                      <span>15 Yrs (High School)</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {[0, 2, 4, 7, 10, 12].map((age) => (
                        <span 
                          key={age} 
                          onClick={() => setChildCurrentAge(age)} 
                          className={`calc-preset-chip ${childCurrentAge === age ? 'active' : ''}`}
                        >
                          {age === 0 ? 'Newborn' : `${age} Yrs`}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Higher Education Entry Age Tile */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <label style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>College Admission Age</label>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#fbbf24', fontWeight: 700, background: 'rgba(251, 191, 36, 0.12)', padding: '0.2rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.3)' }}>
                        {childCollegeAge} Years
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="16" 
                      max="23" 
                      value={childCollegeAge} 
                      onChange={(e) => setChildCollegeAge(Number(e.target.value))} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
                      <span>16 Yrs</span>
                      <span>18 Yrs (Standard UG)</span>
                      <span>23 Yrs (Post-Grad)</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {[
                        { label: '17Y Foundation', val: 17 },
                        { label: '18Y College UG', val: 18 },
                        { label: '21Y Masters/MBA', val: 21 },
                        { label: '22Y Overseas', val: 22 }
                      ].map((item) => (
                        <span 
                          key={item.val} 
                          onClick={() => setChildCollegeAge(item.val)} 
                          className={`calc-preset-chip ${childCollegeAge === item.val ? 'active' : ''}`}
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Degree Cost Tile */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem 1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <label style={{ fontSize: '0.84rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94a3b8', fontWeight: 600 }}>Estimated Present Degree Cost</label>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', color: '#34d399', fontWeight: 700, background: 'rgba(16, 185, 129, 0.12)', padding: '0.2rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                        {formatINR(childCurrentCost)}
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="500000" 
                      max="10000000" 
                      step="100000" 
                      value={childCurrentCost} 
                      onChange={(e) => setChildCurrentCost(Number(e.target.value))} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.5rem', marginBottom: '0.85rem' }}>
                      <span>Min: ₹5 Lakhs</span>
                      <span>Mid: ₹40 Lakhs</span>
                      <span>Max: ₹1 Crore</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                      {[
                        { label: '₹10L', val: 1000000 },
                        { label: '₹25L', val: 2500000 },
                        { label: '₹40L Engg/MBA', val: 4000000 },
                        { label: '₹60L Medicine', val: 6000000 },
                        { label: '₹1Cr Abroad', val: 10000000 }
                      ].map((item) => (
                        <span 
                          key={item.val} 
                          onClick={() => setChildCurrentCost(item.val)} 
                          className={`calc-preset-chip ${childCurrentCost === item.val ? 'active' : ''}`}
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Outputs & Spotlight Dashboard Column */}
                <div 
                  style={{ 
                    background: 'linear-gradient(145deg, rgba(16, 185, 129, 0.08) 0%, rgba(15, 23, 42, 0.95) 100%)', 
                    border: '1px solid rgba(16, 185, 129, 0.3)', 
                    borderRadius: '20px', 
                    padding: '2rem 1.85rem',
                    boxShadow: '0 15px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                        Higher Education Goal Fund
                      </span>
                    </div>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.74rem', 
                        fontWeight: 700, 
                        color: '#34d399', 
                        background: 'rgba(16, 185, 129, 0.15)', 
                        padding: '0.25rem 0.65rem', 
                        borderRadius: '9999px',
                        border: '1px solid rgba(16, 185, 129, 0.35)' 
                      }}
                    >
                      {childYearsLeft} Years Compounding Window
                    </span>
                  </div>

                  {/* Future Inflated Cost */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ fontSize: '0.76rem', color: '#94a3b8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
                      Target Future Education Fund (at 8% Inflation)
                    </div>
                    <div 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)', 
                        color: '#10b981', 
                        fontWeight: 700, 
                        letterSpacing: '-0.02em',
                        textShadow: '0 0 25px rgba(16, 185, 129, 0.25)',
                        margin: '0.35rem 0'
                      }}
                    >
                      {formatINR(childFutureCost)}
                    </div>
                    <div style={{ fontSize: '0.73rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      Factoring 8% higher education inflation compounding over {childYearsLeft} years
                    </div>
                  </div>

                  {/* Two Output Breakdown Bento Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '1rem' }}>
                      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                        Today's Base Cost
                      </div>
                      <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#f1f5f9' }}>
                        {formatINR(childCurrentCost)}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                        at present degree fees
                      </div>
                    </div>

                    <div style={{ background: 'rgba(56, 189, 248, 0.06)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '14px', padding: '1rem' }}>
                      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: '#38bdf8', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>
                        Monthly SIP Needed
                      </div>
                      <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#38bdf8' }}>
                        {formatINR(childRequiredSip)}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', marginTop: '0.2rem' }}>
                        at 12% equity CAGR
                      </div>
                    </div>
                  </div>

                  {/* Modern Dual Proportion Timeline Bar */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '0.45rem' }}>
                      <span>Age Now: {childCurrentAge}Y</span>
                      <span>{childYearsLeft} Years to College ({childTotalMonths} SIPs)</span>
                      <span>College: {childCollegeAge}Y</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: '#1e293b', borderRadius: '9999px', display: 'flex', overflow: 'hidden' }}>
                      <div style={{ width: `${Math.min(100, Math.max(10, Math.round((childCurrentAge / childCollegeAge) * 100)))}%`, background: '#64748b' }} title="Current Age" />
                      <div style={{ width: `${100 - Math.min(100, Math.max(10, Math.round((childCurrentAge / childCollegeAge) * 100)))}%`, background: 'linear-gradient(90deg, #10b981 0%, #fbbf24 100%)' }} title="Investment Window" />
                    </div>
                  </div>

                  <button 
                    onClick={() => onOpenModal && onOpenModal('contact-consult')}
                    style={{ 
                      width: '100%', 
                      height: '48px', 
                      fontSize: '0.88rem', 
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.65rem',
                      boxShadow: '0 8px 25px -4px rgba(16, 185, 129, 0.45)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Secure Your Child's Future</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Statutory Disclaimer Note */}
          <div style={{ padding: '1.1rem 2rem', background: 'rgba(2, 6, 23, 0.85)', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.74rem', color: '#94a3b8' }}>
            <Info size={15} color="#10b981" style={{ flexShrink: 0 }} />
            <span>
              Disclaimer: Calculations are illustrative in nature and based on assumed rates of return. Mutual fund investments are subject to market risks. Read all scheme related documents carefully before investing.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CalculatorsHub;
