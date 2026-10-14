import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, X, Send, Bot, User, Calculator, TrendingUp, 
  ShieldCheck, Phone, ArrowRight, RotateCcw, Sparkles, 
  CheckCircle2, Building2, ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

// Initial greeting message
const INITIAL_MESSAGES = [
  {
    id: 'welcome-1',
    sender: 'bot',
    text: `Hello! 👋 I'm **Assure Wealth Assistant**, your personal financial companion from **Assure Securities** (AMFI Reg. ARN-182137).`,
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
  const [showNotificationBadge, setShowNotificationBadge] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);

  // Quick Mini Calculator State inside chat
  const [calcState, setCalcState] = useState({ amount: 10000, rate: 12, years: 10 });
  const [showInlineCalc, setShowInlineCalc] = useState(false);

  // Quick Callback Form State inside chat
  const [callbackNumber, setCallbackNumber] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowNotificationBadge(false);
      setShowTooltip(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, messages, isTyping]);

  // Persist chat to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem('assure_chat_messages', JSON.stringify(messages));
    } catch {
      // Ignore storage errors
    }
  }, [messages]);

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
    } catch {
      // AudioContext unavailable or muted
    }
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

  return (
    <>
      {/* Floating Trigger Container */}
      <div 
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 990,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '12px',
          pointerEvents: 'none'
        }}
      >
        {/* First-load speech bubble tooltip */}
        {showTooltip && !isOpen && (
          <div 
            style={{
              pointerEvents: 'auto',
              background: '#071A2F',
              color: '#ffffff',
              padding: '10px 14px',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(7, 26, 47, 0.35)',
              border: '1px solid rgba(22, 185, 129, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              maxWidth: '280px',
              animation: 'chatBubbleFloat 3s ease-in-out infinite'
            }}
          >
            <div style={{ background: '#16B981', borderRadius: '50%', padding: '4px', display: 'flex' }}>
              <Sparkles size={14} color="#ffffff" />
            </div>
            <div style={{ fontSize: '0.82rem', lineHeight: 1.35, fontWeight: 500 }}>
              <span style={{ fontWeight: 700, color: '#16B981' }}>Need investment advice?</span>
              <br />Ask Assure Wealth Assistant 24/7!
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: '2px' }}
              aria-label="Dismiss tooltip"
            >
              <X size={14} />
            </button>
          </div>
        )}

        {/* Action Trigger Buttons Stack */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', pointerEvents: 'auto' }}>
          
          {/* Quick WhatsApp Action Icon (Compact) */}
          {!isOpen && (
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Assure%20Securities,%20I%20would%20like%20to%20consult%20with%20an%20advisor.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#ffffff',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
              title="Chat on WhatsApp"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Phone size={20} />
            </a>
          )}

          {/* Primary Chatbot Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: isOpen ? '#071A2F' : 'linear-gradient(135deg, #071A2F 0%, #0B223D 100%)',
              color: '#ffffff',
              height: '56px',
              padding: isOpen ? '0 18px' : '0 20px',
              borderRadius: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 10px 30px rgba(7, 26, 47, 0.4)',
              border: '2px solid rgba(22, 185, 129, 0.7)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.92rem'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            aria-label={isOpen ? "Close Wealth Assistant" : "Open Wealth Assistant"}
          >
            {isOpen ? (
              <>
                <X size={20} color="#16B981" />
                <span>Close Chat</span>
              </>
            ) : (
              <>
                <div style={{ position: 'relative', display: 'flex' }}>
                  <Bot size={22} color="#16B981" />
                  {showNotificationBadge && (
                    <span 
                      style={{
                        position: 'absolute',
                        top: '-3px',
                        right: '-3px',
                        width: '9px',
                        height: '9px',
                        background: '#16B981',
                        borderRadius: '50%',
                        boxShadow: '0 0 8px #16B981'
                      }}
                    />
                  )}
                </div>
                <span>Ask Assure AI</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Chatbot Window */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            bottom: '84px',
            right: '24px',
            width: 'min(410px, calc(100vw - 32px))',
            height: 'min(560px, calc(100vh - 130px))',
            background: '#ffffff',
            borderRadius: '20px',
            boxShadow: '0 24px 60px rgba(7, 26, 47, 0.3), 0 4px 16px rgba(0,0,0,0.08)',
            border: '1px solid rgba(229, 234, 240, 0.9)',
            zIndex: 1200,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'chatWindowPop 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Header */}
          <div 
            style={{
              background: '#071A2F',
              color: '#ffffff',
              padding: '1rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(22, 185, 129, 0.15)',
                  border: '1.5px solid #16B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Bot size={22} color="#16B981" />
              </div>
              <div>
                <div style={{ fontSize: '0.96rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Assure Wealth Assistant</span>
                  <span style={{ fontSize: '0.62rem', background: 'rgba(22, 185, 129, 0.2)', color: '#16B981', padding: '1px 6px', borderRadius: '4px', fontWeight: 800 }}>
                    AI 2.0
                  </span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '1px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#16B981', display: 'inline-block', boxShadow: '0 0 6px #16B981' }} />
                  <span>ARN-182137 Certified • Online</span>
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
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Quick Announcement Strip */}
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
                        marginTop: '2px'
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
                        // Simple bold parsing for **text**
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

      {/* Embedded Animations */}
      <style>{`
        @keyframes chatBubbleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes chatWindowPop {
          0% { opacity: 0; transform: scale(0.95) translateY(12px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes bounceDot {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.5; }
          40% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </>
  );
}
