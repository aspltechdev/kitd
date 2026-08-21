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
//   getAllArtists,
//   deleteArtist,
//   toggleArtistStatus,
// } from "../../../api/artist.api";

// const Artists = () => {
//   const [artists, setArtists] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   const fetchArtists = async () => {
//     try {
//       setLoading(true);

//       const res = await getAllArtists({
//         search,
//       });

//       const artistData =
//         res.data?.data?.artists ||
//         res.data?.data ||
//         res.data?.artists ||
//         [];

//       setArtists(Array.isArray(artistData) ? artistData : []);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch artists."
//       );

//       setArtists([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchArtists();
//   }, [search]);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this artist?")) return;

//     try {
//       await deleteArtist(id);

//       toast.success("Artist deleted successfully.");

//       fetchArtists();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to delete artist."
//       );
//     }
//   };

//   const handleStatus = async (id) => {
//     try {
//       await toggleArtistStatus(id);

//       toast.success("Status updated.");

//       fetchArtists();
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
//             Artists Management
//           </h1>

//           <p className="text-gray-500">
//             Manage artists displayed on the website.
//           </p>
//         </div>

//         <Link
//           to="/admin/artists/create"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//         >
//           <Plus size={18} />
//           Add Artist
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
//           placeholder="Search artists..."
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
//               <th className="text-left">Name</th>
//               <th className="text-left">Dance Style</th>
//               <th className="text-left">Experience</th>
//               <th className="text-left">Mobile</th>
//               <th className="text-left">Status</th>
//               <th className="text-center">Actions</th>
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
//             ) : artists.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={7}
//                   className="text-center p-8 text-gray-500"
//                 >
//                   No artists found.
//                 </td>
//               </tr>
//             ) : (
//               artists.map((artist) => (
//                 <tr
//                   key={artist.id}
//                   className="border-t"
//                 >
//                   <td className="p-4">
//                     <img
//                       src={`${import.meta.env.VITE_API_BASE_URL.replace(
//                         "/api",
//                         ""
//                       )}/uploads/artists/${artist.photo}`}
//                       alt={artist.fullName}
//                       className="w-14 h-14 rounded-full object-cover"
//                     />
//                   </td>

//                   <td>
//                     <div className="font-medium">
//                       {artist.fullName}
//                     </div>

//                     <div className="text-sm text-gray-500">
//                       {artist.email}
//                     </div>
//                   </td>

//                   <td>
//                     {artist.danceStyle}
//                   </td>

//                   <td>
//                     {artist.experience} Years
//                   </td>

//                   <td>
//                     {artist.mobile}
//                   </td>

//                   <td>
//                     <button
//                       onClick={() =>
//                         handleStatus(artist.id)
//                       }
//                       className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
//                         artist.isActive
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {artist.isActive ? (
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
//                         to={`/admin/artists/edit/${artist.id}`}
//                       >
//                         <Pencil
//                           size={18}
//                           className="text-blue-600"
//                         />
//                       </Link>

//                       <button
//                         onClick={() =>
//                           handleDelete(artist.id)
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

// export default Artists;


// src/pages/admin/Artists/Artists.jsx

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
  Award,
  AlertCircle,
  Image as ImageIcon,
  Star,
  Music,
} from "lucide-react";

import {
  getAllArtists,
  deleteArtist,
  toggleArtistStatus,
} from "../../../api/artist.api";

import "./Artists.css";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [imageErrors, setImageErrors] = useState(new Set());

  const searchTimeoutRef = useRef(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  const fetchArtists = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllArtists({ search });
      const artistData = res.data?.data?.artists || res.data?.data || res.data?.artists || [];
      setArtists(Array.isArray(artistData) ? artistData : []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch artists.");
      setArtists([]);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchArtists();
  }, [fetchArtists]);

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
    if (!selectedArtist) return;
    try {
      await deleteArtist(selectedArtist.id);
      toast.success("Artist deleted successfully.");
      setShowDeleteModal(false);
      setSelectedArtist(null);
      fetchArtists();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete artist.");
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleArtistStatus(id);
      toast.success("Status updated successfully.");
      fetchArtists();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status.");
    }
  };

  const handleImageError = (artistId) => {
    setImageErrors((prev) => new Set([...prev, artistId]));
  };

  const getImageUrl = (artist) => {
    if (!artist || !artist.photo) return null;
    if (imageErrors.has(artist.id)) return null;
    if (artist.photo.startsWith('http')) return artist.photo;
    return `${IMAGE_BASE_URL}/uploads/artists/${artist.photo}`;
  };

  const handleDeleteClick = (artist) => {
    setSelectedArtist(artist);
    setShowDeleteModal(true);
  };

  // Filter by status
  const filteredArtists = filterStatus === "all" 
    ? artists 
    : artists.filter(a => 
        filterStatus === "active" ? a.isActive : !a.isActive
      );

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredArtists.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredArtists.length / itemsPerPage);

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
    total: artists?.length || 0,
    active: artists?.filter((a) => a.isActive)?.length || 0,
    inactive: artists?.filter((a) => !a.isActive)?.length || 0,
  };

  return (
    <div className="artists-page">
      <div className="artists-page__container">

        {/* ============================================
           HEADER
           ============================================ */}
        <div className="artists-page__header">
          <div className="artists-page__header-top">
            <div className="artists-page__header-left">
              <div className="artists-page__header-icon">
                <Users size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="artists-page__title">Artists Management</h1>
                <p className="artists-page__subtitle">
                  Manage artists, dancers, and performers
                </p>
              </div>
            </div>

            <div className="artists-page__header-right">
              <button
                onClick={fetchArtists}
                className="artists-page__refresh-btn"
                disabled={loading}
                title="Refresh data"
              >
                <RefreshCw
                  size={18}
                  strokeWidth={2}
                  className={`artists-page__refresh-icon ${
                    loading ? "artists-page__refresh-icon--spinning" : ""
                  }`}
                />
              </button>

              <Link to="/admin/artists/create" className="artists-page__add-btn">
                <Plus size={18} strokeWidth={2} />
                <span>Add Artist</span>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="artists-page__stats">
            <div className="artists-page__stat-item">
              <span className="artists-page__stat-value">{stats.total}</span>
              <span className="artists-page__stat-label">Total Artists</span>
            </div>
            <div className="artists-page__stat-divider" />
            <div className="artists-page__stat-item artists-page__stat-item--active">
              <span className="artists-page__stat-value">{stats.active}</span>
              <span className="artists-page__stat-label">Active</span>
            </div>
            <div className="artists-page__stat-divider" />
            <div className="artists-page__stat-item artists-page__stat-item--inactive">
              <span className="artists-page__stat-value">{stats.inactive}</span>
              <span className="artists-page__stat-label">Inactive</span>
            </div>
          </div>
        </div>

        {/* ============================================
           TOOLBAR
           ============================================ */}
        <div className="artists-page__toolbar">
          <div className="artists-page__toolbar-left">
            {/* Search */}
            <div className="artists-page__search">
              <Search className="artists-page__search-icon" size={18} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search artists..."
                value={searchInput}
                onChange={handleSearchChange}
                className="artists-page__search-input"
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                  className="artists-page__search-clear"
                  aria-label="Clear search"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="artists-page__filter">
              <Filter size={16} strokeWidth={2} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="artists-page__filter-select"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* View Toggle */}
          <div className="artists-page__view-toggle">
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
          <div className="artists-page__loading">
            <div className="spinner"></div>
            <p>Loading artists...</p>
          </div>
        ) : filteredArtists.length === 0 ? (
          <div className="artists-page__empty">
            <Users size={48} className="empty-icon" />
            <h3>No artists found</h3>
            <p>
              {search
                ? `No results found for "${search}". Try adjusting your search.`
                : "Get started by adding your first artist."}
            </p>
            {!search && (
              <Link to="/admin/artists/create" className="artists-page__empty-btn">
                <Plus size={16} strokeWidth={2} />
                <span>Add First Artist</span>
              </Link>
            )}
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="artists-page__grid">
            {currentItems.map((artist) => {
              const imageUrl = getImageUrl(artist);

              return (
                <div key={artist.id} className="artist-card">
                  <div className="artist-card__media">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={artist.fullName}
                        className="artist-card__image"
                        onError={() => handleImageError(artist.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="artist-card__image-placeholder">
                        <User size={32} strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="artist-card__status-badge">
                      {getStatusBadge(artist.isActive)}
                    </div>
                  </div>

                  <div className="artist-card__content">
                    <h3 className="artist-card__name">{artist.fullName}</h3>
                    
                    <div className="artist-card__meta">
                      <span className="artist-card__meta-item">
                        <Music size={14} />
                        {artist.danceStyle || "—"}
                      </span>
                      <span className="artist-card__meta-item">
                        <Award size={14} />
                        {artist.experience || "0"} Years
                      </span>
                      <span className="artist-card__meta-item">
                        <Mail size={14} />
                        {artist.email}
                      </span>
                      <span className="artist-card__meta-item">
                        <Phone size={14} />
                        {artist.mobile}
                      </span>
                    </div>

                    <div className="artist-card__footer">
                      <span className="artist-card__id">
                        ID: {artist.artistId || artist.id}
                      </span>
                      <div className="artist-card__actions">
                        <Link
                          to={`/admin/artists/edit/${artist.id}`}
                          className="artist-card__action artist-card__action--edit"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(artist)}
                          className="artist-card__action artist-card__action--delete"
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
          <div className="artists-page__table-wrapper">
            <table className="artists-page__table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Dance Style</th>
                  <th>Experience</th>
                  <th>Mobile</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((artist) => {
                  const imageUrl = getImageUrl(artist);

                  return (
                    <tr key={artist.id}>
                      <td>
                        <div className="table-avatar">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={artist.fullName}
                              className="table-avatar__image"
                              onError={() => handleImageError(artist.id)}
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
                        <div className="table-name">{artist.fullName}</div>
                        <div className="table-email">{artist.email}</div>
                      </td>
                      <td>
                        <span className="table-style">{artist.danceStyle || "—"}</span>
                      </td>
                      <td>
                        <span className="table-experience">{artist.experience || "0"} Years</span>
                      </td>
                      <td>
                        <span className="table-mobile">{artist.mobile}</span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleStatus(artist.id)}
                          className="status-toggle-btn"
                        >
                          {getStatusBadge(artist.isActive)}
                        </button>
                      </td>
                      <td>
                        <div className="table-actions">
                          <Link
                            to={`/admin/artists/edit/${artist.id}`}
                            className="table-action table-action--edit"
                            title="Edit"
                          >
                            <Pencil size={16} />
                          </Link>
                          <button
                            onClick={() => handleDeleteClick(artist)}
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
          <div className="artists-page__pagination">
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
        {!loading && filteredArtists.length > 0 && (
          <div className="artists-page__footer">
            <p className="artists-page__count">
              Showing <strong>{filteredArtists.length}</strong> {filteredArtists.length === 1 ? "artist" : "artists"}
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
                <h2>Delete Artist</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete <strong>"{selectedArtist?.fullName}"</strong>?
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
                  Delete Artist
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artists;