// // src/pages/admin/news/AddNews.jsx

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// import NewsForm from "./NewsForm";
// import { createNews } from "../../../api/news.api";

// const AddNews = () => {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);

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

//       if (
//         data.thumbnail &&
//         data.thumbnail.length > 0
//       ) {
//         formData.append(
//           "thumbnail",
//           data.thumbnail[0]
//         );
//       }

//       await createNews(formData);

//       toast.success(
//         "News created successfully."
//       );

//       navigate("/admin/news");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to create news."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">
//           Add News
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Create a new news article.
//         </p>
//       </div>

//       <NewsForm
//         onSubmit={onSubmit}
//         loading={loading}
//       />
//     </div>
//   );
// };

// export default AddNews;


// src/pages/admin/News/AddNews.jsx

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, Newspaper } from "lucide-react";

import NewsForm from "./NewsForm";
import { createNews } from "../../../api/news.api";

import "./AddNews.css";

const AddNews = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

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

      // if (data.thumbnail && data.thumbnail.length > 0) {
      //   formData.append("thumbnail", data.thumbnail[0]);
      // }
if (data.thumbnail && data.thumbnail.length > 0) {
    formData.append("image", data.thumbnail[0]);
}
      await createNews(formData);

      toast.success("News created successfully! 🎉");

      navigate("/admin/news");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create news."
      );
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

  return (
    <div className="add-news-page">
      <div className="add-news-page__container">
        
        {/* Header */}
        <div className="add-news-page__header">
          <div className="add-news-page__header-left">
            <Link to="/admin/news" className="back-btn">
              <ArrowLeft size={18} />
              Back to News
            </Link>
            <div className="add-news-page__header-title">
              <div className="add-news-page__header-icon">
                <Newspaper size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="add-news-page__title">Add News Article</h1>
                <p className="add-news-page__subtitle">
                  Create a new news article for the website
                </p>
              </div>
            </div>
          </div>
          <div className="add-news-page__header-actions">
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn--secondary"
              disabled={loading}
            >
              <X size={18} />
              Cancel
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div className="add-news-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <Newspaper size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Article Details</h2>
              <p className="form-card__subtitle">
                Fill in the information below to create a new news article
              </p>
            </div>
          </div>

          <NewsForm
            onSubmit={onSubmit}
            loading={loading}
          />
        </div>

        {/* Tips Section */}
        <div className="add-news-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Writing News Articles</h3>
            </div>
            <ul className="tips-list">
              <li>Write a compelling and descriptive title</li>
              <li>Use a clear and concise short description</li>
              <li>Add a high-quality thumbnail image (minimum 1200x630px)</li>
              <li>Write detailed content with proper formatting</li>
              <li>Include relevant categories and tags</li>
            </ul>
          </div>
        </div>

        {/* Cancel Confirmation Modal */}
        {showCancelModal && (
          <div className="modal-overlay" onClick={() => setShowCancelModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal__header">
                <AlertCircle size={24} className="modal__icon" />
                <h2>Cancel Creation</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to cancel? Your progress will be lost.
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

export default AddNews;