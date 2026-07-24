// src/components/home/MissionVisionSection/MissionVisionSection.jsx

import { useState, useEffect } from "react";
import {
  Target,
  Eye,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./MissionVisionSection.css";

const MissionVisionSection = () => {
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

    const section = document.querySelector('.mission-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`mission-section ${isVisible ? 'visible' : ''}`}>
      <div className="mission-container">
        
        {/* Section Header */}
        <div className="mission-header">
          <div className="mission-eyebrow">
            <span className="mission-eyebrow-line" />
            <span className="mission-eyebrow-text">Our Purpose</span>
          </div>
          
          <h2 className="mission-title">
            Mediating, Broadcasting & Fostering
            <span className="mission-title-accent"> Indian Classical Dance</span>
          </h2>
          
          <p className="mission-subtitle">
            KITD e.V. is a registered association dedicated to connecting artists, 
            educators, and cultural institutions across Germany through a shared 
            commitment to Indian Classical Dance.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="mission-grid">
          
          {/* Mission Card */}
          <div className="mission-card mission-card-mission">
            <div className="mission-card-accent" />
            
            <div className="mission-card-header">
              <div className="mission-card-icon">
                <Target size={22} strokeWidth={1.5} />
              </div>
              <span className="mission-card-tag">Mission</span>
            </div>

            <h3 className="mission-card-title">
              Preserving & Promoting Classical Dance Heritage
            </h3>

            <p className="mission-card-text">
              To mediate, promote, and foster Indian Classical Dance and its 
              associated knowledge across Germany. We create opportunities for 
              learning, performance, collaboration, and cultural exchange while 
              preserving the authenticity of classical traditions.
            </p>

            <ul className="mission-card-list">
              <li>Cultural preservation</li>
              <li>Knowledge dissemination</li>
              <li>Community building</li>
              <li>Artistic excellence</li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="mission-card mission-card-vision">
            <div className="mission-card-accent" />
            
            <div className="mission-card-header">
              <div className="mission-card-icon">
                <Eye size={22} strokeWidth={1.5} />
              </div>
              <span className="mission-card-tag">Vision</span>
            </div>

            <h3 className="mission-card-title">
              A United Platform for Indian Classical Dance
            </h3>

            <p className="mission-card-text">
              To become Germany's leading collective for Indian Classical Dance 
              by connecting dancers, teachers, institutions, researchers, and 
              cultural enthusiasts under one collaborative network.
            </p>

            <ul className="mission-card-list">
              <li>National network</li>
              <li>Institutional partnerships</li>
              <li>Cross-cultural dialogue</li>
              <li>Sustainable growth</li>
            </ul>
          </div>

          {/* Objectives Card */}
          <div className="mission-card mission-card-objectives">
            <div className="mission-card-accent" />
            
            <div className="mission-card-header">
              <div className="mission-card-icon">
                <Sparkles size={22} strokeWidth={1.5} />
              </div>
              <span className="mission-card-tag">Objectives</span>
            </div>

            <h3 className="mission-card-title">
              Building a Thriving Dance Ecosystem
            </h3>

            <p className="mission-card-text">
              Encourage cultural appreciation, organize performances and 
              workshops, support artists, inspire future generations, and 
              strengthen connections within the Indian Classical Dance 
              community throughout Germany.
            </p>

            <ul className="mission-card-list">
              <li>Events & workshops</li>
              <li>Artist development</li>
              <li>Educational outreach</li>
              <li>Cultural exchange</li>
            </ul>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mission-cta-wrapper">
          <Link to="/about" className="mission-cta">
            <span>Learn More About Our Mission</span>
            <span className="mission-cta-icon">
              <ArrowRight size={16} strokeWidth={1.5} />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default MissionVisionSection;