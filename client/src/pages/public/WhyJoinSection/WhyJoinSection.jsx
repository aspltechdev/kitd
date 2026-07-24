// src/components/home/WhyJoinSection/WhyJoinSection.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  Megaphone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import "./WhyJoinSection.css";

const benefits = [
  {
    id: 1,
    icon: <Users size={24} strokeWidth={1.5} />,
    title: "Collaborative Networking",
    description:
      "Connect with dancers, teachers, institutions, and cultural professionals across Germany. Build meaningful relationships and foster collaboration within the Indian Classical Dance community.",
    highlights: [
      "Artist directory access",
      "Community events",
      "Professional networking",
    ],
  },
  {
    id: 2,
    icon: <BookOpen size={24} strokeWidth={1.5} />,
    title: "Comprehensive Resources",
    description:
      "Access valuable member information, institutions, events, and educational resources through a growing network dedicated to Indian Classical Dance knowledge sharing.",
    highlights: [
      "Member resources",
      "Event calendar",
      "Educational materials",
    ],
  },
  {
    id: 3,
    icon: <Megaphone size={24} strokeWidth={1.5} />,
    title: "Event Promotion & Visibility",
    description:
      "Promote your performances, workshops, festivals, and cultural initiatives through KITD's platform while expanding your reach within the community and beyond.",
    highlights: [
      "Event promotion",
      "Social media reach",
      "Newsletter features",
    ],
  },
];

const membershipTypes = [
  {
    type: "Active Member",
    price: "€60",
    period: "/year",
    description: "Full voting rights and participation",
  },
  {
    type: "Supporting Member",
    price: "€45",
    period: "/year",
    description: "Support the mission without voting rights",
  },
  {
    type: "Youth Member",
    price: "€30",
    period: "/year",
    description: "For young enthusiasts under 25",
  },
];

const WhyJoinSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const section = document.querySelector('.why-join-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`why-join-section ${isVisible ? 'visible' : ''}`}>
      <div className="why-container">
        
        {/* Section Header */}
        <div className="why-header">
          <div className="why-eyebrow">
            <span className="why-eyebrow-line" />
            <span className="why-eyebrow-text">Membership Benefits</span>
          </div>
          
          <h2 className="why-title">
            Why Join
            <span className="why-title-accent"> KITD</span>
          </h2>
          
          <p className="why-subtitle">
            KITD brings together artists, educators, institutions, and cultural 
            enthusiasts to preserve, promote, and strengthen Indian Classical 
            Dance across Germany.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="why-grid">
          {benefits.map((item, index) => (
            <div 
              className="why-card" 
              key={item.id}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="why-card-header">
                <div className="why-card-icon">
                  {item.icon}
                </div>
                <span className="why-card-number">0{index + 1}</span>
              </div>

              <h3 className="why-card-title">{item.title}</h3>
              
              <p className="why-card-description">{item.description}</p>
              
              <ul className="why-card-highlights">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="why-highlight-item">
                    <CheckCircle size={14} strokeWidth={1.5} className="why-highlight-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Membership Types Preview */}
        <div className="why-membership-preview">
          <h3 className="why-preview-title">Membership Types</h3>
          
          <div className="why-pricing-grid">
            {membershipTypes.map((item, index) => (
              <div 
                className="why-pricing-card" 
                key={index}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="why-pricing-header">
                  <span className="why-pricing-type">{item.type}</span>
                </div>
                
                <div className="why-pricing-amount">
                  <span className="why-pricing-price">{item.price}</span>
                  <span className="why-pricing-period">{item.period}</span>
                </div>
                
                <p className="why-pricing-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="why-cta-wrapper">
          <Link to="/membership" className="why-cta">
            <span>Explore Membership Options</span>
            <span className="why-cta-icon">
              <ArrowRight size={18} strokeWidth={1.5} />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyJoinSection;