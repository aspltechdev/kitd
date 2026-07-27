// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// import MemberForm from "./MemberForm";
// import { createMember } from "../../../api/members.api";

// const AddMember = () => {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append("memberId", data.memberId);
//       formData.append("fullName", data.fullName);
//       formData.append("email", data.email);
//       formData.append("mobile", data.mobile);
//       formData.append("gender", data.gender || "");
//       formData.append(
//         "membershipType",
//         data.membershipType || ""
//       );
//       formData.append("city", data.city || "");
//       formData.append("state", data.state || "");
//       formData.append("country", data.country || "");
//       formData.append(
//         "joinedDate",
//         data.joinedDate || ""
//       );
//       formData.append(
//         "expiryDate",
//         data.expiryDate || ""
//       );
//       formData.append("isActive", data.isActive);

//       if (data.photo && data.photo.length > 0) {
//         formData.append("photo", data.photo[0]);
//       }

//       await createMember(formData);

//       toast.success("Member created successfully.");

//       navigate("/admin/members");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to create member."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">
//           Add Member
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Register a new association member.
//         </p>
//       </div>

//       <MemberForm
//         onSubmit={onSubmit}
//         loading={loading}
//       />
//     </div>
//   );
// };

// export default AddMember;


// src/pages/admin/Members/AddMember.jsx

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, UserPlus } from "lucide-react";

import MemberForm from "./MemberForm";
import { createMember } from "../../../api/members.api";

import "./AddMember.css";

const AddMember = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("memberId", data.memberId);
      formData.append("fullName", data.fullName);
      formData.append("email", data.email);
      formData.append("mobile", data.mobile);
      formData.append("gender", data.gender || "");
      formData.append("membershipType", data.membershipType || "");
      formData.append("city", data.city || "");
      formData.append("state", data.state || "");
      formData.append("country", data.country || "");
      formData.append("joinedDate", data.joinedDate || "");
      formData.append("expiryDate", data.expiryDate || "");
      formData.append("isActive", data.isActive);

      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      await createMember(formData);

      toast.success("Member created successfully! 🎉");

      navigate("/admin/members");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create member."
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
    navigate("/admin/members");
  };

  return (
    <div className="add-member-page">
      <div className="add-member-page__container">
        
        {/* Header */}
        <div className="add-member-page__header">
          <div className="add-member-page__header-left">
            <Link to="/admin/members" className="back-btn">
              <ArrowLeft size={18} />
              Back to Members
            </Link>
            <div className="add-member-page__header-title">
              <div className="add-member-page__header-icon">
                <UserPlus size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="add-member-page__title">Add Member</h1>
                <p className="add-member-page__subtitle">
                  Register a new association member
                </p>
              </div>
            </div>
          </div>
          <div className="add-member-page__header-actions">
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
        <div className="add-member-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <UserPlus size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Member Details</h2>
              <p className="form-card__subtitle">
                Fill in the information below to register a new member
              </p>
            </div>
          </div>

          <MemberForm
            onSubmit={onSubmit}
            loading={loading}
          />
        </div>

        {/* Tips Section */}
        <div className="add-member-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Adding Members</h3>
            </div>
            <ul className="tips-list">
              <li>Use a valid email address for member communication</li>
              <li>Enter a unique member ID for identification</li>
              <li>Select the appropriate membership type</li>
              <li>Upload a clear profile photo (optional)</li>
              <li>Verify all contact details before submitting</li>
            </ul>
          </div>
        </div>

        {/* Cancel Confirmation Modal */}
        {showCancelModal && (
          <div className="modal-overlay" onClick={() => setShowCancelModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal__header">
                <AlertCircle size={24} className="modal__icon" />
                <h2>Cancel Registration</h2>
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

export default AddMember;