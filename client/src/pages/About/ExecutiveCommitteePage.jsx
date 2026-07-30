// // src/pages/ExecutiveCommittee/ExecutiveCommitteePage.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Users,
//   Shield,
//   Heart,
//   Target,
//   Mail,
//   Linkedin,
//   ChevronRight,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// import "./ExecutiveCommitteePage.css";

// // Executive Committee Members
// const committeeMembers = [
//   {
//     id: 1,
//     name: "Dr. Meera Sharma",
//     designation: "President",
//     photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
//     bio: "An accomplished Bharatanatyam artist and educator with over 20 years of experience in performance, teaching, and cultural advocacy across Europe and India.",
//     email: "president@kitd.de",
//     linkedin: "#",
//   },
//   {
//     id: 2,
//     name: "Rajesh Kumar Iyer",
//     designation: "Vice President",
//     photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
//     bio: "A dedicated Kathak practitioner and arts administrator committed to strengthening the Indian Classical Dance community through collaboration and innovative programming.",
//     email: "vicepresident@kitd.de",
//     linkedin: "#",
//   },
//   {
//     id: 3,
//     name: "Ananya Patel",
//     designation: "Secretary",
//     photo: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
//     bio: "An Odissi dancer and cultural researcher with expertise in documentation, event coordination, and maintaining the association's administrative framework.",
//     email: "secretary@kitd.de",
//     linkedin: "#",
//   },
//   {
//     id: 4,
//     name: "Vikram Desai",
//     designation: "Treasurer",
//     photo: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
//     bio: "A finance professional and arts enthusiast who manages the association's financial planning, membership contributions, and funding initiatives.",
//     email: "treasurer@kitd.de",
//     linkedin: "#",
//   },
//   {
//     id: 5,
//     name: "Priya Menon",
//     designation: "Committee Member",
//     photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
//     bio: "A Bharatanatyam teacher and community organizer who leads outreach initiatives and member engagement programmes across southern Germany.",
//     email: "priya.menon@kitd.de",
//     linkedin: "#",
//   },
//   {
//     id: 6,
//     name: "Arun Nair",
//     designation: "Committee Member",
//     photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
//     bio: "A cultural event manager and Kuchipudi practitioner who coordinates performances, workshops, and partnerships with cultural institutions throughout Germany.",
//     email: "arun.nair@kitd.de",
//     linkedin: "#",
//   },
// ];

// // Governance principles
// const governancePrinciples = [
//   {
//     icon: <Shield size={22} strokeWidth={1.5} />,
//     title: "Transparent Leadership",
//     description:
//       "The executive committee operates with openness and accountability, ensuring members are informed about decisions that shape the association's direction.",
//   },
//   {
//     icon: <Users size={22} strokeWidth={1.5} />,
//     title: "Community Representation",
//     description:
//       "Committee members represent the diverse voices of the Indian Classical Dance community, bringing perspectives from different dance forms, regions, and professional backgrounds.",
//   },
//   {
//     icon: <Target size={22} strokeWidth={1.5} />,
//     title: "Collaborative Decision Making",
//     description:
//       "Decisions are made through consultation and consensus-building, reflecting the collective wisdom of the committee and the broader KITD membership.",
//   },
//   {
//     icon: <Heart size={22} strokeWidth={1.5} />,
//     title: "Member Focus",
//     description:
//       "Every initiative and programme is designed with members' needs in mind, from professional development opportunities to community-building events and resources.",
//   },
// ];

// const ExecutiveCommitteePage = () => {
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
//         <title>Executive Committee | KITD - Classical Indian Dance Germany</title>
//         <meta
//           name="description"
//           content="Meet the executive committee of Klassischer Indischer Tanz Deutschland (KITD) e.V. - the leadership team guiding Indian Classical Dance across Germany."
//         />
//       </Helmet>

//       <div className="executive-page">
//         {/* ============================================ */}
//         {/* HERO SECTION */}
//         {/* ============================================ */}
//         <section className="executive-hero">
//           <div className="executive-hero-bg" />
//           <div className="executive-hero-container">
//             <div className="executive-hero-content">
//               <div className="executive-hero-eyebrow">
//                 <span className="executive-hero-eyebrow-line" />
//                 <span className="executive-hero-eyebrow-text">Leadership</span>
//               </div>
//               <h1 className="executive-hero-title">
//                 Executive
//                 <span className="executive-hero-title-accent"> Committee</span>
//               </h1>
//               <p className="executive-hero-description">
//                 The Executive Committee provides strategic direction, supports 
//                 members, promotes Indian Classical Dance, and guides the 
//                 association's activities across Germany.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* BREADCRUMB */}
//         {/* ============================================ */}
//         <div className="executive-breadcrumb">
//           <div className="executive-container">
//             <Link to="/">Home</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <Link to="/about">About</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <span>Executive Committee</span>
//           </div>
//         </div>

//         {/* ============================================ */}
//         {/* COMMITTEE GRID */}
//         {/* ============================================ */}
//         <section className="executive-committee" data-section="committee">
//           <div className="executive-container">
//             <div className={`executive-grid ${isVisible.committee ? "visible" : ""}`}>
//               {committeeMembers.map((member, index) => (
//                 <div
//                   className="executive-card"
//                   key={member.id}
//                   style={{ transitionDelay: `${index * 0.08}s` }}
//                 >
//                   {/* Photo */}
//                   <div className="executive-card-image">
//                     <img
//                       src={member.photo}
//                       alt={member.name}
//                       loading="lazy"
//                     />
//                     <div className="executive-card-overlay">
//                       <div className="executive-card-social">
//                         {member.email && (
//                           <a
//                             href={`mailto:${member.email}`}
//                             className="executive-social-link"
//                             aria-label={`Email ${member.name}`}
//                           >
//                             <Mail size={16} strokeWidth={1.5} />
//                           </a>
//                         )}
//                         {member.linkedin && (
//                           <a
//                             href={member.linkedin}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="executive-social-link"
//                             aria-label={`LinkedIn profile of ${member.name}`}
//                           >
//                             <Linkedin size={16} strokeWidth={1.5} />
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="executive-card-content">
//                     <span className="executive-card-designation">
//                       {member.designation}
//                     </span>
//                     <h3 className="executive-card-name">{member.name}</h3>
//                     <p className="executive-card-bio">{member.bio}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* GOVERNANCE SECTION */}
//         {/* ============================================ */}
//         <section className="executive-governance" data-section="governance">
//           <div className="executive-container">
//             <div className="executive-governance-header">
//               <div className="executive-governance-eyebrow">
//                 <span className="executive-governance-eyebrow-line" />
//                 <span className="executive-governance-eyebrow-text">
//                   Our Governance
//                 </span>
//               </div>
//               <h2 className="executive-governance-title">
//                 Guided by Principles of
//                 <span className="executive-governance-title-accent"> Trust & Transparency</span>
//               </h2>
//             </div>

//             <div className={`executive-governance-grid ${isVisible.governance ? "visible" : ""}`}>
//               {governancePrinciples.map((principle, index) => (
//                 <div
//                   className="executive-governance-card"
//                   key={index}
//                   style={{ transitionDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="executive-governance-icon">
//                     {principle.icon}
//                   </div>
//                   <h3 className="executive-governance-card-title">
//                     {principle.title}
//                   </h3>
//                   <p className="executive-governance-card-description">
//                     {principle.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* CTA SECTION */}
//         {/* ============================================ */}
//         <section className="executive-cta" data-section="cta">
//           <div className="executive-container">
//             <div className={`executive-cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
//               <h2 className="executive-cta-title">
//                 Connect With Our Team
//               </h2>
//               <p className="executive-cta-text">
//                 Have questions about KITD, membership, or collaboration opportunities? 
//                 We'd love to hear from you.
//               </p>
//               <Link to="/contact" className="executive-cta-btn">
//                 <span>Get in Touch</span>
//                 <ArrowRight size={18} strokeWidth={1.5} />
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ExecutiveCommitteePage;


// src/pages/ExecutiveCommittee/ExecutiveCommitteePage.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Users,
//   Shield,
//   Heart,
//   Target,
//   Mail,
//   // Replace Linkedin with ExternalLink or use react-icons
//   ExternalLink,
//   ChevronRight,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";
// // Import LinkedIn icon from react-icons
// import { FaLinkedinIn } from "react-icons/fa";

// import "./ExecutiveCommitteePage.css";

// // Executive Committee Members
// const committeeMembers = [
//   {
//     id: 1,
//     name: "Dr. Meera Sharma",
//     designation: "President",
//     photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
//     bio: "An accomplished Bharatanatyam artist and educator with over 20 years of experience in performance, teaching, and cultural advocacy across Europe and India.",
//     email: "president@kitd.de",
//     linkedin: "#",
//   },
//   {
//     id: 2,
//     name: "Rajesh Kumar Iyer",
//     designation: "Vice President",
//     photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
//     bio: "A dedicated Kathak practitioner and arts administrator committed to strengthening the Indian Classical Dance community through collaboration and innovative programming.",
//     email: "vicepresident@kitd.de",
//     linkedin: "#",
//   },
//   {
//     id: 3,
//     name: "Ananya Patel",
//     designation: "Secretary",
//     photo: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
//     bio: "An Odissi dancer and cultural researcher with expertise in documentation, event coordination, and maintaining the association's administrative framework.",
//     email: "secretary@kitd.de",
//     linkedin: "#",
//   },
//   {
//     id: 4,
//     name: "Vikram Desai",
//     designation: "Treasurer",
//     photo: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
//     bio: "A finance professional and arts enthusiast who manages the association's financial planning, membership contributions, and funding initiatives.",
//     email: "treasurer@kitd.de",
//     linkedin: "#",
//   },
//   {
//     id: 5,
//     name: "Priya Menon",
//     designation: "Committee Member",
//     photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
//     bio: "A Bharatanatyam teacher and community organizer who leads outreach initiatives and member engagement programmes across southern Germany.",
//     email: "priya.menon@kitd.de",
//     linkedin: "#",
//   },
//   {
//     id: 6,
//     name: "Arun Nair",
//     designation: "Committee Member",
//     photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
//     bio: "A cultural event manager and Kuchipudi practitioner who coordinates performances, workshops, and partnerships with cultural institutions throughout Germany.",
//     email: "arun.nair@kitd.de",
//     linkedin: "#",
//   },
// ];

// // Governance principles
// const governancePrinciples = [
//   {
//     icon: <Shield size={22} strokeWidth={1.5} />,
//     title: "Transparent Leadership",
//     description:
//       "The executive committee operates with openness and accountability, ensuring members are informed about decisions that shape the association's direction.",
//   },
//   {
//     icon: <Users size={22} strokeWidth={1.5} />,
//     title: "Community Representation",
//     description:
//       "Committee members represent the diverse voices of the Indian Classical Dance community, bringing perspectives from different dance forms, regions, and professional backgrounds.",
//   },
//   {
//     icon: <Target size={22} strokeWidth={1.5} />,
//     title: "Collaborative Decision Making",
//     description:
//       "Decisions are made through consultation and consensus-building, reflecting the collective wisdom of the committee and the broader KITD membership.",
//   },
//   {
//     icon: <Heart size={22} strokeWidth={1.5} />,
//     title: "Member Focus",
//     description:
//       "Every initiative and programme is designed with members' needs in mind, from professional development opportunities to community-building events and resources.",
//   },
// ];

// const ExecutiveCommitteePage = () => {
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
//         <title>Executive Committee | KITD - Classical Indian Dance Germany</title>
//         <meta
//           name="description"
//           content="Meet the executive committee of Klassischer Indischer Tanz Deutschland (KITD) e.V. - the leadership team guiding Indian Classical Dance across Germany."
//         />
//       </Helmet>

//       <div className="executive-page">
//         {/* ============================================ */}
//         {/* HERO SECTION */}
//         {/* ============================================ */}
//         <section className="executive-hero">
//           <div className="executive-hero-bg" />
//           <div className="executive-hero-container">
//             <div className="executive-hero-content">
//               <div className="executive-hero-eyebrow">
//                 <span className="executive-hero-eyebrow-line" />
//                 <span className="executive-hero-eyebrow-text">Leadership</span>
//               </div>
//               <h1 className="executive-hero-title">
//                 Executive
//                 <span className="executive-hero-title-accent"> Committee</span>
//               </h1>
//               <p className="executive-hero-description">
//                 The Executive Committee provides strategic direction, supports 
//                 members, promotes Indian Classical Dance, and guides the 
//                 association's activities across Germany.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* BREADCRUMB */}
//         {/* ============================================ */}
//         <div className="executive-breadcrumb">
//           <div className="executive-container">
//             <Link to="/">Home</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <Link to="/about">About</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <span>Executive Committee</span>
//           </div>
//         </div>

