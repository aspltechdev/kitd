import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Shield,
  Heart,
  Target,
  Mail,
  ChevronRight,
  Briefcase,
  Building2,
  User,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";

import { getPublicTeam } from "../../api/team.api";
import execta from "../../assets/cta.png";
import executiveCommitteeImg from "../../assets/bannerc1.png"; // update the path and filename

import a3 from "../../assets/a3.png";
import a4 from "../../assets/a4.png";
import abt1 from "../../assets/abt1.png";
import abt2 from "../../assets/abt2.png";
import abt3 from "../../assets/abt3.png";
import abt4 from "../../assets/abt4.png";
import abt5 from "../../assets/abt5.png";
import abt6 from "../../assets/abt6.png";
import abt7 from "../../assets/abt7.png";
import abt8 from "../../assets/abt8.png";

import "./ExecutiveCommitteePage.css";

const governancePrinciples = [
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: "Transparent Leadership",
    description: "The executive committee operates with openness and accountability, ensuring members are informed about decisions that shape the association's direction.",
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Community Representation",
    description: "Committee members represent the diverse voices of the Indian Classical Dance community, bringing perspectives from different dance forms, regions, and professional backgrounds.",
  },
  {
    icon: <Target size={22} strokeWidth={1.5} />,
    title: "Collaborative Decision Making",
    description: "Decisions are made through consultation and consensus-building, reflecting the collective wisdom of the committee and the broader KITD membership.",
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    title: "Member Focus",
    description: "Every initiative and programme is designed with members' needs in mind, from professional development opportunities to community-building events and resources.",
  },
];

