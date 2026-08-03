// // // // // src/pages/ExecutiveCommittee/ExecutiveCommitteePage.jsx

// // // // import { useState, useEffect } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import {
// // // //   ArrowRight,
// // // //   Users,
// // // //   Shield,
// // // //   Heart,
// // // //   Target,
// // // //   Mail,
// // // //   Linkedin,
// // // //   ChevronRight,
// // // // } from "lucide-react";
// // // // import { Helmet } from "react-helmet-async";

// // // // import "./ExecutiveCommitteePage.css";

// // // // // Executive Committee Members
// // // // const committeeMembers = [
// // // //   {
// // // //     id: 1,
// // // //     name: "Dr. Meera Sharma",
// // // //     designation: "President",
// // // //     photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // // //     bio: "An accomplished Bharatanatyam artist and educator with over 20 years of experience in performance, teaching, and cultural advocacy across Europe and India.",
// // // //     email: "president@kitd.de",
// // // //     linkedin: "#",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: "Rajesh Kumar Iyer",
// // // //     designation: "Vice President",
// // // //     photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // // //     bio: "A dedicated Kathak practitioner and arts administrator committed to strengthening the Indian Classical Dance community through collaboration and innovative programming.",
// // // //     email: "vicepresident@kitd.de",
// // // //     linkedin: "#",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: "Ananya Patel",
// // // //     designation: "Secretary",
// // // //     photo: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // // //     bio: "An Odissi dancer and cultural researcher with expertise in documentation, event coordination, and maintaining the association's administrative framework.",
// // // //     email: "secretary@kitd.de",
// // // //     linkedin: "#",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     name: "Vikram Desai",
// // // //     designation: "Treasurer",
// // // //     photo: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // // //     bio: "A finance professional and arts enthusiast who manages the association's financial planning, membership contributions, and funding initiatives.",
// // // //     email: "treasurer@kitd.de",
// // // //     linkedin: "#",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     name: "Priya Menon",
// // // //     designation: "Committee Member",
// // // //     photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // // //     bio: "A Bharatanatyam teacher and community organizer who leads outreach initiatives and member engagement programmes across southern Germany.",
// // // //     email: "priya.menon@kitd.de",
// // // //     linkedin: "#",
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     name: "Arun Nair",
// // // //     designation: "Committee Member",
// // // //     photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // // //     bio: "A cultural event manager and Kuchipudi practitioner who coordinates performances, workshops, and partnerships with cultural institutions throughout Germany.",
// // // //     email: "arun.nair@kitd.de",
// // // //     linkedin: "#",
// // // //   },
// // // // ];

// // // // // Governance principles
// // // // const governancePrinciples = [
// // // //   {
// // // //     icon: <Shield size={22} strokeWidth={1.5} />,
// // // //     title: "Transparent Leadership",
// // // //     description:
// // // //       "The executive committee operates with openness and accountability, ensuring members are informed about decisions that shape the association's direction.",
// // // //   },
// // // //   {
// // // //     icon: <Users size={22} strokeWidth={1.5} />,
// // // //     title: "Community Representation",
// // // //     description:
// // // //       "Committee members represent the diverse voices of the Indian Classical Dance community, bringing perspectives from different dance forms, regions, and professional backgrounds.",
// // // //   },
// // // //   {
// // // //     icon: <Target size={22} strokeWidth={1.5} />,
// // // //     title: "Collaborative Decision Making",
// // // //     description:
// // // //       "Decisions are made through consultation and consensus-building, reflecting the collective wisdom of the committee and the broader KITD membership.",
// // // //   },
// // // //   {
// // // //     icon: <Heart size={22} strokeWidth={1.5} />,
// // // //     title: "Member Focus",
// // // //     description:
// // // //       "Every initiative and programme is designed with members' needs in mind, from professional development opportunities to community-building events and resources.",
// // // //   },
// // // // ];

// // // // const ExecutiveCommitteePage = () => {
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
// // // //         <title>Executive Committee | KITD - Classical Indian Dance Germany</title>
// // // //         <meta
// // // //           name="description"
// // // //           content="Meet the executive committee of Klassischer Indischer Tanz Deutschland (KITD) e.V. - the leadership team guiding Indian Classical Dance across Germany."
// // // //         />
// // // //       </Helmet>

// // // //       <div className="executive-page">
// // // //         {/* ============================================ */}
// // // //         {/* HERO SECTION */}
// // // //         {/* ============================================ */}
// // // //         <section className="executive-hero">
// // // //           <div className="executive-hero-bg" />
// // // //           <div className="executive-hero-container">
// // // //             <div className="executive-hero-content">
// // // //               <div className="executive-hero-eyebrow">
// // // //                 <span className="executive-hero-eyebrow-line" />
// // // //                 <span className="executive-hero-eyebrow-text">Leadership</span>
// // // //               </div>
// // // //               <h1 className="executive-hero-title">
// // // //                 Executive
// // // //                 <span className="executive-hero-title-accent"> Committee</span>
// // // //               </h1>
// // // //               <p className="executive-hero-description">
// // // //                 The Executive Committee provides strategic direction, supports 
// // // //                 members, promotes Indian Classical Dance, and guides the 
// // // //                 association's activities across Germany.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* BREADCRUMB */}
// // // //         {/* ============================================ */}
// // // //         <div className="executive-breadcrumb">
// // // //           <div className="executive-container">
// // // //             <Link to="/">Home</Link>
// // // //             <ChevronRight size={14} strokeWidth={1.5} />
// // // //             <Link to="/about">About</Link>
// // // //             <ChevronRight size={14} strokeWidth={1.5} />
// // // //             <span>Executive Committee</span>
// // // //           </div>
// // // //         </div>

// // // //         {/* ============================================ */}
// // // //         {/* COMMITTEE GRID */}
// // // //         {/* ============================================ */}
// // // //         <section className="executive-committee" data-section="committee">
// // // //           <div className="executive-container">
// // // //             <div className={`executive-grid ${isVisible.committee ? "visible" : ""}`}>
// // // //               {committeeMembers.map((member, index) => (
// // // //                 <div
// // // //                   className="executive-card"
// // // //                   key={member.id}
// // // //                   style={{ transitionDelay: `${index * 0.08}s` }}
// // // //                 >
// // // //                   {/* Photo */}
// // // //                   <div className="executive-card-image">
// // // //                     <img
// // // //                       src={member.photo}
// // // //                       alt={member.name}
// // // //                       loading="lazy"
// // // //                     />
// // // //                     <div className="executive-card-overlay">
// // // //                       <div className="executive-card-social">
// // // //                         {member.email && (
// // // //                           <a
// // // //                             href={`mailto:${member.email}`}
// // // //                             className="executive-social-link"
// // // //                             aria-label={`Email ${member.name}`}
// // // //                           >
// // // //                             <Mail size={16} strokeWidth={1.5} />
// // // //                           </a>
// // // //                         )}
// // // //                         {member.linkedin && (
// // // //                           <a
// // // //                             href={member.linkedin}
// // // //                             target="_blank"
// // // //                             rel="noopener noreferrer"
// // // //                             className="executive-social-link"
// // // //                             aria-label={`LinkedIn profile of ${member.name}`}
// // // //                           >
// // // //                             <Linkedin size={16} strokeWidth={1.5} />
// // // //                           </a>
// // // //                         )}
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* Content */}
// // // //                   <div className="executive-card-content">
// // // //                     <span className="executive-card-designation">
// // // //                       {member.designation}
// // // //                     </span>
// // // //                     <h3 className="executive-card-name">{member.name}</h3>
// // // //                     <p className="executive-card-bio">{member.bio}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* GOVERNANCE SECTION */}
// // // //         {/* ============================================ */}
// // // //         <section className="executive-governance" data-section="governance">
// // // //           <div className="executive-container">
// // // //             <div className="executive-governance-header">
// // // //               <div className="executive-governance-eyebrow">
// // // //                 <span className="executive-governance-eyebrow-line" />
// // // //                 <span className="executive-governance-eyebrow-text">
// // // //                   Our Governance
// // // //                 </span>
// // // //               </div>
// // // //               <h2 className="executive-governance-title">
// // // //                 Guided by Principles of
// // // //                 <span className="executive-governance-title-accent"> Trust & Transparency</span>
// // // //               </h2>
// // // //             </div>

// // // //             <div className={`executive-governance-grid ${isVisible.governance ? "visible" : ""}`}>
// // // //               {governancePrinciples.map((principle, index) => (
// // // //                 <div
// // // //                   className="executive-governance-card"
// // // //                   key={index}
// // // //                   style={{ transitionDelay: `${index * 0.1}s` }}
// // // //                 >
// // // //                   <div className="executive-governance-icon">
// // // //                     {principle.icon}
// // // //                   </div>
// // // //                   <h3 className="executive-governance-card-title">
// // // //                     {principle.title}
// // // //                   </h3>
// // // //                   <p className="executive-governance-card-description">
// // // //                     {principle.description}
// // // //                   </p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* CTA SECTION */}
// // // //         {/* ============================================ */}
// // // //         <section className="executive-cta" data-section="cta">
// // // //           <div className="executive-container">
// // // //             <div className={`executive-cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
// // // //               <h2 className="executive-cta-title">
// // // //                 Connect With Our Team
// // // //               </h2>
// // // //               <p className="executive-cta-text">
// // // //                 Have questions about KITD, membership, or collaboration opportunities? 
// // // //                 We'd love to hear from you.
// // // //               </p>
// // // //               <Link to="/contact" className="executive-cta-btn">
// // // //                 <span>Get in Touch</span>
// // // //                 <ArrowRight size={18} strokeWidth={1.5} />
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default ExecutiveCommitteePage;


// // // // src/pages/ExecutiveCommittee/ExecutiveCommitteePage.jsx

// // // // import { useState, useEffect } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import {
// // // //   ArrowRight,
// // // //   Users,
// // // //   Shield,
// // // //   Heart,
// // // //   Target,
// // // //   Mail,
// // // //   // Replace Linkedin with ExternalLink or use react-icons
// // // //   ExternalLink,
// // // //   ChevronRight,
// // // // } from "lucide-react";
// // // // import { Helmet } from "react-helmet-async";
// // // // // Import LinkedIn icon from react-icons
// // // // import { FaLinkedinIn } from "react-icons/fa";

// // // // import "./ExecutiveCommitteePage.css";

// // // // // Executive Committee Members
// // // // const committeeMembers = [
// // // //   {
// // // //     id: 1,
// // // //     name: "Dr. Meera Sharma",
// // // //     designation: "President",
// // // //     photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // // //     bio: "An accomplished Bharatanatyam artist and educator with over 20 years of experience in performance, teaching, and cultural advocacy across Europe and India.",
// // // //     email: "president@kitd.de",
// // // //     linkedin: "#",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: "Rajesh Kumar Iyer",
// // // //     designation: "Vice President",
// // // //     photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // // //     bio: "A dedicated Kathak practitioner and arts administrator committed to strengthening the Indian Classical Dance community through collaboration and innovative programming.",
// // // //     email: "vicepresident@kitd.de",
// // // //     linkedin: "#",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: "Ananya Patel",
// // // //     designation: "Secretary",
// // // //     photo: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // // //     bio: "An Odissi dancer and cultural researcher with expertise in documentation, event coordination, and maintaining the association's administrative framework.",
// // // //     email: "secretary@kitd.de",
// // // //     linkedin: "#",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     name: "Vikram Desai",
// // // //     designation: "Treasurer",
// // // //     photo: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // // //     bio: "A finance professional and arts enthusiast who manages the association's financial planning, membership contributions, and funding initiatives.",
// // // //     email: "treasurer@kitd.de",
// // // //     linkedin: "#",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     name: "Priya Menon",
// // // //     designation: "Committee Member",
// // // //     photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // // //     bio: "A Bharatanatyam teacher and community organizer who leads outreach initiatives and member engagement programmes across southern Germany.",
// // // //     email: "priya.menon@kitd.de",
// // // //     linkedin: "#",
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     name: "Arun Nair",
// // // //     designation: "Committee Member",
// // // //     photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // // //     bio: "A cultural event manager and Kuchipudi practitioner who coordinates performances, workshops, and partnerships with cultural institutions throughout Germany.",
// // // //     email: "arun.nair@kitd.de",
// // // //     linkedin: "#",
// // // //   },
// // // // ];

// // // // // Governance principles
// // // // const governancePrinciples = [
// // // //   {
// // // //     icon: <Shield size={22} strokeWidth={1.5} />,
// // // //     title: "Transparent Leadership",
// // // //     description:
// // // //       "The executive committee operates with openness and accountability, ensuring members are informed about decisions that shape the association's direction.",
// // // //   },
// // // //   {
// // // //     icon: <Users size={22} strokeWidth={1.5} />,
// // // //     title: "Community Representation",
// // // //     description:
// // // //       "Committee members represent the diverse voices of the Indian Classical Dance community, bringing perspectives from different dance forms, regions, and professional backgrounds.",
// // // //   },
// // // //   {
// // // //     icon: <Target size={22} strokeWidth={1.5} />,
// // // //     title: "Collaborative Decision Making",
// // // //     description:
// // // //       "Decisions are made through consultation and consensus-building, reflecting the collective wisdom of the committee and the broader KITD membership.",
// // // //   },
// // // //   {
// // // //     icon: <Heart size={22} strokeWidth={1.5} />,
// // // //     title: "Member Focus",
// // // //     description:
// // // //       "Every initiative and programme is designed with members' needs in mind, from professional development opportunities to community-building events and resources.",
// // // //   },
// // // // ];

// // // // const ExecutiveCommitteePage = () => {
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
// // // //         <title>Executive Committee | KITD - Classical Indian Dance Germany</title>
// // // //         <meta
// // // //           name="description"
// // // //           content="Meet the executive committee of Klassischer Indischer Tanz Deutschland (KITD) e.V. - the leadership team guiding Indian Classical Dance across Germany."
// // // //         />
// // // //       </Helmet>

// // // //       <div className="executive-page">
// // // //         {/* ============================================ */}
// // // //         {/* HERO SECTION */}
// // // //         {/* ============================================ */}
// // // //         <section className="executive-hero">
// // // //           <div className="executive-hero-bg" />
// // // //           <div className="executive-hero-container">
// // // //             <div className="executive-hero-content">
// // // //               <div className="executive-hero-eyebrow">
// // // //                 <span className="executive-hero-eyebrow-line" />
// // // //                 <span className="executive-hero-eyebrow-text">Leadership</span>
// // // //               </div>
// // // //               <h1 className="executive-hero-title">
// // // //                 Executive
// // // //                 <span className="executive-hero-title-accent"> Committee</span>
// // // //               </h1>
// // // //               <p className="executive-hero-description">
// // // //                 The Executive Committee provides strategic direction, supports 
// // // //                 members, promotes Indian Classical Dance, and guides the 
// // // //                 association's activities across Germany.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* BREADCRUMB */}
// // // //         {/* ============================================ */}
// // // //         <div className="executive-breadcrumb">
// // // //           <div className="executive-container">
// // // //             <Link to="/">Home</Link>
// // // //             <ChevronRight size={14} strokeWidth={1.5} />
// // // //             <Link to="/about">About</Link>
// // // //             <ChevronRight size={14} strokeWidth={1.5} />
// // // //             <span>Executive Committee</span>
// // // //           </div>
// // // //         </div>

// // // //         {/* ============================================ */}
// // // //         {/* COMMITTEE GRID */}
// // // //         {/* ============================================ */}
// // // //         <section className="executive-committee" data-section="committee">
// // // //           <div className="executive-container">
// // // //             <div className={`executive-grid ${isVisible.committee ? "visible" : ""}`}>
// // // //               {committeeMembers.map((member, index) => (
// // // //                 <div
// // // //                   className="executive-card"
// // // //                   key={member.id}
// // // //                   style={{ transitionDelay: `${index * 0.08}s` }}
// // // //                 >
// // // //                   {/* Photo */}
// // // //                   <div className="executive-card-image">
// // // //                     <img
// // // //                       src={member.photo}
// // // //                       alt={member.name}
// // // //                       loading="lazy"
// // // //                     />
// // // //                     <div className="executive-card-overlay">
// // // //                       <div className="executive-card-social">
// // // //                         {member.email && (
// // // //                           <a
// // // //                             href={`mailto:${member.email}`}
// // // //                             className="executive-social-link"
// // // //                             aria-label={`Email ${member.name}`}
// // // //                           >
// // // //                             <Mail size={16} strokeWidth={1.5} />
// // // //                           </a>
// // // //                         )}
// // // //                         {member.linkedin && (
// // // //                           <a
// // // //                             href={member.linkedin}
// // // //                             target="_blank"
// // // //                             rel="noopener noreferrer"
// // // //                             className="executive-social-link"
// // // //                             aria-label={`LinkedIn profile of ${member.name}`}
// // // //                           >
// // // //                             <FaLinkedinIn size={16} />
// // // //                           </a>
// // // //                         )}
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* Content */}
// // // //                   <div className="executive-card-content">
// // // //                     <span className="executive-card-designation">
// // // //                       {member.designation}
// // // //                     </span>
// // // //                     <h3 className="executive-card-name">{member.name}</h3>
// // // //                     <p className="executive-card-bio">{member.bio}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* GOVERNANCE SECTION */}
// // // //         {/* ============================================ */}
// // // //         <section className="executive-governance" data-section="governance">
// // // //           <div className="executive-container">
// // // //             <div className="executive-governance-header">
// // // //               <div className="executive-governance-eyebrow">
// // // //                 <span className="executive-governance-eyebrow-line" />
// // // //                 <span className="executive-governance-eyebrow-text">
// // // //                   Our Governance
// // // //                 </span>
// // // //               </div>
// // // //               <h2 className="executive-governance-title">
// // // //                 Guided by Principles of
// // // //                 <span className="executive-governance-title-accent"> Trust & Transparency</span>
// // // //               </h2>
// // // //             </div>

// // // //             <div className={`executive-governance-grid ${isVisible.governance ? "visible" : ""}`}>
// // // //               {governancePrinciples.map((principle, index) => (
// // // //                 <div
// // // //                   className="executive-governance-card"
// // // //                   key={index}
// // // //                   style={{ transitionDelay: `${index * 0.1}s` }}
// // // //                 >
// // // //                   <div className="executive-governance-icon">
// // // //                     {principle.icon}
// // // //                   </div>
// // // //                   <h3 className="executive-governance-card-title">
// // // //                     {principle.title}
// // // //                   </h3>
// // // //                   <p className="executive-governance-card-description">
// // // //                     {principle.description}
// // // //                   </p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* CTA SECTION */}
// // // //         {/* ============================================ */}
// // // //         <section className="executive-cta" data-section="cta">
// // // //           <div className="executive-container">
// // // //             <div className={`executive-cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
// // // //               <h2 className="executive-cta-title">
// // // //                 Connect With Our Team
// // // //               </h2>
// // // //               <p className="executive-cta-text">
// // // //                 Have questions about KITD, membership, or collaboration opportunities? 
// // // //                 We'd love to hear from you.
// // // //               </p>
// // // //               <Link to="/contact" className="executive-cta-btn">
// // // //                 <span>Get in Touch</span>
// // // //                 <ArrowRight size={18} strokeWidth={1.5} />
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default ExecutiveCommitteePage;


// // // // src/pages/ExecutiveCommittee/ExecutiveCommitteePage.jsx

// // // // import { useState, useEffect } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import {
// // // //   ArrowRight,
// // // //   Users,
// // // //   Shield,
// // // //   Heart,
// // // //   Target,
// // // //   Mail,
// // // //   ExternalLink,
// // // //   ChevronRight,
// // // //   Sparkles,
// // // //   Award,
// // // //   Briefcase,
// // // // } from "lucide-react";
// // // // import { Helmet } from "react-helmet-async";
// // // // import { FaLinkedinIn } from "react-icons/fa";

// // // // import "./ExecutiveCommitteePage.css";

// // // // // Executive Committee Members
// // // // const committeeMembers = [
// // // //   {
// // // //     id: 1,
// // // //     name: "Dr. Meera Sharma",
// // // //     designation: "President",
// // // //     photo: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
// // // //     bio: "An accomplished Bharatanatyam artist and educator with over 20 years of experience in performance, teaching, and cultural advocacy across Europe and India.",
// // // //     email: "president@kitd.de",
// // // //     linkedin: "#",
// // // //     gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(60,10,30,0.92) 100%)",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: "Rajesh Kumar Iyer",
// // // //     designation: "Vice President",
// // // //     photo: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
// // // //     bio: "A dedicated Kathak practitioner and arts administrator committed to strengthening the Indian Classical Dance community through collaboration and innovative programming.",
// // // //     email: "vicepresident@kitd.de",
// // // //     linkedin: "#",
// // // //     gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(50,15,25,0.92) 100%)",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: "Ananya Patel",
// // // //     designation: "Secretary",
// // // //     photo: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
// // // //     bio: "An Odissi dancer and cultural researcher with expertise in documentation, event coordination, and maintaining the association's administrative framework.",
// // // //     email: "secretary@kitd.de",
// // // //     linkedin: "#",
// // // //     gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(70,20,40,0.92) 100%)",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     name: "Vikram Desai",
// // // //     designation: "Treasurer",
// // // //     photo: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
// // // //     bio: "A finance professional and arts enthusiast who manages the association's financial planning, membership contributions, and funding initiatives.",
// // // //     email: "treasurer@kitd.de",
// // // //     linkedin: "#",
// // // //     gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(40,10,20,0.92) 100%)",
// // // //   },
// // // //   {
// // // //     id: 5,
// // // //     name: "Priya Menon",
// // // //     designation: "Committee Member",
// // // //     photo: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
// // // //     bio: "A Bharatanatyam teacher and community organizer who leads outreach initiatives and member engagement programmes across southern Germany.",
// // // //     email: "priya.menon@kitd.de",
// // // //     linkedin: "#",
// // // //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.29) 0%, rgba(60, 10, 30, 0.32) 100%)",
// // // //   },
// // // //   {
// // // //     id: 6,
// // // //     name: "Arun Nair",
// // // //     designation: "Committee Member",
// // // //     photo: "https://images.pexels.com/photos/20134506/pexels-photo-20134506.jpeg",
// // // //     bio: "A cultural event manager and Kuchipudi practitioner who coordinates performances, workshops, and partnerships with cultural institutions throughout Germany.",
// // // //     email: "arun.nair@kitd.de",
// // // //     linkedin: "#",
// // // //     gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(50,15,25,0.92) 100%)",
// // // //   },
// // // // ];

// // // // // Governance principles
// // // // const governancePrinciples = [
// // // //   {
// // // //     icon: <Shield size={22} strokeWidth={1.5} />,
// // // //     title: "Transparent Leadership",
// // // //     description:
// // // //       "The executive committee operates with openness and accountability, ensuring members are informed about decisions that shape the association's direction.",
// // // //   },
// // // //   {
// // // //     icon: <Users size={22} strokeWidth={1.5} />,
// // // //     title: "Community Representation",
// // // //     description:
// // // //       "Committee members represent the diverse voices of the Indian Classical Dance community, bringing perspectives from different dance forms, regions, and professional backgrounds.",
// // // //   },
// // // //   {
// // // //     icon: <Target size={22} strokeWidth={1.5} />,
// // // //     title: "Collaborative Decision Making",
// // // //     description:
// // // //       "Decisions are made through consultation and consensus-building, reflecting the collective wisdom of the committee and the broader KITD membership.",
// // // //   },
// // // //   {
// // // //     icon: <Heart size={22} strokeWidth={1.5} />,
// // // //     title: "Member Focus",
// // // //     description:
// // // //       "Every initiative and programme is designed with members' needs in mind, from professional development opportunities to community-building events and resources.",
// // // //   },
// // // // ];

// // // // const ExecutiveCommitteePage = () => {
// // // //   const [isVisible, setIsVisible] = useState({});
// // // //   const [hoveredCard, setHoveredCard] = useState(null);

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
// // // //         <title>Executive Committee | KITD - Classical Indian Dance Germany</title>
// // // //         <meta
// // // //           name="description"
// // // //           content="Meet the executive committee of Klassischer Indischer Tanz Deutschland (KITD) e.V. - the leadership team guiding Indian Classical Dance across Germany."
// // // //         />
// // // //       </Helmet>

// // // //       <div className="kitd-executive">

// // // //         {/* ============================================ */}
// // // //         {/* HERO SECTION - CINEMATIC */}
// // // //         {/* ============================================ */}
// // // //         <section className="kitd-executive__hero">
// // // //           <div className="kitd-executive__hero-bg">
// // // //             <img 
// // // //               src="https://images.pexels.com/photos/34322336/pexels-photo-34322336.jpeg"
// // // //               alt="KITD Executive Committee"
// // // //               loading="eager"
// // // //             />
// // // //             <div className="kitd-executive__hero-overlay" />
// // // //             <div className="kitd-executive__hero-gradient" />
// // // //           </div>
          
