// // import { useState, useEffect, useCallback } from "react";
// // import { Link, NavLink, useLocation } from "react-router-dom";
// // import {
// //   Menu,
// //   X,
// //   ChevronDown,
// //   ArrowRight,
// //   Star,
// // } from "lucide-react";

// // import "./Header.css";
// // import logo from "../../assets/logo.png";

// // const Header = () => {
// //   const [sticky, setSticky] = useState(false);
// //   const [mobileMenu, setMobileMenu] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);
// //   const [openDropdowns, setOpenDropdowns] = useState({
// //     about: false,
// //     gallery: false,
// //     membership: false,
// //   });
// //   const location = useLocation();

// //   // Enhanced scroll handler with throttle
// //   useEffect(() => {
// //     let ticking = false;
    
// //     const handleScroll = () => {
// //       if (!ticking) {
// //         window.requestAnimationFrame(() => {
// //           const scrollY = window.scrollY;
// //           setSticky(scrollY > 80);
// //           setScrolled(scrollY > 20);
// //           ticking = false;
// //         });
// //         ticking = true;
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll, { passive: true });
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // Close mobile menu on route change
// //   useEffect(() => {
// //     closeMobileMenu();
// //   }, [location.pathname]);

// //   // Close mobile menu when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (mobileMenu && !e.target.closest('.nav-container') && !e.target.closest('.mobile-btn')) {
// //         closeMobileMenu();
// //       }
// //     };

// //     document.addEventListener('click', handleClickOutside);
// //     return () => document.removeEventListener('click', handleClickOutside);
// //   }, [mobileMenu]);

// //   // Close mobile menu on resize to desktop
// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth > 991 && mobileMenu) {
// //         closeMobileMenu();
// //       }
// //     };

// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, [mobileMenu]);

// //   // Prevent body scroll when mobile menu is open
// //   useEffect(() => {
// //     if (mobileMenu) {
// //       document.body.style.overflow = 'hidden';
// //     } else {
// //       document.body.style.overflow = '';
// //     }
// //     return () => {
// //       document.body.style.overflow = '';
// //     };
// //   }, [mobileMenu]);

// //   const toggleDropdown = useCallback((name) => {
// //     setOpenDropdowns(prev => ({
// //       about: false,
// //       gallery: false,
// //       membership: false,
// //       [name]: !prev[name]
// //     }));
// //   }, []);

// //   const toggleMobileMenu = useCallback(() => {
// //     setMobileMenu(prev => !prev);
// //     if (!mobileMenu) {
// //       setOpenDropdowns({
// //         about: false,
// //         gallery: false,
// //         membership: false,
// //       });
// //     }
// //   }, [mobileMenu]);

// //   const closeMobileMenu = useCallback(() => {
// //     setMobileMenu(false);
// //     setOpenDropdowns({
// //       about: false,
// //       gallery: false,
// //       membership: false,
// //     });
// //   }, []);

// //   // Navigation items configuration
// //   const navItems = [
// //     { path: "/", label: "Home" },
// //     {
// //       path: "/about",
// //       label: "About",
// //       dropdown: true,
// //       key: "about",
// //       items: [
// //         { path: "/about", label: "About KITD" },
// //         { path: "/about#mission", label: "Mission & Vision" },
// //         { path: "/team", label: "Executive Committee" },
// //       ]
// //     },
// //     { path: "/activities", label: "Activities" },
// //     { path: "/events", label: "Events" },
// //     { path: "/artists", label: "Artists" },
// //     {
// //       path: "/gallery",
// //       label: "Gallery",
// //       dropdown: true,
// //       key: "gallery",
// //       items: [
// //         { path: "/gallery/photos", label: "Photos" },
// //         { path: "/gallery/videos", label: "Videos" },
// //       ]
// //     },
// //     { path: "/news", label: "News" },
// //     {
// //       path: "/membership",
// //       label: "Membership",
// //       dropdown: true,
// //       key: "membership",
// //       items: [
// //         { path: "/membership", label: "Become Member" },
// //         { path: "/membership/benefits", label: "Benefits" },
// //         { path: "/membership/faq", label: "FAQs" },
// //       ]
// //     },
// //     { path: "/volunteer", label: "Volunteer" },
// //     { path: "/contact", label: "Contact" },
// //   ];

// //   return (
// //     <header className={`header ${sticky ? 'sticky' : ''} ${scrolled ? 'scrolled' : ''}`}>
// //       <div className="header-container">
// //         <div className="header-inner">

// //           {/* Logo */}
// //           <Link 
// //             to="/" 
// //             className="logo-link" 
// //             onClick={closeMobileMenu}
// //             aria-label="KITD Home"
// //           >
// //             <div className="logo-wrapper">
// //               <img
// //                 src={logo}
// //                 alt="KITD - Klassischer Indischer Tanz Deutschland"
// //                 className="logo-image"
// //                 width="160"
// //                 height="50"
// //               />
// //             </div>
// //           </Link>

// //           {/* Navigation Container */}
// //           <div className={`nav-container ${mobileMenu ? 'active' : ''}`}>
// //             <nav className="main-nav" role="navigation" aria-label="Main navigation">
// //               {navItems.map((item) => (
// //                 item.dropdown ? (
// //                   <div 
// //                     key={item.key} 
// //                     className={`nav-dropdown ${openDropdowns[item.key] ? 'open' : ''}`}
// //                   >
// //                     <NavLink 
// //                       to={item.path}
// //                       className="nav-link dropdown-toggle"
// //                       onClick={(e) => {
// //                         if (window.innerWidth <= 991) {
// //                           e.preventDefault();
// //                           toggleDropdown(item.key);
// //                         }
// //                       }}
// //                     >
// //                       {item.label}
// //                       <ChevronDown className="dropdown-icon" size={16} strokeWidth={2.5} />
// //                     </NavLink>

// //                     <div className="dropdown-panel">
// //                       <div className="dropdown-inner">
// //                         {item.items.map((subItem, index) => (
// //                           <Link
// //                             key={index}
// //                             to={subItem.path}
// //                             className="dropdown-link"
// //                             onClick={closeMobileMenu}
// //                           >
// //                             <span className="dropdown-link-text">{subItem.label}</span>
// //                             <ArrowRight className="dropdown-link-icon" size={14} />
// //                           </Link>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ) : (
// //                   <NavLink
// //                     key={item.path}
// //                     to={item.path}
// //                     className="nav-link"
// //                     onClick={closeMobileMenu}
// //                   >
// //                     {item.label}
// //                   </NavLink>
// //                 )
// //               ))}

// //               {/* Mobile CTA */}
// //               <div className="mobile-cta-wrapper">
// //                 <Link 
// //                   to="/membership" 
// //                   className="cta-button mobile-cta"
// //                   onClick={closeMobileMenu}
// //                 >
// //                   <span>Become a Member</span>
// //                   <Star size={16} />
// //                 </Link>
// //               </div>
// //             </nav>
// //           </div>

// //           {/* Desktop Actions */}
// //           <div className="header-actions">
// //             <Link
// //               to="/membership"
// //               className="cta-button desktop-cta"
// //             >
// //               <span>Become a Member</span>
// //               <Star size={16} className="cta-icon" />
// //             </Link>

// //             <button
// //               className="mobile-toggle"
// //               onClick={toggleMobileMenu}
// //               aria-label={mobileMenu ? "Close menu" : "Open menu"}
// //               aria-expanded={mobileMenu}
// //               type="button"
// //             >
// //               <div className={`hamburger ${mobileMenu ? 'active' : ''}`}>
// //                 <span></span>
// //                 <span></span>
// //                 <span></span>
// //               </div>
// //             </button>
// //           </div>

// //         </div>
// //       </div>

// //       {/* Overlay */}
// //       {mobileMenu && (
// //         <div 
// //           className="menu-overlay"
// //           onClick={closeMobileMenu}
// //           aria-hidden="true"
// //         />
// //       )}
// //     </header>
// //   );
// // };

// // export default Header;


// // src/components/layout/Header/Header.jsx

// import { useState, useEffect, useCallback } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   ArrowRight,
// } from "lucide-react";

// import "./Header.css";
// import logo from "../../assets/logo.png";

// const Header = () => {
//   const [sticky, setSticky] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [openDropdowns, setOpenDropdowns] = useState({
//     about: false,
//     gallery: false,
//     membership: false,
//   });
//   const location = useLocation();

//   // Throttled scroll handler
//   useEffect(() => {
//     let ticking = false;
    
//     const handleScroll = () => {
//       if (!ticking) {
//         window.requestAnimationFrame(() => {
//           const scrollY = window.scrollY;
//           setSticky(scrollY > 80);
//           setScrolled(scrollY > 20);
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     closeMobileMenu();
//   }, [location.pathname]);

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (mobileMenu && !e.target.closest('.nav-container') && !e.target.closest('.mobile-toggle')) {
//         closeMobileMenu();
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [mobileMenu]);

//   // Close mobile menu on resize to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 991 && mobileMenu) {
//         closeMobileMenu();
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [mobileMenu]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenu) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [mobileMenu]);

//   const toggleDropdown = useCallback((name) => {
//     setOpenDropdowns(prev => ({
//       about: false,
//       gallery: false,
//       membership: false,
//       [name]: !prev[name]
//     }));
//   }, []);

//   const toggleMobileMenu = useCallback(() => {
//     setMobileMenu(prev => !prev);
//     if (!mobileMenu) {
//       setOpenDropdowns({
//         about: false,
//         gallery: false,
//         membership: false,
//       });
//     }
//   }, [mobileMenu]);

//   const closeMobileMenu = useCallback(() => {
//     setMobileMenu(false);
//     setOpenDropdowns({
//       about: false,
//       gallery: false,
//       membership: false,
//     });
//   }, []);

//   // Navigation items
//   const navItems = [
//     { path: "/", label: "Home" },
//     {
//       path: "/about",
//       label: "About",
//       dropdown: true,
//       key: "about",
//       items: [
//         { path: "/about", label: "About KITD" },
//         { path: "/about/mission-vision", label: "Mission & Vision" },
//         { path: "/about/executive-committee", label: "Executive Committee" },
//       ]
//     },
//     { path: "/activities", label: "Activities" },
//     { path: "/events", label: "Events" },
//     { path: "/artists", label: "Artists" },
//     {
//       path: "/gallery",
//       label: "Gallery",
//       // dropdown: true,
//       // key: "gallery",
//       // items: [
//       //   { path: "/gallery/photos", label: "Photos" },
//       //   { path: "/gallery/videos", label: "Videos" },
//       // ]
//     },
//     { path: "/news", label: "News" },
//     {
//       path: "/membership",
//       label: "Membership",
//       dropdown: true,
//       key: "membership",
//       items: [
//         { path: "/membership", label: "Become a Member" },
//         { path: "/membership/benefits", label: "Benefits" },
//         { path: "/membership/faq", label: "FAQs" },
//       ]
//     },
//     { path: "/volunteer", label: "Volunteer" },
//     { path: "/contact", label: "Contact" },
//   ];

//   return (
//     <header className={`header ${sticky ? 'sticky' : ''} ${scrolled ? 'scrolled' : ''}`}>
//       <div className="header-container">
//         <div className="header-inner">

//           {/* Logo */}
//           <Link 
//             to="/" 
//             className="logo-link" 
//             onClick={closeMobileMenu}
//             aria-label="KITD Home"
//           >
//             <div className="logo-wrapper">
//               <img
//                 src={logo}
//                 alt="KITD - Klassischer Indischer Tanz Deutschland"
//                 className="logo-image"
//               />
//             </div>
//             <div className="logo-text">
//               <span className="logo-text-primary">KITD</span>
//               <span className="logo-text-secondary">Classical Indian Dance Germany</span>
//             </div>
//           </Link>

//           {/* Navigation Container */}
//           <div className={`nav-container ${mobileMenu ? 'active' : ''}`}>
//             <nav className="main-nav" role="navigation" aria-label="Main navigation">
//               {navItems.map((item) => (
//                 item.dropdown ? (
//                   <div 
//                     key={item.key} 
//                     className={`nav-dropdown ${openDropdowns[item.key] ? 'open' : ''}`}
//                   >
//                     <NavLink 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `nav-link dropdown-toggle ${isActive ? 'active' : ''}`
//                       }
//                       onClick={(e) => {
//                         if (window.innerWidth <= 991) {
//                           e.preventDefault();
//                           toggleDropdown(item.key);
//                         }
//                       }}
//                     >
//                       {item.label}
//                       <ChevronDown className="dropdown-icon" size={14} strokeWidth={2} />
//                     </NavLink>

//                     <div className="dropdown-panel">
//                       <div className="dropdown-inner">
//                         {item.items.map((subItem, index) => (
//                           <Link
//                             key={index}
//                             to={subItem.path}
//                             className="dropdown-link"
//                             onClick={closeMobileMenu}
//                           >
//                             <span className="dropdown-link-text">{subItem.label}</span>
//                             <ArrowRight className="dropdown-link-icon" size={13} strokeWidth={1.5} />
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <NavLink
//                     key={item.path}
//                     to={item.path}
//                     className={({ isActive }) => 
//                       `nav-link ${isActive ? 'active' : ''}`
//                     }
//                     onClick={closeMobileMenu}
//                   >
//                     {item.label}
//                   </NavLink>
//                 )
//               ))}

//               {/* Mobile CTA */}
//               <div className="mobile-cta-wrapper">
//                 <Link 
//                   to="/membership" 
//                   className="header-cta mobile-cta"
//                   onClick={closeMobileMenu}
//                 >
//                   <span>Become a Member</span>
//                   <ArrowRight size={16} strokeWidth={1.5} />
//                 </Link>
//               </div>
//             </nav>
//           </div>

//           {/* Desktop Actions */}
//           <div className="header-actions">
//             <Link
//               to="/membership"
//               className="header-cta"
//             >
//               <span>Become a Member</span>
//               <ArrowRight size={16} strokeWidth={1.5} />
//             </Link>

//             <button
//               className="mobile-toggle"
//               onClick={toggleMobileMenu}
//               aria-label={mobileMenu ? "Close menu" : "Open menu"}
//               aria-expanded={mobileMenu}
//               type="button"
//             >
//               {mobileMenu ? (
//                 <X size={22} strokeWidth={1.5} />
//               ) : (
//                 <Menu size={22} strokeWidth={1.5} />
//               )}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Overlay */}
//       {mobileMenu && (
//         <div 
//           className="menu-overlay"
//           onClick={closeMobileMenu}
//           aria-hidden="true"
//         />
//       )}
//     </header>
//   );
// };

// export default Header;











import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({
    about: false,
    membership: false,
  });
  const location = useLocation();

  // Throttled scroll handler
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setSticky(scrollY > 80);
          setScrolled(scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (mobileMenu) {
      closeMobileMenu();
    }
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenu && !e.target.closest('.nav-container') && !e.target.closest('.mobile-toggle')) {
        closeMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenu]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && mobileMenu) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [mobileMenu]);

  const toggleDropdown = useCallback((name) => {
    setOpenDropdowns(prev => ({
      about: false,
      membership: false,
      [name]: !prev[name]
    }));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu(prev => !prev);
    if (!mobileMenu) {
      setOpenDropdowns({
        about: false,
        membership: false,
      });
    }
  }, [mobileMenu]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenu(false);
    setOpenDropdowns({
      about: false,
      membership: false,
    });
  }, []);

  // Navigation items
  const navItems = [
    { path: "/", label: "Home" },
    {
      path: "/about",
      label: "About",
      dropdown: true,
      key: "about",
      items: [
        { path: "/about", label: "About KITD" },
        { path: "/about/mission-vision", label: "Mission & Vision" },
        { path: "/about/executive-committee", label: "Executive Committee" },
      ]
    },
    { path: "/activities", label: "Activities" },
    { path: "/events", label: "Events" },
    { path: "/artists", label: "Artists" },
    { path: "/gallery", label: "Gallery" },
    { path: "/news", label: "News" },
    {
      path: "/membership",
      label: "Membership",
      dropdown: true,
      key: "membership",
      items: [
        { path: "/membership", label: "Become a Member" },
        { path: "/membership/benefits", label: "Benefits" },
        { path: "/membership/faq", label: "FAQs" },
      ]
    },
    { path: "/volunteer", label: "Volunteer" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className={`header ${sticky ? 'sticky' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-inner">

          {/* Logo */}
          <Link 
            to="/" 
            className="logo-link" 
            onClick={closeMobileMenu}
            aria-label="KITD Home"
          >
            <div className="logo-wrapper">
              <img
                src={logo}
                alt="KITD - Klassischer Indischer Tanz Deutschland"
                className="logo-image"
              />
            </div>
            <div className="logo-text">
              <span className="logo-text-primary">KITD</span>
              <span className="logo-text-secondary">Classical Indian Dance Germany</span>
            </div>
          </Link>

          {/* Navigation - Desktop & Mobile */}
          <div className={`nav-container ${mobileMenu ? 'active' : ''}`}>
            <nav className="main-nav" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div 
                    key={item.key} 
                    className={`nav-dropdown ${openDropdowns[item.key] ? 'open' : ''}`}
                    onMouseEnter={() => {
                      if (window.innerWidth > 991) {
                        setOpenDropdowns(prev => ({
                          ...prev,
                          [item.key]: true
                        }));
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.innerWidth > 991) {
                        setOpenDropdowns(prev => ({
                          ...prev,
                          [item.key]: false
                        }));
                      }
                    }}
                  >
                    <button 
                      className="nav-link dropdown-toggle"
                      onClick={(e) => {
                        if (window.innerWidth <= 991) {
                          e.preventDefault();
                          toggleDropdown(item.key);
                        }
                      }}
                      aria-expanded={openDropdowns[item.key]}
                    >
                      {item.label}
                      <ChevronDown className="dropdown-icon" size={14} strokeWidth={2} />
                    </button>

                    <div className="dropdown-panel">
                      <div className="dropdown-inner">
                        {item.items.map((subItem, index) => (
                          <Link
                            key={index}
                            to={subItem.path}
                            className="dropdown-link"
                            onClick={closeMobileMenu}
                          >
                            <span className="dropdown-link-text">{subItem.label}</span>
                            <ArrowRight className="dropdown-link-icon" size={13} strokeWidth={1.5} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                )
              ))}

              {/* Mobile CTA */}
              <div className="mobile-cta-wrapper">
                <Link 
                  to="/membership" 
                  className="header-cta mobile-cta"
                  onClick={closeMobileMenu}
                >
                  <span>Become a Member</span>
                  <ArrowRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
            </nav>
          </div>

          {/* Header Actions */}
          <div className="header-actions">
            <Link
              to="/membership"
              className="header-cta desktop-cta"
            >
              <span>Become a Member</span>
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>

            <button
              className="mobile-toggle"
              onClick={toggleMobileMenu}
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenu}
              type="button"
            >
              {mobileMenu ? (
                <X size={24} strokeWidth={2} />
              ) : (
                <Menu size={24} strokeWidth={2} />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Overlay */}
      {mobileMenu && (
        <div 
          className="menu-overlay"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;