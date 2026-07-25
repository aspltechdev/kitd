// // src/components/home/AboutSection/AboutSection.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Users, MapPin, Calendar, Award } from "lucide-react";
// import "./AboutSection.css";

// const AboutSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     const section = document.querySelector('.about-section');
//     if (section) observer.observe(section);

//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, []);

//   return (
//     <section className={`about-section ${isVisible ? 'visible' : ''}`}>
//       <div className="about-container">
//         <div className="about-grid">
          
//           {/* Left - Image */}
//           <div className="about-visual">
//             <div className="about-image-wrapper">
//               <div className="about-image-frame">
//                 <img
//                   src="https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg"
//                   alt="KITD - Classical Indian Dance Germany Community"
//                   className="about-image"
//                   loading="lazy"
//                 />
//               </div>
              
//               {/* Decorative Elements */}
//               <div className="about-image-accent" />
//               <div className="about-image-dot about-dot-1" />
//               <div className="about-image-dot about-dot-2" />
//               <div className="about-image-line" />
//             </div>

//             {/* Floating Stat Card */}
//             <div className="about-floating-card">
//               <div className="floating-card-icon">
//                 <Award size={20} strokeWidth={1.5} />
//               </div>
//               <div className="floating-card-content">
//                 <span className="floating-card-number">15+</span>
//                 <span className="floating-card-label">Years of Experience</span>
//               </div>
//             </div>
//           </div>

//           {/* Right - Content */}
//           <div className="about-content">
//             <div className="about-content-inner">
//               {/* Eyebrow */}
//               <div className="about-eyebrow">
//                 <span className="about-eyebrow-line" />
//                 <span className="about-eyebrow-text">About Us</span>
//               </div>

//               {/* Title */}
//               <h2 className="about-title">
//                 Preserving
//                 <span className="about-title-accent"> Indian Classical Dance</span>
//                 <br />
//                 Across Germany
//               </h2>

//               {/* Description */}
//               <div className="about-description">
//                 <p>
//                   Classical Indian Dance Germany (KITD) e.V. is dedicated to promoting 
//                   and preserving the rich traditions of classical Indian dance. We connect 
//                   artists, students, teachers, and cultural enthusiasts throughout Germany.
//                 </p>
//                 <p>
//                   Through performances, workshops, collaborations, and community 
//                   initiatives, we create a vibrant platform where culture, education, 
//                   and artistic excellence come together.
//                 </p>
//               </div>

//               {/* Stats Grid */}
//               <div className="about-stats">
//                 <div className="about-stat-item">
//                   <div className="about-stat-icon">
//                     <Users size={18} strokeWidth={1.5} />
//                   </div>
//                   <div className="about-stat-info">
//                     <span className="about-stat-number">50+</span>
//                     <span className="about-stat-label">Artists</span>
//                   </div>
//                 </div>

//                 <div className="about-stat-divider" />

//                 <div className="about-stat-item">
//                   <div className="about-stat-icon">
//                     <Calendar size={18} strokeWidth={1.5} />
//                   </div>
//                   <div className="about-stat-info">
//                     <span className="about-stat-number">20+</span>
//                     <span className="about-stat-label">Events</span>
//                   </div>
//                 </div>

//                 <div className="about-stat-divider" />

//                 <div className="about-stat-item">
//                   <div className="about-stat-icon">
//                     <MapPin size={18} strokeWidth={1.5} />
//                   </div>
//                   <div className="about-stat-info">
//                     <span className="about-stat-number">10+</span>
//                     <span className="about-stat-label">Cities</span>
//                   </div>
//                 </div>
//               </div>

//               {/* CTA */}
//               <Link to="/about" className="about-cta">
//                 <span>Discover More</span>
//                 <span className="about-cta-icon">
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </span>
//               </Link>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

// src/components/home/AboutSection/AboutSection.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, MapPin, Building2, Award } from "lucide-react";
import "./AboutSection.css";

const AboutSection = () => {
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

    const section = document.querySelector('.about-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="about-container">
        <div className="about-grid">
          
          {/* Left - Image */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <img
                  src="https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg"
                  alt="KITD - Klassischer Indischer Tanz Deutschland e.V. Community"
                  className="about-image"
                  loading="lazy"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="about-image-accent" />
              <div className="about-image-dot about-dot-1" />
              <div className="about-image-dot about-dot-2" />
              <div className="about-image-line" />
            </div>

            {/* Floating Stat Card */}
            <div className="about-floating-card">
              <div className="floating-card-icon">
                <Award size={20} strokeWidth={1.5} />
              </div>
              <div className="floating-card-content">
                <span className="floating-card-number">July 2023</span>
                <span className="floating-card-label">Officially Registered</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="about-content">
            <div className="about-content-inner">
              {/* Eyebrow */}
              <div className="about-eyebrow">
                <span className="about-eyebrow-line" />
                <span className="about-eyebrow-text">About KITD</span>
              </div>

              {/* Title */}
              <h2 className="about-title">
                Building Germany's
                <span className="about-title-accent"> Indian Classical Dance Community</span>
              </h2>

              {/* Description */}
              <div className="about-description">
                <p>
                  Klassischer Indischer Tanz Deutschland (KITD) e.V. is a registered 
                  association dedicated to mediating, promoting, and fostering Indian 
                  Classical Dance and its associated knowledge across Germany. We bring 
                  together dancers, teachers, institutions, researchers, and cultural 
                  enthusiasts through a shared commitment to preserving this rich 
                  artistic heritage.
                </p>
                <p>
                  As a collaborative platform, KITD supports cultural exchange, encourages 
                  professional networking, promotes performances and educational initiatives, 
                  and strengthens connections within the Indian Classical Dance community 
                  throughout Germany.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="about-stats">
                <div className="about-stat-item">
                  <div className="about-stat-icon">
                    <Building2 size={18} strokeWidth={1.5} />
                  </div>
                  <div className="about-stat-info">
                    <span className="about-stat-number">Registered</span>
                    <span className="about-stat-label">Association (e.V.)</span>
                  </div>
                </div>

                <div className="about-stat-divider" />

                <div className="about-stat-item">
                  <div className="about-stat-icon">
                    <Users size={18} strokeWidth={1.5} />
                  </div>
                  <div className="about-stat-info">
                    <span className="about-stat-number">3</span>
                    <span className="about-stat-label">Membership Types</span>
                  </div>
                </div>

                <div className="about-stat-divider" />

                <div className="about-stat-item">
                  <div className="about-stat-icon">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div className="about-stat-info">
                    <span className="about-stat-number">Germany</span>
                    <span className="about-stat-label">Nationwide Network</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link to="/about" className="about-cta">
                <span>Learn About KITD</span>
                <span className="about-cta-icon">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;