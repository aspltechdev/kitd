// // // src/components/layout/Footer/Footer.jsx

// // // import { Link } from "react-router-dom";
// // // import {
// // //   FaFacebookF,
// // //   FaInstagram,
// // //   FaYoutube,
// // //   FaLinkedinIn,
// // //   FaMapPin,
// // //   FaPhone,
// // //   FaEnvelope,
// // //   FaArrowRight,
// // // } from "react-icons/fa";
// // // import "./Footer.css";
// // // import logo from "../../assets/logo.png";

// // // const Footer = () => {
// // //   const currentYear = new Date().getFullYear();

// // //   return (
// // //     <footer className="footer">
// // //       {/* Top Wave/Divider */}
// // //       <div className="footer-divider-top">
// // //         <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
// // //           <path 
// // //             d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" 
// // //             fill="currentColor"
// // //           />
// // //         </svg>
// // //       </div>

// // //       <div className="footer-container">
// // //         {/* Main Footer Content */}
// // //         <div className="footer-grid">
          
// // //           {/* About Column */}
// // //           <div className="footer-col footer-col-about">
// // //             <Link to="/" className="footer-logo-link">
// // //               <img
// // //                 src={logo}
// // //                 alt="KITD - Klassischer Indischer Tanz Deutschland"
// // //                 className="footer-logo"
// // //               />
// // //               <div className="footer-logo-text">
// // //                 <span className="footer-logo-primary">KITD</span>
// // //                 <span className="footer-logo-secondary">Classical Indian Dance Germany</span>
// // //               </div>
// // //             </Link>
            
// // //             <p className="footer-description">
// // //               Dedicated to preserving, promoting and celebrating Indian Classical Dance 
// // //               across Germany through performances, education and community engagement.
// // //             </p>
            
// // //             <div className="footer-social">
// // //               <a 
// // //                 href="#" 
// // //                 target="_blank" 
// // //                 rel="noopener noreferrer"
// // //                 aria-label="Facebook"
// // //                 className="social-link"
// // //               >
// // //                 <FaFacebookF size={15} />
// // //               </a>
// // //               <a 
// // //                 href="#" 
// // //                 target="_blank" 
// // //                 rel="noopener noreferrer"
// // //                 aria-label="Instagram"
// // //                 className="social-link"
// // //               >
// // //                 <FaInstagram size={15} />
// // //               </a>
// // //               <a 
// // //                 href="#" 
// // //                 target="_blank" 
// // //                 rel="noopener noreferrer"
// // //                 aria-label="YouTube"
// // //                 className="social-link"
// // //               >
// // //                 <FaYoutube size={15} />
// // //               </a>
// // //               <a 
// // //                 href="#" 
// // //                 target="_blank" 
// // //                 rel="noopener noreferrer"
// // //                 aria-label="LinkedIn"
// // //                 className="social-link"
// // //               >
// // //                 <FaLinkedinIn size={15} />
// // //               </a>
// // //             </div>
// // //           </div>

// // //           {/* Quick Links Column */}
// // //           <div className="footer-col">
// // //             <h3 className="footer-heading">Quick Links</h3>
// // //             <ul className="footer-links">
// // //               <li><Link to="/">Home</Link></li>
// // //               <li><Link to="/about">About Us</Link></li>
// // //               <li><Link to="/activities">Activities</Link></li>
// // //               <li><Link to="/events">Events</Link></li>
// // //               <li><Link to="/artists">Artists</Link></li>
// // //               <li><Link to="/gallery">Gallery</Link></li>
// // //               <li><Link to="/news">News</Link></li>
// // //             </ul>
// // //           </div>

// // //           {/* Membership Column */}
// // //           <div className="footer-col">
// // //             <h3 className="footer-heading">Get Involved</h3>
// // //             <ul className="footer-links">
// // //               <li><Link to="/membership">Become a Member</Link></li>
// // //               <li><Link to="/membership/benefits">Membership Benefits</Link></li>
// // //               <li><Link to="/volunteer">Volunteer With Us</Link></li>
// // //               <li><Link to="/contact">Contact Us</Link></li>
// // //               <li><Link to="/faq">FAQs</Link></li>
// // //             </ul>
// // //           </div>

