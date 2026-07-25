// // src/components/home/ContactCTA/ContactCTA.jsx

// import { Link } from "react-router-dom";
// import { Phone, Mail, ArrowRight } from "lucide-react";

// import "./ContactCTA.css";

// const ContactCTA = () => {
//   return (
//     <section className="contact-cta">

//       <div className="container">

//         <div className="contact-wrapper">

//           <span className="section-tag">
//             GET IN TOUCH
//           </span>

//           <h2>
//             Let's Preserve & Promote
//             <br />
//             Indian Classical Dance Together
//           </h2>

//           <p>
//             Whether you're an artist, institution, volunteer,
//             sponsor, or cultural enthusiast, we'd love to hear
//             from you. Connect with KITD and become part of our
//             growing community across Germany.
//           </p>

//           <div className="contact-info">

//             <div className="info-card">

//               <Phone size={20} />

//               <div>

//                 <span>Phone</span>

//                 <h4>+49 XXX XXX XXXX</h4>

//               </div>

//             </div>

//             <div className="info-card">

//               <Mail size={20} />

//               <div>

//                 <span>Email</span>

//                 <h4>info@kitd.de</h4>

//               </div>

//             </div>

//           </div>

//           <div className="contact-buttons">

//             <Link
//               to="/contact"
//               className="contact-btn primary"
//             >
//               Contact Us
//             </Link>

//             <Link
//               to="/membership"
//               className="contact-btn secondary"
//             >
//               Become a Member

//               <ArrowRight size={18} />

//             </Link>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default ContactCTA;
// src/components/home/ContactCTA/ContactCTA.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";

import "./ContactCTA.css";

const ContactCTA = () => {
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

    const section = document.querySelector('.contact-cta');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`contact-cta ${isVisible ? 'visible' : ''}`}>
      <div className="contact-cta-container">
        <div className="contact-cta-wrapper">
          
          {/* Section Header */}
          <div className="contact-cta-header">
            <div className="contact-cta-eyebrow">
              <span className="contact-cta-eyebrow-line" />
              <span className="contact-cta-eyebrow-text">Connect with KITD</span>
            </div>

            <h2 className="contact-cta-title">
              Together, Let's Preserve &
              <br />
              <span className="contact-cta-title-accent">Promote Indian Classical Dance</span>
            </h2>

            <p className="contact-cta-description">
              Whether you are an artist, teacher, institution, volunteer, 
              supporter, or cultural enthusiast, we welcome opportunities 
              to collaborate, connect, and celebrate Indian Classical Dance 
              together across Germany.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="contact-cta-cards">
            <div className="contact-card">
              <div className="contact-card-icon">
                <Phone size={18} strokeWidth={1.5} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Phone</span>
                <a href="tel:+49XXXXXXXXXX" className="contact-card-value">
                  +49 XXX XXX XXXX
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <Mail size={18} strokeWidth={1.5} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Email</span>
                <a href="mailto:info@kitd.de" className="contact-card-value">
                  info@kitd.de
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={18} strokeWidth={1.5} />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Location</span>
                <span className="contact-card-value">
                  Germany
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="contact-cta-actions">
            <Link to="/contact" className="contact-cta-btn contact-cta-btn-primary">
              <MessageCircle size={18} strokeWidth={1.5} />
              <span>Contact KITD</span>
            </Link>

            <Link to="/membership" className="contact-cta-btn contact-cta-btn-secondary">
              <span>Apply for Membership</span>
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Reassurance Message */}
          <p className="contact-cta-reassurance">
            We're happy to answer your questions about membership, events, 
            collaborations, volunteering, and partnerships.
          </p>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;