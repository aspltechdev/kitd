// // src/pages/Volunteer/VolunteerPage.jsx

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { 
//   Users, 
//   ArrowRight,
//   Check,
//   Clock,
//   Calendar,
//   Mail,
//   Phone,
//   MapPin,
//   User,
//   Briefcase,
//   Heart,
//   Star,
//   Sparkles,
//   Shield,
//   Globe,
//   MessageCircle,
//   ChevronDown,
//   ChevronUp,
//   Camera,
//   PenTool,
//   Share2,
//   Headphones,
//   FileText,
//   Megaphone,
//   Award,
//   BookOpen,
//   Lightbulb,
//   Smile,
//   HandHeart
// } from "lucide-react";
// import { motion } from "framer-motion";

// import "./VolunteerPage.css";

// const VolunteerPage = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     city: "",
//     country: "Germany",
//     occupation: "",
//     areasOfInterest: [],
//     availability: "",
//     previousExperience: "",
//     message: ""
//   });

//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const [expandedJourney, setExpandedJourney] = useState(null);

//   const opportunities = [
//     {
//       id: 1,
//       icon: <Calendar size={32} />,
//       title: "Event Support",
//       description: "Assist with performances, workshops and festivals.",
//       color: "#8B1E3F"
//     },
//     {
//       id: 2,
//       icon: <Users size={32} />,
//       title: "Registration Desk",
//       description: "Welcome participants and manage event registrations.",
//       color: "#C41E3A"
//     },
//     {
//       id: 3,
//       icon: <Camera size={32} />,
//       title: "Photography & Media",
//       description: "Capture memorable moments and create digital content.",
//       color: "#D4436A"
//     },
//     {
//       id: 4,
//       icon: <Share2 size={32} />,
//       title: "Social Media",
//       description: "Support community engagement through online platforms.",
//       color: "#E85D75"
//     },
//     {
//       id: 5,
//       icon: <FileText size={32} />,
//       title: "Administration",
//       description: "Assist with coordination, communication and logistics.",
//       color: "#8B1E3F"
//     },
//     {
//       id: 6,
//       icon: <Megaphone size={32} />,
//       title: "Community Outreach",
//       description: "Promote KITD programmes and connect with local communities.",
//       color: "#C41E3A"
//     }
//   ];

//   const interestAreas = [
//     "Events",
//     "Photography",
//     "Media",
//     "Administration",
//     "Community Outreach",
//     "Social Media"
//   ];

//   const availabilityOptions = [
//     "Weekdays",
//     "Weekends",
//     "Occasionally",
//     "Flexible"
//   ];

//   const journeySteps = [
//     {
//       id: 1,
//       title: "Submit Application",
//       description: "Fill out the volunteer registration form with your details.",
//       duration: "5 minutes"
//     },
//     {
//       id: 2,
//       title: "Review",
//       description: "Our team reviews your application and interests.",
//       duration: "3-5 business days"
//     },
//     {
//       id: 3,
//       title: "Volunteer Orientation",
//       description: "Attend an orientation session to learn about KITD and volunteer roles.",
//       duration: "1-2 hours"
//     },
//     {
//       id: 4,
//       title: "Join Activities",
//       description: "Start contributing to events and community programmes.",
//       duration: "Ongoing"
//     },
//     {
//       id: 5,
//       title: "Grow With KITD",
//       description: "Build your skills, network and impact within the community.",
//       duration: "Continuous"
//     }
//   ];

//   const volunteerStories = [
//     {
//       id: 1,
//       name: "Sarah Müller",
//       role: "Event Volunteer",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//       quote: "Volunteering with KITD allowed me to meet wonderful artists and contribute to meaningful cultural events. Every moment was rewarding."
//     },
//     {
//       id: 2,
//       name: "James Anderson",
//       role: "Photography Volunteer",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//       quote: "Capturing the beauty of Indian Classical Dance through my lens has been an incredible experience. I'm grateful to be part of this community."
//     },
//     {
//       id: 3,
//       name: "Priya Kumar",
//       role: "Community Outreach Volunteer",
//       image: "https://images.unsplash.com/photo-1494790108378-be9c3b7c0c83?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
//       quote: "Helping connect communities with KITD's programmes has been deeply fulfilling. I've grown so much through this experience."
//     }
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (formErrors[name]) {
//       setFormErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleInterestChange = (area) => {
//     setFormData(prev => {
//       const interests = prev.areasOfInterest.includes(area)
//         ? prev.areasOfInterest.filter(i => i !== area)
//         : [...prev.areasOfInterest, area];
//       return { ...prev, areasOfInterest: interests };
//     });
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.title) errors.title = "Title is required";
//     if (!formData.firstName) errors.firstName = "First name is required";
//     if (!formData.lastName) errors.lastName = "Last name is required";
//     if (!formData.email) errors.email = "Email is required";
//     if (!formData.email.includes('@')) errors.email = "Valid email is required";
//     if (!formData.phone) errors.phone = "Phone number is required";
//     if (!formData.city) errors.city = "City is required";
//     if (formData.areasOfInterest.length === 0) errors.areasOfInterest = "Select at least one area of interest";
//     if (!formData.availability) errors.availability = "Please select your availability";
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Volunteer form submitted:", formData);
//       setFormSubmitted(true);
//       setTimeout(() => {
//         setFormSubmitted(false);
//         setFormData({
//           title: "",
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           city: "",
//           country: "Germany",
//           occupation: "",
//           areasOfInterest: [],
//           availability: "",
//           previousExperience: "",
//           message: ""
//         });
//       }, 5050);
//     }
//   };

//   const toggleJourneyStep = (id) => {
//     setExpandedJourney(expandedJourney === id ? null : id);
//   };

//   return (
//     <div className="volunteer-page">

//       {/* ============================================
//          1. HERO SECTION
//          ============================================ */}
//       <section className="volunteer-hero">
//         <div className="volunteer-hero-overlay" />
//         <div className="container">
//           <motion.div 
//             className="volunteer-hero-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.span 
//               className="volunteer-hero-tag"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <HandHeart size={18} />
//               VOLUNTEER WITH KITD
//             </motion.span>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               Make a Difference Through
//               <span>Culture & Community</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Join our volunteer community and help preserve, promote and celebrate 
//               Indian Classical Dance across Germany. Whether you support events, 
//               community programmes or cultural initiatives, your contribution makes 
//               a meaningful impact.
//             </motion.p>

//             <motion.div 
//               className="volunteer-hero-actions"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               <a href="#volunteer-form" className="primary-btn">
//                 Apply Now <ArrowRight size={18} />
//               </a>
//               <a href="#opportunities" className="secondary-btn">
//                 View Opportunities
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================
//          2. WHY VOLUNTEER WITH KITD
//          ============================================ */}
//       <section className="why-volunteer">
//         <div className="container">
//           <motion.div 
//             className="section-header"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-tag">Why Volunteer</span>
//             <h2>Why Volunteer with KITD?</h2>
//             <p>
//               Volunteering with KITD is an opportunity to contribute to a vibrant cultural 
//               community, gain valuable experience, meet passionate individuals and support 
//               the growth of Indian Classical Dance in Germany.
//             </p>
//           </motion.div>

//           <div className="why-volunteer-grid">
//             {[
//               { icon: <Calendar size={28} />, title: "Support Cultural Events", desc: "Help bring performances, workshops and festivals to life" },
//               { icon: <Users size={28} />, title: "Build Meaningful Connections", desc: "Meet passionate artists and community members" },
//               { icon: <Star size={28} />, title: "Gain Practical Experience", desc: "Develop skills in event management, media and outreach" },
//               { icon: <Heart size={28} />, title: "Contribute to the Community", desc: "Make a lasting impact on cultural preservation" }
//             ].map((item, index) => (
//               <motion.div 
//                 key={index}
//                 className="why-volunteer-card"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="why-volunteer-icon">{item.icon}</div>
//                 <h3>{item.title}</h3>
//                 <p>{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          3. VOLUNTEER OPPORTUNITIES
//          ============================================ */}
//       <section id="opportunities" className="volunteer-opportunities">
//         <div className="container">
//           <motion.div 
//             className="section-header"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-tag">Opportunities</span>
//             <h2>Volunteer Opportunities</h2>
//             <p>Find a role that matches your skills and interests</p>
//           </motion.div>

//           <div className="opportunities-grid">
//             {opportunities.map((opp, index) => (
//               <motion.div 
//                 key={opp.id}
//                 className="opportunity-card"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.05 }}
//               >
//                 <div className="opportunity-icon" style={{ background: opp.color }}>
//                   {opp.icon}
//                 </div>
//                 <h3>{opp.title}</h3>
//                 <p>{opp.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          4. WHO CAN VOLUNTEER?
//          ============================================ */}
//       <section className="who-can-volunteer">
//         <div className="container">
//           <motion.div 
//             className="who-can-wrapper"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="who-can-content">
//               <span className="section-tag">Who Can Join</span>
//               <h2>Who Can Volunteer?</h2>
//               <p>
//                 Everyone who is passionate about supporting Indian Classical Dance 
//                 and community initiatives is welcome.
//               </p>

//               <div className="who-can-grid">
//                 {[
//                   { icon: <BookOpen size={20} />, label: "Students" },
//                   { icon: <User size={20} />, label: "Artists" },
//                   { icon: <Users size={20} />, label: "Teachers" },
//                   { icon: <Briefcase size={20} />, label: "Professionals" },
//                   { icon: <Heart size={20} />, label: "Parents" },
//                   { icon: <Globe size={20} />, label: "Community Members" },
//                   { icon: <Smile size={20} />, label: "Supporters" }
//                 ].map((item, index) => (
//                   <div key={index} className="who-can-item">
//                     <div className="who-can-icon">{item.icon}</div>
//                     <span>{item.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================
//          5. VOLUNTEER JOURNEY
//          ============================================ */}
//       <section className="volunteer-journey">
//         <div className="container">
//           <motion.div 
//             className="section-header"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-tag">Journey</span>
//             <h2>Your Volunteer Journey</h2>
//             <p>Follow these simple steps to become a KITD volunteer</p>
//           </motion.div>

//           <div className="journey-timeline">
//             {journeySteps.map((step, index) => (
//               <div key={step.id} className="journey-step">
//                 <div className="step-number">{step.id}</div>
//                 {index < journeySteps.length - 1 && <div className="step-connector" />}
                
//                 <div 
//                   className={`step-content ${expandedJourney === step.id ? 'expanded' : ''}`}
//                   onClick={() => toggleJourneyStep(step.id)}
//                 >
//                   <div className="step-header">
//                     <div>
//                       <h3>{step.title}</h3>
//                       <span className="step-duration">
//                         <Clock size={14} />
//                         {step.duration}
//                       </span>
//                     </div>
//                     {expandedJourney === step.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//                   </div>
//                   <p className="step-description">{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          6. VOLUNTEER REGISTRATION FORM
//          ============================================ */}
//       <section id="volunteer-form" className="volunteer-form-section">
//         <div className="container">
//           <motion.div 
//             className="section-header"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-tag">Apply</span>
//             <h2>Volunteer Registration</h2>
//             <p>Fill out the form below to join our volunteer community</p>
//           </motion.div>

//           {formSubmitted ? (
//             <motion.div 
//               className="form-success"
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//             >
//               <Check size={48} />
//               <h3>Application Submitted!</h3>
//               <p>Thank you for volunteering with KITD. Our team will review your application and get back to you soon.</p>
//             </motion.div>
//           ) : (
//             <motion.form 
//               className="volunteer-form"
//               onSubmit={handleSubmit}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//             >
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="title">Title *</label>
//                   <select
//                     id="title"
//                     name="title"
//                     value={formData.title}
//                     onChange={handleInputChange}
//                     className={formErrors.title ? 'error' : ''}
//                   >
//                     <option value="">Select Title</option>
//                     <option value="Mr.">Mr.</option>
//                     <option value="Ms.">Ms.</option>
//                     <option value="Mrs.">Mrs.</option>
//                     <option value="Dr.">Dr.</option>
//                     <option value="Prof.">Prof.</option>
//                   </select>
//                   {formErrors.title && <span className="error-message">{formErrors.title}</span>}
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="firstName">First Name *</label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     placeholder="Your first name"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className={formErrors.firstName ? 'error' : ''}
//                   />
//                   {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="lastName">Last Name *</label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     placeholder="Your last name"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     className={formErrors.lastName ? 'error' : ''}
//                   />
//                   {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="email">Email Address *</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="your@email.com"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className={formErrors.email ? 'error' : ''}
//                   />
//                   {formErrors.email && <span className="error-message">{formErrors.email}</span>}
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="phone">Phone Number *</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     placeholder="+49 XXX XXX XXXX"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className={formErrors.phone ? 'error' : ''}
//                   />
//                   {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="city">City *</label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     placeholder="Your city in Germany"
//                     value={formData.city}
//                     onChange={handleInputChange}
//                     className={formErrors.city ? 'error' : ''}
//                   />
//                   {formErrors.city && <span className="error-message">{formErrors.city}</span>}
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="country">Country</label>
//                   <select
//                     id="country"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleInputChange}
//                   >
//                     <option value="Germany">Germany</option>
//                     <option value="Austria">Austria</option>
//                     <option value="Switzerland">Switzerland</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="occupation">Occupation</label>
//                   <input
//                     type="text"
//                     id="occupation"
//                     name="occupation"
//                     placeholder="Your occupation"
//                     value={formData.occupation}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label>Areas of Interest *</label>
//                 <div className="checkbox-group">
//                   {interestAreas.map((area) => (
//                     <label key={area} className="checkbox-label">
//                       <input
//                         type="checkbox"
//                         checked={formData.areasOfInterest.includes(area)}
//                         onChange={() => handleInterestChange(area)}
//                       />
//                       {area}
//                     </label>
//                   ))}
//                 </div>
//                 {formErrors.areasOfInterest && <span className="error-message">{formErrors.areasOfInterest}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="availability">Availability *</label>
//                 <select
//                   id="availability"
//                   name="availability"
//                   value={formData.availability}
//                   onChange={handleInputChange}
//                   className={formErrors.availability ? 'error' : ''}
//                 >
//                   <option value="">Select your availability</option>
//                   {availabilityOptions.map((option) => (
//                     <option key={option} value={option}>{option}</option>
//                   ))}
//                 </select>
//                 {formErrors.availability && <span className="error-message">{formErrors.availability}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="previousExperience">Previous Experience (Optional)</label>
//                 <textarea
//                   id="previousExperience"
//                   name="previousExperience"
//                   placeholder="Share any relevant experience or skills..."
//                   rows="3"
//                   value={formData.previousExperience}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="message">Message (Optional)</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   placeholder="Tell us why you'd like to volunteer with KITD..."
//                   rows="3"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                 />
//               </div>

//               <div className="form-actions">
//                 <button type="submit" className="submit-btn">
//                   Submit Application <ArrowRight size={18} />
//                 </button>
//                 <p className="form-note">* Required fields</p>
//               </div>
//             </motion.form>
//           )}
//         </div>
//       </section>

//       {/* ============================================
//          7. VOLUNTEER STORIES
//          ============================================ */}
//       <section className="volunteer-stories">
//         <div className="container">
//           <motion.div 
//             className="section-header"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-tag">Stories</span>
//             <h2>Volunteer Stories</h2>
//             <p>Hear from our amazing volunteers about their experiences</p>
//           </motion.div>

//           <div className="stories-grid">
//             {volunteerStories.map((story, index) => (
//               <motion.div 
//                 key={story.id}
//                 className="story-card"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="story-quote">
//                   <span className="quote-mark">"</span>
//                   <p>{story.quote}</p>
//                 </div>
//                 <div className="story-author">
//                   <img src={story.image} alt={story.name} />
//                   <div>
//                     <h4>{story.name}</h4>
//                     <span>{story.role}</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          8. CTA SECTION
//          ============================================ */}
//       <section className="volunteer-cta">
//         <div className="container">
//           <motion.div 
//             className="cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2>Become Part of the KITD Family</h2>
//             <p>
//               Every volunteer helps strengthen our community and contributes to 
//               preserving Indian Classical Dance for future generations.
//             </p>
//             <div className="cta-buttons">
//               <a href="#volunteer-form" className="primary-btn">
//                 Apply as Volunteer <ArrowRight size={18} />
//               </a>
//               <Link to="/contact" className="secondary-btn">
//                 Contact KITD
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default VolunteerPage;

// src/pages/Volunteer/VolunteerPage.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  ArrowRight,
  Check,
  Clock,
  Calendar,
  Mail,
  Phone,
  MapPin,
  User,
  Briefcase,
  Heart,
  Star,
  Sparkles,
  Shield,
  Globe,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Camera,
  PenTool,
  Share2,
  Headphones,
  FileText,
  Megaphone,
  Award,
  BookOpen,
  Lightbulb,
  Smile,
  HandHeart,
  Loader
} from "lucide-react";
import { motion } from "framer-motion";
import { createVolunteer } from "../../api/volunteer.api";

