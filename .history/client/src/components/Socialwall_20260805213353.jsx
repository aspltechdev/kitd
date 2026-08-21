import React, { useState } from 'react';
import './SocialWall.css';

const SocialWall = () => {
    const [activeTab, setActiveTab] = useState('all');

    const feedPosts = [
        {
            id: 1,
            platform: 'instagram',
            username: 'futuremaxx',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
            caption: 'Installing cutting-edge DAS solutions at Chennai Central. Seamless connectivity for thousands of commuters! 📡✨ #FutureMaxx #RFEngineering',
            likes: 342,
            comments: 28,
            time: '2 hours ago'
        },
        {
            id: 2,
            platform: 'facebook',
            username: 'FutureMaxx Tech',
            image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=300&fit=crop',
            caption: 'Our RF team just completed a massive signal booster deployment across 5 corporate towers in Bengaluru. Enterprise-grade connectivity, delivered! 🚀',
            likes: 189,
            comments: 15,
            time: '5 hours ago'
        },
        {
            id: 3,
            platform: 'instagram',
            username: 'futuremaxx',
            image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop',
            caption: 'Behind the scenes: RF engineering at its finest. Precision testing and optimization for maximum signal strength. 🔧📶 #WirelessSolutions',
            likes: 567,
            comments: 42,
            time: '1 day ago'
        },
        {
            id: 4,
            platform: 'facebook',
            username: 'FutureMaxx Tech',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
            caption: 'Proud to announce our partnership with leading telecom providers to expand 5G coverage across rural India. Connecting every space, every life. 🇮🇳',
            likes: 421,
            comments: 56,
            time: '2 days ago'
        },
        {
            id: 5,
            platform: 'instagram',
            username: 'futuremaxx',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
            caption: 'Day 3 of the Hyderabad DAS installation. 100% signal coverage achieved across 12 floors. Team FutureMaxx making it happen! 💪 #SignalBoost',
            likes: 234,
            comments: 19,
            time: '3 days ago'
        },
        {
            id: 6,
            platform: 'facebook',
            username: 'FutureMaxx Tech',
            image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop',
            caption: 'RF Survey Complete! Our team mapped out the perfect signal distribution strategy for Mumbai\'s new business district. Innovation in motion. 📊',
            likes: 298,
            comments: 33,
            time: '4 days ago'
        }
    ];

    const filteredPosts = activeTab === 'all'
        ? feedPosts
        : feedPosts.filter(post => post.platform === activeTab);

    return (
        <div className="social-wall">
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>

            <div className="social-wall-header">
                <div className="header-badge">
                    <span className="badge-dot"></span>
                    SOCIAL FEED
                </div>
                <h1 className="main-title">
                    <span className="title-gradient">SOCIAL</span>
                    <span className="title-highlight">WALL</span>
                </h1>
                <p className="header-subtitle">
                    Follow our latest Mobile Signal Booster installations, RF engineering projects,
                    <br />
                    DAS deployments, and enterprise wireless connectivity solutions across India.
                </p>
            </div>

            <div className="social-tabs">
                <button
                    className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                >
                    <span className="tab-icon">⊹</span> All
                </button>
                <button
                    className={`tab-btn instagram-tab ${activeTab === 'instagram' ? 'active' : ''}`}
                    onClick={() => setActiveTab('instagram')}
                >
                    <svg className="tab-svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    Instagram
                </button>
                <button
                    className={`tab-btn facebook-tab ${activeTab === 'facebook' ? 'active' : ''}`}
                    onClick={() => setActiveTab('facebook')}
                >
                    <svg className="tab-svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                </button>
            </div>

            <div className="feed-grid">
                {filteredPosts.map((post) => (
                    <div key={post.id} className={`feed-card platform-${post.platform}`}>
                        <div className="card-header">
                            <div className="platform-badge">
                                {post.platform === 'instagram' ? (
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                )}
                                <span>{post.platform === 'instagram' ? '@' : ''}{post.username}</span>
                            </div>
                            <span className="post-time">{post.time}</span>
                        </div>
                        <div className="card-image">
                            <img src={post.image} alt="Social post" loading="lazy" />
                            <div className="image-overlay">
                                <span className="platform-tag">{post.platform}</span>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="post-caption">{post.caption}</p>
                            <div className="post-engagement">
                                <div className="engagement-item">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                                    </svg>
                                    <span>{post.likes}</span>
                                </div>
                                <div className="engagement-item">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                    </svg>
                                    <span>{post.comments}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="social-footer">
                <button className="load-more-btn">
                    Load More <span className="arrow">→</span>
                </button>
                <div className="footer-social-links">
                    <a href="#" className="footer-link instagram-link">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                        <span>Instagram</span>
                    </a>
                    <a href="#" className="footer-link facebook-link">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span>Facebook</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialWall;