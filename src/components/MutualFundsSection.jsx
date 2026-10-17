import React, { useState } from 'react';
import { 
  TrendingUp, ShieldCheck, Scale, Clock, Coins, Sparkles, 
  ArrowRight, ArrowUpRight, Star, SlidersHorizontal, 
  Search, RefreshCw, CheckCircle2, Zap, Sun, Moon, ExternalLink
} from 'lucide-react';

// ============================================================================
// MUTUAL FUNDS DATA SPECIFICATION (AMFI REG. ARN-182137)
// ============================================================================
const MF_CATEGORIES = [
  {
    id: "equity",
    title: "Equity Funds",
    tag: "Wealth Compounding",
    badge: "14.8% 5Y CAGR",
    icon: TrendingUp,
    accentColor: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.4)",
    bgTint: "rgba(16, 185, 129, 0.12)",
    horizon: "5 - 7+ Years",
    risk: "Moderate to High",
    expectedReturn: 14.5,
    benchmark: "Nifty 500 TRI",
    desc: "Capitalize on India's multi-decade structural growth story. High-conviction holdings across Large Cap, Flexi Cap, and high-growth Mid & Small Caps.",
    schemes: ["Large Cap", "Flexi Cap", "Mid Cap", "Small Cap", "Focused Strategies"],
    metrics: [
      { label: "5Y Compounding CAGR", value: "14.8%", change: "+3.4% vs Nifty 50", isPositive: true, color: "#10b981", icon: TrendingUp },
      { label: "Curated AUM Volume", value: "₹1,24,500 Cr", change: "+18.2% YoY Inflow", isPositive: true, color: "#06b6d4", icon: Coins },
      { label: "Disciplined Horizon", value: "6.4 Years", change: "+1.2 Yrs Retention", isPositive: true, color: "#f59e0b", icon: Clock },
      { label: "Downside Containment", value: "62.4%", change: "-37.6% Risk Mitigation", isPositive: true, color: "#f43f5e", icon: ShieldCheck },
      { label: "Research Conviction", value: "96.8 / 100", change: "Top 5% Quartile Funds", isPositive: true, color: "#10b981", icon: Star, rating: 5 },
      { label: "Direct AMC Routing", value: "99.4%", change: "Zero Custody Risk", isPositive: true, color: "#14b8a6", icon: Zap }
    ],
    allocation: [
      { name: "Large Cap Leaders", pct: 42, color: "#10b981" },
      { name: "Mid Cap Alpha", pct: 28, color: "#06b6d4" },
      { name: "Small Cap High Growth", pct: 18, color: "#8b5cf6" },
      { name: "Strategic Cash / Arbitrage", pct: 12, color: "#f59e0b" }
    ],
    barReturns: [
      { category: "Small Cap", returnRate: 38.2, color: "#10b981" },
      { category: "Mid Cap", returnRate: 28.1, color: "#06b6d4" },
      { category: "Flexi Cap", returnRate: 25.4, color: "#8b5cf6" },
      { category: "Large Cap", returnRate: 24.6, color: "#3b82f6" },
      { category: "Focused", returnRate: 21.8, color: "#f59e0b" },
      { category: "Index 50", returnRate: 19.5, color: "#14b8a6" }
    ],
    curatedFunds: [
      { name: "HDFC Top 100 Fund (G)", return3Y: "+24.6%", rating: 5, aum: "₹34,800 Cr", category: "Large Cap", tag: "Bluechip Foundation" },
      { name: "Nippon India Small Cap Fund (G)", return3Y: "+38.2%", rating: 5, aum: "₹52,400 Cr", category: "Small Cap", tag: "High-Alpha Growth" },
      { name: "Mirae Asset Large & Midcap Fund", return3Y: "+28.1%", rating: 5, aum: "₹39,200 Cr", category: "Large & Mid Cap", tag: "Balanced Expansion" }
    ]
  },
  {
    id: "debt",
    title: "Debt & Liquid Funds",
    tag: "Capital Preservation",
    badge: "7.8% High Yield",
    icon: ShieldCheck,
    accentColor: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.4)",
    bgTint: "rgba(6, 182, 212, 0.12)",
    horizon: "1 Day to 3 Years",
    risk: "Low to Moderate",
    expectedReturn: 7.8,
    benchmark: "Crisil Composite Bond",
    desc: "Fixed-income securities delivering predictable yields, superior liquidity compared to traditional savings accounts, and complete protection from equity market drawdowns.",
    schemes: ["Overnight & Liquid", "Ultra Short Duration", "Corporate Bond Funds", "Target Maturity G-Secs"],
    metrics: [
      { label: "Portfolio Yield (YTM)", value: "7.8%", change: "+4.1% vs Savings A/C", isPositive: true, color: "#06b6d4", icon: ShieldCheck },
      { label: "Liquidity Pool Managed", value: "₹88,200 Cr", change: "T+0 / T+1 Redemption", isPositive: true, color: "#10b981", icon: Coins },
      { label: "Modified Duration", value: "1.8 Years", change: "Ultra-Low Rate Risk", isPositive: true, color: "#f59e0b", icon: Clock },
      { label: "Credit Quality (AAA/Sovereign)", value: "98.9%", change: "Zero Default Record", isPositive: true, color: "#10b981", icon: ShieldCheck },
      { label: "Institutional Safety Score", value: "99.2 / 100", change: "Capital Shielded", isPositive: true, color: "#10b981", icon: Star, rating: 5 },
      { label: "Direct Clearing Route", value: "100%", change: "Direct AMC Settlement", isPositive: true, color: "#14b8a6", icon: Zap }
    ],
    allocation: [
      { name: "AAA Corporate Bonds", pct: 45, color: "#06b6d4" },
      { name: "Sovereign G-Secs", pct: 35, color: "#10b981" },
      { name: "Treasury Bills & Cash", pct: 15, color: "#8b5cf6" },
      { name: "Tier-1 Bank FDs/CPs", pct: 5, color: "#f59e0b" }
    ],
    barReturns: [
      { category: "Dynamic Bond", returnRate: 8.4, color: "#06b6d4" },
      { category: "Corporate Bond", returnRate: 7.9, color: "#10b981" },
      { category: "Banking & PSU", returnRate: 7.5, color: "#8b5cf6" },
      { category: "Short Duration", returnRate: 7.2, color: "#3b82f6" },
      { category: "Liquid Fund", returnRate: 6.8, color: "#f59e0b" },
      { category: "Overnight Fund", returnRate: 6.5, color: "#14b8a6" }
    ],
    curatedFunds: [
      { name: "ICICI Prudential All Seasons Bond", return3Y: "+8.4%", rating: 5, aum: "₹12,400 Cr", category: "Dynamic Bond", tag: "Flexible Duration" },
      { name: "HDFC Corporate Bond Fund (G)", return3Y: "+7.9%", rating: 5, aum: "₹28,100 Cr", category: "Corporate Bond", tag: "Top AAA Issuers" },
      { name: "SBI Liquid Fund - Regular (G)", return3Y: "+6.8%", rating: 5, aum: "₹64,500 Cr", category: "Liquid Fund", tag: "Instant Corporate Cash" }
    ]
  },
  {
    id: "hybrid",
    title: "Hybrid & Balanced Advantage",
    tag: "Dynamic Hedging",
    badge: "12.2% Downside Hedged",
    icon: Scale,
    accentColor: "#f59e0b",
    accentGlow: "rgba(245, 158, 11, 0.4)",
    bgTint: "rgba(245, 158, 11, 0.12)",
    horizon: "3 - 5 Years",
    risk: "Moderate",
    expectedReturn: 12.2,
    benchmark: "Crisil Hybrid 65+35",
    desc: "Dynamically shifts allocation between equities and debt based on real-time market P/E and P/B multiples. Captures equity upside while hedging corrections.",
    schemes: ["Balanced Advantage", "Multi-Asset Allocation", "Aggressive Hybrid", "Equity Savings"],
    metrics: [
      { label: "5Y Hybrid CAGR", value: "12.2%", change: "Dynamic Auto-Rebalance", isPositive: true, color: "#f59e0b", icon: Scale },
      { label: "Total Asset Pool", value: "₹1,45,000 Cr", change: "+22.4% YoY Inflows", isPositive: true, color: "#06b6d4", icon: Coins },
      { label: "Net Active Equity", value: "64.2%", change: "P/E Model Guided", isPositive: true, color: "#10b981", icon: TrendingUp },
      { label: "Correction Cushion", value: "-8.4%", change: "vs -22.6% Nifty Dip", isPositive: true, color: "#10b981", icon: ShieldCheck },
      { label: "Sharpe Risk Ratio", value: "1.42", change: "Superior Risk Adjusted", isPositive: true, color: "#10b981", icon: Star, rating: 5 },
      { label: "Automated Rules", value: "100%", change: "Zero Emotion Timing", isPositive: true, color: "#14b8a6", icon: Zap }
    ],
    allocation: [
      { name: "Equities (Active)", pct: 55, color: "#10b981" },
      { name: "Arbitrage & Hedging", pct: 20, color: "#f59e0b" },
      { name: "AAA Debt Securities", pct: 15, color: "#06b6d4" },
      { name: "Sovereign Gold / Cash", pct: 10, color: "#8b5cf6" }
    ],
    barReturns: [
      { category: "Aggressive Hybrid", returnRate: 19.8, color: "#10b981" },
      { category: "Balanced Advantage", returnRate: 18.1, color: "#f59e0b" },
      { category: "Multi-Asset", returnRate: 17.4, color: "#06b6d4" },
      { category: "Dynamic Asset", returnRate: 16.2, color: "#8b5cf6" },
      { category: "Equity Savings", returnRate: 11.5, color: "#3b82f6" },
      { category: "Arbitrage Fund", returnRate: 7.6, color: "#14b8a6" }
    ],
    curatedFunds: [
      { name: "HDFC Balanced Advantage Fund (G)", return3Y: "+19.2%", rating: 5, aum: "₹82,400 Cr", category: "Balanced Advantage", tag: "Market Leader" },
      { name: "ICICI Pru Balanced Advantage Fund", return3Y: "+17.4%", rating: 5, aum: "₹58,200 Cr", category: "Dynamic Asset", tag: "Proven P/E Model" },
      { name: "Kotak Multi Asset Allocation Fund", return3Y: "+18.1%", rating: 5, aum: "₹9,800 Cr", category: "Multi-Asset", tag: "Equity + Debt + Gold" }
    ]
  },
  {
    id: "elss",
    title: "Tax Saving Schemes (ELSS)",
    tag: "Section 80C Benefit",
    badge: "15.2% + Save ₹46,800",
    icon: Coins,
    accentColor: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.4)",
    bgTint: "rgba(16, 185, 129, 0.12)",
    horizon: "3 Years Lock-in",
    risk: "Moderate to High",
    expectedReturn: 15.2,
    benchmark: "BSE 500 TRI",
    desc: "The smart alternative to PPF and traditional insurance tax plans. Offers India's shortest tax lock-in period (3 years) with superior historical compounding.",
    schemes: ["ELSS Tax Saver Funds", "Systematic Tax SIPs"],
    metrics: [
      { label: "5Y ELSS CAGR", value: "15.2%", change: "+8.1% vs PPF Return", isPositive: true, color: "#10b981", icon: Coins },
      { label: "Annual Tax Deduction", value: "₹46,800", change: "Section 80C Max Relief", isPositive: true, color: "#06b6d4", icon: TrendingUp },
      { label: "Shortest Lock-in", value: "3 Years", change: "vs 15 Yrs in PPF", isPositive: true, color: "#f59e0b", icon: Clock },
      { label: "Long-Term Alpha", value: "+4.2%", change: "Over Benchmark TRI", isPositive: true, color: "#10b981", icon: ShieldCheck },
      { label: "Tax Efficiency Score", value: "98.4 / 100", change: "LTCG Exempt to ₹1.25L", isPositive: true, color: "#10b981", icon: Star, rating: 5 },
      { label: "Instant 80C Receipt", value: "100%", change: "Direct Digital Download", isPositive: true, color: "#14b8a6", icon: Zap }
    ],
    allocation: [
      { name: "Large Cap Bluechips", pct: 50, color: "#10b981" },
      { name: "Mid Cap Outperformers", pct: 30, color: "#06b6d4" },
      { name: "Small Cap High Growth", pct: 15, color: "#8b5cf6" },
      { name: "Defensive Cash Reserve", pct: 5, color: "#f59e0b" }
    ],
    barReturns: [
      { category: "Quant Tax Saver", returnRate: 31.8, color: "#10b981" },
      { category: "Mirae Asset ELSS", returnRate: 26.4, color: "#06b6d4" },
      { category: "Bandhan Tax Adv.", returnRate: 24.8, color: "#8b5cf6" },
      { category: "DSP ELSS Fund", returnRate: 22.9, color: "#3b82f6" },
      { category: "SBI Long Term Eq.", returnRate: 21.6, color: "#f59e0b" },
      { category: "PPF Fixed Return", returnRate: 7.1, color: "#64748b" }
    ],
    curatedFunds: [
      { name: "Quant ELSS Tax Saver Fund (G)", return3Y: "+31.8%", rating: 5, aum: "₹10,500 Cr", category: "ELSS Growth", tag: "Dynamic Momentum" },
      { name: "Mirae Asset ELSS Tax Saver Fund", return3Y: "+26.4%", rating: 5, aum: "₹22,100 Cr", category: "ELSS Tax Saver", tag: "Consistent Wealth" },
      { name: "DSP ELSS Tax Saver Fund (G)", return3Y: "+22.9%", rating: 5, aum: "₹14,800 Cr", category: "ELSS Standard", tag: "Disciplined Value" }
    ]
  },
  {
    id: "passive",
    title: "Index Funds & ETFs",
    tag: "Low-Cost Beta",
    badge: "13.5% Low Expense",
    icon: Sparkles,
    accentColor: "#8b5cf6",
    accentGlow: "rgba(139, 92, 246, 0.4)",
    bgTint: "rgba(139, 92, 246, 0.12)",
    horizon: "5+ Years",
    risk: "Market Risk",
    expectedReturn: 13.5,
    benchmark: "Nifty 50 TRI",
    desc: "Unbiased, rule-based replication of headline indices like Nifty 50, Sensex, and Next 50 with ultra-low expense ratios and zero fund-manager key-man risk.",
    schemes: ["Nifty 50 Index", "BSE Sensex Index", "Nifty Next 50", "Sectoral ETFs"],
    metrics: [
      { label: "5Y Index CAGR", value: "13.5%", change: "Pure Market Replication", isPositive: true, color: "#8b5cf6", icon: Sparkles },
      { label: "Ultra-Low Expense Drag", value: "0.05%", change: "Near Zero Fee Friction", isPositive: true, color: "#10b981", icon: Coins },
      { label: "Benchmark Tracking Error", value: "0.03%", change: "Ultra-Precise Matching", isPositive: true, color: "#06b6d4", icon: Scale },
      { label: "Long-Term Win Rate", value: "88%", change: "Outperforms Active Large", isPositive: true, color: "#10b981", icon: ShieldCheck },
      { label: "Systematic Transparency", value: "100 / 100", change: "SEBI Rule Guided", isPositive: true, color: "#10b981", icon: Star, rating: 5 },
      { label: "Exchange Traded Live", value: "NSE / BSE", change: "Real-time Order Routing", isPositive: true, color: "#14b8a6", icon: Zap }
    ],
    allocation: [
      { name: "Nifty 50 Top Weights", pct: 55, color: "#8b5cf6" },
      { name: "Nifty Next 50 (Emerging)", pct: 25, color: "#06b6d4" },
      { name: "Banking & Finance ETF", pct: 12, color: "#10b981" },
      { name: "IT & Tech Index ETF", pct: 8, color: "#f59e0b" }
    ],
    barReturns: [
      { category: "Nifty Next 50", returnRate: 29.7, color: "#8b5cf6" },
      { category: "Nifty Auto Index", returnRate: 28.4, color: "#06b6d4" },
      { category: "Nifty 50 TRI", returnRate: 23.4, color: "#10b981" },
      { category: "Sensex 30 TRI", returnRate: 22.1, color: "#3b82f6" },
      { category: "Nifty Bank ETF", returnRate: 18.6, color: "#f59e0b" },
      { category: "Gold ETF (Physical)", returnRate: 14.8, color: "#eab308" }
    ],
    curatedFunds: [
      { name: "Nippon India Nifty Next 50 ETF", return3Y: "+29.7%", rating: 5, aum: "₹8,600 Cr", category: "Next 50 ETF", tag: "High-Beta Mid Giants" },
      { name: "UTI Nifty 50 Index Fund (G)", return3Y: "+23.4%", rating: 5, aum: "₹18,900 Cr", category: "Nifty 50 Index", tag: "Lowest Tracking Error" },
      { name: "HDFC BSE Sensex ETF", return3Y: "+22.1%", rating: 5, aum: "₹14,200 Cr", category: "Sensex ETF", tag: "Top 30 Monopolies" }
    ]
  }
];

// Power Tools Cards
const POWER_TOOLS = [
  {
    id: "compare",
    title: "Fund Comparison Matrix",
    tag: "40+ AMCs Compare",
    icon: Scale,
    color: "#10b981",
    desc: "Analyze rolling alpha, beta, Sharpe ratio, and portfolio stock overlap across 1,500+ mutual fund schemes."
  },
  {
    id: "nav",
    title: "Live Daily NAV Tracker",
    tag: "PULSE LIVE",
    isLive: true,
    icon: TrendingUp,
    color: "#06b6d4",
    desc: "Daily automated NAV feeds synchronized directly from AMFI databases at 9:00 PM for all mutual fund schemes."
  },
  {
    id: "sip-matrix",
    title: "SIP Historical Compounding",
    tag: "10Y Rolling Matrix",
    icon: Clock,
    color: "#f59e0b",
    desc: "Discover how continuous rupee-cost averaging outperformed lump-sum timing across historical bear markets."
  },
  {
    id: "nfo",
    title: "Active NFO Radar",
    tag: "New Fund Offers",
    icon: Sparkles,
    color: "#8b5cf6",
    desc: "Evaluate vetted, research-backed New Fund Offers (NFOs) across sectoral, thematic, and index strategies."
  }
];

export function MutualFundsSection({ onOpenModal, onNavigate, variant = "full", embedded = false }) {
  const [selectedCat, setSelectedCat] = useState("equity");
  const [sipAmount, setSipAmount] = useState(10000);
  const [sipYears, setSipYears] = useState(5);
  const [activeTheme, setActiveTheme] = useState("dark"); // Default Dark matching Pinterest Pin 1130825787719937843
  const [searchQuery, setSearchQuery] = useState("");

  const activeCategory = MF_CATEGORIES.find(c => c.id === selectedCat) || MF_CATEGORIES[0];
  const ActiveIcon = activeCategory.icon;

  // Dynamic Compounding Math: PMT * [((1 + r)^n - 1) / r] * (1 + r)
  const monthlyRate = (activeCategory.expectedReturn / 100) / 12;
  const totalMonths = sipYears * 12;
  const totalInvested = sipAmount * totalMonths;
  const estimatedWealth = Math.round(
    sipAmount * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate)
  );
  const estimatedGains = Math.max(0, estimatedWealth - totalInvested);
  const wealthMultiplier = (estimatedWealth / Math.max(1, totalInvested)).toFixed(2);

  const formatINR = (val) => {
    return '₹' + Number(val).toLocaleString('en-IN');
  };

  const isDark = activeTheme === "dark";

  // Palette tokens
  const bgMain = isDark ? "#070B14" : "#F8FAFC";
  const cardBg = isDark ? "rgba(13, 20, 36, 0.85)" : "#FFFFFF";
  const cardBorder = isDark ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid rgba(226, 232, 240, 0.9)";
  const cardShadow = isDark 
    ? "0 10px 30px -5px rgba(0, 0, 0, 0.6), 0 0 20px rgba(16, 185, 129, 0.04)" 
    : "0 10px 30px -5px rgba(15, 23, 42, 0.06)";
  const textPrimary = isDark ? "#F8FAFC" : "#0F172A";
  const textMuted = isDark ? "#94A3B8" : "#64748B";

  // Generate 8 curve data points for smooth compounding trend visualization
  const trendPointsCount = 8;
  const trendPoints = Array.from({ length: trendPointsCount }, (_, i) => {
    const frac = i / (trendPointsCount - 1);
    const m = Math.round(frac * totalMonths);
    const invested = sipAmount * m;
    const corpus = m === 0 ? 0 : Math.round(
      sipAmount * ((Math.pow(1 + monthlyRate, m) - 1) / monthlyRate) * (1 + monthlyRate)
    );
    return { month: m, invested, corpus, frac };
  });

  // Calculate SVG curve paths
  const svgWidth = 600;
  const svgHeight = 220;
  const maxVal = Math.max(estimatedWealth * 1.08, 1000);

  const getCoordinates = (val, frac) => {
    const x = 30 + frac * (svgWidth - 60);
    const y = svgHeight - 25 - (val / maxVal) * (svgHeight - 55);
    return { x, y };
  };

  const investedPoints = trendPoints.map(p => getCoordinates(p.invested, p.frac));
  const corpusPoints = trendPoints.map(p => getCoordinates(p.corpus, p.frac));

  const makeSmoothPath = (pts) => {
    if (pts.length === 0) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i === 0 ? 0 : i - 1];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  };

  const investedCurve = makeSmoothPath(investedPoints);
  const corpusCurve = makeSmoothPath(corpusPoints);

  const investedArea = `${investedCurve} L ${investedPoints[investedPoints.length - 1].x} ${svgHeight - 25} L ${investedPoints[0].x} ${svgHeight - 25} Z`;
  const corpusArea = `${corpusCurve} L ${corpusPoints[corpusPoints.length - 1].x} ${svgHeight - 25} L ${corpusPoints[0].x} ${svgHeight - 25} Z`;

  // =========================================================================
  // VARIANT: HOME PAGE FEATURE SPOTLIGHT (CLEAN, CONCISE & ENGAGING)
  // =========================================================================
  if (variant === "home") {
    return (
      <section 
        id="mutual-funds" 
        style={{ 
          position: 'relative',
          overflow: 'hidden',
          background: '#FAF9F6',
          padding: 'clamp(4.5rem, 7vw, 6.5rem) 0',
          scrollMarginTop: '95px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Section Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ marginBottom: '0.65rem' }}>
              <span 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  background: 'rgba(5, 150, 105, 0.1)',
                  border: '1px solid rgba(5, 150, 105, 0.25)',
                  color: '#059669',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em'
                }}
              >
                <TrendingUp size={13} color="#059669" />
                06 — MUTUAL FUNDS
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
              <h2 
                style={{ 
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)', 
                  color: '#0f172a', 
                  maxWidth: '680px', 
                  lineHeight: 1.15,
                  fontWeight: 500,
                  margin: 0
                }}
              >
                Invest with <span style={{ color: '#0284c7', fontStyle: 'italic', fontWeight: 600 }}>clarity</span>.
                <br />
                <span style={{ color: '#059669', fontStyle: 'italic', fontWeight: 600 }}>
                  Grow with discipline.
                </span>
              </h2>

              <p style={{ maxWidth: '460px', fontSize: '0.96rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                Mutual funds are the most disciplined vehicle for long-term wealth compounding. 
                We curate high-conviction portfolios managed by seasoned fund managers with proven downside risk containment.
              </p>
            </div>
          </div>

          {/* 5 Core Asset Classes (Horizontal Interactive Tab Selector) */}
          <div 
            style={{ 
              display: 'flex', 
              gap: '0.75rem', 
              overflowX: 'auto', 
              paddingBottom: '0.75rem', 
              marginBottom: '2rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {MF_CATEGORIES.map((cat) => {
              const isSelected = selectedCat === cat.id;
              const TabIcon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '16px',
                    background: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                    border: isSelected ? `2px solid ${cat.accentColor}` : '1px solid rgba(226, 232, 240, 0.9)',
                    boxShadow: isSelected ? '0 10px 25px rgba(15, 23, 42, 0.08)' : '0 2px 6px rgba(15, 23, 42, 0.02)',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isSelected ? 'translateY(-2px)' : 'none'
                  }}
                >
                  <div 
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      background: isSelected ? cat.accentColor : cat.bgTint,
                      color: isSelected ? '#ffffff' : cat.accentColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <TabIcon size={16} />
                  </div>

                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: isSelected ? '#0f172a' : '#475569' }}>
                      {cat.title}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: isSelected ? cat.accentColor : '#64748b', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                      {cat.badge}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Central Spotlight Showcase Card (Clean Light Studio Box) */}
          <div 
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              border: '1px solid rgba(226, 232, 240, 0.95)',
              boxShadow: '0 15px 35px -5px rgba(15, 23, 42, 0.06)',
              padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              marginBottom: '2rem'
            }}
          >
            {/* Top Mandate Info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid #f1f5f9' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div 
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '12px', 
                    background: activeCategory.bgTint, 
                    color: activeCategory.accentColor, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}
                >
                  <ActiveIcon size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {activeCategory.title}
                  </h3>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    MANDATE: {activeCategory.benchmark} • HORIZON: {activeCategory.horizon}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '0.74rem', background: '#f8fafc', border: '1px solid #e2e8f0', color: '#334155', padding: '4px 10px', borderRadius: '8px', fontWeight: 600 }}>
                  Risk: {activeCategory.risk}
                </span>
                <span style={{ fontSize: '0.74rem', background: 'rgba(5, 150, 105, 0.1)', border: '1px solid rgba(5, 150, 105, 0.25)', color: '#059669', padding: '4px 10px', borderRadius: '8px', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                  Avg ~{activeCategory.expectedReturn}% CAGR
                </span>
              </div>
            </div>

            {/* Split Spotlight: Left SIP Simulator Preview + Right 3 Top Funds */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
                gap: '2rem',
                alignItems: 'stretch',
                marginBottom: '1.75rem'
              }}
            >
              {/* Left Column: Quick SIP Compounding Spotlight */}
              <div 
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '18px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <SlidersHorizontal size={14} color="#059669" />
                      SIP Compounding Spotlight
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      @{activeCategory.expectedReturn}% CAGR
                    </span>
                  </div>

                  {/* Preset Buttons */}
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    {[5000, 10000, 25000, 50000].map(amt => (
                      <button
                        key={amt}
                        onClick={() => setSipAmount(amt)}
                        style={{
                          padding: '4px 10px',
                          borderRadius: '8px',
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          border: sipAmount === amt ? '1px solid #059669' : '1px solid #cbd5e1',
                          background: sipAmount === amt ? '#059669' : '#ffffff',
                          color: sipAmount === amt ? '#ffffff' : '#475569',
                          cursor: 'pointer'
                        }}
                      >
                        ₹{amt >= 100000 ? `${amt/100000}L` : `${amt/1000}k`}/mo
                      </button>
                    ))}
                  </div>

                  {/* Figures Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ background: '#ffffff', padding: '0.85rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Total Invested (5Y)</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>
                        {formatINR(sipAmount * 60)}
                      </div>
                    </div>
                    <div style={{ background: 'rgba(5, 150, 105, 0.08)', padding: '0.85rem', borderRadius: '12px', border: '1px solid rgba(5, 150, 105, 0.25)' }}>
                      <div style={{ fontSize: '0.7rem', color: '#059669' }}>Est. Future Corpus</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.15rem', fontWeight: 800, color: '#059669' }}>
                        {formatINR(estimatedWealth)}
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: '0.76rem', color: '#64748b', lineHeight: 1.45 }}>
                  {activeCategory.keyAdvantage || activeCategory.desc}
                </div>
              </div>

              {/* Right Column: Top High-Conviction Schemes List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>High-Conviction Sample Schemes</span>
                  <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>5★ Research Vetted</span>
                </div>

                {activeCategory.curatedFunds.map((fund, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '14px',
                      padding: '0.85rem 1.15rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 800, padding: '1px 6px', borderRadius: '4px', background: activeCategory.bgTint, color: activeCategory.accentColor }}>
                          #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: '#64748b' }}>{fund.category}</span>
                      </div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>
                        {fund.name}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '2px' }}>
                        AUM: {fund.aum}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontSize: '0.64rem', color: '#64748b' }}>3Y CAGR</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: 800, color: '#059669' }}>
                        {fund.return3Y}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions Bar (Direct Page Jump CTA) */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid #f1f5f9'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={20} color="#059669" />
                <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                  <strong style={{ color: '#0f172a' }}>AMFI Reg. ARN-182137</strong> • Direct AMC Settlement • Zero Distributor Custody Risk
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => onNavigate ? onNavigate('/mutual-funds') : (window.location.href = '/mutual-funds')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '12px',
                    background: '#059669',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.86rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 20px rgba(5, 150, 105, 0.3)',
                    transition: 'all 0.2s'
                  }}
                >
                  Explore All Schemes & Live Analytics Dashboard
                  <ArrowRight size={15} />
                </button>

                <button
                  onClick={() => onOpenModal && onOpenModal('consultation')}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '12px',
                    background: '#ffffff',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '0.86rem',
                    border: '1px solid #cbd5e1',
                    cursor: 'pointer'
                  }}
                >
                  Start SIP Consultation
                </button>
              </div>
            </div>
          </div>

          {/* 4 Power Tools Teaser Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '1rem'
            }}
          >
            {POWER_TOOLS.map((tool) => {
              const ToolIcon = tool.icon;
              return (
                <div
                  key={tool.id}
                  onClick={() => onNavigate ? onNavigate('/mutual-funds') : (window.location.href = '/mutual-funds')}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '1.15rem',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.03)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(15, 23, 42, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.03)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div 
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: `${tool.color}15`,
                        color: tool.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <ToolIcon size={18} />
                    </div>

                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: tool.color,
                        background: `${tool.color}12`,
                        padding: '2px 7px',
                        borderRadius: '6px'
                      }}
                    >
                      {tool.tag}
                    </span>
                  </div>

                  <h5 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a', margin: '0 0 0.35rem 0' }}>
                    {tool.title}
                  </h5>

                  <p style={{ fontSize: '0.74rem', color: '#64748b', lineHeight: 1.45, margin: 0 }}>
                    {tool.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    );
  }

  // =========================================================================
  // VARIANT: FULL DEDICATED PAGE COCKPIT (THE COMPLETE PINTEREST DASHBOARD)
  // =========================================================================
  return (
    <section 
      id="mutual-funds" 
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        background: isDark ? '#050811' : '#FAF9F6',
        padding: embedded ? 'clamp(3rem, 5vw, 4.5rem) 0' : 'clamp(4.5rem, 7vw, 6.5rem) 0',
        scrollMarginTop: '95px',
        transition: 'background 0.3s ease'
      }}
    >
      {/* High-Tech Glowing Ambient Glows */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(60px)'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* =========================================================================
            1. SECTION HEADLINE & THEME TOGGLE
            ========================================================================= */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                background: isDark ? 'rgba(16, 185, 129, 0.15)' : 'rgba(5, 150, 105, 0.1)',
                border: isDark ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid rgba(5, 150, 105, 0.25)',
                color: isDark ? '#34d399' : '#059669',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em'
              }}
            >
              <TrendingUp size={13} color={isDark ? '#34d399' : '#059669'} />
              06 — MUTUAL FUNDS INTELLIGENCE HUB
            </span>

            {/* Dark/Light Cockpit Switcher */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: isDark ? 'rgba(15, 23, 42, 0.8)' : '#ffffff',
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0',
                borderRadius: '9999px',
                padding: '3px',
                gap: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
              }}
            >
              <button
                onClick={() => setActiveTheme("dark")}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  background: isDark ? '#10b981' : 'transparent',
                  color: isDark ? '#050811' : '#64748b',
                  transition: 'all 0.2s'
                }}
              >
                <Moon size={12} />
                Cockpit (Dark)
              </button>
              <button
                onClick={() => setActiveTheme("light")}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  background: !isDark ? '#059669' : 'transparent',
                  color: !isDark ? '#ffffff' : '#94a3b8',
                  transition: 'all 0.2s'
                }}
              >
                <Sun size={12} />
                Studio (Light)
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 
              style={{ 
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4.2vw, 3.8rem)', 
                color: isDark ? '#FFFFFF' : '#0F172A', 
                maxWidth: '680px', 
                lineHeight: 1.15,
                fontWeight: 500,
                margin: 0
              }}
            >
              <span style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}>Invest with </span>
              <span style={{ color: '#06b6d4', fontStyle: 'italic', fontWeight: 600 }}>clarity</span>.
              <br />
              <span style={{ color: '#10b981', fontStyle: 'italic', fontWeight: 600 }}>
                Grow with discipline.
              </span>
            </h2>

            <p style={{ maxWidth: '460px', fontSize: '0.96rem', color: isDark ? '#94A3B8' : '#64748B', lineHeight: 1.65, margin: 0 }}>
              Direct SEBI-regulated AMC clearing with zero distributor custody risk. 
              Track real-time alpha, downside capture, and compounding simulations tailored to your wealth mandate.
            </p>
          </div>
        </div>

        {/* =========================================================================
            2. THE PINTEREST FLEET-STYLE ANALYTICS DASHBOARD CONTAINER
            ========================================================================= */}
        <div 
          style={{
            background: bgMain,
            borderRadius: '28px',
            border: cardBorder,
            boxShadow: cardShadow,
            padding: 'clamp(1.25rem, 3vw, 2.25rem)',
            position: 'relative'
          }}
        >
          {/* Top Capsule Status Header (Pinterest Header Bar) */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              padding: '0.85rem 1.25rem',
              borderRadius: '16px',
              background: isDark ? 'rgba(15, 23, 42, 0.7)' : 'rgba(241, 245, 249, 0.9)',
              border: cardBorder,
              marginBottom: '1.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span 
                  style={{ 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%', 
                    background: '#10b981', 
                    boxShadow: '0 0 10px #10b981' 
                  }} 
                />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', fontWeight: 800, color: textPrimary, letterSpacing: '0.04em' }}>
                  WEALTH ANALYTICS DASHBOARD
                </span>
              </div>
              <span style={{ color: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)' }}>|</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: textMuted }}>
                AMFI REG: ARN-182137
              </span>
              <span style={{ color: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)' }}>|</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: '#10b981', fontWeight: 600 }}>
                ● NSE/BSE LIVE MARKET FEED
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Category Search Filter */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: isDark ? 'rgba(2, 6, 23, 0.6)' : '#ffffff',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #cbd5e1',
                  borderRadius: '10px',
                  padding: '4px 10px'
                }}
              >
                <Search size={13} color={textMuted} />
                <input 
                  type="text"
                  placeholder="Filter schemes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontSize: '0.76rem',
                    color: textPrimary,
                    width: '110px'
                  }}
                />
              </div>

              <button
                onClick={() => { setSipAmount(10000); setSipYears(5); setSearchQuery(''); }}
                title="Reset simulation parameters"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 10px',
                  borderRadius: '10px',
                  background: isDark ? 'rgba(255,255,255,0.06)' : '#ffffff',
                  border: cardBorder,
                  color: textMuted,
                  cursor: 'pointer',
                  fontSize: '0.74rem',
                  fontWeight: 600
                }}
              >
                <RefreshCw size={12} />
                Reset
              </button>
            </div>
          </div>

          {/* =========================================================================
              3. CATEGORY SWITCHER PILLS (TOP TABS)
              ========================================================================= */}
          <div 
            style={{ 
              display: 'flex', 
              gap: '0.75rem', 
              overflowX: 'auto', 
              paddingBottom: '0.75rem', 
              marginBottom: '1.75rem',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {MF_CATEGORIES.map((cat) => {
              const isSelected = selectedCat === cat.id;
              const TabIcon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.65rem 1.15rem',
                    borderRadius: '14px',
                    background: isSelected 
                      ? (isDark ? 'rgba(16, 185, 129, 0.15)' : '#ffffff') 
                      : (isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.7)'),
                    border: isSelected 
                      ? `2px solid ${cat.accentColor}` 
                      : (isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(226, 232, 240, 0.9)'),
                    boxShadow: isSelected 
                      ? `0 6px 20px ${cat.accentGlow}` 
                      : 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isSelected ? 'translateY(-2px)' : 'none'
                  }}
                >
                  <div 
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '8px',
                      background: isSelected ? cat.accentColor : (isDark ? 'rgba(255,255,255,0.08)' : cat.bgTint),
                      color: isSelected ? '#050811' : cat.accentColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <TabIcon size={16} />
                  </div>

                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.86rem', fontWeight: 700, color: isSelected ? textPrimary : textMuted }}>
                      {cat.title}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: isSelected ? cat.accentColor : (isDark ? '#64748b' : '#94a3b8'), fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      {cat.badge}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* =========================================================================
              4. TOP 6 METRIC CARDS (2x3 or 3x2 Grid - Pinterest Pixel Match)
              ========================================================================= */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
              gap: '1rem',
              marginBottom: '1.75rem'
            }}
          >
            {activeCategory.metrics.map((m, idx) => {
              const MetricIcon = m.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: cardBg,
                    border: cardBorder,
                    borderRadius: '16px',
                    padding: '1.1rem 1.2rem',
                    position: 'relative',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: isDark ? '0 4px 15px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.03)'
                  }}
                >
                  {/* Top line: Label + Squircle Glowing Icon */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.55rem' }}>
                    <span style={{ fontSize: '0.78rem', color: textMuted, fontWeight: 600, maxWidth: '130px', lineHeight: 1.3 }}>
                      {m.label}
                    </span>
                    <div 
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '10px',
                        background: `${m.color}18`,
                        border: `1px solid ${m.color}35`,
                        color: m.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <MetricIcon size={16} />
                    </div>
                  </div>

                  {/* Big Bold Stat Value */}
                  <div 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.65rem',
                      fontWeight: 800,
                      color: m.color,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      marginBottom: '0.35rem'
                    }}
                  >
                    {m.value}
                  </div>

                  {/* Subtitle / Comparative Change Indicator */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: textMuted, fontWeight: 500 }}>
                    {m.rating ? (
                      <div style={{ display: 'flex', gap: '2px', color: '#f59e0b' }}>
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} fill="#f59e0b" color="#f59e0b" />
                        ))}
                      </div>
                    ) : (
                      <span style={{ color: m.color, fontWeight: 700 }}>
                        {m.change.includes('+') ? '↑' : m.change.includes('-') ? '↓' : '•'}
                      </span>
                    )}
                    <span>{m.change}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================================================================
              5. CENTER FEATURE: BIG DUAL-CURVE COMPOUNDING TREND CHART
              ========================================================================= */}
          <div 
            style={{
              background: cardBg,
              border: cardBorder,
              borderRadius: '20px',
              padding: 'clamp(1.25rem, 2.5vw, 1.85rem)',
              marginBottom: '1.75rem',
              boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.4)' : '0 4px 18px rgba(0,0,0,0.04)'
            }}
          >
            {/* Chart Title and Controls Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: textPrimary, margin: 0 }}>
                    SIP Compounding & Wealth Growth Curve
                  </h3>
                  <span 
                    style={{ 
                      fontSize: '0.7rem', 
                      background: 'rgba(16, 185, 129, 0.15)', 
                      color: '#10b981', 
                      padding: '2px 8px', 
                      borderRadius: '6px', 
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)' 
                    }}
                  >
                    @{activeCategory.expectedReturn}% CAGR
                  </span>
                </div>
                <p style={{ fontSize: '0.8rem', color: textMuted, margin: '3px 0 0 0' }}>
                  Simulate monthly rupee-cost averaging: Total Invested vs Compounded Future Corpus
                </p>
              </div>

              {/* Investment Horizon Pills (3Y, 5Y, 10Y, 15Y) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '0.72rem', color: textMuted, fontWeight: 600, marginRight: '4px' }}>Horizon:</span>
                {[3, 5, 10, 15].map((yrs) => (
                  <button
                    key={yrs}
                    onClick={() => setSipYears(yrs)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      border: sipYears === yrs ? '1px solid #10b981' : cardBorder,
                      background: sipYears === yrs ? '#10b981' : (isDark ? 'rgba(255,255,255,0.05)' : '#ffffff'),
                      color: sipYears === yrs ? '#050811' : textMuted,
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                  >
                    {yrs}Y
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly SIP Amount Preset Buttons */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                background: isDark ? 'rgba(2, 6, 23, 0.5)' : '#f1f5f9',
                border: cardBorder,
                marginBottom: '1.25rem'
              }}
            >
              <span style={{ fontSize: '0.76rem', fontWeight: 700, color: textPrimary, display: 'flex', alignItems: 'center', gap: '5px' }}>
                <SlidersHorizontal size={13} color="#10b981" />
                Monthly SIP:
              </span>
              {[5000, 10000, 25000, 50000, 100000].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setSipAmount(amt)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    border: sipAmount === amt ? '1px solid #06b6d4' : '1px solid transparent',
                    background: sipAmount === amt ? 'rgba(6, 182, 212, 0.2)' : (isDark ? 'rgba(255,255,255,0.04)' : '#ffffff'),
                    color: sipAmount === amt ? '#06b6d4' : textMuted,
                    cursor: 'pointer'
                  }}
                >
                  ₹{amt >= 100000 ? `${amt / 100000}L` : `${amt / 1000}k`}/mo
                </button>
              ))}

              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.74rem', color: textMuted }}>Selected:</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.86rem', fontWeight: 800, color: '#10b981' }}>
                  {formatINR(sipAmount)} / month
                </span>
              </div>
            </div>

            {/* The SVG Glowing Dual-Curve Compounding Area Chart */}
            <div style={{ position: 'relative', width: '100%', height: '230px', overflow: 'hidden' }}>
              <svg 
                viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
                preserveAspectRatio="none"
                style={{ width: '100%', height: '100%', display: 'block' }}
              >
                <defs>
                  <linearGradient id="corpusGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={isDark ? "0.45" : "0.25"} />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="investedGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity={isDark ? "0.35" : "0.18"} />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>

                  <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#10b981" floodOpacity="0.6" />
                  </filter>
                </defs>

                {/* Horizontal Grid lines */}
                {[0.2, 0.4, 0.6, 0.8].map((ratio, idx) => {
                  const y = svgHeight - 25 - ratio * (svgHeight - 55);
                  return (
                    <line 
                      key={idx}
                      x1="30" 
                      y1={y} 
                      x2={svgWidth - 30} 
                      y2={y} 
                      stroke={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"} 
                      strokeDasharray="4 4" 
                    />
                  );
                })}

                {/* Shaded Areas */}
                <path d={corpusArea} fill="url(#corpusGrad)" />
                <path d={investedArea} fill="url(#investedGrad)" />

                {/* Compounding Curves */}
                <path 
                  d={investedCurve} 
                  fill="none" 
                  stroke="#06b6d4" 
                  strokeWidth="2.5" 
                  strokeDasharray="5 3"
                />
                <path 
                  d={corpusCurve} 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="3.5" 
                  filter={isDark ? "url(#neonGlow)" : "none"}
                />

                {/* Final Glowing Endpoint Marker */}
                {corpusPoints.length > 0 && (
                  <g>
                    <circle 
                      cx={corpusPoints[corpusPoints.length - 1].x} 
                      cy={corpusPoints[corpusPoints.length - 1].y} 
                      r="6" 
                      fill="#10b981" 
                      stroke={isDark ? "#050811" : "#ffffff"} 
                      strokeWidth="2.5" 
                    />
                    <circle 
                      cx={corpusPoints[corpusPoints.length - 1].x} 
                      cy={corpusPoints[corpusPoints.length - 1].y} 
                      r="12" 
                      fill="none" 
                      stroke="#10b981" 
                      strokeWidth="1.5" 
                      opacity="0.5" 
                    />
                  </g>
                )}

                {/* Invested Endpoint Marker */}
                {investedPoints.length > 0 && (
                  <circle 
                    cx={investedPoints[investedPoints.length - 1].x} 
                    cy={investedPoints[investedPoints.length - 1].y} 
                    r="5" 
                    fill="#06b6d4" 
                    stroke={isDark ? "#050811" : "#ffffff"} 
                    strokeWidth="2" 
                  />
                )}

                {/* X-Axis Milestone Labels */}
                {trendPoints.map((p, idx) => {
                  const pt = getCoordinates(0, p.frac);
                  if (idx % 2 !== 0 && idx !== trendPoints.length - 1) return null;
                  const labelYear = (p.month / 12).toFixed(1).replace('.0', '') + 'Y';
                  return (
                    <text 
                      key={idx}
                      x={pt.x} 
                      y={svgHeight - 6} 
                      fill={textMuted} 
                      fontSize="10" 
                      fontFamily="var(--font-mono)"
                      textAnchor="middle"
                    >
                      {labelYear === '0Y' ? 'Start' : labelYear}
                    </text>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Chart Legends and Net Compounding Wealth Summary */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginTop: '1rem',
                paddingTop: '0.85rem',
                borderTop: cardBorder
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '12px', height: '4px', background: '#06b6d4', borderRadius: '2px' }} />
                  <span style={{ fontSize: '0.78rem', color: textMuted }}>Total Invested:</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: textPrimary }}>
                    {formatINR(totalInvested)}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '12px', height: '4px', background: '#10b981', borderRadius: '2px' }} />
                  <span style={{ fontSize: '0.78rem', color: textMuted }}>Estimated Wealth:</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 800, color: '#10b981' }}>
                    {formatINR(estimatedWealth)}
                  </span>
                </div>
              </div>

              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  color: '#10b981'
                }}
              >
                <span>Wealth Gain: +{formatINR(estimatedGains)}</span>
                <span>({wealthMultiplier}x Multiplier)</span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              6. BOTTOM SPLIT ROW: DONUT RING CHART + VERTICAL BAR CHART
              ========================================================================= */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: '1.5rem',
              marginBottom: '1.75rem'
            }}
          >
            {/* Left Card: Circular Segmented Donut Ring Chart */}
            <div 
              style={{
                background: cardBg,
                border: cardBorder,
                borderRadius: '20px',
                padding: '1.35rem',
                boxShadow: isDark ? '0 6px 20px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: textPrimary, margin: 0 }}>
                  Asset Allocation Blueprint
                </h4>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: activeCategory.accentColor, fontWeight: 700 }}>
                  {activeCategory.title}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', width: '130px', height: '130px', flexShrink: 0 }}>
                  <svg width="130" height="130" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="38" fill="none" stroke={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"} strokeWidth="12" />
                    {(() => {
                      const circumference = 2 * Math.PI * 38;
                      return activeCategory.allocation.map((item, i) => {
                        const prevPct = activeCategory.allocation.slice(0, i).reduce((sum, el) => sum + el.pct, 0);
                        const strokeDasharray = `${(item.pct / 100) * circumference} ${circumference}`;
                        const strokeDashoffset = -((prevPct / 100) * circumference);
                        return (
                          <circle
                            key={i}
                            cx="50"
                            cy="50"
                            r="38"
                            fill="none"
                            stroke={item.color}
                            strokeWidth="12"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            transform="rotate(-90 50 50)"
                            style={{ transition: 'all 0.5s ease' }}
                          />
                        );
                      });
                    })()}
                  </svg>
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.94rem', fontWeight: 800, color: textPrimary }}>
                      100%
                    </div>
                    <div style={{ fontSize: '0.62rem', color: textMuted, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Diversified
                    </div>
                  </div>
                </div>

                <div style={{ flex: 1, minWidth: '150px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {activeCategory.allocation.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.76rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }} />
                        <span style={{ color: textMuted }}>{item.name}</span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: textPrimary }}>
                        {item.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Sleek Vertical Glowing Bar Chart */}
            <div 
              style={{
                background: cardBg,
                border: cardBorder,
                borderRadius: '20px',
                padding: '1.35rem',
                boxShadow: isDark ? '0 6px 20px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: textPrimary, margin: 0 }}>
                  Annualized Returns by Sub-Category (3Y CAGR)
                </h4>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#10b981', fontWeight: 700 }}>
                  Trailing Compounding
                </span>
              </div>

              <div 
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: '8px',
                  height: '140px',
                  paddingTop: '20px',
                  borderBottom: cardBorder
                }}
              >
                {activeCategory.barReturns.map((bar, idx) => {
                  const maxBarRate = 42;
                  const heightPct = Math.min(100, Math.max(15, (bar.returnRate / maxBarRate) * 100));
                  return (
                    <div 
                      key={idx}
                      style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <span 
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: bar.color,
                          marginBottom: '4px'
                        }}
                      >
                        +{bar.returnRate}%
                      </span>

                      <div 
                        style={{
                          width: '100%',
                          maxWidth: '38px',
                          height: `${heightPct}%`,
                          borderRadius: '6px 6px 0 0',
                          background: `linear-gradient(to top, ${bar.color}35, ${bar.color})`,
                          boxShadow: isDark ? `0 0 12px ${bar.color}40` : 'none',
                          transition: 'height 0.4s ease'
                        }}
                      />
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', marginTop: '6px' }}>
                {activeCategory.barReturns.map((bar, idx) => (
                  <div 
                    key={idx}
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      fontSize: '0.62rem',
                      color: textMuted,
                      fontWeight: 600,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                    title={bar.category}
                  >
                    {bar.category.split(' ')[0]}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================================================
              7. CURATED HIGH-CONVICTION SAMPLE SCHEMES (APP-STYLE TRACK CARDS)
              ========================================================================= */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: textPrimary, margin: 0 }}>
                  High-Conviction Sample Schemes ({activeCategory.title})
                </h4>
                <p style={{ fontSize: '0.78rem', color: textMuted, margin: '2px 0 0 0' }}>
                  Hand-picked based on rolling alpha, downside capture ratio, and investment mandate adherence.
                </p>
              </div>

              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '3px 9px',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  color: '#10b981',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700
                }}
              >
                <CheckCircle2 size={12} />
                Vetted by Advisory Desk
              </div>
            </div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '1rem'
              }}
            >
              {activeCategory.curatedFunds
                .filter(f => !searchQuery || f.name.toLowerCase().includes(searchQuery.toLowerCase()) || f.category.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((fund, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: cardBg,
                      border: cardBorder,
                      borderRadius: '16px',
                      padding: '1.15rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: isDark ? '0 4px 15px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.03)'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                        <span 
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            fontWeight: 800,
                            padding: '2px 7px',
                            borderRadius: '6px',
                            background: activeCategory.bgTint,
                            color: activeCategory.accentColor
                          }}
                        >
                          #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: textMuted, fontWeight: 600 }}>
                          {fund.category}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.94rem', fontWeight: 800, color: textPrimary, lineHeight: 1.35, marginBottom: '0.65rem' }}>
                        {fund.name}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.74rem', color: textMuted, marginBottom: '1rem' }}>
                        <span>AUM: <strong style={{ color: textPrimary }}>{fund.aum}</strong></span>
                        <span>•</span>
                        <div style={{ display: 'flex', gap: '2px', color: '#f59e0b' }}>
                          {[...Array(fund.rating)].map((_, i) => (
                            <Star key={i} size={11} fill="#f59e0b" color="#f59e0b" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.75rem', borderTop: cardBorder }}>
                      <div>
                        <div style={{ fontSize: '0.64rem', color: textMuted, textTransform: 'uppercase' }}>3Y Trailing Return</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: 800, color: '#10b981' }}>
                          {fund.return3Y}
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenModal && onOpenModal('consultation')}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '7px 14px',
                          borderRadius: '10px',
                          background: '#10b981',
                          color: '#050811',
                          border: 'none',
                          fontWeight: 700,
                          fontSize: '0.76rem',
                          cursor: 'pointer',
                          transition: 'opacity 0.2s'
                        }}
                      >
                        Start SIP
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* =========================================================================
              8. INVESTOR UTILITIES & POWER TOOLS (4 Bottom Cards)
              ========================================================================= */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
              gap: '1rem',
              marginBottom: '1.75rem'
            }}
          >
            {POWER_TOOLS.map((tool) => {
              const ToolIcon = tool.icon;
              return (
                <div
                  key={tool.id}
                  onClick={() => {
                    if (tool.id === 'compare' && onNavigate) {
                      onNavigate('#calculators');
                    } else if (onOpenModal) {
                      onOpenModal('consultation');
                    }
                  }}
                  style={{
                    background: cardBg,
                    border: cardBorder,
                    borderRadius: '16px',
                    padding: '1.15rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isDark ? '0 4px 15px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div 
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: `${tool.color}15`,
                        color: tool.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <ToolIcon size={18} />
                    </div>

                    <span 
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: tool.color,
                        background: `${tool.color}12`,
                        padding: '2px 7px',
                        borderRadius: '6px'
                      }}
                    >
                      {tool.tag}
                    </span>
                  </div>

                  <h5 style={{ fontSize: '0.88rem', fontWeight: 800, color: textPrimary, margin: '0 0 0.35rem 0' }}>
                    {tool.title}
                  </h5>

                  <p style={{ fontSize: '0.74rem', color: textMuted, lineHeight: 1.45, margin: 0 }}>
                    {tool.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =========================================================================
              9. AMFI FIDUCIARY REGULATORY TRUST BANNER
              ========================================================================= */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              padding: '0.9rem 1.25rem',
              borderRadius: '14px',
              background: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(241, 245, 249, 0.8)',
              border: cardBorder
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={18} color="#10b981" />
              <span style={{ fontSize: '0.78rem', color: textMuted }}>
                <strong style={{ color: textPrimary }}>Assure Securities</strong> • AMFI Reg. Mutual Fund Distributor ARN-182137 • Direct AMC Custody & Settlement.
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.72rem', color: textMuted, fontFamily: 'var(--font-mono)' }}>
                Validity: 19 July 2027
              </span>
              <button
                onClick={() => onOpenModal && onOpenModal('consultation')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'transparent',
                  border: 'none',
                  color: '#10b981',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                Schedule Portfolio Review
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default MutualFundsSection;
