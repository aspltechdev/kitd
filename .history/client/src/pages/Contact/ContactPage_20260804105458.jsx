// // // // src/pages/Contact/ContactPage.jsx

// // // import { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { 
// // //   Mail, 
// // //   Phone, 
// // //   MapPin, 
// // //   Clock, 
// // //   ArrowRight,
// // //   Check,
// // //   User,
// // //   Briefcase,
// // //   Heart,
// // //   Calendar,
// // //   Users,
// // //   Camera,
// // //   Share2,
// // //   FileText,
// // //   Globe,
// // //   MessageCircle,
// // //   Send,
// // //   Facebook,
// // //   Instagram,
// // //   Youtube,
// // //   Linkedin,
// // //   Twitter
// // // } from "lucide-react";
// // // import { motion } from "framer-motion";
// // // import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// // // import "./ContactPage.css";

// // // const ContactPage = () => {
// // //   const [formData, setFormData] = useState({
// // //     title: "",
// // //     firstName: "",
// // //     lastName: "",
// // //     email: "",
// // //     phone: "",
// // //     city: "",
// // //     country: "Germany",
// // //     subject: "",
// // //     enquiryType: "",
// // //     message: ""
// // //   });

// // //   const [formSubmitted, setFormSubmitted] = useState(false);
// // //   const [formErrors, setFormErrors] = useState({});

// // //   const enquiryTypes = [
// // //     "General Enquiry",
// // //     "Membership",
// // //     "Events",
// // //     "Volunteer",
// // //     "Artist Directory",
// // //     "Partnership",
// // //     "Media",
// // //     "Other"
// // //   ];

// // //   const contactInfo = [
// // //     {
// // //       icon: <MapPin size={24} />,
// // //       title: "Address",
// // //       details: ["KITD Office", "Germany"],
// // //       color: "#8B1E3F"
// // //     },
// // //     {
// // //       icon: <Mail size={24} />,
// // //       title: "Email",
// // //       details: ["info@kitd.de"],
// // //       color: "#C41E3A"
// // //     },
// // //     {
// // //       icon: <Phone size={24} />,
// // //       title: "Phone",
// // //       details: ["+49 XXX XXX XXXX"],
// // //       color: "#D4436A"
// // //     },
// // //     {
// // //       icon: <Clock size={24} />,
// // //       title: "Office Hours",
// // //       details: ["Monday – Friday", "09:00 AM – 05:00 PM"],
// // //       color: "#E85D75"
// // //     }
// // //   ];

// // //   const frequentlyContacted = [
// // //     { icon: <Users size={24} />, title: "Membership Support", desc: "Join or renew your membership" },
// // //     { icon: <Heart size={24} />, title: "Volunteer Opportunities", desc: "Contribute your time and skills" },
// // //     { icon: <User size={24} />, title: "Artist Registration", desc: "Register as a KITD artist" },
// // //     { icon: <Calendar size={24} />, title: "Event Information", desc: "Learn about upcoming events" },
// // //     { icon: <Handshake size={24} />, title: "Partnerships", desc: "Collaborate with KITD" },
// // //     { icon: <Camera size={24} />, title: "Media Enquiries", desc: "Press and media relations" }
// // //   ];

// // //   const socialLinks = [
// // //     { icon: <FaFacebookF size={22} />, label: "Facebook", url: "https://facebook.com/kitd" },
// // //     { icon: <FaInstagram size={22} />, label: "Instagram", url: "https://instagram.com/kitd" },
// // //     { icon: <FaYoutube size={22} />, label: "YouTube", url: "https://youtube.com/kitd" },
// // //     { icon: <FaLinkedinIn size={22} />, label: "LinkedIn", url: "https://linkedin.com/company/kitd" }
// // //   ];

// // //   const handleInputChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setFormData(prev => ({ ...prev, [name]: value }));
// // //     if (formErrors[name]) {
// // //       setFormErrors(prev => ({ ...prev, [name]: "" }));
// // //     }
// // //   };

// // //   const validateForm = () => {
// // //     const errors = {};
// // //     if (!formData.title) errors.title = "Title is required";
// // //     if (!formData.firstName) errors.firstName = "First name is required";
// // //     if (!formData.lastName) errors.lastName = "Last name is required";
// // //     if (!formData.email) errors.email = "Email is required";
// // //     if (!formData.email.includes('@')) errors.email = "Valid email is required";
// // //     if (!formData.phone) errors.phone = "Phone number is required";
// // //     if (!formData.city) errors.city = "City is required";
// // //     if (!formData.subject) errors.subject = "Subject is required";
// // //     if (!formData.enquiryType) errors.enquiryType = "Enquiry type is required";
// // //     if (!formData.message) errors.message = "Message is required";
// // //     setFormErrors(errors);
// // //     return Object.keys(errors).length === 0;
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (validateForm()) {
// // //       console.log("Contact form submitted:", formData);
// // //       setFormSubmitted(true);
// // //       setTimeout(() => {
// // //         setFormSubmitted(false);
// // //         setFormData({
// // //           title: "",
// // //           firstName: "",
// // //           lastName: "",
// // //           email: "",
// // //           phone: "",
// // //           city: "",
// // //           country: "Germany",
// // //           subject: "",
// // //           enquiryType: "",
// // //           message: ""
// // //         });
// // //       }, 5050);
// // //     }
// // //   };

// // //   return (
// // //     <div className="contact-page">

// // //       {/* ============================================
// // //          1. HERO SECTION
// // //          ============================================ */}
// // //       <section className="contact-hero">
// // //         <div className="contact-hero-overlay" />
// // //         <div className="container">
// // //           <motion.div 
// // //             className="contact-hero-content"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //           >
// // //             <motion.span 
// // //               className="contact-hero-tag"
// // //               initial={{ opacity: 0 }}
// // //               animate={{ opacity: 1 }}
// // //               transition={{ delay: 0.2 }}
// // //             >
// // //               <MessageCircle size={18} />
// // //               CONTACT KITD
// // //             </motion.span>

// // //             <motion.h1
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: 0.3 }}
// // //             >
// // //               Let's Connect &amp; Celebrate
// // //               <span>Indian Classical Dance Together</span>
// // //             </motion.h1>

// // //             <motion.p
// // //               initial={{ opacity: 0, y: 20 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: 0.4 }}
// // //             >
// // //               Whether you're an artist, teacher, student, institution, volunteer or supporter, 
// // //               we'd love to hear from you. Reach out to us for membership, collaborations, events 
// // //               or any questions about the KITD community.
// // //             </motion.p>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ============================================
// // //          2. GET IN TOUCH
// // //          ============================================ */}
// // //       <section className="get-in-touch">
// // //         <div className="container">
// // //           <motion.div 
// // //             className="get-in-touch-content"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.6 }}
// // //           >
// // //             <span className="section-tag">Get in Touch</span>
// // //             <h2>We're Here to Help</h2>
// // //             <p className="get-in-touch-description">
// // //               Our team is happy to answer your questions and guide you through membership, 
// // //               volunteering, events and collaboration opportunities.
// // //             </p>
// // //           </motion.div>

// // //           <div className="contact-info-grid">
// // //             {contactInfo.map((info, index) => (
// // //               <motion.div 
// // //                 key={index}
// // //                 className="contact-info-card"
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: index * 0.1 }}
// // //               >
// // //                 <div className="contact-info-icon" style={{ background: info.color }}>
// // //                   {info.icon}
// // //                 </div>
// // //                 <h3>{info.title}</h3>
// // //                 {info.details.map((detail, i) => (
// // //                   <p key={i}>{detail}</p>
// // //                 ))}
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ============================================
// // //          3. CONTACT FORM
// // //          ============================================ */}
// // //       <section className="contact-form-section">
// // //         <div className="container">
// // //           <div className="form-wrapper">
// // //             <motion.div 
// // //               className="form-content"
// // //               initial={{ opacity: 0, x: -30 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.6 }}
// // //             >
// // //               <span className="section-tag">Send Message</span>
// // //               <h2>Send Us a Message</h2>
// // //               <p>Fill out the form below and we'll get back to you as soon as possible.</p>

// // //               {formSubmitted ? (
// // //                 <motion.div 
// // //                   className="form-success"
// // //                   initial={{ opacity: 0, scale: 0.95 }}
// // //                   animate={{ opacity: 1, scale: 1 }}
// // //                 >
// // //                   <Check size={48} />
// // //                   <h3>Message Sent!</h3>
// // //                   <p>Thank you for contacting KITD. Our team will respond to your enquiry within 24-48 hours.</p>
// // //                 </motion.div>
// // //               ) : (
// // //                 <form className="contact-form" onSubmit={handleSubmit}>
// // //                   <div className="form-row">
// // //                     <div className="form-group">
// // //                       <label htmlFor="title">Title *</label>
// // //                       <select
// // //                         id="title"
// // //                         name="title"
// // //                         value={formData.title}
// // //                         onChange={handleInputChange}
// // //                         className={formErrors.title ? 'error' : ''}
// // //                       >
// // //                         <option value="">Select Title</option>
// // //                         <option value="Mr.">Mr.</option>
// // //                         <option value="Ms.">Ms.</option>
// // //                         <option value="Mrs.">Mrs.</option>
// // //                         <option value="Dr.">Dr.</option>
// // //                         <option value="Prof.">Prof.</option>
// // //                       </select>
// // //                       {formErrors.title && <span className="error-message">{formErrors.title}</span>}
// // //                     </div>

