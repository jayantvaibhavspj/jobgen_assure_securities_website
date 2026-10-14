// Authentic Data extracted from Assure Securities (assuresecurities.in)

export const COMPANY_INFO = {
  name: "Assure Securities",
  tagline: "AMFI Registered Mutual Fund Distributor",
  arn: "ARN-182137",
  registrationDate: "20 July 2021",
  validity: "19 July 2027",
  phone: "+91 9455555742",
  officePhone: "09170707555",
  whatsapp: "+919455555742",
  email: "care@assuresecurities.in",
  address: "2/163 Vishal Khand, Gomtinagar, Lucknow - 226010, Uttar Pradesh, India",
  googleMapsUrl: "https://maps.google.com/?q=2/163+Vishal+Khand+Gomtinagar+Lucknow+226010",
  social: {
    facebook: "https://www.facebook.com/AssureSecurities",
    twitter: "https://twitter.com/Assure2010",
    instagram: "https://www.instagram.com/assuresecurities/",
    linkedin: "https://www.linkedin.com/company/assure-securitieslko/"
  },
  stats: [
    { label: "Years of Trust & Experience", value: "15+", suffix: "Years" },
    { label: "Satisfied Families & Investors", value: "1,500+", suffix: "Clients" },
    { label: "Assets Under Guidance", value: "₹250+", suffix: "Cr+" },
    { label: "Empaneled AMCs & Insurers", value: "40+", suffix: "Partners" }
  ]
};

export const QUICK_MF_TOOLS = [
  { id: "fund-comparison", title: "Fund Comparison", description: "Compare risk, returns, ratios & portfolio overlap across schemes", icon: "Scale", badge: "Live Tool" },
  { id: "latest-nav", title: "Latest NAV", description: "Track daily Net Asset Values across Equity, Debt & Hybrid funds", icon: "TrendingUp", badge: "Daily Update" },
  { id: "sip-performance", title: "SIP Performance", description: "Analyze past rolling SIP returns across market cycles", icon: "Clock", badge: "Historical" },
  { id: "current-nfo", title: "Current NFOs", description: "Explore ongoing and upcoming New Fund Offers in the market", icon: "Sparkles", badge: "New" },
  { id: "dividend-announced", title: "Dividend Announced", description: "Track latest IDCW dividend payout announcements and record dates", icon: "Coins", badge: "IDCW" },
  { id: "mf-factsheets", title: "MF Factsheets", description: "Download monthly portfolio factsheets from top Asset Management Companies", icon: "FileText", badge: "PDFs" }
];

export const PRODUCTS_DATA = [
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    tagline: "Professionally managed wealth creation for every goal",
    icon: "TrendingUp",
    summary: "Mutual funds are one of the most cost-efficient and disciplined ways to invest. They allow individual investors to participate in a diversified portfolio of equities, debt, and money market instruments managed by seasoned fund managers.",
    details: [
      "Diverse Categories: Equity Funds (Large, Mid, Small, Flexi Cap), Debt Funds, Hybrid Funds, Index Funds, and Solution-Oriented Funds.",
      "SIP Flexibility: Start investing with as low as ₹500/month with automated rupee-cost averaging.",
      "Professional Expertise: Full-time SEBI-regulated fund managers conducting exhaustive research and portfolio risk management.",
      "High Liquidity: Redeem your investments anytime with money credited directly to your bank account."
    ],
    highlight: "Ideal for Long-Term Wealth Creation, Early Retirement & Child Education.",
    subcategories: ["Equity Funds", "Debt / Liquid Funds", "Hybrid / Balanced Advantage", "ELSS Tax Savers", "Index & ETFs"]
  },
  {
    id: "fixed-deposits",
    title: "Corporate Fixed Deposits",
    tagline: "Assured safety with higher returns than conventional bank FDs",
    icon: "ShieldCheck",
    summary: "Fixed Deposits in top-tier companies and AAA/AA+ rated NBFCs that earn a predetermined rate of return over a fixed tenure. Experience regular interest payouts (monthly, quarterly, annually) or cumulative compounding.",
    details: [
      "Higher Interest Rates: Up to 1.5% to 2.5% higher interest than traditional bank fixed deposits.",
      "Top Credit Ratings: Empaneled with CRISIL/ICRA AAA & AA+ rated issuers (Bajaj Finance, HDFC, Mahindra Finance, Shriram, etc.).",
      "Senior Citizen Advantage: Additional interest rate benefit of 0.25% to 0.50% p.a.",
      "Flexible Tenures: Choose tenure ranging from 12 months to 60 months according to cash flow requirements."
    ],
    highlight: "Zero Market Volatility with Guaranteed Fixed Periodic Income.",
    subcategories: ["NBFC Fixed Deposits", "Housing Finance FDs", "Cumulative & Non-Cumulative Options", "Senior Citizen FDs"]
  },
  {
    id: "bonds",
    title: "Bonds & Government Securities",
    tagline: "Capital preservation with predictable sovereign & corporate yields",
    icon: "Landmark",
    summary: "Bonds are debt investments where investors lend capital to government bodies or blue-chip corporations in exchange for periodic coupon payments and capital redemption upon maturity.",
    details: [
      "Sovereign Gold Bonds (SGB): Earn 2.50% annual interest plus capital appreciation linked to gold price with tax-free redemption.",
      "54EC Capital Gain Bonds: Save Long-Term Capital Gains (LTCG) tax from real estate sale under Section 54EC (REC, PFC, IRFC).",
      "RBI Floating Rate Savings Bonds: 100% sovereign security with sovereign backing and floating interest rate reset semi-annually.",
      "High-Yield Corporate Bonds: Secured debentures offering steady coupon yields for conservative and balanced investors."
    ],
    highlight: "Unmatched Capital Security, Fixed Income Stream & Capital Gains Tax Exemption.",
    subcategories: ["Sovereign Gold Bonds", "54EC Capital Gain Bonds", "RBI Floating Rate Bonds", "Listed Corporate Bonds"]
  },
  {
    id: "life-insurance",
    title: "Life Insurance",
    tagline: "Comprehensive protection for your family's financial dignity",
    icon: "HeartPulse",
    summary: "Insurance planning figures out adequate financial cover against unpredictable life risks such as premature demise, loss of earning capacity, and critical illness. Ensure your dependents maintain their lifestyle without financial trauma.",
    details: [
      "Pure Term Life Insurance: Maximum life cover (e.g. ₹1 Cr to ₹5 Cr) at the most affordable premium rates.",
      "Longest Term Coverage: Protect your income up to age 75-85 with critical illness and accidental disability riders.",
      "ULIPs & Guaranteed Plans: Market-linked or guaranteed wealth accumulation alongside life cover.",
      "Tax Exemption: Tax benefits under Section 80C on premium and Section 10(10D) on maturity/claim proceeds."
    ],
    highlight: "High Cover, Low Cost, Guaranteed Claim Support & Family Income Continuity.",
    subcategories: ["Term Life Insurance", "Guaranteed Savings Plans", "Unit Linked Insurance (ULIP)", "Child Education Plans"]
  },
  {
    id: "general-insurance",
    title: "General & Health Insurance",
    tagline: "Shield your savings from rising healthcare costs and unforeseen damages",
    icon: "ShieldAlert",
    summary: "Medical inflation in India is rising at 14%+ annually. A single hospitalization can wipe out years of hard-earned investments. Our curated health and general policies provide cashless hospitalization and comprehensive asset protection.",
    details: [
      "Family Floater Health Plans: Comprehensive coverage for spouse, children, and dependent parents under one umbrella.",
      "Super Top-up Covers: Increase your existing health cover up to ₹50 Lakhs to ₹1 Crore at minimal incremental premium.",
      "Cashless Hospital Network: Seamless claims across 10,000+ top hospitals nationwide with zero-deductible options.",
      "Motor & Travel Insurance: Comprehensive coverage for vehicles against accidents, theft, third-party liability, and worldwide travel emergencies."
    ],
    highlight: "Cashless Hospitalization, Restoration Benefits & Section 80D Tax Savings.",
    subcategories: ["Comprehensive Health Plans", "Super Top-up Policies", "Critical Illness Cover", "Motor & Travel Insurance"]
  },
  {
    id: "tax-saving",
    title: "Tax Saving Solutions",
    tagline: "Optimize deductions legally and maximize your take-home income",
    icon: "Receipt",
    summary: "Tax saving is not just about last-minute panic investments in March. Planned early in the financial year, tax-efficient investments multiply your wealth while minimizing tax liabilities under Section 80C, 80D, and 80CCD.",
    details: [
      "ELSS (Equity Linked Savings Scheme): Shortest lock-in period (only 3 years) among all 80C instruments with high equity growth potential.",
      "Section 80D: Save up to ₹25,000 (self/family) + ₹50,000 (senior citizen parents) on health insurance premiums.",
      "National Pension System (NPS): Exclusive additional deduction of ₹50,000 under Section 80CCD(1B) beyond the 80C limit.",
      "Strategic Tax-Proofing: Avoid paying unnecessary tax on returns by choosing capital gains efficient structures."
    ],
    highlight: "Lowest Lock-in of 3 Years, Dual Benefit of Equity Returns & Tax Deductions.",
    subcategories: ["ELSS Mutual Funds", "National Pension System (NPS)", "Health Insurance (80D)", "Capital Gains Tax Planning"]
  },
  {
    id: "pms-aif",
    title: "PMS & AIF for HNIs",
    tagline: "Bespoke wealth management and sophisticated alternative strategies",
    icon: "Briefcase",
    summary: "Portfolio Management Services (PMS) and Alternative Investment Funds (AIF) are tailored investment vehicles for High Net-Worth Individuals (HNIs) seeking differentiated strategies, concentrated high-conviction portfolios, and market-beating alpha.",
    details: [
      "Direct Security Ownership: In PMS, securities are held directly in the investor's individual Demat account.",
      "Unbiased Empanelment: Partnered with India's top PMS & AIF asset managers based on proprietary quantitative analytics.",
      "Alternative Investment Funds: Opportunities in Private Equity, Venture Debt, Real Estate Yields, and Long-Short Hedge Strategies.",
      "Dedicated Portfolio Manager: Frequent interactions with experienced fund managers, custom reporting, and institutional execution."
    ],
    highlight: "SEBI Regulated, Minimum Ticket ₹50 Lakhs (PMS) / ₹1 Crore (AIF), Concentrated Alpha.",
    subcategories: ["Equity PMS Strategies", "Multi-Asset PMS", "Category II AIF (Private Equity)", "Category III AIF (Hedge Funds)"]
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    id: 1,
    name: "Lalta Prasad Awasthi",
    role: "Business Owner",
    image: "/assets/t1.jpg",
    content: "We thank you for the work you have done for us over the past years. The expertise & attention with which you have handled our financial affairs could not be faulted. Your advice on financial saving has saved us significant amount of money. May you prosper along with your clients.",
    rating: 5,
    location: "Lucknow"
  },
  {
    id: 2,
    name: "Jagmohan Giroti",
    role: "Retired Executive",
    image: "/assets/t2.jpg",
    content: "I have been a client of Assure Securities for five years now and can testify to their professional and friendly approach. They provide the right combination of high-level advice tailored to individual needs and circumstances in a way that makes you feel important. They are a pleasure to deal with.",
    rating: 5,
    location: "Kanpur / Lucknow"
  },
  {
    id: 3,
    name: "Neeraj Kumar Verma",
    role: "Telecom Professional in MNC",
    image: "/assets/t3.jpg",
    content: "They have consistently offered sound and appropriate financial advice. They always spend time discussing and explaining different opportunities for investment with us considering our circumstances and attitude towards risk.",
    rating: 5,
    location: "Noida / Lucknow"
  },
  {
    id: 4,
    name: "Mr. Ashish Dixit",
    role: "Business Head",
    image: "/assets/t4.jpg",
    content: "I have always found the team of Assure Securities helpful and proactive without being pushy. They are interested in building long-term relationships rather than pushing products for the sake of it.",
    rating: 5,
    location: "Lucknow"
  },
  {
    id: 5,
    name: "Pradeep Kumar, H.J.S",
    role: "Registrar, State Consumer Disputes Redressal Commission U.P",
    image: "/assets/pradeep.jpg",
    content: "I have consistently experienced the Assure Securities team to be supportive and proactive, without being excessively assertive. Their focus lies in cultivating enduring relationships, rather than simply promoting products.",
    rating: 5,
    location: "Lucknow"
  }
];

