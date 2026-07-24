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
  
  const searchTimeoutRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");

  const fetchTeams = useCallback(async () => {
    try {
      setLoading(true);

      const res = await getAllTeams({ search });

      console.log("Team API Response:", res.data);

      const teamData =
        res.data?.data?.teams ||
        res.data?.data ||
        res.data?.teams ||
        [];

      setTeams(Array.isArray(teamData) ? teamData : []);
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to fetch team members."
      );
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

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this team member? This action cannot be undone.")) {
      return;
    }

    try {
      setDeletingId(id);
      await deleteTeam(id);
      toast.success("Team member deleted successfully.");
      fetchTeams();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete team member."
      );
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
      toast.error(
        error.response?.data?.message || "Failed to update status."
      );
    } finally {
      setTogglingId(null);
    }
  };

  const handleImageError = (memberId) => {
    setImageErrors((prev) => new Set([...prev, memberId]));
  };

  const getImageUrl = (member) => {
    if (!member.image || imageErrors.has(member.id)) return null;
    return `${import.meta.env.VITE_API_BASE_URL?.replace("/api", "")}/uploads/team/${member.image}`;
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
      founder: { color: "#8b5cf6", bg: "#f5f3ff" },
      "co-founder": { color: "#3b82f6", bg: "#eff6ff" },
      chairman: { color: "#f59e0b", bg: "#fffbeb" },
      member: { color: "#10b981", bg: "#ecfdf5" },
      advisor: { color: "#06b6d4", bg: "#ecfeff" },
      secretary: { color: "#ec4899", bg: "#fdf2f8" },
      treasurer: { color: "#14b8a6", bg: "#f0fdfa" },
    };
    return categories[category?.toLowerCase()] || { color: "#64748b", bg: "#f1f5f9" };
  };

  const stats = {
    total: teams?.length || 0,
    active: teams?.filter((m) => m.isActive)?.length || 0,
    inactive: teams?.filter((m) => !m.isActive)?.length || 0,
  };

  return (
    <div className="team-management">
      {/* Page Header */}
      <div className="team-management__header">
        <div className="team-management__header-content">
          <div className="team-management__header-left">
            <div className="team-management__header-icon">
              <Users size={24} strokeWidth={2} />
            </div>
            <div className="team-management__header-text">
              <h1 className="team-management__title">Team Management</h1>
              <p className="team-management__subtitle">
                Manage founders, committee members, and team profiles
              </p>
            </div>
          </div>

          <div className="team-management__header-actions">
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

        {/* Quick Stats */}
        <div className="team-management__stats">
          <div className="team-management__stat-item">
            <span className="team-management__stat-value">{stats.total}</span>
            <span className="team-management__stat-label">Total</span>
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

      {/* Search & Filters */}
      <div className="team-management__toolbar">
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

        <button className="team-management__filter-btn">
          <Filter size={16} strokeWidth={2} />
          <span>Filters</span>
          <ChevronDown size={14} strokeWidth={2} />
        </button>
      </div>

      {/* Table */}
      <div className="team-management__table-container">
        <table className="team-management__table">
          <thead className="team-management__table-head">
            <tr>
              <th className="team-management__th team-management__th--photo">Photo</th>
              <th className="team-management__th team-management__th--name">Name</th>
              <th className="team-management__th team-management__th--designation">Designation</th>
              <th className="team-management__th team-management__th--category">Category</th>
              <th className="team-management__th team-management__th--order">Order</th>
              <th className="team-management__th team-management__th--status">Status</th>
              <th className="team-management__th team-management__th--actions">Actions</th>
            </tr>
          </thead>

          <tbody className="team-management__table-body">
            {/* Loading State */}
            {loading && (
              <tr>
                <td colSpan={7} className="team-management__table-empty">
                  <div className="team-management__loading">
                    <div className="team-management__loading-spinner" />
                    <p className="team-management__loading-text">Loading team members...</p>
                  </div>
                </td>
              </tr>
            )}

            {/* Empty State */}
            {!loading && teams?.length === 0 && (
              <tr>
                <td colSpan={7} className="team-management__table-empty">
                  <div className="team-management__empty">
                    <div className="team-management__empty-icon">
                      <UserPlus size={48} strokeWidth={1.5} />
                    </div>
                    <h3 className="team-management__empty-title">No team members found</h3>
                    <p className="team-management__empty-text">
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
                </td>
              </tr>
            )}

            {/* Table Rows */}
            {!loading &&
              (teams || []).map((member) => {
                const categoryStyle = getCategoryColor(member.category);
                const imageUrl = getImageUrl(member);
                const isDeleting = deletingId === member.id;
                const isToggling = togglingId === member.id;

                return (
                  <tr
                    key={member.id || member._id}
                    className={`team-management__row ${
                      isDeleting ? "team-management__row--deleting" : ""
                    }`}
                  >
                    {/* Photo */}
                    <td className="team-management__td team-management__td--photo">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={member.name}
                          className="team-management__avatar"
                          onError={() => handleImageError(member.id)}
                          loading="lazy"
                        />
                      ) : (
                        <div className="team-management__avatar-placeholder">
                          {getInitials(member.name)}
                        </div>
                      )}
                    </td>

                    {/* Name */}
                    <td className="team-management__td team-management__td--name">
                      <span className="team-management__member-name">
                        {member.name}
                      </span>
                    </td>

                    {/* Designation */}
                    <td className="team-management__td team-management__td--designation">
                      {member.designation || "—"}
                    </td>

                    {/* Category */}
                    <td className="team-management__td team-management__td--category">
                      <span
                        className="team-management__category-badge"
                        style={{
                          backgroundColor: categoryStyle.bg,
                          color: categoryStyle.color,
                          borderColor: `${categoryStyle.color}40`,
                        }}
                      >
                        {member.category || "Uncategorized"}
                      </span>
                    </td>

                    {/* Order */}
                    <td className="team-management__td team-management__td--order">
                      <span className="team-management__order-number">
                        {member.displayOrder ?? "—"}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="team-management__td team-management__td--status">
                      <button
                        onClick={() => handleStatus(member.id)}
                        disabled={isToggling}
                        className={`team-management__status-btn ${
                          member.isActive
                            ? "team-management__status-btn--active"
                            : "team-management__status-btn--inactive"
                        } ${isToggling ? "team-management__status-btn--loading" : ""}`}
                        title={`Click to ${member.isActive ? "deactivate" : "activate"}`}
                      >
                        {member.isActive ? (
                          <>
                            <CheckCircle size={14} strokeWidth={2} />
                            <span>Active</span>
                          </>
                        ) : (
                          <>
                            <XCircle size={14} strokeWidth={2} />
                            <span>Inactive</span>
                          </>
                        )}
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="team-management__td team-management__td--actions">
                      <div className="team-management__actions">
                        <Link
                          to={`/admin/team/edit/${member.id}`}
                          className="team-management__action-btn team-management__action-btn--edit"
                          title="Edit member"
                        >
                          <Pencil size={16} strokeWidth={2} />
                        </Link>

                        <button
                          onClick={() => handleDelete(member.id)}
                          disabled={isDeleting}
                          className="team-management__action-btn team-management__action-btn--delete"
                          title="Delete member"
                        >
                          <Trash2 size={16} strokeWidth={2} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      {!loading && teams?.length > 0 && (
        <div className="team-management__table-footer">
          <p className="team-management__table-count">
            Showing <strong>{teams.length}</strong> {teams.length === 1 ? "member" : "members"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Team;