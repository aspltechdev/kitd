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

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";

// import "./ContactCTA.css";

// const ContactCTA = () => {
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

//     const section = document.querySelector('.contact-cta');
//     if (section) observer.observe(section);

//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, []);

//   return (
//     <section className={`contact-cta ${isVisible ? 'visible' : ''}`}>
//       <div className="contact-cta-container">
//         <div className="contact-cta-wrapper">
          
//           {/* Section Header */}
//           <div className="contact-cta-header">
//             <div className="contact-cta-eyebrow">
//               <span className="contact-cta-eyebrow-line" />
//               <span className="contact-cta-eyebrow-text">Connect with KITD</span>
//             </div>

//             <h2 className="contact-cta-title">
//               Together, Let's Preserve &
//               <br />
//               <span className="contact-cta-title-accent">Promote Indian Classical Dance</span>
//             </h2>

//             <p className="contact-cta-description">
//               Whether you are an artist, teacher, institution, volunteer, 
//               supporter, or cultural enthusiast, we welcome opportunities 
//               to collaborate, connect, and celebrate Indian Classical Dance 
//               together across Germany.
//             </p>
//           </div>

//           {/* Contact Cards */}
//           <div className="contact-cta-cards">
//             <div className="contact-card">
//               <div className="contact-card-icon">
//                 <Phone size={18} strokeWidth={1.5} />
//               </div>
//               <div className="contact-card-content">
//                 <span className="contact-card-label">Phone</span>
//                 <a href="tel:+49XXXXXXXXXX" className="contact-card-value">
//                   +49 XXX XXX XXXX
//                 </a>
//               </div>
//             </div>

//             <div className="contact-card">
//               <div className="contact-card-icon">
//                 <Mail size={18} strokeWidth={1.5} />
//               </div>
//               <div className="contact-card-content">
//                 <span className="contact-card-label">Email</span>
//                 <a href="mailto:info@kitd.de" className="contact-card-value">
//                   info@kitd.de
//                 </a>
//               </div>
//             </div>

//             <div className="contact-card">
//               <div className="contact-card-icon">
//                 <MapPin size={18} strokeWidth={1.5} />
//               </div>
//               <div className="contact-card-content">
//                 <span className="contact-card-label">Location</span>
//                 <span className="contact-card-value">
//                   Germany
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="contact-cta-actions">
//             <Link to="/contact" className="contact-cta-btn contact-cta-btn-primary">
//               <MessageCircle size={18} strokeWidth={1.5} />
//               <span>Contact KITD</span>
//             </Link>

//             <Link to="/membership" className="contact-cta-btn contact-cta-btn-secondary">
//               <span>Apply for Membership</span>
//               <ArrowRight size={18} strokeWidth={1.5} />
//             </Link>
//           </div>

//           {/* Reassurance Message */}
//           <p className="contact-cta-reassurance">
//             We're happy to answer your questions about membership, events, 
//             collaborations, volunteering, and partnerships.
//           </p>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactCTA;



// src/components/home/ContactCTA/ContactCTA.jsx

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle, Heart } from "lucide-react";

import "./ContactCTA.css";

const ContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactCards = [
    {
      id: "phone",
      icon: <Phone size={18} strokeWidth={1.5} />,
      label: "Phone",
      value: "+49 XXX XXX XXXX",
      href: "tel:+49XXXXXXXXXX",
    },
    {
      id: "email",
      icon: <Mail size={18} strokeWidth={1.5} />,
      label: "Email",
      value: "info@kitd.de",
      href: "mailto:info@kitd.de",
    },
    {
      id: "location",
      icon: <MapPin size={18} strokeWidth={1.5} />,
      label: "Location",
      value: "Germany",
      href: null,
    },
  ];

  return (
    <section className={`kitd-contact ${isVisible ? 'kitd-contact--visible' : ''}`} ref={sectionRef}>
      {/* Background Image */}
      <div className="kitd-contact__bg">
        <img 
          src="https://images.pexels.com/photos/28236020/pexels-photo-28236020.jpeg"
          alt="KITD Dance Community"
          loading="lazy"
        />
      </div>
      
      {/* Lighter Overlay */}
      <div className="kitd-contact__overlay" />
      
      {/* Subtle Pattern */}
      <div className="kitd-contact__pattern" />

      <div className="kitd-contact__container">
        <div className="kitd-contact__wrapper">
          
          {/* Section Header - Compact */}
          <div className="kitd-contact__header">
            <div className="kitd-contact__eyebrow">
              <span className="kitd-contact__eyebrow-line" />
              <span className="kitd-contact__eyebrow-text">Connect with KITD</span>
            </div>

            <h2 className="kitd-contact__title">
              Let's Preserve & Promote
              <br />
              <span className="kitd-contact__title-accent">Indian Classical Dance</span>
            </h2>

            <p className="kitd-contact__desc">
              Artists, teachers, institutions, volunteers, and supporters—we welcome 
              opportunities to collaborate and celebrate Indian Classical Dance together.
            </p>
          </div>

          {/* Contact Cards - Compact */}
          <div className="kitd-contact__cards">
            {contactCards.map((card, index) => (
              <div 
                className={`kitd-contact__card ${hoveredCard === card.id ? 'kitd-contact__card--hovered' : ''}`}
                key={card.id}
                style={{ transitionDelay: `${index * 0.08}s` }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="kitd-contact__card-icon">
                  {card.icon}
                </div>
                <div className="kitd-contact__card-content">
                  <span className="kitd-contact__card-label">{card.label}</span>
                  {card.href ? (
                    <a href={card.href} className="kitd-contact__card-value">
                      {card.value}
                    </a>
                  ) : (
                    <span className="kitd-contact__card-value">
                      {card.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons - Compact */}
          <div className="kitd-contact__actions">
            <Link to="/contact" className="kitd-contact__btn kitd-contact__btn--primary">
              <MessageCircle size={16} strokeWidth={1.5} />
              <span>Contact KITD</span>
            </Link>

            <Link to="/membership" className="kitd-contact__btn kitd-contact__btn--secondary">
              <span>Apply for Membership</span>
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Reassurance Message - Compact */}
          <p className="kitd-contact__reassurance">
            We're happy to answer your questions about membership, events, 
            collaborations, volunteering, and partnerships.
          </p>

          {/* Trust Badge */}
          <div className="kitd-contact__trust">
            <Heart size={14} strokeWidth={1.5} />
            <span>Committed to cultural preservation & community building</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;