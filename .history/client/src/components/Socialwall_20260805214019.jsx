import React, { useState } from 'react';
import './Socialwall.css';

const Socialwall = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4);

  const galleryItems = [
    {
      id: 1,
      category: 'performance',
      title: 'Bharatanatyam Festival',
      location: 'Berlin',
      date: 'September 2025',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=450&fit=crop&crop=center',
      categoryLabel: 'Performance'
    },
    {
      id: 2,
      category: 'workshop',
      title: 'SPANDA Workshop',
      location: 'Munich',
      date: 'March 2025',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=450&fit=crop&crop=center',
      categoryLabel: 'Workshop'
    },
    {
      id: 3,
      category: 'concert',
      title: 'City Concert Series',
      location: 'Frankfurt',
      date: 'June 2025',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=450&fit=crop&crop=center',
      categoryLabel: 'Concert'
    },
    {
      id: 4,
      category: 'lecture',
      title: 'Lecture Demonstrat',
      location: 'Hamburg',
      date: 'April 2025',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=450&fit=crop&crop=center',
      categoryLabel: 'Lecture'
    },
    {
      id: 5,
      category: 'performance',
      title: 'Kathak Evening',
      location: 'Cologne',
      date: 'August 2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop&crop=center',
      categoryLabel: 'Performance'
    },
    {
      id: 6,
      category: 'workshop',
      title: 'Rhythm & Movement',
      location: 'Stuttgart',
      date: 'July 2025',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=450&fit=crop&crop=center',
      categoryLabel: 'Workshop'
    },
    {
      id: 7,
      category: 'concert',
      title: 'Open Air Festival',
      location: 'Düsseldorf',
      date: 'October 2025',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=450&fit=crop&crop=center',
      categoryLabel: 'Concert'
    },
    {
      id: 8,
      category: 'lecture',
      title: 'Cultural Symposium',
      location: 'Leipzig',
      date: 'November 2025',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=450&fit=crop&crop=center',
      categoryLabel: 'Lecture'
    }
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredItems.length));
  };

  // Marquee text – a continuous scroll of event titles
  const marqueeText = galleryItems.map(item => item.title).join('  •  ');

  return (
    <div className="social-wall">
      {/* Glow orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      <div className="glow-orb orb-3"></div>

      {/* Header */}
      <div className="social-wall-header">
        <div className="header-badge">
          <span className="badge-dot"></span>
          PHOTO GALLERY
        </div>
        <h1 className="main-title">
          <span className="title-gradient">PHOTO</span>
          <span className="title-highlight">GALLERY</span>
        </h1>
        <p className="header-subtitle">
          Celebrating Every Performance, Workshop &amp; Cultural Gathering
        </p>
      </div>

      {/* Marquee Ticker */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          <span className="marquee-content">{marqueeText}</span>
          <span className="marquee-content">{marqueeText}</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="social-tabs">
        <button
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => { setActiveTab('all'); setVisibleCount(4); }}
        >
          <span className="tab-icon">✦</span> All
        </button>
        <button
          className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
          onClick={() => { setActiveTab('performance'); setVisibleCount(4); }}
        >
          <span className="tab-icon">🎭</span> Performances
        </button>
        <button
          className={`tab-btn ${activeTab === 'workshop' ? 'active' : ''}`}
          onClick={() => { setActiveTab('workshop'); setVisibleCount(4); }}
        >
          <span className="tab-icon">✧</span> Workshops
        </button>
        <button
          className={`tab-btn ${activeTab === 'concert' ? 'active' : ''}`}
          onClick={() => { setActiveTab('concert'); setVisibleCount(4); }}
        >
          <span className="tab-icon">♪</span> Concerts
        </button>
        <button
          className={`tab-btn ${activeTab === 'lecture' ? 'active' : ''}`}
          onClick={() => { setActiveTab('lecture'); setVisibleCount(4); }}
        >
          <span className="tab-icon">◈</span> Lectures
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="feed-grid">
        {visibleItems.map(item => (
          <div key={item.id} className="feed-card">
            <div className="card-image">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="image-overlay">
                <span className="category-tag">{item.categoryLabel}</span>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title">{item.title}</h3>
              <div className="card-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {item.location}
              </div>
              <div className="card-date">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="social-footer">
        {hasMore && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More <span className="arrow">→</span>
          </button>
        )}
        <div className="footer-social-links">
          <a href="#" className="footer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="18" cy="6" r="0.8" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
          <a href="#" className="footer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
            </svg>
            Facebook
          </a>
          <a href="#" className="footer-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9.5" />
              <polyline points="16 2 22 8 16 8" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socialwall;