// // //                     <div className="form-group">
// // //                       <label htmlFor="firstName">First Name *</label>
// // //                       <input
// // //                         type="text"
// // //                         id="firstName"
// // //                         name="firstName"
// // //                         placeholder="Your first name"
// // //                         value={formData.firstName}
// // //                         onChange={handleInputChange}
// // //                         className={formErrors.firstName ? 'error' : ''}
// // //                       />
// // //                       {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
// // //                     </div>

// // //                     <div className="form-group">
// // //                       <label htmlFor="lastName">Last Name *</label>
// // //                       <input
// // //                         type="text"
// // //                         id="lastName"
// // //                         name="lastName"
// // //                         placeholder="Your last name"
// // //                         value={formData.lastName}
// // //                         onChange={handleInputChange}
// // //                         className={formErrors.lastName ? 'error' : ''}
// // //                       />
// // //                       {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
// // //                     </div>
// // //                   </div>

// // //                   <div className="form-row">
// // //                     <div className="form-group">
// // //                       <label htmlFor="email">Email Address *</label>
// // //                       <input
// // //                         type="email"
// // //                         id="email"
// // //                         name="email"
// // //                         placeholder="your@email.com"
// // //                         value={formData.email}
// // //                         onChange={handleInputChange}
// // //                         className={formErrors.email ? 'error' : ''}
// // //                       />
// // //                       {formErrors.email && <span className="error-message">{formErrors.email}</span>}
// // //                     </div>

// // //                     <div className="form-group">
// // //                       <label htmlFor="phone">Phone Number *</label>
// // //                       <input
// // //                         type="tel"
// // //                         id="phone"
// // //                         name="phone"
// // //                         placeholder="+49 XXX XXX XXXX"
// // //                         value={formData.phone}
// // //                         onChange={handleInputChange}
// // //                         className={formErrors.phone ? 'error' : ''}
// // //                       />
// // //                       {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
// // //                     </div>
// // //                   </div>

// // //                   <div className="form-row">
// // //                     <div className="form-group">
// // //                       <label htmlFor="city">City *</label>
// // //                       <input
// // //                         type="text"
// // //                         id="city"
// // //                         name="city"
// // //                         placeholder="Your city"
// // //                         value={formData.city}
// // //                         onChange={handleInputChange}
// // //                         className={formErrors.city ? 'error' : ''}
// // //                       />
// // //                       {formErrors.city && <span className="error-message">{formErrors.city}</span>}
// // //                     </div>

// // //                     <div className="form-group">
// // //                       <label htmlFor="country">Country</label>
// // //                       <select
// // //                         id="country"
// // //                         name="country"
// // //                         value={formData.country}
// // //                         onChange={handleInputChange}
// // //                       >
// // //                         <option value="Germany">Germany</option>
// // //                         <option value="Austria">Austria</option>
// // //                         <option value="Switzerland">Switzerland</option>
// // //                         <option value="Other">Other</option>
// // //                       </select>
// // //                     </div>
// // //                   </div>

// // //                   <div className="form-row">
// // //                     <div className="form-group">
// // //                       <label htmlFor="subject">Subject *</label>
// // //                       <input
// // //                         type="text"
// // //                         id="subject"
// // //                         name="subject"
// // //                         placeholder="Subject of your enquiry"
// // //                         value={formData.subject}
// // //                         onChange={handleInputChange}
// // //                         className={formErrors.subject ? 'error' : ''}
// // //                       />
// // //                       {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
// // //                     </div>

// // //                     <div className="form-group">
// // //                       <label htmlFor="enquiryType">Enquiry Type *</label>
// // //                       <select
// // //                         id="enquiryType"
// // //                         name="enquiryType"
// // //                         value={formData.enquiryType}
// // //                         onChange={handleInputChange}
// // //                         className={formErrors.enquiryType ? 'error' : ''}
// // //                       >
// // //                         <option value="">Select Enquiry Type</option>
// // //                         {enquiryTypes.map((type) => (
// // //                           <option key={type} value={type}>{type}</option>
// // //                         ))}
// // //                       </select>
// // //                       {formErrors.enquiryType && <span className="error-message">{formErrors.enquiryType}</span>}
// // //                     </div>
// // //                   </div>

// // //                   <div className="form-group">
// // //                     <label htmlFor="message">Message *</label>
// // //                     <textarea
// // //                       id="message"
// // //                       name="message"
// // //                       placeholder="Tell us how we can help you..."
// // //                       rows="5"
// // //                       value={formData.message}
// // //                       onChange={handleInputChange}
// // //                       className={formErrors.message ? 'error' : ''}
// // //                     />
// // //                     {formErrors.message && <span className="error-message">{formErrors.message}</span>}
// // //                   </div>

// // //                   <div className="form-actions">
// // //                     <button type="submit" className="submit-btn">
// // //                       <Send size={18} />
// // //                       Send Message
// // //                     </button>
// // //                     <p className="form-note">* Required fields</p>
// // //                   </div>
// // //                 </form>
// // //               )}
// // //             </motion.div>

// // //             <motion.div 
// // //               className="form-sidebar"
// // //               initial={{ opacity: 0, x: 30 }}
// // //               whileInView={{ opacity: 1, x: 0 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.6 }}
// // //             >
// // //               <div className="sidebar-card">
// // //                 <h3>Frequently Contacted For</h3>
// // //                 <div className="frequently-list">
// // //                   {frequentlyContacted.map((item, index) => (
// // //                     <div key={index} className="frequently-item">
// // //                       <div className="frequently-icon">{item.icon}</div>
// // //                       <div>
// // //                         <h4>{item.title}</h4>
// // //                         <p>{item.desc}</p>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               <div className="sidebar-card hours-card">
// // //                 <h3>Quick Response</h3>
// // //                 <p>We typically respond to all enquiries within 24-48 hours during business days.</p>
// // //                 <div className="response-time">
// // //                   <Clock size={18} />
// // //                   <span>Mon-Fri: 09:00 - 17:00</span>
// // //                 </div>
// // //               </div>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ============================================
// // //          4. OFFICE LOCATION
// // //          ============================================ */}
// // //       <section className="office-location">
// // //         <div className="container">
// // //           <motion.div 
// // //             className="section-header"
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //           >
// // //             <span className="section-tag">Location</span>
// // //             <h2>Visit or Reach Us</h2>
// // //             <p>Find us at our office or get in touch through our contact details</p>
// // //           </motion.div>

// // //           <div className="location-wrapper">
// // //             <div className="location-map">
// // //               <div className="map-placeholder">
// // //                 <MapPin size={48} />
// // //                 <p>Google Map Integration</p>
// // //                 <span>KITD Office, Germany</span>
// // //               </div>
// // //             </div>

// // //             <div className="location-details">
// // //               <h3>Office Address</h3>
// // //               <div className="address-item">
// // //                 <MapPin size={20} />
// // //                 <div>
// // //                   <p><strong>KITD Office</strong></p>
// // //                   <p>Germany</p>
// // //                 </div>
// // //               </div>

// // //               <div className="address-item">
// // //                 <Mail size={20} />
// // //                 <div>
// // //                   <p><strong>Email</strong></p>
// // //                   <p>info@kitd.de</p>
// // //                 </div>
// // //               </div>

// // //               <div className="address-item">
// // //                 <Phone size={20} />
// // //                 <div>
// // //                   <p><strong>Phone</strong></p>
// // //                   <p>+49 XXX XXX XXXX</p>
// // //                 </div>
// // //               </div>

// // //               <div className="address-item">
// // //                 <Clock size={20} />
// // //                 <div>
// // //                   <p><strong>Office Hours</strong></p>
// // //                   <p>Monday – Friday, 09:00 AM – 05:00 PM</p>
// // //                 </div>
// // //               </div>

// // //               <Link to="/contact#directions" className="directions-btn">
// // //                 Get Directions <ArrowRight size={16} />
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ============================================
// // //          5. SOCIAL MEDIA
// // //          ============================================ */}
// // //       <section className="social-media-section">
// // //         <div className="container">
// // //           <motion.div 
// // //             className="social-content"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //           >
// // //             <span className="section-tag">Connect</span>
// // //             <h2>Stay Connected</h2>
// // //             <p>
// // //               Follow KITD to stay updated on performances, workshops, cultural 
// // //               programmes and community activities.
// // //             </p>

// // //             <div className="social-links">
// // //               {socialLinks.map((social, index) => (
// // //                 <motion.a
// // //                   key={index}
// // //                   href={social.url}
// // //                   target="_blank"
// // //                   rel="noreferrer"
// // //                   className="social-link"
// // //                   aria-label={social.label}
// // //                   initial={{ opacity: 0, scale: 0.8 }}
// // //                   whileInView={{ opacity: 1, scale: 1 }}
// // //                   viewport={{ once: true }}
// // //                   transition={{ delay: index * 0.1 }}
// // //                 >
// // //                   {social.icon}
// // //                   <span>{social.label}</span>
// // //                 </motion.a>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ============================================
// // //          6. CTA SECTION
// // //          ============================================ */}
// // //       <section className="contact-cta">
// // //         <div className="container">
// // //           <motion.div 
// // //             className="cta-content"
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //           >
// // //             <h2>Join the KITD Community</h2>
// // //             <p>
// // //               Whether you're looking to become a member, volunteer, collaborate or 
// // //               attend an event, we're here to welcome you into our community.
// // //             </p>
// // //             <div className="cta-buttons">
// // //               <Link to="/membership" className="primary-btn">
// // //                 Become a Member <ArrowRight size={18} />
// // //               </Link>
// // //               <Link to="/events" className="secondary-btn">
// // //                 Explore Events
// // //               </Link>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //     </div>
// // //   );
// // // };

// // // export default ContactPage;


// // // src/pages/Contact/ContactPage.jsx

// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { 
// //   Mail, 
// //   Phone, 
// //   MapPin, 
// //   Clock, 
// //   ArrowRight,
// //   Check,
// //   User,
// //   Briefcase,
// //   Heart,
// //   Calendar,
// //   Users,
// //   Camera,
// //   Share2,
// //   FileText,
// //   Globe,
// //   MessageCircle,
// //   Send
// // } from "lucide-react";
// // import { motion } from "framer-motion";

// // // Import React Icons for social media
// // import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// // import "./ContactPage.css";

// // // Note: Handshake icon is not available in lucide-react, using a different icon
// // // If you need Handshake, you can import from lucide-react or use an alternative

// // const ContactPage = () => {
// //   const [formData, setFormData] = useState({
// //     title: "",
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     phone: "",
// //     city: "",
// //     country: "Germany",
// //     subject: "",
// //     enquiryType: "",
// //     message: ""
// //   });

// //   const [formSubmitted, setFormSubmitted] = useState(false);
// //   const [formErrors, setFormErrors] = useState({});

// //   const enquiryTypes = [
// //     "General Enquiry",
// //     "Membership",
// //     "Events",
// //     "Volunteer",
// //     "Artist Directory",
// //     "Partnership",
// //     "Media",
// //     "Other"
// //   ];

// //   const contactInfo = [
// //     {
// //       icon: <MapPin size={24} />,
// //       title: "Address",
// //       details: ["KITD Office", "Germany"],
// //       color: "#8B1E3F"
// //     },
// //     {
// //       icon: <Mail size={24} />,
// //       title: "Email",
// //       details: ["info@kitd.de"],
// //       color: "#C41E3A"
// //     },
// //     {
// //       icon: <Phone size={24} />,
// //       title: "Phone",
// //       details: ["+49 XXX XXX XXXX"],
// //       color: "#D4436A"
// //     },
// //     {
// //       icon: <Clock size={24} />,
// //       title: "Office Hours",
// //       details: ["Monday – Friday", "09:00 AM – 05:00 PM"],
// //       color: "#E85D75"
// //     }
// //   ];

// //   const frequentlyContacted = [
// //     { icon: <Users size={24} />, title: "Membership Support", desc: "Join or renew your membership" },
// //     { icon: <Heart size={24} />, title: "Volunteer Opportunities", desc: "Contribute your time and skills" },
// //     { icon: <User size={24} />, title: "Artist Registration", desc: "Register as a KITD artist" },
// //     { icon: <Calendar size={24} />, title: "Event Information", desc: "Learn about upcoming events" },
// //     { icon: <Briefcase size={24} />, title: "Partnerships", desc: "Collaborate with KITD" },
// //     { icon: <Camera size={24} />, title: "Media Enquiries", desc: "Press and media relations" }
// //   ];

// //   const socialLinks = [
// //     { icon: <FaFacebookF size={22} />, label: "Facebook", url: "https://facebook.com/kitd" },
// //     { icon: <FaInstagram size={22} />, label: "Instagram", url: "https://instagram.com/kitd" },
// //     { icon: <FaYoutube size={22} />, label: "YouTube", url: "https://youtube.com/kitd" },
// //     { icon: <FaLinkedinIn size={22} />, label: "LinkedIn", url: "https://linkedin.com/company/kitd" }
// //   ];

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //     if (formErrors[name]) {
// //       setFormErrors(prev => ({ ...prev, [name]: "" }));
// //     }
// //   };

// //   const validateForm = () => {
// //     const errors = {};
// //     if (!formData.title) errors.title = "Title is required";
// //     if (!formData.firstName) errors.firstName = "First name is required";
// //     if (!formData.lastName) errors.lastName = "Last name is required";
// //     if (!formData.email) errors.email = "Email is required";
// //     if (!formData.email.includes('@')) errors.email = "Valid email is required";
// //     if (!formData.phone) errors.phone = "Phone number is required";
// //     if (!formData.city) errors.city = "City is required";
// //     if (!formData.subject) errors.subject = "Subject is required";
// //     if (!formData.enquiryType) errors.enquiryType = "Enquiry type is required";
// //     if (!formData.message) errors.message = "Message is required";
// //     setFormErrors(errors);
// //     return Object.keys(errors).length === 0;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (validateForm()) {
// //       console.log("Contact form submitted:", formData);
// //       setFormSubmitted(true);
// //       setTimeout(() => {
// //         setFormSubmitted(false);
// //         setFormData({
// //           title: "",
// //           firstName: "",
// //           lastName: "",
// //           email: "",
// //           phone: "",
// //           city: "",
// //           country: "Germany",
// //           subject: "",
// //           enquiryType: "",
// //           message: ""
// //         });
// //       }, 5050);
// //     }
// //   };

// //   return (
// //     <div className="contact-page">

// //       {/* ============================================
// //          1. HERO SECTION
// //          ============================================ */}
// //       <section className="contact-hero">
// //         <div className="contact-hero-overlay" />
// //         <div className="container">
// //           <motion.div 
// //             className="contact-hero-content"
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <motion.span 
// //               className="contact-hero-tag"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.2 }}
// //             >
// //               <MessageCircle size={18} />
// //               CONTACT KITD
// //             </motion.span>

// //             <motion.h1
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.3 }}
// //             >
// //               Let's Connect &amp; Celebrate
// //               <span>Indian Classical Dance Together</span>
// //             </motion.h1>

// //             <motion.p
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.4 }}
// //             >
// //               Whether you're an artist, teacher, student, institution, volunteer or supporter, 
// //               we'd love to hear from you. Reach out to us for membership, collaborations, events 
// //               or any questions about the KITD community.
// //             </motion.p>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ============================================
// //          2. GET IN TOUCH
// //          ============================================ */}
// //       <section className="get-in-touch">
// //         <div className="container">
// //           <motion.div 
// //             className="get-in-touch-content"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <span className="section-tag">Get in Touch</span>
// //             <h2>We're Here to Help</h2>
// //             <p className="get-in-touch-description">
// //               Our team is happy to answer your questions and guide you through membership, 
// //               volunteering, events and collaboration opportunities.
// //             </p>
// //           </motion.div>

// //           <div className="contact-info-grid">
// //             {contactInfo.map((info, index) => (
// //               <motion.div 
// //                 key={index}
// //                 className="contact-info-card"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.1 }}
// //               >
// //                 <div className="contact-info-icon" style={{ background: info.color }}>
// //                   {info.icon}
// //                 </div>
// //                 <h3>{info.title}</h3>
// //                 {info.details.map((detail, i) => (
// //                   <p key={i}>{detail}</p>
// //                 ))}
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ============================================
// //          3. CONTACT FORM
// //          ============================================ */}
// //       <section className="contact-form-section">
// //         <div className="container">
// //           <div className="form-wrapper">
// //             <motion.div 
// //               className="form-content"
// //               initial={{ opacity: 0, x: -30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.6 }}
// //             >
// //               <span className="section-tag">Send Message</span>
// //               <h2>Send Us a Message</h2>
// //               <p>Fill out the form below and we'll get back to you as soon as possible.</p>

// //               {formSubmitted ? (
// //                 <motion.div 
// //                   className="form-success"
// //                   initial={{ opacity: 0, scale: 0.95 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                 >
// //                   <Check size={48} />
// //                   <h3>Message Sent!</h3>
// //                   <p>Thank you for contacting KITD. Our team will respond to your enquiry within 24-48 hours.</p>
// //                 </motion.div>
// //               ) : (
// //                 <form className="contact-form" onSubmit={handleSubmit}>
// //                   <div className="form-row">
// //                     <div className="form-group">
// //                       <label htmlFor="title">Title *</label>
// //                       <select
// //                         id="title"
// //                         name="title"
// //                         value={formData.title}
// //                         onChange={handleInputChange}
// //                         className={formErrors.title ? 'error' : ''}
// //                       >
// //                         <option value="">Select Title</option>
// //                         <option value="Mr.">Mr.</option>
// //                         <option value="Ms.">Ms.</option>
// //                         <option value="Mrs.">Mrs.</option>
// //                         <option value="Dr.">Dr.</option>
// //                         <option value="Prof.">Prof.</option>
// //                       </select>
// //                       {formErrors.title && <span className="error-message">{formErrors.title}</span>}
// //                     </div>

// //                     <div className="form-group">
// //                       <label htmlFor="firstName">First Name *</label>
// //                       <input
// //                         type="text"
// //                         id="firstName"
// //                         name="firstName"
// //                         placeholder="Your first name"
// //                         value={formData.firstName}
// //                         onChange={handleInputChange}
// //                         className={formErrors.firstName ? 'error' : ''}
// //                       />
// //                       {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
// //                     </div>

// //                     <div className="form-group">
// //                       <label htmlFor="lastName">Last Name *</label>
// //                       <input
// //                         type="text"
// //                         id="lastName"
// //                         name="lastName"
// //                         placeholder="Your last name"
// //                         value={formData.lastName}
// //                         onChange={handleInputChange}
// //                         className={formErrors.lastName ? 'error' : ''}
// //                       />
// //                       {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
// //                     </div>
// //                   </div>

// //                   <div className="form-row">
// //                     <div className="form-group">
// //                       <label htmlFor="email">Email Address *</label>
// //                       <input
// //                         type="email"
// //                         id="email"
// //                         name="email"
// //                         placeholder="your@email.com"
// //                         value={formData.email}
// //                         onChange={handleInputChange}
// //                         className={formErrors.email ? 'error' : ''}
// //                       />
// //                       {formErrors.email && <span className="error-message">{formErrors.email}</span>}
// //                     </div>

// //                     <div className="form-group">
// //                       <label htmlFor="phone">Phone Number *</label>
// //                       <input
// //                         type="tel"
// //                         id="phone"
// //                         name="phone"
// //                         placeholder="+49 XXX XXX XXXX"
// //                         value={formData.phone}
// //                         onChange={handleInputChange}
// //                         className={formErrors.phone ? 'error' : ''}
// //                       />
// //                       {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
// //                     </div>
// //                   </div>

// //                   <div className="form-row">
// //                     <div className="form-group">
// //                       <label htmlFor="city">City *</label>
// //                       <input
// //                         type="text"
// //                         id="city"
// //                         name="city"
// //                         placeholder="Your city"
// //                         value={formData.city}
// //                         onChange={handleInputChange}
// //                         className={formErrors.city ? 'error' : ''}
// //                       />
// //                       {formErrors.city && <span className="error-message">{formErrors.city}</span>}
// //                     </div>

// //                     <div className="form-group">
// //                       <label htmlFor="country">Country</label>
// //                       <select
// //                         id="country"
// //                         name="country"
// //                         value={formData.country}
// //                         onChange={handleInputChange}
// //                       >
// //                         <option value="Germany">Germany</option>
// //                         <option value="Austria">Austria</option>
// //                         <option value="Switzerland">Switzerland</option>
// //                         <option value="Other">Other</option>
// //                       </select>
// //                     </div>
// //                   </div>

// //                   <div className="form-row">
// //                     <div className="form-group">
// //                       <label htmlFor="subject">Subject *</label>
// //                       <input
// //                         type="text"
// //                         id="subject"
// //                         name="subject"
// //                         placeholder="Subject of your enquiry"
// //                         value={formData.subject}
// //                         onChange={handleInputChange}
// //                         className={formErrors.subject ? 'error' : ''}
// //                       />
// //                       {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
// //                     </div>

// //                     <div className="form-group">
// //                       <label htmlFor="enquiryType">Enquiry Type *</label>
// //                       <select
// //                         id="enquiryType"
// //                         name="enquiryType"
// //                         value={formData.enquiryType}
// //                         onChange={handleInputChange}
// //                         className={formErrors.enquiryType ? 'error' : ''}
// //                       >
// //                         <option value="">Select Enquiry Type</option>
// //                         {enquiryTypes.map((type) => (
// //                           <option key={type} value={type}>{type}</option>
// //                         ))}
// //                       </select>
// //                       {formErrors.enquiryType && <span className="error-message">{formErrors.enquiryType}</span>}
// //                     </div>
// //                   </div>

// //                   <div className="form-group">
// //                     <label htmlFor="message">Message *</label>
// //                     <textarea
// //                       id="message"
// //                       name="message"
// //                       placeholder="Tell us how we can help you..."
// //                       rows="5"
// //                       value={formData.message}
// //                       onChange={handleInputChange}
// //                       className={formErrors.message ? 'error' : ''}
// //                     />
// //                     {formErrors.message && <span className="error-message">{formErrors.message}</span>}
// //                   </div>

// //                   <div className="form-actions">
// //                     <button type="submit" className="submit-btn">
// //                       <Send size={18} />
// //                       Send Message
// //                     </button>
// //                     <p className="form-note">* Required fields</p>
// //                   </div>
// //                 </form>
// //               )}
// //             </motion.div>

// //             <motion.div 
// //               className="form-sidebar"
// //               initial={{ opacity: 0, x: 30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.6 }}
// //             >
// //               <div className="sidebar-card">
// //                 <h3>Frequently Contacted For</h3>
// //                 <div className="frequently-list">
// //                   {frequentlyContacted.map((item, index) => (
// //                     <div key={index} className="frequently-item">
// //                       <div className="frequently-icon">{item.icon}</div>
// //                       <div>
// //                         <h4>{item.title}</h4>
// //                         <p>{item.desc}</p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="sidebar-card hours-card">
// //                 <h3>Quick Response</h3>
// //                 <p>We typically respond to all enquiries within 24-48 hours during business days.</p>
// //                 <div className="response-time">
// //                   <Clock size={18} />
// //                   <span>Mon-Fri: 09:00 - 17:00</span>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ============================================
// //          4. OFFICE LOCATION
// //          ============================================ */}
// //       <section className="office-location">
// //         <div className="container">
// //           <motion.div 
// //             className="section-header"
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <span className="section-tag">Location</span>
// //             <h2>Visit or Reach Us</h2>
// //             <p>Find us at our office or get in touch through our contact details</p>
// //           </motion.div>

// //           <div className="location-wrapper">
// //             <div className="location-map">
// //               <div className="map-placeholder">
// //                 <MapPin size={48} />
// //                 <p>Google Map Integration</p>
// //                 <span>KITD Office, Germany</span>
// //               </div>
// //             </div>

// //             <div className="location-details">
// //               <h3>Office Address</h3>
// //               <div className="address-item">
// //                 <MapPin size={20} />
// //                 <div>
// //                   <p><strong>KITD Office</strong></p>
// //                   <p>Germany</p>
// //                 </div>
// //               </div>

// //               <div className="address-item">
// //                 <Mail size={20} />
// //                 <div>
// //                   <p><strong>Email</strong></p>
// //                   <p>info@kitd.de</p>
// //                 </div>
// //               </div>

// //               <div className="address-item">
// //                 <Phone size={20} />
// //                 <div>
// //                   <p><strong>Phone</strong></p>
// //                   <p>+49 XXX XXX XXXX</p>
// //                 </div>
// //               </div>

// //               <div className="address-item">
// //                 <Clock size={20} />
// //                 <div>
// //                   <p><strong>Office Hours</strong></p>
// //                   <p>Monday – Friday, 09:00 AM – 05:00 PM</p>
// //                 </div>
// //               </div>

// //               <Link to="/contact#directions" className="directions-btn">
// //                 Get Directions <ArrowRight size={16} />
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ============================================
// //          5. SOCIAL MEDIA
// //          ============================================ */}
// //       <section className="social-media-section">
// //         <div className="container">
// //           <motion.div 
// //             className="social-content"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <span className="section-tag">Connect</span>
// //             <h2>Stay Connected</h2>
// //             <p>
// //               Follow KITD to stay updated on performances, workshops, cultural 
// //               programmes and community activities.
// //             </p>

// //             <div className="social-links">
// //               {socialLinks.map((social, index) => (
// //                 <motion.a
// //                   key={index}
// //                   href={social.url}
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   className="social-link"
// //                   aria-label={social.label}
// //                   initial={{ opacity: 0, scale: 0.8 }}
// //                   whileInView={{ opacity: 1, scale: 1 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: index * 0.1 }}
// //                 >
// //                   {social.icon}
// //                   <span>{social.label}</span>
// //                 </motion.a>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ============================================
// //          6. CTA SECTION
// //          ============================================ */}
// //       <section className="contact-cta">
// //         <div className="container">
// //           <motion.div 
// //             className="cta-content"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <h2>Join the KITD Community</h2>
// //             <p>
// //               Whether you're looking to become a member, volunteer, collaborate or 
// //               attend an event, we're here to welcome you into our community.
// //             </p>
// //             <div className="cta-buttons">
// //               <Link to="/membership" className="primary-btn">
// //                 Become a Member <ArrowRight size={18} />
// //               </Link>
// //               <Link to="/events" className="secondary-btn">
// //                 Explore Events
// //               </Link>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //     </div>
// //   );
// // };

// // export default ContactPage;


// // src/pages/Contact/ContactPage.jsx

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { 
//   Mail, 
//   Phone, 
//   MapPin, 
//   Clock, 
//   ArrowRight,
//   Check,
//   User,
//   Briefcase,
//   Heart,
//   Calendar,
//   Users,
//   Camera,
//   Share2,
//   FileText,
//   Globe,
//   MessageCircle,
//   Send,
//   Loader,
//   AlertCircle
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// import "./ContactPage.css";

// // We need to create this API function if it doesn't exist
// // You can add it to your contacts API file
// import api from "../../api/axios";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     city: "",
//     country: "Germany",
//     subject: "",
//     enquiryType: "",
//     message: ""
//   });

//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [apiError, setApiError] = useState("");

//   const enquiryTypes = [
//     "General Enquiry",
//     "Membership",
//     "Events",
//     "Volunteer",
//     "Artist Directory",
//     "Partnership",
//     "Media",
//     "Other"
//   ];

//   const contactInfo = [
//     {
//       icon: <MapPin size={24} />,
//       title: "Address",
//       details: ["KITD Office", "Germany"],
//       color: "#8B1E3F"
//     },
//     {
//       icon: <Mail size={24} />,
//       title: "Email",
//       details: ["info@kitd.de"],
//       color: "#C41E3A"
//     },
//     {
//       icon: <Phone size={24} />,
//       title: "Phone",
//       details: ["+49 XXX XXX XXXX"],
//       color: "#D4436A"
//     },
//     {
//       icon: <Clock size={24} />,
//       title: "Office Hours",
//       details: ["Monday – Friday", "09:00 AM – 05:00 PM"],
//       color: "#E85D75"
//     }
//   ];

//   const frequentlyContacted = [
//     { icon: <Users size={24} />, title: "Membership Support", desc: "Join or renew your membership" },
//     { icon: <Heart size={24} />, title: "Volunteer Opportunities", desc: "Contribute your time and skills" },
//     { icon: <User size={24} />, title: "Artist Registration", desc: "Register as a KITD artist" },
//     { icon: <Calendar size={24} />, title: "Event Information", desc: "Learn about upcoming events" },
//     { icon: <Briefcase size={24} />, title: "Partnerships", desc: "Collaborate with KITD" },
//     { icon: <Camera size={24} />, title: "Media Enquiries", desc: "Press and media relations" }
//   ];

//   const socialLinks = [
//     { icon: <FaFacebookF size={22} />, label: "Facebook", url: "https://facebook.com/kitd" },
//     { icon: <FaInstagram size={22} />, label: "Instagram", url: "https://instagram.com/kitd" },
//     { icon: <FaYoutube size={22} />, label: "YouTube", url: "https://youtube.com/kitd" },
//     { icon: <FaLinkedinIn size={22} />, label: "LinkedIn", url: "https://linkedin.com/company/kitd" }
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     // Clear error for this field
//     if (formErrors[name]) {
//       setFormErrors(prev => ({ ...prev, [name]: "" }));
//     }
//     // Clear API error when user makes changes
//     if (apiError) {
//       setApiError("");
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.title) errors.title = "Title is required";
//     if (!formData.firstName.trim()) errors.firstName = "First name is required";
//     if (!formData.lastName.trim()) errors.lastName = "Last name is required";
//     if (!formData.email.trim()) errors.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Valid email is required";
//     if (!formData.phone.trim()) errors.phone = "Phone number is required";
//     else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone)) errors.phone = "Valid phone number is required";
//     if (!formData.city.trim()) errors.city = "City is required";
//     if (!formData.subject.trim()) errors.subject = "Subject is required";
//     if (!formData.enquiryType) errors.enquiryType = "Enquiry type is required";
//     if (!formData.message.trim()) errors.message = "Message is required";
//     else if (formData.message.trim().length < 10) errors.message = "Message must be at least 10 characters";
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
    
//   //   if (!validateForm()) return;
    
//   //   setIsSubmitting(true);
//   //   setApiError("");
//   //   setFormErrors({});
    
//   //   try {
//   //     // Prepare data for API - combine firstName and lastName into fullName
//   //     const contactData = {
//   //       fullName: `${formData.title} ${formData.firstName.trim()} ${formData.lastName.trim()}`,
//   //       email: formData.email.trim().toLowerCase(),
//   //       phone: formData.phone.trim(),
//   //       city: formData.city.trim(),
//   //       country: formData.country,
//   //       subject: formData.subject.trim(),
//   //       enquiryType: formData.enquiryType,
//   //       message: formData.message.trim()
//   //     };

//   //     console.log("Sending contact data:", contactData); // For debugging

//   //     // Submit to API
//   //     const response = await api.post("/contacts", contactData);
      
//   //     console.log("Contact form submitted successfully:", response.data);
      
//   //     // Show success message
//   //     setFormSubmitted(true);
      
//   //     // Scroll to success message
//   //     document.querySelector(".contact-form-section").scrollIntoView({ 
//   //       behavior: "smooth",
//   //       block: "start"
//   //     });
      
//   //     // Reset form after delay
//   //     const resetTimer = setTimeout(() => {
//   //       setFormSubmitted(false);
//   //       setFormData({
//   //         title: "",
//   //         firstName: "",
//   //         lastName: "",
//   //         email: "",
//   //         phone: "",
//   //         city: "",
//   //         country: "Germany",
//   //         subject: "",
//   //         enquiryType: "",
//   //         message: ""
//   //       });
//   //     }, 5050);
      
//   //     return () => clearTimeout(resetTimer);
      
//   //   } catch (error) {
//   //     console.error("Contact form submission error:", error);
      
//   //     // Handle different error scenarios
//   //     if (error.response?.data) {
//   //       const { data } = error.response;
        
//   //       // Handle structured validation errors
//   //       if (data.errors) {
//   //         const fieldErrors = {};
          
//   //         if (Array.isArray(data.errors)) {
//   //           data.errors.forEach(err => {
//   //             // Map backend field names to frontend
//   //             const fieldMapping = {
//   //               'fullName': 'firstName',
//   //               'phone': 'phone',
//   //               'subject': 'subject'
//   //             };
//   //             const fieldName = fieldMapping[err.field] || err.field;
//   //             fieldErrors[fieldName] = err.message;
//   //           });
//   //         } else if (typeof data.errors === 'object') {
//   //           Object.entries(data.errors).forEach(([field, message]) => {
//   //             const fieldMapping = {
//   //               'fullName': 'firstName',
//   //               'phone': 'phone',
//   //               'subject': 'subject'
//   //             };
//   //             const fieldName = fieldMapping[field] || field;
//   //             fieldErrors[fieldName] = Array.isArray(message) ? message[0] : message;
//   //           });
//   //         }
          
//   //         setFormErrors(prev => ({ ...prev, ...fieldErrors }));
//   //         setApiError("Please correct the highlighted fields below.");
//   //       } else {
//   //         // Generic error message
//   //         setApiError(
//   //           data.message || 
//   //           data.error || 
//   //           "Failed to send message. Please try again."
//   //         );
//   //       }
//   //     } else if (error.request) {
//   //       setApiError("Unable to connect to server. Please check your internet connection and try again.");
//   //     } else {
//   //       setApiError("An unexpected error occurred. Please try again later.");
//   //     }
      
//   //     // Scroll to show errors
//   //     document.querySelector(".contact-form-section").scrollIntoView({ 
//   //       behavior: "smooth",
//   //       block: "start"
//   //     });
      
//   //   } finally {
//   //     setIsSubmitting(false);
//   //   }
//   // };

// // const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     if (!validateForm()) return;
    
// //     setIsSubmitting(true);
// //     setApiError("");
// //     setFormErrors({});
    
// //     try {
// //       // Prepare data for API - match exact Prisma schema fields
// //       const contactData = {
// //         fullName: `${formData.title} ${formData.firstName.trim()} ${formData.lastName.trim()}`,
// //         email: formData.email.trim().toLowerCase(),
// //         phone: formData.phone.trim(),
// //         subject: formData.subject.trim(),
// //         message: formData.message.trim()
// //       };

// //       console.log("Sending contact data:", contactData); // For debugging

// //       // Submit to API
// //       const response = await api.post("/contacts", contactData);
      
// //       console.log("Contact form submitted successfully:", response.data);
      
// //       // Show success message
// //       setFormSubmitted(true);
      
// //       // Scroll to success message
// //       document.querySelector(".contact-form-section").scrollIntoView({ 
// //         behavior: "smooth",
// //         block: "start"
// //       });
      
// //       // Reset form after delay
// //       const resetTimer = setTimeout(() => {
// //         setFormSubmitted(false);
// //         setFormData({
// //           title: "",
// //           firstName: "",
// //           lastName: "",
// //           email: "",
// //           phone: "",
// //           city: "",
// //           country: "Germany",
// //           subject: "",
// //           enquiryType: "",
// //           message: ""
// //         });
// //       }, 5050);
      
// //       return () => clearTimeout(resetTimer);
      
// //     } catch (error) {
// //       console.error("Contact form submission error:", error);
      
// //       // Handle different error scenarios
// //       if (error.response?.data) {
// //         const { data } = error.response;
        
// //         // Handle structured validation errors
// //         if (data.errors) {
// //           const fieldErrors = {};
          
// //           if (Array.isArray(data.errors)) {
// //             data.errors.forEach(err => {
// //               // Map backend field names to frontend
// //               const fieldMapping = {
// //                 'fullName': 'firstName',
// //                 'email': 'email',
// //                 'phone': 'phone',
// //                 'subject': 'subject',
// //                 'message': 'message'
// //               };
// //               const fieldName = fieldMapping[err.field] || err.field;
// //               fieldErrors[fieldName] = err.message;
// //             });
// //           } else if (typeof data.errors === 'object') {
// //             Object.entries(data.errors).forEach(([field, message]) => {
// //               const fieldMapping = {
// //                 'fullName': 'firstName',
// //                 'email': 'email',
// //                 'phone': 'phone',
// //                 'subject': 'subject',
// //                 'message': 'message'
// //               };
// //               const fieldName = fieldMapping[field] || field;
// //               fieldErrors[fieldName] = Array.isArray(message) ? message[0] : message;
// //             });
// //           }
          
// //           setFormErrors(prev => ({ ...prev, ...fieldErrors }));
// //           setApiError("Please correct the highlighted fields below.");
// //         } else {
// //           // Generic error message
// //           setApiError(
// //             data.message || 
// //             data.error || 
// //             "Failed to send message. Please try again."
// //           );
// //         }
// //       } else if (error.request) {
// //         setApiError("Unable to connect to server. Please check your internet connection and try again.");
// //       } else {
// //         setApiError("An unexpected error occurred. Please try again later.");
// //       }
      
// //       // Scroll to show errors
// //       document.querySelector(".contact-form-section").scrollIntoView({ 
// //         behavior: "smooth",
// //         block: "start"
// //       });
      
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };


// const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
//     setApiError("");
//     setFormErrors({});
    
//     try {
//       // Prepare data matching Prisma schema exactly
//       const contactData = {
//         fullName: `${formData.title} ${formData.firstName.trim()} ${formData.lastName.trim()}`,
//         email: formData.email.trim().toLowerCase(),
//         phone: formData.phone.trim(),
//         city: formData.city.trim(),
//         state: "", // Add state field if you want to collect it
//         country: formData.country,
//         subject: formData.subject.trim(),
//         enquiryType: formData.enquiryType,
//         message: formData.message.trim()
//       };

//       console.log("Sending contact data:", contactData); // For debugging

//       // Submit to API
//       const response = await api.post("/contacts", contactData);
      
//       console.log("Contact form submitted successfully:", response.data);
      
//       // Show success message
//       setFormSubmitted(true);
      
//       // Scroll to success message
//       document.querySelector(".contact-form-section").scrollIntoView({ 
//         behavior: "smooth",
//         block: "start"
//       });
      
//       // Reset form after delay
//       const resetTimer = setTimeout(() => {
//         setFormSubmitted(false);
//         setFormData({
//           title: "",
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           city: "",
//           country: "Germany",
//           subject: "",
//           enquiryType: "",
//           message: ""
//         });
//       }, 5050);
      
//       return () => clearTimeout(resetTimer);
      
//     } catch (error) {
//       console.error("Contact form submission error:", error);
      
//       // Handle different error scenarios
//       if (error.response?.data) {
//         const { data } = error.response;
        
//         // Handle Prisma validation errors
//         if (data.message?.includes('Argument `fullName` is missing')) {
//           setApiError("Name field is required. Please fill in your name.");
//           setFormErrors(prev => ({ ...prev, firstName: "Full name is required" }));
//         } else if (data.message?.includes('Argument `email` is missing')) {
//           setApiError("Email is required.");
//           setFormErrors(prev => ({ ...prev, email: "Email is required" }));
//         } else if (data.message?.includes('Argument `message` is missing')) {
//           setApiError("Message is required.");
//           setFormErrors(prev => ({ ...prev, message: "Message is required" }));
//         } else {
//           // Generic error message
//           setApiError(
//             data.message || 
//             data.error || 
//             "Failed to send message. Please try again."
//           );
//         }
//       } else if (error.request) {
//         setApiError("Unable to connect to server. Please check your internet connection and try again.");
//       } else {
//         setApiError("An unexpected error occurred. Please try again later.");
//       }
      
//       // Scroll to show errors
//       document.querySelector(".contact-form-section").scrollIntoView({ 
//         behavior: "smooth",
//         block: "start"
//       });
      
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="contact-page">

//       {/* ============================================
//          1. HERO SECTION
//          ============================================ */}
//       <section className="contact-hero">
//         <div className="contact-hero-overlay" />
//         <div className="container">
//           <motion.div 
//             className="contact-hero-content"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.span 
//               className="contact-hero-tag"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <MessageCircle size={18} />
//               CONTACT KITD
//             </motion.span>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               Let's Connect &amp; Celebrate
//               <span>Indian Classical Dance Together</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Whether you're an artist, teacher, student, institution, volunteer or supporter, 
//               we'd love to hear from you. Reach out to us for membership, collaborations, events 
//               or any questions about the KITD community.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================
//          2. GET IN TOUCH
//          ============================================ */}
//       <section className="get-in-touch">
//         <div className="container">
//           <motion.div 
//             className="get-in-touch-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <span className="section-tag">Get in Touch</span>
//             <h2>We're Here to Help</h2>
//             <p className="get-in-touch-description">
//               Our team is happy to answer your questions and guide you through membership, 
//               volunteering, events and collaboration opportunities.
//             </p>
//           </motion.div>

//           <div className="contact-info-grid">
//             {contactInfo.map((info, index) => (
//               <motion.div 
//                 key={index}
//                 className="contact-info-card"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="contact-info-icon" style={{ background: info.color }}>
//                   {info.icon}
//                 </div>
//                 <h3>{info.title}</h3>
//                 {info.details.map((detail, i) => (
//                   <p key={i}>{detail}</p>
//                 ))}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          3. CONTACT FORM
//          ============================================ */}
//       <section className="contact-form-section">
//         <div className="container">
//           <div className="form-wrapper">
//             <motion.div 
//               className="form-content"
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <span className="section-tag">Send Message</span>
//               <h2>Send Us a Message</h2>
//               <p>Fill out the form below and we'll get back to you as soon as possible.</p>

//               {formSubmitted ? (
//                 <motion.div 
//                   className="form-success"
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                 >
//                   <Check size={48} />
//                   <h3>Message Sent!</h3>
//                   <p>Thank you for contacting KITD. Our team will respond to your enquiry within 24-48 hours.</p>
//                 </motion.div>
//               ) : (
//                 <form className="contact-form" onSubmit={handleSubmit}>
//                   {/* API Error Banner */}
//                   {apiError && (
//                     <motion.div 
//                       className="api-error-banner"
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                     >
//                       <AlertCircle size={20} />
//                       <span>{apiError}</span>
//                     </motion.div>
//                   )}

//                   <div className="form-row">
//                     <div className="form-group">
//                       <label htmlFor="title">Title *</label>
//                       <select
//                         id="title"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleInputChange}
//                         className={formErrors.title ? 'error' : ''}
//                       >
//                         <option value="">Select Title</option>
//                         <option value="Mr.">Mr.</option>
//                         <option value="Ms.">Ms.</option>
//                         <option value="Mrs.">Mrs.</option>
//                         <option value="Dr.">Dr.</option>
//                         <option value="Prof.">Prof.</option>
//                       </select>
//                       {formErrors.title && <span className="error-message">{formErrors.title}</span>}
//                     </div>

//                     <div className="form-group">
//                       <label htmlFor="firstName">First Name *</label>
//                       <input
//                         type="text"
//                         id="firstName"
//                         name="firstName"
//                         placeholder="Your first name"
//                         value={formData.firstName}
//                         onChange={handleInputChange}
//                         className={formErrors.firstName ? 'error' : ''}
//                       />
//                       {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
//                     </div>

//                     <div className="form-group">
//                       <label htmlFor="lastName">Last Name *</label>
//                       <input
//                         type="text"
//                         id="lastName"
//                         name="lastName"
//                         placeholder="Your last name"
//                         value={formData.lastName}
//                         onChange={handleInputChange}
//                         className={formErrors.lastName ? 'error' : ''}
//                       />
//                       {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
//                     </div>
//                   </div>

//                   <div className="form-row">
//                     <div className="form-group">
//                       <label htmlFor="email">Email Address *</label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="your@email.com"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         className={formErrors.email ? 'error' : ''}
//                       />
//                       {formErrors.email && <span className="error-message">{formErrors.email}</span>}
//                     </div>

//                     <div className="form-group">
//                       <label htmlFor="phone">Phone Number *</label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         placeholder="+49 XXX XXX XXXX"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         className={formErrors.phone ? 'error' : ''}
//                       />
//                       {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
//                     </div>
//                   </div>

