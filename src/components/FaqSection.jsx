import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ShieldCheck, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    q: "What is the exact role of Assure Securities as an AMFI Registered Distributor?",
    a: "Assure Securities (ARN-182137) is officially registered with the Association of Mutual Funds in India (AMFI). We provide qualified guidance, scheme research, portfolio allocation, and digital platform access to help families and individual investors choose the right mutual fund schemes and fixed income products aligned with their goals."
  },
  {
    q: "How safe is my money, and does Assure Securities hold my funds?",
    a: "Your money is 100% safe. Assure Securities NEVER holds investor funds or securities. All subscription money flows directly from your verified bank account to SEBI-regulated Asset Management Companies (e.g., SBI, HDFC, ICICI Prudential). Mutual fund folios are issued in your sole name, ensuring zero custody risk."
  },
  {
    q: "What fees or charges do I have to pay to Assure Securities?",
    a: "Assure Securities deals in Regular Plans of mutual funds and receives regulated trailing commissions directly from Asset Management Companies (AMCs) as per SEBI guidelines. We do NOT levy any upfront consultation fee or transaction surcharges on our retail investors."
  },
  {
    q: "Can I consolidate all my existing investments across different platforms into Assure?",
    a: "Yes, absolutely. Through our paperless portfolio integration, we can fetch and consolidate your existing mutual fund folios across all AMCs into a single unified dashboard, providing real-time capital gains summaries and rebalancing diagnostics without having to redeem or pay exit loads."
  },
  {
    q: "What is the minimum amount required to start a SIP or Lumpsum?",
    a: "You can start a Systematic Investment Plan (SIP) with as little as ₹500 or ₹1,000 per month in top-performing equity and index funds. For one-time lumpsum investments, most mutual fund schemes permit entry starting at ₹5,000."
  },
  {
    q: "How do I initiate a portfolio review or begin investing with Assure?",
    a: "You can click 'Get Started' or 'Book a Consultation' on our website. Our dedicated relationship manager in Lucknow will connect with you, understand your time horizons and tax bracket, and guide you through paperless instant digital KYC."
  }
];

export function FaqSection({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section 
      id="faq-section"
      style={{ 
        padding: 'var(--section-pad-desktop) 0', 
        background: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)' 
      }}
      className="section-pad"
    >
      <div className="container" style={{ maxWidth: '840px' }}>
        
        {/* Section Header */}
        <div className="section-header-center reveal-on-scroll">
          <div className="eyebrow-pill emerald">
            <HelpCircle size={13} />
            <span>Clarity & Regulatory Compliance</span>
          </div>

          <h2>
            Frequently Asked <span style={{ color: 'var(--color-accent)' }}>Questions</span>
          </h2>

          <p>
            Clear, unambiguous answers about how we protect your capital, structure asset allocation, and adhere to SEBI / AMFI guidelines.
          </p>
        </div>

        {/* Accordion Stack (Section 19: Large Question, Plus/Minus Icon, Smooth Transition) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`reveal-on-scroll stagger-${(idx % 4) + 1}`}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: isOpen ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                  overflow: 'hidden',
                  boxShadow: isOpen ? 'var(--shadow-card)' : 'none',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease'
                }}
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '1.35rem 1.6rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                  aria-expanded={isOpen}
                >
                  <span 
                    style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: 700, 
                      color: isOpen ? 'var(--color-primary)' : 'var(--color-text)', 
                      letterSpacing: '-0.015em',
                      lineHeight: 1.4
                    }}
                  >
                    {item.q}
                  </span>

                  <div 
                    style={{ 
                      width: '30px', 
                      height: '30px', 
                      borderRadius: '50%', 
                      background: isOpen ? 'var(--color-primary)' : 'var(--color-bg)', 
                      color: isOpen ? '#ffffff' : 'var(--color-primary)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div 
                    style={{ 
                      padding: '0 1.6rem 1.35rem 1.6rem', 
                      fontSize: '0.92rem', 
                      color: 'var(--color-text-secondary)', 
                      lineHeight: 1.65,
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '1rem',
                      animation: 'faqFadeIn 0.3s ease forwards'
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div 
          style={{ 
            marginTop: '3rem', 
            padding: '1.5rem 1.85rem', 
            borderRadius: '16px', 
            background: '#ffffff', 
            border: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1rem', marginBottom: '0.2rem' }}>
              Still have questions about your mutual fund portfolio?
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Our Lucknow advisory team is available for phone consultations and in-person discussions.
            </div>
          </div>

          <button 
            onClick={() => onOpenModal && onOpenModal('consultation')}
            className="btn-primary-emerald"
            style={{ fontSize: '0.85rem', height: '44px', padding: '0 1.25rem' }}
          >
            <span>Ask an Advisor →</span>
          </button>
        </div>

      </div>

      <style>{`
        @keyframes faqFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
