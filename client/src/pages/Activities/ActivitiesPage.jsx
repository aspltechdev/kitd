// src/pages/Activities/ActivitiesPage.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Music,
  BookOpen,
  Users,
  Globe,
  Heart,
  Award,
  Sparkles,
  ChevronRight,
  Calendar,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import "./ActivitiesPage.css";

// Activities cards
const activities = [
  {
    icon: <Music size={24} strokeWidth={1.5} />,
    title: "Performances",
    description:
      "Classical dance performances showcasing the richness and diversity of Indian dance traditions across Germany.",
    slug: "/events",
    color: "card-burgundy",
  },
  {
    icon: <BookOpen size={24} strokeWidth={1.5} />,
    title: "Workshops & Masterclasses",
    description:
      "Professional workshops and learning sessions led by experienced artists and educators.",
    slug: "/events",
    color: "card-gold",
  },
  {
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    title: "SPANDA Programme",
    description:
      "Special movement and creative learning sessions designed to inspire artistic growth and collaboration.",
    slug: "/activities/spanda",
    color: "card-burgundy",
  },
  {
    icon: <Globe size={24} strokeWidth={1.5} />,
    title: "Cultural Exchange",
    description:
      "Collaborative initiatives that connect Indian Classical Dance with diverse cultural communities.",
    slug: "/activities",
    color: "card-gold",
  },
  {
    icon: <Users size={24} strokeWidth={1.5} />,
    title: "Community Engagement",
    description:
      "Activities that encourage participation, networking and meaningful connections among members.",
    slug: "/membership",
    color: "card-burgundy",
  },
  {
    icon: <Award size={24} strokeWidth={1.5} />,
    title: "Artist Development",
    description:
      "Providing opportunities for artists, teachers and young performers to showcase and strengthen their practice.",
    slug: "/artists",
    color: "card-gold",
  },
];

// Annual activities timeline
const annualTimeline = [
  {
    month: "January",
    title: "Community Meet",
    description: "New Year gathering to connect members and plan the year ahead.",
  },
  {
    month: "March",
    title: "Spring Workshop",
    description: "Intensive training sessions with renowned artists and teachers.",
  },
  {
    month: "June",
    title: "Summer Performance",
    description: "Showcasing classical dance performances across multiple cities.",
  },
  {
    month: "September",
    title: "Cultural Festival",
    description: "Annual festival celebrating Indian Classical Dance and cultural exchange.",
  },
  {
    month: "November",
    title: "Annual Gathering",
    description: "Year-end celebration, general assembly, and community networking.",
  },
];

// Community impact statistics
const impactStats = [
  {
    icon: <Music size={20} strokeWidth={1.5} />,
    value: "Performances",
    label: "Across Germany",
  },
  {
    icon: <BookOpen size={20} strokeWidth={1.5} />,
    value: "Workshops",
    label: "For All Levels",
  },
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    value: "Collaborations",
    label: "With Institutions",
  },
  {
    icon: <Heart size={20} strokeWidth={1.5} />,
    value: "Community Events",
    label: "Nationwide",
  },
];

// Gallery preview images
const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    alt: "Performance",
    category: "Performance",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    alt: "Workshop",
    category: "Workshop",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    alt: "Cultural Exchange",
    category: "Cultural Exchange",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    alt: "Community Event",
    category: "Community",
  },
];

const ActivitiesPage = () => {
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
        <title>Activities | KITD - Classical Indian Dance Germany</title>
        <meta
          name="description"
          content="Discover KITD's activities including performances, workshops, SPANDA programme, cultural exchange, community engagement, and artist development across Germany."
        />
      </Helmet>

      <div className="activities-page">
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="act-hero">
          <div className="act-hero-bg" />
          <div className="act-hero-container">
            <div className="act-hero-content">
              <div className="act-hero-eyebrow">
                <span className="act-hero-eyebrow-line" />
                <span className="act-hero-eyebrow-text">Our Activities</span>
              </div>
              <h1 className="act-hero-title">
                Preserving, Promoting &
                <br />
                <span className="act-hero-title-accent">Celebrating</span> Indian Classical Dance
              </h1>
              <p className="act-hero-description">
                KITD organizes a diverse range of programmes, performances, 
                workshops, and collaborative initiatives that strengthen the 
                Indian Classical Dance community while encouraging cultural 
                exchange across Germany.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* BREADCRUMB */}
        {/* ============================================ */}
        <div className="act-breadcrumb">
          <div className="act-container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>Activities</span>
          </div>
        </div>

        {/* ============================================ */}
        {/* INTRODUCTION */}
        {/* ============================================ */}
        <section className="act-intro" data-section="intro">
          <div className="act-container">
            <div className={`act-intro-wrapper ${isVisible.intro ? "visible" : ""}`}>
              <div className="act-intro-eyebrow">
                <span className="act-intro-eyebrow-line" />
                <span className="act-intro-eyebrow-text">What We Do</span>
              </div>
              <h2 className="act-intro-title">
                A Platform for
                <span className="act-intro-title-accent"> Artists & Community</span>
              </h2>
              <p className="act-intro-description">
                Through performances, educational initiatives, workshops, cultural 
                collaborations, and community engagement, KITD provides a platform 
                for artists, teachers, students, and institutions to connect, learn, 
                and grow together.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* ACTIVITIES GRID */}
        {/* ============================================ */}
        <section className="act-grid-section" data-section="grid">
          <div className="act-container">
            <div className={`act-grid ${isVisible.grid ? "visible" : ""}`}>
              {activities.map((activity, index) => (
                <Link
                  to={activity.slug}
                  className={`act-card ${activity.color}`}
                  key={index}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="act-card-icon">{activity.icon}</div>
                  <h3 className="act-card-title">{activity.title}</h3>
                  <p className="act-card-description">{activity.description}</p>
                  <span className="act-card-link">
                    <span>Learn More</span>
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FEATURED PROGRAMME - SPANDA */}
        {/* ============================================ */}
        <section className="act-featured" data-section="featured">
          <div className="act-container">
            <div className={`act-featured-wrapper ${isVisible.featured ? "visible" : ""}`}>
              <div className="act-featured-content">
                <div className="act-featured-tags">
                  <span className="act-featured-tag">Movement</span>
                  <span className="act-featured-tag-dot">•</span>
                  <span className="act-featured-tag">Learning</span>
                  <span className="act-featured-tag-dot">•</span>
                  <span className="act-featured-tag">Collaboration</span>
                </div>
                <h2 className="act-featured-title">SPANDA</h2>
                <p className="act-featured-description">
                  SPANDA is one of KITD's unique initiatives that brings together 
                  artists and participants through movement exploration, workshops, 
                  and collaborative learning experiences. It embodies the spirit of 
                  expansion and creative growth.
                </p>
                <Link to="/activities/spanda" className="act-featured-btn">
                  <span>Learn More About SPANDA</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </div>
              <div className="act-featured-visual">
                <div className="act-featured-image">
                  <img
                    src="https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=700"
                    alt="SPANDA Programme"
                  />
                </div>
                <div className="act-featured-accent" />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* ANNUAL ACTIVITIES TIMELINE */}
        {/* ============================================ */}
        <section className="act-timeline-section" data-section="timeline">
          <div className="act-container">
            <div className="act-timeline-header">
              <div className="act-timeline-eyebrow">
                <span className="act-timeline-eyebrow-line" />
                <span className="act-timeline-eyebrow-text">Throughout the Year</span>
              </div>
              <h2 className="act-timeline-title">
                Annual
                <span className="act-timeline-title-accent"> Activities</span>
              </h2>
            </div>

            <div className={`act-timeline ${isVisible.timeline ? "visible" : ""}`}>
              {annualTimeline.map((item, index) => (
                <div
                  className="act-timeline-item"
                  key={index}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="act-timeline-marker">
                    <div className="act-timeline-dot">
                      <Calendar size={14} strokeWidth={1.5} />
                    </div>
                    {index < annualTimeline.length - 1 && (
                      <div className="act-timeline-line" />
                    )}
                  </div>
                  <div className="act-timeline-content">
                    <span className="act-timeline-month">{item.month}</span>
                    <h3 className="act-timeline-item-title">{item.title}</h3>
                    <p className="act-timeline-item-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* COMMUNITY IMPACT */}
        {/* ============================================ */}
        <section className="act-impact" data-section="impact">
          <div className="act-impact-bg" />
          <div className="act-container">
            <div className={`act-impact-wrapper ${isVisible.impact ? "visible" : ""}`}>
              <div className="act-impact-header">
                <h2 className="act-impact-title">Community Impact</h2>
                <p className="act-impact-subtitle">
                  Our activities reach artists and audiences across Germany
                </p>
              </div>
              <div className="act-impact-grid">
                {impactStats.map((stat, index) => (
                  <div
                    className="act-impact-card"
                    key={index}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="act-impact-icon">{stat.icon}</div>
                    <span className="act-impact-value">{stat.value}</span>
                    <span className="act-impact-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* GALLERY PREVIEW */}
        {/* ============================================ */}
        <section className="act-gallery" data-section="gallery">
          <div className="act-container">
            <div className={`act-gallery-wrapper ${isVisible.gallery ? "visible" : ""}`}>
              <div className="act-gallery-header">
                <div className="act-gallery-eyebrow">
                  <span className="act-gallery-eyebrow-line" />
                  <span className="act-gallery-eyebrow-text">Moments</span>
                </div>
                <h2 className="act-gallery-title">Activity Highlights</h2>
              </div>
              <div className="act-gallery-grid">
                {galleryImages.map((image, index) => (
                  <div
                    className="act-gallery-card"
                    key={image.id}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <div className="act-gallery-overlay">
                      <span className="act-gallery-category">{image.category}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="act-gallery-footer">
                <Link to="/gallery" className="act-gallery-btn">
                  <span>View Gallery</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CTA SECTION */}
        {/* ============================================ */}
        <section className="act-cta" data-section="cta">
          <div className="act-container">
            <div className={`act-cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
              <h2 className="act-cta-title">Be Part of Our Activities</h2>
              <p className="act-cta-text">
                Whether you are an artist, teacher, student, or supporter, there 
                are many ways to contribute to and participate in KITD's programmes.
              </p>
              <div className="act-cta-buttons">
                <Link to="/membership" className="act-cta-btn act-cta-btn-primary">
                  <span>Become a Member</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
                <Link to="/events" className="act-cta-btn act-cta-btn-secondary">
                  <span>Upcoming Events</span>
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

export default ActivitiesPage;