// // src/components/home/NewsletterSection/NewsletterSection.jsx

// import { useState } from "react";
// import toast from "react-hot-toast";

// import { getAllSubscribers } from "../../../api/newsletter.api";

// import "./NewsletterSection.css";

// const NewsletterSection = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubscribe = async (e) => {
//     e.preventDefault();

//     if (!email.trim()) {
//       return toast.error("Please enter your email address.");
//     }

//     try {
//       setLoading(true);

//       await subscribeNewsletter({ email });

//       toast.success("Subscribed successfully!");

//       setEmail("");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Subscription failed."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="newsletter-section">

//       <div className="container">

//         <div className="newsletter-wrapper">

//           {/* Left */}

//           <div className="newsletter-content">

//             <span className="section-tag">
//               NEWSLETTER
//             </span>

//             <h2>
//               Stay Connected with
//               <br />
//               KITD Community
//             </h2>

//             <p>
//               Receive updates about upcoming performances,
//               workshops, cultural events, artist highlights,
//               and community activities directly in your inbox.
//             </p>

//           </div>

//           {/* Right */}

//           <form
//             className="newsletter-form"
//             onSubmit={handleSubscribe}
//           >

//             <input
//               type="email"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) =>
//                 setEmail(e.target.value)
//               }
//             />

//             <button
//               type="submit"
//               disabled={loading}
//             >
//               {loading
//                 ? "Subscribing..."
//                 : "Subscribe"}
//             </button>

//           </form>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default NewsletterSection;


// src/components/home/NewsletterSection/NewsletterSection.jsx

import { useState, useEffect } from "react";
import { Send, Mail, CheckCircle, Shield } from "lucide-react";
import toast from "react-hot-toast";

import {getAllSubscribers } from "../../../api/newsletter.api";

import "./NewsletterSection.css";

const newsletterHighlights = [
  {
    icon: <Mail size={15} strokeWidth={1.5} />,
    text: "Event Announcements",
  },
  {
    icon: <CheckCircle size={15} strokeWidth={1.5} />,
    text: "Community Updates",
  },
  {
    icon: <Send size={15} strokeWidth={1.5} />,
    text: "Quarterly Newsletter",
  },
];

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.newsletter-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return toast.error("Please enter your email address.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return toast.error("Please enter a valid email address.");
    }

    try {
      setLoading(true);
      await subscribeNewsletter({ email: email.trim() });
      toast.success("Thank you for subscribing! Welcome to the KITD Newsletter.");
      setEmail("");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Unable to subscribe. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`newsletter-section ${isVisible ? 'visible' : ''}`}>
      {/* Background Pattern */}
      <div className="newsletter-bg-pattern" />
      
      <div className="newsletter-container">
        <div className="newsletter-wrapper">
          
          {/* Left - Content */}
          <div className="newsletter-content">
            <div className="newsletter-eyebrow">
              <span className="newsletter-eyebrow-line" />
              <span className="newsletter-eyebrow-text">KITD Newsletter</span>
            </div>

            <h2 className="newsletter-title">
              Stay Connected with
              <br />
              <span className="newsletter-title-accent">the KITD Community</span>
            </h2>

            <p className="newsletter-description">
              Receive the latest updates on performances, workshops, cultural 
              events, community initiatives, membership opportunities, and 
              association news delivered directly to your inbox.
            </p>

            {/* Newsletter Highlights */}
            <div className="newsletter-highlights">
              {newsletterHighlights.map((item, index) => (
                <div 
                  className="newsletter-highlight-item" 
                  key={index}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <span className="highlight-icon">{item.icon}</span>
                  <span className="highlight-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="newsletter-form-wrapper">
            <div className="newsletter-form-card">
              {/* Form Icon */}
              <div className="newsletter-form-icon">
                <Send size={22} strokeWidth={1.5} />
              </div>

              <h3 className="newsletter-form-title">
                Join Our Mailing List
              </h3>

              <form
                className="newsletter-form"
                onSubmit={handleSubscribe}
              >
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    disabled={loading}
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="newsletter-submit-btn"
                  >
                    {loading ? (
                      <span className="newsletter-loading-text">Subscribing...</span>
                    ) : (
                      <>
                        <span>Subscribe Now</span>
                        <Send size={14} strokeWidth={1.5} />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Privacy Note */}
              <div className="newsletter-privacy">
                <Shield size={12} strokeWidth={1.5} />
                <span>We respect your privacy. No spam. Unsubscribe anytime.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;