// // import { useEffect, useState } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import toast from "react-hot-toast";

// // import EventForm from "./EventForm";
// // import {
// //   getEventById,
// //   updateEvent,
// // } from "../../../api/events.api";

// // const EditEvent = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   const [loading, setLoading] = useState(false);
// //   const [initialValues, setInitialValues] = useState(null);

// //   useEffect(() => {
// //     fetchEvent();
// //   }, []);

// //   const fetchEvent = async () => {
// //     try {
// //       const res = await getEventById(id);

// //       const event =
// //         res.data?.data?.event ||
// //         res.data?.data ||
// //         res.data;

// //       setInitialValues(event);
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message ||
// //           "Failed to fetch event."
// //       );

// //       navigate("/admin/events");
// //     }
// //   };

// //   const onSubmit = async (data) => {
// //     try {
// //       setLoading(true);

// //       const formData = new FormData();

// //       formData.append("title", data.title);
// //       formData.append("slug", data.slug || "");
// //       formData.append(
// //         "shortDescription",
// //         data.shortDescription || ""
// //       );
// //       formData.append(
// //         "description",
// //         data.description || ""
// //       );
// //       formData.append(
// //         "eventType",
// //         data.eventType || ""
// //       );
// //       formData.append(
// //         "startDate",
// //         data.startDate || ""
// //       );
// //       formData.append(
// //         "endDate",
// //         data.endDate || ""
// //       );
// //       formData.append(
// //         "startTime",
// //         data.startTime || ""
// //       );
// //       formData.append(
// //         "endTime",
// //         data.endTime || ""
// //       );
// //       formData.append("venue", data.venue || "");
// //       formData.append("city", data.city || "");
// //       formData.append(
// //         "country",
// //         data.country || ""
// //       );
// //       formData.append(
// //         "organizer",
// //         data.organizer || ""
// //       );
// //       formData.append(
// //         "registrationLink",
// //         data.registrationLink || ""
// //       );
// //       formData.append(
// //         "registrationFee",
// //         data.registrationFee || 0
// //       );
// //       formData.append(
// //         "maxParticipants",
// //         data.maxParticipants || 0
// //       );
// //       formData.append(
// //         "chiefGuest",
// //         data.chiefGuest || ""
// //       );
// //       formData.append(
// //         "contactPerson",
// //         data.contactPerson || ""
// //       );
// //       formData.append(
// //         "contactNumber",
// //         data.contactNumber || ""
// //       );
// //       formData.append("email", data.email || "");
// //       formData.append(
// //         "displayOrder",
// //         data.displayOrder || 1
// //       );
// //       formData.append(
// //         "featured",
// //         data.featured
// //       );
// //       formData.append(
// //         "isActive",
// //         data.isActive
// //       );

// //       // Upload new banner only if selected
// //       if (data.banner && data.banner.length > 0) {
// //         formData.append("banner", data.banner[0]);
// //       }

// //       await updateEvent(id, formData);

// //       toast.success("Event updated successfully.");

// //       navigate("/admin/events");
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message ||
// //           "Failed to update event."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (!initialValues) {
// //     return (
// //       <div className="p-6 text-center">
// //         Loading...
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="p-6">
// //       <div className="mb-6">
// //         <h1 className="text-2xl font-bold">
// //           Edit Event
// //         </h1>

// //         <p className="text-gray-500 mt-1">
// //           Update event details.
// //         </p>
// //       </div>

// //       <EventForm
// //         initialValues={initialValues}
// //         onSubmit={onSubmit}
// //         loading={loading}
// //       />
// //     </div>
// //   );
// // };

// // export default EditEvent;


// // src/pages/admin/Events/EditEvent.jsx

// import { useEffect, useState } from "react";
// import { useNavigate, useParams, Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import { ArrowLeft, Save, X, AlertCircle, Calendar, Loader } from "lucide-react";

// import EventForm from "./EventForm";
// import {
//   getEventById,
//   updateEvent,
// } from "../../../api/events.api";

// import "./EditEvent.css";

// const EditEvent = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [fetchLoading, setFetchLoading] = useState(true);
//   const [initialValues, setInitialValues] = useState(null);
//   const [showCancelModal, setShowCancelModal] = useState(false);

//   useEffect(() => {
//     fetchEvent();
//   }, [id]);

//   const fetchEvent = async () => {
//     try {
//       setFetchLoading(true);
//       const res = await getEventById(id);
//       const event = res.data?.data?.event || res.data?.data || res.data;
//       setInitialValues(event);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to fetch event.");
//       navigate("/admin/events");
//     } finally {
//       setFetchLoading(false);
//     }
//   };

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append("title", data.title);
//       formData.append("slug", data.slug || "");
//       formData.append("shortDescription", data.shortDescription || "");
//       formData.append("description", data.description || "");
//       formData.append("eventType", data.eventType || "");
//       formData.append("startDate", data.startDate || "");
//       formData.append("endDate", data.endDate || "");
//       formData.append("startTime", data.startTime || "");
//       formData.append("endTime", data.endTime || "");
//       formData.append("venue", data.venue || "");
//       formData.append("city", data.city || "");
//       formData.append("country", data.country || "");
//       formData.append("organizer", data.organizer || "");
//       formData.append("registrationLink", data.registrationLink || "");
//       formData.append("registrationFee", data.registrationFee || 0);
//       formData.append("maxParticipants", data.maxParticipants || 0);
//       formData.append("chiefGuest", data.chiefGuest || "");
//       formData.append("contactPerson", data.contactPerson || "");
//       formData.append("contactNumber", data.contactNumber || "");
//       formData.append("email", data.email || "");
//       formData.append("displayOrder", data.displayOrder || 1);
//       formData.append("featured", data.featured);
//       formData.append("isActive", data.isActive);

//       // Upload new banner only if selected
//       if (data.banner && data.banner.length > 0) {
//         formData.append("banner", data.banner[0]);
//       }

//       await updateEvent(id, formData);

//       toast.success("Event updated successfully! 🎉");

//       navigate("/admin/events");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to update event.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCancel = () => {
//     if (loading) return;
//     setShowCancelModal(true);
//   };

//   const confirmCancel = () => {
//     setShowCancelModal(false);
//     navigate("/admin/events");
//   };

//   if (fetchLoading) {
//     return (
//       <div className="edit-event-page">
//         <div className="edit-event-page__loading">
//           <div className="spinner"></div>
//           <p>Loading event details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!initialValues) {
//     return (
//       <div className="edit-event-page">
//         <div className="edit-event-page__not-found">
//           <AlertCircle size={48} className="not-found-icon" />
//           <h2>Event Not Found</h2>
//           <p>The event you're trying to edit doesn't exist or has been removed.</p>
//           <Link to="/admin/events" className="btn btn--primary">
//             Back to Events
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="edit-event-page">
//       <div className="edit-event-page__container">
        
//         {/* Header */}
//         <div className="edit-event-page__header">
//           <div className="edit-event-page__header-left">
//             <Link to="/admin/events" className="back-btn">
//               <ArrowLeft size={18} />
//               Back to Events
//             </Link>
//             <div className="edit-event-page__header-title">
//               <div className="edit-event-page__header-icon">
//                 <Calendar size={24} strokeWidth={2} />
//               </div>
//               <div>
//                 <h1 className="edit-event-page__title">Edit Event</h1>
//                 <p className="edit-event-page__subtitle">
//                   Update event details and information
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="edit-event-page__header-actions">
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="btn btn--secondary"
//               disabled={loading}
//             >
//               <X size={18} />
//               Cancel
//             </button>
//           </div>
//         </div>

//         {/* Form Card */}
//         <div className="edit-event-page__form-card">
//           <div className="form-card__header">
//             <div className="form-card__header-icon">
//               <Calendar size={24} />
//             </div>
//             <div>
//               <h2 className="form-card__title">Edit Event Details</h2>
//               <p className="form-card__subtitle">
//                 Update the information below to modify this event
//               </p>
//             </div>
//           </div>

//           <EventForm
//             initialValues={initialValues}
//             onSubmit={onSubmit}
//             loading={loading}
//             isEdit={true}
//           />
//         </div>

//         {/* Tips Section */}
//         <div className="edit-event-page__tips">
//           <div className="tips-card">
//             <div className="tips-header">
//               <AlertCircle size={20} className="tips-icon" />
//               <h3>Tips for Updating Events</h3>
//             </div>
//             <ul className="tips-list">
//               <li>Keep the title descriptive and engaging</li>
//               <li>Update dates if the event has been rescheduled</li>
//               <li>Add a new banner image to refresh the event</li>
//               <li>Review the description for accuracy and completeness</li>
//               <li>Adjust display order to control listing position</li>
//             </ul>
//           </div>
//         </div>

//         {/* Cancel Confirmation Modal */}
//         {showCancelModal && (
//           <div className="modal-overlay" onClick={() => setShowCancelModal(false)}>
//             <div className="modal" onClick={(e) => e.stopPropagation()}>
//               <div className="modal__header">
//                 <AlertCircle size={24} className="modal__icon" />
//                 <h2>Cancel Editing</h2>
//               </div>
//               <div className="modal__body">
//                 <p>
//                   Are you sure you want to cancel? Your changes will be lost.
//                 </p>
//               </div>
//               <div className="modal__footer">
//                 <button
//                   onClick={() => setShowCancelModal(false)}
//                   className="modal-btn modal-btn--cancel"
//                 >
//                   Continue Editing
//                 </button>
//                 <button
//                   onClick={confirmCancel}
//                   className="modal-btn modal-btn--delete"
//                 >
//                   Yes, Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EditEvent;

// src/pages/admin/Events/EditEvent.jsx

import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, Save, X, AlertCircle, Calendar, Loader2 } from "lucide-react";

import EventForm from "./EventForm";
import {
  getEventById,
  updateEvent,
} from "../../../api/events.api";

import "./EditEvent.css";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [initialValues, setInitialValues] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  useEffect(() => {
    fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    try {
      setFetchLoading(true);
      const res = await getEventById(id);
      const event = res.data?.data?.event || res.data?.data || res.data;
      setInitialValues(event);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch event.");
      navigate("/admin/events");
    } finally {
      setFetchLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      // ✅ FIXED: Map fields to match your schema
      const fields = {
        title: data.title,
        slug: data.slug || "",
        shortDescription: data.shortDescription || "",
        description: data.description || "",
        eventType: data.eventType || "",
        // 🔥 FIX: Use eventDate instead of startDate/endDate if your schema only has one date field
        eventDate: data.startDate || data.eventDate || "",
        startTime: data.startTime || "",
        endTime: data.endTime || "",
        venue: data.venue || "",
        city: data.city || "",
        country: data.country || "",
        organizer: data.organizer || "",
        registrationLink: data.registrationLink || "",
        registrationFee: data.registrationFee || 0,
        maxParticipants: data.maxParticipants || 0,
        chiefGuest: data.chiefGuest || "",
        contactPerson: data.contactPerson || "",
        contactNumber: data.contactNumber || "",
        email: data.email || "",
        displayOrder: data.displayOrder || 1,
        featured: data.featured || false,
        isActive: data.isActive !== undefined ? data.isActive : true,
      };

      // Append all fields
      Object.entries(fields).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value);
        }
      });

      // Upload new banner only if selected
      // if (data.banner && data.banner.length > 0) {
      //   formData.append("banner", data.banner[0]);
      // }
      if (data.banner && data.banner.length > 0) {
  formData.append("image", data.banner[0]);
}

      // 🔥 Debug: Log FormData entries
      console.log("Updating event data:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      await updateEvent(id, formData);

      toast.success("Event updated successfully! 🎉");

      navigate("/admin/events");
    } catch (error) {
      console.error("Update event error:", error);
      toast.error(error.response?.data?.message || "Failed to update event.");
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
    navigate("/admin/events");
  };

  if (fetchLoading) {
    return (
      <div className="edit-event-page">
        <div className="edit-event-page__loading">
          <div className="spinner"></div>
          <p>Loading event details...</p>
        </div>
      </div>
    );
  }

  if (!initialValues) {
    return (
      <div className="edit-event-page">
        <div className="edit-event-page__not-found">
          <AlertCircle size={48} className="not-found-icon" />
          <h2>Event Not Found</h2>
          <p>The event you're trying to edit doesn't exist or has been removed.</p>
          <Link to="/admin/events" className="btn btn--primary">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-event-page">
      <div className="edit-event-page__container">
        
        {/* Header */}
        <div className="edit-event-page__header">
          <div className="edit-event-page__header-left">
            <Link to="/admin/events" className="back-btn">
              <ArrowLeft size={18} />
              Back to Events
            </Link>
            <div className="edit-event-page__header-title">
              <div className="edit-event-page__header-icon">
                <Calendar size={24} strokeWidth={2} />
              </div>
              <div>
                <h1 className="edit-event-page__title">Edit Event</h1>
                <p className="edit-event-page__subtitle">
                  Update event details and information
                </p>
              </div>
            </div>
          </div>
          <div className="edit-event-page__header-actions">
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
              form="event-form"
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
                  <span>Update Event</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div className="edit-event-page__form-card">
          <div className="form-card__header">
            <div className="form-card__header-icon">
              <Calendar size={24} />
            </div>
            <div>
              <h2 className="form-card__title">Edit Event Details</h2>
              <p className="form-card__subtitle">
                Update the information below to modify this event
              </p>
            </div>
          </div>

          <EventForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            loading={loading}
            isEdit={true}
            formId="event-form"
          />
        </div>

        {/* Tips Section */}
        <div className="edit-event-page__tips">
          <div className="tips-card">
            <div className="tips-header">
              <AlertCircle size={20} className="tips-icon" />
              <h3>Tips for Updating Events</h3>
            </div>
            <ul className="tips-list">
              <li>Keep the title descriptive and engaging</li>
              <li>Update dates if the event has been rescheduled</li>
              <li>Add a new banner image to refresh the event</li>
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

export default EditEvent;