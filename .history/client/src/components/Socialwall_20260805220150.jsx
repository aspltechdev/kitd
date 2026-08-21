import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Check,
  Instagram,
  Facebook,
  Sparkles,
  Users,
  Award,
  Heart
} from "lucide-react";

// 🟢 CSS INJECTED DIRECTLY HERE (No external CSS file needed!)
const socialWallStyles = `
  :root {
    --sw-bg-start: #3d4b56;
    --sw-bg-mid: #4f5a63;
    --sw-bg-end: #2b2b40;
    --sw-teal: #9AD3CB;
    --sw-purple-light: #2d1b4e;
    --sw-white: #FFFFFF;
    --sw-glass-bg: rgba(255, 255, 255, 0.05);
    --sw-glass-border: rgba(255, 255, 255, 0.1);
  }

  .sw-social-wall {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, var(--sw-bg-start) 0%, var(--sw-bg-mid) 40%, var(--sw-bg-end) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0 40px 0;
    font-family: 'Playfair Display', 'Times New Roman', serif;
  }

  .sw-container {
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--sw-white);
  }

  .sw-tag-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
  }
  .sw-tag-line {
    display: block;
    width: 32px;
    height: 2px;
    background-color: var(--sw-teal);
  }
  .sw-tag {
    background: rgba(154, 211, 203, 0.15);
    border-radius: 50px;
    padding: 6px 20px;
    font-family: 'Inter', 'Helvetica', sans-serif;
    font-size: 11px;
    font-weight: 600;
    color: var(--sw-teal);
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .sw-headline {
    font-size: 48px;
    font-weight: 500;
    letter-spacing: -0.5px;
    margin: 0 0 16px 0;
    line-height: 1.2;
  }
  .sw-headline-accent { color: var(--sw-teal); }

  .sw-description {
    font-family: 'Inter', 'Helvetica', sans-serif;
    font-weight: 300;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.75);
    max-width: 700px;
    line-height: 1.6;
    margin: 0 0 32px 0;
  }

  .sw-features-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px 32px;
    margin-bottom: 40px;
  }
  .sw-feature-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Inter', 'Helvetica', sans-serif;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 400;
  }
  .sw-check-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    color: var(--sw-teal);
    flex-shrink: 0;
  }

  .sw-cta-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background-color: var(--sw-purple-light);
    color: var(--sw-white);
    border: none;
    padding: 16px 36px;
    border-radius: 50px;
    font-family: 'Inter', 'Helvetica', sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(26, 2, 54, 0.3);
    margin-bottom: 40px;
  }
  .sw-cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(26, 2, 54, 0.5);
    background-color: #3b2663;
  }

  .sw-social-buttons-container {
    display: flex;
    gap: 16px;
    margin-bottom: 48px;
  }
  .sw-social-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 28px;
    border-radius: 50px;
    font-family: 'Inter', 'Helvetica', sans-serif;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    color: var(--sw-white);
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
  }
  .sw-social-btn--instagram {
    background: linear-gradient(135deg, #405DE6, #E1306C, #FCAF45);
    box-shadow: 0 4px 16px rgba(225, 48, 108, 0.3);
  }
  .sw-social-btn--instagram:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 8px 24px rgba(225, 48, 108, 0.4); }
  
  .sw-social-btn--facebook { background: #1877F2; box-shadow: 0 4px 16px rgba(24, 119, 242, 0.3); }
  .sw-social-btn--facebook:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 8px 24px rgba(24, 119, 242, 0.4); }

  .sw-marquee-wrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 10px 0;
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  }
  .sw-marquee-track {
    display: flex;
    gap: 24px;
    width: max-content;
    animation: swMarqueeScroll 30s linear infinite;
  }
  @keyframes swMarqueeScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .sw-marquee-card {
    min-width: 260px;
    background: var(--sw-glass-bg);
    border: 1px solid var(--sw-glass-border);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 28px 20px;
    text-align: center;
    transition: all 0.3s ease;
  }
  .sw-marquee-card:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--sw-teal);
  }
  .sw-card-icon-wrapper {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sw-teal);
    margin-bottom: 16px;
  }
  .sw-card-title { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 500; color: var(--sw-white); margin: 0 0 8px 0; }
  .sw-card-desc { font-family: 'Inter', 'Helvetica', sans-serif; font-size: 14px; color: rgba(255, 255, 255, 0.6); margin: 0; font-weight: 300; }

  @media (max-width: 1024px) {
    .sw-headline { font-size: 40px; }
    .sw-features-list { gap: 16px; }
  }
  @media (max-width: 768px) {
    .sw-headline { font-size: 32px; }
    .sw-description { font-size: 16px; }
    .sw-features-list { flex-direction: column; align-items: center; }
    .sw-social-buttons-container { flex-direction: column; width: 100%; max-width: 300px; }
    .sw-social-btn { width: 100%; }
  }
  @media (max-width: 480px) {
    .sw-headline { font-size: 26px; }
    .sw-tag { font-size: 10px; padding: 4px 14px; }
    .sw-feature-item { font-size: 14px; }
    .sw-cta-button { width: 100%; justify-content: center; padding: 14px 24px; }
  }
`;

const marqueeCards = [
  { id: 1, icon: <Users size={24} />, title: "Community Connect", desc: "Network with artists & teachers" },
  { id: 2, icon: <Sparkles size={24} />, title: "Exclusive Workshops", desc: "Access to members-only classes" },
  { id: 3, icon: <Award size={24} />, title: "Performance Opps", desc: "Stage presence across Germany" },
  { id: 4, icon: <Heart size={24} />, title: "Cultivate Culture", desc: "Preserve Indian Classical Dance" },
  { id: 5, icon: <Users size={24} />, title: "Artist Network", desc: "Collaborate and grow together" },
  { id: 6, icon: <Sparkles size={24} />, title: "Special Events", desc: "Premieres and cultural fests" },
];

const SocialWall = () => {
  return (
    <>
      <style>{socialWallStyles}</style>
      <Helmet>
        <title>Social Wall | KITD - Classical Indian Dance Germany</title>
        <meta name="description" content="Join our community and stay connected through our Instagram and Facebook." />
      </Helmet>

      <div className="sw-social-wall">
        <div className="sw-container">
          
          {/* 1. THE JOIN TAG */}
          <div className="sw-tag-wrapper">
            <span className="sw-tag-line"></span>
            <span className="sw-tag">JOIN THE COMMUNITY</span>
          </div>

          {/* 2. HEADLINE & DESCRIPTION */}
          <h1 className="sw-headline">
            Become Part of <br />
            <span className="sw-headline-accent">KITD's Growing</span> Family
          </h1>
          <p className="sw-description">
            Connect with a vibrant community of artists, teachers, students, and supporters 
            dedicated to preserving Indian Classical Dance across Germany.
          </p>

          {/* 3. FEATURE LIST */}
          <div className="sw-features-list">
            {[
              "Access to KITD events & workshops",
              "Performance opportunities",
              "Networking with artists",
              "Member newsletter & resources"
            ].map((feature, i) => (
              <div key={i} className="sw-feature-item">
                <div className="sw-check-icon"><Check size={14} strokeWidth={3} /></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* 4. MAIN CTA BUTTON */}
          <button className="sw-cta-button">
            Apply for Membership <ArrowRight size={20} />
          </button>

          {/* 5. INSTAGRAM & FACEBOOK BUTTONS */}
          <div className="sw-social-buttons-container">
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer" className="sw-social-btn sw-social-btn--instagram">
              <Instagram size={20} /> Instagram
            </a>
            <a href="https://facebook.com/yourhandle" target="_blank" rel="noreferrer" className="sw-social-btn sw-social-btn--facebook">
              <Facebook size={20} /> Facebook
            </a>
          </div>

          {/* 6. INFINITE CARD MARQUEE */}
          <div className="sw-marquee-wrapper">
            <div className="sw-marquee-track">
              {/* Duplicated array for seamless infinite loop */}
              {[...marqueeCards, ...marqueeCards].map((card, index) => (
                <div key={`${card.id}-${index}`} className="sw-marquee-card">
                  <div className="sw-card-icon-wrapper">{card.icon}</div>
                  <h4 className="sw-card-title">{card.title}</h4>
                  <p className="sw-card-desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default SocialWall;