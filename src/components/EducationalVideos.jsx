import React, { useState, useEffect } from 'react';
import { Play, Clock, ArrowRight, X, ExternalLink } from 'lucide-react';
import { EDUCATIONAL_VIDEOS } from '../data/websiteData';

export function EducationalVideos({ onOpenModal, theme = 'dark' }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const themeClass = theme === 'light' ? 'section-theme-light' : 'section-theme-dark';

  useEffect(() => {
    if (!selectedVideo) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedVideo]);

  const categories = ['All', 'Mutual Fund Basics', 'SIP Compounding', 'Tax Saving', 'Financial Planning'];

  const filteredVideos = activeFilter === 'All'
    ? EDUCATIONAL_VIDEOS
    : EDUCATIONAL_VIDEOS.filter(v => v.category === activeFilter);

  return (
    <section id="videos" className={`section-pad ${themeClass}`} style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="eyebrow-label">
            <span>INVESTOR EDUCATION • VIDEO ARCHIVE</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: 'var(--color-text)', maxWidth: '650px', lineHeight: 1.12 }}>
              Learn the science of <span className="text-blue">disciplined compounding</span>
              <br />
              <span className="text-red" style={{ fontStyle: 'italic' }}>
                & enduring wealth.
              </span>
            </h2>

            <p style={{ maxWidth: '440px', fontSize: '0.96rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
              Concise video masterclasses covering mutual fund structures, rupee-cost averaging, Section 80C tax mitigation, and asset allocation dynamics.
            </p>
          </div>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '0.45rem 0.95rem',
                background: activeFilter === cat ? 'var(--color-gold)' : 'rgba(255, 255, 255, 0.03)',
                color: activeFilter === cat ? '#090a0d' : 'var(--color-text-secondary)',
                border: '1px solid',
                borderColor: activeFilter === cat ? 'var(--color-gold)' : 'var(--color-border)',
                borderRadius: '2px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              style={{
                background: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '2px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-gold-border)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Thumbnail Container */}
              <div style={{ position: 'relative', width: '100%', height: '180px', background: '#090a0d' }}>
                <img 
                  src={video.remoteThumbnail || video.thumbnail} 
                  alt={video.title} 
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                  onError={(e) => {
                    e.currentTarget.src = 'https://img.youtube.com/vi/' + video.youtubeId + '/hqdefault.jpg';
                  }}
                />
                
                {/* Gold Play Button Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(9, 10, 13, 0.45)'
                  }}
                >
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: 'var(--color-gold)',
                      color: '#090a0d',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    <Play size={18} fill="#090a0d" />
                  </div>
                </div>

                <div 
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    padding: '2px 8px',
                    background: 'rgba(0, 0, 0, 0.8)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#ffffff',
                    borderRadius: '2px'
                  }}
                >
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    {video.category}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', lineHeight: 1.3, marginBottom: '0.65rem' }}>
                    {video.title}
                  </h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    {video.description}
                  </p>
                </div>

                <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                  <span>Watch Masterclass</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="modal-overlay" onClick={() => setSelectedVideo(null)}>
            <div 
              className="modal-content" 
              style={{ maxWidth: '850px', padding: '1.5rem', background: '#090a0d' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-gold)', textTransform: 'uppercase' }}>
                  {selectedVideo.category} • {selectedVideo.duration}
                </span>

                <button 
                  onClick={() => setSelectedVideo(null)}
                  style={{ color: 'var(--color-text-secondary)', padding: '0.25rem', cursor: 'pointer' }}
                  aria-label="Close video"
                >
                  <X size={20} />
                </button>
              </div>

              <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: '#000000', marginBottom: '1rem', border: '1px solid var(--color-border)' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <h2 style={{ fontSize: '1.4rem', color: 'var(--color-text)', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
                {selectedVideo.title}
              </h2>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                {selectedVideo.description}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default EducationalVideos;
