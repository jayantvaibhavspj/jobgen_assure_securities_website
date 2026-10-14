import React from 'react';
import { Link } from 'react-router-dom';
import { EducationalVideos } from '../components/EducationalVideos';
import { Video, BookOpen, ArrowRight, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { RECENT_INSIGHTS, COMPANY_INFO } from '../data/websiteData';

export function VideosPage({ onOpenModal }) {
  return (
    <div>
      
      {/* Section 1: Page Header Banner (Dark) */}
      <section className="section-dark-navy" style={{ padding: '4.5rem 0 3.5rem 0', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
            <Link to="/" style={{ color: '#38bdf8', fontWeight: 600 }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Investor Zone</span>
            <span>/</span>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>Educational Videos</span>
          </div>

          <div className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
            Knowledge Center • 12 Masterclasses
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
            Educational <span className="gradient-text">Videos & Learning</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '720px', lineHeight: 1.6 }}>
            As an investor, you can either manage your finances yourself or hire a professional firm. Watch our official video library covering Mutual Fund fundamentals, SIP compounding, tax saving ELSS, and asset allocation.
          </p>
        </div>
      </section>

      {/* Section 2: 12 Video Masterclasses (Light) */}
      <div style={{ background: '#f8fafc' }}>
        <EducationalVideos onOpenModal={onOpenModal} showInsights={false} />
      </div>

      {/* Section 3: Financial Research & Weekly Market Insights (Dark) */}
      <section className="section-dark-navy" style={{ padding: '5rem 0', background: '#0b1120', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="badge-tag" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)', color: '#38bdf8' }}>
                Assure Research Desk
              </span>
              <h2 className="section-heading" style={{ color: '#ffffff', marginBottom: '0.5rem' }}>
                Market Insights & <span className="gradient-text">Financial Research</span>
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', margin: 0, maxWidth: '580px' }}>
                Curated articles breaking down economic trends, RBI monetary policy impacts, and prudent asset allocation strategies.
              </p>
            </div>

            <button 
              onClick={() => onOpenModal('consultation')}
              className="btn-emerald"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.95rem' }}
            >
              <span>Subscribe to Monthly Digest</span>
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {RECENT_INSIGHTS.map((post) => (
              <div 
                key={post.id}
                className="glass-card"
                style={{ 
                  padding: '2rem', 
                  borderRadius: '24px', 
                  background: 'rgba(30, 41, 59, 0.75)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.8rem' }}>
                    <span>{post.date}</span>
                    <span style={{ color: '#38bdf8', fontWeight: 600 }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700, marginBottom: '0.8rem', lineHeight: 1.4 }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {post.excerpt}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                  <span style={{ color: '#94a3b8', fontWeight: 600 }}>By {post.author}</span>
                  <button 
                    onClick={() => onOpenModal('consultation')} 
                    style={{ color: '#38bdf8', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    <span>Read Advisory</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 4: Video Learning Consultation Desk (Light) */}
      <section className="section-wrapper" style={{ background: '#f8fafc', padding: '4.5rem 0' }}>
        <div className="container">
          <div style={{ 
            background: '#ffffff', 
            borderRadius: '24px', 
            padding: '3rem', 
            border: '1px solid #e2e8f0', 
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div>
              <span className="badge-tag accent-emerald">Live 1-on-1 Concept Discussion</span>
              <h3 style={{ fontSize: '1.8rem', color: '#0f172a', fontWeight: 800, marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                Have Questions on Any Video Strategy?
              </h3>
              <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '600px', margin: 0, lineHeight: 1.6 }}>
                Our team can walk you through how compounding, ELSS 80C tax deductions, or asset rebalancing applies specifically to your income and goals.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenModal('consultation')}
                className="btn-primary"
                style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
              >
                <span>Book Free Video Q&A Call</span>
                <ArrowRight size={16} />
              </button>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-secondary"
                style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
              >
                <Phone size={16} />
                <span>Call Advisor</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
