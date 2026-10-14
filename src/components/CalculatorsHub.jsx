import React, { useState } from 'react';
import { 
  Calculator, Sparkles, TrendingUp, GraduationCap, Heart, 
  Palmtree, Clock, PiggyBank, ArrowRight, CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function CalculatorsHub({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('sip');

  // SIP Calculator State
  const [sipAmount, setSipAmount] = useState(15000);
  const [sipRate, setSipRate] = useState(13);
  const [sipYears, setSipYears] = useState(15);

  // Lumpsum State
  const [lumpAmount, setLumpAmount] = useState(200000);
  const [lumpRate, setLumpRate] = useState(12);
  const [lumpYears, setLumpYears] = useState(10);

  // Child Education State
  const [childCurrentAge, setChildCurrentAge] = useState(4);
  const [childCollegeAge, setChildCollegeAge] = useState(18);
  const [childCurrentCost, setChildCurrentCost] = useState(1500000); // 15 Lakhs
  const [childInflation, setChildInflation] = useState(8);

  // Wedding State
  const [weddingYears, setWeddingYears] = useState(7);
  const [weddingCurrentCost, setWeddingCurrentCost] = useState(2500000); // 25 Lakhs
  const [weddingInflation, setWeddingInflation] = useState(7);

  // Retirement State
  const [currentAge, setCurrentAge] = useState(32);
  const [retireAge, setRetireAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [retireInflation, setRetireInflation] = useState(6);

  // Vacation State
  const [vacationCost, setVacationCost] = useState(300000); // 3 Lakhs
  const [vacationMonths, setVacationMonths] = useState(18);

  // Formatter
  const formatINR = (val) => {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  };

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
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
  const sipGains = sipTotalValue - sipInvested;

  // 2. Lumpsum Calc
  const lumpTotalValue = Math.round(lumpAmount * Math.pow(1 + (lumpRate / 100), lumpYears));
  const lumpGains = lumpTotalValue - lumpAmount;

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

  // 6. Vacation
  const vacationReturnMonthly = (0.09) / 12;
  const vacationRequiredSip = Math.round(
    vacationCost / (((Math.pow(1 + vacationReturnMonthly, vacationMonths) - 1) / vacationReturnMonthly) * (1 + vacationReturnMonthly))
  );

  return (
    <section id="calculators" className="section-wrapper" style={{ background: '#f8fafc', padding: '5rem 0' }}>
      <div className="container">
        
        {/* Title & Authentic Illustration Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center', marginBottom: '3.5rem' }} className="calc-header-grid">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', padding: '0.35rem 0.95rem', borderRadius: '100px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              <Sparkles size={14} color="#059669" />
              <span>Institutional Wealth Simulator • Scenario Modeling</span>
            </div>
            <h2 className="section-heading" style={{ marginBottom: '1rem', fontSize: '2.3rem' }}>
              Private Wealth Planning & <span className="gradient-text">Generational Goal Architecture</span>
            </h2>
            <p className="section-subheading" style={{ margin: 0, color: '#475569' }}>
              Model multi-decade compounding trajectories, backtest real inflation purchasing power, and architect mathematically sound milestones for your family's future.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img 
              src="/assets/2_fg.png" 
              alt="Assure Securities Financial Goals Planning"
              style={{ maxHeight: '200px', width: 'auto', objectFit: 'contain', margin: '0 auto', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.06))' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          gap: '0.65rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '2.5rem'
        }}>
          {[
            { id: 'sip', label: 'SIP Wealth Engine', icon: TrendingUp },
            { id: 'lumpsum', label: 'Lumpsum Compounding', icon: PiggyBank },
            { id: 'child', label: 'Child Education Corpus', icon: GraduationCap },
            { id: 'wedding', label: 'Wedding Milestone', icon: Heart },
            { id: 'retirement', label: 'Retirement Independence', icon: Clock },
            { id: 'vacation', label: 'Leisure & Travel Fund', icon: Palmtree }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); triggerCelebration(); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.8rem 1.4rem',
                  borderRadius: '16px',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  transition: 'all 0.2s ease',
                  background: isActive ? '#1d4ed8' : '#ffffff',
                  color: isActive ? '#ffffff' : '#334155',
                  border: isActive ? '1px solid #1d4ed8' : '1px solid #e2e8f0',
                  boxShadow: isActive ? '0 10px 20px -5px rgba(37,99,235,0.4)' : '0 2px 8px rgba(0,0,0,0.04)',
                  cursor: 'pointer'
                }}
              >
                <Icon size={17} color={isActive ? '#ffffff' : '#2563eb'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Calculator Main Container */}
        <div className="glass-card" style={{ padding: '3rem', background: '#ffffff', borderRadius: '28px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-card)' }}>
          
          {/* TAB 1: SIP CALCULATOR */}
          {activeTab === 'sip' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="calc-layout-grid">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Rupee Cost Averaging Engine</span>
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                  Systematic Investment Plan (SIP)
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '2rem', lineHeight: 1.6 }}>
                  Harness disciplined monthly capital compounding. Automatically acquire more fund units during market pullbacks and multiply gains during structural economic expansions.
                </p>

                {/* Slider: Monthly SIP */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                    <label style={{ fontSize: '0.92rem', fontWeight: 700, color: '#334155' }}>Monthly Capital Deployment</label>
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#2563eb', fontVariantNumeric: 'tabular-nums' }}>{formatINR(sipAmount)}</span>
                  </div>
                  <input type="range" min="1000" max="250000" step="1000" value={sipAmount} onChange={(e) => setSipAmount(Number(e.target.value))} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#94a3b8', marginTop: '6px' }}>
                    <span>₹1,000 / mo</span>
                    <span>₹1,00,000 / mo</span>
                    <span>₹2,50,000 / mo</span>
                  </div>
                </div>

                {/* Slider: Expected Return */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                    <label style={{ fontSize: '0.92rem', fontWeight: 700, color: '#334155' }}>Expected Annualized CAGR</label>
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#2563eb', fontVariantNumeric: 'tabular-nums' }}>{sipRate}%</span>
                  </div>
                  <input type="range" min="6" max="24" step="0.5" value={sipRate} onChange={(e) => setSipRate(Number(e.target.value))} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#94a3b8', marginTop: '6px' }}>
                    <span>7% (Conservative Debt)</span>
                    <span>13.5% (Indian Equity MF)</span>
                    <span>22% (High-Alpha Smallcap)</span>
                  </div>
                </div>

                {/* Slider: Tenure */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                    <label style={{ fontSize: '0.92rem', fontWeight: 700, color: '#334155' }}>Compounding Horizon</label>
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#2563eb', fontVariantNumeric: 'tabular-nums' }}>{sipYears} Years</span>
                  </div>
                  <input type="range" min="1" max="35" step="1" value={sipYears} onChange={(e) => setSipYears(Number(e.target.value))} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#94a3b8', marginTop: '6px' }}>
                    <span>1 Year</span>
                    <span>15 Years (Prime)</span>
                    <span>35 Years (Generational)</span>
                  </div>
                </div>

                {/* Milestone Roadmap Callout */}
                <div style={{ padding: '1.25rem', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                    Projected Wealth Milestones:
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ background: '#ecfdf5', color: '#059669', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
                      ✓ ₹50 Lakhs: ~{Math.max(1, Math.round(5000000 / (sipAmount * 12 * 1.5)))} Yrs
                    </span>
                    <span style={{ background: '#eff6ff', color: '#1d4ed8', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
                      ✓ 1st ₹1 Crore: ~{Math.max(2, Math.round(10000000 / (sipAmount * 12 * 1.8)))} Yrs
                    </span>
                    <span style={{ background: '#fef3c7', color: '#b45309', padding: '0.35rem 0.75rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
                      ✓ Multi-Crore Financial Freedom
                    </span>
                  </div>
                </div>
              </div>

              {/* Result Column */}
              <div style={{ 
                background: 'linear-gradient(135deg, #090e1a 0%, #172554 100%)', 
                borderRadius: '24px', 
                padding: '2.5rem', 
                color: '#ffffff', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                boxShadow: '0 25px 50px -15px rgba(15,23,42,0.5)'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700 }}>
                      Simulated Maturity Corpus
                    </span>
                    <span style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 800 }}>
                      {sipYears} YRS @ {sipRate}%
                    </span>
                  </div>

                  <div style={{ fontSize: '3rem', fontWeight: 800, color: '#38bdf8', margin: '0.5rem 0 1.5rem 0', fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>
                    {formatINR(sipTotalValue)}
                  </div>

                  {/* Visual Proportion Bar */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <div style={{ height: '10px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', overflow: 'hidden', display: 'flex' }}>
                      <div style={{ width: `${Math.min(100, Math.max(10, Math.round((sipInvested / sipTotalValue) * 100)))}%`, background: '#38bdf8', height: '100%' }} title="Invested Capital" />
                      <div style={{ flex: 1, background: '#10b981', height: '100%' }} title="Compounded Gains" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginTop: '6px' }}>
                      <span style={{ color: '#38bdf8' }}>● Principal ({Math.round((sipInvested / sipTotalValue) * 100)}%)</span>
                      <span style={{ color: '#10b981' }}>● Wealth Created ({100 - Math.round((sipInvested / sipTotalValue) * 100)}%)</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#cbd5e1' }}>Capital Invested:</span>
                      <strong style={{ color: '#ffffff', fontVariantNumeric: 'tabular-nums' }}>{formatINR(sipInvested)}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#cbd5e1' }}>Pure Compounding Gain:</span>
                      <strong style={{ color: '#4ade80', fontVariantNumeric: 'tabular-nums' }}>+{formatINR(sipGains)}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#cbd5e1' }}>Capital Multiplier:</span>
                      <strong style={{ color: '#f59e0b' }}>{(sipTotalValue / (sipInvested || 1)).toFixed(2)}x Growth</strong>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2.5rem' }}>
                  <button onClick={() => onOpenModal('consultation')} className="btn-emerald" style={{ width: '100%', padding: '0.95rem', fontSize: '0.95rem' }}>
                    <span>Execute This Wealth Plan via Assure</span>
                    <ArrowRight size={17} />
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#94a3b8', margin: '0.75rem 0 0 0' }}>
                    Zero Custody Risk • Direct AMC Folio Registration (ARN-182137)
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LUMPSUM */}
          {activeTab === 'lumpsum' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="calc-layout-grid">
              <div>
                <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.5rem' }}>Lumpsum Mutual Fund Investment</h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '1.75rem' }}>
                  Calculate growth on one-time surplus deposits (bonus, property sale proceeds, maturing FD) in mutual funds.
                </p>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>One-Time Investment</label>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2563eb' }}>{formatINR(lumpAmount)}</span>
                  </div>
                  <input type="range" min="10000" max="2500000" step="10000" value={lumpAmount} onChange={(e) => setLumpAmount(Number(e.target.value))} />
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Expected Annual Return (p.a.)</label>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2563eb' }}>{lumpRate}%</span>
                  </div>
                  <input type="range" min="6" max="20" step="0.5" value={lumpRate} onChange={(e) => setLumpRate(Number(e.target.value))} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Investment Horizon</label>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2563eb' }}>{lumpYears} Years</span>
                  </div>
                  <input type="range" min="1" max="30" step="1" value={lumpYears} onChange={(e) => setLumpYears(Number(e.target.value))} />
                </div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '20px', padding: '2rem', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Maturity Value</div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#38bdf8', margin: '0.5rem 0 1.5rem 0' }}>{formatINR(lumpTotalValue)}</div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#cbd5e1' }}>Principal Deposited:</span>
                      <strong>{formatINR(lumpAmount)}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#cbd5e1' }}>Wealth Accrued:</span>
                      <strong style={{ color: '#4ade80' }}>+{formatINR(lumpGains)}</strong>
                    </div>
                  </div>
                </div>

                <button onClick={() => onOpenModal('consultation')} className="btn-emerald" style={{ marginTop: '2rem', width: '100%', padding: '0.85rem' }}>
                  <span>Deploy Lumpsum With Advisor</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: CHILD EDUCATION */}
          {activeTab === 'child' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="calc-layout-grid">
              <div>
                <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.5rem' }}>Child Higher Education Planning</h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '1.75rem' }}>
                  College tuition in India and abroad grows at 8-10% inflation. Let's create a plan to give wings to their dreams.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.3rem' }}>Child Current Age</label>
                    <input type="number" min="0" max="17" value={childCurrentAge} onChange={(e) => setChildCurrentAge(Number(e.target.value))} style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.3rem' }}>College Entry Age</label>
                    <input type="number" min="15" max="25" value={childCollegeAge} onChange={(e) => setChildCollegeAge(Number(e.target.value))} style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Today's Estimated Degree Cost</label>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2563eb' }}>{formatINR(childCurrentCost)}</span>
                  </div>
                  <input type="range" min="500000" max="6000000" step="100000" value={childCurrentCost} onChange={(e) => setChildCurrentCost(Number(e.target.value))} />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Education Inflation Rate</label>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2563eb' }}>{childInflation}%</span>
                  </div>
                  <input type="range" min="6" max="12" step="0.5" value={childInflation} onChange={(e) => setChildInflation(Number(e.target.value))} />
                </div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '20px', padding: '2rem', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Target Fund in {childYearsLeft} Years</div>
                  <div style={{ fontSize: '2.3rem', fontWeight: 800, color: '#38bdf8', margin: '0.5rem 0 1.25rem 0' }}>{formatINR(childFutureCost)}</div>

                  <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '14px', padding: '1.25rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.82rem', color: '#93c5fd' }}>Recommended Monthly SIP (@ 12%):</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#4ade80' }}>{formatINR(childRequiredSip)} / month</div>
                  </div>

                  <p style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                    Starting today secures your child's admission in top universities without relying on expensive education loans.
                  </p>
                </div>

                <button onClick={() => onOpenModal('consultation')} className="btn-emerald" style={{ marginTop: '1.5rem', width: '100%', padding: '0.85rem' }}>
                  <span>Create Child Education Plan</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: WEDDING CALCULATOR */}
          {activeTab === 'wedding' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="calc-layout-grid">
              <div>
                <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.5rem' }}>Wedding / Marriage Fund Planner</h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '1.75rem' }}>
                  Celebrate the most memorable milestone without financial stress. Plan for venues, catering, and jewelry well in advance.
                </p>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Years to Wedding</label>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2563eb' }}>{weddingYears} Years</span>
                  </div>
                  <input type="range" min="1" max="15" step="1" value={weddingYears} onChange={(e) => setWeddingYears(Number(e.target.value))} />
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Today's Estimated Wedding Budget</label>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2563eb' }}>{formatINR(weddingCurrentCost)}</span>
                  </div>
                  <input type="range" min="500000" max="8000000" step="200000" value={weddingCurrentCost} onChange={(e) => setWeddingCurrentCost(Number(e.target.value))} />
                </div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '20px', padding: '2rem', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Future Wedding Cost ({weddingYears} yrs)</div>
                  <div style={{ fontSize: '2.3rem', fontWeight: 800, color: '#38bdf8', margin: '0.5rem 0 1.25rem 0' }}>{formatINR(weddingFutureCost)}</div>

                  <div style={{ background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.4)', borderRadius: '14px', padding: '1.25rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.82rem', color: '#fbcfe8' }}>Required Monthly SIP:</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f472b6' }}>{formatINR(weddingRequiredSip)} / month</div>
                  </div>
                </div>

                <button onClick={() => onOpenModal('consultation')} className="btn-emerald" style={{ marginTop: '1.5rem', width: '100%', padding: '0.85rem' }}>
                  <span>Start Wedding SIP Fund</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* TAB 5: RETIREMENT SAVING */}
          {activeTab === 'retirement' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="calc-layout-grid">
              <div>
                <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.5rem' }}>Retire Rich: Golden Years Planner</h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '1.75rem' }}>
                  When you got SILVER in your hair, you must have Gold in your pocket. Calculate the exact corpus needed to live comfortably without salary.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.3rem' }}>Current Age</label>
                    <input type="number" min="20" max="55" value={currentAge} onChange={(e) => setCurrentAge(Number(e.target.value))} style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '0.3rem' }}>Target Retirement Age</label>
                    <input type="number" min="45" max="70" value={retireAge} onChange={(e) => setRetireAge(Number(e.target.value))} style={{ width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Current Monthly Living Expenses</label>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2563eb' }}>{formatINR(monthlyExpense)}</span>
                  </div>
                  <input type="range" min="25000" max="300000" step="5000" value={monthlyExpense} onChange={(e) => setMonthlyExpense(Number(e.target.value))} />
                </div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '20px', padding: '2rem', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Target Retirement Corpus Needed</div>
                  <div style={{ fontSize: '2.3rem', fontWeight: 800, color: '#38bdf8', margin: '0.5rem 0 1.25rem 0' }}>{formatINR(targetRetireCorpus)}</div>

                  <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '14px', padding: '1.25rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.82rem', color: '#93c5fd' }}>Monthly SIP to Retire Wealthy:</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#4ade80' }}>{formatINR(retireRequiredSip)} / month</div>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
                    Time to retire: <strong>{yearsToRetire} years</strong> | Future monthly expense: {formatINR(futureMonthlyExpense)}
                  </div>
                </div>

                <button onClick={() => onOpenModal('consultation')} className="btn-emerald" style={{ marginTop: '1.5rem', width: '100%', padding: '0.85rem' }}>
                  <span>Build Retirement Blueprint</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* TAB 6: VACATION CALCULATOR */}
          {activeTab === 'vacation' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="calc-layout-grid">
              <div>
                <h3 style={{ fontSize: '1.6rem', color: '#0f172a', marginBottom: '0.5rem' }}>Dream Vacation Planner</h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '1.75rem' }}>
                  Travel the world guilt-free without touching emergency reserves or accumulating high-interest credit card debt.
                </p>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Estimated Trip Cost</label>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2563eb' }}>{formatINR(vacationCost)}</span>
                  </div>
                  <input type="range" min="50000" max="1500000" step="25000" value={vacationCost} onChange={(e) => setVacationCost(Number(e.target.value))} />
                </div>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Months to Fly</label>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#2563eb' }}>{vacationMonths} Months</span>
                  </div>
                  <input type="range" min="3" max="36" step="1" value={vacationMonths} onChange={(e) => setVacationMonths(Number(e.target.value))} />
                </div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '20px', padding: '2rem', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Total Trip Fund Required</div>
                  <div style={{ fontSize: '2.3rem', fontWeight: 800, color: '#38bdf8', margin: '0.5rem 0 1.25rem 0' }}>{formatINR(vacationCost)}</div>

                  <div style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '14px', padding: '1.25rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.82rem', color: '#93c5fd' }}>Monthly Short-Term Recurring Deposit / Liquid SIP:</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#4ade80' }}>{formatINR(vacationRequiredSip)} / month</div>
                  </div>
                </div>

                <button onClick={() => onOpenModal('consultation')} className="btn-emerald" style={{ marginTop: '1.5rem', width: '100%', padding: '0.85rem' }}>
                  <span>Setup Vacation Fund</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .calc-header-grid { grid-template-columns: 1.25fr 0.75fr !important; }
          .calc-layout-grid { grid-template-columns: 1.15fr 0.85fr !important; }
        }
      `}</style>
    </section>
  );
}
