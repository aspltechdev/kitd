// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";

// import {
//   getContactById,
//   updateContactStatus,
// } from "../../../api/contact.api";

// const ViewContact = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [contact, setContact] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [statusLoading, setStatusLoading] = useState(false);

//   useEffect(() => {
//     fetchContact();
//   }, []);

//   const fetchContact = async () => {
//     try {
//       setLoading(true);

//       const res = await getContactById(id);

//       const data =
//         res.data?.data?.contact ||
//         res.data?.data ||
//         res.data;

//       setContact(data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch enquiry."
//       );

//       navigate("/admin/contact");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleStatusChange = async (e) => {
//     try {
//       setStatusLoading(true);

//       const status = e.target.value;

//       await updateContactStatus(id, {
//         status,
//       });

//       setContact((prev) => ({
//         ...prev,
//         status,
//       }));

//       toast.success("Status updated successfully.");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to update status."
//       );
//     } finally {
//       setStatusLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="p-6 text-center">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">

//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-2xl font-bold">
//             Contact Enquiry
//           </h1>

//           <p className="text-gray-500">
//             View enquiry details.
//           </p>
//         </div>

//         <button
//           onClick={() => navigate("/admin/contact")}
//           className="px-4 py-2 bg-gray-700 text-white rounded-lg"
//         >
//           Back
//         </button>
//       </div>

//       <div className="bg-white rounded-xl shadow p-6 space-y-6">

//         <div className="grid md:grid-cols-2 gap-6">

//           <div>
//             <label className="text-sm text-gray-500">
//               Full Name
//             </label>

//             <p className="font-semibold mt-1">
//               {contact.name}
//             </p>
//           </div>

//           <div>
//             <label className="text-sm text-gray-500">
//               Email
//             </label>

//             <p className="font-semibold mt-1">
//               {contact.email}
//             </p>
//           </div>

//           <div>
//             <label className="text-sm text-gray-500">
//               Phone
//             </label>

//             <p className="font-semibold mt-1">
//               {contact.phone || "-"}
//             </p>
//           </div>

//           <div>
//             <label className="text-sm text-gray-500">
//               Inquiry Type
//             </label>

//             <p className="font-semibold mt-1">
//               {contact.inquiryType || "-"}
//             </p>
//           </div>

//           <div>
//             <label className="text-sm text-gray-500">
//               Subject
//             </label>

//             <p className="font-semibold mt-1">
//               {contact.subject}
//             </p>
//           </div>

//           <div>
//             <label className="text-sm text-gray-500">
//               Submitted On
//             </label>

//             <p className="font-semibold mt-1">
//               {new Date(
//                 contact.createdAt
//               ).toLocaleString()}
//             </p>
//           </div>

//         </div>

//         <div>
//           <label className="text-sm text-gray-500">
//             Message
//           </label>

//           <div className="mt-2 p-4 border rounded-lg bg-gray-50 whitespace-pre-wrap">
//             {contact.message}
//           </div>
//         </div>

//         <div className="max-w-sm">
//           <label className="text-sm text-gray-500">
//             Enquiry Status
//           </label>

//           <select
//             value={contact.status || "NEW"}
//             onChange={handleStatusChange}
//             disabled={statusLoading}
//             className="w-full mt-2 border rounded-lg p-3"
//           >
//             <option value="NEW">
//               New
//             </option>

//             <option value="IN_PROGRESS">
//               In Progress
//             </option>

//             <option value="RESOLVED">
//               Resolved
//             </option>
//           </select>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ViewContact;
// src/pages/admin/contact/ViewContact.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Calendar,
  MessageSquare,
  Tag,
  Clock,
  CheckCircle,
  FileText,
  AlertCircle,
} from "lucide-react";

import {
  getContactById,
  updateContactStatus,
} from "../../../api/contact.api";

import "./ViewContact.css";

const ViewContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [statusLoading, setStatusLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchContact();
  }, [id]);

  const fetchContact = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await getContactById(id);
      const data = res.data?.data?.contact || res.data?.data || res.data;
      setContact(data);
    } catch (error) {
      setError(true);
      toast.error(error.response?.data?.message || "Failed to fetch enquiry.");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (e) => {
    try {
      setStatusLoading(true);
      const status = e.target.value;
      await updateContactStatus(id, { status });
      setContact((prev) => ({ ...prev, status }));
      toast.success("Status updated successfully.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update status.");
    } finally {
      setStatusLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const statusMap = {
      NEW: { bg: "#eff6ff", color: "#1e40af", label: "New", icon: <Clock size={16} /> },
      IN_PROGRESS: { bg: "#fef3c7", color: "#92400e", label: "In Progress", icon: <FileText size={16} /> },
      RESOLVED: { bg: "#d1fae5", color: "#065f46", label: "Resolved", icon: <CheckCircle size={16} /> },
    };
    return statusMap[status] || statusMap.NEW;
  };

  const statusOptions = [
    { value: "NEW", label: "New" },
    { value: "IN_PROGRESS", label: "In Progress" },
    { value: "RESOLVED", label: "Resolved" },
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
      <div className="view-contact-page">
        <div className="view-contact-page__loading">
          <div className="spinner"></div>
          <p>Loading enquiry details...</p>
        </div>
      </div>
    );
  }

  if (error || !contact) {
    return (
      <div className="view-contact-page">
        <div className="view-contact-page__not-found">
          <AlertCircle size={48} className="not-found-icon" />
          <h2>Enquiry Not Found</h2>
          <p>The enquiry you're looking for doesn't exist or has been removed.</p>
          <Link to="/admin/contact" className="btn btn--primary">
            Back to Enquiries
          </Link>
        </div>
      </div>
    );
  }

  const statusStyle = getStatusColor(contact.status);

  return (
    <div className="view-contact-page">
      <div className="view-contact-page__container">

        {/* Header */}
        <div className="view-contact-page__header">
          <div className="view-contact-page__header-left">
            <Link to="/admin/contact" className="back-btn">
              <ArrowLeft size={18} />
              Back to Enquiries
            </Link>
            <div className="view-contact-page__header-title">
              <div className="view-contact-page__header-avatar">
                {getInitials(contact.name)}
              </div>
              <div>
                <h1 className="view-contact-page__title">{contact.name}</h1>
                <p className="view-contact-page__subtitle">Contact Enquiry Details</p>
              </div>
            </div>
          </div>
          <div className="view-contact-page__header-actions">
            <span className="enquiry-id">#ENQ-{String(contact.id).padStart(4, '0')}</span>
          </div>
        </div>

        {/* Content */}
        <div className="view-contact-page__content">

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
                value={contact.status || "NEW"}
                onChange={handleStatusChange}
                disabled={statusLoading}
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
              {statusLoading && <span className="status-updating">Updating...</span>}
            </div>
          </div>

          {/* Personal Information */}
          <div className="info-card">
            <h3 className="info-card__title">
              <User size={18} />
              Personal Information
            </h3>
            <div className="info-card__grid">
              <InfoItem label="Full Name" value={contact.name} icon={<User size={14} />} />
              <InfoItem label="Email" value={contact.email} icon={<Mail size={14} />} />
              <InfoItem label="Phone" value={contact.phone || "—"} icon={<Phone size={14} />} />
              <InfoItem label="Inquiry Type" value={contact.inquiryType || "—"} icon={<Tag size={14} />} />
              <InfoItem label="Subject" value={contact.subject} icon={<MessageSquare size={14} />} />
              <InfoItem label="Submitted On" value={new Date(contact.createdAt).toLocaleString()} icon={<Calendar size={14} />} />
            </div>
          </div>

          {/* Message */}
          <div className="info-card">
            <h3 className="info-card__title">
              <MessageSquare size={18} />
              Message
            </h3>
            <div className="info-card__message">
              {contact.message}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value, icon }) => (
  <div className="info-item">
    <p className="info-item__label">
      {icon}
      {label}
    </p>
    <p className="info-item__value">{value}</p>
  </div>
);

export default ViewContact;