// // //           {/* Contact Column */}
// // //           <div className="footer-col">
// // //             <h3 className="footer-heading">Contact Us</h3>
// // //             <ul className="footer-contact-list">
// // //               <li className="footer-contact-item">
// // //                 <span className="contact-icon">
// // //                   <FaMapPin size={15} />
// // //                 </span>
// // //                 <span className="contact-text">Germany</span>
// // //               </li>
// // //               <li className="footer-contact-item">
// // //                 <span className="contact-icon">
// // //                   <FaPhone size={15} />
// // //                 </span>
// // //                 <a href="tel:+49XXXXXXXXXX" className="contact-link">+49 XXX XXX XXXX</a>
// // //               </li>
// // //               <li className="footer-contact-item">
// // //                 <span className="contact-icon">
// // //                   <FaEnvelope size={15} />
// // //                 </span>
// // //                 <a href="mailto:info@kitd.de" className="contact-link">info@kitd.de</a>
// // //               </li>
// // //             </ul>

// // //             {/* Newsletter Signup */}
// // //             <div className="footer-newsletter">
// // //               <h4 className="newsletter-title">Stay Updated</h4>
// // //               <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
// // //                 <input 
// // //                   type="email" 
// // //                   placeholder="Your email address" 
// // //                   className="newsletter-input"
// // //                   required
// // //                 />
// // //                 <button type="submit" className="newsletter-btn" aria-label="Subscribe">
// // //                   <FaArrowRight size={14} />
// // //                 </button>
// // //               </form>
// // //             </div>
// // //           </div>

// // //         </div>

// // //         {/* Bottom Bar */}
// // //         <div className="footer-bottom">
// // //           <div className="footer-bottom-inner">
// // //             <p className="footer-copyright">
// // //               &copy; {currentYear} KITD &mdash; Klassischer Indischer Tanz Deutschland e.V. All rights reserved.
// // //             </p>
// // //             <div className="footer-bottom-links">
// // //               <Link to="/privacy-policy">Privacy Policy</Link>
// // //               <span className="footer-dot">·</span>
// // //               <Link to="/terms-and-conditions">Terms & Conditions</Link>
// // //               <span className="footer-dot">·</span>
// // //               <Link to="/imprint">Imprint</Link>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // };

// // // export default Footer;

// // // src/components/layout/Footer/Footer.jsx

// // import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   FaFacebookF,
// //   FaInstagram,
// //   FaYoutube,
// //   FaLinkedinIn,
// //   FaMapPin,
// //   FaPhone,
// //   FaEnvelope,
// //   FaArrowRight,
// //   FaHeart,
// // } from "react-icons/fa";
// // import "./Footer.css";
// // import logo from "../../assets/logo.png";

// // const Footer = () => {
// //   const currentYear = new Date().getFullYear();
// //   const [email, setEmail] = useState("");

// //   const handleNewsletterSubmit = (e) => {
// //     e.preventDefault();
// //     // Add newsletter subscription logic here
// //     console.log("Newsletter signup:", email);
// //     setEmail("");
// //   };

// //   return (
// //     <footer className="footer">
// //       {/* Main Footer */}
// //       <div className="footer-container">
// //         <div className="footer-grid">
          
// //           {/* About Column */}
// //           <div className="footer-col footer-col-about">
// //             <Link to="/" className="footer-logo-link">
// //               <img
// //                 src={logo}
// //                 alt="KITD - Klassischer Indischer Tanz Deutschland"
// //                 className="footer-logo"
// //               />
// //               <div className="footer-logo-text">
// //                 <span className="footer-logo-primary">KITD</span>
// //                 <span className="footer-logo-secondary">Classical Indian Dance Germany e.V.</span>
// //               </div>
// //             </Link>
            
// //             <p className="footer-description">
// //               A registered association dedicated to mediating, promoting, and fostering 
// //               Indian Classical Dance and its associated knowledge across Germany.
// //             </p>
            
// //             {/* Social Links */}
// //             <div className="footer-social">
// //               <a 
// //                 href="#" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer"
// //                 aria-label="Facebook"
// //                 className="social-link"
// //               >
// //                 <FaFacebookF size={14} />
// //               </a>
// //               <a 
// //                 href="#" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer"
// //                 aria-label="Instagram"
// //                 className="social-link"
// //               >
// //                 <FaInstagram size={14} />
// //               </a>
// //               <a 
// //                 href="#" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer"
// //                 aria-label="YouTube"
// //                 className="social-link"
// //               >
// //                 <FaYoutube size={14} />
// //               </a>
// //               <a 
// //                 href="#" 
// //                 target="_blank" 
// //                 rel="noopener noreferrer"
// //                 aria-label="LinkedIn"
// //                 className="social-link"
// //               >
// //                 <FaLinkedinIn size={14} />
// //               </a>
// //             </div>
// //           </div>

// //           {/* Quick Links Column */}
// //           <div className="footer-col">
// //             <h3 className="footer-heading">Quick Links</h3>
// //             <ul className="footer-links">
// //               <li><Link to="/">Home</Link></li>
// //               <li><Link to="/about">About Us</Link></li>
// //               <li><Link to="/activities">Activities</Link></li>
// //               <li><Link to="/events">Events</Link></li>
// //               <li><Link to="/artists">Artists</Link></li>
// //               <li><Link to="/gallery">Gallery</Link></li>
// //               <li><Link to="/news">News & Updates</Link></li>
// //             </ul>
// //           </div>

// //           {/* Get Involved Column */}
// //           <div className="footer-col">
// //             <h3 className="footer-heading">Get Involved</h3>
// //             <ul className="footer-links">
// //               <li><Link to="/membership">Become a Member</Link></li>
// //               <li><Link to="/membership/benefits">Membership Benefits</Link></li>
// //               <li><Link to="/volunteer">Volunteer With Us</Link></li>
// //               <li><Link to="/partners">Our Partners</Link></li>
// //               <li><Link to="/contact">Contact Us</Link></li>
// //               <li><Link to="/faq">FAQs</Link></li>
// //             </ul>
// //           </div>

// //           {/* Contact & Newsletter Column */}
// //           <div className="footer-col">
// //             <h3 className="footer-heading">Contact Us</h3>
            
// //             {/* Contact Info */}
// //             <ul className="footer-contact-list">
// //               <li className="footer-contact-item">
// //                 <span className="contact-icon">
// //                   <FaMapPin size={13} />
// //                 </span>
// //                 <span className="contact-text">Germany</span>
// //               </li>
// //               <li className="footer-contact-item">
// //                 <span className="contact-icon">
// //                   <FaPhone size={13} />
// //                 </span>
// //                 <a href="tel:+49XXXXXXXXXX" className="contact-link">+49 XXX XXX XXXX</a>
// //               </li>
// //               <li className="footer-contact-item">
// //                 <span className="contact-icon">
// //                   <FaEnvelope size={13} />
// //                 </span>
// //                 <a href="mailto:info@kitd.de" className="contact-link">info@kitd.de</a>
// //               </li>
// //             </ul>

// //             {/* Newsletter */}
// //             <div className="footer-newsletter">
// //               <h4 className="newsletter-title">Stay Updated</h4>
// //               <p className="newsletter-desc">Subscribe to the KITD newsletter</p>
// //               <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
// //                 <input 
// //                   type="email" 
// //                   placeholder="Your email address" 
// //                   className="newsletter-input"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   required
// //                 />
// //                 <button type="submit" className="newsletter-btn" aria-label="Subscribe">
// //                   <FaArrowRight size={12} />
// //                 </button>
// //               </form>
// //             </div>
// //           </div>

// //         </div>

// //         {/* Bottom Bar */}
// //         <div className="footer-bottom">
// //           <div className="footer-bottom-inner">
// //             <p className="footer-copyright">
// //               &copy; {currentYear} KITD &mdash; Klassischer Indischer Tanz Deutschland e.V.
// //               <span className="footer-copyright-separator">|</span>
// //               All rights reserved.
// //             </p>
// //             <div className="footer-bottom-links">
// //               <Link to="/privacy-policy">Privacy Policy</Link>
// //               <span className="footer-dot">·</span>
// //               <Link to="/terms-and-conditions">Terms & Conditions</Link>
// //               <span className="footer-dot">·</span>
// //               <Link to="/imprint">Imprint</Link>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Made with love */}
// //         <div className="footer-credit">
// //           <span>Made with</span>
// //           <FaHeart size={10} className="footer-heart" />
// //           <span>by the KITD Community</span>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;

// // src/components/layout/Footer/Footer.jsx

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaLinkedinIn,
//   FaMapPin,
//   FaPhone,
//   FaEnvelope,
//   FaArrowRight,
//   FaHeart,
//   FaTwitter,
// } from "react-icons/fa";
// import "./Footer.css";
// import logo from "../../assets/logo.png";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const [email, setEmail] = useState("");
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const footer = document.querySelector('.kitd-footer');
//     if (footer) observer.observe(footer);

//     return () => {
//       if (footer) observer.unobserve(footer);
//     };
//   }, []);

//   const handleNewsletterSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//       console.log("Newsletter signup:", email);
//       setEmail("");
//       // Add toast notification here if needed
//     }
//   };

//   const quickLinks = [
//     { label: "Home", path: "/" },
//     { label: "About Us", path: "/about" },
//     { label: "Activities", path: "/activities" },
//     { label: "Events", path: "/events" },
//     { label: "Artists", path: "/artists" },
//     { label: "Gallery", path: "/gallery" },
//     { label: "News & Updates", path: "/news" },
//   ];

//   const getInvolvedLinks = [
//     { label: "Become a Member", path: "/membership" },
//     { label: "Membership Benefits", path: "/membership/benefits" },
//     { label: "Volunteer With Us", path: "/volunteer" },
//     { label: "Our Partners", path: "/partners" },
//     { label: "Contact Us", path: "/contact" },
//     { label: "FAQs", path: "/faq" },
//   ];

//   const socialLinks = [
//     { icon: <FaFacebookF size={14} />, label: "Facebook", url: "#" },
//     { icon: <FaInstagram size={14} />, label: "Instagram", url: "#" },
//     { icon: <FaYoutube size={14} />, label: "YouTube", url: "#" },
//     { icon: <FaLinkedinIn size={14} />, label: "LinkedIn", url: "#" },
//   ];

//   return (
//     <footer className={`kitd-footer ${isVisible ? 'kitd-footer--visible' : ''}`}>
//       {/* Top Decorative Wave */}
//       <div className="kitd-footer__wave">
//         <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
//           <path 
//             d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" 
//             fill="currentColor"
//           />
//         </svg>
//       </div>

//       <div className="kitd-footer__container">
//         {/* Main Footer Grid */}
//         <div className="kitd-footer__grid">
          
//           {/* About Column */}
//           <div className="kitd-footer__col kitd-footer__col--about">
//             <Link to="/" className="kitd-footer__logo-link">
//               <img
//                 src={logo}
//                 alt="KITD - Klassischer Indischer Tanz Deutschland"
//                 className="kitd-footer__logo"
//               />
//               <div className="kitd-footer__logo-text">
//                 <span className="kitd-footer__logo-primary">KITD</span>
//                 <span className="kitd-footer__logo-secondary">Classical Indian Dance Germany e.V.</span>
//               </div>
//             </Link>
            
//             <p className="kitd-footer__description">
//               A registered association dedicated to mediating, promoting, and fostering 
//               Indian Classical Dance and its associated knowledge across Germany.
//             </p>
            
//             {/* Social Links */}
//             <div className="kitd-footer__social">
//               {socialLinks.map((social, index) => (
//                 <a 
//                   key={index}
//                   href={social.url} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className="kitd-footer__social-link"
//                   style={{ transitionDelay: `${index * 0.05}s` }}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links Column */}
//           <div className="kitd-footer__col">
//             <h3 className="kitd-footer__heading">Quick Links</h3>
//             <ul className="kitd-footer__links">
//               {quickLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link to={link.path}>{link.label}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Get Involved Column */}
//           <div className="kitd-footer__col">
//             <h3 className="kitd-footer__heading">Get Involved</h3>
//             <ul className="kitd-footer__links">
//               {getInvolvedLinks.map((link, index) => (
//                 <li key={index}>
//                   <Link to={link.path}>{link.label}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact & Newsletter Column */}
//           <div className="kitd-footer__col kitd-footer__col--contact">
//             <h3 className="kitd-footer__heading">Contact Us</h3>
            
//             {/* Contact Info */}
//             <ul className="kitd-footer__contact">
//               <li className="kitd-footer__contact-item">
//                 <span className="kitd-footer__contact-icon">
//                   <FaMapPin size={13} />
//                 </span>
//                 <span className="kitd-footer__contact-text">Germany</span>
//               </li>
//               <li className="kitd-footer__contact-item">
//                 <span className="kitd-footer__contact-icon">
//                   <FaPhone size={13} />
//                 </span>
//                 <a href="tel:+49XXXXXXXXXX" className="kitd-footer__contact-link">+49 XXX XXX XXXX</a>
//               </li>
//               <li className="kitd-footer__contact-item">
//                 <span className="kitd-footer__contact-icon">
//                   <FaEnvelope size={13} />
//                 </span>
//                 <a href="mailto:info@kitd.de" className="kitd-footer__contact-link">info@kitd.de</a>
//               </li>
//             </ul>

//             {/* Newsletter */}
//             <div className="kitd-footer__newsletter">
//               <h4 className="kitd-footer__newsletter-title">Stay Updated</h4>
//               <p className="kitd-footer__newsletter-desc">Subscribe to the KITD newsletter</p>
//               <form className="kitd-footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
//                 <input 
//                   type="email" 
//                   placeholder="Your email address" 
//                   className="kitd-footer__newsletter-input"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 <button type="submit" className="kitd-footer__newsletter-btn" aria-label="Subscribe">
//                   <FaArrowRight size={12} />
//                 </button>
//               </form>
//             </div>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="kitd-footer__bottom">
//           <div className="kitd-footer__bottom-inner">
//             <p className="kitd-footer__copyright">
//               &copy; {currentYear} KITD — Klassischer Indischer Tanz Deutschland e.V.
//               <span className="kitd-footer__copyright-sep">|</span>
//               All rights reserved.
//             </p>
//             <div className="kitd-footer__bottom-links">
//               <Link to="/privacy-policy">Privacy Policy</Link>
//               <span className="kitd-footer__dot">·</span>
//               <Link to="/terms-and-conditions">Terms & Conditions</Link>
//               <span className="kitd-footer__dot">·</span>
//               <Link to="/imprint">Imprint</Link>
//             </div>
//           </div>
//         </div>

//         {/* Made with love */}
//         <div className="kitd-footer__credit">
//           <span>Made with</span>
//           <FaHeart size={10} className="kitd-footer__heart" />
//           <span>by the KITD Community</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer; 

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapPin,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('.kitd-footer');
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter signup:", email);
      setEmail("");
    }
  };

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Activities", path: "/activities" },
    { label: "Events", path: "/events" },
    { label: "Artists", path: "/artists" },
    { label: "Gallery", path: "/gallery" },
    { label: "News & Updates", path: "/news" },
  ];

  const getInvolvedLinks = [
    { label: "Become a Member", path: "/membership" },
    { label: "Membership Benefits", path: "/membership/benefits" },
    { label: "Volunteer With Us", path: "/volunteer" },
    { label: "Our Partners", path: "/partners" },
    { label: "Contact Us", path: "/contact" },
    { label: "FAQs", path: "/faq" },
  ];

  const socialLinks = [
     {
    icon: <FaFacebookF size={14} />,
    label: "Facebook",
    url: "https://www.instagram.com/kitdverein?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    icon: <FaInstagram size={14} />,
    label: "Instagram",
    url: "https://www.instagram.com/your-page",
  },
    { icon: <FaYoutube size={14} />, label: "YouTube", url: "#" },
    { icon: <FaLinkedinIn size={14} />, label: "LinkedIn", url: "#" },
  ];

  return (
    <footer className={`kitd-footer ${isVisible ? 'kitd-footer--visible' : ''}`}>
      {/* Top Decorative Wave */}
      <div className="kitd-footer__wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path 
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="kitd-footer__container">
        {/* Main Footer Grid */}
        <div className="kitd-footer__grid">
          
          {/* About Column */}
          <div className="kitd-footer__col kitd-footer__col--about">
            <Link to="/" className="kitd-footer__logo-link">
              <img
                src={logo}
                alt="KITD - Klassischer Indischer Tanz Deutschland"
                className="kitd-footer__logo"
              />
              <div className="kitd-footer__logo-text">
                <span className="kitd-footer__logo-primary">KITD</span>
                <span className="kitd-footer__logo-secondary">Classical Indian Dance Germany e.V.</span>
              </div>
            </Link>
            
            <p className="kitd-footer__description">
              A registered association dedicated to mediating, promoting, and fostering 
              Indian Classical Dance and its associated knowledge across Germany.
            </p>
            
            {/* Social Links */}
            <div className="kitd-footer__social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="kitd-footer__social-link"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="kitd-footer__col">
            <h3 className="kitd-footer__heading">Quick Links</h3>
            <ul className="kitd-footer__links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Column */}
          <div className="kitd-footer__col">
            <h3 className="kitd-footer__heading">Get Involved</h3>
            <ul className="kitd-footer__links">
              {getInvolvedLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div className="kitd-footer__col kitd-footer__col--contact">
            <h3 className="kitd-footer__heading">Contact Us</h3>
            
            {/* Contact Info */}
            <ul className="kitd-footer__contact">
              <li className="kitd-footer__contact-item">
                <span className="kitd-footer__contact-icon">
                  <FaMapPin size={13} />
                </span>
                <span className="kitd-footer__contact-text">Germany</span>
              </li>
              <li className="kitd-footer__contact-item">
                <span className="kitd-footer__contact-icon">
                  <FaPhone size={13} />
                </span>
                <a href="tel:+49XXXXXXXXXX" className="kitd-footer__contact-link">+49 XXX XXX XXXX</a>
              </li>
              <li className="kitd-footer__contact-item">
                <span className="kitd-footer__contact-icon">
                  <FaEnvelope size={13} />
                </span>
                <a href="mailto:info@kitd.de" className="kitd-footer__contact-link">info@kitd.de</a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="kitd-footer__newsletter">
              <h4 className="kitd-footer__newsletter-title">Stay Updated</h4>
              <p className="kitd-footer__newsletter-desc">Subscribe to the KITD newsletter</p>
              <form className="kitd-footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="kitd-footer__newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="kitd-footer__newsletter-btn" aria-label="Subscribe">
                  <FaArrowRight size={12} />
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="kitd-footer__bottom">
          <div className="kitd-footer__bottom-inner">
            <p className="kitd-footer__copyright">
              &copy; {currentYear} KITD — Klassischer Indischer Tanz Deutschland e.V.
              <span className="kitd-footer__copyright-sep">|</span>
              All rights reserved.
            </p>
            <div className="kitd-footer__bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span className="kitd-footer__dot">·</span>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
              <span className="kitd-footer__dot">·</span>
              <Link to="/imprint">Imprint</Link>
            </div>
          </div>
        </div>

        {/* Made with love */}
        <div className="kitd-footer__credit">
          <span>Made with</span>
          <FaHeart size={10} className="kitd-footer__heart" />
          <span>by the KITD Community</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;