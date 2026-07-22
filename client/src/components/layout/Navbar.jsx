// import { Menu } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";

// const Navbar = ({ setCollapsed }) => {
//   const { user, logout } = useAuth();

//   return (
//     <header className="h-16 bg-white shadow flex items-center justify-between px-6">

//       <div className="flex items-center gap-3">

//         <button
//           onClick={() => setCollapsed((prev) => !prev)}
//         >
//           <Menu size={22} />
//         </button>

//         <h2 className="font-semibold text-lg">
//           Admin Dashboard
//         </h2>

//       </div>

//       <div className="flex items-center gap-4">

//         <div className="text-right">

//           <p className="font-semibold">
//             {user?.name}
//           </p>

//           <p className="text-xs text-gray-500">
//             {user?.role}
//           </p>

//         </div>

//         <button
//           onClick={logout}
//           className="bg-red-500 text-white px-4 py-2 rounded-lg"
//         >
//           Logout
//         </button>

//       </div>

//     </header>
//   );
// };

// export default Navbar;


import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  Menu,
  Bell,
  Search,
  User,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";

import "./Navbar.css";

const Navbar = ({ collapsed, setCollapsed, onMobileMenuToggle, isMobileView }) => {
  const { user, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);
  const [searchFocused, setSearchFocused] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const userMenuRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyboard = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setUserMenuOpen(false);
        searchInputRef.current?.blur();
      }
    };

    document.addEventListener("keydown", handleKeyboard);
    return () => document.removeEventListener("keydown", handleKeyboard);
  }, []);

  const handleLogout = () => {
    setUserMenuOpen(false);
    logout();
  };

  const handleToggleSidebar = () => {
    if (isMobileView) {
      onMobileMenuToggle();
    } else {
      setCollapsed(!collapsed);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add your dark mode logic here
  };

  return (
    <header className="top-navbar" role="banner">
      {/* Left Section */}
      <div className="top-navbar__left">
        {/* Menu Toggle Button */}
        <button
          onClick={handleToggleSidebar}
          className="top-navbar__menu-btn"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Menu size={20} strokeWidth={2} />
        </button>

        {/* Search Bar */}
        <div className={`top-navbar__search ${searchFocused ? "top-navbar__search--focused" : ""}`}>
          <Search size={18} className="top-navbar__search-icon" strokeWidth={2} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search anything..."
            className="top-navbar__search-input"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            aria-label="Search"
          />
          <div className="top-navbar__search-shortcut">
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="top-navbar__right">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="top-navbar__icon-btn"
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
        </button>

        {/* Help Button */}
        <button
          className="top-navbar__icon-btn"
          aria-label="Help"
          title="Help & Documentation"
        >
          <HelpCircle size={18} strokeWidth={2} />
        </button>

        {/* Notifications */}
        <button
          className="top-navbar__icon-btn top-navbar__notification-btn"
          aria-label={`Notifications (${notificationCount} unread)`}
          title="Notifications"
        >
          <Bell size={18} strokeWidth={2} />
          {notificationCount > 0 && (
            <span className="top-navbar__notification-badge">
              {notificationCount > 9 ? "9+" : notificationCount}
            </span>
          )}
        </button>

        {/* Divider */}
        <div className="top-navbar__divider" />

        {/* User Menu */}
        <div className="top-navbar__user-menu" ref={userMenuRef}>
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="top-navbar__user-btn"
            aria-expanded={userMenuOpen}
            aria-haspopup="true"
            aria-label="User menu"
          >
            {/* Avatar */}
            <div className="top-navbar__avatar">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt={user?.name || "User"}
                  className="top-navbar__avatar-img"
                />
              ) : (
                <div className="top-navbar__avatar-placeholder">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
              <span className="top-navbar__status-indicator" />
            </div>

            {/* User Info */}
            <div className="top-navbar__user-info">
              <span className="top-navbar__user-name">
                {user?.name || "Admin User"}
              </span>
              <span className="top-navbar__user-role">
                {user?.role || "Administrator"}
              </span>
            </div>

            <ChevronDown
              size={16}
              strokeWidth={2}
              className={`top-navbar__chevron ${
                userMenuOpen ? "top-navbar__chevron--open" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {userMenuOpen && (
            <div className="top-navbar__dropdown" role="menu">
              {/* User Info Header */}
              <div className="top-navbar__dropdown-header">
                <div className="top-navbar__avatar top-navbar__avatar--large">
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user?.name || "User"}
                      className="top-navbar__avatar-img"
                    />
                  ) : (
                    <div className="top-navbar__avatar-placeholder">
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                  )}
                </div>
                <div className="top-navbar__dropdown-user-info">
                  <p className="top-navbar__dropdown-user-name">
                    {user?.name || "Admin User"}
                  </p>
                  <p className="top-navbar__dropdown-user-email">
                    {user?.email || "admin@example.com"}
                  </p>
                </div>
              </div>

              <div className="top-navbar__dropdown-divider" />

              {/* Menu Items */}
              <button
                className="top-navbar__dropdown-item"
                role="menuitem"
                onClick={() => setUserMenuOpen(false)}
              >
                <User size={16} strokeWidth={2} />
                <span>My Profile</span>
              </button>

              <button
                className="top-navbar__dropdown-item"
                role="menuitem"
                onClick={() => setUserMenuOpen(false)}
              >
                <Settings size={16} strokeWidth={2} />
                <span>Account Settings</span>
              </button>

              <div className="top-navbar__dropdown-divider" />

              <button
                className="top-navbar__dropdown-item top-navbar__dropdown-item--danger"
                role="menuitem"
                onClick={handleLogout}
              >
                <LogOut size={16} strokeWidth={2} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;