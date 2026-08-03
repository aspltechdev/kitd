// // // // // src/pages/Activities/ActivitiesPage.jsx

// // // // import { useState, useEffect } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import {
// // // //   ArrowRight,
// // // //   Music,
// // // //   BookOpen,
// // // //   Users,
// // // //   Globe,
// // // //   Heart,
// // // //   Award,
// // // //   Sparkles,
// // // //   ChevronRight,
// // // //   Calendar,
// // // //   MapPin,
// // // //   TrendingUp,
// // // // } from "lucide-react";
// // // // import { Helmet } from "react-helmet-async";

// // // // import "./ActivitiesPage.css";

// // // // // Activities cards
// // // // const activities = [
// // // //   {
// // // //     icon: <Music size={24} strokeWidth={1.5} />,
// // // //     title: "Performances",
// // // //     description:
// // // //       "Classical dance performances showcasing the richness and diversity of Indian dance traditions across Germany.",
// // // //     slug: "/events",
// // // //     color: "card-burgundy",
// // // //   },
// // // //   {
// // // //     icon: <BookOpen size={24} strokeWidth={1.5} />,
// // // //     title: "Workshops & Masterclasses",
// // // //     description:
// // // //       "Professional workshops and learning sessions led by experienced artists and educators.",
// // // //     slug: "/events",
// // // //     color: "card-gold",
// // // //   },
// // // //   {
// // // //     icon: <Sparkles size={24} strokeWidth={1.5} />,
// // // //     title: "SPANDA Programme",
// // // //     description:
// // // //       "Special movement and creative learning sessions designed to inspire artistic growth and collaboration.",
// // // //     slug: "/activities/spanda",
// // // //     color: "card-burgundy",
// // // //   },
// // // //   {
// // // //     icon: <Globe size={24} strokeWidth={1.5} />,
// // // //     title: "Cultural Exchange",
// // // //     description:
// // // //       "Collaborative initiatives that connect Indian Classical Dance with diverse cultural communities.",
// // // //     slug: "/activities",
// // // //     color: "card-gold",
// // // //   },
// // // //   {
// // // //     icon: <Users size={24} strokeWidth={1.5} />,
// // // //     title: "Community Engagement",
// // // //     description:
// // // //       "Activities that encourage participation, networking and meaningful connections among members.",
// // // //     slug: "/membership",
// // // //     color: "card-burgundy",
// // // //   },
// // // //   {
// // // //     icon: <Award size={24} strokeWidth={1.5} />,
// // // //     title: "Artist Development",
// // // //     description:
// // // //       "Providing opportunities for artists, teachers and young performers to showcase and strengthen their practice.",
// // // //     slug: "/artists",
// // // //     color: "card-gold",
// // // //   },
// // // // ];

// // // // // Annual activities timeline
// // // // const annualTimeline = [
// // // //   {
// // // //     month: "January",
// // // //     title: "Community Meet",
// // // //     description: "New Year gathering to connect members and plan the year ahead.",
// // // //   },
// // // //   {
// // // //     month: "March",
// // // //     title: "Spring Workshop",
// // // //     description: "Intensive training sessions with renowned artists and teachers.",
// // // //   },
// // // //   {
// // // //     month: "June",
// // // //     title: "Summer Performance",
// // // //     description: "Showcasing classical dance performances across multiple cities.",
// // // //   },
// // // //   {
// // // //     month: "September",
// // // //     title: "Cultural Festival",
// // // //     description: "Annual festival celebrating Indian Classical Dance and cultural exchange.",
// // // //   },
// // // //   {
// // // //     month: "November",
// // // //     title: "Annual Gathering",
// // // //     description: "Year-end celebration, general assembly, and community networking.",
// // // //   },
// // // // ];

// // // // // Community impact statistics
// // // // const impactStats = [
// // // //   {
// // // //     icon: <Music size={20} strokeWidth={1.5} />,
// // // //     value: "Performances",
// // // //     label: "Across Germany",
// // // //   },
// // // //   {
// // // //     icon: <BookOpen size={20} strokeWidth={1.5} />,
// // // //     value: "Workshops",
// // // //     label: "For All Levels",
// // // //   },
// // // //   {
// // // //     icon: <Users size={20} strokeWidth={1.5} />,
// // // //     value: "Collaborations",
// // // //     label: "With Institutions",
// // // //   },
// // // //   {
// // // //     icon: <Heart size={20} strokeWidth={1.5} />,
// // // //     value: "Community Events",
// // // //     label: "Nationwide",
// // // //   },
// // // // ];

// // // // // Gallery preview images
// // // // const galleryImages = [
// // // //   {
// // // //     id: 1,
// // // //     src: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // // //     alt: "Performance",
// // // //     category: "Performance",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     src: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // // //     alt: "Workshop",
// // // //     category: "Workshop",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     src: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // // //     alt: "Cultural Exchange",
// // // //     category: "Cultural Exchange",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     src: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
// // // //     alt: "Community Event",
// // // //     category: "Community",
// // // //   },
// // // // ];

// // // // const ActivitiesPage = () => {
// // // //   const [isVisible, setIsVisible] = useState({});

// // // //   useEffect(() => {
// // // //     window.scrollTo(0, 0);

// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => {
// // // //           if (entry.isIntersecting) {
// // // //             setIsVisible((prev) => ({
// // // //               ...prev,
// // // //               [entry.target.dataset.section]: true,
// // // //             }));
// // // //           }
// // // //         });
// // // //       },
// // // //       { threshold: 0.1 }
// // // //     );

// // // //     document.querySelectorAll("[data-section]").forEach((section) => {
// // // //       observer.observe(section);
// // // //     });

// // // //     return () => observer.disconnect();
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       <Helmet>
// // // //         <title>Activities | KITD - Classical Indian Dance Germany</title>
// // // //         <meta
// // // //           name="description"
// // // //           content="Discover KITD's activities including performances, workshops, SPANDA programme, cultural exchange, community engagement, and artist development across Germany."
// // // //         />
// // // //       </Helmet>

// // // //       <div className="activities-page">
// // // //         {/* ============================================ */}
// // // //         {/* HERO SECTION */}
// // // //         {/* ============================================ */}
// // // //         <section className="act-hero">
// // // //           <div className="act-hero-bg" />
// // // //           <div className="act-hero-container">
// // // //             <div className="act-hero-content">
// // // //               <div className="act-hero-eyebrow">
// // // //                 <span className="act-hero-eyebrow-line" />
// // // //                 <span className="act-hero-eyebrow-text">Our Activities</span>
// // // //               </div>
// // // //               <h1 className="act-hero-title">
// // // //                 Preserving, Promoting &
// // // //                 <br />
// // // //                 <span className="act-hero-title-accent">Celebrating</span> Indian Classical Dance
// // // //               </h1>
// // // //               <p className="act-hero-description">
// // // //                 KITD organizes a diverse range of programmes, performances, 
// // // //                 workshops, and collaborative initiatives that strengthen the 
// // // //                 Indian Classical Dance community while encouraging cultural 
// // // //                 exchange across Germany.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* BREADCRUMB */}
// // // //         {/* ============================================ */}
// // // //         <div className="act-breadcrumb">
// // // //           <div className="act-container">
// // // //             <Link to="/">Home</Link>
// // // //             <ChevronRight size={14} strokeWidth={1.5} />
// // // //             <span>Activities</span>
// // // //           </div>
// // // //         </div>

// // // //         {/* ============================================ */}
// // // //         {/* INTRODUCTION */}
// // // //         {/* ============================================ */}
// // // //         <section className="act-intro" data-section="intro">
// // // //           <div className="act-container">
// // // //             <div className={`act-intro-wrapper ${isVisible.intro ? "visible" : ""}`}>
// // // //               <div className="act-intro-eyebrow">
// // // //                 <span className="act-intro-eyebrow-line" />
// // // //                 <span className="act-intro-eyebrow-text">What We Do</span>
// // // //               </div>
// // // //               <h2 className="act-intro-title">
// // // //                 A Platform for
// // // //                 <span className="act-intro-title-accent"> Artists & Community</span>
// // // //               </h2>
// // // //               <p className="act-intro-description">
// // // //                 Through performances, educational initiatives, workshops, cultural 
// // // //                 collaborations, and community engagement, KITD provides a platform 
// // // //                 for artists, teachers, students, and institutions to connect, learn, 
// // // //                 and grow together.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* ACTIVITIES GRID */}
// // // //         {/* ============================================ */}
// // // //         <section className="act-grid-section" data-section="grid">
// // // //           <div className="act-container">
// // // //             <div className={`act-grid ${isVisible.grid ? "visible" : ""}`}>
// // // //               {activities.map((activity, index) => (
// // // //                 <Link
// // // //                   to={activity.slug}
// // // //                   className={`act-card ${activity.color}`}
// // // //                   key={index}
// // // //                   style={{ transitionDelay: `${index * 0.08}s` }}
// // // //                 >
// // // //                   <div className="act-card-icon">{activity.icon}</div>
// // // //                   <h3 className="act-card-title">{activity.title}</h3>
// // // //                   <p className="act-card-description">{activity.description}</p>
// // // //                   <span className="act-card-link">
// // // //                     <span>Learn More</span>
// // // //                     <ArrowRight size={14} strokeWidth={1.5} />
// // // //                   </span>
// // // //                 </Link>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* FEATURED PROGRAMME - SPANDA */}
// // // //         {/* ============================================ */}
// // // //         <section className="act-featured" data-section="featured">
// // // //           <div className="act-container">
// // // //             <div className={`act-featured-wrapper ${isVisible.featured ? "visible" : ""}`}>
// // // //               <div className="act-featured-content">
// // // //                 <div className="act-featured-tags">
// // // //                   <span className="act-featured-tag">Movement</span>
// // // //                   <span className="act-featured-tag-dot">•</span>
// // // //                   <span className="act-featured-tag">Learning</span>
// // // //                   <span className="act-featured-tag-dot">•</span>
// // // //                   <span className="act-featured-tag">Collaboration</span>
// // // //                 </div>
// // // //                 <h2 className="act-featured-title">SPANDA</h2>
// // // //                 <p className="act-featured-description">
// // // //                   SPANDA is one of KITD's unique initiatives that brings together 
// // // //                   artists and participants through movement exploration, workshops, 
// // // //                   and collaborative learning experiences. It embodies the spirit of 
// // // //                   expansion and creative growth.
// // // //                 </p>
// // // //                 <Link to="/activities/spanda" className="act-featured-btn">
// // // //                   <span>Learn More About SPANDA</span>
// // // //                   <ArrowRight size={18} strokeWidth={1.5} />
// // // //                 </Link>
// // // //               </div>
// // // //               <div className="act-featured-visual">
// // // //                 <div className="act-featured-image">
// // // //                   <img
// // // //                     src="https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=700"
// // // //                     alt="SPANDA Programme"
// // // //                   />
// // // //                 </div>
// // // //                 <div className="act-featured-accent" />
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* ANNUAL ACTIVITIES TIMELINE */}
// // // //         {/* ============================================ */}
// // // //         <section className="act-timeline-section" data-section="timeline">
// // // //           <div className="act-container">
// // // //             <div className="act-timeline-header">
// // // //               <div className="act-timeline-eyebrow">
// // // //                 <span className="act-timeline-eyebrow-line" />
// // // //                 <span className="act-timeline-eyebrow-text">Throughout the Year</span>
// // // //               </div>
// // // //               <h2 className="act-timeline-title">
// // // //                 Annual
// // // //                 <span className="act-timeline-title-accent"> Activities</span>
// // // //               </h2>
// // // //             </div>

// // // //             <div className={`act-timeline ${isVisible.timeline ? "visible" : ""}`}>
// // // //               {annualTimeline.map((item, index) => (
// // // //                 <div
// // // //                   className="act-timeline-item"
// // // //                   key={index}
// // // //                   style={{ transitionDelay: `${index * 0.1}s` }}
// // // //                 >
// // // //                   <div className="act-timeline-marker">
// // // //                     <div className="act-timeline-dot">
// // // //                       <Calendar size={14} strokeWidth={1.5} />
// // // //                     </div>
// // // //                     {index < annualTimeline.length - 1 && (
// // // //                       <div className="act-timeline-line" />
// // // //                     )}
// // // //                   </div>
// // // //                   <div className="act-timeline-content">
// // // //                     <span className="act-timeline-month">{item.month}</span>
// // // //                     <h3 className="act-timeline-item-title">{item.title}</h3>
// // // //                     <p className="act-timeline-item-description">
// // // //                       {item.description}
// // // //                     </p>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* COMMUNITY IMPACT */}
// // // //         {/* ============================================ */}
// // // //         <section className="act-impact" data-section="impact">
// // // //           <div className="act-impact-bg" />
// // // //           <div className="act-container">
// // // //             <div className={`act-impact-wrapper ${isVisible.impact ? "visible" : ""}`}>
// // // //               <div className="act-impact-header">
// // // //                 <h2 className="act-impact-title">Community Impact</h2>
// // // //                 <p className="act-impact-subtitle">
// // // //                   Our activities reach artists and audiences across Germany
// // // //                 </p>
// // // //               </div>
// // // //               <div className="act-impact-grid">
// // // //                 {impactStats.map((stat, index) => (
// // // //                   <div
// // // //                     className="act-impact-card"
// // // //                     key={index}
// // // //                     style={{ transitionDelay: `${index * 0.1}s` }}
// // // //                   >
// // // //                     <div className="act-impact-icon">{stat.icon}</div>
// // // //                     <span className="act-impact-value">{stat.value}</span>
// // // //                     <span className="act-impact-label">{stat.label}</span>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* GALLERY PREVIEW */}
// // // //         {/* ============================================ */}
// // // //         <section className="act-gallery" data-section="gallery">
// // // //           <div className="act-container">
// // // //             <div className={`act-gallery-wrapper ${isVisible.gallery ? "visible" : ""}`}>
// // // //               <div className="act-gallery-header">
// // // //                 <div className="act-gallery-eyebrow">
// // // //                   <span className="act-gallery-eyebrow-line" />
// // // //                   <span className="act-gallery-eyebrow-text">Moments</span>
// // // //                 </div>
// // // //                 <h2 className="act-gallery-title">Activity Highlights</h2>
// // // //               </div>
// // // //               <div className="act-gallery-grid">
// // // //                 {galleryImages.map((image, index) => (
// // // //                   <div
// // // //                     className="act-gallery-card"
// // // //                     key={image.id}
// // // //                     style={{ transitionDelay: `${index * 0.1}s` }}
// // // //                   >
// // // //                     <img src={image.src} alt={image.alt} loading="lazy" />
// // // //                     <div className="act-gallery-overlay">
// // // //                       <span className="act-gallery-category">{image.category}</span>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //               <div className="act-gallery-footer">
// // // //                 <Link to="/gallery" className="act-gallery-btn">
// // // //                   <span>View Gallery</span>
// // // //                   <ArrowRight size={16} strokeWidth={1.5} />
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* CTA SECTION */}
// // // //         {/* ============================================ */}
// // // //         <section className="act-cta" data-section="cta">
// // // //           <div className="act-container">
// // // //             <div className={`act-cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
// // // //               <h2 className="act-cta-title">Be Part of Our Activities</h2>
// // // //               <p className="act-cta-text">
// // // //                 Whether you are an artist, teacher, student, or supporter, there 
// // // //                 are many ways to contribute to and participate in KITD's programmes.
// // // //               </p>
// // // //               <div className="act-cta-buttons">
// // // //                 <Link to="/membership" className="act-cta-btn act-cta-btn-primary">
// // // //                   <span>Become a Member</span>
// // // //                   <ArrowRight size={18} strokeWidth={1.5} />
// // // //                 </Link>
// // // //                 <Link to="/events" className="act-cta-btn act-cta-btn-secondary">
// // // //                   <span>Upcoming Events</span>
// // // //                   <ArrowRight size={18} strokeWidth={1.5} />
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default ActivitiesPage;


// // // // src/pages/Activities/ActivitiesPage.jsx

// // // import { useState, useEffect } from "react";
// // // import { Link } from "react-router-dom";
// // // import {
// // //   ArrowRight,
// // //   Music,
// // //   BookOpen,
// // //   Users,
// // //   Globe,
// // //   Heart,
// // //   Award,
// // //   Sparkles,
// // //   ChevronRight,
// // //   Calendar,
// // //   MapPin,
// // //   TrendingUp,
// // //   Star,
// // //   Clock,
// // // } from "lucide-react";
// // // import { Helmet } from "react-helmet-async";

// // // import "./ActivitiesPage.css";

