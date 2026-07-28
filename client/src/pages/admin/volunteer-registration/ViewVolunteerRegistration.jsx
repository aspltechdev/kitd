// // src/pages/admin/volunteer-registration/ViewVolunteerRegistration.jsx

// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";
// import { ArrowLeft, Trash2 } from "lucide-react";

// import {
//   getVolunteerById,
//   updateVolunteerStatus,
//   deleteVolunteer,
// } from "../../../api/volunteer.api";

// const ViewVolunteerRegistration = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [volunteer, setVolunteer] = useState(null);

//   const fetchVolunteer = async () => {
//     try {
//       setLoading(true);

//       const res = await getVolunteerById(id);

//       const data =
//         res.data?.data?.volunteer ||
//         res.data?.data ||
//         res.data?.volunteer;

//       setVolunteer(data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch volunteer details."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVolunteer();
//   }, [id]);

//   const handleStatus = async (status) => {
//     try {
//       await updateVolunteerStatus(id, {
//         status,
//       });

//       toast.success("Status updated successfully.");

//       fetchVolunteer();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Unable to update status."
//       );
//     }
//   };

//   const handleDelete = async () => {
//     if (
//       !window.confirm(
//         "Are you sure you want to delete this volunteer registration?"
//       )
//     )
//       return;

//     try {
//       await deleteVolunteer(id);

//       toast.success(
//         "Volunteer registration deleted successfully."
//       );

//       navigate("/admin/volunteer-registrations");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Delete failed."
//       );
//     }
//   };

//   if (loading) {
//     return <div className="p-6">Loading...</div>;
//   }

//   if (!volunteer) {
//     return (
//       <div className="p-6">
//         Volunteer registration not found.
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">

//       {/* Header */}

//       <div className="flex justify-between items-center mb-6">

//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-blue-600"
//         >
//           <ArrowLeft size={18} />
//           Back
//         </button>

//         <button
//           onClick={handleDelete}
//           className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
//         >
//           <Trash2 size={18} />
//           Delete
//         </button>

//       </div>

//       {/* Card */}

//       <div className="bg-white rounded-xl shadow p-6">

//         <h2 className="text-2xl font-bold mb-6">
//           Volunteer Registration Details
//         </h2>

//         {/* Status */}

//         <div className="mb-8">

//           <label className="font-semibold block mb-2">
//             Status
//           </label>

//           <select
//             value={volunteer.status}
//             onChange={(e) =>
//               handleStatus(e.target.value)
//             }
//             className="border rounded-lg px-4 py-2"
//           >
//             <option value="NEW">NEW</option>
//             <option value="UNDER_REVIEW">
//               UNDER REVIEW
//             </option>
//             <option value="CONTACTED">
//               CONTACTED
//             </option>
//             <option value="APPROVED">
//               APPROVED
//             </option>
//             <option value="REJECTED">
//               REJECTED
//             </option>
//           </select>

//         </div>

//         {/* Details */}

//         <div className="grid md:grid-cols-2 gap-6">

//           <Info
//             label="Full Name"
//             value={volunteer.fullName}
//           />

//           <Info
//             label="Email"
//             value={volunteer.email}
//           />

//           <Info
//             label="Mobile"
//             value={volunteer.mobile}
//           />

//           <Info
//             label="Occupation"
//             value={volunteer.occupation}
//           />

//           <Info
//             label="Organization"
//             value={volunteer.organization}
//           />

//           <Info
//             label="City"
//             value={volunteer.city}
//           />

//           <Info
//             label="State"
//             value={volunteer.state}
//           />

//           <Info
//             label="Country"
//             value={volunteer.country}
//           />

//           <Info
//             label="Area of Interest"
//             value={volunteer.interests}
//           />

//           <Info
//             label="Experience"
//             value={volunteer.experience}
//           />

//           <Info
//             label="Availability"
//             value={volunteer.availability}
//           />

//         </div>

//         {/* Message */}

//         <div className="mt-8">

//           <h3 className="font-semibold mb-2">
//             Message
//           </h3>

//           <div className="border rounded-lg bg-gray-50 p-4">
//             {volunteer.message ||
//               "No message provided."}
//           </div>

//         </div>

//         {/* Created At */}

//         <div className="mt-8">

//           <Info
//             label="Submitted On"
//             value={new Date(
//               volunteer.createdAt
//             ).toLocaleString()}
//           />

//         </div>

//       </div>

//     </div>
//   );
// };

// const Info = ({ label, value }) => (
//   <div>
//     <p className="text-sm text-gray-500">
//       {label}
//     </p>

//     <p className="font-medium">
//       {value || "-"}
//     </p>
//   </div>
// );

// export default ViewVolunteerRegistration;


// src/pages/admin/volunteer-registration/ViewVolunteerRegistration.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  Trash2,
  User,
  Mail,
  Phone,
  Briefcase,
  Building,
  MapPin,
  Globe,
  Calendar,
  Clock,
  MessageCircle,
  CheckCircle,
  Clock as ClockIcon,
  FileText,
  UserCheck,
  UserX,
  AlertCircle,
} from "lucide-react";

import {
  getVolunteerById,
  updateVolunteerStatus,
  deleteVolunteer,
} from "../../../api/volunteer.api";

import "./ViewVolunteerRegistration.css";

const ViewVolunteerRegistration = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [volunteer, setVolunteer] = useState(null);
  const [updating, setUpdating] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const fetchVolunteer = async () => {
    try {
      setLoading(true);
      const res = await getVolunteerById(id);
      const data = res.data?.data?.volunteer || res.data?.data || res.data?.volunteer;
      setVolunteer(data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch volunteer details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVolunteer();
  }, [id]);

  const handleStatus = async (status) => {
    try {
      setUpdating(true);
      await updateVolunteerStatus(id, { status });
      toast.success("Status updated successfully.");
      fetchVolunteer();
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to update status.");
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteVolunteer(id);
      toast.success("Volunteer registration deleted successfully.");
      navigate("/admin/volunteer-registrations");
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed.");
    }
  };

  const getStatusColor = (status) => {
    const statusMap = {
      NEW: { bg: "#eff6ff", color: "#1e40af", label: "New", icon: <ClockIcon size={16} /> },
      UNDER_REVIEW: { bg: "#fef3c7", color: "#92400e", label: "Under Review", icon: <FileText size={16} /> },
      CONTACTED: { bg: "#e0e7ff", color: "#3730a3", label: "Contacted", icon: <MessageCircle size={16} /> },
      APPROVED: { bg: "#d1fae5", color: "#065f46", label: "Approved", icon: <UserCheck size={16} /> },
      REJECTED: { bg: "#fee2e2", color: "#991b1b", label: "Rejected", icon: <UserX size={16} /> },
    };
    return statusMap[status] || statusMap.NEW;
  };

  const statusOptions = [
    { value: "NEW", label: "New" },
    { value: "UNDER_REVIEW", label: "Under Review" },
    { value: "CONTACTED", label: "Contacted" },
    { value: "APPROVED", label: "Approved" },
    { value: "REJECTED", label: "Rejected" },
  ];

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <div className="view-volunteer-page">
        <div className="view-volunteer-page__loading">
          <div className="spinner"></div>
          <p>Loading volunteer details...</p>
        </div>
      </div>
    );
  }

  if (!volunteer) {
    return (
      <div className="view-volunteer-page">
        <div className="view-volunteer-page__not-found">
          <AlertCircle size={48} className="not-found-icon" />
          <h2>Volunteer Not Found</h2>
          <p>The volunteer registration you're looking for doesn't exist.</p>
          <Link to="/admin/volunteer-registrations" className="btn btn--primary">
            Back to List
          </Link>
        </div>
      </div>
    );
  }

  const statusStyle = getStatusColor(volunteer.status);

  return (
    <div className="view-volunteer-page">
      <div className="view-volunteer-page__container">

        {/* Header */}
        <div className="view-volunteer-page__header">
          <div className="view-volunteer-page__header-left">
            <Link to="/admin/volunteer-registrations" className="back-btn">
              <ArrowLeft size={18} />
              Back to List
            </Link>
            <div className="view-volunteer-page__header-title">
              <div className="view-volunteer-page__header-avatar">
                {getInitials(volunteer.fullName)}
              </div>
              <div>
                <h1 className="view-volunteer-page__title">{volunteer.fullName}</h1>
                <p className="view-volunteer-page__subtitle">Volunteer Registration Details</p>
              </div>
            </div>
          </div>
          <div className="view-volunteer-page__header-actions">
            <button
              onClick={() => setShowDeleteModal(true)}
              className="btn btn--danger"
            >
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="view-volunteer-page__content">

          {/* Status Card */}
          <div className="status-card">
            <div className="status-card__left">
              <div className="status-card__icon" style={{ background: statusStyle.bg, color: statusStyle.color }}>
                {statusStyle.icon}
              </div>
              <div>
                <p className="status-card__label">Current Status</p>
                <div className="status-card__value" style={{ color: statusStyle.color }}>
                  {statusStyle.label}
                </div>
              </div>
            </div>
            <div className="status-card__right">
              <select
                value={volunteer.status}
                onChange={(e) => handleStatus(e.target.value)}
                disabled={updating}
                className="status-select"
                style={{
                  backgroundColor: statusStyle.bg,
                  color: statusStyle.color,
                  borderColor: `${statusStyle.color}40`,
                }}
              >
                {statusOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {updating && <span className="status-updating">Updating...</span>}
            </div>
          </div>

          {/* Personal Information */}
          <div className="info-card">
            <h3 className="info-card__title">
              <User size={18} />
              Personal Information
            </h3>
            <div className="info-card__grid">
              <InfoItem label="Full Name" value={volunteer.fullName} />
              <InfoItem label="Email" value={volunteer.email} />
              <InfoItem label="Mobile" value={volunteer.mobile} />
              <InfoItem label="Occupation" value={volunteer.occupation} />
              <InfoItem label="Organization" value={volunteer.organization} />
            </div>
          </div>

          {/* Location */}
          <div className="info-card">
            <h3 className="info-card__title">
              <MapPin size={18} />
              Location
            </h3>
            <div className="info-card__grid">
              <InfoItem label="City" value={volunteer.city} />
              <InfoItem label="State" value={volunteer.state} />
              <InfoItem label="Country" value={volunteer.country} />
            </div>
          </div>

          {/* Volunteer Details */}
          <div className="info-card">
            <h3 className="info-card__title">
              <Clock size={18} />
              Volunteer Details
            </h3>
            <div className="info-card__grid">
              <InfoItem label="Area of Interest" value={volunteer.interests} />
              <InfoItem label="Experience" value={volunteer.experience} />
              <InfoItem label="Availability" value={volunteer.availability} />
              <InfoItem label="Submitted On" value={new Date(volunteer.createdAt).toLocaleString()} />
            </div>
          </div>

          {/* Message */}
          <div className="info-card">
            <h3 className="info-card__title">
              <MessageCircle size={18} />
              Message
            </h3>
            <div className="info-card__message">
              {volunteer.message || "No message provided."}
            </div>
          </div>

        </div>

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="modal-overlay" onClick={() => setShowDeleteModal(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal__header">
                <AlertCircle size={24} className="modal__icon" />
                <h2>Delete Volunteer Registration</h2>
              </div>
              <div className="modal__body">
                <p>
                  Are you sure you want to delete <strong>"{volunteer?.fullName}"</strong>'s registration?
                </p>
                <p className="modal__warning">This action cannot be undone.</p>
              </div>
              <div className="modal__footer">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="modal-btn modal-btn--cancel"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="modal-btn modal-btn--delete"
                >
                  <Trash2 size={16} />
                  Delete Registration
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="info-item">
    <p className="info-item__label">{label}</p>
    <p className="info-item__value">{value || "—"}</p>
  </div>
);

export default ViewVolunteerRegistration;