const ExecutiveCommitteePage = () => {
  const [boardMembers, setBoardMembers] = useState([]);
  const [allMembers, setAllMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState({
    board: false,
    members: false,
    governance: false,
    cta: false,
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await getPublicTeam();
        console.log("Team API Response:", res);
        
        let responseData = res.data?.data || res.data || {};
        
        if (Array.isArray(responseData)) {
          const all = responseData.filter(member => member.isPublic);
          const board = all.filter(member => member.level === "BOARD");
          const members = all.filter(member => member.level !== "BOARD");
          
          setBoardMembers(board.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)));
          setAllMembers(members.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)));
        } else {
          const board = (responseData.boardOfDirectors || responseData.board || [])
            .filter(member => member.isPublic)
            .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

          const members = (responseData.members || responseData.all || [])
            .filter(member => member.isPublic && member.level !== "BOARD")
            .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

          setBoardMembers(board);
          setAllMembers(members);
        }
      } catch (err) {
        console.error("Failed to fetch team:", err);
        setError("Failed to load team members. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.dataset.section]: true }));
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [loading]);

  const getImageUrl = (member) => {
    const img = member.image || member.photo;
    if (!img) return null;
    if (img.startsWith('http://') || img.startsWith('https://')) return img;
    return `${IMAGE_BASE_URL}/uploads/team/${img}`;
  };

  const getSocialLinks = (member) => {
    if (!member.socialLinks) return {};
    let links = member.socialLinks;
    if (typeof links === 'string') {
      try {
        links = JSON.parse(links);
      } catch (e) {
        return {};
      }
    }
    return links || {};
  };

  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  const renderMemberCard = (member, index, isBoard = false) => {
    const imageUrl = getImageUrl(member);
    const socialLinks = getSocialLinks(member);
    const hasSocial = Object.values(socialLinks).some(link => link && link.trim());

    return (
      <div
        className={`ec-page__card ${hoveredCard === member.id ? 'ec-page__card--hovered' : ''}`}
        key={member.id || index}
        style={{ transitionDelay: `${index * 0.08}s` }}
        onMouseEnter={() => setHoveredCard(member.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="ec-page__card-image">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={member.name || "Team Member"} 
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                const placeholder = e.target.parentElement.querySelector('.ec-page__card-placeholder');
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="ec-page__card-placeholder" style={{ display: imageUrl ? 'none' : 'flex' }}>
            <span className="ec-page__card-placeholder-text">{getInitials(member.name)}</span>
          </div>
          <div className="ec-page__card-overlay" />
          
          {isBoard && (
            <div className="ec-page__card-badge">
              <Building2 size={12} />
              <span>Board Member</span>
            </div>
          )}
        </div>

        <div className="ec-page__card-content">
          <h3 className="ec-page__card-name">{member.name || "Team Member"}</h3>
          
          {member.designation && (
            <span className="ec-page__card-designation">{member.designation}</span>
          )}
          
          {member.danceForm && (
            <span className="ec-page__card-dance">{member.danceForm}</span>
          )}
          
          {(member.city || member.country) && (
            <span className="ec-page__card-location">
              {member.city}{member.country ? `, ${member.country}` : ''}
            </span>
          )}
          
          {member.biography && (
            <p className="ec-page__card-bio">{member.biography}</p>
          )}
          
          {(member.email || hasSocial) && (
            <div className="ec-page__card-footer">
              {member.email && (
                <a href={`mailto:${member.email}`} className="ec-page__card-email" aria-label={`Email ${member.name}`}>
                  <Mail size={14} />
                  <span>{member.email}</span>
                </a>
              )}
              {hasSocial && (
                <div className="ec-page__card-social">
                  {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="ec-page__social-link" aria-label="LinkedIn">
                      <FaLinkedinIn size={14} />
                    </a>
                  )}
                  {socialLinks.facebook && (
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="ec-page__social-link" aria-label="Facebook">
                      <FaFacebookF size={14} />
                    </a>
                  )}
                  {socialLinks.instagram && (
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="ec-page__social-link" aria-label="Instagram">
                      <FaInstagram size={14} />
                    </a>
                  )}
                  {socialLinks.website && (
                    <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="ec-page__social-link" aria-label="Website">
                      <FaGlobe size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Executive Committee | KITD - Classical Indian Dance Germany</title>
        <meta name="description" content="Meet the team behind KITD - Board of Directors and members guiding Indian Classical Dance across Germany." />
      </Helmet>

      <div className="ec-page">

        {/* HERO */}
        <section className="ec-page__hero">
          <div className="ec-page__hero-bg">
           <img
  src={executiveCommitteeImg}
  alt="KITD Executive Committee"
  loading="eager"
/>
            <div className="ec-page__hero-overlay" />
            <div className="ec-page__hero-gradient" />
          </div>
          <div className="ec-page__hero-container">
            <div className="ec-page__hero-content">
              <div className="ec-page__hero-eyebrow">
                <span className="ec-page__hero-eyebrow-line" />
                <span className="ec-page__hero-eyebrow-text">Leadership</span>
              </div>
              <h1 className="ec-page__hero-title">
                Executive
                <span className="ec-page__hero-title-accent"> Committee</span>
              </h1>
              <p className="ec-page__hero-description">
                The Executive Committee provides strategic direction, supports members, promotes Indian Classical Dance, and guides the association's activities across Germany.
              </p>
            </div>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="ec-page__breadcrumb">
          <div className="ec-page__container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <Link to="/about">About</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>Executive Committee</span>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <section className="ec-page__committee">
            <div className="ec-page__container">
              <div className="ec-page__loading">
                <div className="ec-page__spinner"></div>
                <p>Loading team members...</p>
              </div>
            </div>
          </section>
        )}

        {/* ERROR */}
        {error && !loading && (
          <section className="ec-page__committee">
            <div className="ec-page__container">
              <div className="ec-page__error">
                <p>{error}</p>
              </div>
            </div>
          </section>
        )}

        {/* BOARD OF DIRECTORS */}
        {!loading && !error && boardMembers.length > 0 && (
          <section className="ec-page__committee" data-section="board">
            <div className="ec-page__container">
              <div className="ec-page__committee-header">
                <div className="ec-page__committee-eyebrow">
                  <span className="ec-page__committee-eyebrow-line" />
                  <span className="ec-page__committee-eyebrow-text">Leadership</span>
                </div>
                <h2 className="ec-page__committee-title">Board of Directors</h2>
                <p className="ec-page__committee-desc">
                  The governing body providing strategic direction and oversight for KITD's activities.
                </p>
              </div>
              <div className={`ec-page__grid ${isVisible.board ? "visible" : ""}`}>
                {boardMembers.map((member, index) => renderMemberCard(member, index, true))}
              </div>
            </div>
          </section>
        )}

        {/* ALL MEMBERS */}
        {!loading && !error && allMembers.length > 0 && (
          <section className="ec-page__committee ec-page__committee--members" data-section="members">
            <div className="ec-page__container">
              <div className="ec-page__committee-header">
                <div className="ec-page__committee-eyebrow">
                  <span className="ec-page__committee-eyebrow-line" />
                  <span className="ec-page__committee-eyebrow-text">Community</span>
                </div>
                <h2 className="ec-page__committee-title">Our Members</h2>
                <p className="ec-page__committee-desc">
                  Dedicated individuals contributing to the growth and vitality of the Indian Classical Dance community.
                </p>
              </div>
              <div className={`ec-page__grid ${isVisible.members ? "visible" : ""}`}>
                {allMembers.map((member, index) => renderMemberCard(member, index, false))}
              </div>
            </div>
          </section>
        )}

        {/* EMPTY */}
        {!loading && !error && boardMembers.length === 0 && allMembers.length === 0 && (
          <section className="ec-page__committee">
            <div className="ec-page__container">
              <div className="ec-page__empty">
                <Users size={48} />
                <h3>No Team Members Yet</h3>
                <p>Team members will appear here once they are added and set to public.</p>
              </div>
            </div>
          </section>
        )}

        {/* MARQUEE - Updated with larger cards & matching typography */}
        <section className="ec-page__marquee" data-section="marquee">
          <div className="ec-page__container">
            <div className="ec-page__committee-header">
              <div className="ec-page__committee-eyebrow">
                <span className="ec-page__committee-eyebrow-line" />
                <span className="ec-page__committee-eyebrow-text">The KIDT Circle</span>
              </div>
              <h2 className="ec-page__committee-title">Our Members</h2>
              <p className="ec-page__committee-desc">
                Dedicated individuals contributing to the growth and vitality of the Indian Classical Dance community.
              </p>
            </div>
          </div>
          <div className="ec-page__marquee-track-wrapper">
            <div className="ec-page__marquee-track">
              {[a3, a4, abt1, abt2, abt3, abt4, abt5, abt6, abt7, abt8]
                .concat([a3, a4, abt1, abt2, abt3, abt4, abt5, abt6, abt7, abt8])
                .map((src, idx) => (
                  <div className="ec-page__marquee-item" key={idx}>
                    <img src={src} alt={`Member highlight ${(idx % 10) + 1}`} loading="lazy" />
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* GOVERNANCE */}
        <section className="ec-page__governance" data-section="governance">
          <div className="ec-page__container">
            <div className="ec-page__governance-header">
              <div className="ec-page__governance-eyebrow">
                <span className="ec-page__governance-eyebrow-line" />
                <span className="ec-page__governance-eyebrow-text">Our Governance</span>
              </div>
              <h2 className="ec-page__governance-title">
                Guided by Principles of
                <span className="ec-page__governance-title-accent"> Trust & Transparency</span>
              </h2>
            </div>
            <div className={`ec-page__governance-grid ${isVisible.governance ? "visible" : ""}`}>
              {governancePrinciples.map((principle, index) => (
                <div className="ec-page__governance-card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="ec-page__governance-icon">{principle.icon}</div>
                  <h3 className="ec-page__governance-card-title">{principle.title}</h3>
                  <p className="ec-page__governance-card-desc">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ec-page__cta" data-section="cta">
          <div className="ec-page__cta-bg">
            <img 
              src={execta}
              alt="KITD Community" 
              loading="lazy" 
            />
            <div className="ec-page__cta-overlay" />
          </div>
          <div className="ec-page__container">
            <div className={`ec-page__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
              <h2 className="ec-page__cta-title">Connect With Our Team</h2>
              <p className="ec-page__cta-text">
                Have questions about KITD, membership, or collaboration opportunities? We'd love to hear from you.
              </p>
              <Link to="/contact" className="ec-page__cta-btn">
                <span>Get in Touch</span>
                <ArrowRight size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExecutiveCommitteePage;