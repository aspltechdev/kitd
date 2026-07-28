// // src/pages/admin/news/EditNews.jsx

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";

// import NewsForm from "./NewsForm";
// import {
//   getNewsById,
//   updateNews,
// } from "../../../api/news.api";

// const EditNews = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [initialValues, setInitialValues] = useState(null);

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const fetchNews = async () => {
//     try {
//       const res = await getNewsById(id);

//       const news =
//         res.data?.data?.news ||
//         res.data?.data ||
//         res.data;

//       setInitialValues(news);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch news."
//       );

//       navigate("/admin/news");
//     }
//   };

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append("title", data.title);
//       formData.append("slug", data.slug);
//       formData.append(
//         "shortDescription",
//         data.shortDescription
//       );
//       formData.append("content", data.content);
//       formData.append(
//         "category",
//         data.category || ""
//       );
//       formData.append(
//         "author",
//         data.author || ""
//       );
//       formData.append(
//         "publishedDate",
//         data.publishedDate || ""
//       );
//       formData.append(
//         "displayOrder",
//         data.displayOrder || 1
//       );
//       formData.append(
//         "featured",
//         data.featured
//       );
//       formData.append(
//         "isActive",
//         data.isActive
//       );

//       // Upload new thumbnail only if selected
//       if (
//         data.thumbnail &&
//         data.thumbnail.length > 0
//       ) {
//         formData.append(
//           "thumbnail",
//           data.thumbnail[0]
//         );
//       }

//       await updateNews(id, formData);

//       toast.success(
//         "News updated successfully."
//       );

//       navigate("/admin/news");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to update news."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!initialValues) {
//     return (
//       <div className="p-6 text-center">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">
//           Edit News
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Update news article details.
//         </p>
//       </div>

//       <NewsForm
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         loading={loading}
//       />
//     </div>
//   );
// };

// export default EditNews;


// src/pages/admin/News/EditNews.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, Newspaper, Loader2 } from "lucide-react";

import NewsForm from "./NewsForm";
import {
  getNewsById,
  updateNews,
} from "../../../api/news.api";

import "./EditNews.css";

const EditNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [initialValues, setInitialValues] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    fetchNews();
  }, [id]);

  const fetchNews = async () => {
    try {
      setFetchLoading(true);
      const res = await getNewsById(id);
      const news = res.data?.data?.news || res.data?.data || res.data;
      setInitialValues(news);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch news.");
      navigate("/admin/news");
    } finally {
      setFetchLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("slug", data.slug);
      formData.append("shortDescription", data.shortDescription);
      // formData.append("content", data.content);
      formData.append("description", data.content);
      formData.append("category", data.category || "");
      formData.append("author", data.author || "");
      formData.append("publishedDate", data.publishedDate || "");
      formData.append("displayOrder", data.displayOrder || 1);
      formData.append("featured", data.featured);
      formData.append("isActive", data.isActive);

      // Upload new thumbnail only if selected
      // if (data.thumbnail && data.thumbnail.length > 0) {
      //   formData.append("thumbnail", data.thumbnail[0]);
      // }

      if (data.thumbnail && data.thumbnail.length > 0) {
    formData.append("image", data.thumbnail[0]);
}
      await updateNews(id, formData);

      toast.success("News updated successfully! 🎉");

      navigate("/admin/news");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update news.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (loading) return;
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    setShowCancelModal(false);
    navigate("/admin/news");
  };

  if (fetchLoading) {
    return (
      <div className="edit-news-page">
        <div className="edit-news-page__loading">
          <div className="spinner"></div>
          <p>Loading news details...</p>
        </div>
      </div>
    );
  }

  if (!initialValues) {
    return (
      <div className="edit-news-page">
        <div className="edit-news-page__not-found">
          <AlertCircle size={48} className="not-found-icon" />
          <h2>News Article Not Found</h2>
          <p>The news article you're trying to edit doesn't exist or has been removed.</p>
          <Link to="/admin/news" className="btn btn--primary">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-news-page">
      <div className="edit-news-page__container">
        
        {/* Header */}
        <div className="edit-news-page__header">
          <div className="edit-news-page__header-left">
            <Link to="/admin/news" className="back-btn">
              <ArrowLeft size={18} />
              Back to News
            </Link>
            <div className="edit-news-page__header-title">
              <div className="edit-news-page__header-icon">
                <Newspaper size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="edit-news-page__title">Edit News Article</h1>
                <p className="edit-news-page__subtitle">
                  Update news article details and information
                </p>
              </div>
            </div>
          </div>
          <div className="edit-news-page__header-actions">
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn--secondary"
              disabled={loading}
            >
              <X size={18} />
              Cancel
            </button>

            <button
              type="submit"
              form="news-form"
              disabled={loading}
              className="btn btn--primary"
            >
              {loading ? (
                <>
                  <Loader2 size={18} strokeWidth={2} className="spinner-btn" />
                  <span>Updating...</span>
                </>
              ) : (
                <>
                  <Save size={18} strokeWidth={2} />
                  <span>Update Article</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div className="edit-news-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <Newspaper size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Edit Article Details</h2>
              <p className="form-card__subtitle">
                Update the information below to modify this news article
              </p>
            </div>
          </div>

          <NewsForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            loading={loading}
            isEdit={true}
            formId="news-form"
          />
        </div>

        {/* Tips Section */}
        <div className="edit-news-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Updating News Articles</h3>
            </div>
            <ul className="tips-list">
              <li>Keep the title descriptive and engaging</li>
              <li>Update the content if new information is available</li>
              <li>Add a new thumbnail image to refresh the article</li>
              <li>Review the category and tags for accuracy</li>
              <li>Toggle featured status for important articles</li>
            </ul>
          </div>
        </div>

        {/* Cancel Confirmation Modal */}
        {showCancelModal && (
          <div className="modal-overlay" onClick={() => setShowCancelModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal__header">
                <AlertCircle size={24} className="modal__icon" />
                <h2>Cancel Editing</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to cancel? Your changes will be lost.
                </p>
              </div>
              <div className="modal__footer">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="modal-btn modal-btn--cancel"
                >
                  Continue Editing
                </button>
                <button
                  onClick={confirmCancel}
                  className="modal-btn modal-btn--delete"
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditNews;