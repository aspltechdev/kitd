// // src/pages/admin/news/News.jsx

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import {
//   Plus,
//   Search,
//   Pencil,
//   Trash2,
//   Star,
// } from "lucide-react";

// import {
//   getAllNews,
//   deleteNews,
//   toggleNewsStatus,
//   toggleNewsFeatured,
// } from "../../../api/news.api";

// const News = () => {
//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   const fetchNews = async () => {
//     try {
//       setLoading(true);

//       const res = await getAllNews({
//         search,
//       });

//       const data =
//         res.data?.data?.news ||
//         res.data?.data ||
//         res.data?.news ||
//         [];

//       setNews(Array.isArray(data) ? data : []);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch news."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, [search]);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this news article?"))
//       return;

//     try {
//       await deleteNews(id);

//       toast.success(
//         "News deleted successfully."
//       );

//       fetchNews();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Delete failed."
//       );
//     }
//   };

//   const handleStatus = async (id) => {
//     try {
//       await toggleNewsStatus(id);

//       toast.success(
//         "Status updated successfully."
//       );

//       fetchNews();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Status update failed."
//       );
//     }
//   };

//   const handleFeatured = async (id) => {
//     try {
//       await toggleNewsFeatured(id);

//       toast.success(
//         "Featured status updated."
//       );

//       fetchNews();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Update failed."
//       );
//     }
//   };

//   return (
//     <div className="p-6">
//       {/* Header */}

//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-bold">
//             News
//           </h1>

//           <p className="text-gray-500">
//             Manage latest news articles.
//           </p>
//         </div>

//         <Link
//           to="/admin/news/create"
//           className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//         >
//           <Plus size={18} />
//           Add News
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
//           placeholder="Search news..."
//           value={search}
//           onChange={(e) =>
//             setSearch(e.target.value)
//           }
//           className="w-full border rounded-lg pl-10 py-2"
//         />
//       </div>

//       {/* Table */}

//       <div className="bg-white rounded-xl shadow overflow-x-auto">
//         <table className="w-full">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-4 text-left">
//                 Thumbnail
//               </th>
//               <th>Title</th>
//               <th>Category</th>
//               <th>Published</th>
//               <th>Featured</th>
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
//             ) : news.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={7}
//                   className="text-center p-8"
//                 >
//                   No News Found
//                 </td>
//               </tr>
//             ) : (
//               news.map((item) => (
//                 <tr
//                   key={item.id}
//                   className="border-t"
//                 >
//                   <td className="p-4">
//                     <img
//                       src={`${import.meta.env.VITE_API_BASE_URL.replace(
//                         "/api",
//                         ""
//                       )}/uploads/news/${
//                         item.thumbnail
//                       }`}
//                       alt={item.title}
//                       className="w-20 h-14 rounded object-cover border"
//                     />
//                   </td>

//                   <td className="font-medium">
//                     {item.title}
//                   </td>

//                   <td>
//                     {item.category || "-"}
//                   </td>

//                   <td>
//                     {item.publishedDate
//                       ? new Date(
//                           item.publishedDate
//                         ).toLocaleDateString()
//                       : "-"}
//                   </td>

//                   <td>
//                     <button
//                       onClick={() =>
//                         handleFeatured(item.id)
//                       }
//                     >
//                       <Star
//                         size={18}
//                         className={
//                           item.featured
//                             ? "fill-yellow-400 text-yellow-400"
//                             : "text-gray-400"
//                         }
//                       />
//                     </button>
//                   </td>

//                   <td>
//                     <button
//                       onClick={() =>
//                         handleStatus(item.id)
//                       }
//                       className={`px-3 py-1 rounded-full text-sm ${
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
//                         to={`/admin/news/edit/${item.id}`}
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

// export default News;
// src/pages/admin/News/News.jsx

import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Star,
  Newspaper,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Grid,
  List,
  Filter,
  X,
  AlertCircle,
  Image as ImageIcon,
  Calendar,
  Eye,
  EyeOff,
} from "lucide-react";

import {
  getAllNews,
  deleteNews,
  toggleNewsStatus,
  toggleNewsFeatured,
} from "../../../api/news.api";

import "./News.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterFeatured, setFilterFeatured] = useState("all");
  const [imageErrors, setImageErrors] = useState(new Set());

  const searchTimeoutRef = useRef(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getAllNews({ search });
      const data = res.data?.data?.news || res.data?.data || res.data?.news || [];
      setNews(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch news.");
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

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
    if (!selectedNews) return;
    try {
      await deleteNews(selectedNews.id);
      toast.success("News deleted successfully.");
      setShowDeleteModal(false);
      setSelectedNews(null);
      fetchNews();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed.");
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleNewsStatus(id);
      toast.success("Status updated successfully.");
      fetchNews();
    } catch (error) {
      toast.error(error.response?.data?.message || "Status update failed.");
    }
  };

  const handleFeatured = async (id) => {
    try {
      await toggleNewsFeatured(id);
      toast.success("Featured status updated.");
      fetchNews();
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed.");
    }
  };

  const handleImageError = (newsId) => {
    setImageErrors((prev) => new Set([...prev, newsId]));
  };

  const getImageUrl = (item) => {
    if (!item || !item.thumbnail) return null;
    if (imageErrors.has(item.id)) return null;
    if (item.thumbnail.startsWith('http')) return item.thumbnail;
    return `${IMAGE_BASE_URL}/uploads/news/${item.thumbnail}`;
  };

  const handleDeleteClick = (item) => {
    setSelectedNews(item);
    setShowDeleteModal(true);
  };

  // Filter by status and featured
  const filteredNews = news.filter(item => {
    const statusMatch = filterStatus === "all" ? true : (filterStatus === "active" ? item.isActive : !item.isActive);
    const featuredMatch = filterFeatured === "all" ? true : (filterFeatured === "featured" ? item.featured : !item.featured);
    return statusMatch && featuredMatch;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getStatusBadge = (isActive) => {
    return isActive ? (
      <span className="badge badge--active">
        <Eye size={14} />
        Published
      </span>
    ) : (
      <span className="badge badge--inactive">
        <EyeOff size={14} />
        Draft
      </span>
    );
  };

  const getFeaturedBadge = (isFeatured) => {
    return isFeatured ? (
      <span className="badge badge--featured">
        <Star size={14} />
        Featured
      </span>
    ) : null;
  };

  const stats = {
    total: news?.length || 0,
    active: news?.filter((item) => item.isActive)?.length || 0,
    featured: news?.filter((item) => item.featured)?.length || 0,
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
    <div className="news-page">
      <div className="news-page__container">

        {/* ============================================
           HEADER
           ============================================ */}
        <div className="news-page__header">
          <div className="news-page__header-top">
            <div className="news-page__header-left">
              <div className="news-page__header-icon">
                <Newspaper size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="news-page__title">News Management</h1>
                <p className="news-page__subtitle">
                  Manage latest news articles and updates
                </p>
              </div>
            </div>

            <div className="news-page__header-right">
              <button
                onClick={fetchNews}
                className="news-page__refresh-btn"
                disabled={loading}
                title="Refresh data"
              >
                <RefreshCw
                  size={18}
                  strokeWidth={2}
                  className={`news-page__refresh-icon ${
                    loading ? "news-page__refresh-icon--spinning" : ""
                  }`}
                />
              </button>

              <Link to="/admin/news/create" className="news-page__add-btn">
                <Plus size={18} strokeWidth={2} />
                <span>Add News</span>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="news-page__stats">
            <div className="news-page__stat-item">
              <span className="news-page__stat-value">{stats.total}</span>
              <span className="news-page__stat-label">Total Articles</span>
            </div>
            <div className="news-page__stat-divider" />
            <div className="news-page__stat-item news-page__stat-item--active">
              <span className="news-page__stat-value">{stats.active}</span>
              <span className="news-page__stat-label">Published</span>
            </div>
            <div className="news-page__stat-divider" />
            <div className="news-page__stat-item news-page__stat-item--featured">
              <span className="news-page__stat-value">{stats.featured}</span>
              <span className="news-page__stat-label">Featured</span>
            </div>
          </div>
        </div>

        {/* ============================================
           TOOLBAR
           ============================================ */}
        <div className="news-page__toolbar">
          <div className="news-page__toolbar-left">
            {/* Search */}
            <div className="news-page__search">
              <Search className="news-page__search-icon" size={18} strokeWidth={2} />
              <input
                type="text"
                placeholder="Search news..."
                value={searchInput}
                onChange={handleSearchChange}
                className="news-page__search-input"
              />
              {searchInput && (
                <button
                  onClick={() => {
                    setSearchInput("");
                    setSearch("");
                  }}
                  className="news-page__search-clear"
                  aria-label="Clear search"
                >
                  <X size={16} strokeWidth={2} />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="news-page__filter">
              <Filter size={16} strokeWidth={2} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="news-page__filter-select"
              >
                <option value="all">All Status</option>
                <option value="active">Published</option>
                <option value="inactive">Draft</option>
              </select>
            </div>

            {/* Featured Filter */}
            <div className="news-page__filter">
              <Star size={16} strokeWidth={2} />
              <select
                value={filterFeatured}
                onChange={(e) => setFilterFeatured(e.target.value)}
                className="news-page__filter-select"
              >
                <option value="all">All</option>
                <option value="featured">Featured</option>
                <option value="not-featured">Not Featured</option>
              </select>
            </div>
          </div>

          {/* View Toggle */}
          <div className="news-page__view-toggle">
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
          <div className="news-page__loading">
            <div className="spinner"></div>
            <p>Loading news...</p>
          </div>
        ) : filteredNews.length === 0 ? (
          <div className="news-page__empty">
            <Newspaper size={48} className="empty-icon" />
            <h3>No news articles found</h3>
            <p>
              {search
                ? `No results found for "${search}". Try adjusting your search.`
                : "Get started by creating your first news article."}
            </p>
            {!search && (
              <Link to="/admin/news/create" className="news-page__empty-btn">
                <Plus size={16} strokeWidth={2} />
                <span>Create First Article</span>
              </Link>
            )}
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="news-page__grid">
            {currentItems.map((item) => {
              const imageUrl = getImageUrl(item);

              return (
                <div key={item.id} className="news-card">
                  <div className="news-card__media">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={item.title}
                        className="news-card__image"
                        onError={() => handleImageError(item.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="news-card__image-placeholder">
                        <ImageIcon size={32} strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="news-card__badges">
                      {getStatusBadge(item.isActive)}
                      {getFeaturedBadge(item.featured)}
                    </div>
                  </div>

                  <div className="news-card__content">
                    <h3 className="news-card__title">{item.title}</h3>
                    
                    <div className="news-card__meta">
                      {item.category && (
                        <span className="news-card__meta-item">
                          <Newspaper size={14} />
                          {item.category}
                        </span>
                      )}
                      {item.publishedDate && (
                        <span className="news-card__meta-item">
                          <Calendar size={14} />
                          {formatDate(item.publishedDate)}
                        </span>
                      )}
                    </div>

                    <div className="news-card__footer">
                      <button
                        onClick={() => handleFeatured(item.id)}
                        className={`news-card__featured-btn ${item.featured ? "active" : ""}`}
                        title={item.featured ? "Remove featured" : "Mark as featured"}
                      >
                        <Star size={16} />
                        {item.featured ? "Featured" : "Mark Featured"}
                      </button>
                      <div className="news-card__actions">
                        <Link
                          to={`/admin/news/edit/${item.id}`}
                          className="news-card__action news-card__action--edit"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(item)}
                          className="news-card__action news-card__action--delete"
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
          <div className="news-page__table-wrapper">
            <table className="news-page__table">
              <thead>
                <tr>
                  <th>Thumbnail</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Published</th>
                  <th>Featured</th>
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
                        <span className="table-category">{item.category || "—"}</span>
                      </td>
                      <td>
                        <span className="table-date">{formatDate(item.publishedDate)}</span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleFeatured(item.id)}
                          className={`table-featured-btn ${item.featured ? "active" : ""}`}
                          title={item.featured ? "Remove featured" : "Mark as featured"}
                        >
                          <Star size={16} />
                        </button>
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
                            to={`/admin/news/edit/${item.id}`}
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
          <div className="news-page__pagination">
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
        {!loading && filteredNews.length > 0 && (
          <div className="news-page__footer">
            <p className="news-page__count">
              Showing <strong>{filteredNews.length}</strong> {filteredNews.length === 1 ? "article" : "articles"}
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
                <h2>Delete News Article</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete <strong>"{selectedNews?.title}"</strong>?
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
                  Delete Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;