export const INVESTOR_SERVICES = [
  {
    title: "Check KYC Status",
    desc: "Verify your Mutual Fund KYC compliance status instantly on the official Karvy KRA portal.",
    link: "https://www.karvykra.com/UPanSearchGlobalWithPanExempt.aspx",
    portal: "Karvy KRA",
    badge: "SEBI Compliance",
    icon: "UserCheck"
  },
  {
    title: "PAN - Aadhaar Link Status",
    desc: "Check if your PAN is successfully linked to Aadhaar on the Income Tax Department portal.",
    link: "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status",
    portal: "Income Tax Dept",
    badge: "Mandatory",
    icon: "FileCheck"
  },
  {
    title: "Update Email & Mobile (CAMS)",
    desc: "Update your verified mobile number and email ID across all your mutual fund folios via CAMS online.",
    link: "https://www.camsonline.com/Investors/Service-requests/Updation_Email_Id_or_Mobile_No/Update-email",
    portal: "CAMS Online",
    badge: "Contact Sync",
    icon: "PhoneCall"
  },
  {
    title: "Update Nominee (CAMS)",
    desc: "Ensure 100% nominee opt-in or modification for seamless wealth succession on CAMS platform.",
    link: "https://www.camsonline.com/Investors/Service-requests/Nomination/Nomination_Opt-in_or_Opt-out",
    portal: "CAMS Online",
    badge: "Succession",
    icon: "Users"
  },
  {
    title: "Update Nominee (KFintech)",
    desc: "Submit nomination opt-in or modifications for mutual fund folios serviced by KFintech.",
    link: "https://mfs.kfintech.com/investor/General/NCTNomineeUpdation",
    portal: "KFintech",
    badge: "Succession",
    icon: "UserPlus"
  }
];

export const DOWNLOADABLE_FORMS = [
  { name: "Common Mutual Fund Application Form", type: "PDF", category: "Application", size: "1.2 MB" },
  { name: "SIP Auto-Debit (NACH / OTM) Mandate Form", type: "PDF", category: "SIP Mandate", size: "850 KB" },
  { name: "CKYC (Central KYC) Individual Registration Form", type: "PDF", category: "KYC Form", size: "940 KB" },
  { name: "Nomination Opt-in / Change Form", type: "PDF", category: "Compliance", size: "480 KB" },
  { name: "Change of Bank Details (COB) Request Form", type: "PDF", category: "Service", size: "620 KB" },
  { name: "FATCA / CRS Self-Certification Declaration", type: "PDF", category: "Regulatory", size: "390 KB" }
];

export const PARTNER_AMCS = [
  { name: "SBI Mutual Fund", category: "Leading AMC", rating: "AAA" },
  { name: "HDFC Mutual Fund", category: "Leading AMC", rating: "AAA" },
  { name: "ICICI Prudential AMC", category: "Leading AMC", rating: "AAA" },
  { name: "Nippon India Mutual Fund", category: "Leading AMC", rating: "AAA" },
  { name: "Axis Mutual Fund", category: "Leading AMC", rating: "AAA" },
  { name: "Kotak Mahindra AMC", category: "Leading AMC", rating: "AAA" },
  { name: "Mirae Asset Mutual Fund", category: "Leading AMC", rating: "AAA" },
  { name: "Aditya Birla Sun Life AMC", category: "Leading AMC", rating: "AAA" },
  { name: "Tata Mutual Fund", category: "Leading AMC", rating: "AAA" },
  { name: "UTI Mutual Fund", category: "Leading AMC", rating: "AAA" },
  { name: "DSP Mutual Fund", category: "Leading AMC", rating: "AAA" },
  { name: "Bandhan Mutual Fund", category: "Leading AMC", rating: "AAA" }
];

export const EDUCATIONAL_VIDEOS = [
  {
    id: "v1",
    youtubeId: "r1qQpXWcDNQ",
    title: "#MarchToInvest with an Understanding of Mutual Funds",
    category: "Mutual Fund Basics",
    duration: "2:45 min",
    thumbnail: "/assets/yt_thumbs/r1qQpXWcDNQ.jpg",
    remoteThumbnail: "https://img.youtube.com/vi/r1qQpXWcDNQ/hqdefault.jpg",
    description: "Learn how mutual funds pool money from like-minded investors to build diversified portfolios across equities and debt."
  },
  {
    id: "v2",
    youtubeId: "nke3160rCas",
    title: "What is an ELSS? | The Smart Way to Save Taxes & Invest",
    category: "Tax Saving",
    duration: "3:10 min",
    thumbnail: "/assets/yt_thumbs/nke3160rCas.jpg",
    remoteThumbnail: "https://img.youtube.com/vi/nke3160rCas/hqdefault.jpg",
    description: "Discover how Equity Linked Savings Schemes (ELSS) offer dual benefits of 80C tax deduction and highest wealth growth potential with 3 years lock-in."
  },
  {
    id: "v3",
    youtubeId: "6dJmILRJU7E",
    title: "#MarchToInvest with Small & Regular Investments in SIP",
    category: "SIP Compounding",
    duration: "3:20 min",
    thumbnail: "/assets/yt_thumbs/6dJmILRJU7E.jpg",
    remoteThumbnail: "https://img.youtube.com/vi/6dJmILRJU7E/hqdefault.jpg",
    description: "How starting small regular monthly SIP investments allows you to build massive multi-lakh and multi-crore wealth over time."
  },
  {
    id: "v4",
    youtubeId: "o5IZ9huD3OM",
    title: "Even for a Short Term Investment, Mutual Funds Sahi Hai",
    category: "Short-Term Funds",
    duration: "2:50 min",
    thumbnail: "/assets/yt_thumbs/o5IZ9huD3OM.jpg",
    remoteThumbnail: "https://img.youtube.com/vi/o5IZ9huD3OM/hqdefault.jpg",
    description: "Understand liquid funds and ultra-short duration funds as superior alternatives to savings bank accounts for parking surplus cash."
  },
  {
    id: "v5",
    youtubeId: "bCdojayM3PI",
    title: "Make the Right Investments with the Right Mix of Mutual Funds",
    category: "Asset Allocation",
    duration: "3:40 min",
    thumbnail: "/assets/yt_thumbs/bCdojayM3PI.jpg",
    remoteThumbnail: "https://img.youtube.com/vi/bCdojayM3PI/hqdefault.jpg",
    description: "Why asset allocation is the true secret of wealth creation. Balancing equity risk with debt stability across cycles."
  },
  {
    id: "v6",
    youtubeId: "LNQEPP2V6nE",
    title: "Stay Invested for Longer in Mutual Funds to Reap Maximum Benefits",
    category: "Long-Term Wealth",
    duration: "3:15 min",
    thumbnail: "/assets/yt_thumbs/LNQEPP2V6nE.jpg",
    remoteThumbnail: "https://img.youtube.com/vi/LNQEPP2V6nE/hqdefault.jpg",
    description: "Patience and compounding in action: why staying invested across market ups and downs delivers exponential compounding returns."
  },
  {
    id: "v7",
    youtubeId: "TFE-xMOWlQA",
    title: "The Important Things to Consider for a Good Financial Planning",
    category: "Financial Planning",
    duration: "4:05 min",
    thumbnail: "/assets/yt_thumbs/TFE-xMOWlQA.jpg",
    remoteThumbnail: "https://img.youtube.com/vi/TFE-xMOWlQA/hqdefault.jpg",
    description: "Key pillars of holistic financial wellness: emergency reserves, life & health insurance, and goal-tagged SIP investments."
  },
  {
    id: "v8",
    youtubeId: "1XSbjGMHOz8",
    title: "Balance Your Investments in Different Types of Mutual Funds",
    category: "Portfolio Mix",
    duration: "3:30 min",
    thumbnail: "/assets/yt_thumbs/1XSbjGMHOz8.jpg",
    remoteThumbnail: "https://img.youtube.com/vi/1XSbjGMHOz8/hqdefault.jpg",
    description: "Diversifying across large cap, mid cap, dynamic asset allocation, and debt securities according to personal risk tolerance."
  },
  {
    id: "v9",
    youtubeId: "TY5BiqOu6jI",
    title: "Different Mutual Fund Schemes for Different Goals",
    category: "Goal Investing",
    duration: "3:25 min",
    thumbnail: "/assets/yt_thumbs/TY5BiqOu6jI.jpg",
    remoteThumbnail: "https://img.youtube.com/vi/TY5BiqOu6jI/hqdefault.jpg",
    description: "Mapping specific funds to milestones: child higher education, dream house down payment, and retirement security."
  },
  {
    id: "v10",
    youtubeId: "IeRSr6F2NOM",
    title: "What are Equity Funds? | Investing in Stock Market via Mutual Funds",
    category: "Equity Funds",
    duration: "3:55 min",
    thumbnail: "/assets/yt_thumbs/IeRSr6F2NOM.jpg",
    remoteThumbnail: "https://img.youtube.com/vi/IeRSr6F2NOM/hqdefault.jpg",
    description: "Participating in India's economic growth story through equity funds managed by experienced full-time fund managers."
  },
  {
    id: "v11",
    youtubeId: "1e2-KGb3wRg",
    title: "Systematic Transfer Plan (STP): Smart Way to Invest Lumpsum",
    category: "STP Strategy",
    duration: "3:15 min",
    thumbnail: "/assets/yt_thumbs/1e2-KGb3wRg.jpg",
    remoteThumbnail: "https://img.youtube.com/vi/1e2-KGb3wRg/hqdefault.jpg",
    description: "How to deploy lump sum money safely by parking in liquid funds and systematically transferring into equities."
  },
  {
    id: "v12",
    youtubeId: "OwSdwgsvnVQ",
    title: "Types of Mutual Funds | Find the Right Investment for You",
    category: "Fund Categorization",
    duration: "4:12 min",
    thumbnail: "/assets/yt_thumbs/OwSdwgsvnVQ.jpg",
    remoteThumbnail: "https://img.youtube.com/vi/OwSdwgsvnVQ/hqdefault.jpg",
    description: "SEBI classification breakdown: Equity, Debt, Hybrid, Solution-Oriented, and Index Funds explained simply."
  }
];

