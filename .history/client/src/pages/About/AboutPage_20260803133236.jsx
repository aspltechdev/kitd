// // // src/pages/About/AboutPage.jsx

// // import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   ArrowRight,
// //   Users,
// //   MapPin,
// //   Calendar,
// //   Award,
// //   Building2,
// //   Music,
// //   BookOpen,
// //   Globe,
// //   Heart,
// //   Target,
// //   Eye,
// //   Sparkles,
// //   ChevronRight,
// // } from "lucide-react";
// // import { Helmet } from "react-helmet-async";

// // import "./AboutPage.css";

// // // Timeline data
// // const timelineEvents = [
// //   {
// //     year: "November 2020",
// //     title: "Initial Discussions",
// //     description:
// //       "The vision for KITD began with conversations among passionate artists and cultural enthusiasts committed to creating a unified platform for Indian Classical Dance in Germany.",
// //   },
// //   {
// //     year: "December 2020",
// //     title: "Satzung Discussion",
// //     description:
// //       "Founding members collaborated on drafting the association's constitution (Satzung), defining its purpose, structure, and commitment to preserving Indian Classical Dance.",
// //   },
// //   {
// //     year: "November 2022",
// //     title: "Board Elected",
// //     description:
// //       "The first executive board was elected, marking a significant milestone in formalizing the association's leadership and governance structure.",
// //   },
// //   {
// //     year: "March 2023",
// //     title: "Registration Process",
// //     description:
// //       "KITD initiated the official registration process, preparing all necessary documentation to become a legally recognized non-profit association in Germany.",
// //   },
// //   {
// //     year: "July 2023",
// //     title: "Official Registration",
// //     description:
// //       "KITD was officially registered as Klassischer Indischer Tanz Deutschland e.V., becoming a recognized non-profit association dedicated to Indian Classical Dance.",
// //   },
// //   {
// //     year: "2024 – Present",
// //     title: "Growing Community & Nationwide Collaboration",
// //     description:
// //       "KITD continues to expand its network across Germany, organizing performances, workshops, SPANDA sessions, and fostering collaboration among artists, teachers, and institutions.",
// //   },
// // ];

// // // What We Do cards
// // const activities = [
// //   {
// //     icon: <Music size={28} strokeWidth={1.5} />,
// //     title: "Performances",
// //     description:
// //       "Showcasing the richness and diversity of Indian Classical Dance through public performances, festivals, and cultural celebrations across Germany.",
// //   },
// //   {
// //     icon: <BookOpen size={28} strokeWidth={1.5} />,
// //     title: "Workshops",
// //     description:
// //       "Organising educational workshops, lecture demonstrations, and masterclasses led by experienced artists to encourage continuous learning and skill development.",
// //   },
// //   {
// //     icon: <Globe size={28} strokeWidth={1.5} />,
// //     title: "Cultural Exchange",
// //     description:
// //       "Promoting intercultural dialogue by introducing Indian Classical Dance traditions to wider audiences through collaborative initiatives and public engagement.",
// //   },
// //   {
// //     icon: <Heart size={28} strokeWidth={1.5} />,
// //     title: "Community Building",
// //     description:
// //       "Building meaningful connections between artists, institutions, and cultural organisations to strengthen the Indian Classical Dance community throughout Germany.",
// //   },
// // ];

// // // Statistics
// // const statistics = [
// //   {
// //     icon: <Building2 size={20} strokeWidth={1.5} />,
// //     value: "Registered",
// //     label: "Association (e.V.)",
// //   },
// //   {
// //     icon: <Users size={20} strokeWidth={1.5} />,
// //     value: "3",
// //     label: "Membership Types",
// //   },
// //   {
// //     icon: <MapPin size={20} strokeWidth={1.5} />,
// //     value: "Germany",
// //     label: "Nationwide Network",
// //   },
// //   {
// //     icon: <Award size={20} strokeWidth={1.5} />,
// //     value: "Growing",
// //     label: "Community",
// //   },
// // ];

// // const AboutPage = () => {
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
// //       { threshold: 0.15 }
// //     );

// //     document.querySelectorAll("[data-section]").forEach((section) => {
// //       observer.observe(section);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <>
// //       <Helmet>
// //         <title>About KITD | Classical Indian Dance Germany</title>
// //         <meta
// //           name="description"
// //           content="Learn about Klassischer Indischer Tanz Deutschland (KITD) e.V. - a registered association dedicated to preserving, promoting and fostering Indian Classical Dance across Germany."
// //         />
// //       </Helmet>

// //       <div className="about-page">
// //         {/* ============================================ */}
// //         {/* HERO SECTION */}
// //         {/* ============================================ */}
// //         <section className="about-hero">
// //           <div className="about-hero-bg" />
// //           <div className="about-hero-container">
// //             <div className="about-hero-content">
// //               <div className="about-hero-eyebrow">
// //                 <span className="about-hero-eyebrow-line" />
// //                 <span className="about-hero-eyebrow-text">About KITD</span>
// //               </div>
// //               <h1 className="about-hero-title">
// //                 Building Germany's
// //                 <br />
// //                 <span className="about-hero-title-accent">
// //                   Indian Classical Dance Community
// //                 </span>
// //               </h1>
// //               <p className="about-hero-description">
// //                 Klassischer Indischer Tanz Deutschland (KITD) is a registered 
// //                 non-profit association dedicated to preserving, promoting and 
// //                 fostering Indian Classical Dance in Germany. By bringing together 
// //                 artists, teachers, institutions and cultural enthusiasts, KITD 
// //                 creates opportunities for collaboration, education, cultural 
// //                 exchange and community engagement.
// //               </p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* WHO WE ARE */}
// //         {/* ============================================ */}
// //         <section className="about-who" data-section="who">
// //           <div className="about-container">
// //             <div className={`about-who-grid ${isVisible.who ? "visible" : ""}`}>
// //               {/* Left - Image */}
// //               <div className="about-who-visual">
// //                 <div className="about-who-image-wrapper">
// //                   <img
// //                     src="https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=800"
// //                     alt="KITD Community"
// //                     className="about-who-image"
// //                   />
// //                   <div className="about-who-accent" />
// //                 </div>
// //               </div>

// //               {/* Right - Content */}
// //               <div className="about-who-content">
// //                 <div className="about-who-eyebrow">
// //                   <span className="about-who-eyebrow-line" />
// //                   <span className="about-who-eyebrow-text">Who We Are</span>
// //                 </div>
// //                 <h2 className="about-who-title">
// //                   A Collective for
// //                   <span className="about-who-title-accent"> Indian Classical Dance</span>
// //                 </h2>
// //                 <p className="about-who-text">
// //                   KITD e.V. is a registered association that serves as a collective 
// //                   for mediating, broadcasting, and continued fostering of Indian 
// //                   Classical Dance and respective knowledge in Germany. We are not a 
// //                   dance academy, but a collaborative platform that connects artists, 
// //                   teachers, institutions, researchers, and cultural enthusiasts.
// //                 </p>
// //                 <div className="about-who-features">
// //                   <div className="about-who-feature">
// //                     <Target size={16} strokeWidth={1.5} />
// //                     <span>Registered Association</span>
// //                   </div>
// //                   <div className="about-who-feature">
// //                     <Users size={16} strokeWidth={1.5} />
// //                     <span>National Network</span>
// //                   </div>
// //                   <div className="about-who-feature">
// //                     <Heart size={16} strokeWidth={1.5} />
// //                     <span>Community Driven</span>
// //                   </div>
// //                   <div className="about-who-feature">
// //                     <Award size={16} strokeWidth={1.5} />
// //                     <span>Cultural Excellence</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* OUR JOURNEY - TIMELINE */}
// //         {/* ============================================ */}
// //         <section className="about-journey" data-section="journey">
// //           <div className="about-container">
// //             <div className="about-journey-header">
// //               <div className="about-journey-eyebrow">
// //                 <span className="about-journey-eyebrow-line" />
// //                 <span className="about-journey-eyebrow-text">Our Journey</span>
// //               </div>
// //               <h2 className="about-journey-title">
// //                 From Vision to
// //                 <span className="about-journey-title-accent"> Nationwide Community</span>
// //               </h2>
// //             </div>

// //             <div className={`about-timeline ${isVisible.journey ? "visible" : ""}`}>
// //               {timelineEvents.map((event, index) => (
// //                 <div
// //                   className="about-timeline-item"
// //                   key={index}
// //                   style={{ transitionDelay: `${index * 0.1}s` }}
// //                 >
// //                   <div className="about-timeline-marker">
// //                     <div className="about-timeline-dot" />
// //                     {index < timelineEvents.length - 1 && (
// //                       <div className="about-timeline-line" />
// //                     )}
// //                   </div>
// //                   <div className="about-timeline-content">
// //                     <span className="about-timeline-year">{event.year}</span>
// //                     <h3 className="about-timeline-title">{event.title}</h3>
// //                     <p className="about-timeline-description">
// //                       {event.description}
// //                     </p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* WHAT WE DO */}
// //         {/* ============================================ */}
// //         <section className="about-activities" data-section="activities">
// //           <div className="about-container">
// //             <div className="about-activities-header">
// //               <div className="about-activities-eyebrow">
// //                 <span className="about-activities-eyebrow-line" />
// //                 <span className="about-activities-eyebrow-text">What We Do</span>
// //               </div>
// //               <h2 className="about-activities-title">
// //                 Preserving, Promoting &
// //                 <span className="about-activities-title-accent"> Celebrating</span>
// //                 <br />
// //                 Indian Classical Dance
// //               </h2>
// //             </div>

// //             <div className={`about-activities-grid ${isVisible.activities ? "visible" : ""}`}>
// //               {activities.map((item, index) => (
// //                 <div
// //                   className="about-activity-card"
// //                   key={index}
// //                   style={{ transitionDelay: `${index * 0.1}s` }}
// //                 >
// //                   <div className="about-activity-card-icon">{item.icon}</div>
// //                   <h3 className="about-activity-card-title">{item.title}</h3>
// //                   <p className="about-activity-card-description">
// //                     {item.description}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* STATISTICS */}
// //         {/* ============================================ */}
// //         <section className="about-stats-section" data-section="stats">
// //           <div className="about-container">
// //             <div className={`about-stats-grid ${isVisible.stats ? "visible" : ""}`}>
// //               {statistics.map((stat, index) => (
// //                 <div
// //                   className="about-stat-card"
// //                   key={index}
// //                   style={{ transitionDelay: `${index * 0.1}s` }}
// //                 >
// //                   <div className="about-stat-icon">{stat.icon}</div>
// //                   <span className="about-stat-value">{stat.value}</span>
// //                   <span className="about-stat-label">{stat.label}</span>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* CTA */}
// //         {/* ============================================ */}
// //         <section className="about-cta-section" data-section="cta">
// //           <div className="about-container">
// //             <div className={`about-cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
// //               <h2 className="about-cta-title">
// //                 Ready to Join Our Community?
// //               </h2>
// //               <p className="about-cta-text">
// //                 Become a member of KITD and connect with artists, teachers, and 
// //                 cultural enthusiasts across Germany.
// //               </p>
// //               <Link to="/membership" className="about-cta-btn">
// //                 <span>Become a Member</span>
// //                 <ArrowRight size={18} strokeWidth={1.5} />
// //               </Link>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </>
// //   );
// // };

// // export default AboutPage;



// // src/pages/About/AboutPage.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Users,
//   MapPin,
//   Calendar,
//   Award,
//   Building2,
//   Music,
//   BookOpen,
//   Globe,
//   Heart,
//   Target,
//   Eye,
//   Sparkles,
//   ChevronRight,
//   Play,
//   Clock,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// import "./AboutPage.css";

// // Timeline data
// const timelineEvents = [
//   {
//     year: "November 2020",
//     title: "Initial Discussions",
//     description:
//       "The vision for KITD began with conversations among passionate artists and cultural enthusiasts committed to creating a unified platform for Indian Classical Dance in Germany.",
//   },
//   {
//     year: "December 2020",
//     title: "Satzung Discussion",
//     description:
//       "Founding members collaborated on drafting the association's constitution (Satzung), defining its purpose, structure, and commitment to preserving Indian Classical Dance.",
//   },
//   {
//     year: "November 2022",
//     title: "Board Elected",
//     description:
//       "The first executive board was elected, marking a significant milestone in formalizing the association's leadership and governance structure.",
//   },
//   {
//     year: "March 2023",
//     title: "Registration Process",
//     description:
//       "KITD initiated the official registration process, preparing all necessary documentation to become a legally recognized non-profit association in Germany.",
//   },
//   {
//     year: "July 2023",
//     title: "Official Registration",
//     description:
//       "KITD was officially registered as Klassischer Indischer Tanz Deutschland e.V., becoming a recognized non-profit association dedicated to Indian Classical Dance.",
//   },
//   {
//     year: "2024 – Present",
//     title: "Growing Community & Nationwide Collaboration",
//     description:
//       "KITD continues to expand its network across Germany, organizing performances, workshops, SPANDA sessions, and fostering collaboration among artists, teachers, and institutions.",
//   },
// ];