//         {/* ============================================ */}
//         {/* COMMITTEE GRID */}
//         {/* ============================================ */}
//         <section className="executive-committee" data-section="committee">
//           <div className="executive-container">
//             <div className={`executive-grid ${isVisible.committee ? "visible" : ""}`}>
//               {committeeMembers.map((member, index) => (
//                 <div
//                   className="executive-card"
//                   key={member.id}
//                   style={{ transitionDelay: `${index * 0.08}s` }}
//                 >
//                   {/* Photo */}
//                   <div className="executive-card-image">
//                     <img
//                       src={member.photo}
//                       alt={member.name}
//                       loading="lazy"
//                     />
//                     <div className="executive-card-overlay">
//                       <div className="executive-card-social">
//                         {member.email && (
//                           <a
//                             href={`mailto:${member.email}`}
//                             className="executive-social-link"
//                             aria-label={`Email ${member.name}`}
//                           >
//                             <Mail size={16} strokeWidth={1.5} />
//                           </a>
//                         )}
//                         {member.linkedin && (
//                           <a
//                             href={member.linkedin}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="executive-social-link"
//                             aria-label={`LinkedIn profile of ${member.name}`}
//                           >
//                             <FaLinkedinIn size={16} />
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="executive-card-content">
//                     <span className="executive-card-designation">
//                       {member.designation}
//                     </span>
//                     <h3 className="executive-card-name">{member.name}</h3>
//                     <p className="executive-card-bio">{member.bio}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* GOVERNANCE SECTION */}
//         {/* ============================================ */}
//         <section className="executive-governance" data-section="governance">
//           <div className="executive-container">
//             <div className="executive-governance-header">
//               <div className="executive-governance-eyebrow">
//                 <span className="executive-governance-eyebrow-line" />
//                 <span className="executive-governance-eyebrow-text">
//                   Our Governance
//                 </span>
//               </div>
//               <h2 className="executive-governance-title">
//                 Guided by Principles of
//                 <span className="executive-governance-title-accent"> Trust & Transparency</span>
//               </h2>
//             </div>

//             <div className={`executive-governance-grid ${isVisible.governance ? "visible" : ""}`}>
//               {governancePrinciples.map((principle, index) => (
//                 <div
//                   className="executive-governance-card"
//                   key={index}
//                   style={{ transitionDelay: `${index * 0.1}s` }}
//                 >
//                   <div className="executive-governance-icon">
//                     {principle.icon}
//                   </div>
//                   <h3 className="executive-governance-card-title">
//                     {principle.title}
//                   </h3>
//                   <p className="executive-governance-card-description">
//                     {principle.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ============================================ */}
//         {/* CTA SECTION */}
//         {/* ============================================ */}
//         <section className="executive-cta" data-section="cta">
//           <div className="executive-container">
//             <div className={`executive-cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
//               <h2 className="executive-cta-title">
//                 Connect With Our Team
//               </h2>
//               <p className="executive-cta-text">
//                 Have questions about KITD, membership, or collaboration opportunities? 
//                 We'd love to hear from you.
//               </p>
//               <Link to="/contact" className="executive-cta-btn">
//                 <span>Get in Touch</span>
//                 <ArrowRight size={18} strokeWidth={1.5} />
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ExecutiveCommitteePage;


// src/pages/ExecutiveCommittee/ExecutiveCommitteePage.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Shield,
  Heart,
  Target,
  Mail,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Award,
  Briefcase,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { FaLinkedinIn } from "react-icons/fa";

import "./ExecutiveCommitteePage.css";

// Executive Committee Members
const committeeMembers = [
  {
    id: 1,
    name: "Dr. Meera Sharma",
    designation: "President",
    photo: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
    bio: "An accomplished Bharatanatyam artist and educator with over 20 years of experience in performance, teaching, and cultural advocacy across Europe and India.",
    email: "president@kitd.de",
    linkedin: "#",
    gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(60,10,30,0.92) 100%)",
  },
  {
    id: 2,
    name: "Rajesh Kumar Iyer",
    designation: "Vice President",
    photo: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
    bio: "A dedicated Kathak practitioner and arts administrator committed to strengthening the Indian Classical Dance community through collaboration and innovative programming.",
    email: "vicepresident@kitd.de",
    linkedin: "#",
    gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(50,15,25,0.92) 100%)",
  },
  {
    id: 3,
    name: "Ananya Patel",
    designation: "Secretary",
    photo: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
    bio: "An Odissi dancer and cultural researcher with expertise in documentation, event coordination, and maintaining the association's administrative framework.",
    email: "secretary@kitd.de",
    linkedin: "#",
    gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(70,20,40,0.92) 100%)",
  },
  {
    id: 4,
    name: "Vikram Desai",
    designation: "Treasurer",
    photo: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
    bio: "A finance professional and arts enthusiast who manages the association's financial planning, membership contributions, and funding initiatives.",
    email: "treasurer@kitd.de",
    linkedin: "#",
    gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(40,10,20,0.92) 100%)",
  },
  {
    id: 5,
    name: "Priya Menon",
    designation: "Committee Member",
    photo: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
    bio: "A Bharatanatyam teacher and community organizer who leads outreach initiatives and member engagement programmes across southern Germany.",
    email: "priya.menon@kitd.de",
    linkedin: "#",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.29) 0%, rgba(60, 10, 30, 0.32) 100%)",
  },
  {
    id: 6,
    name: "Arun Nair",
    designation: "Committee Member",
    photo: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
    bio: "A cultural event manager and Kuchipudi practitioner who coordinates performances, workshops, and partnerships with cultural institutions throughout Germany.",
    email: "arun.nair@kitd.de",
    linkedin: "#",
    gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(50,15,25,0.92) 100%)",
  },
];

// Governance principles
const governancePrinciples = [
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: "Transparent Leadership",
    description:
      "The executive committee operates with openness and accountability, ensuring members are informed about decisions that shape the association's direction.",
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Community Representation",
    description:
      "Committee members represent the diverse voices of the Indian Classical Dance community, bringing perspectives from different dance forms, regions, and professional backgrounds.",
  },
  {
    icon: <Target size={22} strokeWidth={1.5} />,
    title: "Collaborative Decision Making",
    description:
      "Decisions are made through consultation and consensus-building, reflecting the collective wisdom of the committee and the broader KITD membership.",
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    title: "Member Focus",
    description:
      "Every initiative and programme is designed with members' needs in mind, from professional development opportunities to community-building events and resources.",
  },
];

const ExecutiveCommitteePage = () => {
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
        <title>Executive Committee | KITD - Classical Indian Dance Germany</title>
        <meta
          name="description"
          content="Meet the executive committee of Klassischer Indischer Tanz Deutschland (KITD) e.V. - the leadership team guiding Indian Classical Dance across Germany."
        />
      </Helmet>

      <div className="kitd-executive">

        {/* ============================================ */}
        {/* HERO SECTION - CINEMATIC */}
        {/* ============================================ */}
        <section className="kitd-executive__hero">
          <div className="kitd-executive__hero-bg">
            <img 
              src="https://images.pexels.com/photos/34322336/pexels-photo-34322336.jpeg"
              alt="KITD Executive Committee"
              loading="eager"
            />
            <div className="kitd-executive__hero-overlay" />
            <div className="kitd-executive__hero-gradient" />
          </div>
          
          <div className="kitd-executive__hero-container">
            <div className="kitd-executive__hero-content">
              <div className="kitd-executive__hero-eyebrow">
                <span className="kitd-executive__hero-eyebrow-line" />
                <span className="kitd-executive__hero-eyebrow-text">Leadership</span>
              </div>
              <h1 className="kitd-executive__hero-title">
                Executive
                <span className="kitd-executive__hero-title-accent"> Committee</span>
              </h1>
              <p className="kitd-executive__hero-description">
                The Executive Committee provides strategic direction, supports 
                members, promotes Indian Classical Dance, and guides the 
                association's activities across Germany.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* BREADCRUMB */}
        {/* ============================================ */}
        <div className="kitd-executive__breadcrumb">
          <div className="kitd-executive__container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <Link to="/about">About</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>Executive Committee</span>
          </div>
        </div>

        {/* ============================================ */}
        {/* COMMITTEE GRID */}
        {/* ============================================ */}
        <section className="kitd-executive__committee" data-section="committee">
          <div className="kitd-executive__container">
            <div className="kitd-executive__committee-header">
              <div className="kitd-executive__committee-eyebrow">
                <span className="kitd-executive__committee-eyebrow-line" />
                <span className="kitd-executive__committee-eyebrow-text">Our Leaders</span>
              </div>
              <h2 className="kitd-executive__committee-title">
                Meet the Team
                <span className="kitd-executive__committee-title-accent"> Behind KITD</span>
              </h2>
            </div>

            <div className={`kitd-executive__grid ${isVisible.committee ? "visible" : ""}`}>
              {committeeMembers.map((member, index) => (
                <div
                  className={`kitd-executive__card ${hoveredCard === member.id ? 'kitd-executive__card--hovered' : ''}`}
                  key={member.id}
                  style={{ transitionDelay: `${index * 0.08}s` }}
                  onMouseEnter={() => setHoveredCard(member.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image with Overlay */}
                  <div className="kitd-executive__card-image">
                    <img
                      src={member.photo}
                      alt={member.name}
                      loading="lazy"
                    />
                    <div 
                      className="kitd-executive__card-overlay"
                      style={{ background: member.gradient }}
                    />
                    
                    {/* Designation Badge */}
                    <div className="kitd-executive__card-badge">
                      <Briefcase size={12} strokeWidth={1.5} />
                      <span>{member.designation}</span>
                    </div>

                    {/* Social Links */}
                    <div className="kitd-executive__card-social">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="kitd-executive__social-link"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail size={15} strokeWidth={1.5} />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="kitd-executive__social-link"
                          aria-label={`LinkedIn profile of ${member.name}`}
                        >
                          <FaLinkedinIn size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="kitd-executive__card-content">
                    <h3 className="kitd-executive__card-name">{member.name}</h3>
                    <span className="kitd-executive__card-designation">
                      {member.designation}
                    </span>
                    <p className="kitd-executive__card-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* GOVERNANCE SECTION */}
        {/* ============================================ */}
        <section className="kitd-executive__governance" data-section="governance">
          <div className="kitd-executive__container">
            <div className="kitd-executive__governance-header">
              <div className="kitd-executive__governance-eyebrow">
                <span className="kitd-executive__governance-eyebrow-line" />
                <span className="kitd-executive__governance-eyebrow-text">
                  Our Governance
                </span>
              </div>
              <h2 className="kitd-executive__governance-title">
                Guided by Principles of
                <span className="kitd-executive__governance-title-accent"> Trust &amp; Transparency</span>
              </h2>
            </div>

            <div className={`kitd-executive__governance-grid ${isVisible.governance ? "visible" : ""}`}>
              {governancePrinciples.map((principle, index) => (
                <div
                  className="kitd-executive__governance-card"
                  key={index}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="kitd-executive__governance-icon">
                    {principle.icon}
                  </div>
                  <h3 className="kitd-executive__governance-card-title">
                    {principle.title}
                  </h3>
                  <p className="kitd-executive__governance-card-desc">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CTA SECTION */}
        {/* ============================================ */}
        <section className="kitd-executive__cta" data-section="cta">
          <div className="kitd-executive__cta-bg">
            <img 
              src="https://images.pexels.com/photos/34322336/pexels-photo-34322336.jpeg"
              alt="KITD Community"
              loading="lazy"
            />
            <div className="kitd-executive__cta-overlay" />
          </div>
          
          <div className="kitd-executive__container">
            <div className={`kitd-executive__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
              <h2 className="kitd-executive__cta-title">
                Connect With Our Team
              </h2>
              <p className="kitd-executive__cta-text">
                Have questions about KITD, membership, or collaboration opportunities? 
                We'd love to hear from you.
              </p>
              <Link to="/contact" className="kitd-executive__cta-btn">
                <span>Get in Touch</span>
                <ArrowRight size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExecutiveCommitteePage;