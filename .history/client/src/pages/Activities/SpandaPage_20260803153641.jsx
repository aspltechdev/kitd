// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Sparkles,
//   Heart,
//   Users,
//   Music,
//   Star,
//   Quote,
//   ChevronRight,
//   Calendar,
//   MapPin,
//   Clock,
//   Send,
//   Mail,
//   Phone,
//   Globe,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// import "./SpandaPage.css";

// const SpandaPage = () => {
//   const [isVisible, setIsVisible] = useState({});
//   const [activeTab, setActiveTab] = useState("about");

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible((prev) => ({ ...prev, [entry.target.dataset.section]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll("[data-section]").forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const testimonials = [
//     {
//       quote: "SPANDA opened new dimensions in my dance practice. The collaborative environment is truly inspiring.",
//       name: "Dr. Meera Sharma",
//       role: "Bharatanatyam Artist",
//     },
//     {
//       quote: "A unique programme that bridges traditional dance with contemporary movement exploration.",
//       name: "Rajesh Kumar Iyer",
//       role: "Kathak Practitioner",
//     },
//     {
//       quote: "The workshops helped me discover new ways to express through movement. Truly transformative!",
//       name: "Ananya Patel",
//       role: "Odissi Dancer",
//     },
//   ];

//   const upcomingSessions = [
//     {
//       title: "Movement Exploration Workshop",
//       date: "March 15, 2026",
//       time: "10:00 AM - 2:00 PM",
//       location: "Berlin Studio",
//       status: "Open",
//     },
//     {
//       title: "Collaborative Creation Lab",
//       date: "April 20, 2026",
//       time: "11:00 AM - 4:00 PM",
//       location: "Munich Dance Center",
//       status: "Open",
//     },
//     {
//       title: "SPANDA Intensive Weekend",
//       date: "June 5-6, 2026",
//       time: "9:00 AM - 5:00 PM",
//       location: "Hamburg",
//       status: "Coming Soon",
//     },
//   ];

//   const benefits = [
//     { icon: <Music size={24} />, title: "Artistic Growth", description: "Expand your creative vocabulary through guided movement exploration and improvisation." },
//     { icon: <Users size={24} />, title: "Community Connection", description: "Collaborate with fellow artists and build meaningful creative relationships." },
//     { icon: <Heart size={24} />, title: "Personal Development", description: "Develop body awareness, mindfulness, and expressive freedom." },
//     { icon: <Star size={24} />, title: "Performance Opportunities", description: "Showcase your work in SPANDA showcases and collaborative performances." },
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>SPANDA Programme | KITD - Classical Indian Dance Germany</title>
//         <meta name="description" content="SPANDA is KITD's unique initiative for movement exploration, creative learning, and artistic collaboration. Join our workshops and sessions." />
//       </Helmet>

//       <div className="spanda-page">

//         {/* ============================================ */}
//         {/* HERO SECTION */}
//         {/* ============================================ */}
//         <section className="spanda-hero">
//           <div className="spanda-hero__bg">
//             <img 
//               src="https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//               alt="SPANDA Programme"
//               loading="eager"
//             />
//             <div className="spanda-hero__overlay" />
//             <div className="spanda-hero__gradient" />
//           </div>
          
//           <div className="spanda-hero__container">
//             <div className="spanda-hero__content">
//               <div className="spanda-hero__badge">
//                 <Sparkles size={16} strokeWidth={1.5} />
//                 <span>KITD Programme</span>
//               </div>
//               <h1 className="spanda-hero__title">SPANDA</h1>
//               <p className="spanda-hero__subtitle">
//                 Movement • Exploration • Creation
//               </p>
//               <p className="spanda-hero__description">
//                 A unique initiative that brings together artists and participants 
//                 through movement exploration, workshops, and collaborative learning 
//                 experiences.
//               </p>
//               <div className="spanda-hero__actions">
//                 <a href="#sessions" className="spanda-hero__btn spanda-hero__btn--primary">
//                   <span>Upcoming Sessions</span>
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </a>
//                 <a href="#contact" className="spanda-hero__btn spanda-hero__btn--secondary">
//                   <span>Get Involved</span>
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* BREADCRUMB */}
//         {/* ============================================ */}
//         <div className="spanda-breadcrumb">
//           <div className="spanda-container">
//             <Link to="/">Home</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <Link to="/activities">Activities</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <span>SPANDA</span>
//           </div>
//         </div>

//         {/* ============================================ */}
//         {/* ABOUT SECTION */}
//         {/* ============================================ */}
//         <section className="spanda-about" data-section="about">
//           <div className="spanda-container">
//             <div className={`spanda-about__grid ${isVisible.about ? "visible" : ""}`}>
//               <div className="spanda-about__content">
//                 <div className="spanda-about__eyebrow">
//                   <span className="spanda-about__eyebrow-line" />
//                   <span className="spanda-about__eyebrow-text">About the Programme</span>
//                 </div>
//                 <h2 className="spanda-about__title">
//                   What is <span className="spanda-about__title-accent">SPANDA?</span>
//                 </h2>
//                 <p className="spanda-about__text">
//                   SPANDA, derived from Sanskrit meaning "expansion" or "vibration", 
//                   is KITD's flagship programme for creative movement exploration. It 
//                   brings together classical Indian dance practitioners, contemporary 
//                   dancers, and movement enthusiasts in a collaborative space.
//                 </p>
//                 <p className="spanda-about__text">
//                   Through structured workshops, improvisation sessions, and 
//                   collaborative projects, SPANDA creates a unique environment where 
//                   traditional dance vocabulary meets contemporary movement research.
//                 </p>
//                 <div className="spanda-about__quote">
//                   <Quote size={24} />
//                   <p>"SPANDA embodies the spirit of expansion and creative growth, where every movement tells a story and every participant contributes to the collective artistic journey."</p>
//                 </div>
//               </div>
//               <div className="spanda-about__visual">
//                 <div className="spanda-about__image">
//                   <img 
//                     src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
//                     alt="SPANDA Movement Session"
//                     loading="lazy"
//                   />
//                   <div className="spanda-about__image-accent" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* BENEFITS */}
//         {/* ============================================ */}
//         <section className="spanda-benefits" data-section="benefits">
//           <div className="spanda-container">
//             <div className="spanda-benefits__header">
//               <div className="spanda-benefits__eyebrow">
//                 <span className="spanda-benefits__eyebrow-line" />
//                 <span className="spanda-benefits__eyebrow-text">Why Join SPANDA</span>
//               </div>
//               <h2 className="spanda-benefits__title">Benefits of Participation</h2>
//             </div>
//             <div className={`spanda-benefits__grid ${isVisible.benefits ? "visible" : ""}`}>
//               {benefits.map((benefit, index) => (
//                 <div className="spanda-benefits__card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
//                   <div className="spanda-benefits__icon">{benefit.icon}</div>
//                   <h3>{benefit.title}</h3>
//                   <p>{benefit.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* UPCOMING SESSIONS */}
//         {/* ============================================ */}
//         <section className="spanda-sessions" id="sessions" data-section="sessions">
//           <div className="spanda-container">
//             <div className="spanda-sessions__header">
//               <div className="spanda-sessions__eyebrow">
//                 <span className="spanda-sessions__eyebrow-line" />
//                 <span className="spanda-sessions__eyebrow-text">Join Us</span>
//               </div>
//               <h2 className="spanda-sessions__title">Upcoming Sessions</h2>
//             </div>
//             <div className={`spanda-sessions__grid ${isVisible.sessions ? "visible" : ""}`}>
//               {upcomingSessions.map((session, index) => (
//                 <div className="spanda-sessions__card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
//                   <div className="spanda-sessions__card-header">
//                     <h3>{session.title}</h3>
//                     <span className={`spanda-sessions__status spanda-sessions__status--${session.status.toLowerCase().replace(' ', '-')}`}>
//                       {session.status}
//                     </span>
//                   </div>
//                   <div className="spanda-sessions__card-body">
//                     <div className="spanda-sessions__info">
//                       <Calendar size={14} />
//                       <span>{session.date}</span>
//                     </div>
//                     <div className="spanda-sessions__info">
//                       <Clock size={14} />
//                       <span>{session.time}</span>
//                     </div>
//                     <div className="spanda-sessions__info">
//                       <MapPin size={14} />
//                       <span>{session.location}</span>
//                     </div>
//                   </div>
//                   <Link to="/contact" className="spanda-sessions__btn">
//                     Register Interest <ArrowRight size={14} />
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* TESTIMONIALS */}
//         {/* ============================================ */}
//         <section className="spanda-testimonials" data-section="testimonials">
//           <div className="spanda-container">
//             <div className={`spanda-testimonials__grid ${isVisible.testimonials ? "visible" : ""}`}>
//               {testimonials.map((testimonial, index) => (
//                 <div className="spanda-testimonials__card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
//                   <Quote size={32} className="spanda-testimonials__quote-icon" />
//                   <p className="spanda-testimonials__text">{testimonial.quote}</p>
//                   <div className="spanda-testimonials__author">
//                     <strong>{testimonial.name}</strong>
//                     <span>{testimonial.role}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* CONTACT / GET INVOLVED */}
//         {/* ============================================ */}
//         <section className="spanda-contact" id="contact" data-section="contact">
//           <div className="spanda-contact__bg">
//             <img 
//               src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//               alt="Get Involved"
//               loading="lazy"
//             />
//             <div className="spanda-contact__overlay" />
//           </div>
//           <div className="spanda-container">
//             <div className={`spanda-contact__wrapper ${isVisible.contact ? "visible" : ""}`}>
//               <div className="spanda-contact__header">
//                 <Sparkles size={24} />
//                 <h2>Get Involved with SPANDA</h2>
//                 <p>
//                   Interested in participating, collaborating, or supporting SPANDA? 
//                   We'd love to hear from you. Join our next session or reach out for more information.
//                 </p>
//               </div>
//               <div className="spanda-contact__actions">
//                 <Link to="/contact" className="spanda-contact__btn spanda-contact__btn--primary">
//                   <Send size={18} /> Contact Us
//                 </Link>
//                 <Link to="/membership" className="spanda-contact__btn spanda-contact__btn--secondary">
//                   <Users size={18} /> Become a Member
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//       </div>
//     </>
//   );
// };

// export default SpandaPage;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Users,
  Music,
  Star,
  Quote,
  ChevronRight,
  Calendar,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import "./SpandaPage.css";

// Import images
import acthero from "../../assets/spanda.png";
import actspanda from "../../assets/actspanda.png";
import contactcta from "../../assets/contactcta.png";

const SpandaPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState("about");

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
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "SPANDA opened new dimensions in my dance practice. The collaborative environment is truly inspiring.",
      name: "Dr. Meera Sharma",
      role: "Bharatanatyam Artist",
    },
    {
      quote: "A unique programme that bridges traditional dance with contemporary movement exploration.",
      name: "Rajesh Kumar Iyer",
      role: "Kathak Practitioner",
    },
    {
      quote: "The workshops helped me discover new ways to express through movement. Truly transformative!",
      name: "Ananya Patel",
      role: "Odissi Dancer",
    },
  ];

  const upcomingSessions = [
    {
      title: "Movement Exploration Workshop",
      date: "March 15, 2026",
      time: "10:00 AM - 2:00 PM",
      location: "Berlin Studio",
      status: "Open",
    },
    {
      title: "Collaborative Creation Lab",
      date: "April 20, 2026",
      time: "11:00 AM - 4:00 PM",
      location: "Munich Dance Center",
      status: "Open",
    },
    {
      title: "SPANDA Intensive Weekend",
      date: "June 5-6, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Hamburg",
      status: "Coming Soon",
    },
  ];

  const benefits = [
    { icon: <Music size={20} strokeWidth={1.5} />, title: "Artistic Growth", description: "Expand your creative vocabulary through guided movement exploration and improvisation." },
    { icon: <Users size={20} strokeWidth={1.5} />, title: "Community Connection", description: "Collaborate with fellow artists and build meaningful creative relationships." },
    { icon: <Heart size={20} strokeWidth={1.5} />, title: "Personal Development", description: "Develop body awareness, mindfulness, and expressive freedom." },
    { icon: <Star size={20} strokeWidth={1.5} />, title: "Performance Opportunities", description: "Showcase your work in SPANDA showcases and collaborative performances." },
  ];

  return (
    <>
      <Helmet>
        <title>SPANDA Programme | KITD - Classical Indian Dance Germany</title>
        <meta name="description" content="SPANDA is KITD's unique initiative for movement exploration, creative learning, and artistic collaboration. Join our workshops and sessions." />
      </Helmet>

      <div className="sp-page">

        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="sp-page__hero">
          <div className="sp-page__hero-bg">
            <img src={acthero} alt="SPANDA Programme" loading="eager" />
            <div className="sp-page__hero-overlay" />
            <div className="sp-page__hero-gradient" />
          </div>
          
          <div className="sp-page__hero-container">
            <div className="sp-page__hero-content">
              <div className="sp-page__hero-badge">
                <Sparkles size={14} strokeWidth={1.5} />
                <span>KITD Programme</span>
              </div>
              <h1 className="sp-page__hero-title">SPANDA</h1>
              <p className="sp-page__hero-subtitle">
                Movement • Exploration • Creation
              </p>
              <p className="sp-page__hero-desc">
                A unique initiative that brings together artists and participants 
                through movement exploration, workshops, and collaborative learning 
                experiences.
              </p>
              <div className="sp-page__hero-actions">
                <a href="#sessions" className="sp-page__hero-btn sp-page__hero-btn--primary">
                  <span>Upcoming Sessions</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </a>
                <a href="#contact" className="sp-page__hero-btn sp-page__hero-btn--secondary">
                  <span>Get Involved</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* BREADCRUMB */}
        {/* ============================================ */}
        <div className="sp-page__breadcrumb">
          <div className="sp-page__container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <Link to="/activities">Activities</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>SPANDA</span>
          </div>
        </div>

        {/* ============================================ */}
        {/* ABOUT SECTION */}
        {/* ============================================ */}
        <section className="sp-page__about" data-section="about">
          <div className="sp-page__container">
            <div className={`sp-page__about-grid ${isVisible.about ? "visible" : ""}`}>
              <div className="sp-page__about-content">
                <div className="sp-page__about-eyebrow">
                  <span className="sp-page__about-eyebrow-line" />
                  <span className="sp-page__about-eyebrow-text">About the Programme</span>
                </div>
                <h2 className="sp-page__about-title">
                  What is <span className="sp-page__about-title-accent">SPANDA?</span>
                </h2>
                <p className="sp-page__about-text">
                  SPANDA, derived from Sanskrit meaning "expansion" or "vibration", 
                  is KITD's flagship programme for creative movement exploration. It 
                  brings together classical Indian dance practitioners, contemporary 
                  dancers, and movement enthusiasts in a collaborative space.
                </p>
                <p className="sp-page__about-text">
                  Through structured workshops, improvisation sessions, and 
                  collaborative projects, SPANDA creates a unique environment where 
                  traditional dance vocabulary meets contemporary movement research.
                </p>
                <div className="sp-page__about-quote">
                  <Quote size={20} strokeWidth={1.5} />
                  <p>"SPANDA embodies the spirit of expansion and creative growth, where every movement tells a story and every participant contributes to the collective artistic journey."</p>
                </div>
              </div>
              <div className="sp-page__about-visual">
                <div className="sp-page__about-image">
                  <img src={actspanda} alt="SPANDA Movement Session" loading="lazy" />
                  <div className="sp-page__about-image-accent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* BENEFITS */}
        {/* ============================================ */}
        <section className="sp-page__benefits" data-section="benefits">
          <div className="sp-page__container">
            <div className="sp-page__benefits-header">
              <div className="sp-page__benefits-eyebrow">
                <span className="sp-page__benefits-eyebrow-line" />
                <span className="sp-page__benefits-eyebrow-text">Why Join SPANDA</span>
              </div>
              <h2 className="sp-page__benefits-title">Benefits of Participation</h2>
            </div>
            <div className={`sp-page__benefits-grid ${isVisible.benefits ? "visible" : ""}`}>
              {benefits.map((benefit, index) => (
                <div className="sp-page__benefits-card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="sp-page__benefits-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* UPCOMING SESSIONS */}
        {/* ============================================ */}
        {/* <section className="sp-page__sessions" id="sessions" data-section="sessions">
          <div className="sp-page__container">
            <div className="sp-page__sessions-header">
              <div className="sp-page__sessions-eyebrow">
                <span className="sp-page__sessions-eyebrow-line" />
                <span className="sp-page__sessions-eyebrow-text">Join Us</span>
              </div>
              <h2 className="sp-page__sessions-title">Upcoming Sessions</h2>
            </div>
            <div className={`sp-page__sessions-grid ${isVisible.sessions ? "visible" : ""}`}>
              {upcomingSessions.map((session, index) => (
                <div className="sp-page__sessions-card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="sp-page__sessions-card-header">
                    <h3>{session.title}</h3>
                    <span className={`sp-page__sessions-status sp-page__sessions-status--${session.status.toLowerCase().replace(' ', '-')}`}>
                      {session.status}
                    </span>
                  </div>
                  <div className="sp-page__sessions-card-body">
                    <div className="sp-page__sessions-info">
                      <Calendar size={14} strokeWidth={1.5} />
                      <span>{session.date}</span>
                    </div>
                    <div className="sp-page__sessions-info">
                      <Clock size={14} strokeWidth={1.5} />
                      <span>{session.time}</span>
                    </div>
                    <div className="sp-page__sessions-info">
                      <MapPin size={14} strokeWidth={1.5} />
                      <span>{session.location}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="sp-page__sessions-btn">
                    Register Interest <ArrowRight size={12} strokeWidth={1.5} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ============================================ */}
        {/* TESTIMONIALS */}
        {/* ============================================ */}
        {/* <section className="sp-page__testimonials" data-section="testimonials">
          <div className="sp-page__container">
            <div className={`sp-page__testimonials-grid ${isVisible.testimonials ? "visible" : ""}`}>
              {testimonials.map((testimonial, index) => (
                <div className="sp-page__testimonials-card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <Quote size={28} strokeWidth={1.5} className="sp-page__testimonials-quote" />
                  <p className="sp-page__testimonials-text">{testimonial.quote}</p>
                  <div className="sp-page__testimonials-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* ============================================ */}
        {/* CONTACT / GET INVOLVED */}
        {/* ============================================ */}
        <section className="sp-page__contact" id="contact" data-section="contact">
          <div className="sp-page__contact-bg">
            <img src={contactcta} alt="Get Involved" loading="lazy" />
            <div className="sp-page__contact-overlay" />
          </div>
          <div className="sp-page__container">
            <div className={`sp-page__contact-wrapper ${isVisible.contact ? "visible" : ""}`}>
              <div className="sp-page__contact-header">
                <Sparkles size={20} strokeWidth={1.5} />
                <h2>Get Involved with SPANDA</h2>
                <p>
                  Interested in participating, collaborating, or supporting SPANDA? 
                  We'd love to hear from you. Join our next session or reach out for more information.
                </p>
              </div>
              <div className="sp-page__contact-actions">
                <Link to="/contact" className="sp-page__contact-btn sp-page__contact-btn--primary">
                  <Send size={16} strokeWidth={1.5} /> Contact Us
                </Link>
                <Link to="/membership" className="sp-page__contact-btn sp-page__contact-btn--secondary">
                  <Users size={16} strokeWidth={1.5} /> Become a Member
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default SpandaPage;