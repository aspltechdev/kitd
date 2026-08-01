// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";

// import TeamForm from "./TeamForm";
// import {
//   getTeamById,
//   updateTeam,
// } from "../../../api/team.api";

// const EditTeam = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [initialValues, setInitialValues] = useState(null);

//   useEffect(() => {
//     fetchTeam();
//   }, []);

//   const fetchTeam = async () => {
//     try {
//       const res = await getTeamById(id);

//       setInitialValues(res.data.data.team);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch team member."
//       );

//       navigate("/admin/team");
//     }
//   };

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

//       // Upload new image only if selected
//       if (data.image && data.image.length > 0) {
//         formData.append("image", data.image[0]);
//       }

//       await updateTeam(id, formData);

//       toast.success("Team member updated successfully.");

//       navigate("/admin/team");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to update team member."
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
//           Edit Team Member
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Update team member information.
//         </p>
//       </div>

//       <TeamForm
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         loading={loading}
//       />

//     </div>
//   );
// };

// export default EditTeam;

import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, User, Loader2 } from "lucide-react";

import TeamForm from "./TeamForm";
import {
  getTeamById,
  updateTeam,
} from "../../../api/team.api";

import "./EditTeam.css";

const EditTeam = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [initialValues, setInitialValues] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    fetchTeam();
  }, [id]);

  const fetchTeam = async () => {
    try {
      setFetchLoading(true);
      const res = await getTeamById(id);
      const member = res.data?.data?.team || res.data?.data || res.data;
      setInitialValues(member);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch team member.");
      navigate("/admin/team");
    } finally {
      setFetchLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      // Personal Information
      formData.append("name", data.name);
      formData.append("designation", data.designation);
      formData.append("biography", data.biography || "");
      formData.append("level", data.level || "MEMBER");
      formData.append("stageName", data.stageName || "");
      formData.append("email", data.email || "");
      formData.append("mobile", data.mobile || "");
      formData.append("danceForm", data.danceForm || "");
      formData.append("city", data.city || "");
      formData.append("country", data.country || "");

      // ✅ Social Links - Parse JSON string
      let socialLinks = data.socialLinks;
      if (typeof socialLinks === 'string') {
        try {
          socialLinks = JSON.parse(socialLinks);
        } catch (e) {
          socialLinks = {};
        }
      }
      formData.append("socialLinks", JSON.stringify(socialLinks));

      // ✅ Website Visibility
      formData.append("isPublic", data.isPublic === true || data.isPublic === "true");

      // Display Settings
      formData.append("sortOrder", data.sortOrder || 0);
      formData.append("isActive", data.isActive);

      // Upload new image only if selected
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      await updateTeam(id, formData);

      toast.success("Team member updated successfully! 🎉");
      navigate("/admin/team");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update team member.");
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

  if (fetchLoading) {
    return (
      <div className="edit-team-page">
        <div className="edit-team-page__loading">
          <div className="spinner"></div>
          <p>Loading team member details...</p>
        </div>
      </div>
    );
  }

  if (!initialValues) {
    return (
      <div className="edit-team-page">
        <div className="edit-team-page__not-found">
          <AlertCircle size={48} className="not-found-icon" />
          <h2>Team Member Not Found</h2>
          <p>The team member you're trying to edit doesn't exist or has been removed.</p>
          <Link to="/admin/team" className="btn btn--primary">Back to Team</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-team-page">
      <div className="edit-team-page__container">
        
        {/* Header */}
        <div className="edit-team-page__header">
          <div className="edit-team-page__header-left">
            <Link to="/admin/team" className="back-btn">
              <ArrowLeft size={18} />
              Back to Team
            </Link>
            <div className="edit-team-page__header-title">
              <div className="edit-team-page__header-icon">
                <User size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="edit-team-page__title">Edit Team Member</h1>
                <p className="edit-team-page__subtitle">
                  Update details for {initialValues.name || initialValues.fullName}
                </p>
              </div>
            </div>
          </div>
          <div className="edit-team-page__header-actions">
            <button type="button" onClick={handleCancel} className="btn btn--secondary" disabled={loading}>
              <X size={18} /> Cancel
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div className="edit-team-page__form-card">
          <TeamForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            loading={loading}
            isEdit={true}
          />
        </div>

        {/* Cancel Modal */}
        {showCancelModal && (
          <div className="modal-overlay" onClick={() => setShowCancelModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal__header">
                <AlertCircle size={24} className="modal__icon" />
                <h2>Cancel Editing</h2>
              </div>
              <div className="modal__body">
                <p>Are you sure you want to cancel? Your changes will be lost.</p>
              </div>
              <div className="modal__footer">
                <button onClick={() => setShowCancelModal(false)} className="modal-btn modal-btn--cancel">Continue Editing</button>
                <button onClick={confirmCancel} className="modal-btn modal-btn--delete">Yes, Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditTeam;