// import {
//   LayoutDashboard,
//   Image,
//   Users,
//   Calendar,
//   Newspaper,
//   Images,
//   Handshake,
//   LogOut,
// } from "lucide-react";

// import { NavLink } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const Sidebar = ({ collapsed }) => {
//   const { logout } = useAuth();

//   const menus = [
//     {
//       title: "Dashboard",
//       icon: <LayoutDashboard size={20} />,
//       path: "/admin/dashboard",
//     },
//     {
//       title: "Banner",
//       icon: <Image size={20} />,
//       path: "/admin/banners",
//     },
//     {
//       title: "Team",
//       icon: <Users size={20} />,
//       path: "/admin/team",
//     },
//     {
//       title: "Activities",
//       icon: <Calendar size={20} />,
//       path: "/admin/activities",
//     },
//     {
//       title: "Gallery",
//       icon: <Images size={20} />,
//       path: "/admin/gallery",
//     },
//     {
//       title: "News",
//       icon: <Newspaper size={20} />,
//       path: "/admin/news",
//     },
//     {
//       title: "Partners",
//       icon: <Handshake size={20} />,
//       path: "/admin/partners",
//     },
//   ];

//   return (
//     <aside
//       className={`bg-slate-900 text-white transition-all duration-300 ${
//         collapsed ? "w-20" : "w-64"
//       }`}
//     >
//       <div className="h-16 flex items-center justify-center text-xl font-bold border-b border-slate-700">
//         {collapsed ? "K" : "KITD"}
//       </div>

//       <nav className="mt-5">

//         {menus.map((menu) => (
//           <NavLink
//             key={menu.path}
//             to={menu.path}
//             className={({ isActive }) =>
//               `flex items-center gap-4 px-5 py-4 hover:bg-slate-800 ${
//                 isActive ? "bg-blue-600" : ""
//               }`
//             }
//           >
//             {menu.icon}

//             {!collapsed && <span>{menu.title}</span>}
//           </NavLink>
//         ))}

//         <button
//           onClick={logout}
//           className="w-full flex items-center gap-4 px-5 py-4 hover:bg-red-600 mt-8"
//         >
//           <LogOut size={20} />

//           {!collapsed && "Logout"}
//         </button>

//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;


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
  ChevronLeft,
  Mic2,
  CalendarDays,
  MessageSquareMore,
  UserPlus,
  HandHelping,
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
      icon: <Calendar size={20} strokeWidth={1.75} />,
      path: "/admin/members",
      badge: null,
    },


{
  id: "artists",
  label: "Artists",
  icon: <Mic2 size={20} strokeWidth={1.75} />,
  path: "/admin/artists",
},

{
  id: "testimonials",
  label: "Testimonials",
  path: "/admin/testimonials",
},


{
  id: "events",
  label: "Events",
  icon: <CalendarDays size={20} strokeWidth={1.75} />,
  path: "/admin/events",
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
  icon: (
    <Newspaper
      size={20}
      strokeWidth={1.75}
    />
  ),
  path: "/admin/news",
},

{
  id: "volunteer-registrations",
  label: "Volunteer Registrations",
  icon: <HandHelping size={20} strokeWidth={1.75} />,
  path: "/admin/volunteer-registrations",
},

{
  id: "membership-enquiries",
  label: "Membership Enquiries",
  icon: <UserPlus size={20} strokeWidth={1.75} />,
  path: "/admin/membership-enquiries",
}
,
    {
  id: "newsletter",
  label: "Newsletter",
  path: "/admin/newsletter",
},

{
  id: "contact",
  label: "Contact Enquiries",
  icon: (
    <MessageSquareMore
      size={20}
      strokeWidth={1.75}
    />
  ),
  path: "/admin/contact",
},

    {
      id: "partners",
      label: "Partners",
      icon: <Handshake size={20} strokeWidth={1.75} />,
      path: "/admin/partners",
      badge: null,
    },
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
    <aside
      className={`nav-sidebar ${collapsed ? "nav-sidebar--collapsed" : "nav-sidebar--expanded"} ${
        mobileOpen ? "nav-sidebar--mobile-visible" : ""
      }`}
      aria-label="Main navigation sidebar"
      role="navigation"
    >
      {/* Brand Section */}
      <div className="nav-sidebar__brand">
        <div className="nav-sidebar__brand-content">
          <div className="nav-sidebar__brand-logo">
            <span className="nav-sidebar__brand-icon">
              <LayoutDashboard size={24} strokeWidth={2} />
            </span>
          </div>
          
          {!collapsed && (
            <div className="nav-sidebar__brand-text">
              <h1 className="nav-sidebar__brand-title">KITD</h1>
              <p className="nav-sidebar__brand-subtitle">Admin Panel</p>
            </div>
          )}
        </div>

        {/* Collapse Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="nav-sidebar__collapse-btn"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft
            size={18}
            className={`nav-sidebar__collapse-icon ${
              collapsed ? "nav-sidebar__collapse-icon--rotated" : ""
            }`}
          />
        </button>
      </div>

      {/* Divider */}
      <div className="nav-sidebar__divider" />

      {/* Navigation Menu */}
      <nav className="nav-sidebar__nav">
        <ul className="nav-sidebar__menu" role="menubar">
          {navigationItems.map((item) => (
            <li key={item.id} className="nav-sidebar__menu-item" role="none">
              <NavLink
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `nav-sidebar__link ${
                    isActive ? "nav-sidebar__link--active" : ""
                  } ${collapsed ? "nav-sidebar__link--centered" : ""}`
                }
                role="menuitem"
                title={collapsed ? item.label : undefined}
                end={item.path === "/admin/dashboard"}
              >
                <span className="nav-sidebar__link-icon">{item.icon}</span>
                
                {!collapsed && (
                  <>
                    <span className="nav-sidebar__link-label">{item.label}</span>
                    
                    {item.badge && (
                      <span className="nav-sidebar__badge">{item.badge}</span>
                    )}
                  </>
                )}

                {/* Active Indicator */}
                {collapsed && item.badge && (
                  <span className="nav-sidebar__badge nav-sidebar__badge--collapsed">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer */}
      <div className="nav-sidebar__spacer" />

      {/* Logout Section */}
      <div className="nav-sidebar__footer">
        <div className="nav-sidebar__divider" />
        
        <button
          onClick={handleLogout}
          className={`nav-sidebar__logout-btn ${
            collapsed ? "nav-sidebar__logout-btn--centered" : ""
          }`}
          title="Logout"
        >
          <LogOut size={20} strokeWidth={1.75} className="nav-sidebar__logout-icon" />
          
          {!collapsed && <span className="nav-sidebar__logout-label">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;