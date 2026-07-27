// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";

// import ActivityForm from "./ActivityForm";
// import {
//   getActivityById,
//   updateActivity,
// } from "../../../api/activity.api";

// const EditActivity = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [initialValues, setInitialValues] = useState(null);

//   useEffect(() => {
//     fetchActivity();
//   }, []);

//   const fetchActivity = async () => {
//     try {
//       const res = await getActivityById(id);

//       const activity =
//         res.data?.data?.activity ||
//         res.data?.data ||
//         res.data;

//       setInitialValues(activity);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch activity."
//       );

//       navigate("/admin/activity");
//     }
//   };

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

//       // Upload new image only if selected
//       if (data.image && data.image.length > 0) {
//         formData.append("image", data.image[0]);
//       }

//       await updateActivity(id, formData);

//       toast.success("Activity updated successfully.");

//       navigate("/admin/activity");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to update activity."
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
//           Edit Activity
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Update activity details.
//         </p>
//       </div>

//       <ActivityForm
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         loading={loading}
//       />

//     </div>
//   );
// };

// export default EditActivity;


// src/pages/admin/Activity/EditActivity.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, Calendar, Loader } from "lucide-react";

import ActivityForm from "./ActivityForm";
import {
  getActivityById,
  updateActivity,
} from "../../../api/activity.api";

import "./EditActivity.css";

const EditActivity = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [initialValues, setInitialValues] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    fetchActivity();
  }, [id]);

  const fetchActivity = async () => {
    try {
      setFetchLoading(true);
      const res = await getActivityById(id);
      const activity = res.data?.data?.activity || res.data?.data || res.data;
      setInitialValues(activity);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch activity.");
      navigate("/admin/activities");
    } finally {
      setFetchLoading(false);
    }
  };

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

      // Upload new image only if selected
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      await updateActivity(id, formData);

      toast.success("Activity updated successfully! 🎉");

      navigate("/admin/activities");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update activity.");
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

  if (fetchLoading) {
    return (
      <div className="edit-activity-page">
        <div className="edit-activity-page__loading">
          <div className="spinner"></div>
          <p>Loading activity details...</p>
        </div>
      </div>
    );
  }

  if (!initialValues) {
    return (
      <div className="edit-activity-page">
        <div className="edit-activity-page__not-found">
          <AlertCircle size={48} className="not-found-icon" />
          <h2>Activity Not Found</h2>
          <p>The activity you're trying to edit doesn't exist or has been removed.</p>
          <Link to="/admin/activity" className="btn btn--primary">
            Back to Activities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-activity-page">
      <div className="edit-activity-page__container">
        
        {/* Header */}
        <div className="edit-activity-page__header">
          <div className="edit-activity-page__header-left">
            <Link to="/admin/activity" className="back-btn">
              <ArrowLeft size={18} />
              Back to Activities
            </Link>
            <div className="edit-activity-page__header-title">
              <div className="edit-activity-page__header-icon">
                <Calendar size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="edit-activity-page__title">Edit Activity</h1>
                <p className="edit-activity-page__subtitle">
                  Update activity details and information
                </p>
              </div>
            </div>
          </div>
          <div className="edit-activity-page__header-actions">
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
        <div className="edit-activity-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <Calendar size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Edit Activity Details</h2>
              <p className="form-card__subtitle">
                Update the information below to modify this activity
              </p>
            </div>
          </div>

          <ActivityForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            loading={loading}
            isEdit={true}
          />
        </div>

        {/* Tips Section */}
        <div className="edit-activity-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Updating Activities</h3>
            </div>
            <ul className="tips-list">
              <li>Keep the title concise and descriptive</li>
              <li>Update the date if the activity has been rescheduled</li>
              <li>Add new images to refresh the activity appearance</li>
              <li>Review the description for accuracy and completeness</li>
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

export default EditActivity;