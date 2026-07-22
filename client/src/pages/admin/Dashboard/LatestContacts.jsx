// const LatestContacts = ({ contacts }) => {
//   return (
//     <div className="bg-white rounded-xl shadow p-5">

//       <h2 className="font-semibold mb-4">
//         Latest Contacts
//       </h2>

//       {contacts.map((contact) => (
//         <div
//           key={contact.id}
//           className="border-b py-3"
//         >
//           <h4>{contact.name}</h4>

//           <p className="text-sm text-gray-500">
//             {contact.email}
//           </p>
//         </div>
//       ))}

//     </div>
//   );
// };

// export default LatestContacts;


import { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  Star,
  MoreVertical,
  ChevronRight,
  User,
  CheckCircle,
  XCircle,
  ExternalLink,
} from "lucide-react";

import "./LatestContacts.css";

const LatestContacts = ({ contacts }) => {
  const [hoveredContact, setHoveredContact] = useState(null);
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
      "linear-gradient(135deg, #3b82f6, #2563eb)",
      "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      "linear-gradient(135deg, #10b981, #059669)",
      "linear-gradient(135deg, #f59e0b, #d97706)",
      "linear-gradient(135deg, #ef4444, #dc2626)",
      "linear-gradient(135deg, #06b6d4, #0891b2)",
      "linear-gradient(135deg, #ec4899, #db2777)",
      "linear-gradient(135deg, #14b8a6, #0d9488)",
    ];
    
    if (!name) return colors[0];
    const index = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  const getTimeAgo = (date) => {
    if (!date) return "";
    const now = new Date();
    const contactDate = new Date(date);
    const diffInHours = Math.floor((now - contactDate) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return "Yesterday";
    return contactDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const handleMenuToggle = (contactId) => {
    setActiveMenu(activeMenu === contactId ? null : contactId);
  };

  if (!contacts || contacts.length === 0) {
    return (
      <div className="latest-contacts">
        <div className="latest-contacts__header">
          <div className="latest-contacts__header-left">
            <div className="latest-contacts__header-icon">
              <Mail size={18} strokeWidth={2} />
            </div>
            <h2 className="latest-contacts__title">Latest Contacts</h2>
          </div>
        </div>
        
        <div className="latest-contacts__empty">
          <div className="latest-contacts__empty-icon">
            <Mail size={40} strokeWidth={1.5} />
          </div>
          <p className="latest-contacts__empty-text">No contacts yet</p>
          <p className="latest-contacts__empty-subtext">
            New contact submissions will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="latest-contacts">
      {/* Header */}
      <div className="latest-contacts__header">
        <div className="latest-contacts__header-left">
          <div className="latest-contacts__header-icon">
            <Mail size={18} strokeWidth={2} />
          </div>
          <div className="latest-contacts__header-text">
            <h2 className="latest-contacts__title">Latest Contacts</h2>
            <span className="latest-contacts__count">
              {contacts.length} {contacts.length === 1 ? "message" : "messages"}
            </span>
          </div>
        </div>
        
        <button className="latest-contacts__view-all">
          <span>View All</span>
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>

      {/* Contacts List */}
      <div className="latest-contacts__list">
        {contacts.slice(0, 5).map((contact, index) => (
          <div
            key={contact.id || contact._id || index}
            className={`latest-contacts__item ${
              hoveredContact === contact.id ? "latest-contacts__item--hovered" : ""
            } ${index === 0 ? "latest-contacts__item--new" : ""}`}
            onMouseEnter={() => setHoveredContact(contact.id)}
            onMouseLeave={() => {
              setHoveredContact(null);
              setActiveMenu(null);
            }}
          >
            {/* Avatar */}
            <div
              className="latest-contacts__avatar"
              style={{ background: getAvatarColor(contact.name) }}
            >
              <span className="latest-contacts__avatar-text">
                {getInitials(contact.name)}
              </span>
              {index === 0 && (
                <span className="latest-contacts__new-badge">
                  <Star size={10} fill="currentColor" />
                </span>
              )}
            </div>

            {/* Content */}
            <div className="latest-contacts__content">
              <div className="latest-contacts__content-header">
                <h4 className="latest-contacts__name">{contact.name || "Anonymous"}</h4>
                <div className="latest-contacts__meta">
                  <span className="latest-contacts__time">
                    <Clock size={12} strokeWidth={2} />
                    {getTimeAgo(contact.createdAt)}
                  </span>
                  {contact.status && (
                    <span className={`latest-contacts__status latest-contacts__status--${contact.status}`}>
                      {contact.status === "read" ? (
                        <CheckCircle size={12} strokeWidth={2} />
                      ) : (
                        <XCircle size={12} strokeWidth={2} />
                      )}
                    </span>
                  )}
                </div>
              </div>

              <p className="latest-contacts__email">
                <Mail size={12} strokeWidth={2} />
                {contact.email || "No email provided"}
              </p>

              {contact.phone && (
                <p className="latest-contacts__phone">
                  <Phone size={12} strokeWidth={2} />
                  {contact.phone}
                </p>
              )}

              {contact.subject && (
                <p className="latest-contacts__subject">
                  <MessageSquare size={12} strokeWidth={2} />
                  {contact.subject}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="latest-contacts__actions">
              <button
                className="latest-contacts__menu-btn"
                onClick={() => handleMenuToggle(contact.id)}
                aria-label="Contact options"
              >
                <MoreVertical size={16} strokeWidth={2} />
              </button>

              {activeMenu === contact.id && (
                <div className="latest-contacts__dropdown">
                  <button className="latest-contacts__dropdown-item">
                    <Mail size={14} />
                    <span>Reply</span>
                  </button>
                  <button className="latest-contacts__dropdown-item">
                    <ExternalLink size={14} />
                    <span>View Details</span>
                  </button>
                  <button className="latest-contacts__dropdown-item latest-contacts__dropdown-item--danger">
                    <XCircle size={14} />
                    <span>Mark as Spam</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      {contacts.length > 5 && (
        <div className="latest-contacts__footer">
          <button className="latest-contacts__footer-btn">
            <User size={16} strokeWidth={2} />
            <span>View all {contacts.length} contacts</span>
            <ChevronRight size={16} strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
};

export default LatestContacts;