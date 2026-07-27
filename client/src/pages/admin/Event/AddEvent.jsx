// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import toast from "react-hot-toast";

// // import EventForm from "./EventForm";
// // import { createEvent } from "../../../api/events.api";

// // const AddEvent = () => {
// //   const navigate = useNavigate();

// //   const [loading, setLoading] = useState(false);

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

// //       if (data.banner && data.banner.length > 0) {
// //         formData.append("banner", data.banner[0]);
// //       }

// //       await createEvent(formData);

// //       toast.success("Event created successfully.");

// //       navigate("/admin/events");
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message ||
// //           "Failed to create event."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="p-6">
// //       <div className="mb-6">
// //         <h1 className="text-2xl font-bold">
// //           Add Event
// //         </h1>

// //         <p className="text-gray-500 mt-1">
// //           Create a new event for the website.
// //         </p>
// //       </div>

// //       <EventForm
// //         onSubmit={onSubmit}
// //         loading={loading}
// //       />
// //     </div>
// //   );
// // };

// // export default AddEvent;


// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import { ArrowLeft, CalendarPlus, Save, Loader2 } from "lucide-react";

// import EventForm from "./EventForm";
// import { createEvent } from "../../../api/events.api";

// import "./AddEvent.css";

// const AddEvent = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       const formData = new FormData();

//       // Append all form fields
//       const fields = {
//         title: data.title,
//         slug: data.slug || "",
//         shortDescription: data.shortDescription || "",
//         description: data.description || "",
//         eventType: data.eventType || "",
//         startDate: data.startDate || "",
//         endDate: data.endDate || "",
//         startTime: data.startTime || "",
//         endTime: data.endTime || "",
//         venue: data.venue || "",
//         city: data.city || "",
//         country: data.country || "",
//         organizer: data.organizer || "",
//         registrationLink: data.registrationLink || "",
//         registrationFee: data.registrationFee || 0,
//         maxParticipants: data.maxParticipants || 0,
//         chiefGuest: data.chiefGuest || "",
//         contactPerson: data.contactPerson || "",
//         contactNumber: data.contactNumber || "",
//         email: data.email || "",
//         displayOrder: data.displayOrder || 1,
//         featured: data.featured || false,
//         isActive: data.isActive !== undefined ? data.isActive : true,
//       };

//       Object.entries(fields).forEach(([key, value]) => {
//         formData.append(key, value);
//       });

//       // Append banner image if exists
//       if (data.banner && data.banner.length > 0) {
//         formData.append("banner", data.banner[0]);
//       }

//       await createEvent(formData);
//       toast.success("Event created successfully!");
//       navigate("/admin/events");
//     } catch (error) {
//       console.error("Create event error:", error);
//       toast.error(
//         error.response?.data?.message || "Failed to create event. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="add-event">
//       {/* Page Header */}
//       <div className="add-event__header">
//         <div className="add-event__header-top">
//           <Link to="/admin/events" className="add-event__back-btn">
//             <ArrowLeft size={18} strokeWidth={2} />
//             <span>Back to Events</span>
//           </Link>
//         </div>

//         <div className="add-event__header-content">
//           <div className="add-event__header-left">
//             <div className="add-event__header-icon">
//               <CalendarPlus size={24} strokeWidth={2} />
//             </div>
//             <div className="add-event__header-text">
//               <h1 className="add-event__title">Create New Event</h1>
//               <p className="add-event__subtitle">
//                 Fill in the details below to add a new event to the website
//               </p>
//             </div>
//           </div>

//           <div className="add-event__header-actions">
//             <button
//               type="submit"
//               form="event-form"
//               disabled={loading}
//               className="add-event__submit-btn"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 size={18} strokeWidth={2} className="add-event__submit-icon--spinning" />
//                   <span>Saving...</span>
//                 </>
//               ) : (
//                 <>
//                   <Save size={18} strokeWidth={2} />
//                   <span>Save Event</span>
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Progress Steps (Optional - can be expanded) */}
//       <div className="add-event__progress">
//         <div className="add-event__progress-step add-event__progress-step--active">
//           <div className="add-event__progress-number">1</div>
//           <span className="add-event__progress-label">Event Details</span>
//         </div>
//         <div className="add-event__progress-line" />
//         <div className="add-event__progress-step">
//           <div className="add-event__progress-number">2</div>
//           <span className="add-event__progress-label">Media & Settings</span>
//         </div>
//         <div className="add-event__progress-line" />
//         <div className="add-event__progress-step">
//           <div className="add-event__progress-number">3</div>
//           <span className="add-event__progress-label">Review & Publish</span>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="add-event__form-container">
//         <EventForm onSubmit={onSubmit} loading={loading} />
//       </div>
//     </div>
//   );
// };

// export default AddEvent;

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft, CalendarPlus, Save, Loader2 } from "lucide-react";

import EventForm from "./EventForm";
import { createEvent } from "../../../api/events.api";

import "./AddEvent.css";

const AddEvent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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

      // Append banner image if exists
      if (data.banner && data.banner.length > 0) {
        formData.append("banner", data.banner[0]);
      }

      await createEvent(formData);
      toast.success("Event created successfully!");
      navigate("/admin/events");
    } catch (error) {
      console.error("Create event error:", error);
      toast.error(
        error.response?.data?.message || "Failed to create event. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-event">
      {/* Page Header */}
      <div className="add-event__header">
        <div className="add-event__header-top">
          <Link to="/admin/events" className="add-event__back-btn">
            <ArrowLeft size={18} strokeWidth={2} />
            <span>Back to Events</span>
          </Link>
        </div>

        <div className="add-event__header-content">
          <div className="add-event__header-left">
            <div className="add-event__header-icon">
              <CalendarPlus size={24} strokeWidth={2} />
            </div>
            <div className="add-event__header-text">
              <h1 className="add-event__title">Create New Event</h1>
              <p className="add-event__subtitle">
                Fill in the details below to add a new event to the website
              </p>
            </div>
          </div>

          <div className="add-event__header-actions">
            <button
              type="submit"
              form="event-form"
              disabled={loading}
              className="add-event__submit-btn"
            >
              {loading ? (
                <>
                  <Loader2 size={18} strokeWidth={2} className="add-event__submit-icon--spinning" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save size={18} strokeWidth={2} />
                  <span>Save Event</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Progress Steps (Optional - can be expanded) */}
      <div className="add-event__progress">
        <div className="add-event__progress-step add-event__progress-step--active">
          <div className="add-event__progress-number">1</div>
          <span className="add-event__progress-label">Event Details</span>
        </div>
        <div className="add-event__progress-line" />
        <div className="add-event__progress-step">
          <div className="add-event__progress-number">2</div>
          <span className="add-event__progress-label">Media & Settings</span>
        </div>
        <div className="add-event__progress-line" />
        <div className="add-event__progress-step">
          <div className="add-event__progress-number">3</div>
          <span className="add-event__progress-label">Review & Publish</span>
        </div>
      </div>

      {/* Form Section */}
      <div className="add-event__form-container">
        <EventForm onSubmit={onSubmit} loading={loading} />
      </div>
    </div>
  );
};

export default AddEvent;