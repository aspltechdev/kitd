// import { useEffect, useState, useCallback, useRef } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import {
//   Plus,
//   Search,
//   Pencil,
//   Trash2,
//   CheckCircle,
//   XCircle,
//   Calendar,
//   Filter,
//   RefreshCw,
//   MapPin,
//   Clock,
//   CalendarPlus,
//   Image as ImageIcon,
// } from "lucide-react";

// import {
//   getAllEvents,
//   deleteEvent,
//   toggleEventStatus,
// } from "../../../api/events.api";

// import "./Events.css";

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [deletingId, setDeletingId] = useState(null);
//   const [togglingId, setTogglingId] = useState(null);
//   const [imageErrors, setImageErrors] = useState(new Set());

//   const searchTimeoutRef = useRef(null);
//   const [searchInput, setSearchInput] = useState("");

//   const fetchEvents = useCallback(async () => {
//     try {
//       setLoading(true);

//       const res = await getAllEvents({ search });

//       const data =
//         res.data?.data?.events ||
//         res.data?.data ||
//         res.data?.events ||
//         [];

//       setEvents(Array.isArray(data) ? data : []);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Failed to fetch events."
//       );
//       setEvents([]);
//     } finally {
//       setLoading(false);
//     }
//   }, [search]);

//   useEffect(() => {
//     fetchEvents();
//   }, [fetchEvents]);

//   // Debounced search
//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setSearchInput(value);

//     if (searchTimeoutRef.current) {
//       clearTimeout(searchTimeoutRef.current);
//     }

//     searchTimeoutRef.current = setTimeout(() => {
//       setSearch(value);
//     }, 300);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this event? This action cannot be undone.")) {
//       return;
//     }

