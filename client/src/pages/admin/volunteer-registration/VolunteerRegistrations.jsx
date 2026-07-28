// // src/pages/admin/volunteer-registration/VolunteerRegistrations.jsx

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import {
//   Search,
//   Eye,
//   Trash2,
// } from "lucide-react";

// import {
//   getAllVolunteers,
//   updateVolunteerStatus,
//   deleteVolunteer,
// } from "../../../api/volunteer.api";

// const VolunteerRegistrations = () => {
//   const [volunteers, setVolunteers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   const fetchVolunteers = async () => {
//     try {
//       setLoading(true);

//       const res = await getAllVolunteers({
//         search,
//       });

//       const data =
//         res.data?.data?.volunteers ||
//         res.data?.data ||
//         res.data?.volunteers ||
//         [];

//       setVolunteers(Array.isArray(data) ? data : []);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch volunteer registrations."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVolunteers();
//   }, [search]);

//   const handleStatus = async (id, status) => {
//     try {
//       await updateVolunteerStatus(id, {
//         status,
//       });

//       toast.success("Status updated successfully.");

//       fetchVolunteers();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Unable to update status."
//       );
//     }
//   };

//   const handleDelete = async (id) => {
//     if (
//       !window.confirm(
//         "Are you sure you want to delete this volunteer registration?"
//       )
//     )
//       return;

//     try {
//       await deleteVolunteer(id);

//       toast.success(
//         "Volunteer registration deleted successfully."
//       );

//       fetchVolunteers();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Delete failed."
//       );
//     }
//   };

//   return (
//     <div className="p-6">

//       {/* Header */}

//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">
//           Volunteer Registrations
//         </h1>

//         <p className="text-gray-500 mt-1">
//           View and manage volunteer applications.
//         </p>
//       </div>

//       {/* Search */}

//       <div className="relative mb-6">

//         <Search
//           size={18}
//           className="absolute left-3 top-3 text-gray-400"
//         />

//         <input
//           type="text"
//           placeholder="Search volunteers..."
//           value={search}
//           onChange={(e) =>
//             setSearch(e.target.value)
//           }
//           className="w-full border rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//       </div>

//       {/* Table */}

//       <div className="bg-white rounded-xl shadow overflow-x-auto">

//         <table className="w-full">

//           <thead className="bg-gray-100">

//             <tr>

//               <th className="p-4 text-left">
//                 Name
//               </th>

//               <th>Email</th>

//               <th>Mobile</th>

//               <th>Interest</th>

//               <th>Status</th>

//               <th className="text-center">
//                 Actions
//               </th>

//             </tr>

//           </thead>

//           <tbody>

//                         {loading ? (
//               <tr>
//                 <td
//                   colSpan={6}
//                   className="text-center p-8"
//                 >
//                   Loading...
//                 </td>
//               </tr>
//             ) : volunteers.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={6}
//                   className="text-center p-8"
//                 >
//                   No Volunteer Registrations Found
//                 </td>
//               </tr>
//             ) : (
//               volunteers.map((item) => (
//                 <tr
//                   key={item.id}
//                   className="border-t hover:bg-gray-50"
//                 >
//                   {/* Name */}

//                   <td className="p-4 font-medium">
//                     {item.fullName}
//                   </td>

//                   {/* Email */}

//                   <td>{item.email}</td>

//                   {/* Mobile */}

//                   <td>{item.mobile || "-"}</td>

//                   {/* Interest */}

//                   <td>{item.interests || "-"}</td>

//                   {/* Status */}

//                   <td>
//                     <select
//                       value={item.status}
//                       onChange={(e) =>
//                         handleStatus(
//                           item.id,
//                           e.target.value
//                         )
//                       }
//                       className="border rounded px-2 py-1"
//                     >
//                       <option value="NEW">
//                         NEW
//                       </option>

//                       <option value="UNDER_REVIEW">
//                         UNDER REVIEW
//                       </option>

//                       <option value="CONTACTED">
//                         CONTACTED
//                       </option>

//                       <option value="APPROVED">
//                         APPROVED
//                       </option>

//                       <option value="REJECTED">
//                         REJECTED
//                       </option>
//                     </select>
//                   </td>

//                   {/* Actions */}

//                   <td>
//                     <div className="flex items-center justify-center gap-3">

//                       {/* View */}

//                       <Link
//                         to={`/admin/volunteer-registrations/view/${item.id}`}
//                         title="View"
//                       >
//                         <Eye
//                           size={18}
//                           className="text-blue-600 hover:text-blue-800"
//                         />
//                       </Link>

//                       {/* Delete */}

//                       <button
//                         onClick={() =>
//                           handleDelete(item.id)
//                         }
//                         title="Delete"
//                       >
//                         <Trash2
//                           size={18}
//                           className="text-red-600 hover:text-red-800"
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

// export default VolunteerRegistrations;


// src/pages/admin/volunteer-registration/VolunteerRegistrations.jsx

import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Search,
  Eye,
  Trash2,
  Users,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  AlertCircle,
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  Clock,
  UserCheck,
  UserX,
  FileText,
} from "lucide-react";

