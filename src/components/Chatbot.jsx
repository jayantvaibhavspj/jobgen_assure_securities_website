import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, X, Send, Bot, User, Calculator, TrendingUp, 
  ShieldCheck, Phone, ArrowRight, RotateCcw, Sparkles, 
  CheckCircle2, Building2, ExternalLink, HelpCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

// Initial greeting message
const INITIAL_MESSAGES = [
  {
    id: 'welcome-1',
    sender: 'bot',
    text: `Hello! 👋 I'm **Assure Securities Bot**, powered by **jobgen.ai** — your intelligent wealth companion from **Assure Securities** (AMFI Reg. ARN-182137).`,
    timestamp: 'Just now'
  },
  {
    id: 'welcome-2',
    sender: 'bot',
    text: `How can I help you grow and protect your wealth today? You can ask me anything about Mutual Funds, SIP calculations, Tax Saving (ELSS), Corporate FDs, or book a consultation with our Lucknow advisory desk.`,
    timestamp: 'Just now',
    chips: [
      "Calculate SIP Returns",
      "Which Mutual Funds to pick?",
      "Tax Saving (Section 80C)",
      "Corporate FDs vs Bank FDs",
      "Book Free Consultation",
      "Lucknow Office Location"
    ]
  }
];

// Helper to clamp values
const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

/**
 * Stylized AI Brain & Neural Network Visual
 * Integrated with the official Assure brand emblem at the core
 */
function AIBrainVisual({ isTyping, isDragging }) {
  return (
    <div 
      className={`assure-brain-container ${isTyping ? 'brain-active' : ''} ${isDragging ? 'brain-dragging' : ''}`}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        overflow: 'hidden',
        background: '#ffffff',
        boxShadow: isDragging 
          ? '0 20px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(56, 189, 248, 0.6)' 
          : '0 10px 28px rgba(0, 0, 0, 0.5), 0 0 16px rgba(56, 189, 248, 0.35)',
        border: '2px solid rgba(56, 189, 248, 0.7)',
        transition: isDragging ? 'none' : 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <img 
        src="/assets/assure-bot-logo.png" 
        alt="Assure Securities Bot Logo" 
        draggable={false}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%',
          display: 'block',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      />
      {/* Subtle Breathing Glow Aura */}
      <div className="brain-idle-aura" />
    </div>
  );
}

export default function Chatbot({ onOpenModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = sessionStorage.getItem('assure_chat_messages');
      return saved ? JSON.parse(saved) : INITIAL_MESSAGES;
    } catch {
      return INITIAL_MESSAGES;
    }
  });
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Position & Dragging State
  const [pos, setPos] = useState(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 640;
      const btnSize = isMobile ? 60 : 64;
      return {
        x: window.innerWidth - btnSize - 20,
        y: window.innerHeight - btnSize - 24
      };
    }
    return { x: 1200, y: 750 };
  });
  const [isMounted, setIsMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showIntroPopup, setShowIntroPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Quick Mini Calculator State inside chat
  const [calcState, setCalcState] = useState({ amount: 10000, rate: 12, years: 10 });
  const [showInlineCalc, setShowInlineCalc] = useState(false);

  // Quick Callback Form State inside chat
  const [callbackNumber, setCallbackNumber] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Drag Pointer Tracking Ref
  const pointerState = useRef({
    isDown: false,
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    moved: false,
    pointerId: null
  });

  // Calculate safe initial position and load from localStorage
  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    const btnSize = isMobile ? 60 : 64;
    // Extreme corner default: 20px from right, 24px from bottom
    const defaultX = window.innerWidth - btnSize - 20;
    const defaultY = window.innerHeight - btnSize - 24;

    try {
      const saved = localStorage.getItem('assure_ai_brain_pos');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Reset to bottom-right corner if it was anywhere on the left or top
        if (parsed.x < window.innerWidth - 300 || parsed.y < window.innerHeight - 300) {
          setPos({ x: defaultX, y: defaultY });
          localStorage.removeItem('assure_ai_brain_pos');
        } else {
          setPos({
            x: clamp(parsed.x, 8, window.innerWidth - btnSize - 12),
            y: clamp(parsed.y, 55, window.innerHeight - btnSize - 12)
          });
        }
      } else {
        setPos({ x: defaultX, y: defaultY });
      }
    } catch {
      setPos({ x: defaultX, y: defaultY });
    }

    setIsMounted(true);

    // Initial Intro Popup: Show Assure Bot (Powered by jobgen.ai) briefly
    const introTimer = setTimeout(() => {
      setShowIntroPopup(true);
    }, 400);

    // Auto-fade speech bubble after 7 seconds so it doesn't block any buttons
    const autoDismissTimer = setTimeout(() => {
      setShowIntroPopup(false);
    }, 7000);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(autoDismissTimer);
    };
  }, []);

  // Handle Window Resize (Clamp Position)
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      const btnSize = isMobile ? 60 : 64;
      const defaultX = window.innerWidth - btnSize - 20;
      const defaultY = window.innerHeight - btnSize - 24;

      setPos(prev => {
        if (prev.x < window.innerWidth - 300 || prev.y < window.innerHeight - 300) {
          return { x: defaultX, y: defaultY };
        }
        return {
          x: clamp(prev.x, 8, window.innerWidth - btnSize - 8),
          y: clamp(prev.y, 55, window.innerHeight - btnSize - 8)
        };
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, messages, isTyping]);

  // Persist chat to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem('assure_chat_messages', JSON.stringify(messages));
    } catch {}
  }, [messages]);

  // Keyboard accessibility: Escape closes chat
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Play subtle sound using Web Audio API
  const playChime = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {}
  };

  // Reset chat
  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
    setShowInlineCalc(false);
    setCallbackSubmitted(false);
    try {
      sessionStorage.removeItem('assure_chat_messages');
    } catch {}
  };

  // Natural Language Response Generator with Advanced Financial Knowledge & Multilingual Understanding
  const generateBotReply = (query) => {
    const q = query.toLowerCase().trim();

    // Helper for formatting rupees into Lakhs/Crores
    const formatAmount = (num) => {
      if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
      if (num >= 100000) return `₹${(num / 100000).toFixed(2)} Lakhs`;
      return `₹${num.toLocaleString('en-IN')}`;
    };

    // Helper to calculate SIP future value
    const calcFutureValue = (monthlyAmt, years, ratePercent = 12) => {
      const r = ratePercent / 12 / 100;
      const n = years * 12;
      return Math.round(monthlyAmt * ((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    };

    // 0. Extract any numeric monthly SIP amount if mentioned (e.g. 5000, 10000, 25000, 50,000)
    const amountMatch = q.match(/(?:rs\.?|inr|₹)?\s*([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{3,7})/i);
    let parsedAmount = null;
    if (amountMatch) {
      const num = parseInt(amountMatch[1].replace(/,/g, ''), 10);
      if (!isNaN(num) && num >= 500 && num <= 1000000) {
        parsedAmount = num;
      }
    }

    // 1. GREETINGS & HINGLISH CHIT-CHAT
    if (/^(hi|hello|hey|namaste|namaskar|pranam|salaam|kaise ho|kya haal|good morning|good afternoon|good evening|who are you|tum kaun ho|aap kaun ho|kya karte ho|kya kar sakte ho|bot|madad|help)$/i.test(q) ||
        (/\b(namaste|namaskar|pranam|kaise ho|kya haal|kya kar sakte ho)\b/i.test(q) && !q.includes('sip') && !q.includes('invest') && !q.includes('fund'))) {
      return {
        text: `Namaste! 🙏 Main **Assure Securities Bot** hoon (Powered by jobgen.ai). Assure Securities (AMFI Reg. **ARN-182137**) ki taraf se aapka swagat hai!\n\nMain aapki in cheezon mein instant madad kar sakta hoon:\n• **SIP & Compounding:** Return calculate karein aur wealth roadmap banayein\n• **Mutual Funds:** Apne goals ke anusaar sahi Equity, Hybrid ya Debt funds chunein\n• **Tax Saving:** ELSS & Section 80C ke tahat ₹46,800 tak tax bachayein\n• **Corporate FDs:** CRISIL AAA rated FDs mein 8.60% p.a. tak surakshit byaj\n• **Direct AMC Settlement:** 100% Zero Custody Risk guarantee\n\nAap kis topic ke baare mein jaanna chahte hain?`,
        chips: [
          "SIP Calculator Khologe?",
          "Kaise Invest Karein?",
          "Best Mutual Funds",
          "Corporate FD Rates",
          "Senior Advisor Se Baat Karein"
        ]
      };
    }

    // 2. DYNAMIC SIP COMPOUNDING & NUMBER QUERY INTENT
    if (parsedAmount || q.includes('sip') || q.includes('compounding') || q.includes('monthly') || q.includes('har mahine') || q.includes('calculate') || q.includes('calculator') || q.includes('returns') || q.includes('kitna return') || q.includes('kitna milega')) {
      const activeAmount = parsedAmount || 10000;
      setCalcState(prev => ({ ...prev, amount: activeAmount }));
      setShowInlineCalc(true);

      const fv10 = calcFutureValue(activeAmount, 10, 12);
      const inv10 = activeAmount * 120;
      const gain10 = fv10 - inv10;

      const fv15 = calcFutureValue(activeAmount, 15, 12);
      const inv15 = activeAmount * 180;

      const fv20 = calcFutureValue(activeAmount, 20, 12);
      const inv20 = activeAmount * 240;

      return {
        text: `Here is your **SIP Compounding Roadmap** for **₹${activeAmount.toLocaleString('en-IN')}/month** at an assumed **12% p.a.** long-term growth: 📊\n\n• **10 Years:** Total Invested: **${formatAmount(inv10)}** ➔ Expected Value: **${formatAmount(fv10)}** (Wealth Gain: ${formatAmount(gain10)})\n• **15 Years:** Total Invested: **${formatAmount(inv15)}** ➔ Expected Value: **${formatAmount(fv15)}**\n• **20 Years:** Total Invested: **${formatAmount(inv20)}** ➔ Expected Value: **${formatAmount(fv20)}**\n\nCompounding ka asali jaadu 10 saal ke baad shuru hota hai! Niche diye gaye interactive tool se aap duration aur return percentage change karke dekh sakte hain:`,
        chips: [
          "Start SIP with an Advisor",
          "What is Rupee Cost Averaging?",
          "SIP vs Lumpsum (STP)",
          "Tax Saving (ELSS SIP)"
        ]
      };
    }

    // 3. SAFETY, LOSS, RISK & MARKET VOLATILITY WORRIES ("Loss to nahi hoga?", "Market gir gaya to?", "Safe hai?")
    if (q.includes('loss') || q.includes('nuksan') || q.includes('risk') || q.includes('gir gaya') || q.includes('market crash') || q.includes('doob') || q.includes('guarantee') || q.includes('safe') || q.includes('safety') || q.includes('surakshit') || q.includes('bharosa') || q.includes('dar') || q.includes('fraud')) {
      return {
        text: `Yeh bohot hi swabhavik aur zaroori sawaal hai! Aaiye ise clear karte hain:\n\n1️⃣ **Zero Custody Risk:** Assure Securities aapka paisa kabhi apne paas nahi rakhta. Aapka payment direct **Mutual Fund AMC / BSE StAR MF exchange** ko jata hai, aur units aapke PAN/folio mein allot hoti hain.\n2️⃣ **Short-Term Volatility vs Permanent Loss:** Market short term mein upar-niche hota hai, lekin **7+ saal ki diversified equity SIP mein Indian stock market (Sensex/Nifty) ne kabhi negative return nahi diya hai**.\n3️⃣ **Rupee Cost Averaging:** Jab market girta hai, to aapki SIP saste daam (kam NAV) par zyada units khareedti hai. Jab market recover karta hai, to wahi units massive wealth generate karti hain!\n4️⃣ **Fixed & Safe Options:** Agar aap equity market ka risk nahi lena chahte, to hamare paas **CRISIL AAA Rated Corporate FDs** hain jahan 8.60% p.a. tak guaranteed fixed return milta hai.`,
        chips: [
          "Check Safe Corporate FDs (8.6%)",
          "What is Rupee Cost Averaging?",
          "Verify AMFI ARN-182137",
          "Talk to Pradeep Bajpai"
        ]
      };
    }

    // 4. KAISE INVEST KAREIN / GETTING STARTED / ONBOARDING / ACCOUNT OPENING
    if (q.includes('kaise invest') || q.includes('invest kaise') || q.includes('shuru kaise') || q.includes('kaise shuru') || q.includes('how to start') || q.includes('how to invest') || q.includes('process') || q.includes('account opening') || q.includes('nayi shuruat') || q.includes('pehli baar') || q.includes('khata') || q.includes('start investing')) {
      return {
        text: `Assure Securities ke saath investment shuru karna behad aasan aur **100% Paperless** hai (Only 10 Minutes):\n\n1️⃣ **Free e-KYC Verification:** PAN Card aur Aadhaar (Digilocker OTP) ke zariye instant verification.\n2️⃣ **Goal & Risk Profiling:** Hamare senior advisors aapke tenure aur risk appetite ko samajhte hain.\n3️⃣ **Fund Selection:** SEBI & AMFI-vetted top funds aapke portfolio ke liye allocate kiye jaate hain.\n4️⃣ **Bank Mandate Setup:** Auto-debit ke liye UPI/NetBanking mandate authorize karein. Direct AMC settlement (paisa seedha Mutual Fund house mein jata hai).\n\nKya aap aaj apna free onboarding shuru karna chahte hain?`,
        chips: [
          "Start Free e-KYC with Advisor",
          "Calculate My SIP",
          "Documents Kya Chahiye?",
          "Book Free Consultation"
        ]
      };
    }

    // 5. LUMPSUM VS STP ("Ek sath paisa lagana hai")
    if (q.includes('lump') || q.includes('lumpsum') || q.includes('ek sath') || q.includes('ek bar') || q.includes('ek baari') || q.includes('ikhatta') || q.includes('stp') || q.includes('systematic transfer') || q.includes('one time')) {
      return {
        text: `Agar aapke paas bada corpus hai (jaise ₹1 Lakh, ₹5 Lakh ya ₹10 Lakh), to market ke all-time high par pura paisa ek sath Equity mein lagana risky ho sakta hai.\n\n**Best Strategy: STP (Systematic Transfer Plan)**\n1️⃣ Pehle pura lumpsum amount ek safe **Liquid ya Arbitrage Fund** mein park karein (jahan bank savings se behtar ~6.5-7% p.a. byaj banta rahe).\n2️⃣ Us fund se har hafte ya har mahine ek nishchit rashi (e.g., ₹25,000) automatically chune hue Equity Funds mein transfer (STP) hoti rahegi.\n3️⃣ Isse market ke utar-chadhaw ka faida milta hai aur capital bhi safe rehta hai!\n\nAlternative: Agar capital protection chahiye to **AAA Corporate FD** mein invest karein jahan 8.60% p.a. tak fixed byaj milta hai.`,
        chips: [
          "How STP Works",
          "Check Corporate FD Rates",
          "Calculate Lumpsum Growth",
          "Talk to Advisory Desk"
        ]
      };
    }

    // 6. TAX SAVING (ELSS, 80C, 80D, Budget Changes, LTCG)
    if (q.includes('tax') || q.includes('80c') || q.includes('80d') || q.includes('elss') || q.includes('save tax') || q.includes('tax bachaye') || q.includes('income tax') || q.includes('ppf') || q.includes('nps') || q.includes('capital gain') || q.includes('ltcg')) {
      return {
        text: `Aap in proven tools se maximum tax bacha sakte hain:\n\n• **Section 80C (Save up to ₹46,800/yr):** ELSS (Equity Linked Savings Scheme) mein ₹1,50,000 tak invest karein.\n  - **ELSS ka faida:** Sabse chota lock-in period (sirf **3 saal**, jabki PPF mein 15 saal aur Tax FD mein 5 saal) + High Equity Growth!\n• **New Tax Rules (LTCG Exemption):** Equity Mutual Funds mein saal ka **₹1.25 Lakh** tak ka long-term capital gain puri tarah **TAX-FREE** hai!\n• **Section 80D (Health Insurance):** Self aur parents ke health insurance premium par additional ₹25,000 se ₹50,000 tak ki tax deduction.\n\nAap SIP ya lumpsum dono tarike se ELSS shuru kar sakte hain.`,
        chips: [
          "Start ELSS Tax SIP",
          "Compare ELSS vs PPF",
          "Health Insurance under 80D",
          "Book Tax Strategy Session"
        ]
      };
    }

    // 7. CORPORATE FIXED DEPOSITS & SENIOR CITIZENS
    if (q.includes('fd') || q.includes('fixed deposit') || q.includes('byaj') || q.includes('interest rate') || q.includes('bajaj finance') || q.includes('shriram') || q.includes('mahindra') || q.includes('senior citizen') || q.includes('highest fd')) {
      return {
        text: `Assure Securities distributes India's premier **CRISIL AAA & ICRA AA+ Rated Corporate Fixed Deposits**:\n\n• **Interest Rates:** **8.25% se 8.60% p.a.** tak (Bank FDs se 1.5% - 2.0% zyada!)\n• **Senior Citizens Bonus:** Extra **0.25% - 0.50% p.a.** additional return\n• **Trusted Issuers:** Bajaj Finance, Shriram Finance, Mahindra Finance, LIC Housing\n• **Payout Flexibility:** Monthly pension payout, Quarterly, ya Cumulative (maturity par ikhatta).\n• **Doorstep & Digital Support:** Paperless application via Assure Securities desk.`,
        chips: [
          "Check Today's Highest FD Rates",
          "Senior Citizen Monthly Payout",
          "Corporate FD vs Bank FD",
          "Apply for Corporate FD"
        ]
      };
    }

    // 8. RETIREMENT PLANNING & SWP (MONTHLY PENSION)
    if (q.includes('retirement') || q.includes('pension') || q.includes('swp') || q.includes('systematic withdrawal') || q.includes('monthly income') || q.includes('regular income') || q.includes('budhapa') || q.includes('retire')) {
      return {
        text: `**SWP (Systematic Withdrawal Plan)** modern retirement ka sabse smart tool hai:\n\n• **Monthly Regular Income:** Aap apne Mutual Fund corpus se har mahine ek nishchit rashi (e.g. ₹40,000 - ₹1,00,000) seedha apne bank account mein pa sakte hain.\n• **Tax Efficiency:** Bank FD interest par 30%+ slab ke hisaab se heavy tax lagta hai, jabki SWP mein sirf capital gain portion par nominal tax lagta hai — yaani aapka monthly payout lagbhag **Tax-Free** rehta hai!\n• **Capital Appreciation:** Bacha hua corpus conservative hybrid funds mein grow hota rehta hai taaki mehangai (inflation) ko beat kar sake.`,
        chips: [
          "Calculate Retirement Corpus",
          "How SWP Works",
          "Talk to Retirement Specialist",
          "Book Private Meeting"
        ]
      };
    }

    // 9. CHILD HIGHER EDUCATION & MARRIAGE PLANNING
    if (q.includes('child') || q.includes('education') || q.includes('padhai') || q.includes('bachha') || q.includes('bachho') || q.includes('college') || q.includes('marriage') || q.includes('shadi') || q.includes('beti') || q.includes('sukanya')) {
      return {
        text: `Bacchon ki higher education inflation India mein **10-12% p.a.** hai. Jo MBA/MBBS degree aaj ₹25 Lakhs ki hai, 15 saal baad uski cost lagbhag **₹75 Lakhs se ₹1 Crore** hogi!\n\n• **Solution:** Ek disciplined monthly SIP (e.g. ₹10,000/month) 15 saal mein **₹50+ Lakhs** ka corpus tayyar kar sakti hai.\n• **Milestone Based De-risking:** Jab baccha college ke karib pahunchta hai (last 3 saal), to corpus ko equity se safe debt funds mein shift kar diya jata hai taaki capital surakshit rahe.\n\nAssure Securities aapke bacche ke future ke liye dedicated goal portfolio design karta hai.`,
        chips: [
          "Plan Child Education SIP",
          "Sukanya vs Mutual Fund",
          "Calculate College Goal",
          "Book Free Consultation"
        ]
      };
    }

    // 10. GOLD & SOVEREIGN GOLD BONDS (SGB)
    if (q.includes('gold') || q.includes('sgb') || q.includes('sovereign gold') || q.includes('sona') || q.includes('gold etf') || q.includes('gold fund')) {
      return {
        text: `Sona khareedne ka sabse smart aur profitable tarika physical jewellery nahi, balki **SGBs & Gold ETFs** hain:\n\n• **Sovereign Gold Bonds (SGB):**\n  - Sone ke daam badhne ka pura faida\n  - Extra **2.50% p.a. guaranteed interest** har 6 mahine par direct bank account mein\n  - 8 saal maturity par **100% Capital Gains TAX-FREE**\n  - Zero making charges, zero GST, zero theft/locker risk!\n• **Portfolio Allocation:** Har investor ko apne portfolio ka **10% se 15%** gold mein rakhna chahiye inflation hedging ke liye.`,
        chips: [
          "SGB Secondary Market Buying",
          "Gold ETF vs Physical Gold",
          "Portfolio Gold Allocation",
          "Contact Gold Desk"
        ]
      };
    }

    // 11. BONDS & 54EC (PROPERTY SALE CAPITAL GAIN TAX EXEMPTION)
    if (q.includes('54ec') || q.includes('property') || q.includes('zameen') || q.includes('makan') || q.includes('plot') || q.includes('capital gain bond') || q.includes('nhai') || q.includes('rec') || q.includes('pfc') || q.includes('irfc')) {
      return {
        text: `Agar aapne koi zameen, ghar ya commercial property bechi hai aur aapko bhaari Long-Term Capital Gains (LTCG) tax lag raha hai, to **Section 54EC** aapke liye vardaan hai:\n\n• **Tax Exemption:** Aap **₹50 Lakhs** tak Capital Gain Bonds mein invest karke 100% LTCG tax bacha sakte hain.\n• **Issuers:** NHAI, REC, PFC, IRFC (Govt of India backed, AAA rated).\n• **Lock-in:** 5 saal (Interest rate: ~5.25% p.a. paid annually).\n• **Crucial Rule:** Property sale registry ke **6 mahine ke andar** yeh investment karna anivarya hai.\n\nAssure Securities direct bond application aur documentation support provide karta hai.`,
        chips: [
          "54EC Bond Application Support",
          "Other Capital Gain Options",
          "Talk to Tax Advisor",
          "Book Private Meeting"
        ]
      };
    }

    // 12. LIFE & HEALTH INSURANCE (MEDICLAIM, TERM PLAN)
    if (q.includes('insurance') || q.includes('term plan') || q.includes('term insurance') || q.includes('health insurance') || q.includes('mediclaim') || q.includes('bima') || q.includes('super top up') || q.includes('ayushman') || q.includes('policy')) {
      return {
        text: `Financial planning mein Insurance aapka defensive shield hai:\n\n• **Pure Term Life Insurance:** Family ki financial security ke liye aapki annual income ka 10-15 guna cover (e.g. ₹1-2 Crore cover) behad kam premium par.\n• **Comprehensive Health Insurance:** Cashless hospitalization (₹10 Lakh se ₹1 Crore) with 0% co-pay, restoration benefit aur no-claim bonus.\n• **Tax Relief:** Term plan Section 80C mein aur Health cover Section 80D mein tax rebate deta hai.\n\nAssure Securities Care, HDFC ERGO, Star Health, Niva Bupa aur Tata AIG jaise top insurers ke saath tied-up hai.`,
        chips: [
          "Get Term Insurance Quote",
          "Super Top-up Health Cover",
          "Section 80D Deductions",
          "Book Policy Review"
        ]
      };
    }

    // 13. PMS & AIF FOR HIGH NET-WORTH INDIVIDUALS (HNIs)
    if (q.includes('pms') || q.includes('aif') || q.includes('portfolio management') || q.includes('50 lakh') || q.includes('hni') || q.includes('alternate investment') || q.includes('uhni')) {
      return {
        text: `HNIs aur affluent families ke liye jinka investable surplus ₹50 Lakhs+ (PMS) ya ₹1 Crore+ (AIF) hai, Assure Securities bespoke wealth management offer karta hai:\n\n• **Concentrated Portfolios:** 15-25 high-conviction alpha generating stocks directly owned in client's Demat account.\n• **Top Fund Managers:** WhiteOak Capital, Marcellus, ASK Investment, ICICI Prudential PMS, Motilal Oswal.\n• **Dedicated Wealth Manager:** Personalized portfolio rebalancing, private analyst briefings aur quarterly family wealth reviews.`,
        chips: [
          "Schedule HNI Consultation",
          "PMS Performance Tracker",
          "PMS vs Mutual Funds",
          "Request Callback"
        ]
      };
    }

    // 14. MUTUAL FUND RECOMMENDATIONS / CATEGORIES
    if (q.includes('fund') || q.includes('mutual') || q.includes('invest') || q.includes('portfolio') || q.includes('pick') || q.includes('konsa') || q.includes('kaun sa') || q.includes('small cap') || q.includes('mid cap') || q.includes('large cap') || q.includes('flexi cap') || q.includes('multicap') || q.includes('baf') || q.includes('hybrid')) {
      return {
        text: `Koi ek fund sabke liye best nahi hota — sahi fund aapke **Time Horizon** aur **Risk Profile** par depend karta hai:\n\n• **Long Term Wealth (7+ Years):** Flexi-Cap Funds (Parag Parikh, HDFC, Kotak) & Large-and-Mid Cap Funds. (Historical CAGR: 12-15%)\n• **High Growth / High Risk (10+ Years):** Quality Mid-Cap & Small-Cap Funds for aggressive compounding.\n• **Balanced Growth (3-5 Years):** Balanced Advantage Funds (BAFs) & Multi-Asset Allocation Funds (Automatic equity, debt & gold rebalancing).\n• **Low Risk / Short Term (1-3 Years):** Banking & PSU Debt Funds or Corporate FDs.\n\nHamara advisory desk aapke existing portfolio ka **Free Audit** karta hai!`,
        chips: [
          "Review My Existing Portfolio",
          "What is Flexi Cap Fund?",
          "Conservative vs Aggressive",
          "Book Free Advisory Call"
        ]
      };
    }

    // 15. DIRECT VS REGULAR MUTUAL FUNDS & COMMISSIONS
    if (q.includes('direct vs regular') || q.includes('direct fund') || q.includes('commission') || q.includes('kya charge') || q.includes('fees') || q.includes('free') || q.includes('kharcha') || q.includes('cost')) {
      return {
        text: `**Puri Transparency:** Assure Securities AMFI-registered distributor hai aur hum Regular plans distribute karte hain. Hamara trail commission mutual fund houses (AMCs) se aata hai. **Client se koi advisory fee ya hidden charges nahi liye jaate.**\n\n**Direct vs Assure Regular:**\n• Direct funds mein ~0.5% expense ratio bachta hai, lekin research dikhati hai ki **80% se zyada direct DIY investors market crash mein panic sell karke ya galat fund chun kar 3-5% ka nuksan kar lete hain**.\n• Assure Securities ke saath aapko milta hai: Dedicated Advisor, Annual Rebalancing, Tax-Loss Harvesting, Paperless e-KYC aur door-step family claim assistance.`,
        chips: [
          "View Commission Disclosure",
          "Book Free Portfolio Review",
          "Start Disciplined SIP",
          "Talk to Advisor"
        ]
      };
    }

    // 16. EMERGENCY FUND & LIQUID FUNDS
    if (q.includes('emergency fund') || q.includes('liquid fund') || q.includes('savings account') || q.includes('parking money') || q.includes('overnight fund') || q.includes('short term')) {
      return {
        text: `Har vyakti ke paas **6 se 12 mahine ke kharche** ka Emergency Fund hona chahiye.\n\n• Bank savings account mein pada paisa sirf 2.7% - 3.0% byaj deta hai aur mehangai se kamzor hota hai.\n• **Liquid Mutual Funds** mein invest karne par aapko **~6.5% se 7.2% p.a.** return milta hai.\n• **Instant Redemption:** Emergency padne par ₹50,000 ya 90% tak ka paisa 30 minutes ke andar 24x7 aapke bank account mein credit ho jata hai!\n• AAA rated sovereign & T-bill security.`,
        chips: [
          "Start Liquid Fund Parking",
          "Liquid Fund vs FD",
          "Calculate Emergency Corpus",
          "Talk to Advisor"
        ]
      };
    }

    // 17. KYC & DOCUMENTS REQUIRED
    if (q.includes('kyc') || q.includes('document') || q.includes('pan') || q.includes('aadhaar') || q.includes('cheque') || q.includes('paperwork')) {
      return {
        text: `Assure Securities ke saath mutual fund shuru karne ke liye sirf yeh basic documents chahiye (100% Online & Paperless):\n\n1️⃣ **PAN Card** (Mandatory for financial investments)\n2️⃣ **Aadhaar Card** (Address verification via Digilocker OTP)\n3️⃣ **Bank Account Proof** (Cancelled cheque ya passbook copy with name & IFSC)\n4️⃣ **Live Selfie / Photo**\n\nHamara technical desk 10 minute mein aapka online KYC complete karwa deta hai bina kisi charge ke!`,
        chips: [
          "Start Online KYC with Advisor",
          "Send Documents on WhatsApp",
          "Book Advisory Call"
        ]
      };
    }

    // 18. ABOUT ASSURE SECURITIES, AMFI ARN-182137 & PRADEEP BAJPAI
    if (q.includes('about') || q.includes('pradeep') || q.includes('bajpai') || q.includes('arn') || q.includes('amfi') || q.includes('licence') || q.includes('license') || q.includes('founder') || q.includes('owner')) {
      return {
        text: `**Assure Securities** ko lead karte hain **Pradeep Bajpai**, jinke paas Indian capital markets aur wealth management ka **25+ saal** ka vishal anubhav hai:\n\n• **AMFI ARN:** \`ARN-182137\` (Valid till 19 July 2027)\n• **Fiduciary Standard:** 100% compliant with SEBI regulations and AMFI code of conduct.\n• **Zero Custody Risk:** Assure Securities never holds client funds. All transactions settle directly through the official mutual fund houses (AMCs) and BSE StAR MF exchange infrastructure.\n• **Track Record:** 3,500+ satisfied client families across Uttar Pradesh and India.`,
        chips: [
          "Verify on AMFI Portal",
          "Book Meeting with Pradeep Bajpai",
          "Visit Lucknow Office",
          "View Products"
        ]
      };
    }

    // 19. CONSULTATION / MEETING / BOOKING / ADVISOR TALK
    if (q.includes('consultation') || q.includes('advisor') || q.includes('talk') || q.includes('book') || q.includes('meeting') || q.includes('callback') || q.includes('appointment')) {
      return {
        text: `We'd love to assist you! You can book a 1-on-1 personalized portfolio strategy session with our certified wealth advisors.\n\nClick the button below or leave your mobile number directly in this chat, and our advisory desk will connect with you shortly.`,
        action: 'open-consultation',
        chips: [
          "Connect on WhatsApp Now",
          "Call Office (+91 9455555742)",
          "What documents are needed for KYC?"
        ]
      };
    }

    // 20. CONTACT / OFFICE / LOCATION / LUCKNOW
    if (q.includes('contact') || q.includes('office') || q.includes('address') || q.includes('lucknow') || q.includes('phone') || q.includes('call') || q.includes('location') || q.includes('gomti')) {
      return {
        text: `You can reach the Assure Securities team anytime:\n\n📍 **Headquarters:**\n2/163 Vishal Khand, Gomtinagar, Lucknow - 226010, Uttar Pradesh\n\n📞 **Helpline:** +91 9455555742 / 09170707555\n📱 **WhatsApp Direct:** +91 94151 08197\n✉️ **Email:** care@assuresecurities.in\n🕒 **Hours:** Monday – Saturday, 9:30 AM to 6:30 PM\n\nWould you like a senior advisor to call you back today?`,
        chips: [
          "Request a Callback",
          "Chat on WhatsApp",
          "Get Google Maps Route",
          "View ARN Verification"
        ]
      };
    }

    // 21. SMART FALLBACK
    return {
      text: `Thank you for reaching out! Main aapki baat samajh raha hoon. Hamara Gomtinagar, Lucknow advisory desk aapke personalized goals ke mutabiq detailed plan taiyyar karta hai.\n\nAap in popular financial topics mein se kisi par bhi click kar sakte hain ya direct humse connect kar sakte hain:`,
      chips: [
        "Calculate SIP Returns",
        "Kaise Invest Karein?",
        "Best Mutual Funds 2026",
        "Tax Saving (ELSS)",
        "Fixed Deposits & Bonds",
        "Senior Advisor Se Baat Karein"
      ]
    };
  };

  // Handle User Sending a Message
  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate realistic fintech typing delay
    setTimeout(() => {
      const reply = generateBotReply(text);
      playChime();
      setIsTyping(false);

      const botMsg = {
        id: 'bot-' + Date.now(),
        sender: 'bot',
        text: reply.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        chips: reply.chips,
        action: reply.action
      };

      setMessages(prev => [...prev, botMsg]);
    }, 550);
  };

  // Handle Quick Chip Click
  const handleChipClick = (chip) => {
    const consultationChips = [
      "Book Free Consultation", 
      "Book Consultation", 
      "Book Advisory Call", 
      "Start SIP with an Advisor",
      "Senior Advisor Se Baat Karein",
      "Talk to Human Advisor",
      "Talk to Pradeep Bajpai",
      "Book Meeting with Pradeep Bajpai",
      "Start Free e-KYC with Advisor",
      "Schedule HNI Consultation",
      "Book Tax Strategy Session",
      "Book Private Meeting"
    ];

    if (consultationChips.includes(chip)) {
      if (onOpenModal) {
        onOpenModal('consultation');
      } else {
        handleSendMessage(chip);
      }
      return;
    }

    if (chip === "Chat on WhatsApp" || chip === "Connect on WhatsApp Now" || chip === "Chat on WhatsApp Now" || chip === "Send Documents on WhatsApp" || chip === "WhatsApp Desk") {
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Assure%20Securities,%20I%20would%20like%20to%20consult%20an%20advisor.`, '_blank');
      return;
    }

    if (chip === "Get Google Maps Route" || chip === "Visit Lucknow Office" || chip === "Get Google Maps Directions") {
      window.open(COMPANY_INFO.googleMapsUrl, '_blank');
      return;
    }

    if (chip === "Verify on AMFI Portal" || chip === "View ARN Verification") {
      window.open('https://www.amfiindia.com/locate-your-nearest-mutual-fund-distributor-details', '_blank');
      return;
    }

    if (chip === "SIP Calculator Khologe?" || chip === "Calculate SIP Returns" || chip === "Calculate My SIP") {
      setShowInlineCalc(true);
    }

    handleSendMessage(chip);
  };

  // In-Chat SIP Calculator Computation
  const monthlyRate = calcState.rate / 12 / 100;
  const totalMonths = calcState.years * 12;
  const investedAmount = calcState.amount * totalMonths;
  const futureValue = Math.round(
    calcState.amount * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate)
  );
  const wealthGain = futureValue - investedAmount;

  const formatRupees = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} Lakhs`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  // Quick Callback Submit
  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (!callbackNumber.trim()) return;
    setCallbackSubmitted(true);
    setTimeout(() => {
      const ackMsg = {
        id: 'bot-ack-' + Date.now(),
        sender: 'bot',
        text: `Thank you! We have received your request for **${callbackNumber}**. An Assure Securities relationship manager from our Gomtinagar, Lucknow desk will call you within standard working hours.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        chips: ["Explore Mutual Funds", "Calculate SIP Returns", "View Lucknow Address"]
      };
      setMessages(prev => [...prev, ackMsg]);
      setCallbackNumber('');
    }, 500);
  };

  // POINTER EVENT DRAG & CLICK CONTROLLERS
  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return; // Left click / touch only
    e.stopPropagation();

    const startX = e.clientX;
    const startY = e.clientY;
    const initialX = pos.x;
    const initialY = pos.y;
    let hasMoved = false;

    pointerState.current = {
      isDown: true,
      startX,
      startY,
      initialX,
      initialY,
      moved: false,
      pointerId: e.pointerId
    };

    const handleWindowPointerMove = (moveEvt) => {
      if (!pointerState.current.isDown) return;
      const dx = moveEvt.clientX - startX;
      const dy = moveEvt.clientY - startY;
      const distance = Math.hypot(dx, dy);

      // Movement threshold of 5px to distinguish drag vs click
      if (distance > 5) {
        if (!hasMoved) {
          hasMoved = true;
          pointerState.current.moved = true;
          setIsDragging(true);
        }

        const isMobile = window.innerWidth < 640;
        const btnSize = isMobile ? 60 : 64;
        const minX = 8;
        const maxX = window.innerWidth - btnSize - 8;
        const minY = 55;
        const maxY = window.innerHeight - btnSize - 8; // Right down to the extreme corner!

        let targetX = clamp(initialX + dx, minX, maxX);
        let targetY = clamp(initialY + dy, minY, maxY);

        // WhatsApp is at bottom-left (left: 24, bottom: 24). Avoid overlap only if moved directly over bottom-left
        if (targetX < 80 && targetY > window.innerHeight - 90) {
          targetY = Math.max(minY, window.innerHeight - 90 - btnSize);
        }

        setPos({ x: targetX, y: targetY });
      }
    };

    const handleWindowPointerUp = () => {
      window.removeEventListener('pointermove', handleWindowPointerMove);
      window.removeEventListener('pointerup', handleWindowPointerUp);
      window.removeEventListener('pointercancel', handleWindowPointerCancel);

      if (!pointerState.current.isDown) return;
      pointerState.current.isDown = false;

      if (pointerState.current.moved) {
        setTimeout(() => setIsDragging(false), 60);
        // Save freely chosen position to localStorage
        setPos(currentPos => {
          try {
            localStorage.setItem('assure_ai_brain_pos', JSON.stringify(currentPos));
          } catch {}
          return currentPos;
        });
      } else {
        // Plain Click -> Toggle Chat
        setIsDragging(false);
        setIsOpen(prev => !prev);
      }
    };

    const handleWindowPointerCancel = () => {
      window.removeEventListener('pointermove', handleWindowPointerMove);
      window.removeEventListener('pointerup', handleWindowPointerUp);
      window.removeEventListener('pointercancel', handleWindowPointerCancel);
      pointerState.current.isDown = false;
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handleWindowPointerMove, { passive: false });
    window.addEventListener('pointerup', handleWindowPointerUp);
    window.addEventListener('pointercancel', handleWindowPointerCancel);
  };

  // Keyboard navigation for trigger
  const handleKeyDownTrigger = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(prev => !prev);
    }
  };

  // Compute dynamic position for chat window relative to the brain button
  const getChatWindowStyle = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const btnSize = isMobile ? 60 : 64;

    if (isMobile) {
      return {
        position: 'fixed',
        left: '10px',
        right: '10px',
        bottom: '10px',
        width: 'calc(100vw - 20px)',
        height: 'min(580px, calc(100vh - 85px))',
        maxWidth: '100%',
        zIndex: 1200
      };
    }

    const winW = 416;
    const winH = 580;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    const centerX = pos.x + btnSize / 2;
    const centerY = pos.y + btnSize / 2;

    const style = {
      position: 'fixed',
      width: `${winW}px`,
      height: `min(${winH}px, calc(100vh - 100px))`,
      zIndex: 1600
    };

    // Horizontal logic
    if (centerX > screenW / 2) {
      // Brain is on the right side: align right edge near brain or to left
      const rightEdgeDist = screenW - (pos.x + btnSize);
      style.right = `${clamp(rightEdgeDist, 16, screenW - winW - 16)}px`;
    } else {
      // Brain is on the left side: align left edge near brain
      style.left = `${clamp(pos.x, 16, screenW - winW - 16)}px`;
    }

    // Vertical logic
    if (centerY > screenH / 2) {
      // Brain is in bottom half: open above button
      const bottomDist = screenH - pos.y + 12;
      style.bottom = `${clamp(bottomDist, 16, screenH - winH - 16)}px`;
    } else {
      // Brain is in top half: open below button
      const topDist = pos.y + btnSize + 12;
      style.top = `${clamp(topDist, 70, screenH - winH - 16)}px`;
    }

    return style;
  };

  // Do not render before mount to prevent hydration mismatch
  if (!isMounted) return null;

  const isMobile = window.innerWidth < 640;
  const btnSize = isMobile ? 60 : 64;
  const safeX = (pos.x && pos.x > 300) ? pos.x : (typeof window !== 'undefined' ? window.innerWidth - btnSize - 20 : 1200);
  const safeY = (pos.y && pos.y > 300) ? pos.y : (typeof window !== 'undefined' ? window.innerHeight - btnSize - 24 : 700);
  const isRightHalf = safeX > window.innerWidth / 2;
  const isBottomHalf = safeY > window.innerHeight / 2;

  return (
    <>
      {/* 1. Independent Floating WhatsApp Button (Bottom-Left with Official WhatsApp Logo) */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Assure%20Securities,%20I%20would%20like%20to%20consult%20with%20an%20advisor.`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#ffffff',
          display: isMobile && isOpen ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.4)',
          zIndex: 980,
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease'
        }}
        title="Connect on WhatsApp: +91 94151 08197"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 211, 102, 0.65)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.5)';
        }}
        aria-label="Connect with Assure Securities on WhatsApp"
      >
        {/* Official WhatsApp SVG Vector Logo */}
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.17 8.17 0 01-5.82 2.42c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24zm4.8 11.64c-.26-.13-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.13-.18.26-.69.86-.84 1.04-.16.18-.31.2-.58.07-.26-.13-1.11-.41-2.12-1.31-.78-.7-1.31-1.56-1.46-1.82-.16-.26-.02-.4.11-.53.12-.12.26-.31.4-.46.13-.16.18-.26.26-.44.09-.18.04-.33-.02-.46-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.45-.6-.46-.16-.01-.33-.01-.51-.01-.18 0-.46.07-.71.33-.24.26-.93.91-.93 2.22s.95 2.58 1.09 2.76c.13.18 1.88 2.87 4.55 4.02.64.28 1.13.44 1.52.56.64.2 1.22.18 1.68.11.51-.08 1.56-.64 1.78-1.25.22-.62.22-1.14.16-1.25-.07-.12-.24-.19-.51-.32z"/>
        </svg>
      </a>

      {/* 2. Draggable AI Brain Button Anchor */}
      <div 
        style={{
          position: 'fixed',
          left: `${safeX}px`,
          top: `${safeY}px`,
          width: `${btnSize}px`,
          height: `${btnSize}px`,
          zIndex: 1500,
          touchAction: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none'
        }}
      >
        {/* Intro Greeting Speech Card (Assure Bot • Powered by jobgen.ai) */}
        {showIntroPopup && !isOpen && !isDragging && (
          <div 
            onClick={() => { setIsOpen(true); }}
            style={{
              position: 'absolute',
              bottom: isBottomHalf ? `${btnSize + 14}px` : 'auto',
              top: !isBottomHalf ? `${btnSize + 14}px` : 'auto',
              right: isRightHalf ? '0' : 'auto',
              left: !isRightHalf ? '0' : 'auto',
              minWidth: '255px',
              maxWidth: 'min(300px, calc(100vw - 32px))',
              background: '#0B0F17',
              borderRadius: '16px',
              padding: '12px 14px',
              boxShadow: '0 20px 45px -8px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(56, 189, 248, 0.3)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              animation: 'introCardFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: 'auto',
              cursor: 'pointer',
              zIndex: 1650
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <img 
                  src="/assets/assure-bot-logo.png" 
                  alt="Assure Securities Bot Logo" 
                  draggable={false}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    flexShrink: 0,
                    border: '1.5px solid rgba(56, 189, 248, 0.5)',
                    boxShadow: '0 0 10px rgba(56, 189, 248, 0.25)',
                    marginTop: '2px',
                    pointerEvents: 'none'
                  }}
                />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.94rem', color: '#ffffff', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                    Assure Securities
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.90rem', color: '#38BDF8', letterSpacing: '-0.01em' }}>
                      Bot
                    </span>
                    <span style={{ fontSize: '0.58rem', background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '1px 5px', borderRadius: '4px', fontWeight: 700 }}>
                      ONLINE
                    </span>
                  </div>
                  
                  {/* Chota sa niche powered by jobgen.ai */}
                  <div style={{
                    fontSize: '0.67rem',
                    color: '#94A3B8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: '3px',
                    marginBottom: '6px'
                  }}>
                    <span>powered by</span>
                    <strong style={{ color: '#38BDF8', fontWeight: 700 }}>jobgen.ai</strong>
                  </div>

                  <div style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 500, lineHeight: 1.4 }}>
                    Hi! Ask me about SIPs, Top Mutual Funds & Wealth Advisory.
                  </div>
                </div>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowIntroPopup(false); }}
                style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: '#94A3B8', cursor: 'pointer', padding: '4px', display: 'flex', borderRadius: '50%', transition: 'background 0.2s', flexShrink: 0 }}
                aria-label="Close greeting"
                title="Dismiss"
              >
                <X size={13} />
              </button>
            </div>
            
            <div style={{ marginTop: '8px', paddingTop: '7px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.7rem', color: '#10B981', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>Click to open chat</span>
              <span style={{ opacity: 0.6, fontSize: '0.65rem', color: '#94A3B8' }}>Drag anywhere ⇄</span>
            </div>

            {/* Speech bubble pointer notch */}
            <div 
              style={{
                position: 'absolute',
                [isBottomHalf ? 'bottom' : 'top']: '-6px',
                [isRightHalf ? 'right' : 'left']: `${Math.min(btnSize / 2 - 4, 32)}px`,
                width: '10px',
                height: '10px',
                background: '#0B0F17',
                borderRight: '1px solid rgba(56, 189, 248, 0.35)',
                borderBottom: isBottomHalf ? '1px solid rgba(56, 189, 248, 0.35)' : 'none',
                borderTop: !isBottomHalf ? '1px solid rgba(56, 189, 248, 0.35)' : 'none',
                transform: 'rotate(45deg)',
                pointerEvents: 'none'
              }}
            />
          </div>
        )}

        {/* Persistent Bot Name Pill attached to launcher when card is dismissed */}
        {!showIntroPopup && !isOpen && !isDragging && (
          <div 
            onClick={() => setShowIntroPopup(true)}
            style={{
              position: 'absolute',
              bottom: isBottomHalf ? `${btnSize + 10}px` : 'auto',
              top: !isBottomHalf ? `${btnSize + 10}px` : 'auto',
              right: isRightHalf ? '0' : 'auto',
              left: !isRightHalf ? '0' : 'auto',
              background: '#0B0F17',
              borderRadius: '12px',
              padding: '6px 12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: isRightHalf ? 'flex-end' : 'flex-start',
              gap: '2px',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(56, 189, 248, 0.35)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              animation: 'introCardFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: 'auto',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              zIndex: 1640
            }}
            title="Click to show info"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ fontWeight: 800, fontSize: '0.82rem', color: '#ffffff', letterSpacing: '-0.01em' }}>
                Assure Securities
              </span>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }} />
            </div>
            <div style={{ fontSize: '0.67rem', color: '#94A3B8' }}>
              <strong style={{ color: '#38BDF8' }}>Bot</strong> • powered by <strong style={{ color: '#38BDF8' }}>jobgen.ai</strong>
            </div>
          </div>
        )}

        {/* Main Circular AI Brain Trigger */}
        <div
          role="button"
          tabIndex={0}
          aria-label={isOpen ? "Close Assure AI assistant" : "Open Assure AI assistant (Draggable)"}
          aria-expanded={isOpen}
          onPointerDown={handlePointerDown}
          onKeyDown={handleKeyDownTrigger}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            width: '100%',
            height: '100%',
            cursor: isDragging ? 'grabbing' : 'grab',
            position: 'relative',
            outline: 'none',
            transform: isDragging ? 'scale(1.08)' : isHovered ? 'scale(1.04)' : 'scale(1)',
            transition: isDragging ? 'none' : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            filter: isDragging ? 'drop-shadow(0 15px 25px rgba(0, 0, 0, 0.7))' : 'none'
          }}
        >
          {isOpen ? (
            <div 
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#090a0d',
                border: '1.5px solid var(--color-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 0 16px var(--color-gold-glow)'
              }}
            >
              <X size={22} color="var(--color-gold)" />
            </div>
          ) : (
            <>
              <AIBrainVisual isTyping={isTyping} isDragging={isDragging} />

              {/* Online Ready Indicator Dot */}
              <div 
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  width: '11px',
                  height: '11px',
                  background: 'var(--color-gold)',
                  borderRadius: '50%',
                  border: '2px solid #090a0d',
                  boxShadow: '0 0 8px var(--color-gold)',
                  zIndex: 4
                }}
                title="Assure AI: Online & Ready"
              >
                <span className="live-status-ping" />
              </div>
            </>
          )}
          </div>
        </div>

      {/* 3. Intelligently Positioned Chatbot Window */}
      {isOpen && (
        <div 
          style={{
            ...getChatWindowStyle(),
            background: '#0e1117',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: isMobile ? '12px 12px 0 0' : '4px',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 20px rgba(16, 185, 129, 0.1)',
            border: '1px solid var(--color-gold-border)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'chatWindowPop 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Header */}
          <div 
            style={{
              background: '#121620',
              color: 'var(--color-text)',
              padding: '0.95rem 1.15rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--color-border)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img 
                src="/assets/assure-bot-logo.png" 
                alt="Assure Securities Bot Logo" 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1.5px solid rgba(56, 189, 248, 0.45)',
                  boxShadow: '0 0 10px rgba(56, 189, 248, 0.25)',
                  flexShrink: 0
                }}
              />
              <div>
                <div style={{ fontSize: '0.94rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#ffffff', letterSpacing: '-0.01em', fontWeight: 800 }}>Assure Securities Bot</span>
                  <a 
                    href="https://jobgen.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Powered by jobgen.ai"
                    style={{ 
                      fontSize: '0.62rem', 
                      background: 'rgba(56, 189, 248, 0.12)', 
                      border: '1px solid rgba(56, 189, 248, 0.35)', 
                      color: '#38BDF8', 
                      padding: '2px 7px', 
                      borderRadius: '12px', 
                      fontWeight: 700, 
                      letterSpacing: '0.04em',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '3px'
                    }}
                  >
                    <span>POWERED BY JOBGEN.AI</span>
                    <ExternalLink size={9} />
                  </a>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px', fontFamily: 'var(--font-mono)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                  <span>ARN-182137 Certified • Online Advisory</span>
                </div>
              </div>
            </div>

            {/* Header Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={handleReset}
                title="Reset Conversation"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-muted)',
                  padding: '6px',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                aria-label="Reset conversation"
              >
                <RotateCcw size={14} />
              </button>
              
              <button
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-muted)',
                  padding: '6px',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                aria-label="Close chat window"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Direct AMC Settlement Strip */}
          <div 
            style={{
              background: '#090a0d',
              color: 'var(--color-text-secondary)',
              padding: '6px 14px',
              fontSize: '0.72rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--color-border)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={13} color="var(--color-gold)" />
              <span>Direct AMC Settlement • Zero Custody Risk</span>
            </div>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Assure%20Securities,%20I%20am%20chatting%20on%20the%20website%20and%20want%20to%20connect%20with%20an%20advisor.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--color-gold)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 600 }}
            >
              WhatsApp <ExternalLink size={10} />
            </a>
          </div>

          {/* Message List */}
          <div 
            style={{
              flex: 1,
              padding: '1.25rem 1rem',
              overflowY: 'auto',
              background: '#090a0d',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div 
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isBot ? 'flex-start' : 'flex-end',
                    maxWidth: '100%'
                  }}
                >
                  <div 
                    style={{
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'flex-start',
                      maxWidth: '88%',
                      flexDirection: isBot ? 'row' : 'row-reverse'
                    }}
                  >
                    {/* Avatar */}
                    <div 
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '2px',
                        background: isBot ? '#121620' : 'rgba(16, 185, 129, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                        border: isBot ? '1px solid var(--color-border)' : '1px solid var(--color-gold)'
                      }}
                    >
                      {isBot ? (
                        <img 
                          src="/assets/assure-bot-logo.png" 
                          alt="Assure Securities Bot" 
                          style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover' }} 
                        />
                      ) : (
                        <User size={14} color="var(--color-text)" />
                      )}
                    </div>

                    {/* Bubble */}
                    <div 
                      style={{
                        background: isBot ? '#121620' : 'rgba(16, 185, 129, 0.12)',
                        color: isBot ? 'var(--color-text-secondary)' : 'var(--color-text)',
                        padding: '10px 14px',
                        borderRadius: '2px',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                        border: isBot ? '1px solid var(--color-border)' : '1px solid var(--color-gold-border)',
                        fontSize: '0.88rem',
                        lineHeight: 1.6,
                        wordBreak: 'break-word',
                        whiteSpace: 'pre-line'
                      }}
                    >
                      {msg.text.split('\n').map((paragraph, idx) => {
                        const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                        return (
                          <p key={idx} style={{ margin: idx === 0 ? 0 : '0.45rem 0 0 0' }}>
                            {parts.map((part, pIdx) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={pIdx} style={{ fontWeight: 600, color: 'var(--color-gold)' }}>{part.slice(2, -2)}</strong>;
                              }
                              return part;
                            })}
                          </p>
                        );
                      })}

                      {/* Bot Action Buttons inside bubble */}
                      {msg.action === 'open-consultation' && (
                        <button
                          onClick={() => onOpenModal && onOpenModal('consultation')}
                          className="btn-gold"
                          style={{
                            marginTop: '0.75rem',
                            padding: '6px 12px',
                            fontSize: '0.78rem',
                            height: '36px',
                            width: '100%',
                            justifyContent: 'center'
                          }}
                        >
                          <span>Open Consultation Booking Form</span>
                          <ArrowRight size={13} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Timestamp */}
                  <span 
                    style={{
                      fontSize: '0.64rem',
                      color: 'var(--color-text-muted)',
                      marginTop: '3px',
                      marginLeft: isBot ? '36px' : '0',
                      marginRight: isBot ? '0' : '36px',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {msg.timestamp}
                  </span>

                  {/* Quick Action Chips attached to message */}
                  {msg.chips && msg.chips.length > 0 && (
                    <div 
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginTop: '8px',
                        marginLeft: isBot ? '36px' : '0'
                      }}
                    >
                      {msg.chips.map((chip, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={() => handleChipClick(chip)}
                          style={{
                            background: '#121620',
                            color: 'var(--color-gold)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '2px',
                            padding: '4px 10px',
                            fontSize: '0.74rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            transition: 'all 0.2s ease',
                            fontFamily: 'var(--font-mono)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-gold)';
                            e.currentTarget.style.background = 'var(--color-gold-dim)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--color-border)';
                            e.currentTarget.style.background = '#121620';
                          }}
                        >
                          <span>{chip}</span>
                          <ArrowRight size={10} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Inline Mini SIP Calculator Component */}
            {showInlineCalc && (
              <div 
                style={{
                  background: '#121620',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px rgba(16, 185, 129, 0.15)',
                  fontSize: '0.84rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#f8fafc' }}>
                    <Calculator size={15} color="#10B981" />
                    <span>Quick SIP Modeler</span>
                  </div>
                  <span style={{ fontSize: '0.7rem', background: 'rgba(16, 185, 129, 0.15)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>
                    Live Preview
                  </span>
                </div>

                {/* Amount Slider */}
                <div style={{ marginBottom: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: '#94a3b8', marginBottom: '4px' }}>
                    <span>Monthly SIP:</span>
                    <strong style={{ color: '#38bdf8' }}>₹{calcState.amount.toLocaleString('en-IN')}</strong>
                  </div>
                  <input 
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={calcState.amount}
                    onChange={(e) => setCalcState({ ...calcState, amount: Number(e.target.value) })}
                    style={{ width: '100%', accentColor: '#10B981', cursor: 'pointer' }}
                  />
                </div>

                {/* Duration Slider */}
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: '#94a3b8', marginBottom: '4px' }}>
                    <span>Tenure:</span>
                    <strong style={{ color: '#38bdf8' }}>{calcState.years} Years</strong>
                  </div>
                  <input 
                    type="range"
                    min="3"
                    max="30"
                    step="1"
                    value={calcState.years}
                    onChange={(e) => setCalcState({ ...calcState, years: Number(e.target.value) })}
                    style={{ width: '100%', accentColor: '#10B981', cursor: 'pointer' }}
                  />
                </div>

                {/* Results Card */}
                <div 
                  style={{
                    background: '#090a0d',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Invested: ₹{(investedAmount / 100000).toFixed(2)}L</div>
                    <div style={{ fontSize: '0.68rem', color: '#10B981', fontWeight: 600 }}>Gain: +₹{(wealthGain / 100000).toFixed(2)}L</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.66rem', color: '#94a3b8' }}>Maturity Value</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#10B981' }}>{formatRupees(futureValue)}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleSendMessage(`I calculated ₹${calcState.amount}/month for ${calcState.years} years (Maturity: ${formatRupees(futureValue)}). Please advise me on which mutual funds can help achieve this.`)}
                  style={{
                    marginTop: '10px',
                    width: '100%',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    color: '#34d399',
                    padding: '6px',
                    borderRadius: '6px',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(16, 185, 129, 0.25)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(16, 185, 129, 0.12)'}
                >
                  Ask Advisor About This Goal →
                </button>
              </div>
            )}

            {/* Quick Callback Request Box */}
            <div 
              style={{
                background: '#121620',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '9px 12px',
                fontSize: '0.78rem'
              }}
            >
              <div style={{ fontWeight: 600, color: '#e2e8f0', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Phone size={12} color="#10B981" />
                <span>Want a callback from Lucknow Advisory Desk?</span>
              </div>
              <form onSubmit={handleCallbackSubmit} style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                <input 
                  type="tel"
                  placeholder="Enter 10-digit Mobile No."
                  value={callbackNumber}
                  onChange={(e) => setCallbackNumber(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '6px 10px',
                    borderRadius: '5px',
                    background: '#090a0d',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#ffffff',
                    fontSize: '0.78rem',
                    outline: 'none'
                  }}
                  maxLength={13}
                />
                <button
                  type="submit"
                  style={{
                    background: '#10B981',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '0 12px',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Request
                </button>
              </form>
            </div>

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginLeft: '8px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#071A2F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bot size={13} color="#16B981" />
                </div>
                <div 
                  style={{
                    background: '#ffffff',
                    border: '1px solid #E5EAF0',
                    padding: '8px 12px',
                    borderRadius: '14px',
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16B981', animation: 'bounceDot 1.2s infinite 0s' }} />
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16B981', animation: 'bounceDot 1.2s infinite 0.2s' }} />
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16B981', animation: 'bounceDot 1.2s infinite 0.4s' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div 
            style={{
              padding: '0.85rem 1rem',
              background: '#090a0d',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <input 
              ref={inputRef}
              type="text"
              placeholder="Ask about SIP, mutual funds, tax saving..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '2px',
                border: '1px solid var(--color-border)',
                background: '#121620',
                fontSize: '0.88rem',
                outline: 'none',
                transition: 'border-color 0.2s',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-sans)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim()}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '2px',
                background: inputMessage.trim() ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.05)',
                color: inputMessage.trim() ? '#090a0d' : 'var(--color-text-muted)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputMessage.trim() ? 'pointer' : 'default',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              title="Send Message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Embedded Animations for Brain, Synapses, and Windows */}
      <style>{`
        @keyframes introCardFadeIn {
          0% { opacity: 0; transform: translateY(8px) scale(0.96); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes tooltipFade {
          0% { opacity: 0; transform: translateX(-50%) translateY(-2px); }
          100% { opacity: 1; transform: translateX(-50%) translateY(-8px); }
        }
        @keyframes chatWindowPop {
          0% { opacity: 0; transform: scale(0.96) translateY(8px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes bounceDot {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.5; }
          40% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes livePing {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes brainAuraBreathing {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes nodePulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes activeSynapseSpin {
          0% { stroke-dashoffset: 0; transform: rotate(0deg); }
          100% { stroke-dashoffset: 48; transform: rotate(360deg); }
        }

        .live-status-ping {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 1.5px solid #10B981;
          animation: livePing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .brain-idle-aura {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 1px solid rgba(22, 185, 129, 0.25);
          animation: brainAuraBreathing 4s ease-in-out infinite;
          pointer-events: none;
        }

        .neural-node {
          transform-origin: center;
        }
        .pulse-node-1 { animation: nodePulseGlow 3s ease-in-out infinite 0s; }
        .pulse-node-2 { animation: nodePulseGlow 3s ease-in-out infinite 1s; }
        .pulse-node-3 { animation: nodePulseGlow 3s ease-in-out infinite 2s; }

        .brain-pulse-ring {
          transform-origin: 32px 32px;
          animation: activeSynapseSpin 3s linear infinite;
        }

        /* Reduced Motion Compliance */
        @media (prefers-reduced-motion: reduce) {
          .live-status-ping,
          .brain-idle-aura,
          .pulse-node-1,
          .pulse-node-2,
          .pulse-node-3,
          .brain-pulse-ring {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}