// // What We Do cards with images
// const activities = [
//   {
//     icon: <Music size={28} strokeWidth={1.5} />,
//     title: "Performances",
//     description:
//       "Showcasing the richness and diversity of Indian Classical Dance through public performances, festivals, and cultural celebrations across Germany.",
//     image: "https://images.pexels.com/photos/28236020/pexels-photo-28236020.jpeg",
//     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.29) 0%, rgba(60, 10, 30, 0.37) 100%)",
//   },
//   {
//     icon: <BookOpen size={28} strokeWidth={1.5} />,
//     title: "Workshops",
//     description:
//       "Organising educational workshops, lecture demonstrations, and masterclasses led by experienced artists to encourage continuous learning and skill development.",
//     image: "https://images.pexels.com/photos/34717625/pexels-photo-34717625.jpeg",
// gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.29) 0%, rgba(60, 10, 30, 0.37) 100%)",
//   },
//   {
//     icon: <Globe size={28} strokeWidth={1.5} />,
//     title: "Cultural Exchange",
//     description:
//       "Promoting intercultural dialogue by introducing Indian Classical Dance traditions to wider audiences through collaborative initiatives and public engagement.",
//     image: "https://images.pexels.com/photos/18240707/pexels-photo-18240707.jpeg",
//     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.29) 0%, rgba(60, 10, 30, 0.37) 100%)",
//   },
//   {
//     icon: <Heart size={28} strokeWidth={1.5} />,
//     title: "Community Building",
//     description:
//       "Building meaningful connections between artists, institutions, and cultural organisations to strengthen the Indian Classical Dance community throughout Germany.",
//     image: "https://images.pexels.com/photos/5262079/pexels-photo-5262079.jpeg",
//     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.29) 0%, rgba(60, 10, 30, 0.37) 100%)",
//   },
// ];

// // Statistics
// const statistics = [
//   {
//     icon: <Building2 size={20} strokeWidth={1.5} />,
//     value: "Registered",
//     label: "Association (e.V.)",
//   },
//   {
//     icon: <Users size={20} strokeWidth={1.5} />,
//     value: "3",
//     label: "Membership Types",
//   },
//   {
//     icon: <MapPin size={20} strokeWidth={1.5} />,
//     value: "Germany",
//     label: "Nationwide Network",
//   },
//   {
//     icon: <Award size={20} strokeWidth={1.5} />,
//     value: "Growing",
//     label: "Community",
//   },
// ];

// const AboutPage = () => {
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
//       { threshold: 0.15 }
//     );

//     document.querySelectorAll("[data-section]").forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>About KITD | Classical Indian Dance Germany</title>
//         <meta
//           name="description"
//           content="Learn about Klassischer Indischer Tanz Deutschland (KITD) e.V. - a registered association dedicated to preserving, promoting and fostering Indian Classical Dance across Germany."
//         />
//       </Helmet>

//       <div className="kitd-about">

//         {/* ============================================ */}
//         {/* HERO SECTION - CINEMATIC */}
//         {/* ============================================ */}
//         <section className="kitd-about__hero">
//           <div className="kitd-about__hero-bg">
//             <img 
//               src="https://images.pexels.com/photos/28236020/pexels-photo-28236020.jpeg"
//               alt="Indian Classical Dance Performance"
//               loading="eager"
//             />
//             <div className="kitd-about__hero-overlay" />
//             <div className="kitd-about__hero-gradient" />
//           </div>
          
//           <div className="kitd-about__hero-container">
//             <div className="kitd-about__hero-content">
//               <div className="kitd-about__hero-eyebrow">
//                 <span className="kitd-about__hero-eyebrow-line" />
//                 <span className="kitd-about__hero-eyebrow-text">About KITD</span>
//               </div>
//               <h1 className="kitd-about__hero-title">
//                 Building Germany's
//                 <br />
//                 <span className="kitd-about__hero-title-accent">
//                   Indian Classical Dance Community
//                 </span>
//               </h1>
//               <p className="kitd-about__hero-description">
//                 Klassischer Indischer Tanz Deutschland (KITD) is a registered 
//                 non-profit association dedicated to preserving, promoting and 
//                 fostering Indian Classical Dance in Germany. By bringing together 
//                 artists, teachers, institutions and cultural enthusiasts, KITD 
//                 creates opportunities for collaboration, education, cultural 
//                 exchange and community engagement.
//               </p>
//               <div className="kitd-about__hero-actions">
//                 <Link to="/membership" className="kitd-about__hero-btn">
//                   <span>Join the Community</span>
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </Link>
//                 <Link to="/activities" className="kitd-about__hero-btn-secondary">
//                   <span>Explore Activities</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* WHO WE ARE */}
//         {/* ============================================ */}
//         <section className="kitd-about__who" data-section="who">
//           <div className="kitd-about__container">
//             <div className={`kitd-about__who-grid ${isVisible.who ? "visible" : ""}`}>
//               {/* Left - Image */}
//               <div className="kitd-about__who-visual">
//                 <div className="kitd-about__who-image-wrapper">
//                   <img
//                     src="https://images.pexels.com/photos/14469571/pexels-photo-14469571.jpeg"
//                     alt="KITD Community"
//                     className="kitd-about__who-image"
//                     loading="lazy"
//                   />
//                   <div className="kitd-about__who-accent" />
//                   <div className="kitd-about__who-badge">
//                     <Heart size={16} strokeWidth={1.5} />
//                     <span>Community Driven</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Right - Content */}
//               <div className="kitd-about__who-content">
//                 <div className="kitd-about__who-eyebrow">
//                   <span className="kitd-about__who-eyebrow-line" />
//                   <span className="kitd-about__who-eyebrow-text">Who We Are</span>
//                 </div>
//                 <h2 className="kitd-about__who-title">
//                   A Collective for
//                   <span className="kitd-about__who-title-accent"> Indian Classical Dance</span>
//                 </h2>
//                 <p className="kitd-about__who-text">
//                   KITD e.V. is a registered association that serves as a collective 
//                   for mediating, broadcasting, and continued fostering of Indian 
//                   Classical Dance and respective knowledge in Germany. We are not a 
//                   dance academy, but a collaborative platform that connects artists, 
//                   teachers, institutions, researchers, and cultural enthusiasts.
//                 </p>
//                 <div className="kitd-about__who-features">
//                   <div className="kitd-about__who-feature">
//                     <Target size={16} strokeWidth={1.5} />
//                     <span>Registered Association</span>
//                   </div>
//                   <div className="kitd-about__who-feature">
//                     <Users size={16} strokeWidth={1.5} />
//                     <span>National Network</span>
//                   </div>
//                   <div className="kitd-about__who-feature">
//                     <Heart size={16} strokeWidth={1.5} />
//                     <span>Community Driven</span>
//                   </div>
//                   <div className="kitd-about__who-feature">
//                     <Award size={16} strokeWidth={1.5} />
//                     <span>Cultural Excellence</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* OUR JOURNEY - TIMELINE */}
//         {/* ============================================ */}
//         <section className="kitd-about__journey" data-section="journey">
//           <div className="kitd-about__container">
//             <div className="kitd-about__journey-header">
//               <div className="kitd-about__journey-eyebrow">
//                 <span className="kitd-about__journey-eyebrow-line" />
//                 <span className="kitd-about__journey-eyebrow-text">Our Journey</span>
//               </div>
//               <h2 className="kitd-about__journey-title">
//                 From Vision to
//                 <span className="kitd-about__journey-title-accent"> Nationwide Community</span>
//               </h2>
//             </div>

//             <div className={`kitd-about__timeline ${isVisible.journey ? "visible" : ""}`}>
//               {timelineEvents.map((event, index) => (
//                 <div
//                   className="kitd-about__timeline-item"
//                   key={index}
//                   style={{ transitionDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="kitd-about__timeline-marker">
//                     <div className="kitd-about__timeline-dot" />
//                     {index < timelineEvents.length - 1 && (
//                       <div className="kitd-about__timeline-line" />
//                     )}
//                   </div>
//                   <div className="kitd-about__timeline-content">
//                     <span className="kitd-about__timeline-year">{event.year}</span>
//                     <h3 className="kitd-about__timeline-title">{event.title}</h3>
//                     <p className="kitd-about__timeline-description">
//                       {event.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* WHAT WE DO - CARDS WITH IMAGES */}
//         {/* ============================================ */}
//         <section className="kitd-about__activities" data-section="activities">
//           <div className="kitd-about__container">
//             <div className="kitd-about__activities-header">
//               <div className="kitd-about__activities-eyebrow">
//                 <span className="kitd-about__activities-eyebrow-line" />
//                 <span className="kitd-about__activities-eyebrow-text">What We Do</span>
//               </div>
//               <h2 className="kitd-about__activities-title">
//                 Preserving, Promoting &
//                 <span className="kitd-about__activities-title-accent"> Celebrating</span>
//                 <br />
//                 Indian Classical Dance
//               </h2>
//             </div>

//             <div className={`kitd-about__activities-grid ${isVisible.activities ? "visible" : ""}`}>
//               {activities.map((item, index) => (
//                 <div
//                   className={`kitd-about__activity-card ${hoveredCard === index ? 'kitd-about__activity-card--hovered' : ''}`}
//                   key={index}
//                   style={{ transitionDelay: `${index * 0.1}s` }}
//                   onMouseEnter={() => setHoveredCard(index)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div 
//                     className="kitd-about__activity-card-bg"
//                     style={{ backgroundImage: `url(${item.image})` }}
//                   />
//                   <div 
//                     className="kitd-about__activity-card-overlay"
//                     style={{ background: item.gradient }}
//                   />
                  
