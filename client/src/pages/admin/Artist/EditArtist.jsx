// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";

// import ArtistForm from "./ArtistForm";
// import {
//   getArtistById,
//   updateArtist,
// } from "../../../api/artist.api";

// const EditArtist = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [initialValues, setInitialValues] = useState(null);

//   useEffect(() => {
//     fetchArtist();
//   }, []);

//   const fetchArtist = async () => {
//     try {
//       const res = await getArtistById(id);

//       const artist =
//         res.data?.data?.artist ||
//         res.data?.data ||
//         res.data;

//       setInitialValues(artist);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch artist."
//       );

//       navigate("/admin/artists");
//     }
//   };

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

//       // Upload new photo only if selected
//       if (data.photo && data.photo.length > 0) {
//         formData.append("photo", data.photo[0]);
//       }

//       await updateArtist(id, formData);

//       toast.success("Artist updated successfully.");

//       navigate("/admin/artists");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to update artist."
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
//           Edit Artist
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Update artist details.
//         </p>
//       </div>

//       <ArtistForm
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         loading={loading}
//       />
//     </div>
//   );
// };

// export default EditArtist;

// src/pages/admin/Artists/EditArtist.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, User, Loader2 } from "lucide-react";

import ArtistForm from "./ArtistForm";
import {
  getArtistById,
  updateArtist,
} from "../../../api/artist.api";

import "./EditArtist.css";

const EditArtist = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [initialValues, setInitialValues] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    fetchArtist();
  }, [id]);

  const fetchArtist = async () => {
    try {
      setFetchLoading(true);
      const res = await getArtistById(id);
      const artist = res.data?.data?.artist || res.data?.data || res.data;
      setInitialValues(artist);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch artist.");
      navigate("/admin/artists");
    } finally {
      setFetchLoading(false);
    }
  };

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

      // Upload new photo only if selected
      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      await updateArtist(id, formData);

      toast.success("Artist updated successfully! 🎉");

      navigate("/admin/artists");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update artist.");
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

  if (fetchLoading) {
    return (
      <div className="edit-artist-page">
        <div className="edit-artist-page__loading">
          <div className="spinner"></div>
          <p>Loading artist details...</p>
        </div>
      </div>
    );
  }

  if (!initialValues) {
    return (
      <div className="edit-artist-page">
        <div className="edit-artist-page__not-found">
          <AlertCircle size={48} className="not-found-icon" />
          <h2>Artist Not Found</h2>
          <p>The artist you're trying to edit doesn't exist or has been removed.</p>
          <Link to="/admin/artists" className="btn btn--primary">
            Back to Artists
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-artist-page">
      <div className="edit-artist-page__container">
        
        {/* Header */}
        <div className="edit-artist-page__header">
          <div className="edit-artist-page__header-left">
            <Link to="/admin/artists" className="back-btn">
              <ArrowLeft size={18} />
              Back to Artists
            </Link>
            <div className="edit-artist-page__header-title">
              <div className="edit-artist-page__header-icon">
                <User size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="edit-artist-page__title">Edit Artist</h1>
                <p className="edit-artist-page__subtitle">
                  Update artist details and information
                </p>
              </div>
            </div>
          </div>
          <div className="edit-artist-page__header-actions">
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
              form="artist-form"
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
                  <span>Update Artist</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div className="edit-artist-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <User size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Edit Artist Details</h2>
              <p className="form-card__subtitle">
                Update the information below to modify this artist
              </p>
            </div>
          </div>

          <ArtistForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            loading={loading}
            isEdit={true}
            formId="artist-form"
          />
        </div>

        {/* Tips Section */}
        <div className="edit-artist-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Updating Artists</h3>
            </div>
            <ul className="tips-list">
              <li>Keep the artist's name and stage name accurate</li>
              <li>Update contact information if changed</li>
              <li>Add a new profile photo to refresh the artist's page</li>
              <li>Review the biography for accuracy and completeness</li>
              <li>Update social media links if needed</li>
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

export default EditArtist;