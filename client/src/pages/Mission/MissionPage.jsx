// src/pages/MissionVision/MissionVisionPage.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Globe,
  BookOpen,
  Sparkles,
  Handshake,
  Scroll,
  Lightbulb,
  Quote,
  ChevronRight,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import "./MissionPage.css";

// Mission feature cards
const missionFeatures = [
  {
    icon: <BookOpen size={20} strokeWidth={1.5} />,
    title: "Cultural Preservation",
    description:
      "Safeguarding the authentic traditions and techniques of Indian Classical Dance for future generations through documentation and practice.",
  },
  {
    icon: <Sparkles size={20} strokeWidth={1.5} />,
    title: "Knowledge Sharing",
    description:
      "Facilitating the exchange of knowledge through workshops, lecture demonstrations, and educational resources across Germany.",
  },
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: "Community Collaboration",
    description:
      "Building meaningful connections between artists, teachers, institutions, and cultural organisations throughout the country.",
  },
  {
    icon: <Heart size={20} strokeWidth={1.5} />,
    title: "Artistic Development",
    description:
      "Supporting the growth of artists through performance opportunities, networking, and professional development programmes.",
  },
];

// Vision cards
const visionCards = [
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: "National Community",
    description:
      "A connected network of artists and cultural practitioners spanning all regions of Germany.",
  },
  {
    icon: <Handshake size={20} strokeWidth={1.5} />,
    title: "Institutional Partnerships",
    description:
      "Strong collaborations with cultural institutions, universities, and arts organisations.",
  },
  {
    icon: <Globe size={20} strokeWidth={1.5} />,
    title: "Cultural Exchange",
    description:
      "Vibrant intercultural dialogue introducing Indian Classical Dance to diverse audiences.",
  },
  {
    icon: <Shield size={20} strokeWidth={1.5} />,
    title: "Long-term Sustainability",
    description:
      "A thriving ecosystem that ensures Indian Classical Dance continues to flourish in Germany.",
  },
];

// Core values
const coreValues = [
  {
    icon: <Shield size={18} strokeWidth={1.5} />,
    title: "Integrity",
    description: "We uphold the highest standards of honesty and ethical conduct in all our activities.",
  },
  {
    icon: <Users size={18} strokeWidth={1.5} />,
    title: "Inclusiveness",
    description: "We welcome diverse voices, dance forms, and perspectives within our community.",
  },
  {
    icon: <Handshake size={18} strokeWidth={1.5} />,
    title: "Collaboration",
    description: "We believe in the power of working together to achieve shared goals.",
  },
  {
    icon: <Heart size={18} strokeWidth={1.5} />,
    title: "Respect",
    description: "We honour the traditions, artists, and cultural heritage of Indian Classical Dance.",
  },
  {
    icon: <Scroll size={18} strokeWidth={1.5} />,
    title: "Tradition",
    description: "We remain rooted in the authentic classical dance traditions while embracing growth.",
  },
  {
    icon: <Lightbulb size={18} strokeWidth={1.5} />,
    title: "Innovation",
    description: "We encourage creative approaches to education, performance, and community engagement.",
  },
];

const MissionPage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Mission & Vision | KITD - Classical Indian Dance Germany</title>
        <meta
          name="description"
          content="Discover the mission, vision, and core values of Klassischer Indischer Tanz Deutschland (KITD) e.V. - preserving and promoting Indian Classical Dance across Germany."
        />
      </Helmet>

      <div className="missionvision-page">
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="mv-hero">
          <div className="mv-hero-bg" />
          <div className="mv-hero-container">
            <div className="mv-hero-content">
              <div className="mv-hero-eyebrow">
                <span className="mv-hero-eyebrow-line" />
                <span className="mv-hero-eyebrow-text">Our Purpose</span>
              </div>
              <h1 className="mv-hero-title">
                Mission &
                <span className="mv-hero-title-accent"> Vision</span>
              </h1>
              <p className="mv-hero-description">
                Guiding principles that define our commitment to mediating, 
                broadcasting, and fostering Indian Classical Dance and its 
                associated knowledge across Germany.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* BREADCRUMB */}
        {/* ============================================ */}
        <div className="mv-breadcrumb">
          <div className="mv-container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <Link to="/about">About</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>Mission & Vision</span>
          </div>
        </div>

        {/* ============================================ */}
        {/* MISSION SECTION */}
        {/* ============================================ */}
        <section className="mv-mission" data-section="mission">
          <div className="mv-container">
            <div className={`mv-mission-wrapper ${isVisible.mission ? "visible" : ""}`}>
              {/* Mission Header */}
              <div className="mv-mission-header">
                <div className="mv-mission-icon-large">
                  <Target size={36} strokeWidth={1.5} />
                </div>
                <div className="mv-mission-tags">
                  <span className="mv-tag">Preserve</span>
                  <span className="mv-tag-dot">•</span>
                  <span className="mv-tag">Promote</span>
                  <span className="mv-tag-dot">•</span>
                  <span className="mv-tag">Foster</span>
                </div>
                <h2 className="mv-mission-title">Our Mission</h2>
                <p className="mv-mission-description">
                  To preserve and promote Indian Classical Dance through education, 
                  performances, collaboration, and community engagement while creating 
                  opportunities for artists and learners across Germany. We are dedicated 
                  to mediating, broadcasting, and the continued fostering of Indian 
                  Classical Dance and its associated knowledge.
                </p>
              </div>

              {/* Mission Feature Cards */}
              <div className="mv-mission-grid">
                {missionFeatures.map((feature, index) => (
                  <div
                    className="mv-mission-card"
                    key={index}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="mv-mission-card-icon">{feature.icon}</div>
                    <h3 className="mv-mission-card-title">{feature.title}</h3>
                    <p className="mv-mission-card-description">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* VISION SECTION */}
        {/* ============================================ */}
        <section className="mv-vision" data-section="vision">
          <div className="mv-container">
            <div className={`mv-vision-wrapper ${isVisible.vision ? "visible" : ""}`}>
              {/* Vision Header */}
              <div className="mv-vision-header">
                <div className="mv-vision-icon-large">
                  <Eye size={36} strokeWidth={1.5} />
                </div>
                <h2 className="mv-vision-title">Our Vision</h2>
                <p className="mv-vision-headline">
                  Germany's leading collaborative network
                  <br />
                  for Indian Classical Dance.
                </p>
                <p className="mv-vision-description">
                  To create a strong and inclusive network that connects artists, 
                  teachers, institutions, and cultural organisations while inspiring 
                  future generations to celebrate and sustain Indian Classical Dance 
                  across Germany.
                </p>
              </div>

              {/* Vision Cards */}
              <div className="mv-vision-grid">
                {visionCards.map((card, index) => (
                  <div
                    className="mv-vision-card"
                    key={index}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="mv-vision-card-icon">{card.icon}</div>
                    <h3 className="mv-vision-card-title">{card.title}</h3>
                    <p className="mv-vision-card-description">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CORE VALUES SECTION */}
        {/* ============================================ */}
        <section className="mv-values" data-section="values">
          <div className="mv-container">
            <div className={`mv-values-wrapper ${isVisible.values ? "visible" : ""}`}>
              <div className="mv-values-header">
                <div className="mv-values-eyebrow">
                  <span className="mv-values-eyebrow-line" />
                  <span className="mv-values-eyebrow-text">What We Stand For</span>
                </div>
                <h2 className="mv-values-title">Core Values</h2>
              </div>

              <div className="mv-values-grid">
                {coreValues.map((value, index) => (
                  <div
                    className="mv-value-card"
                    key={index}
                    style={{ transitionDelay: `${index * 0.06}s` }}
                  >
                    <div className="mv-value-icon">{value.icon}</div>
                    <div className="mv-value-content">
                      <h3 className="mv-value-title">{value.title}</h3>
                      <p className="mv-value-description">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* QUOTE SECTION */}
        {/* ============================================ */}
        <section className="mv-quote-section" data-section="quote">
          <div className="mv-quote-bg" />
          <div className="mv-container">
            <div className={`mv-quote-wrapper ${isVisible.quote ? "visible" : ""}`}>
              <Quote size={40} strokeWidth={1} className="mv-quote-icon" />
              <div className="mv-quote-lines">
                <p className="mv-quote-line">Together we preserve</p>
                <p className="mv-quote-line">Together we inspire</p>
                <p className="mv-quote-line mv-quote-line-accent">Together we grow</p>
              </div>
              <div className="mv-quote-divider" />
              <p className="mv-quote-attribution">— The KITD Community</p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CTA SECTION */}
        {/* ============================================ */}
        <section className="mv-cta" data-section="cta">
          <div className="mv-container">
            <div className={`mv-cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
              <h2 className="mv-cta-title">Join Our Mission</h2>
              <p className="mv-cta-text">
                Become part of a growing community dedicated to preserving and 
                promoting Indian Classical Dance across Germany.
              </p>
              <div className="mv-cta-buttons">
                <Link to="/membership" className="mv-cta-btn mv-cta-btn-primary">
                  <span>Become a Member</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
                <Link to="/about" className="mv-cta-btn mv-cta-btn-secondary">
                  <span>Learn More About KITD</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MissionPage;