//                   <div className="form-row">
//                     <div className="form-group">
//                       <label htmlFor="city">City *</label>
//                       <input
//                         type="text"
//                         id="city"
//                         name="city"
//                         placeholder="Your city"
//                         value={formData.city}
//                         onChange={handleInputChange}
//                         className={formErrors.city ? 'error' : ''}
//                       />
//                       {formErrors.city && <span className="error-message">{formErrors.city}</span>}
//                     </div>

//                     <div className="form-group">
//                       <label htmlFor="country">Country</label>
//                       <select
//                         id="country"
//                         name="country"
//                         value={formData.country}
//                         onChange={handleInputChange}
//                       >
//                         <option value="Germany">Germany</option>
//                         <option value="Austria">Austria</option>
//                         <option value="Switzerland">Switzerland</option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="form-row">
//                     <div className="form-group">
//                       <label htmlFor="subject">Subject *</label>
//                       <input
//                         type="text"
//                         id="subject"
//                         name="subject"
//                         placeholder="Subject of your enquiry"
//                         value={formData.subject}
//                         onChange={handleInputChange}
//                         className={formErrors.subject ? 'error' : ''}
//                       />
//                       {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
//                     </div>

//                     <div className="form-group">
//                       <label htmlFor="enquiryType">Enquiry Type *</label>
//                       <select
//                         id="enquiryType"
//                         name="enquiryType"
//                         value={formData.enquiryType}
//                         onChange={handleInputChange}
//                         className={formErrors.enquiryType ? 'error' : ''}
//                       >
//                         <option value="">Select Enquiry Type</option>
//                         {enquiryTypes.map((type) => (
//                           <option key={type} value={type}>{type}</option>
//                         ))}
//                       </select>
//                       {formErrors.enquiryType && <span className="error-message">{formErrors.enquiryType}</span>}
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="message">Message *</label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       placeholder="Tell us how we can help you..."
//                       rows="5"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       className={formErrors.message ? 'error' : ''}
//                     />
//                     {formErrors.message && <span className="error-message">{formErrors.message}</span>}
//                   </div>

//                   <div className="form-actions">
//                     <button 
//                       type="submit" 
//                       className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <Loader size={18} className="spinner" />
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           <Send size={18} />
//                           Send Message
//                         </>
//                       )}
//                     </button>
//                     <p className="form-note">* Required fields</p>
//                   </div>
//                 </form>
//               )}
//             </motion.div>

//             <motion.div 
//               className="form-sidebar"
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="sidebar-card">
//                 <h3>Frequently Contacted For</h3>
//                 <div className="frequently-list">
//                   {frequentlyContacted.map((item, index) => (
//                     <div key={index} className="frequently-item">
//                       <div className="frequently-icon">{item.icon}</div>
//                       <div>
//                         <h4>{item.title}</h4>
//                         <p>{item.desc}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="sidebar-card hours-card">
//                 <h3>Quick Response</h3>
//                 <p>We typically respond to all enquiries within 24-48 hours during business days.</p>
//                 <div className="response-time">
//                   <Clock size={18} />
//                   <span>Mon-Fri: 09:00 - 17:00</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          4. OFFICE LOCATION
//          ============================================ */}
//       <section className="office-location">
//         <div className="container">
//           <motion.div 
//             className="section-header"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-tag">Location</span>
//             <h2>Visit or Reach Us</h2>
//             <p>Find us at our office or get in touch through our contact details</p>
//           </motion.div>

//           <div className="location-wrapper">
//             <div className="location-map">
//               <div className="map-placeholder">
//                 <MapPin size={48} />
//                 <p>Google Map Integration</p>
//                 <span>KITD Office, Germany</span>
//               </div>
//             </div>

//             <div className="location-details">
//               <h3>Office Address</h3>
//               <div className="address-item">
//                 <MapPin size={20} />
//                 <div>
//                   <p><strong>KITD Office</strong></p>
//                   <p>Germany</p>
//                 </div>
//               </div>

//               <div className="address-item">
//                 <Mail size={20} />
//                 <div>
//                   <p><strong>Email</strong></p>
//                   <p>info@kitd.de</p>
//                 </div>
//               </div>

//               <div className="address-item">
//                 <Phone size={20} />
//                 <div>
//                   <p><strong>Phone</strong></p>
//                   <p>+49 XXX XXX XXXX</p>
//                 </div>
//               </div>

//               <div className="address-item">
//                 <Clock size={20} />
//                 <div>
//                   <p><strong>Office Hours</strong></p>
//                   <p>Monday – Friday, 09:00 AM – 05:00 PM</p>
//                 </div>
//               </div>

//               <Link to="/contact#directions" className="directions-btn">
//                 Get Directions <ArrowRight size={16} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ============================================
//          5. SOCIAL MEDIA
//          ============================================ */}
//       <section className="social-media-section">
//         <div className="container">
//           <motion.div 
//             className="social-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <span className="section-tag">Connect</span>
//             <h2>Stay Connected</h2>
//             <p>
//               Follow KITD to stay updated on performances, workshops, cultural 
//               programmes and community activities.
//             </p>

//             <div className="social-links">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="social-link"
//                   aria-label={social.label}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   {social.icon}
//                   <span>{social.label}</span>
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ============================================
//          6. CTA SECTION
//          ============================================ */}
//       <section className="contact-cta">
//         <div className="container">
//           <motion.div 
//             className="cta-content"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2>Join the KITD Community</h2>
//             <p>
//               Whether you're looking to become a member, volunteer, collaborate or 
//               attend an event, we're here to welcome you into our community.
//             </p>
//             <div className="cta-buttons">
//               <Link to="/membership" className="primary-btn">
//                 Become a Member <ArrowRight size={18} />
//               </Link>
//               <Link to="/events" className="secondary-btn">
//                 Explore Events
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default ContactPage;

import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  Check,
  User,
  Briefcase,
  Heart,
  Calendar,
  Users,
  Camera,
  Share2,
  FileText,
  Globe,
  MessageCircle,
  Send,
  Loader,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

import "./ContactPage.css";

// Import images
import acthero from "../../assets/cbanner.png";
import contactcta from "../../assets/conban.png";

