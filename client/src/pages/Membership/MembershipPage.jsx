// src/pages/Membership/MembershipPage.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  ArrowRight,
  Check,
  Clock,
  Award,
  Calendar,
  Mail,
  Phone,
  MapPin,
  User,
  Briefcase,
  BookOpen,
  Heart,
  Star,
  Sparkles,
  Shield,
  Globe,
  MessageCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

import "./MembershipPage.css";

const MembershipPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "Germany",
    membershipType: "",
    danceForm: "",
    occupation: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [expandedProcess, setExpandedProcess] = useState(null);

  const membershipTypes = [
    {
      id: "active",
      title: "Active Member",
      description: "For trained dancers, teachers and learners of Indian Classical Dance.",
      price: "€50 / year",
      features: [
        "Access to KITD events and workshops",
        "Performance opportunities",
        "Networking with artists",
        "Member newsletter",
        "Voting rights at AGM"
      ],
      icon: <Users size={32} />,
      color: "#8B1E3F"
    },
    {
      id: "supporting",
      title: "Supporting Member",
      description: "For individuals who wish to support KITD and its mission.",
      price: "€75 / year",
      features: [
        "Support cultural heritage",
        "Invitation to exclusive events",
        "Member newsletter",
        "Recognition in publications",
        "Tax deduction benefits"
      ],
      icon: <Heart size={32} />,
      color: "#C41E3A"
    },
    {
      id: "youth",
      title: "Youth Member",
      description: "For young learners aged 15–18 pursuing Indian Classical Dance.",
      price: "€25 / year",
      features: [
        "Youth workshops and camps",
        "Mentorship opportunities",
        "Performance platforms",
        "Peer networking",
        "Discount on events"
      ],
      icon: <Star size={32} />,
      color: "#E85D75"
    }
  ];

  const eligibilityItems = [
    { icon: <Users size={20} />, label: "Artists" },
    { icon: <User size={20} />, label: "Teachers" },
    { icon: <BookOpen size={20} />, label: "Students" },
    { icon: <Award size={20} />, label: "Researchers" },
    { icon: <Shield size={20} />, label: "Institutions" },
    { icon: <Heart size={20} />, label: "Supporters" }
  ];

  const processSteps = [
    {
      id: 1,
      title: "Submit Application",
      description: "Fill out the membership application form with your details.",
      duration: "5 minutes"
    },
    {
      id: 2,
      title: "Application Review",
      description: "Our team reviews your application and eligibility.",
      duration: "3-5 business days"
    },
    {
      id: 3,
      title: "Committee Approval",
      description: "The membership committee approves your application.",
      duration: "2-3 business days"
    },
    {
      id: 4,
      title: "Welcome to KITD",
      description: "Receive your membership confirmation and welcome pack.",
      duration: "1 business day"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.title) errors.title = "Title is required";
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.email.includes('@')) errors.email = "Valid email is required";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.membershipType) errors.membershipType = "Membership type is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      console.log("Form submitted:", formData);
      setFormSubmitted(true);
      // Reset form after 5 seconds
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
          membershipType: "",
          danceForm: "",
          occupation: "",
          message: ""
        });
      }, 5000);
    }
  };

  const toggleProcessStep = (id) => {
    setExpandedProcess(expandedProcess === id ? null : id);
  };

  return (
    <div className="membership-page">

      {/* ============================================
         1. HERO SECTION
         ============================================ */}
      <section className="membership-hero">
        <div className="membership-hero-overlay" />
        <div className="container">
          <motion.div 
            className="membership-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="membership-hero-tag"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Users size={18} />
              BECOME A MEMBER
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Join Germany's
              <span>Indian Classical Dance Community</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Become part of a growing network of artists, teachers, students, 
              institutions and supporters working together to preserve, promote 
              and foster Indian Classical Dance across Germany.
            </motion.p>

            <motion.div 
              className="membership-hero-actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#application-form" className="primary-btn">
                Apply Now <ArrowRight size={18} />
              </a>
              <a href="#membership-types" className="secondary-btn">
                View Membership Types
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
         2. WHY JOIN KITD
         ============================================ */}
      <section className="why-join">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Why Join</span>
            <h2>Why Join KITD?</h2>
            <p>Discover the benefits of being part of Germany's Indian Classical Dance community</p>
          </motion.div>

          <div className="why-join-grid">
            {[
              { icon: <Users size={28} />, title: "Connect with Artists", desc: "Network with dancers, teachers, and cultural ambassadors across Germany" },
              { icon: <Calendar size={28} />, title: "Participate in Events", desc: "Join performances, workshops, festivals, and community gatherings" },
              { icon: <BookOpen size={28} />, title: "Access Member Resources", desc: "Get exclusive access to training materials, recordings, and guides" },
              { icon: <Heart size={28} />, title: "Support Cultural Heritage", desc: "Help preserve and promote Indian classical dance in Germany" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="why-join-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="why-join-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         3. MEMBERSHIP TYPES
         ============================================ */}
      <section id="membership-types" className="membership-types">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Membership</span>
            <h2>Membership Types</h2>
            <p>Choose the membership that best fits your needs and goals</p>
          </motion.div>

          <div className="membership-types-grid">
            {membershipTypes.map((type, index) => (
              <motion.div 
                key={type.id}
                className="membership-type-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="type-icon" style={{ background: type.color }}>
                  {type.icon}
                </div>
                <h3>{type.title}</h3>
                <p className="type-description">{type.description}</p>
                <div className="type-price">{type.price}</div>
                <ul className="type-features">
                  {type.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#application-form" className="type-btn">
                  Choose Plan <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         4. ELIGIBILITY
         ============================================ */}
      <section className="eligibility-section">
        <div className="container">
          <motion.div 
            className="eligibility-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="eligibility-content">
              <span className="section-tag">Eligibility</span>
              <h2>Who Can Join?</h2>
              <p>KITD welcomes everyone who shares our passion for Indian Classical Dance</p>
              
              <div className="eligibility-grid">
                {eligibilityItems.map((item, index) => (
                  <div key={index} className="eligibility-item">
                    <div className="eligibility-icon">{item.icon}</div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
         5. MEMBERSHIP APPLICATION FORM
         ============================================ */}
      <section id="application-form" className="application-form">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Apply</span>
            <h2>Membership Application</h2>
            <p>Fill out the form below to begin your journey with KITD</p>
          </motion.div>

          {formSubmitted ? (
            <motion.div 
              className="form-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Check size={48} />
              <h3>Application Submitted!</h3>
              <p>Thank you for applying to KITD. Our team will review your application and get back to you within 3-5 business days.</p>
            </motion.div>
          ) : (
            <motion.form 
              className="membership-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
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
                  <label htmlFor="membershipType">Membership Type *</label>
                  <select
                    id="membershipType"
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleInputChange}
                    className={formErrors.membershipType ? 'error' : ''}
                  >
                    <option value="">Select Membership Type</option>
                    <option value="active">Active Member (€50/year)</option>
                    <option value="supporting">Supporting Member (€75/year)</option>
                    <option value="youth">Youth Member (€25/year)</option>
                  </select>
                  {formErrors.membershipType && <span className="error-message">{formErrors.membershipType}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="danceForm">Dance Form</label>
                  <select
                    id="danceForm"
                    name="danceForm"
                    value={formData.danceForm}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Dance Form</option>
                    <option value="Bharatanatyam">Bharatanatyam</option>
                    <option value="Kathak">Kathak</option>
                    <option value="Odissi">Odissi</option>
                    <option value="Kuchipudi">Kuchipudi</option>
                    <option value="Manipuri">Manipuri</option>
                    <option value="Mohiniyattam">Mohiniyattam</option>
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
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us why you'd like to join KITD..."
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Submit Application <ArrowRight size={18} />
                </button>
                <p className="form-note">* Required fields</p>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* ============================================
         6. MEMBERSHIP PROCESS
         ============================================ */}
      <section className="membership-process">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Process</span>
            <h2>Membership Process</h2>
            <p>Follow these simple steps to become a member of KITD</p>
          </motion.div>

          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={step.id} className="process-step">
                <div className="step-number">{step.id}</div>
                {index < processSteps.length - 1 && <div className="step-connector" />}
                
                <div 
                  className={`step-content ${expandedProcess === step.id ? 'expanded' : ''}`}
                  onClick={() => toggleProcessStep(step.id)}
                >
                  <div className="step-header">
                    <div>
                      <h3>{step.title}</h3>
                      <span className="step-duration">
                        <Clock size={14} />
                        {step.duration}
                      </span>
                    </div>
                    {expandedProcess === step.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         7. CTA SECTION
         ============================================ */}
      <section className="membership-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Have Questions?</h2>
            <p>
              Our membership team is here to help you with any questions about joining KITD.
            </p>
            <div className="cta-buttons">
              <a href="mailto:membership@kitd.de" className="primary-btn">
                <Mail size={18} />
                Contact Membership Team
              </a>
              <Link to="/contact" className="secondary-btn">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default MembershipPage;