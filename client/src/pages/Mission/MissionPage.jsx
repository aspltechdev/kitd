// // // src/pages/MissionVision/MissionVisionPage.jsx

// // import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   ArrowRight,
// //   Target,
// //   Eye,
// //   Heart,
// //   Shield,
// //   Users,
// //   Globe,
// //   BookOpen,
// //   Sparkles,
// //   Handshake,
// //   Scroll,
// //   Lightbulb,
// //   Quote,
// //   ChevronRight,
// // } from "lucide-react";
// // import { Helmet } from "react-helmet-async";

// // import "./MissionPage.css";

// // // Mission feature cards
// // const missionFeatures = [
// //   {
// //     icon: <BookOpen size={20} strokeWidth={1.5} />,
// //     title: "Cultural Preservation",
// //     description:
// //       "Safeguarding the authentic traditions and techniques of Indian Classical Dance for future generations through documentation and practice.",
// //   },
// //   {
// //     icon: <Sparkles size={20} strokeWidth={1.5} />,
// //     title: "Knowledge Sharing",
// //     description:
// //       "Facilitating the exchange of knowledge through workshops, lecture demonstrations, and educational resources across Germany.",
// //   },
// //   {
// //     icon: <Users size={20} strokeWidth={1.5} />,
// //     title: "Community Collaboration",
// //     description:
// //       "Building meaningful connections between artists, teachers, institutions, and cultural organisations throughout the country.",
// //   },
// //   {
// //     icon: <Heart size={20} strokeWidth={1.5} />,
// //     title: "Artistic Development",
// //     description:
// //       "Supporting the growth of artists through performance opportunities, networking, and professional development programmes.",
// //   },
// // ];

// // // Vision cards
// // const visionCards = [
// //   {
// //     icon: <Users size={20} strokeWidth={1.5} />,
// //     title: "National Community",
// //     description:
// //       "A connected network of artists and cultural practitioners spanning all regions of Germany.",
// //   },
// //   {
// //     icon: <Handshake size={20} strokeWidth={1.5} />,
// //     title: "Institutional Partnerships",
// //     description:
// //       "Strong collaborations with cultural institutions, universities, and arts organisations.",
// //   },
// //   {
// //     icon: <Globe size={20} strokeWidth={1.5} />,
// //     title: "Cultural Exchange",
// //     description:
// //       "Vibrant intercultural dialogue introducing Indian Classical Dance to diverse audiences.",
// //   },
// //   {
// //     icon: <Shield size={20} strokeWidth={1.5} />,
// //     title: "Long-term Sustainability",
// //     description:
// //       "A thriving ecosystem that ensures Indian Classical Dance continues to flourish in Germany.",
// //   },
// // ];

// // // Core values
// // const coreValues = [
// //   {
// //     icon: <Shield size={18} strokeWidth={1.5} />,
// //     title: "Integrity",
// //     description: "We uphold the highest standards of honesty and ethical conduct in all our activities.",
// //   },
// //   {
// //     icon: <Users size={18} strokeWidth={1.5} />,
// //     title: "Inclusiveness",
// //     description: "We welcome diverse voices, dance forms, and perspectives within our community.",
// //   },
// //   {
// //     icon: <Handshake size={18} strokeWidth={1.5} />,
// //     title: "Collaboration",
// //     description: "We believe in the power of working together to achieve shared goals.",
// //   },
// //   {
// //     icon: <Heart size={18} strokeWidth={1.5} />,
// //     title: "Respect",
// //     description: "We honour the traditions, artists, and cultural heritage of Indian Classical Dance.",
// //   },
// //   {
// //     icon: <Scroll size={18} strokeWidth={1.5} />,
// //     title: "Tradition",
// //     description: "We remain rooted in the authentic classical dance traditions while embracing growth.",
// //   },
// //   {
// //     icon: <Lightbulb size={18} strokeWidth={1.5} />,
// //     title: "Innovation",
// //     description: "We encourage creative approaches to education, performance, and community engagement.",
// //   },
// // ];

// // const MissionPage = () => {
// //   const [isVisible, setIsVisible] = useState({});

// //   useEffect(() => {
// //     window.scrollTo(0, 0);

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setIsVisible((prev) => ({
// //               ...prev,
// //               [entry.target.dataset.section]: true,
// //             }));
// //           }
// //         });
// //       },
// //       { threshold: 0.1 }
// //     );

// //     document.querySelectorAll("[data-section]").forEach((section) => {
// //       observer.observe(section);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <>
// //       <Helmet>
// //         <title>Mission & Visionsss | KITD - Classical Indian Dance Germany</title>
// //         <meta
// //           name="description"
// //           content="Discover the mission, vision, and core values of Klassischer Indischer Tanz Deutschland (KITD) e.V. - preserving and promoting Indian Classical Dance across Germany."
// //         />
// //       </Helmet>

// //       <div className="missionvision-page">
// //         {/* ============================================ */}
// //         {/* HERO SECTION */}
// //         {/* ============================================ */}
// //         <section className="mv-hero">
// //           <div className="mv-hero-bg" />
// //           <div className="mv-hero-container">
// //             <div className="mv-hero-content">
// //               <div className="mv-hero-eyebrow">
// //                 <span className="mv-hero-eyebrow-line" />
// //                 <span className="mv-hero-eyebrow-text">Our Purpose</span>
// //               </div>
// //               <h1 className="mv-hero-title">
// //                 Mission &
// //                 <span className="mv-hero-title-accent"> Visionss</span>
// //               </h1>
// //               <p className="mv-hero-description">
// //                 Guiding principles that define our commitment to mediating, 
// //                 broadcasting, and fostering Indian Classical Dance and its 
// //                 associated knowledge across Germany.
// //               </p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* BREADCRUMB */}
// //         {/* ============================================ */}
// //         <div className="mv-breadcrumb">
// //           <div className="mv-container">
// //             <Link to="/">Home</Link>
// //             <ChevronRight size={14} strokeWidth={1.5} />
// //             <Link to="/about">About</Link>
// //             <ChevronRight size={14} strokeWidth={1.5} />
// //             <span>Mission & Vision</span>
// //           </div>
// //         </div>

// //         {/* ============================================ */}
// //         {/* MISSION SECTION */}
// //         {/* ============================================ */}
// //         <section className="mv-mission" data-section="mission">
// //           <div className="mv-container">
// //             <div className={`mv-mission-wrapper ${isVisible.mission ? "visible" : ""}`}>
// //               {/* Mission Header */}
// //               <div className="mv-mission-header">
// //                 <div className="mv-mission-icon-large">
// //                   <Target size={36} strokeWidth={1.5} />
// //                 </div>
// //                 <div className="mv-mission-tags">
// //                   <span className="mv-tag">Preserve</span>
// //                   <span className="mv-tag-dot">•</span>
// //                   <span className="mv-tag">Promote</span>
// //                   <span className="mv-tag-dot">•</span>
// //                   <span className="mv-tag">Foster</span>
// //                 </div>
// //                 <h2 className="mv-mission-title">Our Mission</h2>
// //                 <p className="mv-mission-description">
// //                   To preserve and promote Indian Classical Dance through education, 
// //                   performances, collaboration, and community engagement while creating 
// //                   opportunities for artists and learners across Germany. We are dedicated 
// //                   to mediating, broadcasting, and the continued fostering of Indian 
// //                   Classical Dance and its associated knowledge.
// //                 </p>
// //               </div>

// //               {/* Mission Feature Cards */}
// //               <div className="mv-mission-grid">
// //                 {missionFeatures.map((feature, index) => (
// //                   <div
// //                     className="mv-mission-card"
// //                     key={index}
// //                     style={{ transitionDelay: `${index * 0.1}s` }}
// //                   >
// //                     <div className="mv-mission-card-icon">{feature.icon}</div>
// //                     <h3 className="mv-mission-card-title">{feature.title}</h3>
// //                     <p className="mv-mission-card-description">
// //                       {feature.description}
// //                     </p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* VISION SECTION */}
// //         {/* ============================================ */}
// //         <section className="mv-vision" data-section="vision">
// //           <div className="mv-container">
// //             <div className={`mv-vision-wrapper ${isVisible.vision ? "visible" : ""}`}>
// //               {/* Vision Header */}
// //               <div className="mv-vision-header">
// //                 <div className="mv-vision-icon-large">
// //                   <Eye size={36} strokeWidth={1.5} />
// //                 </div>
// //                 <h2 className="mv-vision-title">Our Vision</h2>
// //                 <p className="mv-vision-headline">
// //                   Germany's leading collaborative network
// //                   <br />
// //                   for Indian Classical Dance.
// //                 </p>
// //                 <p className="mv-vision-description">
// //                   To create a strong and inclusive network that connects artists, 
// //                   teachers, institutions, and cultural organisations while inspiring 
// //                   future generations to celebrate and sustain Indian Classical Dance 
// //                   across Germany.
// //                 </p>
// //               </div>

// //               {/* Vision Cards */}
// //               <div className="mv-vision-grid">
// //                 {visionCards.map((card, index) => (
// //                   <div
// //                     className="mv-vision-card"
// //                     key={index}
// //                     style={{ transitionDelay: `${index * 0.1}s` }}
// //                   >
// //                     <div className="mv-vision-card-icon">{card.icon}</div>
// //                     <h3 className="mv-vision-card-title">{card.title}</h3>
// //                     <p className="mv-vision-card-description">
// //                       {card.description}
// //                     </p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* CORE VALUES SECTION */}
// //         {/* ============================================ */}
// //         <section className="mv-values" data-section="values">
// //           <div className="mv-container">
// //             <div className={`mv-values-wrapper ${isVisible.values ? "visible" : ""}`}>
// //               <div className="mv-values-header">
// //                 <div className="mv-values-eyebrow">
// //                   <span className="mv-values-eyebrow-line" />
// //                   <span className="mv-values-eyebrow-text">What We Stand For</span>
// //                 </div>
// //                 <h2 className="mv-values-title">Core Values</h2>
// //               </div>

// //               <div className="mv-values-grid">
// //                 {coreValues.map((value, index) => (
// //                   <div
// //                     className="mv-value-card"
// //                     key={index}
// //                     style={{ transitionDelay: `${index * 0.06}s` }}
// //                   >
// //                     <div className="mv-value-icon">{value.icon}</div>
// //                     <div className="mv-value-content">
// //                       <h3 className="mv-value-title">{value.title}</h3>
// //                       <p className="mv-value-description">{value.description}</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* QUOTE SECTION */}
// //         {/* ============================================ */}
// //         <section className="mv-quote-section" data-section="quote">
// //           <div className="mv-quote-bg" />
// //           <div className="mv-container">
// //             <div className={`mv-quote-wrapper ${isVisible.quote ? "visible" : ""}`}>
// //               <Quote size={40} strokeWidth={1} className="mv-quote-icon" />
// //               <div className="mv-quote-lines">
// //                 <p className="mv-quote-line">Together we preserve</p>
// //                 <p className="mv-quote-line">Together we inspire</p>
// //                 <p className="mv-quote-line mv-quote-line-accent">Together we grow</p>
// //               </div>
// //               <div className="mv-quote-divider" />
// //               <p className="mv-quote-attribution">— The KITD Community</p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* CTA SECTION */}
// //         {/* ============================================ */}
// //         <section className="mv-cta" data-section="cta">
// //           <div className="mv-container">
// //             <div className={`mv-cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
// //               <h2 className="mv-cta-title">Join Our Mission</h2>
// //               <p className="mv-cta-text">
// //                 Become part of a growing community dedicated to preserving and 
// //                 promoting Indian Classical Dance across Germany.
// //               </p>
// //               <div className="mv-cta-buttons">
// //                 <Link to="/membership" className="mv-cta-btn mv-cta-btn-primary">
// //                   <span>Become a Member</span>
// //                   <ArrowRight size={18} strokeWidth={1.5} />
// //                 </Link>
// //                 <Link to="/about" className="mv-cta-btn mv-cta-btn-secondary">
// //                   <span>Learn More About KITD</span>
// //                   <ArrowRight size={18} strokeWidth={1.5} />
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </>
// //   );
// // };

// // export default MissionPage;


// // src/pages/MissionVision/MissionVisionPage.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Target,
//   Eye,
//   Heart,
//   Shield,
//   Users,
//   Globe,
//   BookOpen,
//   Sparkles,
//   Handshake,
//   Scroll,
//   Lightbulb,
//   Quote,
//   ChevronRight,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// import "./MissionPage.css";

// // Mission feature cards with images
// const missionFeatures = [
//   {
//     icon: <BookOpen size={20} strokeWidth={1.5} />,
//     title: "Cultural Preservation",
//     description:
//       "Safeguarding the authentic traditions and techniques of Indian Classical Dance for future generations through documentation and practice.",
//     image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     gradient: "linear-gradient(135deg, rgba(139,30,63,0.88) 0%, rgba(60,10,30,0.92) 100%)",
//   },
//   {
//     icon: <Sparkles size={20} strokeWidth={1.5} />,
//     title: "Knowledge Sharing",
//     description:
//       "Facilitating the exchange of knowledge through workshops, lecture demonstrations, and educational resources across Germany.",
//     image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     gradient: "linear-gradient(135deg, rgba(139,30,63,0.88) 0%, rgba(50,15,25,0.92) 100%)",
//   },
//   {
//     icon: <Users size={20} strokeWidth={1.5} />,
//     title: "Community Collaboration",
//     description:
//       "Building meaningful connections between artists, teachers, institutions, and cultural organisations throughout the country.",
//     image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     gradient: "linear-gradient(135deg, rgba(139,30,63,0.88) 0%, rgba(70,20,40,0.92) 100%)",
//   },
//   {
//     icon: <Heart size={20} strokeWidth={1.5} />,
//     title: "Artistic Development",
//     description:
//       "Supporting the growth of artists through performance opportunities, networking, and professional development programmes.",
//     image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     gradient: "linear-gradient(135deg, rgba(139,30,63,0.88) 0%, rgba(40,10,20,0.92) 100%)",
//   },
// ];

// // Vision cards with images
// const visionCards = [
//   {
//     icon: <Users size={20} strokeWidth={1.5} />,
//     title: "National Community",
//     description: "A connected network of artists and cultural practitioners spanning all regions of Germany.",
//     image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//     gradient: "linear-gradient(135deg, rgba(139,30,63,0.88) 0%, rgba(60,10,30,0.92) 100%)",
//   },
//   {
//     icon: <Handshake size={20} strokeWidth={1.5} />,
//     title: "Institutional Partnerships",
//     description: "Strong collaborations with cultural institutions, universities, and arts organisations.",
//     image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//     gradient: "linear-gradient(135deg, rgba(139,30,63,0.88) 0%, rgba(50,15,25,0.92) 100%)",
//   },
//   {
//     icon: <Globe size={20} strokeWidth={1.5} />,
//     title: "Cultural Exchange",
//     description: "Vibrant intercultural dialogue introducing Indian Classical Dance to diverse audiences.",
//     image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//     gradient: "linear-gradient(135deg, rgba(139,30,63,0.88) 0%, rgba(70,20,40,0.92) 100%)",
//   },
//   {
//     icon: <Shield size={20} strokeWidth={1.5} />,
//     title: "Long-term Sustainability",
//     description: "A thriving ecosystem that ensures Indian Classical Dance continues to flourish in Germany.",
//     image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
//     gradient: "linear-gradient(135deg, rgba(139,30,63,0.88) 0%, rgba(40,10,20,0.92) 100%)",
//   },
// ];

// // Core values
// const coreValues = [
//   {
//     icon: <Shield size={18} strokeWidth={1.5} />,
//     title: "Integrity",
//     description: "We uphold the highest standards of honesty and ethical conduct in all our activities.",
//   },
//   {
//     icon: <Users size={18} strokeWidth={1.5} />,
//     title: "Inclusiveness",
//     description: "We welcome diverse voices, dance forms, and perspectives within our community.",
//   },
//   {
//     icon: <Handshake size={18} strokeWidth={1.5} />,
//     title: "Collaboration",
//     description: "We believe in the power of working together to achieve shared goals.",
//   },
//   {
//     icon: <Heart size={18} strokeWidth={1.5} />,
//     title: "Respect",
//     description: "We honour the traditions, artists, and cultural heritage of Indian Classical Dance.",
//   },
//   {
//     icon: <Scroll size={18} strokeWidth={1.5} />,
//     title: "Tradition",
//     description: "We remain rooted in the authentic classical dance traditions while embracing growth.",
//   },
//   {
//     icon: <Lightbulb size={18} strokeWidth={1.5} />,
//     title: "Innovation",
//     description: "We encourage creative approaches to education, performance, and community engagement.",
//   },
// ];

// const MissionPage = () => {
//   const [isVisible, setIsVisible] = useState({});
//   const [hoveredCard, setHoveredCard] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible((prev) => ({
//               ...prev,
//               [entry.target.dataset.section]: true,
//             }));
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

//   return (
//     <>
//       <Helmet>
//         <title>Mission & Vision | KITD - Classical Indian Dance Germany</title>
//         <meta
//           name="description"
//           content="Discover the mission, vision, and core values of Klassischer Indischer Tanz Deutschland (KITD) e.V. - preserving and promoting Indian Classical Dance across Germany."
//         />
//       </Helmet>

//       <div className="kitd-mv">

//         {/* ============================================ */}
//         {/* HERO SECTION - CINEMATIC */}
//         {/* ============================================ */}
//         <section className="kitd-mv__hero">
//           <div className="kitd-mv__hero-bg">
//             <img 
//               src="https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//               alt="Indian Classical Dance"
//               loading="eager"
//             />
//             <div className="kitd-mv__hero-overlay" />
//             <div className="kitd-mv__hero-gradient" />
//           </div>
          
//           <div className="kitd-mv__hero-container">
//             <div className="kitd-mv__hero-content">
//               <div className="kitd-mv__hero-eyebrow">
//                 <span className="kitd-mv__hero-eyebrow-line" />
//                 <span className="kitd-mv__hero-eyebrow-text">Our Purpose</span>
//               </div>
//               <h1 className="kitd-mv__hero-title">
//                 Mission &
//                 <span className="kitd-mv__hero-title-accent"> Vision</span>
//               </h1>
//               <p className="kitd-mv__hero-description">
//                 Guiding principles that define our commitment to mediating, 
//                 broadcasting, and fostering Indian Classical Dance and its 
//                 associated knowledge across Germany.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* BREADCRUMB */}
//         {/* ============================================ */}
//         <div className="kitd-mv__breadcrumb">
//           <div className="kitd-mv__container">
//             <Link to="/">Home</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <Link to="/about">About</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <span>Mission & Vision</span>
//           </div>
//         </div>

//         {/* ============================================ */}
//         {/* MISSION SECTION */}
//         {/* ============================================ */}
//         <section className="kitd-mv__mission" data-section="mission">
//           <div className="kitd-mv__container">
//             <div className={`kitd-mv__mission-wrapper ${isVisible.mission ? "visible" : ""}`}>
//               {/* Mission Header */}
//               <div className="kitd-mv__mission-header">
//                 <div className="kitd-mv__mission-icon">
//                   <Target size={36} strokeWidth={1.5} />
//                 </div>
//                 <div className="kitd-mv__mission-tags">
//                   <span className="kitd-mv__tag">Preserve</span>
//                   <span className="kitd-mv__tag-dot">•</span>
//                   <span className="kitd-mv__tag">Promote</span>
//                   <span className="kitd-mv__tag-dot">•</span>
//                   <span className="kitd-mv__tag">Foster</span>
//                 </div>
//                 <h2 className="kitd-mv__mission-title">Our Mission</h2>
//                 <p className="kitd-mv__mission-desc">
//                   To preserve and promote Indian Classical Dance through education, 
//                   performances, collaboration, and community engagement while creating 
//                   opportunities for artists and learners across Germany. We are dedicated 
//                   to mediating, broadcasting, and the continued fostering of Indian 
//                   Classical Dance and its associated knowledge.
//                 </p>
//               </div>

//               {/* Mission Feature Cards with Images */}
//               <div className="kitd-mv__mission-grid">
//                 {missionFeatures.map((feature, index) => (
//                   <div
//                     className={`kitd-mv__mission-card ${hoveredCard === `mission-${index}` ? 'kitd-mv__mission-card--hovered' : ''}`}
//                     key={index}
//                     style={{ transitionDelay: `${index * 0.1}s` }}
//                     onMouseEnter={() => setHoveredCard(`mission-${index}`)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div 
//                       className="kitd-mv__mission-card-bg"
//                       style={{ backgroundImage: `url(${feature.image})` }}
//                     />
//                     <div 
//                       className="kitd-mv__mission-card-overlay"
//                       style={{ background: feature.gradient }}
//                     />
                    
//                     <div className="kitd-mv__mission-card-content">
//                       <div className="kitd-mv__mission-card-icon">{feature.icon}</div>
//                       <h3 className="kitd-mv__mission-card-title">{feature.title}</h3>
//                       <p className="kitd-mv__mission-card-desc">{feature.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* VISION SECTION */}
//         {/* ============================================ */}
//         <section className="kitd-mv__vision" data-section="vision">
//           <div className="kitd-mv__container">
//             <div className={`kitd-mv__vision-wrapper ${isVisible.vision ? "visible" : ""}`}>
//               {/* Vision Header */}
//               <div className="kitd-mv__vision-header">
//                 <div className="kitd-mv__vision-icon">
//                   <Eye size={36} strokeWidth={1.5} />
//                 </div>
//                 <h2 className="kitd-mv__vision-title">Our Vision</h2>
//                 <p className="kitd-mv__vision-headline">
//                   Germany's leading collaborative network
//                   <br />
//                   for Indian Classical Dance.
//                 </p>
//                 <p className="kitd-mv__vision-desc">
//                   To create a strong and inclusive network that connects artists, 
//                   teachers, institutions, and cultural organisations while inspiring 
//                   future generations to celebrate and sustain Indian Classical Dance 
//                   across Germany.
//                 </p>
//               </div>

//               {/* Vision Cards with Images */}
//               <div className="kitd-mv__vision-grid">
//                 {visionCards.map((card, index) => (
//                   <div
//                     className={`kitd-mv__vision-card ${hoveredCard === `vision-${index}` ? 'kitd-mv__vision-card--hovered' : ''}`}
//                     key={index}
//                     style={{ transitionDelay: `${index * 0.1}s` }}
//                     onMouseEnter={() => setHoveredCard(`vision-${index}`)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div 
//                       className="kitd-mv__vision-card-bg"
//                       style={{ backgroundImage: `url(${card.image})` }}
//                     />
//                     <div 
//                       className="kitd-mv__vision-card-overlay"
//                       style={{ background: card.gradient }}
//                     />
                    
//                     <div className="kitd-mv__vision-card-content">
//                       <div className="kitd-mv__vision-card-icon">{card.icon}</div>
//                       <h3 className="kitd-mv__vision-card-title">{card.title}</h3>
//                       <p className="kitd-mv__vision-card-desc">{card.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* CORE VALUES SECTION */}
//         {/* ============================================ */}
//         <section className="kitd-mv__values" data-section="values">
//           <div className="kitd-mv__container">
//             <div className={`kitd-mv__values-wrapper ${isVisible.values ? "visible" : ""}`}>
//               <div className="kitd-mv__values-header">
//                 <div className="kitd-mv__values-eyebrow">
//                   <span className="kitd-mv__values-eyebrow-line" />
//                   <span className="kitd-mv__values-eyebrow-text">What We Stand For</span>
//                 </div>
//                 <h2 className="kitd-mv__values-title">Core Values</h2>
//               </div>

//               <div className="kitd-mv__values-grid">
//                 {coreValues.map((value, index) => (
//                   <div
//                     className="kitd-mv__value-card"
//                     key={index}
//                     style={{ transitionDelay: `${index * 0.06}s` }}
//                   >
//                     <div className="kitd-mv__value-icon">{value.icon}</div>
//                     <div className="kitd-mv__value-content">
//                       <h3 className="kitd-mv__value-title">{value.title}</h3>
//                       <p className="kitd-mv__value-desc">{value.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* QUOTE SECTION */}
//         {/* ============================================ */}
//         <section className="kitd-mv__quote" data-section="quote">
//           <div className="kitd-mv__quote-bg">
//             <img 
//               src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//               alt="KITD Community"
//               loading="lazy"
//             />
//             <div className="kitd-mv__quote-overlay" />
//           </div>
          
//           <div className="kitd-mv__container">
//             <div className={`kitd-mv__quote-wrapper ${isVisible.quote ? "visible" : ""}`}>
//               <Quote size={40} strokeWidth={1} className="kitd-mv__quote-icon" />
//               <div className="kitd-mv__quote-lines">
//                 <p className="kitd-mv__quote-line">Together we preserve</p>
//                 <p className="kitd-mv__quote-line">Together we inspire</p>
//                 <p className="kitd-mv__quote-line kitd-mv__quote-line--accent">Together we grow</p>
//               </div>
//               <div className="kitd-mv__quote-divider" />
//               <p className="kitd-mv__quote-attribution">— The KITD Community</p>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* CTA SECTION */}
//         {/* ============================================ */}
//         <section className="kitd-mv__cta" data-section="cta">
//           <div className="kitd-mv__cta-bg">
//             <img 
//               src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
//               alt="KITD Community"
//               loading="lazy"
//             />
//             <div className="kitd-mv__cta-overlay" />
//           </div>
          
//           <div className="kitd-mv__container">
//             <div className={`kitd-mv__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
//               <h2 className="kitd-mv__cta-title">Join Our Mission</h2>
//               <p className="kitd-mv__cta-text">
//                 Become part of a growing community dedicated to preserving and 
//                 promoting Indian Classical Dance across Germany.
//               </p>
//               <div className="kitd-mv__cta-buttons">
//                 <Link to="/membership" className="kitd-mv__cta-btn kitd-mv__cta-btn--primary">
//                   <span>Become a Member</span>
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </Link>
//                 <Link to="/about" className="kitd-mv__cta-btn kitd-mv__cta-btn--secondary">
//                   <span>Learn More About KITD</span>
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default MissionPage;



// src/pages/MissionVision/MissionVisionPage.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Target,
//   Eye,
//   Heart,
//   Shield,
//   Users,
//   Globe,
//   BookOpen,
//   Sparkles,
//   Handshake,
//   Scroll,
//   Lightbulb,
//   Quote,
//   ChevronRight,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// import "./MissionPage.css";

// // Mission feature cards with images
// const missionFeatures = [
//   {
//     icon: <BookOpen size={20} strokeWidth={1.5} />,
//     title: "Cultural Preservation",
//     description:
//       "Safeguarding the authentic traditions and techniques of Indian Classical Dance for future generations through documentation and practice.",
//     image: "https://images.pexels.com/photos/32285696/pexels-photo-32285696.jpeg",
// gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.32) 0%, rgba(40, 10, 20, 0.32) 100%)",
//   },
//   {
//     icon: <Sparkles size={20} strokeWidth={1.5} />,
//     title: "Knowledge Sharing",
//     description:
//       "Facilitating the exchange of knowledge through workshops, lecture demonstrations, and educational resources across Germany.",
//     image: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
//    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.32) 0%, rgba(40, 10, 20, 0.32) 100%)",
//   },
//   {
//     icon: <Users size={20} strokeWidth={1.5} />,
//     title: "Community Collaboration",
//     description:
//       "Building meaningful connections between artists, teachers, institutions, and cultural organisations throughout the country.",
//     image: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
// gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.32) 0%, rgba(40, 10, 20, 0.32) 100%)",
//   },
//   {
//     icon: <Heart size={20} strokeWidth={1.5} />,
//     title: "Artistic Development",
//     description:
//       "Supporting the growth of artists through performance opportunities, networking, and professional development programmes.",
//     image: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
//     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.32) 0%, rgba(40, 10, 20, 0.32) 100%)",
//   }
// ];

// // Vision cards with images
// const visionCards = [
//   {
//     icon: <Users size={20} strokeWidth={1.5} />,
//     title: "National Community",
//     description: "A connected network of artists and cultural practitioners spanning all regions of Germany.",
//     image: "https://images.pexels.com/photos/31521701/pexels-photo-31521701.jpeg",
//     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.32) 0%, rgba(40, 10, 20, 0.32) 100%)",
//   },
//   {
//     icon: <Handshake size={20} strokeWidth={1.5} />,
//     title: "Institutional Partnerships",
//     description: "Strong collaborations with cultural institutions, universities, and arts organisations.",
//     image: "https://images.pexels.com/photos/33638407/pexels-photo-33638407.jpeg",
// gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.32) 0%, rgba(40, 10, 20, 0.32) 100%)",
//   },
//   {
//     icon: <Globe size={20} strokeWidth={1.5} />,
//     title: "Cultural Exchange",
//     description: "Vibrant intercultural dialogue introducing Indian Classical Dance to diverse audiences.",
//     image: "https://images.pexels.com/photos/31405367/pexels-photo-31405367.jpeg",
//     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.32) 0%, rgba(40, 10, 20, 0.32) 100%)",
//   },
//   {
//     icon: <Shield size={20} strokeWidth={1.5} />,
//     title: "Long-term Sustainability",
//     description: "A thriving ecosystem that ensures Indian Classical Dance continues to flourish in Germany.",
//     image: "https://images.pexels.com/photos/33638418/pexels-photo-33638418.jpeg",
//     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.32) 0%, rgba(40, 10, 20, 0.32) 100%)",
//   },
// ];

// // Core values
// const coreValues = [
//   {
//     icon: <Shield size={18} strokeWidth={1.5} />,
//     title: "Integrity",
//     description: "We uphold the highest standards of honesty and ethical conduct in all our activities.",
//   },
//   {
//     icon: <Users size={18} strokeWidth={1.5} />,
//     title: "Inclusiveness",
//     description: "We welcome diverse voices, dance forms, and perspectives within our community.",
//   },
//   {
//     icon: <Handshake size={18} strokeWidth={1.5} />,
//     title: "Collaboration",
//     description: "We believe in the power of working together to achieve shared goals.",
//   },
//   {
//     icon: <Heart size={18} strokeWidth={1.5} />,
//     title: "Respect",
//     description: "We honour the traditions, artists, and cultural heritage of Indian Classical Dance.",
//   },
//   {
//     icon: <Scroll size={18} strokeWidth={1.5} />,
//     title: "Tradition",
//     description: "We remain rooted in the authentic classical dance traditions while embracing growth.",
//   },
//   {
//     icon: <Lightbulb size={18} strokeWidth={1.5} />,
//     title: "Innovation",
//     description: "We encourage creative approaches to education, performance, and community engagement.",
//   },
// ];

// const MissionPage = () => {
//   const [isVisible, setIsVisible] = useState({});
//   const [hoveredCard, setHoveredCard] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible((prev) => ({
//               ...prev,
//               [entry.target.dataset.section]: true,
//             }));
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

//   return (
//     <>
//       <Helmet>
//         <title>Mission & Vision | KITD - Classical Indian Dance Germany</title>
//         <meta
//           name="description"
//           content="Discover the mission, vision, and core values of Klassischer Indischer Tanz Deutschland (KITD) e.V. - preserving and promoting Indian Classical Dance across Germany."
//         />
//       </Helmet>

//       <div className="kitd-mv">

//         {/* ============================================ */}
//         {/* HERO SECTION */}
//         {/* ============================================ */}
//         <section className="kitd-mv__hero">
//           <div className="kitd-mv__hero-bg">
//             <img 
//               src="https://images.pexels.com/photos/36121661/pexels-photo-36121661.jpeg"
//               alt="Indian Classical Dance"
//               loading="eager"
//             />
//             <div className="kitd-mv__hero-overlay" />
//             <div className="kitd-mv__hero-gradient" />
//           </div>
          
//           <div className="kitd-mv__hero-container">
//             <div className="kitd-mv__hero-content">
//               <div className="kitd-mv__hero-eyebrow">
//                 <span className="kitd-mv__hero-eyebrow-line" />
//                 <span className="kitd-mv__hero-eyebrow-text">Our Purpose</span>
//               </div>
//               <h1 className="kitd-mv__hero-title">
//                 Mission &amp;
//                 <span className="kitd-mv__hero-title-accent"> Vision</span>
//               </h1>
//               <p className="kitd-mv__hero-description">
//                 Guiding principles that define our commitment to mediating, 
//                 broadcasting, and fostering Indian Classical Dance and its 
//                 associated knowledge across Germany.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* MISSION SECTION */}
//         {/* ============================================ */}
//         <section className="kitd-mv__mission" data-section="mission">
//           <div className="kitd-mv__container">
//             <div className={`kitd-mv__mission-wrapper ${isVisible.mission ? "visible" : ""}`}>
//               <div className="kitd-mv__mission-header">
//                 <div className="kitd-mv__mission-icon">
//                   <Target size={32} strokeWidth={1.5} />
//                 </div>
//                 <h2 className="kitd-mv__mission-title">Our Mission</h2>
//                 <p className="kitd-mv__mission-desc">
//                   To preserve and promote Indian Classical Dance through education, 
//                   performances, collaboration, and community engagement while creating 
//                   opportunities for artists and learners across Germany.
//                 </p>
//               </div>

//               <div className="kitd-mv__mission-grid">
//                 {missionFeatures.map((feature, index) => (
//                   <div
//                     className={`kitd-mv__mission-card ${hoveredCard === `mission-${index}` ? 'kitd-mv__mission-card--hovered' : ''}`}
//                     key={index}
//                     style={{ transitionDelay: `${index * 0.1}s` }}
//                     onMouseEnter={() => setHoveredCard(`mission-${index}`)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div 
//                       className="kitd-mv__mission-card-bg"
//                       style={{ backgroundImage: `url(${feature.image})` }}
//                     />
//                     <div 
//                       className="kitd-mv__mission-card-overlay"
//                       style={{ background: feature.gradient }}
//                     />
                    
//                     <div className="kitd-mv__mission-card-content">
//                       <div className="kitd-mv__mission-card-icon">{feature.icon}</div>
//                       <h3 className="kitd-mv__mission-card-title">{feature.title}</h3>
//                       <p className="kitd-mv__mission-card-desc">{feature.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* VISION SECTION */}
//         {/* ============================================ */}
//         <section className="kitd-mv__vision" data-section="vision">
//           <div className="kitd-mv__container">
//             <div className={`kitd-mv__vision-wrapper ${isVisible.vision ? "visible" : ""}`}>
//               <div className="kitd-mv__vision-header">
//                 <div className="kitd-mv__vision-icon">
//                   <Eye size={32} strokeWidth={1.5} />
//                 </div>
//                 <h2 className="kitd-mv__vision-title">Our Vision</h2>
//                 <p className="kitd-mv__vision-headline">
//                   Germany's leading collaborative network for Indian Classical Dance.
//                 </p>
//                 <p className="kitd-mv__vision-desc">
//                   To create a strong and inclusive network that connects artists, 
//                   teachers, institutions, and cultural organisations while inspiring 
//                   future generations to celebrate and sustain Indian Classical Dance 
//                   across Germany.
//                 </p>
//               </div>

//               <div className="kitd-mv__vision-grid">
//                 {visionCards.map((card, index) => (
//                   <div
//                     className={`kitd-mv__vision-card ${hoveredCard === `vision-${index}` ? 'kitd-mv__vision-card--hovered' : ''}`}
//                     key={index}
//                     style={{ transitionDelay: `${index * 0.1}s` }}
//                     onMouseEnter={() => setHoveredCard(`vision-${index}`)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div 
//                       className="kitd-mv__vision-card-bg"
//                       style={{ backgroundImage: `url(${card.image})` }}
//                     />
//                     <div 
//                       className="kitd-mv__vision-card-overlay"
//                       style={{ background: card.gradient }}
//                     />
                    
//                     <div className="kitd-mv__vision-card-content">
//                       <div className="kitd-mv__vision-card-icon">{card.icon}</div>
//                       <h3 className="kitd-mv__vision-card-title">{card.title}</h3>
//                       <p className="kitd-mv__vision-card-desc">{card.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* CORE VALUES */}
//         {/* ============================================ */}
//         <section className="kitd-mv__values" data-section="values">
//           <div className="kitd-mv__container">
//             <div className={`kitd-mv__values-wrapper ${isVisible.values ? "visible" : ""}`}>
//               <div className="kitd-mv__values-header">
//                 <div className="kitd-mv__values-eyebrow">
//                   <span className="kitd-mv__values-eyebrow-line" />
//                   <span className="kitd-mv__values-eyebrow-text">What We Stand For</span>
//                 </div>
//                 <h2 className="kitd-mv__values-title">Core Values</h2>
//                 <p className="kitd-mv__values-desc">
//                   The principles that guide our work, interactions, and commitment to the community.
//                 </p>
//               </div>

//               <div className="kitd-mv__values-grid">
//                 {coreValues.map((value, index) => (
//                   <div
//                     className="kitd-mv__value-card"
//                     key={index}
//                     style={{ transitionDelay: `${index * 0.06}s` }}
//                   >
//                     <div className="kitd-mv__value-icon">{value.icon}</div>
//                     <div className="kitd-mv__value-content">
//                       <h3 className="kitd-mv__value-title">{value.title}</h3>
//                       <p className="kitd-mv__value-desc">{value.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* QUOTE & CTA - Combined Section */}
//         {/* ============================================ */}
//         <section className="kitd-mv__cta" data-section="cta">
//           <div className="kitd-mv__cta-bg">
//             <img 
//               src="https://images.pexels.com/photos/14666187/pexels-photo-14666187.jpeg"
//               alt="KITD Community"
//               loading="lazy"
//             />
//             <div className="kitd-mv__cta-overlay" />
//           </div>
          
//           <div className="kitd-mv__container">
//             <div className={`kitd-mv__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
//               <Quote size={36} strokeWidth={1} className="kitd-mv__cta-quote-icon" />
//               <div className="kitd-mv__cta-quote-lines">
//                 <p className="kitd-mv__cta-quote-line">Together we preserve</p>
//                 <p className="kitd-mv__cta-quote-line">Together we inspire</p>
//                 <p className="kitd-mv__cta-quote-line kitd-mv__cta-quote-line--accent">Together we grow</p>
//               </div>
//               <div className="kitd-mv__cta-divider" />
//               <p className="kitd-mv__cta-attribution">— The KITD Community</p>
              
//               <div className="kitd-mv__cta-actions">
//                 <Link to="/membership" className="kitd-mv__cta-btn kitd-mv__cta-btn--primary">
//                   <span>Become a Member</span>
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </Link>
//                 <Link to="/about" className="kitd-mv__cta-btn kitd-mv__cta-btn--secondary">
//                   <span>Learn About KITD</span>
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default MissionPage;

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
import m1 from "../../assets/m1.png";
import m2 from "../../assets/m2.png";
import m3 from "../../assets/m3.png";
import m4 from "../../assets/m4.png";

import m6 from "../../assets/m6.png";

import m7 from "../../assets/m7.png";
import m8 from "../../assets/m8.png";
import m9 from "../../assets/m9.png";
import m10 from "../../assets/m10.png";
import membercta from "../../assets/membercta.png";



// Mission feature cards with images
const missionFeatures = [
  {
    icon: <BookOpen size={20} strokeWidth={1.5} />,
    title: "Cultural Preservation",
    description:
      "Safeguarding the authentic traditions and techniques of Indian Classical Dance for future generations through documentation and practice.",
    image: m1,
  },
  {
    icon: <Sparkles size={20} strokeWidth={1.5} />,
    title: "Knowledge Sharing",
    description:
      "Facilitating the exchange of knowledge through workshops, lecture demonstrations, and educational resources across Germany.",
    image: m2,
  },
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: "Community Collaboration",
    description:
      "Building meaningful connections between artists, teachers, institutions, and cultural organisations throughout the country.",
    image: m4,
  },
  {
    icon: <Heart size={20} strokeWidth={1.5} />,
    title: "Artistic Development",
    description:
      "Supporting the growth of artists through performance opportunities, networking, and professional development programmes.",
    image:m6,
  }
];

// Vision cards with images
const visionCards = [
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    title: "National Community",
    description: "A connected network of artists and cultural practitioners spanning all regions of Germany.",
    image: m7,
  },
  {
    icon: <Handshake size={20} strokeWidth={1.5} />,
    title: "Institutional Partnerships",
    description: "Strong collaborations with cultural institutions, universities, and arts organisations.",
    image: m8,
  },
  {
    icon: <Globe size={20} strokeWidth={1.5} />,
    title: "Cultural Exchange",
    description: "Vibrant intercultural dialogue introducing Indian Classical Dance to diverse audiences.",
    image: m9,
  },
  {
    icon: <Shield size={20} strokeWidth={1.5} />,
    title: "Long-term Sustainability",
    description: "A thriving ecosystem that ensures Indian Classical Dance continues to flourish in Germany.",
    image:m10,
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
  const [hoveredCard, setHoveredCard] = useState(null);

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

      <div className="kitd-mv-page">

        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="kitd-mv-page__hero">
          <div className="kitd-mv-page__hero-bg">
            <img 
              src={m3}
              alt="Indian Classical Dance"
              loading="eager"
            />
            <div className="kitd-mv-page__hero-overlay" />
            <div className="kitd-mv-page__hero-gradient" />
          </div>
          
          <div className="kitd-mv-page__hero-container">
            <div className="kitd-mv-page__hero-content">
              <div className="kitd-mv-page__hero-eyebrow">
                <span className="kitd-mv-page__hero-eyebrow-line" />
                <span className="kitd-mv-page__hero-eyebrow-text">Our Purpose</span>
              </div>
              <h1 className="kitd-mv-page__hero-title">
                Mission &amp;
                <span className="kitd-mv-page__hero-title-accent"> Vision</span>
              </h1>
              <p className="kitd-mv-page__hero-description">
                Guiding principles that define our commitment to mediating, 
                broadcasting, and fostering Indian Classical Dance and its 
                associated knowledge across Germany.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* MISSION SECTION */}
        {/* ============================================ */}
        <section className="kitd-mv-page__mission" data-section="mission">
          <div className="kitd-mv-page__container">
            <div className={`kitd-mv-page__mission-wrapper ${isVisible.mission ? "visible" : ""}`}>
              <div className="kitd-mv-page__mission-header">
                <div className="kitd-mv-page__mission-icon">
                  <Target size={32} strokeWidth={1.5} />
                </div>
                <h2 className="kitd-mv-page__mission-title">Our Mission</h2>
                <p className="kitd-mv-page__mission-desc">
                  To preserve and promote Indian Classical Dance through education, 
                  performances, collaboration, and community engagement while creating 
                  opportunities for artists and learners across Germany.
                </p>
              </div>

              <div className="kitd-mv-page__mission-grid">
                {missionFeatures.map((feature, index) => (
                  <div
                    className={`kitd-mv-page__mission-card ${hoveredCard === `mission-${index}` ? 'kitd-mv-page__mission-card--hovered' : ''}`}
                    key={index}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredCard(`mission-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div 
                      className="kitd-mv-page__mission-card-bg"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    />
                    <div className="kitd-mv-page__mission-card-overlay" />
                    
                    <div className="kitd-mv-page__mission-card-content">
                      <div className="kitd-mv-page__mission-card-icon">{feature.icon}</div>
                      <h3 className="kitd-mv-page__mission-card-title">{feature.title}</h3>
                      <p className="kitd-mv-page__mission-card-desc">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* VISION SECTION */}
        {/* ============================================ */}
        <section className="kitd-mv-page__vision" data-section="vision">
          <div className="kitd-mv-page__container">
            <div className={`kitd-mv-page__vision-wrapper ${isVisible.vision ? "visible" : ""}`}>
              <div className="kitd-mv-page__vision-header">
                <div className="kitd-mv-page__vision-icon">
                  <Eye size={32} strokeWidth={1.5} />
                </div>
                <h2 className="kitd-mv-page__vision-title">Our Vision</h2>
                <p className="kitd-mv-page__vision-headline">
                  Germany's leading collaborative network for Indian Classical Dance.
                </p>
                <p className="kitd-mv-page__vision-desc">
                  To create a strong and inclusive network that connects artists, 
                  teachers, institutions, and cultural organisations while inspiring 
                  future generations to celebrate and sustain Indian Classical Dance 
                  across Germany.
                </p>
              </div>

              <div className="kitd-mv-page__vision-grid">
                {visionCards.map((card, index) => (
                  <div
                    className={`kitd-mv-page__vision-card ${hoveredCard === `vision-${index}` ? 'kitd-mv-page__vision-card--hovered' : ''}`}
                    key={index}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredCard(`vision-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div 
                      className="kitd-mv-page__vision-card-bg"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                    <div className="kitd-mv-page__vision-card-overlay" />
                    
                    <div className="kitd-mv-page__vision-card-content">
                      <div className="kitd-mv-page__vision-card-icon">{card.icon}</div>
                      <h3 className="kitd-mv-page__vision-card-title">{card.title}</h3>
                      <p className="kitd-mv-page__vision-card-desc">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CORE VALUES */}
        {/* ============================================ */}
        <section className="kitd-mv-page__values" data-section="values">
          <div className="kitd-mv-page__container">
            <div className={`kitd-mv-page__values-wrapper ${isVisible.values ? "visible" : ""}`}>
              <div className="kitd-mv-page__values-header">
                <div className="kitd-mv-page__values-eyebrow">
                  <span className="kitd-mv-page__values-eyebrow-line" />
                  <span className="kitd-mv-page__values-eyebrow-text">What We Stand For</span>
                </div>
                <h2 className="kitd-mv-page__values-title">Core Values</h2>
                <p className="kitd-mv-page__values-desc">
                  The principles that guide our work, interactions, and commitment to the community.
                </p>
              </div>

              <div className="kitd-mv-page__values-grid">
                {coreValues.map((value, index) => (
                  <div
                    className="kitd-mv-page__value-card"
                    key={index}
                    style={{ transitionDelay: `${index * 0.06}s` }}
                  >
                    <div className="kitd-mv-page__value-icon">{value.icon}</div>
                    <div className="kitd-mv-page__value-content">
                      <h3 className="kitd-mv-page__value-title">{value.title}</h3>
                      <p className="kitd-mv-page__value-desc">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* QUOTE & CTA - Combined Section */}
        {/* ============================================ */}
        <section className="kitd-mv-page__cta" data-section="cta">
          <div className="kitd-mv-page__cta-bg">
            <img 
              src={membercta}
              alt="KITD Community"
              loading="lazy"
            />
            <div className="kitd-mv-page__cta-overlay" />
          </div>
          
          <div className="kitd-mv-page__container">
            <div className={`kitd-mv-page__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
              <Quote size={36} strokeWidth={1} className="kitd-mv-page__cta-quote-icon" />
              <div className="kitd-mv-page__cta-quote-lines">
                <p className="kitd-mv-page__cta-quote-line">Together we preserve</p>
                <p className="kitd-mv-page__cta-quote-line">Together we inspire</p>
                <p className="kitd-mv-page__cta-quote-line kitd-mv-page__cta-quote-line--accent">Together we grow</p>
              </div>
              <div className="kitd-mv-page__cta-divider" />
              <p className="kitd-mv-page__cta-attribution">— The KITD Community</p>
              
              <div className="kitd-mv-page__cta-actions">
                <Link to="/membership" className="kitd-mv-page__cta-btn kitd-mv-page__cta-btn--primary">
                  <span>Become a Member</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
                <Link to="/about" className="kitd-mv-page__cta-btn kitd-mv-page__cta-btn--secondary">
                  <span>Learn About KITD</span>
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