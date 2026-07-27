// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// import ActivityForm from "./ActivityForm";
// import { createActivity } from "../../../api/activity.api";

// const AddActivity = () => {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append("title", data.title);
//       formData.append(
//         "shortDescription",
//         data.shortDescription || ""
//       );
//       formData.append(
//         "description",
//         data.description || ""
//       );
//       formData.append("date", data.date || "");
//       formData.append(
//         "location",
//         data.location || ""
//       );
//       formData.append(
//         "displayOrder",
//         data.displayOrder || 1
//       );
//       formData.append(
//         "isActive",
//         data.isActive
//       );

//       if (data.image && data.image.length > 0) {
//         formData.append("image", data.image[0]);
//       }

//       await createActivity(formData);

//       toast.success("Activity created successfully.");

//       navigate("/admin/activity");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to create activity."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">

//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">
//           Add Activity
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Create a new activity or event for the website.
//         </p>
//       </div>

//       <ActivityForm
//         onSubmit={onSubmit}
//         loading={loading}
//       />

//     </div>
//   );
// };

// export default AddActivity;


// src/pages/admin/Activity/AddActivity.jsx

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, Calendar } from "lucide-react";

import ActivityForm from "./ActivityForm";
import { createActivity } from "../../../api/activity.api";

import "./AddActivity.css";

const AddActivity = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("shortDescription", data.shortDescription || "");
      formData.append("description", data.description || "");
      formData.append("date", data.date || "");
      formData.append("location", data.location || "");
      formData.append("displayOrder", data.displayOrder || 1);
      formData.append("isActive", data.isActive);

      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      await createActivity(formData);

      toast.success("Activity created successfully! 🎉");

      navigate("/admin/activities");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create activity."
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
    navigate("/admin/activities");
  };

  return (
    <div className="add-activity-page">
      <div className="add-activity-page__container">
        
        {/* Header */}
        <div className="add-activity-page__header">
          <div className="add-activity-page__header-left">
            <Link to="/admin/activities" className="back-btn">
              <ArrowLeft size={18} />
              Back to Activities
            </Link>
            <div className="add-activity-page__header-title">
              <div className="add-activity-page__header-icon">
                <Calendar size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="add-activity-page__title">Add Activity</h1>
                <p className="add-activity-page__subtitle">
                  Create a new activity, workshop, or event for the website
                </p>
              </div>
            </div>
          </div>
          <div className="add-activity-page__header-actions">
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
        <div className="add-activity-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <Calendar size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Activity Details</h2>
              <p className="form-card__subtitle">
                Fill in the information below to create a new activity
              </p>
            </div>
          </div>

          <ActivityForm
            onSubmit={onSubmit}
            loading={loading}
          />
        </div>

        {/* Tips Section */}
        <div className="add-activity-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Creating Activities</h3>
            </div>
            <ul className="tips-list">
              <li>Use a descriptive title that captures attention</li>
              <li>Include a clear date and location for the activity</li>
              <li>Write a compelling description with key details</li>
              <li>Add a high-quality image (minimum 1200x630px)</li>
              <li>Set an appropriate display order for listing</li>
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

export default AddActivity;