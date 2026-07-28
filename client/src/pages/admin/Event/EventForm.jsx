// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// const EventForm = ({
//   initialValues = {},
//   onSubmit,
//   loading = false,
// }) => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const banner = watch("banner");
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     if (initialValues) {
//       reset({
//         title: initialValues.title || "",
//         slug: initialValues.slug || "",
//         shortDescription:
//           initialValues.shortDescription || "",
//         description:
//           initialValues.description || "",
//         eventType:
//           initialValues.eventType || "",
//         startDate: initialValues.startDate
//           ? initialValues.startDate.substring(0, 10)
//           : "",
//         endDate: initialValues.endDate
//           ? initialValues.endDate.substring(0, 10)
//           : "",
//         startTime:
//           initialValues.startTime || "",
//         endTime:
//           initialValues.endTime || "",
//         venue: initialValues.venue || "",
//         city: initialValues.city || "",
//         country: initialValues.country || "",
//         organizer:
//           initialValues.organizer || "",
//         registrationLink:
//           initialValues.registrationLink || "",
//         registrationFee:
//           initialValues.registrationFee || "",
//         maxParticipants:
//           initialValues.maxParticipants || "",
//         chiefGuest:
//           initialValues.chiefGuest || "",
//         contactPerson:
//           initialValues.contactPerson || "",
//         contactNumber:
//           initialValues.contactNumber || "",
//         email: initialValues.email || "",
//         displayOrder:
//           initialValues.displayOrder || 1,
//         featured:
//           initialValues.featured || false,
//         isActive:
//           initialValues.isActive === undefined
//             ? true
//             : initialValues.isActive,
//       });

//       if (initialValues.banner) {
//         setPreview(
//           `${import.meta.env.VITE_API_BASE_URL.replace(
//             "/api",
//             ""
//           )}/uploads/events/${initialValues.banner}`
//         );
//       }
//     }
//   }, [initialValues, reset]);

//   useEffect(() => {
//     if (banner && banner.length > 0) {
//       setPreview(URL.createObjectURL(banner[0]));
//     }
//   }, [banner]);

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white rounded-xl shadow p-6 space-y-6"
//     >
//       {/* Banner */}

//       <div>
//         <label className="block font-medium mb-2">
//           Event Banner
//         </label>

//         <input
//           type="file"
//           accept="image/*"
//           {...register("banner")}
//         />

//         {preview && (
//           <img
//             src={preview}
//             alt="Preview"
//             className="mt-4 w-72 rounded-lg border"
//           />
//         )}
//       </div>

//       {/* Title */}

//       <div>
//         <label className="block font-medium">
//           Event Title *
//         </label>

//         <input
//           {...register("title", {
//             required: "Title is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.title?.message}
//         </p>
//       </div>

//       {/* Slug */}

//       <div>
//         <label className="block font-medium">
//           Slug
//         </label>

//         <input
//           {...register("slug")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Short Description */}

//       <div>
//         <label className="block font-medium">
//           Short Description
//         </label>

//         <textarea
//           rows={3}
//           {...register("shortDescription")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Description */}

//       <div>
//         <label className="block font-medium">
//           Full Description
//         </label>

//         <textarea
//           rows={6}
//           {...register("description")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Event Type */}

//       <div>
//         <label className="block font-medium">
//           Event Type
//         </label>

//         <select
//           {...register("eventType")}
//           className="w-full border rounded-lg p-3 mt-2"
//         >
//           <option value="">Select Event Type</option>
//           <option value="WORKSHOP">
//             Workshop
//           </option>
//           <option value="PERFORMANCE">
//             Performance
//           </option>
//           <option value="FESTIVAL">
//             Festival
//           </option>
//           <option value="SEMINAR">
//             Seminar
//           </option>
//           <option value="COMPETITION">
//             Competition
//           </option>
//           <option value="CONFERENCE">
//             Conference
//           </option>
//         </select>
//       </div>

//       {/* Dates */}

//       <div className="grid md:grid-cols-2 gap-4">
//         <div>
//           <label>Start Date</label>
//           <input
//             type="date"
//             {...register("startDate")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//         <div>
//           <label>End Date</label>
//           <input
//             type="date"
//             {...register("endDate")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>
//       </div>

//       {/* Time */}

//       <div className="grid md:grid-cols-2 gap-4">
//         <div>
//           <label>Start Time</label>
//           <input
//             type="time"
//             {...register("startTime")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//         <div>
//           <label>End Time</label>
//           <input
//             type="time"
//             {...register("endTime")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>
//       </div>

//       {/* Venue */}

//       <input
//         placeholder="Venue"
//         {...register("venue")}
//         className="w-full border rounded-lg p-3"
//       />

//       <div className="grid md:grid-cols-2 gap-4">
//         <input
//           placeholder="City"
//           {...register("city")}
//           className="border rounded-lg p-3"
//         />

//         <input
//           placeholder="Country"
//           {...register("country")}
//           className="border rounded-lg p-3"
//         />
//       </div>

//       {/* Organizer */}

//       <input
//         placeholder="Organizer"
//         {...register("organizer")}
//         className="w-full border rounded-lg p-3"
//       />

//       {/* Registration */}

//       <div className="grid md:grid-cols-2 gap-4">
//         <input
//           placeholder="Registration Link"
//           {...register("registrationLink")}
//           className="border rounded-lg p-3"
//         />

//         <input
//           type="number"
//           placeholder="Registration Fee"
//           {...register("registrationFee")}
//           className="border rounded-lg p-3"
//         />
//       </div>

//       <input
//         type="number"
//         placeholder="Maximum Participants"
//         {...register("maxParticipants")}
//         className="w-full border rounded-lg p-3"
//       />

//       {/* Chief Guest */}

//       <input
//         placeholder="Chief Guest"
//         {...register("chiefGuest")}
//         className="w-full border rounded-lg p-3"
//       />

//       {/* Contact */}

//       <div className="grid md:grid-cols-3 gap-4">
//         <input
//           placeholder="Contact Person"
//           {...register("contactPerson")}
//           className="border rounded-lg p-3"
//         />

//         <input
//           placeholder="Contact Number"
//           {...register("contactNumber")}
//           className="border rounded-lg p-3"
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           {...register("email")}
//           className="border rounded-lg p-3"
//         />
//       </div>

//       {/* Display Order */}

//       <div>
//         <label>Display Order</label>

//         <input
//           type="number"
//           min="1"
//           {...register("displayOrder")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Checkboxes */}

//       <div className="flex gap-8">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             {...register("featured")}
//           />
//           Featured Event
//         </label>

//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             {...register("isActive")}
//           />
//           Active
//         </label>
//       </div>

//       {/* Submit */}

//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
//       >
//         {loading ? "Saving..." : "Save Event"}
//       </button>
//     </form>
//   );
// };

// export default EventForm;


// src/pages/admin/Events/EventForm.jsx

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Image as ImageIcon,
  Upload,
  X,
  Check,
  Calendar,
  Clock,
  MapPin,
  Type,
  Hash,
  ToggleRight,
  ToggleLeft,
  AlignLeft,
  FileText,
  Users,
  Phone,
  Mail,
  Globe,
  User,
  Tag,
  Link as LinkIcon,
  DollarSign,
  Award,
  Star,
} from "lucide-react";

import "./EventForm.css";

const EventForm = ({
  initialValues = {},
  onSubmit,
  loading = false,
  isEdit = false,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      shortDescription: "",
      description: "",
      eventType: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      venue: "",
      city: "",
      country: "",
      organizer: "",
      registrationLink: "",
      registrationFee: "",
      maxParticipants: "",
      chiefGuest: "",
      contactPerson: "",
      contactNumber: "",
      email: "",
      displayOrder: 1,
      featured: false,
      isActive: true,
    },
  });

  const banner = watch("banner");
  const isActive = watch("isActive", true);
  const featured = watch("featured", false);

  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      reset({
        title: initialValues.title || "",
        slug: initialValues.slug || "",
        shortDescription: initialValues.shortDescription || "",
        description: initialValues.description || "",
        eventType: initialValues.eventType || "",
        startDate: initialValues.startDate ? initialValues.startDate.substring(0, 10) : "",
        endDate: initialValues.endDate ? initialValues.endDate.substring(0, 10) : "",
        startTime: initialValues.startTime || "",
        endTime: initialValues.endTime || "",
        venue: initialValues.venue || "",
        city: initialValues.city || "",
        country: initialValues.country || "",
        organizer: initialValues.organizer || "",
        registrationLink: initialValues.registrationLink || "",
        registrationFee: initialValues.registrationFee || "",
        maxParticipants: initialValues.maxParticipants || "",
        chiefGuest: initialValues.chiefGuest || "",
        contactPerson: initialValues.contactPerson || "",
        contactNumber: initialValues.contactNumber || "",
        email: initialValues.email || "",
        displayOrder: initialValues.displayOrder || 1,
        featured: initialValues.featured || false,
        isActive: initialValues.isActive !== undefined ? initialValues.isActive : true,
      });

      if (initialValues.banner) {
        setPreview(`${IMAGE_BASE_URL}/uploads/events/${initialValues.banner}`);
        setFileName(initialValues.banner);
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (banner && banner.length > 0) {
      const file = banner[0];
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
    }
  }, [banner]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setValue("banner", files);
    }
  };

  const clearFile = () => {
    setPreview(null);
    setFileName("");
    setValue("banner", []);
  };

  const eventTypes = [
    { value: "WORKSHOP", label: "Workshop" },
    { value: "PERFORMANCE", label: "Performance" },
    { value: "FESTIVAL", label: "Festival" },
    { value: "SEMINAR", label: "Seminar" },
    { value: "COMPETITION", label: "Competition" },
    { value: "CONFERENCE", label: "Conference" },
    { value: "OTHER", label: "Other" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="event-form"
    >
      <div className="event-form__grid">
        {/* Left Column - Main Fields */}
        <div className="event-form__main">
          {/* Title */}
          <div className="form-group">
            <label className="form-group__label">
              Event Title <span className="required">*</span>
            </label>
            <div className="form-group__input-wrapper">
              <Type size={18} className="input-icon" />
              <input
                {...register("title", {
                  required: "Event title is required",
                  maxLength: {
                    value: 150,
                    message: "Title must be less than 150 characters",
                  },
                })}
                className={`form-group__input ${errors.title ? "error" : ""}`}
                placeholder="Enter event title"
                disabled={loading}
              />
            </div>
            {errors.title && (
              <p className="form-group__error">{errors.title.message}</p>
            )}
          </div>

          {/* Slug */}
          <div className="form-group">
            <label className="form-group__label">Slug</label>
            <div className="form-group__input-wrapper">
              <Hash size={18} className="input-icon" />
              <input
                {...register("slug")}
                className="form-group__input"
                placeholder="URL-friendly slug (auto-generated if empty)"
                disabled={loading}
              />
            </div>
            <span className="form-group__hint">Leave empty to auto-generate from title</span>
          </div>

          {/* Short Description */}
          <div className="form-group">
            <label className="form-group__label">Short Description</label>
            <div className="form-group__input-wrapper">
              <AlignLeft size={18} className="input-icon" />
              <textarea
                rows={3}
                {...register("shortDescription")}
                className="form-group__textarea"
                placeholder="Brief description of the event (max 300 characters)"
                disabled={loading}
                maxLength={300}
              />
            </div>
            <span className="form-group__hint">Maximum 300 characters</span>
          </div>

          {/* Full Description */}
          <div className="form-group">
            <label className="form-group__label">Full Description</label>
            <div className="form-group__input-wrapper">
              <FileText size={18} className="input-icon" />
              <textarea
                rows={5}
                {...register("description")}
                className="form-group__textarea"
                placeholder="Detailed description of the event including schedule, speakers, and key highlights..."
                disabled={loading}
              />
            </div>
          </div>

          {/* Event Type */}
          <div className="form-group">
            <label className="form-group__label">Event Type</label>
            <div className="form-group__input-wrapper">
              <Tag size={18} className="input-icon" />
              <select
                {...register("eventType")}
                className="form-group__input form-group__select"
                disabled={loading}
              >
                <option value="">Select Event Type</option>
                {eventTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date & Time */}
          <div className="form-group form-group--section">
            <label className="form-group__section-label">Date & Time</label>
            <div className="form-group--inline">
              <div className="form-group__half">
                <label className="form-group__label">Start Date</label>
                <div className="form-group__input-wrapper">
                  <Calendar size={18} className="input-icon" />
                  <input
                    type="date"
                    {...register("startDate")}
                    className="form-group__input"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <label className="form-group__label">End Date</label>
                <div className="form-group__input-wrapper">
                  <Calendar size={18} className="input-icon" />
                  <input
                    type="date"
                    {...register("endDate")}
                    className="form-group__input"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <label className="form-group__label">Start Time</label>
                <div className="form-group__input-wrapper">
                  <Clock size={18} className="input-icon" />
                  <input
                    type="time"
                    {...register("startTime")}
                    className="form-group__input"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <label className="form-group__label">End Time</label>
                <div className="form-group__input-wrapper">
                  <Clock size={18} className="input-icon" />
                  <input
                    type="time"
                    {...register("endTime")}
                    className="form-group__input"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Venue */}
          <div className="form-group form-group--section">
            <label className="form-group__section-label">Location</label>
            <div className="form-group">
              <div className="form-group__input-wrapper">
                <MapPin size={18} className="input-icon" />
                <input
                  {...register("venue")}
                  className="form-group__input"
                  placeholder="Venue name"
                  disabled={loading}
                />
              </div>
            </div>
            <div className="form-group--inline">
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <MapPin size={18} className="input-icon" />
                  <input
                    {...register("city")}
                    className="form-group__input"
                    placeholder="City"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <Globe size={18} className="input-icon" />
                  <input
                    {...register("country")}
                    className="form-group__input"
                    placeholder="Country"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Organizer */}
          <div className="form-group">
            <label className="form-group__label">Organizer</label>
            <div className="form-group__input-wrapper">
              <User size={18} className="input-icon" />
              <input
                {...register("organizer")}
                className="form-group__input"
                placeholder="Organizer name"
                disabled={loading}
              />
            </div>
          </div>

          {/* Registration */}
          <div className="form-group form-group--section">
            <label className="form-group__section-label">Registration</label>
            <div className="form-group--inline">
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <LinkIcon size={18} className="input-icon" />
                  <input
                    {...register("registrationLink")}
                    className="form-group__input"
                    placeholder="Registration link"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <DollarSign size={18} className="input-icon" />
                  <input
                    type="number"
                    {...register("registrationFee")}
                    className="form-group__input"
                    placeholder="Registration fee"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <Users size={18} className="input-icon" />
                  <input
                    type="number"
                    {...register("maxParticipants")}
                    className="form-group__input"
                    placeholder="Max participants"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Chief Guest */}
          <div className="form-group">
            <label className="form-group__label">Chief Guest</label>
            <div className="form-group__input-wrapper">
              <Award size={18} className="input-icon" />
              <input
                {...register("chiefGuest")}
                className="form-group__input"
                placeholder="Chief guest name"
                disabled={loading}
              />
            </div>
          </div>

          {/* Contact */}
          <div className="form-group form-group--section">
            <label className="form-group__section-label">Contact Information</label>
            <div className="form-group--inline">
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <User size={18} className="input-icon" />
                  <input
                    {...register("contactPerson")}
                    className="form-group__input"
                    placeholder="Contact person"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <Phone size={18} className="input-icon" />
                  <input
                    {...register("contactNumber")}
                    className="form-group__input"
                    placeholder="Contact number"
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="form-group__half">
                <div className="form-group__input-wrapper">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    {...register("email")}
                    className="form-group__input"
                    placeholder="Email address"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Display Order & Status */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">Display Order</label>
              <div className="form-group__input-wrapper">
                <Hash size={18} className="input-icon" />
                <input
                  type="number"
                  {...register("displayOrder", {
                    min: {
                      value: 0,
                      message: "Order must be 0 or greater",
                    },
                  })}
                  className={`form-group__input ${errors.displayOrder ? "error" : ""}`}
                  placeholder="1"
                  disabled={loading}
                />
              </div>
              {errors.displayOrder && (
                <p className="form-group__error">{errors.displayOrder.message}</p>
              )}
            </div>
            <div className="form-group__half">
              <label className="form-group__label">Status</label>
              <button
                type="button"
                onClick={() => setValue("isActive", !isActive)}
                className={`status-toggle-btn ${isActive ? "active" : "inactive"}`}
                disabled={loading}
              >
                {isActive ? (
                  <>
                    <ToggleRight size={24} />
                    <span>Active</span>
                  </>
                ) : (
                  <>
                    <ToggleLeft size={24} />
                    <span>Inactive</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Featured */}
          <div className="form-group">
            <button
              type="button"
              onClick={() => setValue("featured", !featured)}
              className={`featured-toggle-btn ${featured ? "active" : ""}`}
              disabled={loading}
            >
              <Star size={20} />
              <span>{featured ? "Featured Event" : "Mark as Featured"}</span>
            </button>
            <p className="form-group__hint">Featured events will be highlighted on the homepage</p>
          </div>
        </div>

        {/* Right Column - Banner Upload */}
        <div className="event-form__media">
          <div className="media-section">
            <div className="media-section__header">
              <div className="media-section__header-left">
                <ImageIcon size={20} />
                <h3>Event Banner</h3>
              </div>
              <span className="media-section__badge">Recommended</span>
            </div>

            {/* Drop Zone */}
            <div
              className={`media-dropzone ${dragOver ? "drag-over" : ""} ${
                preview ? "has-preview" : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {!preview ? (
                <div className="media-dropzone__content">
                  <Upload size={40} className="dropzone-icon" />
                  <p className="dropzone-text">Drag & drop a banner image</p>
                  <span className="dropzone-hint">or click to browse</span>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("banner")}
                    className="media-dropzone__input"
                    disabled={loading}
                    id="banner-upload"
                  />
                  <label htmlFor="banner-upload" className="dropzone-btn">
                    Choose Image
                  </label>
                </div>
              ) : (
                <div className="media-preview">
                  <div className="media-preview__container">
                    <img
                      src={preview}
                      alt="Banner preview"
                      className="media-preview__image"
                    />
                    <div className="media-preview__overlay">
                      <button
                        type="button"
                        onClick={clearFile}
                        className="media-preview__remove"
                        disabled={loading}
                      >
                        <X size={18} />
                        Remove
                      </button>
                    </div>
                  </div>
                  {fileName && (
                    <p className="media-preview__filename">{fileName}</p>
                  )}
                </div>
              )}
            </div>

            <p className="media-hint">
              Recommended: 1200x630px (16:9 ratio), max 5MB
            </p>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="event-form__actions">
        <button
          type="submit"
          disabled={loading}
          className="btn btn--primary btn--submit"
        >
          {loading ? (
            <>
              <span className="spinner-btn"></span>
              {isEdit ? "Updating..." : "Creating..."}
            </>
          ) : (
            <>
              <Check size={18} />
              {isEdit ? "Update Event" : "Create Event"}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default EventForm;