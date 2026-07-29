// // src/components/home/WhyJoinSection/WhyJoinSection.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Users,
//   BookOpen,
//   Megaphone,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react";

// import "./WhyJoinSection.css";

// const benefits = [
//   {
//     id: 1,
//     icon: <Users size={24} strokeWidth={1.5} />,
//     title: "Collaborative Networking",
//     description:
//       "Connect with dancers, teachers, institutions, and cultural professionals across Germany. Build meaningful relationships and foster collaboration within the Indian Classical Dance community.",
//     highlights: [
//       "Artist directory access",
//       "Community events",
//       "Professional networking",
//     ],
//   },
//   {
//     id: 2,
//     icon: <BookOpen size={24} strokeWidth={1.5} />,
//     title: "Comprehensive Resources",
//     description:
//       "Access valuable member information, institutions, events, and educational resources through a growing network dedicated to Indian Classical Dance knowledge sharing.",
//     highlights: [
//       "Member resources",
//       "Event calendar",
//       "Educational materials",
//     ],
//   },
//   {
//     id: 3,
//     icon: <Megaphone size={24} strokeWidth={1.5} />,
//     title: "Event Promotion & Visibility",
//     description:
//       "Promote your performances, workshops, festivals, and cultural initiatives through KITD's platform while expanding your reach within the community and beyond.",
//     highlights: [
//       "Event promotion",
//       "Social media reach",
//       "Newsletter features",
//     ],
//   },
// ];

// const membershipTypes = [
//   {
//     type: "Active Member",
//     price: "€60",
//     period: "/year",
//     description: "Full voting rights and participation",
//   },
//   {
//     type: "Supporting Member",
//     price: "€45",
//     period: "/year",
//     description: "Support the mission without voting rights",
//   },
//   {
//     type: "Youth Member",
//     price: "€30",
//     period: "/year",
//     description: "For young enthusiasts under 25",
//   },
// ];

// const WhyJoinSection = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.15 }
//     );

//     const section = document.querySelector('.why-join-section');
//     if (section) observer.observe(section);

//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, []);

//   return (
//     <section className={`why-join-section ${isVisible ? 'visible' : ''}`}>
//       <div className="why-container">
        
//         {/* Section Header */}
//         <div className="why-header">
//           <div className="why-eyebrow">
//             <span className="why-eyebrow-line" />
//             <span className="why-eyebrow-text">Membership Benefits</span>
//           </div>
          
//           <h2 className="why-title">
//             Why Join
//             <span className="why-title-accent"> KITD</span>
//           </h2>
          
//           <p className="why-subtitle">
//             KITD brings together artists, educators, institutions, and cultural 
//             enthusiasts to preserve, promote, and strengthen Indian Classical 
//             Dance across Germany.
//           </p>
//         </div>

//         {/* Benefits Grid */}
//         <div className="why-grid">
//           {benefits.map((item, index) => (
//             <div 
//               className="why-card" 
//               key={item.id}
//               style={{ transitionDelay: `${index * 0.1}s` }}
//             >
//               <div className="why-card-header">
//                 <div className="why-card-icon">
//                   {item.icon}
//                 </div>
//                 <span className="why-card-number">0{index + 1}</span>
//               </div>

//               <h3 className="why-card-title">{item.title}</h3>
              
//               <p className="why-card-description">{item.description}</p>
              
//               <ul className="why-card-highlights">
//                 {item.highlights.map((highlight, idx) => (
//                   <li key={idx} className="why-highlight-item">
//                     <CheckCircle size={14} strokeWidth={1.5} className="why-highlight-icon" />
//                     <span>{highlight}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Membership Types Preview */}
//         <div className="why-membership-preview">
//           <h3 className="why-preview-title">Membership Types</h3>
          
//           <div className="why-pricing-grid">
//             {membershipTypes.map((item, index) => (
//               <div 
//                 className="why-pricing-card" 
//                 key={index}
//                 style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
//               >
//                 <div className="why-pricing-header">
//                   <span className="why-pricing-type">{item.type}</span>
//                 </div>
                
//                 <div className="why-pricing-amount">
//                   <span className="why-pricing-price">{item.price}</span>
//                   <span className="why-pricing-period">{item.period}</span>
//                 </div>
                
//                 <p className="why-pricing-description">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="why-cta-wrapper">
//           <Link to="/membership" className="why-cta">
//             <span>Explore Membership Options</span>
//             <span className="why-cta-icon">
//               <ArrowRight size={18} strokeWidth={1.5} />
//             </span>
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyJoinSection;


// src/components/home/WhyJoinSection/WhyJoinSection.jsx

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  BookOpen,
  Megaphone,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";

import "./WhyJoinSection.css";

const benefits = [
  {
    id: 1,
    icon: <Users size={24} strokeWidth={1.5} />,
    title: "Collaborative Networking",
    description:
      "Connect with dancers, teachers, institutions, and cultural professionals across Germany. Build meaningful relationships and foster collaboration within the Indian Classical Dance community.",
    highlights: [
      "Artist directory access",
      "Community events",
      "Professional networking",
    ],
    image: "https://images.pexels.com/photos/14469571/pexels-photo-14469571.jpeg",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.15) 0%, rgba(60, 10, 30, 0.55) 100%)",
    featured: true,
  },
  {
    id: 2,
    icon: <BookOpen size={24} strokeWidth={1.5} />,
    title: "Comprehensive Resources",
    description:
      "Access valuable member information, institutions, events, and educational resources through a growing network dedicated to Indian Classical Dance knowledge sharing.",
    highlights: [
      "Member resources",
      "Event calendar",
      "Educational materials",
    ],
    image: "https://images.pexels.com/photos/34717625/pexels-photo-34717625.jpeg",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.15) 0%, rgba(60, 10, 30, 0.55) 100%)",
    featured: false,
  },
  {
    id: 3,
    icon: <Megaphone size={24} strokeWidth={1.5} />,
    title: "Event Promotion & Visibility",
    description:
      "Promote your performances, workshops, festivals, and cultural initiatives through KITD's platform while expanding your reach within the community and beyond.",
    highlights: [
      "Event promotion",
      "Social media reach",
      "Newsletter features",
    ],
    image: "https://images.pexels.com/photos/30481577/pexels-photo-30481577.jpeg",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.15) 0%, rgba(60, 10, 30, 0.55) 100%)",
    featured: false,
  },
];

const membershipTypes = [
  {
    type: "Active Member",
    price: "€60",
    period: "/year",
    description: "Full voting rights and participation",
    color: "#8B1E3F",
    icon: <Award size={20} strokeWidth={1.5} />,
  },
  {
    type: "Supporting Member",
    price: "€45",
    period: "/year",
    description: "Support the mission without voting rights",
    color: "#C41E3A",
    icon: <Star size={20} strokeWidth={1.5} />,
  },
  {
    type: "Youth Member",
    price: "€30",
    period: "/year",
    description: "For young enthusiasts under 25",
    color: "#D4436A",
    icon: <TrendingUp size={20} strokeWidth={1.5} />,
  },
];

const WhyJoinSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredPricing, setHoveredPricing] = useState(null);
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

  return (
    <section className={`why-join-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      {/* Decorative Background Elements */}
      <div className="why-decorative why-decorative--1" />
      <div className="why-decorative why-decorative--2" />
      <div className="why-decorative why-decorative--3" />

      <div className="why-container">
        
        {/* Section Header */}
        <div className="why-header">
          <div className="why-eyebrow">
            <span className="why-eyebrow-line" />
            <span className="why-eyebrow-text">Membership Benefits</span>
          </div>
          
          <h2 className="why-title">
            Why Join
            <span className="why-title-accent"> KITD</span>
          </h2>
          
          <p className="why-subtitle">
            KITD brings together artists, educators, institutions, and cultural 
            enthusiasts to preserve, promote, and strengthen Indian Classical 
            Dance across Germany.
          </p>
        </div>

        {/* Benefits Cards with Image Background & Overlay Content */}
        <div className="why-grid">
          {benefits.map((item, index) => (
            <div 
              className={`why-card ${hoveredCard === index ? 'why-card--hovered' : ''} ${item.featured ? 'why-card--featured' : ''}`}
              key={item.id}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {item.featured && (
                <div className="why-card__featured-badge">
                  <Sparkles size={12} />
                  <span>Featured</span>
                </div>
              )}
              
              <div 
                className="why-card__background"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              <div 
                className="why-card__overlay"
                style={{ background: item.gradient }}
              />
              
              <div className="why-card__content-wrapper">
                {/* Top Section */}
                <div className="why-card__top">
                  <div className="why-card__icon-wrapper">
                    <div className="why-card__icon">
                      {item.icon}
                    </div>
                  </div>
                  <div className="why-card__number">0{index + 1}</div>
                </div>

                {/* Content */}
                <div className="why-card__content">
                  <h3 className="why-card__title">{item.title}</h3>
                  
                  <p className="why-card__description">{item.description}</p>
                  
                  <ul className="why-card__highlights">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="why-card__highlight-item">
                        <CheckCircle size={14} strokeWidth={1.5} className="why-card__highlight-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="why-card__learn-more">
                    <Link to="/membership" className="why-card__learn-link">
                      Learn More
                      <ArrowRight size={16} strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Membership Types Preview */}
        <div className="why-membership-preview">
          <div className="why-preview-header">
            <Sparkles size={24} className="why-preview-icon" />
            <h3 className="why-preview-title">Choose Your Membership</h3>
            <p className="why-preview-subtitle">Select the plan that fits your journey</p>
          </div>
          
          <div className="why-pricing-grid">
            {membershipTypes.map((item, index) => (
              <div 
                className={`why-pricing-card ${index === 1 ? 'why-pricing-card--featured' : ''}`}
                key={index}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredPricing(index)}
                onMouseLeave={() => setHoveredPricing(null)}
              >
                {index === 1 && (
                  <span className="why-pricing__popular">
                    <Star size={12} />
                    Most Popular
                  </span>
                )}
                
                <div className="why-pricing-icon-wrapper" style={{ backgroundColor: item.color + '15' }}>
                  <div className="why-pricing-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                </div>
                
                <div className="why-pricing-header">
                  <span className="why-pricing-type">{item.type}</span>
                </div>
                
                <div className="why-pricing-amount">
                  <span className="why-pricing-price">{item.price}</span>
                  <span className="why-pricing-period">{item.period}</span>
                </div>
                
                <p className="why-pricing-description">{item.description}</p>

                <Link to="/membership" className={`why-pricing-cta ${index === 1 ? 'why-pricing-cta--featured' : ''}`}>
                  <span>Join Now</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="why-cta-wrapper">
          <Link to="/membership" className="why-cta">
            <span>Explore All Membership Options</span>
            <span className="why-cta-icon">
              <ArrowRight size={18} strokeWidth={1.5} />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyJoinSection;