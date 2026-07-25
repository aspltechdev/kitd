// src/components/home/MembershipCTA/MembershipCTA.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star, Heart } from "lucide-react";

import "./MembershipCTA.css";

const membershipTypes = [
  {
    type: "Active Member",
    price: "€60",
    period: "/year",
    description: "For trained dancers and students of Indian Classical Dance",
    icon: <Star size={16} strokeWidth={1.5} />,
  },
  {
    type: "Supporting Member",
    price: "€45",
    period: "/year",
    description: "For individuals who wish to support the association's mission",
    icon: <Heart size={16} strokeWidth={1.5} />,
  },
  {
    type: "Youth Member",
    price: "€30",
    period: "/year",
    description: "For young enthusiasts aged 15–18 learning classical dance",
    icon: <Users size={16} strokeWidth={1.5} />,
  },
];

const benefits = [
  "Collaborative Networking",
  "Event Promotion",
  "Member Resources",
];

const MembershipCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.membership-cta');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`membership-cta ${isVisible ? 'visible' : ''}`}>
      {/* Background Overlay */}
      <div className="membership-overlay" />
      
      {/* Subtle Pattern */}
      <div className="membership-pattern" />

      <div className="membership-container">
        <div className="membership-content">
          
          {/* Section Header */}
          <div className="membership-header">
            <div className="membership-eyebrow">
              <span className="membership-eyebrow-line" />
              <span className="membership-eyebrow-text">Become a Member</span>
            </div>

            <h2 className="membership-title">
              Join Germany's Leading
              <br />
              <span className="membership-title-accent">Indian Classical Dance</span>
              <br />
              Community
            </h2>

            <p className="membership-description">
              Become a member of KITD and connect with a vibrant community 
              of artists, teachers, students, researchers, and supporters 
              dedicated to preserving and promoting Indian Classical Dance 
              across Germany.
            </p>
          </div>

          {/* Benefits */}
          <div className="membership-benefits">
            {benefits.map((benefit, index) => (
              <div 
                className="membership-benefit-item" 
                key={index}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="benefit-check">✓</span>
                <span className="benefit-text">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Membership Types Pills */}
          <div className="membership-types">
            {membershipTypes.map((item, index) => (
              <div 
                className="membership-type-pill" 
                key={index}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <span className="type-pill-icon">{item.icon}</span>
                <span className="type-pill-name">{item.type}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="membership-actions">
            <Link to="/membership" className="membership-btn membership-btn-primary">
              <span>Apply for Membership</span>
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>

            <Link to="/volunteer" className="membership-btn membership-btn-secondary">
              <span>Become a Volunteer</span>
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Pricing Preview */}
          <div className="membership-pricing">
            {membershipTypes.map((item, index) => (
              <div 
                className="pricing-item" 
                key={index}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="pricing-item-header">
                  <span className="pricing-item-icon">{item.icon}</span>
                  <span className="pricing-item-type">{item.type}</span>
                </div>
                <div className="pricing-item-amount">
                  <span className="pricing-item-price">{item.price}</span>
                  <span className="pricing-item-period">{item.period}</span>
                </div>
                <p className="pricing-item-desc">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MembershipCTA;