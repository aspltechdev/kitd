import { Helmet } from "react-helmet-async";
import { Camera } from "lucide-react";
import "./SocialWall.css";

// If you want images, import them here like your Gallery did, 
// or remove them and use CSS gradients (no images required for it to work).

const SocialWall = ({ instagramLinks = [] }) => {
  // Helper to convert an Instagram URL to an embed URL
  const getEmbedUrl = (url) => {
    if (!url) return "";
    return `${url.replace(/\/$/, '')}/embed`;
  };

  return (
    <>
      <Helmet>
        <title>Social Wall | KITD - Classical Indian Dance Germany</title>
        <meta name="description" content="Follow our real-time Instagram feed showcasing the vibrant journey of KITD." />
      </Helmet>

      <div className="sw-socialwall">
        
        {/* 1. HERO SECTION */}
        <section className="sw-socialwall__hero">
          {/* To avoid import errors, replace bg with an img tag or a CSS gradient class */}
          <div className="sw-socialwall__hero-bg">
             {/* If you have banner images, put them here: <img src={acthero} alt="..." /> */}
          </div>
          <div className="sw-socialwall__hero-overlay" />
          <div className="sw-socialwall__hero-gradient" />
          
          <div className="sw-socialwall__hero-container">
            <div className="sw-socialwall__hero-content">
              <span className="sw-socialwall__hero-tag">
                <Camera size={18} /> INSTAGRAM WALL
              </span>
              <h1>
                Our <span className="sw-socialwall__hero-title-accent">Reel Stories</span>
              </h1>
              <p className="sw-socialwall__hero-desc">
                Follow our real-time journey. Here are the latest posts directly from our Instagram.
              </p>
            </div>
          </div>
        </section>

        {/* 2. SOCIAL WALL GRID */}
        <section className="sw-socialwall__grid">
          <div className="sw-socialwall__container">
            <div className="sw-socialwall__header">
              <h2>Instagram Feed</h2>
              <span className="sw-socialwall__count">{instagramLinks.length} recent posts</span>
            </div>

            {instagramLinks.length === 0 ? (
              <div className="sw-socialwall__empty">
                <Camera size={48} />
                <h3>No posts linked yet</h3>
                <p>Pass an array of Instagram URLs to the `instagramLinks` prop.</p>
              </div>
            ) : (
              <div className="sw-socialwall__grid-inner">
                {instagramLinks.map((url, index) => (
                  <div key={index} className="sw-socialwall__card">
                    <div className="sw-socialwall__card-image">
                      <iframe
                        src={getEmbedUrl(url)}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency="true"
                        title="Instagram Post"
                        loading="lazy"
                      />
                      {/* Overlay styled in the CSS. pointer-events: none allows you to click the iframe! */}
                      <div className="sw-socialwall__card-overlay">
                        <Camera size={24} />
                        <span>View on Instagram</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 3. CTA SECTION */}
        <section className="sw-socialwall__cta">
          <div className="sw-socialwall__cta-bg">
             {/* If you have contactcta, put it here: <img src={contactcta} alt="..." /> */}
          </div>
          <div className="sw-socialwall__cta-overlay" />
          <div className="sw-socialwall__container">
            <div className="sw-socialwall__cta-wrapper">
              <h2>Be Part of the Conversation</h2>
              <p>Join our community and share your own cultural moments. Follow us on Instagram!</p>
              <div className="sw-socialwall__cta-buttons">
                <a href="https://www.instagram.com/yourkitdhandle" target="_blank" rel="noreferrer" className="sw-socialwall__cta-btn sw-socialwall__cta-btn--primary">
                  Visit our Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SocialWall;