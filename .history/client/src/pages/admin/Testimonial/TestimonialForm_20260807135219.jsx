// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// const TestimonialForm = ({
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

//   const photo = watch("photo");
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     if (initialValues) {
//       reset({
//         name: initialValues.name || "",
//         designation: initialValues.designation || "",
//         company: initialValues.company || "",
//         message: initialValues.message || "",
//         rating: initialValues.rating || 5,
//         displayOrder:
//           initialValues.displayOrder || 1,
//         featured:
//           initialValues.featured || false,
//         isActive:
//           initialValues.isActive === undefined
//             ? true
//             : initialValues.isActive,
//       });

//       if (initialValues.photo) {
//         setPreview(
//           `${import.meta.env.VITE_API_BASE_URL.replace(
//             "/api",
//             ""
//           )}/uploads/testimonials/${initialValues.photo}`
//         );
//       }
//     }
//   }, [initialValues, reset]);

//   useEffect(() => {
//     if (photo && photo.length > 0) {
//       const file = photo[0];
//       setPreview(URL.createObjectURL(file));
//     }
//   }, [photo]);

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white rounded-xl shadow p-6 space-y-6"
//     >
//       {/* Photo */}

//       <div>
//         <label className="block font-medium mb-2">
//           Photo
//         </label>

//         <input
//           type="file"
//           accept="image/*"
//           {...register("photo")}
//         />

//         {preview && (
//           <img
//             src={preview}
//             alt="Preview"
//             className="mt-4 w-28 h-28 rounded-full object-cover border"
//           />
//         )}
//       </div>

//       {/* Name */}

//       <div>
//         <label className="block font-medium">
//           Name *
//         </label>

//         <input
//           {...register("name", {
//             required: "Name is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.name?.message}
//         </p>
//       </div>

//       {/* Designation */}

//       <div>
//         <label className="block font-medium">
//           Designation *
//         </label>

//         <input
//           {...register("designation", {
//             required: "Designation is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.designation?.message}
//         </p>
//       </div>

//       {/* Company */}

//       <div>
//         <label className="block font-medium">
//           Organization / Company
//         </label>

//         <input
//           {...register("company")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Message */}

//       <div>
//         <label className="block font-medium">
//           Testimonial Message *
//         </label>

//         <textarea
//           rows={6}
//           {...register("message", {
//             required: "Message is required",
//           })}
//           className="w-full border rounded-lg p-3 mt-2"
//         />

//         <p className="text-red-500 text-sm">
//           {errors.message?.message}
//         </p>
//       </div>

//       {/* Rating */}

//       <div>
//         <label className="block font-medium">
//           Rating
//         </label>

//         <select
//           {...register("rating")}
//           className="w-full border rounded-lg p-3 mt-2"
//         >
//           <option value={5}>⭐⭐⭐⭐⭐ (5)</option>
//           <option value={4}>⭐⭐⭐⭐ (4)</option>
//           <option value={3}>⭐⭐⭐ (3)</option>
//           <option value={2}>⭐⭐ (2)</option>
//           <option value={1}>⭐ (1)</option>
//         </select>
//       </div>

//       {/* Display Order */}

//       <div>
//         <label className="block font-medium">
//           Display Order
//         </label>

//         <input
//           type="number"
//           min="1"
//           {...register("displayOrder")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Options */}

//       <div className="flex flex-wrap gap-8">
//         <label className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             {...register("featured")}
//           />
//           Featured Testimonial
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
//         {loading
//           ? "Saving..."
//           : "Save Testimonial"}
//       </button>
//     </form>
//   );
// };

// export default TestimonialForm;

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const TestimonialForm = ({
  initialValues = {},
  onSubmit,
  loading = false,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const photo = watch("photo");
  const rating = watch("rating") || 5;
  const [preview, setPreview] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    if (initialValues) {
      reset({
        name: initialValues.name || "",
        designation: initialValues.designation || "",
        company: initialValues.company || "",
        message: initialValues.message || "",
        rating: initialValues.rating || 5,
        displayOrder: initialValues.displayOrder || 1,
        featured: initialValues.featured || false,
        isActive:
          initialValues.isActive === undefined
            ? true
            : initialValues.isActive,
      });

      if (initialValues.photo) {
        setPreview(
          `${import.meta.env.VITE_API_BASE_URL.replace(
            "/api",
            ""
          )}/uploads/testimonials/${initialValues.photo}`
        );
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (photo && photo.length > 0) {
      setPreview(URL.createObjectURL(photo[0]));
    }
  }, [photo]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.[0]) {
      setValue("photo", e.dataTransfer.files);
      setPreview(URL.createObjectURL(e.dataTransfer.files[0]));
    }
  };

  return (
    <>
      <style>{TF_CSS}</style>
      <form onSubmit={handleSubmit(onSubmit)} className="tf-form">
      {/* Header */}
      <div className="tf-section-header">
        <div className="tf-section-header__icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div className="tf-section-header__text">
          <h2>Testimonial Details</h2>
          <p>Fill in the information below to add a new testimonial</p>
        </div>
      </div>

      <div className="tf-grid">
        {/* Left column */}
        <div className="tf-left">
          <h3 className="tf-subheading">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Personal Information
          </h3>

          <div className="tf-row">
            <div className="tf-group">
              <label className="tf-label">
                Name <span className="tf-required">*</span>
              </label>
              <div className="tf-input-wrapper">
                <svg className="tf-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  className={`tf-input ${errors.name ? "error" : ""}`}
                  placeholder="Enter full name"
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              <p className="tf-error">{errors.name?.message}</p>
            </div>

            <div className="tf-group">
              <label className="tf-label">
                Designation <span className="tf-required">*</span>
              </label>
              <div className="tf-input-wrapper">
                <svg className="tf-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
                <input
                  className={`tf-input ${errors.designation ? "error" : ""}`}
                  placeholder="e.g. Founder & CEO"
                  {...register("designation", {
                    required: "Designation is required",
                  })}
                />
              </div>
              <p className="tf-error">{errors.designation?.message}</p>
            </div>
          </div>

          <div className="tf-group">
            <label className="tf-label">Organization / Company</label>
            <div className="tf-input-wrapper">
              <svg className="tf-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18" />
                <path d="M5 21V7l8-4v18" />
                <path d="M19 21V11l-6-4" />
              </svg>
              <input
                className="tf-input"
                placeholder="Acme Inc."
                {...register("company")}
              />
            </div>
          </div>

          <div className="tf-group">
            <label className="tf-label">
              Testimonial Message <span className="tf-required">*</span>
            </label>
            <div className="tf-input-wrapper">
              <svg className="tf-input-icon tf-input-icon--top" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <textarea
                rows={5}
                className={`tf-textarea ${errors.message ? "error" : ""}`}
                placeholder="What did they love about the experience?"
                {...register("message", { required: "Message is required" })}
              />
            </div>
            <p className="tf-error">{errors.message?.message}</p>
          </div>

          <div className="tf-row">
            <div className="tf-group">
              <label className="tf-label">Rating</label>
              <div className="tf-star-wrapper">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className="tf-star-btn"
                    onClick={() => setValue("rating", n)}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill={n <= rating ? "#f59e0b" : "none"}
                      stroke={n <= rating ? "#f59e0b" : "#cbd5e0"}
                      strokeWidth="1.5"
                    >
                      <path d="M12 2.5l2.9 6.2 6.6.7-5 4.7 1.4 6.6L12 17.6l-5.9 3.1 1.4-6.6-5-4.7 6.6-.7L12 2.5z" />
                    </svg>
                  </button>
                ))}
                <span className="tf-rating-text">{rating}/5</span>
                <input type="hidden" {...register("rating")} />
              </div>
            </div>

            <div className="tf-group">
              <label className="tf-label">Display Order</label>
              <div className="tf-input-wrapper">
                <svg className="tf-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
                <input
                  type="number"
                  min="1"
                  className="tf-input"
                  {...register("displayOrder")}
                />
              </div>
            </div>
          </div>

          {/* Visibility panel */}
          <div className="tf-panel">
            <h3 className="tf-panel__title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
              </svg>
              Status
            </h3>
            <p className="tf-panel__desc">
              Control whether this testimonial is featured or active.
            </p>

            <div className="tf-toggle-row">
              <label className="tf-toggle-btn">
                <input type="checkbox" {...register("featured")} />
                <span className="tf-toggle-track" />
                <span className="tf-toggle-label">Featured Testimonial</span>
              </label>

              <label className="tf-toggle-btn">
                <input type="checkbox" {...register("isActive")} />
                <span className="tf-toggle-track" />
                <span className="tf-toggle-label">Active</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right column — photo upload */}
        <div className="tf-right">
          <div className="tf-photo-header">
            <div className="tf-photo-header__left">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <h3>Photo</h3>
            </div>
            <span className="tf-badge">Optional</span>
          </div>

          <div
            className={`tf-dropzone ${dragOver ? "drag-over" : ""} ${preview ? "has-preview" : ""}`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
          >
            {preview ? (
              <div className="tf-preview">
                <img src={preview} alt="Preview" className="tf-preview__img" />
                <button
                  type="button"
                  className="tf-preview__remove"
                  onClick={() => {
                    setPreview(null);
                    setValue("photo", null);
                  }}
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="tf-dropzone__content">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="M17 8l-5-5-5 5" />
                  <path d="M12 3v12" />
                </svg>
                <p className="tf-dropzone__text">Drag &amp; drop a photo here</p>
                <p className="tf-dropzone__hint">or click to browse</p>
                <label className="tf-choose-btn">
                  Choose Photo
                  <input
                    type="file"
                    accept="image/*"
                    className="tf-dropzone__input"
                    {...register("photo")}
                  />
                </label>
              </div>
            )}
          </div>
          <p className="tf-photo-hint">Recommended: 400x400px, max 2MB</p>
        </div>
      </div>

      {/* Submit */}
      <div className="tf-actions">
        <button type="submit" disabled={loading} className="tf-submit-btn">
          {loading && <span className="tf-spinner" />}
          {loading ? "Saving..." : "Save Testimonial"}
        </button>
      </div>
      </form>
    </>
  );
};

export default TestimonialForm;