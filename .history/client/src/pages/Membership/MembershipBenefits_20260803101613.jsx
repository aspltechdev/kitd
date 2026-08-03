// // src/pages/Membership/MembershipBenefits.jsx

// import { Link } from "react-router-dom";
// import { 
//   Users, 
//   ArrowRight,
//   Check,
//   BookOpen,
//   Calendar,
//   Heart,
//   Briefcase,
//   Award,
//   Sparkles,
//   Globe,
//   MessageCircle,
//   Star,
//   TrendingUp,
//   Share2,
//   Zap
// } from "lucide-react";
// import { motion } from "framer-motion";

// import "./MembershipBenefits.css";

// const MembershipBenefits = () => {
//   const benefits = [
//     {
//       id: 1,
//       icon: <Users size={32} />,
//       title: "Collaborative Networking",
//       description: "Connect with artists, teachers and institutions across Germany.",
//       color: "#8B1E3F"
//     },
//     {
//       id: 2,
//       icon: <BookOpen size={32} />,
//       title: "Comprehensive Resources",
//       description: "Access valuable educational and association resources.",
//       color: "#C41E3A"
//     },
//     {
//       id: 3,
//       icon: <Calendar size={32} />,
//       title: "Event Promotion",
//       description: "Promote performances, workshops and cultural initiatives.",
//       color: "#D4436A"
//     },
//     {
//       id: 4,
//       icon: <Users size={32} />,
//       title: "Community Participation",
//       description: "Take part in cultural events, meetings and association programmes.",
//       color: "#E85D75"
//     },
//     {
//       id: 5,
//       icon: <TrendingUp size={32} />,
//       title: "Professional Growth",
//       description: "Expand your artistic and professional network.",
//       color: "#8B1E3F"
//     },
//     {
//       id: 6,
//       icon: <Heart size={32} />,
//       title: "Cultural Contribution",
//       description: "Support the preservation and promotion of Indian Classical Dance.",
//       color: "#C41E3A"
//     }
//   ];

//   const reasons = [
//     {
//       icon: <Sparkles size={24} />,
//       title: "Exclusive Opportunities",
//       description: "Access to members-only events, workshops, and performances"
//     },
//     {
//       icon: <Share2 size={24} />,
//       title: "Network Building",
//       description: "Connect with a vibrant community of artists and enthusiasts"
//     },
//     {
//       icon: <Zap size={24} />,
//       title: "Skill Development",
//       description: "Continuous learning through workshops and training programs"
//     },
//     {
//       icon: <Globe size={24} />,
//       title: "Cultural Impact",
//       description: "Make a meaningful contribution to cultural preservation"
//     }
//   ];

//   return (
//     <div className="membership-benefits-page">

//       {/* ============================================
//          1. HERO SECTION
//          ============================================ */}
//       <section className="benefits-hero">
//         <div className="benefits-hero-overlay" />
//         <div className="container">
//           <motion.div 
//             className="benefits-hero-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.span 
//               className="benefits-hero-tag"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <Award size={18} />
//               MEMBERSHIP BENEFITS
//             </motion.span>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               Why Become
//               <span>a KITD Member?</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Membership offers opportunities to collaborate, learn, perform and 
//               contribute to the continued growth of Indian Classical Dance in Germany.
//             </motion.p>

//             <motion.div 
//               className="benefits-hero-actions"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               <a href="#benefits" className="primary-btn">
//                 Explore Benefits <ArrowRight size={18} />
//               </a>
//               <Link to="/membership" className="secondary-btn">
//                 Become a Member
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================
//          2. BENEFITS OVERVIEW
//          ============================================ */}
//       <section className="benefits-overview">
//         <div className="container">
//           <motion.div 
//             className="overview-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="section-tag">Overview</span>
//             <h2>Membership That Makes a Difference</h2>
//             <p className="overview-description">
//               KITD membership connects you with a vibrant community of artists, educators, 
//               and cultural enthusiasts who are passionate about preserving and promoting 
//               Indian Classical Dance in Germany.
//             </p>
//           </motion.div>

//           <div className="overview-stats">
//             <div className="stat-card">
//               <span className="stat-number">500+</span>
//               <span className="stat-label">Members Nationwide</span>
//             </div>
//             <div className="stat-card">
//               <span className="stat-number">15+</span>
//               <span className="stat-label">Cities Covered</span>
//             </div>
//             <div className="stat-card">
//               <span className="stat-number">50+</span>
//               <span className="stat-label">Annual Events</span>
//             </div>
//             <div className="stat-card">
//               <span className="stat-number">10+</span>
//               <span className="stat-label">Years of Excellence</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          3. BENEFIT CARDS
//          ============================================ */}
//       <section id="benefits" className="benefits-grid-section">
//         <div className="container">
//           <motion.div 
//             className="section-header"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-tag">Benefits</span>
//             <h2>Member Benefits</h2>
//             <p>Discover all the advantages of becoming a KITD member</p>
//           </motion.div>

//           <div className="benefits-grid">
//             {benefits.map((benefit, index) => (
//               <motion.div 
//                 key={benefit.id}
//                 className="benefit-card"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05 }}
//               >
//                 <div className="benefit-number">{benefit.id}</div>
//                 <div className="benefit-icon" style={{ background: benefit.color }}>
//                   {benefit.icon}
//                 </div>
//                 <h3>{benefit.title}</h3>
//                 <p>{benefit.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          4. WHY BECOME A MEMBER
//          ============================================ */}
//       <section className="why-become-member">
//         <div className="container">
//           <motion.div 
//             className="why-become-wrapper"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="why-become-content">
//               <span className="section-tag">Why Join</span>
//               <h2>Why Become a Member?</h2>
//               <p>
//                 Join a community that celebrates and preserves the rich heritage of 
//                 Indian Classical Dance in Germany.
//               </p>

//               <div className="why-become-grid">
//                 {reasons.map((reason, index) => (
//                   <div key={index} className="why-become-item">
//                     <div className="why-become-icon">{reason.icon}</div>
//                     <div>
//                       <h4>{reason.title}</h4>
//                       <p>{reason.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="why-become-cta">
//                 <Link to="/membership" className="cta-btn">
//                   Become a Member Today <ArrowRight size={18} />
//                 </Link>
//               </div>
//             </div>

//             <div className="why-become-image">
//               <img 
//                 src="https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
//                 alt="KITD Community"
//               />
//               <div className="why-become-image-overlay">
//                 <div className="image-quote">
//                   <Heart size={24} />
//                   <p>"Being a KITD member has connected me with incredible artists and opportunities."</p>
//                   <span>- KITD Member</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================
//          5. CTA SECTION
//          ============================================ */}
//       <section className="benefits-cta">
//         <div className="container">
//           <motion.div 
//             className="cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2>Ready to Join KITD?</h2>
//             <p>
//               Take the first step towards becoming part of Germany's leading Indian 
//               Classical Dance community.
//             </p>
//             <div className="cta-buttons">
//               <Link to="/membership" className="primary-btn">
//                 Become a Member <ArrowRight size={18} />
//               </Link>
//               <Link to="/contact" className="secondary-btn">
//                 Contact Us
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default MembershipBenefits;



import { Link } from "react-router-dom";
import { 
  ArrowRight,
  BookOpen,
  Calendar,
  Heart,
  Award,
  Sparkles,
  Globe,
  Star,
  TrendingUp,
  Share2,
  Zap,
  Users,
  Check
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import "./MembershipBenefits.css";

// Import images
import acthero from "../../assets/acthero.png";
import contactcta from "../../assets/contactcta.png";

const MembershipBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <Users size={28} strokeWidth={1.5} />,
      title: "Collaborative Networking",
      description: "Connect with artists, teachers and institutions across Germany.",
    },
    {
      id: 2,
      icon: <BookOpen size={28} strokeWidth={1.5} />,
      title: "Comprehensive Resources",
      description: "Access valuable educational and association resources.",
    },
    {
      id: 3,
      icon: <Calendar size={28} strokeWidth={1.5} />,
      title: "Event Promotion",
      description: "Promote performances, workshops and cultural initiatives.",
    },
    {
      id: 4,
      icon: <Users size={28} strokeWidth={1.5} />,
      title: "Community Participation",
      description: "Take part in cultural events, meetings and association programmes.",
    },
    {
      id: 5,
      icon: <TrendingUp size={28} strokeWidth={1.5} />,
      title: "Professional Growth",
      description: "Expand your artistic and professional network.",
    },
    {
      id: 6,
      icon: <Heart size={28} strokeWidth={1.5} />,
      title: "Cultural Contribution",
      description: "Support the preservation and promotion of Indian Classical Dance.",
    }
  ];

  const reasons = [
    {
      icon: <Sparkles size={20} strokeWidth={1.5} />,
      title: "Exclusive Opportunities",
      description: "Access to members-only events, workshops, and performances"
    },
    {
      icon: <Share2 size={20} strokeWidth={1.5} />,
      title: "Network Building",
      description: "Connect with a vibrant community of artists and enthusiasts"
    },
    {
      icon: <Zap size={20} strokeWidth={1.5} />,
      title: "Skill Development",
      description: "Continuous learning through workshops and training programs"
    },
    {
      icon: <Globe size={20} strokeWidth={1.5} />,
      title: "Cultural Impact",
      description: "Make a meaningful contribution to cultural preservation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Membership Benefits | KITD - Classical Indian Dance Germany</title>
        <meta name="description" content="Discover the benefits of KITD membership - networking, resources, event promotion, and community participation." />
      </Helmet>

      <div className="mb-page">

        {/* ============================================
           1. HERO SECTION
           ============================================ */}
        <section className="mb-page__hero">
          <div className="mb-page__hero-bg">
            <img src={acthero} alt="KITD Membership Benefits" loading="eager" />
            <div className="mb-page__hero-overlay" />
            <div className="mb-page__hero-gradient" />
          </div>
          
          <div className="mb-page__hero-container">
            <div className="mb-page__hero-content">
              <span className="mb-page__hero-tag">MEMBERSHIP BENEFITS</span>
              <h1>
                Why Become
                <span className="mb-page__hero-title-accent"> a KITD Member?</span>
              </h1>
              <p className="mb-page__hero-desc">
                Membership offers opportunities to collaborate, learn, perform and 
                contribute to the continued growth of Indian Classical Dance in Germany.
              </p>
              <div className="mb-page__hero-actions">
                <a href="#benefits" className="mb-page__hero-btn mb-page__hero-btn--primary">
                  Explore Benefits <ArrowRight size={16} strokeWidth={1.5} />
                </a>
                <Link to="/membership" className="mb-page__hero-btn mb-page__hero-btn--secondary">
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           2. BENEFITS OVERVIEW
           ============================================ */}
        <section className="mb-page__overview">
          <div className="mb-page__container">
            <div className="mb-page__overview-content">
              <span className="mb-page__section-tag">Overview</span>
              <h2>Membership That Makes a Difference</h2>
              <p className="mb-page__overview-desc">
                KITD membership connects you with a vibrant community of artists, educators, 
                and cultural enthusiasts who are passionate about preserving and promoting 
                Indian Classical Dance in Germany.
              </p>
            </div>

            <div className="mb-page__overview-stats">
              <div className="mb-page__stat-card">
                <span className="mb-page__stat-number">500+</span>
                <span className="mb-page__stat-label">Members Nationwide</span>
              </div>
              <div className="mb-page__stat-divider" />
              <div className="mb-page__stat-card">
                <span className="mb-page__stat-number">15+</span>
                <span className="mb-page__stat-label">Cities Covered</span>
              </div>
              <div className="mb-page__stat-divider" />
              <div className="mb-page__stat-card">
                <span className="mb-page__stat-number">50+</span>
                <span className="mb-page__stat-label">Annual Events</span>
              </div>
              <div className="mb-page__stat-divider" />
              <div className="mb-page__stat-card">
                <span className="mb-page__stat-number">10+</span>
                <span className="mb-page__stat-label">Years of Excellence</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           3. BENEFIT CARDS
           ============================================ */}
        <section id="benefits" className="mb-page__benefits">
          <div className="mb-page__container">
            <div className="mb-page__section-header">
              <span className="mb-page__section-tag">Benefits</span>
              <h2>Member Benefits</h2>
              <p>Discover all the advantages of becoming a KITD member</p>
            </div>

            <div className="mb-page__benefits-grid">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.id}
                  className="mb-page__benefit-card"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <div className="mb-page__benefit-number">{String(benefit.id).padStart(2, '0')}</div>
                  <div className="mb-page__benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
           4. WHY BECOME A MEMBER
           ============================================ */}
        <section className="mb-page__why">
          <div className="mb-page__container">
            <div className="mb-page__why-wrapper">
              <div className="mb-page__why-content">
                <span className="mb-page__section-tag">Why Join</span>
                <h2>Why Become a Member?</h2>
                <p>
                  Join a community that celebrates and preserves the rich heritage of 
                  Indian Classical Dance in Germany.
                </p>

                <div className="mb-page__why-grid">
                  {reasons.map((reason, index) => (
                    <div key={index} className="mb-page__why-item">
                      <div className="mb-page__why-icon">{reason.icon}</div>
                      <div>
                        <h4>{reason.title}</h4>
                        <p>{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-page__why-cta">
                  <Link to="/membership" className="mb-page__why-btn">
                    Become a Member Today <ArrowRight size={16} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>

              <div className="mb-page__why-image">
                <img 
                  src="https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="KITD Community"
                  loading="lazy"
                />
                <div className="mb-page__why-image-overlay">
                  <div className="mb-page__why-quote">
                    <Heart size={20} strokeWidth={1.5} />
                    <p>"Being a KITD member has connected me with incredible artists and opportunities."</p>
                    <span>— KITD Member</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           5. CTA SECTION
           ============================================ */}
        <section className="mb-page__cta">
          <div className="mb-page__cta-bg">
            <img src={contactcta} alt="KITD Community" loading="lazy" />
            <div className="mb-page__cta-overlay" />
          </div>
          
          <div className="mb-page__container">
            <div className="mb-page__cta-content">
              <h2>Ready to Join KITD?</h2>
              <p>
                Take the first step towards becoming part of Germany's leading Indian 
                Classical Dance community.
              </p>
              <div className="mb-page__cta-buttons">
                <Link to="/membership" className="mb-page__cta-btn mb-page__cta-btn--primary">
                  Become a Member <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
                <Link to="/contact" className="mb-page__cta-btn mb-page__cta-btn--secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MembershipBenefits;