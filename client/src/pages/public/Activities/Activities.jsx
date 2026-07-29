// // // src/components/home/ActivitiesSection/ActivitiesSection.jsx

// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import { ArrowRight } from "lucide-react";
// // import { getAllActivities } from "../../../api/activity.api";
// // import "./ActivitiesSection.css";

// // const ActivitiesSection = () => {
// //   const [activities, setActivities] = useState([]);

// //   useEffect(() => {
// //     fetchActivities();
// //   }, []);

// //   const fetchActivities = async () => {
// //     try {
// //       const res = await getAllActivities({
// //         page: 1,
// //         limit: 4,
// //       });

// //       const data =
// //         res.data?.data?.activities ||
// //         res.data?.data ||
// //         [];

// //       setActivities(data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   return (
// //     <section className="activities-section">

// //       <div className="container">

// //         <div className="section-header">

// //           <span className="section-tag">
// //             OUR ACTIVITIES
// //           </span>

// //           <h2>
// //             Bringing Indian Classical Dance
// //             <br />
// //             to Communities Across Germany
// //           </h2>

// //         </div>

// //         {activities.map((activity, index) => (

// //           <div
// //             key={activity.id}
// //             className={`activity-row ${
// //               index % 2 !== 0 ? "reverse" : ""
// //             }`}
// //           >

// //             <div className="activity-image">

// //               <img
// //                 src={activity.image}
// //                 alt={activity.title}
// //               />

// //             </div>

// //             <div className="activity-content">

// //               <span className="activity-number">
// //                 {String(index + 1).padStart(2, "0")}
// //               </span>

// //               <h3>{activity.title}</h3>

// //               <p>{activity.description}</p>

// //               <Link
// //                 to={`/activities/${activity.slug}`}
// //                 className="activity-btn"
// //               >
// //                 Learn More
// //                 <ArrowRight size={18} />
// //               </Link>

// //             </div>

// //           </div>

// //         ))}

// //       </div>

// //     </section>
// //   );
// // };

// // export default ActivitiesSection;


// // src/components/home/ActivitiesSection/ActivitiesSection.jsx

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Music, Users, Globe, BookOpen } from "lucide-react";
// import "./ActivitiesSection.css";

// // Fallback activities based on brochure content
// const FALLBACK_ACTIVITIES = [
//   {
//     id: 1,
//     icon: <Music size={28} strokeWidth={1.5} />,
//     title: "Classical Dance Performances",
//     description:
//       "Showcasing the richness and diversity of Indian Classical Dance through public performances, festivals, and cultural celebrations across Germany.",
//     slug: "performances",
//     image: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 2,
//     icon: <BookOpen size={28} strokeWidth={1.5} />,
//     title: "Workshops & Masterclasses",
//     description:
//       "Organising educational workshops, lecture demonstrations, and masterclasses led by experienced artists to encourage continuous learning and skill development.",
//     slug: "workshops",
//     image: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 3,
//     icon: <Users size={28} strokeWidth={1.5} />,
//     title: "Community Collaboration",
//     description:
//       "Building meaningful connections between artists, institutions, and cultural organisations to strengthen the Indian Classical Dance community throughout Germany.",
//     slug: "collaboration",
//     image: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id: 4,
//     icon: <Globe size={28} strokeWidth={1.5} />,
//     title: "Cultural Exchange",
//     description:
//       "Promoting intercultural dialogue by introducing Indian Classical Dance traditions to wider audiences through collaborative initiatives and public engagement.",
//     slug: "cultural-exchange",
//     image: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
// ];

// const ActivitiesSection = () => {
//   const [activities, setActivities] = useState(FALLBACK_ACTIVITIES);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     fetchActivities();
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.15 }
//     );

//     const section = document.querySelector('.activities-section');
//     if (section) observer.observe(section);

//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, []);

//   const fetchActivities = async () => {
//     try {
//       // Uncomment when API is ready
//       // const res = await getAllActivities({ page: 1, limit: 4 });
//       // const data = res.data?.data?.activities || res.data?.data || [];
//       // if (data.length > 0) setActivities(data);
      
//       // Using fallback data for now
//     } catch (err) {
//       console.error("Failed to fetch activities:", err);
//       // Keep using fallback data
//     }
//   };

//   return (
//     <section className={`activities-section ${isVisible ? 'visible' : ''}`}>
//       <div className="activities-container">
        
//         {/* Section Header */}
//         <div className="activities-header">
//           <div className="activities-eyebrow">
//             <span className="activities-eyebrow-line" />
//             <span className="activities-eyebrow-text">What We Do</span>
//           </div>
          
//           <h2 className="activities-title">
//             Preserving, Promoting &
//             <span className="activities-title-accent"> Celebrating</span>
//             <br />
//             Indian Classical Dance
//           </h2>
          
//           <p className="activities-subtitle">
//             Through performances, educational initiatives, collaborations, and 
//             cultural exchange, KITD creates opportunities for artists and communities 
//             to connect while preserving the rich traditions of Indian Classical Dance 
//             across Germany.
//           </p>
//         </div>

//         {/* Activities Grid */}
//         <div className="activities-grid">
//           {activities.map((activity, index) => (
//             <Link
//               to={`/activities/${activity.slug || activity.id}`}
//               key={activity.id || index}
//               className="activity-card"
//               style={{ transitionDelay: `${index * 0.1}s` }}
//             >
//               {/* Card Image */}
//               <div className="activity-card-image">
//                 <img
//                   src={activity.image}
//                   alt={activity.title}
//                   loading="lazy"
//                 />
//                 <div className="activity-card-overlay" />
                
//                 {/* Icon on image */}
//                 <div className="activity-card-icon">
//                   {activity.icon}
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="activity-card-content">
//                 <span className="activity-card-number">
//                   {String(index + 1).padStart(2, '0')}
//                 </span>
                
//                 <h3 className="activity-card-title">
//                   {activity.title}
//                 </h3>
                
//                 <p className="activity-card-description">
//                   {activity.description}
//                 </p>
                
//                 <span className="activity-card-link">
//                   <span>Explore Activity</span>
//                   <ArrowRight size={15} strokeWidth={1.5} />
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="activities-cta-wrapper">
//           <Link to="/activities" className="activities-cta">
//             <span>View All Activities</span>
//             <span className="activities-cta-icon">
//               <ArrowRight size={16} strokeWidth={1.5} />
//             </span>
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ActivitiesSection;


// src/components/home/ActivitiesSection/ActivitiesSection.jsx

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import "./ActivitiesSection.css";

// Fallback activities based on brochure content
const FALLBACK_ACTIVITIES = [
  {
    id: 1,
    title: "Classical Dance Performances",
    description:
      "Showcasing the richness and diversity of Indian Classical Dance through public performances, festivals, and cultural celebrations across Germany.",
    slug: "performances",
    image: "https://images.pexels.com/photos/35685774/pexels-photo-35685774.jpeg",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
    featured: true,
  },
  {
    id: 2,
    title: "Workshops & Masterclasses",
    description:
      "Organising educational workshops, lecture demonstrations, and masterclasses led by experienced artists to encourage continuous learning and skill development.",
    slug: "workshops",
    image: "https://images.pexels.com/photos/33638423/pexels-photo-33638423.jpeg",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
    featured: false,
  },
  {
    id: 3,
    title: "Community Collaboration",
    description:
      "Building meaningful connections between artists, institutions, and cultural organisations to strengthen the Indian Classical Dance community throughout Germany.",
    slug: "collaboration",
    image: "https://images.pexels.com/photos/30481579/pexels-photo-30481579.jpeg",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
    featured: false,
  },
  {
    id: 4,
    title: "Cultural Exchange",
    description:
      "Promoting intercultural dialogue by introducing Indian Classical Dance traditions to wider audiences through collaborative initiatives and public engagement.",
    slug: "cultural-exchange",
    image: "https://images.pexels.com/photos/31521701/pexels-photo-31521701.jpeg",
    gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
    featured: false,
  },
];

const ActivitiesSection = () => {
  const [activities, setActivities] = useState(FALLBACK_ACTIVITIES);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetchActivities();
    
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

  const fetchActivities = async () => {
    try {
      // Uncomment when API is ready
      // const res = await getAllActivities({ page: 1, limit: 4 });
      // const data = res.data?.data?.activities || res.data?.data || [];
      // if (data.length > 0) setActivities(data);
    } catch (err) {
      console.error("Failed to fetch activities:", err);
    }
  };

  return (
    <section className={`kitd-activities ${isVisible ? 'kitd-activities--visible' : ''}`} ref={sectionRef}>
      {/* Decorative Background Elements */}
      <div className="kitd-activities__deco kitd-activities__deco--1" />
      <div className="kitd-activities__deco kitd-activities__deco--2" />
      <div className="kitd-activities__deco kitd-activities__deco--3" />

      <div className="kitd-activities__container">
        
        {/* Section Header */}
        <div className="kitd-activities__header">
          <div className="kitd-activities__eyebrow">
            <span className="kitd-activities__eyebrow-line" />
            <span className="kitd-activities__eyebrow-text">What We Do</span>
          </div>
          
          <h2 className="kitd-activities__title">
            Preserving, Promoting &
            <span className="kitd-activities__title-accent"> Celebrating</span>
            <br />
            Indian Classical Dance
          </h2>
          
          <p className="kitd-activities__subtitle">
            Through performances, educational initiatives, collaborations, and 
            cultural exchange, KITD creates opportunities for artists and communities 
            to connect while preserving the rich traditions of Indian Classical Dance 
            across Germany.
          </p>
        </div>

        {/* Activities Cards */}
        <div className="kitd-activities__grid">
          {activities.map((activity, index) => (
            <div 
              className={`kitd-activities__card ${hoveredCard === index ? 'kitd-activities__card--hovered' : ''} ${activity.featured ? 'kitd-activities__card--featured' : ''}`}
              key={activity.id || index}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {activity.featured && (
                <div className="kitd-activities__card-badge">
                  <Sparkles size={12} />
                  <span>Featured</span>
                </div>
              )}
              
              <div 
                className="kitd-activities__card-bg"
                style={{ backgroundImage: `url(${activity.image})` }}
              />
              
              <div 
                className="kitd-activities__card-overlay"
                style={{ background: activity.gradient }}
              />
              
              <div className="kitd-activities__card-wrapper">
                <div className="kitd-activities__card-top">
                  <span className="kitd-activities__card-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="kitd-activities__card-body">
                  <h3 className="kitd-activities__card-title">{activity.title}</h3>
                  <p className="kitd-activities__card-desc">{activity.description}</p>
                  
                  <Link 
                    to={`/activities/${activity.slug || activity.id}`} 
                    className="kitd-activities__card-link"
                  >
                    <span>Explore Activity</span>
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="kitd-activities__cta-wrapper">
          <Link to="/activities" className="kitd-activities__cta">
            <span>View All Activities</span>
            <span className="kitd-activities__cta-icon">
              <ArrowRight size={16} strokeWidth={1.5} />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ActivitiesSection;