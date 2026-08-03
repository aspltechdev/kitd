// // src/pages/Membership/MembershipFAQ.jsx

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { 
//   HelpCircle, 
//   ArrowRight,
//   ChevronDown,
//   ChevronUp,
//   Mail,
//   Phone,
//   MessageCircle,
//   Users,
//   User,
//   Building,
//   Globe,
//   Bell,
//   FileText,
//   Clock,
//   CheckCircle,
//   Award,
//   BookOpen,
//   Calendar,
//   Heart
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// import "./MembershipFAQ.css";

// const MembershipFAQ = () => {
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [openItems, setOpenItems] = useState([]);

//   const categories = [
//     { id: "all", label: "All Questions", icon: <HelpCircle size={16} /> },
//     { id: "general", label: "General", icon: <Users size={16} /> },
//     { id: "membership", label: "Membership Types", icon: <Award size={16} /> },
//     { id: "application", label: "Application", icon: <FileText size={16} /> },
//     { id: "benefits", label: "Benefits", icon: <Heart size={16} /> }
//   ];

//   const faqs = [
//     {
//       id: 1,
//       category: "general",
//       question: "Who can become a member?",
//       answer: "Artists, teachers, students, institutions, researchers and supporters who share KITD's mission of preserving and promoting Indian Classical Dance in Germany."
//     },
//     {
//       id: 2,
//       category: "membership",
//       question: "What are the membership categories?",
//       answer: "KITD offers three membership categories:\n\n• Active Member – For trained dancers, teachers and learners of Indian Classical Dance.\n• Supporting Member – For individuals who wish to support KITD and its mission.\n• Youth Member – For young learners aged 15–18 pursuing Indian Classical Dance."
//     },
//     {
//       id: 3,
//       category: "application",
//       question: "How do I apply?",
//       answer: "Complete the online membership application form on our website. Applications are reviewed by the Executive Committee within 3-5 business days."
//     },
//     {
//       id: 4,
//       category: "general",
//       question: "Can institutions become members?",
//       answer: "Yes, institutions can become members. Please contact KITD directly for collaboration and institutional membership opportunities."
//     },
//     {
//       id: 5,
//       category: "general",
//       question: "Do I need to live in Germany?",
//       answer: "Membership is primarily intended for individuals and organisations connected with KITD's activities in Germany. However, we welcome international supporters who share our mission."
//     },
//     {
//       id: 6,
//       category: "benefits",
//       question: "How will I receive updates?",
//       answer: "Members receive regular newsletters, event announcements, and information about upcoming programmes and activities via email. You can also follow us on social media for real-time updates."
//     },
//     {
//       id: 7,
//       category: "membership",
//       question: "What is the membership fee?",
//       answer: "Membership fees vary by category:\n\n• Active Member – €50 per year\n• Supporting Member – €75 per year\n• Youth Member – €25 per year"
//     },
//     {
//       id: 8,
//       category: "application",
//       question: "How long does the application process take?",
//       answer: "The application process typically takes 5-10 business days from submission. This includes application review, committee approval, and membership confirmation."
//     },
//     {
//       id: 9,
//       category: "benefits",
//       question: "What benefits do I get as a member?",
//       answer: "Members enjoy collaborative networking, comprehensive resources, event promotion, community participation, professional growth opportunities, and the satisfaction of contributing to cultural preservation."
//     },
//     {
//       id: 10,
//       category: "general",
//       question: "Can I cancel my membership?",
//       answer: "Yes, you can cancel your membership at any time by contacting our membership team. Please refer to our terms and conditions for more details."
//     }
//   ];

//   const toggleItem = (id) => {
//     setOpenItems(prev => 
//       prev.includes(id) 
//         ? prev.filter(item => item !== id)
//         : [...prev, id]
//     );
//   };

//   const filteredFaqs = activeCategory === "all" 
//     ? faqs 
//     : faqs.filter(faq => faq.category === activeCategory);

//   return (
//     <div className="membership-faq-page">

//       {/* ============================================
//          1. HERO SECTION
//          ============================================ */}
//       <section className="faq-hero">
//         <div className="faq-hero-overlay" />
//         <div className="container">
//           <motion.div 
//             className="faq-hero-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.span 
//               className="faq-hero-tag"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <HelpCircle size={18} />
//               MEMBERSHIP FAQ
//             </motion.span>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               Frequently Asked
//               <span>Questions</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Find answers to the most common questions about KITD membership, 
//               application process, benefits, and more.
//             </motion.p>

//             <motion.div 
//               className="faq-hero-actions"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               <a href="#faq-section" className="primary-btn">
//                 Browse FAQs <ArrowRight size={18} />
//               </a>
//               <Link to="/contact" className="secondary-btn">
//                 Contact Us
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================
//          2. FAQ CATEGORIES
//          ============================================ */}
//       <section className="faq-categories">
//         <div className="container">
//           <div className="categories-wrapper">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
//                 onClick={() => setActiveCategory(category.id)}
//               >
//                 {category.icon}
//                 {category.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          3. ACCORDION
//          ============================================ */}
//       <section id="faq-section" className="faq-accordion">
//         <div className="container">
//           <motion.div 
//             className="section-header"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-tag">FAQ</span>
//             <h2>Frequently Asked Questions</h2>
//             <p>Find answers to common questions about KITD membership</p>
//           </motion.div>

//           {filteredFaqs.length === 0 ? (
//             <div className="no-faqs">
//               <p>No FAQs found for this category.</p>
//             </div>
//           ) : (
//             <div className="accordion">
//               {filteredFaqs.map((faq, index) => (
//                 <motion.div 
//                   key={faq.id}
//                   className={`accordion-item ${openItems.includes(faq.id) ? 'open' : ''}`}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                 >
//                   <button 
//                     className="accordion-header"
//                     onClick={() => toggleItem(faq.id)}
//                     aria-expanded={openItems.includes(faq.id)}
//                   >
//                     <span className="accordion-question">{faq.question}</span>
//                     <span className="accordion-icon">
//                       {openItems.includes(faq.id) ? (
//                         <ChevronUp size={20} />
//                       ) : (
//                         <ChevronDown size={20} />
//                       )}
//                     </span>
//                   </button>
                  
//                   <AnimatePresence>
//                     {openItems.includes(faq.id) && (
//                       <motion.div 
//                         className="accordion-body"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <div className="accordion-answer">
//                           {faq.answer.split('\n').map((line, i) => (
//                             line.trim() ? (
//                               <p key={i}>{line}</p>
//                             ) : null
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           )}

//           <div className="faq-footer">
//             <p>Still have questions? We're here to help!</p>
//             <Link to="/contact" className="contact-faq-btn">
//               Contact Our Team <ArrowRight size={16} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          4. CONTACT CTA
//          ============================================ */}
//       <section className="faq-cta">
//         <div className="container">
//           <motion.div 
//             className="cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="cta-icon">
//               <MessageCircle size={48} />
//             </div>
//             <h2>Still Have Questions?</h2>
//             <p>
//               Our membership team is ready to assist you with any questions about 
//               joining KITD or membership benefits.
//             </p>
//             <div className="cta-contact-info">
//               <div className="contact-item">
//                 <Mail size={18} />
//                 <a href="mailto:membership@kitd.de">membership@kitd.de</a>
//               </div>
//               <div className="contact-divider" />
//               <div className="contact-item">
//                 <Phone size={18} />
//                 <a href="tel:+49123456789">+49 XXX XXX XXXX</a>
//               </div>
//             </div>
//             <div className="cta-buttons">
//               <Link to="/contact" className="primary-btn">
//                 Contact Membership Team <ArrowRight size={18} />
//               </Link>
//               <Link to="/membership" className="secondary-btn">
//                 Become a Member
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default MembershipFAQ;


import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  HelpCircle, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Users,
  Award,
  FileText,
  Heart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

