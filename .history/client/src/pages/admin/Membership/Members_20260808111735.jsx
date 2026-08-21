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
//   getAllMembers,
//   deleteMember,
//   toggleMemberStatus,
// } from "../../../api/members.api";

// const Members = () => {
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   const fetchMembers = async () => {
//     try {
//       setLoading(true);

//       const res = await getAllMembers({
//         search,
//       });

//       const memberData =
//         res.data?.data?.members ||
//         res.data?.data ||
//         res.data?.members ||
//         [];

//       setMembers(Array.isArray(memberData) ? memberData : []);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch members."
//       );

//       setMembers([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMembers();
//   }, [search]);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this member?")) return;

//     try {
//       await deleteMember(id);

//       toast.success("Member deleted successfully.");

//       fetchMembers();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to delete member."
//       );
//     }
//   };

//   const handleStatus = async (id) => {
//     try {
//       await toggleMemberStatus(id);

//       toast.success("Status updated.");

//       fetchMembers();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to update status."
//       );
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Header */}

//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h1 className="text-2xl font-bold">
//             Members Management
//           </h1>

//           <p className="text-gray-500">
//             Manage registered association members.
//           </p>
//         </div>

//         <Link
//           to="/admin/members/create"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//         >
//           <Plus size={18} />
//           Add Member
//         </Link>
//       </div>

//       {/* Search */}

//       <div className="relative mb-6">
//         <Search
//           size={18}
//           className="absolute left-3 top-3 text-gray-400"
//         />

//         <input
//           type="text"
//           placeholder="Search members..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border rounded-lg pl-10 pr-4 py-2 w-full"
//         />
//       </div>

//       {/* Table */}

//       <div className="bg-white rounded-xl shadow overflow-x-auto">
//         <table className="w-full">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-4 text-left">Photo</th>
//               <th className="text-left">Member ID</th>
//               <th className="text-left">Name</th>
//               <th className="text-left">Membership</th>
//               <th className="text-left">Mobile</th>
//               <th className="text-left">Joined</th>
//               <th className="text-left">Status</th>
//               <th className="text-center">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td
//                   colSpan={8}
//                   className="text-center p-8"
//                 >
//                   Loading...
//                 </td>
//               </tr>
//             ) : members.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={8}
//                   className="text-center p-8 text-gray-500"
//                 >
//                   No members found.
//                 </td>
//               </tr>
//             ) : (
//               members.map((member) => (
//                 <tr
//                   key={member.id}
//                   className="border-t"
//                 >
//                   <td className="p-4">
//                     <img
//                       src={`${import.meta.env.VITE_API_BASE_URL.replace(
//                         "/api",
//                         ""
//                       )}/uploads/members/${member.photo}`}
//                       alt={member.fullName}
//                       className="w-14 h-14 rounded-full object-cover"
//                     />
//                   </td>

//                   <td>{member.memberId}</td>

//                   <td>
//                     <div className="font-medium">
//                       {member.fullName}
//                     </div>

//                     <div className="text-sm text-gray-500">
//                       {member.email}
//                     </div>
//                   </td>

//                   <td>{member.membershipType}</td>

//                   <td>{member.mobile}</td>

//                   <td>{member.joinedDate}</td>

//                   <td>
//                     <button
//                       onClick={() =>
//                         handleStatus(member.id)
//                       }
//                       className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
//                         member.isActive
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {member.isActive ? (
//                         <>
//                           <CheckCircle size={15} />
//                           Active
//                         </>
//                       ) : (
//                         <>
//                           <XCircle size={15} />
//                           Inactive
//                         </>
//                       )}
//                     </button>
//                   </td>

//                   <td>
//                     <div className="flex justify-center gap-4">
//                       <Link
//                         to={`/admin/members/edit/${member.id}`}
//                       >
//                         <Pencil
//                           size={18}
//                           className="text-blue-600"
//                         />
//                       </Link>

//                       <button
//                         onClick={() =>
//                           handleDelete(member.id)
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

// export default Members;



// src/pages/admin/Members/Members.jsx

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
  Users,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Filter,
  X,
  User,
  Mail,
  Phone,
  Calendar,
  Award,
  AlertCircle,
  Image as ImageIcon,
} from "lucide-react";

import {
  getAllMembers,
  deleteMember,
  toggleMemberStatus,
} from "../../../api/members.api";

import "./Members.css";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterMembership, setFilterMembership] = useState("all");
  const [imageErrors, setImageErrors] = useState(new Set());

  const searchTimeoutRef = useRef(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  const fetchMembers = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllMembers({ search });
      
      const memberData = res.data?.data?.members || res.data?.data || res.data?.members || [];
      
      setMembers(Array.isArray(memberData) ? memberData : []);
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error(error.response?.data?.message || "Failed to fetch members.");
      setMembers([]);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

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
    if (!selectedMember) return;
    try {
      await deleteMember(selectedMember.id);
      toast.success("Member deleted successfully.");
      setShowDeleteModal(false);
      setSelectedMember(null);
      fetchMembers();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete member.");
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleMemberStatus(id);
      toast.success("Status updated successfully.");
      fetchMembers();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status.");
    }
  };

  const handleImageError = (memberId) => {
    setImageErrors((prev) => new Set([...prev, memberId]));
  };

  const getImageUrl = (member) => {
    if (!member || !member.photo) return null;
    if (imageErrors.has(member.id)) return null;
    
    if (member.photo.startsWith('http')) return member.photo;
    
    return `${IMAGE_BASE_URL}/uploads/members/${member.photo}`;
  };

  const handleDeleteClick = (member) => {
    setSelectedMember(member);
    setShowDeleteModal(true);
  };

  // Get unique membership types for filter
  const membershipTypes = ["all", ...new Set(members.map(m => m.membershipType).filter(Boolean))];

  // Filter by status and membership type
  const filteredMembers = members.filter(m => {
    const statusMatch = filterStatus === "all" ? true : (filterStatus === "active" ? m.isActive : !m.isActive);
    const membershipMatch = filterMembership === "all" ? true : m.membershipType === filterMembership;
    return statusMatch && membershipMatch;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMembers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);

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
    total: members?.length || 0,
    active: members?.filter((m) => m.isActive)?.length || 0,
    inactive: members?.filter((m) => !m.isActive)?.length || 0,
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
    <div className="members-page">
      <div className="members-page__container">

        {/* ============================================
           HEADER
           ============================================ */}
        <div className="members-page__header">
          <div className="members-page__header-top">
            <div className="members-page__header-left">
              <div className="members-page__header-icon">
                <Users size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="members-page__title">Members Management</h1>
                <p className="members-page__subtitle">
                  Manage registered association members
                </p>
              </div>
            </div>

            <div className="members-page__header-right">
              <button
                onClick={fetchMembers}
                className="members-page__refresh-btn"
                disabled={loading}
                title="Refresh data"
              >
                <RefreshCw
                  size={18}
                  strokeWidth={2}
                  className={`members-page__refresh-icon ${
                    loading ? "members-page__refresh-icon--spinning" : ""
                  }`}
                />
              </button>

              <Link to="/admin/members/create" className="members-page__add-btn">
                <Plus size={18} strokeWidth={2} />
                <span>Add Member</span>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="members-page__stats">
            <div className="members-page__stat-item">
              <span className="members-page__stat-value">{stats.total}</span>
              <span className="members-page__stat-label">Total Members</span>
            </div>
            <div className="members-page__stat-divider" />
            <div className="members-page__stat-item members-page__stat-item--active">
              <span className="members-page__stat-value">{stats.active}</span>
              <span className="members-page__stat-label">Active</span>
            </div>
            <div className="members-page__stat-divider" />
            <div className="members-page__stat-item members-page__stat-item--inactive">
              <span className="members-page__stat-value">{stats.inactive}</span>
              <span className="members-page__stat-label">Inactive</span>
            </div>
          </div>
        </div>

        {/* ============================================
           TOOLBAR
           ============================================ */}
        <div className="members-page__toolbar">
          <div className="members-page__toolbar-left">
            {/* Search */}
            <div className="members-page__search">
              <Search className="members-page__search-icon" size={18} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search members..."
                value={searchInput}
                onChange={handleSearchChange}
                className="members-page__search-input"
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                  className="members-page__search-clear"
                  aria-label="Clear search"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="members-page__filter">
              <Filter size={16} strokeWidth={2} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="members-page__filter-select"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Membership Type Filter */}
            <div className="members-page__filter">
              <Award size={16} strokeWidth={2} />
              <select
                value={filterMembership}
                onChange={(e) => setFilterMembership(e.target.value)}
                className="members-page__filter-select"
              >
                <option value="all">All Types</option>
                {membershipTypes.filter(t => t !== "all").map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* View Toggle */}
          <div className="members-page__view-toggle">
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
          <div className="members-page__loading">
            <div className="spinner"></div>
            <p>Loading members...</p>
          </div>
        ) : filteredMembers.length === 0 ? (
          <div className="members-page__empty">
            <Users size={48} className="empty-icon" />
            <h3>No members found</h3>
            <p>
              {search
                ? `No results found for "${search}". Try adjusting your search.`
                : "Get started by adding your first member."}
            </p>
            {!search && (
              <Link to="/admin/members/create" className="members-page__empty-btn">
                <Plus size={16} strokeWidth={2} />
                <span>Add First Member</span>
              </Link>
            )}
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="members-page__grid">
            {currentItems.map((member) => {
              const imageUrl = getImageUrl(member);

              return (
                <div key={member.id} className="member-card">
                  <div className="member-card__media">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={member.fullName}
                        className="member-card__image"
                        onError={() => handleImageError(member.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="member-card__image-placeholder">
                        <User size={32} strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="member-card__status-badge">
                      {getStatusBadge(member.isActive)}
                    </div>
                  </div>

                  <div className="member-card__content">
                    <h3 className="member-card__name">{member.fullName}</h3>
                    
                    <div className="member-card__meta">
                      <span className="member-card__meta-item">
                        <Award size={14} />
                        {member.membershipType}
                      </span>
                      <span className="member-card__meta-item">
                        <Mail size={14} />
                        {member.email}
                      </span>
                      <span className="member-card__meta-item">
                        <Phone size={14} />
                        {member.mobile}
                      </span>
                      <span className="member-card__meta-item">
                        <Calendar size={14} />
                        {formatDate(member.joinedDate)}
                      </span>
                    </div>

                    <div className="member-card__footer">
                      <span className="member-card__id">
                        ID: {member.memberId}
                      </span>
                      <div className="member-card__actions">
                        <Link
                          to={`/admin/members/edit/${member.id}`}
                          className="member-card__action member-card__action--edit"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(member)}
                          className="member-card__action member-card__action--delete"
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
          <div className="members-page__table-wrapper">
            <table className="members-page__table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Member ID</th>
                  <th>Name</th>
                  <th>Membership</th>
                  <th>Mobile</th>
                  <th>Joined</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((member) => {
                  const imageUrl = getImageUrl(member);

                  return (
                    <tr key={member.id}>
                      <td>
                        <div className="table-avatar">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={member.fullName}
                              className="table-avatar__image"
                              onError={() => handleImageError(member.id)}
                              loading="lazy"
                            />
                          ) : (
                            <div className="table-avatar__placeholder">
                              <User size={20} strokeWidth={1.5} />
                            </div>
                          )}
                        </div>
                      </td>
                      <td>
                        <span className="table-id">{member.memberId}</span>
                      </td>
                      <td>
                        <div className="table-name">{member.fullName}</div>
                        <div className="table-email">{member.email}</div>
                      </td>
                      <td>
                        <span className="table-membership">{member.membershipType}</span>
                      </td>
                      <td>
                        <span className="table-mobile">{member.mobile}</span>
                      </td>
                      <td>
                        <span className="table-joined">{formatDate(member.joinedDate)}</span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleStatus(member.id)}
                          className="status-toggle-btn"
                        >
                          {getStatusBadge(member.isActive)}
                        </button>
                      </td>
                      <td>
                        <div className="table-actions">
                          <Link
                            to={`/admin/members/edit/${member.id}`}
                            className="table-action table-action--edit"
                            title="Edit"
                          >
                            <Pencil size={16} />
                          </Link>
                          <button
                            onClick={() => handleDeleteClick(member)}
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
          <div className="members-page__pagination">
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
        {!loading && filteredMembers.length > 0 && (
          <div className="members-page__footer">
            <p className="members-page__count">
              Showing <strong>{filteredMembers.length}</strong> {filteredMembers.length === 1 ? "member" : "members"}
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
                <h2>Delete Member</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete <strong>"{selectedMember?.fullName}"</strong>?
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
                  Delete Member
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Members;