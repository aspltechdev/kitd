// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// import TeamForm from "./TeamForm";
// import { createTeam } from "../../../api/team.api";

// const AddTeam = () => {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append("name", data.name);
//       formData.append("designation", data.designation);
//       formData.append("bio", data.bio);

//       formData.append("category", data.category);

//       formData.append("email", data.email);
//       formData.append("phone", data.phone);

//       formData.append("linkedin", data.linkedin);
//       formData.append("facebook", data.facebook);
//       formData.append("instagram", data.instagram);
//       formData.append("website", data.website);

//       formData.append("displayOrder", data.displayOrder);
//       formData.append("isActive", data.isActive);

//       if (data.image && data.image.length > 0) {
//         formData.append("image", data.image[0]);
//       }

//       await createTeam(formData);

//       toast.success("Team member created successfully.");

//       navigate("/admin/team");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to create team member."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">

//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">
//           Add Team Member
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Add a new founder, committee member, or teacher.
//         </p>
//       </div>

//       <TeamForm
//         onSubmit={onSubmit}
//         loading={loading}
//       />

//     </div>
//   );
// };

// export default AddTeam;


// src/pages/admin/Team/AddTeam.jsx

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, UserPlus } from "lucide-react";

import TeamForm from "./TeamForm";
import { createTeam } from "../../../api/team.api";

import "./AddTeam.css";

const AddTeam = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("designation", data.designation);
      formData.append("bio", data.bio);
      formData.append("category", data.category);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("linkedin", data.linkedin);
      formData.append("facebook", data.facebook);
      formData.append("instagram", data.instagram);
      formData.append("website", data.website);
      formData.append("displayOrder", data.displayOrder);
      formData.append("isActive", data.isActive);

      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      await createTeam(formData);

      toast.success("Team member created successfully! 🎉");

      navigate("/admin/team");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create team member."
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
    navigate("/admin/team");
  };

  return (
    <div className="add-team-page">
      <div className="add-team-page__container">
        
        {/* Header */}
        <div className="add-team-page__header">
          <div className="add-team-page__header-left">
            <Link to="/admin/team" className="back-btn">
              <ArrowLeft size={18} />
              Back to Team
            </Link>
            <div className="add-team-page__header-title">
              <div className="add-team-page__header-icon">
                <UserPlus size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="add-team-page__title">Add Team Member</h1>
                <p className="add-team-page__subtitle">
                  Add a new founder, committee member, or teacher to the team
                </p>
              </div>
            </div>
          </div>
          <div className="add-team-page__header-actions">
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
        <div className="add-team-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <UserPlus size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Member Details</h2>
              <p className="form-card__subtitle">
                Fill in the information below to add a new team member
              </p>
            </div>
          </div>

          <TeamForm
            onSubmit={onSubmit}
            loading={loading}
          />
        </div>

        {/* Tips Section */}
        <div className="add-team-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Adding Team Members</h3>
            </div>
            <ul className="tips-list">
              <li>Use a professional profile photo (minimum 400x400px)</li>
              <li>Write a compelling bio highlighting their expertise</li>
              <li>Add social media links to connect with the community</li>
              <li>Set appropriate display order for proper listing</li>
              <li>Verify contact information before submitting</li>
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

export default AddTeam;