import {
  getAllVolunteers,
  updateVolunteerStatus,
  deleteVolunteer,
} from "../../../api/volunteer.api";

import "./VolunteerRegistrations.css";

const VolunteerRegistrations = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [deletingId, setDeletingId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const searchTimeoutRef = useRef(null);

  const fetchVolunteers = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllVolunteers({ search });
      const data = res.data?.data?.volunteers || res.data?.data || res.data?.volunteers || [];
      setVolunteers(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch volunteer registrations.");
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchVolunteers();
  }, [fetchVolunteers]);

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

  const handleStatus = async (id, status) => {
    try {
      setUpdatingId(id);
      await updateVolunteerStatus(id, { status });
      toast.success("Status updated successfully.");
      fetchVolunteers();
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to update status.");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async () => {
    if (!selectedVolunteer) return;
    try {
      setDeletingId(selectedVolunteer.id);
      await deleteVolunteer(selectedVolunteer.id);
      toast.success("Volunteer registration deleted successfully.");
      setShowDeleteModal(false);
      setSelectedVolunteer(null);
      fetchVolunteers();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleDeleteClick = (volunteer) => {
    setSelectedVolunteer(volunteer);
    setShowDeleteModal(true);
  };

  // Filter by status
  const filteredVolunteers = filterStatus === "all" 
    ? volunteers 
    : volunteers.filter(v => v.status === filterStatus);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredVolunteers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredVolunteers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusColor = (status) => {
    const statusMap = {
      NEW: { bg: "#eff6ff", color: "#1e40af", label: "New" },
      UNDER_REVIEW: { bg: "#fef3c7", color: "#92400e", label: "Under Review" },
      CONTACTED: { bg: "#e0e7ff", color: "#3730a3", label: "Contacted" },
      APPROVED: { bg: "#d1fae5", color: "#065f46", label: "Approved" },
      REJECTED: { bg: "#fee2e2", color: "#991b1b", label: "Rejected" },
    };
    return statusMap[status] || { bg: "#f3f4f6", color: "#374151", label: status };
  };

  const getStatusIcon = (status) => {
    const iconMap = {
      NEW: <Clock size={14} />,
      UNDER_REVIEW: <FileText size={14} />,
      CONTACTED: <Mail size={14} />,
      APPROVED: <CheckCircle size={14} />,
      REJECTED: <UserX size={14} />,
    };
    return iconMap[status] || <FileText size={14} />;
  };

  const stats = {
    total: volunteers?.length || 0,
    new: volunteers?.filter((v) => v.status === "NEW")?.length || 0,
    approved: volunteers?.filter((v) => v.status === "APPROVED")?.length || 0,
    underReview: volunteers?.filter((v) => v.status === "UNDER_REVIEW")?.length || 0,
  };

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const statusOptions = [
    { value: "NEW", label: "New" },
    { value: "UNDER_REVIEW", label: "Under Review" },
    { value: "CONTACTED", label: "Contacted" },
    { value: "APPROVED", label: "Approved" },
    { value: "REJECTED", label: "Rejected" },
  ];

  return (
    <div className="volunteer-page">
      <div className="volunteer-page__container">

        {/* ============================================
           HEADER
           ============================================ */}
        <div className="volunteer-page__header">
          <div className="volunteer-page__header-top">
            <div className="volunteer-page__header-left">
              <div className="volunteer-page__header-icon">
                <Users size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="volunteer-page__title">Volunteer Registrations</h1>
                <p className="volunteer-page__subtitle">
                  View and manage volunteer applications
                </p>
              </div>
            </div>

            <div className="volunteer-page__header-right">
              <button
                onClick={fetchVolunteers}
                className="volunteer-page__refresh-btn"
                disabled={loading}
                title="Refresh data"
              >
                <RefreshCw
                  size={18}
                  strokeWidth={2}
                  className={`volunteer-page__refresh-icon ${
                    loading ? "volunteer-page__refresh-icon--spinning" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="volunteer-page__stats">
            <div className="volunteer-page__stat-item">
              <span className="volunteer-page__stat-value">{stats.total}</span>
              <span className="volunteer-page__stat-label">Total Applications</span>
            </div>
            <div className="volunteer-page__stat-divider" />
            <div className="volunteer-page__stat-item volunteer-page__stat-item--new">
              <span className="volunteer-page__stat-value">{stats.new}</span>
              <span className="volunteer-page__stat-label">New</span>
            </div>
            <div className="volunteer-page__stat-divider" />
            <div className="volunteer-page__stat-item volunteer-page__stat-item--review">
              <span className="volunteer-page__stat-value">{stats.underReview}</span>
              <span className="volunteer-page__stat-label">Under Review</span>
            </div>
            <div className="volunteer-page__stat-divider" />
            <div className="volunteer-page__stat-item volunteer-page__stat-item--approved">
              <span className="volunteer-page__stat-value">{stats.approved}</span>
              <span className="volunteer-page__stat-label">Approved</span>
            </div>
          </div>
        </div>

        {/* ============================================
           TOOLBAR
           ============================================ */}
        <div className="volunteer-page__toolbar">
          <div className="volunteer-page__toolbar-left">
            {/* Search */}
            <div className="volunteer-page__search">
              <Search className="volunteer-page__search-icon" size={18} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search volunteers..."
                value={searchInput}
                onChange={handleSearchChange}
                className="volunteer-page__search-input"
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                  className="volunteer-page__search-clear"
                  aria-label="Clear search"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="volunteer-page__filter">
              <Filter size={16} strokeWidth={2} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="volunteer-page__filter-select"
              >
                <option value="all">All Status</option>
                <option value="NEW">New</option>
                <option value="UNDER_REVIEW">Under Review</option>
                <option value="CONTACTED">Contacted</option>
                <option value="APPROVED">Approved</option>
                <option value="REJECTED">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* ============================================
           TABLE
           ============================================ */}
        <div className="volunteer-page__table-wrapper">
          <table className="volunteer-page__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Interests</th>
                <th>Submitted</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="volunteer-page__table-loading">
                    <div className="spinner"></div>
                    <p>Loading volunteer registrations...</p>
                  </td>
                </tr>
              ) : filteredVolunteers.length === 0 ? (
                <tr>
                  <td colSpan={7} className="volunteer-page__table-empty">
                    <Users size={48} className="empty-icon" />
                    <h3>No volunteer registrations found</h3>
                    <p>
                      {search
                        ? `No results found for "${search}". Try adjusting your search.`
                        : "No volunteer applications have been submitted yet."}
                    </p>
                  </td>
                </tr>
              ) : (
                currentItems.map((item) => {
                  const statusStyle = getStatusColor(item.status);
                  const isDeleting = deletingId === item.id;
                  const isUpdating = updatingId === item.id;

                  return (
                    <tr key={item.id} className="volunteer-page__table-row">
                      <td>
                        <div className="volunteer-page__table-name">
                          <span className="name">{item.fullName}</span>
                        </div>
                      </td>
                      <td>
                        <span className="volunteer-page__table-email">
                          <Mail size={14} />
                          {item.email}
                        </span>
                      </td>
                      <td>
                        <span className="volunteer-page__table-phone">
                          <Phone size={14} />
                          {item.mobile || "—"}
                        </span>
                      </td>
                      <td>
                        <span className="volunteer-page__table-interests">
                          {item.interests || "—"}
                        </span>
                      </td>
                      <td>
                        <span className="volunteer-page__table-date">
                          <Calendar size={14} />
                          {formatDate(item.createdAt || item.submittedAt)}
                        </span>
                      </td>
                      <td>
                        <div className="volunteer-page__table-status">
                          <select
                            value={item.status}
                            onChange={(e) => handleStatus(item.id, e.target.value)}
                            disabled={isUpdating}
                            className="status-select"
                            style={{
                              backgroundColor: statusStyle.bg,
                              color: statusStyle.color,
                              borderColor: `${statusStyle.color}40`,
                            }}
                          >
                            {statusOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                          {isUpdating && (
                            <span className="status-updating">Updating...</span>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className="volunteer-page__table-actions">
                          <Link
                            to={`/admin/volunteer-registrations/view/${item.id}`}
                            className="action-btn view-btn"
                            title="View Details"
                          >
                            <Eye size={16} />
                          </Link>
                          <button
                            onClick={() => handleDeleteClick(item)}
                            className="action-btn delete-btn"
                            title="Delete"
                            disabled={isDeleting}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* ============================================
           PAGINATION
           ============================================ */}
        {!loading && totalPages > 1 && (
          <div className="volunteer-page__pagination">
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
        {!loading && filteredVolunteers.length > 0 && (
          <div className="volunteer-page__footer">
            <p className="volunteer-page__count">
              Showing <strong>{filteredVolunteers.length}</strong> {filteredVolunteers.length === 1 ? "application" : "applications"}
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
                <h2>Delete Volunteer Registration</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete <strong>"{selectedVolunteer?.fullName}"</strong>'s registration?
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
                  disabled={deletingId === selectedVolunteer?.id}
                >
                  {deletingId === selectedVolunteer?.id ? (
                    <>
                      <span className="spinner-btn"></span>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 size={16} />
                      Delete Registration
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VolunteerRegistrations;