//                   <div className="kitd-about__activity-card-content">
//                     <div className="kitd-about__activity-card-icon">
//                       {item.icon}
//                     </div>
//                     <h3 className="kitd-about__activity-card-title">{item.title}</h3>
//                     <p className="kitd-about__activity-card-desc">
//                       {item.description}
//                     </p>
//                     <span className="kitd-about__activity-card-link">
//                       <span>Learn More</span>
//                       <ArrowRight size={14} strokeWidth={1.5} />
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* STATISTICS */}
//         {/* ============================================ */}
//         <section className="kitd-about__stats" data-section="stats">
//           <div className="kitd-about__container">
//             <div className={`kitd-about__stats-grid ${isVisible.stats ? "visible" : ""}`}>
//               {statistics.map((stat, index) => (
//                 <div
//                   className="kitd-about__stat-card"
//                   key={index}
//                   style={{ transitionDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="kitd-about__stat-icon">{stat.icon}</div>
//                   <span className="kitd-about__stat-value">{stat.value}</span>
//                   <span className="kitd-about__stat-label">{stat.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* CTA */}
//         {/* ============================================ */}
//         <section className="kitd-about__cta" data-section="cta">
//           <div className="kitd-about__cta-bg">
//             <img 
//               src="https://images.pexels.com/photos/14602419/pexels-photo-14602419.jpeg"
//               alt="KITD Community"
//               loading="lazy"
//             />
//             <div className="kitd-about__cta-overlay" />
//           </div>
          
//           <div className="kitd-about__container">
//             <div className={`kitd-about__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
//               <h2 className="kitd-about__cta-title">
//                 Ready to Join Our Community?
//               </h2>
//               <p className="kitd-about__cta-text">
//                 Become a member of KITD and connect with artists, teachers, and 
//                 cultural enthusiasts across Germany.
//               </p>
//               <Link to="/membership" className="kitd-about__cta-btn">
//                 <span>Become a Member</span>
//                 <ArrowRight size={18} strokeWidth={1.5} />
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default AboutPage;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  MapPin,
  Calendar,
  Award,
  Building2,
  Music,
  BookOpen,
  Globe,
  Heart,
  Target,
  Eye,
  Sparkles,
  ChevronRight,
  Play,
  Clock,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import abt1 from "../../assets/abt1.png";
import abt2 from "../../assets/abt2.png";

import abt3 from "../../assets/abt3.png";
import abt4 from "../../assets/abt4.png";
import abt5 from "../../assets/abt5.png";
import abt6 from "../../assets/abt6.png";

import abt7 from "../../assets/abt11.png";
import abt8 from "../../assets/abt8.png";


import "./AboutPage.css";

// Timeline data
const timelineEvents = [
  {
    year: "November 2020",
    title: "Initial Discussions",
    description:
      "The vision for KITD began with conversations among passionate artists and cultural enthusiasts committed to creating a unified platform for Indian Classical Dance in Germany.",
  },
  {
    year: "December 2020",
    title: "Satzung Discussion",
    description:
      "Founding members collaborated on drafting the association's constitution (Satzung), defining its purpose, structure, and commitment to preserving Indian Classical Dance.",
  },
  {
    year: "November 2022",
    title: "Board Elected",
    description:
      "The first executive board was elected, marking a significant milestone in formalizing the association's leadership and governance structure.",
  },
  {
    year: "March 2023",
    title: "Registration Process",
    description:
      "KITD initiated the official registration process, preparing all necessary documentation to become a legally recognized non-profit association in Germany.",
  },
  {
    year: "July 2023",
    title: "Official Registration",
    description:
      "KITD was officially registered as Klassischer Indischer Tanz Deutschland e.V., becoming a recognized non-profit association dedicated to Indian Classical Dance.",
  },
  {
    year: "2024 – Present",
    title: "Growing Community & Nationwide Collaboration",
    description:
      "KITD continues to expand its network across Germany, organizing performances, workshops, SPANDA sessions, and fostering collaboration among artists, teachers, and institutions.",
  },
];

// What We Do cards with images - Updated with new colors
const activities = [
  {
    icon: <Music size={28} strokeWidth={1.5} />,
    title: "Performances",
    description:
      "Showcasing the richness and diversity of Indian Classical Dance through public performances, festivals, and cultural celebrations across Germany.",
    image: abt3,
  },
  {
    icon: <BookOpen size={28} strokeWidth={1.5} />,
    title: "Workshops",
    description:
      "Organising educational workshops, lecture demonstrations, and masterclasses led by experienced artists to encourage continuous learning and skill development.",
    image: abt4,
  },
  {
    icon: <Globe size={28} strokeWidth={1.5} />,
    title: "Cultural Exchange",
    description:
      "Promoting intercultural dialogue by introducing Indian Classical Dance traditions to wider audiences through collaborative initiatives and public engagement.",
    image: abt5,
  },
  {
    icon: <Heart size={28} strokeWidth={1.5} />,
    title: "Community Building",
    description:
      "Building meaningful connections between artists, institutions, and cultural organisations to strengthen the Indian Classical Dance community throughout Germany.",
    image: abt6,
  },
];

// Statistics
const statistics = [
  {
    icon: <Building2 size={20} strokeWidth={1.5} />,
    value: "Registered",
    label: "Association (e.V.)",
  },
  {
    icon: <Users size={20} strokeWidth={1.5} />,
    value: "3",
    label: "Membership Types",
  },
  {
    icon: <MapPin size={20} strokeWidth={1.5} />,
    value: "Germany",
    label: "Nationwide Network",
  },
  {
    icon: <Award size={20} strokeWidth={1.5} />,
    value: "Growing",
    label: "Community",
  },
];

const AboutPage = () => {
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
      { threshold: 0.15 }
    );

    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>About KITD | Classical Indian Dance Germany</title>
        <meta
          name="description"
          content="Learn about Klassischer Indischer Tanz Deutschland (KITD) e.V. - a registered association dedicated to preserving, promoting and fostering Indian Classical Dance across Germany."
        />
      </Helmet>

      <div className="kitd-about-page">

        {/* ============================================ */}
        {/* HERO SECTION - CINEMATIC */}
        {/* ============================================ */}
        <section className="kitd-about-page__hero">
          <div className="kitd-about-page__hero-bg">
            <img 
              src={abt7}
              alt="Indian Classical Dance Performance"
              loading="eager"
            />
            <div className="kitd-about-page__hero-overlay" />
            <div className="kitd-about-page__hero-gradient" />
          </div>
          
          <div className="kitd-about-page__hero-container">
            <div className="kitd-about-page__hero-content">
              <div className="kitd-about-page__hero-eyebrow">
                <span className="kitd-about-page__hero-eyebrow-line" />
                <span className="kitd-about-page__hero-eyebrow-text">About KITD</span>
              </div>
              <h1 className="kitd-about-page__hero-title">
                Building Germany's
                <br />
                <span className="kitd-about-page__hero-title-accent">
                  Indian Classical Dance Community
                </span>
              </h1>
              <p className="kitd-about-page__hero-description">
                Klassischer Indischer Tanz Deutschland (KITD) is a registered 
                non-profit association dedicated to preserving, promoting and 
                fostering Indian Classical Dance in Germany. By bringing together 
                artists, teachers, institutions and cultural enthusiasts, KITD 
                creates opportunities for collaboration, education, cultural 
                exchange and community engagement.
              </p>
              <div className="kitd-about-page__hero-actions">
                <Link to="/membership" className="kitd-about-page__hero-btn">
                  <span>Join the Community</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
                <Link to="/activities" className="kitd-about-page__hero-btn-secondary">
                  <span>Explore Activities</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* WHO WE ARE */}
        {/* ============================================ */}
        <section className="kitd-about-page__who" data-section="who">
          <div className="kitd-about-page__container">
            <div className={`kitd-about-page__who-grid ${isVisible.who ? "visible" : ""}`}>
              {/* Left - Image */}
              <div className="kitd-about-page__who-visual">
                <div className="kitd-about-page__who-image-wrapper">
                  <img
                    src={abt2}
                    alt="KITD Community"
                    className="kitd-about-page__who-image"
                    loading="lazy"
                  />
                  <div className="kitd-about-page__who-accent" />
                  <div className="kitd-about-page__who-badge">
                    <Heart size={16} strokeWidth={1.5} />
                    <span>Community Driven</span>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="kitd-about-page__who-content">
                <div className="kitd-about-page__who-eyebrow">
                  <span className="kitd-about-page__who-eyebrow-line" />
                  <span className="kitd-about-page__who-eyebrow-text">Who We Are</span>
                </div>
                <h2 className="kitd-about-page__who-title">
                  A Collective for
                  <span className="kitd-about-page__who-title-accent"> Indian Classical Dance</span>
                </h2>
                <p className="kitd-about-page__who-text">
                  KITD e.V. is a registered association that serves as a collective 
                  for mediating, broadcasting, and continued fostering of Indian 
                  Classical Dance and respective knowledge in Germany. We are not a 
                  dance academy, but a collaborative platform that connects artists, 
                  teachers, institutions, researchers, and cultural enthusiasts.
                </p>
                <div className="kitd-about-page__who-features">
                  <div className="kitd-about-page__who-feature">
                    <Target size={16} strokeWidth={1.5} />
                    <span>Registered Association</span>
                  </div>
                  <div className="kitd-about-page__who-feature">
                    <Users size={16} strokeWidth={1.5} />
                    <span>National Network</span>
                  </div>
                  <div className="kitd-about-page__who-feature">
                    <Heart size={16} strokeWidth={1.5} />
                    <span>Community Driven</span>
                  </div>
                  <div className="kitd-about-page__who-feature">
                    <Award size={16} strokeWidth={1.5} />
                    <span>Cultural Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* OUR JOURNEY - TIMELINE */}
        {/* ============================================ */}
        <section className="kitd-about-page__journey" data-section="journey">
          <div className="kitd-about-page__container">
            <div className="kitd-about-page__journey-header">
              <div className="kitd-about-page__journey-eyebrow">
                <span className="kitd-about-page__journey-eyebrow-line" />
                <span className="kitd-about-page__journey-eyebrow-text">Our Journey</span>
              </div>
              <h2 className="kitd-about-page__journey-title">
                From Vision to
                <span className="kitd-about-page__journey-title-accent"> Nationwide Community</span>
              </h2>
            </div>

            <div className={`kitd-about-page__timeline ${isVisible.journey ? "visible" : ""}`}>
              {timelineEvents.map((event, index) => (
                <div
                  className="kitd-about-page__timeline-item"
                  key={index}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="kitd-about-page__timeline-marker">
                    <div className="kitd-about-page__timeline-dot" />
                    {index < timelineEvents.length - 1 && (
                      <div className="kitd-about-page__timeline-line" />
                    )}
                  </div>
                  <div className="kitd-about-page__timeline-content">
                    <span className="kitd-about-page__timeline-year">{event.year}</span>
                    <h3 className="kitd-about-page__timeline-title">{event.title}</h3>
                    <p className="kitd-about-page__timeline-description">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* WHAT WE DO - CARDS WITH IMAGES */}
        {/* ============================================ */}
        <section className="kitd-about-page__activities" data-section="activities">
          <div className="kitd-about-page__container">
            <div className="kitd-about-page__activities-header">
              <div className="kitd-about-page__activities-eyebrow">
                <span className="kitd-about-page__activities-eyebrow-line" />
                <span className="kitd-about-page__activities-eyebrow-text">What We Do</span>
              </div>
              <h2 className="kitd-about-page__activities-title">
                Preserving, Promoting &
                <span className="kitd-about-page__activities-title-accent"> Celebrating</span>
                <br />
                Indian Classical Dance
              </h2>
            </div>

            <div className={`kitd-about-page__activities-grid ${isVisible.activities ? "visible" : ""}`}>
              {activities.map((item, index) => (
                <div
                  className={`kitd-about-page__activity-card ${hoveredCard === index ? 'kitd-about-page__activity-card--hovered' : ''}`}
                  key={index}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    className="kitd-about-page__activity-card-bg"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="kitd-about-page__activity-card-overlay" />
                  
                  <div className="kitd-about-page__activity-card-content">
                    <div className="kitd-about-page__activity-card-icon">
                      {item.icon}
                    </div>
                    <h3 className="kitd-about-page__activity-card-title">{item.title}</h3>
                    <p className="kitd-about-page__activity-card-desc">
                      {item.description}
                    </p>
                    <span className="kitd-about-page__activity-card-link">
                      <span>Learn More</span>
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* STATISTICS */}
        {/* ============================================ */}
        <section className="kitd-about-page__stats" data-section="stats">
          <div className="kitd-about-page__container">
            <div className={`kitd-about-page__stats-grid ${isVisible.stats ? "visible" : ""}`}>
              {statistics.map((stat, index) => (
                <div
                  className="kitd-about-page__stat-card"
                  key={index}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="kitd-about-page__stat-icon">{stat.icon}</div>
                  <span className="kitd-about-page__stat-value">{stat.value}</span>
                  <span className="kitd-about-page__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CTA */}
        {/* ============================================ */}
        <section className="kitd-about-page__cta" data-section="cta">
          <div className="kitd-about-page__cta-bg">
            <img 
              src={abt8}
              alt="KITD Community"
              loading="lazy"
            />
            <div className="kitd-about-page__cta-overlay" />
          </div>
          
          <div className="kitd-about-page__container">
            <div className={`kitd-about-page__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
              <h2 className="kitd-about-page__cta-title">
                Ready to Join Our Community?
              </h2>
              <p className="kitd-about-page__cta-text">
                Become a member of KITD and connect with artists, teachers, and 
                cultural enthusiasts across Germany.
              </p>
              <Link to="/membership" className="kitd-about-page__cta-btn">
                <span>Become a Member</span>
                <ArrowRight size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;