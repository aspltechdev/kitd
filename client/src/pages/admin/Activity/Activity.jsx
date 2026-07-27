

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
//   MapPin,
//   Image,
//   AlertCircle,
//   RefreshCw,
//   ChevronLeft,
//   ChevronRight,
//   Grid,
//   List,
//   Filter,
//   ChevronDown,
//   Eye,
//   EyeOff,
// } from "lucide-react";

// import {
//   getAllActivities,
//   deleteActivity,
//   toggleActivityStatus,
// } from "../../../api/activity.api";

// import "./Activity.css";

// const Activity = () => {
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [searchInput, setSearchInput] = useState("");
//   const [viewMode, setViewMode] = useState("grid");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(9);
//   const [selectedActivity, setSelectedActivity] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [imageErrors, setImageErrors] = useState(new Set());

//   const searchTimeoutRef = useRef(null);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   const fetchActivities = useCallback(async () => {
//     try {
//       setLoading(true);
//       const res = await getAllActivities({ search });
//       console.log("API Response:", res.data);
      
//       const activityData = res.data?.data?.activities || res.data?.data || res.data?.activities || [];
//       console.log("Activity Data:", activityData);
      
//       setActivities(Array.isArray(activityData) ? activityData : []);
//     } catch (error) {
//       console.error("Fetch error:", error);
//       toast.error(error.response?.data?.message || "Failed to fetch activities.");
//       setActivities([]);
//     } finally {
//       setLoading(false);
//     }
//   }, [search]);

//   useEffect(() => {
//     fetchActivities();
//   }, [fetchActivities]);

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

//   const handleDelete = async () => {
//     if (!selectedActivity) return;
//     try {
//       await deleteActivity(selectedActivity.id);
//       toast.success("Activity deleted successfully.");
//       setShowDeleteModal(false);
//       setSelectedActivity(null);
//       fetchActivities();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to delete activity.");
//     }
//   };

//   const handleStatus = async (id) => {
//     try {
//       await toggleActivityStatus(id);
//       toast.success("Status updated successfully.");
//       fetchActivities();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to update status.");
//     }
//   };

//   const handleImageError = (activityId) => {
//     setImageErrors((prev) => new Set([...prev, activityId]));
//   };

//   const getImageUrl = (activity) => {
//     if (!activity || !activity.image) return null;
//     if (imageErrors.has(activity.id)) return null;
    
//     // If image already has full URL, return as is
//     if (activity.image.startsWith('http')) return activity.image;
    
//     // Construct the full URL
//     const url = `${IMAGE_BASE_URL}/uploads/activities/${activity.image}`;
//     console.log("Image URL:", url); // Debug log
//     return url;
//   };

//   const handleDeleteClick = (activity) => {
//     setSelectedActivity(activity);
//     setShowDeleteModal(true);
//   };

//   // Filter by status
//   const filteredActivities = filterStatus === "all" 
//     ? activities 
//     : activities.filter(a => 
//         filterStatus === "active" ? a.isActive : !a.isActive
//       );

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredActivities.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const getStatusBadge = (isActive) => {
//     return isActive ? (
//       <span className="badge badge--active">
//         <CheckCircle size={14} />
//         Active
//       </span>
//     ) : (
//       <span className="badge badge--inactive">
//         <XCircle size={14} />
//         Inactive
//       </span>
//     );
//   };

//   const stats = {
//     total: activities?.length || 0,
//     active: activities?.filter((a) => a.isActive)?.length || 0,
//     inactive: activities?.filter((a) => !a.isActive)?.length || 0,
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "—";
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//     });
//   };

//   // Debug: Log current items
//   console.log("Current Items:", currentItems);
//   console.log("View Mode:", viewMode);

//   return (
//     <div className="activity-page">
//       <div className="activity-page__container">

//         {/* ============================================
//            HEADER
//            ============================================ */}
//         <div className="activity-page__header">
//           <div className="activity-page__header-top">
//             <div className="activity-page__header-left">
//               <div className="activity-page__header-icon">
//                 <Calendar size={24} strokeWidth={2} />
//               </div>
//               <div>
//                 <h1 className="activity-page__title">Activity Management</h1>
//                 <p className="activity-page__subtitle">
//                   Manage website activities, workshops, and events
//                 </p>
//               </div>
//             </div>

//             <div className="activity-page__header-right">
//               <button
//                 onClick={fetchActivities}
//                 className="activity-page__refresh-btn"
//                 disabled={loading}
//                 title="Refresh data"
//               >
//                 <RefreshCw
//                   size={18}
//                   strokeWidth={2}
//                   className={`activity-page__refresh-icon ${
//                     loading ? "activity-page__refresh-icon--spinning" : ""
//                   }`}
//                 />
//               </button>

//               <Link to="/admin/activities/create" className="activity-page__add-btn">
//                 <Plus size={18} strokeWidth={2} />
//                 <span>Add Activity</span>
//               </Link>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="activity-page__stats">
//             <div className="activity-page__stat-item">
//               <span className="activity-page__stat-value">{stats.total}</span>
//               <span className="activity-page__stat-label">Total Activities</span>
//             </div>
//             <div className="activity-page__stat-divider" />
//             <div className="activity-page__stat-item activity-page__stat-item--active">
//               <span className="activity-page__stat-value">{stats.active}</span>
//               <span className="activity-page__stat-label">Active</span>
//             </div>
//             <div className="activity-page__stat-divider" />
//             <div className="activity-page__stat-item activity-page__stat-item--inactive">
//               <span className="activity-page__stat-value">{stats.inactive}</span>
//               <span className="activity-page__stat-label">Inactive</span>
//             </div>
//           </div>
//         </div>

//         {/* ============================================
//            TOOLBAR
//            ============================================ */}
//         <div className="activity-page__toolbar">
//           <div className="activity-page__toolbar-left">
//             {/* Search */}
//             <div className="activity-page__search">
//               <Search className="activity-page__search-icon" size={18} strokeWidth={2} />
//               <input
//                 type="text"
//                 placeholder="Search activities..."
//                 value={searchInput}
//                 onChange={handleSearchChange}
//                 className="activity-page__search-input"
//               />
//               {searchInput && (
//                 <button
//                   onClick={() => {
//                     setSearchInput("");
//                     setSearch("");
//                   }}
//                   className="activity-page__search-clear"
//                   aria-label="Clear search"
//                 >
//                   <XCircle size={16} strokeWidth={2} />
//                 </button>
//               )}
//             </div>

//             {/* Status Filter */}
//             <div className="activity-page__filter">
//               <Filter size={16} strokeWidth={2} />
//               <select
//                 value={filterStatus}
//                 onChange={(e) => setFilterStatus(e.target.value)}
//                 className="activity-page__filter-select"
//               >
//                 <option value="all">All Status</option>
//                 <option value="active">Active</option>
//                 <option value="inactive">Inactive</option>
//               </select>
//             </div>
//           </div>

//           {/* View Toggle */}
//           <div className="activity-page__view-toggle">
//             <button
//               className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
//               onClick={() => setViewMode("grid")}
//               title="Grid View"
//             >
//               <Grid size={18} />
//             </button>
//             <button
//               className={`view-btn ${viewMode === "list" ? "active" : ""}`}
//               onClick={() => setViewMode("list")}
//               title="List View"
//             >
//               <List size={18} />
//             </button>
//           </div>
//         </div>

//         {/* ============================================
//            CONTENT
//            ============================================ */}
//         {loading ? (
//           <div className="activity-page__loading">
//             <div className="spinner"></div>
//             <p>Loading activities...</p>
//           </div>
//         ) : filteredActivities.length === 0 ? (
//           <div className="activity-page__empty">
//             <Calendar size={48} className="empty-icon" />
//             <h3>No activities found</h3>
//             <p>
//               {search
//                 ? `No results found for "${search}". Try adjusting your search.`
//                 : "Get started by creating your first activity."}
//             </p>
//             {!search && (
//               <Link to="/admin/activities/create" className="activity-page__empty-btn">
//                 <Plus size={16} strokeWidth={2} />
//                 <span>Add First Activity</span>
//               </Link>
//             )}
//           </div>
//         ) : viewMode === "grid" ? (
//           /* Grid View */
//           <div className="activity-page__grid">
//             {currentItems.map((activity) => {
//               const imageUrl = getImageUrl(activity);
//               console.log(`Activity ${activity.id} Image URL:`, imageUrl);

//               return (
//                 <div key={activity.id} className="activity-card">
//                   <div className="activity-card__media">
//                     {imageUrl ? (
//                       <img
//                         src={imageUrl}
//                         alt={activity.title}
//                         className="activity-card__image"
//                         onError={(e) => {
//                           console.log(`Image failed to load: ${imageUrl}`);
//                           handleImageError(activity.id);
//                           e.target.style.display = 'none';
//                         }}
//                         loading="lazy"
//                       />
//                     ) : (
//                       <div className="activity-card__image-placeholder">
//                         <Image size={32} strokeWidth={1.5} />
//                       </div>
//                     )}
//                     <div className="activity-card__status-badge">
//                       {getStatusBadge(activity.isActive)}
//                     </div>
//                   </div>

//                   <div className="activity-card__content">
//                     <h3 className="activity-card__title">{activity.title}</h3>
                    
//                     <div className="activity-card__meta">
//                       {activity.date && (
//                         <span className="meta-item">
//                           <Calendar size={14} />
//                           {formatDate(activity.date)}
//                         </span>
//                       )}
//                       {activity.location && (
//                         <span className="meta-item">
//                           <MapPin size={14} />
//                           {activity.location}
//                         </span>
//                       )}
//                     </div>

//                     <div className="activity-card__footer">
//                       <span className="activity-card__order">
//                         Order: {activity.displayOrder}
//                       </span>
//                       <div className="activity-card__actions">
//                         <Link
//                           to={`/admin/activities/edit/${activity.id}`}
//                           className="action-btn edit-btn"
//                           title="Edit"
//                         >
//                           <Pencil size={16} />
//                         </Link>
//                         <button
//                           onClick={() => handleDeleteClick(activity)}
//                           className="action-btn delete-btn"
//                           title="Delete"
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           /* List View */
//           <div className="activity-page__table-wrapper">
//             <table className="activity-page__table">
//               <thead>
//                 <tr>
//                   <th>Image</th>
//                   <th>Title</th>
//                   <th>Date</th>
//                   <th>Location</th>
//                   <th>Order</th>
//                   <th>Status</th>
//                   <th className="text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((activity) => {
//                   const imageUrl = getImageUrl(activity);

//                   return (
//                     <tr key={activity.id}>
//                       <td>
//                         <div className="table-preview">
//                           {imageUrl ? (
//                             <img
//                               src={imageUrl}
//                               alt={activity.title}
//                               className="table-preview__image"
//                               onError={() => handleImageError(activity.id)}
//                               loading="lazy"
//                             />
//                           ) : (
//                             <div className="table-preview__placeholder">
//                               <Image size={20} strokeWidth={1.5} />
//                             </div>
//                           )}
//                         </div>
//                       </td>
//                       <td>
//                         <span className="table-title">{activity.title}</span>
//                       </td>
//                       <td>
//                         <span className="table-date">{formatDate(activity.date)}</span>
//                       </td>
//                       <td>
//                         <span className="table-location">
//                           {activity.location || "—"}
//                         </span>
//                       </td>
//                       <td>
//                         <span className="table-order">{activity.displayOrder}</span>
//                       </td>
//                       <td>
//                         <button
//                           onClick={() => handleStatus(activity.id)}
//                           className="status-toggle-btn"
//                         >
//                           {getStatusBadge(activity.isActive)}
//                         </button>
//                       </td>
//                       <td>
//                         <div className="table-actions">
//                           <Link
//                             to={`/admin/activities/edit/${activity.id}`}
//                             className="table-action edit"
//                             title="Edit"
//                           >
//                             <Pencil size={16} />
//                           </Link>
//                           <button
//                             onClick={() => handleDeleteClick(activity)}
//                             className="table-action delete"
//                             title="Delete"
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {/* ============================================
//            PAGINATION
//            ============================================ */}
//         {!loading && totalPages > 1 && (
//           <div className="activity-page__pagination">
//             <button
//               className="pagination-btn"
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               <ChevronLeft size={18} />
//             </button>
            
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
//               <button
//                 key={number}
//                 className={`pagination-btn ${currentPage === number ? "active" : ""}`}
//                 onClick={() => paginate(number)}
//               >
//                 {number}
//               </button>
//             ))}
            
//             <button
//               className="pagination-btn"
//               onClick={() => paginate(currentPage + 1)}
//               disabled={currentPage === totalPages}
//             >
//               <ChevronRight size={18} />
//             </button>
//           </div>
//         )}

//         {/* ============================================
//            TABLE FOOTER
//            ============================================ */}
//         {!loading && filteredActivities.length > 0 && (
//           <div className="activity-page__footer">
//             <p className="activity-page__count">
//               Showing <strong>{filteredActivities.length}</strong> {filteredActivities.length === 1 ? "activity" : "activities"}
//             </p>
//           </div>
//         )}

//         {/* ============================================
//            DELETE MODAL
//            ============================================ */}
//         {showDeleteModal && (
//           <div className="modal-overlay" onClick={() => setShowDeleteModal(false)}>
//             <div className="modal" onClick={(e) => e.stopPropagation()}>
//               <div className="modal__header">
//                 <AlertCircle size={24} className="modal__icon" />
//                 <h2>Delete Activity</h2>
//               </div>
//               <div className="modal__body">
//                 <p>
//                   Are you sure you want to delete <strong>"{selectedActivity?.title}"</strong>?
//                 </p>
//                 <p className="modal__warning">This action cannot be undone.</p>
//               </div>
//               <div className="modal__footer">
//                 <button
//                   onClick={() => setShowDeleteModal(false)}
//                   className="modal-btn modal-btn--cancel"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleDelete}
//                   className="modal-btn modal-btn--delete"
//                 >
//                   <Trash2 size={16} />
//                   Delete Activity
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Activity;


// src/pages/admin/Activity/Activity.jsx

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
  MapPin,
  Image,
  AlertCircle,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Filter,
  X,
} from "lucide-react";

import {
  getAllActivities,
  deleteActivity,
  toggleActivityStatus,
} from "../../../api/activity.api";

import "./Activity.css";

const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [imageErrors, setImageErrors] = useState(new Set());

  const searchTimeoutRef = useRef(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  const fetchActivities = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllActivities({ search });
      
      const activityData = res.data?.data?.activities || res.data?.data || res.data?.activities || [];
      
      setActivities(Array.isArray(activityData) ? activityData : []);
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error(error.response?.data?.message || "Failed to fetch activities.");
      setActivities([]);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

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
    if (!selectedActivity) return;
    try {
      await deleteActivity(selectedActivity.id);
      toast.success("Activity deleted successfully.");
      setShowDeleteModal(false);
      setSelectedActivity(null);
      fetchActivities();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete activity.");
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleActivityStatus(id);
      toast.success("Status updated successfully.");
      fetchActivities();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status.");
    }
  };

  const handleImageError = (activityId) => {
    setImageErrors((prev) => new Set([...prev, activityId]));
  };

  const getImageUrl = (activity) => {
    if (!activity || !activity.image) return null;
    if (imageErrors.has(activity.id)) return null;
    
    if (activity.image.startsWith('http')) return activity.image;
    
    return `${IMAGE_BASE_URL}/uploads/activities/${activity.image}`;
  };

  const handleDeleteClick = (activity) => {
    setSelectedActivity(activity);
    setShowDeleteModal(true);
  };

  // Filter by status
  const filteredActivities = filterStatus === "all" 
    ? activities 
    : activities.filter(a => 
        filterStatus === "active" ? a.isActive : !a.isActive
      );

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredActivities.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  const stats = {
    total: activities?.length || 0,
    active: activities?.filter((a) => a.isActive)?.length || 0,
    inactive: activities?.filter((a) => !a.isActive)?.length || 0,
  };

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="activity-page">
      <div className="activity-page__container">

        {/* ============================================
           HEADER
           ============================================ */}
        <div className="activity-page__header">
          <div className="activity-page__header-top">
            <div className="activity-page__header-left">
              <div className="activity-page__header-icon">
                <Calendar size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="activity-page__title">Activity Management</h1>
                <p className="activity-page__subtitle">
                  Manage website activities, workshops, and events
                </p>
              </div>
            </div>

            <div className="activity-page__header-right">
              <button
                onClick={fetchActivities}
                className="activity-page__refresh-btn"
                disabled={loading}
                title="Refresh data"
              >
                <RefreshCw
                  size={18}
                  strokeWidth={2}
                  className={`activity-page__refresh-icon ${
                    loading ? "activity-page__refresh-icon--spinning" : ""
                  }`}
                />
              </button>

              <Link to="/admin/activities/create" className="activity-page__add-btn">
                <Plus size={18} strokeWidth={2} />
                <span>Add Activity</span>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="activity-page__stats">
            <div className="activity-page__stat-item">
              <span className="activity-page__stat-value">{stats.total}</span>
              <span className="activity-page__stat-label">Total Activities</span>
            </div>
            <div className="activity-page__stat-divider" />
            <div className="activity-page__stat-item activity-page__stat-item--active">
              <span className="activity-page__stat-value">{stats.active}</span>
              <span className="activity-page__stat-label">Active</span>
            </div>
            <div className="activity-page__stat-divider" />
            <div className="activity-page__stat-item activity-page__stat-item--inactive">
              <span className="activity-page__stat-value">{stats.inactive}</span>
              <span className="activity-page__stat-label">Inactive</span>
            </div>
          </div>
        </div>

        {/* ============================================
           TOOLBAR
           ============================================ */}
        <div className="activity-page__toolbar">
          <div className="activity-page__toolbar-left">
            {/* Search */}
            <div className="activity-page__search">
              <Search className="activity-page__search-icon" size={18} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search activities..."
                value={searchInput}
                onChange={handleSearchChange}
                className="activity-page__search-input"
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                  className="activity-page__search-clear"
                  aria-label="Clear search"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="activity-page__filter">
              <Filter size={16} strokeWidth={2} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="activity-page__filter-select"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* View Toggle */}
          <div className="activity-page__view-toggle">
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
          <div className="activity-page__loading">
            <div className="spinner"></div>
            <p>Loading activities...</p>
          </div>
        ) : filteredActivities.length === 0 ? (
          <div className="activity-page__empty">
            <Calendar size={48} className="empty-icon" />
            <h3>No activities found</h3>
            <p>
              {search
                ? `No results found for "${search}". Try adjusting your search.`
                : "Get started by creating your first activity."}
            </p>
            {!search && (
              <Link to="/admin/activities/create" className="activity-page__empty-btn">
                <Plus size={16} strokeWidth={2} />
                <span>Add First Activity</span>
              </Link>
            )}
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="activity-page__grid">
            {currentItems.map((activity) => {
              const imageUrl = getImageUrl(activity);

              return (
                <div key={activity.id} className="activity-card">
                  <div className="activity-card__media">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={activity.title}
                        className="activity-card__image"
                        onError={() => handleImageError(activity.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="activity-card__image-placeholder">
                        <Image size={32} strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="activity-card__status-badge">
                      {getStatusBadge(activity.isActive)}
                    </div>
                  </div>

                  <div className="activity-card__content">
                    <h3 className="activity-card__title">{activity.title}</h3>
                    
                    <div className="activity-card__meta">
                      {activity.date && (
                        <span className="activity-card__meta-item">
                          <Calendar size={14} />
                          {formatDate(activity.date)}
                        </span>
                      )}
                      {activity.location && (
                        <span className="activity-card__meta-item">
                          <MapPin size={14} />
                          {activity.location}
                        </span>
                      )}
                    </div>

                    <div className="activity-card__footer">
                      <span className="activity-card__order">
                        Order: {activity.displayOrder}
                      </span>
                      <div className="activity-card__actions">
                        <Link
                          to={`/admin/activities/edit/${activity.id}`}
                          className="activity-card__action activity-card__action--edit"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(activity)}
                          className="activity-card__action activity-card__action--delete"
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
          <div className="activity-page__table-wrapper">
            <table className="activity-page__table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Order</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((activity) => {
                  const imageUrl = getImageUrl(activity);

                  return (
                    <tr key={activity.id}>
                      <td>
                        <div className="table-preview">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={activity.title}
                              className="table-preview__image"
                              onError={() => handleImageError(activity.id)}
                              loading="lazy"
                            />
                          ) : (
                            <div className="table-preview__placeholder">
                              <Image size={20} strokeWidth={1.5} />
                            </div>
                          )}
                        </div>
                      </td>
                      <td>
                        <span className="table-title">{activity.title}</span>
                      </td>
                      <td>
                        <span className="table-date">{formatDate(activity.date)}</span>
                      </td>
                      <td>
                        <span className="table-location">
                          {activity.location || "—"}
                        </span>
                      </td>
                      <td>
                        <span className="table-order">{activity.displayOrder}</span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleStatus(activity.id)}
                          className="status-toggle-btn"
                        >
                          {getStatusBadge(activity.isActive)}
                        </button>
                      </td>
                      <td>
                        <div className="table-actions">
                          <Link
                            to={`/admin/activities/edit/${activity.id}`}
                            className="table-action table-action--edit"
                            title="Edit"
                          >
                            <Pencil size={16} />
                          </Link>
                          <button
                            onClick={() => handleDeleteClick(activity)}
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
          <div className="activity-page__pagination">
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
        {!loading && filteredActivities.length > 0 && (
          <div className="activity-page__footer">
            <p className="activity-page__count">
              Showing <strong>{filteredActivities.length}</strong> {filteredActivities.length === 1 ? "activity" : "activities"}
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
                <h2>Delete Activity</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete <strong>"{selectedActivity?.title}"</strong>?
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
                  Delete Activity
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity;