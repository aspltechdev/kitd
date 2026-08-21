import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  Heart,
  MessageCircle,
  Share2,
  Clock,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import "./SocialWall.css";

// Import images (replace these with your actual assets)
import acthero from "../../assets/banner5.png";
import contactcta from "../../assets/galcta.png";
import abt1 from "../../assets/abt1.png";
import abt2 from "../../assets/abt2.png";
import abt3 from "../../assets/abt3.png";
import abt4 from "../../assets/abt4.png";

const fallbackImages = [abt1, abt2, abt3, abt4];

const SocialWall = () => {
  const [socialPosts, setSocialPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Mock Data simulating a social feed (Replace with API call later)
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // Simulating API call
        const mockPosts = [
          { id: 1, author: "Ananya Sharma", handle: "@ananyadance", content: "Had an amazing time performing at the Cultural Fest in Munich yesterday! The energy was incredible. #KITD #IndianClassicalDance", image: abt1, likes: 124, comments: 18, date: "2 hours ago" },
          { id: 2, author: "KITD Berlin", handle: "@kitdberlin", content: "Our SPANDA session this weekend was full of creativity and collaboration. Thank you to everyone who joined us!", image: abt2, likes: 89, comments: 5, date: "5 hours ago" },
          { id: 3, author: "Ravi Kumar", handle: "@ravikumar", content: "A beautiful moment captured during our Bharatanatyam workshop. Teaching the next generation is such a blessing.", image: abt3, likes: 256, comments: 34, date: "1 day ago" },
          { id: 4, author: "KITD Community", handle: "@kitd_community", content: "Throwback to our grand year-end celebration. Truly a night to remember for the entire community!", image: abt4, likes: 412, comments: 52, date: "3 days ago" },
          // Adding more to fill the grid
          { id: 5, author: "Priya Das", handle: "@priyadas", content: "Loved the workshop on 'Expressions in Kathak'. So much to learn.", image: abt1, likes: 67, comments: 8, date: "4 days ago" },
          { id: 6, author: "KITD Hamburg", handle: "@kitdhamburg", content: "Our upcoming event is just around the corner! Stay tuned for details.", image: abt2, likes: 45, comments: 3, date: "1 week ago" },
          { id: 7, author: "Vikram Singh", handle: "@vikramsingh", content: "Grateful for the opportunity to showcase our culture to a global audience.", image: abt3, likes: 89, comments: 12, date: "1 week ago" },
          { id: 8, author: "Meera Nair", handle: "@meeranair", content: "When the dance meets the soul. A magical performance!", image: abt4, likes: 203, comments: 28, date: "2 weeks ago" },
        ];
        setSocialPosts(mockPosts);
      } catch (err) {
        console.error("Failed to fetch social feed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const getImageUrl = (item, index) => {
    if (item?.image) return item.image;
    return fallbackImages[index % fallbackImages.length];
  };

  const openLightbox = (post, index) => {
    setSelectedPost(post);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPost(null);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction) => {
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < socialPosts.length) {
      setCurrentIndex(newIndex);
      setSelectedPost(socialPosts[newIndex]);
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedPost) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox(1);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedPost, currentIndex]);

  if (loading) {
    return (
      <div className="sw-socialwall">
        <div className="sw-socialwall__loading">
          <div className="sw-socialwall__spinner" />
          <p>Loading community feed...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Social Wall | KITD - Classical Indian Dance Germany</title>
        <meta name="description" content="Follow the KITD community's latest updates, moments, and cultural connections on our social wall." />
      </Helmet>

      <div className="sw-socialwall">

        {/* 1. HERO (Exact copy of GalleryPage hero) */}
        <section className="sw-socialwall__hero">
          <div className="sw-socialwall__hero-bg">
            <img src={acthero} alt="KITD Social Wall" loading="eager" />
            <div className="sw-socialwall__hero-overlay" />
            <div className="sw-socialwall__hero-gradient" />
          </div>
          <div className="sw-socialwall__hero-container">
            <div className="sw-socialwall__hero-content">
              <span className="sw-socialwall__hero-tag">
                <Camera size={18} /> COMMUNITY WALL
              </span>
              <h1>
                Our <span className="sw-socialwall__hero-title-accent">Stories</span>
              </h1>
              <p className="sw-socialwall__hero-desc">
                Discover the latest updates, behind-the-scenes moments, and 
                cultural connections shared by the KITD community across the globe.
              </p>
            </div>
          </div>
        </section>

        {/* 2. SOCIAL WALL GRID (Mimicking the gallery grid style) */}
        <section className="sw-socialwall__grid">
          <div className="sw-socialwall__container">
            <div className="sw-socialwall__header">
              <h2>Community Feed</h2>
              <span className="sw-socialwall__count">{socialPosts.length} recent posts</span>
            </div>

            {socialPosts.length === 0 ? (
              <div className="sw-socialwall__empty">
                <Camera size={48} strokeWidth={1.5} />
                <h3>No posts found</h3>
                <p>Community updates will appear here soon.</p>
              </div>
            ) : (
              <div className="sw-socialwall__grid-inner">
                {socialPosts.map((post, index) => (
                  <div
                    key={post.id || index}
                    className={`sw-socialwall__card ${hoveredCard === index ? 'sw-socialwall__card--hovered' : ''}`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{ transitionDelay: `${(index % 8) * 0.05}s` }}
                  >
                    <div className="sw-socialwall__card-image" onClick={() => openLightbox(post, index)}>
                      <img src={getImageUrl(post, index)} alt="Post image" loading="lazy" />
                    </div>
                    
                    <div className="sw-socialwall__card-content">
                      <div className="sw-socialwall__card-header">
                        <div className="sw-socialwall__card-avatar">
                          <User size={24} strokeWidth={1.5} />
                        </div>
                        <div className="sw-socialwall__card-user">
                          <h4 className="sw-socialwall__card-name">{post.author}</h4>
                          <span className="sw-socialwall__card-handle">{post.handle}</span>
                        </div>
                      </div>
                      
                      <div className="sw-socialwall__card-text">
                        <p>{post.content}</p>
                      </div>

                      <div className="sw-socialwall__card-meta">
                        <span className="sw-socialwall__card-date">
                          <Clock size={12} strokeWidth={1.5} /> {post.date}
                        </span>
                        <div className="sw-socialwall__card-actions">
                          <span><Heart size={14} strokeWidth={1.5} /> {post.likes}</span>
                          <span><MessageCircle size={14} strokeWidth={1.5} /> {post.comments}</span>
                          <span><Share2 size={14} strokeWidth={1.5} /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 3. LIGHTBOX (Same functionality) */}
        {selectedPost && (
          <div className="sw-socialwall__lightbox" onClick={closeLightbox}>
            <button className="sw-socialwall__lightbox-close" onClick={closeLightbox}>
              <span className="sw-socialwall__lightbox-close-icon">×</span>
            </button>
            
            <button 
              className="sw-socialwall__lightbox-nav sw-socialwall__lightbox-prev" 
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={28} strokeWidth={1.5} />
            </button>

            <div className="sw-socialwall__lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img src={getImageUrl(selectedPost, currentIndex)} alt="Post image" />
              <div className="sw-socialwall__lightbox-info">
                <h3>{selectedPost.author} <span style={{fontWeight:400,fontSize:'14px',color:'rgba(255,255,255,0.6)'}}>{selectedPost.handle}</span></h3>
                <span className="sw-socialwall__lightbox-counter">
                  {currentIndex + 1} / {socialPosts.length}
                </span>
              </div>
              <div className="sw-socialwall__lightbox-text">
                <p>{selectedPost.content}</p>
              </div>
            </div>

            <button 
              className="sw-socialwall__lightbox-nav sw-socialwall__lightbox-next" 
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              disabled={currentIndex === socialPosts.length - 1}
            >
              <ChevronRight size={28} strokeWidth={1.5} />
            </button>
          </div>
        )}

        {/* 4. CTA (Exact copy of GalleryPage CTA) */}
        <section className="sw-socialwall__cta">
          <div className="sw-socialwall__cta-bg">
            <img src={contactcta} alt="KITD Community" loading="lazy" />
            <div className="sw-socialwall__cta-overlay" />
          </div>
          <div className="sw-socialwall__container">
            <div className="sw-socialwall__cta-wrapper">
              <h2>Be Part of the Conversation</h2>
              <p>Join KITD and share your own cultural moments with our growing community across Germany.</p>
              <div className="sw-socialwall__cta-buttons">
                <Link to="/events" className="sw-socialwall__cta-btn sw-socialwall__cta-btn--primary">
                  Upcoming Events <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
                <Link to="/membership" className="sw-socialwall__cta-btn sw-socialwall__cta-btn--secondary">
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default SocialWall;