// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";

// import TestimonialForm from "./TestimonialForm";
// import {
//   getTestimonialById,
//   updateTestimonial,
// } from "../../../api/testimonial.api";

// const EditTestimonial = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [initialValues, setInitialValues] = useState(null);

//   useEffect(() => {
//     fetchTestimonial();
//   }, []);

//   const fetchTestimonial = async () => {
//     try {
//       const res = await getTestimonialById(id);

//       const testimonial =
//         res.data?.data?.testimonial ||
//         res.data?.data ||
//         res.data;

//       setInitialValues(testimonial);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch testimonial."
//       );

//       navigate("/admin/testimonials");
//     }
//   };

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append("name", data.name);
//       formData.append(
//         "designation",
//         data.designation || ""
//       );
//       formData.append(
//         "company",
//         data.company || ""
//       );
//       formData.append(
//         "message",
//         data.message || ""
//       );
//       formData.append(
//         "rating",
//         data.rating || 5
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

//       // Upload new photo only if selected
//       if (data.photo && data.photo.length > 0) {
//         formData.append("photo", data.photo[0]);
//       }

//       await updateTestimonial(id, formData);

//       toast.success(
//         "Testimonial updated successfully."
//       );

//       navigate("/admin/testimonials");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to update testimonial."
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
//           Edit Testimonial
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Update testimonial details.
//         </p>
//       </div>

//       <TestimonialForm
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         loading={loading}
//       />
//     </div>
//   );
// };

// export default EditTestimonial;


// src/pages/admin/testimonials/EditTestimonial.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, MessageSquare, Loader2 } from "lucide-react";

import TestimonialForm from "./TestimonialForm";
import {
  getTestimonialById,
  updateTestimonial,
} from "../../../api/testimonial.api";

import "./EditTestimonial.css";

const EditTestimonial = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [initialValues, setInitialValues] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    fetchTestimonial();
  }, [id]);

  const fetchTestimonial = async () => {
    try {
      setFetchLoading(true);
      const res = await getTestimonialById(id);
      const testimonial = res.data?.data?.testimonial || res.data?.data || res.data;
      setInitialValues(testimonial);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch testimonial.");
      navigate("/admin/testimonials");
    } finally {
      setFetchLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("designation", data.designation || "");
      formData.append("company", data.company || "");
      formData.append("message", data.message || "");
      formData.append("rating", data.rating || 5);
      formData.append("displayOrder", data.displayOrder || 1);
      formData.append("featured", data.featured);
      formData.append("isActive", data.isActive);

      // Upload new photo only if selected
      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      await updateTestimonial(id, formData);

      toast.success("Testimonial updated successfully! 🎉");

      navigate("/admin/testimonials");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update testimonial.");
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
    navigate("/admin/testimonials");
  };

  if (fetchLoading) {
    return (
      <div className="edit-testimonial-page">
        <div className="edit-testimonial-page__loading">
          <div className="spinner"></div>
          <p>Loading testimonial details...</p>
        </div>
      </div>
    );
  }

  if (!initialValues) {
    return (
      <div className="edit-testimonial-page">
        <div className="edit-testimonial-page__not-found">
          <AlertCircle size={48} className="not-found-icon" />
          <h2>Testimonial Not Found</h2>
          <p>The testimonial you're trying to edit doesn't exist or has been removed.</p>
          <Link to="/admin/testimonials" className="btn btn--primary">
            Back to Testimonials
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-testimonial-page">
      <div className="edit-testimonial-page__container">
        
        {/* Header */}
        <div className="edit-testimonial-page__header">
          <div className="edit-testimonial-page__header-left">
            <Link to="/admin/testimonials" className="back-btn">
              <ArrowLeft size={18} />
              Back to Testimonials
            </Link>
            <div className="edit-testimonial-page__header-title">
              <div className="edit-testimonial-page__header-icon">
                <MessageSquare size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="edit-testimonial-page__title">Edit Testimonial</h1>
                <p className="edit-testimonial-page__subtitle">
                  Update testimonial details and information
                </p>
              </div>
            </div>
          </div>
          <div className="edit-testimonial-page__header-actions">
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
              form="testimonial-form"
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
                  <span>Update Testimonial</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div className="edit-testimonial-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <MessageSquare size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Edit Testimonial Details</h2>
              <p className="form-card__subtitle">
                Update the information below to modify this testimonial
              </p>
            </div>
          </div>

          <TestimonialForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            loading={loading}
            isEdit={true}
            formId="testimonial-form"
          />
        </div>

        {/* Tips Section */}
        <div className="edit-testimonial-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Updating Testimonials</h3>
            </div>
            <ul className="tips-list">
              <li>Keep the client's name and designation accurate</li>
              <li>Update the testimonial message if needed</li>
              <li>Add a new profile photo to refresh the testimonial</li>
              <li>Review the rating for consistency</li>
              <li>Toggle featured status for important testimonials</li>
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

export default EditTestimonial;