// // // // // src/components/home/MembershipCTA/MembershipCTA.jsx

// // // // import { useState, useEffect } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { ArrowRight, Users, Star, Heart } from "lucide-react";

// // // // import "./MembershipCTA.css";

// // // // const membershipTypes = [
// // // //   {
// // // //     type: "Active Member",
// // // //     price: "€60",
// // // //     period: "/year",
// // // //     description: "For trained dancers and students of Indian Classical Dance",
// // // //     icon: <Star size={16} strokeWidth={1.5} />,
// // // //   },
// // // //   {
// // // //     type: "Supporting Member",
// // // //     price: "€45",
// // // //     period: "/year",
// // // //     description: "For individuals who wish to support the association's mission",
// // // //     icon: <Heart size={16} strokeWidth={1.5} />,
// // // //   },
// // // //   {
// // // //     type: "Youth Member",
// // // //     price: "€30",
// // // //     period: "/year",
// // // //     description: "For young enthusiasts aged 15–18 learning classical dance",
// // // //     icon: <Users size={16} strokeWidth={1.5} />,
// // // //   },
// // // // ];

// // // // const benefits = [
// // // //   "Collaborative Networking",
// // // //   "Event Promotion",
// // // //   "Member Resources",
// // // // ];

// // // // const MembershipCTA = () => {
// // // //   const [isVisible, setIsVisible] = useState(false);

// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       ([entry]) => {
// // // //         if (entry.isIntersecting) {
// // // //           setIsVisible(true);
// // // //         }
// // // //       },
// // // //       { threshold: 0.2 }
// // // //     );

// // // //     const section = document.querySelector('.membership-cta');
// // // //     if (section) observer.observe(section);

// // // //     return () => {
// // // //       if (section) observer.unobserve(section);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <section className={`membership-cta ${isVisible ? 'visible' : ''}`}>
// // // //       {/* Background Overlay */}
// // // //       <div className="membership-overlay" />
      
// // // //       {/* Subtle Pattern */}
// // // //       <div className="membership-pattern" />

// // // //       <div className="membership-container">
// // // //         <div className="membership-content">
          
// // // //           {/* Section Header */}
// // // //           <div className="membership-header">
// // // //             <div className="membership-eyebrow">
// // // //               <span className="membership-eyebrow-line" />
// // // //               <span className="membership-eyebrow-text">Become a Member</span>
// // // //             </div>

// // // //             <h2 className="membership-title">
// // // //               Join Germany's Leading
// // // //               <br />
// // // //               <span className="membership-title-accent">Indian Classical Dance</span>
// // // //               <br />
// // // //               Community
// // // //             </h2>

// // // //             <p className="membership-description">
// // // //               Become a member of KITD and connect with a vibrant community 
// // // //               of artists, teachers, students, researchers, and supporters 
// // // //               dedicated to preserving and promoting Indian Classical Dance 
// // // //               across Germany.
// // // //             </p>
// // // //           </div>

// // // //           {/* Benefits */}
// // // //           <div className="membership-benefits">
// // // //             {benefits.map((benefit, index) => (
// // // //               <div 
// // // //                 className="membership-benefit-item" 
// // // //                 key={index}
// // // //                 style={{ transitionDelay: `${index * 0.1}s` }}
// // // //               >
// // // //                 <span className="benefit-check">✓</span>
// // // //                 <span className="benefit-text">{benefit}</span>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* Membership Types Pills */}
// // // //           <div className="membership-types">
// // // //             {membershipTypes.map((item, index) => (
// // // //               <div 
// // // //                 className="membership-type-pill" 
// // // //                 key={index}
// // // //                 style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
// // // //               >
// // // //                 <span className="type-pill-icon">{item.icon}</span>
// // // //                 <span className="type-pill-name">{item.type}</span>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* CTA Buttons */}
// // // //           <div className="membership-actions">
// // // //             <Link to="/membership" className="membership-btn membership-btn-primary">
// // // //               <span>Apply for Membership</span>
// // // //               <ArrowRight size={18} strokeWidth={1.5} />
// // // //             </Link>

// // // //             <Link to="/volunteer" className="membership-btn membership-btn-secondary">
// // // //               <span>Become a Volunteer</span>
// // // //               <ArrowRight size={18} strokeWidth={1.5} />
// // // //             </Link>
// // // //           </div>

// // // //           {/* Pricing Preview */}
// // // //           <div className="membership-pricing">
// // // //             {membershipTypes.map((item, index) => (
// // // //               <div 
// // // //                 className="pricing-item" 
// // // //                 key={index}
// // // //                 style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
// // // //               >
// // // //                 <div className="pricing-item-header">
// // // //                   <span className="pricing-item-icon">{item.icon}</span>
// // // //                   <span className="pricing-item-type">{item.type}</span>
// // // //                 </div>
// // // //                 <div className="pricing-item-amount">
// // // //                   <span className="pricing-item-price">{item.price}</span>
// // // //                   <span className="pricing-item-period">{item.period}</span>
// // // //                 </div>
// // // //                 <p className="pricing-item-desc">{item.description}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default MembershipCTA;


// // // // src/components/home/MembershipCTA/MembershipCTA.jsx

// // // import { useState, useEffect, useRef } from "react";
// // // import { Link } from "react-router-dom";
// // // import { ArrowRight, Users, Star, Heart, Sparkles, Shield, CheckCircle2 } from "lucide-react";

// // // import "./MembershipCTA.css";

// // // const membershipTypes = [
// // //   {
// // //     type: "Active Member",
// // //     price: "€60",
// // //     period: "/year",
// // //     description: "For trained dancers and students of Indian Classical Dance",
// // //     icon: <Star size={16} strokeWidth={1.5} />,
// // //     color: "#8B1E3F",
// // //     featured: false,
// // //   },
// // //   {
// // //     type: "Supporting Member",
// // //     price: "€45",
// // //     period: "/year",
// // //     description: "For individuals who wish to support the association's mission",
// // //     icon: <Heart size={16} strokeWidth={1.5} />,
// // //     color: "#C41E3A",
// // //     featured: true,
// // //   },
// // //   {
// // //     type: "Youth Member",
// // //     price: "€30",
// // //     period: "/year",
// // //     description: "For young enthusiasts aged 15–18 learning classical dance",
// // //     icon: <Users size={16} strokeWidth={1.5} />,
// // //     color: "#D4436A",
// // //     featured: false,
// // //   },
// // // ];

// // // const benefits = [
// // //   "Collaborative Networking",
// // //   "Event Promotion",
// // //   "Member Resources",
// // //   "Community Support",
// // // ];

// // // const MembershipCTA = () => {
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const [hoveredPricing, setHoveredPricing] = useState(null);
// // //   const sectionRef = useRef(null);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           setIsVisible(true);
// // //         }
// // //       },
// // //       { threshold: 0.15 }
// // //     );

// // //     if (sectionRef.current) {
// // //       observer.observe(sectionRef.current);
// // //     }

// // //     return () => {
// // //       if (sectionRef.current) {
// // //         observer.unobserve(sectionRef.current);
// // //       }
// // //     };
// // //   }, []);

// // //   return (
// // //     <section className={`kitd-membership ${isVisible ? 'kitd-membership--visible' : ''}`} ref={sectionRef}>
// // //       {/* Decorative Elements */}
// // //       <div className="kitd-membership__deco kitd-membership__deco--1" />
// // //       <div className="kitd-membership__deco kitd-membership__deco--2" />
// // //       <div className="kitd-membership__deco kitd-membership__deco--3" />
// // //       <div className="kitd-membership__deco kitd-membership__deco--4" />
      
// // //       {/* Gradient Orbs */}
// // //       <div className="kitd-membership__orb kitd-membership__orb--1" />
// // //       <div className="kitd-membership__orb kitd-membership__orb--2" />

// // //       <div className="kitd-membership__container">
        
// // //         {/* Main Content */}
// // //         <div className="kitd-membership__main">
          
// // //           {/* Section Header */}
// // //           <div className="kitd-membership__header">
// // //             <div className="kitd-membership__eyebrow">
// // //               <span className="kitd-membership__eyebrow-line" />
// // //               <span className="kitd-membership__eyebrow-text">Join the Community</span>
// // //             </div>

