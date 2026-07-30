// src/pages/Events/EventsPage.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Calendar,
//   Clock,
//   MapPin,
//   Music,
//   BookOpen,
//   Users,
//   Sparkles,
//   GraduationCap,
//   Heart,
//   ChevronRight,
//   Camera,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// import "./EventsPage.css";

// // Event categories
// const eventCategories = [
//   {
//     icon: <Music size={22} strokeWidth={1.5} />,
//     title: "Performance",
//     description:
//       "Classical dance performances presented by artists and member institutions across Germany.",
//     slug: "/events",
//   },
//   {
//     icon: <BookOpen size={22} strokeWidth={1.5} />,
//     title: "Workshops",
//     description:
//       "Interactive learning experiences led by experienced artists and educators for all levels.",
//     slug: "/events",
//   },
//   {
//     icon: <Sparkles size={22} strokeWidth={1.5} />,
//     title: "Festivals",
//     description:
//       "Celebrating Indian Classical Dance through cultural festivals and curated showcases.",
//     slug: "/events",
//   },
//   {
//     icon: <GraduationCap size={22} strokeWidth={1.5} />,
//     title: "SPANDA",
//     description:
//       "Creative movement and collaborative learning programmes for artistic growth.",
//     slug: "/activities/spanda",
//   },
//   {
//     icon: <Users size={22} strokeWidth={1.5} />,
//     title: "Lecture Demonstrations",
//     description:
//       "Educational sessions exploring traditions, techniques, and the history of classical dance.",
//     slug: "/events",
//   },
//   {
//     icon: <Heart size={22} strokeWidth={1.5} />,
//     title: "Community Gatherings",
//     description:
//       "Networking, discussions, and community engagement initiatives for members and supporters.",
//     slug: "/events",
//   },
// ];

// // Upcoming events (fallback data)
// const upcomingEvents = [
//   {
//     id: 1,
//     title: "SPANDA Training Series — Spring Session",
//     description:
//       "Monthly training sessions bringing together dancers and teachers for collaborative learning and artistic development in Indian Classical Dance.",
//     date: "15 February 2025",
//     time: "14:00 – 17:00",
//     location: "Berlin",
//     image: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
//     category: "Workshop",
//   },
//   {
//     id: 2,
//     title: "City Concert: Rhythms of India",
//     description:
//       "An evening of classical dance performances showcasing Bharatanatyam, Kathak, and Odissi traditions with live music accompaniment.",
//     date: "20 March 2025",
//     time: "19:00 – 21:30",
//     location: "Munich",
//     image: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
//     category: "Performance",
//   },
//   {
//     id: 3,
//     title: "Lecture Demonstration: The Art of Abhinaya",
//     description:
//       "An educational session exploring the expressive aspects of Indian Classical Dance through demonstrations and interactive discussions.",
//     date: "10 April 2025",
//     time: "16:00 – 18:00",
//     location: "Frankfurt",
//     image: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
//     category: "Lecture Demonstration",
//   },
// ];

// // Annual event timeline
// const eventTimeline = [
//   {
//     month: "January",
//     title: "Community Gathering",
//     description: "New Year meetup to connect members and plan upcoming programmes.",
//   },
//   {
//     month: "March",
//     title: "Spring Workshop",
//     description: "Intensive training sessions with renowned classical dance artists.",
//   },
//   {
//     month: "June",
//     title: "Summer Performance",
//     description: "Showcasing classical dance across multiple cities in Germany.",
//   },
//   {
//     month: "September",
//     title: "Cultural Festival",
//     description: "Annual festival celebrating the diversity of Indian Classical Dance.",
//   },
//   {
//     month: "December",
//     title: "Annual Celebration",
//     description: "Year-end gathering, reflection, and community networking event.",
//   },
// ];

// // Gallery preview images
// const galleryPreview = [
//   {
//     id: 1,
//     src: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
//     alt: "Performance",
//   },
//   {
//     id: 2,
//     src: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
//     alt: "Workshop",
//   },
//   {
//     id: 3,
//     src: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
//     alt: "Festival",
//   },
//   {
//     id: 4,
//     src: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
//     alt: "Community",
//   },
//   {
//     id: 5,
//     src: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
//     alt: "SPANDA",
//   },
//   {
//     id: 6,
//     src: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
//     alt: "Lecture",
//   },
// ];

// // Past events
// const pastEvents = [
//   { title: "Previous Performances", count: "Multiple", icon: <Music size={18} /> },
//   { title: "Completed Workshops", count: "Multiple", icon: <BookOpen size={18} /> },
//   { title: "Festivals", count: "Multiple", icon: <Sparkles size={18} /> },
//   { title: "Annual Meetings", count: "Multiple", icon: <Users size={18} /> },
// ];

// const EventsPage = () => {
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
//         <title>Events & Programmes | KITD - Classical Indian Dance Germany</title>
//         <meta
//           name="description"
//           content="Discover upcoming performances, workshops, festivals, and community gatherings organized by KITD across Germany. Join our classical Indian dance events."
//         />
//       </Helmet>

//       <div className="events-page">
//         {/* ============================================ */}
//         {/* HERO SECTION */}
//         {/* ============================================ */}
//         <section className="ev-hero">
//           <div className="ev-hero-bg" />
//           <div className="ev-hero-container">
//             <div className="ev-hero-content">
//               <div className="ev-hero-eyebrow">
//                 <span className="ev-hero-eyebrow-line" />
//                 <span className="ev-hero-eyebrow-text">Events & Programmes</span>
//               </div>
//               <h1 className="ev-hero-title">
//                 Celebrating Indian Classical Dance
//                 <br />
//                 Through
//                 <span className="ev-hero-title-accent"> Events & Community</span>
//               </h1>
//               <p className="ev-hero-description">
//                 Discover upcoming performances, workshops, festivals, lecture 
//                 demonstrations, and community gatherings that bring together 
//                 artists, teachers, students, and cultural enthusiasts across Germany.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* BREADCRUMB */}
//         {/* ============================================ */}
//         <div className="ev-breadcrumb">
//           <div className="ev-container">
//             <Link to="/">Home</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <span>Events & Programmes</span>
//           </div>
//         </div>

//         {/* ============================================ */}
//         {/* INTRODUCTION */}
//         {/* ============================================ */}
//         <section className="ev-intro" data-section="intro">
//           <div className="ev-container">
//             <div className={`ev-intro-wrapper ${isVisible.intro ? "visible" : ""}`}>
//               <div className="ev-intro-eyebrow">
//                 <span className="ev-intro-eyebrow-line" />
//                 <span className="ev-intro-eyebrow-text">Experience</span>
//               </div>
//               <h2 className="ev-intro-title">
//                 The
//                 <span className="ev-intro-title-accent"> KITD Community</span>
//               </h2>
//               <p className="ev-intro-description">
//                 KITD organizes a wide range of cultural and educational programmes 
//                 throughout the year, creating opportunities to learn, perform, 
//                 collaborate, and celebrate the richness of Indian Classical Dance.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* UPCOMING EVENTS */}
//         {/* ============================================ */}
//         <section className="ev-upcoming" data-section="upcoming">
//           <div className="ev-container">
//             <div className="ev-upcoming-header">
//               <div className="ev-upcoming-eyebrow">
//                 <span className="ev-upcoming-eyebrow-line" />
//                 <span className="ev-upcoming-eyebrow-text">Upcoming</span>
//               </div>
//               <h2 className="ev-upcoming-title">
//                 Featured
//                 <span className="ev-upcoming-title-accent"> Events</span>
//               </h2>
//             </div>

//             <div className={`ev-upcoming-grid ${isVisible.upcoming ? "visible" : ""}`}>
//               {upcomingEvents.map((event, index) => (
//                 <div
//                   className="ev-event-card"
//                   key={event.id}
//                   style={{ transitionDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="ev-event-image">
//                     <img src={event.image} alt={event.title} loading="lazy" />
//                     <span className="ev-event-category">{event.category}</span>
//                   </div>
//                   <div className="ev-event-content">
//                     <div className="ev-event-meta">
//                       <span className="ev-event-meta-item">
//                         <Calendar size={13} strokeWidth={1.5} />
//                         {event.date}
//                       </span>
//                       <span className="ev-event-meta-item">
//                         <Clock size={13} strokeWidth={1.5} />
//                         {event.time}
//                       </span>
//                       <span className="ev-event-meta-item">
//                         <MapPin size={13} strokeWidth={1.5} />
//                         {event.location}
//                       </span>
//                     </div>
//                     <h3 className="ev-event-title">{event.title}</h3>
//                     <p className="ev-event-description">{event.description}</p>
//                     <Link to={`/events/${event.id}`} className="ev-event-link">
//                       <span>View Details</span>
//                       <ArrowRight size={14} strokeWidth={1.5} />
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="ev-upcoming-footer">
//               <Link to="/events" className="ev-upcoming-btn">
//                 <span>View All Events</span>
//                 <ArrowRight size={16} strokeWidth={1.5} />
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* EVENT CATEGORIES */}
//         {/* ============================================ */}
//         <section className="ev-categories" data-section="categories">
//           <div className="ev-container">
//             <div className="ev-categories-header">
//               <div className="ev-categories-eyebrow">
//                 <span className="ev-categories-eyebrow-line" />
//                 <span className="ev-categories-eyebrow-text">Categories</span>
//               </div>
//               <h2 className="ev-categories-title">
//                 Types of
//                 <span className="ev-categories-title-accent"> Events</span>
//               </h2>
//             </div>

//             <div className={`ev-categories-grid ${isVisible.categories ? "visible" : ""}`}>
//               {eventCategories.map((category, index) => (
//                 <Link
//                   to={category.slug}
//                   className="ev-category-card"
//                   key={index}
//                   style={{ transitionDelay: `${index * 0.08}s` }}
//                 >
//                   <div className="ev-category-icon">{category.icon}</div>
//                   <h3 className="ev-category-title">{category.title}</h3>
//                   <p className="ev-category-description">{category.description}</p>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* PAST EVENTS */}
//         {/* ============================================ */}
//         <section className="ev-past" data-section="past">
//           <div className="ev-past-bg" />
//           <div className="ev-container">
//             <div className={`ev-past-wrapper ${isVisible.past ? "visible" : ""}`}>
//               <div className="ev-past-header">
//                 <h2 className="ev-past-title">Past Events</h2>
//                 <p className="ev-past-subtitle">
//                   Explore highlights from our previous programmes
//                 </p>
//               </div>
//               <div className="ev-past-grid">
//                 {pastEvents.map((item, index) => (
//                   <div
//                     className="ev-past-card"
//                     key={index}
//                     style={{ transitionDelay: `${index * 0.1}s` }}
//                   >
//                     <div className="ev-past-icon">{item.icon}</div>
//                     <span className="ev-past-count">{item.count}</span>
//                     <span className="ev-past-label">{item.title}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="ev-past-footer">
//                 <Link to="/gallery" className="ev-past-btn">
//                   <Camera size={16} strokeWidth={1.5} />
//                   <span>View Event Gallery</span>
//                   <ArrowRight size={14} strokeWidth={1.5} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* ANNUAL EVENT TIMELINE */}
//         {/* ============================================ */}
//         <section className="ev-timeline-section" data-section="timeline">
//           <div className="ev-container">
//             <div className="ev-timeline-header">
//               <div className="ev-timeline-eyebrow">
//                 <span className="ev-timeline-eyebrow-line" />
//                 <span className="ev-timeline-eyebrow-text">Throughout the Year</span>
//               </div>
//               <h2 className="ev-timeline-title">
//                 Annual
//                 <span className="ev-timeline-title-accent"> Event Calendar</span>
//               </h2>
//             </div>

//             <div className={`ev-timeline ${isVisible.timeline ? "visible" : ""}`}>
//               {eventTimeline.map((item, index) => (
//                 <div
//                   className="ev-timeline-item"
//                   key={index}
//                   style={{ transitionDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="ev-timeline-marker">
//                     <div className="ev-timeline-dot">
//                       <Calendar size={14} strokeWidth={1.5} />
//                     </div>
//                     {index < eventTimeline.length - 1 && (
//                       <div className="ev-timeline-line" />
//                     )}
//                   </div>
//                   <div className="ev-timeline-content">
//                     <span className="ev-timeline-month">{item.month}</span>
//                     <h3 className="ev-timeline-item-title">{item.title}</h3>
//                     <p className="ev-timeline-item-description">{item.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* GALLERY PREVIEW */}
//         {/* ============================================ */}
//         <section className="ev-gallery" data-section="gallery">
//           <div className="ev-container">
//             <div className={`ev-gallery-wrapper ${isVisible.gallery ? "visible" : ""}`}>
//               <div className="ev-gallery-header">
//                 <div className="ev-gallery-eyebrow">
//                   <span className="ev-gallery-eyebrow-line" />
//                   <span className="ev-gallery-eyebrow-text">Highlights</span>
//                 </div>
//                 <h2 className="ev-gallery-title">Event Gallery</h2>
//               </div>
//               <div className="ev-gallery-grid">
//                 {galleryPreview.map((image, index) => (
//                   <div
//                     className="ev-gallery-card"
//                     key={image.id}
//                     style={{ transitionDelay: `${index * 0.08}s` }}
//                   >
//                     <img src={image.src} alt={image.alt} loading="lazy" />
//                     <div className="ev-gallery-overlay">
//                       <Camera size={18} strokeWidth={1.5} />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="ev-gallery-footer">
//                 <Link to="/gallery" className="ev-gallery-btn">
//                   <span>Explore Gallery</span>
//                   <ArrowRight size={16} strokeWidth={1.5} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* CTA SECTION */}
//         {/* ============================================ */}
//         <section className="ev-cta" data-section="cta">
//           <div className="ev-container">
//             <div className={`ev-cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
//               <h2 className="ev-cta-title">Join Our Upcoming Events</h2>
//               <p className="ev-cta-text">
//                 Become part of Germany's growing Indian Classical Dance community 
//                 by participating in our performances, workshops, and cultural programmes.
//               </p>
//               <div className="ev-cta-buttons">
//                 <Link to="/membership" className="ev-cta-btn ev-cta-btn-primary">
//                   <span>Become a Member</span>
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </Link>
//                 <Link to="/contact" className="ev-cta-btn ev-cta-btn-secondary">
//                   <span>Contact Us</span>
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

// export default EventsPage;


// src/pages/Events/EventsPage.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Music,
  BookOpen,
  Users,
  Sparkles,
  GraduationCap,
  Heart,
  ChevronRight,
  Camera,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import "./EventsPage.css";

// Event categories
const eventCategories = [
  {
    icon: <Music size={22} strokeWidth={1.5} />,
    title: "Performance",
    description:
      "Classical dance performances presented by artists and member institutions across Germany.",
    slug: "/events",
    image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
  },
  {
    icon: <BookOpen size={22} strokeWidth={1.5} />,
    title: "Workshops",
    description:
      "Interactive learning experiences led by experienced artists and educators for all levels.",
    slug: "/events",
    image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
  },
  {
    icon: <Sparkles size={22} strokeWidth={1.5} />,
    title: "Festivals",
    description:
      "Celebrating Indian Classical Dance through cultural festivals and curated showcases.",
    slug: "/events",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
  },
  {
    icon: <GraduationCap size={22} strokeWidth={1.5} />,
    title: "SPANDA",
    description:
      "Creative movement and collaborative learning programmes for artistic growth.",
    slug: "/activities/spanda",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Lecture Demonstrations",
    description:
      "Educational sessions exploring traditions, techniques, and the history of classical dance.",
    slug: "/events",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    title: "Community Gatherings",
    description:
      "Networking, discussions, and community engagement initiatives for members and supporters.",
    slug: "/events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
  },
];

// Upcoming events with Bharatanatyam images
const upcomingEvents = [
  {
    id: 1,
    title: "SPANDA Training Series — Spring Session",
    description:
      "Monthly training sessions bringing together dancers and teachers for collaborative learning and artistic development in Indian Classical Dance.",
    date: "15 February 2025",
    time: "14:00 – 17:00",
    location: "Berlin",
    image: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Workshop",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.85) 0%, rgba(60, 10, 30, 0.92) 100%)",
  },
  {
    id: 2,
    title: "City Concert: Rhythms of India",
    description:
      "An evening of classical dance performances showcasing Bharatanatyam, Kathak, and Odissi traditions with live music accompaniment.",
    date: "20 March 2025",
    time: "19:00 – 21:30",
    location: "Munich",
    image: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Performance",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.85) 0%, rgba(50, 15, 25, 0.92) 100%)",
  },
  {
    id: 3,
    title: "Lecture Demonstration: The Art of Abhinaya",
    description:
      "An educational session exploring the expressive aspects of Indian Classical Dance through demonstrations and interactive discussions.",
    date: "10 April 2025",
    time: "16:00 – 18:00",
    location: "Frankfurt",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Lecture Demonstration",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.85) 0%, rgba(70, 20, 40, 0.92) 100%)",
  },
];

// Annual event timeline
const eventTimeline = [
  {
    month: "January",
    title: "Community Gathering",
    description: "New Year meetup to connect members and plan upcoming programmes.",
  },
  {
    month: "March",
    title: "Spring Workshop",
    description: "Intensive training sessions with renowned classical dance artists.",
  },
  {
    month: "June",
    title: "Summer Performance",
    description: "Showcasing classical dance across multiple cities in Germany.",
  },
  {
    month: "September",
    title: "Cultural Festival",
    description: "Annual festival celebrating the diversity of Indian Classical Dance.",
  },
  {
    month: "December",
    title: "Annual Celebration",
    description: "Year-end gathering, reflection, and community networking event.",
  },
];

// Gallery preview images
const galleryPreview = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    alt: "Bharatanatyam Performance",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    alt: "Kathak Workshop",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    alt: "Odissi Festival",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    alt: "Community Event",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    alt: "Bharatanatyam Artist",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
    alt: "Dance Lecture",
  },
];

// Past events
const pastEvents = [
  { title: "Previous Performances", count: "Multiple", icon: <Music size={18} /> },
  { title: "Completed Workshops", count: "Multiple", icon: <BookOpen size={18} /> },
  { title: "Festivals", count: "Multiple", icon: <Sparkles size={18} /> },
  { title: "Annual Meetings", count: "Multiple", icon: <Users size={18} /> },
];

const EventsPage = () => {
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
        <title>Events & Programmes | KITD - Classical Indian Dance Germany</title>
        <meta
          name="description"
          content="Discover upcoming performances, workshops, festivals, and community gatherings organized by KITD across Germany. Join our classical Indian dance events."
        />
      </Helmet>

      <div className="kitd-events-page">

        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="kitd-events-page__hero">
          <div className="kitd-events-page__hero-bg">
            <img 
              src="https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Bharatanatyam Performance"
              loading="eager"
            />
            <div className="kitd-events-page__hero-overlay" />
            <div className="kitd-events-page__hero-gradient" />
          </div>
          
          <div className="kitd-events-page__hero-container">
            <div className="kitd-events-page__hero-content">
              <div className="kitd-events-page__hero-eyebrow">
                <span className="kitd-events-page__hero-eyebrow-line" />
                <span className="kitd-events-page__hero-eyebrow-text">Events & Programmes</span>
              </div>
              <h1 className="kitd-events-page__hero-title">
                Celebrating Indian Classical Dance
                <br />
                Through
                <span className="kitd-events-page__hero-title-accent"> Events &amp; Community</span>
              </h1>
              <p className="kitd-events-page__hero-description">
                Discover upcoming performances, workshops, festivals, lecture 
                demonstrations, and community gatherings that bring together 
                artists, teachers, students, and cultural enthusiasts across Germany.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* BREADCRUMB */}
        {/* ============================================ */}
        <div className="kitd-events-page__breadcrumb">
          <div className="kitd-events-page__container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>Events & Programmes</span>
          </div>
        </div>

        {/* ============================================ */}
        {/* UPCOMING EVENTS */}
        {/* ============================================ */}
        <section className="kitd-events-page__upcoming" data-section="upcoming">
          <div className="kitd-events-page__container">
            <div className="kitd-events-page__upcoming-header">
              <div className="kitd-events-page__upcoming-eyebrow">
                <span className="kitd-events-page__upcoming-eyebrow-line" />
                <span className="kitd-events-page__upcoming-eyebrow-text">Upcoming</span>
              </div>
              <h2 className="kitd-events-page__upcoming-title">
                Featured
                <span className="kitd-events-page__upcoming-title-accent"> Events</span>
              </h2>
            </div>

            <div className={`kitd-events-page__upcoming-grid ${isVisible.upcoming ? "visible" : ""}`}>
              {upcomingEvents.map((event, index) => (
                <div
                  className={`kitd-events-page__event-card ${hoveredCard === event.id ? 'kitd-events-page__event-card--hovered' : ''}`}
                  key={event.id}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredCard(event.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="kitd-events-page__event-image">
                    <img src={event.image} alt={event.title} loading="lazy" />
                    <div 
                      className="kitd-events-page__event-overlay"
                      style={{ background: event.gradient }}
                    />
                    <span className="kitd-events-page__event-category">{event.category}</span>
                  </div>
                  <div className="kitd-events-page__event-content">
                    <div className="kitd-events-page__event-meta">
                      <span className="kitd-events-page__event-meta-item">
                        <Calendar size={13} strokeWidth={1.5} />
                        {event.date}
                      </span>
                      <span className="kitd-events-page__event-meta-item">
                        <Clock size={13} strokeWidth={1.5} />
                        {event.time}
                      </span>
                      <span className="kitd-events-page__event-meta-item">
                        <MapPin size={13} strokeWidth={1.5} />
                        {event.location}
                      </span>
                    </div>
                    <h3 className="kitd-events-page__event-title">{event.title}</h3>
                    <p className="kitd-events-page__event-desc">{event.description}</p>
                    <Link to={`/events/${event.id}`} className="kitd-events-page__event-link">
                      <span>View Details</span>
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="kitd-events-page__upcoming-footer">
              <Link to="/events" className="kitd-events-page__upcoming-btn">
                <span>View All Events</span>
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* EVENT CATEGORIES */}
        {/* ============================================ */}
        <section className="kitd-events-page__categories" data-section="categories">
          <div className="kitd-events-page__container">
            <div className="kitd-events-page__categories-header">
              <div className="kitd-events-page__categories-eyebrow">
                <span className="kitd-events-page__categories-eyebrow-line" />
                <span className="kitd-events-page__categories-eyebrow-text">Categories</span>
              </div>
              <h2 className="kitd-events-page__categories-title">
                Types of
                <span className="kitd-events-page__categories-title-accent"> Events</span>
              </h2>
            </div>

            <div className={`kitd-events-page__categories-grid ${isVisible.categories ? "visible" : ""}`}>
              {eventCategories.map((category, index) => (
                <div
                  className={`kitd-events-page__category-card ${hoveredCard === `cat-${index}` ? 'kitd-events-page__category-card--hovered' : ''}`}
                  key={index}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                  onMouseEnter={() => setHoveredCard(`cat-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Link to={category.slug} className="kitd-events-page__category-link">
                    <div 
                      className="kitd-events-page__category-bg"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />
                    <div 
                      className="kitd-events-page__category-overlay"
                      style={{ background: category.gradient }}
                    />
                    
                    <div className="kitd-events-page__category-content">
                      <div className="kitd-events-page__category-icon">{category.icon}</div>
                      <h3 className="kitd-events-page__category-title">{category.title}</h3>
                      <p className="kitd-events-page__category-desc">{category.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* ANNUAL EVENT TIMELINE */}
        {/* ============================================ */}
        <section className="kitd-events-page__timeline" data-section="timeline">
          <div className="kitd-events-page__container">
            <div className="kitd-events-page__timeline-header">
              <div className="kitd-events-page__timeline-eyebrow">
                <span className="kitd-events-page__timeline-eyebrow-line" />
                <span className="kitd-events-page__timeline-eyebrow-text">Throughout the Year</span>
              </div>
              <h2 className="kitd-events-page__timeline-title">
                Annual
                <span className="kitd-events-page__timeline-title-accent"> Event Calendar</span>
              </h2>
            </div>

            <div className={`kitd-events-page__timeline-list ${isVisible.timeline ? "visible" : ""}`}>
              {eventTimeline.map((item, index) => (
                <div
                  className="kitd-events-page__timeline-item"
                  key={index}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="kitd-events-page__timeline-marker">
                    <div className="kitd-events-page__timeline-dot">
                      <Calendar size={14} strokeWidth={1.5} />
                    </div>
                    {index < eventTimeline.length - 1 && (
                      <div className="kitd-events-page__timeline-line" />
                    )}
                  </div>
                  <div className="kitd-events-page__timeline-content">
                    <span className="kitd-events-page__timeline-month">{item.month}</span>
                    <h3 className="kitd-events-page__timeline-title-item">{item.title}</h3>
                    <p className="kitd-events-page__timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* GALLERY PREVIEW */}
        {/* ============================================ */}
        <section className="kitd-events-page__gallery" data-section="gallery">
          <div className="kitd-events-page__container">
            <div className={`kitd-events-page__gallery-wrapper ${isVisible.gallery ? "visible" : ""}`}>
              <div className="kitd-events-page__gallery-header">
                <div className="kitd-events-page__gallery-eyebrow">
                  <span className="kitd-events-page__gallery-eyebrow-line" />
                  <span className="kitd-events-page__gallery-eyebrow-text">Highlights</span>
                </div>
                <h2 className="kitd-events-page__gallery-title">Event Gallery</h2>
              </div>
              <div className="kitd-events-page__gallery-grid">
                {galleryPreview.map((image, index) => (
                  <div
                    className="kitd-events-page__gallery-card"
                    key={image.id}
                    style={{ transitionDelay: `${index * 0.08}s` }}
                  >
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <div className="kitd-events-page__gallery-overlay">
                      <Camera size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="kitd-events-page__gallery-footer">
                <Link to="/gallery" className="kitd-events-page__gallery-btn">
                  <span>Explore Gallery</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CTA SECTION */}
        {/* ============================================ */}
        <section className="kitd-events-page__cta" data-section="cta">
          <div className="kitd-events-page__cta-bg">
            <img 
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="KITD Community"
              loading="lazy"
            />
            <div className="kitd-events-page__cta-overlay" />
          </div>
          
          <div className="kitd-events-page__container">
            <div className={`kitd-events-page__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
              <h2 className="kitd-events-page__cta-title">Join Our Upcoming Events</h2>
              <p className="kitd-events-page__cta-text">
                Become part of Germany's growing Indian Classical Dance community 
                by participating in our performances, workshops, and cultural programmes.
              </p>
              <div className="kitd-events-page__cta-buttons">
                <Link to="/membership" className="kitd-events-page__cta-btn kitd-events-page__cta-btn--primary">
                  <span>Become a Member</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
                <Link to="/contact" className="kitd-events-page__cta-btn kitd-events-page__cta-btn--secondary">
                  <span>Contact Us</span>
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

export default EventsPage;