// // // //           <div className="kitd-executive__hero-container">
// // // //             <div className="kitd-executive__hero-content">
// // // //               <div className="kitd-executive__hero-eyebrow">
// // // //                 <span className="kitd-executive__hero-eyebrow-line" />
// // // //                 <span className="kitd-executive__hero-eyebrow-text">Leadership</span>
// // // //               </div>
// // // //               <h1 className="kitd-executive__hero-title">
// // // //                 Executive
// // // //                 <span className="kitd-executive__hero-title-accent"> Committee</span>
// // // //               </h1>
// // // //               <p className="kitd-executive__hero-description">
// // // //                 The Executive Committee provides strategic direction, supports 
// // // //                 members, promotes Indian Classical Dance, and guides the 
// // // //                 association's activities across Germany.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* BREADCRUMB */}
// // // //         {/* ============================================ */}
// // // //         <div className="kitd-executive__breadcrumb">
// // // //           <div className="kitd-executive__container">
// // // //             <Link to="/">Home</Link>
// // // //             <ChevronRight size={14} strokeWidth={1.5} />
// // // //             <Link to="/about">About</Link>
// // // //             <ChevronRight size={14} strokeWidth={1.5} />
// // // //             <span>Executive Committee</span>
// // // //           </div>
// // // //         </div>

// // // //         {/* ============================================ */}
// // // //         {/* COMMITTEE GRID */}
// // // //         {/* ============================================ */}
// // // //         <section className="kitd-executive__committee" data-section="committee">
// // // //           <div className="kitd-executive__container">
// // // //             <div className="kitd-executive__committee-header">
// // // //               <div className="kitd-executive__committee-eyebrow">
// // // //                 <span className="kitd-executive__committee-eyebrow-line" />
// // // //                 <span className="kitd-executive__committee-eyebrow-text">Our Leaders</span>
// // // //               </div>
// // // //               <h2 className="kitd-executive__committee-title">
// // // //                 Meet the Team
// // // //                 <span className="kitd-executive__committee-title-accent"> Behind KITD</span>
// // // //               </h2>
// // // //             </div>

// // // //             <div className={`kitd-executive__grid ${isVisible.committee ? "visible" : ""}`}>
// // // //               {committeeMembers.map((member, index) => (
// // // //                 <div
// // // //                   className={`kitd-executive__card ${hoveredCard === member.id ? 'kitd-executive__card--hovered' : ''}`}
// // // //                   key={member.id}
// // // //                   style={{ transitionDelay: `${index * 0.08}s` }}
// // // //                   onMouseEnter={() => setHoveredCard(member.id)}
// // // //                   onMouseLeave={() => setHoveredCard(null)}
// // // //                 >
// // // //                   {/* Image with Overlay */}
// // // //                   <div className="kitd-executive__card-image">
// // // //                     <img
// // // //                       src={member.photo}
// // // //                       alt={member.name}
// // // //                       loading="lazy"
// // // //                     />
// // // //                     <div 
// // // //                       className="kitd-executive__card-overlay"
// // // //                       style={{ background: member.gradient }}
// // // //                     />
                    
// // // //                     {/* Designation Badge */}
// // // //                     <div className="kitd-executive__card-badge">
// // // //                       <Briefcase size={12} strokeWidth={1.5} />
// // // //                       <span>{member.designation}</span>
// // // //                     </div>

// // // //                     {/* Social Links */}
// // // //                     <div className="kitd-executive__card-social">
// // // //                       {member.email && (
// // // //                         <a
// // // //                           href={`mailto:${member.email}`}
// // // //                           className="kitd-executive__social-link"
// // // //                           aria-label={`Email ${member.name}`}
// // // //                         >
// // // //                           <Mail size={15} strokeWidth={1.5} />
// // // //                         </a>
// // // //                       )}
// // // //                       {member.linkedin && (
// // // //                         <a
// // // //                           href={member.linkedin}
// // // //                           target="_blank"
// // // //                           rel="noopener noreferrer"
// // // //                           className="kitd-executive__social-link"
// // // //                           aria-label={`LinkedIn profile of ${member.name}`}
// // // //                         >
// // // //                           <FaLinkedinIn size={14} />
// // // //                         </a>
// // // //                       )}
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* Content */}
// // // //                   <div className="kitd-executive__card-content">
// // // //                     <h3 className="kitd-executive__card-name">{member.name}</h3>
// // // //                     <span className="kitd-executive__card-designation">
// // // //                       {member.designation}
// // // //                     </span>
// // // //                     <p className="kitd-executive__card-bio">{member.bio}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* GOVERNANCE SECTION */}
// // // //         {/* ============================================ */}
// // // //         <section className="kitd-executive__governance" data-section="governance">
// // // //           <div className="kitd-executive__container">
// // // //             <div className="kitd-executive__governance-header">
// // // //               <div className="kitd-executive__governance-eyebrow">
// // // //                 <span className="kitd-executive__governance-eyebrow-line" />
// // // //                 <span className="kitd-executive__governance-eyebrow-text">
// // // //                   Our Governance
// // // //                 </span>
// // // //               </div>
// // // //               <h2 className="kitd-executive__governance-title">
// // // //                 Guided by Principles of
// // // //                 <span className="kitd-executive__governance-title-accent"> Trust &amp; Transparency</span>
// // // //               </h2>
// // // //             </div>

// // // //             <div className={`kitd-executive__governance-grid ${isVisible.governance ? "visible" : ""}`}>
// // // //               {governancePrinciples.map((principle, index) => (
// // // //                 <div
// // // //                   className="kitd-executive__governance-card"
// // // //                   key={index}
// // // //                   style={{ transitionDelay: `${index * 0.1}s` }}
// // // //                 >
// // // //                   <div className="kitd-executive__governance-icon">
// // // //                     {principle.icon}
// // // //                   </div>
// // // //                   <h3 className="kitd-executive__governance-card-title">
// // // //                     {principle.title}
// // // //                   </h3>
// // // //                   <p className="kitd-executive__governance-card-desc">
// // // //                     {principle.description}
// // // //                   </p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ============================================ */}
// // // //         {/* CTA SECTION */}
// // // //         {/* ============================================ */}
// // // //         <section className="kitd-executive__cta" data-section="cta">
// // // //           <div className="kitd-executive__cta-bg">
// // // //             <img 
// // // //               src="https://images.pexels.com/photos/34322336/pexels-photo-34322336.jpeg"
// // // //               alt="KITD Community"
// // // //               loading="lazy"
// // // //             />
// // // //             <div className="kitd-executive__cta-overlay" />
// // // //           </div>
          
// // // //           <div className="kitd-executive__container">
// // // //             <div className={`kitd-executive__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
// // // //               <h2 className="kitd-executive__cta-title">
// // // //                 Connect With Our Team
// // // //               </h2>
// // // //               <p className="kitd-executive__cta-text">
// // // //                 Have questions about KITD, membership, or collaboration opportunities? 
// // // //                 We'd love to hear from you.
// // // //               </p>
// // // //               <Link to="/contact" className="kitd-executive__cta-btn">
// // // //                 <span>Get in Touch</span>
// // // //                 <ArrowRight size={18} strokeWidth={1.5} />
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default ExecutiveCommitteePage;
















// // // // import { useState, useEffect } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import {
// // // //   ArrowRight,
// // // //   Users,
// // // //   Shield,
// // // //   Heart,
// // // //   Target,
// // // //   Mail,
// // // //   ExternalLink,
// // // //   ChevronRight,
// // // //   Briefcase,
// // // //   Building2,
// // // //   User,
// // // // } from "lucide-react";
// // // // import { Helmet } from "react-helmet-async";
// // // // import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

// // // // import { getPublicTeam } from "../../api/team.api"; // Adjust path as needed

// // // // import "./ExecutiveCommitteePage.css";

// // // // // Governance principles (static)
// // // // const governancePrinciples = [
// // // //   {
// // // //     icon: <Shield size={22} strokeWidth={1.5} />,
// // // //     title: "Transparent Leadership",
// // // //     description: "The executive committee operates with openness and accountability, ensuring members are informed about decisions that shape the association's direction.",
// // // //   },
// // // //   {
// // // //     icon: <Users size={22} strokeWidth={1.5} />,
// // // //     title: "Community Representation",
// // // //     description: "Committee members represent the diverse voices of the Indian Classical Dance community, bringing perspectives from different dance forms, regions, and professional backgrounds.",
// // // //   },
// // // //   {
// // // //     icon: <Target size={22} strokeWidth={1.5} />,
// // // //     title: "Collaborative Decision Making",
// // // //     description: "Decisions are made through consultation and consensus-building, reflecting the collective wisdom of the committee and the broader KITD membership.",
// // // //   },
// // // //   {
// // // //     icon: <Heart size={22} strokeWidth={1.5} />,
// // // //     title: "Member Focus",
// // // //     description: "Every initiative and programme is designed with members' needs in mind, from professional development opportunities to community-building events and resources.",
// // // //   },
// // // // ];

// // // // // Gradients for cards
// // // // const cardGradients = [
// // // //   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(60,10,30,0.92) 100%)",
// // // //   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(50,15,25,0.92) 100%)",
// // // //   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(70,20,40,0.92) 100%)",
// // // //   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(40,10,20,0.92) 100%)",
// // // //   "linear-gradient(135deg, rgba(139,30,63,0.70) 0%, rgba(60,10,30,0.75) 100%)",
// // // //   "linear-gradient(135deg, rgba(139,30,63,0.80) 0%, rgba(50,15,25,0.85) 100%)",
// // // // ];

// // // // const ExecutiveCommitteePage = () => {
// // // //   const [boardMembers, setBoardMembers] = useState([]);
// // // //   const [allMembers, setAllMembers] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [isVisible, setIsVisible] = useState({});
// // // //   const [hoveredCard, setHoveredCard] = useState(null);

// // // //   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
// // // //   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

// // // //   // ✅ Fetch team from API
// // // //   useEffect(() => {
// // // //     const fetchTeam = async () => {
// // // //       try {
// // // //         setLoading(true);
// // // //         const res = await getPublicTeam();
// // // //         const data = res.data?.data || res.data || {};

// // // //         // Board of Directors
// // // //         const board = (data.boardOfDirectors || data.board || [])
// // // //           .filter(member => member.isPublic)
// // // //           .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

// // // //         // All other members
// // // //         const members = (data.members || data.all || [])
// // // //           .filter(member => member.isPublic && member.level !== "BOARD")
// // // //           .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

// // // //         setBoardMembers(board);
// // // //         setAllMembers(members);
// // // //         console.log(setAllMembers);
// // // //       } catch (error) {
// // // //         console.error("Failed to fetch team:", error);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchTeam();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     window.scrollTo(0, 0);

// // // //     const observer = new IntersectionObserver(
// // // //       (entries) => {
// // // //         entries.forEach((entry) => {
// // // //           if (entry.isIntersecting) {
// // // //             setIsVisible((prev) => ({ ...prev, [entry.target.dataset.section]: true }));
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

// // // //   const getImageUrl = (member) => {
// // // //     const img = member.image || member.photo;
// // // //     if (!img) return null;
// // // //     if (img.startsWith('http')) return img;
// // // //     return `${IMAGE_BASE_URL}/uploads/team/${img}`;
// // // //   };

// // // //   const getSocialLink = (member, platform) => {
// // // //     if (member.socialLinks && typeof member.socialLinks === 'object') {
// // // //       return member.socialLinks[platform] || null;
// // // //     }
// // // //     return null;
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Helmet>
// // // //         <title>Executive Committee | KITD - Classical Indian Dance Germany</title>
// // // //         <meta name="description" content="Meet the team behind KITD - Board of Directors and members guiding Indian Classical Dance across Germany." />
// // // //       </Helmet>

// // // //       <div className="kitd-executive">

// // // //         {/* HERO SECTION */}
// // // //         <section className="kitd-executive__hero">
// // // //           <div className="kitd-executive__hero-bg">
// // // //             <img 
// // // //               src="https://images.pexels.com/photos/34322336/pexels-photo-34322336.jpeg"
// // // //               alt="KITD Executive Committee"
// // // //               loading="eager"
// // // //             />
// // // //             <div className="kitd-executive__hero-overlay" />
// // // //             <div className="kitd-executive__hero-gradient" />
// // // //           </div>
          
// // // //           <div className="kitd-executive__hero-container">
// // // //             <div className="kitd-executive__hero-content">
// // // //               <div className="kitd-executive__hero-eyebrow">
// // // //                 <span className="kitd-executive__hero-eyebrow-line" />
// // // //                 <span className="kitd-executive__hero-eyebrow-text">Leadership</span>
// // // //               </div>
// // // //               <h1 className="kitd-executive__hero-title">
// // // //                 Executive
// // // //                 <span className="kitd-executive__hero-title-accent"> Committee</span>
// // // //               </h1>
// // // //               <p className="kitd-executive__hero-description">
// // // //                 The Executive Committee provides strategic direction, supports 
// // // //                 members, promotes Indian Classical Dance, and guides the 
// // // //                 association's activities across Germany.
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* BREADCRUMB */}
// // // //         <div className="kitd-executive__breadcrumb">
// // // //           <div className="kitd-executive__container">
// // // //             <Link to="/">Home</Link>
// // // //             <ChevronRight size={14} strokeWidth={1.5} />
// // // //             <Link to="/about">About</Link>
// // // //             <ChevronRight size={14} strokeWidth={1.5} />
// // // //             <span>Executive Committee</span>
// // // //           </div>
// // // //         </div>

// // // //         {/* ✅ BOARD OF DIRECTORS */}
// // // //         {!loading && boardMembers.length > 0 && (
// // // //           <section className="kitd-executive__committee" data-section="board">
// // // //             <div className="kitd-executive__container">
// // // //               <div className="kitd-executive__committee-header">
// // // //                 <div className="kitd-executive__committee-eyebrow">
// // // //                   <span className="kitd-executive__committee-eyebrow-line" />
// // // //                   <span className="kitd-executive__committee-eyebrow-text">Leadership</span>
// // // //                 </div>
// // // //                 <h2 className="kitd-executive__committee-title">
// // // //                   Board of Directors
// // // //                 </h2>
// // // //               </div>

// // // //               <div className={`kitd-executive__grid ${isVisible.board ? "visible" : ""}`}>
// // // //                 {boardMembers.map((member, index) => {
// // // //                   const imageUrl = getImageUrl(member);
// // // //                   const linkedinUrl = getSocialLink(member, 'linkedin');
// // // //                   const facebookUrl = getSocialLink(member, 'facebook');
// // // //                   const instagramUrl = getSocialLink(member, 'instagram');

// // // //                   return (
// // // //                     <div
// // // //                       className={`kitd-executive__card ${hoveredCard === member.id ? 'kitd-executive__card--hovered' : ''}`}
// // // //                       key={member.id}
// // // //                       style={{ transitionDelay: `${index * 0.08}s` }}
// // // //                       onMouseEnter={() => setHoveredCard(member.id)}
// // // //                       onMouseLeave={() => setHoveredCard(null)}
// // // //                     >
// // // //                       <div className="kitd-executive__card-image">
// // // //                         {imageUrl ? (
// // // //                           <img src={imageUrl} alt={member.name} loading="lazy" />
// // // //                         ) : (
// // // //                           <div className="kitd-executive__card-placeholder">
// // // //                             <Building2 size={48} />
// // // //                           </div>
// // // //                         )}
// // // //                         <div className="kitd-executive__card-overlay" style={{ background: cardGradients[index % cardGradients.length] }} />
                        
// // // //                         <div className="kitd-executive__card-badge">
// // // //                           <Building2 size={12} strokeWidth={1.5} />
// // // //                           <span>{member.designation || "Board Member"}</span>
// // // //                         </div>

// // // //                         {(member.email || linkedinUrl || facebookUrl) && (
// // // //                           <div className="kitd-executive__card-social">
// // // //                             {member.email && (
// // // //                               <a href={`mailto:${member.email}`} className="kitd-executive__social-link" aria-label={`Email ${member.name}`}>
// // // //                                 <Mail size={15} strokeWidth={1.5} />
// // // //                               </a>
// // // //                             )}
// // // //                             {linkedinUrl && (
// // // //                               <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="kitd-executive__social-link">
// // // //                                 <FaLinkedinIn size={14} />
// // // //                               </a>
// // // //                             )}
// // // //                             {facebookUrl && (
// // // //                               <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="kitd-executive__social-link">
// // // //                                 <FaFacebookF size={14} />
// // // //                               </a>
// // // //                             )}
// // // //                             {instagramUrl && (
// // // //                               <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="kitd-executive__social-link">
// // // //                                 <FaInstagram size={14} />
// // // //                               </a>
// // // //                             )}
// // // //                           </div>
// // // //                         )}
// // // //                       </div>

// // // //                       <div className="kitd-executive__card-content">
// // // //                         <h3 className="kitd-executive__card-name">{member.name}</h3>
// // // //                         <span className="kitd-executive__card-designation">{member.designation || "Board Member"}</span>
// // // //                         {member.biography && <p className="kitd-executive__card-bio">{member.biography}</p>}
// // // //                       </div>
// // // //                     </div>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>
// // // //           </section>
// // // //         )}

// // // //         {/* ✅ ALL MEMBERS */}
// // // //         {!loading && allMembers.length > 0 && (
// // // //           <section className="kitd-executive__committee" data-section="members">
// // // //             <div className="kitd-executive__container">
// // // //               <div className="kitd-executive__committee-header">
// // // //                 <div className="kitd-executive__committee-eyebrow">
// // // //                   <span className="kitd-executive__committee-eyebrow-line" />
// // // //                   <span className="kitd-executive__committee-eyebrow-text">Community</span>
// // // //                 </div>
// // // //                 <h2 className="kitd-executive__committee-title">
// // // //                   Our Members
// // // //                 </h2>
// // // //               </div>

// // // //               <div className={`kitd-executive__grid ${isVisible.members ? "visible" : ""}`}>
// // // //                 {allMembers.map((member, index) => {
// // // //                   const imageUrl = getImageUrl(member);
// // // //                   const linkedinUrl = getSocialLink(member, 'linkedin');
// // // //                   const facebookUrl = getSocialLink(member, 'facebook');

// // // //                   return (
// // // //                     <div
// // // //                       className={`kitd-executive__card ${hoveredCard === member.id ? 'kitd-executive__card--hovered' : ''}`}
// // // //                       key={member.id}
// // // //                       style={{ transitionDelay: `${index * 0.08}s` }}
// // // //                       onMouseEnter={() => setHoveredCard(member.id)}
// // // //                       onMouseLeave={() => setHoveredCard(null)}
// // // //                     >
// // // //                       <div className="kitd-executive__card-image">
// // // //                         {imageUrl ? (
// // // //                           <img src={imageUrl} alt={member.name} loading="lazy" />
// // // //                         ) : (
// // // //                           <div className="kitd-executive__card-placeholder">
// // // //                             <User size={48} />
// // // //                           </div>
// // // //                         )}
// // // //                         <div className="kitd-executive__card-overlay" style={{ background: cardGradients[index % cardGradients.length] }} />
                        
// // // //                         <div className="kitd-executive__card-badge">
// // // //                           <User size={12} strokeWidth={1.5} />
// // // //                           <span>{member.designation || "Member"}</span>
// // // //                         </div>

// // // //                         {(member.email || linkedinUrl) && (
// // // //                           <div className="kitd-executive__card-social">
// // // //                             {member.email && (
// // // //                               <a href={`mailto:${member.email}`} className="kitd-executive__social-link">
// // // //                                 <Mail size={15} strokeWidth={1.5} />
// // // //                               </a>
// // // //                             )}
// // // //                             {linkedinUrl && (
// // // //                               <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="kitd-executive__social-link">
// // // //                                 <FaLinkedinIn size={14} />
// // // //                               </a>
// // // //                             )}
// // // //                           </div>
// // // //                         )}
// // // //                       </div>

// // // //                       <div className="kitd-executive__card-content">
// // // //                         <h3 className="kitd-executive__card-name">{member.name}</h3>
// // // //                         <span className="kitd-executive__card-designation">{member.designation || "Member"}</span>
// // // //                         {member.biography && <p className="kitd-executive__card-bio">{member.biography}</p>}
// // // //                       </div>
// // // //                     </div>
// // // //                   );
// // // //                 })}
// // // //               </div>
// // // //             </div>
// // // //           </section>
// // // //         )}

// // // //         {/* Loading State */}
// // // //         {loading && (
// // // //           <section className="kitd-executive__committee">
// // // //             <div className="kitd-executive__container">
// // // //               <div className="kitd-executive__loading">
// // // //                 <div className="spinner"></div>
// // // //                 <p>Loading team members...</p>
// // // //               </div>
// // // //             </div>
// // // //           </section>
// // // //         )}

// // // //         {/* GOVERNANCE SECTION */}
// // // //         <section className="kitd-executive__governance" data-section="governance">
// // // //           <div className="kitd-executive__container">
// // // //             <div className="kitd-executive__governance-header">
// // // //               <div className="kitd-executive__governance-eyebrow">
// // // //                 <span className="kitd-executive__governance-eyebrow-line" />
// // // //                 <span className="kitd-executive__governance-eyebrow-text">Our Governance</span>
// // // //               </div>
// // // //               <h2 className="kitd-executive__governance-title">
// // // //                 Guided by Principles of
// // // //                 <span className="kitd-executive__governance-title-accent"> Trust & Transparency</span>
// // // //               </h2>
// // // //             </div>

// // // //             <div className={`kitd-executive__governance-grid ${isVisible.governance ? "visible" : ""}`}>
// // // //               {governancePrinciples.map((principle, index) => (
// // // //                 <div className="kitd-executive__governance-card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
// // // //                   <div className="kitd-executive__governance-icon">{principle.icon}</div>
// // // //                   <h3 className="kitd-executive__governance-card-title">{principle.title}</h3>
// // // //                   <p className="kitd-executive__governance-card-desc">{principle.description}</p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* CTA SECTION */}
// // // //         <section className="kitd-executive__cta" data-section="cta">
// // // //           <div className="kitd-executive__cta-bg">
// // // //             <img 
// // // //               src="https://images.pexels.com/photos/34322336/pexels-photo-34322336.jpeg"
// // // //               alt="KITD Community"
// // // //               loading="lazy"
// // // //             />
// // // //             <div className="kitd-executive__cta-overlay" />
// // // //           </div>
          
// // // //           <div className="kitd-executive__container">
// // // //             <div className={`kitd-executive__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
// // // //               <h2 className="kitd-executive__cta-title">Connect With Our Team</h2>
// // // //               <p className="kitd-executive__cta-text">
// // // //                 Have questions about KITD, membership, or collaboration opportunities? We'd love to hear from you.
// // // //               </p>
// // // //               <Link to="/contact" className="kitd-executive__cta-btn">
// // // //                 <span>Get in Touch</span>
// // // //                 <ArrowRight size={18} strokeWidth={1.5} />
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //         </section>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default ExecutiveCommitteePage;







































// // // import { useState, useEffect } from "react";
// // // import { Link } from "react-router-dom";
// // // import {
// // //   ArrowRight,
// // //   Users,
// // //   Shield,
// // //   Heart,
// // //   Target,
// // //   Mail,
// // //   ChevronRight,
// // //   Briefcase,
// // //   Building2,
// // //   User,
// // // } from "lucide-react";
// // // import { Helmet } from "react-helmet-async";
// // // import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

// // // import { getPublicTeam } from "../../api/team.api";

// // // import "./ExecutiveCommitteePage.css";

// // // const governancePrinciples = [
// // //   {
// // //     icon: <Shield size={22} strokeWidth={1.5} />,
// // //     title: "Transparent Leadership",
// // //     description: "The executive committee operates with openness and accountability, ensuring members are informed about decisions that shape the association's direction.",
// // //   },
// // //   {
// // //     icon: <Users size={22} strokeWidth={1.5} />,
// // //     title: "Community Representation",
// // //     description: "Committee members represent the diverse voices of the Indian Classical Dance community, bringing perspectives from different dance forms, regions, and professional backgrounds.",
// // //   },
// // //   {
// // //     icon: <Target size={22} strokeWidth={1.5} />,
// // //     title: "Collaborative Decision Making",
// // //     description: "Decisions are made through consultation and consensus-building, reflecting the collective wisdom of the committee and the broader KITD membership.",
// // //   },
// // //   {
// // //     icon: <Heart size={22} strokeWidth={1.5} />,
// // //     title: "Member Focus",
// // //     description: "Every initiative and programme is designed with members' needs in mind, from professional development opportunities to community-building events and resources.",
// // //   },
// // // ];

// // // const cardGradients = [
// // //   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(60,10,30,0.92) 100%)",
// // //   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(50,15,25,0.92) 100%)",
// // //   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(70,20,40,0.92) 100%)",
// // //   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(40,10,20,0.92) 100%)",
// // //   "linear-gradient(135deg, rgba(139,30,63,0.70) 0%, rgba(60,10,30,0.75) 100%)",
// // //   "linear-gradient(135deg, rgba(139,30,63,0.80) 0%, rgba(50,15,25,0.85) 100%)",
// // // ];

// // // const ExecutiveCommitteePage = () => {
// // //   const [boardMembers, setBoardMembers] = useState([]);
// // //   const [allMembers, setAllMembers] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [hoveredCard, setHoveredCard] = useState(null);
// // //   const [isVisible, setIsVisible] = useState({
// // //     board: true,
// // //     members: true,
// // //     governance: false,
// // //     cta: false,
// // //   });

// // //   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
// // //   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

// // //   useEffect(() => {
// // //     const fetchTeam = async () => {
// // //       try {
// // //         setLoading(true);
// // //         setError(null);
        
// // //         const res = await getPublicTeam();
// // //         const responseData = res.data?.data || res.data || {};

// // //         // Extract board and members
// // //         const board = (responseData.boardOfDirectors || responseData.board || [])
// // //           .filter(member => member.isPublic)
// // //           .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

// // //         const members = (responseData.members || responseData.all || [])
// // //           .filter(member => member.isPublic && member.level !== "BOARD")
// // //           .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

// // //         setBoardMembers(board);
// // //         setAllMembers(members);
// // //       } catch (err) {
// // //         console.error("Failed to fetch team:", err);
// // //         setError("Failed to load team members. Please try again later.");
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchTeam();
// // //   }, []);

// // //   useEffect(() => {
// // //     window.scrollTo(0, 0);

// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             setIsVisible((prev) => ({ ...prev, [entry.target.dataset.section]: true }));
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.05 }
// // //     );

// // //     document.querySelectorAll("[data-section]").forEach((section) => {
// // //       observer.observe(section);
// // //     });

// // //     return () => observer.disconnect();
// // //   }, [loading]);

// // //   const getImageUrl = (member) => {
// // //     const img = member.image || member.photo;
// // //     if (!img) return null;
// // //     if (img.startsWith('http')) return img;
// // //     return `${IMAGE_BASE_URL}/uploads/team/${img}`;
// // //   };

// // //   const getSocialLink = (member, platform) => {
// // //     if (!member.socialLinks) return null;
// // //     let links = member.socialLinks;
// // //     if (typeof links === 'string') {
// // //       try {
// // //         links = JSON.parse(links);
// // //       } catch (e) {
// // //         return null;
// // //       }
// // //     }
// // //     const link = links[platform];
// // //     return link && link.trim() ? link.trim() : null;
// // //   };

// // //   const getInitials = (name) => {
// // //     if (!name) return "?";
// // //     return name.split(" ").map(w => w.charAt(0)).join("").toUpperCase().slice(0, 2);
// // //   };

// // //   const renderMemberCard = (member, index, isBoard = false) => {
// // //     const imageUrl = getImageUrl(member);
// // //     const linkedinUrl = getSocialLink(member, 'linkedin');
// // //     const facebookUrl = getSocialLink(member, 'facebook');
// // //     const instagramUrl = getSocialLink(member, 'instagram');
// // //     const websiteUrl = getSocialLink(member, 'website');

// // //     return (
// // //       <div
// // //         className={`kitd-executive__card ${hoveredCard === member.id ? 'kitd-executive__card--hovered' : ''}`}
// // //         key={member.id}
// // //         style={{ transitionDelay: `${index * 0.08}s` }}
// // //         onMouseEnter={() => setHoveredCard(member.id)}
// // //         onMouseLeave={() => setHoveredCard(null)}
// // //       >
// // //         <div className="kitd-executive__card-image">
// // //           {imageUrl ? (
// // //             <img src={imageUrl} alt={member.name} loading="lazy" />
// // //           ) : (
// // //             <div className="kitd-executive__card-placeholder">
// // //               {isBoard ? <Building2 size={40} /> : <User size={40} />}
// // //               <span>{getInitials(member.name)}</span>
// // //             </div>
// // //           )}
// // //           <div
// // //             className="kitd-executive__card-overlay"
// // //             style={{ background: cardGradients[index % cardGradients.length] }}
// // //           />

// // //           <div className="kitd-executive__card-badge">
// // //             {isBoard ? <Building2 size={12} strokeWidth={1.5} /> : <User size={12} strokeWidth={1.5} />}
// // //             <span>{member.designation || (isBoard ? "Board Member" : "Member")}</span>
// // //           </div>

// // //           {(member.email || linkedinUrl || facebookUrl || instagramUrl || websiteUrl) && (
// // //             <div className="kitd-executive__card-social">
// // //               {member.email && (
// // //                 <a href={`mailto:${member.email}`} className="kitd-executive__social-link" aria-label={`Email ${member.name}`}>
// // //                   <Mail size={15} strokeWidth={1.5} />
// // //                 </a>
// // //               )}
// // //               {linkedinUrl && (
// // //                 <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="kitd-executive__social-link">
// // //                   <FaLinkedinIn size={14} />
// // //                 </a>
// // //               )}
// // //               {facebookUrl && (
// // //                 <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="kitd-executive__social-link">
// // //                   <FaFacebookF size={14} />
// // //                 </a>
// // //               )}
// // //               {instagramUrl && (
// // //                 <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="kitd-executive__social-link">
// // //                   <FaInstagram size={14} />
// // //                 </a>
// // //               )}
// // //               {websiteUrl && (
// // //                 <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="kitd-executive__social-link">
// // //                   <Briefcase size={14} />
// // //                 </a>
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>

// // //         <div className="kitd-executive__card-content">
// // //           <h3 className="kitd-executive__card-name">{member.name}</h3>
// // //           {member.stageName && (
// // //             <span className="kitd-executive__card-stage">🎭 {member.stageName}</span>
// // //           )}
// // //           <span className="kitd-executive__card-designation">
// // //             {member.designation || (isBoard ? "Board Member" : "Member")}
// // //           </span>
// // //           {member.danceForm && (
// // //             <span className="kitd-executive__card-dance">💃 {member.danceForm}</span>
// // //           )}
// // //           {member.city && (
// // //             <span className="kitd-executive__card-location">📍 {member.city}{member.country ? `, ${member.country}` : ''}</span>
// // //           )}
// // //           {member.biography && (
// // //             <p className="kitd-executive__card-bio">{member.biography}</p>
// // //           )}
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <>
// // //       <Helmet>
// // //         <title>Executive Committee | KITD - Classical Indian Dance Germany</title>
// // //         <meta name="description" content="Meet the team behind KITD - Board of Directors and members guiding Indian Classical Dance across Germany." />
// // //       </Helmet>

// // //       <div className="kitd-executive">

// // //         {/* HERO */}
// // //         <section className="kitd-executive__hero">
// // //           <div className="kitd-executive__hero-bg">
// // //             <img src="https://images.pexels.com/photos/34322336/pexels-photo-34322336.jpeg" alt="KITD Executive Committee" loading="eager" />
// // //             <div className="kitd-executive__hero-overlay" />
// // //             <div className="kitd-executive__hero-gradient" />
// // //           </div>
// // //           <div className="kitd-executive__hero-container">
// // //             <div className="kitd-executive__hero-content">
// // //               <div className="kitd-executive__hero-eyebrow">
// // //                 <span className="kitd-executive__hero-eyebrow-line" />
// // //                 <span className="kitd-executive__hero-eyebrow-text">Leadership</span>
// // //               </div>
// // //               <h1 className="kitd-executive__hero-title">
// // //                 Executive
// // //                 <span className="kitd-executive__hero-title-accent"> Committee</span>
// // //               </h1>
// // //               <p className="kitd-executive__hero-description">
// // //                 The Executive Committee provides strategic direction, supports members, promotes Indian Classical Dance, and guides the association's activities across Germany.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* BREADCRUMB */}
// // //         <div className="kitd-executive__breadcrumb">
// // //           <div className="kitd-executive__container">
// // //             <Link to="/">Home</Link>
// // //             <ChevronRight size={14} strokeWidth={1.5} />
// // //             <Link to="/about">About</Link>
// // //             <ChevronRight size={14} strokeWidth={1.5} />
// // //             <span>Executive Committee</span>
// // //           </div>
// // //         </div>

// // //         {/* LOADING */}
// // //         {loading && (
// // //           <section className="kitd-executive__committee">
// // //             <div className="kitd-executive__container">
// // //               <div className="kitd-executive__loading">
// // //                 <div className="spinner"></div>
// // //                 <p>Loading team members...</p>
// // //               </div>
// // //             </div>
// // //           </section>
// // //         )}

// // //         {/* ERROR */}
// // //         {error && !loading && (
// // //           <section className="kitd-executive__committee">
// // //             <div className="kitd-executive__container">
// // //               <div className="kitd-executive__error">
// // //                 <p>⚠️ {error}</p>
// // //               </div>
// // //             </div>
// // //           </section>
// // //         )}

// // //         {/* BOARD OF DIRECTORS */}
// // //         {!loading && !error && boardMembers.length > 0 && (
// // //           <section className="kitd-executive__committee" data-section="board">
// // //             <div className="kitd-executive__container">
// // //               <div className="kitd-executive__committee-header">
// // //                 <div className="kitd-executive__committee-eyebrow">
// // //                   <span className="kitd-executive__committee-eyebrow-line" />
// // //                   <span className="kitd-executive__committee-eyebrow-text">Leadership</span>
// // //                 </div>
// // //                 <h2 className="kitd-executive__committee-title">Board of Directors</h2>
// // //               </div>
// // //               <div className={`kitd-executive__grid ${isVisible.board ? "visible" : ""}`}>
// // //                 {boardMembers.map((member, index) => renderMemberCard(member, index, true))}
// // //               </div>
// // //             </div>
// // //           </section>
// // //         )}

// // //         {/* ALL MEMBERS */}
// // //         {!loading && !error && allMembers.length > 0 && (
// // //           <section className="kitd-executive__committee" data-section="members">
// // //             <div className="kitd-executive__container">
// // //               <div className="kitd-executive__committee-header">
// // //                 <div className="kitd-executive__committee-eyebrow">
// // //                   <span className="kitd-executive__committee-eyebrow-line" />
// // //                   <span className="kitd-executive__committee-eyebrow-text">Community</span>
// // //                 </div>
// // //                 <h2 className="kitd-executive__committee-title">Our Members</h2>
// // //               </div>
// // //               <div className={`kitd-executive__grid ${isVisible.members ? "visible" : ""}`}>
// // //                 {allMembers.map((member, index) => renderMemberCard(member, index, false))}
// // //               </div>
// // //             </div>
// // //           </section>
// // //         )}

// // //         {/* EMPTY */}
// // //         {!loading && !error && boardMembers.length === 0 && allMembers.length === 0 && (
// // //           <section className="kitd-executive__committee">
// // //             <div className="kitd-executive__container">
// // //               <div className="kitd-executive__empty">
// // //                 <Users size={48} />
// // //                 <h3>No Team Members Yet</h3>
// // //                 <p>Team members will appear here once they are added and set to public.</p>
// // //               </div>
// // //             </div>
// // //           </section>
// // //         )}

// // //         {/* GOVERNANCE */}
// // //         <section className="kitd-executive__governance" data-section="governance">
// // //           <div className="kitd-executive__container">
// // //             <div className="kitd-executive__governance-header">
// // //               <div className="kitd-executive__governance-eyebrow">
// // //                 <span className="kitd-executive__governance-eyebrow-line" />
// // //                 <span className="kitd-executive__governance-eyebrow-text">Our Governance</span>
// // //               </div>
// // //               <h2 className="kitd-executive__governance-title">
// // //                 Guided by Principles of
// // //                 <span className="kitd-executive__governance-title-accent"> Trust & Transparency</span>
// // //               </h2>
// // //             </div>
// // //             <div className={`kitd-executive__governance-grid ${isVisible.governance ? "visible" : ""}`}>
// // //               {governancePrinciples.map((principle, index) => (
// // //                 <div className="kitd-executive__governance-card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
// // //                   <div className="kitd-executive__governance-icon">{principle.icon}</div>
// // //                   <h3 className="kitd-executive__governance-card-title">{principle.title}</h3>
// // //                   <p className="kitd-executive__governance-card-desc">{principle.description}</p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* CTA */}
// // //         <section className="kitd-executive__cta" data-section="cta">
// // //           <div className="kitd-executive__cta-bg">
// // //             <img src="https://images.pexels.com/photos/34322336/pexels-photo-34322336.jpeg" alt="KITD Community" loading="lazy" />
// // //             <div className="kitd-executive__cta-overlay" />
// // //           </div>
// // //           <div className="kitd-executive__container">
// // //             <div className={`kitd-executive__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
// // //               <h2 className="kitd-executive__cta-title">Connect With Our Team</h2>
// // //               <p className="kitd-executive__cta-text">
// // //                 Have questions about KITD, membership, or collaboration opportunities? We'd love to hear from you.
// // //               </p>
// // //               <Link to="/contact" className="kitd-executive__cta-btn">
// // //                 <span>Get in Touch</span>
// // //                 <ArrowRight size={18} strokeWidth={1.5} />
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default ExecutiveCommitteePage;























// // import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   ArrowRight,
// //   Users,
// //   Shield,
// //   Heart,
// //   Target,
// //   Mail,
// //   ChevronRight,
// //   Briefcase,
// //   Building2,
// //   User,
// // } from "lucide-react";
// // import { Helmet } from "react-helmet-async";
// // import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

// // import { getPublicTeam } from "../../api/team.api";

// // import "./ExecutiveCommitteePage.css";

// // const governancePrinciples = [
// //   {
// //     icon: <Shield size={22} strokeWidth={1.5} />,
// //     title: "Transparent Leadership",
// //     description: "The executive committee operates with openness and accountability, ensuring members are informed about decisions that shape the association's direction.",
// //   },
// //   {
// //     icon: <Users size={22} strokeWidth={1.5} />,
// //     title: "Community Representation",
// //     description: "Committee members represent the diverse voices of the Indian Classical Dance community, bringing perspectives from different dance forms, regions, and professional backgrounds.",
// //   },
// //   {
// //     icon: <Target size={22} strokeWidth={1.5} />,
// //     title: "Collaborative Decision Making",
// //     description: "Decisions are made through consultation and consensus-building, reflecting the collective wisdom of the committee and the broader KITD membership.",
// //   },
// //   {
// //     icon: <Heart size={22} strokeWidth={1.5} />,
// //     title: "Member Focus",
// //     description: "Every initiative and programme is designed with members' needs in mind, from professional development opportunities to community-building events and resources.",
// //   },
// // ];

// // const ExecutiveCommitteePage = () => {
// //   const [boardMembers, setBoardMembers] = useState([]);
// //   const [allMembers, setAllMembers] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [hoveredCard, setHoveredCard] = useState(null);
// //   const [isVisible, setIsVisible] = useState({
// //     board: false,
// //     members: false,
// //     governance: false,
// //     cta: false,
// //   });

// //   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
// //   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

// //   useEffect(() => {
// //     const fetchTeam = async () => {
// //       try {
// //         setLoading(true);
// //         setError(null);
        
// //         const res = await getPublicTeam();
// //         const responseData = res.data?.data || res.data || {};

// //         const board = (responseData.boardOfDirectors || responseData.board || [])
// //           .filter(member => member.isPublic)
// //           .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

// //         const members = (responseData.members || responseData.all || [])
// //           .filter(member => member.isPublic && member.level !== "BOARD")
// //           .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

// //         setBoardMembers(board);
// //         setAllMembers(members);
// //       } catch (err) {
// //         console.error("Failed to fetch team:", err);
// //         setError("Failed to load team members. Please try again later.");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchTeam();
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
// //       { threshold: 0.05 }
// //     );

// //     document.querySelectorAll("[data-section]").forEach((section) => {
// //       observer.observe(section);
// //     });

// //     return () => observer.disconnect();
// //   }, [loading]);

// //   const getImageUrl = (member) => {
// //     const img = member.image || member.photo;
// //     if (!img) return null;
// //     if (img.startsWith('http')) return img;
// //     return `${IMAGE_BASE_URL}/uploads/team/${img}`;
// //   };

// //   const getSocialLink = (member, platform) => {
// //     if (!member.socialLinks) return null;
// //     let links = member.socialLinks;
// //     if (typeof links === 'string') {
// //       try {
// //         links = JSON.parse(links);
// //       } catch (e) {
// //         return null;
// //       }
// //     }
// //     const link = links[platform];
// //     return link && link.trim() ? link.trim() : null;
// //   };

// //   const getInitials = (name) => {
// //     if (!name) return "?";
// //     return name.split(" ").map(w => w.charAt(0)).join("").toUpperCase().slice(0, 2);
// //   };

// //   const renderMemberCard = (member, index, isBoard = false) => {
// //     const imageUrl = getImageUrl(member);
// //     const linkedinUrl = getSocialLink(member, 'linkedin');
// //     const facebookUrl = getSocialLink(member, 'facebook');
// //     const instagramUrl = getSocialLink(member, 'instagram');
// //     const websiteUrl = getSocialLink(member, 'website');

// //     return (
// //       <div
// //         className={`ec-page__card ${hoveredCard === member.id ? 'ec-page__card--hovered' : ''}`}
// //         key={member.id}
// //         style={{ transitionDelay: `${index * 0.08}s` }}
// //         onMouseEnter={() => setHoveredCard(member.id)}
// //         onMouseLeave={() => setHoveredCard(null)}
// //       >
// //         <div className="ec-page__card-image">
// //           {imageUrl ? (
// //             <img src={imageUrl} alt={member.name} loading="lazy" />
// //           ) : (
// //             <div className="ec-page__card-placeholder">
// //               <span className="ec-page__card-placeholder-icon">
// //                 {isBoard ? <Building2 size={32} /> : <User size={32} />}
// //               </span>
// //               <span className="ec-page__card-placeholder-text">{getInitials(member.name)}</span>
// //             </div>
// //           )}
// //           <div className="ec-page__card-overlay" />
// //           <div className="ec-page__card-badge">
// //             <span className="ec-page__card-badge-icon">
// //               {isBoard ? <Building2 size={12} /> : <User size={12} />}
// //             </span>
// //             <span>{member.designation || (isBoard ? "Board Member" : "Member")}</span>
// //           </div>

// //           {(member.email || linkedinUrl || facebookUrl || instagramUrl || websiteUrl) && (
// //             <div className="ec-page__card-social">
// //               {member.email && (
// //                 <a href={`mailto:${member.email}`} className="ec-page__social-link" aria-label={`Email ${member.name}`}>
// //                   <Mail size={14} />
// //                 </a>
// //               )}
// //               {linkedinUrl && (
// //                 <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="ec-page__social-link">
// //                   <FaLinkedinIn size={13} />
// //                 </a>
// //               )}
// //               {facebookUrl && (
// //                 <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="ec-page__social-link">
// //                   <FaFacebookF size={13} />
// //                 </a>
// //               )}
// //               {instagramUrl && (
// //                 <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="ec-page__social-link">
// //                   <FaInstagram size={13} />
// //                 </a>
// //               )}
// //               {websiteUrl && (
// //                 <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="ec-page__social-link">
// //                   <Briefcase size={14} />
// //                 </a>
// //               )}
// //             </div>
// //           )}
// //         </div>

// //         <div className="ec-page__card-content">
// //           <h3 className="ec-page__card-name">{member.name}</h3>
// //           {member.stageName && (
// //             <span className="ec-page__card-stage">🎭 {member.stageName}</span>
// //           )}
// //           <span className="ec-page__card-designation">
// //             {member.designation || (isBoard ? "Board Member" : "Member")}
// //           </span>
// //           {member.danceForm && (
// //             <span className="ec-page__card-dance">💃 {member.danceForm}</span>
// //           )}
// //           {member.city && (
// //             <span className="ec-page__card-location">📍 {member.city}{member.country ? `, ${member.country}` : ''}</span>
// //           )}
// //           {member.biography && (
// //             <p className="ec-page__card-bio">{member.biography}</p>
// //           )}
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <>
// //       <Helmet>
// //         <title>Executive Committee | KITD - Classical Indian Dance Germany</title>
// //         <meta name="description" content="Meet the team behind KITD - Board of Directors and members guiding Indian Classical Dance across Germany." />
// //       </Helmet>

// //       <div className="ec-page">

// //         {/* HERO */}
// //         <section className="ec-page__hero">
// //           <div className="ec-page__hero-bg">
// //             <img src="https://images.pexels.com/photos/34322336/pexels-photo-34322336.jpeg" alt="KITD Executive Committee" loading="eager" />
// //             <div className="ec-page__hero-overlay" />
// //             <div className="ec-page__hero-gradient" />
// //           </div>
// //           <div className="ec-page__hero-container">
// //             <div className="ec-page__hero-content">
// //               <div className="ec-page__hero-eyebrow">
// //                 <span className="ec-page__hero-eyebrow-line" />
// //                 <span className="ec-page__hero-eyebrow-text">Leadership</span>
// //               </div>
// //               <h1 className="ec-page__hero-title">
// //                 Executive
// //                 <span className="ec-page__hero-title-accent"> Committee</span>
// //               </h1>
// //               <p className="ec-page__hero-description">
// //                 The Executive Committee provides strategic direction, supports members, promotes Indian Classical Dance, and guides the association's activities across Germany.
// //               </p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* BREADCRUMB */}
// //         <div className="ec-page__breadcrumb">
// //           <div className="ec-page__container">
// //             <Link to="/">Home</Link>
// //             <ChevronRight size={14} strokeWidth={1.5} />
// //             <Link to="/about">About</Link>
// //             <ChevronRight size={14} strokeWidth={1.5} />
// //             <span>Executive Committee</span>
// //           </div>
// //         </div>

// //         {/* LOADING */}
// //         {loading && (
// //           <section className="ec-page__committee">
// //             <div className="ec-page__container">
// //               <div className="ec-page__loading">
// //                 <div className="ec-page__spinner"></div>
// //                 <p>Loading team members...</p>
// //               </div>
// //             </div>
// //           </section>
// //         )}

// //         {/* ERROR */}
// //         {error && !loading && (
// //           <section className="ec-page__committee">
// //             <div className="ec-page__container">
// //               <div className="ec-page__error">
// //                 <p>⚠️ {error}</p>
// //               </div>
// //             </div>
// //           </section>
// //         )}

// //         {/* BOARD OF DIRECTORS */}
// //         {!loading && !error && boardMembers.length > 0 && (
// //           <section className="ec-page__committee" data-section="board">
// //             <div className="ec-page__container">
// //               <div className="ec-page__committee-header">
// //                 <div className="ec-page__committee-eyebrow">
// //                   <span className="ec-page__committee-eyebrow-line" />
// //                   <span className="ec-page__committee-eyebrow-text">Leadership</span>
// //                 </div>
// //                 <h2 className="ec-page__committee-title">Board of Directors</h2>
// //               </div>
// //               <div className={`ec-page__grid ${isVisible.board ? "visible" : ""}`}>
// //                 {boardMembers.map((member, index) => renderMemberCard(member, index, true))}
// //               </div>
// //             </div>
// //           </section>
// //         )}

// //         {/* ALL MEMBERS */}
// //         {!loading && !error && allMembers.length > 0 && (
// //           <section className="ec-page__committee" data-section="members">
// //             <div className="ec-page__container">
// //               <div className="ec-page__committee-header">
// //                 <div className="ec-page__committee-eyebrow">
// //                   <span className="ec-page__committee-eyebrow-line" />
// //                   <span className="ec-page__committee-eyebrow-text">Community</span>
// //                 </div>
// //                 <h2 className="ec-page__committee-title">Our Members</h2>
// //               </div>
// //               <div className={`ec-page__grid ${isVisible.members ? "visible" : ""}`}>
// //                 {allMembers.map((member, index) => renderMemberCard(member, index, false))}
// //               </div>
// //             </div>
// //           </section>
// //         )}

// //         {/* EMPTY */}
// //         {!loading && !error && boardMembers.length === 0 && allMembers.length === 0 && (
// //           <section className="ec-page__committee">
// //             <div className="ec-page__container">
// //               <div className="ec-page__empty">
// //                 <Users size={48} />
// //                 <h3>No Team Members Yet</h3>
// //                 <p>Team members will appear here once they are added and set to public.</p>
// //               </div>
// //             </div>
// //           </section>
// //         )}

// //         {/* GOVERNANCE */}
// //         <section className="ec-page__governance" data-section="governance">
// //           <div className="ec-page__container">
// //             <div className="ec-page__governance-header">
// //               <div className="ec-page__governance-eyebrow">
// //                 <span className="ec-page__governance-eyebrow-line" />
// //                 <span className="ec-page__governance-eyebrow-text">Our Governance</span>
// //               </div>
// //               <h2 className="ec-page__governance-title">
// //                 Guided by Principles of
// //                 <span className="ec-page__governance-title-accent"> Trust & Transparency</span>
// //               </h2>
// //             </div>
// //             <div className={`ec-page__governance-grid ${isVisible.governance ? "visible" : ""}`}>
// //               {governancePrinciples.map((principle, index) => (
// //                 <div className="ec-page__governance-card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
// //                   <div className="ec-page__governance-icon">{principle.icon}</div>
// //                   <h3 className="ec-page__governance-card-title">{principle.title}</h3>
// //                   <p className="ec-page__governance-card-desc">{principle.description}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* CTA */}
// //         <section className="ec-page__cta" data-section="cta">
// //           <div className="ec-page__cta-bg">
// //             <img src="https://images.pexels.com/photos/34322336/pexels-photo-34322336.jpeg" alt="KITD Community" loading="lazy" />
// //             <div className="ec-page__cta-overlay" />
// //           </div>
// //           <div className="ec-page__container">
// //             <div className={`ec-page__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
// //               <h2 className="ec-page__cta-title">Connect With Our Team</h2>
// //               <p className="ec-page__cta-text">
// //                 Have questions about KITD, membership, or collaboration opportunities? We'd love to hear from you.
// //               </p>
// //               <Link to="/contact" className="ec-page__cta-btn">
// //                 <span>Get in Touch</span>
// //                 <ArrowRight size={18} strokeWidth={1.5} />
// //               </Link>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </>
// //   );
// // };

// // export default ExecutiveCommitteePage;
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Users,
//   Shield,
//   Heart,
//   Target,
//   Mail,
//   ChevronRight,
//   Briefcase,
//   Building2,
//   User,
//   Linkedin,
//   Facebook,
//   Instagram,
//   Globe,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// import { getPublicTeam } from "../../api/team.api";

// import "./ExecutiveCommitteePage.css";

// const governancePrinciples = [
//   {
//     icon: <Shield size={22} strokeWidth={1.5} />,
//     title: "Transparent Leadership",
//     description: "The executive committee operates with openness and accountability, ensuring members are informed about decisions that shape the association's direction.",
//   },
//   {
//     icon: <Users size={22} strokeWidth={1.5} />,
//     title: "Community Representation",
//     description: "Committee members represent the diverse voices of the Indian Classical Dance community, bringing perspectives from different dance forms, regions, and professional backgrounds.",
//   },
//   {
//     icon: <Target size={22} strokeWidth={1.5} />,
//     title: "Collaborative Decision Making",
//     description: "Decisions are made through consultation and consensus-building, reflecting the collective wisdom of the committee and the broader KITD membership.",
//   },
//   {
//     icon: <Heart size={22} strokeWidth={1.5} />,
//     title: "Member Focus",
//     description: "Every initiative and programme is designed with members' needs in mind, from professional development opportunities to community-building events and resources.",
//   },
// ];

// const ExecutiveCommitteePage = () => {
//   const [boardMembers, setBoardMembers] = useState([]);
//   const [allMembers, setAllMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [isVisible, setIsVisible] = useState({
//     board: false,
//     members: false,
//     governance: false,
//     cta: false,
//   });

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   useEffect(() => {
//     const fetchTeam = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         const res = await getPublicTeam();
//         console.log("Team API Response:", res);
        
//         // Extract data from response
//         let responseData = res.data?.data || res.data || {};
        
//         // If responseData is an array, use it directly
//         if (Array.isArray(responseData)) {
//           const all = responseData.filter(member => member.isPublic);
//           const board = all.filter(member => member.level === "BOARD");
//           const members = all.filter(member => member.level !== "BOARD");
          
//           setBoardMembers(board.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)));
//           setAllMembers(members.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)));
//         } else {
//           // Handle object response
//           const board = (responseData.boardOfDirectors || responseData.board || [])
//             .filter(member => member.isPublic)
//             .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

//           const members = (responseData.members || responseData.all || [])
//             .filter(member => member.isPublic && member.level !== "BOARD")
//             .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

//           setBoardMembers(board);
//           setAllMembers(members);
//         }
//       } catch (err) {
//         console.error("Failed to fetch team:", err);
//         setError("Failed to load team members. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTeam();
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
//       { threshold: 0.05 }
//     );

//     document.querySelectorAll("[data-section]").forEach((section) => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, [loading]);

//   const getImageUrl = (member) => {
//     const img = member.image || member.photo;
//     if (!img) return null;
//     if (img.startsWith('http://') || img.startsWith('https://')) return img;
//     return `${IMAGE_BASE_URL}/uploads/team/${img}`;
//   };

//   const getSocialLinks = (member) => {
//     if (!member.socialLinks) return {};
//     let links = member.socialLinks;
//     if (typeof links === 'string') {
//       try {
//         links = JSON.parse(links);
//       } catch (e) {
//         return {};
//       }
//     }
//     return links || {};
//   };

//   const getInitials = (name) => {
//     if (!name) return "?";
//     const parts = name.split(" ");
//     if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
//     return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
//   };

//   const renderMemberCard = (member, index, isBoard = false) => {
//     const imageUrl = getImageUrl(member);
//     const socialLinks = getSocialLinks(member);
//     const hasSocial = Object.values(socialLinks).some(link => link && link.trim());

//     return (
//       <div
//         className={`ec-page__card ${hoveredCard === member.id ? 'ec-page__card--hovered' : ''}`}
//         key={member.id || index}
//         style={{ transitionDelay: `${index * 0.08}s` }}
//         onMouseEnter={() => setHoveredCard(member.id)}
//         onMouseLeave={() => setHoveredCard(null)}
//       >
//         <div className="ec-page__card-image">
//           {imageUrl ? (
//             <img 
//               src={imageUrl} 
//               alt={member.name || "Team Member"} 
//               loading="lazy"
//               onError={(e) => {
//                 e.target.style.display = 'none';
//                 e.target.parentElement.querySelector('.ec-page__card-placeholder').style.display = 'flex';
//               }}
//             />
//           ) : null}
//           <div className="ec-page__card-placeholder" style={{ display: imageUrl ? 'none' : 'flex' }}>
//             <span className="ec-page__card-placeholder-text">{getInitials(member.name)}</span>
//           </div>
//           <div className="ec-page__card-overlay" />
          
//           {isBoard && (
//             <div className="ec-page__card-badge">
//               <Building2 size={12} />
//               <span>Board Member</span>
//             </div>
//           )}
//         </div>

//         <div className="ec-page__card-content">
//           <h3 className="ec-page__card-name">{member.name || "Team Member"}</h3>
          
//           {member.designation && (
//             <span className="ec-page__card-designation">{member.designation}</span>
//           )}
          
//           {member.danceForm && (
//             <span className="ec-page__card-dance">{member.danceForm}</span>
//           )}
          
//           {(member.city || member.country) && (
//             <span className="ec-page__card-location">
//               {member.city}{member.country ? `, ${member.country}` : ''}
//             </span>
//           )}
          
//           {member.biography && (
//             <p className="ec-page__card-bio">{member.biography}</p>
//           )}
          
//           {(member.email || hasSocial) && (
//             <div className="ec-page__card-footer">
//               {member.email && (
//                 <a href={`mailto:${member.email}`} className="ec-page__card-email" aria-label={`Email ${member.name}`}>
//                   <Mail size={14} />
//                   <span>{member.email}</span>
//                 </a>
//               )}
//               {hasSocial && (
//                 <div className="ec-page__card-social">
//                   {socialLinks.linkedin && (
//                     <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="ec-page__social-link" aria-label="LinkedIn">
//                       <Linkedin size={14} />
//                     </a>
//                   )}
//                   {socialLinks.facebook && (
//                     <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="ec-page__social-link" aria-label="Facebook">
//                       <Facebook size={14} />
//                     </a>
//                   )}
//                   {socialLinks.instagram && (
//                     <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="ec-page__social-link" aria-label="Instagram">
//                       <Instagram size={14} />
//                     </a>
//                   )}
//                   {socialLinks.website && (
//                     <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="ec-page__social-link" aria-label="Website">
//                       <Globe size={14} />
//                     </a>
//                   )}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Executive Committee | KITD - Classical Indian Dance Germany</title>
//         <meta name="description" content="Meet the team behind KITD - Board of Directors and members guiding Indian Classical Dance across Germany." />
//       </Helmet>

//       <div className="ec-page">

//         {/* HERO */}
//         <section className="ec-page__hero">
//           <div className="ec-page__hero-bg">
//             <img 
//               src="https://images.pexels.com/photos/34322336/pexels-photo-34322336.jpeg" 
//               alt="KITD Executive Committee" 
//               loading="eager" 
//             />
//             <div className="ec-page__hero-overlay" />
//             <div className="ec-page__hero-gradient" />
//           </div>
//           <div className="ec-page__hero-container">
//             <div className="ec-page__hero-content">
//               <div className="ec-page__hero-eyebrow">
//                 <span className="ec-page__hero-eyebrow-line" />
//                 <span className="ec-page__hero-eyebrow-text">Leadership</span>
//               </div>
//               <h1 className="ec-page__hero-title">
//                 Executive
//                 <span className="ec-page__hero-title-accent"> Committee</span>
//               </h1>
//               <p className="ec-page__hero-description">
//                 The Executive Committee provides strategic direction, supports members, promotes Indian Classical Dance, and guides the association's activities across Germany.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* BREADCRUMB */}
//         <div className="ec-page__breadcrumb">
//           <div className="ec-page__container">
//             <Link to="/">Home</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <Link to="/about">About</Link>
//             <ChevronRight size={14} strokeWidth={1.5} />
//             <span>Executive Committee</span>
//           </div>
//         </div>

//         {/* LOADING */}
//         {loading && (
//           <section className="ec-page__committee">
//             <div className="ec-page__container">
//               <div className="ec-page__loading">
//                 <div className="ec-page__spinner"></div>
//                 <p>Loading team members...</p>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* ERROR */}
//         {error && !loading && (
//           <section className="ec-page__committee">
//             <div className="ec-page__container">
//               <div className="ec-page__error">
//                 <p>{error}</p>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* BOARD OF DIRECTORS */}
//         {!loading && !error && boardMembers.length > 0 && (
//           <section className="ec-page__committee" data-section="board">
//             <div className="ec-page__container">
//               <div className="ec-page__committee-header">
//                 <div className="ec-page__committee-eyebrow">
//                   <span className="ec-page__committee-eyebrow-line" />
//                   <span className="ec-page__committee-eyebrow-text">Leadership</span>
//                 </div>
//                 <h2 className="ec-page__committee-title">Board of Directors</h2>
//                 <p className="ec-page__committee-desc">
//                   The governing body providing strategic direction and oversight for KITD's activities.
//                 </p>
//               </div>
//               <div className={`ec-page__grid ${isVisible.board ? "visible" : ""}`}>
//                 {boardMembers.map((member, index) => renderMemberCard(member, index, true))}
//               </div>
//             </div>
//           </section>
//         )}

//         {/* ALL MEMBERS */}
//         {!loading && !error && allMembers.length > 0 && (
//           <section className="ec-page__committee ec-page__committee--members" data-section="members">
//             <div className="ec-page__container">
//               <div className="ec-page__committee-header">
//                 <div className="ec-page__committee-eyebrow">
//                   <span className="ec-page__committee-eyebrow-line" />
//                   <span className="ec-page__committee-eyebrow-text">Community</span>
//                 </div>
//                 <h2 className="ec-page__committee-title">Our Members</h2>
//                 <p className="ec-page__committee-desc">
//                   Dedicated individuals contributing to the growth and vitality of the Indian Classical Dance community.
//                 </p>
//               </div>
//               <div className={`ec-page__grid ${isVisible.members ? "visible" : ""}`}>
//                 {allMembers.map((member, index) => renderMemberCard(member, index, false))}
//               </div>
//             </div>
//           </section>
//         )}

//         {/* EMPTY */}
//         {!loading && !error && boardMembers.length === 0 && allMembers.length === 0 && (
//           <section className="ec-page__committee">
//             <div className="ec-page__container">
//               <div className="ec-page__empty">
//                 <Users size={48} />
//                 <h3>No Team Members Yet</h3>
//                 <p>Team members will appear here once they are added and set to public.</p>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* GOVERNANCE */}
//         <section className="ec-page__governance" data-section="governance">
//           <div className="ec-page__container">
//             <div className="ec-page__governance-header">
//               <div className="ec-page__governance-eyebrow">
//                 <span className="ec-page__governance-eyebrow-line" />
//                 <span className="ec-page__governance-eyebrow-text">Our Governance</span>
//               </div>
//               <h2 className="ec-page__governance-title">
//                 Guided by Principles of
//                 <span className="ec-page__governance-title-accent"> Trust & Transparency</span>
//               </h2>
//             </div>
//             <div className={`ec-page__governance-grid ${isVisible.governance ? "visible" : ""}`}>
//               {governancePrinciples.map((principle, index) => (
//                 <div className="ec-page__governance-card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
//                   <div className="ec-page__governance-icon">{principle.icon}</div>
//                   <h3 className="ec-page__governance-card-title">{principle.title}</h3>
//                   <p className="ec-page__governance-card-desc">{principle.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="ec-page__cta" data-section="cta">
//           <div className="ec-page__cta-bg">
//             <img 
//               src="https://images.pexels.com/photos/34322336/pexels-photo-34322336.jpeg" 
//               alt="KITD Community" 
//               loading="lazy" 
//             />
//             <div className="ec-page__cta-overlay" />
//           </div>
//           <div className="ec-page__container">
//             <div className={`ec-page__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
//               <h2 className="ec-page__cta-title">Connect With Our Team</h2>
//               <p className="ec-page__cta-text">
//                 Have questions about KITD, membership, or collaboration opportunities? We'd love to hear from you.
//               </p>
//               <Link to="/contact" className="ec-page__cta-btn">
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

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Shield,
  Heart,
  Target,
  Mail,
  ChevronRight,
  Briefcase,
  Building2,
  User,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";

import { getPublicTeam } from "../../api/team.api";
import execta from "../../assets/execta.png";
import executiveCommitteeImg from "../../assets/danb.png"; // update the path and filename
import "./ExecutiveCommitteePage.css";

const governancePrinciples = [
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: "Transparent Leadership",
    description: "The executive committee operates with openness and accountability, ensuring members are informed about decisions that shape the association's direction.",
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    title: "Community Representation",
    description: "Committee members represent the diverse voices of the Indian Classical Dance community, bringing perspectives from different dance forms, regions, and professional backgrounds.",
  },
  {
    icon: <Target size={22} strokeWidth={1.5} />,
    title: "Collaborative Decision Making",
    description: "Decisions are made through consultation and consensus-building, reflecting the collective wisdom of the committee and the broader KITD membership.",
  },
  {
    icon: <Heart size={22} strokeWidth={1.5} />,
    title: "Member Focus",
    description: "Every initiative and programme is designed with members' needs in mind, from professional development opportunities to community-building events and resources.",
  },
];

const ExecutiveCommitteePage = () => {
  const [boardMembers, setBoardMembers] = useState([]);
  const [allMembers, setAllMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState({
    board: false,
    members: false,
    governance: false,
    cta: false,
  });

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await getPublicTeam();
        console.log("Team API Response:", res);
        
        let responseData = res.data?.data || res.data || {};
        
        if (Array.isArray(responseData)) {
          const all = responseData.filter(member => member.isPublic);
          const board = all.filter(member => member.level === "BOARD");
          const members = all.filter(member => member.level !== "BOARD");
          
          setBoardMembers(board.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)));
          setAllMembers(members.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0)));
        } else {
          const board = (responseData.boardOfDirectors || responseData.board || [])
            .filter(member => member.isPublic)
            .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

          const members = (responseData.members || responseData.all || [])
            .filter(member => member.isPublic && member.level !== "BOARD")
            .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

          setBoardMembers(board);
          setAllMembers(members);
        }
      } catch (err) {
        console.error("Failed to fetch team:", err);
        setError("Failed to load team members. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
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
      { threshold: 0.05 }
    );

    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [loading]);

  const getImageUrl = (member) => {
    const img = member.image || member.photo;
    if (!img) return null;
    if (img.startsWith('http://') || img.startsWith('https://')) return img;
    return `${IMAGE_BASE_URL}/uploads/team/${img}`;
  };

  const getSocialLinks = (member) => {
    if (!member.socialLinks) return {};
    let links = member.socialLinks;
    if (typeof links === 'string') {
      try {
        links = JSON.parse(links);
      } catch (e) {
        return {};
      }
    }
    return links || {};
  };

  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  const renderMemberCard = (member, index, isBoard = false) => {
    const imageUrl = getImageUrl(member);
    const socialLinks = getSocialLinks(member);
    const hasSocial = Object.values(socialLinks).some(link => link && link.trim());

    return (
      <div
        className={`ec-page__card ${hoveredCard === member.id ? 'ec-page__card--hovered' : ''}`}
        key={member.id || index}
        style={{ transitionDelay: `${index * 0.08}s` }}
        onMouseEnter={() => setHoveredCard(member.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="ec-page__card-image">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={member.name || "Team Member"} 
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                const placeholder = e.target.parentElement.querySelector('.ec-page__card-placeholder');
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="ec-page__card-placeholder" style={{ display: imageUrl ? 'none' : 'flex' }}>
            <span className="ec-page__card-placeholder-text">{getInitials(member.name)}</span>
          </div>
          <div className="ec-page__card-overlay" />
          
          {isBoard && (
            <div className="ec-page__card-badge">
              <Building2 size={12} />
              <span>Board Member</span>
            </div>
          )}
        </div>

        <div className="ec-page__card-content">
          <h3 className="ec-page__card-name">{member.name || "Team Member"}</h3>
          
          {member.designation && (
            <span className="ec-page__card-designation">{member.designation}</span>
          )}
          
          {member.danceForm && (
            <span className="ec-page__card-dance">{member.danceForm}</span>
          )}
          
          {(member.city || member.country) && (
            <span className="ec-page__card-location">
              {member.city}{member.country ? `, ${member.country}` : ''}
            </span>
          )}
          
          {member.biography && (
            <p className="ec-page__card-bio">{member.biography}</p>
          )}
          
          {(member.email || hasSocial) && (
            <div className="ec-page__card-footer">
              {member.email && (
                <a href={`mailto:${member.email}`} className="ec-page__card-email" aria-label={`Email ${member.name}`}>
                  <Mail size={14} />
                  <span>{member.email}</span>
                </a>
              )}
              {hasSocial && (
                <div className="ec-page__card-social">
                  {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="ec-page__social-link" aria-label="LinkedIn">
                      <FaLinkedinIn size={14} />
                    </a>
                  )}
                  {socialLinks.facebook && (
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="ec-page__social-link" aria-label="Facebook">
                      <FaFacebookF size={14} />
                    </a>
                  )}
                  {socialLinks.instagram && (
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="ec-page__social-link" aria-label="Instagram">
                      <FaInstagram size={14} />
                    </a>
                  )}
                  {socialLinks.website && (
                    <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="ec-page__social-link" aria-label="Website">
                      <FaGlobe size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Executive Committee | KITD - Classical Indian Dance Germany</title>
        <meta name="description" content="Meet the team behind KITD - Board of Directors and members guiding Indian Classical Dance across Germany." />
      </Helmet>

      <div className="ec-page">

        {/* HERO */}
        <section className="ec-page__hero">
          <div className="ec-page__hero-bg">
           <img
  src={executiveCommitteeImg}
  alt="KITD Executive Committee"
  loading="eager"
/>
            <div className="ec-page__hero-overlay" />
            <div className="ec-page__hero-gradient" />
          </div>
          <div className="ec-page__hero-container">
            <div className="ec-page__hero-content">
              <div className="ec-page__hero-eyebrow">
                <span className="ec-page__hero-eyebrow-line" />
                <span className="ec-page__hero-eyebrow-text">Leadership</span>
              </div>
              <h1 className="ec-page__hero-title">
                Executive
                <span className="ec-page__hero-title-accent"> Committee</span>
              </h1>
              <p className="ec-page__hero-description">
                The Executive Committee provides strategic direction, supports members, promotes Indian Classical Dance, and guides the association's activities across Germany.
              </p>
            </div>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="ec-page__breadcrumb">
          <div className="ec-page__container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <Link to="/about">About</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>Executive Committee</span>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <section className="ec-page__committee">
            <div className="ec-page__container">
              <div className="ec-page__loading">
                <div className="ec-page__spinner"></div>
                <p>Loading team members...</p>
              </div>
            </div>
          </section>
        )}

        {/* ERROR */}
        {error && !loading && (
          <section className="ec-page__committee">
            <div className="ec-page__container">
              <div className="ec-page__error">
                <p>{error}</p>
              </div>
            </div>
          </section>
        )}

        {/* BOARD OF DIRECTORS */}
        {!loading && !error && boardMembers.length > 0 && (
          <section className="ec-page__committee" data-section="board">
            <div className="ec-page__container">
              <div className="ec-page__committee-header">
                <div className="ec-page__committee-eyebrow">
                  <span className="ec-page__committee-eyebrow-line" />
                  <span className="ec-page__committee-eyebrow-text">Leadership</span>
                </div>
                <h2 className="ec-page__committee-title">Board of Directors</h2>
                <p className="ec-page__committee-desc">
                  The governing body providing strategic direction and oversight for KITD's activities.
                </p>
              </div>
              <div className={`ec-page__grid ${isVisible.board ? "visible" : ""}`}>
                {boardMembers.map((member, index) => renderMemberCard(member, index, true))}
              </div>
            </div>
          </section>
        )}

        {/* ALL MEMBERS */}
        {!loading && !error && allMembers.length > 0 && (
          <section className="ec-page__committee ec-page__committee--members" data-section="members">
            <div className="ec-page__container">
              <div className="ec-page__committee-header">
                <div className="ec-page__committee-eyebrow">
                  <span className="ec-page__committee-eyebrow-line" />
                  <span className="ec-page__committee-eyebrow-text">Community</span>
                </div>
                <h2 className="ec-page__committee-title">Our Members</h2>
                <p className="ec-page__committee-desc">
                  Dedicated individuals contributing to the growth and vitality of the Indian Classical Dance community.
                </p>
              </div>
              <div className={`ec-page__grid ${isVisible.members ? "visible" : ""}`}>
                {allMembers.map((member, index) => renderMemberCard(member, index, false))}
              </div>
            </div>
          </section>
        )}

        {/* EMPTY */}
        {!loading && !error && boardMembers.length === 0 && allMembers.length === 0 && (
          <section className="ec-page__committee">
            <div className="ec-page__container">
              <div className="ec-page__empty">
                <Users size={48} />
                <h3>No Team Members Yet</h3>
                <p>Team members will appear here once they are added and set to public.</p>
              </div>
            </div>
          </section>
        )}

        {/* GOVERNANCE */}
        <section className="ec-page__governance" data-section="governance">
          <div className="ec-page__container">
            <div className="ec-page__governance-header">
              <div className="ec-page__governance-eyebrow">
                <span className="ec-page__governance-eyebrow-line" />
                <span className="ec-page__governance-eyebrow-text">Our Governance</span>
              </div>
              <h2 className="ec-page__governance-title">
                Guided by Principles of
                <span className="ec-page__governance-title-accent"> Trust & Transparency</span>
              </h2>
            </div>
            <div className={`ec-page__governance-grid ${isVisible.governance ? "visible" : ""}`}>
              {governancePrinciples.map((principle, index) => (
                <div className="ec-page__governance-card" key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="ec-page__governance-icon">{principle.icon}</div>
                  <h3 className="ec-page__governance-card-title">{principle.title}</h3>
                  <p className="ec-page__governance-card-desc">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ec-page__cta" data-section="cta">
          <div className="ec-page__cta-bg">
            <img 
              src={execta}
              alt="KITD Community" 
              loading="lazy" 
            />
            <div className="ec-page__cta-overlay" />
          </div>
          <div className="ec-page__container">
            <div className={`ec-page__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
              <h2 className="ec-page__cta-title">Connect With Our Team</h2>
              <p className="ec-page__cta-text">
                Have questions about KITD, membership, or collaboration opportunities? We'd love to hear from you.
              </p>
              <Link to="/contact" className="ec-page__cta-btn">
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