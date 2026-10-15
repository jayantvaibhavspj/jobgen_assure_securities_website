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
    text: `Hello! 👋 I'm **Assure AI**, your intelligent wealth companion from **Assure Securities** (AMFI Reg. ARN-182137).`,
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
        background: 'radial-gradient(circle at 35% 35%, #0F2A4A 0%, #071A2F 65%, #030D18 100%)',
        boxShadow: isDragging 
          ? '0 20px 45px rgba(7, 26, 47, 0.6), 0 0 25px rgba(22, 185, 129, 0.45)' 
          : '0 10px 28px rgba(7, 26, 47, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.15)',
        border: '1.5px solid rgba(22, 185, 129, 0.55)',
        transition: isDragging ? 'none' : 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Background Neural Circuitry SVG */}
      <svg 
        viewBox="0 0 64 64" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      >
        <defs>
          <linearGradient id="brainSynapseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="brainCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(22, 185, 129, 0.35)" />
            <stop offset="100%" stopColor="rgba(7, 26, 47, 0)" />
          </radialGradient>
        </defs>

        {/* Ambient Core Radial Halo */}
        <circle cx="32" cy="32" r="28" fill="url(#brainCoreGlow)" />

        {/* Left Cerebral Lobe Circuitry */}
        <path 
          d="M 22 13 C 14 13 9 19 9 27 C 9 34 13 41 18 47 C 22 51 25 53 26 54" 
          fill="none" 
          stroke="rgba(56, 189, 248, 0.45)" 
          strokeWidth="1.4" 
          strokeLinecap="round" 
        />
        {/* Right Cerebral Lobe Circuitry */}
        <path 
          d="M 42 13 C 50 13 55 19 55 27 C 55 34 51 41 46 47 C 42 51 39 53 38 54" 
          fill="none" 
          stroke="rgba(16, 185, 129, 0.45)" 
          strokeWidth="1.4" 
          strokeLinecap="round" 
        />

        {/* Synaptic Radiating Connectors */}
        <path d="M 14 23 L 23 27 L 32 32" fill="none" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" strokeDasharray={isTyping ? "3,2" : "none"} className={isTyping ? "synapse-flow" : ""} />
        <path d="M 50 23 L 41 27 L 32 32" fill="none" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1" strokeDasharray={isTyping ? "3,2" : "none"} className={isTyping ? "synapse-flow" : ""} />
        <path d="M 11 34 L 20 34 L 32 32" fill="none" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" />
        <path d="M 53 34 L 44 34 L 32 32" fill="none" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1" />
        <path d="M 18 45 L 25 41 L 32 32" fill="none" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1" />
        <path d="M 46 45 L 39 41 L 32 32" fill="none" stroke="rgba(16, 185, 129, 0.35)" strokeWidth="1" />

        {/* Synaptic Neural Nodes */}
        <circle cx="14" cy="23" r="2.2" fill="#38BDF8" className="neural-node pulse-node-1" />
        <circle cx="50" cy="23" r="2.2" fill="#10B981" className="neural-node pulse-node-2" />
        <circle cx="11" cy="34" r="2" fill="#38BDF8" className="neural-node pulse-node-3" />
        <circle cx="53" cy="34" r="2" fill="#10B981" className="neural-node pulse-node-1" />
        <circle cx="18" cy="45" r="2.2" fill="#38BDF8" className="neural-node pulse-node-2" />
        <circle cx="46" cy="45" r="2.2" fill="#10B981" className="neural-node pulse-node-3" />
        <circle cx="23" cy="27" r="1.6" fill="#A7F3D0" />
        <circle cx="41" cy="27" r="1.6" fill="#BAE6FD" />
        <circle cx="25" cy="41" r="1.6" fill="#BAE6FD" />
        <circle cx="39" cy="41" r="1.6" fill="#A7F3D0" />

        {/* Active Thought Flow Ring */}
        {isTyping && (
          <circle 
            cx="32" 
            cy="32" 
            r="16" 
            fill="none" 
            stroke="url(#brainSynapseGrad)" 
            strokeWidth="1.5" 
            strokeDasharray="14 10" 
            className="brain-pulse-ring" 
          />
        )}
      </svg>

      {/* Central Assure Brand Core Emblem */}
      <div 
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'rgba(7, 26, 47, 0.85)',
          backdropFilter: 'blur(4px)',
          border: '1.5px solid rgba(22, 185, 129, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 12px rgba(22, 185, 129, 0.4), inset 0 0 6px rgba(56, 189, 248, 0.3)',
          zIndex: 2,
          position: 'relative'
        }}
      >
        <img 
          src="/assets/favicon.png" 
          alt="Assure Securities Logo" 
          style={{
            width: '18px',
            height: '18px',
            objectFit: 'contain',
            borderRadius: '4px',
            filter: 'brightness(1.1)'
          }}
          onError={(e) => {
            // Elegant SVG fallback if favicon image takes time
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

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
  const [pos, setPos] = useState({ x: 0, y: 0 });
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
    const defaultX = window.innerWidth - btnSize - 24;
    const defaultY = window.innerHeight - btnSize - 88; // 88px leaves room for WhatsApp at bottom: 24

    try {
      const saved = localStorage.getItem('assure_ai_brain_pos');
      if (saved) {
        const parsed = JSON.parse(saved);
        const minX = isMobile ? 12 : 20;
        const maxX = window.innerWidth - btnSize - minX;
        const minY = window.innerWidth < 768 ? 60 : 70;
        const maxY = window.innerHeight - btnSize - minX;

        setPos({
          x: clamp(parsed.x, minX, maxX),
          y: clamp(parsed.y, minY, maxY)
        });
      } else {
        setPos({ x: defaultX, y: defaultY });
      }
    } catch {
      setPos({ x: defaultX, y: defaultY });
    }

    setIsMounted(true);

    // Initial Intro Popup: Show once per session for 5 seconds
    const hasSeenIntro = sessionStorage.getItem('assure_ai_intro_seen');
    if (!hasSeenIntro) {
      const introTimer = setTimeout(() => {
        setShowIntroPopup(true);
      }, 700);

      const hideTimer = setTimeout(() => {
        setShowIntroPopup(false);
        sessionStorage.setItem('assure_ai_intro_seen', 'true');
      }, 5700);

      return () => {
        clearTimeout(introTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  // Handle Window Resize (Clamp Position)
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      const btnSize = isMobile ? 60 : 64;
      const minX = isMobile ? 12 : 20;
      const maxX = window.innerWidth - btnSize - minX;
      const minY = window.innerWidth < 768 ? 60 : 70;
      const maxY = window.innerHeight - btnSize - minX;

      setPos(prev => ({
        x: clamp(prev.x, minX, maxX),
        y: clamp(prev.y, minY, maxY)
      }));
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
      setShowIntroPopup(false);
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

  // Natural Language Response Generator
  const generateBotReply = (query) => {
    const q = query.toLowerCase().trim();

    // 1. SIP Calculator intent
    if (q.includes('sip') || q.includes('calculate') || q.includes('calculator') || q.includes('returns') || q.includes('10000') || q.includes('5000')) {
      setShowInlineCalc(true);
      return {
        text: `Here is our **Instant SIP Growth Modeler**! 📊\n\nA regular SIP of **₹10,000/month** at **12% p.a.** projected return over **10 years** can turn your total investment of **₹12,00,000** into approximately **₹23,23,391** (wealth gain of ₹11.23 Lakhs)!\n\nYou can customize the numbers using the interactive tool below:`,
        chips: [
          "Start SIP with an Advisor",
          "What is Rupee Cost Averaging?",
          "Equity vs Hybrid Funds",
          "Tax Saving (ELSS)"
        ]
      };
    }

    // 2. Tax Saving / 80C
    if (q.includes('tax') || q.includes('80c') || q.includes('elss') || q.includes('save tax')) {
      return {
        text: `Under Section 80C of the Income Tax Act, you can invest up to **₹1,50,000** annually in **ELSS (Equity Linked Savings Schemes)** to save up to **₹46,800** in tax (under the old tax regime).\n\n**Why ELSS over PPF/FD?**\n• Shortest lock-in period of just **3 years** (vs 5 yrs for tax FD, 15 yrs for PPF)\n• High wealth creation potential through equity markets\n• Option to invest monthly via disciplined SIP.`,
        chips: [
          "Compare ELSS with PPF",
          "Start ELSS SIP Now",
          "Book Consultation",
          "Direct AMC Settlement"
        ]
      };
    }

    // 3. Corporate FDs & Bonds
    if (q.includes('fd') || q.includes('fixed deposit') || q.includes('bond') || q.includes('interest rate')) {
      return {
        text: `Assure Securities distributes high-rated **Corporate Fixed Deposits** from premier institutions like **Bajaj Finance, Shriram Finance, Mahindra Finance, and HDFC Ltd.**\n\n**Key Highlights:**\n• Attractive interest rates up to **8.25% - 8.60% p.a.**\n• Additional **0.25% - 0.50%** for Senior Citizens\n• AAA and AA+ credit ratings by CRISIL / ICRA for maximum capital safety\n• Flexible tenures from 12 to 60 months with Monthly, Quarterly, or Cumulative payout options.`,
        chips: [
          "Check Current FD Rates",
          "FD vs Debt Mutual Funds",
          "Talk to FD Specialist",
          "Sovereign Gold Bonds"
        ]
      };
    }

    // 4. Mutual Fund Recommendations / Categories
    if (q.includes('fund') || q.includes('mutual') || q.includes('invest') || q.includes('portfolio') || q.includes('pick')) {
      return {
        text: `At Assure Securities, we curate goal-aligned Mutual Fund portfolios tailored to your time horizon and risk profile:\n\n• **Wealth Creation (7+ years):** Flexi-Cap, Large & Mid-Cap, and Index Funds.\n• **Balanced Growth (3-5 years):** Multi-Asset Allocation and Balanced Advantage Funds.\n• **Capital Preservation (1-3 years):** Short-Duration, Banking & PSU Debt Funds.\n• **Emergency Parking (Days to Months):** Liquid and Overnight Funds.\n\nAll investments feature **Direct AMC Settlement** (Zero Custody Risk—money goes directly to the mutual fund house).`,
        chips: [
          "Review My Existing Portfolio",
          "How does Zero Custody Risk work?",
          "Start with ₹1,000/month",
          "Book Advisory Call"
        ]
      };
    }

    // 5. Contact / Office / Location
    if (q.includes('contact') || q.includes('office') || q.includes('address') || q.includes('lucknow') || q.includes('phone') || q.includes('call') || q.includes('location')) {
      return {
        text: `You can reach the Assure Securities team anytime:\n\n📍 **Headquarters:**\n2/163 Vishal Khand, Gomtinagar, Lucknow - 226010, Uttar Pradesh\n\n📞 **Helpline:** +91 9455555742 / 09170707555\n✉️ **Email:** care@assuresecurities.in\n🕒 **Hours:** Monday – Saturday, 9:30 AM to 6:30 PM\n\nWould you like a senior advisor to call you back today?`,
        chips: [
          "Request a Callback",
          "Chat on WhatsApp",
          "Get Google Maps Route",
          "View ARN Verification"
        ]
      };
    }

    // 6. ARN / Credibility / Safety
    if (q.includes('arn') || q.includes('amfi') || q.includes('safe') || q.includes('sebi') || q.includes('license') || q.includes('pradeep')) {
      return {
        text: `**Assure Securities** is an authorized, AMFI-registered Mutual Fund Distributor:\n\n• **AMFI ARN:** \`ARN-182137\`\n• **Registration Date:** 20 July 2021 (Valid till 19 July 2027)\n• **Fiduciary Standard:** 100% compliant with SEBI regulations and AMFI code of conduct.\n• **Zero Custody Risk:** Assure Securities never holds client funds. All transactions settle directly through the official mutual fund houses (AMCs) and BSE StAR MF exchange infrastructure.`,
        chips: [
          "Check AMFI Portal",
          "Who is the Founder?",
          "How to Start Investing?",
          "Book Consultation"
        ]
      };
    }

    // 7. Consultation / Booking
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

    // 8. KYC / Documents
    if (q.includes('kyc') || q.includes('document') || q.includes('pan') || q.includes('aadhaar')) {
      return {
        text: `Starting mutual fund investments requires a one-time simple **e-KYC**:\n\n1. **PAN Card** (Mandatory for financial verification)\n2. **Aadhaar Card** (For address verification)\n3. **Bank Account Details** (Cancelled cheque or passbook copy with IFSC)\n4. **Passport-size Photo / Selfie**\n\nOur team can complete your online KYC in less than 10 minutes free of charge!`,
        chips: [
          "Start Online KYC with Advisor",
          "Calculate SIP Returns",
          "Book Consultation"
        ]
      };
    }

    // Default Fallback
    return {
      text: `Thank you for reaching out! While I am learning every day, our senior wealth advisory desk in Gomtinagar, Lucknow can provide detailed guidance tailored specifically to your financial objectives.\n\nFeel free to explore our popular topics below or connect with our desk directly:`,
      chips: [
        "Calculate SIP Returns",
        "Explore Mutual Fund Options",
        "Fixed Deposits & Bonds",
        "Tax Saving (ELSS)",
        "Talk to a Senior Advisor"
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
    }, 650);
  };

  // Handle Quick Chip Click
  const handleChipClick = (chip) => {
    if (chip === "Book Free Consultation" || chip === "Book Consultation" || chip === "Book Advisory Call" || chip === "Start SIP with an Advisor") {
      if (onOpenModal) {
        onOpenModal('consultation');
      } else {
        handleSendMessage(chip);
      }
      return;
    }
    if (chip === "Chat on WhatsApp" || chip === "Connect on WhatsApp Now") {
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Assure%20Securities,%20I%20would%20like%20to%20consult%20an%20advisor.`, '_blank');
      return;
    }
    if (chip === "Get Google Maps Route") {
      window.open(COMPANY_INFO.googleMapsUrl, '_blank');
      return;
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
    pointerState.current = {
      isDown: true,
      startX: e.clientX,
      startY: e.clientY,
      initialX: pos.x,
      initialY: pos.y,
      moved: false,
      pointerId: e.pointerId
    };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e) => {
    if (!pointerState.current.isDown) return;
    const dx = e.clientX - pointerState.current.startX;
    const dy = e.clientY - pointerState.current.startY;
    const distance = Math.hypot(dx, dy);

    // Movement threshold of 7px to distinguish drag vs click
    if (distance > 7) {
      if (!pointerState.current.moved) {
        pointerState.current.moved = true;
        setIsDragging(true);
        setShowIntroPopup(false);
      }

      const isMobile = window.innerWidth < 640;
      const btnSize = isMobile ? 60 : 64;
      const minX = isMobile ? 12 : 20;
      const maxX = window.innerWidth - btnSize - minX;
      const minY = window.innerWidth < 768 ? 60 : 70;
      const maxY = window.innerHeight - btnSize - minX;

      let targetX = pointerState.current.initialX + dx;
      let targetY = pointerState.current.initialY + dy;

      targetX = clamp(targetX, minX, maxX);
      targetY = clamp(targetY, minY, maxY);

      // WhatsApp safety clearance (WhatsApp is at bottom: 24, right: 24)
      const waX = window.innerWidth - 76;
      const waY = window.innerHeight - 76;
      if (Math.abs(targetX - waX) < 55 && Math.abs(targetY - waY) < 55) {
        if (targetY > waY - 58) {
          targetY = Math.max(minY, waY - 68);
        }
      }

      setPos({ x: targetX, y: targetY });
    }
  };

  const handlePointerUp = (e) => {
    if (!pointerState.current.isDown) return;
    pointerState.current.isDown = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    if (pointerState.current.moved) {
      // Snap gently to nearest edge if close
      const isMobile = window.innerWidth < 640;
      const btnSize = isMobile ? 60 : 64;
      const minX = isMobile ? 12 : 20;
      const maxX = window.innerWidth - btnSize - minX;
      let finalX = pos.x;

      if (finalX < minX + 35) finalX = minX;
      else if (finalX > maxX - 35) finalX = maxX;

      setPos(prev => ({ ...prev, x: finalX }));

      try {
        localStorage.setItem('assure_ai_brain_pos', JSON.stringify({ x: finalX, y: pos.y }));
      } catch {}

      setTimeout(() => setIsDragging(false), 80);
    } else {
      // Regular Click detected
      setIsDragging(false);
      setIsOpen(prev => !prev);
    }
  };

  const handlePointerCancel = () => {
    pointerState.current.isDown = false;
    setIsDragging(false);
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
  const isRightHalf = pos.x > window.innerWidth / 2;
  const isBottomHalf = pos.y > window.innerHeight / 2;

  return (
    <>
      {/* 1. Independent Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Assure%20Securities,%20I%20would%20like%20to%20consult%20with%20an%20advisor.`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#ffffff',
          display: isMobile && isOpen ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(37, 211, 102, 0.45)',
          zIndex: 980,
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'transform 0.25s ease'
        }}
        title="Connect on WhatsApp"
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Connect with Assure Securities on WhatsApp"
      >
        <Phone size={20} />
      </a>

      {/* 2. Draggable AI Brain Button Anchor */}
      <div 
        style={{
          position: 'fixed',
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: `${btnSize}px`,
          height: `${btnSize}px`,
          zIndex: 1500,
          touchAction: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none'
        }}
      >
        {/* Intro Greeting Speech Card (Phase 8 Premium Floating AI Assistant) */}
        {showIntroPopup && !isOpen && !isDragging && (
          <div 
            style={{
              position: 'absolute',
              bottom: isBottomHalf ? `${btnSize + 12}px` : 'auto',
              top: !isBottomHalf ? `${btnSize + 12}px` : 'auto',
              right: isRightHalf ? '0' : 'auto',
              left: !isRightHalf ? '0' : 'auto',
              minWidth: '220px',
              maxWidth: '260px',
              background: '#ffffff',
              borderRadius: '16px',
              padding: '12px 14px',
              boxShadow: '0 16px 36px -4px rgba(7, 26, 47, 0.25), 0 4px 12px rgba(0,0,0,0.06)',
              border: '1px solid #E2E8F0',
              animation: 'introCardFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: 'auto',
              zIndex: 1650
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '1rem' }}>👋</span>
                  <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#071A2F', letterSpacing: '-0.01em' }}>Hi, I'm Assure AI</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#334155', fontWeight: 600, marginTop: '2px' }}>
                  How can I help you?
                </div>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setShowIntroPopup(false); sessionStorage.setItem('assure_ai_intro_seen', 'true'); }}
                style={{ background: 'rgba(0,0,0,0.04)', border: 'none', color: '#64748b', cursor: 'pointer', padding: '3px', display: 'flex', borderRadius: '50%', transition: 'background 0.2s' }}
                aria-label="Close greeting"
                title="Dismiss greeting"
              >
                <X size={13} />
              </button>
            </div>
            
            <div style={{ marginTop: '8px', paddingTop: '6px', borderTop: '1px solid #f1f5f9', fontSize: '0.72rem', color: '#10B981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span>Ask about SIPs, Funds, or drag me anywhere!</span>
            </div>

            {/* Speech bubble pointer notch */}
            <div 
              style={{
                position: 'absolute',
                [isBottomHalf ? 'bottom' : 'top']: '-5px',
                [isRightHalf ? 'right' : 'left']: `${Math.min(btnSize / 2 - 4, 30)}px`,
                width: '10px',
                height: '10px',
                background: '#ffffff',
                borderRight: '1px solid #E2E8F0',
                borderBottom: isBottomHalf ? '1px solid #E2E8F0' : 'none',
                borderTop: !isBottomHalf ? '1px solid #E2E8F0' : 'none',
                transform: 'rotate(45deg)',
                pointerEvents: 'none'
              }}
            />
          </div>
        )}

        {/* Hover Tooltip (Desktop) */}
        {!isMobile && isHovered && !showIntroPopup && !isOpen && !isDragging && (
          <div 
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%) translateY(-8px)',
              background: '#071A2F',
              color: '#ffffff',
              padding: '4px 10px',
              borderRadius: '8px',
              fontSize: '0.72rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              border: '1px solid rgba(22, 185, 129, 0.4)',
              pointerEvents: 'none',
              animation: 'tooltipFade 0.2s ease-out'
            }}
          >
            Assure AI • Drag or Click to Chat
          </div>
        )}

        {/* Main Circular AI Brain Trigger */}
        <div
          role="button"
          tabIndex={0}
          aria-label={isOpen ? "Close Assure AI assistant" : "Open Assure AI assistant (Draggable)"}
          aria-expanded={isOpen}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
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
            filter: isDragging ? 'drop-shadow(0 15px 25px rgba(7, 26, 47, 0.5))' : 'none'
          }}
        >
          {isOpen ? (
            <div 
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#071A2F',
                border: '1.5px solid #16B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(7, 26, 47, 0.4)'
              }}
            >
              <X size={24} color="#16B981" />
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
                  background: '#10B981',
                  borderRadius: '50%',
                  border: '2px solid #071A2F',
                  boxShadow: '0 0 8px #10B981',
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
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: isMobile ? '20px 20px 0 0' : '20px',
            boxShadow: '0 24px 60px rgba(7, 26, 47, 0.28), 0 4px 20px rgba(0,0,0,0.06)',
            border: '1px solid rgba(229, 234, 240, 0.85)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'chatWindowPop 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Header */}
          <div 
            style={{
              background: 'linear-gradient(135deg, #071A2F 0%, #0d2746 100%)',
              color: '#ffffff',
              padding: '0.95rem 1.15rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(22, 185, 129, 0.15)',
                  border: '1.5px solid #16B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <img 
                  src="/assets/favicon.png" 
                  alt="Assure" 
                  style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                  onError={(e) => e.currentTarget.style.display = 'none'} 
                />
              </div>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Assure AI</span>
                  <span style={{ fontSize: '0.62rem', background: 'rgba(22, 185, 129, 0.2)', color: '#16B981', padding: '1px 6px', borderRadius: '4px', fontWeight: 800 }}>
                    FINTECH 2026
                  </span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '1px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16B981', display: 'inline-block', boxShadow: '0 0 6px #16B981' }} />
                  <span>ARN-182137 Certified • Ready</span>
                </div>
              </div>
            </div>

            {/* Header Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                onClick={handleReset}
                title="Reset Conversation"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: 'none',
                  color: '#94a3b8',
                  padding: '6px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                aria-label="Reset conversation"
              >
                <RotateCcw size={15} />
              </button>
              
              <button
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: 'none',
                  color: '#94a3b8',
                  padding: '6px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                aria-label="Close chat window"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Direct AMC Settlement Strip */}
          <div 
            style={{
              background: '#F0FDF4',
              color: '#166534',
              padding: '6px 14px',
              fontSize: '0.74rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #DCFCE7'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} color="#16B981" />
              <span>Direct AMC Settlement • Zero Custody Risk</span>
            </div>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Assure%20Securities,%20I%20am%20chatting%20on%20the%20website%20and%20want%20to%20connect%20with%20an%20advisor.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#15803d', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 700 }}
            >
              WhatsApp <ExternalLink size={11} />
            </a>
          </div>

          {/* Message List */}
          <div 
            style={{
              flex: 1,
              padding: '1.25rem 1rem',
              overflowY: 'auto',
              background: '#F8FAFC',
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
                        borderRadius: '50%',
                        background: isBot ? '#071A2F' : 'linear-gradient(135deg, #16B981 0%, #059669 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                        border: isBot ? '1px solid rgba(22, 185, 129, 0.4)' : 'none'
                      }}
                    >
                      {isBot ? <Bot size={15} color="#16B981" /> : <User size={15} color="#ffffff" />}
                    </div>

                    {/* Bubble */}
                    <div 
                      style={{
                        background: isBot ? '#ffffff' : '#071A2F',
                        color: isBot ? '#172033' : '#ffffff',
                        padding: '10px 14px',
                        borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                        boxShadow: isBot ? '0 2px 8px rgba(0,0,0,0.04)' : '0 4px 12px rgba(7, 26, 47, 0.2)',
                        border: isBot ? '1px solid #E5EAF0' : 'none',
                        fontSize: '0.88rem',
                        lineHeight: 1.5,
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
                                return <strong key={pIdx} style={{ fontWeight: 700, color: isBot ? '#071A2F' : '#16B981' }}>{part.slice(2, -2)}</strong>;
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
                          className="btn-primary-emerald"
                          style={{
                            marginTop: '0.75rem',
                            padding: '6px 12px',
                            fontSize: '0.82rem',
                            minHeight: '36px',
                            width: '100%',
                            justifyContent: 'center'
                          }}
                        >
                          <span>Open Consultation Booking Form</span>
                          <ArrowRight size={14} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Timestamp */}
                  <span 
                    style={{
                      fontSize: '0.66rem',
                      color: '#94a3b8',
                      marginTop: '3px',
                      marginLeft: isBot ? '36px' : '0',
                      marginRight: isBot ? '0' : '36px'
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
                            background: '#ffffff',
                            color: '#071A2F',
                            border: '1px solid #DCE2EA',
                            borderRadius: '16px',
                            padding: '4px 10px',
                            fontSize: '0.74rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#16B981';
                            e.currentTarget.style.color = '#16B981';
                            e.currentTarget.style.background = '#F0FDF4';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#DCE2EA';
                            e.currentTarget.style.color = '#071A2F';
                            e.currentTarget.style.background = '#ffffff';
                          }}
                        >
                          <span>{chip}</span>
                          <ArrowRight size={11} />
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
                  background: '#ffffff',
                  border: '1.5px solid #16B981',
                  borderRadius: '14px',
                  padding: '12px 14px',
                  boxShadow: '0 4px 16px rgba(22, 185, 129, 0.12)',
                  fontSize: '0.84rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#071A2F' }}>
                    <Calculator size={16} color="#16B981" />
                    <span>Quick SIP Modeler</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', background: '#F0FDF4', color: '#166534', padding: '1px 6px', borderRadius: '4px', fontWeight: 700 }}>
                    Live Preview
                  </span>
                </div>

                {/* Amount Slider */}
                <div style={{ marginBottom: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: '#64748b' }}>
                    <span>Monthly SIP:</span>
                    <strong style={{ color: '#071A2F' }}>₹{calcState.amount.toLocaleString('en-IN')}</strong>
                  </div>
                  <input 
                    type="range"
                    min="1000"
                    max="50000"
                    step="1000"
                    value={calcState.amount}
                    onChange={(e) => setCalcState({ ...calcState, amount: Number(e.target.value) })}
                    style={{ width: '100%', accentColor: '#16B981', cursor: 'pointer' }}
                  />
                </div>

                {/* Duration Slider */}
                <div style={{ marginBottom: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: '#64748b' }}>
                    <span>Tenure:</span>
                    <strong style={{ color: '#071A2F' }}>{calcState.years} Years</strong>
                  </div>
                  <input 
                    type="range"
                    min="3"
                    max="30"
                    step="1"
                    value={calcState.years}
                    onChange={(e) => setCalcState({ ...calcState, years: Number(e.target.value) })}
                    style={{ width: '100%', accentColor: '#16B981', cursor: 'pointer' }}
                  />
                </div>

                {/* Results Card */}
                <div 
                  style={{
                    background: '#071A2F',
                    color: '#ffffff',
                    borderRadius: '10px',
                    padding: '8px 10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.66rem', color: '#94a3b8' }}>Invested: ₹{(investedAmount / 100000).toFixed(2)}L</div>
                    <div style={{ fontSize: '0.66rem', color: '#16B981', fontWeight: 600 }}>Gain: +₹{(wealthGain / 100000).toFixed(2)}L</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.66rem', color: '#94a3b8' }}>Maturity Value</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#16B981' }}>{formatRupees(futureValue)}</div>
                  </div>
                </div>

                <button
                  onClick={() => handleSendMessage(`I calculated ₹${calcState.amount}/month for ${calcState.years} years (Maturity: ${formatRupees(futureValue)}). Please advise me on which mutual funds can help achieve this.`)}
                  style={{
                    marginTop: '8px',
                    width: '100%',
                    background: '#F0FDF4',
                    border: '1px solid #16B981',
                    color: '#15803d',
                    padding: '5px',
                    borderRadius: '6px',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Ask Advisor About This Goal →
                </button>
              </div>
            )}

            {/* Quick Callback Request Box */}
            <div 
              style={{
                background: '#ffffff',
                border: '1px solid #E5EAF0',
                borderRadius: '12px',
                padding: '10px 12px',
                fontSize: '0.8rem'
              }}
            >
              <div style={{ fontWeight: 700, color: '#071A2F', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Phone size={13} color="#16B981" />
                <span>Want a call from Lucknow Advisory Desk?</span>
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
                    borderRadius: '6px',
                    border: '1px solid #DCE2EA',
                    fontSize: '0.8rem',
                    outline: 'none'
                  }}
                  maxLength={13}
                />
                <button
                  type="submit"
                  style={{
                    background: '#16B981',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0 12px',
                    fontSize: '0.78rem',
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
              padding: '0.75rem 1rem',
              background: '#ffffff',
              borderTop: '1px solid #E5EAF0',
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
                borderRadius: '10px',
                border: '1.5px solid #DCE2EA',
                fontSize: '0.88rem',
                outline: 'none',
                transition: 'border-color 0.2s',
                color: '#172033'
              }}
              onFocus={(e) => e.target.style.borderColor = '#16B981'}
              onBlur={(e) => e.target.style.borderColor = '#DCE2EA'}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim()}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: inputMessage.trim() ? '#16B981' : '#E5EAF0',
                color: inputMessage.trim() ? '#ffffff' : '#94a3b8',
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
              <Send size={18} />
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