// // //             <h2 className="kitd-membership__title">
// // //               Become Part of
// // //               <br />
// // //               <span className="kitd-membership__title-accent">KITD's Growing</span>
// // //               <br />
// // //               Family
// // //             </h2>

// // //             <p className="kitd-membership__desc">
// // //               Connect with a vibrant community of artists, teachers, students, 
// // //               researchers, and supporters dedicated to preserving and promoting 
// // //               Indian Classical Dance across Germany.
// // //             </p>
// // //           </div>

// // //           {/* Benefits Grid */}
// // //           <div className="kitd-membership__benefits">
// // //             {benefits.map((benefit, index) => (
// // //               <div 
// // //                 className="kitd-membership__benefit" 
// // //                 key={index}
// // //                 style={{ transitionDelay: `${index * 0.08}s` }}
// // //               >
// // //                 <CheckCircle2 size={18} strokeWidth={1.5} className="kitd-membership__benefit-icon" />
// // //                 <span>{benefit}</span>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* CTA Buttons */}
// // //           <div className="kitd-membership__actions">
// // //             <Link to="/membership" className="kitd-membership__btn kitd-membership__btn--primary">
// // //               <span>Apply for Membership</span>
// // //               <ArrowRight size={18} strokeWidth={1.5} />
// // //             </Link>

// // //             <Link to="/volunteer" className="kitd-membership__btn kitd-membership__btn--secondary">
// // //               <span>Become a Volunteer</span>
// // //               <ArrowRight size={18} strokeWidth={1.5} />
// // //             </Link>
// // //           </div>

// // //           {/* Membership Cards */}
// // //           <div className="kitd-membership__cards">
// // //             {membershipTypes.map((item, index) => (
// // //               <div 
// // //                 className={`kitd-membership__card ${item.featured ? 'kitd-membership__card--featured' : ''} ${hoveredPricing === index ? 'kitd-membership__card--hovered' : ''}`}
// // //                 key={index}
// // //                 style={{ transitionDelay: `${0.2 + index * 0.08}s` }}
// // //                 onMouseEnter={() => setHoveredPricing(index)}
// // //                 onMouseLeave={() => setHoveredPricing(null)}
// // //               >
// // //                 {item.featured && (
// // //                   <div className="kitd-membership__card-badge">
// // //                     <Sparkles size={12} />
// // //                     <span>Popular</span>
// // //                   </div>
// // //                 )}
                
// // //                 <div className="kitd-membership__card-icon" style={{ color: item.color }}>
// // //                   {item.icon}
// // //                 </div>
                
// // //                 <h3 className="kitd-membership__card-title">{item.type}</h3>
                
// // //                 <div className="kitd-membership__card-price">
// // //                   <span className="kitd-membership__card-amount">{item.price}</span>
// // //                   <span className="kitd-membership__card-period">{item.period}</span>
// // //                 </div>
                
// // //                 <p className="kitd-membership__card-desc">{item.description}</p>
                
// // //                 <Link 
// // //                   to="/membership" 
// // //                   className={`kitd-membership__card-btn ${item.featured ? 'kitd-membership__card-btn--featured' : ''}`}
// // //                 >
// // //                   <span>Choose Plan</span>
// // //                   <ArrowRight size={14} strokeWidth={1.5} />
// // //                 </Link>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Trust Badge */}
// // //           <div className="kitd-membership__trust">
// // //             <Shield size={18} strokeWidth={1.5} />
// // //             <span>Join 500+ members across Germany</span>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default MembershipCTA;

// // // src/components/home/MembershipCTA/MembershipCTA.jsx

// // import { useState, useEffect, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import { ArrowRight, Users, Star, Heart, Sparkles, Shield, CheckCircle2 } from "lucide-react";

// // import "./MembershipCTA.css";

// // const membershipTypes = [
// //   {
// //     type: "Active Member",
// //     price: "€60",
// //     period: "/year",
// //     description: "For trained dancers and students of Indian Classical Dance",
// //     icon: <Star size={16} strokeWidth={1.5} />,
// //     color: "#8B1E3F",
// //     featured: false,
// //   },
// //   {
// //     type: "Supporting Member",
// //     price: "€45",
// //     period: "/year",
// //     description: "For individuals who wish to support the association's mission",
// //     icon: <Heart size={16} strokeWidth={1.5} />,
// //     color: "#C41E3A",
// //     featured: true,
// //   },
// //   {
// //     type: "Youth Member",
// //     price: "€30",
// //     period: "/year",
// //     description: "For young enthusiasts aged 15–18 learning classical dance",
// //     icon: <Users size={16} strokeWidth={1.5} />,
// //     color: "#D4436A",
// //     featured: false,
// //   },
// // ];

// // const benefits = [
// //   "Collaborative Networking",
// //   "Event Promotion",
// //   "Member Resources",
// //   "Community Support",
// // ];

// // const MembershipCTA = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [hoveredPricing, setHoveredPricing] = useState(null);
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //         }
// //       },
// //       { threshold: 0.15 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => {
// //       if (sectionRef.current) {
// //         observer.unobserve(sectionRef.current);
// //       }
// //     };
// //   }, []);

// //   return (
// //     <section className={`kitd-membership ${isVisible ? 'kitd-membership--visible' : ''}`} ref={sectionRef}>
// //       {/* Background Image */}
// //       <div className="kitd-membership__bg">
// //         <img 
// //           src="https://images.pexels.com/photos/34717649/pexels-photo-34717649.jpeg"
// //           alt="KITD Community"
// //           loading="lazy"
// //         />
// //       </div>
      
// //       {/* Overlay */}
// //       <div className="kitd-membership__overlay" />
      
// //       {/* Subtle Pattern Overlay */}
// //       <div className="kitd-membership__pattern" />
      
// //       {/* Decorative Elements */}
// //       <div className="kitd-membership__deco kitd-membership__deco--1" />
// //       <div className="kitd-membership__deco kitd-membership__deco--2" />
      
// //       {/* Gradient Orbs */}
// //       <div className="kitd-membership__orb kitd-membership__orb--1" />
// //       <div className="kitd-membership__orb kitd-membership__orb--2" />

// //       <div className="kitd-membership__container">
        
// //         {/* Main Content */}
// //         <div className="kitd-membership__main">
          
// //           {/* Section Header */}
// //           <div className="kitd-membership__header">
// //             <div className="kitd-membership__eyebrow">
// //               <span className="kitd-membership__eyebrow-line" />
// //               <span className="kitd-membership__eyebrow-text">Join the Community</span>
// //             </div>

// //             <h2 className="kitd-membership__title">
// //               Become Part of
// //               <br />
// //               <span className="kitd-membership__title-accent">KITD's Growing</span>
// //               <br />
// //               Family
// //             </h2>

// //             <p className="kitd-membership__desc">
// //               Connect with a vibrant community of artists, teachers, students, 
// //               researchers, and supporters dedicated to preserving and promoting 
// //               Indian Classical Dance across Germany.
// //             </p>
// //           </div>

// //           {/* Benefits Grid */}
// //           <div className="kitd-membership__benefits">
// //             {benefits.map((benefit, index) => (
// //               <div 
// //                 className="kitd-membership__benefit" 
// //                 key={index}
// //                 style={{ transitionDelay: `${index * 0.08}s` }}
// //               >
// //                 <CheckCircle2 size={18} strokeWidth={1.5} className="kitd-membership__benefit-icon" />
// //                 <span>{benefit}</span>
// //               </div>
// //             ))}
// //           </div>

// //           {/* CTA Buttons */}
// //           <div className="kitd-membership__actions">
// //             <Link to="/membership" className="kitd-membership__btn kitd-membership__btn--primary">
// //               <span>Apply for Membership</span>
// //               <ArrowRight size={18} strokeWidth={1.5} />
// //             </Link>

// //             <Link to="/volunteer" className="kitd-membership__btn kitd-membership__btn--secondary">
// //               <span>Become a Volunteer</span>
// //               <ArrowRight size={18} strokeWidth={1.5} />
// //             </Link>
// //           </div>

