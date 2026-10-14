import React from 'react';
import { Link } from 'react-router-dom';
import { PartnerSection } from '../components/PartnerSection';
import { Award, Users, CheckCircle2, Phone, ShieldCheck, TrendingUp, Sparkles, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export function PartnerPage() {
  return (
    <div>
      
      {/* Section 1: Page Header Banner (Dark) */}
      <section className="section-dark-navy" style={{ padding: '4.5rem 0 3.5rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#38bdf8', fontWeight: 600 }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Become a Partner</span>
          </div>

          <div className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
            Be Your Own Boss • Entrepreneurship Opportunity
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
            Partner with <span className="gradient-text">Assure Securities</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6 }}>
            Opportunity for Sub-Brokers, Financial Advisors, Tax Professionals & Wealth Planners. Start your journey to become an authorized Mutual Fund Distributor backed by our institutional distribution platform.
          </p>
        </div>
      </section>

      {/* Section 2: Why Partner & Application Form (Light) */}
      <div style={{ background: '#f8fafc' }}>
        <PartnerSection theme="light" />
      </div>

      {/* Section 3: Sub-Broker Mentorship, NISM Exam Support & Direct Lucknow Desk (Dark) */}
      <section className="section-dark-navy" style={{ padding: '5rem 0', background: '#0b1120', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
              Full Operational Support
            </span>
            <h2 className="section-heading" style={{ color: '#ffffff' }}>
              How Assure Securities <span className="gradient-text">Empowers Your Practice</span>
            </h2>
            <p className="section-subheading" style={{ color: '#cbd5e1' }}>
              We don't just provide empanelment; we give you the training, technology, and mentorship needed to build a multi-crore AUM business.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem', marginBottom: '3.5rem' }}>
            {[
              {
                icon: <Sparkles size={24} color="#38bdf8" />,
                title: "NISM Series V-A Prep",
                desc: "Complete study material, sample question banks, and guidance to clear the AMFI Mutual Fund certification on your first attempt."
              },
              {
                icon: <TrendingUp size={24} color="#10b981" />,
                title: "Transparent Revenue Sharing",
                desc: "Highest competitive payout slabs with timely monthly reconciliations and zero hidden deductions on gross trail brokerage."
              },
              {
                icon: <ShieldCheck size={24} color="#f59e0b" />,
                title: "Digital Client Portal",
                desc: "Offer your clients paperless onboarding, instant payment links, and 24/7 mobile portfolio tracking branded with Assure credentials."
              },
              {
                icon: <Users size={24} color="#a78bfa" />,
                title: "Gomtinagar Office Support",
                desc: "Physical branch infrastructure in Lucknow for hosting HNI client meetings and processing physical operational requests."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem',
                  borderRadius: '20px',
                  background: 'rgba(30, 41, 59, 0.75)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                <div style={{ background: 'rgba(255,255,255,0.06)', width: '52px', height: '52px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.6rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Direct Partner Hotline Banner */}
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(16,185,129,0.2) 100%)', 
            border: '1px solid rgba(56, 189, 248, 0.3)', 
            borderRadius: '24px', 
            padding: '2.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            flexWrap: 'wrap', 
            gap: '1.5rem' 
          }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', fontWeight: 800, margin: '0 0 0.35rem 0' }}>
                Prefer Direct Phone Discussion?
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', margin: 0 }}>
                Speak directly with the founder and business head at Assure Securities Lucknow.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="btn-primary" 
                style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
              >
                <Phone size={16} />
                <span>Call: {COMPANY_INFO.phone}</span>
              </a>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Assure%20Securities,%20I%20am%20interested%20in%20becoming%20a%20partner/sub-broker.`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-emerald" 
                style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
              >
                <MessageSquare size={16} />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
