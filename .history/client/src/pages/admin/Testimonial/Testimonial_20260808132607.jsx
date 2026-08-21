// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import {
//   Plus,
//   Search,
//   Pencil,
//   Trash2,
//   CheckCircle,
//   XCircle,
// } from "lucide-react";

// import {
//   getAllTestimonials,
//   deleteTestimonial,
//   toggleTestimonialStatus,
// } from "../../../api/testimonial.api";

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   const fetchTestimonials = async () => {
//     try {
//       setLoading(true);

//       const res = await getAllTestimonials({ search });

//       const data =
//         res.data?.data?.testimonials ||
//         res.data?.data ||
//         res.data?.testimonials ||
//         [];

//       setTestimonials(Array.isArray(data) ? data : []);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch testimonials."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTestimonials();
//   }, [search]);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this testimonial?")) return;

//     try {
//       await deleteTestimonial(id);
//       toast.success("Deleted successfully.");
//       fetchTestimonials();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Delete failed."
//       );
//     }
//   };

//   const handleStatus = async (id) => {
//     try {
//       await toggleTestimonialStatus(id);
//       toast.success("Status updated.");
//       fetchTestimonials();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Status update failed."
//       );
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">

//         <div>
//           <h1 className="text-2xl font-bold">
//             Testimonials
//           </h1>

//           <p className="text-gray-500">
//             Manage client testimonials.
//           </p>
//         </div>

//         <Link
//           to="/admin/testimonials/create"
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg flex gap-2"
//         >
//           <Plus size={18} />
//           Add Testimonial
//         </Link>
//       </div>

//       <div className="relative mb-6">
//         <Search
//           className="absolute left-3 top-3 text-gray-400"
//           size={18}
//         />

//         <input
//           className="border rounded-lg pl-10 py-2 w-full"
//           placeholder="Search..."
//           value={search}
//           onChange={(e) =>
//             setSearch(e.target.value)
//           }
//         />
//       </div>

//       <div className="bg-white rounded-xl shadow overflow-x-auto">
//         <table className="w-full">

//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-4 text-left">Photo</th>
//               <th>Name</th>
//               <th>Designation</th>
//               <th>Rating</th>
//               <th>Status</th>
//               <th className="text-center">Actions</th>
//             </tr>
//           </thead>

//           <tbody>

//             {loading ? (
//               <tr>
//                 <td colSpan={6} className="text-center p-8">
//                   Loading...
//                 </td>
//               </tr>
//             ) : testimonials.length === 0 ? (
//               <tr>
//                 <td colSpan={6} className="text-center p-8">
//                   No Testimonials Found
//                 </td>
//               </tr>
//             ) : (
//               testimonials.map((item) => (
//                 <tr key={item.id} className="border-t">

//                   <td className="p-4">
//                     <img
//                       src={`${import.meta.env.VITE_API_BASE_URL.replace("/api","")}/uploads/testimonials/${item.photo}`}
//                       className="w-14 h-14 rounded-full object-cover"
//                     />
//                   </td>

//                   <td>{item.name}</td>

//                   <td>{item.designation}</td>

//                   <td>{item.rating} ⭐</td>

//                   <td>
//                     <button
//                       onClick={() =>
//                         handleStatus(item.id)
//                       }
//                       className={`px-3 py-1 rounded-full ${
//                         item.isActive
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {item.isActive
//                         ? "Active"
//                         : "Inactive"}
//                     </button>
//                   </td>

//                   <td>
//                     <div className="flex justify-center gap-4">

//                       <Link
//                         to={`/admin/testimonials/edit/${item.id}`}
//                       >
//                         <Pencil
//                           className="text-blue-600"
//                           size={18}
//                         />
//                       </Link>

//                       <button
//                         onClick={() =>
//                           handleDelete(item.id)
//                         }
//                       >
//                         <Trash2
//                           className="text-red-600"
//                           size={18}
//                         />
//                       </button>

//                     </div>
//                   </td>

//                 </tr>
//               ))
//             )}

//           </tbody>

//         </table>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

// src/pages/admin/testimonials/Testimonials.jsx

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
  Star,
  Users,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Filter,
  X,
  AlertCircle,
  User,
  MessageSquare,
  Calendar,
} from "lucide-react";

import {
  getAllTestimonials,
  deleteTestimonial,
  toggleTestimonialStatus,
} from "../../../api/testimonial.api";

import "./Testimonial.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterRating, setFilterRating] = useState("all");
  const [imageErrors, setImageErrors] = useState(new Set());

  const searchTimeoutRef = useRef(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  const fetchTestimonials = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllTestimonials({ search });
      const data = res.data?.data?.testimonials || res.data?.data || res.data?.testimonials || [];
      setTestimonials(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch testimonials.");
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

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
    if (!selectedTestimonial) return;
    try {
      await deleteTestimonial(selectedTestimonial.id);
      toast.success("Testimonial deleted successfully.");
      setShowDeleteModal(false);
      setSelectedTestimonial(null);
      fetchTestimonials();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed.");
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleTestimonialStatus(id);
      toast.success("Status updated successfully.");
      fetchTestimonials();
    } catch (error) {
      toast.error(error.response?.data?.message || "Status update failed.");
    }
  };

  const handleImageError = (testimonialId) => {
    setImageErrors((prev) => new Set([...prev, testimonialId]));
  };

  const getImageUrl = (item) => {
    if (!item || !item.photo) return null;
    if (imageErrors.has(item.id)) return null;
    if (item.photo.startsWith('http')) return item.photo;
    return `${IMAGE_BASE_URL}/uploads/testimonials/${item.photo}`;
  };

  const handleDeleteClick = (item) => {
    setSelectedTestimonial(item);
    setShowDeleteModal(true);
  };

  // Filter by status and rating
  const filteredTestimonials = testimonials.filter(item => {
    const statusMatch = filterStatus === "all" ? true : (filterStatus === "active" ? item.isActive : !item.isActive);
    const ratingMatch = filterRating === "all" ? true : item.rating === parseInt(filterRating);
    return statusMatch && ratingMatch;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTestimonials.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);

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

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < rating ? "star-filled" : "star-empty"}
          />
        ))}
      </div>
    );
  };

  const stats = {
    total: testimonials?.length || 0,
    active: testimonials?.filter((item) => item.isActive)?.length || 0,
    inactive: testimonials?.filter((item) => !item.isActive)?.length || 0,
    avgRating: testimonials?.length > 0 
      ? (testimonials.reduce((acc, curr) => acc + (curr.rating || 0), 0) / testimonials.length).toFixed(1)
      : 0,
  };

  const ratingOptions = ["all", "5", "4", "3", "2", "1"];

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="testimonials-page">
      <div className="testimonials-page__container">

        {/* ============================================
           HEADER
           ============================================ */}
        <div className="testimonials-page__header">
          <div className="testimonials-page__header-top">
            <div className="testimonials-page__header-left">
              <div className="testimonials-page__header-icon">
                <MessageSquare size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="testimonials-page__title">Testimonials</h1>
                <p className="testimonials-page__subtitle">
                  Manage client testimonials and reviews
                </p>
              </div>
            </div>

            <div className="testimonials-page__header-right">
              <button
                onClick={fetchTestimonials}
                className="testimonials-page__refresh-btn"
                disabled={loading}
                title="Refresh data"
              >
                <RefreshCw
                  size={18}
                  strokeWidth={2}
                  className={`testimonials-page__refresh-icon ${
                    loading ? "testimonials-page__refresh-icon--spinning" : ""
                  }`}
                />
              </button>

              <Link to="/admin/testimonials/create" className="testimonials-page__add-btn">
                <Plus size={18} strokeWidth={2} />
                <span>Add Testimonial</span>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="testimonials-page__stats">
            <div className="testimonials-page__stat-item">
              <span className="testimonials-page__stat-value">{stats.total}</span>
              <span className="testimonials-page__stat-label">Total</span>
            </div>
            <div className="testimonials-page__stat-divider" />
            <div className="testimonials-page__stat-item testimonials-page__stat-item--active">
              <span className="testimonials-page__stat-value">{stats.active}</span>
              <span className="testimonials-page__stat-label">Active</span>
            </div>
            <div className="testimonials-page__stat-divider" />
            <div className="testimonials-page__stat-item testimonials-page__stat-item--inactive">
              <span className="testimonials-page__stat-value">{stats.inactive}</span>
              <span className="testimonials-page__stat-label">Inactive</span>
            </div>
            <div className="testimonials-page__stat-divider" />
            <div className="testimonials-page__stat-item testimonials-page__stat-item--rating">
              <span className="testimonials-page__stat-value">{stats.avgRating}</span>
              <span className="testimonials-page__stat-label">Avg Rating</span>
            </div>
          </div>
        </div>

        {/* ============================================
           TOOLBAR
           ============================================ */}
        <div className="testimonials-page__toolbar">
          <div className="testimonials-page__toolbar-left">
            {/* Search */}
            <div className="testimonials-page__search">
              <Search className="testimonials-page__search-icon" size={18} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search testimonials..."
                value={searchInput}
                onChange={handleSearchChange}
                className="testimonials-page__search-input"
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                  className="testimonials-page__search-clear"
                  aria-label="Clear search"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="testimonials-page__filter">
              <Filter size={16} strokeWidth={2} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="testimonials-page__filter-select"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Rating Filter */}
            <div className="testimonials-page__filter">
              <Star size={16} strokeWidth={2} />
              <select
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
                className="testimonials-page__filter-select"
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
          </div>

          {/* View Toggle */}
          <div className="testimonials-page__view-toggle">
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
          <div className="testimonials-page__loading">
            <div className="spinner"></div>
            <p>Loading testimonials...</p>
          </div>
        ) : filteredTestimonials.length === 0 ? (
          <div className="testimonials-page__empty">
            <MessageSquare size={48} className="empty-icon" />
            <h3>No testimonials found</h3>
            <p>
              {search
                ? `No results found for "${search}". Try adjusting your search.`
                : "Get started by adding your first testimonial."}
            </p>
            {!search && (
              <Link to="/admin/testimonials/create" className="testimonials-page__empty-btn">
                <Plus size={16} strokeWidth={2} />
                <span>Add First Testimonial</span>
              </Link>
            )}
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="testimonials-page__grid">
            {currentItems.map((item) => {
              const imageUrl = getImageUrl(item);

              return (
                <div key={item.id} className="testimonial-card">
                  <div className="testimonial-card__media">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={item.name}
                        className="testimonial-card__image"
                        onError={() => handleImageError(item.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="testimonial-card__image-placeholder">
                        <User size={32} strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="testimonial-card__status-badge">
                      {getStatusBadge(item.isActive)}
                    </div>
                  </div>

                  <div className="testimonial-card__content">
                    <div className="testimonial-card__header">
                      <h3 className="testimonial-card__name">{item.name}</h3>
                      {renderStars(item.rating || 0)}
                    </div>
                    
                    <p className="testimonial-card__designation">
                      {item.designation || "—"}
                    </p>
                    
                    <p className="testimonial-card__quote">
                      "{item.content || item.text || "No content provided."}"
                    </p>

                    <div className="testimonial-card__footer">
                      <span className="testimonial-card__order">
                        Order: {item.displayOrder || 1}
                      </span>
                      <div className="testimonial-card__actions">
                        <Link
                          to={`/admin/testimonials/edit/${item.id}`}
                          className="testimonial-card__action testimonial-card__action--edit"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(item)}
                          className="testimonial-card__action testimonial-card__action--delete"
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
          <div className="testimonials-page__table-wrapper">
            <table className="testimonials-page__table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item) => {
                  const imageUrl = getImageUrl(item);

                  return (
                    <tr key={item.id}>
                      <td>
                        <div className="table-avatar">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={item.name}
                              className="table-avatar__image"
                              onError={() => handleImageError(item.id)}
                              loading="lazy"
                            />
                          ) : (
                            <div className="table-avatar__placeholder">
                              {getInitials(item.name)}
                            </div>
                          )}
                        </div>
                      </td>
                      <td>
                        <span className="table-name">{item.name}</span>
                      </td>
                      <td>
                        <span className="table-designation">{item.designation || "—"}</span>
                      </td>
                      <td>
                        {renderStars(item.rating || 0)}
                      </td>
                      <td>
                        <button
                          onClick={() => handleStatus(item.id)}
                          className="status-toggle-btn"
                        >
                          {getStatusBadge(item.isActive)}
                        </button>
                      </td>
                      <td>
                        <div className="table-actions">
                          <Link
                            to={`/admin/testimonials/edit/${item.id}`}
                            className="table-action table-action--edit"
                            title="Edit"
                          >
                            <Pencil size={16} />
                          </Link>
                          <button
                            onClick={() => handleDeleteClick(item)}
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
          <div className="testimonials-page__pagination">
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
        {!loading && filteredTestimonials.length > 0 && (
          <div className="testimonials-page__footer">
            <p className="testimonials-page__count">
              Showing <strong>{filteredTestimonials.length}</strong> {filteredTestimonials.length === 1 ? "testimonial" : "testimonials"}
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
                <h2>Delete Testimonial</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete <strong>"{selectedTestimonial?.name}"</strong>'s testimonial?
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
                  Delete Testimonial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;