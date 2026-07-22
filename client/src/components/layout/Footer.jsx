import { useState, useEffect } from "react";
import {
  Heart,
  Globe,
  Shield,
  FileText,
  Coffee,
  ArrowUp,
  Mail,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

import "./Footer.css";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Vite environment variables
  const APP_VERSION = import.meta.env.VITE_APP_VERSION || "2.1.0";
  const BUILD_ID = import.meta.env.VITE_BUILD_ID || "2024.1";

  // Show scroll to top button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      const mainContent = document.querySelector(".dashboard-shell__main-content");
      if (mainContent) {
        setShowScrollTop(mainContent.scrollTop > 400);
      }
    };

    const mainContent = document.querySelector(".dashboard-shell__main-content");
    if (mainContent) {
      mainContent.addEventListener("scroll", handleScroll);
      return () => mainContent.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    const mainContent = document.querySelector(".dashboard-shell__main-content");
    if (mainContent) {
      mainContent.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { label: "Privacy Policy", icon: <Shield size={14} />, href: "#" },
    { label: "Terms of Service", icon: <FileText size={14} />, href: "#" },
    { label: "Documentation", icon: <FileText size={14} />, href: "#" },
  ];

  const socialLinks = [
    { icon: <ExternalLink size={16} />, href: "#", label: "Website" },
    { icon: <MessageCircle size={16} />, href: "#", label: "Community" },
    { icon: <Mail size={16} />, href: "#", label: "Email" },
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="app-footer__scroll-top"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp size={18} strokeWidth={2.5} />
        </button>
      )}

      <footer className="app-footer" role="contentinfo">
        <div className="app-footer__container">
          {/* Left Section */}
          <div className="app-footer__section app-footer__section--left">
            <div className="app-footer__brand">
              <div className="app-footer__logo">
                <Globe size={16} strokeWidth={2} />
              </div>
              <span className="app-footer__brand-text">
                KITD Admin Panel
              </span>
            </div>

            <p className="app-footer__copyright">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Center Section */}
          <div className="app-footer__section app-footer__section--center">
            <nav className="app-footer__nav" aria-label="Footer navigation">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="app-footer__nav-link"
                >
                  <span className="app-footer__nav-icon">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Right Section */}
          <div className="app-footer__section app-footer__section--right">
            {/* Social Links */}
            <div className="app-footer__social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="app-footer__social-link"
                  aria-label={social.label}
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Time Display */}
            <div className="app-footer__time">
              <span className="app-footer__time-icon">
                <Coffee size={12} />
              </span>
              <span className="app-footer__time-text">
                {currentTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="app-footer__bottom">
          <div className="app-footer__container">
            <p className="app-footer__tagline">
              Made with{" "}
              <Heart
                size={12}
                className="app-footer__heart-icon"
                fill="currentColor"
              />{" "}
              by KITD Team
            </p>
            <p className="app-footer__version">
              v{APP_VERSION} • Build {BUILD_ID}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;