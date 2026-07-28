// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// import TestimonialForm from "./TestimonialForm";
// import { createTestimonial } from "../../../api/testimonial.api";

// const AddTestimonial = () => {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);

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

//       if (data.photo && data.photo.length > 0) {
//         formData.append("photo", data.photo[0]);
//       }

//       await createTestimonial(formData);

//       toast.success(
//         "Testimonial created successfully."
//       );

//       navigate("/admin/testimonials");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to create testimonial."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">
//           Add Testimonial
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Create a new testimonial.
//         </p>
//       </div>

//       <TestimonialForm
//         onSubmit={onSubmit}
//         loading={loading}
//       />
//     </div>
//   );
// };

// export default AddTestimonial;
// src/pages/admin/testimonials/AddTestimonial.jsx

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, MessageSquare } from "lucide-react";

import TestimonialForm from "./TestimonialForm";
import { createTestimonial } from "../../../api/testimonial.api";

import "./AddTestimonial.css";

const AddTestimonial = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

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

      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      await createTestimonial(formData);

      toast.success("Testimonial created successfully! 🎉");

      navigate("/admin/testimonials");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create testimonial."
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
    navigate("/admin/testimonials");
  };

  return (
    <div className="add-testimonial-page">
      <div className="add-testimonial-page__container">
        
        {/* Header */}
        <div className="add-testimonial-page__header">
          <div className="add-testimonial-page__header-left">
            <Link to="/admin/testimonials" className="back-btn">
              <ArrowLeft size={18} />
              Back to Testimonials
            </Link>
            <div className="add-testimonial-page__header-title">
              <div className="add-testimonial-page__header-icon">
                <MessageSquare size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="add-testimonial-page__title">Add Testimonial</h1>
                <p className="add-testimonial-page__subtitle">
                  Create a new client testimonial or review
                </p>
              </div>
            </div>
          </div>
          <div className="add-testimonial-page__header-actions">
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
        <div className="add-testimonial-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <MessageSquare size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Testimonial Details</h2>
              <p className="form-card__subtitle">
                Fill in the information below to add a new testimonial
              </p>
            </div>
          </div>

          <TestimonialForm
            onSubmit={onSubmit}
            loading={loading}
          />
        </div>

        {/* Tips Section */}
        <div className="add-testimonial-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Creating Testimonials</h3>
            </div>
            <ul className="tips-list">
              <li>Use real client names and details</li>
              <li>Add a professional profile photo</li>
              <li>Write authentic and genuine testimonials</li>
              <li>Include specific details about the experience</li>
              <li>Add a rating to help build trust</li>
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

export default AddTestimonial; 