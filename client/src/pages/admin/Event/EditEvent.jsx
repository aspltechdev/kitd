// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import toast from "react-hot-toast";

// import EventForm from "./EventForm";
// import {
//   getEventById,
//   updateEvent,
// } from "../../../api/events.api";

// const EditEvent = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [initialValues, setInitialValues] = useState(null);

//   useEffect(() => {
//     fetchEvent();
//   }, []);

//   const fetchEvent = async () => {
//     try {
//       const res = await getEventById(id);

//       const event =
//         res.data?.data?.event ||
//         res.data?.data ||
//         res.data;

//       setInitialValues(event);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch event."
//       );

//       navigate("/admin/events");
//     }
//   };

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();

//       formData.append("title", data.title);
//       formData.append("slug", data.slug || "");
//       formData.append(
//         "shortDescription",
//         data.shortDescription || ""
//       );
//       formData.append(
//         "description",
//         data.description || ""
//       );
//       formData.append(
//         "eventType",
//         data.eventType || ""
//       );
//       formData.append(
//         "startDate",
//         data.startDate || ""
//       );
//       formData.append(
//         "endDate",
//         data.endDate || ""
//       );
//       formData.append(
//         "startTime",
//         data.startTime || ""
//       );
//       formData.append(
//         "endTime",
//         data.endTime || ""
//       );
//       formData.append("venue", data.venue || "");
//       formData.append("city", data.city || "");
//       formData.append(
//         "country",
//         data.country || ""
//       );
//       formData.append(
//         "organizer",
//         data.organizer || ""
//       );
//       formData.append(
//         "registrationLink",
//         data.registrationLink || ""
//       );
//       formData.append(
//         "registrationFee",
//         data.registrationFee || 0
//       );
//       formData.append(
//         "maxParticipants",
//         data.maxParticipants || 0
//       );
//       formData.append(
//         "chiefGuest",
//         data.chiefGuest || ""
//       );
//       formData.append(
//         "contactPerson",
//         data.contactPerson || ""
//       );
//       formData.append(
//         "contactNumber",
//         data.contactNumber || ""
//       );
//       formData.append("email", data.email || "");
//       formData.append(
//         "displayOrder",
//         data.displayOrder || 1
//       );
//       formData.append(
//         "featured",
//         data.featured
//       );
//       formData.append(
//         "isActive",
//         data.isActive
//       );

//       // Upload new banner only if selected
//       if (data.banner && data.banner.length > 0) {
//         formData.append("banner", data.banner[0]);
//       }

//       await updateEvent(id, formData);

//       toast.success("Event updated successfully.");

//       navigate("/admin/events");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to update event."
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
//           Edit Event
//         </h1>

//         <p className="text-gray-500 mt-1">
//           Update event details.
//         </p>
//       </div>

//       <EventForm
//         initialValues={initialValues}
//         onSubmit={onSubmit}
//         loading={loading}
//       />
//     </div>
//   );
// };

// export default EditEvent;



import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, CalendarEdit, Save, Loader2, AlertCircle, RefreshCw } from "lucide-react";

import EventForm from "./EventForm";
import { getEventById, updateEvent } from "../../../api/events.api";

import "./EditEvent.css";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [initialValues, setInitialValues] = useState(null);

  const fetchEvent = useCallback(async () => {
    try {
      setFetching(true);
      setFetchError(null);

      const res = await getEventById(id);

      const event =
        res.data?.data?.event ||
        res.data?.data ||
        res.data;

      if (!event || (typeof event === 'object' && Object.keys(event).length === 0)) {
        throw new Error("Event not found");
      }

      setInitialValues(event);
    } catch (error) {
      console.error("Fetch event error:", error);
      const errorMessage =
        error.response?.data?.message || error.message || "Failed to fetch event details.";
      
      setFetchError(errorMessage);
      toast.error(errorMessage);
      
      // Navigate back after a delay on error
      setTimeout(() => {
        navigate("/admin/events");
      }, 3000);
    } finally {
      setFetching(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    fetchEvent();
  }, [fetchEvent]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const formData = new FormData();

      // Append all form fields
      const fields = {
        title: data.title,
        slug: data.slug || "",
        shortDescription: data.shortDescription || "",
        description: data.description || "",
        eventType: data.eventType || "",
        startDate: data.startDate || "",
        endDate: data.endDate || "",
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

      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value);
      });

      // Upload new banner only if selected
      if (data.banner && data.banner.length > 0) {
        formData.append("banner", data.banner[0]);
      }

      await updateEvent(id, formData);
      toast.success("Event updated successfully!");
      navigate("/admin/events");
    } catch (error) {
      console.error("Update event error:", error);
      toast.error(
        error.response?.data?.message || "Failed to update event. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Loading State
  if (fetching) {
    return (
      <div className="edit-event">
        <div className="edit-event__loading">
          <div className="edit-event__loading-card">
            <div className="edit-event__loading-spinner">
              <div className="edit-event__spinner-ring" />
            </div>
            <div className="edit-event__loading-content">
              <CalendarEdit size={40} strokeWidth={1.5} className="edit-event__loading-icon" />
              <h2 className="edit-event__loading-title">Loading Event</h2>
              <p className="edit-event__loading-text">
                Fetching event details...
              </p>
              <div className="edit-event__loading-bar">
                <div className="edit-event__loading-progress" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (fetchError && !initialValues) {
    return (
      <div className="edit-event">
        <div className="edit-event__error">
          <div className="edit-event__error-card">
            <div className="edit-event__error-icon-wrapper">
              <AlertCircle size={48} strokeWidth={1.5} className="edit-event__error-icon" />
            </div>
            <h2 className="edit-event__error-title">Failed to Load Event</h2>
            <p className="edit-event__error-message">{fetchError}</p>
            <p className="edit-event__error-redirect">
              Redirecting back to events list...
            </p>
            <div className="edit-event__error-actions">
              <button onClick={fetchEvent} className="edit-event__retry-btn">
                <RefreshCw size={16} strokeWidth={2} />
                <span>Retry</span>
              </button>
              <Link to="/admin/events" className="edit-event__back-btn-secondary">
                <ArrowLeft size={16} strokeWidth={2} />
                <span>Go to Events</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="edit-event">
      {/* Page Header */}
      <div className="edit-event__header">
        <div className="edit-event__header-top">
          <Link to="/admin/events" className="edit-event__back-link">
            <ArrowLeft size={18} strokeWidth={2} />
            <span>Back to Events</span>
          </Link>
        </div>

        <div className="edit-event__header-content">
          <div className="edit-event__header-left">
            <div className="edit-event__header-icon">
              <CalendarEdit size={24} strokeWidth={2} />
            </div>
            <div className="edit-event__header-text">
              <h1 className="edit-event__title">Edit Event</h1>
              <p className="edit-event__subtitle">
                Update event details for "{initialValues?.title || 'Untitled Event'}"
              </p>
            </div>
          </div>

          <div className="edit-event__header-actions">
            <Link to="/admin/events" className="edit-event__cancel-btn">
              Cancel
            </Link>
            <button
              type="submit"
              form="event-form"
              disabled={loading}
              className="edit-event__save-btn"
            >
              {loading ? (
                <>
                  <Loader2 size={18} strokeWidth={2} className="edit-event__save-icon--spinning" />
                  <span>Saving...</span>
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
      </div>

      {/* Form Section */}
      <div className="edit-event__form-container">
        <EventForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default EditEvent;