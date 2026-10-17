import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, 
  Sparkles, Phone, Mail, Building2, ChevronRight,
  TrendingUp, Landmark, HeartPulse, ShieldAlert, Receipt, 
  Briefcase, Percent, Award, FileText, HelpCircle, 
  ChevronDown, ChevronUp, Lock, Clock, DollarSign
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

// 6 Comprehensive High-Conviction Wealth Solutions (Complimenting Mutual Funds)
const SOLUTIONS_SPECS = {
  'fixed-deposits': {
    id: 'fixed-deposits',
    title: 'Corporate Fixed Deposits',
    category: 'GUARANTEED CAPITAL PRESERVATION',
    regulatorBadge: 'CRISIL / ICRA AAA & AA+ RATED • ZERO CAPITAL VOLATILITY',
    heroImage: '/assets/corp-fd-vault.jpg',
    imageTag: 'CAPITAL PRESERVATION VAULT',
    imageCaption: 'CRISIL & ICRA AAA Vetted Balance Sheets • Zero Volatility',
    accentColor: '#38bdf8',
    gradientBg: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(15, 23, 42, 0.6) 100%)',
    tagline: 'Assured safety with up to 1.5% - 2.5% higher returns than conventional bank FDs',
    summary: 'Pre-determined guaranteed fixed returns with India’s highest-rated corporate balance sheets and NBFCs. Benefit from monthly, quarterly, or cumulative compounding with zero market volatility.',
    trustBadges: [
      { label: 'Up to 8.60% p.a. Returns', icon: Percent, color: '#38bdf8' },
      { label: 'CRISIL / ICRA AAA Empaneled', icon: Award, color: '#10b981' },
      { label: 'Senior Citizens +0.25% - 0.50%', icon: ShieldCheck, color: '#fbbf24' },
      { label: 'Flexible Monthly Cash Flows', icon: Clock, color: '#a855f7' }
    ],
    issuers: [
      {
        name: 'Bajaj Finance Ltd',
        rating: 'CRISIL AAA / ICRA AAA',
        rate: 'Up to 8.60% p.a.',
        seniorRate: '8.85% p.a.',
        tenure: '12 to 60 Months',
        payouts: 'Monthly, Quarterly, Cumulative',
        highlight: 'Highest corporate liquidity with over ₹50,000 Cr deposit base.'
      },
      {
        name: 'Shriram Finance Ltd',
        rating: 'CRISIL AA+ / India Ratings AA+',
        rate: 'Up to 8.80% p.a.',
        seniorRate: '9.30% p.a.',
        tenure: '12 to 60 Months',
        payouts: 'Monthly, Quarterly, Cumulative',
        highlight: 'Market-leading interest yields with 45+ years established track record.'
      },
      {
        name: 'Mahindra & Mahindra Finance',
        rating: 'CRISIL AAA / India Ratings AAA',
        rate: 'Up to 8.10% p.a.',
        seniorRate: '8.35% p.a.',
        tenure: '12 to 60 Months',
        payouts: 'Quarterly, Half-Yearly, Cumulative',
        highlight: 'Mahindra Group conglomerate stability and pristine corporate governance.'
      },
      {
        name: 'HDFC Ltd (HDFC Bank)',
        rating: 'CRISIL AAA / CARE AAA',
        rate: 'Up to 7.90% p.a.',
        seniorRate: '8.15% p.a.',
        tenure: '12 to 120 Months',
        payouts: 'Monthly, Quarterly, Annual, Cumulative',
        highlight: 'Sovereign-grade private banking trust and seamless digital renewals.'
      },
      {
        name: 'LIC Housing Finance Ltd',
        rating: 'CRISIL AAA / CARE AAA',
        rate: 'Up to 7.75% p.a.',
        seniorRate: '8.00% p.a.',
        tenure: '12 to 60 Months',
        payouts: 'Monthly, Annual, Cumulative',
        highlight: 'Promoted by Life Insurance Corporation of India with institutional backing.'
      },
      {
        name: 'Sundaram Finance Ltd',
        rating: 'CRISIL AAA / ICRA AAA',
        rate: 'Up to 8.00% p.a.',
        seniorRate: '8.50% p.a.',
        tenure: '12 to 36 Months',
        payouts: 'Monthly, Quarterly, Cumulative',
        highlight: 'Seven decades of continuous unbroken trust in non-banking financial services.'
      }
    ],
    comparison: {
      title: 'Traditional Bank FD vs Assure Empaneled Corporate FD',
      points: [
        { metric: 'Annual Yield (Regular)', traditional: '6.50% - 7.10% p.a.', assure: 'Up to 8.60% p.a. (+1.5% Higher)', winner: 'assure' },
        { metric: 'Senior Citizen Yield', traditional: '7.00% - 7.60% p.a.', assure: 'Up to 9.30% p.a. (+1.7% Higher)', winner: 'assure' },
        { metric: 'Credit Safety Rating', traditional: 'RBI DICGC Cover up to ₹5 Lakh', assure: 'Highest CRISIL/ICRA AAA Credit Rating', winner: 'tie' },
        { metric: 'Interest Payout Frequency', traditional: 'Quarterly or Maturity only', assure: 'Monthly, Quarterly, Half-Yearly or Cumulative', winner: 'assure' },
        { metric: 'Premature Liquidity', traditional: '1% penalty deduction', assure: 'Withdrawal allowed after statutory 3-month lock-in', winner: 'tie' }
      ]
    },
    pillars: [
      {
        title: 'Zero Market Volatility',
        desc: 'Returns are pre-locked contractually upon deposit booking and remain completely insulated from equity market fluctuations or interest rate cuts.',
        icon: ShieldCheck
      },
      {
        title: 'Credit-Vetted Balance Sheets',
        desc: 'Assure Securities conducts strict proprietary quantitative financial audits, strictly empaneling balance sheets with lowest NPA ratios and top AAA ratings.',
        icon: Award
      },
      {
        title: 'Bespoke Cash Flow Engineering',
        desc: 'Design monthly income streams for retired family members or opt for cumulative compounding to grow your emergency and short-term capital.',
        icon: Clock
      },
      {
        title: 'Senior Citizen Bonus Advantage',
        desc: 'Special privilege rates giving 25 to 50 basis points extra interest across all tenures, maximizing passive cash returns for elder family members.',
        icon: Percent
      }
    ],
    faqs: [
      {
        q: 'Are Corporate Fixed Deposits safe compared to Bank FDs?',
        a: 'Corporate FDs distributed by Assure Securities are strictly limited to CRISIL and ICRA AAA and AA+ rated corporate balance sheets (such as Bajaj Finance, HDFC, and Mahindra Finance). AAA ratings indicate the highest degree of safety regarding timely servicing of financial obligations and negligible credit risk.'
      },
      {
        q: 'How does TDS (Tax Deducted at Source) apply to Corporate FDs?',
        a: 'TDS at 10% is deducted if total interest income from a single company exceeds ₹5,000 in a financial year (unlike ₹40,000 for banks). However, if your total taxable income is below the taxable threshold, you can submit Form 15G (for general citizens) or Form 15H (for senior citizens) to receive interest with zero tax deduction.'
      },
      {
        q: 'Can I receive monthly interest to fund living expenses?',
        a: 'Yes! All our corporate FD issuers offer Non-Cumulative options where interest is credited directly via NEFT/RTGS into your registered bank account on a fixed date every month or quarter.'
      },
      {
        q: 'What is the minimum investment required to open a Corporate FD?',
        a: 'Most corporate FDs have an accessible minimum investment ticket of ₹15,000 to ₹25,000, allowing investors to diversify across 3 to 4 distinct AAA issuers for optimal portfolio balance.'
      }
    ]
  },

  'bonds': {
    id: 'bonds',
    title: 'Bonds & Government Securities',
    category: 'SOVEREIGN SAFETY & TAX EXEMPTION',
    regulatorBadge: 'RBI REGULATED • 100% SOVEREIGN & CAPITAL PRESERVATION',
    heroImage: '/assets/bonds-gold-reserve.jpg',
    imageTag: 'SOVEREIGN GOLD & PSU BONDS',
    imageCaption: '100% Sovereign Safety & Section 54EC Real Estate Tax Exemption',
    accentColor: '#f59e0b',
    gradientBg: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(15, 23, 42, 0.6) 100%)',
    tagline: 'Capital preservation with predictable sovereign yields and Section 54EC capital gains tax exemptions',
    summary: 'Institutional-grade fixed income instruments including Sovereign Gold Bonds (SGB), 54EC Capital Gain Tax exemption bonds, RBI floating rate savings bonds, and listed high-yield debentures.',
    trustBadges: [
      { label: '100% Sovereign Safety (RBI/Govt)', icon: ShieldCheck, color: '#f59e0b' },
      { label: 'Section 54EC Real Estate Exemption', icon: Receipt, color: '#10b981' },
      { label: 'SGB 2.50% Interest + Gold Upside', icon: TrendingUp, color: '#38bdf8' },
      { label: 'Direct NSDL/CDSL Demat Holding', icon: Landmark, color: '#a855f7' }
    ],
    issuers: [
      {
        name: 'Section 54EC Capital Gain Bonds',
        rating: 'Govt of India Sovereign Backed',
        rate: '5.25% p.a. Guaranteed',
        seniorRate: 'Exempts 20% or 12.5% LTCG Tax',
        tenure: '5 Years Mandatory Lock-in',
        payouts: 'Annual Sovereign Coupon',
        highlight: 'Save up to ₹50 Lakhs in capital gains tax from real estate/property sales under Section 54EC (REC, PFC, IRFC, NHAI).'
      },
      {
        name: 'Sovereign Gold Bonds (SGB)',
        rating: 'Reserve Bank of India (RBI)',
        rate: '2.50% p.a. Cash Coupon + Gold Price',
        seniorRate: '100% Tax-Free Capital Gains',
        tenure: '8 Years (Exit option from 5th Year)',
        payouts: 'Semi-Annual Interest',
        highlight: 'Zero storage cost, zero making charges, guaranteed purity, and complete exemption from capital gains tax upon maturity.'
      },
      {
        name: 'RBI Floating Rate Savings Bonds (FRSB)',
        rating: '100% Sovereign Govt of India',
        rate: 'NSC Rate + 0.35% (Currently ~8.05%)',
        seniorRate: 'Sovereign Guarantee',
        tenure: '7 Years Fixed Tenure',
        payouts: 'Semi-Annual Coupon (Jan 1 & July 1)',
        highlight: 'Zero credit risk bond with interest rate reset semi-annually to stay ahead of inflation plateaus.'
      },
      {
        name: 'Primary & Secondary Corporate Bonds',
        rating: 'CRISIL / ICRA AAA to AA',
        rate: '8.25% to 10.50% p.a.',
        seniorRate: 'Senior Secured Priority',
        tenure: '2 to 10 Years',
        payouts: 'Monthly, Quarterly, Annual',
        highlight: 'Senior secured exchange-traded debentures providing predictable cash yields for accredited HNI portfolios.'
      }
    ],
    comparison: {
      title: 'Real Estate LTCG Tax Payment vs Section 54EC Bond Exemption',
      points: [
        { metric: 'Tax Payment on ₹50L Gain', traditional: 'Pay ₹6.25L - ₹10L in Tax to Govt', assure: 'Zero Tax Paid (100% Exempted)', winner: 'assure' },
        { metric: 'Capital Preservation', traditional: 'Depreciated by initial tax deduction', assure: 'Full ₹50 Lakhs principal intact', winner: 'assure' },
        { metric: 'Interest Earnings', traditional: 'Zero interest on paid taxes', assure: 'Earn ₹2,62,500/year guaranteed interest', winner: 'assure' },
        { metric: 'Sovereign Security', traditional: 'Not Applicable', assure: 'Backed by REC / PFC / IRFC balance sheets', winner: 'assure' },
        { metric: 'Holding Period', traditional: 'Immediate capital loss', assure: '5 years lock-in with full principal returned', winner: 'assure' }
      ]
    },
    pillars: [
      {
        title: 'Statutory 54EC Tax Elimination',
        desc: 'Legally eliminate long-term capital gains tax arising from the transfer of land, building, or residential property by investing within 6 months of sale.',
        icon: Receipt
      },
      {
        title: 'Sovereign Gold Exposure with Bonus Yield',
        desc: 'Earn 2.50% per annum cash interest directly in your bank account while capturing 100% of gold price appreciation with zero capital gains tax.',
        icon: TrendingUp
      },
      {
        title: 'Zero Default Risk',
        desc: 'Government of India and statutory public sector undertakings (PSUs) carry sovereign guarantees, rendering default probability mathematically negligible.',
        icon: ShieldCheck
      },
      {
        title: 'Inflation-Linked Floating Buffers',
        desc: 'RBI floating rate savings bonds dynamically adjust coupon yields as interest rates move, protecting your purchasing power.',
        icon: Percent
      }
    ],
    faqs: [
      {
        q: 'What is the maximum limit for Section 54EC Capital Gain Bonds?',
        a: 'Under Section 54EC of the Income Tax Act, an individual or HUF can invest up to a maximum of ₹50 Lakhs in eligible bonds (issued by REC, PFC, IRFC, or NHAI) in a single financial year within 6 months of the date of property transfer.'
      },
      {
        q: 'Are Sovereign Gold Bonds completely tax-free on maturity?',
        a: 'Yes! Under Section 47 of the Income Tax Act, capital gains tax arising on redemption of SGB to an individual upon maturity (after 8 years) is 100% exempt from tax. Only the 2.50% semi-annual interest coupon is taxable at your income slab.'
      },
      {
        q: 'Can bonds be held in electronic Demat form?',
        a: 'Yes, almost all modern bonds including SGB, listed corporate bonds, and 54EC bonds can be held seamlessly in your NSDL or CDSL Demat account, ensuring centralized portfolio visibility.'
      },
      {
        q: 'How soon should I buy 54EC bonds after selling my property?',
        a: 'To claim complete tax exemption, you must invest within exactly 6 months from the date of the property sale agreement/deed, prior to filing your annual income tax return.'
      }
    ]
  },

  'life-insurance': {
    id: 'life-insurance',
    title: 'Life Insurance & Term Advisory',
    category: 'FAMILY DIGNITY & RISK INSULATION',
    regulatorBadge: 'IRDAI LICENSED ADVISORY • PURE FAMILY DIGNITY & RISK INSULATION',
    heroImage: '/assets/life-family-shield.jpg',
    imageTag: 'FAMILY WEALTH SHIELD',
    imageCaption: 'Multi-Generational Financial Dignity & Pure Term Insulation',
    accentColor: '#ec4899',
    gradientBg: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(15, 23, 42, 0.6) 100%)',
    tagline: 'Comprehensive financial protection ensuring your family’s standard of living and dignity remain uncompromised',
    summary: 'High-cover pure term insurance structures, critical illness accelerators, and guaranteed wealth plans. Insulate your loved ones, liabilities, and children’s education milestones against life’s unpredictable events.',
    trustBadges: [
      { label: '₹1 Cr - ₹5 Cr Pure Term Cover', icon: ShieldCheck, color: '#ec4899' },
      { label: 'Coverage up to Age 85', icon: Clock, color: '#38bdf8' },
      { label: '99%+ Claim Settlement Partners', icon: Award, color: '#10b981' },
      { label: 'Section 80C & 10(10D) Tax-Free', icon: Receipt, color: '#fbbf24' }
    ],
    issuers: [
      {
        name: 'HDFC Life Insurance',
        rating: '99.50% Claim Settlement Ratio',
        rate: 'Pure Term ₹1 Cr from ₹650/mo',
        seniorRate: 'Cover up to Age 85',
        tenure: 'Flexible 10 to 45 Years',
        payouts: 'Lump Sum or Monthly Income Option',
        highlight: 'Leader in digital underwriting with zero medical deductible options and comprehensive 36-disease critical illness rider.'
      },
      {
        name: 'ICICI Prudential Life',
        rating: '99.35% Claim Settlement Ratio',
        rate: 'Pure Term ₹1 Cr from ₹620/mo',
        seniorRate: 'Cover up to Age 85',
        tenure: 'Flexible 10 to 40 Years',
        payouts: 'Lump Sum + Increasing Monthly Income',
        highlight: 'Instant claim settlement promise with dedicated claim care concierge for nominee families.'
      },
      {
        name: 'Tata AIA Life Insurance',
        rating: '99.01% Claim Settlement Ratio',
        rate: 'Pure Term ₹1 Cr from ₹640/mo',
        seniorRate: 'Cover up to Age 85',
        tenure: 'Flexible 10 to 40 Years',
        payouts: 'Lump Sum with Terminal Illness Waiver',
        highlight: 'Inbuilt vital wellness discount and accelerated payout on diagnosis of terminal conditions.'
      },
      {
        name: 'Max Life Insurance',
        rating: '99.51% Claim Settlement Ratio',
        rate: 'Pure Term ₹1 Cr from ₹660/mo',
        seniorRate: 'Cover up to Age 85',
        tenure: 'Flexible 10 to 45 Years',
        payouts: 'Lump Sum + Accidental Disability Waiver',
        highlight: 'Consistently ranked top tier in claim settlement transparency and grievance resolution speed.'
      }
    ],
    comparison: {
      title: 'Traditional Endowment / Money-Back vs Pure Term + Mutual Fund SIP',
      points: [
        { metric: 'Annual Premium for ₹1 Cr Cover', traditional: '₹3,50,000 - ₹5,00,000/yr (Too costly!)', assure: '₹10,000 - ₹15,000/yr (Affordable!)', winner: 'assure' },
        { metric: 'Life Insurance Protection Cover', traditional: 'Usually only ₹5-15 Lakhs for same spend', assure: 'Full ₹1 Crore to ₹5 Crore Cover', winner: 'assure' },
        { metric: 'Maturity Wealth Creation', traditional: 'Sub-inflation ~5% - 6% IRR', assure: '12% - 15% CAGR via Equity SIP with difference', winner: 'assure' },
        { metric: 'Nominee Financial Cushion', traditional: 'Nominee receives small maturity value', assure: 'Nominee receives full ₹1 Cr tax-free claim', winner: 'assure' },
        { metric: 'Flexibility & Transparency', traditional: 'Opaque bonus calculations & heavy surrender penalties', assure: '100% transparent term contract + liquid MF SIP', winner: 'assure' }
      ]
    },
    pillars: [
      {
        title: 'Human Life Value (HLV) Precision',
        desc: 'Calculate exact 15x to 25x annual income coverage to ensure all home loans, business liabilities, and future educational milestones are permanently ring-fenced.',
        icon: ShieldCheck
      },
      {
        title: 'Accelerated Critical Illness Protection',
        desc: 'Receive an immediate lump-sum cash payout upon diagnosis of 36+ major medical illnesses (cancer, stroke, bypass), funding global healthcare without dipping into investments.',
        icon: HeartPulse
      },
      {
        title: 'Accidental Disability Waiver of Premium',
        desc: 'If permanent accidental disability occurs, all future premiums are waived off permanently while the full life cover continues uninterrupted.',
        icon: Award
      },
      {
        title: '100% Tax-Free Claim Proceeds (Sec 10(10D))',
        desc: 'The entire death benefit claim amount paid to your family nominees is legally exempt from income tax under Section 10(10D) of the Income Tax Act.',
        icon: Receipt
      }
    ],
    faqs: [
      {
        q: 'Why does Assure Securities strongly recommend Pure Term over ULIP or Endowment?',
        a: 'Because mixing insurance and investment is fundamentally inefficient. Pure term gives 10x higher life cover for a fraction of the cost (e.g. ₹1 Cr for ₹1,000/month). By investing the remaining ₹4,000 in diversified equity mutual funds, your family gets both maximum life security and superior long-term wealth.'
      },
      {
        q: 'How much life insurance cover do I actually need?',
        a: 'The gold standard benchmark is Human Life Value (HLV): minimum 15 to 20 times your annual gross income plus the total outstanding amount of all existing liabilities (home loans, vehicle loans, business borrowings).'
      },
      {
        q: 'Does Assure Securities help nominees during claim settlement?',
        a: 'Yes! Our senior advisory desk in Lucknow provides end-to-end claim advocacy and physical documentation assistance to nominee families, ensuring hassle-free processing within 48 to 72 hours.'
      },
      {
        q: 'Can I add critical illness coverage to my existing term plan?',
        a: 'Yes, comprehensive critical illness riders can be incorporated at the time of policy inception, providing immediate lump-sum cash payouts on diagnosis of major life conditions.'
      }
    ]
  },

  'general-insurance': {
    id: 'general-insurance',
    title: 'General & Health Insurance',
    category: 'HEALTHCARE & ASSET SHIELD',
    regulatorBadge: 'IRDAI REGULATED • CASHLESS HEALTHCARE & ASSET PROTECTION',
    heroImage: '/assets/principle-transparency.jpg',
    imageTag: 'COMPREHENSIVE HEALTHCARE SHIELD',
    imageCaption: '10,000+ Cashless Hospital Network & ₹1 Cr Super Top-Up',
    accentColor: '#6366f1',
    gradientBg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0.6) 100%)',
    tagline: 'Shield your accumulated family wealth from runaway 14%+ healthcare inflation across 10,000+ cashless hospitals',
    summary: 'Comprehensive family floater policies, super top-up shields up to ₹1 Crore, senior citizen medical covers, and zero-depreciation motor asset protection to safeguard your liquid savings.',
    trustBadges: [
      { label: '10,000+ Cashless Hospital Network', icon: Building2, color: '#6366f1' },
      { label: 'Super Top-up up to ₹1 Crore', icon: ShieldCheck, color: '#10b981' },
      { label: 'Zero Copay & Unlimited Restoration', icon: Award, color: '#38bdf8' },
      { label: 'Save up to ₹75,000 under Sec 80D', icon: Receipt, color: '#fbbf24' }
    ],
    issuers: [
      {
        name: 'Care Health Insurance (Religare)',
        rating: 'Top Rated Standalone Health Insurer',
        rate: 'Family Floater ₹10L from ₹950/mo',
        seniorRate: 'Unlimited Automatic Recharge',
        tenure: '1, 2, or 3 Years Multi-Year Options',
        payouts: 'Cashless within 30 Minutes',
        highlight: 'Zero room rent capping, pre-existing disease reduction to 12 months, and comprehensive international emergency cover.'
      },
      {
        name: 'HDFC ERGO General Insurance',
        rating: '12,000+ Cashless Hospital Network',
        rate: 'Optima Secure (4X Cover Inbuilt)',
        seniorRate: 'Zero Copay Guarantee',
        tenure: '1 to 3 Years Tenure',
        payouts: '99.8% Cashless Settlement Speed',
        highlight: 'Automatic 4X cover doubling on day one with zero room rent deductions and pre/post hospitalization coverage.'
      },
      {
        name: 'Star Health & Allied Insurance',
        rating: '14,000+ Cashless Hospitals',
        rate: 'Comprehensive Family Floater',
        seniorRate: 'Senior Citizen Red Carpet Plan',
        tenure: 'Annual / Multi-Year',
        payouts: 'Dedicated In-House TPA',
        highlight: 'Specialized focus on senior citizens aged 60 to 75 without mandatory pre-medical checkup requirements.'
      },
      {
        name: 'Super Top-Up Wealth Shield (₹1 Cr)',
        rating: 'Cost Optimizer Architecture',
        rate: '₹90L to ₹1Cr Cover from ₹250/mo',
        seniorRate: 'Pairs with any Base Policy',
        tenure: 'Annual / Multi-Year',
        payouts: 'Cashless across Tier 1 Super Specialty',
        highlight: 'Super top-up structures provide immense catastrophic coverage at a fraction of traditional base policy pricing.'
      }
    ],
    comparison: {
      title: 'Standard Base Health Policy vs Base + Super Top-up Architecture',
      points: [
        { metric: 'Annual Premium for ₹50L Cover', traditional: '₹45,000 - ₹60,000/yr (Very Expensive!)', assure: '₹14,000 - ₹18,000/yr (Base ₹5L + ₹45L Super Top-up)', winner: 'assure' },
        { metric: 'Total Medical Shield', traditional: 'Limited to ₹10L - ₹15L due to budget', assure: 'Full ₹50 Lakhs to ₹1 Crore Comprehensive Cover', winner: 'assure' },
        { metric: 'Room Rent Deductions', traditional: 'Often capped at 1% of sum insured', assure: 'Zero Room Rent Capping across single private rooms', winner: 'assure' },
        { metric: 'Restoration Benefits', traditional: 'Restores only once per year', assure: '100% Unlimited Automatic Recharge', winner: 'assure' },
        { metric: 'Annual Cost Savings', traditional: 'Zero savings', assure: 'Saves ₹25,000 to ₹40,000 every single year in premiums', winner: 'assure' }
      ]
    },
    pillars: [
      {
        title: 'Countering 14% Healthcare Inflation',
        desc: 'Medical costs in India double every 5 years. A major cardiac or neurological episode costs ₹12-25 Lakhs, making ₹5 Lakh policies dangerously obsolete.',
        icon: TrendingUp
      },
      {
        title: 'Unlimited Automatic Sum Insured Restoration',
        desc: 'If your cover gets exhausted during hospitalization, it replenishes automatically for unrelated conditions within the same policy year.',
        icon: Award
      },
      {
        title: 'Pre and Post-Hospitalization Care',
        desc: 'Full coverage for doctor consultations, diagnostic tests, and expensive medications for 60 days prior to admission and 180 days post-discharge.',
        icon: HeartPulse
      },
      {
        title: 'Maximum Section 80D Tax Optimization',
        desc: 'Deduct up to ₹25,000 for self/family and an additional ₹50,000 for parents aged 60+, generating up to ₹75,000 in legitimate annual tax deductions.',
        icon: Receipt
      }
    ],
    faqs: [
      {
        q: 'What is a Super Top-up and how does it save me thousands?',
        a: 'A Super Top-up covers medical expenses above a threshold (deductible) like ₹5 Lakhs. If you have an employer or base policy of ₹5 Lakhs, buying a ₹45 Lakh Super Top-up costs only ~₹3,500/year, giving you a mammoth ₹50 Lakh total cover at 70% cheaper cost than a standalone ₹50L policy.'
      },
      {
        q: 'Are pre-existing diseases (PED) covered?',
        a: 'Yes, after a mandatory waiting period of 24 to 36 months. However, modern plans distributed by Assure Securities offer riders that reduce pre-existing disease waiting periods to just 12 months.'
      },
      {
        q: 'Is cashless hospitalization available in Lucknow hospitals?',
        a: 'Yes! Major premier hospitals across Lucknow including Medanta Super Specialty, Apollo, Sahara Hospital, Midland, and Tender Palm are connected via cashless networks.'
      },
      {
        q: 'What does No Room Rent Capping mean?',
        a: 'Many standard policies cap room rent to 1% of sum insured. If you stay in a higher room, hospitals penalize by deducting proportionate amounts from doctors fees and surgery bills. Our policies feature Zero Room Rent Sub-Limits, avoiding all out-of-pocket deductions.'
      }
    ]
  },

  'tax-saving': {
    id: 'tax-saving',
    title: 'Tax Saving Solutions',
    category: 'WEALTH OPTIMIZATION & RELIEF',
    regulatorBadge: 'INCOME TAX ACT 1961 • MAXIMUM DEDUCTIONS & WEALTH MULTIPLIER',
    heroImage: '/assets/why-assure-advisory.jpg',
    imageTag: 'TAX HARVESTING & COMPOUNDING',
    imageCaption: 'Strategic Section 80C, 80D & 80CCD Holistic Wealth Architecture',
    accentColor: '#10b981',
    gradientBg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(15, 23, 42, 0.6) 100%)',
    tagline: 'Legally optimize deductions under Section 80C, 80D, and 80CCD while compounding your take-home capital',
    summary: 'Strategic tax planning combining ELSS mutual funds (shortest 3-year lock-in), National Pension System (NPS), Section 54EC capital gains bonds, and health insurance tax reliefs.',
    trustBadges: [
      { label: 'ELSS Shortest 3-Yr Lock-in', icon: Clock, color: '#10b981' },
      { label: 'NPS ₹50,000 Extra 80CCD(1B)', icon: Percent, color: '#38bdf8' },
      { label: 'Save up to ₹78,000+ in Taxes', icon: Receipt, color: '#fbbf24' },
      { label: 'Dual Alpha + Tax Harvesting', icon: TrendingUp, color: '#a855f7' }
    ],
    issuers: [
      {
        name: 'ELSS Tax Saver Mutual Funds',
        rating: 'Section 80C Deductions up to ₹1.5L',
        rate: '14% to 18% Historical Equity CAGR',
        seniorRate: 'Shortest 3-Year Lock-in',
        tenure: '3 Years (Can continue compounding)',
        payouts: 'Capital Growth (Growth Option)',
        highlight: 'Shortest lock-in among all 80C instruments (PPF is 15 yrs, Tax FD is 5 yrs). Generates superior equity alpha while saving up to ₹46,800/yr in taxes.'
      },
      {
        name: 'National Pension System (NPS)',
        rating: 'Section 80CCD(1B) Exclusive',
        rate: '9.5% to 12.5% Balanced Returns',
        seniorRate: 'Exclusive ₹50,000 Extra Deduction',
        tenure: 'Up to Age 60 / Retirement',
        payouts: 'Lump Sum 60% Tax Free + 40% Annuity',
        highlight: 'Special deduction of ₹50,000 completely beyond the ₹1.5L 80C ceiling, saving an extra ₹15,600 in tax for 30% slab taxpayers.'
      },
      {
        name: 'Health Insurance Premium (Sec 80D)',
        rating: 'Section 80D Medical Deduction',
        rate: 'Deductions up to ₹75,000',
        seniorRate: 'Family ₹25K + Senior Parents ₹50K',
        tenure: 'Annual Continuous Cover',
        payouts: 'Tax Deduction + Full Healthcare Cover',
        highlight: 'Dual benefit of insulating family health while reducing annual taxable income by up to ₹75,000.'
      },
      {
        name: 'Capital Gains Tax Harvesting',
        rating: 'Section 112A Tax Optimization',
        rate: '₹1.25 Lakh Annual LTCG Exemption',
        seniorRate: 'Systematic Rebalancing',
        tenure: 'Annual Calendar Management',
        payouts: 'Tax-Free Profits Realization',
        highlight: 'Harvest up to ₹1.25 Lakh in long-term equity profits completely tax-free every single financial year.'
      }
    ],
    comparison: {
      title: 'Tax Saving Instruments Comparison Matrix (Section 80C)',
      points: [
        { metric: 'Mandatory Lock-in Period', traditional: 'PPF: 15 Years | Tax FD: 5 Years', assure: 'ELSS Mutual Funds: Only 3 Years (Shortest!)', winner: 'assure' },
        { metric: 'Historical Returns Profile', traditional: 'PPF: 7.10% | Tax FD: ~6.50% - 7.00%', assure: 'ELSS: 12% - 16% Equity Compounding', winner: 'assure' },
        { metric: 'Inflation-Beating Capacity', traditional: 'Negative to Barely Matching Inflation', assure: 'Positive Real Wealth Multiplier', winner: 'assure' },
        { metric: 'Investment Flexibility', traditional: 'Lump sum locking or manual deposit', assure: 'Disciplined Monthly SIP from ₹500/month', winner: 'assure' },
        { metric: 'Post-Lockin Freedom', traditional: 'Funds frozen in 5-15 year tenures', assure: 'Freedom to withdraw or stay invested', winner: 'assure' }
      ]
    },
    pillars: [
      {
        title: 'Shortest Lock-In Period in Section 80C',
        desc: 'ELSS funds release your capital after just 36 months, offering 5x faster capital rotation than PPF (15 years) and NSC (5 years).',
        icon: Clock
      },
      {
        title: 'Inflation-Beating Equity Compounding',
        desc: 'While fixed rate tax instruments erode against real inflation, ELSS mutual funds invest across India’s leading bluechips for capital appreciation.',
        icon: TrendingUp
      },
      {
        title: 'Automatic Monthly Tax SIP Discipline',
        desc: 'Eliminate March tax-filing panic by scheduling automatic monthly SIPs from April, benefiting from rupee-cost averaging throughout the fiscal year.',
        icon: ShieldCheck
      },
      {
        title: 'Holistic 80C + 80D + 80CCD Structuring',
        desc: 'Our wealth desk coordinates your PF, insurance, ELSS, and NPS to legally capture the maximum ₹2.75 Lakhs in permissible deductions.',
        icon: Receipt
      }
    ],
    faqs: [
      {
        q: 'Should I choose the Old Tax Regime or the New Tax Regime?',
        a: 'If you have substantial deductions (e.g. ₹1.5L 80C, ₹50K 80CCD, ₹50K-75K 80D, HRA, and home loan interest) exceeding ~₹3.75 Lakhs, the Old Tax Regime is often mathematically superior. Assure Securities runs a personalized tax simulation to determine your exact optimum pathway.'
      },
      {
        q: 'Am I required to withdraw ELSS funds after 3 years?',
        a: 'No! The 3-year lock-in simply means you cannot redeem before 36 months. After 3 years, you can keep your money invested as long as you wish, letting it compound tax-efficiently for 10, 15, or 20 years.'
      },
      {
        q: 'How does the ₹50,000 additional NPS deduction work?',
        a: 'Under Section 80CCD(1B), any voluntary contribution to Tier-1 NPS up to ₹50,000 is eligible for an exclusive tax deduction over and above the ₹1.5 Lakh limit under Section 80C. This directly saves up to ₹15,600 in cash taxes for taxpayers in the 30% slab.'
      },
      {
        q: 'What is Tax-Loss and Tax-Gain Harvesting in mutual funds?',
        a: 'Under Section 112A, long-term capital gains on equity mutual funds up to ₹1.25 Lakh per financial year are completely tax-free. We help you systematically book and re-invest gains annually to raise your cost basis with zero tax liability.'
      }
    ]
  },

  'pms-aif': {
    id: 'pms-aif',
    title: 'PMS & AIF for HNIs',
    category: 'PRIVATE WEALTH & ALTERNATIVE ALPHA',
    regulatorBadge: 'SEBI REGULATED • HIGH-CONVICTION WEALTH • MINIMUM ₹50 LAKHS',
    heroImage: '/assets/boardroom-luxury-bg.jpg',
    imageTag: 'PRIVATE WEALTH & AIF ALPHA',
    imageCaption: 'Private Family Office Governance & High-Conviction Portfolios',
    accentColor: '#eab308',
    gradientBg: 'linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(15, 23, 42, 0.6) 100%)',
    tagline: 'Bespoke wealth management, concentrated high-conviction portfolios, and alternative private market strategies',
    summary: 'Tailored investment vehicles for High Net-Worth Individuals (HNIs) and family offices. Benefit from concentrated 15-25 stock portfolios, direct Demat ownership, private equity, and market-neutral long-short hedge funds.',
    trustBadges: [
      { label: 'Direct Demat Ownership (PMS)', icon: ShieldCheck, color: '#eab308' },
      { label: 'Minimum Ticket ₹50L (PMS) / ₹1Cr (AIF)', icon: Landmark, color: '#38bdf8' },
      { label: 'Proprietary Quantitative Manager Audit', icon: Award, color: '#10b981' },
      { label: 'Dedicated Private Wealth Desk', icon: Briefcase, color: '#ec4899' }
    ],
    issuers: [
      {
        name: 'High-Conviction Multicap & Smallcap PMS',
        rating: 'SEBI Registered Portfolio Managers',
        rate: 'Market-Beating Alpha Focus',
        seniorRate: 'Concentrated 15-25 Stock Portfolios',
        tenure: 'Minimum 3 to 5 Year Horizon',
        payouts: 'Direct Demat Ownership',
        highlight: 'Unconstrained by mutual fund single-stock concentration limits. Managers aggressively hold high-conviction winners in your personal Demat.'
      },
      {
        name: 'Factor & Quantitative Model PMS',
        rating: 'Rules-Based Mathematical Alpha',
        rate: 'Systematic Momentum & Quality Factors',
        seniorRate: 'Strict Risk & Drawdown Controls',
        tenure: '3 to 5 Years',
        payouts: 'Dynamic Rebalancing',
        highlight: 'Eliminates human emotional biases through algorithmic factor investing, capturing upside momentum while triggering stop-loss cash allocations.'
      },
      {
        name: 'Category II Alternative Investment Funds (AIF)',
        rating: 'Private Equity & Real Estate Debt',
        rate: '15% to 22% Target Gross IRR',
        seniorRate: 'Minimum Ticket ₹1 Crore',
        tenure: '5 to 7 Years Closed-Ended',
        payouts: 'Capital Drawdowns & Return of Capital',
        highlight: 'Invest in unlisted high-growth Indian enterprises, pre-IPO opportunities, and structured real estate mezzanine debt.'
      },
      {
        name: 'Category III Long-Short Hedge AIF',
        rating: 'Absolute Return Derivatives Strategy',
        rate: 'Non-Correlated Market Neutral',
        seniorRate: 'Downside Protection in Bear Markets',
        tenure: 'Open-ended with 1-Year Exit Windows',
        payouts: 'Quarterly NAV Valuation',
        highlight: 'Utilizes long equity positions coupled with index shorting and options strategies to deliver consistent positive returns regardless of market direction.'
      }
    ],
    comparison: {
      title: 'Retail Mutual Funds vs High-Net-Worth PMS Strategy',
      points: [
        { metric: 'Portfolio Concentration', traditional: 'Diluted across 60 to 100+ stocks', assure: 'Concentrated in 15 to 25 high-conviction ideas', winner: 'assure' },
        { metric: 'Security Custody', traditional: 'Pooled AMC fund trust units', assure: 'Direct shares held in your personal Demat account', winner: 'assure' },
        { metric: 'Direct Fund Manager Access', traditional: 'Zero personal interaction', assure: 'Quarterly private briefings with senior fund managers', winner: 'assure' },
        { metric: 'Cash Drag Flexibility', traditional: 'Subject to daily retail investor panic redemptions', assure: 'Sticky institutional capital with zero forced liquidations', winner: 'assure' },
        { metric: 'Minimum Ticket Size', traditional: '₹500 (Mass retail product)', assure: '₹50 Lakhs (Exclusive SEBI-regulated HNI mandate)', winner: 'tie' }
      ]
    },
    pillars: [
      {
        title: 'Direct Demat Stock Ownership',
        desc: 'Unlike mutual funds where you hold units, in PMS all underlying bluechips and midcaps are held directly in your individual Demat account in your name.',
        icon: ShieldCheck
      },
      {
        title: 'Unconstrained Concentration Alpha',
        desc: 'SEBI mutual fund regulations cap exposure to 10% per company. PMS managers have the structural freedom to allocate 12-18% in generational compounders.',
        icon: TrendingUp
      },
      {
        title: 'Proprietary Quantitative Manager Audit',
        desc: 'Assure Securities tracks 80+ PMS houses nationwide, filtering strictly by rolling 3-year Information Ratio, downside capture, and governance hygiene.',
        icon: Award
      },
      {
        title: 'Comprehensive Family Office Governance',
        desc: 'Bespoke capital gains reporting, consolidated portfolio audits, and seamless coordination with your family chartered accountants.',
        icon: Briefcase
      }
    ],
    faqs: [
      {
        q: 'What is the minimum regulatory investment required for PMS and AIF?',
        a: 'Under SEBI regulations, the statutory minimum investment ticket for Portfolio Management Services (PMS) is ₹50 Lakhs. For Alternative Investment Funds (Category I, II, and III AIF), the statutory minimum ticket is ₹1 Crore.'
      },
      {
        q: 'How does taxation work in a PMS account?',
        a: 'Because securities are held directly in your Demat account, every buy and sell transaction is treated as a direct trade by you. Realized short-term gains are taxed at 20%, and long-term gains (held >12 months) are taxed at 12.5% above ₹1.25 Lakh.'
      },
      {
        q: 'Can I transfer existing shares from my Demat account into a PMS?',
        a: 'Yes! Most PMS providers allow in-specie transfer of existing equities, provided the stocks match the manager’s approved investment mandate and meet the ₹50 Lakh statutory valuation.'
      },
      {
        q: 'How does Assure Securities advise on PMS selection?',
        a: 'We act as an independent fiduciary wealth advisory desk. We evaluate rolling multi-cycle alpha, downside capture ratios, fund manager pedigree, and portfolio overlap to assemble a bespoke multi-manager suite for your family corpus.'
      }
    ]
  }
};

const ALL_SOLUTIONS_LIST = [
  { id: 'fixed-deposits', title: 'Corporate Fixed Deposits', icon: ShieldCheck, color: '#38bdf8' },
  { id: 'bonds', title: 'Bonds & Government Securities', icon: Landmark, color: '#f59e0b' },
  { id: 'life-insurance', title: 'Life Insurance', icon: HeartPulse, color: '#ec4899' },
  { id: 'general-insurance', title: 'General & Health Insurance', icon: ShieldAlert, color: '#6366f1' },
  { id: 'tax-saving', title: 'Tax Saving Solutions', icon: Receipt, color: '#10b981' },
  { id: 'pms-aif', title: 'PMS & AIF for HNIs', icon: Briefcase, color: '#eab308' }
];

export function ProductsPage({ onOpenModal, defaultProduct }) {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Determine active solution key
  const [activeTab, setActiveTab] = useState(
    defaultProduct || productId || 'fixed-deposits'
  );

  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    if (productId && SOLUTIONS_SPECS[productId]) {
      setActiveTab(productId);
    } else if (defaultProduct && SOLUTIONS_SPECS[defaultProduct]) {
      setActiveTab(defaultProduct);
    }
  }, [productId, defaultProduct]);

  // Fallback to fixed-deposits if key not found
  const current = SOLUTIONS_SPECS[activeTab] || SOLUTIONS_SPECS['fixed-deposits'];

  const handleTabChange = (id) => {
    setActiveTab(id);
    navigate(`/products/${id}`, { replace: true });
    setExpandedFaq(null);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', background: '#050811', color: '#f8fafc' }}>
      
      {/* =========================================================================
          1. Editorial Page Header (Dark Glassmorphic Luxury Style - Matching Mutual Funds)
          ========================================================================= */}
      <section 
        style={{ 
          padding: 'clamp(3.5rem, 5vw, 4.5rem) 0 clamp(2rem, 3.5vw, 3rem) 0', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
          position: 'relative', 
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #070B14 0%, #050811 100%)'
        }}
      >
        {/* Ambient Photographic Background Layer */}
        <div 
          key={current.id}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 75% 35%, rgba(5, 8, 17, 0.75) 0%, #050811 85%), url(${current.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            opacity: 0.16,
            pointerEvents: 'none',
            filter: 'saturate(1.2)',
            transition: 'opacity 0.5s ease'
          }}
        />

        {/* Subtle Ambient Decorative Glows */}
        <div 
          style={{
            position: 'absolute',
            top: '-20%',
            right: '10%',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${current.accentColor}22 0%, transparent 70%)`,
            pointerEvents: 'none',
            filter: 'blur(70px)',
            transition: 'background 0.4s ease'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            top: '30%',
            left: '5%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
            filter: 'blur(70px)'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          <div 
            className="solutions-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.15fr) minmax(320px, 0.85fr)',
              gap: 'clamp(2rem, 4vw, 3.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Editorial & Fiduciary Specs */}
            <div>
              {/* Breadcrumbs Navigation */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
                <ChevronRight size={13} opacity={0.5} />
                <Link to="/products" style={{ color: '#94a3b8', textDecoration: 'none' }}>Solutions Suite</Link>
                <ChevronRight size={13} opacity={0.5} />
                <span style={{ color: current.accentColor, fontWeight: 600 }}>{current.title}</span>
              </div>

              {/* Eyebrow Pill */}
              <div style={{ marginBottom: '1rem' }}>
                <span 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.35rem 0.95rem',
                    borderRadius: '9999px',
                    background: `${current.accentColor}18`,
                    border: `1px solid ${current.accentColor}40`,
                    color: current.accentColor,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em'
                  }}
                >
                  <Award size={13} color={current.accentColor} />
                  {current.regulatorBadge}
                </span>
              </div>

              {/* Page Headline */}
              <h1 
                style={{ 
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', 
                  color: '#ffffff', 
                  lineHeight: 1.15,
                  fontWeight: 500,
                  margin: '0 0 1rem 0'
                }}
              >
                {current.title} <span style={{ color: current.accentColor, fontStyle: 'italic', fontWeight: 600 }}>Architecture</span>
              </h1>

              {/* Tagline Highlight */}
              <div 
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: current.accentColor, 
                  fontWeight: 600, 
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.08rem)', 
                  marginBottom: '1rem',
                  lineHeight: 1.45
                }}
              >
                <Sparkles size={16} color={current.accentColor} style={{ flexShrink: 0 }} />
                <span>{current.tagline}</span>
              </div>

              {/* Summary Description */}
              <p style={{ fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)', color: '#94a3b8', lineHeight: 1.65, margin: '0 0 1.75rem 0', maxWidth: '640px' }}>
                {current.summary}
              </p>

              {/* Institutional Trust Badges Ribbon */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.85rem 1.25rem',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '16px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  maxWidth: 'fit-content',
                  marginBottom: '1.75rem'
                }}
              >
                {current.trustBadges.map((badge, bIdx) => {
                  const BadgeIcon = badge.icon;
                  return (
                    <React.Fragment key={bIdx}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <BadgeIcon size={15} color={badge.color} />
                        <span style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600 }}>
                          {badge.label}
                        </span>
                      </div>
                      {bIdx < current.trustBadges.length - 1 && (
                        <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => onOpenModal && onOpenModal('consultation')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0.85rem 1.6rem',
                    borderRadius: '12px',
                    background: current.accentColor,
                    color: '#050811',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: `0 8px 24px ${current.accentColor}35`,
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 12px 30px ${current.accentColor}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = `0 8px 24px ${current.accentColor}35`;
                  }}
                >
                  Schedule Private Consultation
                  <ArrowRight size={15} />
                </button>

                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    padding: '0.85rem 1.35rem', 
                    borderRadius: '12px', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    color: '#ffffff', 
                    fontWeight: 600, 
                    fontSize: '0.9rem', 
                    border: '1px solid rgba(255, 255, 255, 0.12)', 
                    textDecoration: 'none', 
                    transition: 'all 0.2s' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
                >
                  <Phone size={14} color={current.accentColor} />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-End Photographic Showcase Card */}
            <div className="solutions-hero-card">
              <div 
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  padding: '8px',
                  background: `linear-gradient(145deg, ${current.accentColor}50 0%, rgba(255, 255, 255, 0.06) 50%, ${current.accentColor}25 100%)`,
                  boxShadow: `0 25px 65px -15px ${current.accentColor}30`,
                  transition: 'transform 0.3s ease'
                }}
              >
                <div 
                  style={{
                    position: 'relative',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    aspectRatio: '16/11',
                    background: '#070b14'
                  }}
                >
                  <img 
                    src={current.heroImage} 
                    alt={current.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />

                  {/* Gradient vignette for badges readability */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(5, 8, 17, 0.35) 0%, transparent 45%, rgba(5, 8, 17, 0.9) 100%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Top Floating Category Badge */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0.42rem 0.9rem',
                      borderRadius: '9999px',
                      background: 'rgba(5, 8, 17, 0.82)',
                      backdropFilter: 'blur(12px)',
                      border: `1px solid ${current.accentColor}60`,
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: current.accentColor,
                      letterSpacing: '0.06em',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <span 
                      style={{ 
                        width: '7px', 
                        height: '7px', 
                        borderRadius: '50%', 
                        background: current.accentColor, 
                        boxShadow: `0 0 10px ${current.accentColor}`, 
                        display: 'inline-block' 
                      }} 
                    />
                    {current.imageTag}
                  </div>

                  {/* Bottom Floating Verified Security Pill */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      left: '14px',
                      right: '14px',
                      padding: '0.75rem 1.1rem',
                      borderRadius: '14px',
                      background: 'rgba(7, 11, 20, 0.88)',
                      backdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    <div 
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '8px',
                        background: `${current.accentColor}20`,
                        border: `1px solid ${current.accentColor}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <ShieldCheck size={16} color={current.accentColor} />
                    </div>
                    <span style={{ fontSize: '0.82rem', color: '#f8fafc', fontWeight: 600, lineHeight: 1.35 }}>
                      {current.imageCaption}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. Interactive Solutions Navigation Bar (Horizontal Floating Bento Tabs)
          ========================================================================= */}
      <section 
        style={{ 
          background: 'rgba(10, 15, 29, 0.95)', 
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'sticky',
          top: '76px',
          zIndex: 90
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0.75rem 1.25rem' }}>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              gap: '0.65rem', 
              overflowX: 'auto', 
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
              padding: '0.2rem 0'
            }}
          >
            {/* All 6 Curated Wealth Solutions */}
            {ALL_SOLUTIONS_LIST.map((sol) => {
              const Icon = sol.icon;
              const isActive = activeTab === sol.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => handleTabChange(sol.id)}
                  style={{
                    flex: '1 1 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.7rem 0.95rem',
                    borderRadius: '12px',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: isActive ? `1px solid ${sol.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                    background: isActive ? `${sol.color}22` : 'rgba(255, 255, 255, 0.025)',
                    color: isActive ? sol.color : '#94a3b8',
                    boxShadow: isActive ? `0 4px 14px ${sol.color}25` : 'none',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Icon size={15} color={isActive ? sol.color : '#64748b'} />
                  <span>{sol.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. Core Deep-Dive Bento Stage: Curated Offerings / Issuers (THEME: WHITE)
          ========================================================================= */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 5rem) 0', background: '#ffffff', color: '#0f172a', position: 'relative' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.4rem' }}>
                INSTITUTIONAL SUITE • {current.title.toUpperCase()}
              </div>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.75rem)', color: '#0f172a', margin: 0, fontWeight: 700 }}>
                Empaneled <span style={{ color: current.accentColor, fontStyle: 'italic' }}>Offerings & Vetted Issuers</span>
              </h2>
            </div>

            <p style={{ maxWidth: '500px', fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              {current.tagline}
            </p>
          </div>

          {/* Bento Grid of 4 to 6 Curated Offerings */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
              gap: '1.5rem' 
            }}
          >
            {current.issuers.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '1.85rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = current.accentColor;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = `0 15px 35px -5px rgba(15, 23, 42, 0.1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px -2px rgba(15, 23, 42, 0.05)';
                }}
              >
                {/* Header Tag */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.85rem' }}>
                    <span 
                      style={{
                        padding: '0.28rem 0.75rem',
                        borderRadius: '6px',
                        background: '#f1f5f9',
                        border: '1px solid #cbd5e1',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: '#0f172a',
                        fontWeight: 700
                      }}
                    >
                      {item.rating}
                    </span>

                    <span style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)', fontWeight: 500 }}>
                      Tenure: {item.tenure}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#0f172a', fontWeight: 700, margin: '0 0 0.5rem 0' }}>
                    {item.name}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: '0 0 1.25rem 0' }}>
                    {item.highlight}
                  </p>
                </div>

                {/* Metrics Box */}
                <div>
                  <div 
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: '1fr 1fr', 
                      gap: '0.75rem', 
                      padding: '0.85rem 1rem', 
                      background: '#f8fafc', 
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      marginBottom: '1rem'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                        Key Yield / Return
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>
                        {item.rate}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                        Special Privilege
                      </div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#334155' }}>
                        {item.seniorRate}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenModal && onOpenModal('contact-consult')}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '10px',
                      background: '#0f172a',
                      border: '1px solid #0f172a',
                      color: '#ffffff',
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.08)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = current.accentColor;
                      e.currentTarget.style.color = '#050811';
                      e.currentTarget.style.borderColor = current.accentColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#0f172a';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = '#0f172a';
                    }}
                  >
                    <span>Request Term Sheet</span>
                    <ArrowRight size={13} />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. Strategic Comparison Bento Grid: Conventional vs Assure Strategy (THEME: DARK)
          ========================================================================= */}
      <section 
        style={{ 
          padding: '4.5rem 0', 
          background: 'linear-gradient(180deg, #070B14 0%, #050811 100%)', 
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          color: '#f8fafc'
        }}
      >
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                color: current.accentColor,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 700
              }}
            >
              FIDUCIARY BENCHMARK AUDIT
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 2.75rem)', color: '#ffffff', margin: '0.5rem 0 0.85rem 0', fontWeight: 500 }}>
              {current.comparison.title}
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.96rem', lineHeight: 1.6, margin: 0 }}>
              Evaluating structural yield, security covenants, tax impact, and capital retention differences.
            </p>
          </div>

          {/* Comparison Table Bento */}
          <div 
            style={{ 
              background: 'rgba(15, 23, 42, 0.85)', 
              borderRadius: '20px', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Table Header */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: '2fr 2fr 2fr', 
                padding: '1.25rem 1.75rem', 
                background: 'rgba(2, 6, 23, 0.8)', 
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}
            >
              <div style={{ color: '#94a3b8' }}>Strategic Parameter</div>
              <div style={{ color: '#ef4444' }}>Conventional Alternative</div>
              <div style={{ color: current.accentColor }}>Assure Curated Solution</div>
            </div>

            {/* Table Rows */}
            {current.comparison.points.map((pt, pIdx) => (
              <div 
                key={pIdx}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '2fr 2fr 2fr', 
                  padding: '1.25rem 1.75rem', 
                  borderBottom: pIdx < current.comparison.points.length - 1 ? '1px solid rgba(255, 255, 255, 0.04)' : 'none',
                  alignItems: 'center',
                  background: pIdx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.015)'
                }}
              >
                <div style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.92rem' }}>
                  {pt.metric}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.88rem', paddingRight: '1rem' }}>
                  {pt.traditional}
                </div>
                <div style={{ color: current.accentColor, fontWeight: 600, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color={current.accentColor} style={{ flexShrink: 0 }} />
                  <span>{pt.assure}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. Core Strategic Pillars (4 Bento Luxury Tiles - THEME: WHITE)
          ========================================================================= */}
      <section style={{ padding: 'clamp(4rem, 6vw, 5.5rem) 0', background: '#ffffff', color: '#0f172a', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          
          <div style={{ marginBottom: '2.75rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: '#0284c7', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>
              STRUCTURAL SAFEGUARDS
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 2.75rem)', color: '#0f172a', margin: '0.35rem 0 0 0', fontWeight: 700 }}>
              Four Pillars of <span style={{ color: current.accentColor, fontStyle: 'italic' }}>Institutional Execution</span>
            </h2>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', 
              gap: '1.5rem' 
            }}
          >
            {current.pillars.map((pil, idx) => {
              const PilIcon = pil.icon;
              return (
                <div 
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '18px',
                    padding: '2rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 15px rgba(15, 23, 42, 0.03)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = current.accentColor;
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(15, 23, 42, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(15, 23, 42, 0.03)';
                  }}
                >
                  <div 
                    style={{ 
                      width: '46px', 
                      height: '46px', 
                      borderRadius: '12px', 
                      background: `${current.accentColor}18`, 
                      border: `1px solid ${current.accentColor}35`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <PilIcon size={22} color={current.accentColor} />
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: 700, margin: 0 }}>
                    {pil.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    {pil.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. Interactive FAQs Accordion (THEME: DARK)
          ========================================================================= */}
      <section 
        style={{ 
          padding: '4.5rem 0', 
          background: 'linear-gradient(180deg, #070B14 0%, #050811 100%)', 
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          color: '#f8fafc'
        }}
      >
        <div className="container" style={{ maxWidth: '880px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: current.accentColor, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>
              REGULATORY & ADVISORY CLARITY
            </span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)', color: '#ffffff', margin: '0.5rem 0 0 0', fontWeight: 500 }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {current.faqs.map((faq, fIdx) => {
              const isOpen = expandedFaq === fIdx;
              return (
                <div 
                  key={fIdx}
                  style={{
                    background: 'rgba(15, 23, 42, 0.75)',
                    border: isOpen ? `1px solid ${current.accentColor}60` : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    style={{
                      width: '100%',
                      padding: '1.35rem 1.65rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '1rem'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp size={18} color={current.accentColor} style={{ flexShrink: 0 }} />
                    ) : (
                      <ChevronDown size={18} color="#94a3b8" style={{ flexShrink: 0 }} />
                    )}
                  </button>

                  {isOpen && (
                    <div 
                      style={{ 
                        padding: '0 1.65rem 1.5rem 1.65rem', 
                        color: '#94a3b8', 
                        fontSize: '0.92rem', 
                        lineHeight: 1.68,
                        borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                        paddingTop: '1rem'
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. Senior Wealth Advisory Engagement Strip (THEME: WHITE - Above Dark Footer)
          ========================================================================= */}
      <section 
        style={{ 
          padding: '4.5rem 0', 
          background: '#ffffff',
          color: '#0f172a',
          borderTop: '1px solid #e2e8f0'
        }}
      >
        <div className="container">
          <div 
            style={{ 
              background: 'linear-gradient(145deg, #f8fafc 0%, #ffffff 100%)', 
              borderRadius: '24px', 
              padding: 'clamp(2rem, 4vw, 3.5rem)', 
              border: '1px solid #e2e8f0', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '2.5rem',
              boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08)'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <span 
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.74rem', 
                  color: '#0284c7', 
                  letterSpacing: '0.08em', 
                  fontWeight: 700, 
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem' 
                }}
              >
                <Building2 size={14} color="#0284c7" />
                LUCKNOW DESK • CONFIDENTIAL MANDATE DIAGNOSTIC
              </span>
              <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.25, fontWeight: 700 }}>
                Ready to allocate into {current.title}?
              </h3>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.65, margin: 0 }}>
                Speak directly with our senior investment desk at Gomti Nagar, Lucknow or via private video conference. Receive comparative issuer audits, tax optimization roadmaps, and execution assistance.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', width: '100%', maxWidth: '380px' }}>
              <button 
                onClick={() => onOpenModal && onOpenModal('consultation')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '1rem 1.75rem',
                  borderRadius: '12px',
                  background: current.accentColor,
                  color: '#050811',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: `0 10px 25px ${current.accentColor}40`,
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Schedule Fiduciary Consultation
                <ArrowRight size={16} />
              </button>

              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '8px',
                  padding: '1rem 1.75rem',
                  borderRadius: '12px',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  border: '1px solid #cbd5e1',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.borderColor = '#94a3b8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                }}
              >
                <Phone size={15} color="#0f172a" />
                Call Desk: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Responsive Media Queries */}
      <style>{`
        @media (max-width: 960px) {
          .solutions-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
          }
          .solutions-hero-card {
            order: -1;
            max-width: 580px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>

    </div>
  );
}

export default ProductsPage;
