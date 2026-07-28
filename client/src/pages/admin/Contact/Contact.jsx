// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import {
//   Search,
//   Eye,
//   Trash2,
// } from "lucide-react";

// import {
//   getAllContacts,
//   deleteContact,
//   updateContactStatus,
// } from "../../../api/contact.api";

// const Contact = () => {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   const fetchContacts = async () => {
//     try {
//       setLoading(true);

//       const res = await getAllContacts({ search });

//       const data =
//         res.data?.data?.contacts ||
//         res.data?.data ||
//         res.data?.contacts ||
//         [];

//       setContacts(Array.isArray(data) ? data : []);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch contact enquiries."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, [search]);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this enquiry?")) return;

//     try {
//       await deleteContact(id);

//       toast.success("Enquiry deleted successfully.");

//       fetchContacts();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Delete failed."
//       );
//     }
//   };

//   const handleStatusChange = async (id, status) => {
//     try {
//       await updateContactStatus(id, {
//         status,
//       });

//       toast.success("Status updated.");

//       fetchContacts();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Status update failed."
//       );
//     }
//   };

//   return (
//     <div className="p-6">

//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">
//           Contact Enquiries
//         </h1>

//         <p className="text-gray-500">
//           All enquiries submitted through the website.
//         </p>
//       </div>

//       <div className="relative mb-6">
//         <Search
//           size={18}
//           className="absolute left-3 top-3 text-gray-400"
//         />

//         <input
//           value={search}
//           onChange={(e) =>
//             setSearch(e.target.value)
//           }
//           className="border rounded-lg pl-10 py-2 w-full"
//           placeholder="Search by name, email or phone"
//         />
//       </div>

//       <div className="bg-white rounded-xl shadow overflow-x-auto">

//         <table className="w-full">

//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-4 text-left">Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>Subject</th>
//               <th>Submitted</th>
//               <th>Status</th>
//               <th className="text-center">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           <tbody>

//             {loading ? (
//               <tr>
//                 <td
//                   colSpan={7}
//                   className="text-center p-8"
//                 >
//                   Loading...
//                 </td>
//               </tr>
//             ) : contacts.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={7}
//                   className="text-center p-8"
//                 >
//                   No Contact Enquiries Found
//                 </td>
//               </tr>
//             ) : (
//               contacts.map((item) => (
//                 <tr
//                   key={item.id}
//                   className="border-t"
//                 >
//                   <td className="p-4">
//                     {item.name}
//                   </td>

//                   <td>{item.email}</td>

//                   <td>{item.phone}</td>

//                   <td>{item.subject}</td>

//                   <td>
//                     {new Date(
//                       item.createdAt
//                     ).toLocaleDateString()}
//                   </td>

//                   <td>
//                     <select
//                       value={item.status || "NEW"}
//                       onChange={(e) =>
//                         handleStatusChange(
//                           item.id,
//                           e.target.value
//                         )
//                       }
//                       className="border rounded-lg px-3 py-2 text-sm"
//                     >
//                       <option value="NEW">
//                         New
//                       </option>

//                       <option value="IN_PROGRESS">
//                         In Progress
//                       </option>

//                       <option value="RESOLVED">
//                         Resolved
//                       </option>
//                     </select>
//                   </td>

//                   <td>
//                     <div className="flex justify-center gap-4">

//                       <Link
//                         to={`/admin/contact/view/${item.id}`}
//                       >
//                         <Eye
//                           size={18}
//                           className="text-blue-600"
//                         />
//                       </Link>

//                       <button
//                         onClick={() =>
//                           handleDelete(item.id)
//                         }
//                       >
//                         <Trash2
//                           size={18}
//                           className="text-red-600"
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

// export default Contact;


// src/pages/admin/contact/Contact.jsx

import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Search,
  Eye,
  Trash2,
  MessageSquare,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  AlertCircle,
  Mail,
  Phone,
  Calendar,
  User,
  CheckCircle,
  Clock,
  FileText,
} from "lucide-react";

import {
  getAllContacts,
  deleteContact,
  updateContactStatus,
} from "../../../api/contact.api";

