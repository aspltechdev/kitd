// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// const ActivityForm = ({
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

//   const image = watch("image");

//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     if (initialValues) {
//       reset({
//         title: initialValues.title || "",
//         shortDescription: initialValues.shortDescription || "",
//         description: initialValues.description || "",
//         date: initialValues.date
//           ? initialValues.date.substring(0, 10)
//           : "",
//         location: initialValues.location || "",
//         displayOrder: initialValues.displayOrder || 1,
//         isActive:
//           initialValues.isActive === undefined
//             ? true
//             : initialValues.isActive,
//       });

//       if (initialValues.image) {
//         setPreview(
//           `${import.meta.env.VITE_API_BASE_URL.replace(
//             "/api",
//             ""
//           )}/uploads/activities/${initialValues.image}`
//         );
//       }
//     }
//   }, [initialValues, reset]);

//   useEffect(() => {
//     if (image && image.length > 0) {
//       setPreview(URL.createObjectURL(image[0]));
//     }
//   }, [image]);

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white rounded-xl shadow p-6 space-y-6"
//     >
//       {/* Image */}

//       <div>
//         <label className="block font-medium mb-2">
//           Activity Image *
//         </label>

//         <input
//           type="file"
//           accept="image/*"
//           {...register("image")}
//         />

//         {preview && (
//           <img
//             src={preview}
//             alt="Preview"
//             className="mt-4 w-60 rounded-lg border"
//           />
//         )}
//       </div>

//       {/* Title */}

//       <div>
//         <label className="block font-medium">
//           Title *
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

//       {/* Full Description */}

//       <div>
//         <label className="block font-medium">
//           Description
//         </label>

//         <textarea
//           rows={6}
//           {...register("description")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Date & Location */}

//       <div className="grid md:grid-cols-2 gap-5">

//         <div>
//           <label className="block font-medium">
//             Activity Date
//           </label>

//           <input
//             type="date"
//             {...register("date")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">
//             Location
//           </label>

//           <input
//             {...register("location")}
//             className="w-full border rounded-lg p-3 mt-2"
//           />
//         </div>

//       </div>

//       {/* Display Order */}

//       <div>
//         <label className="block font-medium">
//           Display Order
//         </label>

//         <input
//           type="number"
//           {...register("displayOrder")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Status */}

//       <div className="flex items-center gap-3">
//         <input
//           type="checkbox"
//           {...register("isActive")}
//         />

//         <label>Active</label>
//       </div>

//       {/* Submit */}

//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
//       >
//         {loading ? "Saving..." : "Save Activity"}
//       </button>
//     </form>
//   );
// };

// export default ActivityForm;

// src/pages/admin/Activity/ActivityForm.jsx

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Image as ImageIcon,
  Upload,
  X,
  Check,
  Calendar,
  MapPin,
  Type,
  Hash,
  ToggleRight,
  ToggleLeft,
  AlignLeft,
  FileText,
} from "lucide-react";

import "./ActivityForm.css";

const ActivityForm = ({
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
      shortDescription: "",
      description: "",
      date: "",
      location: "",
      displayOrder: 1,
      isActive: true,
    },
  });

  const image = watch("image");
  const isActive = watch("isActive", true);

  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      reset({
        title: initialValues.title || "",
        shortDescription: initialValues.shortDescription || "",
        description: initialValues.description || "",
        date: initialValues.date ? initialValues.date.substring(0, 10) : "",
        location: initialValues.location || "",
        displayOrder: initialValues.displayOrder || 1,
        isActive: initialValues.isActive !== undefined ? initialValues.isActive : true,
      });

      if (initialValues.image) {
        setPreview(`${IMAGE_BASE_URL}/uploads/activities/${initialValues.image}`);
        setFileName(initialValues.image);
      }
    }
  }, [initialValues, reset]);

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
    }
  }, [image]);

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
      setValue("image", files);
    }
  };

  const clearFile = () => {
    setPreview(null);
    setFileName("");
    setValue("image", []);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="activity-form"
    >
      <div className="activity-form__grid">
        {/* Left Column - Main Fields */}
        <div className="activity-form__main">
          {/* Title */}
          <div className="form-group">
            <label className="form-group__label">
              Activity Title <span className="required">*</span>
            </label>
            <div className="form-group__input-wrapper">
              <Type size={18} className="input-icon" />
              <input
                {...register("title", {
                  required: "Title is required",
                  maxLength: {
                    value: 100,
                    message: "Title must be less than 100 characters",
                  },
                })}
                className={`form-group__input ${errors.title ? "error" : ""}`}
                placeholder="Enter activity title"
                disabled={loading}
              />
            </div>
            {errors.title && (
              <p className="form-group__error">{errors.title.message}</p>
            )}
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
                placeholder="Brief description of the activity (max 200 characters)"
                disabled={loading}
                maxLength={200}
              />
            </div>
            <span className="form-group__hint">Maximum 200 characters</span>
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
                placeholder="Detailed description of the activity, including schedule, speakers, and key highlights..."
                disabled={loading}
              />
            </div>
          </div>

          {/* Date & Location */}
          <div className="form-group form-group--inline">
            <div className="form-group__half">
              <label className="form-group__label">
                <Calendar size={16} className="inline-icon" />
                Activity Date
              </label>
              <div className="form-group__input-wrapper">
                <Calendar size={18} className="input-icon" />
                <input
                  type="date"
                  {...register("date")}
                  className="form-group__input"
                  disabled={loading}
                />
              </div>
            </div>
            <div className="form-group__half">
              <label className="form-group__label">
                <MapPin size={16} className="inline-icon" />
                Location
              </label>
              <div className="form-group__input-wrapper">
                <MapPin size={18} className="input-icon" />
                <input
                  {...register("location")}
                  className="form-group__input"
                  placeholder="Enter location"
                  disabled={loading}
                />
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
        </div>

        {/* Right Column - Image Upload */}
        <div className="activity-form__media">
          <div className="media-section">
            <div className="media-section__header">
              <div className="media-section__header-left">
                <ImageIcon size={20} />
                <h3>Activity Image</h3>
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
                  <p className="dropzone-text">Drag & drop an image here</p>
                  <span className="dropzone-hint">or click to browse</span>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("image")}
                    className="media-dropzone__input"
                    disabled={loading}
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="dropzone-btn">
                    Choose Image
                  </label>
                </div>
              ) : (
                <div className="media-preview">
                  <div className="media-preview__container">
                    <img
                      src={preview}
                      alt="Activity preview"
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
      <div className="activity-form__actions">
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
              {isEdit ? "Update Activity" : "Create Activity"}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ActivityForm;