import "./MembershipFAQ.css";

// Import images
import acthero from "../../assets/acthero.png";
import contactcta from "../../assets/contactcta.png";

const MembershipFAQ = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState([]);

  const categories = [
    { id: "all", label: "All Questions", icon: <HelpCircle size={14} strokeWidth={1.5} /> },
    { id: "general", label: "General", icon: <Users size={14} strokeWidth={1.5} /> },
    { id: "membership", label: "Membership Types", icon: <Award size={14} strokeWidth={1.5} /> },
    { id: "application", label: "Application", icon: <FileText size={14} strokeWidth={1.5} /> },
    { id: "benefits", label: "Benefits", icon: <Heart size={14} strokeWidth={1.5} /> }
  ];

  const faqs = [
    {
      id: 1,
      category: "general",
      question: "Who can become a member?",
      answer: "Artists, teachers, students, institutions, researchers and supporters who share KITD's mission of preserving and promoting Indian Classical Dance in Germany."
    },
    {
      id: 2,
      category: "membership",
      question: "What are the membership categories?",
      answer: "KITD offers three membership categories:\n\n• Active Member – For trained dancers, teachers and learners of Indian Classical Dance.\n• Supporting Member – For individuals who wish to support KITD and its mission.\n• Youth Member – For young learners aged 15–18 pursuing Indian Classical Dance."
    },
    {
      id: 3,
      category: "application",
      question: "How do I apply?",
      answer: "Complete the online membership application form on our website. Applications are reviewed by the Executive Committee within 3-5 business days."
    },
    {
      id: 4,
      category: "general",
      question: "Can institutions become members?",
      answer: "Yes, institutions can become members. Please contact KITD directly for collaboration and institutional membership opportunities."
    },
    {
      id: 5,
      category: "general",
      question: "Do I need to live in Germany?",
      answer: "Membership is primarily intended for individuals and organisations connected with KITD's activities in Germany. However, we welcome international supporters who share our mission."
    },
    {
      id: 6,
      category: "benefits",
      question: "How will I receive updates?",
      answer: "Members receive regular newsletters, event announcements, and information about upcoming programmes and activities via email. You can also follow us on social media for real-time updates."
    },
    {
      id: 7,
      category: "membership",
      question: "What is the membership fee?",
      answer: "Membership fees vary by category:\n\n• Active Member – €50 per year\n• Supporting Member – €75 per year\n• Youth Member – €25 per year"
    },
    {
      id: 8,
      category: "application",
      question: "How long does the application process take?",
      answer: "The application process typically takes 5-10 business days from submission. This includes application review, committee approval, and membership confirmation."
    },
    {
      id: 9,
      category: "benefits",
      question: "What benefits do I get as a member?",
      answer: "Members enjoy collaborative networking, comprehensive resources, event promotion, community participation, professional growth opportunities, and the satisfaction of contributing to cultural preservation."
    },
    {
      id: 10,
      category: "general",
      question: "Can I cancel my membership?",
      answer: "Yes, you can cancel your membership at any time by contacting our membership team. Please refer to our terms and conditions for more details."
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Membership FAQ | KITD - Classical Indian Dance Germany</title>
        <meta name="description" content="Frequently asked questions about KITD membership, application process, benefits, and more." />
      </Helmet>

      <div className="mf-page">

        {/* ============================================
           1. HERO SECTION
           ============================================ */}
        <section className="mf-page__hero">
          <div className="mf-page__hero-bg">
            <img src={acthero} alt="KITD Membership FAQ" loading="eager" />
            <div className="mf-page__hero-overlay" />
            <div className="mf-page__hero-gradient" />
          </div>
          
          <div className="mf-page__hero-container">
            <div className="mf-page__hero-content">
              <span className="mf-page__hero-tag">MEMBERSHIP FAQ</span>
              <h1>
                Frequently Asked
                <span className="mf-page__hero-title-accent"> Questions</span>
              </h1>
              <p className="mf-page__hero-desc">
                Find answers to the most common questions about KITD membership, 
                application process, benefits, and more.
              </p>
              <div className="mf-page__hero-actions">
                <a href="#faq-section" className="mf-page__hero-btn mf-page__hero-btn--primary">
                  Browse FAQs <ArrowRight size={16} strokeWidth={1.5} />
                </a>
                <Link to="/contact" className="mf-page__hero-btn mf-page__hero-btn--secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           2. FAQ CATEGORIES
           ============================================ */}
        <section className="mf-page__categories">
          <div className="mf-page__container">
            <div className="mf-page__categories-wrapper">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`mf-page__category-btn ${activeCategory === category.id ? 'mf-page__category-btn--active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="mf-page__category-icon">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
           3. ACCORDION
           ============================================ */}
        <section id="faq-section" className="mf-page__faq">
          <div className="mf-page__container">
            <div className="mf-page__section-header">
              <span className="mf-page__section-tag">FAQ</span>
              <h2>Frequently Asked Questions</h2>
              <p>Find answers to common questions about KITD membership</p>
            </div>

            {filteredFaqs.length === 0 ? (
              <div className="mf-page__no-faqs">
                <p>No FAQs found for this category.</p>
              </div>
            ) : (
              <div className="mf-page__accordion">
                {filteredFaqs.map((faq, index) => (
                  <div 
                    key={faq.id}
                    className={`mf-page__accordion-item ${openItems.includes(faq.id) ? 'mf-page__accordion-item--open' : ''}`}
                    style={{ transitionDelay: `${index * 0.05}s` }}
                  >
                    <button 
                      className="mf-page__accordion-header"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={openItems.includes(faq.id)}
                    >
                      <span className="mf-page__accordion-question">{faq.question}</span>
                      <span className="mf-page__accordion-icon">
                        {openItems.includes(faq.id) ? (
                          <ChevronUp size={18} strokeWidth={1.5} />
                        ) : (
                          <ChevronDown size={18} strokeWidth={1.5} />
                        )}
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {openItems.includes(faq.id) && (
                        <div className="mf-page__accordion-body">
                          <div className="mf-page__accordion-answer">
                            {faq.answer.split('\n').map((line, i) => (
                              line.trim() ? (
                                <p key={i}>{line}</p>
                              ) : null
                            ))}
                          </div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            )}

            <div className="mf-page__faq-footer">
              <p>Still have questions? We're here to help!</p>
              <Link to="/contact" className="mf-page__contact-btn">
                Contact Our Team <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================
           4. CONTACT CTA
           ============================================ */}
        <section className="mf-page__cta">
          <div className="mf-page__cta-bg">
            <img src={contactcta} alt="KITD Community" loading="lazy" />
            <div className="mf-page__cta-overlay" />
          </div>
          
          <div className="mf-page__container">
            <div className="mf-page__cta-content">
              <h2>Still Have Questions?</h2>
              <p>
                Our membership team is ready to assist you with any questions about 
                joining KITD or membership benefits.
              </p>
              <div className="mf-page__cta-contact">
                <div className="mf-page__contact-item">
                  <Mail size={16} strokeWidth={1.5} />
                  <a href="mailto:membership@kitd.de">membership@kitd.de</a>
                </div>
                <div className="mf-page__contact-divider" />
                <div className="mf-page__contact-item">
                  <Phone size={16} strokeWidth={1.5} />
                  <a href="tel:+49123456789">+49 XXX XXX XXXX</a>
                </div>
              </div>
              <div className="mf-page__cta-buttons">
                <Link to="/contact" className="mf-page__cta-btn mf-page__cta-btn--primary">
                  Contact Membership Team <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
                <Link to="/membership" className="mf-page__cta-btn mf-page__cta-btn--secondary">
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MembershipFAQ;