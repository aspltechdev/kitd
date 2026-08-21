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

const TF_CSS = `
/* ============================================
   TESTIMONIAL FORM — KITD admin style
   ============================================ */

.tf-form {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
}

/* ---------- Section header ---------- */
.tf-section-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid #edf2f7;
}

.tf-section-header__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(139, 30, 63, 0.1);
  color: #8B1E3F;
  flex-shrink: 0;
}

.tf-section-header__text h2 {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 4px;
}

.tf-section-header__text p {
  font-size: 14px;
  color: #8a94a6;
  margin: 0;
}

/* ---------- Layout ---------- */
.tf-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 32px;
}

.tf-subheading {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 20px;
}

.tf-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.tf-group {
  margin-bottom: 20px;
}

.tf-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 6px;
}

.tf-required {
  color: #e53e3e;
  margin-left: 2px;
}

/* ---------- Inputs ---------- */
.tf-input-wrapper {
  position: relative;
}

.tf-input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #a0aec0;
  pointer-events: none;
  z-index: 1;
}

.tf-input-icon--top {
  top: 18px;
  transform: none;
}

.tf-input,
.tf-textarea {
  width: 100%;
  padding: 12px 14px 12px 44px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 14px;
  color: #1a1a1a;
  background: #fff;
  font-family: inherit;
  transition: all 0.25s ease;
  box-sizing: border-box;
}

.tf-textarea {
  resize: vertical;
  min-height: 110px;
  line-height: 20px;
}

.tf-input::placeholder,
.tf-textarea::placeholder {
  color: #a0aec0;
}

.tf-input:focus,
.tf-textarea:focus {
  outline: none;
  border-color: #8B1E3F;
  box-shadow: 0 0 0 3px rgba(139, 30, 63, 0.08);
}

.tf-input.error,
.tf-textarea.error {
  border-color: #e53e3e;
}

.tf-error {
  font-size: 12px;
  color: #e53e3e;
  margin: 4px 0 0;
  min-height: 15px;
}

/* ---------- Star rating ---------- */
.tf-star-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  background: #fff;
}

.tf-star-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  display: flex;
  transition: transform 0.15s ease;
}

.tf-star-btn:hover {
  transform: scale(1.15);
}

.tf-rating-text {
  margin-left: 8px;
  font-size: 13px;
  font-weight: 700;
  color: #f59e0b;
}

/* ---------- Status panel ---------- */
.tf-panel {
  border-radius: 16px;
  padding: 20px;
  background: linear-gradient(135deg, #f0fdf4, #ecfdf5);
  border: 1px solid #d1fae5;
  margin-top: 8px;
}

.tf-panel__title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 6px;
}

.tf-panel__desc {
  font-size: 13px;
  color: #4a5568;
  margin: 0 0 16px;
}

.tf-toggle-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.tf-toggle-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

.tf-toggle-btn input {
  display: none;
}

.tf-toggle-track {
  position: relative;
  width: 40px;
  height: 22px;
  border-radius: 999px;
  background: #cbd5e0;
  transition: background 0.2s ease;
}

.tf-toggle-track::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.tf-toggle-btn input:checked + .tf-toggle-track {
  background: #8B1E3F;
}

.tf-toggle-btn input:checked + .tf-toggle-track::after {
  transform: translateX(18px);
}

.tf-toggle-label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

/* ---------- Photo upload (right column) ---------- */
.tf-photo-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.tf-photo-header__left {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1a1a1a;
}

.tf-photo-header__left svg {
  color: #8B1E3F;
}

.tf-photo-header__left h3 {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
}

.tf-badge {
  font-size: 11px;
  font-weight: 600;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  padding: 3px 12px;
  border-radius: 50px;
}

.tf-dropzone {
  border: 2px dashed #e2e8f0;
  border-radius: 14px;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #fafbfc;
  transition: all 0.3s ease;
}

.tf-dropzone.drag-over {
  border-color: #8B1E3F;
  background: rgba(139, 30, 63, 0.04);
  transform: scale(1.01);
}

.tf-dropzone.has-preview {
  padding: 8px;
}

.tf-dropzone__content {
  text-align: center;
  color: #a0aec0;
}

.tf-dropzone__text {
  font-size: 15px;
  font-weight: 500;
  color: #4a5568;
  margin: 10px 0 4px;
}

.tf-dropzone__hint {
  font-size: 13px;
  color: #a0aec0;
  margin: 0;
}

.tf-dropzone__input {
  display: none;
}

.tf-choose-btn {
  display: inline-block;
  margin-top: 14px;
  padding: 10px 22px;
  background: #8B1E3F;
  color: #fff;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.tf-choose-btn:hover {
  background: #6d1832;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(139, 30, 63, 0.3);
}

.tf-preview {
  width: 100%;
  text-align: center;
}

.tf-preview__img {
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  border-radius: 10px;
  display: block;
}

.tf-preview__remove {
  margin-top: 12px;
  padding: 8px 18px;
  background: #e53e3e;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tf-preview__remove:hover {
  background: #c53030;
}

.tf-photo-hint {
  text-align: center;
  font-size: 12px;
  color: #a0aec0;
  margin-top: 10px;
}

/* ---------- Submit ---------- */
.tf-actions {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #edf2f7;
  display: flex;
  justify-content: flex-end;
}

.tf-submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 220px;
  padding: 14px 32px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #8B1E3F, #C41E3A);
  box-shadow: 0 4px 15px rgba(139, 30, 63, 0.3);
  cursor: pointer;
  transition: all 0.25s ease;
}

.tf-submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(139, 30, 63, 0.4);
}

.tf-submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.tf-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: tf-spin 0.6s linear infinite;
}

@keyframes tf-spin {
  to {
    transform: rotate(360deg);
  }
}

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .tf-grid {
    grid-template-columns: 1fr;
  }

  .tf-right {
    order: -1;
  }
}

@media (max-width: 560px) {
  .tf-form {
    padding: 20px;
  }

  .tf-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .tf-actions {
    justify-content: stretch;
  }

  .tf-submit-btn {
    width: 100%;
  }
}
`;

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