import api from "../../api/axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "Germany",
    subject: "",
    enquiryType: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const enquiryTypes = [
    "General Enquiry",
    "Membership",
    "Events",
    "Volunteer",
    "Artist Directory",
    "Partnership",
    "Media",
    "Other"
  ];

  const contactInfo = [
    {
      icon: <MapPin size={20} strokeWidth={1.5} />,
      title: "Address",
      details: ["KITD Office", "Germany"],
    },
    {
      icon: <Mail size={20} strokeWidth={1.5} />,
      title: "Email",
      details: ["info@kitd.de"],
    },
    // {
    //   icon: <Phone size={20} strokeWidth={1.5} />,
    //   title: "Phone",
    //   details: ["+49 XXX XXX XXXX"],
    // },
    {
      icon: <Clock size={20} strokeWidth={1.5} />,
      title: "Office Hours",
      details: ["Monday – Friday", "09:00 AM – 05:00 PM"],
    }
  ];

  const frequentlyContacted = [
    { icon: <Users size={20} strokeWidth={1.5} />, title: "Membership Support", desc: "Join or renew your membership" },
    { icon: <Heart size={20} strokeWidth={1.5} />, title: "Volunteer Opportunities", desc: "Contribute your time and skills" },
    { icon: <User size={20} strokeWidth={1.5} />, title: "Artist Registration", desc: "Register as a KITD artist" },
    { icon: <Calendar size={20} strokeWidth={1.5} />, title: "Event Information", desc: "Learn about upcoming events" },
    { icon: <Briefcase size={20} strokeWidth={1.5} />, title: "Partnerships", desc: "Collaborate with KITD" },
    { icon: <Camera size={20} strokeWidth={1.5} />, title: "Media Enquiries", desc: "Press and media relations" }
  ];

  const socialLinks = [
   {
    icon: <FaFacebookF />,
    label: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61567041240884",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    url: "https://www.instagram.com/kitdverein/",
  },
    { icon: <FaYoutube size={20} />, label: "YouTube", url: "#" },
    { icon: <FaLinkedinIn size={20} />, label: "LinkedIn", url: "#" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
    if (apiError) {
      setApiError("");
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
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.enquiryType) errors.enquiryType = "Enquiry type is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    else if (formData.message.trim().length < 10) errors.message = "Message must be at least 10 characters";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setApiError("");
    setFormErrors({});
    
    try {
      const contactData = {
        fullName: `${formData.title} ${formData.firstName.trim()} ${formData.lastName.trim()}`,
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        city: formData.city.trim(),
        state: "",
        country: formData.country,
        subject: formData.subject.trim(),
        enquiryType: formData.enquiryType,
        message: formData.message.trim()
      };

      const response = await api.post("/contacts", contactData);
      
      setFormSubmitted(true);
      
      document.querySelector(".cp-contact__form").scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
      
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          title: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          city: "",
          country: "Germany",
          subject: "",
          enquiryType: "",
          message: ""
        });
      }, 5000);
      
    } catch (error) {
      console.error("Contact form submission error:", error);
      
      if (error.response?.data) {
        const { data } = error.response;
        
        if (data.message?.includes('Argument `fullName` is missing')) {
          setApiError("Name field is required. Please fill in your name.");
          setFormErrors(prev => ({ ...prev, firstName: "Full name is required" }));
        } else if (data.message?.includes('Argument `email` is missing')) {
          setApiError("Email is required.");
          setFormErrors(prev => ({ ...prev, email: "Email is required" }));
        } else if (data.message?.includes('Argument `message` is missing')) {
          setApiError("Message is required.");
          setFormErrors(prev => ({ ...prev, message: "Message is required" }));
        } else {
          setApiError(
            data.message || 
            data.error || 
            "Failed to send message. Please try again."
          );
        }
      } else if (error.request) {
        setApiError("Unable to connect to server. Please check your internet connection and try again.");
      } else {
        setApiError("An unexpected error occurred. Please try again later.");
      }
      
      document.querySelector(".cp-contact__form").scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact KITD | Classical Indian Dance Germany</title>
        <meta name="description" content="Get in touch with KITD for membership, events, volunteering, partnerships, and more." />
      </Helmet>

      <div className="cp-contact">

        {/* ============================================
           1. HERO SECTION
           ============================================ */}
        <section className="cp-contact__hero">
          <div className="cp-contact__hero-bg">
            <img src={acthero} alt="KITD Contact" loading="eager" />
            <div className="cp-contact__hero-overlay" />
            <div className="cp-contact__hero-gradient" />
          </div>
          
          <div className="cp-contact__hero-container">
            <div className="cp-contact__hero-content">
              <span className="cp-contact__hero-tag">CONTACT KITD</span>
              <h1>
                Let's Connect &amp; Celebrate
                <span className="cp-contact__hero-title-accent"> Indian Classical Dance Together</span>
              </h1>
              <p className="cp-contact__hero-desc">
                Whether you're an artist, teacher, student, institution, volunteer or supporter, 
                we'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================
           2. GET IN TOUCH
           ============================================ */}
        <section className="cp-contact__info">
          <div className="cp-contact__container">
            <div className="cp-contact__section-header">
              <span className="cp-contact__section-tag">Get in Touch</span>
              <h2>We're Here to Help</h2>
              <p>
                Our team is happy to answer your questions and guide you through membership, 
                volunteering, events and collaboration opportunities.
              </p>
            </div>

            <div className="cp-contact__info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="cp-contact__info-card" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="cp-contact__info-icon">{info.icon}</div>
                  <h3>{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
           3. CONTACT FORM
           ============================================ */}
        <section className="cp-contact__form">
          <div className="cp-contact__container">
            <div className="cp-contact__form-wrapper">
              <div className="cp-contact__form-content">
                <span className="cp-contact__section-tag">Send Message</span>
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>

                {formSubmitted ? (
                  <div className="cp-contact__form-success">
                    <Check size={48} strokeWidth={1.5} />
                    <h3>Message Sent!</h3>
                    <p>Thank you for contacting KITD. Our team will respond to your enquiry within 24-48 hours.</p>
                  </div>
                ) : (
                  <form className="cp-contact__form-inner" onSubmit={handleSubmit}>
                    {apiError && (
                      <div className="cp-contact__form-error">
                        <AlertCircle size={18} strokeWidth={1.5} />
                        <span>{apiError}</span>
                      </div>
                    )}

                    <div className="cp-contact__form-row">
                      <div className="cp-contact__form-group">
                        <label htmlFor="title">Title *</label>
                        <select
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleInputChange}
                          className={formErrors.title ? 'cp-contact__error' : ''}
                        >
                          <option value="">Select Title</option>
                          <option value="Mr.">Mr.</option>
                          <option value="Ms.">Ms.</option>
                          <option value="Mrs.">Mrs.</option>
                          <option value="Dr.">Dr.</option>
                          <option value="Prof.">Prof.</option>
                        </select>
                        {formErrors.title && <span className="cp-contact__error-text">{formErrors.title}</span>}
                      </div>

                      <div className="cp-contact__form-group">
                        <label htmlFor="firstName">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="Your first name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={formErrors.firstName ? 'cp-contact__error' : ''}
                        />
                        {formErrors.firstName && <span className="cp-contact__error-text">{formErrors.firstName}</span>}
                      </div>

                      <div className="cp-contact__form-group">
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Your last name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={formErrors.lastName ? 'cp-contact__error' : ''}
                        />
                        {formErrors.lastName && <span className="cp-contact__error-text">{formErrors.lastName}</span>}
                      </div>
                    </div>

                    <div className="cp-contact__form-row">
                      <div className="cp-contact__form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={formErrors.email ? 'cp-contact__error' : ''}
                        />
                        {formErrors.email && <span className="cp-contact__error-text">{formErrors.email}</span>}
                      </div>

                      <div className="cp-contact__form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+49 XXX XXX XXXX"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={formErrors.phone ? 'cp-contact__error' : ''}
                        />
                        {formErrors.phone && <span className="cp-contact__error-text">{formErrors.phone}</span>}
                      </div>
                    </div>

                    <div className="cp-contact__form-row">
                      <div className="cp-contact__form-group">
                        <label htmlFor="city">City *</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          placeholder="Your city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={formErrors.city ? 'cp-contact__error' : ''}
                        />
                        {formErrors.city && <span className="cp-contact__error-text">{formErrors.city}</span>}
                      </div>

                      <div className="cp-contact__form-group">
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

                    <div className="cp-contact__form-row">
                      <div className="cp-contact__form-group">
                        <label htmlFor="subject">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="Subject of your enquiry"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={formErrors.subject ? 'cp-contact__error' : ''}
                        />
                        {formErrors.subject && <span className="cp-contact__error-text">{formErrors.subject}</span>}
                      </div>

                      <div className="cp-contact__form-group">
                        <label htmlFor="enquiryType">Enquiry Type *</label>
                        <select
                          id="enquiryType"
                          name="enquiryType"
                          value={formData.enquiryType}
                          onChange={handleInputChange}
                          className={formErrors.enquiryType ? 'cp-contact__error' : ''}
                        >
                          <option value="">Select Enquiry Type</option>
                          {enquiryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        {formErrors.enquiryType && <span className="cp-contact__error-text">{formErrors.enquiryType}</span>}
                      </div>
                    </div>

                    <div className="cp-contact__form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={formErrors.message ? 'cp-contact__error' : ''}
                      />
                      {formErrors.message && <span className="cp-contact__error-text">{formErrors.message}</span>}
                    </div>

                    <div className="cp-contact__form-actions">
                      <button 
                        type="submit" 
                        className={`cp-contact__submit-btn ${isSubmitting ? 'cp-contact__submit-btn--submitting' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader size={16} className="cp-contact__spinner" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} strokeWidth={1.5} />
                            Send Message
                          </>
                        )}
                      </button>
                      <p className="cp-contact__form-note">* Required fields</p>
                    </div>
                  </form>
                )}
              </div>

              <div className="cp-contact__sidebar">
                <div className="cp-contact__sidebar-card">
                  <h3>Frequently Contacted For</h3>
                  <div className="cp-contact__frequently-list">
                    {frequentlyContacted.map((item, index) => (
                      <div key={index} className="cp-contact__frequently-item">
                        <div className="cp-contact__frequently-icon">{item.icon}</div>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="cp-contact__sidebar-card cp-contact__sidebar-card--hours">
                  <h3>Quick Response</h3>
                  <p>We typically respond to all enquiries within 24-48 hours during business days.</p>
                  <div className="cp-contact__response-time">
                    <Clock size={16} strokeWidth={1.5} />
                    <span>Mon-Fri: 09:00 - 17:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           4. SOCIAL MEDIA
           ============================================ */}
        <section className="cp-contact__social">
          <div className="cp-contact__container">
            <div className="cp-contact__social-content">
              <span className="cp-contact__section-tag">Connect</span>
              <h2>Stay Connected</h2>
              <p>
                Follow KITD to stay updated on performances, workshops, cultural 
                programmes and community activities.
              </p>

              <div className="cp-contact__social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="cp-contact__social-link"
                    aria-label={social.label}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
           5. CTA SECTION
           ============================================ */}
        <section className="cp-contact__cta">
          <div className="cp-contact__cta-bg">
            <img src={contactcta} alt="KITD Community" loading="lazy" />
            <div className="cp-contact__cta-overlay" />
          </div>
          
          <div className="cp-contact__container">
            <div className="cp-contact__cta-content">
              <h2>Join the KITD Community</h2>
              <p>
                Whether you're looking to become a member, volunteer, collaborate or 
                attend an event, we're here to welcome you.
              </p>
              <div className="cp-contact__cta-buttons">
                <Link to="/membership" className="cp-contact__cta-btn cp-contact__cta-btn--primary">
                  Become a Member <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
                <Link to="/events" className="cp-contact__cta-btn cp-contact__cta-btn--secondary">
                  Explore Events
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;