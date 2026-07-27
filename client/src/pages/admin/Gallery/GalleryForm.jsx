// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

// const GalleryForm = ({
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
//         description: initialValues.description || "",
//         category: initialValues.category || "",
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
//           )}/uploads/gallery/${initialValues.image}`
//         );
//       }
//     }
//   }, [initialValues, reset]);

//   useEffect(() => {
//     if (image && image.length > 0) {
//       const file = image[0];
//       setPreview(URL.createObjectURL(file));
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
//           Gallery Image *
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
//             className="mt-4 w-64 h-44 object-cover rounded-lg border"
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

//       {/* Description */}

//       <div>
//         <label className="block font-medium">
//           Description
//         </label>

//         <textarea
//           rows={5}
//           {...register("description")}
//           className="w-full border rounded-lg p-3 mt-2"
//         />
//       </div>

//       {/* Category */}

//       <div>
//         <label className="block font-medium">
//           Category
//         </label>

//         <select
//           {...register("category")}
//           className="w-full border rounded-lg p-3 mt-2"
//         >
//           <option value="">Select Category</option>
//           <option value="EVENT">Event</option>
//           <option value="WORKSHOP">Workshop</option>
//           <option value="PERFORMANCE">Performance</option>
//           <option value="CULTURAL_PROGRAM">
//             Cultural Program
//           </option>
//           <option value="TRAINING">Training</option>
//           <option value="MEETING">Meeting</option>
//           <option value="OTHER">Other</option>
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
//         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg disabled:opacity-50"
//       >
//         {loading ? "Saving..." : "Save Gallery"}
//       </button>
//     </form>
//   );
// };

// export default GalleryForm;

// src/pages/admin/Gallery/GalleryForm.jsx

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Image as ImageIcon,
  Upload,
  X,
  Check,
  Type,
  Hash,
  ToggleRight,
  ToggleLeft,
  AlignLeft,
  Folder,
  Tag,
} from "lucide-react";

import "./GalleryForm.css";

const GalleryForm = ({
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
      description: "",
      category: "",
      displayOrder: 1,
      isActive: true,
    },
  });

  const image = watch("image");
  const isActive = watch("isActive", true);

  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    if (initialValues && Object.keys(initialValues).length > 0) {
      reset({
        title: initialValues.title || "",
        description: initialValues.description || "",
        category: initialValues.category || "",
        displayOrder: initialValues.displayOrder || 1,
        isActive: initialValues.isActive !== undefined ? initialValues.isActive : true,
      });

      if (initialValues.image) {
        setPreview(`${IMAGE_BASE_URL}/uploads/gallery/${initialValues.image}`);
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

  const categories = [
    { value: "EVENT", label: "Event" },
    { value: "WORKSHOP", label: "Workshop" },
    { value: "PERFORMANCE", label: "Performance" },
    { value: "CULTURAL_PROGRAM", label: "Cultural Program" },
    { value: "TRAINING", label: "Training" },
    { value: "MEETING", label: "Meeting" },
    { value: "FESTIVAL", label: "Festival" },
    { value: "OTHER", label: "Other" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="gallery-form"
    >
      <div className="gallery-form__grid">
        {/* Left Column - Main Fields */}
        <div className="gallery-form__main">
          {/* Title */}
          <div className="form-group">
            <label className="form-group__label">
              Image Title <span className="required">*</span>
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
                placeholder="Enter image title"
                disabled={loading}
              />
            </div>
            {errors.title && (
              <p className="form-group__error">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-group__label">Description</label>
            <div className="form-group__input-wrapper">
              <AlignLeft size={18} className="input-icon" />
              <textarea
                rows={4}
                {...register("description")}
                className="form-group__textarea"
                placeholder="Brief description of the image (optional)"
                disabled={loading}
              />
            </div>
          </div>

          {/* Category */}
          <div className="form-group">
            <label className="form-group__label">Category</label>
            <div className="form-group__input-wrapper">
              <Folder size={18} className="input-icon" />
              <select
                {...register("category")}
                className="form-group__input form-group__select"
                disabled={loading}
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
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
        <div className="gallery-form__media">
          <div className="media-section">
            <div className="media-section__header">
              <div className="media-section__header-left">
                <ImageIcon size={20} />
                <h3>Gallery Image</h3>
              </div>
              <span className="media-section__badge">Required</span>
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
                    {...register("image", {
                      required: !initialValues?.image ? "Image is required" : false,
                    })}
                    className="media-dropzone__input"
                    disabled={loading}
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="dropzone-btn">
                    Choose Image
                  </label>
                  {errors.image && (
                    <p className="form-group__error">{errors.image.message}</p>
                  )}
                </div>
              ) : (
                <div className="media-preview">
                  <div className="media-preview__container">
                    <img
                      src={preview}
                      alt="Gallery preview"
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
              Recommended: 1200x800px (3:2 ratio), max 5MB
            </p>
          </div>
        </div>
      </div>

      {/* Form Actions */}
      <div className="gallery-form__actions">
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
              {isEdit ? "Update Gallery" : "Create Gallery"}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default GalleryForm;