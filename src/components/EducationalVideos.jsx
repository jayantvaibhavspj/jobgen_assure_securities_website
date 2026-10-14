import React, { useState } from 'react';
import { Play, Sparkles, BookOpen, Clock, ArrowRight, X, ExternalLink, Video } from 'lucide-react';
import { EDUCATIONAL_VIDEOS, RECENT_INSIGHTS } from '../data/websiteData';

export function EducationalVideos({ onOpenModal, showInsights = true }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Mutual Fund Basics', 'SIP Compounding', 'Tax Saving', 'Financial Planning'];

  const filteredVideos = activeFilter === 'All'
    ? EDUCATIONAL_VIDEOS
    : EDUCATIONAL_VIDEOS.filter(v => v.category === activeFilter);

  return (
    <section id="videos" className="section-wrapper" style={{ background: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="badge-tag">
            <Video size={13} />
            <span>Official Video Library</span>
          </div>
          <h2 className="section-heading">
            Learn the Science of <span className="gradient-text">Disciplined Investing</span>
          </h2>
          <p className="section-subheading">
            Watch our official educational masterclasses covering Mutual Fund fundamentals, SIP compounding, tax saving ELSS, and asset allocation.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '20px',
                fontSize: '0.88rem',
                fontWeight: 600,
                background: activeFilter === cat ? '#2563eb' : '#ffffff',
                color: activeFilter === cat ? '#ffffff' : '#475569',
                border: activeFilter === cat ? '1px solid #2563eb' : '1px solid #e2e8f0',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeFilter === cat ? '0 4px 12px rgba(37,99,235,0.25)' : 'var(--shadow-subtle)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Cards Grid with Authentic Thumbnails */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '3.5rem' }}>
          {filteredVideos.map((vid) => (
            <div 
              key={vid.id}
              className="glass-card"
              style={{ overflow: 'hidden', background: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}
            >
              {/* Video Thumbnail with Hover Zoom & Play Button */}
              <div 
                onClick={() => setSelectedVideo(vid)}
                style={{
                  position: 'relative',
                  height: '190px',
                  background: '#0f172a',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                className="video-thumb-container"
              >
                {/* Authentic Thumbnail Image */}
                <img 
                  src={vid.thumbnail} 
                  alt={vid.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.35s ease'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = vid.remoteThumbnail;
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />

                {/* Dark Vignette Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.2) 60%, rgba(15,23,42,0.1) 100%)',
                  pointerEvents: 'none'
                }} />

                {/* Red Circular Play Button */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(239,68,68,0.6)',
                  pointerEvents: 'none',
                  transition: 'transform 0.2s ease'
                }}>
                  <Play size={24} color="#ffffff" fill="#ffffff" style={{ marginLeft: '3px' }} />
                </div>

                {/* Duration Badge */}
                <div style={{ position: 'absolute', bottom: '10px', right: '12px', background: 'rgba(0,0,0,0.8)', color: '#ffffff', fontSize: '0.75rem', fontWeight: 600, padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                  {vid.duration}
                </div>

                {/* Category Badge */}
                <div style={{ position: 'absolute', top: '10px', left: '12px', background: 'rgba(37,99,235,0.9)', color: '#ffffff', fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.65rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {vid.category}
                </div>
              </div>

              {/* Video Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', color: '#0f172a', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.4 }}>
                    {vid.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {vid.description}
                  </p>
                </div>

                <button 
                  onClick={() => setSelectedVideo(vid)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#2563eb', fontWeight: 700, fontSize: '0.88rem' }}
                >
                  <span>Watch Video</span>
                  <Play size={14} fill="#2563eb" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Latest Insights & Articles */}
        {showInsights && (
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <span className="badge-tag" style={{ margin: 0 }}>Research & Articles</span>
                <h3 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: 800, marginTop: '0.35rem' }}>
                  Latest Financial Insights from Assure Desk
                </h3>
              </div>
              <button onClick={() => onOpenModal('consultation')} className="btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}>
                <span>Subscribe to Newsletter</span>
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {RECENT_INSIGHTS.map((post) => (
                <div 
                  key={post.id}
                  style={{ padding: '1.5rem', borderRadius: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h4 style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 700, marginBottom: '0.6rem', lineHeight: 1.4 }}>
                      {post.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, marginBottom: '1rem' }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem' }}>
                    <span style={{ color: '#64748b', fontWeight: 600 }}>By {post.author}</span>
                    <button onClick={() => onOpenModal('consultation')} style={{ color: '#2563eb', fontWeight: 700 }}>Read More &rarr;</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div 
            className="modal-content" 
            style={{ maxWidth: '820px', padding: '1.5rem', background: '#0f172a', color: '#ffffff' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 700, textTransform: 'uppercase' }}>{selectedVideo.category}</span>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginTop: '2px' }}>{selectedVideo.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedVideo(null)}
                style={{ color: '#94a3b8', background: 'rgba(255,255,255,0.1)', padding: '0.4rem', borderRadius: '50%' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Video Frame */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', background: '#000000', marginBottom: '1rem' }}>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5 }}>
              {selectedVideo.description}
            </p>

            <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button 
                onClick={() => { setSelectedVideo(null); onOpenModal('consultation'); }}
                className="btn-emerald"
                style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
              >
                Ask Advisor About This Strategy
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
