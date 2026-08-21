import { Helmet } from "react-helmet-async";
import "./SocialWall.css";

// Import your real hero and CTA background images here
import acthero from "../../assets/banner6.png";
import contactcta from "../../assets/banner6.png";

const SocialWall = ({ instagramLinks = [] }) => {
  // Helper to convert an Instagram URL to an embed URL
  const getEmbedUrl = (url) => {
    // Removes trailing slash if present, then appends /embed
    return `${url.replace(/\/$/, '')}/embed`;
  };

  return (
    <>
      <Helmet>
        <title>Social Wall | KITD - Classical Indian Dance Germany</title>
        <meta name="description" content="Follow our real-time Instagram feed showcasing the vibrant journey of KITD." />
      </Helmet>

      <div className="sw-socialwall">
        {/* 1. HERO SECTION (Same as Gallery) */}
        <section className="sw-socialwall__hero">
          <div className="sw-socialwall__hero-bg">
            <img src={acthero} alt="KITD Social Wall" loading="eager" />
            <div className="sw-socialwall__hero-overlay" />
            <div className="sw-socialwall__hero-gradient" />
          </div>
          <div className="sw-socialwall__hero-container">
            <div className="sw-socialwall__hero-content">
              <span className="sw-socialwall__hero-tag">INSTAGRAM WALL</span>
              <h1>
                Our <span className="sw-socialwall__hero-title-accent">Reel Stories</span>
              </h1>
              <p className="sw-socialwall__hero-desc">
                Follow our real-time journey. Here are the latest posts directly from our Instagram.
              </p>
            </div>
          </div>
        </section>

        {/* 2. SOCIAL WALL GRID (Uses the exact Gallery CSS) */}
        <section className="sw-socialwall__grid">
          <div className="sw-socialwall__container">
            <div className="sw-socialwall__header">
              <h2>Instagram Feed</h2>
              <span className="sw-socialwall__count">{instagramLinks.length} recent posts</span>
            </div>

            {instagramLinks.length === 0 ? (
              <div className="sw-socialwall__empty">
                <h3>No posts linked yet</h3>
                <p>Pass an array of Instagram URLs to the `instagramLinks` prop.</p>
              </div>
            ) : (
              <div className="sw-socialwall__grid-inner">
                {instagramLinks.map((url, index) => (
                  <div key={index} className="sw-socialwall__card sw-socialwall__card--embed">
                    <div className="sw-socialwall__card-embed-wrapper">
                      <iframe
                        src={getEmbedUrl(url)}
                        width="100%"
                        height="650" // Instagram needs enough height to show comments
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency="true"
                        title="Instagram Post"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 3. CTA SECTION (Same as Gallery) */}
        <section className="sw-socialwall__cta">
          <div className="sw-socialwall__cta-bg">
            <img src={contactcta} alt="KITD Community" loading="lazy" />
            <div className="sw-socialwall__cta-overlay" />
          </div>
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