export const SAMPLE_NAV_DATA = [
  { scheme: "HDFC Top 100 Fund - Growth", category: "Large Cap", nav: "1048.25", change: "+0.84%", ytd: "24.6%" },
  { scheme: "SBI Bluechip Fund - Regular (G)", category: "Large Cap", nav: "92.40", change: "+0.62%", ytd: "21.8%" },
  { scheme: "Nippon India Small Cap Fund (G)", category: "Small Cap", nav: "168.10", change: "+1.42%", ytd: "38.2%" },
  { scheme: "ICICI Pru Balanced Advantage Fund", category: "Hybrid Dynamic", nav: "74.82", change: "+0.35%", ytd: "17.4%" },
  { scheme: "Mirae Asset Large & Midcap Fund", category: "Large & Mid Cap", nav: "142.90", change: "+0.95%", ytd: "28.1%" },
  { scheme: "Kotak Emerging Equity Fund (G)", category: "Mid Cap", nav: "118.45", change: "+1.15%", ytd: "32.7%" }
];

export const RECENT_INSIGHTS = [
  {
    id: 1,
    title: "How to Plan a Fail-Proof Wealth Redesign Strategy in 2026",
    date: "Updated Oct 2026",
    readTime: "4 min read",
    author: "Assure Research Team",
    excerpt: "Reviewing your portfolio asset allocation annually ensures that gains from high-performing equities are rebalanced smoothly into stable assets."
  },
  {
    id: 2,
    title: "Maximizing Tax Deductions under 80C, 80D & 80CCD Ahead of Year End",
    date: "Updated Oct 2026",
    readTime: "5 min read",
    author: "Tax Advisory Wing",
    excerpt: "Why waiting until March leads to suboptimal investments. Discover how structured ELSS SIPs save taxes without stressing your monthly cash flows."
  },
  {
    id: 3,
    title: "Navigating Interest Rate Cycles with Corporate FDs & Debt Funds",
    date: "Updated Oct 2026",
    readTime: "6 min read",
    author: "Fixed Income Desk",
    excerpt: "Locking into attractive AAA corporate fixed deposits and target maturity debt instruments during peak interest rate plateaus."
  }
];

export const LEGAL_DISCLOSURES = {
  riskFactor: "Investments in Mutual Funds are subject to Market Risks. Read all scheme related documents carefully before investing. Mutual Fund Schemes do not assure or guarantee any returns. Past performances of any Mutual Fund Scheme may or may not be sustained in future. There is no guarantee that the investment objective of any suggested scheme shall be achieved. All existing and prospective investors are advised to check and evaluate the Exit loads and other cost structure (TER) applicable at the time of making the investment before finalizing on any investment decision for Mutual Funds schemes.",
  commissionDisclosure: "We deal in Regular Plans only for Mutual Fund Schemes and earn a Trailing Commission on client investments. Disclosure for commission earnings is made to clients at the time of investments in compliance with SEBI regulations. Option of Direct Plan for every Mutual Fund Scheme is available to investors offering advantage of lower expense ratio. We are not entitled to earn any commission on Direct plans. Hence we do not deal in Direct Plans.",
  arnNotice: "AMFI Registered Mutual Fund Distributor | ARN-182137 | Initial date of Registration: 20 July 2021 | Current Validity: 19 July 2027",
  disclaimerText: "These are our terms and conditions for usage of the website, Assure Securities and related services. Assure Securities owns all its contents & related services. The contents of this site & related services are solely the personal views of the contributors. Users are advised to use the data for the purpose of information only and rely on their own judgment while making investment or trading decisions. Assure Securities does not warranty the timeliness, accuracy or quality of electronic content and takes no responsibility for any loss or profit arising out of decisions being made by anyone acting on the analysis published in this website.",
  privacySummary: "Assure Securities is strictly committed to protecting the privacy of its customers. We collect necessary information including Name, PAN, Aadhaar, DOB, Contact & Bank details strictly to perform statutory KYC and regulatory compliance as mandated by SEBI, AMFI, and partner AMCs. We do not sell or lease your personal information to third parties."
};
