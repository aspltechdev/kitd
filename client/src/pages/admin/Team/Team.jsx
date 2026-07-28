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
//   Users,
//   Filter,
//   ChevronDown,
//   RefreshCw,
//   AlertCircle,
//   UserPlus,
//   Image as ImageIcon,
// } from "lucide-react";

// import {
//   getAllTeams,
//   deleteTeam,
//   toggleTeamStatus,
// } from "../../../api/team.api";

// import "./Team.css";

// const Team = () => {
//   const [teams, setTeams] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [deletingId, setDeletingId] = useState(null);
//   const [togglingId, setTogglingId] = useState(null);
//   const [imageErrors, setImageErrors] = useState(new Set());
  
//   const searchTimeoutRef = useRef(null);
//   const [searchInput, setSearchInput] = useState("");

//   const fetchTeams = useCallback(async () => {
//     try {
//       setLoading(true);

//       const res = await getAllTeams({ search });

//       console.log("Team API Response:", res.data);

//       const teamData =
//         res.data?.data?.teams ||
//         res.data?.data ||
//         res.data?.teams ||
//         [];

//       setTeams(Array.isArray(teamData) ? teamData : []);
//     } catch (error) {
//       console.error(error);
//       toast.error(
//         error.response?.data?.message || "Failed to fetch team members."
//       );
//       setTeams([]);
//     } finally {
//       setLoading(false);
//     }
//   }, [search]);

//   useEffect(() => {
//     fetchTeams();
//   }, [fetchTeams]);

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
//     if (!window.confirm("Are you sure you want to delete this team member? This action cannot be undone.")) {
//       return;
//     }

//     try {
//       setDeletingId(id);
//       await deleteTeam(id);
//       toast.success("Team member deleted successfully.");
//       fetchTeams();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Failed to delete team member."
//       );
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   const handleStatus = async (id) => {
//     try {
//       setTogglingId(id);
//       await toggleTeamStatus(id);
//       toast.success("Member status updated successfully.");
//       fetchTeams();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Failed to update status."
//       );
//     } finally {
//       setTogglingId(null);
//     }
//   };

//   const handleImageError = (memberId) => {
//     setImageErrors((prev) => new Set([...prev, memberId]));
//   };

//   const getImageUrl = (member) => {
//     if (!member.image || imageErrors.has(member.id)) return null;
//     return `${import.meta.env.VITE_API_BASE_URL?.replace("/api", "")}/uploads/team/${member.image}`;
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

//   const getCategoryColor = (category) => {
//     const categories = {
//       founder: { color: "#8b5cf6", bg: "#f5f3ff" },
//       "co-founder": { color: "#3b82f6", bg: "#eff6ff" },
//       chairman: { color: "#f59e0b", bg: "#fffbeb" },
//       member: { color: "#10b981", bg: "#ecfdf5" },
//       advisor: { color: "#06b6d4", bg: "#ecfeff" },
//       secretary: { color: "#ec4899", bg: "#fdf2f8" },
//       treasurer: { color: "#14b8a6", bg: "#f0fdfa" },
//     };
//     return categories[category?.toLowerCase()] || { color: "#64748b", bg: "#f1f5f9" };
//   };

//   const stats = {
//     total: teams?.length || 0,
//     active: teams?.filter((m) => m.isActive)?.length || 0,
//     inactive: teams?.filter((m) => !m.isActive)?.length || 0,
//   };

//   return (
//     <div className="team-management">
//       {/* Page Header */}
//       <div className="team-management__header">
//         <div className="team-management__header-content">
//           <div className="team-management__header-left">
//             <div className="team-management__header-icon">
//               <Users size={24} strokeWidth={2} />
//             </div>
//             <div className="team-management__header-text">
//               <h1 className="team-management__title">Team Management</h1>
//               <p className="team-management__subtitle">
//                 Manage founders, committee members, and team profiles
//               </p>
//             </div>
//           </div>

//           <div className="team-management__header-actions">
//             <button
//               onClick={fetchTeams}
//               className="team-management__refresh-btn"
//               disabled={loading}
//               title="Refresh data"
//             >
//               <RefreshCw
//                 size={18}
//                 strokeWidth={2}
//                 className={`team-management__refresh-icon ${
//                   loading ? "team-management__refresh-icon--spinning" : ""
//                 }`}
//               />
//             </button>

//             <Link to="/admin/team/create" className="team-management__add-btn">
//               <Plus size={18} strokeWidth={2} />
//               <span>Add Member</span>
//             </Link>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         <div className="team-management__stats">
//           <div className="team-management__stat-item">
//             <span className="team-management__stat-value">{stats.total}</span>
//             <span className="team-management__stat-label">Total</span>
//           </div>
//           <div className="team-management__stat-divider" />
//           <div className="team-management__stat-item team-management__stat-item--active">
//             <span className="team-management__stat-value">{stats.active}</span>
//             <span className="team-management__stat-label">Active</span>
//           </div>
//           <div className="team-management__stat-divider" />
//           <div className="team-management__stat-item team-management__stat-item--inactive">
//             <span className="team-management__stat-value">{stats.inactive}</span>
//             <span className="team-management__stat-label">Inactive</span>
//           </div>
//         </div>
//       </div>

//       {/* Search & Filters */}
//       <div className="team-management__toolbar">
//         <div className="team-management__search">
//           <Search className="team-management__search-icon" size={18} strokeWidth={2} />
//           <input
//             type="text"
//             placeholder="Search by name, designation, or category..."
//             value={searchInput}
//             onChange={handleSearchChange}
//             className="team-management__search-input"
//           />
//           {searchInput && (
//             <button
//               onClick={() => {
//                 setSearchInput("");
//                 setSearch("");
//               }}
//               className="team-management__search-clear"
//               aria-label="Clear search"
//             >
//               <XCircle size={16} strokeWidth={2} />
//             </button>
//           )}
//         </div>

//         <button className="team-management__filter-btn">
//           <Filter size={16} strokeWidth={2} />
//           <span>Filters</span>
//           <ChevronDown size={14} strokeWidth={2} />
//         </button>
//       </div>

//       {/* Table */}
//       <div className="team-management__table-container">
//         <table className="team-management__table">
//           <thead className="team-management__table-head">
//             <tr>
//               <th className="team-management__th team-management__th--photo">Photo</th>
//               <th className="team-management__th team-management__th--name">Name</th>
//               <th className="team-management__th team-management__th--designation">Designation</th>
//               <th className="team-management__th team-management__th--category">Category</th>
//               <th className="team-management__th team-management__th--order">Order</th>
//               <th className="team-management__th team-management__th--status">Status</th>
//               <th className="team-management__th team-management__th--actions">Actions</th>
//             </tr>
//           </thead>

//           <tbody className="team-management__table-body">
//             {/* Loading State */}
//             {loading && (
//               <tr>
//                 <td colSpan={7} className="team-management__table-empty">
//                   <div className="team-management__loading">
//                     <div className="team-management__loading-spinner" />
//                     <p className="team-management__loading-text">Loading team members...</p>
//                   </div>
//                 </td>
//               </tr>
//             )}

//             {/* Empty State */}
//             {!loading && teams?.length === 0 && (
//               <tr>
//                 <td colSpan={7} className="team-management__table-empty">
//                   <div className="team-management__empty">
//                     <div className="team-management__empty-icon">
//                       <UserPlus size={48} strokeWidth={1.5} />
//                     </div>
//                     <h3 className="team-management__empty-title">No team members found</h3>
//                     <p className="team-management__empty-text">
//                       {search
//                         ? `No results found for "${search}". Try adjusting your search.`
//                         : "Get started by adding your first team member."}
//                     </p>
//                     {!search && (
//                       <Link to="/admin/team/create" className="team-management__empty-btn">
//                         <Plus size={16} strokeWidth={2} />
//                         <span>Add First Member</span>
//                       </Link>
//                     )}
//                   </div>
//                 </td>
//               </tr>
//             )}

//             {/* Table Rows */}
//             {!loading &&
//               (teams || []).map((member) => {
//                 const categoryStyle = getCategoryColor(member.category);
//                 const imageUrl = getImageUrl(member);
//                 const isDeleting = deletingId === member.id;
//                 const isToggling = togglingId === member.id;

//                 return (
//                   <tr
//                     key={member.id || member._id}
//                     className={`team-management__row ${
//                       isDeleting ? "team-management__row--deleting" : ""
//                     }`}
//                   >
//                     {/* Photo */}
//                     <td className="team-management__td team-management__td--photo">
//                       {imageUrl ? (
//                         <img
//                           src={imageUrl}
//                           alt={member.name}
//                           className="team-management__avatar"
//                           onError={() => handleImageError(member.id)}
//                           loading="lazy"
//                         />
//                       ) : (
//                         <div className="team-management__avatar-placeholder">
//                           {getInitials(member.name)}
//                         </div>
//                       )}
//                     </td>

//                     {/* Name */}
//                     <td className="team-management__td team-management__td--name">
//                       <span className="team-management__member-name">
//                         {member.name}
//                       </span>
//                     </td>

//                     {/* Designation */}
//                     <td className="team-management__td team-management__td--designation">
//                       {member.designation || "—"}
//                     </td>

//                     {/* Category */}
//                     <td className="team-management__td team-management__td--category">
//                       <span
//                         className="team-management__category-badge"
//                         style={{
//                           backgroundColor: categoryStyle.bg,
//                           color: categoryStyle.color,
//                           borderColor: `${categoryStyle.color}40`,
//                         }}
//                       >
//                         {member.category || "Uncategorized"}
//                       </span>
//                     </td>

//                     {/* Order */}
//                     <td className="team-management__td team-management__td--order">
//                       <span className="team-management__order-number">
//                         {member.displayOrder ?? "—"}
//                       </span>
//                     </td>

//                     {/* Status */}
//                     <td className="team-management__td team-management__td--status">
//                       <button
//                         onClick={() => handleStatus(member.id)}
//                         disabled={isToggling}
//                         className={`team-management__status-btn ${
//                           member.isActive
//                             ? "team-management__status-btn--active"
//                             : "team-management__status-btn--inactive"
//                         } ${isToggling ? "team-management__status-btn--loading" : ""}`}
//                         title={`Click to ${member.isActive ? "deactivate" : "activate"}`}
//                       >
//                         {member.isActive ? (
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
//                     <td className="team-management__td team-management__td--actions">
//                       <div className="team-management__actions">
//                         <Link
//                           to={`/admin/team/edit/${member.id}`}
//                           className="team-management__action-btn team-management__action-btn--edit"
//                           title="Edit member"
//                         >
//                           <Pencil size={16} strokeWidth={2} />
//                         </Link>

//                         <button
//                           onClick={() => handleDelete(member.id)}
//                           disabled={isDeleting}
//                           className="team-management__action-btn team-management__action-btn--delete"
//                           title="Delete member"
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
//       {!loading && teams?.length > 0 && (
//         <div className="team-management__table-footer">
//           <p className="team-management__table-count">
//             Showing <strong>{teams.length}</strong> {teams.length === 1 ? "member" : "members"}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Team;

// src/pages/admin/Team/Team.jsx

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
  Filter,
  ChevronDown,
  RefreshCw,
  AlertCircle,
  UserPlus,
  Image as ImageIcon,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  MoreVertical,
} from "lucide-react";

import {
  getAllTeams,
  deleteTeam,
  toggleTeamStatus,
} from "../../../api/team.api";

import "./Team.css";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState(null);
  const [togglingId, setTogglingId] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterCategory, setFilterCategory] = useState("all");
  
  const searchTimeoutRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  const fetchTeams = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllTeams({ search });
      const teamData = res.data?.data?.teams || res.data?.data || res.data?.teams || [];
      setTeams(Array.isArray(teamData) ? teamData : []);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to fetch team members.");
      setTeams([]);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

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
      setDeletingId(selectedMember.id);
      await deleteTeam(selectedMember.id);
      toast.success("Team member deleted successfully.");
      setShowDeleteModal(false);
      setSelectedMember(null);
      fetchTeams();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete team member.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleStatus = async (id) => {
    try {
      setTogglingId(id);
      await toggleTeamStatus(id);
      toast.success("Member status updated successfully.");
      fetchTeams();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status.");
    } finally {
      setTogglingId(null);
    }
  };

  const handleImageError = (memberId) => {
    setImageErrors((prev) => new Set([...prev, memberId]));
  };

  const getImageUrl = (member) => {
    if (!member.image || imageErrors.has(member.id)) return null;
    return `${IMAGE_BASE_URL}/uploads/team/${member.image}`;
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

  const getCategoryColor = (category) => {
    const categories = {
      founder: { color: "#8b5cf6", bg: "#f5f3ff", border: "#8b5cf630" },
      "co-founder": { color: "#3b82f6", bg: "#eff6ff", border: "#3b82f630" },
      chairman: { color: "#f59e0b", bg: "#fffbeb", border: "#f59e0b30" },
      member: { color: "#10b981", bg: "#ecfdf5", border: "#10b98130" },
      advisor: { color: "#06b6d4", bg: "#ecfeff", border: "#06b6d430" },
      secretary: { color: "#ec4899", bg: "#fdf2f8", border: "#ec489930" },
      treasurer: { color: "#14b8a6", bg: "#f0fdfa", border: "#14b8a630" },
    };
    return categories[category?.toLowerCase()] || { color: "#64748b", bg: "#f1f5f9", border: "#64748b30" };
  };

  // Get unique categories for filter
  const categories = ["all", ...new Set(teams.map(m => m.category).filter(Boolean))];

  // Filter by category
  const filteredTeams = filterCategory === "all" 
    ? teams 
    : teams.filter(m => m.category?.toLowerCase() === filterCategory.toLowerCase());

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTeams.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTeams.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const stats = {
    total: teams?.length || 0,
    active: teams?.filter((m) => m.isActive)?.length || 0,
    inactive: teams?.filter((m) => !m.isActive)?.length || 0,
  };

  return (
    <div className="team-management">
      <div className="team-management__container">

        {/* ============================================
           HEADER
           ============================================ */}
        <div className="team-management__header">
          <div className="team-management__header-top">
            <div className="team-management__header-left">
              <div className="team-management__header-icon">
                <Users size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="team-management__title">Team Management</h1>
                <p className="team-management__subtitle">
                  Manage founders, committee members, and team profiles
                </p>
              </div>
            </div>

            <div className="team-management__header-right">
              <button
                onClick={fetchTeams}
                className="team-management__refresh-btn"
                disabled={loading}
                title="Refresh data"
              >
                <RefreshCw
                  size={18}
                  strokeWidth={2}
                  className={`team-management__refresh-icon ${
                    loading ? "team-management__refresh-icon--spinning" : ""
                  }`}
                />
              </button>

              <Link to="/admin/team/create" className="team-management__add-btn">
                <Plus size={18} strokeWidth={2} />
                <span>Add Member</span>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="team-management__stats">
            <div className="team-management__stat-item">
              <span className="team-management__stat-value">{stats.total}</span>
              <span className="team-management__stat-label">Total Members</span>
            </div>
            <div className="team-management__stat-divider" />
            <div className="team-management__stat-item team-management__stat-item--active">
              <span className="team-management__stat-value">{stats.active}</span>
              <span className="team-management__stat-label">Active</span>
            </div>
            <div className="team-management__stat-divider" />
            <div className="team-management__stat-item team-management__stat-item--inactive">
              <span className="team-management__stat-value">{stats.inactive}</span>
              <span className="team-management__stat-label">Inactive</span>
            </div>
          </div>
        </div>

        {/* ============================================
           TOOLBAR
           ============================================ */}
        <div className="team-management__toolbar">
          <div className="team-management__toolbar-left">
            {/* Search */}
            <div className="team-management__search">
              <Search className="team-management__search-icon" size={18} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search by name, designation, or category..."
                value={searchInput}
                onChange={handleSearchChange}
                className="team-management__search-input"
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                  className="team-management__search-clear"
                  aria-label="Clear search"
                >
                  <XCircle size={16} strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="team-management__filter">
              <Filter size={16} strokeWidth={2} />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="team-management__filter-select"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* View Toggle */}
          <div className="team-management__view-toggle">
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
          <div className="team-management__loading-state">
            <div className="spinner"></div>
            <p>Loading team members...</p>
          </div>
        ) : filteredTeams.length === 0 ? (
          <div className="team-management__empty-state">
            <div className="team-management__empty-icon">
              <UserPlus size={48} strokeWidth={1.5} />
            </div>
            <h3>No team members found</h3>
            <p>
              {search
                ? `No results found for "${search}". Try adjusting your search.`
                : "Get started by adding your first team member."}
            </p>
            {!search && (
              <Link to="/admin/team/create" className="team-management__empty-btn">
                <Plus size={16} strokeWidth={2} />
                <span>Add First Member</span>
              </Link>
            )}
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="team-management__grid">
            {currentItems.map((member) => {
              const categoryStyle = getCategoryColor(member.category);
              const imageUrl = getImageUrl(member);
              const isDeleting = deletingId === member.id;
              const isToggling = togglingId === member.id;

              return (
                <div key={member.id || member._id} className="team-card">
                  <div className="team-card__media">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={member.name}
                        className="team-card__image"
                        onError={() => handleImageError(member.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="team-card__avatar-placeholder">
                        {getInitials(member.name)}
                      </div>
                    )}
                    <div className="team-card__status-badge">
                      {member.isActive ? (
                        <span className="badge badge--active">
                          <CheckCircle size={12} />
                          Active
                        </span>
                      ) : (
                        <span className="badge badge--inactive">
                          <XCircle size={12} />
                          Inactive
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="team-card__content">
                    <h3 className="team-card__name">{member.name}</h3>
                    <p className="team-card__designation">{member.designation || "—"}</p>
                    <span
                      className="team-card__category"
                      style={{
                        backgroundColor: categoryStyle.bg,
                        color: categoryStyle.color,
                        borderColor: categoryStyle.border,
                      }}
                    >
                      {member.category || "Uncategorized"}
                    </span>
                    <div className="team-card__actions">
                      <button
                        onClick={() => handleStatus(member.id)}
                        disabled={isToggling}
                        className={`action-btn status-btn ${
                          member.isActive ? "active" : "inactive"
                        }`}
                      >
                        {member.isActive ? "Deactivate" : "Activate"}
                      </button>
                      <Link
                        to={`/admin/team/edit/${member.id}`}
                        className="action-btn edit-btn"
                      >
                        <Pencil size={16} />
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          setSelectedMember(member);
                          setShowDeleteModal(true);
                        }}
                        className="action-btn delete-btn"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="team-management__table-wrapper">
            <table className="team-management__table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Category</th>
                  <th>Order</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((member) => {
                  const categoryStyle = getCategoryColor(member.category);
                  const imageUrl = getImageUrl(member);
                  const isDeleting = deletingId === member.id;
                  const isToggling = togglingId === member.id;

                  return (
                    <tr key={member.id || member._id}>
                      <td>
                        <div className="table-avatar">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={member.name}
                              className="table-avatar__image"
                              onError={() => handleImageError(member.id)}
                              loading="lazy"
                            />
                          ) : (
                            <div className="table-avatar__placeholder">
                              {getInitials(member.name)}
                            </div>
                          )}
                        </div>
                      </td>
                      <td>
                        <span className="table-name">{member.name}</span>
                      </td>
                      <td>
                        <span className="table-designation">{member.designation || "—"}</span>
                      </td>
                      <td>
                        <span
                          className="table-category"
                          style={{
                            backgroundColor: categoryStyle.bg,
                            color: categoryStyle.color,
                          }}
                        >
                          {member.category || "Uncategorized"}
                        </span>
                      </td>
                      <td>
                        <span className="table-order">{member.displayOrder ?? "—"}</span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleStatus(member.id)}
                          disabled={isToggling}
                          className={`status-toggle-btn ${
                            member.isActive ? "active" : "inactive"
                          }`}
                        >
                          {member.isActive ? (
                            <>
                              <CheckCircle size={14} />
                              Active
                            </>
                          ) : (
                            <>
                              <XCircle size={14} />
                              Inactive
                            </>
                          )}
                        </button>
                      </td>
                      <td>
                        <div className="table-actions">
                          <Link
                            to={`/admin/team/edit/${member.id}`}
                            className="table-action edit"
                            title="Edit"
                          >
                            <Pencil size={16} />
                          </Link>
                          <button
                            onClick={() => {
                              setSelectedMember(member);
                              setShowDeleteModal(true);
                            }}
                            className="table-action delete"
                            title="Delete"
                            disabled={isDeleting}
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
          <div className="team-management__pagination">
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
        {!loading && filteredTeams.length > 0 && (
          <div className="team-management__footer">
            <p className="team-management__count">
              Showing <strong>{filteredTeams.length}</strong> {filteredTeams.length === 1 ? "member" : "members"}
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
                <h2>Delete Team Member</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete <strong>"{selectedMember?.name}"</strong>?
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
                  disabled={deletingId === selectedMember?.id}
                >
                  {deletingId === selectedMember?.id ? (
                    <>
                      <span className="spinner-btn"></span>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 size={16} />
                      Delete Member
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

export default Team;