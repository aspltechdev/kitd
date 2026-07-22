// const RecentEvents = ({ events }) => {
//   return (
//     <div className="bg-white rounded-xl shadow p-5">

//       <h2 className="font-semibold mb-4">
//         Recent Events
//       </h2>

//       {events.map((event) => (
//         <div
//           key={event.id}
//           className="border-b py-3"
//         >
//           <h4 className="font-medium">
//             {event.title}
//           </h4>

//           <p className="text-sm text-gray-500">
//             {event.date}
//           </p>
//         </div>
//       ))}

//     </div>
//   );
// };

// export default RecentEvents;

import { useState } from "react";
import {
  Calendar,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  MoreVertical,
  Star,
  ExternalLink,
  Edit,
  Trash2,
  Eye,
  Tag,
  CheckCircle,
  AlertCircle,
  Timer,
  PlayCircle,
} from "lucide-react";

import "./RecentEvents.css";

const RecentEvents = ({ events }) => {
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const getInitials = (title) => {
    if (!title) return "?";
    return title
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getEventColor = (title) => {
    const colors = [
      "linear-gradient(135deg, #3b82f6, #2563eb)",
      "linear-gradient(135deg, #10b981, #059669)",
      "linear-gradient(135deg, #f59e0b, #d97706)",
      "linear-gradient(135deg, #8b5cf6, #7c3aed)",
      "linear-gradient(135deg, #ef4444, #dc2626)",
      "linear-gradient(135deg, #ec4899, #db2777)",
      "linear-gradient(135deg, #06b6d4, #0891b2)",
      "linear-gradient(135deg, #14b8a6, #0d9488)",
    ];
    
    if (!title) return colors[0];
    const index = title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  const getEventStatus = (date) => {
    if (!date) return null;
    const now = new Date();
    const eventDate = new Date(date);
    const diffInDays = Math.floor((eventDate - now) / (1000 * 60 * 60 * 24));
    
    if (diffInDays < 0) return { label: "Past", color: "#ef4444", bg: "#fef2f2", icon: AlertCircle };
    if (diffInDays === 0) return { label: "Today", color: "#10b981", bg: "#ecfdf5", icon: PlayCircle };
    if (diffInDays <= 7) return { label: "Upcoming", color: "#3b82f6", bg: "#eff6ff", icon: Timer };
    return { label: "Scheduled", color: "#8b5cf6", bg: "#f5f3ff", icon: Clock };
  };

  const formatDate = (date) => {
    if (!date) return "";
    const eventDate = new Date(date);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (eventDate.toDateString() === today.toDateString()) {
      return `Today at ${eventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    }
    if (eventDate.toDateString() === tomorrow.toDateString()) {
      return `Tomorrow at ${eventDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    }
    
    return eventDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleMenuToggle = (eventId) => {
    setActiveMenu(activeMenu === eventId ? null : eventId);
  };

  if (!events || events.length === 0) {
    return (
      <div className="recent-events">
        <div className="recent-events__header">
          <div className="recent-events__header-left">
            <div className="recent-events__header-icon">
              <Calendar size={18} strokeWidth={2} />
            </div>
            <h2 className="recent-events__title">Recent Events</h2>
          </div>
        </div>
        
        <div className="recent-events__empty">
          <div className="recent-events__empty-icon">
            <Calendar size={40} strokeWidth={1.5} />
          </div>
          <p className="recent-events__empty-text">No events yet</p>
          <p className="recent-events__empty-subtext">
            Upcoming and recent events will appear here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="recent-events">
      {/* Header */}
      <div className="recent-events__header">
        <div className="recent-events__header-left">
          <div className="recent-events__header-icon">
            <Calendar size={18} strokeWidth={2} />
          </div>
          <div className="recent-events__header-text">
            <h2 className="recent-events__title">Recent Events</h2>
            <span className="recent-events__count">
              {events.length} {events.length === 1 ? "event" : "events"}
            </span>
          </div>
        </div>
        
        <button className="recent-events__view-all">
          <span>View All</span>
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>

      {/* Events List */}
      <div className="recent-events__list">
        {events.slice(0, 5).map((event, index) => {
          const status = getEventStatus(event.date || event.eventDate);
          
          return (
            <div
              key={event.id || event._id || index}
              className={`recent-events__item ${
                hoveredEvent === event.id ? "recent-events__item--hovered" : ""
              } ${index === 0 ? "recent-events__item--featured" : ""}`}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => {
                setHoveredEvent(null);
                setActiveMenu(null);
              }}
            >
              {/* Event Icon */}
              <div
                className="recent-events__icon"
                style={{ background: getEventColor(event.title) }}
              >
                <span className="recent-events__icon-text">
                  {getInitials(event.title)}
                </span>
                {index === 0 && (
                  <span className="recent-events__featured-badge">
                    <Star size={10} fill="currentColor" />
                  </span>
                )}
              </div>

              {/* Event Content */}
              <div className="recent-events__content">
                <div className="recent-events__content-header">
                  <h4 className="recent-events__name">
                    {event.title || "Untitled Event"}
                  </h4>
                  {status && (
                    <span
                      className="recent-events__status"
                      style={{
                        backgroundColor: status.bg,
                        color: status.color,
                        borderColor: status.color,
                      }}
                    >
                      {status.icon && <status.icon size={10} strokeWidth={2} />}
                      {status.label}
                    </span>
                  )}
                </div>

                <div className="recent-events__details">
                  {event.date && (
                    <p className="recent-events__date">
                      <Clock size={12} strokeWidth={2} />
                      {formatDate(event.date || event.eventDate)}
                    </p>
                  )}

                  {event.location && (
                    <p className="recent-events__location">
                      <MapPin size={12} strokeWidth={2} />
                      {event.location}
                    </p>
                  )}

                  {event.attendees !== undefined && (
                    <p className="recent-events__attendees">
                      <Users size={12} strokeWidth={2} />
                      {event.attendees} {event.attendees === 1 ? "attendee" : "attendees"}
                    </p>
                  )}
                </div>

                {event.category && (
                  <div className="recent-events__tags">
                    <span className="recent-events__tag">
                      <Tag size={10} strokeWidth={2} />
                      {event.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="recent-events__actions">
                <button
                  className="recent-events__menu-btn"
                  onClick={() => handleMenuToggle(event.id)}
                  aria-label="Event options"
                >
                  <MoreVertical size={16} strokeWidth={2} />
                </button>

                {activeMenu === event.id && (
                  <div className="recent-events__dropdown">
                    <button className="recent-events__dropdown-item">
                      <Eye size={14} />
                      <span>View Details</span>
                    </button>
                    <button className="recent-events__dropdown-item">
                      <Edit size={14} />
                      <span>Edit Event</span>
                    </button>
                    <button className="recent-events__dropdown-item">
                      <ExternalLink size={14} />
                      <span>Open Page</span>
                    </button>
                    <button className="recent-events__dropdown-item recent-events__dropdown-item--danger">
                      <Trash2 size={14} />
                      <span>Delete</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {events.length > 5 && (
        <div className="recent-events__footer">
          <button className="recent-events__footer-btn">
            <Calendar size={16} strokeWidth={2} />
            <span>View all {events.length} events</span>
            <ChevronRight size={16} strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentEvents;