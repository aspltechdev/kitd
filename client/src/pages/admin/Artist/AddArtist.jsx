// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// import ArtistForm from "./ArtistForm";
// import { createArtist } from "../../../api/artist.api";

// const AddArtist = () => {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append("fullName", data.fullName);
//       formData.append("stageName", data.stageName || "");
//       formData.append("email", data.email);
//       formData.append("mobile", data.mobile);
//       formData.append("gender", data.gender || "");
//       formData.append(
//         "dateOfBirth",
//         data.dateOfBirth || ""
//       );
//       formData.append(
//         "danceStyle",
//         data.danceStyle || ""
//       );
//       formData.append(
//         "experience",
//         data.experience || 0
//       );
//       formData.append(
//         "qualification",
//         data.qualification || ""
//       );
//       formData.append(
//         "biography",
//         data.biography || ""
//       );
//       formData.append("city", data.city || "");
//       formData.append("state", data.state || "");
//       formData.append("country", data.country || "");
//       formData.append(
//         "website",
//         data.website || ""
//       );
//       formData.append(
//         "facebook",
//         data.facebook || ""
//       );
//       formData.append(
//         "instagram",
//         data.instagram || ""
//       );
//       formData.append(
//         "youtube",
//         data.youtube || ""
//       );
//       formData.append(
//         "displayOrder",
//         data.displayOrder || 1
//       );
//       formData.append(
//         "isActive",
//         data.isActive
//       );

//       if (data.photo && data.photo.length > 0) {
//         formData.append("photo", data.photo[0]);
//       }

//       await createArtist(formData);

//       toast.success("Artist created successfully.");

//       navigate("/admin/artists");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to create artist."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold">
//           Add Artist
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Add a new artist to the website.
//         </p>
//       </div>

//       <ArtistForm
//         onSubmit={onSubmit}
//         loading={loading}
//       />
//     </div>
//   );
// };

// export default AddArtist;

// src/pages/admin/Artists/AddArtist.jsx

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, UserPlus } from "lucide-react";

import ArtistForm from "./ArtistForm";
import { createArtist } from "../../../api/artist.api";

import "./AddArtist.css";

const AddArtist = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("fullName", data.fullName);
      formData.append("stageName", data.stageName || "");
      formData.append("email", data.email);
      formData.append("mobile", data.mobile);
      formData.append("gender", data.gender || "");
      formData.append("dateOfBirth", data.dateOfBirth || "");
      formData.append("danceStyle", data.danceStyle || "");
      formData.append("experience", data.experience || 0);
      formData.append("qualification", data.qualification || "");
      formData.append("biography", data.biography || "");
      formData.append("city", data.city || "");
      formData.append("state", data.state || "");
      formData.append("country", data.country || "");
      formData.append("website", data.website || "");
      formData.append("facebook", data.facebook || "");
      formData.append("instagram", data.instagram || "");
      formData.append("youtube", data.youtube || "");
      formData.append("displayOrder", data.displayOrder || 1);
      formData.append("isActive", data.isActive);

      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      await createArtist(formData);

      toast.success("Artist created successfully! 🎉");

      navigate("/admin/artists");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to create artist."
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
    navigate("/admin/artists");
  };

  return (
    <div className="add-artist-page">
      <div className="add-artist-page__container">
        
        {/* Header */}
        <div className="add-artist-page__header">
          <div className="add-artist-page__header-left">
            <Link to="/admin/artists" className="back-btn">
              <ArrowLeft size={18} />
              Back to Artists
            </Link>
            <div className="add-artist-page__header-title">
              <div className="add-artist-page__header-icon">
                <UserPlus size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="add-artist-page__title">Add Artist</h1>
                <p className="add-artist-page__subtitle">
                  Add a new artist, dancer, or performer to the website
                </p>
              </div>
            </div>
          </div>
          <div className="add-artist-page__header-actions">
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
        <div className="add-artist-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <UserPlus size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Artist Details</h2>
              <p className="form-card__subtitle">
                Fill in the information below to add a new artist
              </p>
            </div>
          </div>

          <ArtistForm
            onSubmit={onSubmit}
            loading={loading}
          />
        </div>

        {/* Tips Section */}
        <div className="add-artist-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Adding Artists</h3>
            </div>
            <ul className="tips-list">
              <li>Use a professional profile photo (minimum 400x400px)</li>
              <li>Write a compelling biography highlighting their expertise</li>
              <li>Include accurate contact information</li>
              <li>Add social media links to connect with the community</li>
              <li>Verify all details before submitting</li>
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

export default AddArtist;