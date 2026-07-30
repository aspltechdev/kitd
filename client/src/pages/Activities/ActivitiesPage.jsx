// // src/pages/Activities/ActivitiesPage.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Music,
//   BookOpen,
//   Users,
//   Globe,
//   Heart,
//   Award,
//   Sparkles,
//   ChevronRight,
//   Calendar,
//   MapPin,
//   TrendingUp,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// import "./ActivitiesPage.css";

// // Activities cards
// const activities = [
//   {
//     icon: <Music size={24} strokeWidth={1.5} />,
//     title: "Performances",
//     description:
//       "Classical dance performances showcasing the richness and diversity of Indian dance traditions across Germany.",
//     slug: "/events",
//     color: "card-burgundy",
//   },
//   {
//     icon: <BookOpen size={24} strokeWidth={1.5} />,
//     title: "Workshops & Masterclasses",
//     description:
//       "Professional workshops and learning sessions led by experienced artists and educators.",
//     slug: "/events",
//     color: "card-gold",
//   },
//   {
//     icon: <Sparkles size={24} strokeWidth={1.5} />,
//     title: "SPANDA Programme",
//     description:
//       "Special movement and creative learning sessions designed to inspire artistic growth and collaboration.",
//     slug: "/activities/spanda",
//     color: "card-burgundy",
//   },
//   {
//     icon: <Globe size={24} strokeWidth={1.5} />,
//     title: "Cultural Exchange",
//     description:
//       "Collaborative initiatives that connect Indian Classical Dance with diverse cultural communities.",
//     slug: "/activities",
//     color: "card-gold",
//   },
//   {
//     icon: <Users size={24} strokeWidth={1.5} />,
//     title: "Community Engagement",
//     description:
//       "Activities that encourage participation, networking and meaningful connections among members.",
//     slug: "/membership",
//     color: "card-burgundy",
//   },
//   {
//     icon: <Award size={24} strokeWidth={1.5} />,
//     title: "Artist Development",
//     description:
//       "Providing opportunities for artists, teachers and young performers to showcase and strengthen their practice.",
//     slug: "/artists",
//     color: "card-gold",
//   },
// ];

// // Annual activities timeline
// const annualTimeline = [
//   {
//     month: "January",
//     title: "Community Meet",
//     description: "New Year gathering to connect members and plan the year ahead.",
//   },
//   {
//     month: "March",
//     title: "Spring Workshop",
//     description: "Intensive training sessions with renowned artists and teachers.",
//   },
//   {
//     month: "June",
//     title: "Summer Performance",
//     description: "Showcasing classical dance performances across multiple cities.",
//   },
//   {
//     month: "September",
//     title: "Cultural Festival",
//     description: "Annual festival celebrating Indian Classical Dance and cultural exchange.",
//   },
//   {
//     month: "November",
//     title: "Annual Gathering",
//     description: "Year-end celebration, general assembly, and community networking.",
//   },
// ];

// // Community impact statistics
// const impactStats = [
//   {
//     icon: <Music size={20} strokeWidth={1.5} />,
//     value: "Performances",
//     label: "Across Germany",
//   },
//   {
//     icon: <BookOpen size={20} strokeWidth={1.5} />,
//     value: "Workshops",
//     label: "For All Levels",
//   },
//   {
//     icon: <Users size={20} strokeWidth={1.5} />,
//     value: "Collaborations",
//     label: "With Institutions",
//   },
//   {
//     icon: <Heart size={20} strokeWidth={1.5} />,
//     value: "Community Events",
//     label: "Nationwide",
//   },
// ];

// // Gallery preview images
// const galleryImages = [
//   {
//     id: 1,
//     src: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
//     alt: "Performance",
//     category: "Performance",
//   },
//   {
//     id: 2,
//     src: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
//     alt: "Workshop",
//     category: "Workshop",
//   },
//   {
//     id: 3,
//     src: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
//     alt: "Cultural Exchange",
//     category: "Cultural Exchange",
//   },
//   {
//     id: 4,
//     src: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
//     alt: "Community Event",
//     category: "Community",
//   },
// ];

// const ActivitiesPage = () => {
//   const [isVisible, setIsVisible] = useState({});

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
//         <title>Activities | KITD - Classical Indian Dance Germany</title>
//         <meta
//           name="description"
//           content="Discover KITD's activities including performances, workshops, SPANDA programme, cultural exchange, community engagement, and artist development across Germany."
//         />
//       </Helmet>

//       <div className="activities-page">
//         {/* ============================================ */}
//         {/* HERO SECTION */}
//         {/* ============================================ */}
//         <section className="act-hero">
//           <div className="act-hero-bg" />
//           <div className="act-hero-container">
//             <div className="act-hero-content">
//               <div className="act-hero-eyebrow">
//                 <span className="act-hero-eyebrow-line" />
//                 <span className="act-hero-eyebrow-text">Our Activities</span>
//               </div>
//               <h1 className="act-hero-title">
//                 Preserving, Promoting &
//                 <br />
//                 <span className="act-hero-title-accent">Celebrating</span> Indian Classical Dance
//               </h1>
//               <p className="act-hero-description">
//                 KITD organizes a diverse range of programmes, performances, 
//                 workshops, and collaborative initiatives that strengthen the 
//                 Indian Classical Dance community while encouraging cultural 
//                 exchange across Germany.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* BREADCRUMB */}
//         {/* ============================================ */}
//         <div className="act-breadcrumb">
//           <div className="act-container">
//             <Link to="/">Home</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <span>Activities</span>
//           </div>
//         </div>

//         {/* ============================================ */}
//         {/* INTRODUCTION */}
//         {/* ============================================ */}
//         <section className="act-intro" data-section="intro">
//           <div className="act-container">
//             <div className={`act-intro-wrapper ${isVisible.intro ? "visible" : ""}`}>
//               <div className="act-intro-eyebrow">
//                 <span className="act-intro-eyebrow-line" />
//                 <span className="act-intro-eyebrow-text">What We Do</span>
//               </div>
//               <h2 className="act-intro-title">
//                 A Platform for
//                 <span className="act-intro-title-accent"> Artists & Community</span>
//               </h2>
//               <p className="act-intro-description">
//                 Through performances, educational initiatives, workshops, cultural 
//                 collaborations, and community engagement, KITD provides a platform 
//                 for artists, teachers, students, and institutions to connect, learn, 
//                 and grow together.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* ACTIVITIES GRID */}
//         {/* ============================================ */}
//         <section className="act-grid-section" data-section="grid">
//           <div className="act-container">
//             <div className={`act-grid ${isVisible.grid ? "visible" : ""}`}>
//               {activities.map((activity, index) => (
//                 <Link
//                   to={activity.slug}
//                   className={`act-card ${activity.color}`}
//                   key={index}
//                   style={{ transitionDelay: `${index * 0.08}s` }}
//                 >
//                   <div className="act-card-icon">{activity.icon}</div>
//                   <h3 className="act-card-title">{activity.title}</h3>
//                   <p className="act-card-description">{activity.description}</p>
//                   <span className="act-card-link">
//                     <span>Learn More</span>
//                     <ArrowRight size={14} strokeWidth={1.5} />
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* FEATURED PROGRAMME - SPANDA */}
//         {/* ============================================ */}
//         <section className="act-featured" data-section="featured">
//           <div className="act-container">
//             <div className={`act-featured-wrapper ${isVisible.featured ? "visible" : ""}`}>
//               <div className="act-featured-content">
//                 <div className="act-featured-tags">
//                   <span className="act-featured-tag">Movement</span>
//                   <span className="act-featured-tag-dot">•</span>
//                   <span className="act-featured-tag">Learning</span>
//                   <span className="act-featured-tag-dot">•</span>
//                   <span className="act-featured-tag">Collaboration</span>
//                 </div>
//                 <h2 className="act-featured-title">SPANDA</h2>
//                 <p className="act-featured-description">
//                   SPANDA is one of KITD's unique initiatives that brings together 
//                   artists and participants through movement exploration, workshops, 
//                   and collaborative learning experiences. It embodies the spirit of 
//                   expansion and creative growth.
//                 </p>
//                 <Link to="/activities/spanda" className="act-featured-btn">
//                   <span>Learn More About SPANDA</span>
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </Link>
//               </div>
//               <div className="act-featured-visual">
//                 <div className="act-featured-image">
//                   <img
//                     src="https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=700"
//                     alt="SPANDA Programme"
//                   />
//                 </div>
//                 <div className="act-featured-accent" />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* ANNUAL ACTIVITIES TIMELINE */}
//         {/* ============================================ */}
//         <section className="act-timeline-section" data-section="timeline">
//           <div className="act-container">
//             <div className="act-timeline-header">
//               <div className="act-timeline-eyebrow">
//                 <span className="act-timeline-eyebrow-line" />
//                 <span className="act-timeline-eyebrow-text">Throughout the Year</span>
//               </div>
//               <h2 className="act-timeline-title">
//                 Annual
//                 <span className="act-timeline-title-accent"> Activities</span>
//               </h2>
//             </div>

//             <div className={`act-timeline ${isVisible.timeline ? "visible" : ""}`}>
//               {annualTimeline.map((item, index) => (
//                 <div
//                   className="act-timeline-item"
//                   key={index}
//                   style={{ transitionDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="act-timeline-marker">
//                     <div className="act-timeline-dot">
//                       <Calendar size={14} strokeWidth={1.5} />
//                     </div>
//                     {index < annualTimeline.length - 1 && (
//                       <div className="act-timeline-line" />
//                     )}
//                   </div>
//                   <div className="act-timeline-content">
//                     <span className="act-timeline-month">{item.month}</span>
//                     <h3 className="act-timeline-item-title">{item.title}</h3>
//                     <p className="act-timeline-item-description">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* COMMUNITY IMPACT */}
//         {/* ============================================ */}
//         <section className="act-impact" data-section="impact">
//           <div className="act-impact-bg" />
//           <div className="act-container">
//             <div className={`act-impact-wrapper ${isVisible.impact ? "visible" : ""}`}>
//               <div className="act-impact-header">
//                 <h2 className="act-impact-title">Community Impact</h2>
//                 <p className="act-impact-subtitle">
//                   Our activities reach artists and audiences across Germany
//                 </p>
//               </div>
//               <div className="act-impact-grid">
//                 {impactStats.map((stat, index) => (
//                   <div
//                     className="act-impact-card"
//                     key={index}
//                     style={{ transitionDelay: `${index * 0.1}s` }}
//                   >
//                     <div className="act-impact-icon">{stat.icon}</div>
//                     <span className="act-impact-value">{stat.value}</span>
//                     <span className="act-impact-label">{stat.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* GALLERY PREVIEW */}
//         {/* ============================================ */}
//         <section className="act-gallery" data-section="gallery">
//           <div className="act-container">
//             <div className={`act-gallery-wrapper ${isVisible.gallery ? "visible" : ""}`}>
//               <div className="act-gallery-header">
//                 <div className="act-gallery-eyebrow">
//                   <span className="act-gallery-eyebrow-line" />
//                   <span className="act-gallery-eyebrow-text">Moments</span>
//                 </div>
//                 <h2 className="act-gallery-title">Activity Highlights</h2>
//               </div>
//               <div className="act-gallery-grid">
//                 {galleryImages.map((image, index) => (
//                   <div
//                     className="act-gallery-card"
//                     key={image.id}
//                     style={{ transitionDelay: `${index * 0.1}s` }}
//                   >
//                     <img src={image.src} alt={image.alt} loading="lazy" />
//                     <div className="act-gallery-overlay">
//                       <span className="act-gallery-category">{image.category}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="act-gallery-footer">
//                 <Link to="/gallery" className="act-gallery-btn">
//                   <span>View Gallery</span>
//                   <ArrowRight size={16} strokeWidth={1.5} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* CTA SECTION */}
//         {/* ============================================ */}
//         <section className="act-cta" data-section="cta">
//           <div className="act-container">
//             <div className={`act-cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
//               <h2 className="act-cta-title">Be Part of Our Activities</h2>
//               <p className="act-cta-text">
//                 Whether you are an artist, teacher, student, or supporter, there 
//                 are many ways to contribute to and participate in KITD's programmes.
//               </p>
//               <div className="act-cta-buttons">
//                 <Link to="/membership" className="act-cta-btn act-cta-btn-primary">
//                   <span>Become a Member</span>
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </Link>
//                 <Link to="/events" className="act-cta-btn act-cta-btn-secondary">
//                   <span>Upcoming Events</span>
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