// // // // Activities cards with images
// // // const activities = [
// // //   {
// // //     icon: <Music size={24} strokeWidth={1.5} />,
// // //     title: "Performances",
// // //     description:
// // //       "Classical dance performances showcasing the richness and diversity of Indian dance traditions across Germany.",
// // //     slug: "/events",
// // //     image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// // //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// // //   },
// // //   {
// // //     icon: <BookOpen size={24} strokeWidth={1.5} />,
// // //     title: "Workshops & Masterclasses",
// // //     description:
// // //       "Professional workshops and learning sessions led by experienced artists and educators.",
// // //     slug: "/events",
// // //     image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// // //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// // //   },
// // //   {
// // //     icon: <Sparkles size={24} strokeWidth={1.5} />,
// // //     title: "SPANDA Programme",
// // //     description:
// // //       "Special movement and creative learning sessions designed to inspire artistic growth and collaboration.",
// // //     slug: "/activities/spanda",
// // //     image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// // //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// // //   },
// // //   {
// // //     icon: <Globe size={24} strokeWidth={1.5} />,
// // //     title: "Cultural Exchange",
// // //     description:
// // //       "Collaborative initiatives that connect Indian Classical Dance with diverse cultural communities.",
// // //     slug: "/activities",
// // //     image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// // //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// // //   },
// // //   {
// // //     icon: <Users size={24} strokeWidth={1.5} />,
// // //     title: "Community Engagement",
// // //     description:
// // //       "Activities that encourage participation, networking and meaningful connections among members.",
// // //     slug: "/membership",
// // //     image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// // //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// // //   },
// // //   {
// // //     icon: <Award size={24} strokeWidth={1.5} />,
// // //     title: "Artist Development",
// // //     description:
// // //       "Providing opportunities for artists, teachers and young performers to showcase and strengthen their practice.",
// // //     slug: "/artists",
// // //     image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// // //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// // //   },
// // // ];

// // // // Annual activities timeline
// // // const annualTimeline = [
// // //   {
// // //     month: "January",
// // //     title: "Community Meet",
// // //     description: "New Year gathering to connect members and plan the year ahead.",
// // //   },
// // //   {
// // //     month: "March",
// // //     title: "Spring Workshop",
// // //     description: "Intensive training sessions with renowned artists and teachers.",
// // //   },
// // //   {
// // //     month: "June",
// // //     title: "Summer Performance",
// // //     description: "Showcasing classical dance performances across multiple cities.",
// // //   },
// // //   {
// // //     month: "September",
// // //     title: "Cultural Festival",
// // //     description: "Annual festival celebrating Indian Classical Dance and cultural exchange.",
// // //   },
// // //   {
// // //     month: "November",
// // //     title: "Annual Gathering",
// // //     description: "Year-end celebration, general assembly, and community networking.",
// // //   },
// // // ];

// // // // Gallery preview images
// // // const galleryImages = [
// // //   {
// // //     id: 1,
// // //     src: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
// // //     alt: "Performance",
// // //     category: "Performance",
// // //   },
// // //   {
// // //     id: 2,
// // //     src: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
// // //     alt: "Workshop",
// // //     category: "Workshop",
// // //   },
// // //   {
// // //     id: 3,
// // //     src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
// // //     alt: "Cultural Exchange",
// // //     category: "Cultural Exchange",
// // //   },
// // //   {
// // //     id: 4,
// // //     src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
// // //     alt: "Community Event",
// // //     category: "Community",
// // //   },
// // // ];

// // // const ActivitiesPage = () => {
// // //   const [isVisible, setIsVisible] = useState({});
// // //   const [hoveredCard, setHoveredCard] = useState(null);

// // //   useEffect(() => {
// // //     window.scrollTo(0, 0);

// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             setIsVisible((prev) => ({
// // //               ...prev,
// // //               [entry.target.dataset.section]: true,
// // //             }));
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     document.querySelectorAll("[data-section]").forEach((section) => {
// // //       observer.observe(section);
// // //     });

// // //     return () => observer.disconnect();
// // //   }, []);

// // //   return (
// // //     <>
// // //       <Helmet>
// // //         <title>Activities | KITD - Classical Indian Dance Germany</title>
// // //         <meta
// // //           name="description"
// // //           content="Discover KITD's activities including performances, workshops, SPANDA programme, cultural exchange, community engagement, and artist development across Germany."
// // //         />
// // //       </Helmet>

// // //       <div className="kitd-activities-page">

// // //         {/* ============================================ */}
// // //         {/* HERO SECTION */}
// // //         {/* ============================================ */}
// // //         <section className="kitd-activities-page__hero">
// // //           <div className="kitd-activities-page__hero-bg">
// // //             <img 
// // //               src="https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
// // //               alt="KITD Activities"
// // //               loading="eager"
// // //             />
// // //             <div className="kitd-activities-page__hero-overlay" />
// // //             <div className="kitd-activities-page__hero-gradient" />
// // //           </div>
          
// // //           <div className="kitd-activities-page__hero-container">
// // //             <div className="kitd-activities-page__hero-content">
// // //               <div className="kitd-activities-page__hero-eyebrow">
// // //                 <span className="kitd-activities-page__hero-eyebrow-line" />
// // //                 <span className="kitd-activities-page__hero-eyebrow-text">Our Activities</span>
// // //               </div>
// // //               <h1 className="kitd-activities-page__hero-title">
// // //                 Preserving, Promoting &amp;
// // //                 <br />
// // //                 <span className="kitd-activities-page__hero-title-accent">Celebrating</span> Indian Classical Dance
// // //               </h1>
// // //               <p className="kitd-activities-page__hero-description">
// // //                 KITD organizes a diverse range of programmes, performances, 
// // //                 workshops, and collaborative initiatives that strengthen the 
// // //                 Indian Classical Dance community while encouraging cultural 
// // //                 exchange across Germany.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ============================================ */}
// // //         {/* BREADCRUMB */}
// // //         {/* ============================================ */}
// // //         <div className="kitd-activities-page__breadcrumb">
// // //           <div className="kitd-activities-page__container">
// // //             <Link to="/">Home</Link>
// // //             <ChevronRight size={14} strokeWidth={1.5} />
// // //             <span>Activities</span>
// // //           </div>
// // //         </div>

// // //         {/* ============================================ */}
// // //         {/* ACTIVITIES GRID - CARDS WITH IMAGES */}
// // //         {/* ============================================ */}
// // //         <section className="kitd-activities-page__grid" data-section="grid">
// // //           <div className="kitd-activities-page__container">
// // //             <div className="kitd-activities-page__grid-header">
// // //               <div className="kitd-activities-page__grid-eyebrow">
// // //                 <span className="kitd-activities-page__grid-eyebrow-line" />
// // //                 <span className="kitd-activities-page__grid-eyebrow-text">What We Do</span>
// // //               </div>
// // //               <h2 className="kitd-activities-page__grid-title">
// // //                 A Platform for
// // //                 <span className="kitd-activities-page__grid-title-accent"> Artists &amp; Community</span>
// // //               </h2>
// // //             </div>

// // //             <div className={`kitd-activities-page__grid-list ${isVisible.grid ? "visible" : ""}`}>
// // //               {activities.map((activity, index) => (
// // //                 <div
// // //                   className={`kitd-activities-page__card ${hoveredCard === index ? 'kitd-activities-page__card--hovered' : ''}`}
// // //                   key={index}
// // //                   style={{ transitionDelay: `${index * 0.08}s` }}
// // //                   onMouseEnter={() => setHoveredCard(index)}
// // //                   onMouseLeave={() => setHoveredCard(null)}
// // //                 >
// // //                   <Link to={activity.slug} className="kitd-activities-page__card-link">
// // //                     <div 
// // //                       className="kitd-activities-page__card-bg"
// // //                       style={{ backgroundImage: `url(${activity.image})` }}
// // //                     />
// // //                     <div 
// // //                       className="kitd-activities-page__card-overlay"
// // //                       style={{ background: activity.gradient }}
// // //                     />
                    
// // //                     <div className="kitd-activities-page__card-content">
// // //                       <div className="kitd-activities-page__card-icon">{activity.icon}</div>
// // //                       <h3 className="kitd-activities-page__card-title">{activity.title}</h3>
// // //                       <p className="kitd-activities-page__card-desc">{activity.description}</p>
// // //                       <span className="kitd-activities-page__card-link">
// // //                         <span>Learn More</span>
// // //                         <ArrowRight size={14} strokeWidth={1.5} />
// // //                       </span>
// // //                     </div>
// // //                   </Link>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ============================================ */}
// // //         {/* FEATURED PROGRAMME - SPANDA */}
// // //         {/* ============================================ */}
// // //         <section className="kitd-activities-page__featured" data-section="featured">
// // //           <div className="kitd-activities-page__container">
// // //             <div className={`kitd-activities-page__featured-wrapper ${isVisible.featured ? "visible" : ""}`}>
// // //               <div className="kitd-activities-page__featured-content">
// // //                 <div className="kitd-activities-page__featured-badge">
// // //                   <Sparkles size={16} strokeWidth={1.5} />
// // //                   <span>Featured Programme</span>
// // //                 </div>
// // //                 <h2 className="kitd-activities-page__featured-title">SPANDA</h2>
// // //                 <p className="kitd-activities-page__featured-desc">
// // //                   SPANDA is one of KITD's unique initiatives that brings together 
// // //                   artists and participants through movement exploration, workshops, 
// // //                   and collaborative learning experiences. It embodies the spirit of 
// // //                   expansion and creative growth.
// // //                 </p>
// // //                 <Link to="/activities/spanda" className="kitd-activities-page__featured-btn">
// // //                   <span>Learn More About SPANDA</span>
// // //                   <ArrowRight size={18} strokeWidth={1.5} />
// // //                 </Link>
// // //               </div>
// // //               <div className="kitd-activities-page__featured-visual">
// // //                 <div className="kitd-activities-page__featured-image">
// // //                   <img
// // //                     src="https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
// // //                     alt="SPANDA Programme"
// // //                     loading="lazy"
// // //                   />
// // //                   <div className="kitd-activities-page__featured-accent" />
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ============================================ */}
// // //         {/* ANNUAL ACTIVITIES TIMELINE */}
// // //         {/* ============================================ */}
// // //         <section className="kitd-activities-page__timeline" data-section="timeline">
// // //           <div className="kitd-activities-page__container">
// // //             <div className="kitd-activities-page__timeline-header">
// // //               <div className="kitd-activities-page__timeline-eyebrow">
// // //                 <span className="kitd-activities-page__timeline-eyebrow-line" />
// // //                 <span className="kitd-activities-page__timeline-eyebrow-text">Throughout the Year</span>
// // //               </div>
// // //               <h2 className="kitd-activities-page__timeline-title">
// // //                 Annual
// // //                 <span className="kitd-activities-page__timeline-title-accent"> Activities</span>
// // //               </h2>
// // //             </div>

// // //             <div className={`kitd-activities-page__timeline-list ${isVisible.timeline ? "visible" : ""}`}>
// // //               {annualTimeline.map((item, index) => (
// // //                 <div
// // //                   className="kitd-activities-page__timeline-item"
// // //                   key={index}
// // //                   style={{ transitionDelay: `${index * 0.1}s` }}
// // //                 >
// // //                   <div className="kitd-activities-page__timeline-marker">
// // //                     <div className="kitd-activities-page__timeline-dot">
// // //                       <Calendar size={14} strokeWidth={1.5} />
// // //                     </div>
// // //                     {index < annualTimeline.length - 1 && (
// // //                       <div className="kitd-activities-page__timeline-line" />
// // //                     )}
// // //                   </div>
// // //                   <div className="kitd-activities-page__timeline-content">
// // //                     <span className="kitd-activities-page__timeline-month">{item.month}</span>
// // //                     <h3 className="kitd-activities-page__timeline-title-item">{item.title}</h3>
// // //                     <p className="kitd-activities-page__timeline-desc">{item.description}</p>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ============================================ */}
// // //         {/* GALLERY PREVIEW */}
// // //         {/* ============================================ */}
// // //         <section className="kitd-activities-page__gallery" data-section="gallery">
// // //           <div className="kitd-activities-page__container">
// // //             <div className={`kitd-activities-page__gallery-wrapper ${isVisible.gallery ? "visible" : ""}`}>
// // //               <div className="kitd-activities-page__gallery-header">
// // //                 <div className="kitd-activities-page__gallery-eyebrow">
// // //                   <span className="kitd-activities-page__gallery-eyebrow-line" />
// // //                   <span className="kitd-activities-page__gallery-eyebrow-text">Moments</span>
// // //                 </div>
// // //                 <h2 className="kitd-activities-page__gallery-title">Activity Highlights</h2>
// // //               </div>
// // //               <div className="kitd-activities-page__gallery-grid">
// // //                 {galleryImages.map((image, index) => (
// // //                   <div
// // //                     className="kitd-activities-page__gallery-card"
// // //                     key={image.id}
// // //                     style={{ transitionDelay: `${index * 0.1}s` }}
// // //                   >
// // //                     <img src={image.src} alt={image.alt} loading="lazy" />
// // //                     <div className="kitd-activities-page__gallery-overlay">
// // //                       <span className="kitd-activities-page__gallery-category">{image.category}</span>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <div className="kitd-activities-page__gallery-footer">
// // //                 <Link to="/gallery" className="kitd-activities-page__gallery-btn">
// // //                   <span>View Full Gallery</span>
// // //                   <ArrowRight size={16} strokeWidth={1.5} />
// // //                 </Link>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ============================================ */}
// // //         {/* CTA SECTION */}
// // //         {/* ============================================ */}
// // //         <section className="kitd-activities-page__cta" data-section="cta">
// // //           <div className="kitd-activities-page__cta-bg">
// // //             <img 
// // //               src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
// // //               alt="KITD Community"
// // //               loading="lazy"
// // //             />
// // //             <div className="kitd-activities-page__cta-overlay" />
// // //           </div>
          
// // //           <div className="kitd-activities-page__container">
// // //             <div className={`kitd-activities-page__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
// // //               <h2 className="kitd-activities-page__cta-title">Be Part of Our Activities</h2>
// // //               <p className="kitd-activities-page__cta-text">
// // //                 Whether you are an artist, teacher, student, or supporter, there 
// // //                 are many ways to contribute to and participate in KITD's programmes.
// // //               </p>
// // //               <div className="kitd-activities-page__cta-buttons">
// // //                 <Link to="/membership" className="kitd-activities-page__cta-btn kitd-activities-page__cta-btn--primary">
// // //                   <span>Become a Member</span>
// // //                   <ArrowRight size={18} strokeWidth={1.5} />
// // //                 </Link>
// // //                 <Link to="/events" className="kitd-activities-page__cta-btn kitd-activities-page__cta-btn--secondary">
// // //                   <span>Upcoming Events</span>
// // //                   <ArrowRight size={18} strokeWidth={1.5} />
// // //                 </Link>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default ActivitiesPage;


// // // src/pages/Activities/ActivitiesPage.jsx

// // import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   ArrowRight,
// //   Music,
// //   BookOpen,
// //   Users,
// //   Globe,
// //   Award,
// //   Sparkles,
// //   ChevronRight,
// //   Calendar,
// // } from "lucide-react";
// // import { Helmet } from "react-helmet-async";

// // import { getAllActivities } from "../../api/activity.api";

// // import "./ActivitiesPage.css";

// // // Fallback activities if API fails
// // const FALLBACK_ACTIVITIES = [
// //   {
// //     id: 1,
// //     title: "Performances",
// //     description: "Classical dance performances showcasing the richness and diversity of Indian dance traditions across Germany.",
// //     slug: "/events",
// //     image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //   },
// //   {
// //     id: 2,
// //     title: "Workshops & Masterclasses",
// //     description: "Professional workshops and learning sessions led by experienced artists and educators.",
// //     slug: "/events",
// //     image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //   },
// //   {
// //     id: 3,
// //     title: "SPANDA Programme",
// //     description: "Special movement and creative learning sessions designed to inspire artistic growth and collaboration.",
// //     slug: "/activities/spanda",
// //     image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //   },
// // ];

// // const iconList = [<Music size={24} />, <BookOpen size={24} />, <Sparkles size={24} />, <Globe size={24} />, <Users size={24} />, <Award size={24} />];

// // const cardGradients = [
// //   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(60,10,30,0.92) 100%)",
// //   "linear-gradient(135deg, rgba(139,30,63,0.80) 0%, rgba(50,15,25,0.88) 100%)",
// //   "linear-gradient(135deg, rgba(139,30,63,0.75) 0%, rgba(70,20,40,0.85) 100%)",
// //   "linear-gradient(135deg, rgba(139,30,63,0.82) 0%, rgba(40,10,20,0.90) 100%)",
// //   "linear-gradient(135deg, rgba(139,30,63,0.78) 0%, rgba(60,10,30,0.87) 100%)",
// //   "linear-gradient(135deg, rgba(139,30,63,0.83) 0%, rgba(50,15,25,0.91) 100%)",
// // ];

// // const annualTimeline = [
// //   { month: "January", title: "Community Meet", description: "New Year gathering to connect members and plan the year ahead." },
// //   { month: "March", title: "Spring Workshop", description: "Intensive training sessions with renowned artists and teachers." },
// //   { month: "June", title: "Summer Performance", description: "Showcasing classical dance performances across multiple cities." },
// //   { month: "September", title: "Cultural Festival", description: "Annual festival celebrating Indian Classical Dance and cultural exchange." },
// //   { month: "November", title: "Annual Gathering", description: "Year-end celebration, general assembly, and community networking." },
// // ];

// // const galleryImages = [
// //   { id: 1, src: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Performance", category: "Performance" },
// //   { id: 2, src: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Workshop", category: "Workshop" },
// //   { id: 3, src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Cultural Exchange", category: "Cultural Exchange" },
// //   { id: 4, src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Community Event", category: "Community" },
// // ];

// // const ActivitiesPage = () => {
// //   const [activities, setActivities] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [isVisible, setIsVisible] = useState({});
// //   const [hoveredCard, setHoveredCard] = useState(null);

// //   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
// //   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

// //   // ✅ Fetch activities from API
// //   useEffect(() => {
// //     const fetchActivities = async () => {
// //       try {
// //         setLoading(true);
// //         const res = await getAllActivities({ isActive: true });
// //         const data = res.data?.data || res.data || [];
        
// //         const activeActivities = Array.isArray(data) 
// //           ? data.filter(a => a.isActive).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
// //           : [];

// //         if (activeActivities.length > 0) {
// //           setActivities(activeActivities);
// //         } else {
// //           setActivities(FALLBACK_ACTIVITIES);
// //         }
// //       } catch (err) {
// //         console.error("Failed to fetch activities:", err);
// //         setActivities(FALLBACK_ACTIVITIES);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchActivities();
// //   }, []);

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setIsVisible((prev) => ({ ...prev, [entry.target.dataset.section]: true }));
// //           }
// //         });
// //       },
// //       { threshold: 0.1 }
// //     );
// //     document.querySelectorAll("[data-section]").forEach((section) => observer.observe(section));
// //     return () => observer.disconnect();
// //   }, [loading]);

// //   // ✅ Get image URL from API or fallback
// //   const getImageUrl = (activity, index) => {
// //     if (activity.image) {
// //       return `${IMAGE_BASE_URL}/uploads/activities/${activity.image}`;
// //     }
// //     // Fallback images
// //     const fallbacks = [
// //       "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //       "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
// //     ];
// //     return fallbacks[index % fallbacks.length];
// //   };

// //   // ✅ Get icon for activity
// //   const getIcon = (index) => {
// //     return iconList[index % iconList.length];
// //   };

// //   return (
// //     <>
// //       <Helmet>
// //         <title>Activities | KITD - Classical Indian Dance Germany</title>
// //         <meta name="description" content="Discover KITD's activities including performances, workshops, SPANDA programme, cultural exchange, and more across Germany." />
// //       </Helmet>

// //       <div className="kitd-activities-page">

// //         {/* HERO */}
// //         <section className="kitd-activities-page__hero">
// //           <div className="kitd-activities-page__hero-bg">
// //             <img src="https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="KITD Activities" loading="eager" />
// //             <div className="kitd-activities-page__hero-overlay" />
// //             <div className="kitd-activities-page__hero-gradient" />
// //           </div>
// //           <div className="kitd-activities-page__hero-container">
// //             <div className="kitd-activities-page__hero-content">
// //               <div className="kitd-activities-page__hero-eyebrow">
// //                 <span className="kitd-activities-page__hero-eyebrow-line" />
// //                 <span className="kitd-activities-page__hero-eyebrow-text">Our Activities</span>
// //               </div>
// //               <h1 className="kitd-activities-page__hero-title">
// //                 Preserving, Promoting &amp;<br />
// //                 <span className="kitd-activities-page__hero-title-accent">Celebrating</span> Indian Classical Dance
// //               </h1>
// //               <p className="kitd-activities-page__hero-description">
// //                 KITD organizes a diverse range of programmes, performances, workshops, and collaborative initiatives across Germany.
// //               </p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* BREADCRUMB */}
// //         <div className="kitd-activities-page__breadcrumb">
// //           <div className="kitd-activities-page__container">
// //             <Link to="/">Home</Link>
// //             <ChevronRight size={14} strokeWidth={1.5} />
// //             <span>Activities</span>
// //           </div>
// //         </div>

// //         {/* LOADING */}
// //         {loading && (
// //           <section className="kitd-activities-page__grid">
// //             <div className="kitd-activities-page__container" style={{ textAlign: 'center', padding: '60px' }}>
// //               <div className="spinner" style={{ width: 40, height: 40, border: '3px solid #e5e7eb', borderTopColor: '#8B1E3F', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 16px' }} />
// //               <p style={{ color: '#6b7280' }}>Loading activities...</p>
// //             </div>
// //           </section>
// //         )}

// //         {/* ACTIVITIES GRID */}
// //         {!loading && activities.length > 0 && (
// //           <section className="kitd-activities-page__grid" data-section="grid">
// //             <div className="kitd-activities-page__container">
// //               <div className="kitd-activities-page__grid-header">
// //                 <div className="kitd-activities-page__grid-eyebrow">
// //                   <span className="kitd-activities-page__grid-eyebrow-line" />
// //                   <span className="kitd-activities-page__grid-eyebrow-text">What We Do</span>
// //                 </div>
// //                 <h2 className="kitd-activities-page__grid-title">
// //                   A Platform for<span className="kitd-activities-page__grid-title-accent"> Artists &amp; Community</span>
// //                 </h2>
// //               </div>
// //               <div className={`kitd-activities-page__grid-list ${isVisible.grid ? "visible" : ""}`}>
// //                 {activities.map((activity, index) => (
// //                   <div
// //                     className={`kitd-activities-page__card ${hoveredCard === index ? 'kitd-activities-page__card--hovered' : ''}`}
// //                     key={activity.id || index}
// //                     style={{ transitionDelay: `${index * 0.08}s` }}
// //                     onMouseEnter={() => setHoveredCard(index)}
// //                     onMouseLeave={() => setHoveredCard(null)}
// //                   >
// //                     <Link to={activity.slug || `/activities/${activity.id}`} className="kitd-activities-page__card-link">
// //                       <div className="kitd-activities-page__card-bg" style={{ backgroundImage: `url(${getImageUrl(activity, index)})` }} />
// //                       <div className="kitd-activities-page__card-overlay" style={{ background: cardGradients[index % cardGradients.length] }} />
// //                       <div className="kitd-activities-page__card-content">
// //                         <div className="kitd-activities-page__card-icon">{getIcon(index)}</div>
// //                         <h3 className="kitd-activities-page__card-title">{activity.title}</h3>
// //                         <p className="kitd-activities-page__card-desc">{activity.shortDescription || activity.description}</p>
// //                         {activity.location && (
// //                           <span className="kitd-activities-page__card-location">📍 {activity.location}</span>
// //                         )}
// //                         <span className="kitd-activities-page__card-link-text">
// //                           <span>Learn More</span>
// //                           <ArrowRight size={14} strokeWidth={1.5} />
// //                         </span>
// //                       </div>
// //                     </Link>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </section>
// //         )}

// //         {/* FEATURED - SPANDA */}
// //         <section className="kitd-activities-page__featured" data-section="featured">
// //           <div className="kitd-activities-page__container">
// //             <div className={`kitd-activities-page__featured-wrapper ${isVisible.featured ? "visible" : ""}`}>
// //               <div className="kitd-activities-page__featured-content">
// //                 <div className="kitd-activities-page__featured-badge">
// //                   <Sparkles size={16} /><span>Featured Programme</span>
// //                 </div>
// //                 <h2 className="kitd-activities-page__featured-title">SPANDA</h2>
// //                 <p className="kitd-activities-page__featured-desc">SPANDA is one of KITD's unique initiatives that brings together artists and participants through movement exploration, workshops, and collaborative learning experiences.</p>
// //                 <Link to="/activities/spanda" className="kitd-activities-page__featured-btn">
// //                   <span>Learn More About SPANDA</span><ArrowRight size={18} />
// //                 </Link>
// //               </div>
// //               <div className="kitd-activities-page__featured-visual">
// //                 <div className="kitd-activities-page__featured-image">
// //                   <img src="https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700" alt="SPANDA" loading="lazy" />
// //                   <div className="kitd-activities-page__featured-accent" />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* TIMELINE */}
// //         <section className="kitd-activities-page__timeline" data-section="timeline">
// //           <div className="kitd-activities-page__container">
// //             <div className="kitd-activities-page__timeline-header">
// //               <div className="kitd-activities-page__timeline-eyebrow"><span className="kitd-activities-page__timeline-eyebrow-line" /><span>Throughout the Year</span></div>
// //               <h2 className="kitd-activities-page__timeline-title">Annual<span className="kitd-activities-page__timeline-title-accent"> Activities</span></h2>
// //             </div>
// //             <div className={`kitd-activities-page__timeline-list ${isVisible.timeline ? "visible" : ""}`}>
// //               {annualTimeline.map((item, index) => (
// //                 <div className="kitd-activities-page__timeline-item" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
// //                   <div className="kitd-activities-page__timeline-marker">
// //                     <div className="kitd-activities-page__timeline-dot"><Calendar size={14} /></div>
// //                     {index < annualTimeline.length - 1 && <div className="kitd-activities-page__timeline-line" />}
// //                   </div>
// //                   <div className="kitd-activities-page__timeline-content">
// //                     <span className="kitd-activities-page__timeline-month">{item.month}</span>
// //                     <h3>{item.title}</h3>
// //                     <p>{item.description}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* GALLERY */}
// //         <section className="kitd-activities-page__gallery" data-section="gallery">
// //           <div className="kitd-activities-page__container">
// //             <div className={`kitd-activities-page__gallery-wrapper ${isVisible.gallery ? "visible" : ""}`}>
// //               <div className="kitd-activities-page__gallery-header">
// //                 <div className="kitd-activities-page__gallery-eyebrow"><span className="kitd-activities-page__gallery-eyebrow-line" /><span>Moments</span></div>
// //                 <h2>Activity Highlights</h2>
// //               </div>
// //               <div className="kitd-activities-page__gallery-grid">
// //                 {galleryImages.map((image, index) => (
// //                   <div className="kitd-activities-page__gallery-card" key={image.id} style={{ transitionDelay: `${index * 0.1}s` }}>
// //                     <img src={image.src} alt={image.alt} loading="lazy" />
// //                     <div className="kitd-activities-page__gallery-overlay"><span>{image.category}</span></div>
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="kitd-activities-page__gallery-footer">
// //                 <Link to="/gallery" className="kitd-activities-page__gallery-btn"><span>View Full Gallery</span><ArrowRight size={16} /></Link>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* CTA */}
// //         <section className="kitd-activities-page__cta" data-section="cta">
// //           <div className="kitd-activities-page__cta-bg">
// //             <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="KITD Community" loading="lazy" />
// //             <div className="kitd-activities-page__cta-overlay" />
// //           </div>
// //           <div className="kitd-activities-page__container">
// //             <div className={`kitd-activities-page__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
// //               <h2>Be Part of Our Activities</h2>
// //               <p>Whether you are an artist, teacher, student, or supporter, there are many ways to participate in KITD's programmes.</p>
// //               <div className="kitd-activities-page__cta-buttons">
// //                 <Link to="/membership" className="kitd-activities-page__cta-btn kitd-activities-page__cta-btn--primary"><span>Become a Member</span><ArrowRight size={18} /></Link>
// //                 <Link to="/events" className="kitd-activities-page__cta-btn kitd-activities-page__cta-btn--secondary"><span>Upcoming Events</span><ArrowRight size={18} /></Link>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </>
// //   );
// // };

// // export default ActivitiesPage;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Music,
//   BookOpen,
//   Users,
//   Globe,
//   Award,
//   Sparkles,
//   ChevronRight,
//   Calendar,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// import { getAllActivities } from "../../api/activity.api";

// import "./ActivitiesPage.css";

// // Fallback activities if API fails
// const FALLBACK_ACTIVITIES = [
//   {
//     id: 1,
//     title: "Performances",
//     description: "Classical dance performances showcasing the richness and diversity of Indian dance traditions across Germany.",
//     slug: "/events",
//     image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     title: "Workshops & Masterclasses",
//     description: "Professional workshops and learning sessions led by experienced artists and educators.",
//     slug: "/events",
//     image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "SPANDA Programme",
//     description: "Special movement and creative learning sessions designed to inspire artistic growth and collaboration.",
//     slug: "/activities/spanda",
//     image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const iconList = [<Music size={24} />, <BookOpen size={24} />, <Sparkles size={24} />, <Globe size={24} />, <Users size={24} />, <Award size={24} />];

// const cardGradients = [
//   "linear-gradient(135deg, rgba(26,2,54,0.85) 0%, rgba(26,2,54,0.92) 100%)",
//   "linear-gradient(135deg, rgba(26,2,54,0.80) 0%, rgba(26,2,54,0.88) 100%)",
//   "linear-gradient(135deg, rgba(26,2,54,0.75) 0%, rgba(26,2,54,0.85) 100%)",
//   "linear-gradient(135deg, rgba(26,2,54,0.82) 0%, rgba(26,2,54,0.90) 100%)",
//   "linear-gradient(135deg, rgba(26,2,54,0.78) 0%, rgba(26,2,54,0.87) 100%)",
//   "linear-gradient(135deg, rgba(26,2,54,0.83) 0%, rgba(26,2,54,0.91) 100%)",
// ];

// const annualTimeline = [
//   { month: "January", title: "Community Meet", description: "New Year gathering to connect members and plan the year ahead." },
//   { month: "March", title: "Spring Workshop", description: "Intensive training sessions with renowned artists and teachers." },
//   { month: "June", title: "Summer Performance", description: "Showcasing classical dance performances across multiple cities." },
//   { month: "September", title: "Cultural Festival", description: "Annual festival celebrating Indian Classical Dance and cultural exchange." },
//   { month: "November", title: "Annual Gathering", description: "Year-end celebration, general assembly, and community networking." },
// ];

// const galleryImages = [
//   { id: 1, src: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Performance", category: "Performance" },
//   { id: 2, src: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Workshop", category: "Workshop" },
//   { id: 3, src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Cultural Exchange", category: "Cultural Exchange" },
//   { id: 4, src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400", alt: "Community Event", category: "Community" },
// ];

// const ActivitiesPage = () => {
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isVisible, setIsVisible] = useState({});
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   useEffect(() => {
//     const fetchActivities = async () => {
//       try {
//         setLoading(true);
//         const res = await getAllActivities({ isActive: true });
//         const data = res.data?.data || res.data || [];
        
//         const activeActivities = Array.isArray(data) 
//           ? data.filter(a => a.isActive).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0))
//           : [];

//         if (activeActivities.length > 0) {
//           setActivities(activeActivities);
//         } else {
//           setActivities(FALLBACK_ACTIVITIES);
//         }
//       } catch (err) {
//         console.error("Failed to fetch activities:", err);
//         setActivities(FALLBACK_ACTIVITIES);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchActivities();
//   }, []);

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
//     document.querySelectorAll("[data-section]").forEach((section) => observer.observe(section));
//     return () => observer.disconnect();
//   }, [loading]);

//   const getImageUrl = (activity, index) => {
//     if (activity.image) {
//       return `${IMAGE_BASE_URL}/uploads/activities/${activity.image}`;
//     }
//     const fallbacks = [
//       "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     ];
//     return fallbacks[index % fallbacks.length];
//   };

//   const getIcon = (index) => {
//     return iconList[index % iconList.length];
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Activities | KITD - Classical Indian Dance Germany</title>
//         <meta name="description" content="Discover KITD's activities including performances, workshops, SPANDA programme, cultural exchange, and more across Germany." />
//       </Helmet>

//       <div className="ap-activities">

//         {/* HERO */}
//         <section className="ap-activities__hero">
//           <div className="ap-activities__hero-bg">
//             <img src="https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="KITD Activities" loading="eager" />
//             <div className="ap-activities__hero-overlay" />
//             <div className="ap-activities__hero-gradient" />
//           </div>
//           <div className="ap-activities__hero-container">
//             <div className="ap-activities__hero-content">
//               <div className="ap-activities__hero-eyebrow">
//                 <span className="ap-activities__hero-eyebrow-line" />
//                 <span className="ap-activities__hero-eyebrow-text">Our Activities</span>
//               </div>
//               <h1 className="ap-activities__hero-title">
//                 Preserving, Promoting &amp;<br />
//                 <span className="ap-activities__hero-title-accent">Celebrating</span> Indian Classical Dance
//               </h1>
//               <p className="ap-activities__hero-description">
//                 KITD organizes a diverse range of programmes, performances, workshops, and collaborative initiatives across Germany.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* BREADCRUMB */}
//         <div className="ap-activities__breadcrumb">
//           <div className="ap-activities__container">
//             <Link to="/">Home</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <span>Activities</span>
//           </div>
//         </div>

//         {/* LOADING */}
//         {loading && (
//           <section className="ap-activities__grid">
//             <div className="ap-activities__container" style={{ textAlign: 'center', padding: '60px' }}>
//               <div className="ap-activities__spinner" />
//               <p style={{ color: '#6b7280', marginTop: '16px' }}>Loading activities...</p>
//             </div>
//           </section>
//         )}

//         {/* ACTIVITIES GRID */}
//         {!loading && activities.length > 0 && (
//           <section className="ap-activities__grid" data-section="grid">
//             <div className="ap-activities__container">
//               <div className="ap-activities__grid-header">
//                 <div className="ap-activities__grid-eyebrow">
//                   <span className="ap-activities__grid-eyebrow-line" />
//                   <span className="ap-activities__grid-eyebrow-text">What We Do</span>
//                 </div>
//                 <h2 className="ap-activities__grid-title">
//                   A Platform for<span className="ap-activities__grid-title-accent"> Artists &amp; Community</span>
//                 </h2>
//               </div>
//               <div className={`ap-activities__grid-list ${isVisible.grid ? "visible" : ""}`}>
//                 {activities.map((activity, index) => (
//                   <div
//                     className={`ap-activities__card ${hoveredCard === index ? 'ap-activities__card--hovered' : ''}`}
//                     key={activity.id || index}
//                     style={{ transitionDelay: `${index * 0.08}s` }}
//                     onMouseEnter={() => setHoveredCard(index)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <Link to={activity.slug || `/activities/${activity.id}`} className="ap-activities__card-link">
//                       <div className="ap-activities__card-bg" style={{ backgroundImage: `url(${getImageUrl(activity, index)})` }} />
//                       <div className="ap-activities__card-overlay" style={{ background: cardGradients[index % cardGradients.length] }} />
//                       <div className="ap-activities__card-content">
//                         <div className="ap-activities__card-icon">{getIcon(index)}</div>
//                         <h3 className="ap-activities__card-title">{activity.title}</h3>
//                         <p className="ap-activities__card-desc">{activity.shortDescription || activity.description}</p>
//                         {activity.location && (
//                           <span className="ap-activities__card-location">📍 {activity.location}</span>
//                         )}
//                         <span className="ap-activities__card-link-text">
//                           <span>Learn More</span>
//                           <ArrowRight size={14} strokeWidth={1.5} />
//                         </span>
//                       </div>
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}

//         {/* FEATURED - SPANDA */}
//         <section className="ap-activities__featured" data-section="featured">
//           <div className="ap-activities__container">
//             <div className={`ap-activities__featured-wrapper ${isVisible.featured ? "visible" : ""}`}>
//               <div className="ap-activities__featured-content">
//                 <div className="ap-activities__featured-badge">
//                   <Sparkles size={16} /><span>Featured Programme</span>
//                 </div>
//                 <h2 className="ap-activities__featured-title">SPANDA</h2>
//                 <p className="ap-activities__featured-desc">SPANDA is one of KITD's unique initiatives that brings together artists and participants through movement exploration, workshops, and collaborative learning experiences.</p>
//                 <Link to="/activities/spanda" className="ap-activities__featured-btn">
//                   <span>Learn More About SPANDA</span><ArrowRight size={18} />
//                 </Link>
//               </div>
//               <div className="ap-activities__featured-visual">
//                 <div className="ap-activities__featured-image">
//                   <img src="https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700" alt="SPANDA" loading="lazy" />
//                   <div className="ap-activities__featured-accent" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* TIMELINE */}
//         <section className="ap-activities__timeline" data-section="timeline">
//           <div className="ap-activities__container">
//             <div className="ap-activities__timeline-header">
//               <div className="ap-activities__timeline-eyebrow">
//                 <span className="ap-activities__timeline-eyebrow-line" />
//                 <span>Throughout the Year</span>
//               </div>
//               <h2 className="ap-activities__timeline-title">Annual<span className="ap-activities__timeline-title-accent"> Activities</span></h2>
//             </div>
//             <div className={`ap-activities__timeline-list ${isVisible.timeline ? "visible" : ""}`}>
//               {annualTimeline.map((item, index) => (
//                 <div className="ap-activities__timeline-item" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
//                   <div className="ap-activities__timeline-marker">
//                     <div className="ap-activities__timeline-dot"><Calendar size={14} /></div>
//                     {index < annualTimeline.length - 1 && <div className="ap-activities__timeline-line" />}
//                   </div>
//                   <div className="ap-activities__timeline-content">
//                     <span className="ap-activities__timeline-month">{item.month}</span>
//                     <h3>{item.title}</h3>
//                     <p>{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* GALLERY */}
//         <section className="ap-activities__gallery" data-section="gallery">
//           <div className="ap-activities__container">
//             <div className={`ap-activities__gallery-wrapper ${isVisible.gallery ? "visible" : ""}`}>
//               <div className="ap-activities__gallery-header">
//                 <div className="ap-activities__gallery-eyebrow">
//                   <span className="ap-activities__gallery-eyebrow-line" />
//                   <span>Moments</span>
//                 </div>
//                 <h2>Activity Highlights</h2>
//               </div>
//               <div className="ap-activities__gallery-grid">
//                 {galleryImages.map((image, index) => (
//                   <div className="ap-activities__gallery-card" key={image.id} style={{ transitionDelay: `${index * 0.1}s` }}>
//                     <img src={image.src} alt={image.alt} loading="lazy" />
//                     <div className="ap-activities__gallery-overlay"><span>{image.category}</span></div>
//                   </div>
//                 ))}
//               </div>
//               <div className="ap-activities__gallery-footer">
//                 <Link to="/gallery" className="ap-activities__gallery-btn">
//                   <span>View Full Gallery</span><ArrowRight size={16} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="ap-activities__cta" data-section="cta">
//           <div className="ap-activities__cta-bg">
//             <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="KITD Community" loading="lazy" />
//             <div className="ap-activities__cta-overlay" />
//           </div>
//           <div className="ap-activities__container">
//             <div className={`ap-activities__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
//               <h2>Be Part of Our Activities</h2>
//               <p>Whether you are an artist, teacher, student, or supporter, there are many ways to participate in KITD's programmes.</p>
//               <div className="ap-activities__cta-buttons">
//                 <Link to="/membership" className="ap-activities__cta-btn ap-activities__cta-btn--primary">
//                   <span>Become a Member</span><ArrowRight size={18} />
//                 </Link>
//                 <Link to="/events" className="ap-activities__cta-btn ap-activities__cta-btn--secondary">
//                   <span>Upcoming Events</span><ArrowRight size={18} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ActivitiesPage;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import acthero from "../../assets/acthero.png";
import actspanda from "../../assets/actspanda.png";
import act1 from "../../assets/act1.png";
import act2 from "../../assets/act2.png";
import abt1  from "../../assets/abt1.png";
import abt2 from "../../assets/abt2.png";
import abt3 from "../../assets/abt3.png";
import abt4 from "../../assets/abt4.png";
import contactcta from "../../assets/contactcta.png";
  

import { getAllActivities } from "../../api/activity.api";

import "./ActivitiesPage.css";

// Fallback activities if API fails
const FALLBACK_ACTIVITIES = [
  {
    id: 1,
    title: "Performances",
    description: "Classical dance performances showcasing the richness and diversity of Indian dance traditions across Germany.",
    slug: "/events",
    image: abt1,
    shortDescription: "Experience the beauty of Indian classical dance through captivating performances.",
  },
  {
    id: 2,
    title: "Workshops & Masterclasses",
    description: "Professional workshops and learning sessions led by experienced artists and educators.",
    slug: "/events",
    image: abt2,
    shortDescription: "Learn from masters and enhance your skills through intensive training.",
  },
  {
    id: 3,
    title: "SPANDA Programme",
    description: "Special movement and creative learning sessions designed to inspire artistic growth and collaboration.",
    slug: "/activities/spanda",
    image: abt3,
    shortDescription: "Explore movement, creativity, and collaboration through unique learning experiences.",
  },
];

const cardGradients = [
 
" linear-gradient(135deg, rgba(45, 45, 45, 0.785) 0%,rgba(55, 75, 73, 0.815) 35%,rgba(51, 48, 53, 0.717) 70%, rgba(26, 2, 54, 0.815) 100%)"
];

const annualTimeline = [
  { month: "January", title: "Community Meet", description: "New Year gathering to connect members and plan the year ahead." },
  { month: "March", title: "Spring Workshop", description: "Intensive training sessions with renowned artists and teachers." },
  { month: "June", title: "Summer Performance", description: "Showcasing classical dance performances across multiple cities." },
  { month: "September", title: "Cultural Festival", description: "Annual festival celebrating Indian Classical Dance and cultural exchange." },
  { month: "November", title: "Annual Gathering", description: "Year-end celebration, general assembly, and community networking." },
];

const galleryImages = [
  { id: 1, src: abt1, alt: "Performance", category: "Performance" },
  { id: 2, src: abt2, alt: "Workshop", category: "Workshop" },
  { id: 3, src: abt3, alt: "Cultural Exchange", category: "Cultural Exchange" },
  { id: 4, src: abt4, alt: "Community Event", category: "Community" },
];

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState({
    grid: false,
    featured: false,
    timeline: false,
    gallery: false,
    cta: false,
  });
  const [hoveredCard, setHoveredCard] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        setLoading(true);
        const res = await getAllActivities({ isActive: true });
        
        let activitiesData = [];
        if (res?.data?.data) {
          if (Array.isArray(res.data.data)) {
            activitiesData = res.data.data;
          } else if (res.data.data.activities) {
            activitiesData = res.data.data.activities;
          }
        } else if (Array.isArray(res?.data)) {
          activitiesData = res.data;
        } else if (Array.isArray(res)) {
          activitiesData = res;
        }
        
        const activeActivities = activitiesData
          .filter(a => a.isActive !== false)
          .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));

        if (activeActivities.length > 0) {
          setActivities(activeActivities);
        } else {
          setActivities(FALLBACK_ACTIVITIES);
        }
      } catch (err) {
        console.error("Failed to fetch activities:", err);
        setActivities(FALLBACK_ACTIVITIES);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
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
      { threshold: 0.1 }
    );
    
    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, [loading]);

  const getImageUrl = (activity, index) => {
    if (activity.image) {
      if (activity.image.startsWith('http://') || activity.image.startsWith('https://')) {
        return activity.image;
      }
      return `${IMAGE_BASE_URL}/uploads/activities/${activity.image}`;
    }
    const fallbacks = [
      "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ];
    return fallbacks[index % fallbacks.length];
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <>
      <Helmet>
        <title>Activities | KITD - Classical Indian Dance Germany</title>
        <meta name="description" content="Discover KITD's activities including performances, workshops, SPANDA programme, cultural exchange, and more across Germany." />
      </Helmet>

      <div className="ap-activities">

        {/* HERO */}
        <section className="ap-activities__hero">
          <div className="ap-activities__hero-bg">
            <img 
              src={acthero}
              alt="KITD Activities" 
              loading="eager" 
            />
            <div className="ap-activities__hero-overlay" />
            <div className="ap-activities__hero-gradient" />
          </div>
          <div className="ap-activities__hero-container">
            <div className="ap-activities__hero-content">
              <div className="ap-activities__hero-eyebrow">
                <span className="ap-activities__hero-eyebrow-line" />
                <span className="ap-activities__hero-eyebrow-text">Our Activities</span>
              </div>
              <h1 className="ap-activities__hero-title">
                Preserving, Promoting &amp;<br />
                <span className="ap-activities__hero-title-accent">Celebrating</span> Indian Classical Dance
              </h1>
              <p className="ap-activities__hero-description">
                KITD organizes a diverse range of programmes, performances, workshops, and collaborative initiatives across Germany.
              </p>
            </div>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="ap-activities__breadcrumb">
          <div className="ap-activities__container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>Activities</span>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <section className="ap-activities__grid">
            <div className="ap-activities__container" style={{ textAlign: 'center', padding: '60px' }}>
              <div className="ap-activities__spinner" />
              <p style={{ color: '#6b7280', marginTop: '16px' }}>Loading activities...</p>
            </div>
          </section>
        )}

        {/* ACTIVITIES GRID */}
        {!loading && activities.length > 0 && (
          <section className="ap-activities__grid" data-section="grid">
            <div className="ap-activities__container">
              <div className="ap-activities__grid-header">
                <div className="ap-activities__grid-eyebrow">
                  <span className="ap-activities__grid-eyebrow-line" />
                  <span className="ap-activities__grid-eyebrow-text">What We Do</span>
                </div>
                <h2 className="ap-activities__grid-title">
                  A Platform for<span className="ap-activities__grid-title-accent"> Artists &amp; Community</span>
                </h2>
              </div>
              <div className={`ap-activities__grid-list ${isVisible.grid ? "visible" : ""}`}>
                {activities.map((activity, index) => (
                  <div
                    className={`ap-activities__card ${hoveredCard === index ? 'ap-activities__card--hovered' : ''}`}
                    key={activity.id || index}
                    style={{ transitionDelay: `${index * 0.08}s` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Link to={activity.slug || `/activities/${activity.id}`} className="ap-activities__card-link">
                      <div 
                        className="ap-activities__card-bg" 
                        style={{ 
                          backgroundImage: `url(${getImageUrl(activity, index)})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }} 
                      />
                      <div className="ap-activities__card-overlay" style={{ background: cardGradients[index % cardGradients.length] }} />
                      <div className="ap-activities__card-content">
                        <div className="ap-activities__card-meta">
                          <span className="ap-activities__card-number">0{index + 1}</span>
                          <span className="ap-activities__card-category">
                            {activity.category || "Activity"}
                          </span>
                        </div>
                        <h3 className="ap-activities__card-title">{activity.title}</h3>
                        <p className="ap-activities__card-desc">
                          {activity.shortDescription || activity.description || "Discover more about this activity."}
                        </p>
                        <div className="ap-activities__card-footer-info">
                          {activity.location && (
                            <span className="ap-activities__card-location">{activity.location}</span>
                          )}
                          {activity.date && (
                            <span className="ap-activities__card-date">{formatDate(activity.date)}</span>
                          )}
                        </div>
                        <span className="ap-activities__card-link-text">
                          <span>Learn More</span>
                          <ArrowRight size={14} strokeWidth={1.5} />
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* EMPTY STATE */}
        {!loading && activities.length === 0 && (
          <section className="ap-activities__grid">
            <div className="ap-activities__container">
              <div className="ap-activities__empty">
                <h3>No Activities Yet</h3>
                <p>Activities will appear here once they are added.</p>
              </div>
            </div>
          </section>
        )}

        {/* FEATURED - SPANDA */}
        <section className="ap-activities__featured" data-section="featured">
          <div className="ap-activities__container">
            <div className={`ap-activities__featured-wrapper ${isVisible.featured ? "visible" : ""}`}>
              <div className="ap-activities__featured-content">
                <div className="ap-activities__featured-badge">
                  <span>Featured Programme</span>
                </div>
                <h2 className="ap-activities__featured-title">SPANDA</h2>
                <p className="ap-activities__featured-desc">SPANDA is one of KITD's unique initiatives that brings together artists and participants through movement exploration, workshops, and collaborative learning experiences.</p>
                <Link to="/activities/spanda" className="ap-activities__featured-btn">
                  <span>Learn More About SPANDA</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </div>
              <div className="ap-activities__featured-visual">
                <div className="ap-activities__featured-image">
                  <img 
                    src={actspanda}
                    alt="SPANDA" 
                    loading="lazy" 
                  />
                  <div className="ap-activities__featured-accent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="ap-activities__timeline" data-section="timeline">
          <div className="ap-activities__container">
            <div className="ap-activities__timeline-header">
              <div className="ap-activities__timeline-eyebrow">
                <span className="ap-activities__timeline-eyebrow-line" />
                <span>Throughout the Year</span>
              </div>
              <h2 className="ap-activities__timeline-title">Annual<span className="ap-activities__timeline-title-accent"> Activities</span></h2>
            </div>
            <div className={`ap-activities__timeline-list ${isVisible.timeline ? "visible" : ""}`}>
              {annualTimeline.map((item, index) => (
                <div className="ap-activities__timeline-item" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="ap-activities__timeline-marker">
                    <div className="ap-activities__timeline-dot">
                      <Calendar size={14} strokeWidth={1.5} />
                    </div>
                    {index < annualTimeline.length - 1 && <div className="ap-activities__timeline-line" />}
                  </div>
                  <div className="ap-activities__timeline-content">
                    <span className="ap-activities__timeline-month">{item.month}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="ap-activities__gallery" data-section="gallery">
          <div className="ap-activities__container">
            <div className={`ap-activities__gallery-wrapper ${isVisible.gallery ? "visible" : ""}`}>
              <div className="ap-activities__gallery-header">
                <div className="ap-activities__gallery-eyebrow">
                  <span className="ap-activities__gallery-eyebrow-line" />
                  <span>Moments</span>
                </div>
                <h2>Activity Highlights</h2>
              </div>
              <div className="ap-activities__gallery-grid">
                {galleryImages.map((image, index) => (
                  <div className="ap-activities__gallery-card" key={image.id} style={{ transitionDelay: `${index * 0.1}s` }}>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <div className="ap-activities__gallery-overlay">
                      <span>{image.category}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ap-activities__gallery-footer">
                <Link to="/gallery" className="ap-activities__gallery-btn">
                  <span>View Full Gallery</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Fixed with proper visibility */}
        <section className="ap-activities__cta" data-section="cta">
          <div className="ap-activities__cta-bg">
            <img 
              src={contactcta}
              alt="KITD Community" 
              loading="lazy" 
            />
            <div className="ap-activities__cta-overlay" />
          </div>
          <div className="ap-activities__container">
            <div className={`ap-activities__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
              <h2>Be Part of Our Activities</h2>
              <p>Whether you are an artist, teacher, student, or supporter, there are many ways to participate in KITD's programmes.</p>
              <div className="ap-activities__cta-buttons">
                <Link to="/membership" className="ap-activities__cta-btn ap-activities__cta-btn--primary">
                  <span>Become a Member</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
                <Link to="/events" className="ap-activities__cta-btn ap-activities__cta-btn--secondary">
                  <span>Upcoming Events</span>
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

export default ActivitiesPage;