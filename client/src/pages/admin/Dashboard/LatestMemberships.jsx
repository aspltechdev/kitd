// const LatestMemberships = ({ memberships }) => {
//   return (
//     <div className="bg-white rounded-xl shadow p-5">

//       <h2 className="font-semibold mb-4">
//         Latest Memberships
//       </h2>

//       {memberships.map((member) => (
//         <div
//           key={member.id}
//           className="border-b py-3"
//         >
//           <h4>{member.name}</h4>

//           <p className="text-sm text-gray-500">
//             {member.email}
//           </p>
//         </div>
//       ))}

//     </div>
//   );
// };

// export default LatestMemberships;


import { useState } from "react";
import {
  Users,
  ChevronRight,
  Clock,
  Star,
  MoreVertical,
  User,
  CheckCircle,
  XCircle,
  Mail,
  Calendar,
  Shield,
  Building2,
  Tag,
  ExternalLink,
  UserPlus,
} from "lucide-react";

import "./LatestMemberships.css";

const LatestMemberships = ({ memberships }) => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name) => {
    const colors = [
      "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      "linear-gradient(135deg, #10b981, #059669)",
      "linear-gradient(135deg, #3b82f6, #2563eb)",
      "linear-gradient(135deg, #f59e0b, #d97706)",
      "linear-gradient(135deg, #ec4899, #db2777)",
      "linear-gradient(135deg, #06b6d4, #0891b2)",
      "linear-gradient(135deg, #14b8a6, #0d9488)",
      "linear-gradient(135deg, #6366f1, #4f46e5)",
    ];
    
    if (!name) return colors[0];
    const index = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  const getTimeAgo = (date) => {
    if (!date) return "";
    const now = new Date();
    const memberDate = new Date(date);
    const diffInDays = Math.floor((now - memberDate) / (1000 * 60 * 60 * 24));
    
    if (diffInDays < 1) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays}d ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}w ago`;
    return memberDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const getMembershipType = (type) => {
    const types = {
      premium: { label: "Premium", color: "#f59e0b", bg: "#fef3c7" },
      basic: { label: "Basic", color: "#3b82f6", bg: "#dbeafe" },
      pro: { label: "Pro", color: "#8b5cf6", bg: "#ede9fe" },
      enterprise: { label: "Enterprise", color: "#10b981", bg: "#d1fae5" },
      trial: { label: "Trial", color: "#06b6d4", bg: "#cffafe" },
    };
    return types[type?.toLowerCase()] || { label: type || "Standard", color: "#64748b", bg: "#f1f5f9" };
  };

  const handleMenuToggle = (memberId) => {
    setActiveMenu(activeMenu === memberId ? null : memberId);
  };

  if (!memberships || memberships.length === 0) {
    return (
      <div className="latest-memberships">
        <div className="latest-memberships__header">
          <div className="latest-memberships__header-left">
            <div className="latest-memberships__header-icon">
              <Users size={18} strokeWidth={2} />
            </div>
            <h2 className="latest-memberships__title">Latest Memberships</h2>
          </div>
        </div>
        
        <div className="latest-memberships__empty">
          <div className="latest-memberships__empty-icon">
            <UserPlus size={40} strokeWidth={1.5} />
          </div>
          <p className="latest-memberships__empty-text">No memberships yet</p>
          <p className="latest-memberships__empty-subtext">
            New member registrations will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="latest-memberships">
      {/* Header */}
      <div className="latest-memberships__header">
        <div className="latest-memberships__header-left">
          <div className="latest-memberships__header-icon">
            <Users size={18} strokeWidth={2} />
          </div>
          <div className="latest-memberships__header-text">
            <h2 className="latest-memberships__title">Latest Memberships</h2>
            <span className="latest-memberships__count">
              {memberships.length} {memberships.length === 1 ? "member" : "members"}
            </span>
          </div>
        </div>
        
        <button className="latest-memberships__view-all">
          <span>View All</span>
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>

      {/* Members List */}
      <div className="latest-memberships__list">
        {memberships.slice(0, 5).map((member, index) => {
          const membershipType = getMembershipType(member.type || member.membershipType);
          
          return (
            <div
              key={member.id || member._id || index}
              className={`latest-memberships__item ${
                hoveredMember === member.id ? "latest-memberships__item--hovered" : ""
              } ${index === 0 ? "latest-memberships__item--new" : ""}`}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => {
                setHoveredMember(null);
                setActiveMenu(null);
              }}
            >
              {/* Avatar */}
              <div
                className="latest-memberships__avatar"
                style={{ background: getAvatarColor(member.name) }}
              >
                <span className="latest-memberships__avatar-text">
                  {getInitials(member.name)}
                </span>
                {member.status === "active" && (
                  <span className="latest-memberships__online-dot" />
                )}
                {index === 0 && (
                  <span className="latest-memberships__new-badge">
                    <Star size={10} fill="currentColor" />
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="latest-memberships__content">
                <div className="latest-memberships__content-header">
                  <h4 className="latest-memberships__name">
                    {member.name || "Anonymous"}
                  </h4>
                  <div className="latest-memberships__meta">
                    <span className="latest-memberships__time">
                      <Clock size={12} strokeWidth={2} />
                      {getTimeAgo(member.createdAt || member.joinedDate)}
                    </span>
                  </div>
                </div>

                <div className="latest-memberships__details">
                  {member.email && (
                    <p className="latest-memberships__email">
                      <Mail size={12} strokeWidth={2} />
                      {member.email}
                    </p>
                  )}

                  {member.organization && (
                    <p className="latest-memberships__org">
                      <Building2 size={12} strokeWidth={2} />
                      {member.organization}
                    </p>
                  )}
                </div>

                <div className="latest-memberships__badges">
                  {/* Membership Type Badge */}
                  <span
                    className="latest-memberships__type-badge"
                    style={{
                      backgroundColor: membershipType.bg,
                      color: membershipType.color,
                      borderColor: membershipType.color,
                    }}
                  >
                    <Shield size={10} strokeWidth={2} />
                    {membershipType.label}
                  </span>

                  {/* Status Badge */}
                  {member.status && (
                    <span
                      className={`latest-memberships__status-badge latest-memberships__status-badge--${member.status}`}
                    >
                      {member.status === "active" ? (
                        <CheckCircle size={10} strokeWidth={2} />
                      ) : (
                        <XCircle size={10} strokeWidth={2} />
                      )}
                      {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                    </span>
                  )}

                  {/* Role Badge */}
                  {member.role && (
                    <span className="latest-memberships__role-badge">
                      <Tag size={10} strokeWidth={2} />
                      {member.role}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="latest-memberships__actions">
                <button
                  className="latest-memberships__menu-btn"
                  onClick={() => handleMenuToggle(member.id)}
                  aria-label="Member options"
                >
                  <MoreVertical size={16} strokeWidth={2} />
                </button>

                {activeMenu === member.id && (
                  <div className="latest-memberships__dropdown">
                    <button className="latest-memberships__dropdown-item">
                      <User size={14} />
                      <span>View Profile</span>
                    </button>
                    <button className="latest-memberships__dropdown-item">
                      <ExternalLink size={14} />
                      <span>View Details</span>
                    </button>
                    <button className="latest-memberships__dropdown-item">
                      <Shield size={14} />
                      <span>Change Plan</span>
                    </button>
                    <button className="latest-memberships__dropdown-item latest-memberships__dropdown-item--danger">
                      <XCircle size={14} />
                      <span>Deactivate</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {memberships.length > 5 && (
        <div className="latest-memberships__footer">
          <button className="latest-memberships__footer-btn">
            <Users size={16} strokeWidth={2} />
            <span>View all {memberships.length} members</span>
            <ChevronRight size={16} strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestMemberships;