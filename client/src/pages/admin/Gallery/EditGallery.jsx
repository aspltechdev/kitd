// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";

// import GalleryForm from "./GalleryForm";
// import {
//   getGalleryById,
//   updateGallery,
// } from "../../../api/gallery.api";

// const EditGallery = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [initialValues, setInitialValues] = useState(null);

//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   const fetchGallery = async () => {
//     try {
//       const res = await getGalleryById(id);

//       const gallery =
//         res.data?.data?.gallery ||
//         res.data?.data ||
//         res.data;

//       setInitialValues(gallery);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch gallery item."
//       );

//       navigate("/admin/gallery");
//     }
//   };

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append("title", data.title);
//       formData.append(
//         "description",
//         data.description || ""
//       );
//       formData.append(
//         "category",
//         data.category || ""
//       );
//       formData.append(
//         "displayOrder",
//         data.displayOrder || 1
//       );
//       formData.append(
//         "isActive",
//         data.isActive
//       );

//       // Upload new image only if selected
//       if (data.image && data.image.length > 0) {
//         formData.append("image", data.image[0]);
//       }

//       await updateGallery(id, formData);

//       toast.success("Gallery updated successfully.");

//       navigate("/admin/gallery");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to update gallery."
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
//           Edit Gallery
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Update gallery image details.
//         </p>
//       </div>

//       <GalleryForm
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         loading={loading}
//       />

//     </div>
//   );
// };

// export default EditGallery;


// src/pages/admin/Gallery/EditGallery.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, Image as ImageIcon, Loader2 } from "lucide-react";

import GalleryForm from "./GalleryForm";
import {
  getGalleryById,
  updateGallery,
} from "../../../api/gallery.api";

import "./EditGallery.css";

const EditGallery = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [initialValues, setInitialValues] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    fetchGallery();
  }, [id]);

  const fetchGallery = async () => {
    try {
      setFetchLoading(true);
      const res = await getGalleryById(id);
      const gallery = res.data?.data?.gallery || res.data?.data || res.data;
      setInitialValues(gallery);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch gallery item.");
      navigate("/admin/gallery");
    } finally {
      setFetchLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("description", data.description || "");
      formData.append("category", data.category || "");
      formData.append("displayOrder", data.displayOrder || 1);
      formData.append("isActive", data.isActive);

      // Upload new image only if selected
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      await updateGallery(id, formData);

      toast.success("Gallery updated successfully! 🎉");

      navigate("/admin/gallery");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update gallery.");
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
    navigate("/admin/gallery");
  };

  if (fetchLoading) {
    return (
      <div className="edit-gallery-page">
        <div className="edit-gallery-page__loading">
          <div className="spinner"></div>
          <p>Loading gallery details...</p>
        </div>
      </div>
    );
  }

  if (!initialValues) {
    return (
      <div className="edit-gallery-page">
        <div className="edit-gallery-page__not-found">
          <AlertCircle size={48} className="not-found-icon" />
          <h2>Gallery Item Not Found</h2>
          <p>The gallery item you're trying to edit doesn't exist or has been removed.</p>
          <Link to="/admin/gallery" className="btn btn--primary">
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-gallery-page">
      <div className="edit-gallery-page__container">
        
        {/* Header */}
        <div className="edit-gallery-page__header">
          <div className="edit-gallery-page__header-left">
            <Link to="/admin/gallery" className="back-btn">
              <ArrowLeft size={18} />
              Back to Gallery
            </Link>
            <div className="edit-gallery-page__header-title">
              <div className="edit-gallery-page__header-icon">
                <ImageIcon size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="edit-gallery-page__title">Edit Gallery Image</h1>
                <p className="edit-gallery-page__subtitle">
                  Update gallery image details and information
                </p>
              </div>
            </div>
          </div>
          <div className="edit-gallery-page__header-actions">
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
              form="gallery-form"
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
                  <span>Update Gallery</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div className="edit-gallery-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <ImageIcon size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Edit Gallery Details</h2>
              <p className="form-card__subtitle">
                Update the information below to modify this gallery item
              </p>
            </div>
          </div>

          <GalleryForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            loading={loading}
            isEdit={true}
            formId="gallery-form"
          />
        </div>

        {/* Tips Section */}
        <div className="edit-gallery-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Updating Gallery Images</h3>
            </div>
            <ul className="tips-list">
              <li>Keep the title descriptive and relevant</li>
              <li>Update the description if the image context changes</li>
              <li>Add a new image to refresh the gallery</li>
              <li>Review the category for proper classification</li>
              <li>Adjust display order to control listing position</li>
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

export default EditGallery;