import "./Contact.css";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [deletingId, setDeletingId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const searchTimeoutRef = useRef(null);

  const fetchContacts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllContacts({ search });
      const data = res.data?.data?.contacts || res.data?.data || res.data?.contacts || [];
      setContacts(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch contact enquiries.");
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

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
    if (!selectedContact) return;
    try {
      setDeletingId(selectedContact.id);
      await deleteContact(selectedContact.id);
      toast.success("Enquiry deleted successfully.");
      setShowDeleteModal(false);
      setSelectedContact(null);
      fetchContacts();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleDeleteClick = (contact) => {
    setSelectedContact(contact);
    setShowDeleteModal(true);
  };

  const handleStatusChange = async (id, status) => {
    try {
      setUpdatingId(id);
      await updateContactStatus(id, { status });
      toast.success("Status updated successfully.");
      fetchContacts();
    } catch (error) {
      toast.error(error.response?.data?.message || "Status update failed.");
    } finally {
      setUpdatingId(null);
    }
  };

  // Filter by status
  const filteredContacts = filterStatus === "all" 
    ? contacts 
    : contacts.filter(c => c.status === filterStatus);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredContacts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusColor = (status) => {
    const statusMap = {
      NEW: { bg: "#eff6ff", color: "#1e40af", label: "New", icon: <Clock size={14} /> },
      IN_PROGRESS: { bg: "#fef3c7", color: "#92400e", label: "In Progress", icon: <FileText size={14} /> },
      RESOLVED: { bg: "#d1fae5", color: "#065f46", label: "Resolved", icon: <CheckCircle size={14} /> },
    };
    return statusMap[status] || statusMap.NEW;
  };

  const stats = {
    total: contacts?.length || 0,
    new: contacts?.filter((c) => c.status === "NEW")?.length || 0,
    inProgress: contacts?.filter((c) => c.status === "IN_PROGRESS")?.length || 0,
    resolved: contacts?.filter((c) => c.status === "RESOLVED")?.length || 0,
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
    { value: "IN_PROGRESS", label: "In Progress" },
    { value: "RESOLVED", label: "Resolved" },
  ];

  return (
    <div className="contact-page">
      <div className="contact-page__container">

        {/* ============================================
           HEADER
           ============================================ */}
        <div className="contact-page__header">
          <div className="contact-page__header-top">
            <div className="contact-page__header-left">
              <div className="contact-page__header-icon">
                <MessageSquare size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="contact-page__title">Contact Enquiries</h1>
                <p className="contact-page__subtitle">
                  All enquiries submitted through the website
                </p>
              </div>
            </div>

            <div className="contact-page__header-right">
              <button
                onClick={fetchContacts}
                className="contact-page__refresh-btn"
                disabled={loading}
                title="Refresh data"
              >
                <RefreshCw
                  size={18}
                  strokeWidth={2}
                  className={`contact-page__refresh-icon ${
                    loading ? "contact-page__refresh-icon--spinning" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="contact-page__stats">
            <div className="contact-page__stat-item">
              <span className="contact-page__stat-value">{stats.total}</span>
              <span className="contact-page__stat-label">Total Enquiries</span>
            </div>
            <div className="contact-page__stat-divider" />
            <div className="contact-page__stat-item contact-page__stat-item--new">
              <span className="contact-page__stat-value">{stats.new}</span>
              <span className="contact-page__stat-label">New</span>
            </div>
            <div className="contact-page__stat-divider" />
            <div className="contact-page__stat-item contact-page__stat-item--progress">
              <span className="contact-page__stat-value">{stats.inProgress}</span>
              <span className="contact-page__stat-label">In Progress</span>
            </div>
            <div className="contact-page__stat-divider" />
            <div className="contact-page__stat-item contact-page__stat-item--resolved">
              <span className="contact-page__stat-value">{stats.resolved}</span>
              <span className="contact-page__stat-label">Resolved</span>
            </div>
          </div>
        </div>

        {/* ============================================
           TOOLBAR
           ============================================ */}
        <div className="contact-page__toolbar">
          <div className="contact-page__toolbar-left">
            {/* Search */}
            <div className="contact-page__search">
              <Search className="contact-page__search-icon" size={18} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search by name, email or phone..."
                value={searchInput}
                onChange={handleSearchChange}
                className="contact-page__search-input"
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                  className="contact-page__search-clear"
                  aria-label="Clear search"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="contact-page__filter">
              <Filter size={16} strokeWidth={2} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="contact-page__filter-select"
              >
                <option value="all">All Status</option>
                <option value="NEW">New</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="RESOLVED">Resolved</option>
              </select>
            </div>
          </div>
        </div>

        {/* ============================================
           TABLE
           ============================================ */}
        <div className="contact-page__table-wrapper">
          <table className="contact-page__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Subject</th>
                <th>Submitted</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="contact-page__table-loading">
                    <div className="spinner"></div>
                    <p>Loading contact enquiries...</p>
                  </td>
                </tr>
              ) : filteredContacts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="contact-page__table-empty">
                    <MessageSquare size={48} className="empty-icon" />
                    <h3>No contact enquiries found</h3>
                    <p>
                      {search
                        ? `No results found for "${search}". Try adjusting your search.`
                        : "No enquiries have been submitted through the contact form yet."}
                    </p>
                  </td>
                </tr>
              ) : (
                currentItems.map((item) => {
                  const statusStyle = getStatusColor(item.status);
                  const isDeleting = deletingId === item.id;
                  const isUpdating = updatingId === item.id;

                  return (
                    <tr key={item.id} className="contact-page__table-row">
                      <td>
                        <div className="contact-page__table-name">
                          <User size={14} />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td>
                        <span className="contact-page__table-email">
                          <Mail size={14} />
                          {item.email}
                        </span>
                      </td>
                      <td>
                        <span className="contact-page__table-phone">
                          <Phone size={14} />
                          {item.phone || "—"}
                        </span>
                      </td>
                      <td>
                        <span className="contact-page__table-subject">
                          {item.subject || "—"}
                        </span>
                      </td>
                      <td>
                        <span className="contact-page__table-date">
                          <Calendar size={14} />
                          {formatDate(item.createdAt)}
                        </span>
                      </td>
                      <td>
                        <div className="contact-page__table-status">
                          <select
                            value={item.status || "NEW"}
                            onChange={(e) => handleStatusChange(item.id, e.target.value)}
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
                        <div className="contact-page__table-actions">
                          <Link
                            to={`/admin/contact/view/${item.id}`}
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
          <div className="contact-page__pagination">
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
        {!loading && filteredContacts.length > 0 && (
          <div className="contact-page__footer">
            <p className="contact-page__count">
              Showing <strong>{filteredContacts.length}</strong> {filteredContacts.length === 1 ? "enquiry" : "enquiries"}
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
                <h2>Delete Contact Enquiry</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete this enquiry from <strong>"{selectedContact?.name}"</strong>?
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
                  disabled={deletingId === selectedContact?.id}
                >
                  {deletingId === selectedContact?.id ? (
                    <>
                      <span className="spinner-btn"></span>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 size={16} />
                      Delete Enquiry
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

export default Contact;