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
//   getAllGallery,
//   deleteGallery,
//   toggleGalleryStatus,
// } from "../../../api/gallery.api";

// const Gallery = () => {
//   const [gallery, setGallery] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   const fetchGallery = async () => {
//     try {
//       setLoading(true);

//       const res = await getAllGallery({
//         search,
//       });

//       const galleryData =
//         res.data?.data?.gallery ||
//         res.data?.data ||
//         res.data?.gallery ||
//         [];

//       setGallery(Array.isArray(galleryData) ? galleryData : []);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch gallery."
//       );

//       setGallery([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchGallery();
//   }, [search]);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this gallery item?")) return;

//     try {
//       await deleteGallery(id);

//       toast.success("Gallery item deleted successfully.");

//       fetchGallery();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to delete gallery item."
//       );
//     }
//   };

//   const handleStatus = async (id) => {
//     try {
//       await toggleGalleryStatus(id);

//       toast.success("Status updated.");

//       fetchGallery();
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
//             Gallery Management
//           </h1>

//           <p className="text-gray-500">
//             Manage gallery images displayed on the website.
//           </p>
//         </div>

//         <Link
//           to="/admin/gallery/create"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//         >
//           <Plus size={18} />
//           Add Gallery
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
//           placeholder="Search gallery..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border rounded-lg pl-10 pr-4 py-2 w-full"
//         />

//       </div>

//       {/* Table */}

//       <div className="bg-white rounded-xl shadow overflow-hidden">

//         <table className="w-full">

//           <thead className="bg-gray-100">

//             <tr>

//               <th className="p-4 text-left">
//                 Image
//               </th>

//               <th className="text-left">
//                 Title
//               </th>

//               <th className="text-left">
//                 Category
//               </th>

//               <th className="text-left">
//                 Order
//               </th>

//               <th className="text-left">
//                 Status
//               </th>

//               <th className="text-center">
//                 Actions
//               </th>

//             </tr>

//           </thead>

//           <tbody>

//             {loading ? (

//               <tr>
//                 <td
//                   colSpan={6}
//                   className="text-center p-8"
//                 >
//                   Loading...
//                 </td>
//               </tr>

//             ) : gallery.length === 0 ? (

//               <tr>
//                 <td
//                   colSpan={6}
//                   className="text-center p-8 text-gray-500"
//                 >
//                   No gallery items found.
//                 </td>
//               </tr>

//             ) : (

//               gallery.map((item) => (

//                 <tr
//                   key={item.id}
//                   className="border-t"
//                 >

//                   <td className="p-4">

//                     <img
//                       src={`${import.meta.env.VITE_API_BASE_URL.replace(
//                         "/api",
//                         ""
//                       )}/uploads/gallery/${item.image}`}
//                       alt={item.title}
//                       className="w-24 h-16 object-cover rounded-lg"
//                     />

//                   </td>

//                   <td>{item.title}</td>

//                   <td>
//                     {item.category || "-"}
//                   </td>

//                   <td>
//                     {item.displayOrder}
//                   </td>

//                   <td>

//                     <button
//                       onClick={() =>
//                         handleStatus(item.id)
//                       }
//                       className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
//                         item.isActive
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {item.isActive ? (
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
//                         to={`/admin/gallery/edit/${item.id}`}
//                       >
//                         <Pencil
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

// export default Gallery;


// src/pages/admin/Gallery/Gallery.jsx

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
  Images,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Filter,
  X,
  AlertCircle,
  Image as ImageIcon,
  Folder,
  Calendar,
} from "lucide-react";

import {
  getAllGallery,
  deleteGallery,
  toggleGalleryStatus,
} from "../../../api/gallery.api";

import "./Gallery.css";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [imageErrors, setImageErrors] = useState(new Set());

  const searchTimeoutRef = useRef(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  const fetchGallery = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllGallery({ search });
      const galleryData = res.data?.data?.gallery || res.data?.data || res.data?.gallery || [];
      setGallery(Array.isArray(galleryData) ? galleryData : []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch gallery.");
      setGallery([]);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

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
    if (!selectedItem) return;
    try {
      await deleteGallery(selectedItem.id);
      toast.success("Gallery item deleted successfully.");
      setShowDeleteModal(false);
      setSelectedItem(null);
      fetchGallery();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete gallery item.");
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleGalleryStatus(id);
      toast.success("Status updated successfully.");
      fetchGallery();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status.");
    }
  };

  const handleImageError = (itemId) => {
    setImageErrors((prev) => new Set([...prev, itemId]));
  };

  const getImageUrl = (item) => {
    if (!item || !item.image) return null;
    if (imageErrors.has(item.id)) return null;
    if (item.image.startsWith('http')) return item.image;
    return `${IMAGE_BASE_URL}/uploads/gallery/${item.image}`;
  };

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  // Get unique categories for filter
  const categories = ["all", ...new Set(gallery.map(item => item.category).filter(Boolean))];

  // Filter by status and category
  const filteredGallery = gallery.filter(item => {
    const statusMatch = filterStatus === "all" ? true : (filterStatus === "active" ? item.isActive : !item.isActive);
    const categoryMatch = filterCategory === "all" ? true : item.category === filterCategory;
    return statusMatch && categoryMatch;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredGallery.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredGallery.length / itemsPerPage);

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
    total: gallery?.length || 0,
    active: gallery?.filter((item) => item.isActive)?.length || 0,
    inactive: gallery?.filter((item) => !item.isActive)?.length || 0,
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
    <div className="gallery-page">
      <div className="gallery-page__container">

        {/* ============================================
           HEADER
           ============================================ */}
        <div className="gallery-page__header">
          <div className="gallery-page__header-top">
            <div className="gallery-page__header-left">
              <div className="gallery-page__header-icon">
                <Images size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="gallery-page__title">Gallery Management</h1>
                <p className="gallery-page__subtitle">
                  Manage gallery images and media
                </p>
              </div>
            </div>

            <div className="gallery-page__header-right">
              <button
                onClick={fetchGallery}
                className="gallery-page__refresh-btn"
                disabled={loading}
                title="Refresh data"
              >
                <RefreshCw
                  size={18}
                  strokeWidth={2}
                  className={`gallery-page__refresh-icon ${
                    loading ? "gallery-page__refresh-icon--spinning" : ""
                  }`}
                />
              </button>

              <Link to="/admin/gallery/create" className="gallery-page__add-btn">
                <Plus size={18} strokeWidth={2} />
                <span>Add Image</span>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="gallery-page__stats">
            <div className="gallery-page__stat-item">
              <span className="gallery-page__stat-value">{stats.total}</span>
              <span className="gallery-page__stat-label">Total Images</span>
            </div>
            <div className="gallery-page__stat-divider" />
            <div className="gallery-page__stat-item gallery-page__stat-item--active">
              <span className="gallery-page__stat-value">{stats.active}</span>
              <span className="gallery-page__stat-label">Active</span>
            </div>
            <div className="gallery-page__stat-divider" />
            <div className="gallery-page__stat-item gallery-page__stat-item--inactive">
              <span className="gallery-page__stat-value">{stats.inactive}</span>
              <span className="gallery-page__stat-label">Inactive</span>
            </div>
          </div>
        </div>

        {/* ============================================
           TOOLBAR
           ============================================ */}
        <div className="gallery-page__toolbar">
          <div className="gallery-page__toolbar-left">
            {/* Search */}
            <div className="gallery-page__search">
              <Search className="gallery-page__search-icon" size={18} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchInput}
                onChange={handleSearchChange}
                className="gallery-page__search-input"
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                  className="gallery-page__search-clear"
                  aria-label="Clear search"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="gallery-page__filter">
              <Filter size={16} strokeWidth={2} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="gallery-page__filter-select"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="gallery-page__filter">
              <Folder size={16} strokeWidth={2} />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="gallery-page__filter-select"
              >
                <option value="all">All Categories</option>
                {categories.filter(c => c !== "all").map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* View Toggle */}
          <div className="gallery-page__view-toggle">
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
          <div className="gallery-page__loading">
            <div className="spinner"></div>
            <p>Loading gallery...</p>
          </div>
        ) : filteredGallery.length === 0 ? (
          <div className="gallery-page__empty">
            <Images size={48} className="empty-icon" />
            <h3>No gallery items found</h3>
            <p>
              {search
                ? `No results found for "${search}". Try adjusting your search.`
                : "Get started by adding your first image."}
            </p>
            {!search && (
              <Link to="/admin/gallery/create" className="gallery-page__empty-btn">
                <Plus size={16} strokeWidth={2} />
                <span>Add First Image</span>
              </Link>
            )}
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="gallery-page__grid">
            {currentItems.map((item) => {
              const imageUrl = getImageUrl(item);

              return (
                <div key={item.id} className="gallery-card">
                  <div className="gallery-card__media">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={item.title}
                        className="gallery-card__image"
                        onError={() => handleImageError(item.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="gallery-card__image-placeholder">
                        <ImageIcon size={32} strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="gallery-card__status-badge">
                      {getStatusBadge(item.isActive)}
                    </div>
                  </div>

                  <div className="gallery-card__content">
                    <h3 className="gallery-card__title">{item.title}</h3>
                    
                    <div className="gallery-card__meta">
                      {item.category && (
                        <span className="gallery-card__meta-item">
                          <Folder size={14} />
                          {item.category}
                        </span>
                      )}
                      {item.createdAt && (
                        <span className="gallery-card__meta-item">
                          <Calendar size={14} />
                          {formatDate(item.createdAt)}
                        </span>
                      )}
                    </div>

                    <div className="gallery-card__footer">
                      <span className="gallery-card__order">
                        Order: {item.displayOrder || 1}
                      </span>
                      <div className="gallery-card__actions">
                        <Link
                          to={`/admin/gallery/edit/${item.id}`}
                          className="gallery-card__action gallery-card__action--edit"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(item)}
                          className="gallery-card__action gallery-card__action--delete"
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
          <div className="gallery-page__table-wrapper">
            <table className="gallery-page__table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Order</th>
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
                        <div className="table-preview">
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={item.title}
                              className="table-preview__image"
                              onError={() => handleImageError(item.id)}
                              loading="lazy"
                            />
                          ) : (
                            <div className="table-preview__placeholder">
                              <ImageIcon size={20} strokeWidth={1.5} />
                            </div>
                          )}
                        </div>
                      </td>
                      <td>
                        <span className="table-title">{item.title}</span>
                      </td>
                      <td>
                        <span className="table-category">
                          <Folder size={14} />
                          {item.category || "—"}
                        </span>
                      </td>
                      <td>
                        <span className="table-order">{item.displayOrder || 1}</span>
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
                            to={`/admin/gallery/edit/${item.id}`}
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
          <div className="gallery-page__pagination">
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
        {!loading && filteredGallery.length > 0 && (
          <div className="gallery-page__footer">
            <p className="gallery-page__count">
              Showing <strong>{filteredGallery.length}</strong> {filteredGallery.length === 1 ? "item" : "items"}
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
                <h2>Delete Gallery Item</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete <strong>"{selectedItem?.title}"</strong>?
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
                  Delete Item
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;