//     try {
//       setDeletingId(id);
//       await deleteEvent(id);
//       toast.success("Event deleted successfully.");
//       fetchEvents();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Failed to delete event."
//       );
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   const handleStatus = async (id) => {
//     try {
//       setTogglingId(id);
//       await toggleEventStatus(id);
//       toast.success("Event status updated successfully.");
//       fetchEvents();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Failed to update status."
//       );
//     } finally {
//       setTogglingId(null);
//     }
//   };

//   const handleImageError = (eventId) => {
//     setImageErrors((prev) => new Set([...prev, eventId]));
//   };

//   const getImageUrl = (event) => {
//     if (!event.banner || imageErrors.has(event.id)) return null;
//     return `${import.meta.env.VITE_API_BASE_URL?.replace("/api", "")}/uploads/events/${event.banner}`;
//   };

//   const formatDate = (dateStr) => {
//     if (!dateStr) return "—";
//     const date = new Date(dateStr);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const formatTime = (dateStr) => {
//     if (!dateStr) return "";
//     const date = new Date(dateStr);
//     return date.toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   const getEventTypeColor = (type) => {
//     const types = {
//       workshop: { color: "#8b5cf6", bg: "#f5f3ff" },
//       seminar: { color: "#3b82f6", bg: "#eff6ff" },
//       conference: { color: "#f59e0b", bg: "#fffbeb" },
//       webinar: { color: "#10b981", bg: "#ecfdf5" },
//       meetup: { color: "#ec4899", bg: "#fdf2f8" },
//       social: { color: "#06b6d4", bg: "#ecfeff" },
//       competition: { color: "#ef4444", bg: "#fef2f2" },
//       cultural: { color: "#14b8a6", bg: "#f0fdfa" },
//     };
//     return types[type?.toLowerCase()] || { color: "#64748b", bg: "#f1f5f9" };
//   };

//   const isUpcoming = (dateStr) => {
//     if (!dateStr) return false;
//     return new Date(dateStr) > new Date();
//   };

//   const stats = {
//     total: events?.length || 0,
//     active: events?.filter((e) => e.isActive)?.length || 0,
//     upcoming: events?.filter((e) => isUpcoming(e.startDate || e.date))?.length || 0,
//   };

//   return (
//     <div className="events-management">
//       {/* Page Header */}
//       <div className="events-management__header">
//         <div className="events-management__header-content">
//           <div className="events-management__header-left">
//             <div className="events-management__header-icon">
//               <Calendar size={24} strokeWidth={2} />
//             </div>
//             <div className="events-management__header-text">
//               <h1 className="events-management__title">Events Management</h1>
//               <p className="events-management__subtitle">
//                 Create and manage events, workshops, and conferences
//               </p>
//             </div>
//           </div>

//           <div className="events-management__header-actions">
//             <button
//               onClick={fetchEvents}
//               className="events-management__refresh-btn"
//               disabled={loading}
//               title="Refresh data"
//             >
//               <RefreshCw
//                 size={18}
//                 strokeWidth={2}
//                 className={`events-management__refresh-icon ${
//                   loading ? "events-management__refresh-icon--spinning" : ""
//                 }`}
//               />
//             </button>

//             <Link to="/admin/events/create" className="events-management__add-btn">
//               <Plus size={18} strokeWidth={2} />
//               <span>Add Event</span>
//             </Link>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         <div className="events-management__stats">
//           <div className="events-management__stat-item">
//             <span className="events-management__stat-value">{stats.total}</span>
//             <span className="events-management__stat-label">Total Events</span>
//           </div>
//           <div className="events-management__stat-divider" />
//           <div className="events-management__stat-item events-management__stat-item--active">
//             <span className="events-management__stat-value">{stats.active}</span>
//             <span className="events-management__stat-label">Active</span>
//           </div>
//           <div className="events-management__stat-divider" />
//           <div className="events-management__stat-item events-management__stat-item--upcoming">
//             <span className="events-management__stat-value">{stats.upcoming}</span>
//             <span className="events-management__stat-label">Upcoming</span>
//           </div>
//         </div>
//       </div>

//       {/* Search & Filters */}
//       <div className="events-management__toolbar">
//         <div className="events-management__search">
//           <Search className="events-management__search-icon" size={18} strokeWidth={2} />
//           <input
//             type="text"
//             placeholder="Search by event title, type, or venue..."
//             value={searchInput}
//             onChange={handleSearchChange}
//             className="events-management__search-input"
//           />
//           {searchInput && (
//             <button
//               onClick={() => {
//                 setSearchInput("");
//                 setSearch("");
//               }}
//               className="events-management__search-clear"
//               aria-label="Clear search"
//             >
//               <XCircle size={16} strokeWidth={2} />
//             </button>
//           )}
//         </div>

//         <button className="events-management__filter-btn">
//           <Filter size={16} strokeWidth={2} />
//           <span>Filters</span>
//         </button>
//       </div>

//       {/* Table */}
//       <div className="events-management__table-container">
//         <table className="events-management__table">
//           <thead className="events-management__table-head">
//             <tr>
//               <th className="events-management__th events-management__th--banner">Banner</th>
//               <th className="events-management__th events-management__th--event">Event</th>
//               <th className="events-management__th events-management__th--type">Type</th>
//               <th className="events-management__th events-management__th--date">Date & Time</th>
//               <th className="events-management__th events-management__th--venue">Venue</th>
//               <th className="events-management__th events-management__th--status">Status</th>
//               <th className="events-management__th events-management__th--actions">Actions</th>
//             </tr>
//           </thead>

//           <tbody className="events-management__table-body">
//             {/* Loading State */}
//             {loading && (
//               <tr>
//                 <td colSpan={7} className="events-management__table-empty">
//                   <div className="events-management__loading">
//                     <div className="events-management__loading-spinner" />
//                     <p className="events-management__loading-text">Loading events...</p>
//                   </div>
//                 </td>
//               </tr>
//             )}

//             {/* Empty State */}
//             {!loading && events?.length === 0 && (
//               <tr>
//                 <td colSpan={7} className="events-management__table-empty">
//                   <div className="events-management__empty">
//                     <div className="events-management__empty-icon">
//                       <CalendarPlus size={48} strokeWidth={1.5} />
//                     </div>
//                     <h3 className="events-management__empty-title">No events found</h3>
//                     <p className="events-management__empty-text">
//                       {search
//                         ? `No results found for "${search}". Try adjusting your search.`
//                         : "Get started by creating your first event."}
//                     </p>
//                     {!search && (
//                       <Link to="/admin/events/create" className="events-management__empty-btn">
//                         <Plus size={16} strokeWidth={2} />
//                         <span>Create First Event</span>
//                       </Link>
//                     )}
//                   </div>
//                 </td>
//               </tr>
//             )}

//             {/* Table Rows */}
//             {!loading &&
//               (events || []).map((event) => {
//                 const typeStyle = getEventTypeColor(event.eventType);
//                 const imageUrl = getImageUrl(event);
//                 const isDeleting = deletingId === event.id;
//                 const isToggling = togglingId === event.id;
//                 const upcoming = isUpcoming(event.startDate || event.date);

//                 return (
//                   <tr
//                     key={event.id || event._id}
//                     className={`events-management__row ${
//                       isDeleting ? "events-management__row--deleting" : ""
//                     } ${upcoming ? "events-management__row--upcoming" : ""}`}
//                   >
//                     {/* Banner */}
//                     <td className="events-management__td events-management__td--banner">
//                       {imageUrl ? (
//                         <div className="events-management__banner-wrapper">
//                           <img
//                             src={imageUrl}
//                             alt={event.title}
//                             className="events-management__banner"
//                             onError={() => handleImageError(event.id)}
//                             loading="lazy"
//                           />
//                           {upcoming && (
//                             <span className="events-management__upcoming-badge">
//                               Upcoming
//                             </span>
//                           )}
//                         </div>
//                       ) : (
//                         <div className="events-management__banner-placeholder">
//                           <ImageIcon size={24} strokeWidth={1.5} />
//                         </div>
//                       )}
//                     </td>

//                     {/* Event Title */}
//                     <td className="events-management__td events-management__td--event">
//                       <span className="events-management__event-name">
//                         {event.title}
//                       </span>
//                     </td>

//                     {/* Event Type */}
//                     <td className="events-management__td events-management__td--type">
//                       <span
//                         className="events-management__type-badge"
//                         style={{
//                           backgroundColor: typeStyle.bg,
//                           color: typeStyle.color,
//                           borderColor: `${typeStyle.color}40`,
//                         }}
//                       >
//                         {event.eventType || "General"}
//                       </span>
//                     </td>

//                     {/* Date & Time */}
//                     <td className="events-management__td events-management__td--date">
//                       <div className="events-management__date-info">
//                         <span className="events-management__date">
//                           <Calendar size={12} strokeWidth={2} />
//                           {formatDate(event.startDate || event.date)}
//                         </span>
//                         {(event.startDate || event.date) && (
//                           <span className="events-management__time">
//                             <Clock size={12} strokeWidth={2} />
//                             {formatTime(event.startDate || event.date)}
//                           </span>
//                         )}
//                       </div>
//                     </td>

//                     {/* Venue */}
//                     <td className="events-management__td events-management__td--venue">
//                       <span className="events-management__venue">
//                         <MapPin size={12} strokeWidth={2} />
//                         {event.venue || "—"}
//                       </span>
//                     </td>

//                     {/* Status */}
//                     <td className="events-management__td events-management__td--status">
//                       <button
//                         onClick={() => handleStatus(event.id)}
//                         disabled={isToggling}
//                         className={`events-management__status-btn ${
//                           event.isActive
//                             ? "events-management__status-btn--active"
//                             : "events-management__status-btn--inactive"
//                         } ${isToggling ? "events-management__status-btn--loading" : ""}`}
//                         title={`Click to ${event.isActive ? "deactivate" : "activate"}`}
//                       >
//                         {event.isActive ? (
//                           <>
//                             <CheckCircle size={14} strokeWidth={2} />
//                             <span>Active</span>
//                           </>
//                         ) : (
//                           <>
//                             <XCircle size={14} strokeWidth={2} />
//                             <span>Inactive</span>
//                           </>
//                         )}
//                       </button>
//                     </td>

//                     {/* Actions */}
//                     <td className="events-management__td events-management__td--actions">
//                       <div className="events-management__actions">
//                         <Link
//                           to={`/admin/events/edit/${event.id}`}
//                           className="events-management__action-btn events-management__action-btn--edit"
//                           title="Edit event"
//                         >
//                           <Pencil size={16} strokeWidth={2} />
//                         </Link>

//                         <button
//                           onClick={() => handleDelete(event.id)}
//                           disabled={isDeleting}
//                           className="events-management__action-btn events-management__action-btn--delete"
//                           title="Delete event"
//                         >
//                           <Trash2 size={16} strokeWidth={2} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>
//       </div>

//       {/* Table Footer */}
//       {!loading && events?.length > 0 && (
//         <div className="events-management__table-footer">
//           <p className="events-management__table-count">
//             Showing <strong>{events.length}</strong> {events.length === 1 ? "event" : "events"}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;


// src/pages/admin/Events/Events.jsx

import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  CheckCircle,
  XCircle,
  Calendar,
  Filter,
  RefreshCw,
  MapPin,
  Clock,
  CalendarPlus,
  Image as ImageIcon,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
  X,
  AlertCircle,
  Eye,
  EyeOff,
  Users,
  Ticket,
  DollarSign,
} from "lucide-react";

import {
  getAllEvents,
  deleteEvent,
  toggleEventStatus,
} from "../../../api/events.api";

import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [imageErrors, setImageErrors] = useState(new Set());

  const searchTimeoutRef = useRef(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllEvents({ search });
      const data = res.data?.data?.events || res.data?.data || res.data?.events || [];
      setEvents(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch events.");
      setEvents([]);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  // Debounced search
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      setSearch(value);
    }, 300);
  };

  const handleDelete = async () => {
    if (!selectedEvent) return;
    try {
      await deleteEvent(selectedEvent.id);
      toast.success("Event deleted successfully.");
      setShowDeleteModal(false);
      setSelectedEvent(null);
      fetchEvents();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete event.");
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleEventStatus(id);
      toast.success("Event status updated successfully.");
      fetchEvents();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status.");
    }
  };

  const handleImageError = (eventId) => {
    setImageErrors((prev) => new Set([...prev, eventId]));
  };

  const getImageUrl = (event) => {
    if (!event.banner || imageErrors.has(event.id)) return null;
    return `${IMAGE_BASE_URL}/uploads/events/${event.banner}`;
  };

  const handleDeleteClick = (event) => {
    setSelectedEvent(event);
    setShowDeleteModal(true);
  };

  // Filter events
  const filteredEvents = events.filter(event => {
    const statusMatch = filterStatus === "all" ? true : (filterStatus === "active" ? event.isActive : !event.isActive);
    const typeMatch = filterType === "all" ? true : event.eventType === filterType;
    return statusMatch && typeMatch;
  });

  // Get unique event types for filter
  const eventTypes = ["all", ...new Set(events.map(e => e.eventType).filter(Boolean))];

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getEventTypeColor = (type) => {
    const types = {
      WORKSHOP: { color: "#8b5cf6", bg: "#f5f3ff", border: "#8b5cf630" },
      PERFORMANCE: { color: "#3b82f6", bg: "#eff6ff", border: "#3b82f630" },
      FESTIVAL: { color: "#f59e0b", bg: "#fffbeb", border: "#f59e0b30" },
      SEMINAR: { color: "#10b981", bg: "#ecfdf5", border: "#10b98130" },
      COMPETITION: { color: "#ef4444", bg: "#fef2f2", border: "#ef444430" },
      CONFERENCE: { color: "#06b6d4", bg: "#ecfeff", border: "#06b6d430" },
      OTHER: { color: "#64748b", bg: "#f1f5f9", border: "#64748b30" },
    };
    return types[type] || types.OTHER;
  };

  const getStatusBadge = (isActive) => {
    return isActive ? (
      <span className="badge badge--active">
        <CheckCircle size={14} />
        Active
      </span>
    ) : (
      <span className="badge badge--inactive">
        <XCircle size={14} />
        Inactive
      </span>
    );
  };

  const isUpcoming = (dateStr) => {
    if (!dateStr) return false;
    return new Date(dateStr) > new Date();
  };

  const stats = {
    total: events?.length || 0,
    active: events?.filter((e) => e.isActive)?.length || 0,
    upcoming: events?.filter((e) => isUpcoming(e.startDate || e.eventDate))?.length || 0,
  };

  return (
    <div className="events-page">
      <div className="events-page__container">

        {/* ============================================
           HEADER
           ============================================ */}
        <div className="events-page__header">
          <div className="events-page__header-top">
            <div className="events-page__header-left">
              <div className="events-page__header-icon">
                <Calendar size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="events-page__title">Events Management</h1>
                <p className="events-page__subtitle">
                  Create and manage events, workshops, and conferences
                </p>
              </div>
            </div>

            <div className="events-page__header-right">
              <button
                onClick={fetchEvents}
                className="events-page__refresh-btn"
                disabled={loading}
                title="Refresh data"
              >
                <RefreshCw
                  size={18}
                  strokeWidth={2}
                  className={`events-page__refresh-icon ${
                    loading ? "events-page__refresh-icon--spinning" : ""
                  }`}
                />
              </button>

              <Link to="/admin/events/create" className="events-page__add-btn">
                <Plus size={18} strokeWidth={2} />
                <span>Add Event</span>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="events-page__stats">
            <div className="events-page__stat-item">
              <span className="events-page__stat-value">{stats.total}</span>
              <span className="events-page__stat-label">Total Events</span>
            </div>
            <div className="events-page__stat-divider" />
            <div className="events-page__stat-item events-page__stat-item--active">
              <span className="events-page__stat-value">{stats.active}</span>
              <span className="events-page__stat-label">Active</span>
            </div>
            <div className="events-page__stat-divider" />
            <div className="events-page__stat-item events-page__stat-item--upcoming">
              <span className="events-page__stat-value">{stats.upcoming}</span>
              <span className="events-page__stat-label">Upcoming</span>
            </div>
          </div>
        </div>

        {/* ============================================
           TOOLBAR
           ============================================ */}
        <div className="events-page__toolbar">
          <div className="events-page__toolbar-left">
            {/* Search */}
            <div className="events-page__search">
              <Search className="events-page__search-icon" size={18} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search events..."
                value={searchInput}
                onChange={handleSearchChange}
                className="events-page__search-input"
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                  className="events-page__search-clear"
                  aria-label="Clear search"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="events-page__filter">
              <Filter size={16} strokeWidth={2} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="events-page__filter-select"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Event Type Filter */}
            <div className="events-page__filter">
              <Calendar size={16} strokeWidth={2} />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="events-page__filter-select"
              >
                <option value="all">All Types</option>
                {eventTypes.filter(t => t !== "all").map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* View Toggle */}
          <div className="events-page__view-toggle">
            <button
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              title="Grid View"
            >
              <Grid size={18} />
            </button>
            <button
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              title="List View"
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* ============================================
           CONTENT
           ============================================ */}
        {loading ? (
          <div className="events-page__loading">
            <div className="spinner"></div>
            <p>Loading events...</p>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="events-page__empty">
            <Calendar size={48} className="empty-icon" />
            <h3>No events found</h3>
            <p>
              {search
                ? `No results found for "${search}". Try adjusting your search.`
                : "Get started by creating your first event."}
            </p>
            {!search && (
              <Link to="/admin/events/create" className="events-page__empty-btn">
                <Plus size={16} strokeWidth={2} />
                <span>Create First Event</span>
              </Link>
            )}
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="events-page__grid">
            {currentItems.map((event) => {
              const imageUrl = getImageUrl(event);
              const typeStyle = getEventTypeColor(event.eventType);
              const upcoming = isUpcoming(event.startDate || event.eventDate);

              return (
                <div key={event.id} className="event-card">
                  <div className="event-card__media">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={event.title}
                        className="event-card__image"
                        onError={() => handleImageError(event.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="event-card__image-placeholder">
                        <ImageIcon size={32} strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="event-card__status-badge">
                      {getStatusBadge(event.isActive)}
                    </div>
                    {upcoming && (
                      <div className="event-card__upcoming-badge">Upcoming</div>
                    )}
                  </div>

                  <div className="event-card__content">
                    <span
                      className="event-card__type"
                      style={{
                        backgroundColor: typeStyle.bg,
                        color: typeStyle.color,
                      }}
                    >
                      {event.eventType || "General"}
                    </span>
                    
                    <h3 className="event-card__title">{event.title}</h3>
                    
                    <div className="event-card__meta">
                      {(event.startDate || event.eventDate) && (
                        <span className="event-card__meta-item">
                          <Calendar size={14} />
                          {formatDate(event.startDate || event.eventDate)}
                        </span>
                      )}
                      {event.venue && (
                        <span className="event-card__meta-item">
                          <MapPin size={14} />
                          {event.venue}
                        </span>
                      )}
                    </div>

                    <div className="event-card__footer">
                      <span className="event-card__order">
                        Order: {event.displayOrder || 1}
                      </span>
                      <div className="event-card__actions">
                        <Link
                          to={`/admin/events/edit/${event.id}`}
                          className="event-card__action event-card__action--edit"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(event)}
                          className="event-card__action event-card__action--delete"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="events-page__table-wrapper">
            <table className="events-page__table">
              <thead>
                <tr>
                  <th>Banner</th>
                  <th>Event</th>
                  <th>Type</th>
                  <th>Date & Time</th>
                  <th>Venue</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((event) => {
                  const imageUrl = getImageUrl(event);
                  const typeStyle = getEventTypeColor(event.eventType);
                  const upcoming = isUpcoming(event.startDate || event.eventDate);

                  return (
                    <tr key={event.id}>
                      <td>
                        <div className="table-banner">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={event.title}
                              className="table-banner__image"
                              onError={() => handleImageError(event.id)}
                              loading="lazy"
                            />
                          ) : (
                            <div className="table-banner__placeholder">
                              <ImageIcon size={20} strokeWidth={1.5} />
                            </div>
                          )}
                        </div>
                      </td>
                      <td>
                        <span className="table-title">{event.title}</span>
                      </td>
                      <td>
                        <span
                          className="table-type"
                          style={{
                            backgroundColor: typeStyle.bg,
                            color: typeStyle.color,
                          }}
                        >
                          {event.eventType || "General"}
                        </span>
                      </td>
                      <td>
                        <div className="table-datetime">
                          <span className="table-date">
                            <Calendar size={12} />
                            {formatDate(event.startDate || event.eventDate)}
                          </span>
                          {(event.startDate || event.eventDate) && (
                            <span className="table-time">
                              <Clock size={12} />
                              {formatTime(event.startDate || event.eventDate)}
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <span className="table-venue">
                          <MapPin size={12} />
                          {event.venue || "—"}
                        </span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleStatus(event.id)}
                          className="status-toggle-btn"
                        >
                          {getStatusBadge(event.isActive)}
                        </button>
                      </td>
                      <td>
                        <div className="table-actions">
                          <Link
                            to={`/admin/events/edit/${event.id}`}
                            className="table-action table-action--edit"
                            title="Edit"
                          >
                            <Pencil size={16} />
                          </Link>
                          <button
                            onClick={() => handleDeleteClick(event)}
                            className="table-action table-action--delete"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* ============================================
           PAGINATION
           ============================================ */}
        {!loading && totalPages > 1 && (
          <div className="events-page__pagination">
            <button
              className="pagination-btn"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={18} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                className={`pagination-btn ${currentPage === number ? "active" : ""}`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            ))}
            
            <button
              className="pagination-btn"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* ============================================
           TABLE FOOTER
           ============================================ */}
        {!loading && filteredEvents.length > 0 && (
          <div className="events-page__footer">
            <p className="events-page__count">
              Showing <strong>{filteredEvents.length}</strong> {filteredEvents.length === 1 ? "event" : "events"}
            </p>
          </div>
        )}

        {/* ============================================
           DELETE MODAL
           ============================================ */}
        {showDeleteModal && (
          <div className="modal-overlay" onClick={() => setShowDeleteModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal__header">
                <AlertCircle size={24} className="modal__icon" />
                <h2>Delete Event</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete <strong>"{selectedEvent?.title}"</strong>?
                </p>
                <p className="modal__warning">This action cannot be undone.</p>
              </div>
              <div className="modal__footer">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="modal-btn modal-btn--cancel"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="modal-btn modal-btn--delete"
                >
                  <Trash2 size={16} />
                  Delete Event
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;