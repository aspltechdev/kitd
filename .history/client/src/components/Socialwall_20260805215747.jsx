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

import "./Socialwall.css";

// Fake placeholder data for the Marquee
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

          {/* 5. SOCIAL MEDIA BUTTONS (Instagram & Facebook) */}
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
              {/* We duplicate the cards array to ensure a seamless infinite loop */}
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