import "./VolunteerPage.css";

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "Germany",
    occupation: "",
    areasOfInterest: [],
    availability: "",
    previousExperience: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [expandedJourney, setExpandedJourney] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const opportunities = [
    {
      id: 1,
      icon: <Calendar size={32} />,
      title: "Event Support",
      description: "Assist with performances, workshops and festivals.",
      color: "#8B1E3F"
    },
    {
      id: 2,
      icon: <Users size={32} />,
      title: "Registration Desk",
      description: "Welcome participants and manage event registrations.",
      color: "#C41E3A"
    },
    {
      id: 3,
      icon: <Camera size={32} />,
      title: "Photography & Media",
      description: "Capture memorable moments and create digital content.",
      color: "#D4436A"
    },
    {
      id: 4,
      icon: <Share2 size={32} />,
      title: "Social Media",
      description: "Support community engagement through online platforms.",
      color: "#E85D75"
    },
    {
      id: 5,
      icon: <FileText size={32} />,
      title: "Administration",
      description: "Assist with coordination, communication and logistics.",
      color: "#8B1E3F"
    },
    {
      id: 6,
      icon: <Megaphone size={32} />,
      title: "Community Outreach",
      description: "Promote KITD programmes and connect with local communities.",
      color: "#C41E3A"
    }
  ];

  const interestAreas = [
    "Events",
    "Photography",
    "Media",
    "Administration",
    "Community Outreach",
    "Social Media"
  ];

  const availabilityOptions = [
    "Weekdays",
    "Weekends",
    "Occasionally",
    "Flexible"
  ];

  const journeySteps = [
    {
      id: 1,
      title: "Submit Application",
      description: "Fill out the volunteer registration form with your details.",
      duration: "5 minutes"
    },
    {
      id: 2,
      title: "Review",
      description: "Our team reviews your application and interests.",
      duration: "3-5 business days"
    },
    {
      id: 3,
      title: "Volunteer Orientation",
      description: "Attend an orientation session to learn about KITD and volunteer roles.",
      duration: "1-2 hours"
    },
    {
      id: 4,
      title: "Join Activities",
      description: "Start contributing to events and community programmes.",
      duration: "Ongoing"
    },
    {
      id: 5,
      title: "Grow With KITD",
      description: "Build your skills, network and impact within the community.",
      duration: "Continuous"
    }
  ];

  const volunteerStories = [
    {
      id: 1,
      name: "Sarah Müller",
      role: "Event Volunteer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Volunteering with KITD allowed me to meet wonderful artists and contribute to meaningful cultural events. Every moment was rewarding."
    },
    {
      id: 2,
      name: "James Anderson",
      role: "Photography Volunteer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Capturing the beauty of Indian Classical Dance through my lens has been an incredible experience. I'm grateful to be part of this community."
    },
    {
      id: 3,
      name: "Priya Kumar",
      role: "Community Outreach Volunteer",
      image: "https://images.unsplash.com/photo-1494790108378-be9c3b7c0c83?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      quote: "Helping connect communities with KITD's programmes has been deeply fulfilling. I've grown so much through this experience."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleInterestChange = (area) => {
    setFormData(prev => {
      const interests = prev.areasOfInterest.includes(area)
        ? prev.areasOfInterest.filter(i => i !== area)
        : [...prev.areasOfInterest, area];
      return { ...prev, areasOfInterest: interests };
    });
    if (formErrors.areasOfInterest) {
      setFormErrors(prev => ({ ...prev, areasOfInterest: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title) errors.title = "Title is required";
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Valid email is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone)) errors.phone = "Valid phone number is required";
    if (!formData.city.trim()) errors.city = "City is required";
    if (formData.areasOfInterest.length === 0) errors.areasOfInterest = "Select at least one area of interest";
    if (!formData.availability) errors.availability = "Please select your availability";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSubmitting(true);
//       setApiError("");
      
//       try {
//         const volunteerData = {
//           title: formData.title,
//           firstName: formData.firstName.trim(),
//           lastName: formData.lastName.trim(),
//           email: formData.email.trim(),
//           phone: formData.phone.trim(),
//           city: formData.city.trim(),
//           country: formData.country,
//           occupation: formData.occupation.trim(),
//           areasOfInterest: formData.areasOfInterest,
//           availability: formData.availability,
//           previousExperience: formData.previousExperience.trim(),
//           message: formData.message.trim()
//         };

//         const response = await createVolunteer(volunteerData);
        
//         console.log("Volunteer registration successful:", response.data);
        
//         setFormSubmitted(true);
//         setFormErrors({});
//         setApiError("");
        
//         // Scroll to top of form to see success message
//         document.getElementById("volunteer-form").scrollIntoView({ behavior: "smooth" });
        
//         setTimeout(() => {
//           setFormSubmitted(false);
//           setFormData({
//             title: "",
//             firstName: "",
//             lastName: "",
//             email: "",
//             phone: "",
//             city: "",
//             country: "Germany",
//             occupation: "",
//             areasOfInterest: [],
//             availability: "",
//             previousExperience: "",
//             message: ""
//           });
//         }, 5050);
        
//       } catch (error) {
//         console.error("Error submitting volunteer form:", error);
        
//         if (error.response) {
//           // Server responded with error status
//           const errorData = error.response.data;
          
//           if (errorData.errors && Array.isArray(errorData.errors)) {
//             // Handle validation errors from API
//             const apiErrors = {};
//             errorData.errors.forEach(err => {
//               if (err.field) {
//                 apiErrors[err.field] = err.message;
//               }
//             });
//             setFormErrors(prev => ({ ...prev, ...apiErrors }));
//             setApiError("Please correct the errors below.");
//           } else if (errorData.errors && typeof errorData.errors === 'object') {
//             // Handle object-style errors
//             const apiErrors = {};
//             Object.keys(errorData.errors).forEach(key => {
//               apiErrors[key] = Array.isArray(errorData.errors[key]) 
//                 ? errorData.errors[key].join(', ') 
//                 : errorData.errors[key];
//             });
//             setFormErrors(prev => ({ ...prev, ...apiErrors }));
//             setApiError("Please correct the errors below.");
//           } else {
//             setApiError(
//               errorData.message || 
//               errorData.error || 
//               'Registration failed. Please try again.'
//             );
//           }
//         } else if (error.request) {
//           // No response received
//           setApiError('Unable to connect to the server. Please check your internet connection and try again.');
//         } else {
//           // Something else went wrong
//           setApiError('An unexpected error occurred. Please try again later.');
//         }
        
//         // Scroll to form to see error
//         document.getElementById("volunteer-form").scrollIntoView({ behavior: "smooth" });
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   };



const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setApiError("");
    setFormErrors({});
    
    try {
      // Prepare data for API
      const volunteerData = {
        fullName: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
        title: formData.title,
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        city: formData.city.trim(),
        country: formData.country,
        occupation: formData.occupation.trim(),
        areasOfInterest: formData.areasOfInterest,
        availability: formData.availability,
        previousExperience: formData.previousExperience.trim(),
        message: formData.message.trim()
      };

      console.log("Sending data:", volunteerData); // For debugging

      const response = await createVolunteer(volunteerData);
      
      console.log("Success:", response.data);
      
      // Show success
      setFormSubmitted(true);
      
      // Scroll to success message
      document.getElementById("volunteer-form").scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
      
      // Reset form after delay
      const resetTimer = setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          city: "",
          country: "Germany",
          occupation: "",
          areasOfInterest: [],
          availability: "",
          previousExperience: "",
          message: ""
        });
      }, 5050);
      
      return () => clearTimeout(resetTimer);
      
    } catch (error) {
      console.error("Submission error:", error);
      
      // Handle different error scenarios
      if (error.response?.data) {
        const { data } = error.response;
        
        // Handle structured validation errors
        if (data.errors) {
          const fieldErrors = {};
          
          if (Array.isArray(data.errors)) {
            data.errors.forEach(err => {
              // Map backend field names to frontend
              const fieldName = err.field === 'fullName' ? 'firstName' : err.field;
              fieldErrors[fieldName] = err.message;
            });
          } else if (typeof data.errors === 'object') {
            Object.entries(data.errors).forEach(([field, message]) => {
              const fieldName = field === 'fullName' ? 'firstName' : field;
              fieldErrors[fieldName] = Array.isArray(message) ? message[0] : message;
            });
          }
          
          setFormErrors(prev => ({ ...prev, ...fieldErrors }));
          setApiError("Please correct the highlighted fields.");
        } else {
          // Generic error message
          setApiError(data.message || data.error || "Registration failed. Please try again.");
        }
      } else if (error.request) {
        setApiError("Unable to connect to server. Please check your internet connection.");
      } else {
        setApiError("An unexpected error occurred. Please try again.");
      }
      
      // Scroll to show errors
      document.getElementById("volunteer-form").scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
      
    } finally {
      setIsSubmitting(false);
    }
  };



  const toggleJourneyStep = (id) => {
    setExpandedJourney(expandedJourney === id ? null : id);
  };

  return (
    <div className="volunteer-page">

      {/* ============================================
         1. HERO SECTION
         ============================================ */}
      <section className="volunteer-hero">
        <div className="volunteer-hero-overlay" />
        <div className="container">
          <motion.div 
            className="volunteer-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="volunteer-hero-tag"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <HandHeart size={18} />
              VOLUNTEER WITH KITD
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Make a Difference Through
              <span>Culture & Community</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Join our volunteer community and help preserve, promote and celebrate 
              Indian Classical Dance across Germany. Whether you support events, 
              community programmes or cultural initiatives, your contribution makes 
              a meaningful impact.
            </motion.p>

            <motion.div 
              className="volunteer-hero-actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#volunteer-form" className="primary-btn">
                Apply Now <ArrowRight size={18} />
              </a>
              <a href="#opportunities" className="secondary-btn">
                View Opportunities
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
         2. WHY VOLUNTEER WITH KITD
         ============================================ */}
      <section className="why-volunteer">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Why Volunteer</span>
            <h2>Why Volunteer with KITD?</h2>
            <p>
              Volunteering with KITD is an opportunity to contribute to a vibrant cultural 
              community, gain valuable experience, meet passionate individuals and support 
              the growth of Indian Classical Dance in Germany.
            </p>
          </motion.div>

          <div className="why-volunteer-grid">
            {[
              { icon: <Calendar size={28} />, title: "Support Cultural Events", desc: "Help bring performances, workshops and festivals to life" },
              { icon: <Users size={28} />, title: "Build Meaningful Connections", desc: "Meet passionate artists and community members" },
              { icon: <Star size={28} />, title: "Gain Practical Experience", desc: "Develop skills in event management, media and outreach" },
              { icon: <Heart size={28} />, title: "Contribute to the Community", desc: "Make a lasting impact on cultural preservation" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="why-volunteer-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="why-volunteer-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         3. VOLUNTEER OPPORTUNITIES
         ============================================ */}
      <section id="opportunities" className="volunteer-opportunities">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Opportunities</span>
            <h2>Volunteer Opportunities</h2>
            <p>Find a role that matches your skills and interests</p>
          </motion.div>

          <div className="opportunities-grid">
            {opportunities.map((opp, index) => (
              <motion.div 
                key={opp.id}
                className="opportunity-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="opportunity-icon" style={{ background: opp.color }}>
                  {opp.icon}
                </div>
                <h3>{opp.title}</h3>
                <p>{opp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         4. WHO CAN VOLUNTEER?
         ============================================ */}
      <section className="who-can-volunteer">
        <div className="container">
          <motion.div 
            className="who-can-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="who-can-content">
              <span className="section-tag">Who Can Join</span>
              <h2>Who Can Volunteer?</h2>
              <p>
                Everyone who is passionate about supporting Indian Classical Dance 
                and community initiatives is welcome.
              </p>

              <div className="who-can-grid">
                {[
                  { icon: <BookOpen size={20} />, label: "Students" },
                  { icon: <User size={20} />, label: "Artists" },
                  { icon: <Users size={20} />, label: "Teachers" },
                  { icon: <Briefcase size={20} />, label: "Professionals" },
                  { icon: <Heart size={20} />, label: "Parents" },
                  { icon: <Globe size={20} />, label: "Community Members" },
                  { icon: <Smile size={20} />, label: "Supporters" }
                ].map((item, index) => (
                  <div key={index} className="who-can-item">
                    <div className="who-can-icon">{item.icon}</div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
         5. VOLUNTEER JOURNEY
         ============================================ */}
      <section className="volunteer-journey">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Journey</span>
            <h2>Your Volunteer Journey</h2>
            <p>Follow these simple steps to become a KITD volunteer</p>
          </motion.div>

          <div className="journey-timeline">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="journey-step">
                <div className="step-number">{step.id}</div>
                {index < journeySteps.length - 1 && <div className="step-connector" />}
                
                <div 
                  className={`step-content ${expandedJourney === step.id ? 'expanded' : ''}`}
                  onClick={() => toggleJourneyStep(step.id)}
                >
                  <div className="step-header">
                    <div>
                      <h3>{step.title}</h3>
                      <span className="step-duration">
                        <Clock size={14} />
                        {step.duration}
                      </span>
                    </div>
                    {expandedJourney === step.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         6. VOLUNTEER REGISTRATION FORM
         ============================================ */}
      <section id="volunteer-form" className="volunteer-form-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Apply</span>
            <h2>Volunteer Registration</h2>
            <p>Fill out the form below to join our volunteer community</p>
          </motion.div>

          {formSubmitted ? (
            <motion.div 
              className="form-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Check size={48} />
              <h3>Application Submitted!</h3>
              <p>Thank you for volunteering with KITD. Our team will review your application and get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form 
              className="volunteer-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* API Error Message */}
              {apiError && (
                <motion.div 
                  className="api-error-banner"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="api-error-icon">⚠️</span>
                  <span>{apiError}</span>
                </motion.div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="title">Title *</label>
                  <select
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className={formErrors.title ? 'error' : ''}
                  >
                    <option value="">Select Title</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Prof.">Prof.</option>
                  </select>
                  {formErrors.title && <span className="error-message">{formErrors.title}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={formErrors.firstName ? 'error' : ''}
                  />
                  {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={formErrors.lastName ? 'error' : ''}
                  />
                  {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={formErrors.email ? 'error' : ''}
                  />
                  {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+49 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={formErrors.phone ? 'error' : ''}
                  />
                  {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Your city in Germany"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={formErrors.city ? 'error' : ''}
                  />
                  {formErrors.city && <span className="error-message">{formErrors.city}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option value="Germany">Germany</option>
                    <option value="Austria">Austria</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="occupation">Occupation</label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    placeholder="Your occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Areas of Interest *</label>
                <div className="checkbox-group">
                  {interestAreas.map((area) => (
                    <label key={area} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.areasOfInterest.includes(area)}
                        onChange={() => handleInterestChange(area)}
                      />
                      {area}
                    </label>
                  ))}
                </div>
                {formErrors.areasOfInterest && <span className="error-message">{formErrors.areasOfInterest}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="availability">Availability *</label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className={formErrors.availability ? 'error' : ''}
                >
                  <option value="">Select your availability</option>
                  {availabilityOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {formErrors.availability && <span className="error-message">{formErrors.availability}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="previousExperience">Previous Experience (Optional)</label>
                <textarea
                  id="previousExperience"
                  name="previousExperience"
                  placeholder="Share any relevant experience or skills..."
                  rows="3"
                  value={formData.previousExperience}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us why you'd like to volunteer with KITD..."
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-actions">
                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={18} className="spinner" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application <ArrowRight size={18} />
                    </>
                  )}
                </button>
                <p className="form-note">* Required fields</p>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* ============================================
         7. VOLUNTEER STORIES
         ============================================ */}
      <section className="volunteer-stories">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Stories</span>
            <h2>Volunteer Stories</h2>
            <p>Hear from our amazing volunteers about their experiences</p>
          </motion.div>

          <div className="stories-grid">
            {volunteerStories.map((story, index) => (
              <motion.div 
                key={story.id}
                className="story-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="story-quote">
                  <span className="quote-mark">"</span>
                  <p>{story.quote}</p>
                </div>
                <div className="story-author">
                  <img src={story.image} alt={story.name} />
                  <div>
                    <h4>{story.name}</h4>
                    <span>{story.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         8. CTA SECTION
         ============================================ */}
      <section className="volunteer-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Become Part of the KITD Family</h2>
            <p>
              Every volunteer helps strengthen our community and contributes to 
              preserving Indian Classical Dance for future generations.
            </p>
            <div className="cta-buttons">
              <a href="#volunteer-form" className="primary-btn">
                Apply as Volunteer <ArrowRight size={18} />
              </a>
              <Link to="/contact" className="secondary-btn">
                Contact KITD
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default VolunteerPage;