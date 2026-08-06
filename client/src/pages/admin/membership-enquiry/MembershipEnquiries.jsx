// // // src/pages/admin/membership-enquiry/MembershipEnquiries.jsx

// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import toast from "react-hot-toast";
// // import {
// //   Search,
// //   Eye,
// //   Trash2,
// //   CheckCircle,
// // } from "lucide-react";

// // import {
// //   getAllMembershipEnquiries,
// //   deleteMembershipEnquiry,
// //   updateMembershipEnquiryStatus,
// //   approveMembershipEnquiry,
// // } from "../../../api/membershipEnquiry.api";

// // const MembershipEnquiries = () => {
// //   const [enquiries, setEnquiries] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [search, setSearch] = useState("");

// //   const fetchEnquiries = async () => {
// //     try {
// //       setLoading(true);

// //       const res = await getAllMembershipEnquiries({
// //         search,
// //       });

// //       const data =
// //         res.data?.data?.membershipEnquiries ||
// //         res.data?.data ||
// //         res.data?.membershipEnquiries ||
// //         [];

// //       setEnquiries(Array.isArray(data) ? data : []);
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message ||
// //           "Failed to fetch membership enquiries."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchEnquiries();
// //   }, [search]);

// //   const handleStatus = async (id, status) => {
// //     try {
// //       await updateMembershipEnquiryStatus(id, {
// //         status,
// //       });

// //       toast.success("Status updated.");

// //       fetchEnquiries();
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message ||
// //           "Failed to update status."
// //       );
// //     }
// //   };

// //   const handleApprove = async (id) => {
// //     if (
// //       !window.confirm(
// //         "Approve this membership application?"
// //       )
// //     )
// //       return;

// //     try {
// //       await approveMembershipEnquiry(id);

// //       toast.success(
// //         "Membership approved successfully."
// //       );

// //       fetchEnquiries();
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message ||
// //           "Approval failed."
// //       );
// //     }
// //   };

// //   const handleDelete = async (id) => {
// //     if (
// //       !window.confirm(
// //         "Delete this membership enquiry?"
// //       )
// //     )
// //       return;

// //     try {
// //       await deleteMembershipEnquiry(id);

// //       toast.success(
// //         "Membership enquiry deleted."
// //       );

// //       fetchEnquiries();
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message ||
// //           "Delete failed."
// //       );
// //     }
// //   };

// //   return (
// //     <div className="p-6">

// //       {/* Header */}

// //       <div className="mb-6">
// //         <h1 className="text-2xl font-bold">
// //           Membership Enquiries
// //         </h1>

// //         <p className="text-gray-500">
// //           Review and approve membership
// //           applications.
// //         </p>
// //       </div>

// //       {/* Search */}

// //       <div className="relative mb-6">

// //         <Search
// //           size={18}
// //           className="absolute left-3 top-3 text-gray-400"
// //         />

// //         <input
// //           type="text"
// //           placeholder="Search membership enquiries..."
// //           value={search}
// //           onChange={(e) =>
// //             setSearch(e.target.value)
// //           }
// //           className="w-full border rounded-lg pl-10 py-2"
// //         />

// //       </div>

// //       {/* Table */}

// //       <div className="bg-white rounded-xl shadow overflow-x-auto">

// //         <table className="w-full">

// //           <thead className="bg-gray-100">

// //             <tr>
// //               <th className="p-4 text-left">
// //                 Photo
// //               </th>

// //               <th>Name</th>

// //               <th>Membership</th>

// //               <th>Email</th>

// //               <th>Mobile</th>

// //               <th>Status</th>

// //               <th className="text-center">
// //                 Actions
// //               </th>
// //             </tr>

// //           </thead>

// //           <tbody>


// //                         {loading ? (
// //               <tr>
// //                 <td
// //                   colSpan={7}
// //                   className="text-center p-8"
// //                 >
// //                   Loading...
// //                 </td>
// //               </tr>
// //             ) : enquiries.length === 0 ? (
// //               <tr>
// //                 <td
// //                   colSpan={7}
// //                   className="text-center p-8"
// //                 >
// //                   No Membership Enquiries Found
// //                 </td>
// //               </tr>
// //             ) : (
// //               enquiries.map((item) => (
// //                 <tr
// //                   key={item.id}
// //                   className="border-t"
// //                 >
// //                   {/* Photo */}

// //                   <td className="p-4">
// //                     {item.photo ? (
// //                       <img
// //                         src={`${import.meta.env.VITE_API_BASE_URL.replace(
// //                           "/api",
// //                           ""
// //                         )}/uploads/membership/${item.photo}`}
// //                         alt={item.fullName}
// //                         className="w-14 h-14 rounded-full object-cover border"
// //                       />
// //                     ) : (
// //                       <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xs">
// //                         N/A
// //                       </div>
// //                     )}
// //                   </td>

// //                   {/* Name */}

// //                   <td className="font-medium">
// //                     {item.fullName}
// //                   </td>

// //                   {/* Membership */}

// //                   <td>
// //                     {item.membershipType || "-"}
// //                   </td>

// //                   {/* Email */}

// //                   <td>{item.email}</td>

// //                   {/* Mobile */}

// //                   <td>{item.mobile}</td>

// //                   {/* Status */}

// //                   <td>
// //                     <select
// //                       value={item.status}
// //                       onChange={(e) =>
// //                         handleStatus(
// //                           item.id,
// //                           e.target.value
// //                         )
// //                       }
// //                       className="border rounded px-2 py-1"
// //                     >
// //                       <option value="NEW">
// //                         NEW
// //                       </option>

// //                       <option value="UNDER_REVIEW">
// //                         UNDER REVIEW
// //                       </option>

// //                       <option value="APPROVED">
// //                         APPROVED
// //                       </option>

// //                       <option value="REJECTED">
// //                         REJECTED
// //                       </option>
// //                     </select>
// //                   </td>

// //                   {/* Actions */}

// //                   <td>
// //                     <div className="flex items-center justify-center gap-3">

// //                       {/* View */}

// //                       <Link
// //                         to={`/admin/membership-enquiries/view/${item.id}`}
// //                         title="View"
// //                       >
// //                         <Eye
// //                           size={18}
// //                           className="text-blue-600"
// //                         />
// //                       </Link>

// //                       {/* Approve */}

// //                       {item.status !==
// //                         "APPROVED" && (
// //                         <button
// //                           onClick={() =>
// //                             handleApprove(
// //                               item.id
// //                             )
// //                           }
// //                           title="Approve"
// //                         >
// //                           <CheckCircle
// //                             size={18}
// //                             className="text-green-600"
// //                           />
// //                         </button>
// //                       )}

// //                       {/* Delete */}

// //                       <button
// //                         onClick={() =>
// //                           handleDelete(item.id)
// //                         }
// //                         title="Delete"
// //                       >
// //                         <Trash2
// //                           size={18}
// //                           className="text-red-600"
// //                         />
// //                       </button>

// //                     </div>
// //                   </td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MembershipEnquiries;

// // src/pages/admin/membership-enquiry/MembershipEnquiries.jsx

// import { useEffect, useState, useCallback, useRef } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import {
//   Search,
//   Eye,
//   Trash2,
//   CheckCircle,
//   Users,
//   RefreshCw,
//   ChevronLeft,
//   ChevronRight,
//   Filter,
//   X,
//   AlertCircle,
//   Mail,
//   Phone,
//   Calendar,
//   Clock,
//   UserCheck,
//   UserX,
//   FileText,
//   Award,
//   UserPlus,
// } from "lucide-react";

// import {
//   getAllMembershipEnquiries,
//   deleteMembershipEnquiry,
//   updateMembershipEnquiryStatus,
//   approveMembershipEnquiry,
// } from "../../../api/membershipEnquiry.api";

// import "./MembershipEnquiries.css";

// const MembershipEnquiries = () => {
//   const [enquiries, setEnquiries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [searchInput, setSearchInput] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);
//   const [selectedEnquiry, setSelectedEnquiry] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [filterStatus, setFilterStatus] = useState("all");
//   const [deletingId, setDeletingId] = useState(null);
//   const [updatingId, setUpdatingId] = useState(null);
//   const [approvingId, setApprovingId] = useState(null);

//   const searchTimeoutRef = useRef(null);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   const fetchEnquiries = useCallback(async () => {
//     try {
//       setLoading(true);
//       const res = await getAllMembershipEnquiries({ search });
//       const data = res.data?.data?.membershipEnquiries || res.data?.data || res.data?.membershipEnquiries || [];
//       setEnquiries(Array.isArray(data) ? data : []);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to fetch membership enquiries.");
//     } finally {
//       setLoading(false);
//     }
//   }, [search]);

//   useEffect(() => {
//     fetchEnquiries();
//   }, [fetchEnquiries]);

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

//   const handleStatus = async (id, status) => {
//     try {
//       setUpdatingId(id);
//       await updateMembershipEnquiryStatus(id, { status });
//       toast.success("Status updated successfully.");
//       fetchEnquiries();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to update status.");
//     } finally {
//       setUpdatingId(null);
//     }
//   };

//   const handleApprove = async (id) => {
//     try {
//       setApprovingId(id);
//       await approveMembershipEnquiry(id);
//       toast.success("Membership approved successfully! 🎉");
//       fetchEnquiries();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Approval failed.");
//     } finally {
//       setApprovingId(null);
//     }
//   };

//   const handleDelete = async () => {
//     if (!selectedEnquiry) return;
//     try {
//       setDeletingId(selectedEnquiry.id);
//       await deleteMembershipEnquiry(selectedEnquiry.id);
//       toast.success("Membership enquiry deleted.");
//       setShowDeleteModal(false);
//       setSelectedEnquiry(null);
//       fetchEnquiries();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Delete failed.");
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   const handleDeleteClick = (enquiry) => {
//     setSelectedEnquiry(enquiry);
//     setShowDeleteModal(true);
//   };

//   // Filter by status
//   const filteredEnquiries = filterStatus === "all" 
//     ? enquiries 
//     : enquiries.filter(e => e.status === filterStatus);

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredEnquiries.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredEnquiries.length / itemsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const getStatusColor = (status) => {
//     const statusMap = {
//       NEW: { bg: "#eff6ff", color: "#1e40af", label: "New", icon: <Clock size={14} /> },
//       UNDER_REVIEW: { bg: "#fef3c7", color: "#92400e", label: "Under Review", icon: <FileText size={14} /> },
//       APPROVED: { bg: "#d1fae5", color: "#065f46", label: "Approved", icon: <UserCheck size={14} /> },
//       REJECTED: { bg: "#fee2e2", color: "#991b1b", label: "Rejected", icon: <UserX size={14} /> },
//     };
//     return statusMap[status] || statusMap.NEW;
//   };

//   const getImageUrl = (enquiry) => {
//     if (!enquiry || !enquiry.photo) return null;
//     if (enquiry.photo.startsWith('http')) return enquiry.photo;
//     return `${IMAGE_BASE_URL}/uploads/membership/${enquiry.photo}`;
//   };

//   const getInitials = (name) => {
//     if (!name) return "?";
//     return name
//       .split(" ")
//       .map((word) => word.charAt(0))
//       .join("")
//       .toUpperCase()
//       .slice(0, 2);
//   };

//   const stats = {
//     total: enquiries?.length || 0,
//     new: enquiries?.filter((e) => e.status === "NEW")?.length || 0,
//     approved: enquiries?.filter((e) => e.status === "APPROVED")?.length || 0,
//     underReview: enquiries?.filter((e) => e.status === "UNDER_REVIEW")?.length || 0,
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "—";
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//     });
//   };

//   const statusOptions = [
//     { value: "NEW", label: "New" },
//     { value: "UNDER_REVIEW", label: "Under Review" },
//     { value: "APPROVED", label: "Approved" },
//     { value: "REJECTED", label: "Rejected" },
//   ];

//   return (
//     <div className="enquiry-page">
//       <div className="enquiry-page__container">

//         {/* ============================================
//            HEADER
//            ============================================ */}
//         <div className="enquiry-page__header">
//           <div className="enquiry-page__header-top">
//             <div className="enquiry-page__header-left">
//               <div className="enquiry-page__header-icon">
//                 <UserPlus size={24} strokeWidth={2} />
//               </div>
//               <div>
//                 <h1 className="enquiry-page__title">Membership Enquiries</h1>
//                 <p className="enquiry-page__subtitle">
//                   Review and approve membership applications
//                 </p>
//               </div>
//             </div>

//             <div className="enquiry-page__header-right">
//               <button
//                 onClick={fetchEnquiries}
//                 className="enquiry-page__refresh-btn"
//                 disabled={loading}
//                 title="Refresh data"
//               >
//                 <RefreshCw
//                   size={18}
//                   strokeWidth={2}
//                   className={`enquiry-page__refresh-icon ${
//                     loading ? "enquiry-page__refresh-icon--spinning" : ""
//                   }`}
//                 />
//               </button>
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="enquiry-page__stats">
//             <div className="enquiry-page__stat-item">
//               <span className="enquiry-page__stat-value">{stats.total}</span>
//               <span className="enquiry-page__stat-label">Total Applications</span>
//             </div>
//             <div className="enquiry-page__stat-divider" />
//             <div className="enquiry-page__stat-item enquiry-page__stat-item--new">
//               <span className="enquiry-page__stat-value">{stats.new}</span>
//               <span className="enquiry-page__stat-label">New</span>
//             </div>
//             <div className="enquiry-page__stat-divider" />
//             <div className="enquiry-page__stat-item enquiry-page__stat-item--review">
//               <span className="enquiry-page__stat-value">{stats.underReview}</span>
//               <span className="enquiry-page__stat-label">Under Review</span>
//             </div>
//             <div className="enquiry-page__stat-divider" />
//             <div className="enquiry-page__stat-item enquiry-page__stat-item--approved">
//               <span className="enquiry-page__stat-value">{stats.approved}</span>
//               <span className="enquiry-page__stat-label">Approved</span>
//             </div>
//           </div>
//         </div>

//         {/* ============================================
//            TOOLBAR
//            ============================================ */}
//         <div className="enquiry-page__toolbar">
//           <div className="enquiry-page__toolbar-left">
//             {/* Search */}
//             <div className="enquiry-page__search">
//               <Search className="enquiry-page__search-icon" size={18} strokeWidth={2} />
//               <input
//                 type="text"
//                 placeholder="Search enquiries..."
//                 value={searchInput}
//                 onChange={handleSearchChange}
//                 className="enquiry-page__search-input"
//               />
//               {searchInput && (
//                 <button
//                   onClick={() => {
//                     setSearchInput("");
//                     setSearch("");
//                   }}
//                   className="enquiry-page__search-clear"
//                   aria-label="Clear search"
//                 >
//                   <X size={16} strokeWidth={2} />
//                 </button>
//               )}
//             </div>

//             {/* Status Filter */}
//             <div className="enquiry-page__filter">
//               <Filter size={16} strokeWidth={2} />
//               <select
//                 value={filterStatus}
//                 onChange={(e) => setFilterStatus(e.target.value)}
//                 className="enquiry-page__filter-select"
//               >
//                 <option value="all">All Status</option>
//                 <option value="NEW">New</option>
//                 <option value="UNDER_REVIEW">Under Review</option>
//                 <option value="APPROVED">Approved</option>
//                 <option value="REJECTED">Rejected</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* ============================================
//            TABLE
//            ============================================ */}
//         <div className="enquiry-page__table-wrapper">
//           <table className="enquiry-page__table">
//             <thead>
//               <tr>
//                 <th>Photo</th>
//                 <th>Name</th>
//                 <th>Membership</th>
//                 <th>Email</th>
//                 <th>Mobile</th>
//                 <th>Submitted</th>
//                 <th>Status</th>
//                 <th className="text-center">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loading ? (
//                 <tr>
//                   <td colSpan={8} className="enquiry-page__table-loading">
//                     <div className="spinner"></div>
//                     <p>Loading membership enquiries...</p>
//                   </td>
//                 </tr>
//               ) : filteredEnquiries.length === 0 ? (
//                 <tr>
//                   <td colSpan={8} className="enquiry-page__table-empty">
//                     <UserPlus size={48} className="empty-icon" />
//                     <h3>No membership enquiries found</h3>
//                     <p>
//                       {search
//                         ? `No results found for "${search}". Try adjusting your search.`
//                         : "No membership applications have been submitted yet."}
//                     </p>
//                   </td>
//                 </tr>
//               ) : (
//                 currentItems.map((item) => {
//                   const statusStyle = getStatusColor(item.status);
//                   const imageUrl = getImageUrl(item);
//                   const isDeleting = deletingId === item.id;
//                   const isUpdating = updatingId === item.id;
//                   const isApproving = approvingId === item.id;

//                   return (
//                     <tr key={item.id} className="enquiry-page__table-row">
//                       <td>
//                         <div className="enquiry-page__table-avatar">
//                           {imageUrl ? (
//                             <img
//                               src={imageUrl}
//                               alt={item.fullName}
//                               className="avatar-image"
//                               loading="lazy"
//                             />
//                           ) : (
//                             <div className="avatar-placeholder">
//                               {getInitials(item.fullName)}
//                             </div>
//                           )}
//                         </div>
//                       </td>
//                       <td>
//                         <span className="enquiry-page__table-name">{item.fullName}</span>
//                       </td>
//                       <td>
//                         <span className="enquiry-page__table-membership">
//                           <Award size={14} />
//                           {item.membershipType || "—"}
//                         </span>
//                       </td>
//                       <td>
//                         <span className="enquiry-page__table-email">
//                           <Mail size={14} />
//                           {item.email}
//                         </span>
//                       </td>
//                       <td>
//                         <span className="enquiry-page__table-phone">
//                           <Phone size={14} />
//                           {item.mobile || "—"}
//                         </span>
//                       </td>
//                       <td>
//                         <span className="enquiry-page__table-date">
//                           <Calendar size={14} />
//                           {formatDate(item.createdAt || item.submittedAt)}
//                         </span>
//                       </td>
//                       <td>
//                         <div className="enquiry-page__table-status">
//                           <select
//                             value={item.status}
//                             onChange={(e) => handleStatus(item.id, e.target.value)}
//                             disabled={isUpdating}
//                             className="status-select"
//                             style={{
//                               backgroundColor: statusStyle.bg,
//                               color: statusStyle.color,
//                               borderColor: `${statusStyle.color}40`,
//                             }}
//                           >
//                             {statusOptions.map((opt) => (
//                               <option key={opt.value} value={opt.value}>
//                                 {opt.label}
//                               </option>
//                             ))}
//                           </select>
//                           {isUpdating && (
//                             <span className="status-updating">Updating...</span>
//                           )}
//                         </div>
//                       </td>
//                       <td>
//                         <div className="enquiry-page__table-actions">
//                           <Link
//                             to={`/admin/membership-enquiries/view/${item.id}`}
//                             className="action-btn view-btn"
//                             title="View Details"
//                           >
//                             <Eye size={16} />
//                           </Link>
//                           {item.status !== "APPROVED" && (
//                             <button
//                               onClick={() => handleApprove(item.id)}
//                               className="action-btn approve-btn"
//                               title="Approve"
//                               disabled={isApproving}
//                             >
//                               {isApproving ? (
//                                 <span className="spinner-small"></span>
//                               ) : (
//                                 <CheckCircle size={16} />
//                               )}
//                             </button>
//                           )}
//                           <button
//                             onClick={() => handleDeleteClick(item)}
//                             className="action-btn delete-btn"
//                             title="Delete"
//                             disabled={isDeleting}
//                           >
//                             <Trash2 size={16} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   );
//                 })
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* ============================================
//            PAGINATION
//            ============================================ */}
//         {!loading && totalPages > 1 && (
//           <div className="enquiry-page__pagination">
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
//         {!loading && filteredEnquiries.length > 0 && (
//           <div className="enquiry-page__footer">
//             <p className="enquiry-page__count">
//               Showing <strong>{filteredEnquiries.length}</strong> {filteredEnquiries.length === 1 ? "application" : "applications"}
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
//                 <h2>Delete Membership Enquiry</h2>
//               </div>
//               <div className="modal__body">
//                 <p>
//                   Are you sure you want to delete <strong>"{selectedEnquiry?.fullName}"</strong>'s application?
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
//                   disabled={deletingId === selectedEnquiry?.id}
//                 >
//                   {deletingId === selectedEnquiry?.id ? (
//                     <>
//                       <span className="spinner-btn"></span>
//                       Deleting...
//                     </>
//                   ) : (
//                     <>
//                       <Trash2 size={16} />
//                       Delete Application
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MembershipEnquiries;

// src/pages/admin/membership-enquiry/MembershipEnquiries.jsx

import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Search,
  Eye,
  Trash2,
  CheckCircle,
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
  Clock,
  UserCheck,
  UserX,
  FileText,
  Award,
  UserPlus,
  Send,
  Edit3,
  PlayCircle,
  UserCheck as UserApprove,
} from "lucide-react";

import {
  getAllMembershipEnquiries,
  deleteMembershipEnquiry,
} from "../../../api/membershipEnquiry.api";

import {
  startMembershipReview,
  sendMembershipRegistration,
  requestMembershipChanges,
  approveMembershipMember,
} from "../../../api/membershipWorkflow.api";

import "./MembershipEnquiries.css";

const MembershipEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [deletingId, setDeletingId] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);

  const searchTimeoutRef = useRef(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  const fetchEnquiries = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllMembershipEnquiries({ search });
      const data = res.data?.data?.membershipEnquiries || res.data?.data || res.data?.membershipEnquiries || [];
      setEnquiries(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch membership enquiries.");
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

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

  const handleAction = async (id, action, actionFn) => {
    try {
      setActionLoading({ id, action });
      await actionFn(id);
      toast.success("Action completed successfully");
      fetchEnquiries();
    } catch (error) {
      toast.error(error.response?.data?.message || "Action failed");
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async () => {
    if (!selectedEnquiry) return;
    try {
      setDeletingId(selectedEnquiry.id);
      await deleteMembershipEnquiry(selectedEnquiry.id);
      toast.success("Membership enquiry deleted.");
      setShowDeleteModal(false);
      setSelectedEnquiry(null);
      fetchEnquiries();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleDeleteClick = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setShowDeleteModal(true);
  };


  const filteredEnquiries = filterStatus === "all" 
    ? enquiries 
    : enquiries.filter(e => e.status === filterStatus);

// const filteredEnquiries = enquiries.filter(e => {
//   // First filter by status dropdown
//   if (filterStatus !== "all") {
//     return e.status === filterStatus;
//   }
//   // When "All Status" is selected, hide APPROVED and REJECTED
//   return e.status !== "APPROVED" && e.status !== "REJECTED";
// });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEnquiries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredEnquiries.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusColor = (status) => {
    const statusMap = {
      NEW: { bg: "#eff6ff", color: "#1e40af", label: "New", icon: <Clock size={14} /> },
      UNDER_REVIEW: { bg: "#fef3c7", color: "#92400e", label: "Under Review", icon: <FileText size={14} /> },
      REGISTRATION_PENDING: { bg: "#e0e7ff", color: "#3730a3", label: "Registration Pending", icon: <Send size={14} /> },
      REGISTRATION_SUBMITTED: { bg: "#dbeafe", color: "#1e40af", label: "Registration Submitted", icon: <CheckCircle size={14} /> },
      CHANGES_REQUESTED: { bg: "#fce7f3", color: "#9d174d", label: "Changes Requested", icon: <Edit3 size={14} /> },
      APPROVED: { bg: "#d1fae5", color: "#065f46", label: "Approved", icon: <UserCheck size={14} /> },
      REJECTED: { bg: "#fee2e2", color: "#991b1b", label: "Rejected", icon: <UserX size={14} /> },
    };
    return statusMap[status] || statusMap.NEW;
  };

  const getImageUrl = (enquiry) => {
    if (!enquiry || !enquiry.photo) return null;
    if (enquiry.photo.startsWith('http')) return enquiry.photo;
    return `${IMAGE_BASE_URL}/uploads/membership/${enquiry.photo}`;
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const stats = {
    total: enquiries?.length || 0,
    new: enquiries?.filter((e) => e.status === "NEW")?.length || 0,
    underReview: enquiries?.filter((e) => e.status === "UNDER_REVIEW")?.length || 0,
    registrationPending: enquiries?.filter((e) => e.status === "REGISTRATION_PENDING")?.length || 0,
    registrationSubmitted: enquiries?.filter((e) => e.status === "REGISTRATION_SUBMITTED")?.length || 0,
    changesRequested: enquiries?.filter((e) => e.status === "CHANGES_REQUESTED")?.length || 0,
    approved: enquiries?.filter((e) => e.status === "APPROVED")?.length || 0,
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
    { value: "REGISTRATION_PENDING", label: "Registration Pending" },
    { value: "REGISTRATION_SUBMITTED", label: "Registration Submitted" },
    { value: "CHANGES_REQUESTED", label: "Changes Requested" },
    { value: "APPROVED", label: "Approved" },
  ];

  // Get available actions based on status
  const getAvailableActions = (status) => {
    const actions = {
      NEW: [
        { id: "start-review", label: "Start Review", icon: <PlayCircle size={16} />, action: startMembershipReview, color: "primary" },
      ],
      UNDER_REVIEW: [
        { id: "send-registration", label: "Send Registration", icon: <Send size={16} />, action: sendMembershipRegistration, color: "info" },
      ],
      REGISTRATION_SUBMITTED: [
        { id: "approve", label: "Approve Member", icon: <UserApprove size={16} />, action: approveMembershipMember, color: "success" },
        { id: "request-changes", label: "Request Changes", icon: <Edit3 size={16} />, action: requestMembershipChanges, color: "warning" },
      ],
      CHANGES_REQUESTED: [
        { id: "approve", label: "Approve Member", icon: <UserApprove size={16} />, action: approveMembershipMember, color: "success" },
      ],
      REGISTRATION_PENDING: [
        { id: "resend-registration", label: "Resend Registration", icon: <Send size={16} />, action: sendMembershipRegistration, color: "info" },
      ],
      APPROVED: [],
      REJECTED: [],
    };
    return actions[status] || [];
  };

  return (
    <div className="enquiry-page">
      <div className="enquiry-page__container">

        {/* ============================================
           HEADER
           ============================================ */}
        <div className="enquiry-page__header">
          <div className="enquiry-page__header-top">
            <div className="enquiry-page__header-left">
              <div className="enquiry-page__header-icon">
                <UserPlus size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="enquiry-page__title">Membership Enquiries</h1>
                <p className="enquiry-page__subtitle">
                  Review and approve membership applications
                </p>
              </div>
            </div>

            <div className="enquiry-page__header-right">
              <button
                onClick={fetchEnquiries}
                className="enquiry-page__refresh-btn"
                disabled={loading}
                title="Refresh data"
              >
                <RefreshCw
                  size={18}
                  strokeWidth={2}
                  className={`enquiry-page__refresh-icon ${
                    loading ? "enquiry-page__refresh-icon--spinning" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="enquiry-page__stats">
            <div className="enquiry-page__stat-item">
              <span className="enquiry-page__stat-value">{stats.total}</span>
              <span className="enquiry-page__stat-label">Total</span>
            </div>
            <div className="enquiry-page__stat-divider" />
            <div className="enquiry-page__stat-item enquiry-page__stat-item--new">
              <span className="enquiry-page__stat-value">{stats.new}</span>
              <span className="enquiry-page__stat-label">New</span>
            </div>
            <div className="enquiry-page__stat-divider" />
            <div className="enquiry-page__stat-item enquiry-page__stat-item--review">
              <span className="enquiry-page__stat-value">{stats.underReview}</span>
              <span className="enquiry-page__stat-label">Under Review</span>
            </div>
            <div className="enquiry-page__stat-divider" />
            <div className="enquiry-page__stat-item enquiry-page__stat-item--pending">
              <span className="enquiry-page__stat-value">{stats.registrationPending}</span>
              <span className="enquiry-page__stat-label">Reg. Pending</span>
            </div>
            <div className="enquiry-page__stat-divider" />
            <div className="enquiry-page__stat-item enquiry-page__stat-item--submitted">
              <span className="enquiry-page__stat-value">{stats.registrationSubmitted}</span>
              <span className="enquiry-page__stat-label">Reg. Submitted</span>
            </div>
            <div className="enquiry-page__stat-divider" />
            <div className="enquiry-page__stat-item enquiry-page__stat-item--changes">
              <span className="enquiry-page__stat-value">{stats.changesRequested}</span>
              <span className="enquiry-page__stat-label">Changes</span>
            </div>
            <div className="enquiry-page__stat-divider" />
            <div className="enquiry-page__stat-item enquiry-page__stat-item--approved">
              <span className="enquiry-page__stat-value">{stats.approved}</span>
              <span className="enquiry-page__stat-label">Approved</span>
            </div>
          </div>
        </div>

        {/* ============================================
           TOOLBAR
           ============================================ */}
        <div className="enquiry-page__toolbar">
          <div className="enquiry-page__toolbar-left">
            {/* Search */}
            <div className="enquiry-page__search">
              <Search className="enquiry-page__search-icon" size={18} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search enquiries..."
                value={searchInput}
                onChange={handleSearchChange}
                className="enquiry-page__search-input"
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                  className="enquiry-page__search-clear"
                  aria-label="Clear search"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="enquiry-page__filter">
              <Filter size={16} strokeWidth={2} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="enquiry-page__filter-select"
              >
                <option value="all">All Status</option>
                {statusOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ============================================
           TABLE
           ============================================ */}
        <div className="enquiry-page__table-wrapper">
          <table className="enquiry-page__table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Membership</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Submitted</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="enquiry-page__table-loading">
                    <div className="spinner"></div>
                    <p>Loading membership enquiries...</p>
                  </td>
                </tr>
              ) : filteredEnquiries.length === 0 ? (
                <tr>
                  <td colSpan={8} className="enquiry-page__table-empty">
                    <UserPlus size={48} className="empty-icon" />
                    <h3>No membership enquiries found</h3>
                    <p>
                      {search
                        ? `No results found for "${search}". Try adjusting your search.`
                        : "No membership applications have been submitted yet."}
                    </p>
                  </td>
                </tr>
              ) : (
                currentItems.map((item) => {
                  const statusStyle = getStatusColor(item.status);
                  const imageUrl = getImageUrl(item);
                  const isDeleting = deletingId === item.id;
                  const availableActions = getAvailableActions(item.status);
                  const isLoading = actionLoading?.id === item.id;

                  return (
                    <tr key={item.id} className="enquiry-page__table-row">
                      <td>
                        <div className="enquiry-page__table-avatar">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={item.fullName}
                              className="avatar-image"
                              loading="lazy"
                            />
                          ) : (
                            <div className="avatar-placeholder">
                              {getInitials(item.fullName)}
                            </div>
                          )}
                        </div>
                      </td>
                      <td>
                        <span className="enquiry-page__table-name">{item.fullName}</span>
                      </td>
                      <td>
                        <span className="enquiry-page__table-membership">
                          <Award size={14} />
                          {item.membershipType || "—"}
                        </span>
                      </td>
                      <td>
                        <span className="enquiry-page__table-email">
                          <Mail size={14} />
                          {item.email}
                        </span>
                      </td>
                      <td>
                        <span className="enquiry-page__table-phone">
                          <Phone size={14} />
                          {item.mobile || "—"}
                        </span>
                      </td>
                      <td>
                        <span className="enquiry-page__table-date">
                          <Calendar size={14} />
                          {formatDate(item.createdAt || item.submittedAt)}
                        </span>
                      </td>
                      <td>
                        <div 
                          className="enquiry-page__table-status"
                          style={{
                            backgroundColor: statusStyle.bg,
                            color: statusStyle.color,
                            borderColor: `${statusStyle.color}40`,
                          }}
                        >
                          {statusStyle.icon}
                          <span>{statusStyle.label}</span>
                        </div>
                      </td>
                      <td>
                        <div className="enquiry-page__table-actions">
                          {/* View */}
                          <Link
                            to={`/admin/membership-enquiries/view/${item.id}`}
                            className="action-btn view-btn"
                            title="View Details"
                          >
                            <Eye size={16} />
                          </Link>

                          {/* Workflow Actions */}
                          {availableActions.map((action) => (
                            <button
                              key={action.id}
                              onClick={() => {
                                if (action.id === "request-changes") {
                                  // Open modal for changes
                                  setSelectedEnquiry(item);
                                  // You can add a modal here for remarks
                                  // For now, use a prompt
                                  const remarks = prompt("Enter the changes required:");
                                  if (remarks !== null) {
                                    handleAction(item.id, action.id, () => 
                                      requestMembershipChanges(item.id, { remarks })
                                    );
                                  }
                                } else {
                                  handleAction(item.id, action.id, action.action);
                                }
                              }}
                              disabled={isLoading || isDeleting}
                              className={`action-btn action-btn--${action.color}`}
                            >
                              {isLoading ? (
                                <span className="spinner-small"></span>
                              ) : (
                                action.icon
                              )}
                              <span className="action-label">{action.label}</span>
                            </button>
                          ))}

                          {/* Delete */}
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
          <div className="enquiry-page__pagination">
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
        {!loading && filteredEnquiries.length > 0 && (
          <div className="enquiry-page__footer">
            <p className="enquiry-page__count">
              Showing <strong>{filteredEnquiries.length}</strong> {filteredEnquiries.length === 1 ? "application" : "applications"}
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
                <h2>Delete Membership Enquiry</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete <strong>"{selectedEnquiry?.fullName}"</strong>'s application?
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
                  disabled={deletingId === selectedEnquiry?.id}
                >
                  {deletingId === selectedEnquiry?.id ? (
                    <>
                      <span className="spinner-btn"></span>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 size={16} />
                      Delete Application
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

export default MembershipEnquiries;