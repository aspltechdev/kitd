// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// import BannerForm from "./BannerForm";
// import { createBanner } from "../../../api/banner.api";

// const AddBanner = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append("title", data.title);
//       formData.append("subtitle", data.subtitle);
//       formData.append("description", data.description);

//       formData.append("mediaType", data.mediaType);

//       if (data.media && data.media.length > 0) {
//         formData.append("media", data.media[0]);
//       }

//       formData.append("buttonText", data.buttonText);
//       formData.append("buttonLink", data.buttonLink);

//       formData.append("displayOrder", data.displayOrder);

//       formData.append("isActive", data.isActive);

//       await createBanner(formData);

//       toast.success("Hero banner created successfully.");

//       navigate("/admin/banner");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to create banner."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">

//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">
//           Add Hero Banner
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Create a new homepage hero banner.
//         </p>
//       </div>

//       <BannerForm
//         loading={loading}
//         onSubmit={onSubmit}
//       />

//     </div>
//   );
// };

// export default AddBanner;




















// src/pages/admin/Banner/AddBanner.jsx

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, Image, Video, AlertCircle } from "lucide-react";

import BannerForm from "./BannerForm";
import { createBanner } from "../../../api/banner.api";

import "./AddBanner.css";

const AddBanner = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("subtitle", data.subtitle);
      formData.append("description", data.description);
      formData.append("mediaType", data.mediaType);

      if (data.media && data.media.length > 0) {
        formData.append("media", data.media[0]);
      }

      formData.append("buttonText", data.buttonText);
      formData.append("buttonLink", data.buttonLink);
      formData.append("displayOrder", data.displayOrder);
      formData.append("isActive", data.isActive);

      await createBanner(formData);

      toast.success("Hero banner created successfully! 🎉");

      navigate("/admin/banners");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create banner."
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
    navigate("/admin/banner");
  };

  return (
    <div className="add-banner-page">
      <div className="add-banner-page__container">
        
        {/* Header */}
        <div className="add-banner-page__header">
          <div className="add-banner-page__header-left">
            <Link to="/admin/banner" className="back-btn">
              <ArrowLeft size={18} />
              Back to Banners
            </Link>
            <h1 className="add-banner-page__title">Add Hero Banner</h1>
            <p className="add-banner-page__subtitle">
              Create a new homepage hero banner to showcase your content
            </p>
          </div>
          <div className="add-banner-page__header-actions">
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
        <div className="add-banner-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <Image size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Banner Details</h2>
              <p className="form-card__subtitle">
                Fill in the information below to create a new hero banner
              </p>
            </div>
          </div>

          <BannerForm
            loading={loading}
            onSubmit={onSubmit}
          />
        </div>

        {/* Tips Section */}
        <div className="add-banner-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Great Banners</h3>
            </div>
            <ul className="tips-list">
              <li>Use high-quality images (minimum 1920x1080px)</li>
              <li>Keep titles concise and impactful</li>
              <li>Add a clear call-to-action button</li>
              <li>Ensure text is readable against the background</li>
              <li>Test different display orders for optimal layout</li>
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

export default AddBanner;