// //           {/* Membership Cards */}
// //           <div className="kitd-membership__cards">
// //             {membershipTypes.map((item, index) => (
// //               <div 
// //                 className={`kitd-membership__card ${item.featured ? 'kitd-membership__card--featured' : ''} ${hoveredPricing === index ? 'kitd-membership__card--hovered' : ''}`}
// //                 key={index}
// //                 style={{ transitionDelay: `${0.2 + index * 0.08}s` }}
// //                 onMouseEnter={() => setHoveredPricing(index)}
// //                 onMouseLeave={() => setHoveredPricing(null)}
// //               >
// //                 {item.featured && (
// //                   <div className="kitd-membership__card-badge">
// //                     <Sparkles size={12} />
// //                     <span>Popular</span>
// //                   </div>
// //                 )}
                
// //                 <div className="kitd-membership__card-icon" style={{ color: item.color }}>
// //                   {item.icon}
// //                 </div>
                
// //                 <h3 className="kitd-membership__card-title">{item.type}</h3>
                
// //                 <div className="kitd-membership__card-price">
// //                   <span className="kitd-membership__card-amount">{item.price}</span>
// //                   <span className="kitd-membership__card-period">{item.period}</span>
// //                 </div>
                
// //                 <p className="kitd-membership__card-desc">{item.description}</p>
                
// //                 <Link 
// //                   to="/membership" 
// //                   className={`kitd-membership__card-btn ${item.featured ? 'kitd-membership__card-btn--featured' : ''}`}
// //                 >
// //                   <span>Choose Plan</span>
// //                   <ArrowRight size={14} strokeWidth={1.5} />
// //                 </Link>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Trust Badge */}
// //           <div className="kitd-membership__trust">
// //             <Shield size={18} strokeWidth={1.5} />
// //             <span>Join 500+ members across Germany</span>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default MembershipCTA;

// // src/components/home/MembershipCTA/MembershipCTA.jsx

// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Users, Star, Heart, Sparkles, Shield, CheckCircle2 } from "lucide-react";

// import "./MembershipCTA.css";

// const membershipTypes = [
//   {
//     type: "Active Member",
//     price: "€60",
//     period: "/year",
//     description: "For trained dancers and students",
//     icon: <Star size={16} strokeWidth={1.5} />,
//     color: "#8B1E3F",
//     featured: false,
//   },
//   {
//     type: "Supporting Member",
//     price: "€45",
//     period: "/year",
//     description: "Support the association's mission",
//     icon: <Heart size={16} strokeWidth={1.5} />,
//     color: "#C41E3A",
//     featured: true,
//   },
//   {
//     type: "Youth Member",
//     price: "€30",
//     period: "/year",
//     description: "For young enthusiasts aged 15–18",
//     icon: <Users size={16} strokeWidth={1.5} />,
//     color: "#D4436A",
//     featured: false,
//   },
// ];

// const benefits = [
//   "Collaborative Networking",
//   "Event Promotion",
//   "Member Resources",
//   "Community Support",
// ];

// const MembershipCTA = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredPricing, setHoveredPricing] = useState(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section className={`kitd-membership ${isVisible ? 'kitd-membership--visible' : ''}`} ref={sectionRef}>
//       {/* Background Image */}
//       <div className="kitd-membership__bg">
//         <img 
//           src="https://images.pexels.com/photos/34717649/pexels-photo-34717649.jpeg"
//           alt="KITD Community"
//           loading="lazy"
//         />
//       </div>
      
//       {/* Overlay */}
//       <div className="kitd-membership__overlay" />
      
//       {/* Subtle Pattern Overlay */}
//       <div className="kitd-membership__pattern" />
      
//       {/* Decorative Elements */}
//       <div className="kitd-membership__deco kitd-membership__deco--1" />
//       <div className="kitd-membership__deco kitd-membership__deco--2" />
      
//       {/* Gradient Orbs */}
//       <div className="kitd-membership__orb kitd-membership__orb--1" />
//       <div className="kitd-membership__orb kitd-membership__orb--2" />

//       <div className="kitd-membership__container">
        
