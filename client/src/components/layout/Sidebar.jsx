
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  LayoutDashboard,
  Image,
  Users,
  Calendar,
  Newspaper,
  Images,
  Handshake,
  LogOut,
  Mic2,
  CalendarDays,
  MessageSquareMore,
  UserPlus,
  HandHelping,
  PanelLeftClose,
  PanelLeftOpen,
  Shield,
} from "lucide-react";

import "./Sidebar.css";

const Sidebar = ({ collapsed, setCollapsed, mobileOpen, onMobileClose }) => {
  const { logout } = useAuth();

  const navigationItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard size={20} strokeWidth={1.75} />,
      path: "/admin/dashboard",
      badge: null,
    },
    {
      id: "banners",
      label: "Banner",
      icon: <Image size={20} strokeWidth={1.75} />,
      path: "/admin/banners",
      badge: null,
    },
    {
      id: "team",
      label: "Team",
      icon: <Users size={20} strokeWidth={1.75} />,
      path: "/admin/team",
      badge: "New",
    },
    {
      id: "activities",
      label: "Activities",
      icon: <Calendar size={20} strokeWidth={1.75} />,
      path: "/admin/activities",
      badge: null,
    },
    {
      id: "member",
      label: "Members",
      icon: <UserPlus size={20} strokeWidth={1.75} />,
      path: "/admin/members",
      badge: null,
    },
    {
      id: "artists",
      label: "Artists",
      icon: <Mic2 size={20} strokeWidth={1.75} />,
      path: "/admin/artists",
      badge: null,
    },
    {
      id: "testimonials",
      label: "Testimonials",
      icon: <MessageSquareMore size={20} strokeWidth={1.75} />,
      path: "/admin/testimonials",
      badge: null,
    },
    {
      id: "events",
      label: "Events",
      icon: <CalendarDays size={20} strokeWidth={1.75} />,
      path: "/admin/events",
      badge: null,
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: <Images size={20} strokeWidth={1.75} />,
      path: "/admin/gallery",
      badge: null,
    },
    {
      id: "news",
      label: "News",
      icon: <Newspaper size={20} strokeWidth={1.75} />,
      path: "/admin/news",
      badge: null,
    },
    {
      id: "volunteer-registrations",
      label: "Volunteer Registrations",
      icon: <HandHelping size={20} strokeWidth={1.75} />,
      path: "/admin/volunteer-registrations",
      badge: null,
    },
    {
      id: "membership-enquiries",
      label: "Membership Enquiries",
      icon: <UserPlus size={20} strokeWidth={1.75} />,
      path: "/admin/membership-enquiries",
      badge: null,
    },
    // {
    //   id: "newsletter",
    //   label: "Newsletter",
    //   icon: <Newspaper size={20} strokeWidth={1.75} />,
    //   path: "/admin/newsletter",
    //   badge: null,
    // },
    {
      id: "contact",
      label: "Contact Enquiries",
      icon: <MessageSquareMore size={20} strokeWidth={1.75} />,
      path: "/admin/contact",
      badge: null,
    },
    // {
    //   id: "partners",
    //   label: "Partners",
    //   icon: <Handshake size={20} strokeWidth={1.75} />,
    //   path: "/admin/partners",
    //   badge: null,
    // },
  ];

  const handleNavClick = () => {
    if (mobileOpen && onMobileClose) {
      onMobileClose();
    }
  };

  const handleLogout = () => {
    if (mobileOpen && onMobileClose) {
      onMobileClose();
    }
    logout();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && <div className="sidebar__overlay" onClick={onMobileClose} />}

      <aside
        className={`sidebar ${collapsed ? "sidebar--collapsed" : "sidebar--expanded"} ${
          mobileOpen ? "sidebar--mobile-visible" : ""
        }`}
        aria-label="Main navigation sidebar"
        role="navigation"
      >
        {/* Brand Section - Fixed at top */}
        <div className="sidebar__brand">
          <div className="sidebar__brand-content">
            <div className="sidebar__brand-logo">
              <div className="sidebar__brand-icon">
                <Shield size={24} strokeWidth={2} />
              </div>
            </div>

            {!collapsed && (
              <div className="sidebar__brand-text">
                <h1 className="sidebar__brand-title">KITD</h1>
                <p className="sidebar__brand-subtitle">Admin Panel</p>
              </div>
            )}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="sidebar__collapse-btn"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
          </button>
        </div>

        {/* Divider */}
        <div className="sidebar__divider" />

        {/* Navigation Menu - Scrollable */}
        <nav className="sidebar__nav">
          <ul className="sidebar__menu" role="menubar">
            {navigationItems.map((item) => (
              <li key={item.id} className="sidebar__menu-item" role="none">
                <NavLink
                  to={item.path}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    `sidebar__link ${
                      isActive ? "sidebar__link--active" : ""
                    } ${collapsed ? "sidebar__link--centered" : ""}`
                  }
                  role="menuitem"
                  title={collapsed ? item.label : undefined}
                  end={item.path === "/admin/dashboard"}
                >
                  <span className="sidebar__link-icon">{item.icon}</span>

                  {!collapsed && (
                    <>
                      <span className="sidebar__link-label">{item.label}</span>

                      {item.badge && (
                        <span className="sidebar__badge">{item.badge}</span>
                      )}
                    </>
                  )}

                  {collapsed && (
                    <span className="sidebar__link-indicator" />
                  )}

                  {collapsed && item.badge && (
                    <span className="sidebar__badge sidebar__badge--collapsed">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer - Fixed at bottom */}
        <div className="sidebar__footer">
          <div className="sidebar__divider" />

          {!collapsed && (
            <div className="sidebar__user">
              <div className="sidebar__user-avatar">
                <span className="sidebar__user-initial">A</span>
              </div>
              <div className="sidebar__user-info">
                <p className="sidebar__user-name">Administrator</p>
                <p className="sidebar__user-email">admin@kitd.de</p>
              </div>
            </div>
          )}

          <button
            onClick={handleLogout}
            className={`sidebar__logout-btn ${
              collapsed ? "sidebar__logout-btn--centered" : ""
            }`}
            title="Logout"
          >
            <LogOut size={20} strokeWidth={1.75} className="sidebar__logout-icon" />
            {!collapsed && <span className="sidebar__logout-label">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;