// export default ActivitiesPage;


// src/pages/Activities/ActivitiesPage.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Music,
  BookOpen,
  Users,
  Globe,
  Heart,
  Award,
  Sparkles,
  ChevronRight,
  Calendar,
  MapPin,
  TrendingUp,
  Star,
  Clock,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import "./ActivitiesPage.css";

// Activities cards with images
const activities = [
  {
    icon: <Music size={24} strokeWidth={1.5} />,
    title: "Performances",
    description:
      "Classical dance performances showcasing the richness and diversity of Indian dance traditions across Germany.",
    slug: "/events",
    image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
  },
  {
    icon: <BookOpen size={24} strokeWidth={1.5} />,
    title: "Workshops & Masterclasses",
    description:
      "Professional workshops and learning sessions led by experienced artists and educators.",
    slug: "/events",
    image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
  },
  {
    icon: <Sparkles size={24} strokeWidth={1.5} />,
    title: "SPANDA Programme",
    description:
      "Special movement and creative learning sessions designed to inspire artistic growth and collaboration.",
    slug: "/activities/spanda",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
  },
  {
    icon: <Globe size={24} strokeWidth={1.5} />,
    title: "Cultural Exchange",
    description:
      "Collaborative initiatives that connect Indian Classical Dance with diverse cultural communities.",
    slug: "/activities",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
  },
  {
    icon: <Users size={24} strokeWidth={1.5} />,
    title: "Community Engagement",
    description:
      "Activities that encourage participation, networking and meaningful connections among members.",
    slug: "/membership",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
  },
  {
    icon: <Award size={24} strokeWidth={1.5} />,
    title: "Artist Development",
    description:
      "Providing opportunities for artists, teachers and young performers to showcase and strengthen their practice.",
    slug: "/artists",
    image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
  },
];

// Annual activities timeline
const annualTimeline = [
  {
    month: "January",
    title: "Community Meet",
    description: "New Year gathering to connect members and plan the year ahead.",
  },
  {
    month: "March",
    title: "Spring Workshop",
    description: "Intensive training sessions with renowned artists and teachers.",
  },
  {
    month: "June",
    title: "Summer Performance",
    description: "Showcasing classical dance performances across multiple cities.",
  },
  {
    month: "September",
    title: "Cultural Festival",
    description: "Annual festival celebrating Indian Classical Dance and cultural exchange.",
  },
  {
    month: "November",
    title: "Annual Gathering",
    description: "Year-end celebration, general assembly, and community networking.",
  },
];

// Gallery preview images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Performance",
    category: "Performance",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Workshop",
    category: "Workshop",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Cultural Exchange",
    category: "Cultural Exchange",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Community Event",
    category: "Community",
  },
];

const ActivitiesPage = () => {
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
        <title>Activities | KITD - Classical Indian Dance Germany</title>
        <meta
          name="description"
          content="Discover KITD's activities including performances, workshops, SPANDA programme, cultural exchange, community engagement, and artist development across Germany."
        />
      </Helmet>

      <div className="kitd-activities-page">

        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="kitd-activities-page__hero">
          <div className="kitd-activities-page__hero-bg">
            <img 
              src="https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="KITD Activities"
              loading="eager"
            />
            <div className="kitd-activities-page__hero-overlay" />
            <div className="kitd-activities-page__hero-gradient" />
          </div>
          
          <div className="kitd-activities-page__hero-container">
            <div className="kitd-activities-page__hero-content">
              <div className="kitd-activities-page__hero-eyebrow">
                <span className="kitd-activities-page__hero-eyebrow-line" />
                <span className="kitd-activities-page__hero-eyebrow-text">Our Activities</span>
              </div>
              <h1 className="kitd-activities-page__hero-title">
                Preserving, Promoting &amp;
                <br />
                <span className="kitd-activities-page__hero-title-accent">Celebrating</span> Indian Classical Dance
              </h1>
              <p className="kitd-activities-page__hero-description">
                KITD organizes a diverse range of programmes, performances, 
                workshops, and collaborative initiatives that strengthen the 
                Indian Classical Dance community while encouraging cultural 
                exchange across Germany.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* BREADCRUMB */}
        {/* ============================================ */}
        <div className="kitd-activities-page__breadcrumb">
          <div className="kitd-activities-page__container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>Activities</span>
          </div>
        </div>

        {/* ============================================ */}
        {/* ACTIVITIES GRID - CARDS WITH IMAGES */}
        {/* ============================================ */}
        <section className="kitd-activities-page__grid" data-section="grid">
          <div className="kitd-activities-page__container">
            <div className="kitd-activities-page__grid-header">
              <div className="kitd-activities-page__grid-eyebrow">
                <span className="kitd-activities-page__grid-eyebrow-line" />
                <span className="kitd-activities-page__grid-eyebrow-text">What We Do</span>
              </div>
              <h2 className="kitd-activities-page__grid-title">
                A Platform for
                <span className="kitd-activities-page__grid-title-accent"> Artists &amp; Community</span>
              </h2>
            </div>

            <div className={`kitd-activities-page__grid-list ${isVisible.grid ? "visible" : ""}`}>
              {activities.map((activity, index) => (
                <div
                  className={`kitd-activities-page__card ${hoveredCard === index ? 'kitd-activities-page__card--hovered' : ''}`}
                  key={index}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Link to={activity.slug} className="kitd-activities-page__card-link">
                    <div 
                      className="kitd-activities-page__card-bg"
                      style={{ backgroundImage: `url(${activity.image})` }}
                    />
                    <div 
                      className="kitd-activities-page__card-overlay"
                      style={{ background: activity.gradient }}
                    />
                    
                    <div className="kitd-activities-page__card-content">
                      <div className="kitd-activities-page__card-icon">{activity.icon}</div>
                      <h3 className="kitd-activities-page__card-title">{activity.title}</h3>
                      <p className="kitd-activities-page__card-desc">{activity.description}</p>
                      <span className="kitd-activities-page__card-link">
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

        {/* ============================================ */}
        {/* FEATURED PROGRAMME - SPANDA */}
        {/* ============================================ */}
        <section className="kitd-activities-page__featured" data-section="featured">
          <div className="kitd-activities-page__container">
            <div className={`kitd-activities-page__featured-wrapper ${isVisible.featured ? "visible" : ""}`}>
              <div className="kitd-activities-page__featured-content">
                <div className="kitd-activities-page__featured-badge">
                  <Sparkles size={16} strokeWidth={1.5} />
                  <span>Featured Programme</span>
                </div>
                <h2 className="kitd-activities-page__featured-title">SPANDA</h2>
                <p className="kitd-activities-page__featured-desc">
                  SPANDA is one of KITD's unique initiatives that brings together 
                  artists and participants through movement exploration, workshops, 
                  and collaborative learning experiences. It embodies the spirit of 
                  expansion and creative growth.
                </p>
                <Link to="/activities/spanda" className="kitd-activities-page__featured-btn">
                  <span>Learn More About SPANDA</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </div>
              <div className="kitd-activities-page__featured-visual">
                <div className="kitd-activities-page__featured-image">
                  <img
                    src="https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700"
                    alt="SPANDA Programme"
                    loading="lazy"
                  />
                  <div className="kitd-activities-page__featured-accent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* ANNUAL ACTIVITIES TIMELINE */}
        {/* ============================================ */}
        <section className="kitd-activities-page__timeline" data-section="timeline">
          <div className="kitd-activities-page__container">
            <div className="kitd-activities-page__timeline-header">
              <div className="kitd-activities-page__timeline-eyebrow">
                <span className="kitd-activities-page__timeline-eyebrow-line" />
                <span className="kitd-activities-page__timeline-eyebrow-text">Throughout the Year</span>
              </div>
              <h2 className="kitd-activities-page__timeline-title">
                Annual
                <span className="kitd-activities-page__timeline-title-accent"> Activities</span>
              </h2>
            </div>

            <div className={`kitd-activities-page__timeline-list ${isVisible.timeline ? "visible" : ""}`}>
              {annualTimeline.map((item, index) => (
                <div
                  className="kitd-activities-page__timeline-item"
                  key={index}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="kitd-activities-page__timeline-marker">
                    <div className="kitd-activities-page__timeline-dot">
                      <Calendar size={14} strokeWidth={1.5} />
                    </div>
                    {index < annualTimeline.length - 1 && (
                      <div className="kitd-activities-page__timeline-line" />
                    )}
                  </div>
                  <div className="kitd-activities-page__timeline-content">
                    <span className="kitd-activities-page__timeline-month">{item.month}</span>
                    <h3 className="kitd-activities-page__timeline-title-item">{item.title}</h3>
                    <p className="kitd-activities-page__timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* GALLERY PREVIEW */}
        {/* ============================================ */}
        <section className="kitd-activities-page__gallery" data-section="gallery">
          <div className="kitd-activities-page__container">
            <div className={`kitd-activities-page__gallery-wrapper ${isVisible.gallery ? "visible" : ""}`}>
              <div className="kitd-activities-page__gallery-header">
                <div className="kitd-activities-page__gallery-eyebrow">
                  <span className="kitd-activities-page__gallery-eyebrow-line" />
                  <span className="kitd-activities-page__gallery-eyebrow-text">Moments</span>
                </div>
                <h2 className="kitd-activities-page__gallery-title">Activity Highlights</h2>
              </div>
              <div className="kitd-activities-page__gallery-grid">
                {galleryImages.map((image, index) => (
                  <div
                    className="kitd-activities-page__gallery-card"
                    key={image.id}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <div className="kitd-activities-page__gallery-overlay">
                      <span className="kitd-activities-page__gallery-category">{image.category}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="kitd-activities-page__gallery-footer">
                <Link to="/gallery" className="kitd-activities-page__gallery-btn">
                  <span>View Full Gallery</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CTA SECTION */}
        {/* ============================================ */}
        <section className="kitd-activities-page__cta" data-section="cta">
          <div className="kitd-activities-page__cta-bg">
            <img 
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="KITD Community"
              loading="lazy"
            />
            <div className="kitd-activities-page__cta-overlay" />
          </div>
          
          <div className="kitd-activities-page__container">
            <div className={`kitd-activities-page__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
              <h2 className="kitd-activities-page__cta-title">Be Part of Our Activities</h2>
              <p className="kitd-activities-page__cta-text">
                Whether you are an artist, teacher, student, or supporter, there 
                are many ways to contribute to and participate in KITD's programmes.
              </p>
              <div className="kitd-activities-page__cta-buttons">
                <Link to="/membership" className="kitd-activities-page__cta-btn kitd-activities-page__cta-btn--primary">
                  <span>Become a Member</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
                <Link to="/events" className="kitd-activities-page__cta-btn kitd-activities-page__cta-btn--secondary">
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