//         {/* Main Content */}
//         <div className="kitd-membership__main">
          
//           <div className="kitd-membership__grid">
//             {/* Left Column - Content */}
//             <div className="kitd-membership__content">
//               {/* Section Header */}
//               <div className="kitd-membership__header">
//                 <div className="kitd-membership__eyebrow">
//                   <span className="kitd-membership__eyebrow-line" />
//                   <span className="kitd-membership__eyebrow-text">Join the Community</span>
//                 </div>

//                 <h2 className="kitd-membership__title">
//                   Become Part of
//                   <br />
//                   <span className="kitd-membership__title-accent">KITD's Growing</span>
//                   <br />
//                   Family
//                 </h2>

//                 <p className="kitd-membership__desc">
//                   Connect with a vibrant community of artists, teachers, students, 
//                   and supporters dedicated to preserving Indian Classical Dance.
//                 </p>
//               </div>

//               {/* Benefits */}
//               <div className="kitd-membership__benefits">
//                 {benefits.map((benefit, index) => (
//                   <div 
//                     className="kitd-membership__benefit" 
//                     key={index}
//                     style={{ transitionDelay: `${index * 0.08}s` }}
//                   >
//                     <CheckCircle2 size={16} strokeWidth={1.5} className="kitd-membership__benefit-icon" />
//                     <span>{benefit}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Buttons */}
//               <div className="kitd-membership__actions">
//                 <Link to="/membership" className="kitd-membership__btn kitd-membership__btn--primary">
//                   <span>Apply for Membership</span>
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </Link>

//                 <Link to="/volunteer" className="kitd-membership__btn kitd-membership__btn--secondary">
//                   <span>Become a Volunteer</span>
//                   <ArrowRight size={18} strokeWidth={1.5} />
//                 </Link>
//               </div>
//             </div>

//             {/* Right Column - Membership Cards */}
//             <div className="kitd-membership__cards-wrapper">
//               <div className="kitd-membership__cards">
//                 {membershipTypes.map((item, index) => (
//                   <div 
//                     className={`kitd-membership__card ${item.featured ? 'kitd-membership__card--featured' : ''} ${hoveredPricing === index ? 'kitd-membership__card--hovered' : ''}`}
//                     key={index}
//                     style={{ transitionDelay: `${0.2 + index * 0.08}s` }}
//                     onMouseEnter={() => setHoveredPricing(index)}
//                     onMouseLeave={() => setHoveredPricing(null)}
//                   >
//                     {item.featured && (
//                       <div className="kitd-membership__card-badge">
//                         <Sparkles size={10} />
//                         <span>Popular</span>
//                       </div>
//                     )}
                    
//                     <div className="kitd-membership__card-icon" style={{ color: item.color }}>
//                       {item.icon}
//                     </div>
                    
//                     <h3 className="kitd-membership__card-title">{item.type}</h3>
                    
//                     <div className="kitd-membership__card-price">
//                       <span className="kitd-membership__card-amount">{item.price}</span>
//                       <span className="kitd-membership__card-period">{item.period}</span>
//                     </div>
                    
//                     <p className="kitd-membership__card-desc">{item.description}</p>
                    
//                     <Link 
//                       to="/membership" 
//                       className={`kitd-membership__card-btn ${item.featured ? 'kitd-membership__card-btn--featured' : ''}`}
//                     >
//                       <span>Choose Plan</span>
//                       <ArrowRight size={12} strokeWidth={1.5} />
//                     </Link>
//                   </div>
//                 ))}
//               </div>

//               {/* Trust Badge */}
//               <div className="kitd-membership__trust">
//                 <Shield size={16} strokeWidth={1.5} />
//                 <span>Join 500+ members across Germany</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default MembershipCTA;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star, Heart, Sparkles, Shield, CheckCircle2 } from "lucide-react";
import membercta from "../../assets/membercta.png";
import "./MembershipCTA.css";

