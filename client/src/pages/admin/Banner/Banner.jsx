
// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import toast from "react-hot-toast";
// // import {
// //   Pencil,
// //   Trash2,
// //   Plus,
// //   Search,
// //   CheckCircle,
// //   XCircle,
// //   Image,
// //   Video,
// //   AlertCircle,
// //   RefreshCw,
// //   ChevronLeft,
// //   ChevronRight,
// //   Filter,
// //   Grid,
// //   List,
// // } from "lucide-react";

// // import {
// //   getAllBanners,
// //   deleteBanner,
// //   toggleBannerStatus,
// // } from "../../../api/banner.api";

// // import "./Banner.css";

// // const Banner = () => {
// //   const [banners, setBanners] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [search, setSearch] = useState("");
// //   const [viewMode, setViewMode] = useState("grid");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [itemsPerPage] = useState(6);
// //   const [selectedBanner, setSelectedBanner] = useState(null);
// //   const [showDeleteModal, setShowDeleteModal] = useState(false);

// //   const fetchBanners = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await getAllBanners({ search });
// //       setBanners(res.data.data.banners || []);
// //       console.log(banners);
// //     } catch (err) {
// //       toast.error(err.response?.data?.message || "Failed to fetch banners");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBanners();
// //   }, [search]);

// //   const handleDelete = async () => {
// //     if (!selectedBanner) return;
// //     try {
// //       await deleteBanner(selectedBanner.id);
// //       toast.success("Banner deleted successfully");
// //       setShowDeleteModal(false);
// //       setSelectedBanner(null);
// //       fetchBanners();
// //     } catch (err) {
// //       toast.error(err.response?.data?.message || "Delete failed");
// //     }
// //   };

// //   const handleStatus = async (id) => {
// //     try {
// //       await toggleBannerStatus(id);
// //       toast.success("Status updated successfully");
// //       fetchBanners();
// //     } catch (err) {
// //       toast.error(err.response?.data?.message || "Update failed");
// //     }
// //   };

// //   const handleDeleteClick = (banner) => {
// //     setSelectedBanner(banner);
// //     setShowDeleteModal(true);
// //   };

// //   // Pagination
// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentItems = banners.slice(indexOfFirstItem, indexOfLastItem);
// //   const totalPages = Math.ceil(banners.length / itemsPerPage);

// //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// //   const getMediaIcon = (type) => {
// //     return type === "IMAGE" ? <Image size={16} /> : <Video size={16} />;
// //   };

// //   const getStatusBadge = (isActive) => {
// //     return isActive ? (
// //       <span className="badge badge--active">
// //         <CheckCircle size={14} />
// //         Active
// //       </span>
// //     ) : (
// //       <span className="badge badge--inactive">
// //         <XCircle size={14} />
// //         Inactive
// //       </span>
// //     );
// //   };

// //   return (
// //     <div className="banner-page">
// //       <div className="banner-page__container">
        
// //         {/* Header */}
// //         <div className="banner-page__header">
// //           <div className="banner-page__header-left">
// //             <h1 className="banner-page__title">Hero Slider</h1>
// //             <p className="banner-page__subtitle">Manage homepage hero banners</p>
// //           </div>
// //           <Link
// //             to="/admin/banner/create"
// //             className="btn btn--primary"
// //           >
// //             <Plus size={18} />
// //             Add Banner
// //           </Link>
// //         </div>

// //         {/* Filters & Controls */}
// //         <div className="banner-page__controls">
// //           {/* Search */}
// //           <div className="banner-page__search">
// //             <Search size={18} className="banner-page__search-icon" />
// //             <input
// //               type="text"
// //               placeholder="Search banners..."
// //               className="banner-page__search-input"
// //               value={search}
// //               onChange={(e) => setSearch(e.target.value)}
// //             />
// //             {search && (
// //               <button
// //                 onClick={() => setSearch("")}
// //                 className="banner-page__search-clear"
// //               >
// //                 <XCircle size={16} />
// //               </button>
// //             )}
// //           </div>

// //           {/* View Toggle */}
// //           <div className="banner-page__view-toggle">
// //             <button
// //               className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
// //               onClick={() => setViewMode("grid")}
// //               title="Grid View"
// //             >
// //               <Grid size={18} />
// //             </button>
// //             <button
// //               className={`view-btn ${viewMode === "list" ? "active" : ""}`}
// //               onClick={() => setViewMode("list")}
// //               title="List View"
// //             >
// //               <List size={18} />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Content */}
// //         {loading ? (
// //           <div className="banner-page__loading">
// //             <div className="spinner"></div>
// //             <p>Loading banners...</p>
// //           </div>
// //         ) : banners.length === 0 ? (
// //           <div className="banner-page__empty">
// //             <Image size={48} className="empty-icon" />
// //             <h3>No banners found</h3>
// //             <p>Get started by creating your first banner</p>
// //             <Link
// //               to="/admin/banner/create"
// //               className="btn btn--primary"
// //             >
// //               <Plus size={18} />
// //               Add Banner
// //             </Link>
// //           </div>
// //         ) : (
// //           <>
// //             {/* Grid View */}
// //             {viewMode === "grid" ? (
// //               <div className="banner-page__grid">
// //                 {currentItems.map((banner) => (
// //                   <div key={banner.id} className="banner-card">
// //                     {/* Media Preview */}
// //                     <div className="banner-card__media">
// //                       {banner.mediaType === "IMAGE" ? (
// //                         // <img
// //                         //   src={`${import.meta.env.VITE_API_BASE_URL}/uploads/banners/${banner.mediaUrl}`}
// //                         //   alt={banner.title}
// //                         //   className="banner-card__image"
// //                         // />


// //                         <img
// //   src={`${import.meta.env.VITE_API_BASE_URL}/uploads/banners/${banner.mediaUrl}`}
// //   alt={banner.title}
// //   onError={(e) => {
// //     console.log("Image failed:", e.target.src);
// //   }}
// // />
// //                       ) : (
// //                         <video
// //                           className="banner-card__video"
// //                           muted
// //                           loop
// //                           autoPlay
// //                         >
// //                           <source
// //                             src={`${import.meta.env.VITE_API_BASE_URL}/uploads/banners/${banner.mediaUrl}`}
// //                           />
// //                         </video>
// //                       )}
                      
// //                       <div className="banner-card__badge">
// //                         {getMediaIcon(banner.mediaType)}
// //                         <span>{banner.mediaType}</span>
// //                       </div>
// //                     </div>

// //                     {/* Content */}
// //                     <div className="banner-card__content">
// //                       <div className="banner-card__header">
// //                         <h3 className="banner-card__title">{banner.title}</h3>
// //                         {getStatusBadge(banner.isActive)}
// //                       </div>
                      
// //                       <div className="banner-card__meta">
// //                         <span className="meta-item">
// //                           <span className="meta-label">Order:</span>
// //                           <span className="meta-value">{banner.displayOrder}</span>
// //                         </span>
// //                         <span className="meta-item">
// //                           <span className="meta-label">Type:</span>
// //                           <span className="meta-value">{banner.mediaType}</span>
// //                         </span>
// //                       </div>

// //                       <div className="banner-card__actions">
// //                         <button
// //                           onClick={() => handleStatus(banner.id)}
// //                           className={`action-btn status-btn ${
// //                             banner.isActive ? "active" : "inactive"
// //                           }`}
// //                         >
// //                           {banner.isActive ? "Deactivate" : "Activate"}
// //                         </button>
// //                         <Link
// //                           to={`/admin/banner/edit/${banner.id}`}
// //                           className="action-btn edit-btn"
// //                         >
// //                           <Pencil size={16} />
// //                           Edit
// //                         </Link>
// //                         <button
// //                           onClick={() => handleDeleteClick(banner)}
// //                           className="action-btn delete-btn"
// //                         >
// //                           <Trash2 size={16} />
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //               /* List View */
// //               <div className="banner-page__table-wrapper">
// //                 <table className="banner-page__table">
// //                   <thead>
// //                     <tr>
// //                       <th>Preview</th>
// //                       <th>Title</th>
// //                       <th>Type</th>
// //                       <th>Order</th>
// //                       <th>Status</th>
// //                       <th className="text-center">Actions</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {currentItems.map((banner) => (
// //                       <tr key={banner.id}>
// //                         <td>
// //                           <div className="table-preview">
// //                             {banner.mediaType === "IMAGE" ? (
// //                               <img
// //                                 src={`${import.meta.env.VITE_API_BASE_URL}/uploads/banners/${banner.mediaUrl}`}
// //                                 alt={banner.title}
// //                                 className="table-preview__image"
// //                               />
// //                             ) : (
// //                               <video
// //                                 className="table-preview__video"
// //                                 muted
// //                                 loop
// //                                 autoPlay
// //                               >
// //                                 <source
// //                                   src={`${import.meta.env.VITE_API_BASE_URL}/uploads/banners/${banner.mediaUrl}`}
// //                                 />
// //                               </video>
// //                             )}
// //                           </div>
// //                         </td>
// //                         <td>
// //                           <span className="table-title">{banner.title}</span>
// //                         </td>
// //                         <td>
// //                           <span className="table-type">
// //                             {getMediaIcon(banner.mediaType)}
// //                             {banner.mediaType}
// //                           </span>
// //                         </td>
// //                         <td>
// //                           <span className="table-order">{banner.displayOrder}</span>
// //                         </td>
// //                         <td>
// //                           <button
// //                             onClick={() => handleStatus(banner.id)}
// //                             className="status-toggle"
// //                           >
// //                             {getStatusBadge(banner.isActive)}
// //                           </button>
// //                         </td>
// //                         <td>
// //                           <div className="table-actions">
// //                             <Link
// //                               to={`/admin/banner/edit/${banner.id}`}
// //                               className="table-action edit"
// //                               title="Edit"
// //                             >
// //                               <Pencil size={16} />
// //                             </Link>
// //                             <button
// //                               onClick={() => handleDeleteClick(banner)}
// //                               className="table-action delete"
// //                               title="Delete"
// //                             >
// //                               <Trash2 size={16} />
// //                             </button>
// //                           </div>
// //                         </td>
// //                       </tr>
// //                     ))}
// //                   </tbody>
// //                 </table>
// //               </div>
// //             )}

// //             {/* Pagination */}
// //             {totalPages > 1 && (
// //               <div className="banner-page__pagination">
// //                 <button
// //                   className="pagination-btn"
// //                   onClick={() => paginate(currentPage - 1)}
// //                   disabled={currentPage === 1}
// //                 >
// //                   <ChevronLeft size={18} />
// //                 </button>
                
// //                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
// //                   <button
// //                     key={number}
// //                     className={`pagination-btn ${currentPage === number ? "active" : ""}`}
// //                     onClick={() => paginate(number)}
// //                   >
// //                     {number}
// //                   </button>
// //                 ))}
                
// //                 <button
// //                   className="pagination-btn"
// //                   onClick={() => paginate(currentPage + 1)}
// //                   disabled={currentPage === totalPages}
// //                 >
// //                   <ChevronRight size={18} />
// //                 </button>
// //               </div>
// //             )}
// //           </>
// //         )}

// //         {/* Delete Confirmation Modal */}
// //         {showDeleteModal && (
// //           <div className="modal-overlay" onClick={() => setShowDeleteModal(false)}>
// //             <div className="modal" onClick={(e) => e.stopPropagation()}>
// //               <div className="modal__header">
// //                 <AlertCircle size={24} className="modal__icon" />
// //                 <h2>Delete Banner</h2>
// //               </div>
// //               <div className="modal__body">
// //                 <p>
// //                   Are you sure you want to delete <strong>"{selectedBanner?.title}"</strong>?
// //                 </p>
// //                 <p className="modal__warning">This action cannot be undone.</p>
// //               </div>
// //               <div className="modal__footer">
// //                 <button
// //                   onClick={() => setShowDeleteModal(false)}
// //                   className="modal-btn modal-btn--cancel"
// //                 >
// //                   Cancel
// //                 </button>
// //                 <button
// //                   onClick={handleDelete}
// //                   className="modal-btn modal-btn--delete"
// //                 >
// //                   <Trash2 size={16} />
// //                   Delete Banner
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Banner;

// // src/pages/admin/Banner/Banner.jsx

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import {
//   Pencil,
//   Trash2,
//   Plus,
//   Search,
//   CheckCircle,
//   XCircle,
//   Image,
//   Video,
//   AlertCircle,
//   RefreshCw,
//   ChevronLeft,
//   ChevronRight,
//   Filter,
//   Grid,
//   List,
// } from "lucide-react";

// import {
//   getAllBanners,
//   deleteBanner,
//   toggleBannerStatus,
// } from "../../../api/banner.api";

// import "./Banner.css";

// const Banner = () => {
//   const [banners, setBanners] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [viewMode, setViewMode] = useState("grid");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(6);
//   const [selectedBanner, setSelectedBanner] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   const fetchBanners = async () => {
//     try {
//       setLoading(true);
//       const res = await getAllBanners({ search });
//       setBanners(res.data.data.banners || []);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to fetch banners");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBanners();
//   }, [search]);

//   const handleDelete = async () => {
//     if (!selectedBanner) return;
//     try {
//       await deleteBanner(selectedBanner.id);
//       toast.success("Banner deleted successfully");
//       setShowDeleteModal(false);
//       setSelectedBanner(null);
//       fetchBanners();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Delete failed");
//     }
//   };

//   const handleStatus = async (id) => {
//     try {
//       await toggleBannerStatus(id);
//       toast.success("Status updated successfully");
//       fetchBanners();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Update failed");
//     }
//   };

//   const handleDeleteClick = (banner) => {
//     setSelectedBanner(banner);
//     setShowDeleteModal(true);
//   };

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = banners.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(banners.length / itemsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const getMediaIcon = (type) => {
//     return type === "IMAGE" ? <Image size={16} /> : <Video size={16} />;
//   };

//   const getStatusBadge = (isActive) => {
//     return isActive ? (
//       <span className="badge badge--active">
//         <CheckCircle size={14} />
//         Active
//       </span>
//     ) : (
//       <span className="badge badge--inactive">
//         <XCircle size={14} />
//         Inactive
//       </span>
//     );
//   };

//   const getImageUrl = (mediaUrl) => {
//     if (!mediaUrl) return '';
//     // If URL already starts with http, use as is
//     if (mediaUrl.startsWith('http')) return mediaUrl;
//     // Otherwise prepend the API base URL
//     return `${API_BASE_URL}/uploads/banners/${mediaUrl}`;
//   };

//   return (
//     <div className="banner-page">
//       <div className="banner-page__container">
        
//         {/* Header */}
//         <div className="banner-page__header">
//           <div className="banner-page__header-left">
//             <h1 className="banner-page__title">Hero Slider</h1>
//             <p className="banner-page__subtitle">Manage homepage hero banners</p>
//           </div>
//           <Link
//             to="/admin/banner/create"
//             className="btn btn--primary"
//           >
//             <Plus size={18} />
//             Add Banner
//           </Link>
//         </div>

//         {/* Filters & Controls */}
//         <div className="banner-page__controls">
//           {/* Search */}
//           <div className="banner-page__search">
//             <Search size={18} className="banner-page__search-icon" />
//             <input
//               type="text"
//               placeholder="Search banners..."
//               className="banner-page__search-input"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             {search && (
//               <button
//                 onClick={() => setSearch("")}
//                 className="banner-page__search-clear"
//               >
//                 <XCircle size={16} />
//               </button>
//             )}
//           </div>

//           {/* View Toggle */}
//           <div className="banner-page__view-toggle">
//             <button
//               className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
//               onClick={() => setViewMode("grid")}
//               title="Grid View"
//             >
//               <Grid size={18} />
//             </button>
//             <button
//               className={`view-btn ${viewMode === "list" ? "active" : ""}`}
//               onClick={() => setViewMode("list")}
//               title="List View"
//             >
//               <List size={18} />
//             </button>
//           </div>
//         </div>

//         {/* Content */}
//         {loading ? (
//           <div className="banner-page__loading">
//             <div className="spinner"></div>
//             <p>Loading banners...</p>
//           </div>
//         ) : banners.length === 0 ? (
//           <div className="banner-page__empty">
//             <Image size={48} className="empty-icon" />
//             <h3>No banners found</h3>
//             <p>Get started by creating your first banner</p>
//             <Link
//               to="/admin/banner/create"
//               className="btn btn--primary"
//             >
//               <Plus size={18} />
//               Add Banner
//             </Link>
//           </div>
//         ) : (
//           <>
//             {/* Grid View */}
//             {viewMode === "grid" ? (
//               <div className="banner-page__grid">
//                 {currentItems.map((banner) => (
//                   <div key={banner.id} className="banner-card">
//                     {/* Media Preview */}
//                     <div className="banner-card__media">
//                       {banner.mediaType === "IMAGE" ? (
//                         <img
//                           src={getImageUrl(banner.mediaUrl)}
//                           alt={banner.title}
//                           className="banner-card__image"
//                           onError={(e) => {
//                             console.log("Image failed to load:", e.target.src);
//                             e.target.src = '/images/placeholder.jpg';
//                           }}
//                         />
//                       ) : (
//                         <video
//                           className="banner-card__video"
//                           muted
//                           loop
//                           autoPlay
//                           onError={(e) => {
//                             console.log("Video failed to load:", e.target.src);
//                           }}
//                         >
//                           <source
//                             src={getImageUrl(banner.mediaUrl)}
//                           />
//                           Your browser does not support the video tag.
//                         </video>
//                       )}
                      
//                       <div className="banner-card__badge">
//                         {getMediaIcon(banner.mediaType)}
//                         <span>{banner.mediaType}</span>
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="banner-card__content">
//                       <div className="banner-card__header">
//                         <h3 className="banner-card__title">{banner.title}</h3>
//                         {getStatusBadge(banner.isActive)}
//                       </div>
                      
//                       <div className="banner-card__meta">
//                         <span className="meta-item">
//                           <span className="meta-label">Order:</span>
//                           <span className="meta-value">{banner.displayOrder}</span>
//                         </span>
//                         <span className="meta-item">
//                           <span className="meta-label">Type:</span>
//                           <span className="meta-value">{banner.mediaType}</span>
//                         </span>
//                       </div>

//                       <div className="banner-card__actions">
//                         <button
//                           onClick={() => handleStatus(banner.id)}
//                           className={`action-btn status-btn ${
//                             banner.isActive ? "active" : "inactive"
//                           }`}
//                         >
//                           {banner.isActive ? "Deactivate" : "Activate"}
//                         </button>
//                         <Link
//                           to={`/admin/banner/edit/${banner.id}`}
//                           className="action-btn edit-btn"
//                         >
//                           <Pencil size={16} />
//                           Edit
//                         </Link>
//                         <button
//                           onClick={() => handleDeleteClick(banner)}
//                           className="action-btn delete-btn"
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               /* List View */
//               <div className="banner-page__table-wrapper">
//                 <table className="banner-page__table">
//                   <thead>
//                     <tr>
//                       <th>Preview</th>
//                       <th>Title</th>
//                       <th>Type</th>
//                       <th>Order</th>
//                       <th>Status</th>
//                       <th className="text-center">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {currentItems.map((banner) => (
//                       <tr key={banner.id}>
//                         <td>
//                           <div className="table-preview">
//                             {banner.mediaType === "IMAGE" ? (
//                               <img
//                                 src={getImageUrl(banner.mediaUrl)}
//                                 alt={banner.title}
//                                 className="table-preview__image"
//                                 onError={(e) => {
//                                   e.target.src = '/images/placeholder.jpg';
//                                 }}
//                               />
//                             ) : (
//                               <video
//                                 className="table-preview__video"
//                                 muted
//                                 loop
//                                 autoPlay
//                               >
//                                 <source
//                                   src={getImageUrl(banner.mediaUrl)}
//                                 />
//                               </video>
//                             )}
//                           </div>
//                         </td>
//                         <td>
//                           <span className="table-title">{banner.title}</span>
//                         </td>
//                         <td>
//                           <span className="table-type">
//                             {getMediaIcon(banner.mediaType)}
//                             {banner.mediaType}
//                           </span>
//                         </td>
//                         <td>
//                           <span className="table-order">{banner.displayOrder}</span>
//                         </td>
//                         <td>
//                           <button
//                             onClick={() => handleStatus(banner.id)}
//                             className="status-toggle"
//                           >
//                             {getStatusBadge(banner.isActive)}
//                           </button>
//                         </td>
//                         <td>
//                           <div className="table-actions">
//                             <Link
//                               to={`/admin/banner/edit/${banner.id}`}
//                               className="table-action edit"
//                               title="Edit"
//                             >
//                               <Pencil size={16} />
//                             </Link>
//                             <button
//                               onClick={() => handleDeleteClick(banner)}
//                               className="table-action delete"
//                               title="Delete"
//                             >
//                               <Trash2 size={16} />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="banner-page__pagination">
//                 <button
//                   className="pagination-btn"
//                   onClick={() => paginate(currentPage - 1)}
//                   disabled={currentPage === 1}
//                 >
//                   <ChevronLeft size={18} />
//                 </button>
                
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
//                   <button
//                     key={number}
//                     className={`pagination-btn ${currentPage === number ? "active" : ""}`}
//                     onClick={() => paginate(number)}
//                   >
//                     {number}
//                   </button>
//                 ))}
                
//                 <button
//                   className="pagination-btn"
//                   onClick={() => paginate(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                 >
//                   <ChevronRight size={18} />
//                 </button>
//               </div>
//             )}
//           </>
//         )}

//         {/* Delete Confirmation Modal */}
//         {showDeleteModal && (
//           <div className="modal-overlay" onClick={() => setShowDeleteModal(false)}>
//             <div className="modal" onClick={(e) => e.stopPropagation()}>
//               <div className="modal__header">
//                 <AlertCircle size={24} className="modal__icon" />
//                 <h2>Delete Banner</h2>
//               </div>
//               <div className="modal__body">
//                 <p>
//                   Are you sure you want to delete <strong>"{selectedBanner?.title}"</strong>?
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
//                 >
//                   <Trash2 size={16} />
//                   Delete Banner
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Banner;

// src/pages/admin/Banner/Banner.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Pencil,
  Trash2,
  Plus,
  Search,
  CheckCircle,
  XCircle,
  Image,
  Video,
  AlertCircle,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Filter,
  Grid,
  List,
} from "lucide-react";

import {
  getAllBanners,
  deleteBanner,
  toggleBannerStatus,
} from "../../../api/banner.api";

import "./Banner.css";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Get the base URL without /api for images
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  const fetchBanners = async () => {
    try {
      setLoading(true);
      const res = await getAllBanners({ search });
      setBanners(res.data.data.banners || []);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch banners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, [search]);

  const handleDelete = async () => {
    if (!selectedBanner) return;
    try {
      await deleteBanner(selectedBanner.id);
      toast.success("Banner deleted successfully");
      setShowDeleteModal(false);
      setSelectedBanner(null);
      fetchBanners();
    } catch (err) {
      toast.error(err.response?.data?.message || "Delete failed");
    }
  };

  const handleStatus = async (id) => {
    try {
      await toggleBannerStatus(id);
      toast.success("Status updated successfully");
      fetchBanners();
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    }
  };

  const handleDeleteClick = (banner) => {
    setSelectedBanner(banner);
    setShowDeleteModal(true);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = banners.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(banners.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getMediaIcon = (type) => {
    return type === "IMAGE" ? <Image size={16} /> : <Video size={16} />;
  };

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

  const getImageUrl = (mediaUrl) => {
    if (!mediaUrl) return '';
    // If URL already starts with http, use as is
    if (mediaUrl.startsWith('http')) return mediaUrl;
    // Use IMAGE_BASE_URL without /api for images
    return `${IMAGE_BASE_URL}/uploads/banners/${mediaUrl}`;
  };

  return (
    <div className="banner-page">
      <div className="banner-page__container">
        
        {/* Header */}
        <div className="banner-page__header">
          <div className="banner-page__header-left">
            <h1 className="banner-page__title">Hero Slider</h1>
            <p className="banner-page__subtitle">Manage homepage hero banners</p>
          </div>
          <Link
            to="/admin/banner/create"
            className="btn btn--primary"
          >
            <Plus size={18} />
            Add Banner
          </Link>
        </div>

        {/* Filters & Controls */}
        <div className="banner-page__controls">
          {/* Search */}
          <div className="banner-page__search">
            <Search size={18} className="banner-page__search-icon" />
            <input
              type="text"
              placeholder="Search banners..."
              className="banner-page__search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="banner-page__search-clear"
              >
                <XCircle size={16} />
              </button>
            )}
          </div>

          {/* View Toggle */}
          <div className="banner-page__view-toggle">
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

        {/* Content */}
        {loading ? (
          <div className="banner-page__loading">
            <div className="spinner"></div>
            <p>Loading banners...</p>
          </div>
        ) : banners.length === 0 ? (
          <div className="banner-page__empty">
            <Image size={48} className="empty-icon" />
            <h3>No banners found</h3>
            <p>Get started by creating your first banner</p>
            <Link
              to="/admin/banner/create"
              className="btn btn--primary"
            >
              <Plus size={18} />
              Add Banner
            </Link>
          </div>
        ) : (
          <>
            {/* Grid View */}
            {viewMode === "grid" ? (
              <div className="banner-page__grid">
                {currentItems.map((banner) => (
                  <div key={banner.id} className="banner-card">
                    {/* Media Preview */}
                    <div className="banner-card__media">
                      {banner.mediaType === "IMAGE" ? (
                        <img
                          src={getImageUrl(banner.mediaUrl)}
                          alt={banner.title}
                          className="banner-card__image"
                          onError={(e) => {
                            console.log("Image failed to load:", e.target.src);
                            e.target.style.display = 'none';
                            // You can also show a fallback
                            // e.target.src = '/images/placeholder.jpg';
                          }}
                        />
                      ) : (
                        <video
                          className="banner-card__video"
                          muted
                          loop
                          autoPlay
                          onError={(e) => {
                            console.log("Video failed to load:", e.target.src);
                          }}
                        >
                          <source
                            src={getImageUrl(banner.mediaUrl)}
                          />
                          Your browser does not support the video tag.
                        </video>
                      )}
                      
                      <div className="banner-card__badge">
                        {getMediaIcon(banner.mediaType)}
                        <span>{banner.mediaType}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="banner-card__content">
                      <div className="banner-card__header">
                        <h3 className="banner-card__title">{banner.title}</h3>
                        {getStatusBadge(banner.isActive)}
                      </div>
                      
                      <div className="banner-card__meta">
                        <span className="meta-item">
                          <span className="meta-label">Order:</span>
                          <span className="meta-value">{banner.displayOrder}</span>
                        </span>
                        <span className="meta-item">
                          <span className="meta-label">Type:</span>
                          <span className="meta-value">{banner.mediaType}</span>
                        </span>
                      </div>

                      <div className="banner-card__actions">
                        <button
                          onClick={() => handleStatus(banner.id)}
                          className={`action-btn status-btn ${
                            banner.isActive ? "active" : "inactive"
                          }`}
                        >
                          {banner.isActive ? "Deactivate" : "Activate"}
                        </button>
                        <Link
                          to={`/admin/banner/edit/${banner.id}`}
                          className="action-btn edit-btn"
                        >
                          <Pencil size={16} />
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDeleteClick(banner)}
                          className="action-btn delete-btn"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="banner-page__table-wrapper">
                <table className="banner-page__table">
                  <thead>
                    <tr>
                      <th>Preview</th>
                      <th>Title</th>
                      <th>Type</th>
                      <th>Order</th>
                      <th>Status</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((banner) => (
                      <tr key={banner.id}>
                        <td>
                          <div className="table-preview">
                            {banner.mediaType === "IMAGE" ? (
                              <img
                                src={getImageUrl(banner.mediaUrl)}
                                alt={banner.title}
                                className="table-preview__image"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            ) : (
                              <video
                                className="table-preview__video"
                                muted
                                loop
                                autoPlay
                              >
                                <source
                                  src={getImageUrl(banner.mediaUrl)}
                                />
                              </video>
                            )}
                          </div>
                        </td>
                        <td>
                          <span className="table-title">{banner.title}</span>
                        </td>
                        <td>
                          <span className="table-type">
                            {getMediaIcon(banner.mediaType)}
                            {banner.mediaType}
                          </span>
                        </td>
                        <td>
                          <span className="table-order">{banner.displayOrder}</span>
                        </td>
                        <td>
                          <button
                            onClick={() => handleStatus(banner.id)}
                            className="status-toggle"
                          >
                            {getStatusBadge(banner.isActive)}
                          </button>
                        </td>
                        <td>
                          <div className="table-actions">
                            <Link
                              to={`/admin/banner/edit/${banner.id}`}
                              className="table-action edit"
                              title="Edit"
                            >
                              <Pencil size={16} />
                            </Link>
                            <button
                              onClick={() => handleDeleteClick(banner)}
                              className="table-action delete"
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="banner-page__pagination">
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
          </>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="modal-overlay" onClick={() => setShowDeleteModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal__header">
                <AlertCircle size={24} className="modal__icon" />
                <h2>Delete Banner</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete <strong>"{selectedBanner?.title}"</strong>?
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
                  Delete Banner
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;