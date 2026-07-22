// import { Outlet } from "react-router-dom";
// import { useState, useCallback, useEffect, useRef } from "react";

// import Sidebar from "../components/layout/Sidebar";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// import "./AdminLayout.css";

// const AdminLayout = () => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  
//   const mainContentRef = useRef(null);
//   const resizeTimeoutRef = useRef(null);

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       clearTimeout(resizeTimeoutRef.current);
//       resizeTimeoutRef.current = setTimeout(() => {
//         const mobile = window.innerWidth < 1024;
//         setIsMobile(mobile);
//         if (!mobile) {
//           setMobileMenuOpen(false);
//         }
//       }, 100);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       clearTimeout(resizeTimeoutRef.current);
//     };
//   }, []);

//   // Handle content scroll
//   useEffect(() => {
//     const contentElement = mainContentRef.current;
//     if (!contentElement) return;

//     const handleScroll = () => {
//       setIsScrolled(contentElement.scrollTop > 15);
//     };

//     contentElement.addEventListener("scroll", handleScroll, { passive: true });
//     return () => contentElement.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileMenuOpen]);

//   const handleSidebarToggle = useCallback(() => {
//     setSidebarCollapsed((prev) => !prev);
//   }, []);

//   const handleMobileMenuToggle = useCallback(() => {
//     setMobileMenuOpen((prev) => !prev);
//   }, []);

//   const handleMobileMenuClose = useCallback(() => {
//     setMobileMenuOpen(false);
//   }, []);

//   const sidebarState = sidebarCollapsed ? "collapsed" : "expanded";

//   return (
//     <div 
//       className={`app-layout-container ${mobileMenuOpen ? "app-layout-container--menu-open" : ""}`}
//       data-sidebar={sidebarState}
//     >
//       {/* Skip Navigation Link */}
//       <a href="#primary-content" className="app-layout-skip-link">
//         Skip to main content
//       </a>

//       {/* Mobile Navigation Backdrop */}
//       {mobileMenuOpen && (
//         <div
//           className="app-layout-mobile-backdrop"
//           onClick={handleMobileMenuClose}
//           aria-hidden="true"
//         />
//       )}

//       {/* Sidebar Navigation */}
//       <aside
//         className={`app-layout-sidebar ${
//           sidebarCollapsed ? "app-layout-sidebar--collapsed" : ""
//         } ${mobileMenuOpen ? "app-layout-sidebar--mobile-open" : ""}`}
//       >
//         <Sidebar
//           collapsed={sidebarCollapsed}
//           setCollapsed={setSidebarCollapsed}
//           mobileOpen={mobileMenuOpen}
//           onMobileClose={handleMobileMenuClose}
//         />
//       </aside>

//       {/* Main Content Area */}
//       <div className="app-layout-main">
//         {/* Top Navigation */}
//         <header
//           className={`app-layout-header ${
//             isScrolled ? "app-layout-header--scrolled" : ""
//           }`}
//         >
//           <Navbar
//             collapsed={sidebarCollapsed}
//             setCollapsed={setSidebarCollapsed}
//             onMobileMenuToggle={handleMobileMenuToggle}
//             isMobile={isMobile}
//           />
//         </header>

//         {/* Content Section */}
//         <main
//           id="primary-content"
//           ref={mainContentRef}
//           className="app-layout-content"
//         >
//           <div className="app-layout-content__inner">
//             <Outlet />
//           </div>
//         </main>

//         {/* Footer Section */}
//         <footer className="app-layout-footer">
//           <Footer />
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;

import { Outlet } from "react-router-dom";
import { useState, useCallback, useEffect, useRef } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import "./AdminLayout.css";

const AdminLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1024);
  
  const mainContentRef = useRef(null);
  const resizeTimerRef = useRef(null);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleViewportResize = () => {
      clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        const mobileViewActive = window.innerWidth < 1024;
        setIsMobileView(mobileViewActive);
        if (!mobileViewActive) {
          setMobileMenuOpen(false);
        }
      }, 150);
    };

    window.addEventListener("resize", handleViewportResize);
    return () => {
      window.removeEventListener("resize", handleViewportResize);
      clearTimeout(resizeTimerRef.current);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleSidebarToggle = useCallback(() => {
    setSidebarCollapsed((prev) => !prev);
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleMobileMenuClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <div 
      className={`dashboard-shell ${mobileMenuOpen ? "dashboard-shell--mobile-active" : ""}`}
      data-sidebar-state={sidebarCollapsed ? "collapsed" : "expanded"}
    >
      {/* Accessibility skip link */}
      <a href="#main-content-area" className="dashboard-shell__skip-nav">
        Skip to main content
      </a>

      {/* Mobile overlay backdrop */}
      {mobileMenuOpen && (
        <div
          className="dashboard-shell__overlay"
          onClick={handleMobileMenuClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar panel */}
      <div 
        className={`dashboard-shell__sidebar-panel ${
          sidebarCollapsed ? "dashboard-shell__sidebar-panel--collapsed" : ""
        } ${mobileMenuOpen ? "dashboard-shell__sidebar-panel--mobile-open" : ""}`}
      >
        <Sidebar
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
          mobileOpen={mobileMenuOpen}
          onMobileClose={handleMobileMenuClose}
        />
      </div>

      {/* Main content wrapper */}
      <div className="dashboard-shell__content-area">
        {/* Top navigation bar */}
        <div className="dashboard-shell__top-bar">
          <Navbar
            collapsed={sidebarCollapsed}
            setCollapsed={setSidebarCollapsed}
            onMobileMenuToggle={handleMobileMenuToggle}
            isMobileView={isMobileView}
          />
        </div>

        {/* Scrollable main content */}
        <div 
          id="main-content-area"
          ref={mainContentRef}
          className="dashboard-shell__main-content"
        >
          <div className="dashboard-shell__page-container">
            <Outlet />
          </div>
        </div>

        {/* Footer bar */}
        <div className="dashboard-shell__bottom-bar">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;