const membershipTypes = [
  {
    type: "Active Member",
    price: "€50",
    period: "/year",
    description: "For trained dancers, teachers and learners of Indian Classical Dance",
    icon: <Star size={16} strokeWidth={1.5} />,
    color: "#1A0236",
    featured: false,
  },
  {
    type: "Supporting Member",
    price: "€75",
    period: "/year",
    description: "For individuals who wish to support KITD and its mission",
    icon: <Heart size={16} strokeWidth={1.5} />,
    color: "#9AD3CB",
    featured: true,
  },
  {
    type: "Youth Member",
    price: "€25",
    period: "/year",
    description: "For young learners aged 15–18 pursuing Indian Classical Dance",
    icon: <Users size={16} strokeWidth={1.5} />,
    color: "#C8A24A",
    featured: false,
  },
];

const benefits = [
  "Access to KITD events & workshops",
  "Performance opportunities",
  "Networking with artists",
  "Member newsletter & resources",
];

const MembershipCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPricing, setHoveredPricing] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section className={`kitd-membership ${isVisible ? 'kitd-membership--visible' : ''}`} ref={sectionRef}>
      <div className="kitd-membership__bg">
        <img src={membercta} />
      </div>
      <div className="kitd-membership__overlay" />
      <div className="kitd-membership__pattern" />
      <div className="kitd-membership__deco kitd-membership__deco--1" />
      <div className="kitd-membership__deco kitd-membership__deco--2" />
      <div className="kitd-membership__orb kitd-membership__orb--1" />
      <div className="kitd-membership__orb kitd-membership__orb--2" />

      <div className="kitd-membership__container">
        <div className="kitd-membership__main">
          <div className="kitd-membership__grid">
            
            {/* Left - Content */}
            <div className="kitd-membership__content">
              <div className="kitd-membership__header">
                <div className="kitd-membership__eyebrow">
                  <span className="kitd-membership__eyebrow-line" />
                  <span className="kitd-membership__eyebrow-text">Join the Community</span>
                </div>
                <h2 className="kitd-membership__title">
                  Become Part of<br />
                  <span className="kitd-membership__title-accent">KITD's Growing</span><br />
                  Family
                </h2>
                <p className="kitd-membership__desc">
                  Connect with a vibrant community of artists, teachers, students, 
                  and supporters dedicated to preserving Indian Classical Dance across Germany.
                </p>
              </div>

              <div className="kitd-membership__benefits">
                {benefits.map((benefit, index) => (
                  <div className="kitd-membership__benefit" key={index} style={{ transitionDelay: `${index * 0.08}s` }}>
                    <CheckCircle2 size={16} strokeWidth={1.5} className="kitd-membership__benefit-icon" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="kitd-membership__actions">
                <Link to="/membership" className="kitd-membership__btn kitd-membership__btn--primary">
                  <span>Apply for Membership</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </div>
            </div>

            {/* Right - Cards */}
            <div className="kitd-membership__cards-wrapper">
              <div className="kitd-membership__cards">
                {membershipTypes.map((item, index) => (
                  <div
                    className={`kitd-membership__card ${item.featured ? 'kitd-membership__card--featured' : ''} ${hoveredPricing === index ? 'kitd-membership__card--hovered' : ''}`}
                    key={index}
                    style={{ transitionDelay: `${0.2 + index * 0.08}s` }}
                    onMouseEnter={() => setHoveredPricing(index)}
                    onMouseLeave={() => setHoveredPricing(null)}
                  >
                    {item.featured && (
                      <div className="kitd-membership__card-badge">
                        <Sparkles size={10} /><span>Popular</span>
                      </div>
                    )}
                    <div className="kitd-membership__card-icon" style={{ color: item.color }}>{item.icon}</div>
                    <h3 className="kitd-membership__card-title">{item.type}</h3>
                    <div className="kitd-membership__card-price">
                      <span className="kitd-membership__card-amount">{item.price}</span>
                      <span className="kitd-membership__card-period">{item.period}</span>
                    </div>
                    <p className="kitd-membership__card-desc">{item.description}</p>
                    <Link to="/membership" className={`kitd-membership__card-btn ${item.featured ? 'kitd-membership__card-btn--featured' : ''}`}>
                      <span>Choose Plan</span><ArrowRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="kitd-membership__trust">
                <Shield size={16} /><span>Join our growing community across Germany</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipCTA;