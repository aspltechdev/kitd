// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Star,
//   Quote,
//   User,
//   Mail,
//   MessageSquare,
//   Send,
//   ChevronRight,
//   Heart,
//   Sparkles,
//   CheckCircle,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";
// import toast from "react-hot-toast";

// import { getAllTestimonials, createTestimonial } from "../../api/testimonial.api";

// import "./TestimonialPage.css";

// const TestimonialsPage = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [isVisible, setIsVisible] = useState({});

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     rating: 5,
//   });

//   const [errors, setErrors] = useState({});

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   // ✅ Fetch testimonials
//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         setLoading(true);
//         const res = await getAllTestimonials();
//         const data = res.data?.data || res.data || [];
//         setTestimonials(Array.isArray(data) ? data.filter(t => t.isActive !== false) : []);
//       } catch (err) {
//         console.error("Failed to fetch testimonials:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTestimonials();
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setIsVisible((prev) => ({ ...prev, [entry.target.dataset.section]: true }));
//         });
//       },
//       { threshold: 0.1 }
//     );
//     document.querySelectorAll("[data-section]").forEach((s) => observer.observe(s));
//     return () => observer.disconnect();
//   }, [loading]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
//   };

//   const handleRatingChange = (rating) => {
//     setFormData(prev => ({ ...prev, rating }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required";
//     if (!formData.message.trim()) newErrors.message = "Message is required";
//     else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setSubmitting(true);
//     try {
//       await createTestimonial({
//         name: formData.name.trim(),
//         email: formData.email.trim(),
//         message: formData.message.trim(),
//         rating: formData.rating,
//       });
//       setSubmitted(true);
//       setFormData({ name: "", email: "", message: "", rating: 5 });
//       toast.success("Thank you for your feedback! 🙏");
//       setTimeout(() => setSubmitted(false), 5000);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to submit. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const getInitials = (name) => {
//     if (!name) return "?";
//     return name.split(" ").map(w => w.charAt(0)).join("").toUpperCase().slice(0, 2);
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Testimonials | KITD - Classical Indian Dance Germany</title>
//         <meta name="description" content="Read what our community says about KITD. Share your experience with Indian Classical Dance in Germany." />
//       </Helmet>

//       <div className="testimonials-page">

//         {/* HERO */}
//         <section className="testimonials-hero">
//           <div className="testimonials-hero-bg">
//             <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Testimonials" />
//             <div className="testimonials-hero-overlay" />
//           </div>
//           <div className="container">
//             <div className="testimonials-hero-content">
//               <span className="testimonials-hero-tag"><Heart size={18} /> TESTIMONIALS</span>
//               <h1>What Our <span>Community Says</span></h1>
//               <p>Hear from artists, students, and supporters about their experiences with KITD.</p>
//             </div>
//           </div>
//         </section>

//         {/* BREADCRUMB */}
//         <div className="testimonials-breadcrumb">
//           <div className="container">
//             <Link to="/">Home</Link><ChevronRight size={14} /><span>Testimonials</span>
//           </div>
//         </div>

//         {/* TESTIMONIALS GRID */}
//         <section className="testimonials-grid-section" data-section="grid">
//           <div className="container">
//             {loading ? (
//               <div className="testimonials-loading">
//                 <div className="spinner" /><p>Loading testimonials...</p>
//               </div>
//             ) : testimonials.length === 0 ? (
//               <div className="testimonials-empty">
//                 <MessageSquare size={48} />
//                 <h3>No Testimonials Yet</h3>
//                 <p>Be the first to share your experience with KITD!</p>
//               </div>
//             ) : (
//               <div className={`testimonials-grid ${isVisible.grid ? "visible" : ""}`}>
//                 {testimonials.map((item, index) => (
//                   <div className="testimonial-card" key={item.id} style={{ transitionDelay: `${index * 0.08}s` }}>
//                     <div className="testimonial-card__header">
//                       <div className="testimonial-card__avatar">
//                         {item.image ? (
//                           <img src={`${IMAGE_BASE_URL}/uploads/testimonials/${item.image}`} alt={item.name} />
//                         ) : (
//                           <span>{getInitials(item.name)}</span>
//                         )}
//                       </div>
//                       <div>
//                         <h4>{item.name}</h4>
//                         {item.role && <span className="testimonial-role">{item.role}</span>}
//                       </div>
//                       <Quote size={24} className="testimonial-quote-icon" />
//                     </div>
//                     <div className="testimonial-card__stars">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <Star
//                           key={star}
//                           size={14}
//                           fill={star <= (item.rating || 5) ? "#f59e0b" : "none"}
//                           color={star <= (item.rating || 5) ? "#f59e0b" : "#d1d5db"}
//                         />
//                       ))}
//                     </div>
//                     <p className="testimonial-card__message">{item.message}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>

//         {/* SUBMIT FORM */}
//         <section className="testimonials-form-section" data-section="form">
//           <div className="container">
//             <div className={`testimonials-form-wrapper ${isVisible.form ? "visible" : ""}`}>
//               <div className="testimonials-form-header">
//                 <Sparkles size={20} />
//                 <h2>Share Your Experience</h2>
//                 <p>We'd love to hear your feedback about KITD. Your testimonial helps inspire others!</p>
//               </div>

//               {submitted ? (
//                 <div className="testimonials-success">
//                   <CheckCircle size={48} />
//                   <h3>Thank You! 🎉</h3>
//                   <p>Your testimonial has been submitted successfully. It will be reviewed and published soon.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="testimonials-form">
//                   <div className="form-row">
//                     <div className="form-group">
//                       <label><User size={14} /> Name *</label>
//                       <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" className={errors.name ? "error" : ""} />
//                       {errors.name && <span className="form-error">{errors.name}</span>}
//                     </div>
//                     <div className="form-group">
//                       <label><Mail size={14} /> Email *</label>
//                       <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" className={errors.email ? "error" : ""} />
//                       {errors.email && <span className="form-error">{errors.email}</span>}
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label>Rating</label>
//                     <div className="star-rating">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <button type="button" key={star} onClick={() => handleRatingChange(star)} className="star-btn">
//                           <Star size={28} fill={star <= formData.rating ? "#f59e0b" : "none"} color={star <= formData.rating ? "#f59e0b" : "#d1d5db"} />
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="form-group">
//                     <label><MessageSquare size={14} /> Your Message *</label>
//                     <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Share your experience with KITD..." rows={5} className={errors.message ? "error" : ""} />
//                     {errors.message && <span className="form-error">{errors.message}</span>}
//                   </div>

//                   <button type="submit" className="submit-btn" disabled={submitting}>
//                     {submitting ? (
//                       <><span className="spinner-small" /> Submitting...</>
//                     ) : (
//                       <><Send size={16} /> Submit Testimonial</>
//                     )}
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="testimonials-cta">
//           <div className="container">
//             <div className="testimonials-cta-content">
//               <h2>Join Our Growing Community</h2>
//               <p>Become a member and be part of Germany's Indian Classical Dance network.</p>
//               <Link to="/membership" className="cta-btn">
//                 Become a Member <ArrowRight size={18} />
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default TestimonialsPage;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   Heart,
//   Star,
//   User,
//   Mail,
//   MessageSquare,
//   Send,
//   ChevronRight,
//   Sparkles,
//   CheckCircle,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";
// import toast from "react-hot-toast";

// import { createTestimonial } from "../../api/testimonial.api";

// import "./TestimonialPage.css";

// const TestimonialsPage = () => {
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     rating: 5,
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
//   };

//   const handleRatingChange = (rating) => {
//     setFormData(prev => ({ ...prev, rating }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required";
//     if (!formData.message.trim()) newErrors.message = "Message is required";
//     else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setSubmitting(true);
//     try {
//       await createTestimonial({
//         name: formData.name.trim(),
//         email: formData.email.trim(),
//         message: formData.message.trim(),
//         rating: formData.rating,
//       });
//       setSubmitted(true);
//       setFormData({ name: "", email: "", message: "", rating: 5 });
//       toast.success("Thank you for your feedback! 🙏");
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to submit. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Share Your Feedback | KITD Germany</title>
//         <meta name="description" content="Share your experience with KITD - Classical Indian Dance Germany. We value your feedback!" />
//       </Helmet>

//       <div className="testimonial-page">

//         {/* HERO */}
//         <section className="testimonial-hero">
//           <div className="testimonial-hero-bg">
//             <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Feedback" />
//             <div className="testimonial-hero-overlay" />
//           </div>
//           <div className="container">
//             <div className="testimonial-hero-content">
//               <span className="testimonial-hero-tag"><Heart size={18} /> FEEDBACK</span>
//               <h1>Share Your <span>Experience</span></h1>
//               <p>We value your feedback! Let us know about your experience with KITD.</p>
//             </div>
//           </div>
//         </section>

//         {/* BREADCRUMB */}
//         <div className="testimonial-breadcrumb">
//           <div className="container">
//             <Link to="/">Home</Link><ChevronRight size={14} /><span>Feedback</span>
//           </div>
//         </div>

//         {/* FORM SECTION */}
//         <section className="testimonial-form-section">
//           <div className="container">
//             <div className="testimonial-form-wrapper">
              
//               {submitted ? (
//                 <div className="testimonial-success">
//                   <CheckCircle size={56} />
//                   <h2>Thank You! 🎉</h2>
//                   <p>Your feedback has been submitted successfully. We truly appreciate you taking the time to share your experience with KITD.</p>
//                   <button onClick={() => setSubmitted(false)} className="submit-another-btn">
//                     Submit Another Feedback
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <div className="testimonial-form-header">
//                     <Sparkles size={24} />
//                     <h2>We'd Love to Hear From You</h2>
//                     <p>Your feedback helps us improve and inspire others in the Indian Classical Dance community.</p>
//                   </div>

//                   <form onSubmit={handleSubmit} className="testimonial-form">
//                     <div className="form-row">
//                       <div className="form-group">
//                         <label><User size={14} /> Full Name *</label>
//                         <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" className={errors.name ? "error" : ""} />
//                         {errors.name && <span className="form-error">{errors.name}</span>}
//                       </div>
//                       <div className="form-group">
//                         <label><Mail size={14} /> Email Address *</label>
//                         <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" className={errors.email ? "error" : ""} />
//                         {errors.email && <span className="form-error">{errors.email}</span>}
//                       </div>
//                     </div>

//                     <div className="form-group">
//                       <label>Your Rating</label>
//                       <div className="star-rating">
//                         {[1, 2, 3, 4, 5].map((star) => (
//                           <button type="button" key={star} onClick={() => handleRatingChange(star)} className="star-btn">
//                             <Star size={32} fill={star <= formData.rating ? "#f59e0b" : "none"} color={star <= formData.rating ? "#f59e0b" : "#d1d5db"} />
//                           </button>
//                         ))}
//                         <span className="rating-text">
//                           {formData.rating === 5 ? "Excellent!" : formData.rating === 4 ? "Very Good!" : formData.rating === 3 ? "Good" : formData.rating === 2 ? "Fair" : "Needs Improvement"}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="form-group">
//                       <label><MessageSquare size={14} /> Your Feedback *</label>
//                       <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Share your experience, thoughts, or suggestions about KITD..." rows={6} className={errors.message ? "error" : ""} />
//                       <span className="char-count">{formData.message.length} characters (min 10)</span>
//                       {errors.message && <span className="form-error">{errors.message}</span>}
//                     </div>

//                     <button type="submit" className="submit-btn" disabled={submitting}>
//                       {submitting ? (
//                         <><span className="spinner-small" /> Submitting...</>
//                       ) : (
//                         <><Send size={18} /> Submit Feedback</>
//                       )}
//                     </button>

//                     <p className="form-note">
//                       <Heart size={12} /> Your feedback will be reviewed and may be featured on our website.
//                     </p>
//                   </form>
//                 </>
//               )}
//             </div>
//           </div>
//         </section>

//       </div>
//     </>
//   );
// };

// export default TestimonialsPage;















import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Star,
  User,
  Mail,
  MessageSquare,
  Send,
  ChevronRight,
  Sparkles,
  CheckCircle,
  Camera,
  Upload,
  X,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

import { createTestimonial } from "../../api/testimonial.api";

import "./TestimonialPage.css";

const TestimonialsPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image must be less than 5MB");
        return;
      }
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitting(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name.trim());
      formDataToSend.append("email", formData.email.trim());
      formDataToSend.append("message", formData.message.trim());
      formDataToSend.append("rating", formData.rating);
      
      if (image) {
        formDataToSend.append("image", image);
      }

      await createTestimonial(formDataToSend);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "", rating: 5 });
      setImage(null);
      setImagePreview(null);
      toast.success("Thank you for your feedback! 🙏");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Share Your Feedback | KITD Germany</title>
        <meta name="description" content="Share your experience with KITD - Classical Indian Dance Germany. We value your feedback!" />
      </Helmet>

      <div className="testimonial-page">

        {/* HERO */}
        <section className="testimonial-hero">
          <div className="testimonial-hero-bg">
            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Feedback" />
            <div className="testimonial-hero-overlay" />
          </div>
          <div className="container">
            <div className="testimonial-hero-content">
              <span className="testimonial-hero-tag"><Heart size={18} /> FEEDBACK</span>
              <h1>Share Your <span>Experience</span></h1>
              <p>We value your feedback! Let us know about your experience with KITD.</p>
            </div>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="testimonial-breadcrumb">
          <div className="container">
            <Link to="/">Home</Link><ChevronRight size={14} /><span>Feedback</span>
          </div>
        </div>

        {/* FORM SECTION */}
        <section className="testimonial-form-section">
          <div className="container">
            <div className="testimonial-form-wrapper">
              
              {submitted ? (
                <div className="testimonial-success">
                  <CheckCircle size={56} />
                  <h2>Thank You! 🎉</h2>
                  <p>Your feedback has been submitted successfully.</p>
                  <button onClick={() => setSubmitted(false)} className="submit-another-btn">
                    Submit Another Feedback
                  </button>
                </div>
              ) : (
                <>
                  <div className="testimonial-form-header">
                    <Sparkles size={24} />
                    <h2>We'd Love to Hear From You</h2>
                    <p>Your feedback helps us improve and inspire others.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="testimonial-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label><User size={14} /> Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" className={errors.name ? "error" : ""} />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                      </div>
                      <div className="form-group">
                        <label><Mail size={14} /> Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" className={errors.email ? "error" : ""} />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Your Rating</label>
                      <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button type="button" key={star} onClick={() => handleRatingChange(star)} className="star-btn">
                            <Star size={32} fill={star <= formData.rating ? "#f59e0b" : "none"} color={star <= formData.rating ? "#f59e0b" : "#d1d5db"} />
                          </button>
                        ))}
                        <span className="rating-text">
                          {formData.rating === 5 ? "Excellent!" : formData.rating === 4 ? "Very Good!" : formData.rating === 3 ? "Good" : formData.rating === 2 ? "Fair" : "Needs Improvement"}
                        </span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label><MessageSquare size={14} /> Your Feedback *</label>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Share your experience..." rows={5} className={errors.message ? "error" : ""} />
                      <span className="char-count">{formData.message.length} characters (min 10)</span>
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>

                    {/* ✅ Image Upload */}
                    <div className="form-group">
                      <label><Camera size={14} /> Your Photo (Optional)</label>
                      {imagePreview ? (
                        <div className="image-preview">
                          <img src={imagePreview} alt="Preview" />
                          <button type="button" onClick={removeImage} className="remove-image-btn">
                            <X size={16} /> Remove
                          </button>
                        </div>
                      ) : (
                        <div className="image-upload-area">
                          <input type="file" accept="image/*" onChange={handleImageChange} id="image-upload" className="image-input" />
                          <label htmlFor="image-upload" className="image-upload-label">
                            <Upload size={24} />
                            <span>Upload Photo</span>
                            <small>JPG, PNG (max 5MB)</small>
                          </label>
                        </div>
                      )}
                    </div>

                    <button type="submit" className="submit-btn" disabled={submitting}>
                      {submitting ? (
                        <><span className="spinner-small" /> Submitting...</>
                      ) : (
                        <><Send size={18} /> Submit Feedback</>
                      )}
                    </button>

                    <p className="form-note">
                      <Heart size={12} /> Your feedback will be reviewed and may be featured on our website.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default TestimonialsPage;  